#!/usr/bin/env python3
"""
Knowledge Base Auto-Updater - Zion

Extracts key information from emails and updates knowledge base.
Builds organizational memory from email conversations.

Usage:
  python3 knowledge_base_updater.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def extract_knowledge_points(msg: dict) -> list:
    """Extract key facts from email"""
    snippet = msg.get('snippet', '')
    headers = msg.get('payload', {}).get('headers', [])
    
    points = []
    
    # Extract names (likely entities)
    import re
    # Look for company names, projects, people
    patterns = [
        (r'([A-Z][a-z]+ [A-Z][a-z]+)', 'person'),  # Person names
        (r'\$([0-9,]+)', 'amount'),  # Dollar amounts
        (r'(\d+%)\s+(increase|decrease)', 'metric'),  # Metrics
        (r'(?:project|initiative)\s+([A-Z][a-z]+)', 'project'),  # Projects
    ]
    
    for pattern, typ in patterns:
        matches = re.findall(pattern, snippet)
        for match in matches[:2]:
            points.append({'type': typ, 'value': match})
    
    return points

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🧠 Knowledge Base Auto-Updater")
    
    msgs = gmail_search('label:inbox is:read older_than:3d', limit=limit * 2)
    
    knowledge = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        points = extract_knowledge_points(full)
        
        if points:
            knowledge.append({
                'subject': subject[:40],
                'points': points[:3]
            })
            print(f"   📚 {subject[:30]} | {len(points)} knowledge points")
    
    # Update knowledge base
    kb_file = WORKSPACE / 'zion.app' / 'data' / 'knowledge_base.json'
    kb_file.parent.mkdir(parents=True, exist_ok=True)
    
    if kb_file.exists():
        existing = json.loads(kb_file.read_text())
        knowledge = existing + knowledge
    
    kb_file.write_text(json.dumps(knowledge[-100:], indent=2))
    
    print(f"✅ Updated knowledge base with {len(knowledge)} entries")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()