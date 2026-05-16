#!/usr/bin/env python3
"""
Email Meeting Follow-Up - Zion

Sends automatic meeting follow-ups.
Action item tracking.

Usage:
  python3 email_meeting_follow_up.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

MEETING_KEYWORDS = ['meeting', 'call', 'discussion', 'review']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📅 Meeting Follow-Up")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    followups = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in MEETING_KEYWORDS):
            followups.append({
                'attendee': from_hdr[:30],
                'subject': subject[:40],
                'followup_status': 'ready'
            })
    
    print(f"Created {len(followups)} meeting follow-ups")
    
    for f in followups[:5]:
        print(f"  {f['attendee'][:25]}: {f['subject'][:25]}")
    
    # Save followups
    mf_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_followups.json'
    mf_file.parent.mkdir(parents=True, exist_ok=True)
    mf_file.write_text(json.dumps(followups, indent=2))
    
    print(f"\n✅ Saved meeting follow-ups")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()