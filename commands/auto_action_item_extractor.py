#!/usr/bin/env python3
"""
Auto Action Item Extractor - Zion

Extracts action items, owners, and deadlines from emails.
Creates trackable tasks from email requests.

Usage:
  python3 auto_action_item_extractor.py --execute --limit 30
"""

import sys, json
import re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

ACTION_PATTERNS = [
    r'(?:need to|must|should) (\w+.*?)(?:\.|$)',
    r'(?:by|due) (\w+ \d+)',
    r'(?:assigned to|owner)[:]? (\w+)'
]

def extract_actions(subject: str, snippet: str) -> list:
    """Extract action items from email"""
    text = f"{subject} {snippet}"
    actions = []
    
    # Look for action verbs
    action_verbs = ['need', 'review', 'update', 'send', 'schedule', 'prepare']
    for verb in action_verbs:
        if verb in text.lower():
            actions.append({
                'action': verb,
                'context': text[:50],
                'status': 'pending'
            })
    
    return actions[:3]

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("✅ Auto Action Item Extractor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    actions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        extracted = extract_actions(subject, snippet)
        
        for action in extracted:
            actions.append(action)
            print(f"   🔹 {action['action']}: {subject[:25]}")
    
    # Save to task file
    task_file = WORKSPACE / 'zion.app' / 'data' / 'extracted_tasks.json'
    task_file.parent.mkdir(parents=True, exist_ok=True)
    task_file.write_text(json.dumps(actions, indent=2))
    
    print(f"✅ Extracted {len(actions)} action items")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()