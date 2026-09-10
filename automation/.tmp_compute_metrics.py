import json
from pathlib import Path
from datetime import datetime, timezone

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
data = log.read_text()
lines = [l for l in data.splitlines() if l.strip()]
print(f"Total non-empty lines: {len(lines)}")

records = [json.loads(l) for l in lines]

# Categorize
events = {}
for r in records:
    ev = r.get('event', 'unknown')
    events[ev] = events.get(ev, 0) + 1
print("\nEvent counts:")
for k,v in sorted(events.items()):
    print(f"  {k}: {v}")

# Compute from complete/auth_missing
sends = 0
dups = 0
auth_fail = 0
hot = 0
latest_complete = None
candidates = []
potential = 0
scanned_total = 0

for r in records:
    ev = r.get('event','')
    src = r.get('summary', r)
    if ev in ('complete','auth_missing'):
        candidates.append(r.get('ts'))
        sent_val = src.get('sent', src.get('emailsSentCount', 0))
        sends += sent_val if isinstance(sent_val, (int,float)) else 0
        dups += src.get('skippedDuplicateSuppression', 0)
        errs = src.get('errors', [])
        if isinstance(errs, list):
            err_text = ' '.join(errs)
        else:
            err_text = str(errs)
        if 'No auth for gmail' in err_text:
            auth_fail += 1
        hot += src.get('hotFollowups', 0)
        if 'potentialClients' in src:
            potential = src['potentialClients']
        if 'scanned' in src:
            scanned_total = src['scanned']
        if 'tailored' in src:
            print(f"  [tailored event] ts={r.get('ts')} tailored={src['tailored']}")

if candidates:
    latest_complete = max(candidates)
print(f"\n--- Computed metrics ---")
print(f"totalRuns (all non-empty lines): {len(lines)}")
print(f"sendsAttempted (from complete summaries): {sends}")
print(f"duplicatesSuppressed: {dups}")
print(f"authFailures: {auth_fail}")
print(f"hotFollowups: {hot}")
print(f"latestComplete: {latest_complete}")
print(f"potentialClients (latest complete): {potential}")
print(f"scanned (latest complete): {scanned_total}")

if latest_complete:
    lc_dt = datetime.fromisoformat(latest_complete.replace('Z','+00:00'))
    print(f"\nlatestComplete datetime: {lc_dt}")
    print(f"Days since latestComplete: {(datetime.now(timezone.utc) - lc_dt).total_seconds()/86400:.2f}")
