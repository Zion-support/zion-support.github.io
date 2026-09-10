import json
from pathlib import Path
from collections import Counter

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
lines = [line for line in log.read_text().splitlines() if line.strip()]
records = [json.loads(line) for line in lines]

complete_events = [r for r in records if r.get('event') == 'complete']
complete_events.sort(key=lambda r: r.get('ts', ''), reverse=True)

print('Latest 5 complete events:')
for r in complete_events[:5]:
    summary = r.get('summary', {})
    print(f'  ts={r.get("ts")} sent={summary.get("sent",0)} potentialClients={summary.get("potentialClients",0)} scanned={summary.get("scanned",0)} errors={summary.get("errors",[])}')

print()
print('Complete events with potentialClients > 0 (most recent first):')
shown = 0
for r in complete_events:
    summary = r.get('summary', {})
    pc = summary.get('potentialClients', 0)
    if pc > 0:
        print(f'  ts={r.get("ts")} potentialClients={pc} scanned={summary.get("scanned",0)} sent={summary.get("sent",0)}')
        shown += 1
        if shown >= 10:
            print('  ... (showing first 10)')
            break
