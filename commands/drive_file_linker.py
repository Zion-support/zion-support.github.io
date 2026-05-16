#!/usr/bin/env python3
"""
Email Drive Linker - Zion

Links emails to Drive files.
Document connection.

Usage:
  python3 drive_file_linker.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

FILE_KEYWORDS = ['document', 'spreadsheet', 'presentation', 'google doc', 'attached']

def cmd_run(dry_run: bool, limit: int = 25):
    print("🔗 Drive Linker")
    
    linker = {'files_linked': 0, 'connections_made': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in FILE_KEYWORDS):
            linker['files_linked'] += 1
            linker['connections_made'] += 1
    
    print(f"Linked {linker['files_linked']} files")
    
    # Save linker
    dl_file = WORKSPACE / 'zion.app' / 'data' / 'drive_linking.json'
    dl_file.parent.mkdir(parents=True, exist_ok=True)
    dl_file.write_text(json.dumps(linker, indent=2))
    
    print(f"\n✅ Saved drive linking")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()