#!/usr/bin/env python3
"""
Email CI Health Dashboard - Zion

Monitors CI/CD health from emails.
Build status tracking.

Usage:
  python3 ci_health_dashboard.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CI_KEYWORDS = ['ci', 'cd', 'build', 'pipeline', 'workflow', 'deployment']

def cmd_run(dry_run: bool, limit: int = 25):
    print("🔄 CI Health Dashboard")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    health = {'builds': 0, 'failures': 0, 'success': 0, 'status': 'monitoring'}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in CI_KEYWORDS):
            health['builds'] += 1
            if 'fail' in snippet or 'error' in snippet:
                health['failures'] += 1
            else:
                health['success'] += 1
    
    print(f"Builds: {health['builds']}")
    print(f"Failures: {health['failures']}")
    print(f"Success: {health['success']}")
    
    # Save health
    ch_file = WORKSPACE / 'zion.app' / 'data' / 'ci_health.json'
    ch_file.parent.mkdir(parents=True, exist_ok=True)
    ch_file.write_text(json.dumps(health, indent=2))
    
    print(f"\n✅ Saved CI health")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()