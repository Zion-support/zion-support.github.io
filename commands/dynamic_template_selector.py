#!/usr/bin/env python3
"""
Dynamic Template Selector - Zion

Chooses the best response template based on context.
Personalizes responses automatically.

Usage:
  python3 dynamic_template_selector.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TEMPLATES = {
    'acknowledgment': {'match': ['received', 'got it', 'noted'], 'formality': 'medium'},
    'information': {'match': ['tell me', 'explain', 'what is'], 'formality': 'high'},
    'action': {'match': ['do this', 'need to', 'please'], 'formality': 'medium'},
    'decision': {'match': ['approve', 'agree', 'decide'], 'formality': 'high'},
    'followup': {'match': ['following up', 'checking in', 'status'], 'formality': 'friendly'}
}

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("📄 Dynamic Template Selector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    selections = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        best_template = 'acknowledgment'
        best_score = 0
        
        for template, config in TEMPLATES.items():
            score = sum(1 for kw in config['match'] if kw in text)
            if score > best_score:
                best_score = score
                best_template = template
        
        selections.append({'subject': subject[:30], 'template': best_template})
        print(f"   📄 {best_template}: {subject[:25]}")
    
    print(f"✅ Selected templates for {len(selections)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()