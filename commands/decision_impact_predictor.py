#!/usr/bin/env python3
"""
Decision Impact Predictor - Zion

Rates email urgency by stakeholder influence.
Prioritizes high-impact decisions.

Usage:
  python3 decision_impact_predictor.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("⚖️ Decision Impact Predictor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    impacts = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Score impact based on keywords
        impact_score = 50
        text = f"{subject}".lower()
        
        if 'ceo' in text or 'board' in text:
            impact_score = 90
        elif 'urgent' in text or 'asap' in text:
            impact_score = 80
        elif 'important' in text:
            impact_score = 70
        
        impacts.append({'sender': sender[:25], 'impact_score': impact_score})
        level = 'HIGH' if impact_score >= 80 else 'MED' if impact_score >= 60 else 'LOW'
        print(f"   ⚖️ {level}: {sender[:18]}")
    
    print(f"✅ Scored impact for {len(impacts)} decisions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()