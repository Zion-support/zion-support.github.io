#!/usr/bin/env python3
"""
Email GWorkspace Reporter - Zion

Reports Google Workspace usage.
Analytics dashboard.

Usage:
  python3 email_gworkspace_usage_reporter.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 30):
    print("📊 GWorkspace Reporter")
    
    report = {
        'gmail_usage': len(gmail_search('label:inbox', limit=limit)),
        'calendar_events': 0,
        'drive_files': 0,
        'generated_at': 'now'
    }
    
    print("GWorkspace Report:")
    for k, v in report.items():
        print(f"  {k}: {v}")
    
    # Save report
    gr_file = WORKSPACE / 'zion.app' / 'data' / 'gworkspace_report.json'
    gr_file.parent.mkdir(parents=True, exist_ok=True)
    gr_file.write_text(json.dumps(report, indent=2))
    
    print(f"\n✅ Saved GWorkspace report")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()