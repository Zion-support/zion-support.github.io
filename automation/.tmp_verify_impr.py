import json
from pathlib import Path

d = json.loads(Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json').read_text())
print('JSON_OK')
print('entries:', len(d['improvements']))
print('digests:', len(d['digests']))
print('last_entry_ts:', d['improvements'][-1]['ts'])
print('last_digest_ts:', d['digests'][-1]['ts'])
print('last_digest_status:', d['digests'][-1]['status'])
print('updatedAt:', d.get('updatedAt'))
