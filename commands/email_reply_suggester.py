#!/usr/bin/env python3
"""
Email Reply Suggester - Zion

Suggests reply options for incoming emails.
Reduces response time with quick options.

Usage:
  python3 email_reply_suggester.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

REPLIES = {
    'meeting': ['Yes, let me check my calendar', 'Can we do 2 PM instead?', 'Let me confirm with team first'],
    'info': ['I will send that shortly', 'Here is what you asked for', 'Let me gather that information'],
    'urgent': ['On it now', 'Addressing immediately', 'Priority handling'],
    'default': ['Got it, working on it', 'Thanks for the update', 'I will review and respond']
}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("💬 Email Reply Suggester")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    suggestions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Get suggestion
        key = 'default'
        for k in REPLIES.keys():
            if k in text:
                key = k
                break
        
        suggestions.append({'subject': subject[:30], 'replies': REPLIES[key][:2]})
        print(f"   💬 {key}: {subject[:20]}")
    
    print(f"✅ Suggested replies for {len(suggestions)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()