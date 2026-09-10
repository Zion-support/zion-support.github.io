#!/usr/bin/env python3
"""Hot-followup label probe + sent-state check."""
import subprocess, sys, json
from pathlib import Path

SENT_FILE = Path('/Users/miami2/zion.app/automation/data/lead-outreach/hot-followup-sent.json')

# 1. Check sent-state file
print('=== HOT-FOLLOWUP SENT STATE ===')
if SENT_FILE.exists():
    try:
        data = json.loads(SENT_FILE.read_text())
        print(f'SENT_FILE: {json.dumps(data, indent=2)[:1000]}')
    except Exception as e:
        print(f'SENT_FILE_PARSE_ERROR: {e}')
else:
    print('SENT_FILE: NOT FOUND')

# 2. Probe hot-followup label
print()
print('=== HOT-FOLLOWUP LABEL PROBE ===')
try:
    result = subprocess.run(
        ['gog', 'gmail', 'search', 'label:!!!hot-follow-up', '--max', '5', '--plain', '--account', 'kleber@ziontechgroup.com', '--no-input'],
        capture_output=True, text=True, timeout=30
    )
    print(f'EXIT_CODE: {result.returncode}')
    print(f'STDOUT (first 800 chars):')
    print(result.stdout[:800] if result.stdout else '(empty)')
    print(f'STDERR (first 300 chars):')
    print(result.stderr[:300] if result.stderr else '(empty)')
except subprocess.TimeoutExpired:
    print('EXIT_CODE: TIMEOUT (30s)')
except FileNotFoundError:
    print('EXIT_CODE: ENOENT (gog not found)')
except Exception as e:
    print(f'ERROR: {e}')
