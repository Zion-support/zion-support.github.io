#!/usr/bin/env python3
"""
V64 - Unified Intelligent Email Responder
Combines all V63 features with enhanced case-by-case analysis and reply-all enforcement

Author: Kleber Garcia Alcatrao
Contact: kleber@ziontechgroup.com | +1 302 464 0950
Address: 364 E Main St STE 1008, Middletown, DE 19709
"""

import sys
from pathlib import Path

# Add commands directory to path
sys.path.insert(0, str(Path(__file__).parent))

from email_responder_v60 import analyze_email_v60
from email_responder_v62 import analyze_email_v62
from email_smart_templates_v63 import select_template
from email_to_task_converter_v63 import extract_tasks_from_email
from email_analytics_dashboard_v63 import track_email_interaction
from calendar_integration_v63 import detect_meeting_request, suggest_availability

class UnifiedEmailResponder:
    """
    Unified email responder that combines all V63 features with intelligent routing
    """
    
    def __init__(self):
        self.features_enabled = {
            'intent_routing': True,
            'sentiment_analysis': True,
            'urgency_detection': True,
            'template_matching': True,
            'task_extraction': True,
            'calendar_integration': True,
            'analytics_tracking': True,
            'reply_all_enforcement': True,
            'quality_checking': True
        }
    
    def process_email(self, email_data: dict) -> dict:
        """
        Process email through all intelligence layers
        
        Args:
            email_data: Raw email data
            
        Returns:
            Comprehensive analysis with recommended actions
        """
        result = {
            'email_id': email_data.get('id', 'unknown'),
            'timestamp': email_data.get('date', ''),
            'sender': email_data.get('from', ''),
            'subject': email_data.get('subject', ''),
            'recipients': email_data.get('to', []),
            'cc': email_data.get('cc', []),
            'analysis': {},
            'recommended_actions': [],
            'response': {},
            'tasks': [],
            'calendar_events': []
        }
        
        # Layer 1: V60 Analysis (intent, sentiment, urgency)
        if self.features_enabled['intent_routing']:
            v60_analysis = analyze_email_v60(email_data)
            result['analysis']['v60'] = v60_analysis
        
        # Layer 2: V62 Advanced Analysis (escalation, attachments, threading)
        if self.features_enabled['urgency_detection']:
            v62_analysis = analyze_email_v62(email_data)
            result['analysis']['v62'] = v62_analysis
        
        # Layer 3: Meeting Detection
        if self.features_enabled['calendar_integration']:
            meeting_detected = detect_meeting_request(email_data)
            if meeting_detected:
                result['analysis']['meeting_request'] = True
                availability = suggest_availability(email_data)
                result['calendar_events'] = availability
        
        # Layer 4: Task Extraction
        if self.features_enabled['task_extraction']:
            tasks = extract_tasks_from_email(email_data)
            result['tasks'] = tasks
        
        # Layer 5: Determine Response Strategy
        response_strategy = self._determine_response_strategy(result['analysis'])
        result['response']['strategy'] = response_strategy
        
        # Layer 6: Template Selection
        if self.features_enabled['template_matching']:
            intent = result['analysis'].get('v60', {}).get('intent', 'general')
            template = select_template(intent, email_data)
            result['response']['template'] = template
        
        # Layer 7: Reply-All Enforcement
        if self.features_enabled['reply_all_enforcement']:
            reply_all_decision = self._enforce_reply_all(email_data, result['analysis'])
            result['response']['reply_all'] = reply_all_decision
        
        # Layer 8: Quality Checking
        if self.features_enabled['quality_checking']:
            quality_score = self._check_response_quality(result['response'])
            result['response']['quality_score'] = quality_score
        
        # Layer 9: Generate Recommended Actions
        result['recommended_actions'] = self._generate_recommended_actions(result)
        
        # Layer 10: Track for Analytics
        if self.features_enabled['analytics_tracking']:
            track_email_interaction(email_data, result)
        
        return result
    
    def _determine_response_strategy(self, analysis: dict) -> str:
        """
        Determine the best response strategy based on analysis
        
        Returns:
            Strategy: 'auto_reply', 'draft_review', 'manual_response', 'escalate', 'ignore'
        """
        v60 = analysis.get('v60', {})
        v62 = analysis.get('v62', {})
        
        intent = v60.get('intent', 'general')
        sentiment = v60.get('sentiment', 'neutral')
        urgency = v60.get('urgency', 'normal')
        escalation_level = v62.get('escalation_level', 0)
        
        # Critical escalation always requires manual review
        if escalation_level >= 3:
            return 'escalate'
        
        # High urgency with negative sentiment needs draft review
        if urgency == 'high' and sentiment == 'negative':
            return 'draft_review'
        
        # Sales inquiries and partnerships should be drafted for review
        if intent in ['sales_inquiry', 'partnership']:
            return 'draft_review'
        
        # Support tickets with high urgency need immediate attention
        if intent == 'support_ticket' and urgency == 'high':
            return 'draft_review'
        
        # Billing issues always need review
        if intent == 'billing_invoice':
            return 'draft_review'
        
        # Thank you and general inquiries can auto-reply
        if intent in ['thank_you', 'general'] and sentiment in ['positive', 'neutral']:
            return 'auto_reply'
        
        # Follow-ups can auto-reply if sentiment is positive
        if intent == 'follow_up' and sentiment == 'positive':
            return 'auto_reply'
        
        # Default to draft review for safety
        return 'draft_review'
    
    def _enforce_reply_all(self, email_data: dict, analysis: dict) -> dict:
        """
        Enforce reply-all when appropriate
        
        Returns:
            Dict with decision and reasoning
        """
        recipients = email_data.get('to', [])
        cc_list = email_data.get('cc', [])
        sender = email_data.get('from', '')
        
        # Count total recipients
        total_recipients = len(recipients) + len(cc_list)
        
        # Decision criteria
        should_reply_all = False
        reasons = []
        
        # Rule 1: If there are multiple recipients, reply-all
        if total_recipients > 1:
            should_reply_all = True
            reasons.append(f"Multiple recipients detected ({total_recipients})")
        
        # Rule 2: If sender is in a group discussion
        if len(cc_list) > 0:
            should_reply_all = True
            reasons.append(f"CC recipients present ({len(cc_list)})")
        
        # Rule 3: If the email mentions "all", "team", "everyone"
        body = email_data.get('body', '').lower()
        if any(keyword in body for keyword in ['all', 'team', 'everyone', 'group', 'folks']):
            should_reply_all = True
            reasons.append("Group keywords detected in email body")
        
        # Rule 4: If it's a follow-up in a thread
        v62 = analysis.get('v62', {})
        if v62.get('thread_depth', 0) > 2:
            should_reply_all = True
            reasons.append(f"Deep thread detected (depth: {v62.get('thread_depth', 0)})")
        
        return {
            'should_reply_all': should_reply_all,
            'reasons': reasons,
            'recipients': recipients,
            'cc': cc_list
        }
    
    def _check_response_quality(self, response: dict) -> dict:
        """
        Check the quality of the generated response
        
        Returns:
            Quality score and issues
        """
        template = response.get('template', {})
        strategy = response.get('strategy', '')
        
        issues = []
        score = 100
        
        # Check if template exists
        if not template:
            issues.append("No template selected")
            score -= 30
        
        # Check if strategy is appropriate
        if strategy == 'auto_reply' and not template:
            issues.append("Auto-reply without template is risky")
            score -= 20
        
        # Check for placeholder text
        if template:
            body = template.get('body', '')
            if '{{' in body or '}}' in body:
                issues.append("Template contains unresolved placeholders")
                score -= 15
        
        # Check for generic language
        if template:
            body = template.get('body', '').lower()
            generic_phrases = ['as soon as possible', 'at your earliest convenience', 'please let me know']
            generic_count = sum(1 for phrase in generic_phrases if phrase in body)
            if generic_count > 2:
                issues.append(f"Too many generic phrases ({generic_count})")
                score -= 10
        
        return {
            'score': max(0, score),
            'issues': issues,
            'pass': score >= 70
        }
    
    def _generate_recommended_actions(self, result: dict) -> list:
        """
        Generate list of recommended actions based on analysis
        """
        actions = []
        
        strategy = result['response'].get('strategy', '')
        analysis = result['analysis']
        reply_all = result['response'].get('reply_all', {})
        quality = result['response'].get('quality_score', {})
        
        # Action based on strategy
        if strategy == 'auto_reply':
            if quality.get('pass', False):
                actions.append({
                    'action': 'send_auto_reply',
                    'priority': 'high',
                    'reason': 'High-quality auto-reply ready to send'
                })
            else:
                actions.append({
                    'action': 'review_draft',
                    'priority': 'medium',
                    'reason': f"Quality issues detected: {', '.join(quality.get('issues', []))}"
                })
        
        elif strategy == 'draft_review':
            actions.append({
                'action': 'review_draft',
                'priority': 'high',
                'reason': 'Draft requires human review before sending'
            })
        
        elif strategy == 'escalate':
            actions.append({
                'action': 'escalate_to_manager',
                'priority': 'urgent',
                'reason': 'Critical escalation level reached'
            })
        
        elif strategy == 'manual_response':
            actions.append({
                'action': 'manual_response_required',
                'priority': 'high',
                'reason': 'Complex email requires manual response'
            })
        
        # Action for reply-all
        if reply_all.get('should_reply_all', False):
            actions.append({
                'action': 'reply_all',
                'priority': 'medium',
                'reason': f"Reply-all recommended: {', '.join(reply_all.get('reasons', []))}"
            })
        
        # Action for tasks
        if result['tasks']:
            actions.append({
                'action': 'create_tasks',
                'priority': 'medium',
                'reason': f"Extracted {len(result['tasks'])} actionable tasks"
            })
        
        # Action for calendar
        if result['calendar_events']:
            actions.append({
                'action': 'schedule_meeting',
                'priority': 'medium',
                'reason': 'Meeting request detected with available time slots'
            })
        
        # Action for attachments
        v62 = analysis.get('v62', {})
        if v62.get('attachment_count', 0) > 0:
            actions.append({
                'action': 'review_attachments',
                'priority': 'medium',
                'reason': f"Email contains {v62.get('attachment_count')} attachment(s)"
            })
        
        return actions
    
    def generate_response_summary(self, result: dict) -> str:
        """
        Generate human-readable summary of email processing
        """
        summary_lines = [
            "=" * 80,
            "EMAIL PROCESSING SUMMARY",
            "=" * 80,
            f"Email ID: {result['email_id']}",
            f"From: {result['sender']}",
            f"Subject: {result['subject']}",
            f"Timestamp: {result['timestamp']}",
            "",
            "ANALYSIS:",
            f"  Intent: {result['analysis'].get('v60', {}).get('intent', 'unknown')}",
            f"  Sentiment: {result['analysis'].get('v60', {}).get('sentiment', 'unknown')}",
            f"  Urgency: {result['analysis'].get('v60', {}).get('urgency', 'unknown')}",
            f"  Escalation Level: {result['analysis'].get('v62', {}).get('escalation_level', 0)}",
            "",
            "RESPONSE STRATEGY:",
            f"  Strategy: {result['response'].get('strategy', 'unknown')}",
            f"  Reply-All: {result['response'].get('reply_all', {}).get('should_reply_all', False)}",
            f"  Quality Score: {result['response'].get('quality_score', {}).get('score', 0)}/100",
            "",
            "RECOMMENDED ACTIONS:"
        ]
        
        for i, action in enumerate(result['recommended_actions'], 1):
            summary_lines.append(f"  {i}. [{action['priority'].upper()}] {action['action']}")
            summary_lines.append(f"     Reason: {action['reason']}")
        
        if result['tasks']:
            summary_lines.append(f"\nTASKS EXTRACTED: {len(result['tasks'])}")
            for i, task in enumerate(result['tasks'][:5], 1):
                summary_lines.append(f"  {i}. {task.get('title', 'Untitled')} (Due: {task.get('deadline', 'None')})")
        
        if result['calendar_events']:
            summary_lines.append(f"\nMEETING SLOTS AVAILABLE: {len(result['calendar_events'])}")
            for i, slot in enumerate(result['calendar_events'][:3], 1):
                summary_lines.append(f"  {i}. {slot.get('start', 'Unknown')} - {slot.get('end', 'Unknown')}")
        
        summary_lines.extend(["", "=" * 80])
        
        return '\n'.join(summary_lines)


def main():
    """
    Main entry point for testing
    """
    print("V64 Unified Intelligent Email Responder")
    print("=" * 80)
    
    # Example email
    example_email = {
        'id': 'test_001',
        'date': '2026-05-29T14:30:00Z',
        'from': 'client@example.com',
        'to': ['kleber@ziontechgroup.com'],
        'cc': ['team@ziontechgroup.com'],
        'subject': 'Urgent: Project Timeline Discussion',
        'body': 'Hi Kleber and team,\n\nWe need to discuss the project timeline urgently. Can we schedule a meeting this week? The deadline is approaching and we have some concerns.\n\nBest regards,\nClient'
    }
    
    # Process email
    responder = UnifiedEmailResponder()
    result = responder.process_email(example_email)
    
    # Generate summary
    summary = responder.generate_response_summary(result)
    print(summary)
    
    print("\n✅ V64 Email Responder initialized successfully!")
    print(f"   Features enabled: {sum(responder.features_enabled.values())}/{len(responder.features_enabled)}")
    print("\nContact: Kleber Garcia Alcatrao")
    print("Email: kleber@ziontechgroup.com")
    print("Phone: +1 302 464 0950")
    print("Address: 364 E Main St STE 1008, Middletown, DE 19709")


if __name__ == '__main__':
    main()
