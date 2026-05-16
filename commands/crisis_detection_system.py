#!/usr/bin/env python3
"""
Crisis Detection System - Zion

Detects urgent issues requiring immediate attention.
Flags emails with crisis indicators for priority handling.

Usage:
  python3 crisis_detection_system.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify, telegram_send

CRISIS_INDICATORS = [
    ('critical', 10), ('emergency', 10), ('urgent', 8), ('down', 7),
    ('broken', 7), ('not working', 6), ('failure', 6), ('crash', 6),
    ('data loss', 10), ('security', 9), ('breach', 10), ('hack', 9),
    ('server', 5), ('outage', 8), ('error', 4), ('fail', 5)
]

def detect_crisis(subject: str, snippet: str) -> dict:
    """Detect crisis level in email"""
    text = f"{subject} {snippet}".lower()
    
    score = 0
    detected = []
    
    for keyword, weight in CRISIS_INDICATORS:
        if keyword in text:
            score += weight
            detected.append(keyword)
    
    if score >= 15:
        level = 'CRITICAL'
    elif score >= 8:
        level = 'HIGH'
    elif score >= 4:
        level = 'MEDIUM'
    else:
        level = 'NONE'
    
    return {
        'level': level,
        'score': score,
        'indicators': detected[:5]
    }

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🚨 Crisis Detection System")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    crisis_label = gmail_get_or_create_label_id('Crisis-Detected')
    
    crises = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        result = detect_crisis(subject, snippet)
        
        if result['level'] != 'NONE':
            crises.append(result)
            
            emoji = '🔴' if result['level'] == 'CRITICAL' else '🟠' if result['level'] == 'HIGH' else '🟡'
            print(f"   {emoji} {result['level']} ({result['score']}): {subject[:25]}")
            
            if not dry_run and result['level'] in ['CRITICAL', 'HIGH']:
                gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[crisis_label])
                telegram_send(f"🚨 {result['level']} crisis detected: {subject[:30]}")
    
    print(f"✅ Detected {len(crises)} potential crises")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()