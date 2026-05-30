#!/usr/bin/env python3
"""
V250: Email Template Intelligence Engine
Auto-generate personalized templates based on context, learn from successful
past responses, and A/B test template variations for better engagement.
CRITICAL: Enforces reply-all for multi-recipient emails.
"""
import json
import re
from datetime import datetime
from typing import Dict, List
from collections import defaultdict


class EmailTemplateIntelligence:
    """Intelligent email template generation and optimization."""
    
    def __init__(self):
        self.template_library = defaultdict(list)
        self.template_performance = defaultdict(lambda: {
            'sent': 0, 'opened': 0, 'replied': 0, 'response_rate': 0
        })
        self.success_patterns = defaultdict(list)
    
    def generate_template(self, email: Dict, context: str = None,
                          recipients: List[str] = None) -> Dict:
        """Generate personalized email template based on context."""
        recipients = recipients or []
        
        # Analyze incoming email
        sender = email.get('from', '')
        subject = email.get('subject', '')
        body = email.get('body', '')
        
        # Determine email type
        email_type = self._classify_email_type(subject, body)
        
        # Generate template based on type
        template = self._create_template(email_type, email, context)
        
        # Personalize template
        template = self._personalize_template(template, sender, context)
        
        # CRITICAL: Check reply-all requirement
        reply_all_required = len(recipients) > 1
        
        if reply_all_required:
            template['greeting'] = self._get_group_greeting(recipients)
            template['note'] = "Reply-all enabled for all recipients"
        
        # Check for successful past templates
        similar_templates = self._find_similar_templates(email_type, sender)
        
        return {
            'email_id': email.get('id', 'unknown'),
            'template': template,
            'email_type': email_type,
            'reply_all_required': reply_all_required,
            'recipient_count': len(recipients),
            'similar_successful_templates': similar_templates,
            'customization_options': self._get_customization_options(email_type)
        }
    
    def _classify_email_type(self, subject: str, body: str) -> str:
        """Classify email into predefined types."""
        text = f"{subject} {body}".lower()
        
        if any(word in text for word in ['meeting', 'schedule', 'calendar', 'appointment']):
            return 'meeting_request'
        elif any(word in text for word in ['question', 'help', 'support', 'issue', 'problem']):
            return 'support_request'
        elif any(word in text for word in ['proposal', 'quote', 'pricing', 'estimate']):
            return 'proposal_request'
        elif any(word in text for word in ['thank', 'appreciate', 'grateful']):
            return 'thank_you'
        elif any(word in text for word in ['follow up', 'following up', 'check in', 'status']):
            return 'follow_up'
        elif any(word in text for word in ['feedback', 'review', 'opinion']):
            return 'feedback_request'
        elif any(word in text for word in ['introduction', 'intro', 'connect']):
            return 'introduction'
        else:
            return 'general'
    
    def _create_template(self, email_type: str, email: Dict, context: str) -> Dict:
        """Create base template for email type."""
        templates = {
            'meeting_request': {
                'greeting': 'Hi [Name],',
                'opening': 'Thank you for reaching out about scheduling a meeting.',
                'body': 'I\'m available on [DATE_OPTIONS]. Please let me know which time works best for you.',
                'closing': 'Looking forward to our conversation.',
                'signature': 'Best regards,\n[Your Name]'
            },
            'support_request': {
                'greeting': 'Hi [Name],',
                'opening': 'Thank you for contacting us about [ISSUE].',
                'body': 'I understand your concern and I\'m here to help. [SOLUTION_STEPS]',
                'closing': 'Please let me know if you need any additional assistance.',
                'signature': 'Best regards,\n[Your Name]'
            },
            'proposal_request': {
                'greeting': 'Hi [Name],',
                'opening': 'Thank you for your interest in our services.',
                'body': 'I\'ve prepared a proposal based on your requirements. [PROPOSAL_DETAILS]',
                'closing': 'I\'m happy to discuss any questions you may have.',
                'signature': 'Best regards,\n[Your Name]'
            },
            'thank_you': {
                'greeting': 'Hi [Name],',
                'opening': 'You\'re very welcome!',
                'body': 'I\'m glad I could help. [ADDITIONAL_VALUE]',
                'closing': 'Don\'t hesitate to reach out if you need anything else.',
                'signature': 'Best regards,\n[Your Name]'
            },
            'follow_up': {
                'greeting': 'Hi [Name],',
                'opening': 'I wanted to follow up on [TOPIC].',
                'body': '[UPDATE_OR_REMINDER]',
                'closing': 'Please let me know if you have any questions.',
                'signature': 'Best regards,\n[Your Name]'
            },
            'feedback_request': {
                'greeting': 'Hi [Name],',
                'opening': 'Thank you for requesting feedback.',
                'body': 'Here are my thoughts on [TOPIC]: [FEEDBACK_DETAILS]',
                'closing': 'I hope this is helpful. Let me know if you need clarification.',
                'signature': 'Best regards,\n[Your Name]'
            },
            'introduction': {
                'greeting': 'Hi [Name],',
                'opening': 'It\'s great to connect with you!',
                'body': '[INTRODUCTION_DETAILS]',
                'closing': 'I look forward to learning more about [TOPIC].',
                'signature': 'Best regards,\n[Your Name]'
            },
            'general': {
                'greeting': 'Hi [Name],',
                'opening': 'Thank you for your email.',
                'body': '[RESPONSE_CONTENT]',
                'closing': 'Please let me know if you have any questions.',
                'signature': 'Best regards,\n[Your Name]'
            }
        }
        
        return templates.get(email_type, templates['general'])
    
    def _personalize_template(self, template: Dict, sender: str, context: str) -> Dict:
        """Personalize template with sender information and context."""
        # Extract name from sender
        name_match = re.search(r'([A-Za-z]+)', sender)
        name = name_match.group(1) if name_match else 'there'
        
        # Replace placeholders
        personalized = template.copy()
        personalized['greeting'] = template['greeting'].replace('[Name]', name)
        
        # Add context-specific personalization
        if context:
            personalized['body'] = template['body'].replace('[TOPIC]', context)
        
        return personalized
    
    def _get_group_greeting(self, recipients: List[str]) -> str:
        """Get appropriate greeting for group emails."""
        if len(recipients) == 2:
            return 'Hi both,'
        elif len(recipients) <= 5:
            return 'Hi team,'
        else:
            return 'Hi everyone,'
    
    def _find_similar_templates(self, email_type: str, sender: str) -> List[Dict]:
        """Find similar successful templates from history."""
        similar = []
        
        # Get templates for this email type
        type_templates = self.template_library.get(email_type, [])
        
        # Get templates for this sender
        sender_templates = [
            t for t in type_templates
            if t.get('sender') == sender and t.get('performance', {}).get('response_rate', 0) > 0.5
        ]
        
        return sender_templates[:3]  # Return top 3 similar templates
    
    def _get_customization_options(self, email_type: str) -> List[str]:
        """Get available customization options for email type."""
        options = {
            'meeting_request': ['Add calendar invite', 'Include agenda', 'Suggest alternative times'],
            'support_request': ['Add troubleshooting steps', 'Include documentation links', 'Escalate to specialist'],
            'proposal_request': ['Attach proposal PDF', 'Include pricing breakdown', 'Add case studies'],
            'thank_you': ['Add value-add resource', 'Request feedback', 'Suggest next steps'],
            'follow_up': ['Add deadline reminder', 'Include progress update', 'Request confirmation'],
            'feedback_request': ['Structure feedback', 'Add examples', 'Provide actionable suggestions'],
            'introduction': ['Add background info', 'Include relevant links', 'Suggest meeting'],
            'general': ['Add attachments', 'Include links', 'Request confirmation']
        }
        
        return options.get(email_type, options['general'])
    
    def learn_from_response(self, template_id: str, metrics: Dict):
        """Learn from template performance metrics."""
        perf = self.template_performance[template_id]
        
        perf['sent'] += 1
        if metrics.get('opened'):
            perf['opened'] += 1
        if metrics.get('replied'):
            perf['replied'] += 1
        
        # Update response rate
        if perf['sent'] > 0:
            perf['response_rate'] = perf['replied'] / perf['sent']
    
    def ab_test_templates(self, email_type: str, template_a: Dict, 
                         template_b: Dict) -> Dict:
        """Set up A/B test for two template variations."""
        test_id = f"ab_test_{email_type}_{datetime.now().timestamp()}"
        
        return {
            'test_id': test_id,
            'email_type': email_type,
            'template_a': template_a,
            'template_b': template_b,
            'status': 'ready',
            'metrics': {
                'template_a': {'sent': 0, 'opened': 0, 'replied': 0},
                'template_b': {'sent': 0, 'opened': 0, 'replied': 0}
            },
            'winner': None,
            'confidence': 0
        }


if __name__ == '__main__':
    # Test the template intelligence engine
    engine = EmailTemplateIntelligence()
    
    test_emails = [
        {
            'email': {
                'id': 'e1',
                'from': 'john.smith@client.com',
                'subject': 'Meeting request: Project kickoff',
                'body': 'Hi, I\'d like to schedule a meeting to discuss the project kickoff. Are you available this week?'
            },
            'recipients': ['pm@company.com', 'tech-lead@company.com'],
            'context': 'project kickoff'
        },
        {
            'email': {
                'id': 'e2',
                'from': 'sarah.jones@customer.com',
                'subject': 'Question about pricing',
                'body': 'Can you send me a proposal with pricing details for the enterprise plan?'
            },
            'recipients': ['sales@company.com'],
            'context': 'enterprise pricing'
        },
        {
            'email': {
                'id': 'e3',
                'from': 'mike.wilson@partner.com',
                'subject': 'Thank you for the help',
                'body': 'Thanks so much for helping us with the integration. It\'s working perfectly now!'
            },
            'recipients': ['support@company.com', 'engineering@company.com', 'manager@company.com'],
            'context': 'integration support'
        }
    ]
    
    print("=== V250: Email Template Intelligence Test ===\n")
    
    for data in test_emails:
        result = engine.generate_template(
            data['email'],
            data['context'],
            data['recipients']
        )
        
        print(f"Email: {result['email_id']}")
        print(f"  Type: {result['email_type']}")
        print(f"  Reply-All Required: {result['reply_all_required']}")
        print(f"  Recipients: {result['recipient_count']}")
        print("\n  Generated Template:")
        print(f"    Greeting: {result['template']['greeting']}")
        print(f"    Opening: {result['template']['opening']}")
        print(f"    Body: {result['template']['body'][:80]}...")
        print(f"    Closing: {result['template']['closing']}")
        
        if result.get('note'):
            print(f"\n  Note: {result['note']}")
        
        print("\n  Customization Options:")
        for option in result['customization_options'][:3]:
            print(f"    • {option}")
        
        print()
