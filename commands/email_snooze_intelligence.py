#!/usr/bin/env python3
"""
Email Snooze Intelligence - Zion

Intelligently snoozes non-urgent emails.
Brings them back at optimal times for attention.

Usage:
  python3 email_snooze_intelligence.py --execute --limit 30
"""

import sys, json
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SNOOZE_PATTERNS = {
    'newsletter': ('newsletter', 'tomorrow'),
    'promotional': ('sale', 'promo', 'discount', 'deal'),
    'social': ('linkedin', 'twitter', 'facebook', 'social'),
    'notification': ('noreply', 'notification', 'alert', 'digest'),
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("😴 Email Snooze Intelligence")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    snoozed = 0
    snooze_plan = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '').lower()
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '').lower()
        
        text = f"{subject} {snippet} {from_hdr}"
        
        # Determine snooze time
        when = None
        why = None
        
        # Newsletter - tomorrow
        if any(kw in text for kw in ['newsletter', 'unsubscribe']):
            when = 'tomorrow morning'
            why = 'newsletter'
        # Social - end of day
        elif any(kw in text for kw in ['linkedin', 'twitter', 'facebook']):
            when = 'tomorrow afternoon'
            why = 'social'
        # Notification - 2 hours
        elif any(kw in text for kw in ['noreply', 'notification', 'alert']):
            when = '2 hours'
            why = 'notification'
        # Promotional - later
        elif any(kw in text for kw in ['sale', 'discount', 'deal', 'offer']):
            when = 'this evening'
            why = 'promotional'
        
        if when:
            snoozed += 1
            snooze_plan.append({
                'subject': subject[:35],
                'snooze_when': when,
                'reason': why
            })
    
    print(f"Identified {snoozed} emails for snoozing")
    
    for item in snooze_plan[:5]:
        print(f"  {item['when']}: {item['subject'][:30]}")
    
    # Save snooze plan
    snooze_file = WORKSPACE / 'zion.app' / 'data' / 'snooze_plan.json'
    snooze_file.parent.mkdir(parents=True, exist_ok=True)
    snooze_file.write_text(json.dumps(snooze_plan, indent=2))
    
    print(f"\n✅ Saved snooze intelligence plan")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()