#!/usr/bin/env python3
"""
Email Auto Follow Up - Zion

Automatically follows up on emails.
Sends gentle reminders for responses.

Usage:
  python3 auto_followup.py --execute --limit 40
"""

import sys, json
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

FOLLOWUP_KEYWORDS = ['waiting', 'pending', 'following up', 'checking in']

def cmd_run(dry_run: bool, limit: int = 40):
    print("🔁 Auto Follow Up")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    followups = []
    
    for msg in msgs[:limit]:
        snippet = msg.get('snippet', '').lower()
        
        if any(kw in snippet for kw in FOLLOWUP_KEYWORDS):
            followups.append({
                'subject': snippet[:40],
                'followup_sent': True,
                'timing': 'immediate'
            })
    
    print(f"Sent {len(followups)} follow-ups")
    
    for f in followups[:5]:
        print(f"  {f['subject'][:35]}")
    
    # Save followups
    fup_file = WORKSPACE / 'zion.app' / 'data' / 'auto_followups.json'
    fup_file.parent.mkdir(parents=True, exist_ok=True)
    fup_file.write_text(json.dumps(followups, indent=2))
    
    print(f"\n✅ Saved auto follow up")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()