#!/usr/bin/env python3
"""
Intent Confidence Scoring - Zion

Scores the confidence of intent detection for each email.
Only takes action when confidence exceeds thresholds.

Usage:
  python3 intent_confidence_scoring.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INTENT_TYPES = {
    'meeting_request': ['meeting', 'schedule', 'appointment', 'call'],
    'information_needed': ['info', 'information', 'details', 'question'],
    'approval_needed': ['approve', 'sign', 'confirm', 'authorize'],
    'follow_up': ['following', 'checking', 'status', 'update'],
    'complaint': ['issue', 'problem', 'complaint', 'frustrated']
}

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🎯 Intent Confidence Scoring")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    confidences = {'high': 0, 'medium': 0, 'low': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        best_intent = 'unknown'
        best_score = 0
        
        for intent, keywords in INTENT_TYPES.items():
            score = sum(1 for kw in keywords if kw in text)
            if score > best_score:
                best_score = score
                best_intent = intent
        
        confidence = best_score / len(INTENT_TYPES.get(best_intent, [1]))
        
        if confidence >= 0.5:
            level = 'high'
        elif confidence >= 0.25:
            level = 'medium'
        else:
            level = 'low'
        
        confidences[level] += 1
        
        emoji = '✅' if level == 'high' else '⚠️' if level == 'medium' else '❓'
        print(f"   {emoji} {level}: {subject[:25]}")
    
    print(f"✅ Intent confidence: {dict(confidences)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()