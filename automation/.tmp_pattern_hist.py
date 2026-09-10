import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]
completes = [r for r in records if r.get('event') == 'complete']

print(f'Total complete events: {len(completes)}')
print('First 3:')
for c in completes[:3]:
    s = c.get('summary', {})
    print(f"  ts={c.get('ts')} pc={s.get('potentialClients')} sent={s.get('sent')} scanned={s.get('scanned')}")
print('Last 5:')
for c in completes[-5:]:
    s = c.get('summary', {})
    print(f"  ts={c.get('ts')} pc={s.get('potentialClients')} sent={s.get('sent')} scanned={s.get('scanned')}")

# History of potentialClients over time
print('\nPotentialClients history (first occurrence of each value):')
seen = {}
for c in completes:
    pc = c.get('summary', {}).get('potentialClients', 0)
    if pc not in seen:
        seen[pc] = c.get('ts')
for pc in sorted(seen.keys()):
    print(f'  pc={pc}: first seen at {seen[pc]}')

# Transition point: 18 -> 0
pc18_ts = seen.get(18)
pc0_ts = seen.get(0)
if pc18_ts and pc0_ts:
    print(f'\nTransition: pool at 18 until ~{pc18_ts}, dropped to 0 at {pc0_ts}')
