#!/usr/bin/env python3
"""
Email Client Satisfaction Predictor - Zion

Predicts client satisfaction levels.
Identifies at-risk relationships.

Usage:
  python3 email_client_satisfaction_predictor.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SATISFACTION_INDICATORS = {
    'high': ['pleased', 'excellent', 'outstanding', 'great job', 'thank you'],
    'low': ['frustrated', 'disappointed', 'concerned', 'issue', 'problem'],
    'neutral': ['update', 'status', 'check', 'meeting']
}

def cmd_run(dry_run: bool, limit: int = 35):
    print("😊 Client Satisfaction Predictor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    satisfaction = {'high': 0, 'low': 0, 'neutral': 0}
    at_risk = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        for level, indicators in SATISFACTION_INDICATORS.items():
            if any(ind in text for ind in indicators):
                satisfaction[level] += 1
                
                if level == 'low':
                    at_risk.append(from_hdr[:30])
                break
    
    print("Satisfaction Analysis:")
    for level, count in satisfaction.items():
        print(f"  {level}: {count}")
    
    print(f"At-risk clients: {len(at_risk)}")
    
    # Save predictor
    sat_file = WORKSPACE / 'zion.app' / 'data' / 'satisfaction.json'
    sat_file.parent.mkdir(parents=True, exist_ok=True)
    sat_file.write_text(json.dumps({'satisfaction': satisfaction, 'at_risk': at_risk}, indent=2))
    
    print(f"\n✅ Saved satisfaction prediction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()