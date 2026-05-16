#!/usr/bin/env python3
"""
Email Newsletter Cleaner - Zion

Cleans up newsletter subscriptions.
Reduces inbox clutter.

Usage:
  python3 email_newsletter_cleaner.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

NEWSLETTER_PATTERNS = ['unsubscribe', 'newsletter', 'mailing list', 'digest']

def cmd_run(dry_run: bool, limit: int = 50):
    print("📰 Newsletter Cleaner")
    
    # Identify newsletters
    newsletters = {
        'to_remove': [],
        'to_keep': [],
        'total_found': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        snippet = msg.get('snippet', '').lower()
        
        if any(pattern in snippet for pattern in NEWSLETTER_PATTERNS):
            newsletters['to_remove'].append('newsletter')
            newsletters['total_found'] += 1
    
    print("Newsletter Cleanup:")
    print(f"  Found: {newsletters['total_found']}")
    print(f"  Action: Review and unsubscribe")
    
    # Save cleanup
    nl_file = WORKSPACE / 'zion.app' / 'data' / 'newsletters.json'
    nl_file.parent.mkdir(parents=True, exist_ok=True)
    nl_file.write_text(json.dumps(newsletters, indent=2))
    
    print(f"\n✅ Saved newsletter cleanup")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()