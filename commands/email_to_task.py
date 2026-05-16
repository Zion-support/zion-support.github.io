#!/usr/bin/env python3
"""
Email Email-To-Task - Zion

Converts emails to tasks.
Task management.

Usage:
  python3 email_to_task.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TASK_KEYWORDS = ['task', 'action', 'todo', 'need to', 'please']

def cmd_run(dry_run: bool, limit: int = 20):
    print("📋 Email To Task")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    tasks = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in TASK_KEYWORDS):
            tasks.append({
                'subject': subject[:40],
                'task_created': True
            })
    
    print(f"Created {len(tasks)} tasks")
    
    # Save tasks
    et_file = WORKSPACE / 'zion.app' / 'data' / 'email_tasks.json'
    et_file.parent.mkdir(parents=True, exist_ok=True)
    et_file.write_text(json.dumps(tasks, indent=2))
    
    print(f"\n✅ Saved email to task")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()