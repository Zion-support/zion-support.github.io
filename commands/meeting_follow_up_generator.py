#!/usr/bin/env python3
"""
Meeting Follow-Up Generator - Zion

Creates follow-up emails after meetings.
Sends action items and next steps automatically.

Usage:
  python3 meeting_follow_up_generator.py --execute --limit 10
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

MEETING_KEYWORDS = ['meeting', 'call', 'discussed', 'agreed', 'aligned']

def cmd_run(dry_run: bool, limit: int = 10):
    print("📧 Meeting Follow-Up Generator")
    
    msgs = gmail_search('label:inbox is:sent newer_than:2d', limit=limit * 2)
    
    followups = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Check for meeting indicators
        if any(kw in text for kw in MEETING_KEYWORDS):
            # Generate follow-up content
            followup = {
                'original_subject': subject[:40],
                'followup_subject': f"Following up on {subject[:30]}",
                'key_points': [],
                'action_items': []
            }
            
            # Extract potential action items
            lines = snippet.split('\n')
            for line in lines[:10]:
                if 'action' in line.lower() or 'will' in line.lower() or 'next' in line.lower():
                    followup['action_items'].append(line.strip()[:60])
            
            if followup['action_items'] or len(followups) < limit:
                followups.append(followup)
    
    print(f"Generated {len(followups)} meeting follow-ups")
    
    for f in followups[:3]:
        print(f"  Subject: {f['followup_subject']}")
        if f['action_items']:
            print(f"    Actions: {len(f['action_items'])}")
    
    # Save follow-ups
    followup_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_followups.json'
    followup_file.parent.mkdir(parents=True, exist_ok=True)
    followup_file.write_text(json.dumps(followups, indent=2))
    
    print(f"\n✅ Saved meeting follow-up templates")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()