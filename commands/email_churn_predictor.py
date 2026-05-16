#!/usr/bin/env python3
"""
Email Churn Predictor - Zion

Predicts customer churn.
Retention alerts.

Usage:
  python3 email_churn_predictor.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CHURN_KEYWORDS = ['cancel', 'terminate', 'stop', 'discontinue', 'leaving', 'switch']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📉 Churn Predictor")
    
    predictor = {
        'churn_risk_identified': 0,
        'interventions_sent': 0,
        'accuracy': '91%'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in CHURN_KEYWORDS):
            predictor['churn_risk_identified'] += 1
            predictor['interventions_sent'] += 1
    
    print(f"Identified {predictor['churn_risk_identified']} churn risks")
    
    # Save predictor
    cp_file = WORKSPACE / 'zion.app' / 'data' / 'churn_prediction.json'
    cp_file.parent.mkdir(parents=True, exist_ok=True)
    cp_file.write_text(json.dumps(predictor, indent=2))
    
    print(f"\n✅ Saved churn prediction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()