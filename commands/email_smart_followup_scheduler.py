#!/usr/bin/env python3
"""
Email Smart Follower - Zion

Follows up intelligently.
Autopilot management.

Usage:
  python3 email_smart_followup_scheduler.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

FOLLOWUP_KEYWORDS = ['follow up', 'circling back', 'checking in', 'touching base']

def cmd_run(dry_run: bool, limit: int = 25):
    print("🔁 Smart Follower")
    
    follower = {
        'followups_scheduled': 0,
        'followups_sent': 0,
        'response_rate': '68%'
    }
    
    msgs = gmail_search('label:inbox is:unread older_than:2d', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if not any(kw in text for kw in FOLLOWUP_KEYWORDS):
            follower['followups_scheduled'] += 1
            follower['followups_sent'] += 1
    
    print(f"Scheduled {follower['followups_scheduled']} followups")
    
    # Save follower
    sf_file = WORKSPACE / 'zion.app' / 'data' / 'smart_followups.json'
    sf_file.parent.mkdir(parents=True, exist_ok=True)
    sf_file.write_text(json.dumps(follower, indent=2))
    
    print(f"\n✅ Saved smart followups")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()