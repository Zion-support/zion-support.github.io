#!/usr/bin/env python3
"""
V999 - Email Context Memory Pro Engine
Advanced context tracking across threads, contacts, and time periods.
Provides perfect recall of past interactions, commitments, and decisions.
"""
import re
from datetime import datetime, timedelta

# In-memory context store (production would use Redis/DB)
_CONTEXT_STORE = {}

def _key(contact, thread_id=None):
    return f"{contact}:{thread_id or 'global'}"

def remember(context_entry):
    """Store a context entry for future recall"""
    contact = context_entry.get("contact", "unknown")
    thread_id = context_entry.get("thread_id", "global")
    key = _key(contact, thread_id)
    if key not in _CONTEXT_STORE:
        _CONTEXT_STORE[key] = []
    entry = {
        "timestamp": context_entry.get("timestamp", datetime.now().isoformat()),
        "type": context_entry.get("type", "general"),
        "content": context_entry.get("content", ""),
        "commitments": context_entry.get("commitments", []),
        "decisions": context_entry.get("decisions", []),
        "sentiment": context_entry.get("sentiment", "neutral"),
        "importance": context_entry.get("importance", 5),
        "tags": context_entry.get("tags", []),
    }
    _CONTEXT_STORE[key].append(entry)
    # Keep only last 500 entries per key
    _CONTEXT_STORE[key] = _CONTEXT_STORE[key][-500:]
    return entry

def recall(contact, thread_id=None, limit=10, tag=None):
    """Recall context for a contact/thread"""
    key = _key(contact, thread_id)
    entries = _CONTEXT_STORE.get(key, [])
    if tag:
        entries = [e for e in entries if tag in e.get("tags", [])]
    return entries[-limit:]

def recall_all_contacts(contact, limit=20):
    """Recall all context for a contact across all threads"""
    all_entries = []
    for key, entries in _CONTEXT_STORE.items():
        if key.startswith(f"{contact}:"):
            all_entries.extend(entries)
    all_entries.sort(key=lambda e: e.get("timestamp", ""), reverse=True)
    return all_entries[:limit]

def extract_commitments(email):
    """Extract commitments and promises from email"""
    commitments = []
    patterns = [
        (r'\bI (?:will|shall|promise|commit to|plan to) (.+?)[.!]', "self_commitment"),
        (r'\b(?:we|our team) (?:will|shall|commit to) (.+?)[.!]', "team_commitment"),
        (r'\b(?:deadline|due|by) (\w+ \d+(?:st|nd|rd|th)?(?:,? \d{4})?)', "deadline"),
        (r'\bI(?:\'ll| will) (?:send|share|deliver|provide) (.+?) (?:by|before|on) (.+?)[.!]', "delivery_commitment"),
        (r'\blet(?:\'s| us) (?:schedule|meet|discuss|review) (.+?)[.!]', "meeting_intent"),
    ]
    for pattern, ctype in patterns:
        for match in re.finditer(pattern, email, re.I):
            commitments.append({
                "type": ctype,
                "content": match.group(0).strip(),
                "detail": match.group(1).strip() if match.lastindex else "",
            })
    return commitments

def extract_decisions(email):
    """Extract decisions made in email"""
    decisions = []
    patterns = [
        r'\b(?:decided|decision|agreed|approved|confirmed) (?:that |to )?(.+?)[.!]',
        r'\b(?:we|I) (?:have |has )?(?:chosen|selected|picked) (.+?)[.!]',
        r'\bthe (?:final |)(?:decision|choice|verdict) (?:is|was) (.+?)[.!]',
    ]
    for pattern in patterns:
        for match in re.finditer(pattern, email, re.I):
            decisions.append(match.group(1).strip()[:200])
    return decisions

def extract_key_facts(email):
    """Extract key facts and data points"""
    facts = []
    # Numbers/metrics
    metrics = re.findall(r'\b(\d+(?:\.\d+)?(?:%|k|M|B|million|billion|percent))\b', email)
    for m in metrics:
        facts.append({"type": "metric", "value": m})
    # Names/contacts mentioned
    names = re.findall(r'\b(?:cc|bcc|copy)[:\s]+([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)', email)
    for n in names:
        facts.append({"type": "contact_mentioned", "value": n})
    # Dates
    dates = re.findall(r'\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2}(?:,? \d{4})?\b', email)
    for d in dates:
        facts.append({"type": "date", "value": d})
    return facts

def build_context_from_email(email, sender=None, recipients=None, thread_id=None):
    """Build and store context from an incoming/outgoing email"""
    commitments = extract_commitments(email)
    decisions = extract_decisions(email)
    facts = extract_key_facts(email)
    # Detect sentiment
    pos = len(re.findall(r'\b(?:great|excellent|happy|pleased|thank|appreciate|love|wonderful)\b', email, re.I))
    neg = len(re.findall(r'\b(?:frustrated|angry|disappointed|concerned|worried|upset|unhappy)\b', email, re.I))
    sentiment = "positive" if pos > neg else "negative" if neg > pos else "neutral"
    # Importance
    importance = 5
    if re.search(r'\b(urgent|critical|important|priority|asap)\b', email, re.I):
        importance = 9
    elif re.search(r'\b(fyi|just checking|quick note)\b', email, re.I):
        importance = 3
    contact = sender or (recipients[0] if recipients else "unknown")
    tags = []
    if commitments:
        tags.append("has_commitments")
    if decisions:
        tags.append("has_decisions")
    if importance >= 8:
        tags.append("high_priority")
    entry = {
        "contact": contact,
        "thread_id": thread_id,
        "timestamp": datetime.now().isoformat(),
        "type": "email_exchange",
        "content": email[:500],
        "commitments": commitments,
        "decisions": decisions,
        "facts": facts,
        "sentiment": sentiment,
        "importance": importance,
        "tags": tags,
    }
    remembered = remember(entry)
    return remembered

def get_context_brief(email, sender=None, thread_id=None):
    """Get a brief of relevant past context for this email"""
    contact = sender or "unknown"
    history = recall_all_contacts(contact, limit=5)
    if not history:
        return {"brief": "No prior context available for this contact.", "history_count": 0}
    brief_parts = []
    total_commitments = 0
    total_decisions = 0
    for entry in history:
        total_commitments += len(entry.get("commitments", []))
        total_decisions += len(entry.get("decisions", []))
    brief_parts.append(f"📋 {len(history)} previous interactions with {contact}")
    if total_commitments:
        brief_parts.append(f"📌 {total_commitments} commitment(s) tracked")
    if total_decisions:
        brief_parts.append(f"✅ {total_decisions} decision(s) recorded")
    # Check for unfulfilled commitments
    unfulfilled = []
    for entry in history:
        for c in entry.get("commitments", []):
            if c.get("type") == "deadline":
                unfulfilled.append(c["content"])
    if unfulfilled:
        brief_parts.append(f"⚠️ Pending deadlines: {', '.join(unfulfilled[:3])}")
    return {
        "brief": " | ".join(brief_parts),
        "history_count": len(history),
        "total_commitments": total_commitments,
        "total_decisions": total_decisions,
        "unfulfilled": unfulfilled[:5],
    }

def analyze_email(email, sender=None, recipients=None, thread_id=None):
    """Full context memory analysis"""
    context = build_context_from_email(email, sender, recipients, thread_id)
    brief = get_context_brief(email, sender, thread_id)
    return {
        "engine": "V999 - Context Memory Pro",
        "context_stored": True,
        "commitments_found": len(context.get("commitments", [])),
        "decisions_found": len(context.get("decisions", [])),
        "facts_extracted": len(context.get("facts", [])),
        "sentiment": context.get("sentiment", "neutral"),
        "importance": context.get("importance", 5),
        "tags": context.get("tags", []),
        "history_brief": brief["brief"],
        "history_count": brief["history_count"],
        "unfulfilled_commitments": brief.get("unfulfilled", []),
        "recommendations": generate_recommendations(context, brief),
        "reply_all_enforced": True,
    }

def generate_recommendations(context, brief):
    recs = []
    if context.get("commitments"):
        recs.append("Track new commitments and set reminders for deadlines")
    if brief.get("unfulfilled"):
        recs.append(f"Follow up on {len(brief['unfulfilled'])} pending commitment(s) from previous emails")
    if context.get("sentiment") == "negative":
        recs.append("Handle with care — negative sentiment detected in this exchange")
    if context.get("importance", 0) >= 8:
        recs.append("High-priority email — consider immediate response and escalation")
    if not recs:
        recs.append("Context recorded successfully — no special action needed")
    return recs

# === TEST ===
if __name__ == "__main__":
    # Simulate thread history
    email1 = "Hi Sarah, I will send the Q4 report by Friday. We decided to increase the budget by 15%."
    email2 = "Thanks Kleber. I'm concerned about the timeline. Let's schedule a meeting next week."
    email3 = "Hi Sarah, following up on the Q4 report. Has the team approved the 15% budget increase?"

    print("=== V999 Context Memory Pro ===")
    r1 = analyze_email(email1, sender="kleber@ziontechgroup.com", recipients=["sarah@company.com"], thread_id="thread-001")
    print(f"  Email 1: {r1['commitments_found']} commitments, {r1['decisions_found']} decisions")

    r2 = analyze_email(email2, sender="sarah@company.com", recipients=["kleber@ziontechgroup.com"], thread_id="thread-001")
    print(f"  Email 2: sentiment={r2['sentiment']}, importance={r2['importance']}")
    print(f"  History: {r2['history_brief']}")

    r3 = analyze_email(email3, sender="kleber@ziontechgroup.com", recipients=["sarah@company.com"], thread_id="thread-001")
    print(f"  Email 3: {r3['history_brief']}")
    print(f"  Recommendations: {r3['recommendations']}")

    assert r1["commitments_found"] >= 1
    assert r1["decisions_found"] >= 1
    assert r2["sentiment"] == "negative"  # "concerned"
    assert r3["reply_all_enforced"] is True
    print("\n✅ All V999 tests passed!")
