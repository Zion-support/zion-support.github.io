#!/usr/bin/env python3
"""
Email Project Tracker - Zion

Tracks project progress.
Milestone monitoring.

Usage:
  python3 project_tracker.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

PROJECT_KEYWORDS = ['milestone', 'deliver', 'progress', 'update', 'status']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📈 Project Tracker")
    
    projects = {'tracked': 0, 'milestones': 0, 'updates': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in PROJECT_KEYWORDS):
            projects['tracked'] += 1
            if 'milestone' in snippet:
                projects['milestones'] += 1
            if 'update' in snippet:
                projects['updates'] += 1
    
    print(f"Tracked: {projects['tracked']}")
    print(f"Milestones: {projects['milestones']}")
    
    # Save projects
    pt_file = WORKSPACE / 'zion.app' / 'data' / 'project_tracking.json'
    pt_file.parent.mkdir(parents=True, exist_ok=True)
    pt_file.write_text(json.dumps(projects, indent=2))
    
    print(f"\n✅ Saved project tracker")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()