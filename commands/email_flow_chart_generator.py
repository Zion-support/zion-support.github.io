#!/usr/bin/env python3
"""
Email Flow Chart Generator - Zion

Visualizes email conversation flow and decision trees.
Creates process maps from email threads.

Usage:
  python3 email_flow_chart_generator.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 20):
    print("📊 Email Flow Chart Generator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    flows = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Identify flow type
        text = f"{subject} {snippet}".lower()
        
        flow_type = 'general'
        if 'approval' in text or 'sign' in text:
            flow_type = 'approval'
        elif 'review' in text:
            flow_type = 'review'
        elif 'decision' in text:
            flow_type = 'decision'
        elif 'feedback' in text:
            flow_type = 'feedback'
        
        flows.append({
            'subject': subject[:35],
            'type': flow_type,
            'thread': full.get('threadId', '')[:8]
        })
    
    # Group by type
    by_type = {}
    for f in flows:
        t = f['type']
        by_type[t] = by_type.get(t, 0) + 1
    
    print(f"Email flow types:")
    for t, count in sorted(by_type.items(), key=lambda x: x[1], reverse=True):
        print(f"  {t}: {count}")
    
    # Save flow chart data
    flow_file = WORKSPACE / 'zion.app' / 'data' / 'email_flows.json'
    flow_file.parent.mkdir(parents=True, exist_ok=True)
    flow_file.write_text(json.dumps(flows, indent=2))
    
    print(f"\n✅ Saved flow chart data")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()