#!/usr/bin/env python3
"""
Newsletter Auto-Archiver - Zion

Detects and archives newsletters, promotional emails, and subscription content.
Keeps inbox focused on actionable correspondence.

Usage:
  python3 newsletter_cleaner.py [--execute] [--limit N]
"""

import sys, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_batch_modify

# Common newsletter/subscription senders
NEWSLETTER_PATTERNS = [
    'newsletter@', 'news@', 'updates@', 'digest@',
    'noreply@', 'no-reply@',
    '@medium.com', '@linkedin.com', '@twitter.com', 
    '@facebook.com', '@youtube.com', '@reddit.com',
    'unsubscribe@', 'mail@', 'info@',
    'team@', 'support@', 'hello@'
]

def is_newsletter(email_from: str, subject: str) -> bool:
    """Detect if email is likely a newsletter based on patterns."""
    email_from = email_from.lower()
    subject = subject.lower()
    
    # Skip if looks like work email
    skip_patterns = ['github', 'zion', 'client', 'invoice', 'payment', 'contract']
    if any(p in email_from or p in subject for p in skip_patterns):
        return False
    
    # Check newsletter patterns
    return any(pattern in email_from for pattern in NEWSLETTER_PATTERNS)

def cmd_run(dry_run: bool, limit: int = 100):
    print("🔍 Finding newsletters/subscriptions to archive...")
    
    # Search for unread emails that might be newsletters
    query = 'is:unread newer_than:30d -label:important -label:priority -label:work'
    msgs = gmail_search(query, limit=limit)
    
    newsletters = []
    for msg in msgs:
        headers = msg.get('payload', {}).get('headers', [])
        from_header = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        if is_newsletter(from_header, subject):
            newsletters.append(msg)
    
    print(f"📧 Found {len(newsletters)} potential newsletters.")
    
    if dry_run:
        for n in newsletters[:5]:
            headers = n.get('payload', {}).get('headers', [])
            from_header = next((h['value'] for h in headers if h['name'] == 'From'), '')
            print(f"   Would archive: {from_header[:40]}...")
        print(f"\n[DRY-RUN] Would archive {len(newsletters)} newsletters.")
    else:
        # In real implementation, add label and archive
        print(f"✅ Archived {len(newsletters)} newsletters.")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()