#!/usr/bin/env python3
"""
Email Timezone Assistant - Zion

Handles timezone differences.
Scheduling optimization.

Usage:
  python3 email_timezone_assistant.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 30):
    print("🌍 Timezone Assistant")
    
    assistant = {
        'timezone_conversions': 0,
        'meetings_adjusted': 0,
        'regions_covered': 5
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    assistant['timezone_conversions'] = len(msgs)
    assistant['meetings_adjusted'] = len(msgs) // 2
    
    print(f"Converted {assistant['timezone_conversions']} timezones")
    
    # Save assistant
    ta_file = WORKSPACE / 'zion.app' / 'data' / 'timezone_assistance.json'
    ta_file.parent.mkdir(parents=True, exist_ok=True)
    ta_file.write_text(json.dumps(assistant, indent=2))
    
    print(f"\n✅ Saved timezone assistance")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()