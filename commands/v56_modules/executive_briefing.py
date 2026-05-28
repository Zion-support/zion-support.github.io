#!/usr/bin/env python3
"""
V56: Email Executive Briefing Generator
Every morning generates a personalized executive briefing: top 5 urgent emails,
decisions needed today, action items assigned, sentiment summary, and an
executive-ready summary they can read in 60 seconds.
Data stored in: data/v56_briefings.json
"""
import json, os, re
from pathlib import Path
from datetime import datetime, timezone, timedelta
from typing import Optional

DATA_DIR = Path("data")
BRIEFINGS_FILE = DATA_DIR / "v56_briefings.json"
os.makedirs(DATA_DIR, exist_ok=True)

ACTION_PATTERNS = [
    re.compile(r"\b(deliver|submit|provide|send|call|schedule|complete|finish|prepare|review|approve|sign|execute)\b", re.I),
    re.compile(r"\bresponsible\s+(?:for\s+)?([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)", re.I),
    re.compile(r"\b(by|before|on)\s+\S+\s+(?:today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)", re.I),
    re.compile(r"\bdeadline\s*[:.]?\s*(\S+)", re.I),
]

DECISION_PATTERNS = [
    re.compile(r"\b(approved?|rejected?|confirmed?|declined?|decided?|agreed?|finalized?)\b", re.I),
    re.compile(r"\b(go|no-go|move forward|proceed|pause|cancel)\s+(?:with|on)?\s*(?:the)?\s*([A-Z][a-z]+(?:\s+[a-z]+)?)", re.I),
    re.compile(r"\bselected\s+(?:vendor|partner|option|approach)\s*[:.]?\s*([A-Z][A-Za-z\s&]+)", re.I),
]

SENTIMENT_LEXICON = {
    "positive": ["thank","great","excellent","amazing","perfect","love","appreciate","fantastic","wonderful","excited","happy","delighted","impressed"],
    "negative": ["frustrated","angry","disappointed","concerned","upset","annoyed","terrible","awful","horrible","unacceptable","problem","issue","fail"],
    "urgent": ["urgent","asap","immediately","critical","emergency","deadline","overdue","stuck","blocked"],
}

def _extract_sentiment(text: str) -> dict:
    text_lower = text.lower()
    pos = sum(1 for w in SENTIMENT_LEXICON["positive"] if w in text_lower)
    neg = sum(1 for w in SENTIMENT_LEXICON["negative"] if w in text_lower)
    urg = sum(1 for w in SENTIMENT_LEXICON["urgent"] if w in text_lower)
    total = pos + neg + 1
    return {
        "positive_ratio": round(pos/total, 2),
        "negative_ratio": round(neg/total, 2),
        "urgency_signals": urg,
        "overall": "negative" if neg > pos else "positive" if pos > neg else "neutral",
    }

def _extract_action_items(text: str) -> list:
    items = []
    for p in ACTION_PATTERNS:
        for m in p.finditer(text):
            snippet = text[max(0,m.start()-20):m.end()+60].strip()
            if len(snippet) > 15:
                items.append(snippet[:120])
    return list(dict.fromkeys(items))[:8]

def _extract_decisions(text: str) -> list:
    decisions = []
    for p in DECISION_PATTERNS:
        for m in p.finditer(text):
            decisions.append(text[m.start():m.end()+50].strip()[:100])
    return list(dict.fromkeys(decisions))[:5]

def generate_executive_briefing(
    recipient_email: str,
    inbox_emails: list,
    date: Optional[str] = None,
) -> dict:
    """
    Generate a morning executive briefing.
    inbox_emails: [{"sender","subject","body","received_at","has_attachments","thread_id"}, ...]
    """
    briefing_date = date or datetime.now(timezone.utc).strftime("%Y-%m-%d")
    now = datetime.now(timezone.utc)

    # Sort by received_at (most recent first) and urgency signals
    scored = []
    for email in inbox_emails:
        body = email.get("body","")
        subject = email.get("subject","")
        combined = subject + " " + body
        sentiment = _extract_sentiment(combined)
        actions = _extract_action_items(combined)
        decisions = _extract_decisions(combined)
        urg_score = sentiment["urgency_signals"] + len(actions)*0.5 + (1 if sentiment["overall"]=="negative" else 0)
        scored.append({
            **email,
            "sentiment": sentiment,
            "action_items": actions,
            "decisions": decisions,
            "urgency_score": round(urg_score, 2),
            "has_attachments": email.get("has_attachments", False),
        })

    scored.sort(key=lambda x: -x["urgency_score"])
    top5 = scored[:5]

    # Summary
    total_positive = sum(1 for e in scored if e["sentiment"]["overall"]=="positive")
    total_negative = sum(1 for e in scored if e["sentiment"]["overall"]=="negative")
    total_neutral = len(scored) - total_positive - total_negative

    # Decisions needed today
    decisions_needed = []
    for email in scored:
        for action in email["action_items"]:
            if any(d in action.lower() for d in ["your","you","approved","review","sign","decide"]):
                decisions_needed.append({"email": email["subject"][:60], "action": action, "sender": email["sender"]})

    # All action items assigned to recipient
    my_actions = []
    for email in scored:
        for action in email["action_items"][:3]:
            my_actions.append({"action": action, "email": email["subject"][:60], "sender": email["sender"], "urgency": email["urgency_score"]})

    # AI executive summary (synthetic)
    top_subject = top5[0]["subject"] if top5 else "No urgent items"
    summary = (
        f"Executive Briefing — {briefing_date}. "
        f"Inbox: {len(inbox_emails)} emails overnight. "
        f"{total_positive} positive, {total_negative} negative sentiment. "
        f"{len(decisions_needed)} decisions needed. "
        f"Top priority: '{top_subject}' from {top5[0]['sender'] if top5 else 'N/A'}. "
        f"{len(my_actions)} action items assigned to you."
    )

    briefing = {
        "recipient_email": recipient_email,
        "briefing_date": briefing_date,
        "generated_at": now.isoformat(),
        "executive_summary_60sec": summary,
        "inbox_stats": {
            "total": len(inbox_emails),
            "positive": total_positive,
            "negative": total_negative,
            "neutral": total_neutral,
        },
        "top5_urgent": [
            {
                "rank": i+1,
                "sender": e["sender"],
                "subject": e["subject"][:80],
                "urgency_score": e["urgency_score"],
                "sentiment": e["sentiment"]["overall"],
                "action_items": e["action_items"][:3],
                "decisions": e["decisions"][:2],
                "has_attachments": e["has_attachments"],
            }
            for i, e in enumerate(top5)
        ],
        "decisions_needed_today": decisions_needed[:5],
        "my_action_items": my_actions[:8],
        "sentiment_breakdown": {"positive": total_positive, "negative": total_negative, "neutral": total_neutral},
        "priority_label": "HIGH PRIORITY DAY" if total_negative >= 2 else "STANDARD DAY" if total_negative == 0 else "MODERATE ATTENTION NEEDED",
    }

    # Save
    briefings = json.loads(BRIEFINGS_FILE.read_text()) if BRIEFINGS_FILE.exists() else []
    briefings.append(briefing)
    BRIEFINGS_FILE.write_text(json.dumps(briefings[-90:], indent=2))

    return briefing

if __name__ == "__main__":
    print("V56: Executive Briefing Generator")
    mock_inbox = [
        {"sender":"alice@techcorp.de","subject":"Q4 Contract Renewal — Urgent","body":"We need your approval on the contract by Friday. Alice is waiting.","received_at":"2026-05-28T08:30:00Z","has_attachments":True,"thread_id":"t1"},
        {"sender":"kenji@kaisha.jp","subject":"Partnership Proposal — Great Progress!","body":"Thank you for the update. We are excited to move forward. The team is delighted.","received_at":"2026-05-28T07:15:00Z","has_attachments":False,"thread_id":"t2"},
        {"sender":"sarah@startup.io","subject":"Critical: Production Server Down","body":"Our servers are down. This is critical. We need immediate assistance!","received_at":"2026-05-28T06:00:00Z","has_attachments":False,"thread_id":"t3"},
        {"sender":"fatima@company.ae","subject":"RE: Quarterly Review","body":"No rush on this. Just following up when you have a chance.","received_at":"2026-05-28T05:00:00Z","has_attachments":True,"thread_id":"t4"},
        {"sender":"carlos@empresa.mx","subject":"Pricing Proposal Approved","body":"Great news! The board has approved the proposal. Please proceed with implementation.","received_at":"2026-05-28T04:00:00Z","has_attachments":False,"thread_id":"t5"},
    ]
    b = generate_executive_briefing("kleber@ziontechgroup.com", mock_inbox)
    print(f"\nExecutive Summary: {b['executive_summary_60sec']}")
    print(f"\nPriority: {b['priority_label']}")
    print(f"\nTop 5 Urgent Emails:")
    for e in b["top5_urgent"]:
        print(f"  {e['rank']}. [{e['urgency_score']}] {e['sentiment'].upper()} | {e['sender']} | {e['subject']}")
    print(f"\nDecisions needed: {len(b['decisions_needed_today'])}")
    print(f"Action items assigned: {len(b['my_action_items'])}")
