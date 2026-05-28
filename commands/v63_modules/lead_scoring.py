#!/usr/bin/env python3
"""
V63: Email Reputation & Lead Scoring Engine
Analyzes sender reputation across email interactions, scores leads based on
behavioral signals (opens, clicks, replies, meeting bookings), prioritizes
outreach based on engagement likelihood, and identifies warm vs hot vs cold leads.
Replaces intuition with data-driven lead prioritization.
Data stored in: data/v63_lead_scores.json, data/v63_reputation.json
"""
import json, os, re, hashlib
from pathlib import Path
from datetime import datetime, timezone, timedelta
from typing import Optional, Dict, List
from collections import defaultdict
import uuid

DATA_DIR = Path("data")
LEAD_SCORES_FILE = DATA_DIR / "v63_lead_scores.json"
REPUTATION_FILE = DATA_DIR / "v63_reputation.json"
os.makedirs(DATA_DIR, exist_ok=True)

# ── Engagement weights ─────────────────────────────────────────────────────────
ENGAGEMENT_WEIGHTS = {
    "email_open": 2,
    "email_click": 5,
    "email_reply": 15,
    "meeting_booked": 30,
    "meeting_completed": 40,
    "demo_requested": 35,
    "trial_started": 25,
    "pdf_downloaded": 10,
    "pricing_viewed": 15,
    "linkedin_profile_viewed": 5,
    "linkedin_reply": 20,
    "webinar_attended": 25,
    "case_study_read": 15,
    "social_media_mention": 10,
    "outbound_clicked": 8,
}

# ── Negative signals ──────────────────────────────────────────────────────────────
NEGATIVE_SIGNALS = {
    "email_bounced": -20,
    "unsubscribed": -50,
    "complaint_filed": -80,
    "out_of_office_no_reply": -5,
    "auto_reply_no_action": -5,
    "outbound_no_open_5": -10,
    "outbound_no_reply_3": -8,
    "blocked_domain": -40,
}

# ── Lead tier thresholds ──────────────────────────────────────────────────────────
LEAD_TIERS = {
    "hot": {"min_score": 150, "color": "red", "label": "🔥 Hot Lead"},
    "warm": {"min_score": 60, "color": "orange", "label": "🌡️ Warm Lead"},
    "cold": {"min_score": 0, "color": "blue", "label": "❄️ Cold Lead"},
    "disqualified": {"min_score": -1000, "color": "gray", "label": "⚫ Disqualified"},
}

# ── Behavioral intent signals ──────────────────────────────────────────────────
INTENT_SIGNALS = {
    "pricing_page_viewed": {"intent_score": 20, "signal": "actively researching pricing"},
    "demo_requested": {"intent_score": 35, "signal": "ready for sales conversation"},
    "competitor_mentioned": {"intent_score": 15, "signal": "evaluating alternatives"},
    "sent_positive_reply": {"intent_score": 25, "signal": "positive sentiment engaged"},
    "meeting_booked": {"intent_score": 30, "signal": "committing to conversation"},
    "linkedin_engaged": {"intent_score": 15, "signal": "professional interest"},
    "long_email_thread": {"intent_score": 20, "signal": "deeply evaluating"},
    "budget_keyword": {"intent_score": 20, "signal": "budget holder or influencer"},
    "timeline_keyword": {"intent_score": 20, "signal": "active buying timeline"},
    "decision_maker_keyword": {"intent_score": 15, "signal": "has influence/authority"},
    "case_study_downloaded": {"intent_score": 15, "signal": "validating with social proof"},
    "integration_asked": {"intent_score": 15, "signal": "technical evaluation in progress"},
}

BUDGET_KEYWORDS = ["budget", "approved", "allocated", "spend", "Q1 budget", "Q2 budget", "reserve", "invested"]
TIMELINE_KEYWORDS = ["this month", "this quarter", "ASAP", "urgently", "by end of", "before", "next week", "immediate", "deadline"]
DECISION_KEYWORDS = ["CEO", "CTO", "CFO", "VP", "director", "head of", "decision maker", "final say", "ultimately", "need sign-off"]

# ── Score a lead ────────────────────────────────────────────────────────────────
def score_lead(
    email_address: str,
    company: str = "",
    industry: str = "",
    recent_activities: List[Dict] = None,
    email_history: List[Dict] = None,
) -> Dict:
    """
    Main entry point for V63.
    Scores a lead based on all available behavioral signals.
    Returns: {lead_score, tier, signals, intent_indicators, next_best_action, health_trend}
    """
    activities = recent_activities or []
    history = email_history or []
    
    total_score = 0
    signal_breakdown = defaultdict(int)
    intent_indicators = []
    health_trend = "stable"  # improving, declining, stable
    
    # Process activities
    for activity in activities:
        act_type = activity.get("type", "")
        if act_type in ENGAGEMENT_WEIGHTS:
            total_score += ENGAGEMENT_WEIGHTS[act_type]
            signal_breakdown[act_type] += ENGAGEMENT_WEIGHTS[act_type]
        if act_type in NEGATIVE_SIGNALS:
            total_score += NEGATIVE_SIGNALS[act_type]
            signal_breakdown[act_type] += NEGATIVE_SIGNALS[act_type]
        if act_type in INTENT_SIGNALS:
            intent_indicators.append({
                "signal": INTENT_SIGNALS[act_type]["signal"],
                "score": INTENT_SIGNALS[act_type]["intent_score"],
            })
    
    # Analyze email history
    open_count = 0
    click_count = 0
    reply_count = 0
    last_contact = None
    last_open = None
    reply_rate = 0
    open_rate = 0
    
    for email in history:
        if email.get("opened"):
            open_count += 1
            if not last_open:
                last_open = email.get("date")
        if email.get("clicked"):
            click_count += 1
        if email.get("replied"):
            reply_count += 1
        if not last_contact:
            last_contact = email.get("date")
    
    if history:
        reply_rate = reply_count / len(history)
        open_rate = open_count / len(history)
    
    # Analyze email content for intent signals
    content_score = 0
    combined_text = " ".join([e.get("subject","") + " " + e.get("body","") for e in history])
    combined_lower = combined_text.lower()
    
    for kw in BUDGET_KEYWORDS:
        if re.search(r'\b' + re.escape(kw) + r'\b', combined_lower, re.I):
            content_score += INTENT_SIGNALS["budget_keyword"]["intent_score"]
            intent_indicators.append({"signal": INTENT_SIGNALS["budget_keyword"]["signal"], "score": INTENT_SIGNALS["budget_keyword"]["intent_score"]})
            break
    
    for kw in TIMELINE_KEYWORDS:
        if re.search(r'\b' + re.escape(kw) + r'\b', combined_lower, re.I):
            content_score += INTENT_SIGNALS["timeline_keyword"]["intent_score"]
            intent_indicators.append({"signal": INTENT_SIGNALS["timeline_keyword"]["signal"], "score": INTENT_SIGNALS["timeline_keyword"]["intent_score"]})
            break
    
    for kw in DECISION_KEYWORDS:
        if re.search(r'\b' + re.escape(kw) + r'\b', combined_lower, re.I):
            content_score += INTENT_SIGNALS["decision_maker_keyword"]["intent_score"]
            intent_indicators.append({"signal": INTENT_SIGNALS["decision_maker_keyword"]["signal"], "score": INTENT_SIGNALS["decision_maker_keyword]["intent_score"]})
            break
    
    # Check for competitor mentions (engagement signal)
    competitors = ["salesforce", "hubspot", "zendesk", "servicenow", "workday", "sap", "oracle"]
    for comp in competitors:
        if re.search(r'\b' + re.escape(comp) + r'\b', combined_lower):
            content_score += INTENT_SIGNALS["competitor_mentioned"]["intent_score"]
            intent_indicators.append({"signal": f"mentioned {comp} in communication", "score": INTENT_SIGNALS["competitor_mentioned"]["intent_score"]})
            break
    
    # Update total
    total_score += content_score
    if reply_rate > 0.3:
        total_score += 20
        intent_indicators.append({"signal": "High reply rate (30%+)", "score": 20})
    if open_rate > 0.5:
        total_score += 10
    
    # Determine tier
    tier_info = LEAD_TIERS["cold"]
    if total_score >= LEAD_TIERS["hot"]["min_score"]:
        tier_info = LEAD_TIERS["hot"]
    elif total_score >= LEAD_TIERS["warm"]["min_score"]:
        tier_info = LEAD_TIERS["warm"]
    if total_score < LEAD_TIERS["disqualified"]["min_score"]:
        tier_info = LEAD_TIERS["disqualified"]
    
    # Health trend: compare last 7 days vs prior 7 days
    now = datetime.now(timezone.utc)
    recent_cutoff = (now - timedelta(days=7)).isoformat()
    older_cutoff = (now - timedelta(days=14)).isoformat()
    
    recent_score = sum(ENGAGEMENT_WEIGHTS.get(a.get("type",""), 0) for a in activities if a.get("date","") >= recent_cutoff)
    older_score = sum(ENGAGEMENT_WEIGHTS.get(a.get("type",""), 0) for a in activities if older_cutoff <= a.get("date","") < recent_cutoff)
    
    if recent_score > older_score * 1.5:
        health_trend = "improving"
    elif recent_score < older_score * 0.5 and older_score > 0:
        health_trend = "declining"
    
    # Next best action
    if tier_info == LEAD_TIERS["hot"]:
        next_action = "Book a demo call immediately — high intent signals detected"
    elif tier_info == LEAD_TIERS["warm"]:
        if reply_rate < 0.2:
            next_action = "Send personalized follow-up with case study relevant to their industry"
        elif open_rate < 0.5:
            next_action = "Resend with new subject line, test different send times"
        else:
            next_action = "Propose a specific meeting time with agenda"
    elif tier_info == LEAD_TIERS["cold"]:
        next_action = "Add to nurture sequence, retarget with content ads"
    else:
        next_action = "Remove from active outreach, re-engage in 90 days"
    
    return {
        "email": email_address,
        "company": company,
        "industry": industry,
        "lead_score": total_score,
        "tier": tier_info["label"],
        "tier_key": "hot" if total_score >= LEAD_TIERS["hot"]["min_score"] else "warm" if total_score >= LEAD_TIERS["warm"]["min_score"] else "cold" if total_score >= LEAD_TIERS["disqualified"]["min_score"] else "disqualified",
        "signal_breakdown": dict(signal_breakdown),
        "intent_indicators": intent_indicators[:10],
        "reply_rate": round(reply_rate, 2),
        "open_rate": round(open_rate, 2),
        "total_activities": len(activities),
        "total_emails_sent": len(history),
        "health_trend": health_trend,
        "next_best_action": next_action,
        "last_contact": last_contact,
        "last_open": last_open,
        "scored_at": datetime.now(timezone.utc).isoformat(),
    }

# ── Reputation tracking ──────────────────────────────────────────────────────────
def track_sender_reputation(sender_email: str, events: List[Dict]) -> Dict:
    """Track email sender reputation across campaigns."""
    rep = _load_reputation()
    email_key = sender_email.lower()
    
    if email_key not in rep:
        rep[email_key] = {"email": sender_email, "complaints": 0, "bounces": 0, "unsubscribes": 0, "opens": 0, "clicks": 0, "replies": 0, "total_sent": 0, "reputation_score": 100, "last_updated": None}
    
    r = rep[email_key]
    for event in events:
        etype = event.get("type")
        if etype == "sent": r["total_sent"] += 1
        elif etype == "bounced": r["bounces"] += 1
        elif etype == "complaint": r["complaints"] += 1
        elif etype == "unsubscribed": r["unsubscribes"] += 1
        elif etype == "opened": r["opens"] += 1
        elif etype == "clicked": r["clicks"] += 1
        elif etype == "replied": r["replies"] += 1
    
    # Calculate reputation score
    r["reputation_score"] = 100
    if r["total_sent"] > 0:
        bounce_rate = r["bounces"] / r["total_sent"]
        complaint_rate = r["complaints"] / r["total_sent"]
        r["reputation_score"] -= bounce_rate * 50
        r["reputation_score"] -= complaint_rate * 100
    
    r["last_updated"] = datetime.now(timezone.utc).isoformat()
    rep[email_key] = r
    _save_reputation(rep)
    
    return {
        "email": sender_email,
        "reputation_score": max(0, round(r["reputation_score"], 1)),
        "complaint_rate": round(r["complaints"] / max(r["total_sent"],1), 4),
        "bounce_rate": round(r["bounces"] / max(r["total_sent"],1), 4),
        "open_rate": round(r["opens"] / max(r["total_sent"],1), 2),
        "click_rate": round(r["clicks"] / max(r["total_sent"],1), 2),
        "reply_rate": round(r["replies"] / max(r["total_sent"],1), 2),
    }

def _load_reputation() -> dict:
    if REPUTATION_FILE.exists():
        try: return json.loads(REPUTATION_FILE.read_text())
        except: pass
    return {}

def _save_reputation(rep: dict) -> None:
    REPUTATION_FILE.write_text(json.dumps(rep, indent=2))

def get_lead_scorecard(leads: List[str]) -> Dict:
    """Get a scorecard for multiple leads, sorted by priority."""
    results = []
    for email in leads:
        r = score_lead(email, recent_activities=[], email_history=[])
        results.append(r)
    results.sort(key=lambda x: -x["lead_score"])
    hot = sum(1 for r in results if r["tier_key"] == "hot")
    warm = sum(1 for r in results if r["tier_key"] == "warm")
    cold = sum(1 for r in results if r["tier_key"] == "cold")
    return {
        "total_leads": len(results),
        "hot_leads": hot,
        "warm_leads": warm,
        "cold_leads": cold,
        "avg_score": round(sum(r["lead_score"] for r in results) / max(len(results),1), 1),
        "leads": results,
    }

if __name__ == "__main__":
    print("V63: Email Reputation & Lead Scoring Engine")
    tests = [
        ("alice@enterprise.com", "Enterprise Corp", "tech", [
            {"type":"email_open","date":"2026-05-27T10:00:00Z"},
            {"type":"email_open","date":"2026-05-27T10:05:00Z"},
            {"type":"demo_requested","date":"2026-05-27T14:00:00Z"},
            {"type":"meeting_booked","date":"2026-05-28T09:00:00Z"},
        ], [
            {"subject":"AI Services Overview","opened":True,"clicked":True,"replied":True,"date":"2026-05-27T10:00:00Z"},
            {"subject":"Re: AI Services Overview","opened":True,"clicked":True,"replied":True,"date":"2026-05-27T14:00:00Z"},
        ]),
        ("bob@startup.io", "Startup.io", "saas", [
            {"type":"email_open","date":"2026-05-28T10:00:00Z"},
        ], [
            {"subject":"Quick intro","opened":True,"clicked":False,"replied":False,"date":"2026-05-28T10:00:00Z"},
        ]),
        ("carol@bigcorp.net", "BigCorp", "finance", [
            {"type":"email_open","date":"2026-05-25T10:00:00Z"},
            {"type":"unsubscribed","date":"2026-05-26T10:00:00Z"},
        ], [
            {"subject":"Our services","opened":True,"clicked":False,"replied":False,"date":"2026-05-25T10:00:00Z"},
            {"subject":"Re: Our services","opened":False,"clicked":False,"replied":False,"date":"2026-05-26T10:00:00Z"},
        ]),
    ]
    scorecard = []
    for email, company, industry, activities, history in tests:
        result = score_lead(email, company, industry, activities, history)
        scorecard.append(result)
        print(f"\n{email} ({company})")
        print(f"  Score: {result['lead_score']} | Tier: {result['tier']} | Trend: {result['health_trend']}")
        print(f"  Reply rate: {result['reply_rate']:.0%} | Open rate: {result['open_rate']:.0%}")
        if result['intent_indicators']:
            print(f"  Intent: {[i['signal'][:50] for i in result['intent_indicators'][:3]]}")
        print(f"  Next action: {result['next_best_action'][:60]}")
    print("\n--- Lead Scorecard ---")
    sc = get_lead_scorecard([t[0] for t in tests])
    print(f"Total: {sc['total_leads']} | Hot: {sc['hot_leads']} | Warm: {sc['warm_leads']} | Cold: {sc['cold_leads']} | Avg: {sc['avg_score']}")
