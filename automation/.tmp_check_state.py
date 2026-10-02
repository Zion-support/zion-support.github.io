import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
records = [json.loads(l) for l in log.read_text().splitlines() if l.strip()]

total = len(records)
sends = 0
dup = 0
auth = 0
hf = 0
pot = 0
scanned = 0
latest_complete = None

for r in records:
    ev = r.get('event')
    if ev in ('complete', 'auth_missing') and r.get('ts'):
        if latest_complete is None or r['ts'] > latest_complete:
            latest_complete = r['ts']
    src = r.get('summary', r)
    if isinstance(src, dict):
        sends += src.get('sent', src.get('emailsSentCount', 0))
        dup += src.get('skippedDuplicateSuppression', 0)
        err = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
        if 'No auth for gmail' in err:
            auth += 1
        hf += src.get('hotFollowups', 0)
        if src.get('potentialClients') is not None:
            pot = src['potentialClients']
        if src.get('scanned') is not None:
            scanned = src['scanned']

print(f"Total runs: {total}")
print(f"Sends attempted: {sends}")
print(f"Duplicates suppressed: {dup}")
print(f"Auth failures: {auth}")
print(f"Hot followups: {hf}")
print(f"Potential clients (latest): {pot}")
print(f"Scanned (latest): {scanned}")
print(f"Latest complete ts: {latest_complete}")

print("\n--- Tail events ---")
for r in records[-6:]:
    print(json.dumps(r, indent=2))


# Also check for hot-follow-up label
import subprocess
try:
    result = subprocess.run(
        ['gog', 'gmail', 'search', 'label:!!!hot-follow-up', '--max', '5', '--plain', '--no-input'],
        capture_output=True, text=True, timeout=30
    )
    print("\n--- Hot follow-up label search ---")
    print("STDOUT:", result.stdout[:2000])
    print("STDERR:", result.stderr[:500])
    print("Return code:", result.returncode)
except Exception as e:
    print(f"Hot follow-up search error: {e}")
