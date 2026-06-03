#!/usr/bin/env python3
"""
Zion Tech Group — Email Feedback Analyzer
Analyzes historical email interactions to improve response generation.
"""

import json, os, sys
from collections import defaultdict, Counter
from datetime import datetime, timedelta

HERMES_HOME = os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes"))
FEEDBACK_FILE = os.path.join(HERMES_HOME, "email_feedback.jsonl")
ANALYSIS_FILE = os.path.join(HERMES_HOME, "email_feedback_analysis.json")

def load_feedback():
    """Load all feedback records from the JSONL file."""
    if not os.path.exists(FEEDBACK_FILE):
        return []
    records = []
    with open(FEEDBACK_FILE, 'r') as f:
        for line in f:
            line = line.strip()
            if line:
                try:
                    records.append(json.loads(line))
                except json.JSONDecodeError:
                    pass
    return records

def analyze_feedback():
    """Analyze feedback to generate insights for response improvement."""
    records = load_feedback()
    if not records:
        return {"status": "no_data", "message": "No feedback data available"}
    
    # Basic statistics
    total = len(records)
    replied = sum(1 for r in records if r.get("action") in ("reply", "reply_all"))
    replied_all = sum(1 for r in records if r.get("action") == "reply_all")
    escalated = sum(1 for r in records if r.get("action") == "escalate_human")
    drafted = sum(1 for r in records if r.get("action") == "draft_only")
    
    # Intent distribution
    intent_counter = Counter(r.get("intent_deep", "unknown") for r in records)
    # Sentiment distribution
    sentiment_counter = Counter(r.get("sentiment", "neutral") for r in records)
    # Industry distribution
    industry_counter = Counter(r.get("industry", "General") for r in records)
    
    # Outcome tracking (if available)
    outcome_counter = Counter()
    for r in records:
        outcome = r.get("outcome")
        if outcome:
            outcome_counter[outcome] += 1
    
    # Response effectiveness (if we have a score)
    # We don't have a direct score in v24, but we can infer from outcome or follow-up
    # For now, we'll skip
    
    # Time-based trends (last 7 days vs previous 7 days)
    now = datetime.now()
    week_ago = now - timedelta(days=7)
    two_weeks_ago = now - timedelta(days=14)
    
    recent = [r for r in records if datetime.fromisoformat(r.get("timestamp", now.isoformat())) >= week_ago]
    previous = [r for r in records if two_weeks_ago <= datetime.fromisoformat(r.get("timestamp", now.isoformat())) < week_ago]
    
    recent_count = len(recent)
    previous_count = len(previous)
    growth = ((recent_count - previous_count) / previous_count * 100) if previous_count > 0 else 0
    
    analysis = {
        "status": "success",
        "timestamp": now.isoformat(),
        "total_emails": total,
        "actions": {
            "replied": replied,
            "replied_all": replied_all,
            "escalated": escalated,
            "drafted": drafted,
            "skipped": total - (replied + escalated + drafted)
        },
        "intents": dict(intent_counter.most_common()),
        "sentiments": dict(sentiment_counter.most_common()),
        "industries": dict(industry_counter.most_common()),
        "outcomes": dict(outcome_counter),
        "trends": {
            "last_7_days": recent_count,
            "previous_7_days": previous_count,
            "growth_percentage": round(growth, 2)
        }
    }
    
    # Save analysis
    with open(ANALYSIS_FILE, 'w') as f:
        json.dump(analysis, f, indent=2)
    
    return analysis

if __name__ == "__main__":
    analysis = analyze_feedback()
    print(json.dumps(analysis, indent=2))