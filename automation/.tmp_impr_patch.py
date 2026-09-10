#!/usr/bin/env /usr/bin/python3
import json
from pathlib import Path
from datetime import datetime, timezone

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
log  = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

data = json.loads(impr.read_text())
digests = data.get('digests', [])

# Compute live metrics
lines = [l for l in log.read_text().splitlines() if l.strip()]
records = [json.loads(line) for line in lines]

computed = {
    'totalRuns': len(lines),
    'sendsAttempted': 0,
    'duplicatesSuppressed': 0,
    'authFailures': 0,
    'hotFollowups': 0,
    'latestComplete': None,
}
candidates = []
for r in records:
    event = r.get('event', '')
    ts = r.get('ts')
    if event in ('complete', 'auth_missing'):
        cand...[truncated]