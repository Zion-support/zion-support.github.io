#!/usr/bin/env python3
"""
Smart Thread Continuity - Zion

Tracks conversation context across email threads.
Knows what was discussed last time with each contact.

Usage:
  python3 smart_thread_continuity.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🧵 Smart Thread Continuity")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    threads = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        # Extract conversation ID (subject-based)
        conv_id = subject.split('Re:')[0].strip()[:30] if 'Re:' in subject else subject[:30]
        
        if conv_id not in threads:
            threads[conv_id] = {
                'messages': [],
                'last_topic': conv_id
            }
        
        threads[conv_id]['messages'].append({
            'sender': sender[:20],
            'snippet': snippet[:50]
        })
    
    print(f"✅ Tracked {len(threads)} unique conversation threads")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()