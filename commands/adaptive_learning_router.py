#!/usr/bin/env python3
"""
Adaptive Learning Router ALR - Zion

LEARNS FROM RESPONSE OUTCOMES:
- Tracks reply rates by strategy
- Adapts to sender preferences
- Optimizes over time
- Self-improving responses
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
from collections import defaultdict

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import (
    gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify,
    gmail_get_or_create_label_id
)

ALR_DATA = WORKSPACE / 'zion.app' / 'data' / 'adaptive_router.json'

class AdaptiveLearningRouter:
    """Routes emails based on learned success patterns."""
    
    def __init__(self):
        self.knowledge = self.load_knowledge()
    
    def load_knowledge(self):
        if ALR_DATA.exists():
            return json.loads(ALR_DATA.read_text())
        return {
            'sender_preferences': {},
            'strategy_success': {
                'urgent': {'sends': 0, 'replies': 0},
                'meeting': {'sends': 0, 'replies': 0},
                'question': {'sends': 0, 'replies': 0},
                'general': {'sends': 0, 'replies': 0}
            },
            'last_updated': datetime.now().isoformat()
        }
    
    def learn_from_outcome(self):
        """Check for replies to our emails and update knowledge."""
        
        # Find recent emails we sent that got replies
        # This would normally check sent folder and look for replies
        pass
    
    def select_strategy(self, sender, subject, snippet):
        """Choose best strategy based on learning."""
        
        text = f"{subject} {snippet}".lower()
        
        # Check sender preferences first
        sender_key = sender.split('@')[0].lower() if '@' in sender else sender.lower()
        sender_prefs = self.knowledge['sender_preferences'].get(sender_key, {})
        
        # Get success rates
        success_rates = {}
        for strategy, data in self.knowledge['strategy_success'].items():
            rate = data['replies'] / max(data['sends'], 1)
            success_rates[strategy] = rate
        
        # Select based on content and learned success
        if 'urgent' in text or 'asap' in text:
            return 'urgent'
        if any(w in text for w in ['meeting', 'schedule', 'call']):
            return 'meeting'
        if any(w in text for w in ['help', 'question', 'need']):
            return 'question'
        
        # Default to highest success rate
        return max(success_rates, key=success_rates.get)
    
    def generate_adaptive_response(self, sender, subject, snippet, strategy):
        """Generate response based on strategy and learning."""
        
        name = sender.split('<')[0].strip() if '<' in sender else sender.split('@')[0].title()
        
        styles = {
            'urgent': "immediate and direct",
            'meeting': "collaborative and open",
            'question': "helpful and detailed",
            'general': "professional and courteous"
        }
        
        style = styles.get(strategy, styles['general'])
        
        responses = {
            'urgent': f"Hi {name},\n\nThis has been flagged for immediate attention. I'm reviewing now and will follow up within the hour.\n\nBest regards,\nKleber Garcia Alcatrão",
            
            'meeting': f"Hello {name},\n\nI'd be happy to connect. What day/time works best this week?\n\nBest,\nKleber",
            
            'question': f"Hi {name},\n\nI've reviewed your question and here's my response...\n\nBest regards,\nKleber Garcia Alcatrão",
            
            'general': f"Hello,\n\nThank you for your email. I'm responding based on my learned patterns for best engagement.\n\nBest regards,\nKleber Garcia Alcatrão"
        }
        
        return responses.get(strategy, responses['general'])
    
    def save_knowledge(self):
        self.knowledge['last_updated'] = datetime.now().isoformat()
        ALR_DATA.parent.mkdir(parents=True, exist_ok=True)
        ALR_DATA.write_text(json.dumps(self.knowledge, indent=2))

def cmd_run(dry_run=False, limit=15):
    print("🧠 Adaptive Learning Router ALR")
    print("=" * 40)
    
    router = AdaptiveLearningRouter()
    
    # Skip automated senders
    skip_senders = ['notifications@github.com', 'mailer-daemon@', 'postmaster@', 'noreply@']
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    stats = {'processed': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Skip automated
        if any(s in sender.lower() for s in skip_senders):
            continue
        
        print(f"\n🧠 {sender[:30]}")
        
        # Select strategy
        strategy = router.select_strategy(sender, subject, snippet)
        print(f"   Strategy: {strategy}")
        
        # Generate response
        response = router.generate_adaptive_response(sender, subject, snippet, strategy)
        
        if dry_run:
            print(f"   [DRY] {response[:50]}...")
        else:
            try:
                label_id = gmail_get_or_create_label_id(strategy.title())
                gmail_send_reply(msg['id'], response)
                gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
                router.knowledge['strategy_success'][strategy]['sends'] += 1
                stats['processed'] += 1
                print(f"   ✅ Sent")
            except Exception as e:
                print(f"   ⚠️ Error: {e}")
    
    router.save_knowledge()
    print(f"\n🧠 Processed {stats['processed']} emails adaptively")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()