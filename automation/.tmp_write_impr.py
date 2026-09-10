import json
from pathlib import Path
from datetime import datetime, timezone

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

data = json.loads(impr.read_text())

now_ts = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%S.%fZ')

new_entry = {
    "ts": now_ts,
    "metrics": {
        "totalRuns": 708,
        "sendsAttempted": 0,
        "duplicatesSuppressed": 0,
        "authFailures": 0,
        "hotFollowups": 0,
        "latestComplete": "2026-09-07T01:27:59.585368Z",
        "potentialClients": 0,
        "scanned": 501,
        "reconciliationNote": "Cron review Sep 9 00:05Z. Live outreach-log.jsonl: 708 non-empty lines, 0 sends, 0 suppression, 0 auth failures, 0 hot-followups. latestComplete=2026-09-07T01:27:59.585368Z (no new complete events since Sep 7). potentialClients=0, scanned=501. Auth healthy: Gmail search completes, zero 'No auth for gmail' across all records. No meaningful state delta vs latest improvements entry at 2026-09-08T23:45Z. Hot-followup label empty — no active threads to draft."
    },
    "pattern": "Cron review Sep 9 00:05Z: no meaningful state delta vs prior entry at 2026-09-08T23:45Z. Same stale zero-send zero-potential-client topology. 708 totalRuns, 0 sends, 0 suppression, 0 auth failures, 0 hot-followups, latestComplete Sep 7 01:27Z, potentialClients=0, scanned=501. Auth healthy. Hot-followup label empty — no active threads.",
    "recommendations": [
        "No suppression-window tuning warranted: duplicatesSuppressed=0 because sends are never attempted. The 7-day window is unexercised, not misconfigured.",
        "No prompt wording or scoring changes: effect unobservable until sends resume and recipients respond.",
        "Primary blocker remains send-path wiring: Gmail search discovers candidates but canonical send pipeline does not convert them. Restoring send auth/wiring is prerequisite for any suppression/prompt/scoring experiment.",
        "If send path becomes available, re-evaluate suppression window only after at least one send burst produces responses revealing actual duplicate-contact patterns.",
        "If send path becomes available, re-evaluate prompt wording and scoring after enough sends+(responses) accumulate to measure reply rate and quality by variant.",
        "Hot-followup label empty — no active threads to draft CEO replies for this cycle. No draft content needed."
    ]
}

data['improvements'].append(new_entry)
data['updatedAt'] = now_ts

impr.write_text(json.dumps(data, indent=2) + '\n')
print(f"Appended new improvements entry at {now_ts}")
print(f"Total improvements entries: {len(data['improvements'])}")
