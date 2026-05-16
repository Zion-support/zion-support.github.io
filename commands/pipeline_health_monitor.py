#!/usr/bin/env python3
"""
Pipeline Health Monitor - Zion

Monitors sales pipeline health from emails.
Identifies bottlenecks and opportunities.

Usage:
  python3 pipeline_health_monitor.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🏥 Pipeline Health Monitor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    health = {'healthy': 0, 'at_risk': 0, 'blocked': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if 'blocked' in text or 'stuck' in text:
            status = 'blocked'
        elif 'concern' in text or 'issue' in text:
            status = 'at_risk'
        else:
            status = 'healthy'
        
        health[status] += 1
        print(f"   🏥 {status}: {subject[:25]}")
    
    print(f"✅ Health breakdown: {dict(health)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()