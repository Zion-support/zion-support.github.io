#!/usr/bin/env python3
"""
Inbox Zero Assistant - Zion

Works toward achieving inbox zero through automated processing.
Applies intelligent rules for quick email triage.

Usage:
  python3 inbox_zero_assistant.py --execute --limit 50
"""

import sys, json, urllib.parse, urllib.request
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gog_headers

AUTO_ARCHIVE_RULES = [
    ('promotions', 'label:promotions OR label:marketing'),
    ('notifications', 'from:notifications@ OR from:noreply@'),
    ('newsletters', 'subject:unsubscribe OR subject:newsletter'),
    ('automated', 'from:mailer-daemon@ OR subject:auto-'),
]

def cmd_run(dry_run: bool, limit: int = 50):
    print("🎯 Inbox Zero Assistant")
    
    processed = 0
    archived = 0
    
    for rule_name, query in AUTO_ARCHIVE_RULES:
        msgs = gmail_search(query + ' is:unread', limit=limit)
        
        for msg in msgs[:limit]:
            msg_id = msg['id']
            
            if not dry_run:
                # Archive the message
                url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}/modify'
                data = {'removeLabelIds': ['INBOX']}
                req = urllib.request.Request(url, headers={**gog_headers(), 'Content-Type': 'application/json'},
                                              data=json.dumps(data).encode())
                try:
                    urllib.request.urlopen(req)
                    archived += 1
                except:
                    pass
            processed += 1
    
    print(f"Processed {processed} emails")
    print(f"{'Would archive' if dry_run else 'Archived'} {archived} emails")
    
    # Count remaining
    remaining_url = 'https://gmail.googleapis.com/gmail/v1/users/me/labels/INBOX'
    remaining_req = urllib.request.Request(remaining_url, headers=gog_headers())
    try:
        remaining_resp = json.loads(urllib.request.urlopen(remaining_req).read())
        print(f"Remaining in inbox: {remaining_resp.get('messagesTotal', 0)}")
    except:
        pass

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()