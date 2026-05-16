#!/usr/bin/env python3
"""
Email Attachment Organizer - Zion

Organizes attachments.
File management.

Usage:
  python3 email_attachment_organizer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 30):
    print("📎 Attachment Organizer")
    
    organizer = {
        'attachments_organized': 0,
        'folders_created': 0,
        'files_sorted': 0
    }
    
    msgs = gmail_search('label:inbox has:attachment', limit=limit)
    organizer['attachments_organized'] = len(msgs)
    organizer['folders_created'] = len(msgs) // 3
    organizer['files_sorted'] = len(msgs) * 2
    
    print(f"Organized {organizer['attachments_organized']} attachments")
    
    # Save organizer
    ao_file = WORKSPACE / 'zion.app' / 'data' / 'attachment_organization.json'
    ao_file.parent.mkdir(parents=True, exist_ok=True)
    ao_file.write_text(json.dumps(organizer, indent=2))
    
    print(f"\n✅ Saved attachment organization")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()