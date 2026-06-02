#!/usr/bin/env python3
"""
V906: Intelligent Email Intent Classifier
Analyzes each email to classify intent, urgency, and required action with case-by-case reasoning.
Enforces reply-all for multi-recipient emails.
"""

import json
from datetime import datetime
from typing import Dict, List, Optional

class EmailIntentClassifier:
    def __init__(self):
        self.classifications = []
        self.intent_patterns = {
            'request': ['please', 'could you', 'can you', 'need', 'require', 'request'],
            'question': ['?', 'how', 'what', 'when', 'where', 'why', 'who'],
            'complaint': ['issue', 'problem', 'broken', 'not working', 'dissatisfied', 'complaint'],
            'inquiry': ['information', 'details', 'pricing', 'quote', 'availability'],
            'follow_up': ['following up', 'checking in', 'status', 'update', 'progress'],
            'urgent': ['urgent', 'asap', 'immediately', 'emergency', 'critical', 'deadline']
        }
        
    def classify_email(self, email_id: str, subject: str, body: str,
                      recipients: List[str], cc: List[str] = None,
                      sender: str = None) -> Dict:
        """Classify email intent and determine appropriate action"""
        
        # Analyze email content
        full_text = f"{subject} {body}".lower()
        
        # Classify intent
        intent_scores = {}
        for intent, patterns in self.intent_patterns.items():
            score = sum(1 for p in patterns if p in full_text)
            if score > 0:
                intent_scores[intent] = score
        
        primary_intent = max(intent_scores.keys(), key=lambda x: intent_scores[x]) if intent_scores else 'general'
        
        # Determine urgency
        urgency = 'normal'
        if 'urgent' in intent_scores:
            urgency = 'high'
        elif any(word in full_text for word in ['today', 'tomorrow', 'deadline']):
            urgency = 'medium'
        
        # Determine if reply-all is needed
        total_recipients = len(recipients) + len(cc or [])
        reply_all_required = total_recipients > 1
        
        # Extract action items
        action_items = self._extract_action_items(body)
        
        # Determine response strategy
        response_strategy = self._determine_response_strategy(primary_intent, urgency)
        
        classification = {
            'email_id': email_id,
            'subject': subject,
            'sender': sender,
            'recipients': recipients,
            'cc': cc or [],
            'primary_intent': primary_intent,
            'secondary_intents': [k for k, v in intent_scores.items() if k != primary_intent],
            'urgency': urgency,
            'reply_all_required': reply_all_required,
            'total_recipients': total_recipients,
            'action_items': action_items,
            'response_strategy': response_strategy,
            'confidence': max(intent_scores.values()) / len(self.intent_patterns[primary_intent]) if primary_intent in intent_scores else 0.5,
            'classified_at': datetime.now().isoformat()
        }
        
        self.classifications.append(classification)
        
        return {
            'success': True,
            'classification': classification,
            'recommended_action': response_strategy['action'],
            'reply_all': reply_all_required
        }
    
    def _extract_action_items(self, body: str) -> List[str]:
        """Extract action items from email body"""
        action_items = []
        
        # Look for action indicators
        action_indicators = [
            'please', 'need to', 'should', 'must', 'required',
            'action item', 'todo', 'task', 'follow up'
        ]
        
        sentences = body.split('.')
        for sentence in sentences:
            sentence_lower = sentence.lower().strip()
            if any(indicator in sentence_lower for indicator in action_indicators):
                if len(sentence.strip()) > 10 and len(sentence.strip()) < 200:
                    action_items.append(sentence.strip())
        
        return action_items[:5]  # Max 5 action items
    
    def _determine_response_strategy(self, intent: str, urgency: str) -> Dict:
        """Determine response strategy based on intent and urgency"""
        strategies = {
            'request': {
                'action': 'acknowledge_and_commit',
                'response_time': 'within 2 hours' if urgency == 'high' else 'within 24 hours',
                'template': 'request_acknowledgment'
            },
            'question': {
                'action': 'provide_answer',
                'response_time': 'within 1 hour' if urgency == 'high' else 'within 4 hours',
                'template': 'direct_answer'
            },
            'complaint': {
                'action': 'escalate_and_resolve',
                'response_time': 'immediately' if urgency == 'high' else 'within 2 hours',
                'template': 'complaint_resolution'
            },
            'inquiry': {
                'action': 'provide_information',
                'response_time': 'within 4 hours',
                'template': 'information_response'
            },
            'follow_up': {
                'action': 'provide_status_update',
                'response_time': 'within 2 hours',
                'template': 'status_update'
            },
            'general': {
                'action': 'acknowledge',
                'response_time': 'within 24 hours',
                'template': 'general_acknowledgment'
            }
        }
        
        return strategies.get(intent, strategies['general'])
    
    def generate_reply(self, classification: Dict, context: Dict = None) -> Dict:
        """Generate appropriate reply based on classification"""
        
        intent = classification['primary_intent']
        reply_all = classification['reply_all_required']
        
        # Generate reply content
        if intent == 'request':
            reply_body = f"""Thank you for your request regarding "{classification['subject']}".

I've received your email and will address the following action items:
{chr(10).join(f'- {item}' for item in classification['action_items']) if classification['action_items'] else '- Your request'}

I'll provide an update {classification['response_strategy']['response_time']}.

Best regards"""
        
        elif intent == 'question':
            reply_body = f"""Thank you for your question about "{classification['subject']}".

I'll research this and provide you with a detailed answer {classification['response_strategy']['response_time']}.

If you have any additional questions in the meantime, please don't hesitate to ask.

Best regards"""
        
        elif intent == 'complaint':
            reply_body = f"""I sincerely apologize for the issue you've experienced with "{classification['subject']}".

I understand your concern and am taking immediate action to resolve this matter. Here's what I'm doing:
{chr(10).join(f'- {item}' for item in classification['action_items']) if classification['action_items'] else '- Investigating the issue'}

I'll provide you with an update {classification['response_strategy']['response_time']}.

Thank you for your patience.

Best regards"""
        
        else:
            reply_body = f"""Thank you for your email regarding "{classification['subject']}".

I've received your message and will respond {classification['response_strategy']['response_time']}.

Best regards"""
        
        # Determine recipients
        to_recipients = classification['recipients'] if reply_all else [classification['sender']]
        cc_recipients = classification['cc'] if reply_all else []
        
        reply = {
            'original_email_id': classification['email_id'],
            'subject': f"Re: {classification['subject']}",
            'body': reply_body,
            'to': to_recipients,
            'cc': cc_recipients,
            'reply_all': reply_all,
            'response_time': classification['response_strategy']['response_time'],
            'generated_at': datetime.now().isoformat()
        }
        
        return {
            'success': True,
            'reply': reply,
            'reply_all_enforced': reply_all,
            'total_recipients': len(to_recipients) + len(cc_recipients)
        }
    
    def get_classification_stats(self) -> Dict:
        """Get classification statistics"""
        if not self.classifications:
            return {'success': True, 'total': 0}
        
        intent_counts = {}
        urgency_counts = {'high': 0, 'medium': 0, 'normal': 0}
        reply_all_count = 0
        
        for c in self.classifications:
            intent = c['primary_intent']
            intent_counts[intent] = intent_counts.get(intent, 0) + 1
            urgency_counts[c['urgency']] += 1
            if c['reply_all_required']:
                reply_all_count += 1
        
        return {
            'success': True,
            'total_classified': len(self.classifications),
            'intent_distribution': intent_counts,
            'urgency_distribution': urgency_counts,
            'reply_all_rate': reply_all_count / len(self.classifications) * 100,
            'avg_confidence': sum(c['confidence'] for c in self.classifications) / len(self.classifications)
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive report"""
        stats = self.get_classification_stats()
        
        report = f"""
📧 INTELLIGENT EMAIL INTENT CLASSIFIER REPORT (V906)
{'='*60}

CLASSIFICATION OVERVIEW:
- Total Emails Classified: {stats.get('total_classified', 0)}
- Reply-All Enforcement Rate: {stats.get('reply_all_rate', 0):.1f}%
- Average Confidence: {stats.get('avg_confidence', 0):.2f}

INTENT DISTRIBUTION:
"""
        for intent, count in stats.get('intent_distribution', {}).items():
            report += f"  - {intent.title()}: {count}\n"
        
        report += f"""
URGENCY DISTRIBUTION:
  - High: {stats.get('urgency_distribution', {}).get('high', 0)}
  - Medium: {stats.get('urgency_distribution', {}).get('medium', 0)}
  - Normal: {stats.get('urgency_distribution', {}).get('normal', 0)}

CAPABILITIES:
- Case-by-case email analysis
- 6 intent categories (request, question, complaint, inquiry, follow-up, urgent)
- 3 urgency levels (high, medium, normal)
- Automatic action item extraction
- Reply-all enforcement for multi-recipient emails
- Intelligent response strategy selection
- Confidence scoring

REPLY-ALL ENFORCEMENT:
✅ Automatically detects multi-recipient emails
✅ Enforces reply-all when total recipients > 1
✅ Includes CC recipients in reply-all
✅ Prevents accidental reply-sender-only

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for intent classification requests"""
    email_keywords = ['email', 'classify', 'intent', 'reply', 'respond', 'message']
    
    has_email = any(kw in email_text.lower() for kw in email_keywords)
    
    return {
        'email_type': 'email_classification',
        'classification_request': has_email,
        'reply_all_required': True,
        'priority': 'high' if has_email else 'medium'
    }


if __name__ == '__main__':
    engine = EmailIntentClassifier()
    
    # Test emails
    engine.classify_email(
        'email-001',
        'Urgent: Server downtime issue',
        'We have a critical server issue. Please investigate immediately. Need resolution by EOD.',
        ['admin@company.com', 'ops@company.com'],
        ['manager@company.com'],
        'user@company.com'
    )
    
    engine.classify_email(
        'email-002',
        'Question about pricing',
        'Can you provide details on your enterprise pricing? What are the available plans?',
        ['sales@company.com'],
        [],
        'prospect@company.com'
    )
    
    engine.classify_email(
        'email-003',
        'Follow up on proposal',
        'Following up on the proposal sent last week. What is the status?',
        ['account@company.com', 'manager@company.com'],
        ['team@company.com'],
        'client@company.com'
    )
    
    # Generate reply for first email
    classification = engine.classifications[0]
    reply = engine.generate_reply(classification)
    
    print(engine.generate_report())
    print(f"\nReply Generated: {json.dumps(reply, indent=2)}")
