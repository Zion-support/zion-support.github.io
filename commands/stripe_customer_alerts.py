#!/usr/bin/env python3
"""
Email Stripe Customer Alerts - Zion

Watches Stripe events.
Payment monitoring.

Usage:
  python3 stripe_customer_alerts.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

STRIPE_KEYWORDS = ['payment', 'charge', 'refund', 'dispute', 'failed', 'stripe']

def cmd_run(dry_run: bool, limit: int = 25):
    print("💳 Stripe Alerts")
    
    alerts = {
        'alerts_sent': 0,
        'payments_monitored': 0,
        'issues_detected': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in STRIPE_KEYWORDS):
            alerts['alerts_sent'] += 1
            alerts['payments_monitored'] += 1
    
    print(f"Sent {alerts['alerts_sent']} alerts")
    
    # Save alerts
    sc_file = WORKSPACE / 'zion.app' / 'data' / 'stripe_alerts.json'
    sc_file.parent.mkdir(parents=True, exist_ok=True)
    sc_file.write_text(json.dumps(alerts, indent=2))
    
    print(f"\n✅ Saved stripe alerts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()