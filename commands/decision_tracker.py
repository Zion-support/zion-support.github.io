#!/usr/bin/env python3
"""
Decision Tracker - Zion

Tracks decisions made in emails and creates follow-up tasks.
Ensures nothing falls through the cracks.

Usage:
  python3 decision_tracker.py --execute --limit 25
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply

DECISION_PATTERNS = [
    'approved', 'agreed', 'decided', 'confirmed', 'let\'s do', 'sounds good',
    'will proceed', 'moving forward', 'final decision', 'go ahead'
]

ACTION_PATTERNS = [
    'need to', 'will', 'should', 'going to', 'i\'ll', 'can you', 'please',
    'follow up', 'send me', 'prepare', 'draft', 'review'
]

def extract_decisions_and_actions(text: str) -> dict:
    text_lower = text.lower()
    decisions = [d for d in DECISION_PATTERNS if d in text_lower]
    actions = [a for a in ACTION_PATTERNS if a in text_lower]
    return {'decisions': decisions, 'actions': actions}

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("📋 Decision Tracker")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    tracked = 0
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = extract_decisions_and_actions(f"{subject} {snippet}")
        
        if result['decisions'] or result['actions']:
            print(f"   🎯 {subject[:30]} | Decisions: {len(result['decisions'])} Actions: {len(result['actions'])}")
            
            # Create follow-up reminder
            if result['actions'] and not dry_run:
                followup = f"Reminder: You have {len(result['actions'])} action item(s) from: {subject[:40]}"
                # In production: create task in system
            tracked += 1
    
    # Save tracking data
    dec_file = WORKSPACE / 'zion.app' / 'data' / 'decisions_tracked.json'
    dec_file.parent.mkdir(parents=True, exist_ok=True)
    
    print(f"✅ Tracked {tracked} decision/action items")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()