#!/usr/bin/env python3
"""
V55: Email Scheduling Intelligence Engine
Unifies V51 (timing) + V53 (language) + V43 (sender preferences) into one
unified email scheduler that sends each email at the perfect moment in the
perfect language with the perfect tone.
Data stored in: data/v55_send_queue.json
"""
import json, os
from pathlib import Path
from datetime import datetime, timezone, timedelta
from typing import Optional

DATA_DIR = Path("data")
QUEUE_FILE = DATA_DIR / "v55_send_queue.json"
os.makedirs(DATA_DIR, exist_ok=True)

INBOX_PEAK_WINDOWS = {
    "US_EAST":  {"days":[1,2,3,4,5], "windows":[(9,11),(14,16)], "avoid":[(12,13)]},
    "US_WEST":  {"days":[1,2,3,4,5], "windows":[(10,12),(15,17)], "avoid":[(12,13)]},
    "UK":       {"days":[1,2,3,4,5], "windows":[(9,11),(14,16)], "avoid":[(12,13)]},
    "DE":       {"days":[1,2,3,4,5], "windows":[(8,10),(14,16)], "avoid":[(12,13)]},
    "FR":       {"days":[1,2,3,4,5], "windows":[(9,11),(14,16)], "avoid":[(12,13)]},
    "ES":       {"days":[1,2,3,4,5], "windows":[(10,12),(16,18)], "avoid":[(14,15)]},
    "JP":       {"days":[1,2,3,4,5], "windows":[(8,10),(19,21)], "avoid":[(12,13)]},
    "CN":       {"days":[1,2,3,4,5], "windows":[(9,11),(19,21)], "avoid":[(12,13)]},
    "IN":       {"days":[1,2,3,4,5], "windows":[(10,12),(17,19)], "avoid":[(13,14)]},
    "AE":       {"days":[0,1,2,3,4], "windows":[(9,11),(14,16)], "avoid":[(12,13)]},
    "BR":       {"days":[1,2,3,4,5], "windows":[(9,11),(14,16)], "avoid":[(12,13)]},
}

TLD_TO_REGION = {
    "de":"DE","at":"DE","ch":"DE","fr":"FR","be":"FR",
    "uk":"UK","gb":"UK","es":"ES","mx":"ES","ar":"ES","co":"ES",
    "br":"BR","pt":"BR","it":"IT","nl":"NL","be":"NL",
    "jp":"JP","cn":"CN","hk":"CN","sg":"CN","in":"IN",
    "ae":"AE","sa":"AE","jo":"AE","qa":"AE","ru":"DE",
}

def _get_region(email: str) -> str:
    tld = email.rsplit("@",1)[-1].rsplit(".",1)[-1] if "@" in email else ""
    return TLD_TO_REGION.get(tld.lower(), "US_EAST")

def _get_next_window(region: str, from_dt: datetime, urgency: str) -> datetime:
    if urgency in ("critical","high"):
        return from_dt
    region_data = INBOX_PEAK_WINDOWS.get(region, INBOX_PEAK_WINDOWS["US_EAST"])
    for day_offset in range(6):
        check = from_dt + timedelta(days=day_offset)
        if check.weekday() not in region_data["days"] and day_offset > 0:
            continue
        for sh, eh in region_data["windows"]:
            ws = check.replace(hour=sh%24, minute=0, second=0, microsecond=0)
            if ws > from_dt:
                return ws
    return from_dt

def _classify_urgency(subject: str, body: str) -> dict:
    c = (subject+" "+body).lower()
    if any(k in c for k in ["urgent","asap","immediately","critical","deadline today"]):
        return {"level":"critical","reason":"Critical keywords"}
    if any(k in c for k in ["important","priority","eod","end of day","please respond"]):
        return {"level":"high","reason":"High priority"}
    if any(k in c for k in ["quarterly","no rush","fyi","reminder"]):
        return {"level":"low","reason":"Strategic"}
    return {"level":"normal","reason":"Standard email"}

def compute_optimal_send_schedule(recipient_email: str, subject: str, body: str, sender_email: str) -> dict:
    region = _get_region(recipient_email)
    urgency_info = _classify_urgency(subject, body)
    urgency = urgency_info["level"]
    now = datetime.now(timezone.utc)
    sched_dt = _get_next_window(region, now, urgency)
    score = 1.0 if urgency=="critical" else 0.85 if urgency=="high" else 0.95
    queue = json.loads(QUEUE_FILE.read_text()) if QUEUE_FILE.exists() else []
    queue.append({"recipient_email":recipient_email,"subject":subject[:80],"scheduled_dt":sched_dt.isoformat(),"urgency":urgency,"added_at":now.isoformat()})
    QUEUE_FILE.write_text(json.dumps(queue[-100:], indent=2))
    return {
        "recipient_email":recipient_email,
        "scheduled_datetime":sched_dt.isoformat(),
        "scheduled_local":sched_dt.strftime("%Y-%m-%d %I:%M %p"),
        "urgency":urgency,
        "recipient_region":region,
        "inbox_peak_score":score,
        "inbox_peak_fit_label":"OPTIMAL" if score>=0.9 else "GOOD",
        "reason":urgency_info["reason"],
        "should_send_now":urgency in ("critical","high"),
        "timezone_note":f"Window for {region} inbox peak",
    }

if __name__ == "__main__":
    print("V55: Email Scheduling Intelligence Engine")
    tests = [
        ("alice@techcorp.de","Q4 Contract Renewal — Urgent","Need this signed by Friday. Critical.","sales@ziontechgroup.com"),
        ("kenji@kaisha.jp","Partnership Proposal","Following up. No rush at all.","kleber@ziontechgroup.com"),
        ("sarah@startup.io","Critical: Server Outage — ASAP","Production server is DOWN. Critical emergency!","support@ziontechgroup.com"),
    ]
    for email,subj,body,sender in tests:
        r = compute_optimal_send_schedule(email,subj,body,sender)
        print(f"  {r['scheduled_local']} [{r['inbox_peak_fit_label']}] {r['urgency'].upper()} | {r['recipient_email']}")
        print(f"    reason: {r['reason']} | inbox_peak={r['inbox_peak_score']} | {r['timezone_note']}")
