#!/usr/bin/env python3
"""
Customer Churn Predictor - Zion

Predicts client churn risk based on email engagement patterns.
Provides early warning for at-risk relationships.

Usage:
  python3 customer_churn_predictor.py --execute --limit 50
"""

import sys, json
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def analyze_client_engagement(limit: int = 50) -> dict:
    """Analyze client engagement patterns."""
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    engagement = defaultdict(lambda: {
        'total': 0,
        'no_reply': 0,
        'delay_days': [],
        'last_contact': None
    })
    
    now = datetime.utcnow()
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        from_addr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        date_header = next((h['value'] for h in headers if h['name'] == 'Date'), '')
        
        # Extract email
        if '@' in from_addr:
            email = from_addr.split('<')[-1].split('>')[0].strip()
            if not email or '@' not in email:
                email = from_addr.split()[0]
            
            engagement[email]['total'] += 1
            
            # Check for no-reply patterns
            if any(x in from_addr.lower() for x in ['no-reply', 'noreply', 'mailer-daemon']):
                engagement[email]['no_reply'] += 1
            
            # Get date
            if date_header:
                try:
                    import email.utils
                    msg_date = email.utils.parsedate_to_datetime(date_header)
                    engagement[email]['last_contact'] = msg_date
                except:
                    pass
    
    return dict(engagement)

def predict_churn_risk(engagement: dict) -> dict:
    """Predict churn risk for each client."""
    risks = {}
    
    for email, data in engagement.items():
        risk_score = 0
        reasons = []
        
        # High number of no-reply emails
        if data['no_reply'] > 3:
            risk_score += 30
            reasons.append("Low engagement (automated responses)")
        
        # Declining contact frequency
        days_since_last = 0
        if data['last_contact']:
            days_since_last = (datetime.utcnow() - data['last_contact'].replace(tzinfo=None)).days
        
        if days_since_last > 30:
            risk_score += 40
            reasons.append(f"No contact in {days_since_last} days")
        elif days_since_last > 14:
            risk_score += 20
            reasons.append(f"No contact in {days_since_last} days")
        
        # Risk categories
        if risk_score >= 70:
            risk_level = 'HIGH'
        elif risk_score >= 40:
            risk_level = 'MEDIUM'
        elif risk_score >= 20:
            risk_level = 'LOW'
        else:
            risk_level = 'HEALTHY'
        
        risks[email] = {
            'risk_score': risk_score,
            'risk_level': risk_level,
            'reasons': reasons,
            'contact_count': data['total']
        }
    
    return risks

def cmd_run(dry_run: bool, limit: int = 50):
    print("📉 Customer Churn Predictor")
    
    engagement = analyze_client_engagement(limit)
    risks = predict_churn_risk(engagement)
    
    # Show high risk clients
    high_risk = [(email, data) for email, data in risks.items() if data['risk_level'] == 'HIGH']
    medium_risk = [(email, data) for email, data in risks.items() if data['risk_level'] == 'MEDIUM']
    
    print(f"\nHigh Risk Clients: {len(high_risk)}")
    for email, data in high_risk[:5]:
        print(f"  {email[:30]}: {data['risk_score']} - {', '.join(data['reasons'])}")
    
    print(f"\nMedium Risk Clients: {len(medium_risk)}")
    
    # Save risks
    risk_file = WORKSPACE / 'zion.app' / 'data' / 'churn_risks.json'
    risk_file.parent.mkdir(parents=True, exist_ok=True)
    risk_file.write_text(json.dumps(risks, indent=2, default=str))
    
    print(f"\n✅ Analyzed {len(risks)} clients for churn risk")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()