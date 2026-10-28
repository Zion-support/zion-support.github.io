import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
lines = [l for l in log.read_text().splitlines() if l.strip()]
records = [json.loads(l) for l in lines]
complete_records = [r for r in records if r.get('event') == 'complete']
complete_records.sort(key=lambda r: r.get('ts', ''), reverse=True)
latest = complete_records[0] if complete_records else None
if latest:
    print(json.dumps(latest.get('summary', latest), indent=2))
