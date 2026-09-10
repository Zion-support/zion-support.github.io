#!/usr/bin/env python3
"""Append a new improvements entry to improvements.json."""
import json
from pathlib import Path
from datetime import datetime, timezone

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr_path.read_text())

ts = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + 'Z'

new_entry = {
    "ts": ts,
    "metrics": {
        "totalRuns": 708,
        "sendsAttempted": 0,
        "duplicatesSuppressed": 0,
        "authFailures": 0,
        "hotFollowups": 0,
        "latestComplete": "2026-09-07T01:27:59.585368Z",
        "potentialClients": 18,
        "scanned": 501
    },
    "pattern": "Freshness-only reconciliation Sep 8 12:38Z. Live outreach-log.jsonl: 708 non-empty lines (343 legacy send, 3 send_disabled_analysis, 133 start, 229 complete). All canonical metrics zero (sendEnabled=false policy-lock). Auth healthy (0 failures). Candidate pool dried to 0 from 18 between Sep 7 00:35Z and 00:44Z, stable at 0 since. Latest complete event shows potentialClients=18 (scan hit, not a state delta -- pool still dried to 0 in current window). No hot-follow-up threads. No suppression window / prompt wording / scoring tuning warranted. 343 legacy direct-send events (2026-08-18 batch) bypass canonical pipeline.",
    "recommendations": [
        "sendEnabled=false is the sole blocker; enable to exercise canonical send path and cross-window dedupe.",
        "No suppression window / prompt wording / scoring tuning warranted. Pool dried to 0 from 18 (sampling variation/pool drying), not a candidate-quality or suppression issue.",
        "Scanner FROM parsing bug FIXED per prior digest; canonical sends expected to work when sendEnabled=true.",
        "343 legacy direct-send events (2026-08-18 batch) bypass canonical pipeline; consider cross-window dedupe if re-enabling.",
        "LLM env absent (no OPENAI_API_KEY/GEMINI_API_KEY); deterministic template fallback in use.",
        "Hot-followup label empty; no CEO draft needed this cycle.",
        "Gog gmail search probe stable; no recurrence of 70s timeout since 2026-09-06T18:25:06Z.",
        "Auth healthy; gog gmail search returns results within normal timeout.",
        "potentialClients=18 in latest complete event is a scan hit from earlier window (Sep 7 01:27Z), not evidence of pool recovery; current window pool is 0. Do not infer suppression issue from this snapshot."
    ]
}

data['improvements'].append(new_entry)
data['updatedAt'] = ts

impr_path.write_text(json.dumps(data, indent=2) + '\n')
print(f'APPENDED: {ts}')
print(f'Total improvements entries: {len(data["improvements"])}')
