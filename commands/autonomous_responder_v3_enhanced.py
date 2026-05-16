#!/usr/bin/env python3
"""
Autonomous Auto-Responder V3 - Zion Tech Group (Enhanced)

Intelligent email responder with:
- Smart categorization for multiple email types
- Auto-handling of bounces, newsletters, alerts
- Quick response generation
- Label management

Usage:
  python3 autonomous_responder_v3_enhanced.py --execute --limit 15
"""

import sys, os, json, re
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, telegram_send, gmail_get_or_create_label_id

# Labels
LABEL_PROCESSED = 'Autonomous-Replied-V3'
LABEL_BOUNCES = 'System/Bounces'
LABEL_ARCHIVED = 'Autonomous/Archived'
LABEL_NEWSLETTER = 'System/Newsletters'
LABEL_ALERTS = 'System/Alerts'

def quick_categorize(sender: str, subject: str, snippet: str) -> dict:
    """Fast categorization based on keywords and patterns"""
    text = f"{subject} {snippet} {sender}".lower()
    sender_lower = sender.lower()
    
    # Bounces - archive immediately
    if any(x in sender_lower for x in ['mailer-daemon', 'postmaster']):
        return {"action": "archive", "category": "bounce", "confidence": 99}
    
    # Newsletters - archive
    if any(x in text for x in ['unsubscribe', 'newsletter', 'digest', 'update']) or \
       any(x in sender_lower for x in ['noreply', 'no-reply', 'newsletter']):
        return {"action": "archive", "category": "newsletter", "confidence": 85}
    
    # Alerts - label and archive
    if any(x in sender_lower for x in ['alert', 'notification']) or \
       'alert' in text:
        return {"action": "label_only", "category": "alert", "confidence": 80}
    
    # Bookings/Reservations
    if any(x in text for x in ['reservation', 'booking', 'airbnb', 'reserva', 'confirm', 'confirmado']):
        return {"action": "reply_now", "category": "booking", "confidence": 90}
    
    # Banking/Financial
    if any(x in text for x in ['bank', 'btg', 'pactual', 'fatura', 'nota fiscal', 'condições gerais']):
        return {"action": "label_only", "category": "financial", "confidence": 75}
    
    # Billing/Payments
    if any(x in text for x in ['invoice', 'payment', 'billing', 'receipt', 'payment due']):
        return {"action": "reply_now", "category": "billing", "confidence": 85}
    
    # Urgent
    if any(x in text for x in ['urgent', 'asap', 'critical', 'deadline', 'urgente']):
        return {"action": "reply_now", "category": "urgent", "confidence": 90}
    
    # Sales/Inquiries
    if any(x in text for x in ['quote', 'proposal', 'pricing', 'rate', 'orçamento', 'proposta', 'interesse']):
        return {"action": "reply_now", "category": "sales", "confidence": 75}
    
    return {"action": "reply_later", "category": "other", "confidence": 50}

def generate_quick_reply(category: str, sender: str, subject: str) -> str:
    """Generate context-aware reply based on category"""
    templates = {
        'booking': "Thank you for your reservation inquiry. I've received your booking request and will confirm the details shortly.\n\nBest regards,\nKleber Garcia Alcatrão\nZion Tech Group",
        'billing': "Thank you for your message regarding billing/payment. I'll review this and provide a response shortly.\n\nBest regards,\nKleber Garcia Alcatrão",
        'urgent': "Thank you for your urgent message. I'm reviewing this now and will respond with next steps shortly.\n\nBest regards,\nKleber Garcia Alcatrão",
        'sales': "Thank you for your inquiry. I'd be happy to discuss our services and prepare a customized proposal for you.\n\nBest regards,\nKleber Garcia Alcatrão\nZion Tech Group",
        'other': "Thank you for your email. I've received your message and will respond as soon as possible.\n\nBest regards,\nKleber Garcia Alcatrão"
    }
    return templates.get(category, templates['other'])

def should_skip_email(sender: str, subject: str) -> tuple:
    """Returns (should_skip, reason)"""
    sender_lower = sender.lower()
    subject_lower = subject.lower()
    
    # GitHub/automated systems
    skip_patterns = ['github.com', 'notifications@github.com', '@github.com',
                     'noreply@', 'no-reply@', 'notify@', 'bot@', 'zapier']
    
    for pattern in skip_patterns:
        if pattern.lower() in sender_lower:
            return (True, 'system_email')
    
    # Bounce subjects
    if 'delivery status notification' in subject_lower:
        return (True, 'bounce_email')
    if 'undeliverable' in subject_lower:
        return (True, 'bounce_email')
    
    return (False, None)

def cmd_run(dry_run: bool = False, limit: int = 15):
    print("🤖 Autonomous Auto-Responder V3 (Enhanced)")

    msgs = gmail_search('is:unread', limit=limit * 2)
    
    processed_label = gmail_get_or_create_label_id(LABEL_PROCESSED)
    bounce_label = gmail_get_or_create_label_id(LABEL_BOUNCES)
    archive_label = gmail_get_or_create_label_id(LABEL_ARCHIVED)
    newsletter_label = gmail_get_or_create_label_id(LABEL_NEWSLETTER)
    alerts_label = gmail_get_or_create_label_id(LABEL_ALERTS)
    
    stats = {'replied': 0, 'archived': 0, 'skipped': 0, 'labeled': 0, 'bounced': 0}
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        label_ids = msg.get('labelIds', [])
        
        # Skip already processed
        if processed_label in label_ids:
            continue
        
        # Skip GitHub/system emails
        should_skip, reason = should_skip_email(sender, subject)
        if should_skip:
            if reason == 'bounce_email':
                stats['bounced'] += 1
                if not dry_run:
                    gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[bounce_label])
                    gmail_batch_modify({'ids': [msg_id]}, removeLabelIds=['INBOX'])
                print(f"[BOUNCE] Archived: {subject[:30]}")
            else:
                stats['skipped'] += 1
            continue
        
        # Categorize
        analysis = quick_categorize(sender, subject, snippet)
        
        print(f"\n📧 {sender[:30]} | {analysis['category']} ({analysis['confidence']}%)")
        action = analysis['action']
        
        if action == 'archive':
            stats['archived'] += 1
            if not dry_run:
                gmail_batch_modify({'ids': [msg_id]}, removeLabelIds=['INBOX'], addLabelIds=[archive_label])
            print(f"   ✅ Archived")
            
        elif action == 'label_only':
            stats['labeled'] += 1
            if not dry_run:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[processed_label])
                if analysis['category'] == 'newsletter':
                    gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[newsletter_label])
                elif analysis['category'] == 'alert':
                    gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[alerts_label])
            print(f"   ✅ Labeled as {analysis['category']}")
            
        elif action == 'reply_now' or (action == 'reply_later' and analysis['confidence'] >= 60):
            reply_text = generate_quick_reply(analysis['category'], sender, subject)
            if not dry_run:
                gmail_send_reply(msg_id, reply_text)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[processed_label])
            stats['replied'] += 1
            print(f"   ✅ Quick reply sent ({len(reply_text)} chars)")
        else:
            stats['skipped'] += 1
            print(f"   ⏭️  Queued for manual review")
    
    print(f"\n📊 Stats: Replied {stats['replied']}, Archived {stats['archived']}, Labeled {stats['labeled']}, Bounced {stats['bounced']}")
    
    if not dry_run:
        telegram_send(f"🤖 V3 Enhanced: {stats['replied']} replies, {stats['archived']} archived, {stats['labeled']} labeled, {stats['bounced']} bounces")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()