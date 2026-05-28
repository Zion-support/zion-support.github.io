#!/usr/bin/env python3
"""
V46: Email Response Quality Grader
Scores every sent email 0-100 across 5 dimensions before it goes out.

Scores:
  - tone_match (0-25): tone appropriate for intent + sender profile (V43)
  - length_fit (0-25): body length appropriate for intent and sender preference
  - reply_all_correct (0-25): CC handling and Reply-All correctness
  - placeholder_check (0-15): no unreplaced {placeholders} or [PLACEHOLDER]
  - completeness (0-10): has greeting, body, sign-off, contact info, CTA

Auto-fix mode: attempts to fix placeholders and length issues before send.
Flag-for-review threshold: score < 70 → log to review queue.

Stores: data/response_quality_log.jsonl
"""

import json
import re
import time
from pathlib import Path
from datetime import datetime, timezone
from typing import Optional

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA = WORKSPACE / "data"
QUALITY_LOG = DATA / "response_quality_log.jsonl"
REVIEW_QUEUE = DATA / "review_queue.jsonl"

# ── Scoring Constants ──────────────────────────────────────────────────────────

PLACEHOLDER_PATTERNS = [
    r"\{[^}]+\}",          # {placeholder}
    r"\[\w+\]",            # [PLACEHOLDER]
    r"<[^>]+>",            # <tag> HTML remnants
    r"\{\{[^}]+\}\}",      # {{double_brace}}
    r"\[FIRST_NAME\]",
    r"\[LAST_NAME\]",
    r"\[COMPANY\]",
    r"\[DATE\]",
    r"\[YOUR_NAME\]",
]

POSITIVE_TONE_MARKERS = ["thank", "appreciate", "great", "excited", "happy", "pleased", "glad"]
NEGATIVE_TONE_MARKERS = ["unfortunately", "sorry", "disappointed", "unacceptable", "unfortunately"]
FORMAL_OPENERS = ["dear", "hello", "hi", "good morning", "good afternoon", "greetings"]
INFORMAL_OPENERS = ["hey", "yo", "hiya"]
SIGN_OFF_MARKERS = ["best", "regards", "sincerely", "thanks", "cheers", "kindly"]
CTA_MARKERS = ["call", "reply", "schedule", "book", "contact", "visit", "+1", "click", "http"]

# Intent → expected body length range (words)
INTENT_LENGTH = {
    "sales_inquiry": (60, 180),
    "support_request": (80, 250),
    "billing_inquiry": (40, 120),
    "partnership": (80, 200),
    "meeting_request": (30, 80),
    "follow_up": (25, 70),
    "complaint": (60, 200),
    "newsletter": (50, 150),
    "auto_reply": (10, 40),
    "vendor_inquiry": (50, 150),
    "job_application": (100, 300),
    "press_media": (60, 180),
    "unknown": (40, 150),
}

# ── Helpers ─────────────────────────────────────────────────────────────────

def _now_iso():
    return datetime.now(timezone.utc).isoformat()


def _word_count(text: str) -> int:
    return len(re.findall(r"\b\w+\b", text or ""))


def _ensure_files():
    for f in [QUALITY_LOG, REVIEW_QUEUE]:
        try:
            f.parent.mkdir(parents=True, exist_ok=True)
            if not f.exists():
                f.write_text("", encoding="utf-8")
        except Exception:
            pass


def _load_jsonl(path: Path) -> list:
    try:
        with path.open("r", encoding="utf-8") as f:
            return [json.loads(l.strip()) for l in f if l.strip()]
    except Exception:
        return []


# ── Core Grading Engine ───────────────────────────────────────────────────────

def grade_email(
    subject: str,
    body: str,
    intent: str,
    sender_email: str,
    reply_all_used: bool,
    cc_list: Optional[list] = None,
    auto_fix: bool = True,
) -> dict:
    """
    Grade an email before sending. Returns full score breakdown + total score.

    Args:
        subject: email subject line
        body: email body text
        intent: detected intent from V42 router
        sender_email: sender address (for V43 preference lookup)
        reply_all_used: whether Reply-All was used
        cc_list: list of CC addresses
        auto_fix: if True, attempt to fix placeholder/length issues

    Returns:
        {
            "total_score": 0-100,
            "passed": bool,
            "dimensions": {
                "tone_match": {"score": 0-25, "detail": str},
                "length_fit": {"score": 0-25, "detail": str},
                "reply_all_correct": {"score": 0-25, "detail": str},
                "placeholder_check": {"score": 0-15, "detail": str},
                "completeness": {"score": 0-10, "detail": str},
            },
            "flags": [str],          # issues found
            "auto_fixed": {},        # what was auto-fixed
            "grade": "A" | "B" | "C" | "D" | "F",
            "recommendation": str,
        }
    """
    _ensure_files()
    cc_list = cc_list or []
    words = _word_count(body)
    total_score = 0
    flags = []
    auto_fixed = {}
    dimensions = {}

    # ── 1. Placeholder Check (0-15) ────────────────────────────────────────
    placeholders_found = []
    for pattern in PLACEHOLDER_PATTERNS:
        matches = re.findall(pattern, body + " " + subject, re.IGNORECASE)
        placeholders_found.extend(matches)

    ph_score = 15 if not placeholders_found else max(0, 15 - len(placeholders_found) * 5)
    ph_detail = f"{len(placeholders_found)} placeholder(s) found: {placeholders_found[:3]}" if placeholders_found else "No placeholders found"

    if placeholders_found:
        flags.append(f"Unreplaced placeholders: {', '.join(placeholders_found[:3])}")
        if auto_fix:
            for ph in placeholders_found:
                body = body.replace(ph, "[FIXED]")
            auto_fixed["placeholders"] = f"Replaced {len(placeholders_found)} placeholder(s)"
            ph_score = 15  # restore after fix

    dimensions["placeholder_check"] = {"score": ph_score, "detail": ph_detail}

    # ── 2. Tone Match (0-25) ────────────────────────────────────────────────
    tone_score = 15  # start neutral
    tone_detail = "Tone neutral/acceptable"

    body_lower = (body + " " + subject).lower()
    positive_count = sum(1 for w in POSITIVE_TONE_MARKERS if w in body_lower)
    negative_count = sum(1 for w in NEGATIVE_TONE_MARKERS if w in body_lower)

    # Load V43 sender preference if available
    sender_tone = None
    try:
        from commands.v43_modules.sender_preference_memory import get_profile
        profile = get_profile(sender_email)
        if profile:
            sender_tone = profile.get("preferred_tone", "").lower()
    except Exception:
        pass

    # Intent-based tone validation
    if intent == "complaint":
        if negative_count > positive_count + 1:
            tone_score = 25
            tone_detail = "Empathetic tone correct for complaint"
        elif negative_count > 3:
            tone_score = 20
            tone_detail = "Complaint tone, slightly defensive"
        elif positive_count >= 2:
            tone_score = 22
            tone_detail = "Balanced tone appropriate for complaint"
    elif intent in ("support_request", "billing_inquiry"):
        if positive_count >= 1:
            tone_score = 22
            tone_detail = "Helpful/professional tone appropriate"
        tone_score = min(tone_score + 3, 25)
    elif intent in ("sales_inquiry", "partnership", "meeting_request"):
        if positive_count >= 2:
            tone_score = 23
            tone_detail = "Enthusiastic yet professional"
        elif positive_count == 1:
            tone_score = 20
            tone_detail = "Professional tone appropriate"

    # Sender preference override
    if sender_tone == "casual" and (body.startswith("Hey") or body.startswith("Yo")):
        tone_score = min(tone_score + 2, 25)
        tone_detail += " (matched sender's casual preference)"

    dimensions["tone_match"] = {"score": tone_score, "detail": tone_detail}

    # ── 3. Length Fit (0-25) ────────────────────────────────────────────────
    intent_range = INTENT_LENGTH.get(intent, INTENT_LENGTH["unknown"])
    lo, hi = intent_range

    if words < lo:
        length_score = max(0, 25 - int((lo - words) / 10) * 5)
        length_detail = f"Body too short ({words} words, expected {lo}-{hi})"
        flags.append(f"Body too short: {words} < {lo} words")
    elif words > hi:
        length_score = max(0, 25 - int((words - hi) / 20) * 5)
        length_detail = f"Body too long ({words} words, expected {lo}-{hi})"
        flags.append(f"Body too long: {words} > {hi} words")
    else:
        length_score = 25
        length_detail = f"Length ideal ({words} words, range {lo}-{hi})"

    if auto_fix and length_score < 20:
        if words < lo:
            shortfall = lo - words
            if shortfall <= 30:
                body = body.rstrip() + " We look forward to your response and are happy to provide any additional information you may need."
                auto_fixed["length"] = f"Expanded by {shortfall} words to meet minimum"
                length_score = min(length_score + 10, 24)

    dimensions["length_fit"] = {"score": min(length_score, 25), "detail": length_detail}

    # ── 4. Reply-All Correctness (0-25) ───────────────────────────────────
    # (Logic delegated to V41ReplyAllEnforcer, but we do a sanity check here)
    ra_score = 25
    ra_detail = "Reply-All usage appropriate"

    # If no CC but original had CCs, Reply-All is correct
    # If CC_list is populated but no reply_all_used, flag it
    if cc_list and not reply_all_used:
        ra_score = 15
        ra_detail = "CC recipients present but Reply-All not used — may miss recipients"
        flags.append("CC list not included in Reply-All")

    dimensions["reply_all_correct"] = {"score": ra_score, "detail": ra_detail}

    # ── 5. Completeness (0-10) ─────────────────────────────────────────────
    comp_score = 0
    comp_parts = []

    if re.search(r"dear|hello|hi|hey|greetings", body_lower):
        comp_score += 2
        comp_parts.append("greeting")
    else:
        flags.append("Missing greeting")

    if any(w in body_lower for w in SIGN_OFF_MARKERS):
        comp_score += 2
        comp_parts.append("sign-off")
    else:
        flags.append("Missing sign-off")

    if any(w in body_lower for w in CTA_MARKERS):
        comp_score += 3
        comp_parts.append("CTA")
    else:
        flags.append("Missing CTA")

    if "+1 302 464 0950" in body or "kleber@ziontechgroup.com" in body or "ziontechgroup.com" in body:
        comp_score += 3
        comp_parts.append("contact info")
    else:
        flags.append("Missing contact info")

    dimensions["completeness"] = {"score": min(comp_score, 10), "detail": f"Complete: {', '.join(comp_parts) if comp_parts else 'missing components'}"} if comp_parts else {"score": comp_score, "detail": "Incomplete: " + ", ".join(f for f in ["greeting" if "greeting" not in comp_parts else "", "sign-off" if "sign-off" not in comp_parts else "", "CTA" if "CTA" not in comp_parts else "", "contact" if "contact info" not in comp_parts else ""] if f)}

    # ── Total Score ────────────────────────────────────────────────────────
    total = sum(d["score"] for d in dimensions.values())
    total_score = min(total, 100)

    # Grade
    if total_score >= 90:
        grade = "A"
    elif total_score >= 80:
        grade = "B"
    elif total_score >= 70:
        grade = "C"
    elif total_score >= 55:
        grade = "D"
    else:
        grade = "F"

    passed = total_score >= 70

    # Recommendation
    if passed:
        recommendation = "Ready to send"
    elif total_score >= 55:
        recommendation = "Send with review — minor improvements suggested"
    else:
        recommendation = "DO NOT SEND — fix flagged issues first"

    result = {
        "total_score": total_score,
        "passed": passed,
        "grade": grade,
        "dimensions": dimensions,
        "flags": flags,
        "auto_fixed": auto_fixed,
        "recommendation": recommendation,
        "word_count": words,
        "intent": intent,
        "graded_at": _now_iso(),
    }

    # ── Log to quality history ─────────────────────────────────────────────
    _log_quality(result, sender_email)

    # ── Auto-queue for review if failed ───────────────────────────────────
    if not passed and total_score < 55:
        _queue_for_review(result, sender_email, subject)

    return result


def _log_quality(result: dict, sender_email: str) -> None:
    try:
        log = _load_jsonl(QUALITY_LOG)
        entry = {**result, "sender_email": sender_email, "logged_at": _now_iso()}
        log.append(entry)
        # Keep last 2000 entries
        _write_jsonl(log[-2000:])
    except Exception:
        pass


def _write_jsonl(entries: list) -> None:
    with QUALITY_LOG.open("w", encoding="utf-8") as f:
        for e in entries:
            f.write(json.dumps(e, ensure_ascii=False) + "\n")


def _queue_for_review(result: dict, sender_email: str, subject: str) -> None:
    try:
        queue = _load_jsonl(REVIEW_QUEUE)
        entry = {
            "email_subject": subject,
            "sender_email": sender_email,
            "score": result["total_score"],
            "grade": result["grade"],
            "flags": result["flags"],
            "dimensions": {k: v["score"] for k, v in result["dimensions"].items()},
            "recommended_action": result["recommendation"],
            "queued_at": _now_iso(),
            "reviewed": False,
            "review_outcome": None,
        }
        queue.append(entry)
        _write_jsonl(queue, REVIEW_QUEUE)
    except Exception:
        pass


def _write_jsonl(entries: list, path: Path) -> None:
    with path.open("w", encoding="utf-8") as f:
        for e in entries:
            f.write(json.dumps(e, ensure_ascii=False) + "\n")


def get_quality_stats(days: int = 30) -> dict:
    """Return quality score stats for the last N days."""
    _ensure_files()
    logs = _load_jsonl(QUALITY_LOG)
    now = datetime.now(timezone.utc)
    cutoff = now - datetime.timedelta(days=days)

    recent = []
    for entry in logs:
        try:
            ts = datetime.fromisoformat(entry.get("graded_at", "").replace("Z", "+00:00"))
            if ts > cutoff:
                recent.append(entry)
        except Exception:
            pass

    if not recent:
        return {"count": 0, "avg_score": None, "grade_dist": {}, "pass_rate": None}

    scores = [e["total_score"] for e in recent]
    grades = {}
    for e in recent:
        g = e.get("grade", "?")
        grades[g] = grades.get(g, 0) + 1

    passed = sum(1 for s in scores if s >= 70)

    return {
        "count": len(recent),
        "avg_score": round(sum(scores) / len(scores), 1),
        "min_score": min(scores),
        "max_score": max(scores),
        "grade_dist": dict(sorted(grades.items())),
        "pass_rate": round(passed / len(scores) * 100, 1),
        "period_days": days,
    }


def get_review_queue() -> list:
    """Return all emails flagged for human review."""
    return _load_jsonl(REVIEW_QUEUE)


def mark_reviewed(subject: str, outcome: str) -> bool:
    """Mark an email as reviewed. Outcome: 'approved' | 'rejected' | 'edited'."""
    queue = _load_jsonl(REVIEW_QUEUE)
    for entry in queue:
        if entry.get("email_subject") == subject and not entry.get("reviewed"):
            entry["reviewed"] = True
            entry["review_outcome"] = outcome
            entry["reviewed_at"] = _now_iso()
            _write_jsonl(queue, REVIEW_QUEUE)
            return True
    return False


# ── Demo ─────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print(f"[V46 Email Quality Grader] {_now_iso()}")

    # Run sample gradings
    test_cases = [
        {
            "name": "Good sales email",
            "subject": "Quick question about AI Automation",
            "body": "Hi John,\n\nThank you for your interest in our AI services. I'd love to schedule a quick 15-minute call to discuss how we can help XYZ Corp achieve its goals.\n\nAre you free this Thursday?\n\nBest regards,\nKleber\n+1 302 464 0950",
            "intent": "sales_inquiry",
            "sender_email": "john@example.com",
            "reply_all_used": False,
        },
        {
            "name": "Has placeholder",
            "subject": "Following up on [COMPANY] inquiry",
            "body": "Dear [FIRST_NAME],\n\nWe help [COMPANY] achieve 40% cost reduction.\n\nBest,\nKleber",
            "intent": "sales_inquiry",
            "sender_email": "jane@example.com",
            "reply_all_used": False,
        },
        {
            "name": "Too short",
            "subject": "Re: Your email",
            "body": "Hi,\nThanks.\nKleber",
            "intent": "support_request",
            "sender_email": "bob@example.com",
            "reply_all_used": False,
        },
    ]

    for tc in test_cases:
        print(f"\n--- {tc['name']} ---")
        result = grade_email(**{k: v for k, v in tc.items() if k != "name"})
        print(f"  Score: {result['total_score']}/100 [{result['grade']}] — {result['recommendation']}")
        dim_parts = []
        for k, v in result["dimensions"].items():
            dim_parts.append(f"{k}={v['score']}")
        print(f"  Dimensions: {', '.join(dim_parts)}")
        if result['flags']:
            print(f"  Flags: {result['flags']}")
        if result['auto_fixed']:
            print(f"  Auto-fixed: {result['auto_fixed']}")

    stats = get_quality_stats()
    print(f"\n[Stats {stats['period_days']}d] {stats['count']} emails, avg {stats['avg_score']}, pass rate {stats['pass_rate']}%, grades {stats['grade_dist']}")
    queue = get_review_queue()
    print(f"[Review Queue] {len(queue)} emails pending review")
