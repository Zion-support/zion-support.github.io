#!/usr/bin/env python3
"""
Competitor Mention Tracker - Zion

Tracks when competitors are mentioned in emails.
Alerts with competitive intelligence.

Usage:
  python3 competitor_mention_tracker.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, telegram_send

COMPETITORS = [
    'salesforce', 'hubspot', 'zoho', 'pipedrive', 'activecampaign',
    'mailchimp', 'sendgrid', 'twilio', 'stripe', 'paypal',
    'aws', 'azure', 'gcp', 'google cloud', 'microsoft'
]

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🕵️ Competitor Mention Tracker")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    mentions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        text = f"{subject} {snippet}".lower()
        
        for competitor in COMPETITORS:
            if competitor in text:
                mention = {
                    'competitor': competitor,
                    'sender': sender[:30],
                    'subject': subject[:40]
                }
                mentions.append(mention)
                print(f"   🚨 {competitor}: {subject[:30]}")
                
                if not dry_run:
                    telegram_send(f"🕵️ Competitor mention detected: {competitor} in email from {sender[:20]}")
    
    if not mentions:
        print("   No competitor mentions detected")
    
    mentions_file = WORKSPACE / 'zion.app' / 'data' / 'competitor_mentions.json'
    mentions_file.parent.mkdir(parents=True, exist_ok=True)
    mentions_file.write_text(json.dumps(mentions, indent=2))
    
    print(f"✅ Tracked {len(mentions)} competitor mentions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()