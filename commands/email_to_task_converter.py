#!/usr/bin/env python3
"""
Email Email To Task Converter - Zion

Converts important emails to task items.
Creates tasks in your task system.

Usage:
  python3 email_to_task_converter.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TASK_KEYWORDS = ['action', 'please', 'need', 'should', 'will', 'todo', 'task']

def cmd_run(dry_run: bool, limit: int = 30):
    print("✅ Email to Task Converter")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    tasks = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in TASK_KEYWORDS):
            tasks.append({
                'task': snippet[:60],
                'from': from_hdr[:25],
                'due': 'soon'
            })
    
    print(f"Converted {len(tasks)} emails to tasks")
    
    for t in tasks[:5]:
        print(f"  {t['task'][:30]}")
    
    # Save tasks
    conv_file = WORKSPACE / 'zion.app' / 'data' / 'email_tasks.json'
    conv_file.parent.mkdir(parents=True, exist_ok=True)
    conv_file.write_text(json.dumps(tasks, indent=2))
    
    print(f"\n✅ Saved task conversion")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()