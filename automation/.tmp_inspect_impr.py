import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr.read_text())

print("=== ROOT KEYS ===")
print(list(data.keys()))
print()
print("=== DIGESTS ===")
digests = data.get('digests', [])
print(f"count: {len(digests)}")
for i, d in enumerate(digests):
    print(f"--- digest {i} ---")
    print(json.dumps(d, indent=2, ensure_ascii=False))
    print()
print()
print("=== IMPROVEMENTS (last 3) ===")
impr_arr = data.get('improvements', [])
print(f"count: {len(impr_arr)}")
for i in range(max(0, len(impr_arr)-3), len(impr_arr)):
    print(f"--- impr {i} ---")
    print(json.dumps(impr_arr[i], indent=2, ensure_ascii=False))
    print()
