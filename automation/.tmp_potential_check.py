import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

log_text = log_path.read_text()
lines = [line for line in log_text.splitlines() if line.strip()]
records = [json.loads(line) for line in lines]
complete_events = [r for r in records if r.get('event') in ('complete', 'auth_missing')]

print('=== ALL COMPLETE EVENTS WITH potentialClients > 0 ===')
for r in complete_events:
    src = r.get('summary', r)
    pc = src.get('potentialClients', 0)
    if pc and pc > 0:
        print(f"TS: {r.get('ts')} | potentialClients: {pc} | scanned: {src.get('scanned', 'N/A')} | sent: {src.get('sent', 0)}")

print()
print('=== ALL COMPLETE EVENTS (first 30) ===')
all_ts = [(r.get('ts'), r.get('summary', r).get('potentialClients', 0)) for r in complete_events]
for ts, pc in all_ts[:30]:
    print(f"TS: {ts} | potentialClients: {pc}")

print()
print(f'Total complete events: {len(complete_events)}')
print(f'Events with potentialClients > 0: {sum(1 for r in complete_events if r.get("summary", r).get("potentialClients", 0) > 0)}')

# Find exact point where potentialClients drops to 0
print()
print('=== POTENTIAL CLIENTS TIMELINE (looking for the drop) ===')
prev_pc = None
for r in complete_events:
    src = r.get('summary', r)
    pc = src.get('potentialClients', 0)
    ts = r.get('ts')
    if prev_pc is not None and pc == 0 and prev_pc > 0:
        print(f'DROP DETECTED: {ts} | potentialClients went from {prev_pc} -> {pc}')
    prev_pc = pc
PYEOF