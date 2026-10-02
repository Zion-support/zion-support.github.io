import json
import sys

# Read last 10 lines of log
with open('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl', 'r') as f:
    lines = f.readlines()

# Get last 10 non-empty lines
non_empty = [l.strip() for l in lines if l.strip()]
last_10 = non_empty[-10:]

print("=== LAST 10 NON-EMPTY LOG LINES ===")
for i, line in enumerate(last_10):
    try:
        r = json.loads(line)
        ev = r.get('event', 'unknown')
        ts = r.get('ts', 'N/A')
        if ev in ('complete', 'auth_missing'):
            summary = r.get('summary', r)
            pc = summary.get('potentialClients', 'N/A')
            sc = summary.get('scanned', 'N/A')
            sent = summary.get('sent', summary.get('emailsSentCount', 'N/A'))
            dupes = summary.get('skippedDuplicateSuppression', 'N/A')
            errs = summary.get('errors', 'N/A')
            hf = summary.get('hotFollowups', 'N/A')
            print(f"[{i}] event={ev}, ts={ts}")
            print(f"    potentialClients={pc}, scanned={sc}, sent={sent}, dupes={dupes}, hotFollowups={hf}")
            print(f"    errors={errs}")
        else:
            print(f"[{i}] event={ev}, ts={ts}")
    except json.JSONDecodeError:
        print(f"[{i}] PARSE_ERROR: {line[:80]}")

print()
print("=== SUMMARY ===")
print(f"Total non-empty lines: {len(non_empty)}")
