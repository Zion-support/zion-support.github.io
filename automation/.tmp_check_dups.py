import json
from pathlib import Path
d = json.loads(Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json').read_text())
dg = d['digests']
# Check duplicate timestamps
ts_map = {}
for i, g in enumerate(dg):
    ts = g.get('ts','')
    ts_map.setdefault(ts, []).append(i)
for ts, idxs in ts_map.items():
    if len(idxs) > 1:
        print(f'DUPLICATE ts={ts} indices={idxs}')
    else:
        print(f'unique ts={ts} index={idxs[0]}')
print('---')
print('Latest digest index:', len(dg)-1)
print('Latest ts:', dg[-1].get('ts'))
print('Latest status:', dg[-1].get('status'))
print('Latest metrics:', json.dumps(dg[-1].get('metrics',{}), indent=2))
