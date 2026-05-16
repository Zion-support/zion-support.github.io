#!/usr/bin/env python3
"""
Smart Draft Generator - Zion Tech Group

Creates intelligent email drafts for review:
- Analyzes incoming emails
- Generates multiple reply options
- Labels for later review
- Learns from past responses

Usage:
  python3 smart_draft_generator.py --execute --limit 10
"""

import sys, os, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_batch_modify, gmail_create_draft_new, gmail_create_draft, telegram_send

LABEL_DRAFTS = 'Draft/Ready'
LABEL_PRIORITY = 'Priority/High'

def generate_draft_options(sender: str, subject: str, snippet: str) -> dict:
    """Generate multiple draft reply options using LLM"""
    from llm_client import chat
    
    prompt = f"""Generate 3 different reply options for this email. Return JSON:
{{
  "options": [
    {{"tone": "direct", "reply": "..."}},
    {{"tone": "detailed", "reply": "..."}},
    {{"tone": "brief", "reply": "..."}}
  ],
  "recommended": 0,
  "reason": "which tone works best and why"
}}

Email:
From: {sender}
Subject: {subject}
Snippet: {snippet}

Return only JSON:"""
    
    try:
        resp = chat([{"role": "user", "content": prompt}], provider="openrouter", temperature=0.7)
        return json.loads(resp['content'].strip().replace('```json', '').replace('```', ''))
    except Exception as e:
        print(f"Draft generation failed: {e}")
        return {
            "options": [
                {"tone": "brief", "reply": "Thank you for your email. I'll review and respond shortly."}
            ],
            "recommended": 0,
            "reason": "fallback"
        }

def cmd_run(dry_run: bool = False, limit: int = 10):
    print("✍️ Smart Draft Generator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    from google_workspace import gmail_get_or_create_label_id
    draft_label = gmail_get_or_create_label_id(LABEL_DRAFTS)
    
    stats = {'drafts_created': 0, 'skipped': 0}
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        headers = msg.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = msg.get('snippet', '')
        
        # Skip system emails
        sender_lower = sender.lower()
        if any(x in sender_lower for x in ['github', 'mailer-daemon', 'postmaster', 'noreply']):
            stats['skipped'] += 1
            continue
        
        print(f"\n📧 {sender[:25]}: {subject[:40]}")
        
        # Generate drafts
        drafts = generate_draft_options(sender, subject, snippet)
        
        recommended_reply = drafts['options'][drafts['recommended']]['reply']
        
        if not dry_run:
            # Get thread info for draft creation
            full = gmail_get(msg_id)
            thread_id = full.get('threadId')
            from_header = next((h['value'] for h in headers if h['name'] == 'From'), '')
            
            # Create draft with recommended option
            if thread_id:
                gmail_create_draft(thread_id, subject, recommended_reply, from_header)
            else:
                gmail_create_draft_new(subject, recommended_reply, from_header)
            gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[draft_label])
        
        print(f"   Created draft: {drafts['reason']}")
        print(f"   Preview: {recommended_reply[:60]}...")
        stats['drafts_created'] += 1
    
    print(f"\n✅ Created {stats['drafts_created']} drafts")
    
    if not dry_run:
        telegram_send(f"✍️ Draft Generator: {stats['drafts_created']} reply drafts ready")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()