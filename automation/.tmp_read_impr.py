import json
from pathlib import Path

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr_path.read_text())

# Check digests
digests = data.get('digests', [])
print(f'Digests count: {len(digests)}')
if digests:
    latest = digests[-1]
    print(f'Latest digest ts: {latest.get("ts")}')
    print(f'Latest digest status: {latest.get("status")}')
    print(f'Latest digest metrics: {json.dumps(latest.get("metrics", {}), indent=2)}')
    print(f'Latest digest top-level keys: {list(latest.keys())}')

# Check improvements
improvements = data.get('improvements', [])
print(f'\nImprovements count: {len(improvements)}')
if improvements:
    latest_imp = improvements[-1]
    print(f'Latest improvement ts: {latest_imp.get("ts")}')
    print(f'Latest improvement keys: {list(latest_imp.keys())}')
    if latest_imp.get("pattern"):
        print(f'Latest improvement pattern: {latest_imp["pattern"][:300]}')
    if latest_imp.get("recommendations"):
        print(f'Latest improvement recommendations: {latest_imp["recommendations"][:300]}')
