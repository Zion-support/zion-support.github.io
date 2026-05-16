#!/usr/bin/env python3
"""
Contact Relationship Mapper - Zion

Maps relationships between contacts based on email frequency and content.
Builds a relationship graph for better communication insights.

Usage:
  python3 contact_relationship_mapper.py --execute --limit 100
"""

import sys, json, re
from collections import defaultdict
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def extract_email_addresses(text: str) -> list:
    """Extract email addresses from text."""
    pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    return re.findall(pattern, text)

def build_relationship_graph(limit: int = 100) -> dict:
    """Build relationship graph from email threads."""
    msgs = gmail_search('is:sent newer_than:30d', limit=limit * 2)
    
    # Track interactions
    interactions = defaultdict(lambda: {'count': 0, 'topics': []})
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        to = next((h['value'] for h in headers if h['name'] == 'To'), '')
        cc = next((h['value'] for h in headers if h['name'] == 'Cc'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Extract all participants
        all_emails = extract_email_addresses(f"{to} {cc}")
        
        for email in all_emails:
            interactions[email]['count'] += 1
            # Extract topic keywords
            words = subject.lower().split()
            interactions[email]['topics'].extend(words[:5])
    
    return interactions

def cmd_run(dry_run: bool, limit: int = 100):
    print("🤝 Contact Relationship Mapper")
    
    interactions = build_relationship_graph(limit)
    
    # Sort by interaction count
    sorted_contacts = sorted(interactions.items(), key=lambda x: x[1]['count'], reverse=True)
    
    print(f"Mapped {len(sorted_contacts)} contacts")
    print("\nTop relationships:")
    for i, (email, data) in enumerate(sorted_contacts[:10], 1):
        topics = list(set(data['topics']))[:3]
        print(f"  {i}. {email[:30]}: {data['count']} interactions")
        if topics:
            print(f"     Topics: {', '.join(topics)}")
    
    # Save relationship data
    rel_file = WORKSPACE / 'zion.app' / 'data' / 'relationships.json'
    rel_file.parent.mkdir(parents=True, exist_ok=True)
    
    rel_data = [{'email': e, 'count': d['count'], 'topics': list(set(d['topics']))[:5]} 
                for e, d in sorted_contacts[:50]]
    rel_file.write_text(json.dumps(rel_data, indent=2))
    
    print(f"\n✅ Saved relationship map with {len(rel_data)} contacts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()