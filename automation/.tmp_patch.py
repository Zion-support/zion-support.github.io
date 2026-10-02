import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
log  = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

data = json.loads(impr.read_text())
digests = data.get('digests', [])
latest = digests[-1] if digests else {}
metrics = latest.get('metrics', {})

records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]

# Recompute latestComplete from live log
candidates = [r.get('ts') for r in records if r.get('event') in ('complete', 'auth_missing') and r.get('ts')]
live_latest = max(candidates) if candidates else None

# Patch latestComplete in place if drifted
current_lc = metrics.get('latestComplete') or latest.get('latestComplete')
if live_latest and live_latest != current_lc:
    metrics['latestComplete'] = live_latest
    metrics['reconciliationDate'] = live_latest
    print(f'Patched latestComplete: {current_lc} -> {live_latest}')
else:
    print(f'No drift: latestComplete={current_lc}')

data['updatedAt'] = live_latest or data.get('updatedAt', '')
impr.write_text(json.dumps(data, indent=2, ensure_ascii=False))
print('Wrote improvements.json')
