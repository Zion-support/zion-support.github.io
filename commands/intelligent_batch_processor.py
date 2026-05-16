#!/usr/bin/env python3
"""
Intelligent Batch Processor - Zion

Groups similar emails for batch processing.
Increases efficiency for bulk operations.

Usage:
  python3 intelligent_batch_processor.py --execute --limit 50
"""

import sys, json
from pathlib import Path
from collections import defaultdict
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("📦 Intelligent Batch Processor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    batches = defaultdict(list)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{sender} {subject}".lower()
        
        # Group by similarity
        if 'github' in text:
            batches['github_notifications'].append(subject[:30])
        elif any(kw in text for kw in ['invoice', 'payment', 'bill']):
            batches['finance'].append(subject[:30])
        elif any(kw in text for kw in ['meeting', 'calendar', 'schedule']):
            batches['calendar'].append(subject[:30])
        else:
            batches['general'].append(subject[:30])
    
    for batch_name, subjects in batches.items():
        print(f"   📦 {batch_name}: {len(subjects)} emails")
    
    print(f"✅ Created {len(batches)} intelligent batches")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()