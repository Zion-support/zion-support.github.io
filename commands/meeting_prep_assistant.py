#!/usr/bin/env python3
"""
Meeting Prep Assistant - Zion

Prepares for upcoming meetings with context gathering.
Creates briefing documents automatically.

Usage:
  python3 meeting_prep_assistant.py --execute --lookback-hours 24
"""

import sys, json
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, lookback_hours: int = 24):
    print(f"📝 Meeting Prep Assistant (last {lookback_hours}h)")
    
    now = datetime.utcnow()
    start = now - timedelta(hours=lookback_hours)
    
    msgs = gmail_search('label:inbox is:unread', limit=50)
    
    prep_items = {
        'recent_discussions': [],
        'action_items': [],
        'decisions_needed': [],
        'participants': set()
    }
    
    for msg in msgs[:20]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in ['meeting', 'call', 'discuss', 'agenda']):
            prep_items['recent_discussions'].append(subject[:40])
        
        if 'action' in text or 'todo' in text or 'need to' in text:
            prep_items['action_items'].append(snippet[:60])
        
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        if '@' in from_hdr:
            email = from_hdr.split('<')[-1].split('>')[0].strip()
            prep_items['participants'].add(email)
    
    print("\nMeeting prep summary:")
    print(f"  Discussions: {len(prep_items['recent_discussions'])}")
    print(f"  Action items: {len(prep_items['action_items'])}")
    print(f"  Participants: {len(prep_items['participants'])}")
    
    # Save prep
    prep_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_prep.json'
    prep_file.parent.mkdir(parents=True, exist_ok=True)
    prep_file.write_text(json.dumps({
        'discussions': prep_items['recent_discussions'][:10],
        'actions': prep_items['action_items'][:10],
        'participants': list(prep_items['participants'])[:10]
    }, indent=2))
    
    print(f"\n✅ Saved meeting prep data")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--lookback-hours', type=int, default=24)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, lookback_hours=args.lookback_hours)

if __name__ == '__main__':
    main()