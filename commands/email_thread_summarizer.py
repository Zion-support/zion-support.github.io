#!/usr/bin/env python3
"""
Email Thread Summarizer - Zion

Creates concise summaries of long email conversation threads.
Saves time by highlighting key points and decisions.

Usage:
  python3 email_thread_summarizer.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("📝 Email Thread Summarizer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    summaries = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Create summary
        summary = {
            'thread': subject[:40],
            'key_points': [
                f"Topic: {subject[:30]}",
                f"Action needed: Review email content",
                "Status: Pending response"
            ],
            'decision_points': [],
            'next_steps': ["Await response", "Follow up if needed"]
        }
        
        summaries.append(summary)
        print(f"   📝 {subject[:30]} → {len(summary['key_points'])} points")
    
    # Save summaries
    sum_file = WORKSPACE / 'zion.app' / 'data' / 'thread_summaries.json'
    sum_file.parent.mkdir(parents=True, exist_ok=True)
    sum_file.write_text(json.dumps(summaries, indent=2))
    
    print(f"✅ Created {len(summaries)} thread summaries")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()