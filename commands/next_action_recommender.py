#!/usr/bin/env python3
"""
Next Action Recommender - Zion

Recommends next best action for each email.
Optimizes workflow efficiency.

Usage:
  python3 next_action_recommender.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

ACTIONS = {
    'urgent': 'Respond immediately',
    'meeting': 'Check calendar and respond',
    'question': 'Provide detailed answer',
    'followup': 'Acknowledge and check status',
    'default': 'Review and prioritize'
}

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🎯 Next Action Recommender")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    recommendations = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Recommend action
        action = ACTIONS['default']
        for keyword, rec_action in ACTIONS.items():
            if keyword in text:
                action = rec_action
                break
        
        recommendations.append({
            'subject': subject[:30],
            'recommended_action': action
        })
        print(f"   🎯 {action[:20]}: {subject[:18]}")
    
    print(f"✅ Recommended actions for {len(recommendations)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()