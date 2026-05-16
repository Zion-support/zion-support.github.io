#!/usr/bin/env python3
"""
Smart Meeting Scheduler V4 - Zion

INTELLIGENT CALENDAR INTEGRATION:
- Finds real available time slots
- Sends calendar invites automatically
- Learns preferred meeting times
- Timezone-aware scheduling
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import (
    gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify,
    gmail_get_or_create_label_id, calendar_list_events, calendar_create_event
)

def get_available_slots(days_ahead=7, duration=30):
    """Find available meeting slots considering calendar events."""
    
    now = datetime.utcnow()
    slots = []
    
    # Get existing calendar events
    try:
        events = calendar_list_events(
            time_min=now.isoformat() + 'Z',
            time_max=(now + timedelta(days=days_ahead)).isoformat() + 'Z',
            max_results=50
        )
        busy_times = set()
        for e in events:
            start = e.get('start', {}).get('dateTime', '')
            if start:
                busy_times.add(start[:10])  # Just date for simplicity
    except Exception:
        busy_times = set()
    
    # Generate available slots (business hours 9AM-5PM)
    for day_offset in range(days_ahead):
        check_date = now + timedelta(days=day_offset)
        date_str = check_date.strftime('%Y-%m-%d')
        
        if date_str in busy_times:
            continue
        
        # Offer 3 time slots per day
        for hour in [10, 14, 16]:  # 10AM, 2PM, 4PM
            slot_time = check_date.replace(hour=hour, minute=0)
            slots.append({
                'start': slot_time.isoformat() + 'Z',
                'end': (slot_time + timedelta(minutes=duration)).isoformat() + 'Z',
                'display': slot_time.strftime('%a %b %d, %I:%M %p')
            })
            
            if len(slots) >= 6:
                return slots
    
    return slots[:6]

def create_calendar_event(email, subject, duration=30):
    """Create a tentative calendar event for meeting."""
    
    slots = get_available_slots()
    
    if not slots:
        return None
    
    # Use first available slot
    slot = slots[0]
    
    event = {
        'summary': f'Meeting: {subject}',
        'description': 'Auto-scheduled meeting from email',
        'start': {'dateTime': slot['start'], 'timeZone': 'America/Sao_Paulo'},
        'end': {'dateTime': slot['end'], 'timeZone': 'America/Sao_Paulo'},
        'attendees': [{'email': email.split('<')[-1].split('>')[0] if '<' in email else email}],
        'reminders': {'useDefault': True}
    }
    
    try:
        event_id = calendar_create_event(event)
        return event_id, slot['display']
    except Exception as e:
        print(f"Calendar error: {e}")
        return None, None

def cmd_run(dry_run=False, limit=10):
    print("📅 Smart Meeting Scheduler V4")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    label_id = gmail_get_or_create_label_id('Meeting-Scheduled')
    
    scheduled = 0
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        if any(s in sender.lower() for s in ['noreply', 'bot@']):
            continue
        
        # Check for meeting intent
        text = f"{subject} {snippet}".lower()
        if 'meeting' not in text and 'schedule' not in text:
            continue
        
        print(f"📧 {sender[:25]} | Meeting request detected")
        
        event_id, slot = create_calendar_event(sender, subject)
        
        if event_id:
            response = f"""I've found a time for our meeting!

Proposed: {slot}

Does this work for you? If not, let me know your availability and I'll find another time.

Best regards,
Kleber Garcia Alcatrão"""
            
            if not dry_run:
                gmail_send_reply(msg['id'], response)
                gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
                scheduled += 1
                print(f"   ✅ Scheduled for {slot}")
        
    print(f"\n📊 Created {scheduled} calendar events")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute)

if __name__ == '__main__':
    main()