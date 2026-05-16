#!/usr/bin/env python3
"""
Response Template Predictor - Zion

Predicts which response template will work best.
Learns from past successful responses.

Usage:
  python3 response_template_predictor.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TEMPLATES = {
    'acknowledgment': ['received', 'noted', 'got it', 'thanks for'],
    'information': ['details', 'here is', 'see below', 'attached'],
    'action': ['will do', 'working on', 'handling this', 'taking care'],
    'decision': ['approved', 'agreed', 'confirmed', 'decision'],
    'followup': ['checking in', 'following up', 'status', 'update']
}

def predict_template(subject: str, snippet: str) -> dict:
    """Predict best response template"""
    text = f"{subject} {snippet}".lower()
    
    scores = {}
    for template, keywords in TEMPLATES.items():
        scores[template] = sum(1 for kw in keywords if kw in text)
    
    best = max(scores, key=scores.get) if max(scores.values()) > 0 else 'acknowledgment'
    
    return {
        'recommended_template': best,
        'confidence': scores[best] / len(TEMPLATES[best]) if best else 0.5,
        'keywords_matched': [k for k in TEMPLATES.get(best, []) if k in text]
    }

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("📄 Response Template Predictor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    predictions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = predict_template(subject, snippet)
        predictions.append(result)
        
        print(f"   📄 {result['recommended_template']}: {subject[:25]}")
    
    print(f"✅ Predicted templates for {len(predictions)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()