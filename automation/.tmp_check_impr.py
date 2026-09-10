import json
from pathlib import Path
data = json.loads(Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json').read_text())
impr = data.get('improvements', [])
if impr:
    latest = impr[-1]
    print('LATEST_IMPROVEMENTS_ENTRY:')
    print(json.dumps(latest, indent=2))
else:
    print('NO_IMPROVEMENTS_ENTRIES')
