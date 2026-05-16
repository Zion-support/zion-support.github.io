#!/usr/bin/env python3
"""
Email Project Tracker - Zion

Tracks projects via email.
Progress monitoring.

Usage:
  python3 email_project_tracker.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

PROJECT_KEYWORDS = ['project', 'milestone', 'deliverable', 'phase', 'sprint', 'deadline']

def cmd_run(dry_run: bool, limit: int = 30):
    print("📈 Project Tracker")
    
    tracker = {
        'projects_monitored': 0,
        'milestones_tracked': 0,
        'alerts_sent': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in PROJECT_KEYWORDS):
            tracker['projects_monitored'] += 1
            tracker['milestones_tracked'] += 1
            if 'due' in text or 'overdue' in text:
                tracker['alerts_sent'] += 1
    
    print(f"Monitored {tracker['projects_monitored']} projects")
    print(f"Alerts: {tracker['alerts_sent']}")
    
    # Save tracker
    pt_file = WORKSPACE / 'zion.app' / 'data' / 'project_tracking.json'
    pt_file.parent.mkdir(parents=True, exist_ok=True)
    pt_file.write_text(json.dumps(tracker, indent=2))
    
    print(f"\n✅ Saved project tracking")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()