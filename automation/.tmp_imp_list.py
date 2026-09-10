import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr.read_text())
imps = data.get('improvements', [])
print(f'improvements_count={len(imps)}')
for i in imps[-5:]:
    ts = i.get('ts', '')
    pat = i.get('pattern', '')
    recs = len(i.get('recommendations', []))
    print(f'  ts={ts} pattern={pat[:100]} recs={recs}')
