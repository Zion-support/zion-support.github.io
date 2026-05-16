#!/usr/bin/env python3
"""Timezone-Based Priority Escalator - Prioritizes emails based on sender timezone for optimal response timing."""

import sys
import json
import subprocess
from datetime import datetime, timezone
import re

def run_cmd(cmd):
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=30)
        return result.stdout.strip()
    except Exception:
        return ""

def detect_timezone(email_body):
    """Detect timezone hints from email signature or greeting."""
    tz_indicators = {
        'EST': -5, 'EDT': -4, 'CST': -6, 'CDT': -5,
        'MST': -7, 'MDT': -6, 'PST': -8, 'PDT': -7,
        'UTC': 0, 'GMT': 0
    }
    
    # Check for timezone in body
    for tz, offset in tz_indicators.items():
        if tz in email_body.upper():
            return offset
    
    # Check for location hints
    locations = {
        'são paulo': -3, 'brazil': -3, 'delaware': -4, 'new york': -5,
        'california': -8, 'texas': -6, 'florida': -5
    }
    body_lower = email_body.lower()
    for loc, offset in locations.items():
        if loc in body_lower:
            return offset
    
    return None

def calculate_priority(sender, subject, body, tz_offset):
    """Calculate priority based on timezone alignment with São Paulo."""
    sp_offset = -3  # São Paulo timezone
    
    if tz_offset is None:
        # Unknown timezone - check domain for clues
        domain = sender.split('@')[-1] if '@' in sender else ''
        if any(br in domain for br in ['.com.br', 'ziontechgroup.com']):
            tz_offset = -3
        else:
            tz_offset = 0  # Default UTC
    
    # Calculate overlap with business hours (9-17 São Paulo)
    sp_business_start = 9 + sp_offset
    sp_business_end = 17 + sp_offset
    
    sender_hour = datetime.now().hour + tz_offset
    overlap_score = 0
    if sp_business_start <= sender_hour <= sp_business_end:
        overlap_score = 100
    elif sp_business_start - 1 <= sender_hour <= sp_business_end + 1:
        overlap_score = 50
    
    # Priority keywords
    high_priority = ['urgent', 'asap', 'critical', 'emergency', 'immediately', 'now']
    medium_priority = ['soon', 'today', 'important', 'deadline']
    
    subject_lower = subject.lower()
    body_lower = body.lower()
    
    priority_score = overlap_score
    if any(kw in subject_lower or kw in body_lower for kw in high_priority):
        priority_score += 50
    elif any(kw in subject_lower or kw in body_lower for kw in medium_priority):
        priority_score += 25
    
    return min(priority_score, 100)

def main():
    if '--execute' not in sys.argv:
        print("Dry run - no actions taken")
        return
    
    limit = int(run_cmd('echo "$@" | grep -oP "\\b--limit\\s+\\K[0-9]+" || echo "20"').split('\n')[0] or '20')
    
    # Get emails needing priority assessment
    emails_json = run_cmd('gog gmail search "in:inbox is:unread newer_than:3d" --limit 30 --json 2>/dev/null || echo "[]"')
    
    try:
        emails = json.loads(emails_json) if emails_json else []
    except Exception:
        emails = []
    
    prioritized = []
    for email in emails[:limit]:
        sender = email.get('from', '').strip()
        subject = email.get('subject', '')
        body = email.get('snippet', '')
        received = email.get('internalDate', '')
        
        tz_offset = detect_timezone(body)
        priority = calculate_priority(sender, subject, body, tz_offset)
        
        if priority >= 50:  # High priority threshold
            prioritized.append({
                'sender': sender,
                'subject': subject,
                'priority': priority,
                'tz_offset': tz_offset,
                'timestamp': received
            })
    
    # Sort by priority
    prioritized.sort(key=lambda x: x['priority'], reverse=True)
    
    # Apply priority labels or escalate
    for item in prioritized[:limit]:
        sender_email = item['sender'].split('<')[-1].replace('>', '') if '<' in item['sender'] else item['sender']
        run_cmd(f'gog gmail modify "{item["sender"]}" --add-label "P{str(item["priority"]//10)}" 2>/dev/null')
    
    print(f"Emails prioritized: {len(prioritized)}")

if __name__ == '__main__':
    main()