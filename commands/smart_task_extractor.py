#!/usr/bin/env python3
"""
Smart Task Extractor - Zion

Extracts actionable tasks from emails.
Creates organized task lists with priorities.

Usage:
  python3 smart_task_extractor.py --execute --limit 40
"""

import sys, json
import re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TASK_PATTERNS = [
    r'can you (\w+.*)',
    r'please (\w+.*)',
    r'need to (\w+.*)',
    r'should (\w+.*)',
    r'action.*:?\s*(\w+.*)',
]

def cmd_run(dry_run: bool, limit: int = 40):
    print("✅ Smart Task Extractor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    tasks = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Extract tasks from sentences
        sentences = re.split(r'[.!?]+', snippet)
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) < 10:
                continue
            
            # Check for task indicators
            lower = sentence.lower()
            if any(trigger in lower for trigger in ['can you', 'please', 'need to', 'should', 'action']):
                priority = 'high' if any(w in lower for w in ['urgent', 'asap', 'immediately']) else 'normal'
                tasks.append({
                    'task': sentence[:60],
                    'source': subject[:30],
                    'priority': priority
                })
    
    print(f"Extracted {len(tasks)} tasks")
    
    # Sort by priority
    tasks.sort(key=lambda x: x['priority'] == 'high', reverse=True)
    
    for t in tasks[:5]:
        print(f"  [{t['priority'].upper()}] {t['task'][:40]}")
    
    # Save tasks
    task_file = WORKSPACE / 'zion.app' / 'data' / 'extracted_tasks.json'
    task_file.parent.mkdir(parents=True, exist_ok=True)
    task_file.write_text(json.dumps(tasks, indent=2))
    
    print(f"\n✅ Saved task extraction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()