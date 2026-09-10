#!/usr/bin/env python3
"""Full canonical verifier + source log inspection."""
import json, sys
from pathlib import Path
from collections import Counter

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

log_text = log_path.read_text()
lines = [l for l in log_text.splitlines() if l.strip()]
records = []
parse_failures = 0
for line in lines:
    try:
        records.append(json.loads(line))
    except Exception as e:
        parse_failures += 1
        pass

print(f'TOTAL_NON_EMPTY_LINES: {len(lines)}')
print(f'PARSEABLE_RECORDS: {len(records)}')
print(f'PARSE_FAILURES: {parse_failures}')
print(f'EVENT_COUNTS: {dict(Counter(r.get("event","?") for r in records))}')

# Full canonical verifier
totalRuns = len(lines)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
candidates = []
potentialClientsByComplete = []

for r in records:
    ev = r.get('event')
    ts = r.get('ts')
    if ev in ('complete', 'auth_missing') and ts:
        candidates.append(ts)
    src = r.get('summary', r)
    sendsAttempted += src.get('sent', src.get('emailsSentCount', 0))
    duplicatesSuppressed += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
    if 'No auth for gmail' in err_text:
        authFailures += 1
    hotFollowups += src.get('hotFollowups', 0)
    if ev == 'complete':
        pc = src.get('potentialClients', 0)
        potentialClientsByComplete.append((ts, pc, src.get('scanned', 0), src.get('sent', 0)))

latestComplete = max(candidates) if candidates else None

print(f'TOTAL_RUNS: {totalRuns}')
print(f'SENDS_ATTEMPTED: {sendsAttempted}')
print(f'DUPLICATES_SUPPRESSED: {duplicatesSuppressed}')
print(f'AUTH_FAILURES: {authFailures}')
print(f'HOT_FOLLOWUPS: {hotFollowups}')
print(f'LATEST_COMPLETE: {latestComplete}')
print(f'LATEST_COMPLETE_CANDIDATES: {len(candidates)}')

# Show all complete events
print('---ALL COMPLETE EVENTS (ts, potentialClients, scanned, sent, errors)---')
for ts, pc, scanned, sent in potentialClientsByComplete:
    print(f'  {ts}  pc={pc}  scanned={scanned}  sent={sent}')

# Also show auth_missing events
print('---AUTH_MISSING EVENTS---')
for r in records:
    if r.get('event') == 'auth_missing':
        print(f'  ts={r.get("ts")}  summary={json.dumps(r.get("summary",{}), indent=4)[:400]}')

# Show last 3 records
print('---LAST 3 RECORDS---')
for r in records[-3:]:
    print(json.dumps(r, indent=2)[:600])
    print('---')

# Current latest digest
data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
print(f'DIGEST_COUNT: {len(digests)}')
if digests:
    latest = digests[-1]
    print(f'LATEST_DIGEST:')
    print(json.dumps(latest, indent=2)[:1500])
