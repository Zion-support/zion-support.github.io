#!/usr/bin/env python3
"""
Email Relationship Health Score - Zion

Quantifies relationship strength based on email patterns.
Scores interactions for long-term relationship tracking.

Usage:
  python3 relationship_health_score.py --execute --limit 50
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def score_relationship(sender: str, subject: str, snippet: str) -> dict:
    """Score relationship health"""
    score = 50  # Base score
    
    text = f"{subject} {snippet}".lower()
    
    # Positive interactions boost score
    positive_indicators = ['great', 'thanks', 'appreciate', 'working', 'success', 'happy']
    score += sum(5 for ind in positive_indicators if ind in text)
    
    # Negative interactions reduce score
    negative_indicators = ['issue', 'problem', 'frustrated', 'concerned', 'upset']
    score -= sum(10 for ind in negative_indicators if ind in text)
    
    # VIP domains get base boost
    if any(vip in sender.lower() for vip in ['ziontechgroup.com', 'zionholdings.com']):
        score += 20
    
    # Recent communication helps
    score += 5  # Assume recent
    
    # Clamp score
    score = max(0, min(100, score))
    
    # Determine health level
    if score >= 80:
        health = 'EXCELLENT'
    elif score >= 60:
        health = 'GOOD'
    elif score >= 40:
        health = 'FAIR'
    else:
        health = 'AT_RISK'
    
    return {
        'score': score,
        'health': health,
        'recommendation': 'Maintain contact frequency' if health == 'EXCELLENT' else 'Follow up soon' if health == 'GOOD' else 'Immediate follow-up needed' if health == 'FAIR' else 'Relationship repair required'
    }

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("❤️ Relationship Health Score")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    health_scores = {'EXCELLENT': 0, 'GOOD': 0, 'FAIR': 0, 'AT_RISK': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        result = score_relationship(sender, subject, snippet)
        health_scores[result['health']] += 1
        
        emoji = '❤️' if result['health'] == 'EXCELLENT' else '🙂' if result['health'] == 'GOOD' else '😐' if result['health'] == 'FAIR' else '⚠️'
        print(f"   {emoji} {result['health']} ({result['score']}): {sender[:25]}")
    
    print(f"✅ Relationship health: {dict(health_scores)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()