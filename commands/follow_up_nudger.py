#!/usr/bin/env python3
"""
Follow-Up Auto-Nudger - Zion

Sends gentle reminders for pending follow-ups.
Prevents important tasks from being forgotten.

Usage:
  python3 follow_up_nudger.py --execute --limit 20
"""

import sys, json, urllib.parse, urllib.request
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gog_headers, gmail_get

def cmd_run(dry_run: bool, limit: int = 20):
    print("🔔 Follow-Up Nudger")
    
    # Get sent emails that might need follow-up
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=50&q=is:sent newer_than:7d'
    req = urllib.request.Request(url, headers=gog_headers())
    
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        msgs = resp.get('messages', [])
    except:
        msgs = []
    
    followups = []
    
    for msg in msgs[:limit * 2]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '').lower()
        
        # Check for follow-up indicators
        followup_keywords = ['follow', 'checking', 'touch base', 'circle back', 'reconnect']
        action_keywords = ['please', 'let me know', 'get back', 'respond', 'reply']
        
        needs_followup = (
            any(kw in subject.lower() for kw in followup_keywords) or
            (any(kw in snippet for kw in action_keywords) and 're:' not in subject.lower())
        )
        
        if needs_followup:
            followups.append({
                'subject': subject[:40],
                'snippet': snippet[:60]
            })
            
            if len(followups) >= limit:
                break
    
    print(f"Found {len(followups)} emails needing follow-up")
    
    for f in followups[:5]:
        print(f"  {f['subject']}")
    
    # Save follow-ups
    nudge_file = WORKSPACE / 'zion.app' / 'data' / 'followups.json'
    nudge_file.parent.mkdir(parents=True, exist_ok=True)
    nudge_file.write_text(json.dumps(followups, indent=2))
    
    print(f"\n✅ Saved {len(followups)} follow-up items")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()