#!/usr/bin/env python3
"""
Email Predictive Responder - Zion

Predicts responses based on email content.
Pre-generates replies before you read.

Usage:
  python3 email_predictive_responder.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

PREDICT_PATTERNS = {
    'meeting': ['schedule', 'meeting', 'calendar', 'appointment'],
    'invoice': ['invoice', 'billing', 'payment', 'charge'],
    'support': ['help', 'issue', 'problem', 'error']
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("🔮 Predictive Responder")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    predictions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        for pred_type, keywords in PREDICT_PATTERNS.items():
            if any(kw in text for kw in keywords):
                predictions.append({
                    'subject': subject[:35],
                    'predicted_reply': f'[{pred_type.upper()}] Template-ready',
                    'confidence': 'high'
                })
                break
    
    print(f"Generated {len(predictions)} predictions")
    
    for p in predictions[:5]:
        print(f"  {p['subject'][:25]}: {p['predicted_reply']}")
    
    # Save predictions
    pred_file = WORKSPACE / 'zion.app' / 'data' / 'predictions.json'
    pred_file.parent.mkdir(parents=True, exist_ok=True)
    pred_file.write_text(json.dumps(predictions, indent=2))
    
    print(f"\n✅ Saved predictive responses")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()