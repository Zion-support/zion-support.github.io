#!/usr/bin/env python3
"""
Email API Monitor - Zion

Monitors API status.
Service reliability.

Usage:
  python3 api_key_audit.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

API_KEYWORDS = ['api', 'rate limit', 'quota', '401', '403', 'error']

def cmd_run(dry_run: bool, limit: int = 20):
    print("🔑 API Monitor")
    
    monitor = {'issues_found': 0, 'errors_detected': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in API_KEYWORDS):
            monitor['issues_found'] += 1
    
    print(f"Found {monitor['issues_found']} API issues")
    
    # Save monitor
    am_file = WORKSPACE / 'zion.app' / 'data' / 'api_monitoring.json'
    am_file.parent.mkdir(parents=True, exist_ok=True)
    am_file.write_text(json.dumps(monitor, indent=2))
    
    print(f"\n✅ Saved API monitoring")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()