#!/usr/bin/env python3
"""
Action Item Intelligence - Zion

ADVANCED TASK EXTRACTION:
- Automatic action item detection from emails
- Deadline tracking and reminders
- Task priority scoring
- Integration with calendar
- Completion tracking
"""

import sys, json
import re
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

ACTION_ITEMS_FILE = WORKSPACE / 'zion.app' / 'data' / 'action_items.json'

def load_action_items():
    if ACTION_ITEMS_FILE.exists():
        return json.loads(ACTION_ITEMS_FILE.read_text())
    return {'items': [], 'completed': []}

def save_action_items(data):
    ACTION_ITEMS_FILE.parent.mkdir(parents=True, exist_ok=True)
    ACTION_ITEMS_FILE.write_text(json.dumps(data, indent=2))

def extract_action_items_from_email(sender, subject, snippet, message_id):
    """Extract action items from an email."""
    items = []
    text = f"{subject} {snippet}".lower()
    
    # Pattern: "I need to..." / "We should..."
    action_patterns = [
        r'(?:i|we|you|they)\s+(need to|should|must|will|have to)\s+([^.!?\n]+)',
        r'todo[:\s]+([^.!?\n]+)',
        r'action[:\s]+([^.!?\n]+)',
        r'deadline[:\s]+([^.!?\n]+)'
    ]
    
    for pattern in action_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        for match in matches:
            if isinstance(match, tuple):
                match = match[0] if match[0] else match[-1]
            items.append({
                'task': match.strip()[:100],
                'sender': sender,
                'email_id': message_id,
                'extracted_at': datetime.utcnow().isoformat(),
                'priority': calculate_priority(match),
                'status': 'pending'
            })
    
    # Extract deadlines
    date_patterns = [
        r'by\s+(monday|tuesday|wednesday|thursday|friday|today|tomorrow)',
        r'due\s+(monday|tuesday|wednesday|thursday|friday|today|tomorrow)',
        r'by\s+(\d{1,2}/\d{1,2})',
        r'in\s+(\d+)\s+(day|hour|week)'
    ]
    
    for pattern in date_patterns:
        match = re.search(pattern, text)
        if match:
            for item in items:
                item['deadline'] = match.group(0)
            break
    
    return items

def calculate_priority(text):
    """Calculate priority based on keywords."""
    text_lower = text.lower()
    
    if any(w in text_lower for w in ['urgent', 'asap', 'critical', 'immediately']):
        return 'high'
    elif any(w in text_lower for w in ['soon', 'this week', 'deadline']):
        return 'medium'
    return 'low'

def cmd_run(dry_run=False, limit=20):
    print("📋 Action Item Intelligence")
    
    data = load_action_items()
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    new_items = 0
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Extract items
        items = extract_action_items_from_email(sender, subject, snippet, msg['id'])
        
        for item in items:
            # Check if already exists
            existing = [i for i in data['items'] if i['task'] == item['task'] and i['status'] == 'pending']
            if not existing:
                data['items'].append(item)
                new_items += 1
                print(f"📌 {item['task'][:40]} | Priority: {item['priority']}")
    
    save_action_items(data)
    print(f"\n📊 Found {new_items} new action items")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute)

if __name__ == '__main__':
    main()