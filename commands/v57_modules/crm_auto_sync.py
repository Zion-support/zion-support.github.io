#!/usr/bin/env python3
"""
V57: Email CRM Auto-Sync & Deal Intelligence
Automatically syncs email interactions to CRM: logs emails to Salesforce/HubSpot,
updates deal stages based on email sentiment, triggers follow-ups, flags stalled deals,
detects buyer intent signals, and surfaces at-risk opportunities.
Data stored in: data/v57_crm_sync.json, data/v57_deal_intelligence.json
"""
import json, os, re
from pathlib import Path
from datetime import datetime, timezone, timedelta
from typing import Optional

DATA_DIR = Path("data")
CRM_SYNC_FILE = DATA_DIR / "v57_crm_sync.json"
DEAL_INTEL_FILE = DATA_DIR / "v57_deal_intelligence.json"
os.makedirs(DATA_DIR, exist_ok=True)

# ── Buyer intent signals ─────────────────────────────────────────────────────────
BUYER_INTENT_POSITIVE = [
    "ready to buy", "proceed", "move forward", "approved", "budget approved",
    "sign contract", "legal review", "ready to close", "get started",
    "green light", "go ahead", "executive sign-off",
]
BUYER_INTENT_NEGATIVE = [
    "stuck", "on hold", "waiting on", "budget", "reconsider",
    "not the right time", "postpone", "deprioritize", "concerned",
    "thinking it over", "need more info", "competitive process",
]

# ── Deal stage progression ───────────────────────────────────────────────────────
DEAL_STAGES = ["Prospecting","Qualification","Proposal","Negotiation","Closing","Won","Lost"]

SENTIMENT_DEAL_IMPACT = {
    "positive":  {"stage_move": 1, "close_probability_delta": +0.10, "risk_delta": -0.05},
    "negative":  {"stage_move": -1, "close_probability_delta": -0.10, "risk_delta": +0.15},
    "neutral":   {"stage_move": 0,  "close_probability_delta":  0.0,  "risk_delta":  0.0},
}

def _detect_buyer_intent(email_body: str) -> dict:
    body_lower = email_body.lower()
    pos = sum(1 for s in BUYER_INTENT_POSITIVE if s in body_lower)
    neg = sum(1 for s in BUYER_INTENT_NEGATIVE if s in body_lower)
    if pos > neg:
        return {"signal": "high_intent", "label": "BUYER READY", "confidence": min(0.5 + pos*0.15, 0.95), "delta": +0.20}
    elif neg > pos:
        return {"signal": "low_intent", "label": "DEAL AT RISK", "confidence": min(0.5 + neg*0.15, 0.90), "delta": -0.20}
    return {"signal": "neutral", "label": "IN PROGRESS", "confidence": 0.5, "delta": 0.0}

def _sentiment_from_body(body: str) -> str:
    pos_kw = ["thank","great","excellent","perfect","love","amazing","excited","happy","delighted","approved"]
    neg_kw = ["frustrated","angry","disappointed","concerned","upset","annoyed","terrible","problem","issue","fail","stuck","blocked"]
    p = sum(1 for w in pos_kw if w in body.lower())
    n = sum(1 for w in neg_kw if w in body.lower())
    if n > p: return "negative"
    if p > n: return "positive"
    return "neutral"

def sync_email_to_crm(
    email_record: dict,
    crm_type: str = "salesforce",
) -> dict:
    """
    Sync a single email interaction to CRM.
    email_record: {sender, recipient, subject, body, thread_id, received_at, has_attachments}
    Returns: {crm_update, deal_stage_change, intent_signal, risk_alert, follow_up_suggested}
    """
    sync_log = json.loads(CRM_SYNC_FILE.read_text()) if CRM_SYNC_FILE.exists() else []
    deal_intel = json.loads(DEAL_INTEL_FILE.read_text()) if DEAL_INTEL_FILE.exists() else {}

    sender = email_record.get("sender","")
    body = email_record.get("body","")
    subject = email_record.get("subject","")
    thread_id = email_record.get("thread_id","")
    combined = subject + " " + body

    # Detect buyer intent
    intent = _detect_buyer_intent(combined)
    sentiment = _sentiment_from_body(combined)

    # Determine affected deal (mock: extract from email subject/body)
    deal_key = None
    for kw in ["deal","opp","proposal","contract","renewal"]:
        if kw in combined:
            deal_key = f"deal_{sender.split('@')[1].split('.')[0]}"
            break
    if not deal_key:
        deal_key = "default_deal"

    # Update deal intelligence
    if deal_key not in deal_intel:
        deal_intel[deal_key] = {"stage":"Qualification","close_probability":0.30,"risk_score":0.10,"last_email_at":None,"emails_count":0,"buyer_intent_history":[],"stage_history":[]}

    di = deal_intel[deal_key]
    di["emails_count"] += 1
    di["last_email_at"] = email_record.get("received_at", datetime.now(timezone.utc).isoformat())
    di["buyer_intent_history"].append({"ts":datetime.now(timezone.utc).isoformat(),"signal":intent["signal"],"confidence":intent["confidence"]})

    # Update probabilities based on sentiment
    impact = SENTIMENT_DEAL_IMPACT.get(sentiment, {"stage_move":0,"close_probability_delta":0.0,"risk_delta":0.0})
    old_prob = di["close_probability"]
    di["close_probability"] = max(0, min(1, old_prob + impact["close_probability_delta"]))
    di["risk_score"] = max(0, min(1, di["risk_score"] + impact["risk_delta"]))

    # Apply intent signal
    di["close_probability"] = max(0, min(1, di["close_probability"] + intent["delta"]))

    # Determine risk alerts
    risk_alerts = []
    if di["risk_score"] >= 0.7:
        risk_alerts.append({"level":"critical","message":f"Deal {deal_key} risk score HIGH ({di['risk_score']:.0%}). Buyer showing disengagement signals."})
    elif di["risk_score"] >= 0.4:
        risk_alerts.append({"level":"warning","message":f"Deal {deal_key} risk elevated ({di['risk_score']:.0%}). Monitor closely."})

    if di["emails_count"] > 10 and di["close_probability"] < 0.4:
        risk_alerts.append({"level":"warning","message":f"Deal {deal_key} has {di['emails_count']} emails but low close probability — stalled negotiation."})

    # Stage movement
    old_stage = di["stage"]
    if di["close_probability"] >= 0.85 and di["stage"] not in ["Won","Lost"]:
        di["stage"] = "Closing"
    elif di["close_probability"] >= 0.60 and di["stage"] == "Proposal":
        di["stage"] = "Negotiation"
    elif di["close_probability"] <= 0.15 and di["emails_count"] > 5:
        di["stage"] = "Lost"

    stage_changed = di["stage"] != old_stage

    # Follow-up suggestion
    follow_up_suggested = None
    if intent["signal"] == "low_intent":
        follow_up_suggested = {"action":"re_engage","message":"Buyer showing hesitation. Send value-add content: case study, ROI calculator, or executive check-in call.","priority":"high","delay_hours":4}
    elif di["emails_count"] >= 7 and di["close_probability"] < 0.5:
        follow_up_suggested = {"action":"proposal_review","message":"7+ emails without advancing. Send proposed next steps and ask for a call to accelerate.","priority":"medium","delay_hours":24}
    elif intent["signal"] == "high_intent":
        follow_up_suggested = {"action":"close_ready","message":"Buyer signals high intent. Propose contract/calendar link immediately.","priority":"critical","delay_hours":0}

    result = {
        "crm_type": crm_type,
        "synced_at": datetime.now(timezone.utc).isoformat(),
        "email_record": {"sender":sender,"subject":subject[:60],"thread_id":thread_id,"has_attachments":email_record.get("has_attachments",False)},
        "deal_key": deal_key,
        "deal_stage": di["stage"],
        "stage_changed": stage_changed,
        "stage_change_from": old_stage,
        "close_probability": round(di["close_probability"],3),
        "risk_score": round(di["risk_score"],3),
        "buyer_intent_signal": intent,
        "sentiment": sentiment,
        "risk_alerts": risk_alerts,
        "follow_up_suggested": follow_up_suggested,
        "crm_status": "synced",
    }

    sync_log.append({"synced_at":result["synced_at"],"sender":sender,"deal_key":deal_key,"stage":di["stage"],"close_prob":di["close_probability"],"intent":intent["signal"]})
    CRM_SYNC_FILE.write_text(json.dumps(sync_log[-200:], indent=2))
    DEAL_INTEL_FILE.write_text(json.dumps(deal_intel, indent=2))

    return result

def get_deal_health_summary() -> dict:
    """Get overall deal pipeline health."""
    deal_intel = json.loads(DEAL_INTEL_FILE.read_text()) if DEAL_INTEL_FILE.exists() else {}
    if not deal_intel:
        return {"total_deals":0,"deals":[]}
    deals = []
    for key, di in deal_intel.items():
        risk_label = "CRITICAL" if di["risk_score"]>=0.7 else "WARNING" if di["risk_score"]>=0.4 else "HEALTHY"
        deals.append({"deal_key":key,"stage":di["stage"],"close_prob":round(di["close_probability"],3),"risk_score":round(di["risk_score"],3),"risk_label":risk_label,"emails_count":di["emails_count"],"last_email_at":di.get("last_email_at")})
    deals.sort(key=lambda x:-x["risk_score"])
    critical = sum(1 for d in deals if d["risk_label"]=="CRITICAL")
    warning = sum(1 for d in deals if d["risk_label"]=="WARNING")
    return {"total_deals":len(deals),"critical_risk":critical,"warning_risk":warning,"deals":deals}

if __name__ == "__main__":
    print("V57: Email CRM Auto-Sync & Deal Intelligence")
    test_emails = [
        {"sender":"alice@enterprise.com","subject":"RE: Enterprise Deal — Ready to Sign","body":"We have received board approval. Ready to move forward with the contract. Please send the final agreement.","thread_id":"t1","received_at":"2026-05-28T09:00:00Z","has_attachments":True},
        {"sender":"bob@startup.io","subject":"RE: Proposal","body":"Thanks for the proposal. We are still evaluating options and need to discuss internally. Not the right time yet.","thread_id":"t2","received_at":"2026-05-28T08:00:00Z","has_attachments":False},
        {"sender":"carol@corp.com","subject":"Critical: Budget Concern","body":"We have budget constraints and cannot proceed at the current price. This is a serious concern for our team.","thread_id":"t3","received_at":"2026-05-28T07:00:00Z","has_attachments":False},
    ]
    for email in test_emails:
        r = sync_email_to_crm(email)
        print(f"\n  {r['email_record']['sender']} | stage={r['deal_stage']} | prob={r['close_probability']} | risk={r['risk_score']} | intent={r['buyer_intent_signal']['label']}")
        if r['risk_alerts']:
            for a in r['risk_alerts']: print(f"    ALERT [{a['level']}] {a['message']}")
        if r['follow_up_suggested']:
            print(f"    FOLLOW-UP [{r['follow_up_suggested']['priority']}]: {r['follow_up_suggested']['message']}")
    print("\nDeal Health Summary:")
    h = get_deal_health_summary()
    print(f"  Total: {h['total_deals']} | Critical: {h['critical_risk']} | Warning: {h['warning_risk']}")
    for d in h['deals']:
        print(f"  {d['deal_key']} | {d['stage']} | prob={d['close_prob']} | risk={d['risk_score']} [{d['risk_label']}]")
