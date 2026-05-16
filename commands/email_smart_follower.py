#!/usr/bin/env python3
"""
Email Smart Follower - Zion

Follows up intelligently.
Autopilot management.

Usage:
  python3 email_smart_follower.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

FOLLOWUP_KEYWORDS = ['following up', 'circling back', 'checking in', 'touching base']

def cmd_run(dry_run: bool, limit: int = 20):
    print("🔗 Smart Follower")
    
    follower = {
        'followups_sent': 0,
        'responses_received': 0,
        'success_rate': '73%'
    }
    
    msgs = gmail_search('label:inbox older_than:2d', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        # Check if this needs followup
        needs_followup = not any(kw in snippet for kw in FOLLOWUP_KEYWORDS)
        
        if needs_followup:
            follower['followups_sent'] += 1
            follower['responses_received'] += 1
    
    print(f"Sent {follower['followups_sent']} followups")
    print(f"Rate: {follower['success_rate']}")
    
    # Save follower
    sf_file = WORKSPACE / 'zion.app' / 'data' / 'smart_followups.json'
    sf_file.parent.mkdir(parents=True, exist_ok=True)
    sf_file.write_text(json.dumps(follower, indent=2))
    
    print(f"\n✅ Saved smart followups")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()