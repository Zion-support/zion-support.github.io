#!/usr/bin/env python3
"""
Customer Journey Mapper - Zion

Maps customer journey stages from email interactions.
Tracks progression and identifies drop-offs.

Usage:
  python3 customer_journey_mapper.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

JOURNEY_STAGES = {
    'awareness': ['heard about', 'saw your', 'discovered'],
    'consideration': ['evaluating', 'comparing', 'looking at'],
    'purchase': ['ready to buy', 'placing order', 'signing'],
    'retention': ['already have', 'ongoing', 'renewal'],
    'advocacy': ['referring', 'recommend', 'testimonial']
}

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("🗺️ Customer Journey Mapper")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    journeys = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        stage = 'unknown'
        for journey_stage, keywords in JOURNEY_STAGES.items():
            if any(kw in text for kw in keywords):
                stage = journey_stage
                break
        
        journeys.append({
            'sender': sender[:25],
            'journey_stage': stage
        })
        print(f"   🗺️ {stage}: {sender[:20]}")
    
    print(f"✅ Mapped {len(journeys)} customer journeys")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()