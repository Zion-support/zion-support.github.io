#!/usr/bin/env python3
"""
Email Cluster Analyzer - Zion

Groups similar emails together for batch processing.
Improves efficiency by handling related items together.

Usage:
  python3 email_cluster_analyzer.py --execute --limit 50
"""

import sys, json
from pathlib import Path
from collections import defaultdict
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("🔗 Email Cluster Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    clusters = defaultdict(list)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Cluster by keyword
        if 'meeting' in text:
            cluster = 'meetings'
        elif 'project' in text:
            cluster = 'projects'
        elif 'status' in text or 'update' in text:
            cluster = 'status_updates'
        elif 'deadline' in text or 'due' in text:
            cluster = 'urgent_items'
        else:
            cluster = 'general'
        
        clusters[cluster].append(subject[:30])
    
    for cluster, emails in clusters.items():
        print(f"   🔗 {cluster}: {len(emails)} emails")
    
    print(f"✅ Created {len(clusters)} email clusters")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()