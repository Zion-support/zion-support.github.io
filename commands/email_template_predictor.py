#!/usr/bin/env python3
"""
Email Template Predictor - Zion

Predicts appropriate email templates based on content and context.
Reduces response time by pre-loading relevant templates.

Usage:
  python3 email_template_predictor.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

# Template mappings
TEMPLATE_MAP = {
    'quote': ['quote', 'pricing', 'cost', 'rate', 'budget'],
    'contract': ['contract', 'agreement', 'sign', 'legal'],
    'followup': ['following up', 'checking in', 'touch base'],
    'meeting': ['meeting', 'call', 'sync', 'discuss'],
    'introduction': ['intro', 'meet', 'connect', 'referral'],
    'apology': ['sorry', 'apologize', 'regret', 'mistake'],
    'thankyou': ['thank', 'appreciate', 'grateful'],
    'welcome': ['welcome', 'onboard', 'getting started'],
}

def predict_template(subject: str, snippet: str) -> list:
    """Predict relevant templates for an email."""
    text = f"{subject} {snippet}".lower()
    matches = []
    
    for template, keywords in TEMPLATE_MAP.items():
        score = sum(1 for kw in keywords if kw in text)
        if score > 0:
            matches.append({'template': template, 'confidence': score / len(keywords)})
    
    return sorted(matches, key=lambda x: x['confidence'], reverse=True)

def cmd_run(dry_run: bool, limit: int = 20):
    print("🔮 Email Template Predictor")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    predicted = 0
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        templates = predict_template(subject, snippet)
        
        if templates and templates[0]['confidence'] > 0.5:
            predicted += 1
            best = templates[0]
            print(f"  {best['template']} ({best['confidence']:.0%}): {subject[:35]}")
    
    print(f"\n✅ Predicted templates for {predicted} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()