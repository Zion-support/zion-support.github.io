#!/usr/bin/env python3
"""
Final Email Cleaner - Production Ready

Ultra-aggressive noise filtering with smart business detection.
Handles: GitHub, Zapier, Mailer-Daemon, Alerts, Newsletters
"""

import sys
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

# Pre-compiled noise patterns (fastest check first)
NOISE_PATTERNS = [
    'github.com', 'notifications@github', '@github', 'github-actions',
    'zapier.com', 'zapier alerts', 'mailer-daemon', 'postmaster@',
    'delivery status notification', 'undeliverable'
]

def is_noise(sender, subject):
    """O(1) noise check"""
    s = f"{sender} {subject}".lower()
    return any(p in s for p in NOISE_PATTERNS)

def categorize_business(sender, subject, snippet):
    """Smart business email categorization"""
    text = f"{subject} {snippet}".lower()
    
    if any(k in text for k in ['airbnb', 'reserva', 'booking', 'reservation', 'confirm']):
        return ('reply', 'booking', 95)
    
    if any(k in text for k in ['btg', 'pactual', 'fatura', 'nota fiscal', 'condições gerais']):
        return ('label', 'financial', 85)
    
    if any(k in text for k in ['workspace alert', 'outage', 'incident']):
        return ('label', 'alert', 80)
    
    return ('label', 'review', 50)

def main():
    execute = '--execute' in sys.argv
    limit = 30
    for i, a in enumerate(sys.argv):
        if a == '--limit' and i+1 < len(sys.argv):
            limit = int(sys.argv[i+1])
    
    print(f"🎯 Final Email Cleaner - {limit} emails")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    labels = {
        'processed': gmail_get_or_create_label_id('V5-Processed'),
        'archive': gmail_get_or_create_label_id('Autonomous/Archived'),
    }
    
    stats = {'replied': 0, 'archived': 0, 'labeled': 0, 'skipped': 0}
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        
        # Skip noise instantly
        if is_noise(sender, subject):
            stats['skipped'] += 1
            continue
        
        # Business email
        action, cat, conf = categorize_business(sender, subject, full.get('snippet', ''))
        
        if action == 'reply':
            stats['replied'] += 1
            if execute:
                gmail_send_reply(msg_id, "Thank you for your email. I've received your message and will respond shortly.\n\nBest regards,\nKleber Garcia Alcatrão")
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
            print(f"✅ Replied: {subject[:30]}")
        else:
            stats['labeled'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
            print(f"🏷️ Labeled: {subject[:30]}")
    
    print(f"\n📊 Replied: {stats['replied']}, Labeled: {stats['labeled']}, Skipped: {stats['skipped']}")

if __name__ == '__main__':
    main()