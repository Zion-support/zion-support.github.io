import json
from pathlib import Path

data_dir = Path('/Users/miami2/zion.app/automation/data/lead-outreach')
log = data_dir / 'outreach-log.jsonl'
imp = data_dir / 'improvements.json'

records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]
data = json.loads(imp.read_text())

total_runs = len(records)
sends_attempted = 0
duplicates_suppressed = 0
auth_failures = 0
hot_followups = 0
latest_complete = None
potential_clients = 0
scanned = 0
complete_events = []

for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts and (latest_complete is None or ts > latest_complete):
            latest_complete = ts
        src = r.get('summary', r)
        complete_events.append(r)
        sends_attempted += src.get('sent', src.get('emailsSentCount', 0))
        duplicates_suppressed += src.get('skippedDuplicateSuppression', 0)
        hot_followups += src.get('hotFollowups', 0)
        pc = src.get('potentialClients', 0)
        if pc > potential_clients:
            potential_clients = pc
        sc = src.get('scanned', 0)
        if sc > scanned:
            scanned = sc

for r in records:
    src = r.get('summary', r)
    errors = src.get('errors', [])
    if isinstance(errors, list):
        err_text = ' '.join(errors)
    else:
        err_text = str(errors)
    if 'No auth for gmail' in err_text:
        auth_failures += 1

print('=== LIVE METRICS ===')
print(f'totalRuns: {total_runs}')
print(f'sendsAttempted: {sends_attempted}')
print(f'duplicatesSuppressed: {duplicates_suppressed}')
print(f'authFailures: {auth_failures}')
print(f'hotFollowups: {hot_followups}')
print(f'latestComplete: {latest_complete}')
print(f'potentialClients (max in any complete): {potential_clients}')
print(f'scanned (max): {scanned}')
print(f'complete/auth_missing events: {len(complete_events)}')
print()

# Check last complete event's potentialClients specifically
last_complete = complete_events[-1] if complete_events else None
if last_complete:
    lc_pc = last_complete.get('summary', last_complete).get('potentialClients', 0)
    print(f'Last complete event potentialClients: {lc_pc}')
    print(f'Last complete event scanned: {last_complete.get("summary", last_complete).get("scanned", 0)}')
    print(f'Last complete ts: {last_complete.get("ts")}')
print()

# Check digests
digests = data.get('digests', [])
print(f'Digest count: {len(digests)}')
if digests:
    latest_digest = digests[-1]
    print(f'Latest digest ts: {latest_digest.get("ts")}')
    print(f'Latest digest status: {latest_digest.get("status")}')
    m = latest_digest.get('metrics', {})
    print(f'Digest metrics: {json.dumps(m, indent=2)}')
print()

improvements = data.get('improvements', [])
print(f'Improvements count: {len(improvements)}')
if improvements:
    print(f'Latest improvement ts: {improvements[-1].get("ts")}')
    print(f'Latest improvement pattern: {improvements[-1].get("pattern","")[:120]}')
