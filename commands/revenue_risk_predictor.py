#!/usr/bin/env python3
"""
Email Revenue Risk Predictor - Zion

Predicts revenue risks.
Financial forecasting.

Usage:
  python3 revenue_risk_predictor.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

RISK_KEYWORDS = {
    'churn': ['cancel', 'cancelled', 'not renewing', 'leaving', 'switching'],
    'delay': ['delayed', 'postponed', 'reschedule', 'later', 'push back'],
    'dispute': ['dispute', 'refund requested', 'complaint', 'unhappy', 'issue']
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("⚠️ Revenue Risk Predictor")
    
    risks = {'churn_risk': 0, 'delay_risk': 0, 'dispute_risk': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        for risk_type, keywords in RISK_KEYWORDS.items():
            if any(kw in snippet for kw in keywords):
                risks[risk_type] += 1
    
    print("Revenue Risks:")
    for k, v in risks.items():
        print(f"  {k}: {v}")
    
    # Save risks
    rr_file = WORKSPACE / 'zion.app' / 'data' / 'revenue_risks.json'
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