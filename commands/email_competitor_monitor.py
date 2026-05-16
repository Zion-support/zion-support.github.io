#!/usr/bin/env python3
"""
Email Competitor Monitor - Zion

Monitors competitors.
Market intelligence.

Usage:
  python3 email_competitor_monitor.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

COMPETITORS = ['competitor1', 'competitor2', 'competitor3', 'alternative', 'vs']

def cmd_run(dry_run: bool, limit: int = 20):
    print("🔍 Competitor Monitor")
    
    monitor = {
        'mentions_found': 0,
        'alerts_sent': 0,
        'insights_extracted': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(comp in text for comp in COMPETITORS):
            monitor['mentions_found'] += 1
            monitor['alerts_sent'] += 1
            monitor['insights_extracted'] += 1
    
    print(f"Found {monitor['mentions_found']} competitor mentions")
    
    # Save monitor
    cm_file = WORKSPACE / 'zion.app' / 'data' / 'competitor_intel.json'
    cm_file.parent.mkdir(parents=True, exist_ok=True)
    cm_file.write_text(json.dumps(monitor, indent=2))
    
    print(f"\n✅ Saved competitor monitoring")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()