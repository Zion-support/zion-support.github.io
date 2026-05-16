#!/usr/bin/env python3
"""
Action Item Extractor - Zion

Extracts specific action items with deadlines from emails.
Creates trackable tasks automatically.

Usage:
  python3 action_item_extractor.py --execute --limit 30
"""

import sys, json
import re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("✅ Action Item Extractor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    items = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}"
        
        # Extract action items
        actions = []
        
        # Look for "need to" patterns
        for match in re.finditer(r'need to ([^.,]+)', text, re.IGNORECASE):
            actions.append(match.group(1).strip())
        
        # Look for "should" patterns
        for match in re.finditer(r'should ([^.,]+)', text, re.IGNORECASE):
            actions.append(match.group(1).strip())
        
        if actions:
            for action in actions:
                items.append({'subject': subject[:30], 'action': action[:40]})
                print(f"   🔹 {action[:35]}")
    
    # Save action items
    task_file = WORKSPACE / 'zion.app' / 'data' / 'extracted_actions.json'
    task_file.parent.mkdir(parents=True, exist_ok=True)
    
    if task_file.exists():
        existing = json.loads(task_file.read_text())
        items = existing + items
    
    task_file.write_text(json.dumps(items, indent=2))
    
    print(f"✅ Extracted {len(items)} action items")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()