import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
data = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]

last_impr_ts = "2026-09-09T04:01:39.205258Z"
new_events = []
for r in data:
    ts = r.get('ts') or ''
    ev = r.get('event','')
    if ev in ('complete','auth_missing') and ts > last_impr_ts:
        new_events.append(r)

print(f"New complete/auth_missing events since last improvements entry: {len(new_events)}")
for e in new_events:
    print(json.dumps(e, indent=2))

# Also check for any sends since last improvements entry
new_sends = []
for r in data:
    ts = r.get('ts') or ''
    ev = r.get('event','')
    if ev == 'send' and ts > last_impr_ts:
        new_sends.append(r)

print(f"\nNew send events since last improvements entry: {len(new_sends)}")
for e in new_sends:
    print(json.dumps(e, indent=2))
