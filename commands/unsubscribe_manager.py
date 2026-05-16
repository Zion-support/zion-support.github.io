#!/usr/bin/env python3
"""
Email Unsubscribe Manager - Zion

Identifies and manages unwanted subscription emails.
Helps clean up inbox from marketing noise.

Usage:
  python3 unsubscribe_manager.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🛑 Unsubscribe Manager")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    to_unsubscribe = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Check if marketing email
        text = f"{sender} {subject}".lower()
        
        if any(kw in text for kw in ['unsubscribe', 'manage preferences', 'click here']):
            to_unsubscribe.append({'sender': sender[:30], 'subject': subject[:30]})
            print(f"   🛑 Unsubscribe: {sender[:28]}")
    
    # Save list
    unsub_file = WORKSPACE / 'zion.app' / 'data' / 'unsubscribe_list.json'
    unsub_file.write_text(json.dumps(to_unsubscribe, indent=2))
    
    print(f"✅ Found {len(to_unsubscribe)} newsletters to unsubscribe from")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()