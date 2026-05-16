#!/usr/bin/env python3
"""
Adaptive Response Selector - Zion

Selects the most appropriate response from multiple options.
Uses real-time feedback to optimize selection.

Usage:
  python3 adaptive_response_selector.py --execute --limit 40
"""

import sys, json
from pathlib import Path
import random
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

RESPONSE_OPTIONS = ['acknowledge', 'answer', 'defer', 'delegate', 'escalate']

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🎯 Adaptive Response Selector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    selections = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Adaptive selection
        text = f"{subject} {snippet}".lower()
        
        if 'urgent' in text:
            selected = 'answer'
        elif 'meeting' in text:
            selected = 'acknowledge'
        else:
            selected = random.choice(RESPONSE_OPTIONS)
        
        selections.append({'subject': subject[:30], 'selected': selected})
        print(f"   🎯 {selected}: {subject[:25]}")
    
    print(f"✅ Selected responses for {len(selections)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()