#!/usr/bin/env python3
"""
Churn Risk Detector - Zion

Detects clients at risk of churning.
Prioritizes retention efforts.

Usage:
  python3 churn_risk_detector.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("⚠️ Churn Risk Detector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    risks = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Calculate churn risk
        risk = 0
        if 'cancel' in text or 'terminate' in text:
            risk = 5
        elif 'unhappy' in text or 'frustrated' in text:
            risk = 4
        elif 'competitor' in text:
            risk = 3
        elif 'complaint' in text:
            risk = 2
        
        risk_level = 'HIGH' if risk >= 4 else 'MEDIUM' if risk >= 2 else 'LOW'
        
        risks.append({
            'sender': sender[:25],
            'risk_level': risk_level,
            'score': risk
        })
        emoji = '🔴' if risk_level == 'HIGH' else '🟡' if risk_level == 'MEDIUM' else '🟢'
        print(f"   {emoji} {risk_level}: {sender[:20]}")
    
    print(f"✅ Assessed {len(risks)} clients for churn risk")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()