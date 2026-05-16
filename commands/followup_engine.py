#!/usr/bin/env python3
"""
Follow-up Engine V13

Features:
- Track replied emails for follow-up
- Auto-send reminders after 48h
- Reply optimization based on success
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

FOLLOWUP_DB = WORKSPACE / 'zion.app' / 'data' / 'followups.json'

def load_followups():
    if FOLLOWUP_DB.exists():
        return json.loads(FOLLOWUP_DB.read_text())
    return {"pending": [], "replied": []}

def save_followups(data):
    FOLLOWUP_DB.parent.mkdir(parents=True, exist_ok=True)
    FOLLOWUP_DB.write_text(json.dumps(data))

def main():
    execute = '--execute' in sys.argv
    print(f"🔁 Follow-up Engine V13 - {datetime.now().strftime('%H:%M')}")
    
    followups = load_followups()
    
    # Check for replies received
    replied_label = gmail_get_or_create_label_id('Autonomous-Replied-V11')
    
    # Find emails that need follow-up (48h old)
    now = datetime.now()
    due = []
    
    for entry in followups['pending']:
        sent_time = datetime.fromisoformat(entry['sent'])
        if now - sent_time > timedelta(hours=48) and not entry.get('followed_up'):
            due.append(entry)
    
    print(f"📋 Follow-ups due: {len(due)}")
    
    stats = {'tracked': 0, 'followed_up': 0}
    
    # Track newly replied emails
    msgs = gmail_search(f'label:Autonomous-Replied-V11 is:unread', limit=20)
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender = headers.get('From', '')
        
        # Add to follow-up tracking
        followups['pending'].append({
            'msg_id': msg_id,
            'sender': sender,
            'sent': datetime.now().isoformat(),
            'followed_up': False
        })
        stats['tracked'] += 1
    
    # Send follow-ups
    for entry in due[:5]:  # Limit to 5 per run
        msg_id = entry['msg_id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender = headers.get('From', '')
        subject = headers.get('Subject', '')
        
        followup = f"Following up on: {subject}\n\nJust checking if you received my previous message.\n\nBest regards,\nKleber Garcia Alcatrão"
        
        if execute:
            gmail_send_reply(msg_id, followup)
            entry['followed_up'] = True
            stats['followed_up'] += 1
            print(f"🔁 Followed up: {subject[:30]}")
    
    save_followups(followups)
    print(f"\n📊 Tracked: {stats['tracked']}, Followed up: {stats['followed_up']}")

if __name__ == '__main__':
    main()