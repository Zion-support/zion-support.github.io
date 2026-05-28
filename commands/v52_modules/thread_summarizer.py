#!/usr/bin/env python3
"""
V52: Smart Email Thread Summarizer
Summarizes long email threads into structured briefings. Extracts: decision history,
open questions, action items, key participants, and sentiment arc across the thread.
Produces a TL;DR + 1-paragraph summary + bullet highlights in under 3 seconds.

Data stored in: data/v52_thread_summaries.json
"""
import json
import re
import os
from datetime import datetime, timezone
from pathlib import Path
from collections import Counter, defaultdict
from typing import Optional

DATA_DIR = Path("data")
SUMMARY_FILE = DATA_DIR / "v52_thread_summaries.json"
os.makedirs(DATA_DIR, exist_ok=True)


# ── Action item patterns ─────────────────────────────────────────────────────────
ACTION_PATTERNS = [
    (re.compile(r'\b(will|can|could|going to)\s+(handle|take care of|do|send|update|fix|review|call|email|schedule|prepare|set up|create|build|design|develop|implement|launch|deploy|test|verify|check|confirm|finish|complete|deliver|provide|attach)\b', re.I), "ACTION"),
    (re.compile(r'\b(please|kindly)\s+(do|send|update|check|review|call|confirm|provide|attach|schedule|arrange)\b', re.I), "REQUEST"),
    (re.compile(r'\b(todo|task|action item|next step|follow[- ]up|responsibility|owner)\s*[:\-]?\s*([A-Z])', re.I), "ACTION_ITEM"),
    (re.compile(r'\bdeadline\s*[:\-]?\s*(by|is|on|before)\s+\S+', re.I), "DEADLINE"),
    (re.compile(r'\bassign(ed|ing|ee)?\s*[:\-]?\s*@\S+', re.I), "ASSIGNMENT"),
    (re.compile(r'\b(decide[sd]?|decision|agreed|consensus|go[- ]ahead|approved|rejected|declined)\b', re.I), "DECISION"),
    (re.compile(r'\b(waiting on|pending|from|blocked by)\s+[@\w]', re.I), "BLOCKER"),
]

QUESTION_PATTERNS = [
    re.compile(r'\b(how|what|when|where|why|who|which|can|could|would|should|is it|are there|do you|would you)\b.*\?', re.I),
    re.compile(r'^(\?|Q\d+[:.]\s)', re.M),
    re.compile(r'\bclarif(y|ication)\b', re.I),
]

DECISION_PATTERNS = [
    re.compile(r'\b(agreed|decision|decided|final|approved|rejected|confirmed|decline|consensus|go[- ]ahead|proceed|locked\s*in)\b', re.I),
    re.compile(r'\bwe\s+(will|shall|are going to|have agreed to)\s+\S+\s+\S+', re.I),
    re.compile(r'\b(let\'s|lets|allow us to|we opt to)\s+\S+', re.I),
]

POSITIVE_PATTERNS = [
    re.compile(r'\b(great|excellent|perfect|awesome|amazing|wonderful|fantastic|superb|love it|brilliant)\b', re.I),
    re.compile(r'\b(thank[s]?|appreciate|grateful|helpful)\b', re.I),
    re.compile(r'\b(sounds good|sounds great|sounds perfect|looks good|looks great|approved|nice)\b', re.I),
]

NEGATIVE_PATTERNS = [
    re.compile(r'\b(issue|problem|trouble|difficulty|concern|fail|error|mistake|wrong|broken|missed|late|delay)\b', re.I),
    re.compile(r'\b(unfortunately|sadly|regret|disappointed|frustrated|frustrating|annoying|terrible)\b', re.I),
    re.compile(r'\b(worried|concerned about|unclear|confused|stuck|blocked)\b', re.I),
]

URGENCY_PATTERNS = [
    re.compile(r'\b(urgent|asap|immediately|right away|priority|critical|emergency|hotfix|p0|p1|crash|outage|down)\b', re.I),
    re.compile(r'\b(by\s+(end of|tomorrow|today|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b)', re.I),
    re.compile(r'\b(deadline|time[- ]sensitive|cannot wait|no delay)\b', re.I),
]

MEETING_PATTERNS = [
    re.compile(r'\b(call|meeting|zoom|teams|webex|calendar|schedule|invite|recurring|standup|sync)\b', re.I),
    re.compile(r'\b(tuesday|wednesday|thursday|friday)\s+\d{1,2}(st|nd|rd|th)?\b', re.I),
    re.compile(r'\b\d{1,2}[:.]\d{2}\s*(am|pm|AM|PM)\b', re.I),
]

MONEY_PATTERNS = [
    re.compile(r'\$[\d,]+(?:\.\d{2})?', re.I),
    re.compile(r'\b\d+\s*(dollars|euros|pounds|k\b|thousand|million|billion)', re.I),
    re.compile(r'(?:quote|invoice|budget|cost|price|fee|charge|quote|proposal|contract|payment)\s*[:\-]?\s*\$', re.I),
]


def _load_summaries() -> dict:
    if SUMMARY_FILE.exists():
        try:
            return json.loads(SUMMARY_FILE.read_text())
        except (json.JSONDecodeError, IOError):
            pass
    return {}


def _save_summaries(summaries: dict) -> None:
    SUMMARY_FILE.write_text(json.dumps(summaries, indent=2, ensure_ascii=False))


def _extract_email_addresses(text: str) -> list:
    return re.findall(r'[\w.+%-]+@[\w.-]+\.[a-zA-Z]{2,}', text)


def _sentence_tokenize(text: str) -> list:
    sentences = re.split(r'(?<=[.!?])\s+', text)
    return [s.strip() for s in sentences if s.strip() and len(s.strip()) > 10]


def summarize_thread(
    thread_id: str,
    email_bodies: list[dict],
    force_refresh: bool = False,
) -> dict:
    """
    Summarize a thread.

    Args:
        thread_id: unique thread identifier (e.g. Gmail thread ID)
        email_bodies: list of dicts with keys:
            - from: sender email
            - to: list of recipient emails
            - date: ISO date string
            - subject: subject line
            - body: plain text body
            - snippet: short preview (optional)
    Returns:
        dict with: tldr, summary, key_points, action_items, open_questions,
                   decisions, participants, sentiment_arc, urgency_level, next_step
    """
    summaries_db = _load_summaries()
    if not force_refresh and thread_id in summaries_db:
        cached = summaries_db[thread_id]
        age_h = (datetime.now(timezone.utc) - datetime.fromisoformat(cached["generated_at"])).total_seconds() / 3600
        if age_h < 2:  # cache valid for 2 hours
            return {**cached, "from_cache": True}

    if not email_bodies:
        return {"error": "No emails provided", "thread_id": thread_id}

    # ── Extract all participant emails ──────────────────────────────────────────
    all_participants = []
    for email in email_bodies:
        all_participants.extend(_extract_email_addresses(email.get("from", "")))
        all_participants.extend(_extract_email_addresses(", ".join(email.get("to", []))))

    participant_counts = Counter(all_participants)
    participants = sorted(
        [{"email": e, "messages": c} for e, c in participant_counts.items()],
        key=lambda x: -x["messages"]
    )

    # ── Combine all text ──────────────────────────────────────────────────────
    combined_text = "\n".join(e.get("body", "") or "" for e in email_bodies)
    sentences = _sentence_tokenize(combined_text)

    # ── Detect action items ───────────────────────────────────────────────────
    action_items = []
    for email in email_bodies:
        body = email.get("body", "")
        for pattern, label in ACTION_PATTERNS:
            for match in pattern.finditer(body):
                snippet = body[max(0, match.start()-20):match.end()+40].strip()
                if len(snippet) > 15:
                    action_items.append({
                        "text": snippet,
                        "type": label,
                        "sender": _extract_email_addresses(email.get("from", ""))[0] if email.get("from") else "unknown",
                    })
                    break  # one per pattern per email to avoid spam

    # Deduplicate
    seen_texts = set()
    unique_actions = []
    for a in action_items:
        key = a["text"][:60].lower()
        if key not in seen_texts:
            seen_texts.add(key)
            unique_actions.append(a)
    action_items = unique_actions[:10]

    # ── Detect open questions ─────────────────────────────────────────────────
    open_questions = []
    for sent in sentences:
        for qp in QUESTION_PATTERNS:
            if qp.search(sent):
                # Filter out rhetorical questions
                if not re.search(r'\b(actually|really|indeed|seriously)\b', sent, re.I):
                    open_questions.append(sent[:200])
                break
    open_questions = list(dict.fromkeys(open_questions))[:8]

    # ── Detect decisions ──────────────────────────────────────────────────────
    decisions = []
    for sent in sentences:
        for dp in DECISION_PATTERNS:
            if dp.search(sent):
                decisions.append(sent[:200])
                break
    decisions = list(dict.fromkeys(decisions))[:6]

    # ── Sentiment arc ─────────────────────────────────────────────────────────
    sentiment_scores = []
    per_email_sentiment = []
    for i, email in enumerate(email_bodies):
        body = email.get("body", "")
        pos = len(POSITIVE_PATTERNS[0].findall(body))
        neg = len(NEGATIVE_PATTERNS[0].findall(body)) + len(NEGATIVE_PATTERNS[1].findall(body))
        total = pos + neg
        score = (pos - neg) / max(total, 1)
        sentiment_scores.append(score)
        per_email_sentiment.append({
            "sender": _extract_email_addresses(email.get("from", ""))[0] if email.get("from") else "?",
            "score": round(score, 2),
            "direction": "positive" if score > 0.1 else "negative" if score < -0.1 else "neutral",
        })

    avg_sentiment = sum(sentiment_scores) / max(len(sentiment_scores), 1)
    sentiment_arc = "improving" if sentiment_scores[-1] > sentiment_scores[0] + 0.2 \
                    else "declining" if sentiment_scores[-1] < sentiment_scores[0] - 0.2 \
                    else "stable"

    # ── Urgency ──────────────────────────────────────────────────────────────
    urgency_hits = sum(1 for _ in URGENCY_PATTERNS[0].finditer(combined_text)) * 2
    urgency_hits += sum(1 for _ in URGENCY_PATTERNS[1].finditer(combined_text)) * 2
    urgency_hits += len(MEETING_PATTERNS[0].findall(combined_text))
    urgency_hits += len(URGENCY_PATTERNS[2].findall(combined_text))
    urgency_level = "critical" if urgency_hits >= 5 \
                    else "high" if urgency_hits >= 3 \
                    else "medium" if urgency_hits >= 1 \
                    else "low"

    # ── Key participants & money mentions ─────────────────────────────────────
    money = list(set(m for m in MONEY_PATTERNS[0].findall(combined_text)[:10]))
    meeting_times = list(set(m for m in MEETING_PATTERNS[1].findall(combined_text)[:5]))
    meeting_times += list(set(m for m in MEETING_PATTERNS[2].findall(combined_text)[:5]))

    # ── Generate TL;DR (first meaningful sentences from last few emails) ────────
    last_email_text = email_bodies[-1].get("body", "") if email_bodies else ""
    last_sentences = _sentence_tokenize(last_email_text)[:4]
    if last_sentences:
        tldr = " | ".join(s[:100] for s in last_sentences if len(s) > 20)
    elif sentences:
        tldr = " | ".join(s[:100] for s in sentences[-3:] if len(s) > 20)
    else:
        tldr = "No summary available."

    # ── 1-paragraph summary ───────────────────────────────────────────────────
    if decisions:
        summary = f"Thread with {len(email_bodies)} emails. Key decisions: {'; '.join(decisions[:2])}."
    elif action_items:
        summary = f"Thread with {len(email_bodies)} emails. Main action items: {'; '.join(a['text'][:60] for a in action_items[:2])}."
    elif open_questions:
        summary = f"Thread with {len(email_bodies)} emails. Open questions remain: {'; '.join(q[:60] for q in open_questions[:2])}."
    else:
        summary = f"Thread with {len(email_bodies)} emails between {len(participants)} participants. " \
                  f"Sentiment is {sentiment_arc} ({avg_sentiment:+.1f} score)."

    # ── Key points ────────────────────────────────────────────────────────────
    key_points = []
    if decisions:
        key_points.append(f"✅ Decisions made: {'; '.join(decisions[:3])}")
    if action_items:
        owners = [a["sender"] for a in action_items[:3]]
        key_points.append(f"📋 Action items ({len(action_items)}): {', '.join(set(owners))} have pending tasks")
    if open_questions:
        key_points.append(f"❓ Open questions ({len(open_questions)}): {open_questions[0][:100]}")
    if money:
        key_points.append(f"💰 Financial: {', '.join(money[:3])}")
    if meeting_times:
        key_points.append(f"📅 Meetings: {', '.join(meeting_times[:3])}")
    if urgency_level in ["critical", "high"]:
        key_points.append(f"🚨 Urgency: {urgency_level.upper()} — immediate attention required")
    if not key_points:
        key_points.append(f"💬 General discussion — no critical items detected")

    # ── Next step ─────────────────────────────────────────────────────────────
    if action_items:
        next_step = f"Owner: {action_items[0]['sender']} → {action_items[0]['text'][:100]}"
    elif open_questions:
        next_step = f"Needs clarification: {open_questions[0][:120]}"
    elif decisions:
        next_step = f"Proceed with: {decisions[0][:120]}"
    else:
        next_step = "Continue thread — monitor for responses"

    result = {
        "thread_id": thread_id,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "from_cache": False,
        "tldr": tldr,
        "summary": summary,
        "key_points": key_points,
        "action_items": action_items,
        "open_questions": open_questions,
        "decisions": decisions,
        "participants": participants[:8],
        "sentiment_arc": sentiment_arc,
        "avg_sentiment_score": round(avg_sentiment, 2),
        "per_email_sentiment": per_email_sentiment,
        "urgency_level": urgency_level,
        "money_mentioned": money[:8],
        "meeting_times": meeting_times[:8],
        "next_step": next_step,
        "email_count": len(email_bodies),
    }

    summaries_db[thread_id] = result
    _save_summaries(summaries_db)
    return result


# ── CLI demo ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 60)
    print("V52: Smart Email Thread Summarizer")
    print("=" * 60)

    # Simulate a thread
    thread = [
        {
            "from": "alice@vendor.com",
            "to": ["bob@company.com", "charlie@company.com"],
            "date": "2026-01-10T09:00:00Z",
            "subject": "Q1 Contract Renewal",
            "body": "Hi team, we need to discuss the Q1 contract renewal. The current agreement expires March 31. Can we schedule a call? Please review the attached pricing proposal. Thanks!",
        },
        {
            "from": "bob@company.com",
            "to": ["alice@vendor.com", "charlie@company.com"],
            "date": "2026-01-10T14:30:00Z",
            "subject": "Re: Q1 Contract Renewal",
            "body": "Great question Alice. We've reviewed the proposal. The pricing looks reasonable but we need a 10% reduction given the scope changes. Also, can you confirm the SLA terms? We'll need 99.9% uptime guarantee.",
        },
        {
            "from": "alice@vendor.com",
            "to": ["bob@company.com", "charlie@company.com"],
            "date": "2026-01-11T10:00:00Z",
            "subject": "Re: Q1 Contract Renewal",
            "body": "Hi Bob, thank you for the quick response. We can offer 8% reduction if you commit to 2-year term. SLA is negotiable — 99.9% is the standard. I will send a revised proposal by Friday. Can you send over the updated scope document?",
        },
        {
            "from": "charlie@company.com",
            "to": ["bob@company.com", "alice@vendor.com"],
            "date": "2026-01-11T16:00:00Z",
            "subject": "Re: Q1 Contract Renewal",
            "body": "Excellent progress everyone. Bob — please send the scope doc to Alice by Wednesday. Alice — we can consider the 2-year term if the 8% holds. Let's schedule the call for next Tuesday 2pm to finalize. I will send the calendar invite.",
        },
    ]

    result = summarize_thread("thread-demo-001", thread)
    print(f"\nThread: {result['email_count']} emails, {len(result['participants'])} participants")
    print(f"\nTL;DR: {result['tldr']}")
    print(f"\nSummary: {result['summary']}")
    print(f"\nKey Points:")
    for p in result["key_points"]:
        print(f"  {p}")
    print(f"\nAction Items ({len(result['action_items'])}):")
    for a in result["action_items"][:4]:
        print(f"  [{a['type']}] {a['text'][:80]}")
        print(f"    → from {a['sender']}")
    print(f"\nOpen Questions ({len(result['open_questions'])}):")
    for q in result["open_questions"][:3]:
        print(f"  ❓ {q[:100]}")
    print(f"\nDecisions ({len(result['decisions'])}):")
    for d in result["decisions"][:3]:
        print(f"  ✅ {d[:100]}")
    print(f"\nSentiment Arc: {result['sentiment_arc']} (avg={result['avg_sentiment_score']:+.2f})")
    for s in result["per_email_sentiment"]:
        print(f"  {s['sender'][:30]:30} → {s['direction']:8} ({s['score']:+.2f})")
    print(f"\nUrgency: {result['urgency_level']}")
    print(f"Next Step: {result['next_step']}")
    print(f"\nCached: {result['from_cache']}")
