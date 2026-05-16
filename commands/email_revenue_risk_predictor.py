#!/usr/bin/env python3
"""
Email Revenue Risk Predictor - Zion

Predicts revenue risk from email patterns.
Financial forecasting.

Usage:
  python3 email_revenue_risk_predictor.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

RISK_PATTERNS = {
    'high': ['cancel', 'terminate', 'competitor', 'leaving'],
    'medium': ['concern', 'issue', 'problem', 'delay'],
    'low': ['question', 'clarify', 'confirm', 'follow']
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("⚠️ Revenue Risk Predictor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    risks = {'high': 0, 'medium': 0, 'low': 0, 'total_exposure': '$0'}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        for level, patterns in RISK_PATTERNS.items():
            if any(p in text for p in patterns):
                risks[level] += 1
                break
    
    print("Revenue Risk Analysis:")
    for level, count in risks.items():
        if level != 'total_exposure':
            print(f"  {level}: {count}")
    
    # Save risk
    rr_file = WORKSPACE / 'zion.app' / 'data' / 'revenue_risk.json'
    rr_file.parent.mkdir(parents=True, exist_ok=True)
    rr_file.write_text(json.dumps(risks, indent=2))
    
    print(f"\n✅ Saved revenue risk prediction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()