#!/usr/bin/env python3
"""
Email Cleanup ACC - Zion

CLEANUP OLD NOTIFICATIONS:
- Archive GitHub notifications
- Clear mail delivery failures  
- Batch process old emails
"""

import sys
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import (
    gmail_search, gmail_get, gmail_batch_modify,
    gmail_get_or_create_label_id
)

def cmd_run(dry_run=False, limit=100):
    print("🧹 Email Cleanup ACC")
    print("=" * 40)
    
    # Search for notification types to archive
    searches = [
        ('label:inbox is:unread from:notifications@github.com', 'GitHub notifications'),
        ('label:inbox is:unread from:mailer-daemon@', 'Mail delivery failures'),
        ('label:inbox is:unread from:postmaster@', 'Postmaster notifications'),
        ('label:inbox older_than:30d', 'Old emails'),
    ]
    
    stats = {'archived': 0}
    
    for query, desc in searches:
        msgs = gmail_search(query, limit=limit // 2)
        if not msgs:
            continue
            
        print(f"\n📋 {desc}: {len(msgs)} emails")
        
        if dry_run:
            print(f"   [DRY] Would archive {len(msgs)} emails")
            stats['archived'] += len(msgs)
            continue
        
        # Get message ids
        msg_ids = [m['id'] for m in msgs]
        
        # Archive (remove from inbox)
        try:
            gmail_batch_modify({'ids': msg_ids}, removeLabelIds=['INBOX'])
            stats['archived'] += len(msg_ids)
            print(f"   ✅ Archived {len(msg_ids)} emails")
        except Exception as e:
            print(f"   ⚠️ Error: {e}")
    
    print(f"\n📊 Total archived: {stats['archived']}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()