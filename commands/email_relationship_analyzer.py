#!/usr/bin/env python3
"""
Email Relationship Analyzer - Zion

Analyzes relationships.
Connection strength.

Usage:
  python3 email_relationship_analyzer.py --execute --limit 30
"""

import sys, json
import re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 30):
    print("🤝 Relationship Analyzer")
    
    analyzer = {
        'relationships_analyzed': 0,
        'strong_connections': 0,
        'at_risk': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    participants = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        # Extract email
        emails = re.findall(r'[\w\.-]+@[\w\.-]+\.\w+', from_hdr)
        if emails:
            sender = emails[0]
            participants[sender] = participants.get(sender, 0) + 1
        
        analyzer['relationships_analyzed'] += 1
    
    # Analyze relationship strength
    for sender, count in participants.items():
        if count > 3:
            analyzer['strong_connections'] += 1
        elif count == 1:
            analyzer['at_risk'] += 1
    
    print(f"Analyzed {analyzer['relationships_analyzed']} relationships")
    print(f"Strong: {analyzer['strong_connections']}, At-risk: {analyzer['at_risk']}")
    
    # Save analyzer
    ra_file = WORKSPACE / 'zion.app' / 'data' / 'relationship_analysis.json'
    ra_file.parent.mkdir(parents=True, exist_ok=True)
    ra_file.write_text(json.dumps(analyzer, indent=2))
    
    print(f"\n✅ Saved relationship analysis")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()