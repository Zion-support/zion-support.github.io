#!/usr/bin/env python3
"""
Email Priority Classifier - Zion

Classifies emails by priority using ML-like heuristics.
Ensures urgent emails get immediate attention.

Usage:
  python3 email_priority_classifier.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

URGENT_KEYWORDS = ['urgent', 'asap', 'critical', 'emergency', 'immediate', 'deadline', 'today', 'tomorrow']
IMPORTANT_KEYWORDS = ['important', 'priority', 'review', 'approval', 'decision', 'budget', 'contract']
MEETING_KEYWORDS = ['meeting', 'call', 'sync', 'discuss', 'agenda', 'schedule']

def classify_email(subject: str, snippet: str) -> str:
    """Classify email priority."""
    text = f"{subject} {snippet}".lower()
    
    # Check for urgent
    if any(kw in text for kw in URGENT_KEYWORDS):
        return 'URGENT'
    
    # Check for important
    if any(kw in text for kw in IMPORTANT_KEYWORDS):
        return 'IMPORTANT'
    
    # Check for meeting
    if any(kw in text for kw in MEETING_KEYWORDS):
        return 'MEETING'
    
    # Check for sender importance (executives, clients)
    important_senders = ['ceo', 'president', 'director', 'client', 'customer']
    if any(sender in text for sender in important_senders):
        return 'IMPORTANT'
    
    return 'NORMAL'

def cmd_run(dry_run: bool, limit: int = 30):
    print("⭐ Email Priority Classifier")
    
    # Get labels
    urgent_label = gmail_get_or_create_label_id('Priority/URGENT')
    important_label = gmail_get_or_create_label_id('Priority/IMPORTANT')
    meeting_label = gmail_get_or_create_label_id('Priority/MEETING')
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    classified = {'URGENT': 0, 'IMPORTANT': 0, 'MEETING': 0, 'NORMAL': 0}
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        priority = classify_email(subject, snippet)
        classified[priority] += 1
        
        if priority in ['URGENT', 'IMPORTANT']:
            print(f"  {priority}: {subject[:35]}")
            
            if not dry_run:
                label_id = {'URGENT': urgent_label, 'IMPORTANT': important_label, 'MEETING': meeting_label}.get(priority)
                if label_id:
                    gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_id])
    
    print(f"\nClassification results:")
    for priority, count in classified.items():
        print(f"  {priority}: {count}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()