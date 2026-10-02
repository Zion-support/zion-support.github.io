import json
from pathlib import Path

imp_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

data = json.loads(imp_path.read_text())
print('ROOT_KEYS:', list(data.keys()))
print()

digests = data.get('digests', [])
print('DIGESTS_COUNT:', len(digests))
if digests:
    latest = digests[-1]
    print('LATEST_DIGEST:')
    print(json.dumps(latest, indent=2, ensure_ascii=False))
    metrics = latest.get('metrics', {})
    print('\nLATEST_METRICS:')
    print(json.dumps(metrics, indent=2, ensure_ascii=False))
    print('\nLATEST_TOP_LEVEL_FIELDS (excluding metrics):')
    for k, v in latest.items():
        if k != 'metrics':
            print(f'  {k}: {json.dumps(v, ensure_ascii=False)[:200]}')

improvements = data.get('improvements', [])
print('\nIMPROVEMENTS_COUNT:', len(improvements))
if improvements:
    latest_imp = improvements[-1]
    print('LATEST_IMPROVEMENT:')
    print(json.dumps(latest_imp, indent=2, ensure_ascii=False))
