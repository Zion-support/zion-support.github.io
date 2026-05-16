#!/usr/bin/env python3
"""
Predictive Response Confidence - Zion

Calculates confidence scores for automated responses.
Only sends when confidence exceeds threshold.

Usage:
  python3 predictive_response_confidence.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CONFIDENCE_THRESHOLDS = {
    'SEND': 0.85,
    'REVIEW': 0.60,
    'ESCALATE': 0.0
}

def calculate_confidence(subject: str, snippet: str) -> dict:
    """Calculate response confidence score"""
    text = f"{subject} {snippet}".lower()
    
    score = 0.5  # Base
    
    # Question increases confidence
    if '?' in text:
        score += 0.2
    
    # Clear requests
    if any(kw in text for kw in ['please', 'need', 'want', 'can you']):
        score += 0.15
    
    # Vague language decreases
    if any(kw in text for kw in ['maybe', 'possibly', 'not sure']):
        score -= 0.2
    
    score = max(0, min(1, score))
    
    if score >= CONFIDENCE_THRESHOLDS['SEND']:
        action = 'SEND'
    elif score >= CONFIDENCE_THRESHOLDS['REVIEW']:
        action = 'REVIEW'
    else:
        action = 'ESCALATE'
    
    return {'score': score, 'action': action}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🎯 Predictive Response Confidence")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    confidences = {'SEND': 0, 'REVIEW': 0, 'ESCALATE': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = calculate_confidence(subject, snippet)
        confidences[result['action']] += 1
        
        emoji = '✅' if result['action'] == 'SEND' else '⚠️' if result['action'] == 'REVIEW' else '🚨'
        print(f"   {emoji} {result['action']} ({result['score']:.2f}): {subject[:25]}")
    
    print(f"✅ Confidence analysis: {dict(confidences)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()