#!/usr/bin/env python3
"""
Zion Email Autopilot — triage + reply/follow-up drafts + memory extraction.

Safe-by-default:
- sendEnabled=False → no live sends, only drafts and memory updates.
- Uses gog CLI for Gmail access (proven healthy in this env).
- Writes structured outputs under automation/email_memory/ and outreach_monitor/processed/.
"""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path
from datetime import datetime, timezone

# ---------------------------------------------------------------------------
# Paths / repo root
# ---------------------------------------------------------------------------
REPO = Path(__file__).resolve().parents[2]
if str(REPO) not in sys.path:
    sys.path.insert(0, str(REPO))

SEND_ENABLED = os.environ.get("ZION_EMAIL_SEND_ENABLED", "0") == "1"
ACCOUNT = os.environ.get("ZION_EMAIL_ACCOUNT", "kleber@ziontechgroup.com")

# ---------------------------------------------------------------------------
# Outputs
# ---------------------------------------------------------------------------
EMAIL_MEMORY_DIR = REPO / "automation" / "email_memory"
EMAIL_MEMORY_DIR.mkdir(parents=True, exist_ok=True)

MEMORY_INBOX = EMAIL_MEMORY_DIR / "inbox_sightings.jsonl"
MEMORY_CLASSIFICATIONS = EMAIL_MEMORY_DIR / "classifications.jsonl"
MEMORY_HISTORY = EMAIL_MEMORY_DIR / "success_history.jsonl"
MEMORY_CONTENT_IDEAS = EMAIL_MEMORY_DIR / "content_ideas.jsonl"
MEMORY_LATEST = EMAIL_MEMORY_DIR / "latest_summary.json"

LEDGER_REPLY = REPO / "outreach_monitor" / "processed" / "reply_to_revenue_ledger.jsonl"
PENDING_QUEUE = REPO / "outreach_monitor" / "processed" / "pending_ceo_drafts.jsonl"
HOT_FOLLOWUP_LEDGER = REPO / "outreach_monitor" / "processed" / "hot_followup_reply_ledger.jsonl"
HOT_FOLLOWUP_SENT = REPO / "hot-followup-sent.json"

for p in [MEMORY_INBOX, MEMORY_CLASSIFICATIONS, MEMORY_HISTORY, MEMORY_CONTENT_IDEAS, LEDGER_REPLY, PENDING_QUEUE, HOT_FOLLOWUP_LEDGER]:
    p.parent.mkdir(parents=True, exist_ok=True)
    if not p.exists():
        p.touch()

# ---------------------------------------------------------------------------
# gog CLI runner
# ---------------------------------------------------------------------------

def gog(*args: str, timeout: int = 60) -> str:
    cmd = ["gog", *args]
    try:
        out = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout,
            cwd=str(REPO),
        )
        return out.stdout
    except subprocess.TimeoutExpired:
        return ""
    except Exception:
        return ""


def gog_json(*args: str, timeout: int = 60) -> list | dict:
    out = gog(*args, "--json", "--no-input", timeout=timeout)
    try:
        return json.loads(out)
    except json.JSONDecodeError:
        return []


# ---------------------------------------------------------------------------
# Domain / noise filters
# ---------------------------------------------------------------------------
SKIP_DOMAINS = {
    "github.com", "notifications.github.com", "gitlab.com", "jira.atlassian.com",
    "trello.com", "linear.app", "figma.com", "netlify.com", "vercel.com",
    "docs.google.com", "calendar.google.com", "meet.google.com",
}
SKIP_SENDERS_SUBSTR = ["noreply", "no-reply", "mailer-daemon", "notifications@", "bounce"]


# ---------------------------------------------------------------------------
# Lightweight classifiers
# ---------------------------------------------------------------------------

def classify_message(message_id: str, subject: str, sender: str, body: str) -> dict:
    text = f"{subject}\n{body}".lower()
    label = "other"
    priority = "low"
    actions: list[str] = []

    if any(k in text for k in ["unsubscribe", "remove me", "do not contact", "please stop"]):
        label = "suppress"
        priority = "high"
        actions.append("suppress_thread")
        return {"label": label, "priority": priority, "actions": actions, "reason": "explicit stop/unsubscribe request"}

    if any(k in text for k in [" partnership ", " collaboration ", " proposal ", "opportunity", "projeto", "parceria"]):
        label = "lead_opportunity"
        priority = "high"
        actions.extend(["draft_reply", "store_history"])
        return {"label": label, "priority": priority, "actions": actions, "reason": "partnership/collaboration signal"}

    if text.startswith("re:") or subject.lower().startswith("re:"):
        label = "inbound_reply"
        priority = "high"
        actions.extend(["draft_reply", "store_history"])
        return {"label": label, "priority": priority, "actions": actions, "reason": "existing conversation reply"}

    if any(k in text for k in ["quote", "orçamento", "budget", "rfq", "solicitação de proposta"]):
        label = "rfq"
        priority = "high"
        actions.extend(["draft_reply", "store_history"])
        return {"label": label, "priority": priority, "actions": actions, "reason": "budget/quote request"}

    if any(k in text for k in ["support", "suporte", "ticket", "erro", "bug", "incidente"]):
        label = "support"
        priority = "medium"
        actions.append("route_support")
        return {"label": label, "priority": priority, "actions": actions, "reason": "support/systems signal"}

    if any(k in text for k in ["newsletter", "notifications", "promo", "promotions"]):
        label = "noise"
        priority = "low"
        actions.append("archive")
        return {"label": label, "priority": priority, "actions": actions, "reason": "newsletter/promo noise"}

    return {"label": label, "priority": priority, "actions": actions, "reason": "default catch-all"}


def extract_email(from_header: str) -> str:
    m = re.search(r"<([^>]+)>", from_header)
    return (m.group(1) if m else from_header).lower()


def detect_lang(text: str) -> str:
    t = text.lower()
    if any(w in t for w in ["obrigado", "projeto", "serviços", "abraço", "olá", "oi"]):
        return "pt"
    if any(w in t for w in ["gracias", "oportunidad", "proyecto", "servicios", "saludos"]):
        return "es"
    return "en"


def build_reply_draft(name: str, subject: str, lang: str = "pt") -> str:
    if lang == "es":
        return (
            f"{name},\n\n"
            "Gracias por el contacto. Veo potencial para avanzar juntos.\n\n"
            "Servicios de IA y automatización: https://ziontechgroup.com\n"
            "Agenda una llamada: https://calendly.com/kleber-ziontechgroup\n\n"
            "Saludos,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        )
    if lang == "pt":
        return (
            f"{name},\n\n"
            "Obrigado pelo contato. Vejo potencial para avançarmos juntos.\n\n"
            "Serviços de IA e automação: https://ziontechgroup.com\n"
            "Agende uma conversa: https://calendly.com/kleber-ziontechgroup\n\n"
            "Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
        )
    return (
        f"{name},\n\n"
        "Thanks for reaching out. I see strong potential to move forward together.\n\n"
        "AI & automation services: https://ziontechgroup.com\n"
        "Book a call: https://calendly.com/kleber-ziontechgroup\n\n"
        "Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\nhttps://ziontechgroup.com"
    )


# ---------------------------------------------------------------------------
# Ledger / suppression helpers
# ---------------------------------------------------------------------------

def load_jsonl(path: Path):
    if not path.exists():
        return []
    out = []
    for line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = line.strip()
        if line:
            try:
                out.append(json.loads(line))
            except json.JSONDecodeError:
                pass
    return out


def append_jsonl(path: Path, entry: dict):
    with path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")


def already_sent_to(contact: str, within_seconds: int = 48 * 3600) -> bool:
    now = int(time.time())
    ledger = load_jsonl(LEDGER_REPLY)[-200:]
    return any(
        (now - int(r.get("ts", 0))) < within_seconds and (r.get("to") or "").lower() == contact.lower()
        for r in ledger
    )


# ---------------------------------------------------------------------------
# Memory helpers
# ---------------------------------------------------------------------------

def store_classification(message_id: str, classification: dict):
    append_jsonl(MEMORY_CLASSIFICATIONS, {
        "ts": int(time.time()),
        "message_id": message_id,
        "classification": classification,
    })


def store_history(contact: str, subject: str, classification: dict, body_snippet: str = ""):
    append_jsonl(MEMORY_HISTORY, {
        "ts": int(time.time()),
        "contact": contact,
        "subject": subject,
        "label": classification.get("label"),
        "snippet": body_snippet[:500],
    })


def store_content_idea(source_thread_id: str, title_hint: str, body_hint: str):
    append_jsonl(MEMORY_CONTENT_IDEAS, {
        "ts": int(time.time()),
        "source_thread_id": source_thread_id,
        "title_hint": title_hint,
        "body_hint": body_hint[:800],
    })


def write_latest_summary(summary: dict):
    summary["updatedAt"] = datetime.now(timezone.utc).isoformat()
    MEMORY_LATEST.write_text(json.dumps(summary, indent=2, ensure_ascii=False))


# ---------------------------------------------------------------------------
# Hot-follow-up helpers
# ---------------------------------------------------------------------------

def load_hot_sent() -> dict:
    try:
        data = json.loads(HOT_FOLLOWUP_SENT.read_text(encoding="utf-8") or "{}")
        if isinstance(data, list):
            return {str(item.get("thread_id")): item for item in data if isinstance(item, dict)}
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}


def save_hot_sent(state: dict):
    HOT_FOLLOWUP_SENT.write_text(json.dumps(state, ensure_ascii=False, indent=2))


def record_hot_sent(thread_id: str, message_id: str, contact: str, subject: str, mode: str):
    state = load_hot_sent()
    state[thread_id] = {
        "thread_id": thread_id,
        "message_id": message_id,
        "contact": contact,
        "subject": subject,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "mode": mode,
    }
    save_hot_sent(state)


# ---------------------------------------------------------------------------
# Service-content helpers
# ---------------------------------------------------------------------------

SERVICE_LINES = [
    "AI Automation & Integration",
    "Cloud Migration & FinOps",
    "Zero Trust Cybersecurity",
    "Computer Vision Inspection",
    "Platform Modernization",
    "Data Analytics & BI",
    "IoT & Edge Solutions",
    "Blockchain & Smart Contracts",
]


def generate_service_content(classification: dict, body_hint: str) -> dict:
    title = "How AI Automation Drives Real Efficiency — Zion Tech Group"
    body = (
        "At Zion Tech Group, we help companies turn AI into measurable operational results. "
        "Our teams work across AI automation, cloud, cybersecurity, data analytics, IoT, and blockchain. "
        f"This note was inspired by recent client conversations about {classification.get('reason', 'practical AI delivery')}. "
        "If this matches your current priorities, let’s schedule a short planning call: "
        "https://calendly.com/kleber-ziontechgroup"
    )
    return {
        "title": title,
        "body": body,
        "services_mentioned": SERVICE_LINES[:4],
        "cta": "https://calendly.com/kleber-ziontechgroup",
        "source": "email_autopilot",
    }


# ---------------------------------------------------------------------------
# Main loop
# ---------------------------------------------------------------------------

def run_inbox_scan(max_results: int = 25) -> dict:
    summary = {
        "scanned": 0,
        "skipped_noise": 0,
        "skipped_sent": 0,
        "classified": {},
        "drafts_created": 0,
        "memory_written": 0,
        "content_ideas": 0,
        "errors": [],
    }

    try:
        hits = gog_json("gmail", "search", f"in:anywhere newer_than:1d", f"--max={max_results}", "--account", ACCOUNT)
    except Exception as e:
        summary["errors"].append({"search": str(e)})
        write_latest_summary(summary)
        return summary

    if not isinstance(hits, list):
        # gog may return {"threads":[...], "nextPageToken":...}
        try:
            hits = (hits or {}).get("threads", [])
        except Exception:
            hits = []
    if not isinstance(hits, list):
        summary["errors"].append({"search": "unexpected gog output"})
        write_latest_summary(summary)
        return summary

    seen_ids: set[str] = set()
    seen_threads: set[str] = set()
    summary["scanned"] = len(hits)

    for hit in hits:
        mid = hit.get("id") or hit.get("messageId")
        tid = hit.get("threadId") or mid
        if not mid or mid in seen_ids:
            continue
        seen_ids.add(mid)
        if tid in seen_threads:
            continue
        seen_threads.add(tid)

        try:
            msg = gog_json("gmail", "get", str(mid), "--account", ACCOUNT)
        except Exception as e:
            summary["errors"].append({"gmail_get": str(e)})
            continue

        if not isinstance(msg, dict):
            continue

        headers = msg.get("headers") or {}
        if isinstance(headers, dict):
            subject = headers.get("Subject", "")
            sender = headers.get("From", "")
        else:
            headers = {h.get("name", ""): h.get("value", "") for h in (msg.get("payload", {}).get("headers", []) or [])}
            subject = headers.get("Subject", "")
            sender = headers.get("From", "")
        contact = extract_email(sender)
        body = _extract_body(msg)

        append_jsonl(MEMORY_INBOX, {
            "ts": int(time.time()),
            "message_id": mid,
            "thread_id": tid,
            "from": contact,
            "subject": subject,
            "snippet": body[:300],
        })

        if any(s in contact for s in SKIP_SENDERS_SUBSTR) or contact.endswith(tuple(SKIP_DOMAINS)):
            summary["skipped_noise"] += 1
            continue

        classification = classify_message(mid, subject, sender, body)
        store_classification(mid, classification)
        summary["classified"][classification.get("label", "other")] = (
            summary["classified"].get(classification.get("label", "other"), 0) + 1
        )

        actions = classification.get("actions", [])

        if "suppress_thread" in actions:
            append_jsonl(PENDING_QUEUE, {
                "lead_id": mid,
                "thread_id": tid,
                "message_id": mid,
                "from": contact,
                "subject": subject,
                "status": "suppress_request",
                "mode": "manual_review",
                "created_at": datetime.now(timezone.utc).isoformat(),
            })
            store_history(contact, subject, classification, body)
            summary["memory_written"] += 1
            continue

        if "archive" in actions:
            summary["skipped_noise"] += 1
            continue

        if already_sent_to(contact):
            summary["skipped_sent"] += 1
            continue

        if "draft_reply" in actions:
            name = contact.split("@")[0].replace(".", " ").title()
            lang = detect_lang(f"{subject}\n{body}")
            draft_body = build_reply_draft(name, subject, lang)

            append_jsonl(PENDING_QUEUE, {
                "lead_id": mid,
                "thread_id": tid,
                "message_id": mid,
                "from": contact,
                "name": name,
                "subject": f"Re: {subject}",
                "lang": lang,
                "draft": draft_body,
                "status": "ready_to_send",
                "dedup_key": re.sub(r"[^a-z0-9]", "", contact),
                "created_at": datetime.now(timezone.utc).isoformat(),
                "mode": "dry_run",
            })
            summary["drafts_created"] += 1

        if "store_history" in actions:
            store_history(contact, subject, classification, body)
            summary["memory_written"] += 1

        if classification.get("label") in {"lead_opportunity", "rfq", "inbound_reply"}:
            content = generate_service_content(classification, body)
            store_content_idea(tid, content["title"], content["body"])
            summary["content_ideas"] += 1

    write_latest_summary(summary)
    return summary


def run_hot_followup_scan(max_results: int = 20) -> dict:
    summary = {
        "hot_threads_found": 0,
        "drafts_created": 0,
        "skipped_sent": 0,
        "errors": [],
    }

    try:
        hits = gog_json("gmail", "search", 'label:"!!!!HOT FOLLOW-UP"', f"--max={max_results}", "--account", ACCOUNT)
    except Exception as e:
        summary["errors"].append({"hot_search": str(e)})
        return summary

    if not isinstance(hits, list):
        summary["errors"].append({"hot_search": "unexpected gog output"})
        return summary

    hot_sent = load_hot_sent()
    for hit in hits:
        tid = hit.get("threadId") or hit.get("id")
        mid = hit.get("id")
        if not mid or not tid:
            continue
        summary["hot_threads_found"] += 1

        if tid in hot_sent:
            summary["skipped_sent"] += 1
            continue

        try:
            msg = gog_json("gmail", "get", str(mid), "--account", ACCOUNT)
        except Exception:
            continue

        if not isinstance(msg, dict):
            continue

        headers = {h["name"]: h["value"] for h in msg.get("payload", {}).get("headers", [])}
        subject = headers.get("Subject", "Following up — Zion Tech Group")
        sender = headers.get("From", "")
        contact = extract_email(sender)
        body = _extract_body(msg)
        lang = detect_lang(f"{subject}\n{body}")
        name = contact.split("@")[0].replace(".", " ").title()

        draft_body = build_reply_draft(name, subject, lang)
        append_jsonl(PENDING_QUEUE, {
            "lead_id": mid,
            "thread_id": tid,
            "message_id": mid,
            "from": contact,
            "name": name,
            "subject": f"Re: {subject}",
            "lang": lang,
            "draft": draft_body,
            "status": "ready_to_send",
            "dedup_key": re.sub(r"[^a-z0-9]", "", contact),
            "created_at": datetime.now(timezone.utc).isoformat(),
            "mode": "dry_run",
        })
        record_hot_sent(tid, mid, contact, subject, "dry_run")
        append_jsonl(HOT_FOLLOWUP_LEDGER, {
            "ts": int(time.time()),
            "thread_id": tid,
            "message_id": mid,
            "contact": contact,
            "subject": subject,
            "status": "drafted",
            "avoid_duplicate": True,
            "dedup_key": re.sub(r"[^a-z0-9]", "", contact),
            "mode": "dry_run",
        })
        summary["drafts_created"] += 1

    return summary


# ---------------------------------------------------------------------------
# Body extractor
# ---------------------------------------------------------------------------

def _extract_body(msg: dict) -> str:
    import base64
    if isinstance(msg.get("body"), str) and msg.get("body"):
        return msg["body"]
    pl = msg.get("payload", {})
    if pl.get("body", {}).get("data"):
        return base64.urlsafe_b64decode(pl["body"]["data"]).decode("utf-8", errors="ignore")
    for part in pl.get("parts", []) or []:
        if part.get("mimeType") == "text/plain" and part.get("body", {}).get("data"):
            return base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
        if "parts" in part:
            nested = _extract_body({"payload": part})
            if nested:
                return nested
    return ""


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    mode = "LIVE SEND" if SEND_ENABLED else "DRY RUN"
    print(f"[email_autopilot] mode={mode} account={ACCOUNT} repo={REPO}")

    inbox = run_inbox_scan()
    hot = run_hot_followup_scan()

    combined = {
        "inbox": inbox,
        "hot_followup": hot,
        "sendEnabled": SEND_ENABLED,
    }
    print(json.dumps(combined, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
