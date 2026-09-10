import json
from pathlib import Path

# Check all complete events for potentialClients values
log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
records = [json.loads(line) for line in log_path.read_text().splitlines() if line.strip()]

complete_events = [r for r in records if r.get('event') == 'complete']
print(f"Total complete events: {len(complete_events)}")

# Show potentialClients distribution
pot_values = {}
for r in complete_events:
    pc = r.get('summary', r).get('potentialClients', 0)
    pot_values[pc] = pot_values.get(pc, 0) + 1

print("\nPotentialClients distribution across complete events:")
for pc, count in sorted(pot_values.items(), reverse=True):
    print(f"  potentialClients={pc}: {count} events")

# Show the last 10 complete events with their potentialClients
print("\nLast 10 complete events (ts, potentialClients, scanned, sent):")
for r in complete_events[-10:]:
    s = r.get('summary', r)
    print(f"  {r.get('ts')}: pot={s.get('potentialClients', 0)}, scanned={s.get('scanned', 0)}, sent={s.get('sent', 0)}, errors={s.get('errors', [])}")

# Check first complete events too
print("\nFirst 5 complete events:")
for r in complete_events[:5]:
    s = r.get('summary', r)
    print(f"  {r.get('ts')}: pot={s.get('potentialClients', 0)}, scanned={s.get('scanned', 0)}, sent={s.get('sent', 0)}")

# Check for any complete events with potentialClients > 0
positive_pc = [r for r in complete_events if r.get('summary', r).get('potentialClients', 0) > 0]
print(f"\nComplete events with potentialClients > 0: {len(positive_pc)}")
if positive_pc:
    print("Most recent positive:")
    r = positive_pc[-1]
    s = r.get('summary', r)
    print(f"  {r.get('ts')}: pot={s.get('potentialClients', 0)}, scanned={s.get('scanned', 0)}, sent={s.get('sent', 0)}")
