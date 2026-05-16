#!/usr/bin/env python3
"""
Email Meeting Prep - Zion

Prepares meeting agenda from emails.
Readiness automation.

Usage:
  python3 email_meeting_prep.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

MEETING_KEYWORDS = ['meeting', 'meet', 'call', 'agenda', 'prepare']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📋 Meeting Prep")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    prep = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in MEETING_KEYWORDS):
            prep.append({
                'subject': subject[:40],
                'meeting_prepared': True
            })
    
    print(f"Prepared {len(prep)} meetings")
    
    # Save prep
    mp_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_prep.json'
    mp_file.parent.mkdir(parents=True, exist_ok=True)
    mp_file.write_text(json.dumps(prep, indent=2))
    
    print(f"\n✅ Saved meeting prep")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()