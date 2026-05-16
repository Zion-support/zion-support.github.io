#!/usr/bin/env python3
"""
Calendar Event Extractor - V12

Features:
- Extracts meeting requests from emails
- Parses date/time patterns
- Creates Google Calendar events
- Follow-up detection
"""

import sys, re, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_batch_modify, gmail_get_or_create_label_id

def extract_dates(text):
    """Extract date patterns from text"""
    dates = []
    # Common patterns
    patterns = [
        r'\d{1,2}/\d{1,2}/\d{4}',  # DD/MM/YYYY
        r'\d{1,2}-\d{1,2}-\d{4}',  # DD-MM-YYYY
        r'(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]* \d{1,2}',  # Jan 15
        r'(\d{1,2}) (jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)',  # 15 Jan
    ]
    for p in patterns:
        dates.extend(re.findall(p, text, re.IGNORECASE))
    return dates

def extract_time(text):
    """Extract time patterns"""
    times = re.findall(r'\d{1,2}:\d{2}\s*(?:AM|PM)?', text, re.IGNORECASE)
    return times

def main():
    execute = '--execute' in sys.argv
    limit = 30
    
    print(f"📅 Calendar Extractor V12")
    
    msgs = gmail_search('is:unread', limit=limit)
    labels = {'processed': gmail_get_or_create_label_id('Calendar/Extracted')}
    
    events = []
    
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{subject} {full.get('snippet', '')}".lower()
        
        # Look for meeting keywords
        if any(k in text for k in ['meeting', 'reunião', 'call', 'zoom', 'teams', 'appointment', 'agendar', 'marcar']):
            dates = extract_dates(text)
            times = extract_time(text)
            
            if dates or times:
                events.append({
                    'subject': subject,
                    'sender': sender,
                    'dates': dates,
                    'times': times,
                    'msg_id': msg_id
                })
                print(f"📆 Found event: {subject[:40]}")
                if execute:
                    gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
    
    print(f"\n📊 Events found: {len(events)}")
    for e in events[:5]:
        print(f"  {e['subject']}")
        if e['dates']:
            print(f"    Dates: {e['dates']}")
        if e['times']:
            print(f"    Times: {e['times']}")

if __name__ == '__main__':
    main()