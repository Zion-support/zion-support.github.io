import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr.read_text())

print(f"Root keys: {list(data.keys())}")
print(f"Digests count: {len(data.get('digests', []))}")
print(f"Improvements count: {len(data.get('improvements', []))}")
print(f"Runs count: {len(data.get('runs', []))}")

# Latest digest
digests = data.get('digests', [])
if digests:
    latest = digests[-1]
    print(f"\n=== LATEST DIGEST (ts={latest.get('ts')}) ===")
    print(json.dumps(latest, indent=2, ensure_ascii=False))

# Latest improvements
impr_arr = data.get('improvements', [])
if impr_arr:
    latest_impr = impr_arr[-1]
    print(f"\n=== LATEST IMPROVEMENTS (ts={latest_impr.get('ts')}) ===")
    for k, v in latest_impr.items():
        if isinstance(v, (dict, list)):
            print(f"  {k}: <{type(v).__name__} len={len(v)}>")
        else:
            print(f"  {k}: {v}")
