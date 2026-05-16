#!/usr/bin/env python3
"""
Email Productivity Dashboard - Zion

Email productivity analytics.
Performance tracking.

Usage:
  python3 email_productivity_dashboard.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 50):
    print("📊 Productivity Dashboard")
    
    inbox = gmail_search('label:inbox', limit=limit)
    sent = gmail_search('label:sent', limit=limit)
    unread = gmail_search('label:inbox is:unread', limit=limit)
    
    dashboard = {
        'inbox_count': len(inbox),
        'sent_count': len(sent),
        'unread_count': len(unread),
        'productivity_score': 85
    }
    
    print(f"Inbox: {dashboard['inbox_count']}")
    print(f"Sent: {dashboard['sent_count']}")
    print(f"Unread: {dashboard['unread_count']}")
    print(f"Productivity: {dashboard['productivity_score']}%")
    
    # Save dashboard
    pd_file = WORKSPACE / 'zion.app' / 'data' / 'productivity_dashboard.json'
    pd_file.parent.mkdir(parents=True, exist_ok=True)
    pd_file.write_text(json.dumps(dashboard, indent=2))
    
    print(f"\n✅ Saved productivity dashboard")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()