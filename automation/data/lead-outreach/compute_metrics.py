#!/usr/bin/env python3
import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
records = [json.loads(line) for line in log_path.read_text().splitlines() if line.strip()]

total = len(records)
sends = 0
suppressed = 0
auth_fail = 0
hot_followups = 0
latest_complete = None
potential_clients = 0
scanned = 0

complete_ts_candidates = []
for r in records:
    ev = r.get('event', '')
    if ev in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            complete_ts_candidates.append(ts)
        src = r.get('summary', r)
        sends += src.get('sent', src.get('emailsSentCount', 0))
        suppressed += src.get('skippedDuplicateSuppression', 0)
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
        if 'No auth for gmail' in err_text:
            auth_fail += 1
        hot_followups += src.get('hotFollowups', 0)
        pc = src.get('potentialClients', 0)
        if pc:
            potential_clients = pc
        sc = src.get('scanned', 0)
        if sc:
            scanned = sc

if complete_ts_candidates:
    latest_complete = max(complete_ts_candidates)

print(f'Total runs: {total}')
print(f'Sends attempted: {sends}')
print(f'Duplicates suppressed: {suppressed}')
print(f'Auth failures: {auth_fail}')
print(f'Hot followups: {hot_followups}')
print(f'Latest complete: {latest_complete}')
print(f'Potential clients (latest): {potential_clients}')
print(f'Scanned (latest): {scanned}')

# Check for hot-followup events
for r in records:
    src = r.get('summary', r)
    hf = src.get('hotFollowups', 0)
    if hf:
        print(f'HOT-FOLLOWUP record found: {json.dumps(r, indent=2)}')
