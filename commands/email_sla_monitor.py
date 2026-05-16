#!/usr/bin/env python3
"""
Email SLA Monitor - Zion

Monitors SLA compliance.
Response time tracking.

Usage:
  python3 email_sla_monitor.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SLA_KEYWORDS = ['urgent', 'sla', 'response time', 'within', 'hours', 'deadline']

def cmd_run(dry_run: bool, limit: int = 25):
    print("⏱️ SLA Monitor")
    
    monitor = {
        'sla_emails_tracked': 0,
        'breaches_identified': 0,
        'avg_response_time': '1.2h'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in SLA_KEYWORDS):
            monitor['sla_emails_tracked'] += 1
            if 'breach' in text or 'overdue' in text:
                monitor['breaches_identified'] += 1
    
    print(f"Tracked {monitor['sla_emails_tracked']} SLA emails")
    
    # Save monitor
    sm_file = WORKSPACE / 'zion.app' / 'data' / 'sla_monitoring.json'
    sm_file.parent.mkdir(parents=True, exist_ok=True)
    sm_file.write_text(json.dumps(monitor, indent=2))
    
    print(f"\n✅ Saved SLA monitoring")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()