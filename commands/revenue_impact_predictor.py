#!/usr/bin/env python3
"""
Revenue Impact Predictor - Zion

Predicts revenue impact of email responses.
Prioritizes emails by financial value.

Usage:
  python3 revenue_impact_predictor.py --execute --limit 40
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("💰 Revenue Impact Predictor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    impacts = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Calculate impact
        score = 0
        if 'client' in text or 'customer' in text:
            score += 3
        if 'deal' in text or 'contract' in text:
            score += 5
        if 'invoice' in text or 'payment' in text:
            score += 4
        
        impact_value = score * 1000
        
        impact = {
            'subject': subject[:30],
            'impact_score': score,
            'estimated_value': f"${impact_value:,}"
        }
        impacts.append(impact)
        print(f"   💰 {impact['estimated_value']}: {subject[:22]}")
    
    print(f"✅ Predicted impact for {len(impacts)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()