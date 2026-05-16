#!/usr/bin/env python3
"""
Email Task Extractor - Zion

Extracts tasks from emails.
Todo management.

Usage:
  python3 email_task_extractor.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TASK_KEYWORDS = ['todo', 'task', 'need to', 'please', 'action', 'follow up']

def cmd_run(dry_run: bool, limit: int = 35):
    print("✅ Task Extractor")
    
    tasks = []
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in TASK_KEYWORDS):
            tasks.append({
                'subject': subject[:40],
                'task_extracted': True
            })
    
    print(f"Extracted {len(tasks)} tasks")
    
    # Save tasks
    te_file = WORKSPACE / 'zion.app' / 'data' / 'task_extraction.json'
    te_file.parent.mkdir(parents=True, exist_ok=True)
    te_file.write_text(json.dumps(tasks, indent=2))
    
    print(f"\n✅ Saved task extraction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()