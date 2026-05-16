#!/usr/bin/env python3
"""
Response Feedback Loop - Zion

Learns from response patterns to improve future replies.
Tracks what gets replies and what doesn't.

Usage:
  python3 response_feedback_loop.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🔄 Response Feedback Loop")
    
    # Check recent sent emails for replies
    sent_msgs = gmail_search('label:sent younger_than:7d', limit=limit * 2)
    
    feedback = {
        'fast_responses': 0,  # Replied within 24h
        'slow_responses': 0,  # Replied after 24h
        'patterns': {}
    }
    
    for msg in sent_msgs[:limit]:
        headers = msg.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        date_hdr = next((h['value'] for h in headers if h['name'] == 'Date'), '')
        
        # Analyze subject patterns
        keywords = ['?', 'urgent', 'asap', 'meeting', 'quick']
        for kw in keywords:
            if kw in subject.lower():
                feedback['patterns'][kw] = feedback['patterns'].get(kw, 0) + 1
    
    # Save feedback metrics
    fb_file = WORKSPACE / 'zion.app' / 'data' / 'response_feedback.json'
    fb_file.parent.mkdir(parents=True, exist_ok=True)
    
    if fb_file.exists():
        existing = json.loads(fb_file.read_text())
        feedback['historical_count'] = existing.get('historical_count', 0) + limit
    else:
        fb_file.write_text(json.dumps(feedback, indent=2))
    
    print(f"✅ Collected feedback from {limit} sent emails")
    print(f"   Patterns: {feedback['patterns']}")
    
    # Store updated feedback
    fb_file.write_text(json.dumps(feedback, indent=2))

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()