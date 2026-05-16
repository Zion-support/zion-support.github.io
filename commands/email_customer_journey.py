#!/usr/bin/env python3
"""
Email Customer Journey - Zion

Maps customer journey.
Lifecycle tracking.

Usage:
  python3 email_customer_journey.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

JOURNEY_STAGES = {
    'awareness': ['heard about', 'found', 'discovered', 'came across'],
    'consideration': ['interested', 'pricing', 'proposal', 'demo'],
    'purchase': ['sign', 'contract', 'agreement', 'deal'],
    'advocacy': ['happy', 'refer', 'recommend', 'testimonial']
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("🗺️ Customer Journey")
    
    journey = {stage: 0 for stage in JOURNEY_STAGES}
    
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
    cj_file = WORKSPACE / 'zion.app' / 'data' / 'customer_journey.json'
    cj_file.parent.mkdir(parents=True, exist_ok=True)
    cj_file.write_text(json.dumps(journey, indent=2))
    
    print(f"\n✅ Saved customer journey")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()