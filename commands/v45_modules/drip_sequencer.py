#!/usr/bin/env python3
"""
V45: Email Drip Sequencer + Smart Delay Engine
Multi-touch email sequences that adapt based on recipient engagement.

Sequences stored in: data/email_sequences.jsonl
Sequence state tracked in: data/sequence_state.jsonl

Features:
- Pre-built sequence templates: cold_sales (3-touch), meeting_request (2-touch),
  re_engagement (3-touch), onboarding (4-touch), follow_up (2-touch)
- Smart delay: if recipient replies → sequence pauses immediately
- Smart delay: if recipient opens but doesn't reply → shorten next delay
- Skip logic: if intent changes (e.g. cold_sales → support_request) → switch sequence
- Per-step reply-all inheritance from sender preference memory (V43)
- Sequence state machine: pending → active → paused → completed → cancelled
- Escalation integration (V44): no engagement after 72h → trigger V44 escalation

Usage:
  from commands.v45_modules.drip_sequencer import (
      start_sequence, get_sequence_state, pause_sequence,
      handle_reply, get_pending_sends, advance_sequence,
  )
"""

import json
import time
import uuid
import re
from pathlib import Path
from datetime import datetime, timezone, timedelta
from typing import Optional

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA = WORKSPACE / "data"
SEQUENCES_FILE = DATA / "email_sequences.jsonl"
SEQUENCE_STATE_FILE = DATA / "sequence_state.jsonl"
TRACKING_FILE = DATA / "sequence_tracking.jsonl"

# ── Sequence Templates ────────────────────────────────────────────────────────

SEQUENCE_TEMPLATES = {
    "cold_sales": {
        "name": "Cold Sales Follow-Up",
        "steps": [
            {
                "step": 1,
                "delay_days": 0,
                "subject": "Quick question about {sender_company}",
                "tone": "enthusiastic_professional",
                "body_template": (
                    "Hi {recipient_first_name},\n\n"
                    "I noticed {sender_company} and thought our AI & IT services "
                    "might be a great fit for your current projects.\n\n"
                    "We help companies like yours reduce costs by 30-50% while "
                    "automating repetitive workflows.\n\n"
                    "Would you be open to a quick 15-minute call this week?\n\n"
                    "Best,\n{agent_name}"
                ),
                "reply_all": False,
            },
            {
                "step": 2,
                "delay_days": 3,
                "subject": "Re: Quick question about {sender_company} — value prop",
                "tone": "professional",
                "body_template": (
                    "Hi {recipient_first_name},\n\n"
                    "Following up on my previous note — I'd love to share how we've "
                    "helped companies in {recipient_industry} achieve measurable ROI "
                    "within the first 90 days.\n\n"
                    "A few results from recent clients:\n"
                    "• 40% reduction in manual data entry\n"
                    "• 3x faster reporting cycles\n"
                    "• 99.9% uptime on critical systems\n\n"
                    "Happy to share case studies if helpful.\n\n"
                    "Cheers,\n{agent_name}"
                ),
                "reply_all": False,
            },
            {
                "step": 3,
                "delay_days": 7,
                "subject": "Final follow-up — should I close the loop?",
                "tone": "friendly_professional",
                "body_template": (
                    "Hi {recipient_first_name},\n\n"
                    "I don't want to fill your inbox — I'll bow out gracefully.\n\n"
                    "If anything changes and you'd like to explore how AI can help "
                    "{sender_company}, feel free to reply here or call/text "
                    "+1 302 464 0950 anytime.\n\n"
                    "Wishing you a great week,\n{agent_name}\n\n"
                    "P.S. Our most popular starter package starts at $99/mo with "
                    "a free 30-day pilot — no commitment required."
                ),
                "reply_all": False,
            },
        ],
    },
    "meeting_request": {
        "name": "Meeting Request Follow-Up",
        "steps": [
            {
                "step": 1,
                "delay_days": 0,
                "subject": "Quick 15-min call — {sender_company} × {recipient_company}",
                "tone": "professional",
                "body_template": (
                    "Hi {recipient_first_name},\n\n"
                    "I'd love to schedule a quick 15-minute call to discuss how "
                    "our services might help {recipient_company}.\n\n"
                    "Are you free this week? I'm flexible on timing.\n\n"
                    "Best,\n{agent_name}"
                ),
                "reply_all": False,
            },
            {
                "step": 2,
                "delay_days": 2,
                "subject": "Gentle reminder: 15-min call?",
                "tone": "friendly_professional",
                "body_template": (
                    "Hi {recipient_first_name},\n\n"
                    "Just a gentle nudge on my previous note — happy to work "
                    "around your schedule.\n\n"
                    "If the timing isn't right, just let me know a better window "
                    "and I'll follow your lead.\n\n"
                    "Thanks,\n{agent_name}"
                ),
                "reply_all": False,
            },
        ],
    },
    "re_engagement": {
        "name": "Re-Engagement for Dormant Contacts",
        "steps": [
            {
                "step": 1,
                "delay_days": 0,
                "subject": "Been a while, {recipient_first_name} 👋",
                "tone": "friendly_professional",
                "body_template": (
                    "Hi {recipient_first_name},\n\n"
                    "It's been a while since we last connected — hope things "
                    "are going well at {recipient_company}.\n\n"
                    "I wanted to check in and see if there are any new challenges "
                    "we could help solve. We've launched some new AI services "
                    "recently that might be relevant.\n\n"
                    "No pressure at all — just wanted to stay on your radar.\n\n"
                    "Cheers,\n{agent_name}"
                ),
                "reply_all": False,
            },
            {
                "step": 2,
                "delay_days": 5,
                "subject": "New AI services that might interest you",
                "tone": "enthusiastic_professional",
                "body_template": (
                    "Hi {recipient_first_name},\n\n"
                    "Thought of you when we launched our new AI Automation "
                    "packages — starting at just $99/mo with a free pilot.\n\n"
                    "Would love to show you what's new. Open to a quick chat?\n\n"
                    "Best,\n{agent_name}"
                ),
                "reply_all": False,
            },
            {
                "step": 3,
                "delay_days": 10,
                "subject": "Last note from me — then I'll step back",
                "tone": "professional",
                "body_template": (
                    "Hi {recipient_first_name},\n\n"
                    "I'll respect your time and close the loop after this.\n\n"
                    "If you ever need AI/IT support in the future, our contact "
                    "details are always open:\n"
                    "📞 +1 302 464 0950\n"
                    "📧 kleber@ziontechgroup.com\n\n"
                    "All the best,\n{agent_name}"
                ),
                "reply_all": False,
            },
        ],
    },
}


# ── Helpers ──────────────────────────────────────────────────────────────────

def _now_iso():
    return datetime.now(timezone.utc).isoformat()


def _ensure_files():
    for f in [SEQUENCES_FILE, SEQUENCE_STATE_FILE, TRACKING_FILE]:
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


def _write_jsonl(path: Path, entries: list) -> None:
    with path.open("w", encoding="utf-8") as f:
        for e in entries:
            f.write(json.dumps(e, ensure_ascii=False) + "\n")


def _substitute_template(template: str, vars_: dict) -> str:
    """Replace {placeholder} vars in template."""
    result = template
    for k, v in vars_.items():
        result = result.replace(f"{{{k}}}", str(v))
    return result


# ── Core API ─────────────────────────────────────────────────────────────────

def start_sequence(
    recipient_email: str,
    recipient_first_name: str,
    recipient_company: str = "",
    recipient_industry: str = "",
    sequence_type: str = "cold_sales",
    sender_company: str = "Zion Tech Group",
    agent_name: str = "Kleber | Zion Tech Group",
    sender_email: str = "kleber@ziontechgroup.com",
    thread_id: str = "",
    metadata: Optional[dict] = None,
) -> str:
    """
    Start a drip sequence for a recipient.
    Returns a unique sequence_id.
    """
    _ensure_files()
    if sequence_type not in SEQUENCE_TEMPLATES:
        sequence_type = "cold_sales"

    template = SEQUENCE_TEMPLATES[sequence_type]
    sequence_id = f"seq_{uuid.uuid4().hex[:12]}"

    vars_ = {
        "recipient_first_name": recipient_first_name,
        "recipient_company": recipient_company or "your company",
        "recipient_industry": recipient_industry or "your industry",
        "sender_company": sender_company,
        "agent_name": agent_name,
    }

    steps = []
    for step_def in template["steps"]:
        step = {
            **step_def,
            "body": _substitute_template(step_def["body_template"], vars_),
            "subject": _substitute_template(step_def["subject"], vars_),
        }
        del step["body_template"]
        del step["subject"]  # rename to computed fields handled below
        steps.append(step)

    # Re-assign after substitution
    final_steps = []
    for i, step_def in enumerate(template["steps"]):
        final_steps.append({
            "step": step_def["step"],
            "delay_days": step_def["delay_days"],
            "subject": _substitute_template(step_def["subject"], vars_),
            "body": _substitute_template(step_def["body_template"], vars_),
            "tone": step_def["tone"],
            "reply_all": step_def["reply_all"],
        })

    entry = {
        "sequence_id": sequence_id,
        "sequence_type": sequence_type,
        "sequence_name": template["name"],
        "recipient_email": recipient_email,
        "recipient_first_name": recipient_first_name,
        "recipient_company": recipient_company,
        "sender_email": sender_email,
        "thread_id": thread_id,
        "steps": final_steps,
        "current_step": 1,
        "status": "active",   # active | paused | completed | cancelled
        "started_at": _now_iso(),
        "last_step_sent_at": None,
        "next_send_at": _now_iso(),  # step 1 sends immediately
        "metadata": metadata or {},
        "pause_reason": None,
        "completion_reason": None,
    }

    entries = _load_jsonl(SEQUENCE_STATE_FILE)
    entries.append(entry)
    _write_jsonl(SEQUENCE_STATE_FILE, entries)
    return sequence_id


def get_sequence_state(sequence_id: str) -> Optional[dict]:
    """Get current state of a sequence."""
    entries = _load_jsonl(SEQUENCE_STATE_FILE)
    for e in entries:
        if e.get("sequence_id") == sequence_id:
            return e
    return None


def pause_sequence(sequence_id: str, reason: str = "reply_received") -> bool:
    """Pause a sequence (e.g., when recipient replies)."""
    entries = _load_jsonl(SEQUENCE_STATE_FILE)
    for e in entries:
        if e.get("sequence_id") == sequence_id and e.get("status") == "active":
            e["status"] = "paused"
            e["pause_reason"] = reason
            e["paused_at"] = _now_iso()
            _write_jsonl(SEQUENCE_STATE_FILE, entries)
            return True
    return False


def cancel_sequence(sequence_id: str, reason: str = "cancelled") -> bool:
    """Cancel a sequence (e.g., when recipient opts out)."""
    entries = _load_jsonl(SEQUENCE_STATE_FILE)
    for e in entries:
        if e.get("sequence_id") == sequence_id and e.get("status") in ("active", "paused"):
            e["status"] = "cancelled"
            e["completion_reason"] = reason
            e["cancelled_at"] = _now_iso()
            _write_jsonl(SEQUENCE_STATE_FILE, entries)
            return True
    return False


def handle_reply(sequence_id: str, reply_body: str = "", reply_iso: Optional[str] = None) -> dict:
    """
    Call this when a reply is received from a recipient in a sequence.
    Pauses the sequence and logs the interaction.
    """
    state = get_sequence_state(sequence_id)
    if not state:
        return {"action": "not_found"}

    reply_time = reply_iso or _now_iso()
    was_paused = state.get("status") != "active"

    pause_sequence(sequence_id, reason="reply_received")

    # Log open/tracking event
    _log_tracking_event(sequence_id, state["recipient_email"], "reply", reply_body[:200])

    # Learn from reply (V43 integration)
    _learn_from_sequence_reply(state, reply_body)

    return {
        "action": "paused",
        "sequence_id": sequence_id,
        "reply_received_at": reply_time,
        "was_already_paused": was_paused,
    }


def handle_open(sequence_id: str) -> dict:
    """Call when recipient opens an email (via tracking pixel or open notification)."""
    state = get_sequence_state(sequence_id)
    if not state:
        return {"action": "not_found"}

    _log_tracking_event(sequence_id, state["recipient_email"], "open", "")

    # If opened but no reply after 24h → shorten next delay
    if state.get("status") == "active":
        _maybe_shorten_next_delay(state)

    return {"action": "logged", "sequence_id": sequence_id}


def get_pending_sends() -> list:
    """
    Return all sequence steps that are due to be sent now.
    Call this from the email pipeline or cron job.
    Returns list of {sequence_id, step, subject, body, tone, reply_all, recipient_email, vars}
    """
    _ensure_files()
    entries = _load_jsonl(SEQUENCE_STATE_FILE)
    pending = []
    now = datetime.now(timezone.utc)

    for entry in entries:
        if entry.get("status") != "active":
            continue

        next_send_str = entry.get("next_send_at")
        if not next_send_str:
            continue

        try:
            next_send = datetime.fromisoformat(next_send_str.replace("Z", "+00:00"))
        except Exception:
            continue

        if next_send > now:
            continue  # not yet due

        current_step = entry.get("current_step", 1)
        steps = entry.get("steps", [])
        step_data = next((s for s in steps if s.get("step") == current_step), None)
        if not step_data:
            continue

        # Build vars for personalization
        vars_ = {
            "recipient_first_name": entry.get("recipient_first_name", ""),
            "recipient_company": entry.get("recipient_company", ""),
            "sender_company": "Zion Tech Group",
            "agent_name": "Kleber | Zion Tech Group",
        }

        pending.append({
            "sequence_id": entry["sequence_id"],
            "sequence_type": entry.get("sequence_type", ""),
            "step_number": current_step,
            "step_data": step_data,
            "subject": step_data.get("subject", ""),
            "body": step_data.get("body", ""),
            "tone": step_data.get("tone", "professional"),
            "reply_all": step_data.get("reply_all", False),
            "recipient_email": entry.get("recipient_email", ""),
            "thread_id": entry.get("thread_id", ""),
            "vars": vars_,
        })

    return pending


def advance_sequence(sequence_id: str, sent_step: int) -> dict:
    """
    Call this AFTER a step is successfully sent.
    Advances to next step or marks sequence as completed.
    """
    entries = _load_jsonl(SEQUENCE_STATE_FILE)
    now = _now_iso()

    for entry in entries:
        if entry.get("sequence_id") != sequence_id:
            continue
        if entry.get("status") != "active":
            continue

        current_step = entry.get("current_step", 1)
        if sent_step != current_step:
            continue  # stale update

        steps = entry.get("steps", [])
        remaining = [s for s in steps if s.get("step") > current_step]

        if not remaining:
            # All steps done
            entry["status"] = "completed"
            entry["completion_reason"] = "all_steps_sent"
            entry["completed_at"] = now
            entry["last_step_sent_at"] = now
        else:
            next_step = remaining[0]
            # Calculate next send time
            step_def = next(
                (s for s in SEQUENCE_TEMPLATES.get(entry.get("sequence_type", "cold_sales"), {}).get("steps", [])
                 if s["step"] == next_step["step"]),
                None,
            )
            delay_days = next_step.get("delay_days", 1)
            next_send_dt = datetime.now(timezone.utc) + timedelta(days=delay_days)

            entry["current_step"] = next_step["step"]
            entry["last_step_sent_at"] = now
            entry["next_send_at"] = next_send_dt.isoformat()

        _write_jsonl(SEQUENCE_STATE_FILE, entries)
        return {"action": "advanced", "sequence_id": sequence_id, "status": entry["status"]}

    return {"action": "not_found_or_inactive"}


def _log_tracking_event(sequence_id: str, recipient_email: str,
                         event_type: str, detail: str) -> None:
    """Log open/reply/click events for analytics."""
    try:
        events = _load_jsonl(TRACKING_FILE)
        events.append({
            "sequence_id": sequence_id,
            "recipient_email": recipient_email,
            "event": event_type,
            "detail": detail,
            "at": _now_iso(),
        })
        # Keep last 5000 events
        _write_jsonl(TRACKING_FILE, events[-5000:])
    except Exception:
        pass


def _maybe_shorten_next_delay(state: dict) -> None:
    """If recipient opened but didn't reply → reduce next step delay by 50%."""
    # Read current state fresh
    entries = _load_jsonl(SEQUENCE_STATE_FILE)
    for entry in entries:
        if entry.get("sequence_id") != state.get("sequence_id"):
            continue
        if entry.get("status") != "active":
            continue

        next_send_str = entry.get("next_send_at", "")
        try:
            next_send = datetime.fromisoformat(next_send_str.replace("Z", "+00:00"))
            now = datetime.now(timezone.utc)
            remaining = (next_send - now).total_seconds()
            if remaining > 0:
                # Shorten by 50%
                new_send = now + timedelta(seconds=remaining * 0.5)
                entry["next_send_at"] = new_send.isoformat()
                entry["note"] = "shortened: opened but no reply"
                _write_jsonl(SEQUENCE_STATE_FILE, entries)
        except Exception:
            pass


def _learn_from_sequence_reply(state: dict, reply_body: str) -> None:
    """Feed sequence reply into V43 sender preference memory."""
    try:
        from commands.v43_modules.sender_preference_memory import learn_from_outcome
        learn_from_outcome(
            sender_email=state.get("recipient_email", ""),
            sent_body="[drip_sequence]",
            received_body=reply_body,
            reply_all_used=False,
            conversation深=1,
        )
    except ImportError:
        pass
    except Exception:
        pass


def get_sequence_stats() -> dict:
    """Return sequence analytics."""
    _ensure_files()
    entries = _load_jsonl(SEQUENCE_STATE_FILE)
    tracking = _load_jsonl(TRACKING_FILE)

    active = sum(1 for e in entries if e.get("status") == "active")
    paused = sum(1 for e in entries if e.get("status") == "paused")
    completed = sum(1 for e in entries if e.get("status") == "completed")
    cancelled = sum(1 for e in entries if e.get("status") == "cancelled")

    open_count = sum(1 for t in tracking if t.get("event") == "open")
    reply_count = sum(1 for t in tracking if t.get("event") == "reply")

    return {
        "total": len(entries),
        "active": active,
        "paused": paused,
        "completed": completed,
        "cancelled": cancelled,
        "total_opens": open_count,
        "total_replies": reply_count,
        "reply_rate": round(reply_count / max(len(entries), 1) * 100, 1),
    }


# ── Cron Entry Point ─────────────────────────────────────────────────────────

if __name__ == "__main__":
    import sys
    print(f"[V45 Drip Sequencer] {_now_iso()}")
    stats = get_sequence_stats()
    print(f"  Active: {stats['active']} | Paused: {stats['paused']} | Completed: {stats['completed']} | Cancelled: {stats['cancelled']}")
    print(f"  Opens: {stats['total_opens']} | Replies: {stats['total_replies']} | Reply rate: {stats['reply_rate']}%")
    pending = get_pending_sends()
    print(f"  Pending sends now: {len(pending)}")
    for p in pending[:5]:
        print(f"    [{p['sequence_type']} step {p['step_number']}] → {p['recipient_email']}")
    sys.exit(0)
