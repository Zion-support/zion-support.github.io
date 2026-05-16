#!/usr/bin/env python3
"""
Email Competitor Monitor - Zion

Monitors competitors.
Market intelligence.

Usage:
  python3 competitor_intelligence.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

COMPETITOR_KEYWORDS = ['competitor', 'competitor name', 'alternative', 'versus', 'vs ']

def cmd_run(dry_run: bool, limit: int = 25):
    print("🔍 Competitor Monitor")
    
    competitors = []
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in COMPETITOR_KEYWORDS):
            competitors.append({
                'competitor_tracked': True
            })
    
    print(f"Monitored {len(competitors)} competitors")
    
    # Save competitors
    cm_file = WORKSPACE / 'zion.app' / 'data' / 'competitor_monitoring.json'
    cm_file.parent.mkdir(parents=True, exist_ok=True)
    cm_file.write_text(json.dumps(competitors, indent=2))
    
    print(f"\n✅ Saved competitor monitoring")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()