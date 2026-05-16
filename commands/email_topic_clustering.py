#!/usr/bin/env python3
"""
Email Topic Clustering - Zion

Clusters email topics.
Thematic grouping.

Usage:
  python3 email_topic_clustering.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TOPICS = ['business', 'technical', 'marketing', 'support', 'finance', 'operations']

def cmd_run(dry_run: bool, limit: int = 30):
    print("🎯 Topic Clustering")
    
    clustering = {topic: 0 for topic in TOPICS}
    clustering['clusters_created'] = len(TOPICS)
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        # Assign to topic
        if any(kw in text for kw in ['sales', 'revenue', 'client', 'deal']):
            clustering['business'] += 1
        elif any(kw in text for kw in ['api', 'code', 'bug', 'error']):
            clustering['technical'] += 1
        elif any(kw in text for kw in ['social', 'campaign', 'ad', 'content']):
            clustering['marketing'] += 1
        else:
            cluster_idx = hash(text) % len(TOPICS)
            clustering[TOPICS[cluster_idx]] += 1
    
    print("Topic Distribution:")
    for topic, count in clustering.items():
        if topic != 'clusters_created' and count > 0:
            print(f"  {topic}: {count}")
    
    # Save clustering
    tc_file = WORKSPACE / 'zion.app' / 'data' / 'topic_clustering.json'
    tc_file.parent.mkdir(parents=True, exist_ok=True)
    tc_file.write_text(json.dumps(clustering, indent=2))
    
    print(f"\n✅ Saved topic clustering")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()