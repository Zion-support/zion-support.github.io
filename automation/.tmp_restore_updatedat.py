#!/usr/bin/env python3
"""Restore root updatedAt to original value since no meaningful change occurred."""
import json
from pathlib import Path

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr_path.read_text())

# Restore original updatedAt (tracks latestComplete, not file modification time)
data['updatedAt'] = '2026-09-07T01:27:59.585368Z'

impr_path.write_text(json.dumps(data, indent=2) + '\n')
print(f'updatedAt restored to: {data["updatedAt"]}')
print('DONE')
