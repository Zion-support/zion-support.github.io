#!/usr/bin/env python3
"""
Follow-up Processor - Zion Engine V4

Processes scheduled follow-ups and sends reminder emails.
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import (
    gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify,
    gmail_get_or_create_label_id, telegram_send
)

FOLLOWUP_FILE = WORKSPACE / 'zion.app' / 'data' / 'followups.json'

def load_followups():
    if FOLLOWUP_FILE.exists():
        return json.loads(FOLLOWUP_FILE.read_text())
    return {}

def save_followups(followups):
    FOLLOWUP_FILE.parent.mkdir(parents=True, exist_ok=True)
    FOLLOWUP_FILE.write_text(json.dumps(followups, indent=2))

def cmd_run(dry_run=False, limit=10):
    print("📬 Follow-up Processor")
    
    followups = load_followups()
    
    now = datetime.utcnow()
    to_process = []
    
    for msg_id, data in followups.items():
        if data.get('status') == 'pending':
            scheduled = datetime.fromisoformat(data['scheduled'])
            if scheduled <= now:
                to_process.append((msg_id, data))
    
    print(f"Found {len(to_process)} follow-ups to process")
    
    processed = 0
    for msg_id, data in to_process[:limit]:
        try:
            # Get original thread
            full = gmail_get(msg_id)
            headers = full.get('payload', {}).get('headers', [])
            
            sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
            subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
            
            # Send gentle follow-up
            followup_text = """Hi there,

Just checking in on my previous email. Would love to hear your thoughts when you have a moment.

Best regards,
Kleber Garcia Alcatrão"""
            
            if not dry_run:
                # Mark as processed to prevent duplicates
                followups[msg_id]['status'] = 'sent'
                followups[msg_id]['sent_at'] = datetime.utcnow().isoformat()
                save_followups(followups)
                
                # Send follow-up
                gmail_send_reply(msg_id, followup_text)
                processed += 1
                print(f"✅ Follow-up sent to {sender[:30]}")
                
        except Exception as e:
            print(f"⚠️ Failed: {e}")
    
    print(f"\n📊 Sent {processed} follow-ups")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()