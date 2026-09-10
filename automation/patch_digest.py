#!/usr/bin/env python3
import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr.read_text())
digests = data['digests']
latest = digests[-1]

metrics = latest['metrics']
metrics['authFailures'] = 1
metrics['reconciliationDate'] = '2026-09-08T14:00:00Z'
metrics['reconciliationNote'] = metrics.get('reconciliationNote', '') + ' | Revised 2026-09-08T14:00Z: authFailures corrected 0->1 (single gog gmail search timeout on 2026-09-06T18:25:06Z, 70s timeout, no "No auth for gmail" error). All other metrics unchanged.'

data['updatedAt'] = '2026-09-08T14:00:00Z'

impr.write_text(json.dumps(data, indent=2))
print('PATCHED: authFailures=1, reconciliationDate updated, root updatedAt refreshed')
