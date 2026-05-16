#!/usr/bin/env python3
"""
Email Decision Tracker - Zion

Tracks decisions.
Outcome monitoring.

Usage:
  python3 email_decision_tracker.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DECISION_KEYWORDS = ['decide', 'decision', 'approved', 'rejected', 'approved:', 'denied']

def cmd_run(dry_run: bool, limit: int = 25):
    print("⚖️ Decision Tracker")
    
    tracker = {
        'decisions_tracked': 0,
        'approved': 0,
        'pending': 0,
        'timeline_days': 7
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in DECISION_KEYWORDS):
            tracker['decisions_tracked'] += 1
            if 'approved' in text or 'yes' in text:
                tracker['approved'] += 1
            else:
                tracker['pending'] += 1
    
    print(f"Tracked {tracker['decisions_tracked']} decisions")
    
    # Save tracker
    dt_file = WORKSPACE / 'zion.app' / 'data' / 'decision_tracking.json'
    dt_file.parent.mkdir(parents=True, exist_ok=True)
    dt_file.write_text(json.dumps(tracker, indent=2))
    
    print(f"\n✅ Saved decision tracking")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()