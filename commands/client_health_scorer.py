#!/usr/bin/env python3
"""
Client Health Scorer - Zion

Calculates client engagement score based on email patterns.
Provides risk indicators for client churn.

Usage:
  python3 client_health_scorer.py --execute --limit 50
"""

import sys, json
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gog_headers
import urllib.request, urllib.parse

def score_client(sender: str, messages: list) -> dict:
    """Calculate health score for a client based on their email patterns."""
    if not messages:
        return {'score': 0, 'risk': 'unknown', 'last_contact': None}
    
    now = datetime.utcnow()
    scores = {
        'response_rate': 0,
        'avg_thread_length': 0,
        'days_since_last': 0,
        'total_exchanges': 0
    }
    
    # Analyze message history
    sent_count = 0
    received_count = 0
    
    for msg in messages:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        if sender.lower() in from_hdr.lower():
            received_count += 1
        else:
            sent_count += 1
    
    scores['total_exchanges'] = max(sent_count, received_count)
    
    # Calculate days since last contact
    if messages:
        try:
            last_date_str = messages[0].get('internalDate', '0')
            last_date = datetime.utcfromtimestamp(int(last_date_str) / 1000)
            scores['days_since_last'] = (now - last_date).days
        except:
            pass
    
    # Health score (0-100)
    score = 50
    if scores['days_since_last'] < 7:
        score += 30
    elif scores['days_since_last'] < 30:
        score += 10
    
    if scores['total_exchanges'] > 5:
        score += 20
    
    risk = 'low'
    if score < 30 or scores['days_since_last'] > 60:
        risk = 'high'
    elif score < 60 or scores['days_since_last'] > 30:
        risk = 'medium'
    
    return {'score': score, 'risk': risk, 'metrics': scores}

def cmd_run(dry_run: bool, limit: int = 50):
    print("📊 Client Health Scorer")
    
    # Get recent email threads
    msgs = gmail_search('is:sent newer_than:90d', limit=limit * 3)
    
    # Group by sender domain
    senders = {}
    for msg in msgs:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        to = next((h['value'] for h in headers if h['name'] == 'To'), '')
        
        # Extract domain or key sender
        import re
        match = re.search(r'@([a-zA-Z0-9.\-]+)', to)
        if match:
            domain = match.group(1)
            if domain not in senders:
                senders[domain] = []
            senders[domain].append(msg)
    
    # Score top clients
    results = []
    for domain, messages in list(senders.items())[:limit]:
        score_data = score_client(domain, messages)
        results.append({'domain': domain, **score_data})
    
    # Sort by score
    results.sort(key=lambda x: x['score'], reverse=True)
    
    print("Top clients by health score:")
    for r in results[:10]:
        risk_emoji = '🟢' if r['risk'] == 'low' else '🟡' if r['risk'] == 'medium' else '🔴'
        print(f"  {risk_emoji} {r['domain']}: {r['score']} (risk: {r['risk']})")
    
    print(f"\n✅ Scored {len(results)} clients")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()