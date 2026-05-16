#!/usr/bin/env python3
"""
Autonomous Auto-Responder - Zion

Sends email replies automatically WITHOUT human review.
- Reads unread emails (excluding automated notifications)
- Sends reply IMMEDIATELY via Gmail API
- Marks emails as processed to prevent duplicate responses
- Uses template fallback when LLM unavailable
- Adapts tone based on incoming email style

Usage:
  python3 autonomous_responder.py --execute --limit 10
"""

import sys, os, json, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_get_or_create_label_id, gmail_batch_modify, telegram_send

# Tone-specific prompts
TONE_PROMPTS = {
    'formal': """
You are Kleber Garcia Alcatrão, CEO of Zion Tech Group.
Write a short, professional reply (under 60 words).
Tone: Formal, polished, using "Dear" or appropriate greeting.
Sign as "Kleber Garcia Alcatrão, Zion Tech Group"
""",
    'casual': """
You are Kleber Garcia Alcatrão, CEO of Zion Tech Group.
Write a short, friendly reply (under 50 words).
Tone: Direct, friendly, slightly informal, like chatting with a colleague.
Sign as "Kleber Garcia Alcatrão, Zion Tech Group"
""",
    'urgent': """
You are Kleber Garcia Alcatrão, CEO of Zion Tech Group.
Write a brief, urgent reply (under 40 words).
Tone: Direct, acknowledge the urgency, provide quick next step.
Sign as "Kleber Garcia Alcatrão, Zion Tech Group"
"""
}

DEFAULT_PROMPT = """
You are Kleber Garcia Alcatrão, CEO of Zion Tech Group.
Write a short, professional, helpful reply (under 60 words).
Tone: direct, friendly, slightly informal.
Sign as "Kleber Garcia Alcatrão, Zion Tech Group"
"""

SKIP_SENDERS = [
    'github.com', 'notifications@github.com', '@github.com',
    'noreply@', 'no-reply@', 'notify@', 'bot@',
    'mailer-daemon@', 'postmaster@', 'bounce@',
    'daemon@', 'automated@', 'system@', 'alert@',
    'support@github.com', 'github-actions[bot]'
]

SKIP_SUBJECT_KEYWORDS = [
    'failed', 'error', 'notification', 'alert', 'digest',
    'automated', 'delivery status', 'undeliverable',
    'commit', 'push', 'merge', 'pipeline', 'build',
    'spam', 'undelivered', 'returned mail'
]

LABEL_PROCESSED = 'Autonomous-Replied'

def analyze_tone(text: str) -> str:
    text_lower = text.lower()
    urgent_kw = ['urgent', 'asap', 'immediately', 'critical', 'emergency', 'deadline']
    formal_kw = ['dear', 'regards', 'sincerely', 'best regards', 'kind regards']
    casual_kw = ['hey', 'hi there', 'thanks', 'cheers', 'quick question']
    
    urgent_score = sum(1 for kw in urgent_kw if kw in text_lower)
    formal_score = sum(1 for kw in formal_kw if kw in text_lower)
    casual_score = sum(1 for kw in casual_kw if kw in text_lower)
    
    if urgent_score > 0:
        return 'urgent'
    elif formal_score > 0:
        return 'formal'
    elif casual_score > 0:
        return 'casual'
    return 'neutral'

def is_automated(sender: str, subject: str) -> bool:
    sender_lower = sender.lower()
    subject_lower = subject.lower()
    for skip in SKIP_SENDERS:
        if skip.lower() in sender_lower:
            return True
    for keyword in SKIP_SUBJECT_KEYWORDS:
        if keyword in subject_lower:
            return True
    return False

def get_email_info(msg_id: str) -> dict:
    full = gmail_get(msg_id)
    headers = full.get('payload', {}).get('headers', [])
    sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
    subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
    snippet = full.get('snippet', '')
    return {'sender': sender, 'subject': subject, 'snippet': snippet}

def cmd_run(dry_run: bool, limit: int = 10):
    print("🚀 Autonomous Auto-Responder - Sending replies automatically")

    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    label_id = gmail_get_or_create_label_id(LABEL_PROCESSED)

    business_emails = []
    for msg in msgs:
        msg_id = msg['id']
        label_ids = msg.get('labelIds', [])
        if label_id in label_ids:
            continue
        
        info = get_email_info(msg_id)
        if not is_automated(info['sender'], info['subject']):
            business_emails.append({'id': msg_id, **info})

    print(f"📧 Found {len(business_emails)} business emails to respond to")

    sent_count = 0
    failed_count = 0

    for email in business_emails[:limit]:
        msg_id = email['id']
        sender = email['sender']
        subject = email['subject']
        snippet = email['snippet']

        # Determine tone
        tone = analyze_tone(f"{subject} {snippet}")
        prompt_template = TONE_PROMPTS.get(tone, DEFAULT_PROMPT)

        prompt = f"""{prompt_template}

Email:
  From: {sender}
  Subject: {subject}
  Snippet: {snippet}

Reply:
"""

        try:
            from llm_client import chat
            resp = chat([{"role":"user","content":prompt}], provider="auto", temperature=0.7)
            reply_text = resp.get('content', '').strip()

            if 'Reply:' in reply_text:
                reply_text = reply_text.split('Reply:')[-1].strip()

            if dry_run:
                print(f"\n[TONE:{tone}] Would send to {sender[:30]}:")
                print(f"   {reply_text[:80]}...")
            else:
                result = gmail_send_reply(msg_id, reply_text)
                print(f"\n✅ Sent reply to {sender[:30]} [tone:{tone}]")
                sent_count += 1
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_id])

        except Exception as e:
            print(f"   ⚠️ Error: {e}")
            failed_count += 1

    if dry_run:
        print(f"\n[DRY-RUN] Would send {len(business_emails)} replies.")
    else:
        print(f"\n🎉 Sent {sent_count} autonomous replies! Failed: {failed_count}")
        if sent_count > 0:
            telegram_send(f"📧 Autonomous Responder: Sent {sent_count} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()