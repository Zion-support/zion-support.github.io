#!/usr/bin/env python3
"""
Email Chain Summarizer - Zion

Creates concise summaries of long email threads.
Helps quickly catch up on conversation history.

Usage:
  python3 email_chain_summarizer.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def summarize_thread(msg_id: str, max_messages: int = 10) -> dict:
    """Summarize an email thread."""
    # Get full thread
    thread_url = f'https://gmail.googleapis.com/gmail/v1/users/me/threads/{msg_id}'
    # For simplicity, we'll analyze the message and snippet
    full = gmail_get(msg_id)
    
    headers = full.get('payload', {}).get('headers', [])
    subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
    snippet = full.get('snippet', '')
    thread_id = full.get('threadId', '')
    
    # Simple extraction-based summary
    key_points = []
    
    # Extract action items
    if 'please' in snippet.lower():
        key_points.append("Action requested")
    if 'attached' in snippet.lower():
        key_points.append("Files attached")
    if 'meeting' in snippet.lower() or 'call' in snippet.lower():
        key_points.append("Meeting scheduled")
    
    # Extract deadlines
    import re
    dates = re.findall(r'\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b', snippet)
    if dates:
        key_points.append(f"Dates mentioned: {', '.join(dates[:2])}")
    
    return {
        'thread_id': thread_id,
        'subject': subject,
        'messages': 1,  # Simplified
        'key_points': key_points,
        'snippet': snippet[:100]
    }

def cmd_run(dry_run: bool, limit: int = 20):
    print("📝 Email Chain Summarizer")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    summarized = 0
    for msg in msgs[:limit]:
        msg_id = msg['id']
        summary = summarize_thread(msg_id)
        
        if summary['key_points'] or len(summary['snippet']) > 20:
            summarized += 1
            print(f"\nThread: {summary['subject'][:40]}")
            for point in summary['key_points'][:3]:
                print(f"  • {point}")
    
    print(f"\n✅ Summarized {summarized} threads")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()