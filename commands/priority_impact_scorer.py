#!/usr/bin/env python3
"""
Priority Impact Scorer - Zion

Scores emails by business impact and urgency.
Helps prioritize responses by value.

Usage:
  python3 priority_impact_scorer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

HIGH_IMPACT_KEYWORDS = ['contract', 'deal', 'revenue', 'payment', 'investment', 'partnership', 'urgent']
MEDIUM_IMPACT_KEYWORDS = ['meeting', 'call', 'question', 'request', 'proposal', 'offer']
LOW_IMPACT_KEYWORDS = ['info', 'thanks', 'update', 'fyi', 'newsletter']

def score_priority(subject: str, snippet: str, sender: str) -> dict:
    """Calculate priority score"""
    text = f"{subject} {snippet} {sender}".lower()
    
    score = 0
    factors = []
    
    # High impact factors
    high_matches = sum(1 for kw in HIGH_IMPACT_KEYWORDS if kw in text)
    if high_matches > 0:
        score += high_matches * 20
        factors.append(f"high-{high_matches}")
    
    # Medium impact
    med_matches = sum(1 for kw in MEDIUM_IMPACT_KEYWORDS if kw in text)
    if med_matches > 0:
        score += med_matches * 10
        factors.append(f"med-{med_matches}")
    
    # Low impact
    low_matches = sum(1 for kw in LOW_IMPACT_KEYWORDS if kw in text)
    if low_matches > 0:
        score -= low_matches * 2
        factors.append(f"low-{low_matches}")
    
    # VIP sender boost
    vip_domains = ['ziontechgroup.com', 'zionholdings.com']
    if any(d in sender.lower() for d in vip_domains):
        score += 15
        factors.append("vip-sender")
    
    return {
        'score': score,
        'priority': 'HIGH' if score >= 30 else 'MEDIUM' if score >= 10 else 'LOW',
        'factors': factors
    }

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("📊 Priority Impact Scorer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    high_label = gmail_get_or_create_label_id('Priority/High')
    med_label = gmail_get_or_create_label_id('Priority/Medium')
    
    scored = {'HIGH': 0, 'MEDIUM': 0, 'LOW': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        result = score_priority(subject, snippet, sender)
        
        print(f"   {'🔴' if result['priority']=='HIGH' else '🟡' if result['priority']=='MEDIUM' else '⚪'} {result['priority']} ({result['score']}): {subject[:30]}")
        
        scored[result['priority']] += 1
        
        if not dry_run:
            label = high_label if result['priority'] == 'HIGH' else med_label
            gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label])
    
    print(f"✅ Scored: {scored['HIGH']} HIGH, {scored['MEDIUM']} MEDIUM, {scored['LOW']} LOW")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()