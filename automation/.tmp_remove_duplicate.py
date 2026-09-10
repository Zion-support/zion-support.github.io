#!/usr/bin/env python3
"""Remove the duplicate improvements entry appended at 2026-09-08T17:10:36Z."""
import json
from pathlib import Path

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr_path.read_text())

# Remove the entry appended this cycle (ts starting with 2026-09-08T17:10)
initial_len = len(data['improvements'])
data['improvements'] = [e for e in data['improvements'] if not e['ts'].startswith('2026-09-08T17:10')]
removed = initial_len - len(data['improvements'])
print(f'Removed {removed} duplicate entry/entries')
print(f'Remaining improvements entries: {len(data["improvements"])}')

impr_path.write_text(json.dumps(data, indent=2) + '\n')
print('DONE')
