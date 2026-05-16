#!/usr/bin/env python3
"""Smart Follow-up Sequencer - Creates intelligent multi-step follow-up sequences based on relationship strength and urgency."""

import sys
import json
import subprocess
from datetime import datetime, timedelta

def run_cmd(cmd):
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=30)
        return result.stdout.strip()
    except Exception:
        return ""

def classify_contact(sender_email):
    """Classify contact based on relationship history and domain."""
    domain = sender_email.split('@')[-1] if '@' in sender_email else ''
    
    # VIP domains get immediate/fast follow-up
    vip_domains = ['ziontechgroup.com', 'zionholdings.com']
    client_domains = ['outmarketing.com.br', 'client', 'corp', 'enterprise']
    
    if domain in vip_domains:
        return 'vip'
    elif any(cl in domain for cl in client_domains):
        return 'client'
    else:
        return 'standard'

def get_sequence(contact_type):
    """Return follow-up sequence timing based on contact type."""
    sequences = {
        'vip': [
            {'wait_hours': 1, 'urgency': 'high'},
            {'wait_hours': 4, 'urgency': 'medium'},
            {'wait_hours': 12, 'urgency': 'high'}
        ],
        'client': [
            {'wait_hours': 2, 'urgency': 'medium'},
            {'wait_hours': 8, 'urgency': 'medium'},
            {'wait_hours': 24, 'urgency': 'high'}
        ],
        'standard': [
            {'wait_hours': 6, 'urgency': 'low'},
            {'wait_hours': 24, 'urgency': 'medium'},
            {'wait_hours': 72, 'urgency': 'high'}
        ]
    }
    return sequences.get(contact_type, sequences['standard'])

def main():
    if '--execute' not in sys.argv:
        print("Dry run - no sequences created")
        return
    
    limit = int(run_cmd('echo "$@" | grep -oP "\\b--limit\\s+\\K[0-9]+" || echo "20"').split('\n')[0] or '20')
    
    # Get emails needing follow-ups
    emails_json = run_cmd('gog gmail search "in:inbox is:unread newer_than:14d -from:github.com -from:noreply" --limit 30 --json 2>/dev/null || echo "[]"')
    
    try:
        emails = json.loads(emails_json) if emails_json else []
    except Exception:
        emails = []
    
    sequences_created = 0
    for email in emails[:limit]:
        sender = email.get('from', '').strip()
        subject = email.get('subject', '')
        received = email.get('internalDate', '')
        
        contact_type = classify_contact(sender)
        sequence = get_sequence(contact_type)
        
        # Create follow-up events in calendar or send delayed responses
        for i, step in enumerate(sequence):
            delay_hours = step['wait_hours']
            urgency = step['urgency']
            
            # Log the planned follow-up
            followup_info = {
                'sender': sender,
                'subject': subject,
                'step': i + 1,
                'delay_hours': delay_hours,
                'urgency': urgency,
                'contact_type': contact_type,
                'scheduled_at': (datetime.utcnow() + timedelta(hours=delay_hours)).isoformat()
            }
            
            # Write to follow-up queue
            run_cmd(f'echo \'{json.dumps(followup_info)}\' >> /root/.openclaw/workspace/followup_queue.jsonl 2>/dev/null')
            sequences_created += 1
    
    print(f"Follow-up sequences planned: {sequences_created}")

if __name__ == '__main__':
    main()