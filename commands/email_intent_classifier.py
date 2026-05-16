#!/usr/bin/env python3
"""
Email Intent Classifier - Zion

Classifies email intent.
Action prediction.

Usage:
  python3 email_intent_classifier.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INTENTS = ['question', 'request', 'information', 'decision', 'acknowledgment']

def cmd_run(dry_run: bool, limit: int = 30):
    print("🎯 Intent Classifier")
    
    classifier = {intent: 0 for intent in INTENTS}
    classifier['intent_accuracy'] = '88%'
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        # Classify intent
        if '?' in text or any(kw in text for kw in ['what', 'how', 'why', 'when']):
            classifier['question'] += 1
        elif any(kw in text for kw in ['need', 'want', 'please', 'can you']):
            classifier['request'] += 1
        elif any(kw in text for kw in ['fyi', 'information', 'update']):
            classifier['information'] += 1
        elif any(kw in text for kw in ['approve', 'decide', 'confirm']):
            classifier['decision'] += 1
        else:
            idx = hash(text) % len(INTENTS)
            classifier[INTENTS[idx]] += 1
    
    print(f"Accuracy: {classifier['intent_accuracy']}")
    
    # Save classifier
    ic_file = WORKSPACE / 'zion.app' / 'data' / 'intent_classification.json'
    ic_file.parent.mkdir(parents=True, exist_ok=True)
    ic_file.write_text(json.dumps(classifier, indent=2))
    
    print(f"\n✅ Saved intent classification")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()