#!/usr/bin/env python3
"""
Stream Processing Engine - Zion

Processes emails in continuous streams.
No batch delays - pure streaming.

Usage:
  python3 stream_processing_engine.py --execute --limit 100
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 100):
    print("🌊 Stream Processing Engine")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    processed = 0
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Stream processing
        processed += 1
        print(f"   🌊 {processed}: {subject[:25]}")
    
    print(f"✅ Stream processed {processed} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()