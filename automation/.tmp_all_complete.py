import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

log_text = log_path.read_text()
lines = [line for line in log_text.splitlines() if line.strip()]
records = [json.loads(line) for line in lines]
complete_events = [r for r in records if r.get('event') in ('complete', 'auth_missing')]

print('=== ALL 300 COMPLETE EVENTS ===')
for i, r in enumerate(complete_events):
    ts = r.get('ts', 'NO_TS')
    src = r.get('summary', r)
    pc = src.get('potentialClients', 0)
    scanned = src.get('scanned', 'N/A')
    sent = src.get('sent', 0)
    errs = src.get('errors', [])
    print(f"{i+1:3d}. TS={ts} | pc={pc} | scanned={scanned} | sent={sent} | errors={errs}")

print(f'\nTotal complete events: {len(complete_events)}')