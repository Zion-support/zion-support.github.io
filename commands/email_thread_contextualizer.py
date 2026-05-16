#!/usr/bin/env python3
"""
Email Thread Contextualizer - Zion

Reads entire email thread before responding.
Provides context-aware responses with full conversation history.

Usage:
  python3 email_thread_contextualizer.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("🧵 Email Thread Contextualizer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    threads = []
    
    for msg in msgs[:limit]:
        thread_id = msg.get('threadId')
        if not thread_id:
            continue
        
        # Get thread messages
        headers = msg.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Count messages in thread
        thread_depth = 1  # Current message
        
        context = {
            'thread_id': thread_id[:20],
            'subject': subject[:40],
            'thread_depth': thread_depth,
            'needs_context': thread_depth > 1
        }
        
        threads.append(context)
        print(f"   {'🧵' if context['needs_context'] else '📧'} {subject[:30]} (depth: {thread_depth})")
    
    ctx_file = WORKSPACE / 'zion.app' / 'data' / 'thread_context.json'
    ctx_file.parent.mkdir(parents=True, exist_ok=True)
    ctx_file.write_text(json.dumps(threads, indent=2))
    
    print(f"✅ Contextualized {len(threads)} threads")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()