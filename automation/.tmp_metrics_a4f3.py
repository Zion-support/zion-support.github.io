import json
from pathlib import Path
from datetime import datetime, timezone

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

log_text = log_path.read_text()
lines = [l for l in log_text.splitlines() if l.strip()]
records = [json.loads(l) for l in lines]

total_runs = len(records)

sends_attempted = 0
dupes_suppressed = 0
auth_failures = 0
hot_followups = 0
candidates_ts = []
potential_clients_list = []
scanned_list = []

for r in records:
    ev = r.get('event', '')
    src = r.get('summary', r)
    # sends attempted: sum sent / emailsSentCount
    sent = src.get('sent', 0)
    if sent is None:
        sent = src.get('emailsSentCount', 0)
    if isinstance(sent, (int, float)):
        sends_attempted += int(sent)
    
    dsup = src.get('skippedDuplicateSuppression', 0)
    if isinstance(dsup, (int, float)):
        dupes_suppressed += int(dsup)
    
    errs = src.get('errors', [])
    if isinstance(errs, list):
        err_text = ' '.join(errs)
    else:
        err_text = str(errs)
    if 'No auth for gmail' in err_text:
        auth_failures += 1
    
    hf = src.get('hotFollowups', 0)
    if isinstance(hf, (int, float)):
        hot_followups += int(hf)
    
    if ev in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            candidates_ts.append(ts)
        pc = src.get('potentialClients')
        if pc is not None:
            potential_clients_list.append(pc)
        sc = src.get('scanned')
        if sc is not None:
            scanned_list.append(sc)

latest_complete = max(candidates_ts) if candidates_ts else None

# potentialClients: latest complete event value (not sum)
potential_clients = potential_clients_list[-1] if potential_clients_list else 0
scanned = scanned_list[-1] if scanned_list else 0

print("=== COMPUTED METRICS ===")
print(f"totalRuns: {total_runs}")
print(f"sendsAttempted: {sends_attempted}")
print(f"duplicatesSuppressed: {dupes_suppressed}")
print(f"authFailures: {auth_failures}")
print(f"hotFollowups: {hot_followups}")
print(f"latestComplete: {latest_complete}")
print(f"potentialClients (latest): {potential_clients}")
print(f"scanned (latest): {scanned}")

# Load improvements.json
data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
improvements = data.get('improvements', [])
print("\n=== IMPROVEMENTS.JSON STATE ===")
print(f"digests count: {len(digests)}")
print(f"improvements count: {len(improvements)}")

if digests:
    latest_digest = digests[-1]
    dm = latest_digest.get('metrics', {})
    print(f"\n=== LATEST DIGEST ===")
    print(f"status: {latest_digest.get('status')}")
    for k in ['totalRuns','sendsAttempted','duplicatesSuppressed','authFailures','hotFollowups','latestComplete','potentialClients','scanned']:
        dv = dm.get(k)
        cv = None
        if k == 'totalRuns': cv = total_runs
        elif k == 'sendsAttempted': cv = sends_attempted
        elif k == 'duplicatesSuppressed': cv = dupes_suppressed
        elif k == 'authFailures': cv = auth_failures
        elif k == 'hotFollowups': cv = hot_followups
        elif k == 'latestComplete': cv = latest_complete
        elif k == 'potentialClients': cv = potential_clients
        elif k == 'scanned': cv = scanned
        match = (dv == cv) if (dv is not None and cv is not None) else (dv is cv)
        status = "OK" if match else f"MISMATCH (digest={dv} computed={cv})"
        print(f"  {k}: {status}")

print("\n=== IMPROVEMENTS ARRAY (last 3) ===")
for imp in improvements[-3:]:
    print(f"  ts={imp.get('ts')} pattern={imp.get('pattern','')[:60]}...")

# Check if there's a meaningful delta
print("\n=== DELTA ANALYSIS ===")
digest_matches = True
if digests:
    dm = digests[-1].get('metrics', {})
    checks = [
        ('totalRuns', dm.get('totalRuns'), total_runs),
        ('sendsAttempted', dm.get('sendsAttempted'), sends_attempted),
        ('duplicatesSuppressed', dm.get('duplicatesSuppressed'), dupes_suppressed),
        ('authFailures', dm.get('authFailures'), auth_failures),
        ('hotFollowups', dm.get('hotFollowups'), hot_followups),
        ('latestComplete', dm.get('latestComplete'), latest_complete),
    ]
    for name, dv, cv in checks:
        if dv != cv:
            print(f"  DELTA: {name} digest={dv} computed={cv}")
            digest_matches = False
    if digest_matches:
        print("  No metric deltas vs latest digest")
else:
    print("  No digests exist")

# Check hot followup threads
print("\n=== HOT FOLLOWUP ANALYSIS ===")
# Check if any complete events mention hotFollowups > 0
hf_events = [r for r in records if r.get('summary', r).get('hotFollowups', 0) > 0]
print(f"  events with hotFollowups>0: {len(hf_events)}")
if hf_events:
    for e in hf_events[-2:]:
        print(f"    ts={e.get('ts')} hf={e.get('summary', e).get('hotFollowups')} thread_id={e.get('summary', e).get('threadId')}")

# Also check if there's a hot-followup label file or sent file
import os
hf_sent_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/hot-followup-sent.json')
if hf_sent_path.exists():
    hf_sent = json.loads(hf_sent_path.read_text())
    print(f"  hot-followup-sent.json exists: {len(hf_sent)} entries")
else:
    print(f"  hot-followup-sent.json: not found")

print("\n=== AUTH STATUS ===")
print(f"  authFailures computed: {auth_failures}")
print(f"  latest digest status: {digests[-1].get('status') if digests else 'N/A'}")
print("SNAPSHOT_DONE")
