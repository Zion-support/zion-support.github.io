#!/usr/bin/env python3
"""
V1102 - Email CRM Sync Engine
Auto-updates CRM records from email content, tracks deal stages, revenue signals.
Bi-directional sync between email conversations and CRM data.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict

class CRMSyncEngine:
    def __init__(self):
        self.crm_records = defaultdict(lambda: {
            'contact': {},
            'company': {},
            'deals': [],
            'activities': [],
            'tags': [],
            'revenue_signals': [],
            'stage': 'lead'
        })
        self.deal_stages = ['lead', 'qualified', 'proposal', 'negotiation', 'closed_won', 'closed_lost']
        
    def extract_crm_data(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Extract CRM-relevant data from email"""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        combined = subject + ' ' + body
        
        return {
            'deal_signals': self.detect_deal_signals(combined),
            'revenue_mentions': self.extract_revenue_mentions(combined),
            'timeline_mentions': self.extract_timeline(combined),
            'decision_makers': self.extract_decision_makers(combined),
            'pain_points': self.extract_pain_points(body),
            'commitments': self.extract_commitments(body),
            'contact_info': self.extract_contact_updates(body)
        }
    
    def detect_deal_signals(self, text: str) -> List[Dict[str, Any]]:
        """Detect signals that indicate deal progression"""
        text_lower = text.lower()
        signals = []
        
        signal_patterns = {
            'budget_confirmed': ['budget approved', 'budget confirmed', 'funding secured', 'allocated budget'],
            'decision_pending': ['need approval', 'waiting for decision', 'board meeting', 'final decision'],
            'timeline_pressure': ['deadline', 'urgent', 'asap', 'by end of', 'need by'],
            'competitor_mention': ['competing offer', 'other vendor', 'alternative solution', 'comparing'],
            'champion_identified': ['i recommend', 'i believe', 'my suggestion', 'we should go with'],
            'objection': ['too expensive', 'not sure', 'concerns about', 'hesitant'],
            'buying_signal': ['ready to proceed', 'let\'s move forward', 'sign the contract', 'send the agreement']
        }
        
        for signal_type, patterns in signal_patterns.items():
            for pattern in patterns:
                if pattern in text_lower:
                    signals.append({
                        'type': signal_type,
                        'pattern': pattern,
                        'strength': 'high' if signal_type in ['buying_signal', 'budget_confirmed'] else 'medium'
                    })
        
        return signals
    
    def get_context_around_match(self, text: str, match: str) -> str:
        """Get context around a regex match"""
        idx = text.find(match)
        if idx == -1:
            return match
        start = max(0, idx - 30)
        end = min(len(text), idx + len(match) + 30)
        return text[start:end].strip()
    
    def extract_revenue_mentions(self, text: str) -> List[Dict[str, Any]]:
        """Extract revenue and pricing mentions"""
        revenue_data = []
        
        # Currency patterns
        currency_patterns = [
            r'\$\s*([\d,]+(?:\.\d{2})?)',
            r'([\d,]+(?:\.\d{2})?)\s*(?:USD|dollars?)',
            r'(?:budget|price|cost|quote|proposal)[:\s]+\$?\s*([\d,]+)'
        ]
        
        for pattern in currency_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                try:
                    amount = float(match.replace(',', ''))
                    revenue_data.append({
                        'amount': amount,
                        'context': self.get_context_around_match(text, match),
                        'type': 'revenue_mention'
                    })
                except ValueError:
                    pass
        
        return revenue_data
    
    def extract_timeline(self, text: str) -> List[str]:
        """Extract timeline and deadline mentions"""
        timelines = []
        patterns = [
            r'(?:by|before|deadline)[:\s]+(.+?)(?:\.|$)',
            r'(?:Q[1-4]\s*\d{4})',
            r'(?:next\s+(?:week|month|quarter))',
            r'(?:\d+\s+(?:days?|weeks?|months?)\s+from\s+now)'
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            timelines.extend(matches)
        
        return timelines[:5]
    
    def extract_decision_makers(self, text: str) -> List[str]:
        """Extract mentions of decision makers"""
        dm_patterns = [
            r'(?:CEO|CTO|CFO|VP|Director|Manager)\s+(?:of\s+)?[\w\s]+',
            r'(?:decision\s+maker|stakeholder|approver)',
            r'(?:board|executive\s+team|leadership)'
        ]
        
        found = []
        for pattern in dm_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            found.extend(matches)
        
        return list(set(found))[:5]
    
    def extract_pain_points(self, text: str) -> List[str]:
        """Extract customer pain points"""
        pain_patterns = [
            r'(?:struggling with|challenge with|problem with|issue with)\s+(.+?)(?:\.|$)',
            r'(?:need help with|difficulty with)\s+(.+?)(?:\.|$)',
            r'(?:frustrated by|concerned about)\s+(.+?)(?:\.|$)'
        ]
        
        pains = []
        for pattern in pain_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            pains.extend(matches)
        
        return pains[:5]
    
    def extract_commitments(self, text: str) -> List[str]:
        """Extract commitments and promises"""
        commitment_patterns = [
            r'(?:we will|we\'ll|i will|i\'ll)\s+(.+?)(?:\.|$)',
            r'(?:promise|guarantee|commit to)\s+(.+?)(?:\.|$)',
            r'(?:agreed to|committed to)\s+(.+?)(?:\.|$)'
        ]
        
        commitments = []
        for pattern in commitment_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            commitments.extend(matches)
        
        return commitments[:5]
    
    def extract_contact_updates(self, text: str) -> Dict[str, str]:
        """Extract updated contact information"""
        updates = {}
        
        # Phone
        phone_match = re.search(r'(?:phone|tel|mobile|cell)[:\s]*([\d\s\-\+\(\)]+)', text, re.IGNORECASE)
        if phone_match:
            updates['phone'] = phone_match.group(1).strip()
        
        # Email
        email_match = re.search(r'(?:email|e-mail)[:\s]*([\w\.\-\+]+@[\w\.\-]+)', text, re.IGNORECASE)
        if email_match:
            updates['email'] = email_match.group(1).strip()
        
        # Address
        addr_match = re.search(r'(?:address|location|office)[:\s]*(.+?)(?:\.|$)', text, re.IGNORECASE)
        if addr_match:
            updates['address'] = addr_match.group(1).strip()
        
        return updates
    
    def update_crm_record(self, sender: str, extracted_data: Dict[str, Any], 
                          email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Update CRM record with extracted data"""
        record = self.crm_records[sender]
        
        # Add activity
        activity = {
            'type': 'email',
            'timestamp': email_data.get('timestamp', datetime.now()),
            'subject': email_data.get('subject', ''),
            'direction': 'inbound',
            'participants': email_data.get('to', []),
            'deal_signals': len(extracted_data['deal_signals']),
            'revenue_mentions': len(extracted_data['revenue_mentions'])
        }
        record['activities'].append(activity)
        
        # Update deal stage based on signals
        if extracted_data['deal_signals']:
            new_stage = self.calculate_deal_stage(extracted_data['deal_signals'], record['stage'])
            if new_stage != record['stage']:
                record['stage'] = new_stage
        
        # Track revenue signals
        if extracted_data['revenue_mentions']:
            record['revenue_signals'].extend(extracted_data['revenue_mentions'])
        
        # Update contact info
        if extracted_data['contact_info']:
            record['contact'].update(extracted_data['contact_info'])
        
        # Add tags
        new_tags = self.generate_tags(extracted_data)
        record['tags'] = list(set(record['tags'] + new_tags))
        
        return record
    
    def calculate_deal_stage(self, signals: List[Dict], current_stage: str) -> str:
        """Calculate deal stage from signals"""
        signal_types = [s['type'] for s in signals]
        
        if 'buying_signal' in signal_types or 'budget_confirmed' in signal_types:
            if current_stage in ['negotiation', 'proposal']:
                return 'closed_won'
            return 'negotiation'
        elif 'decision_pending' in signal_types:
            return 'proposal'
        elif 'timeline_pressure' in signal_types:
            return 'qualified'
        elif 'objection' in signal_types:
            return current_stage  # Don't regress
        
        return current_stage
    
    def generate_tags(self, extracted_data: Dict[str, Any]) -> List[str]:
        """Generate tags from extracted data"""
        tags = []
        
        if extracted_data['deal_signals']:
            tags.append('hot_lead')
        if extracted_data['revenue_mentions']:
            tags.append('revenue_discussed')
        if extracted_data['pain_points']:
            tags.append('pain_identified')
        if extracted_data['decision_makers']:
            tags.append('dm_involved')
        if extracted_data['timeline_mentions']:
            tags.append('timeline_set')
        
        return tags
    
    def get_deal_summary(self, sender: str) -> Dict[str, Any]:
        """Get deal summary for a contact"""
        record = self.crm_records[sender]
        
        if not record['activities']:
            return {'error': 'No CRM data available'}
        
        total_revenue = sum(r['amount'] for r in record['revenue_signals'])
        
        return {
            'contact': sender,
            'stage': record['stage'],
            'total_activities': len(record['activities']),
            'total_revenue_mentions': total_revenue,
            'tags': record['tags'],
            'last_activity': record['activities'][-1]['timestamp'] if record['activities'] else None,
            'deal_signals_count': sum(a['deal_signals'] for a in record['activities']),
            'next_action': self.suggest_next_action(record)
        }
    
    def suggest_next_action(self, record: Dict) -> str:
        """Suggest next action based on CRM data"""
        stage = record['stage']
        last_activity = record['activities'][-1] if record['activities'] else None
        
        if stage == 'lead':
            return 'Qualify lead - schedule discovery call'
        elif stage == 'qualified':
            return 'Send proposal or demo request'
        elif stage == 'proposal':
            return 'Follow up on proposal - address objections'
        elif stage == 'negotiation':
            return 'Finalize terms and close deal'
        elif stage == 'closed_won':
            return 'Onboarding and expansion opportunities'
        else:
            return 'Review and re-engage if appropriate'
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process email and sync to CRM"""
        sender = email_data.get('from', 'unknown')
        recipients = email_data.get('to', [])
        
        # Extract CRM data
        extracted = self.extract_crm_data(email_data)
        
        # Update CRM record
        record = self.update_crm_record(sender, extracted, email_data)
        
        # Get deal summary
        summary = self.get_deal_summary(sender)
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        return {
            'engine': 'V1102 - CRM Sync Engine',
            'sender': sender,
            'extracted_data': extracted,
            'crm_record': {
                'stage': record['stage'],
                'tags': record['tags'],
                'activities_count': len(record['activities'])
            },
            'deal_summary': summary,
            'reply_all_required': reply_all,
            'action': self.determine_action(extracted, record)
        }
    
    def determine_action(self, extracted: Dict, record: Dict) -> str:
        """Determine action based on CRM context"""
        signals = extracted.get('deal_signals', [])
        
        if any(s['type'] == 'buying_signal' for s in signals):
            return 'HIGH PRIORITY: Buying signal detected - prepare contract/proposal immediately'
        elif any(s['type'] == 'objection' for s in signals):
            return 'Address objections with value propositions and case studies'
        elif any(s['type'] == 'timeline_pressure' for s in signals):
            return 'Urgency detected - prioritize response and provide clear timeline'
        elif extracted.get('revenue_mentions'):
            return f'Revenue discussed - document pricing and update forecast'
        elif record['stage'] == 'lead':
            return 'New lead - qualify with discovery questions'
        else:
            return 'Continue nurturing relationship - provide value'


if __name__ == '__main__':
    engine = CRMSyncEngine()
    
    print("V1102 - CRM Sync Engine Test")
    print("=" * 60)
    
    test_emails = [
        {
            'from': 'prospect@techcorp.com',
            'to': ['sales@zion.com'],
            'subject': 'Interested in your solution',
            'body': 'We are struggling with data integration and need a solution. Our budget is $50,000 for this project. Can we schedule a demo next week?',
            'timestamp': datetime.now()
        },
        {
            'from': 'prospect@techcorp.com',
            'to': ['sales@zion.com', 'cto@techcorp.com'],
            'subject': 'Re: Demo follow-up',
            'body': 'Great demo! Our CTO is impressed. The budget has been approved for $75,000. We are ready to proceed. Please send the contract by Friday.',
            'timestamp': datetime.now()
        }
    ]
    
    for email in test_emails:
        result = engine.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"Deal Stage: {result['crm_record']['stage']}")
        print(f"Tags: {result['crm_record']['tags']}")
        print(f"Deal Signals: {len(result['extracted_data']['deal_signals'])}")
        print(f"Revenue Mentions: {result['extracted_data']['revenue_mentions']}")
        print(f"Reply-All: {result['reply_all_required']}")
        print(f"Action: {result['action']}")
    
    print("\n" + "=" * 60)
    print("Deal Summary:")
    print(json.dumps(engine.get_deal_summary('prospect@techcorp.com'), indent=2, default=str))
