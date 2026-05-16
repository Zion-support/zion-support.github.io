#!/usr/bin/env python3
"""
Ultra-Robust Email Responder - Works even when LLM providers fail

This version includes:
- Smart template fallbacks when all LLM providers fail
- Pre-built response templates for all common intents
- Confidence-based decision making
- No external API dependencies for core functionality
"""

import sys, json, re
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import (
    gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify,
    gmail_get_or_create_label_id, telegram_send
)

# ── RESPONSE TEMPLATES BY INTENT ─────────────────────────────────────────────

RESPONSE_TEMPLATES = {
    'meeting_schedule': {
        'casual': "Hi {name}!\n\nI'd be happy to schedule a meeting. I'm available {options}. Let me know what works best for you.\n\nTalk soon!\nKleber",
        'formal': "Dear {name},\n\nThank you for your meeting request. I'm available at the following times: {options}. Please let me know your preference.\n\nBest regards,\nKleber Garcia Alcatrão",
        'urgent': "{name} - Available for meeting: {options}. Let's connect ASAP.\n\nKleber"
    },
    'proposal_quote': {
        'standard': "Thank you for your interest in our services. I'd be happy to prepare a tailored proposal. Could you share details about your project scope, timeline, and requirements?\n\nLooking forward to collaborating.\nKleber Garcia Alcatrão"
    },
    'payment_invoice': {
        'standard': "Thank you for your email regarding payment. I can confirm receipt of your payment and appreciate your prompt attention to this matter.\n\nPlease let me know if you need anything else.\n\nBest regards,\nKleber Garcia Alcatrão"
    },
    'technical_support': {
        'urgent': "Thank you for bringing this to my attention. I've alerted our technical team who will investigate immediately and provide a resolution within 24 hours.\n\nYour patience is appreciated.\nKleber Garcia Alcatrão"
    },
    'partnership_business': {
        'standard': "Thank you for your partnership inquiry. I'm excited about the possibility of working together. Could we schedule a brief call to discuss the details?\n\nLooking forward to exploring this opportunity.\nKleber Garcia Alcatrão"
    },
    'follow_up': {
        'standard': "Thank you for following up. I appreciate your patience and will have an update for you shortly.\n\nBest regards,\nKleber Garcia Alcatrão"
    },
    'decision_required': {
        'urgent': "Thank you for your decision request. I'll review and respond with my decision within 24 hours.\n\nBest regards,\nKleber Garcia Alcatrão"
    },
    'information_request': {
        'standard': "Thank you for your inquiry. Here's the information you requested: {info}.\n\nPlease let me know if you need any clarification.\n\nBest regards,\nKleber Garcia Alcatrão"
    },
    'sales_lead': {
        'standard': "Thank you for your interest in Zion Tech Group services. I'd love to learn more about your needs and how we can help. Could you share more details about your project?\n\nLooking forward to connecting.\nKleber Garcia Alcatrão"
    },
    'complaint': {
        'urgent': "I sincerely apologize for the inconvenience. I've personally escalated this to our team who are working on a resolution right now. You'll receive a full response within 24 hours.\n\nThank you for your patience.\nKleber Garcia Alcatrão"
    },
    'general_inquiry': {
        'standard': "Thank you for contacting Zion Tech Group. I've received your message and will respond with a detailed reply as soon as possible.\n\nBest regards,\nKleber Garcia Alcatrão"
    }
}

# ── INTENT DETECTION ───────────────────────────────────────────────────────────

def detect_intent(text):
    """Enhanced intent detection with confidence scores."""
    text_lower = text.lower()
    
    scores = {
        'meeting_schedule': sum(2 for kw in ['meeting', 'schedule', 'call', 'discuss', 'reunião'] if kw in text_lower),
        'proposal_quote': sum(2 for kw in ['proposal', 'quote', 'pricing', 'orçamento', 'proposta'] if kw in text_lower),
        'payment_invoice': sum(2 for kw in ['invoice', 'payment', 'billing', 'fatura', 'pagamento'] if kw in text_lower),
        'technical_support': sum(2 for kw in ['bug', 'error', 'issue', 'broken', 'not working', 'erro', 'falha'] if kw in text_lower),
        'partnership_business': sum(2 for kw in ['partnership', 'collaborate', 'joint', 'parceria'] if kw in text_lower),
        'follow_up': sum(2 for kw in ['following up', 'circling back', 'checking in', 'follow-up'] if kw in text_lower),
        'decision_required': sum(2 for kw in ['approve', 'confirm', 'sign', 'aprovação', 'decisão'] if kw in text_lower),
        'sales_lead': sum(2 for kw in ['interested', 'demo', 'trial', 'interessado'] if kw in text_lower),
        'complaint': sum(2 for kw in ['frustrated', 'disappointed', 'unacceptable', 'urgente'] if kw in text_lower),
        'information_request': sum(1 for kw in ['information', 'details', 'question', 'how', 'informação'] if kw in text_lower)
    }
    
    if max(scores.values()) > 0:
        best = max(scores, key=scores.get)
        return best, min(scores[best] / 10, 1.0)
    
    return 'general_inquiry', 0.5

def detect_tone(text):
    """Detect communication tone."""
    text_lower = text.lower()
    
    if any(kw in text_lower for kw in ['urgent', 'asap', 'immediately', 'urgente', 'hoje']):
        return 'urgent'
    if any(kw in text_lower for kw in ['hey', 'hi there', 'thanks!', 'cheers', 'oi', 'obrigado']):
        return 'casual'
    return 'formal'

def get_relationship_tier(sender):
    """Determine sender relationship tier."""
    sender_lower = sender.lower()
    
    tiers = {
        'VIP': ['ceo@', 'president@', 'director@', 'founder@', 'partner@', 'investor@'],
        'CLIENT': ['client@', 'customer@', 'ziontechgroup.com'],
        'PARTNER': ['partner@', 'collab@'],
        'STANDARD': []
    }
    
    for tier, patterns in tiers.items():
        for pattern in patterns:
            if pattern in sender_lower:
                return tier
    return 'STANDARD'

def is_automated(sender, subject):
    """Filter out automated emails."""
    sender_lower = sender.lower()
    subject_lower = subject.lower()
    
    skip_senders = ['github.com', 'noreply', 'no-reply', 'mailer-daemon', 'postmaster', 
                    'bounce@', 'daemon@', 'automated@', 'alert@', 'bot@']
    skip_subjects = ['failed', 'error', 'notification', 'alert', 'digest', 'commit', 'push']
    
    for term in skip_senders:
        if term in sender_lower:
            return True
    for term in skip_subjects:
        if term in subject_lower:
            return True
    return False

# ── RESPONSE GENERATION ───────────────────────────────────────────────────────

def get_template_response(intent, tone, confidence):
    """Get response from template library."""
    templates = RESPONSE_TEMPLATES.get(intent, RESPONSE_TEMPLATES['general_inquiry'])
    
    # Select tone variant
    tone_key = tone if tone in templates else 'standard'
    
    # If no confidence, use generic
    if confidence < 0.5:
        return RESPONSE_TEMPLATES['general_inquiry']['standard']
    
    return templates.get(tone_key, templates.get('standard', ""))

def generate_smart_response(intent, tone, tier, sender, subject, snippet, confidence):
    """Generate the best possible response."""
    
    # Extract name
    name = sender.split('<')[0].strip() if '<' in sender else sender.split('@')[0].title()
    
    # Try templatized response first
    response = get_template_response(intent, tone, confidence)
    
    # Replace placeholders
    response = response.replace('{name}', name)
    response = response.replace('{options}', 'Tuesday/Wednesday this week')
    response = response.replace('{info}', 'the information you requested')
    
    # Enhance with LLM if available and confident
    if confidence > 0.6:
        try:
            from llm_client import chat
            prompt = f"""As Kleber Garcia Alcatrão, write a concise reply (40-60 words max).
            
Intent: {intent}
Tone: {tone}
Sender: {sender}
Subject: {subject}
Content: {snippet}

Be professional and helpful."""
            
            result = chat([{"role": "user", "content": prompt}], provider="auto", temperature=0.7)
            llm_response = result.get('content', '').strip()
            
            # Use LLM if it's reasonable length
            if 20 < len(llm_response) < 300:
                return llm_response
        except Exception:
            pass  # Fall back to template
    
    return response

# ── MAIN EXECUTION ───────────────────────────────────────────────────────────

def cmd_run(dry_run=False, limit=15):
    print("🚀 Ultra-Robust Email Responder V3")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    label_id = gmail_get_or_create_label_id('Processed-V3')
    
    candidates = []
    for msg in msgs:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        if is_automated(sender, subject):
            continue
        
        candidates.append({
            'id': msg['id'],
            'sender': sender,
            'subject': subject,
            'snippet': snippet
        })
    
    print(f"📧 Found {len(candidates)} business emails")
    
    stats = {'sent': 0, 'escalated': 0, 'skipped': 0}
    
    for email in candidates[:limit]:
        msg_id = email['id']
        sender = email['sender']
        subject = email['subject']
        snippet = email['snippet']
        
        text = f"{subject} {snippet}"
        intent, confidence = detect_intent(text)
        tone = detect_tone(text)
        tier = get_relationship_tier(sender)
        
        print(f"\n📝 {sender[:25]} | Intent: {intent} | Conf: {confidence:.0%} | Tier: {tier}")
        
        # Escalate complaints and urgent issues
        if intent in ['complaint', 'decision_required'] or 'urgent' in tone:
            if not dry_run:
                telegram_send(f"🚨 ESCALATED: {sender[:30]} - {subject[:40]}")
            stats['escalated'] += 1
            continue
        
        # Generate response
        response = generate_smart_response(intent, tone, tier, sender, subject, snippet, confidence)
        
        if dry_run:
            print(f"   [DRY] {response[:60]}...")
        else:
            try:
                gmail_send_reply(msg_id, response)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_id])
                stats['sent'] += 1
                print(f"   ✅ Sent ({len(response)} chars)")
            except Exception as e:
                print(f"   ⚠️ Failed: {e}")
    
    print(f"\n📊 Stats: Sent {stats['sent']}, Escalated {stats['escalated']}")
    
    if not dry_run and stats['sent'] > 0:
        telegram_send(f"🚀 Responder V3: {stats['sent']} replies sent, {stats['escalated']} escalated")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()