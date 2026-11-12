import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr.read_text())

print("=== ALL IMPROVEMENTS (ts + pattern summary) ===")
for i, entry in enumerate(data.get('improvements', [])):
    ts = entry.get('ts', '?')
    pattern = entry.get('pattern', '')
    recs = entry.get('recommendations', [])
    recs_str = ' | '.join(recs[:3]) if recs else ''
    print(f"[{i}] ts={ts}")
    print(f"    pattern: {pattern[:200]}")
    if recs_str:
        print(f"    recs: {recs_str[:200]}")
    print()
