#!/usr/bin/env python3
"""
Email Pattern Miner - Zion

Discovers patterns in email behavior and timing.
Helps optimize send times and responses.

Usage:
  python3 email_pattern_miner.py --execute --limit 100
"""

import sys, json
from collections import Counter
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def mine_patterns(limit: int = 100) -> dict:
    """Mine email patterns for insights."""
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    patterns = {
        'send_hours': Counter(),
        'response_times': [],
        'common_subjects': Counter(),
        'sender_domains': Counter()
    }
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        # Get time sent
        date_header = next((h['value'] for h in headers if h['name'] == 'Date'), '')
        if date_header:
            try:
                # Parse hour from date string
                import email.utils
                parsed = email.utils.parsedate(date_header)
                if parsed:
                    patterns['send_hours'][parsed[3]] += 1  # Hour
            except:
                pass
        
        # Get subject patterns
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        words = subject.lower().split()[:3]
        for word in words:
            if len(word) > 3:
                patterns['common_subjects'][word] += 1
        
        # Get sender domains
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        if '@' in from_hdr:
            domain = from_hdr.split('@')[-1].split('>')[0].strip()
            patterns['sender_domains'][domain] += 1
    
    return patterns

def cmd_run(dry_run: bool, limit: int = 100):
    print("🔍 Email Pattern Miner")
    
    patterns = mine_patterns(limit)
    
    print("\nPeak email hours:")
    for hour, count in patterns['send_hours'].most_common(5):
        bar = '█' * int(count / 2)
        print(f"  {hour:02d}:00 {bar} {count}")
    
    print("\nMost common subject words:")
    for word, count in patterns['common_subjects'].most_common(5):
        print(f"  {word}: {count}")
    
    print("\nTop sender domains:")
    for domain, count in patterns['sender_domains'].most_common(5):
        print(f"  {domain}: {count}")
    
    print(f"\n✅ Mined patterns from {limit} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()