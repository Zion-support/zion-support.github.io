import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
if not log.exists():
    print('LOG_NOT_FOUND')
    exit(0)

lines = [l for l in log.read_text().splitlines() if l.strip()]
print(f'TOTAL_NON_EMPTY_LINES: {len(lines)}')

total_runs = 0
sends_attempted = 0
duplicates_suppressed = 0
auth_failures = 0
hot_followups = 0
latest_complete = None
potential_clients = 0
scanned = 0

complete_candidates = []

for line in lines:
    try:
        r = json.loads(line)
    except:
        continue
    
    total_runs += 1
    
    event = r.get('event', '')
    summary = r.get('summary', r)
    
    if event in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            complete_candidates.append(ts)
        summary_ts = summary.get('ts')
        if summary_ts and not r.get('ts'):
            complete_candidates.append(summary_ts)
    
    sent_val = summary.get('sent', summary.get('emailsSentCount', 0))
    if isinstance(sent_val, (int, float)):
        sends_attempted += sent_val
    
    dup_val = summary.get('skippedDuplicateSuppression', 0)
    if isinstance(dup_val, (int, float)):
        duplicates_suppressed += dup_val
    
    errs = summary.get('errors', [])
    if isinstance(errs, list):
        err_text = ' '.join(str(e) for e in errs)
    else:
        err_text = str(errs)
    if 'No auth for gmail' in err_text:
        auth_failures += 1
    
    hf = summary.get('hotFollowups', 0)
    if isinstance(hf, (int, float)):
        hot_followups += hf
    
    pc = summary.get('potentialClients', 0)
    if isinstance(pc, (int, float)):
        potential_clients = pc
    
    sc = summary.get('scanned', 0)
    if isinstance(sc, (int, float)):
        scanned = sc

if complete_candidates:
    latest_complete = max(complete_candidates)

print(f'TOTAL_RUNS: {total_runs}')
print(f'SENDS_ATTEMPTED: {sends_attempted}')
print(f'DUPLICATES_SUPPRESSED: {duplicates_suppressed}')
print(f'AUTH_FAILURES: {auth_failures}')
print(f'HOT_FOLLOWUPS: {hot_followups}')
print(f'LATEST_COMPLETE: {latest_complete}')
print(f'POTENTIAL_CLIENTS: {potential_clients}')
print(f'SCANNED: {scanned}')

print()
print('=== LAST 5 RECORDS ===')
for line in lines[-5:]:
    try:
        r = json.loads(line)
        print(json.dumps(r)[:400])
    except:
        print(line[:400])
print()
print('=== FIRST 3 RECORDS ===')
for line in lines[:3]:
    try:
        r = json.loads(line)
        print(json.dumps(r)[:400])
    except:
        print(line[:400])
