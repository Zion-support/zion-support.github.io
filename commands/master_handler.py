#!/usr/bin/env python3
"""
Master Email Handler - Scheduled Runner

Designed to run every 5 minutes via cron:
- Handles 50-100 emails per cycle
- Aggressive noise filtering
- Intelligent business email handling
- Detailed logging for monitoring
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

# State tracking
STATE_FILE = WORKSPACE / 'zion.app' / 'data' / 'email_state.json'

def load_state():
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {"last_run": None, "total_processed": 0, "total_replied": 0}

def save_state(data):
    STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    STATE_FILE.write_text(json.dumps(data))

def detect_lang(text):
    pt = sum(1 for w in ['olá', 'prezado', 'reserva', 'obrigado', 'atenciosamente'] if w in text.lower())
    return 'pt' if pt > 0 else 'en'

def main():
    execute = '--execute' in sys.argv
    limit = 50
    
    # Load state
    state = load_state()
    
    print(f"⚡ Master Handler - {datetime.now().strftime('%H:%M:%S')}")
    
    # Get emails
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    labels = {
        'done': gmail_get_or_create_label_id('Master-Processed'),
        'archive': gmail_get_or_create_label_id('System/Bulk-Archive'),
    }
    
    to_process = []
    to_skip = 0
    
    # Categorize
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{sender} {subject}".lower()
        
        # Skip noise
        if any(n in text for n in ['github', 'zapier', 'mailer-daemon', 'postmaster', 'bot@']):
            to_skip += 1
            continue
        
        to_process.append((msg_id, sender, subject, full.get('snippet', '')))
    
    # Process
    replied = 0
    labeled = 0
    
    for msg_id, sender, subject, snippet in to_process:
        text = f"{subject} {snippet}".lower()
        lang = detect_lang(text)
        
        if any(k in text for k in ['airbnb', 'reserva', 'booking', 'confirm']):
            reply = "Obrigado pela mensagem. Retornarei em breve.\n\nKleber Garcia Alcatrão" if lang == 'pt' else "Thank you for your message. I'll respond shortly.\n\nKleber Garcia Alcatrão"
            if execute:
                gmail_send_reply(msg_id, reply)
            replied += 1
        else:
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['done']])
            labeled += 1
    
    # Update state
    state['last_run'] = datetime.now().isoformat()
    state['total_processed'] = state.get('total_processed', 0) + len(to_process)
    state['total_replied'] = state.get('total_replied', 0) + replied
    save_state(state)
    
    print(f"📊 Processed: {len(to_process)}, Replied: {replied}, Labeled: {labeled}, Skipped: {to_skip}")
    print(f"📈 Total: {state['total_processed']} processed, {state['total_replied']} replied")

if __name__ == '__main__':
    main()