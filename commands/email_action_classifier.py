#!/usr/bin/env python3
"""
Email Action Classifier - Zion

Classifies emails into specific action categories.
Determines exact response type needed.

Usage:
  python3 email_action_classifier.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

ACTION_CATEGORIES = {
    'meeting_request': ['meeting', 'call', 'schedule', 'discuss', 'appointment'],
    'proposal_review': ['proposal', 'quote', 'bid', 'estimate', 'pricing'],
    'project_update': ['update', 'progress', 'status', 'timeline', 'milestone'],
    'approval_needed': ['approve', 'sign', 'authorization', 'confirm', 'permission'],
    'information_request': ['info', 'question', 'help', 'clarify', 'details'],
    'complaint': ['issue', 'problem', 'bug', 'broken', 'not working', 'frustrated'],
    'follow_up': ['following up', 'circling back', 'checking in', 'touch base']
}

def classify_action(subject: str, snippet: str) -> dict:
    """Classify email into action category"""
    text = f"{subject} {snippet}".lower()
    
    scores = {}
    for category, keywords in ACTION_CATEGORIES.items():
        scores[category] = sum(1 for kw in keywords if kw in text)
    
    if max(scores.values()) == 0:
        return {'category': 'general', 'confidence': 0}
    
    best = max(scores, key=scores.get)
    confidence = scores[best] / len(ACTION_CATEGORIES[best])
    
    return {'category': best, 'confidence': round(confidence, 2)}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🎯 Email Action Classifier")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    classified = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = classify_action(subject, snippet)
        cat = result['category']
        
        classified[cat] = classified.get(cat, 0) + 1
        print(f"   {cat}: {subject[:35]}")
    
    print(f"✅ Classified: {dict(classified)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()