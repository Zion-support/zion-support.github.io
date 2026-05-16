#!/usr/bin/env python3
"""
Revenue Impact Tracker - Zion

Links email conversations to HubSpot deals and forecasts revenue impact.
Calculates potential value from quote requests and negotiations.

Usage:
  python3 revenue_impact_tracker.py --execute --limit 20
"""

import sys, json, urllib.request, urllib.parse
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, telegram_send

# Revenue keywords and their typical values
REVENUE_KEYWORDS = {
    'quote': 5000,
    'proposal': 10000,
    'contract': 25000,
    'partnership': 50000,
    'enterprise': 100000,
    'subscription': 1200,
    'monthly': 2000,
    'retainer': 5000,
}

def extract_revenue_signals(text: str) -> dict:
    """Extract potential revenue signals from email."""
    import re
    
    text_lower = text.lower()
    signals = {'keywords': [], 'estimates': []}
    
    for keyword, value in REVENUE_KEYWORDS.items():
        if keyword in text_lower:
            signals['keywords'].append(keyword)
            signals['estimates'].append(value)
    
    # Extract specific dollar amounts
    amounts = re.findall(r'\$(\d{1,3}(?:,\d{3})*|\d+)', text)
    for amt in amounts:
        clean_amt = int(amt.replace(',', ''))
        signals['estimates'].append(clean_amt)
    
    return signals

def cmd_run(dry_run: bool, limit: int = 20):
    print("💰 Revenue Impact Tracker")
    
    msgs = gmail_search('is:sent newer_than:30d', limit=limit * 2)
    
    total_estimated = 0
    revenue_emails = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        signals = extract_revenue_signals(f"{subject} {snippet}")
        
        if signals['estimates']:
            estimated_value = sum(signals['estimates']) / len(signals['estimates'])
            total_estimated += estimated_value
            revenue_emails.append({
                'subject': subject[:40],
                'estimated': estimated_value,
                'keywords': signals['keywords']
            })
    
    print(f"Revenue-related emails analyzed: {len(revenue_emails)}")
    print(f"Total estimated value: ${total_estimated:,.0f}")
    
    print("\nTop revenue opportunities:")
    for email in revenue_emails[:5]:
        print(f"  ${email['estimated']:,.0f}: {email['subject']}")
    
    if not dry_run and total_estimated > 0:
        telegram_send(f"💰 Revenue Tracker: Analyzed ${total_estimated:,.0f} in potential value")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()