#!/usr/bin/env python3
"""
V58: Email Competitive Intelligence Tracker
Tracks competitor mentions across ALL incoming emails. Alerts when a competitor
is referenced, scores positive/negative/neutral mentions, generates competitive
battle cards, and surfaces win/loss trends against each competitor.
Data stored in: data/v58_competitor_intel.json, data/v58_battle_cards.json
"""
import json, os, re
from pathlib import Path
from datetime import datetime, timezone
from collections import defaultdict
from typing import Optional

DATA_DIR = Path("data")
COMP_INTEL_FILE = DATA_DIR / "v58_competitor_intel.json"
BATTLE_CARDS_FILE = DATA_DIR / "v58_battle_cards.json"
os.makedirs(DATA_DIR, exist_ok=True)

# ── Competitor aliases (name variations) ─────────────────────────────────────────
COMPETITOR_ALIASES = {
    "salesforce": ["salesforce", "sfdc", "sf"],
    "hubspot": ["hubspot", "hs"],
    "zendesk": ["zendesk", "zd"],
    "service_now": ["servicenow", "service now", "sn"],
    "workday": ["workday"],
    "sap": ["sap"],
    "oracle": ["oracle", "oracle cloud"],
    "microsoft": ["microsoft", "msft", "azure ad"],
    "aws": ["aws", "amazon web services", "amazon web"],
    "google_cloud": ["google cloud", "gcp", "google workspace"],
    "snowflake": ["snowflake"],
    "datadog": ["datadog", "dd"],
    "splunk": ["splunk"],
    "tableau": ["tableau"],
    "power_bi": ["power bi", "powerbi", "microsoft power bi"],
    "slack": ["slack", "salesforce slack"],
    "teams": ["microsoft teams", "ms teams", "teams"],
    "monday": ["monday.com", "monday"],
    "asana": ["asana"],
    "jira": ["jira", "atlassian"],
    "github": ["github", "gh"],
    "gitlab": ["gitlab"],
    "dropbox": ["dropbox"],
    "box": ["box.com", "box inc"],
    "sharepoint": ["sharepoint", "microsoft sharepoint"],
    "okta": ["okta"],
    "auth0": ["auth0"],
    "stripe": ["stripe"],
    "braintree": ["braintree"],
    "paypal": ["paypal"],
    "intercom": ["intercom"],
    "drift": ["drift"],
    "qualtrics": ["qualtrics"],
    "surveygizmo": ["surveygizmo"],
    "hotjar": ["hotjar"],
    "mixpanel": ["mixpanel"],
    "amplitude": ["amplitude"],
    "segment": ["segment", "twilio segment"],
    "mongodb": ["mongodb", "mongo"],
    "postgres": ["postgresql", "postgres"],
    "mysql": ["mysql", "mariadb"],
    "redis": ["redis"],
    "kafka": ["kafka", "apache kafka"],
    "lambda": ["aws lambda", "lambda function"],
}

# ── Sentiment around competitors ────────────────────────────────────────────────
POSITIVE_COMPETITOR = [
    "love", "great", "excellent", "amazing", "better than", "prefer", "switched to",
    "chose", "selected", "wins over", "outperforms", "best-in-class", "happy with",
]
NEGATIVE_COMPETITOR = [
    "problem", "issue", "frustrated", "expensive", "overpriced", "complicated",
    "difficult", "slow", "buggy", "unreliable", "poor", "terrible", "disappointed",
    "fail", "failed", "switching away", "migrating from", "left", "lost to",
    "less features", "missing", "pain", "headache", "struggling", "not happy",
]
WIN_LOSS_KEYWORDS = {
    "win": ["won", "selected", "chose us", "awarded to", "contract signed", "deal closed", "closed-won", "our client"],
    "loss": ["lost", "selected them", "chose", "awarded to competitor", "went with", "competitor won", "closed-lost", "deferred"],
}

def _find_competitors(text: str) -> list:
    """Find all competitor mentions in text."""
    text_lower = text.lower()
    found = []
    for comp_name, aliases in COMPETITOR_ALIASES.items():
        for alias in aliases:
            if re.search(r'\b' + re.escape(alias) + r'\b', text_lower):
                # Find context window
                for m in re.finditer(r'\b' + re.escape(alias) + r'\b', text_lower):
                    start = max(0, m.start() - 80)
                    end = min(len(text_lower), m.end() + 80)
                    context = text_lower[start:end]
                    found.append({"competitor": comp_name, "alias": alias, "context": context, "position": m.start()})
    return found

def _score_sentiment(context: str) -> str:
    """Score sentiment of competitor mention context."""
    ctx_lower = context.lower()
    pos = sum(1 for k in POSITIVE_COMPETITOR if k in ctx_lower)
    neg = sum(1 for k in NEGATIVE_COMPETITOR if k in ctx_lower)
    if neg > pos:
        return "negative"
    elif pos > neg:
        return "positive"
    return "neutral"

def _detect_win_loss(context: str) -> Optional[str]:
    """Detect if this is a win or loss mention."""
    ctx_lower = context.lower()
    for outcome, keywords in WIN_LOSS_KEYWORDS.items():
        if any(k in ctx_lower for k in keywords):
            return outcome
    return None

def _load_intel() -> dict:
    if COMP_INTEL_FILE.exists():
        try: return json.loads(COMP_INTEL_FILE.read_text())
        except: pass
    return {"mentions": [], "competitors": defaultdict(dict), "updated_at": None}

def _load_battle_cards() -> dict:
    if BATTLE_CARDS_FILE.exists():
        try: return json.loads(BATTLE_CARDS_FILE.read_text())
        except: pass
    return {}

def track_competitor_mention(
    sender_email: str,
    email_subject: str,
    email_body: str,
    thread_id: str = "",
    email_direction: str = "inbound",
) -> dict:
    """
    Main entry point for V58.
    Analyzes an email for competitor mentions, scores sentiment,
    detects win/loss signals, and updates competitive intelligence.
    Returns: {competitors_found, sentiments, win_loss, battle_card_updates, alerts}
    """
    intel = _load_intel()
    battle_cards = _load_battle_cards()
    now = datetime.now(timezone.utc).isoformat()

    combined = email_subject + " " + email_body
    competitors_found = _find_competitors(combined)

    results = []
    for c in competitors_found:
        comp_name = c["competitor"]
        sentiment = _score_sentiment(c["context"])
        win_loss = _detect_win_loss(c["context"])

        # Initialize competitor tracking
        if comp_name not in intel["competitors"]:
            intel["competitors"][comp_name] = {
                "total_mentions": 0, "positive": 0, "negative": 0, "neutral": 0,
                "wins": 0, "losses": 0, "last_mentioned": None, "aliases": list(COMPETITOR_ALIASES.get(comp_name, [])),
                "last_win_loss": None, "trend": "stable",
            }

        ci = intel["competitors"][comp_name]
        ci["total_mentions"] += 1
        ci["sentiment_" + sentiment] = ci.get("sentiment_" + sentiment, 0) + 1
        ci["last_mentioned"] = now
        if sentiment == "negative":
            ci["negative"] = ci.get("negative", 0) + 1
        elif sentiment == "positive":
            ci["positive"] = ci.get("positive", 0) + 1

        if win_loss:
            ci[win_loss + "s"] = ci.get(win_loss + "s", 0) + 1
            ci["last_win_loss"] = win_loss
            if win_loss == "win":
                ci["trend"] = "improving"
            else:
                ci["trend"] = "declining"

        # Build battle card update
        if comp_name not in battle_cards:
            battle_cards[comp_name] = {
                "competitor_name": comp_name,
                "aliases": COMPETITOR_ALIASES.get(comp_name, []),
                "mentioned_count": 0,
                "win_count": 0,
                "loss_count": 0,
                "last_updated": None,
                "sentiment_breakdown": {"positive": 0, "negative": 0, "neutral": 0},
                "common_complaints": [],
                "common_praises": [],
            }

        bc = battle_cards[comp_name]
        bc["mentioned_count"] += 1
        bc["last_updated"] = now
        bc["sentiment_breakdown"][sentiment] = bc["sentiment_breakdown"].get(sentiment, 0) + 1

        # Extract complaint/praise snippets
        if sentiment == "negative":
            snippet = c["context"].strip()[:200]
            if snippet not in bc["common_complaints"]:
                bc["common_complaints"].append(snippet)
        elif sentiment == "positive":
            snippet = c["context"].strip()[:200]
            if snippet not in bc["common_praises"]:
                bc["common_praises"].append(snippet)

        results.append({
            "competitor": comp_name,
            "alias_used": c["alias"],
            "sentiment": sentiment,
            "win_loss": win_loss,
            "context_snippet": c["context"].strip()[:150],
        })

    # Save
    intel["mentions"].append({
        "timestamp": now,
        "sender": sender_email,
        "subject": email_subject[:80],
        "thread_id": thread_id,
        "direction": email_direction,
        "competitors_found": [r["competitor"] for r in results],
        "sentiments": {r["competitor"]: r["sentiment"] for r in results},
    })
    intel["updated_at"] = now
    intel["mentions"] = intel["mentions"][-500:]  # Keep last 500

    COMP_INTEL_FILE.write_text(json.dumps(intel, indent=2, ensure_ascii=False))
    BATTLE_CARDS_FILE.write_text(json.dumps(battle_cards, indent=2, ensure_ascii=False))

    # Generate alerts
    alerts = []
    for r in results:
        if r["win_loss"] == "win":
            alerts.append({"level": "success", "competitor": r["competitor"], "message": f"WIN signal detected: '{r['context_snippet'][:80]}...'"})
        elif r["win_loss"] == "loss":
            alerts.append({"level": "danger", "competitor": r["competitor"], "message": f"LOSS signal: competitor mentioned in negative context"})
        elif r["sentiment"] == "negative" and intel["competitors"].get(r["competitor"], {}).get("negative", 0) >= 3:
            alerts.append({"level": "warning", "competitor": r["competitor"], "message": f"3+ negative mentions of {r['competitor']} — update battle card"})

    return {
        "email_subject": email_subject[:60],
        "competitors_found": results,
        "total_competitors_mentioned": len(results),
        "win_loss_signals": [r["win_loss"] for r in results if r["win_loss"]],
        "alerts": alerts,
        "updated_at": now,
    }

def get_competitive_landscape() -> dict:
    """Get full competitive landscape summary."""
    intel = _load_intel()
    battle_cards = _load_battle_cards()

    landscape = []
    for comp_name, ci in intel.get("competitors", {}).items():
        bc = battle_cards.get(comp_name, {})
        total = ci.get("total_mentions", 0) or 1
        pos = ci.get("positive", 0)
        neg = ci.get("negative", 0)
        sentiment_score = round((pos - neg) / total, 2) if total > 0 else 0
        landscape.append({
            "competitor": comp_name,
            "mentions": ci.get("total_mentions", 0),
            "positive": ci.get("positive", 0),
            "negative": ci.get("negative", 0),
            "wins": ci.get("wins", 0),
            "losses": ci.get("losses", 0),
            "win_rate": round(ci.get("wins", 0) / max(ci.get("wins", 0) + ci.get("losses", 0), 1), 2),
            "sentiment_score": sentiment_score,
            "trend": ci.get("trend", "stable"),
            "last_mentioned": ci.get("last_mentioned"),
            "common_complaints": bc.get("common_complaints", [])[:3],
            "common_praises": bc.get("common_praises", [])[:3],
        })

    landscape.sort(key=lambda x: -x["mentions"])
    return {
        "total_competitors_tracked": len(landscape),
        "total_mentions": sum(c["mentions"] for c in landscape),
        "competitors": landscape,
        "updated_at": intel.get("updated_at"),
    }

def get_battle_card(competitor_name: str) -> dict:
    """Get battle card for a specific competitor."""
    battle_cards = _load_battle_cards()
    return battle_cards.get(competitor_name, {"error": "Competitor not tracked"})

if __name__ == "__main__":
    print("V58: Email Competitive Intelligence Tracker")
    tests = [
        {"sender":"alice@salesforce.com","subject":"Re: CRM Decision","body":"We evaluated your solution vs Salesforce and ultimately chose your platform because Salesforce was too expensive and complicated. Your AI features are far superior.","thread_id":"t1"},
        {"sender":"bob@hubspot.com","subject":"RE: Marketing Automation","body":"We are struggling with Hubspot. The workflows keep breaking and support is not helpful. Thinking about alternatives.","thread_id":"t2"},
        {"sender":"carol@competitor.com","subject":"Pricing","body":"We went with ServiceNow for ITSM. Your solution was good but they had better enterprise pricing. Good luck next time.","thread_id":"t3"},
    ]
    for email in tests:
        r = track_competitor_mention(email["sender"], email["subject"], email["body"], email["thread_id"])
        print(f"\nFrom: {email['sender']}")
        print(f"  Competitors: {[c['competitor'] for c in r['competitors_found']]}")
        for c in r['competitors_found']:
            print(f"    {c['competitor']} | sentiment={c['sentiment']} | win_loss={c['win_loss']}")
        if r['alerts']:
            for a in r['alerts']:
                print(f"  ALERT [{a['level']}]: {a['message'][:80]}")
    print("\n--- Competitive Landscape ---")
    ls = get_competitive_landscape()
    for c in ls['competitors']:
        wr = c['win_rate']
        print(f"  {c['competitor']} | mentions={c['mentions']} | sentiment={c['sentiment_score']:+.2f} | win_rate={wr:.0%} | trend={c['trend']}")
        if c['common_complaints']:
            print(f"    Complaints: {c['common_complaints'][0][:80]}")
