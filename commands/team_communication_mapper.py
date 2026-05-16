#!/usr/bin/env python3
"""
Email Team Collaboration - Zion

Maps team collaboration.
Communication patterns.

Usage:
  python3 team_communication_mapper.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CC_PATTERNS = {'@', 'cc:', 'carbon copy', 'everyone'}

def cmd_run(dry_run: bool, limit: int = 25):
    print("👥 Team Collaboration Mapper")
    
    mapper = {
        'collaborations_mapped': 0,
        'team_members': 0,
        'communication_score': 0
    }
    
    msgs = gmail_search('label:inbox', limit=limit * 2)
    collaborators = set()
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        for h in headers:
            if h['name'] in ['To', 'Cc', 'Bcc']:
                addresses = h['value']
                if '@' in addresses:
                    collaborators.add(addresses)
        
        mapper['collaborations_mapped'] += 1
    
    mapper['team_members'] = len(collaborators)
    mapper['communication_score'] = len(collaborators) * 10
    
    print(f"Mapped {mapper['collaborations_mapped']} collaborations")
    print(f"Team members: {mapper['team_members']}")
    
    # Save mapper
    tc_file = WORKSPACE / 'zion.app' / 'data' / 'team_collaboration.json'
    tc_file.parent.mkdir(parents=True, exist_ok=True)
    tc_file.write_text(json.dumps(mapper, indent=2))
    
    print(f"\n✅ Saved team collaboration")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()