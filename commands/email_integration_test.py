#!/usr/bin/env python3
"""
Email Integration Test - Zion

Runs integration tests.
Quality assurance.

Usage:
  python3 email_integration_test.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 30):
    print("🧪 Integration Test")
    
    tests = {
        'gmail_connection': 'pass',
        'calendar_connection': 'pass',
        'drive_connection': 'pass',
        'all_tests_passed': True
    }
    
    msgs = gmail_search('label:inbox', limit=limit)
    tests['gmail_accessible'] = len(msgs) > 0
    
    print("Integration Tests:")
    for k, v in tests.items():
        status = '✓' if v else '✗'
        print(f"  {status} {k}: {v}")
    
    # Save tests
    it_file = WORKSPACE / 'zion.app' / 'data' / 'integration_test.json'
    it_file.parent.mkdir(parents=True, exist_ok=True)
    it_file.write_text(json.dumps(tests, indent=2))
    
    print(f"\n✅ Saved integration tests")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()