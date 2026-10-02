import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
for i, line in enumerate(log.read_text().splitlines(), 1):
    if line.strip():
        r = json.loads(line)
        event = r.get('event', 'NO_EVENT')
        if event in ('complete', 'auth_missing'):
            ts = r.get('ts', 'NO_TS')
            s = r.get('summary', {})
            print(f'Line {i}: event={event} ts={ts} sent={s.get("sent","N/A")} skip={s.get("skippedDuplicateSuppression","N/A")} errors={s.get("errors","N/A")} scanned={s.get("scanned","N/A")} potential={s.get("potentialClients","N/A")}')
