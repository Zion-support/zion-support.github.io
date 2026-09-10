import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]

print('=== Complete events with potentialClients ===')
for r in records:
    if r.get('event') == 'complete':
        s = r.get('summary', r)
        pc = s.get('potentialClients', 'N/A')
        sc = s.get('scanned', 'N/A')
        sent = s.get('sent', s.get('emailsSentCount', 0))
        ts = r.get('ts', '')
        err = s.get('errors', [])
        print(f'{ts} potentialClients={pc} scanned={sc} sent={sent} errors={err}')
