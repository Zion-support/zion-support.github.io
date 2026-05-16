#!/usr/bin/env python3
"""
Travel Itinerary Organizer - Zion

Groups travel-related emails into organized threads.
Creates trip summaries and prepares departure checklists.

Usage:
  python3 travel_itinerary_organizer.py --execute --limit 30
"""

import sys, json, re
from collections import defaultdict
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

TRAVEL_KEYWORDS = ['flight', 'hotel', 'reservation', 'booking', 'confirmation', 'itinerary', 
                   'airline', 'airways', 'accommodation', 'check-in', 'boarding', 'passenger']

def extract_travel_details(subject: str, snippet: str) -> dict:
    """Extract travel details from email."""
    text = f"{subject} {snippet}".lower()
    
    details = {'type': 'unknown', 'reference': None, 'date': None, 'destination': None}
    
    # Determine type
    if any(kw in text for kw in ['flight', 'airline', 'boarding', 'airways']):
        details['type'] = 'flight'
    elif any(kw in text for kw in ['hotel', 'accommodation', 'reservation', 'booking']):
        details['type'] = 'hotel'
    
    # Find reference numbers
    ref_patterns = [
        r'confirmation\s*#?\s*:?\s*([a-z0-9]+)',
        r'reservation\s*#?\s*:?\s*([a-z0-9]+)',
        r'booking\s*#?\s*:?\s*([a-z0-9]+)',
        r'pnr\s*:?\s*([a-z0-9]{6})',
    ]
    
    for pattern in ref_patterns:
        match = re.search(pattern, text)
        if match:
            details['reference'] = match.group(1).upper()
            break
    
    # Find dates
    date_match = re.search(r'(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})', text)
    if date_match:
        details['date'] = date_match.group(1)
    
    # Find destination (simple heuristic)
    destinations = ['sao paulo', 'rio', 'miami', 'new york', 'london', 'paris', 'delhi']
    for dest in destinations:
        if dest in text:
            details['destination'] = dest.title()
            break
    
    return details

def cmd_run(dry_run: bool, limit: int = 30):
    print("✈️ Travel Itinerary Organizer")
    
    label_id = gmail_get_or_create_label_id('Trips/Travel')
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    trips = defaultdict(list)
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in TRAVEL_KEYWORDS):
            details = extract_travel_details(subject, snippet)
            
            trip_key = details['destination'] or 'Unnamed Trip'
            trips[trip_key].append({
                'subject': subject[:40],
                'type': details['type'],
                'reference': details['reference'],
                'date': details['date']
            })
            
            if not dry_run:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_id])
    
    print(f"\nOrganized {len(trips)} trips:")
    for trip, items in list(trips.items())[:5]:
        print(f"\n{trip} ({len(items)} items)")
        for item in items[:3]:
            print(f"  {item['type']}: {item['reference'] or 'No ref'}")
    
    print(f"\n✅ Organized travel emails for {len(trips)} trips")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()