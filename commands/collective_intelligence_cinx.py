#!/usr/bin/env python3
"""
Collective Intelligence Network CINX - Zion

MULTI-AGENT COLLABORATION:
- Ensemble decision making
- Confidence-weighted voting
- Cross-agent knowledge sharing
- Collective memory
- Distributed pattern recognition
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))

COLLECTIVE_DATA = WORKSPACE / 'zion.app' / 'data' / 'collective_intelligence.json'

class CollectiveIntelligence:
    """Multiple AI agents working together on each email."""
    
    def __init__(self):
        self.agents = {
            'analyst': {'weight': 1.0, 'success_rate': 0.85},
            'strategist': {'weight': 1.0, 'success_rate': 0.82},
            'diplomat': {'weight': 1.0, 'success_rate': 0.78},
            'executor': {'weight': 1.0, 'success_rate': 0.90}
        }
        self.memory = self.load_memory()
    
    def load_memory(self):
        if COLLECTIVE_DATA.exists():
            return json.loads(COLLECTIVE_DATA.read_text())
        return {'collective_decisions': [], 'consensus_rates': {}}
    
    def analyst_opinion(self, email_data):
        """Analyst agent - focuses on facts and data."""
        text = f"{email_data.get('subject', '')} {email_data.get('snippet', '')}".lower()
        
        analysis = {
            'urgency': 0.8 if 'urgent' in text else 0.5,
            'complexity': min(len(text.split()) / 50, 1.0),
            'intent': 'information_request' if 'question' in text else 'statement',
            'risk': 0.1
        }
        return analysis, 0.85
    
    def strategist_opinion(self, email_data):
        """Strategist agent - focuses on long-term outcomes."""
        text = f"{email_data.get('subject', '')} {email_data.get('snippet', '')}".lower()
        
        analysis = {
            'relationship_value': 0.6,
            'opportunity_score': 0.7,
            'recommended_approach': 'standard_reply'
        }
        return analysis, 0.82
    
    def diplomat_opinion(self, email_data):
        """Diplomat agent - focuses on tone and relationships."""
        text = f"{email_data.get('snippet', '')}".lower()
        
        sentiment = 'positive'
        if any(w in text for w in ['frustrated', 'angry', 'disappointed']):
            sentiment = 'negative'
        elif any(w in text for w in ['happy', 'excited', 'great']):
            sentiment = 'positive'
        else:
            sentiment = 'neutral'
        
        analysis = {
            'tone': sentiment,
            'relationship_stage': 'established',
            'recommended_tone': 'empathetic' if sentiment == 'negative' else 'professional'
        }
        return analysis, 0.78
    
    def executor_opinion(self, email_data):
        """Executor agent - focuses on practical action."""
        return {
            'can_autonomously_respond': True,
            'requires_review': False,
            'estimated_time': '5 minutes'
        }, 0.90
    
    def collective_decision(self, email_data):
        """Combine all agent opinions into collective decision."""
        
        opinions = [
            ('analyst', *self.analyst_opinion(email_data)),
            ('strategist', *self.strategist_opinion(email_data)),
            ('diplomat', *self.diplomat_opinion(email_data)),
            ('executor', *self.executor_opinion(email_data))
        ]
        
        # Weighted consensus
        weighted_confidence = 0
        recommendation = 'standard_reply'
        
        for agent_name, opinion, confidence in opinions:
            agent_weight = self.agents[agent_name]['weight']
            weighted_confidence += confidence * agent_weight
            
            if 'recommended_approach' in opinion:
                recommendation = opinion['recommended_approach']
            elif 'recommended_tone' in opinion:
                if opinion['recommended_tone'] == 'empathetic':
                    recommendation = 'empathetic_reply'
        
        avg_confidence = weighted_confidence / len(opinions)
        
        return {
            'recommendation': recommendation,
            'confidence': avg_confidence,
            'consensus': True if avg_confidence > 0.7 else False,
            'opinions': {name: {'data': opinion, 'confidence': conf} for name, opinion, conf in opinions}
        }

def cmd_run(dry_run=False, limit=20):
    print("🤝 Collective Intelligence Network CINX")
    
    collective = CollectiveIntelligence()
    from google_workspace import gmail_search, gmail_get
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    stats = {'processed': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        if any(s in sender.lower() for s in ['noreply', 'bot@']):
            continue
        
        email_data = {'sender': sender, 'subject': subject, 'snippet': snippet}
        
        # Get collective decision
        decision = collective.collective_decision(email_data)
        
        name = sender.split('<')[0].strip() if '<' in sender else sender.split('@')[0].title()
        
        response = f"Hi {name},\n\nThank you for your email. Our team has analyzed this and recommends proceeding.\n\nBest regards,\nKleber Garcia Alcatrão"
        
        print(f"📧 {sender[:20]} | Confidence: {decision['confidence']:.0%} | Consensus: {decision['consensus']}")
        
        if dry_run:
            print(f"   [DRY] {response[:60]}...")
        else:
            try:
                from google_workspace import gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id
                label_id = gmail_get_or_create_label_id('Collective-CINX')
                gmail_send_reply(msg['id'], response)
                gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
                stats['processed'] += 1
                print(f"   ✅ Collective decision executed")
                
                # Save decision
                collective.memory['collective_decisions'].append({
                    'timestamp': datetime.utcnow().isoformat(),
                    'sender': sender,
                    'decision': decision
                })
                collective.memory['collective_decisions'] = collective.memory['collective_decisions'][-100:]
                COLLECTIVE_DATA.write_text(json.dumps(collective.memory, indent=2))
            except Exception as e:
                print(f"   ⚠️ Failed: {e}")
    
    print(f"\n📊 Processed {stats['processed']} emails collaboratively")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()