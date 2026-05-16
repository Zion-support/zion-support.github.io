#!/usr/bin/env python3
"""
Email Statistics Tracker - Zion

Tracks email metrics and provides analytics.
Monitors response rates and patterns.

Usage:
  python3 email_statistics_tracker.py --execute --limit 50
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("📊 Email Statistics Tracker")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    stats = {'total': 0, 'by_domain': {}, 'by_length': {'short': 0, 'medium': 0, 'long': 0}}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        stats['total'] += 1
        
        # Domain tracking
        domain = sender.split('@')[-1] if '@' in sender else 'unknown'
        stats['by_domain'][domain] = stats['by_domain'].get(domain, 0) + 1
        
        # Length categories
        length = len(snippet)
        if length < 100:
            stats['by_length']['short'] += 1
        elif length < 300:
            stats['by_length']['medium'] += 1
        else:
            stats['by_length']['long'] += 1
    
    print(f"   📊 Total: {stats['total']}")
    print(f"   📊 Domains: {len(stats['by_domain'])} unique")
    print(f"   📊 Length: {stats['by_length']}")
    print(f"✅ Tracked statistics for {stats['total']} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()