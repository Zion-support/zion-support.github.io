#!/usr/bin/env python3
"""
Decision Tree Navigator - Zion

Navigates complex decision trees for email handling.
Ensures consistent decision making.

Usage:
  python3 decision_tree_navigator.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def decide_action(subject: str, snippet: str) -> dict:
    """Navigate decision tree"""
    text = f"{subject} {snippet}".lower()
    
    decision = {'action': 'review', 'confidence': 0.5}
    
    # Decision tree
    if 'urgent' in text:
        decision['action'] = 'respond_now'
        decision['confidence'] = 0.9
    elif 'meeting' in text:
        decision['action'] = 'schedule'
        decision['confidence'] = 0.8
    elif 'question' in text or '?' in text:
        decision['action'] = 'answer'
        decision['confidence'] = 0.75
    elif 'approval' in text or 'sign' in text:
        decision['action'] = 'escalate'
        decision['confidence'] = 0.85
    
    return decision

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("🌲 Decision Tree Navigator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    decisions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        decision = decide_action(subject, snippet)
        decisions.append({'subject': subject[:30], 'decision': decision})
        print(f"   🌲 {decision['action']} ({decision['confidence']:.0%}): {subject[:20]}")
    
    print(f"✅ Navigated {len(decisions)} decision trees")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()