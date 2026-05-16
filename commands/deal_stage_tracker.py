#!/usr/bin/env python3
"""
Deal Stage Tracker - Zion

Tracks sales deal stages from emails.
Manages pipeline proactively.

Usage:
  python3 deal_stage_tracker.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DEAL_STAGES = {
    'prospecting': ['interested', 'learn more', 'information'],
    'qualification': ['budget', 'timeline', 'requirements'],
    'proposal': ['proposal', 'quote', 'estimate'],
    'negotiation': ['terms', 'conditions', 'negotiate'],
    'closed_won': ['signed', 'approved', 'confirmed'],
    'closed_lost': ['not moving forward', 'decided elsewhere']
}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("📊 Deal Stage Tracker")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    deals = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        stage = 'unknown'
        for deal_stage, keywords in DEAL_STAGES.items():
            if any(kw in text for kw in keywords):
                stage = deal_stage
                break
        
        deals.append({
            'subject': subject[:30],
            'stage': stage
        })
        print(f"   📊 {stage}: {subject[:22]}")
    
    print(f"✅ Tracked {len(deals)} deals")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()