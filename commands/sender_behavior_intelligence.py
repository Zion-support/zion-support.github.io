#!/usr/bin/env python3
"""
Sender Behavior Intelligence - Zion

Learns sender communication patterns and predicts optimal response approach.
"""

import sys, json
from pathlib import Path
from datetime import datetime
from collections import defaultdict

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

BEHAVIOR_DATA = WORKSPACE / 'zion.app' / 'data' / 'sender_behavior.json'

def load_behavior_data():
    if BEHAVIOR_DATA.exists():
        return json.loads(BEHAVIOR_DATA.read_text())
    return {}

def save_behavior_data(data):
    BEHAVIOR_DATA.parent.mkdir(parents=True, exist_ok=True)
    BEHAVIOR_DATA.write_text(json.dumps(data, indent=2))

def analyze_sender_behavior(sender_email):
    """Analyze historical behavior of a sender."""
    data = load_behavior_data()
    
    if sender_email in data:
        return data[sender_email]
    
    # Analyze recent emails from this sender
    msgs = gmail_search(f'from:{sender_email}', limit=20)
    
    behavior = {
        'email_count': len(msgs),
        'avg_response_time': 'unknown',
        'preferred_reply_length': 'medium',
        'typical_tone': 'neutral',
        'common_topics': []
    }
    
    if msgs:
        # Analyze tone patterns
        tone_counts = defaultdict(int)
        for msg in msgs:
            snippet = msg.get('snippet', '').lower()
            
            if any(w in snippet for w in ['thanks', 'cheers', 'appreciate', 'obrigado']):
                tone_counts['casual'] += 1
            elif any(w in snippet for w in ['dear', 'regards', 'sincerely', 'atenciosamente']):
                tone_counts['formal'] += 1
            else:
                tone_counts['neutral'] += 1
            
            # Extract topics
            topics = ['meeting', 'project', 'invoice', 'support', 'pricing']
            for t in topics:
                if t in snippet:
                    behavior['common_topics'].append(t)
        
        behavior['typical_tone'] = max(tone_counts, key=tone_counts.get) if tone_counts else 'neutral'
        behavior['common_topics'] = list(set(behavior['common_topics']))[-3:]
    
    data[sender_email] = behavior
    save_behavior_data(data)
    
    return behavior

def get_response_strategy(sender_email, intent, urgency):
    """Get optimal response strategy for this sender."""
    behavior = analyze_sender_behavior(sender_email)
    
    strategy = {
        'tone': behavior.get('typical_tone', 'neutral'),
        'length': behavior.get('preferred_reply_length', 'medium'),
        'include_examples': urgency == 'high',
        'quick_reply': behavior.get('email_count', 0) > 5  # Familiar senders get quick replies
    }
    
    return strategy

def cmd_run(dry_run=False, limit=20):
    print("🧠 Sender Behavior Intelligence")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    analyzed = 0
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        if any(s in sender.lower() for s in ['noreply', 'no-reply', 'bot@']):
            continue
        
        sender_email = sender.split('<')[-1].split('>')[0] if '<' in sender else sender
        
        behavior = analyze_sender_behavior(sender_email)
        strategy = get_response_strategy(sender_email, 'general', 'normal')
        
        print(f"📧 {sender[:25]} | Tone: {strategy['tone']} | Topics: {behavior['common_topics']}")
        analyzed += 1
    
    print(f"\n📊 Analyzed {analyzed} senders")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()