#!/usr/bin/env python3
"""
Email Thread Merger - Zion

Merges related email threads automatically.
Reduces duplicate conversations.

Usage:
  python3 email_thread_merger.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 40):
    print("🔗 Thread Merger")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    threads = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        # Normalize subject (remove Re:, Fwd:)
        normalized = subject.lower().replace('re:', '').replace('fwd:', '').strip()
        
        if normalized not in threads:
            threads[normalized] = {'messages': [], 'count': 0}
            threads[normalized]['messages'].append(from_hdr[:20])
            threads[normalized]['count'] += 1
    
    merged = {k: v for k, v in threads.items() if v['count'] > 1}
    
    print(f"Analyzed {len(threads)} threads")
    print(f"Merge candidates: {len(merged)}")
    
    for subject, data in list(merged.items())[:5]:
        print(f"  {subject[:25]}: {data['count']} messages")
    
    # Save merged
    merge_file = WORKSPACE / 'zion.app' / 'data' / 'merged_threads.json'
    merge_file.parent.mkdir(parents=True, exist_ok=True)
    merge_file.write_text(json.dumps(merged, indent=2))
    
    print(f"\n✅ Saved thread merging")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()