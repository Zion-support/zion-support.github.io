import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

data = json.loads(impr.read_text())
digests = data.get('digests', [])
latest = digests[-1] if digests else {}
metrics = latest.get('metrics', {})

print("=== Latest Digest ===")
print(json.dumps(latest, indent=2))
print("\n=== Latest improvements entry ===")
improvements = data.get('improvements', [])
if improvements:
    print(json.dumps(improvements[-1], indent=2))
print("\n=== File updatedAt ===")
print(data.get('updatedAt'))
