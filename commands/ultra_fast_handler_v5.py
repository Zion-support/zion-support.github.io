#!/usr/bin/env python3
"""
Ultra Fast Email Handler - V5

- Zero LLM dependency (instant)
- Aggressive noise filtering
- Smart batch processing
- Multi-action in single pass
"""

import sys
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

def get_headers(full):
    headers = full.get('payload', {}).get('headers', [])
    return {h['name']: h['value'] for h in headers}

def fast_action(sender, subject, snippet):
    """Instant categorization without LLM"""
    s = f"{sender} {subject} {snippet}".lower()
    
    # Quick wins - archive immediately
    if any(x in s for x in ['mailer-daemon', 'postmaster@', 'delivery status notification']):
        return ('archive', 'bounce', 99)
    
    # GitHub/Zapier noise - just skip
    if any(x in s for x in ['github.com', 'notifications@github', '@github', 'zapier', 'bot']):
        return ('skip', 'noise', 95)
    
    # Booking/Reservation - reply
    if any(x in s for x in ['airbnb', 'reserva', 'booking', 'reservation', 'confirm']):
        return ('reply', 'booking', 95)
    
    # Alerts - label
    if 'workspace alert' in s or 'outage' in s:
        return ('label', 'alert', 85)
    
    # Financial - label
    if any(x in s for x in ['btg', 'pactual', 'fatura', 'nota fiscal']):
        return ('label', 'financial', 80)
    
    # Semrush/tool notifications
    if 'semrush' in s or 'position tracking' in s:
        return ('archive', 'tool', 85)
    
    # Default label for review
    return ('label', 'review', 50)

def main():
    execute = '--execute' in sys.argv
    limit = 15
    for i, a in enumerate(sys.argv):
        if a == '--limit' and i+1 < len(sys.argv):
            limit = int(sys.argv[i+1])
    
    print(f"🚀 Ultra Fast Handler (V5) - Processing {limit} emails")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    labels = {
        'processed': gmail_get_or_create_label_id('Autonomous-Replied-V5'),
        'bounce': gmail_get_or_create_label_id('System/Bounces'),
        'archive': gmail_get_or_create_label_id('Autonomous/Archived'),
        'alert': gmail_get_or_create_label_id('System/Alerts'),
    }
    
    stats = {'replied': 0, 'archived': 0, 'labeled': 0, 'skipped': 0}
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        h = get_headers(full)
        sender = h.get('From', '')
        subject = h.get('Subject', '')
        snippet = full.get('snippet', '')
        
        action, cat, conf = fast_action(sender, subject, snippet)
        
        if action == 'skip':
            stats['skipped'] += 1
            print(f"⏭️ {sender[:25]} | {cat}")
            
        elif action == 'archive':
            stats['archived'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['bounce']])
                gmail_batch_modify({'ids': [msg_id]}, removeLabelIds=['INBOX'])
            print(f"📦 Archived: {subject[:30]}")
            
        elif action == 'reply':
            stats['replied'] += 1
            reply = "Thank you for your message. I've received your email and will respond shortly.\n\nBest regards,\nKleber Garcia Alcatrão"
            if execute:
                gmail_send_reply(msg_id, reply)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
            print(f"✅ Replied: {subject[:30]}")
            
        else:  # label
            stats['labeled'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
            print(f"🏷️ Labeled: {subject[:30]}")
    
    print(f"\n📊 {stats}")

if __name__ == '__main__':
    main()