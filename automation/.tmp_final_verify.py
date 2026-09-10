#!/usr/bin/env python3
"""Final verification: confirm improvements.json is back to original state with 1 entry."""
import json
from pathlib import Path

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr_path.read_text())

print(f'Improvements entries: {len(data["improvements"])}')
print(f'Digests: {len(data["digests"])}')
print(f'updatedAt: {data.get("updatedAt")}')

if data['improvements']:
    latest = data['improvements'][-1]
    print(f'Latest improvement ts: {latest["ts"]}')
    print(f'Latest improvement metrics: {json.dumps(latest["metrics"], indent=2)}')

# Also verify the file parses cleanly
print('JSON_PARSE_OK')
print('VERIFICATION_COMPLETE')
