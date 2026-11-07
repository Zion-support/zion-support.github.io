import json
from pathlib import Path
p = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
d = json.loads(p.read_text())
dg = d['digests']
# Remove the stale blocked/auth-missing digest at index 5 (Dec 2026)
before = len(dg)
dg = [g for g in dg if not (g.get('status') == 'blocked/auth-missing' and '2026-12-19' in g.get('ts',''))]
d['digests'] = dg
p.write_text(json.dumps(d, indent=2) + '\n')
print(f'removed {before - len(dg)} stale digest(s), {len(dg)} remaining')
