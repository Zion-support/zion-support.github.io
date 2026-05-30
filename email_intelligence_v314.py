#!/usr/bin/env python3
"""
Email Intelligence Engine V314 - Email Speed Optimizer
Analyzes and reduces email processing time with one-click responses,
smart templates, batch processing, and distraction-free compose mode.
Enforces reply-all and case-by-case analysis.
"""

import json
from datetime import datetime
from typing import Dict, List
import re

class EmailSpeedOptimizer:
    def __init__(self):
        self.version = "V314"
        self.templates = {
            'acknowledgment': 'Thank you for your email. I\'ve received it and will respond shortly.',
            'meeting_request': 'I\'d be happy to meet. Here are my available times:\n\n[Calendar link]',
            'follow_up': 'Following up on my previous email. Any updates?',
            'decline': 'Thank you for the opportunity, but I\'ll have to decline at this time.',
            'approve': 'Approved. Please proceed.',
            'request_info': 'Could you please provide more details on:\n\n1. \n2. \n3. '
        }
        
    def analyze_processing_time(self, email_data: Dict) -> Dict:
        """Analyze estimated processing time"""
        content = email_data.get('content', '')
        subject = email_data.get('subject', '')
        
        # Factors affecting processing time
        word_count = len(content.split())
        has_questions = len(re.findall(r'\?', content))
        has_attachments = bool(email_data.get('attachments'))
        has_links = len(re.findall(r'http[s]?://', content))
        requires_decision = any(kw in content.lower() for kw in ['approve', 'decide', 'choose', 'select'])
        complexity = 'high' if word_count > 200 or has_questions > 2 else 'medium' if word_count > 100 else 'low'
        
        # Estimate time (seconds)
        base_time = 30
        reading_time = word_count * 0.3  # 0.3 sec per word
        decision_time = 60 if requires_decision else 0
        attachment_time = 30 * len(email_data.get('attachments', []))
        
        total_time = base_time + reading_time + decision_time + attachment_time
        
        return {
            'word_count': word_count,
            'questions': has_questions,
            'attachments': has_attachments,
            'links': has_links,
            'requires_decision': requires_decision,
            'complexity': complexity,
            'estimated_seconds': total_time,
            'estimated_minutes': round(total_time / 60, 1)
        }
    
    def suggest_template(self, email_data: Dict) -> Dict:
        """Suggest appropriate response template"""
        content = email_data.get('content', '').lower()
        subject = email_data.get('subject', '').lower()
        
        # Pattern matching for template selection
        if any(kw in content for kw in ['thank', 'received', 'acknowledge']):
            template_key = 'acknowledgment'
            confidence = 0.9
        elif any(kw in content for kw in ['meet', 'call', 'schedule', 'available']):
            template_key = 'meeting_request'
            confidence = 0.85
        elif any(kw in content for kw in ['follow up', 'update', 'status']):
            template_key = 'follow_up'
            confidence = 0.8
        elif any(kw in content for kw in ['decline', 'not interested', 'pass']):
            template_key = 'decline'
            confidence = 0.75
        elif any(kw in content for kw in ['approve', 'yes', 'proceed', 'go ahead']):
            template_key = 'approve'
            confidence = 0.9
        elif any(kw in content for kw in ['need', 'provide', 'send', 'share']):
            template_key = 'request_info'
            confidence = 0.7
        else:
            template_key = None
            confidence = 0
        
        return {
            'template_key': template_key,
            'template': self.templates.get(template_key, ''),
            'confidence': confidence,
            'customization_needed': template_key in ['meeting_request', 'request_info']
        }
    
    def optimize_compose(self, email_data: Dict) -> Dict:
        """Optimize email composition for speed"""
        content = email_data.get('content', '')
        
        # Distraction-free recommendations
        suggestions = []
        
        if len(content) > 300:
            suggestions.append('Consider breaking into bullet points for clarity')
        
        if len(re.findall(r'\?', content)) > 3:
            suggestions.append('Group questions together for easier response')
        
        if not content.strip().endswith('.'):
            suggestions.append('End with clear call-to-action')
        
        # Time-saving shortcuts
        shortcuts = {
            'use_template': bool(self.suggest_template(email_data)['template']),
            'batch_similar': self._detect_batch_opportunity(email_data),
            'schedule_send': self._suggest_send_time(email_data)
        }
        
        return {
            'suggestions': suggestions,
            'shortcuts': shortcuts,
            'estimated_time_saved': len(suggestions) * 15 + sum(1 for v in shortcuts.values() if v is True) * 30  # seconds
        }
    
    def _detect_batch_opportunity(self, email_data: Dict) -> bool:
        """Detect if email can be batched with similar ones"""
        subject = email_data.get('subject', '').lower()
        sender = email_data.get('sender', '')
        
        # Batch patterns
        batch_keywords = ['update', 'report', 'newsletter', 'digest', 'summary']
        return any(kw in subject for kw in batch_keywords)
    
    def _suggest_send_time(self, email_data: Dict) -> str:
        """Suggest optimal send time"""
        current_hour = datetime.now().hour
        
        if current_hour < 8 or current_hour > 18:
            return 'Schedule for 9 AM tomorrow'
        elif current_hour > 16:
            return 'Schedule for 9 AM tomorrow'
        else:
            return 'Send now'
    
    def batch_process(self, emails: List[Dict]) -> Dict:
        """Process multiple emails in batch"""
        print(f"[{self.version}] Batch processing {len(emails)} emails")
        
        results = []
        total_time_saved = 0
        
        for email in emails:
            analysis = self.analyze_processing_time(email)
            template = self.suggest_template(email)
            optimization = self.optimize_compose(email)
            
            time_saved = optimization['estimated_time_saved']
            total_time_saved += time_saved
            
            results.append({
                'subject': email.get('subject'),
                'estimated_time': analysis['estimated_minutes'],
                'template_suggested': bool(template['template']),
                'time_saved_seconds': time_saved
            })
        
        return {
            'version': self.version,
            'emails_processed': len(emails),
            'total_time_saved_seconds': total_time_saved,
            'total_time_saved_minutes': round(total_time_saved / 60, 1),
            'results': results
        }
    
    def process_email(self, email_data: Dict) -> Dict:
        """Process single email with speed optimization"""
        print(f"[{self.version}] Optimizing email processing speed")
        
        # Case-by-case analysis
        recipients = email_data.get('recipients', [])
        cc_list = email_data.get('cc', [])
        all_recipients = recipients + cc_list
        
        # Enforce reply-all
        reply_all = len(all_recipients) > 1
        
        # Analyze
        time_analysis = self.analyze_processing_time(email_data)
        template_suggestion = self.suggest_template(email_data)
        compose_optimization = self.optimize_compose(email_data)
        
        response = {
            'version': self.version,
            'engine': 'Email Speed Optimizer',
            'processing_time': time_analysis,
            'template': template_suggestion,
            'optimization': compose_optimization,
            'reply_all': reply_all,
            'reply_all_recipients': all_recipients if reply_all else [],
            'quick_actions': {
                'one_click_response': bool(template_suggestion['template']),
                'batch_candidate': compose_optimization['shortcuts']['batch_similar'],
                'schedule_send': compose_optimization['shortcuts']['schedule_send']
            },
            'recommendation': f'Use template to save {compose_optimization["estimated_time_saved"]}s' if template_suggestion['template'] else 'Custom response required'
        }
        
        print(f"[{self.version}] Time: {time_analysis['estimated_minutes']}min, Template: {bool(template_suggestion['template'])}, Reply-all: {reply_all}")
        return response

# Test
if __name__ == "__main__":
    engine = EmailSpeedOptimizer()
    
    test_email = {
        'sender': 'client@company.com',
        'subject': 'Meeting Request: Q3 Planning',
        'content': 'Hi, I\'d like to schedule a meeting to discuss Q3 planning. Are you available next week? Please let me know your preferred times.',
        'recipients': ['manager@company.com'],
        'cc': ['team@company.com', 'assistant@company.com'],
        'attachments': []
    }
    
    result = engine.process_email(test_email)
    print(json.dumps(result, indent=2))
    
    # Test batch processing
    print("\n--- Batch Processing ---")
    batch_emails = [test_email] * 3
    batch_result = engine.batch_process(batch_emails)
    print(json.dumps(batch_result, indent=2))
