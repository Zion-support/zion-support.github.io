#!/usr/bin/env python3
"""
Email Client Journey Mapper - Zion

Maps client journey.
Relationship analytics.

Usage:
  python3 client_journey_mapper.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

JOURNEY_STAGES = {
    'awareness': ['heard about', 'found you', 'discovered'],
    'consideration': ['interested', 'pricing', 'proposal'],
    'decision': ['sign', 'contract', 'agreement'],
    'retention': ['happy', 'renewal', 'continue']
}

def cmd_run(dry_run: bool, limit: int = 40):
    print("🗺️ Client Journey Mapper")
    
    journey = {'awareness': 0, 'consideration': 0, 'decision': 0, 'retention': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        for stage, keywords in JOURNEY_STAGES.items():
            if any(kw in snippet for kw in keywords):
                journey[stage] += 1
    
    print("Journey Stages:")
    for stage, count in journey.items():
        print(f"  {stage}: {count}")
    
    # Save journey
    cj_file = WORKSPACE / 'zion.app' / 'data' / 'client_journey.json'
    cj_file.parent.mkdir(parents=True, exist_ok=True)
    cj_file.write_text(json.dumps(journey, indent=2))
    
    print(f"\n✅ Saved client journey")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()