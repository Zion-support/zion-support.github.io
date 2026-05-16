#!/usr/bin/env python3
"""
Smart Bounce Handler - Zion Tech Group

Intelligently handles email bounces and delivery failures:
- Auto-archives delivery failures
- Identifies bounce patterns
- Cleans up inbox noise
- Reports bounce sources

Usage:
  python3 bounce_handler.py --execute --limit 50
"""

import sys, os, json
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_batch_modify, telegram_send

LABEL_BOUNCES = 'System/Bounces'
LABEL_BOUNCE_ARCHIVED = 'System/Bounces/Archived'

BOUNCE_PATTERNS = [
    'mailer-daemon', 'postmaster@', 'delivery status notification', 'undeliverable',
    'address not found', 'permanent failure', 'delivery failure', 'mail delivery failed',
    'could not be delivered', 'delivery notification', 'failure notice'
]

def is_bounce_email(sender: str, subject: str) -> bool:
    """Detect if email is a bounce/failure notification"""
    sender_lower = sender.lower()
    subject_lower = subject.lower()
    
    for pattern in BOUNCE_PATTERNS:
        if pattern in sender_lower or pattern in subject_lower:
            return True
    return False

def analyze_bounce_pattern(msgs: list) -> dict:
    """Analyze bounce patterns to identify root causes"""
    patterns = {
        'github_failures': 0,
        'external_bounces': 0,
        'unknown_recipients': 0,
        'domain_errors': 0
    }
    
    for msg in msgs:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '').lower()
        
        if 'github' in sender.lower() or 'github' in snippet:
            patterns['github_failures'] += 1
        if 'not found' in snippet or 'unknown' in snippet:
            patterns['unknown_recipients'] += 1
        if 'domain' in snippet or 'dns' in snippet:
            patterns['domain_errors'] += 1
        patterns['external_bounces'] += 1
    
    return patterns

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("📧 Smart Bounce Handler")
    
    # Find all bounce-related emails
    bounce_msgs = []
    
    # Search for common bounce subjects
    for pattern in ['delivery status notification', 'undeliverable', 'mailer-daemon']:
        try:
            msgs = gmail_search(f'subject:"{pattern}" label:inbox', limit=limit)
            bounce_msgs.extend(msgs)
        except:
            pass
    
    # Also check recent unread for bounces
    unread = gmail_search('label:inbox is:unread', limit=limit)
    for msg in unread:
        headers = msg.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        if is_bounce_email(sender, subject) and msg not in bounce_msgs:
            bounce_msgs.append(msg)
    
    print(f"Found {len(bounce_msgs)} bounce emails")
    
    if not bounce_msgs:
        print("No bounces to process")
        return
    
    # Analyze patterns
    patterns = analyze_bounce_pattern(bounce_msgs)
    print(f"Bounce analysis: {patterns}")
    
    from google_workspace import gmail_get_or_create_label_id
    bounce_label = gmail_get_or_create_label_id(LABEL_BOUNCES)
    archive_label = gmail_get_or_create_label_id(LABEL_BOUNCE_ARCHIVED)
    
    stats = {'archived': 0, 'failed': 0}
    
    for msg in bounce_msgs[:limit]:
        msg_id = msg['id']
        headers = msg.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        print(f"Archiving bounce: {subject[:40]}")
        
        if not dry_run:
            try:
                gmail_batch_modify({'ids': [msg_id]}, removeLabelIds=['INBOX'], addLabelIds=[bounce_label, archive_label])
                stats['archived'] += 1
            except Exception as e:
                print(f"Failed: {e}")
                stats['failed'] += 1
    
    print(f"\n✅ Archived {stats['archived']} bounce emails")
    
    if not dry_run:
        telegram_send(f"📧 Bounce Handler: Cleaned {stats['archived']} delivery failures")
        
        # Alert on patterns
        if patterns['github_failures'] > 5:
            telegram_send(f"⚠️ High GitHub bounce volume detected ({patterns['github_failures']}). Check workflow.")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()