#!/usr/bin/env python3
"""
Predictive Reply Time Estimator - Zion

Predicts how long a response will take to write.
Manages expectations with automatic acknowledgment.

Usage:
  python3 predictive_reply_time_estimator.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def estimate_reply_time(subject: str, snippet: str) -> dict:
    """Estimate time needed to craft response"""
    text = f"{subject} {snippet}".lower()
    
    base_time = 60  # 1 minute base
    
    # Complexity factors
    if '?' in text:
        base_time += 30
    if any(kw in text for kw in ['strategy', 'proposal', 'plan', 'recommendation']):
        base_time += 120
    if any(kw in text for kw in ['contract', 'legal', 'terms', 'clause']):
        base_time += 180
    if any(kw in text for kw in ['data', 'report', 'analysis', 'numbers']):
        base_time += 90
    
    if base_time <= 90:
        complexity = 'simple'
        eta = '1 min'
    elif base_time <= 180:
        complexity = 'medium'
        eta = '2-3 min'
    else:
        complexity = 'complex'
        eta = '5+ min'
    
    return {
        'complexity': complexity,
        'estimated_seconds': base_time,
        'eta_message': f'Response in {eta}'
    }

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("⏱️ Predictive Reply Time Estimator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    estimations = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = estimate_reply_time(subject, snippet)
        estimations.append(result)
        
        print(f"   ⏱️ {result['complexity']}: {subject[:25]} → {result['eta_message']}")
    
    print(f"✅ Estimated times for {len(estimations)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()