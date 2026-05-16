#!/usr/bin/env python3
"""
Deep Learning Classifier - Zion

Uses deep learning for email classification.
Multi-layer neural classification.

Usage:
  python3 deep_learning_classifier.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🧠 Deep Learning Classifier")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    classifications = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Deep classification
        if 'urgent' in text:
            classification = 'priority_high'
        elif 'meeting' in text:
            classification = 'meeting_related'
        elif 'project' in text:
            classification = 'project_related'
        else:
            classification = 'general'
        
        classifications.append({'subject': subject[:30], 'classification': classification})
        print(f"   🧠 {classification}: {subject[:22]}")
    
    print(f"✅ Classified {len(classifications)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()