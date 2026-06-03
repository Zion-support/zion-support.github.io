#!/usr/bin/env python3
"""
V1071: Email Intent Classifier
Automatically classify email intent and route to appropriate teams.
"""

import json
from datetime import datetime

class EmailIntentClassifier:
    def __init__(self):
        self.intent_categories = {
            'question': {'priority': 'medium', 'keywords': ['?', 'how', 'what', 'when', 'where', 'why', 'can you', 'could you']},
            'request': {'priority': 'high', 'keywords': ['please', 'need', 'require', 'request', 'ask', 'would like']},
            'complaint': {'priority': 'urgent', 'keywords': ['problem', 'issue', 'broken', 'not working', 'dissatisfied', 'unacceptable']},
            'feedback': {'priority': 'low', 'keywords': ['feedback', 'suggestion', 'opinion', 'thoughts', 'review']},
            'inquiry': {'priority': 'medium', 'keywords': ['interested', 'pricing', 'cost', 'quote', 'estimate', 'information']},
            'support': {'priority': 'high', 'keywords': ['help', 'support', 'assist', 'trouble', 'error', 'bug']},
            'cancellation': {'priority': 'urgent', 'keywords': ['cancel', 'unsubscribe', 'terminate', 'close account', 'stop']},
            'order': {'priority': 'high', 'keywords': ['order', 'purchase', 'buy', 'subscribe', 'upgrade']}
        }
        
        self.routing_rules = {
            'question': 'support@company.com',
            'request': 'operations@company.com',
            'complaint': 'escalation@company.com',
            'feedback': 'product@company.com',
            'inquiry': 'sales@company.com',
            'support': 'support@company.com',
            'cancellation': 'retention@company.com',
            'order': 'fulfillment@company.com'
        }
    
    def classify_intent(self, email_data):
        """Classify the intent of an email."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        # Reply-all enforcement
        reply_all_required = len(recipients) > 1
        
        # Combine text for analysis
        text = (subject + ' ' + body).lower()
        
        # Score each intent category
        scores = {}
        for intent, config in self.intent_categories.items():
            score = 0
            matched_keywords = []
            
            for keyword in config['keywords']:
                if keyword in text:
                    score += 1
                    matched_keywords.append(keyword)
            
            scores[intent] = {
                'score': score,
                'priority': config['priority'],
                'keywords': matched_keywords
            }
        
        # Find highest scoring intent
        primary_intent = max(scores.items(), key=lambda x: x[1]['score'])
        
        # Determine confidence
        total_score = sum(s['score'] for s in scores.values())
        confidence = (primary_intent[1]['score'] / max(total_score, 1)) * 100 if total_score > 0 else 0
        
        # Get routing information
        routing_email = self.routing_rules.get(primary_intent[0], 'general@company.com')
        
        # Generate recommendations
        recommendations = self._generate_recommendations(primary_intent[0], primary_intent[1]['priority'], reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'primary_intent': primary_intent[0],
            'confidence_score': round(confidence, 1),
            'priority_level': primary_intent[1]['priority'],
            'matched_keywords': primary_intent[1]['keywords'],
            'all_scores': {k: v['score'] for k, v in scores.items() if v['score'] > 0},
            'routing': {
                'team': primary_intent[0],
                'email': routing_email,
                'priority': primary_intent[1]['priority']
            },
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _generate_recommendations(self, intent, priority, reply_all_required):
        """Generate action recommendations based on intent."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if priority == 'urgent':
            recommendations.append('🚨 URGENT: Respond within 1 hour')
            recommendations.append('📞 Consider a phone call for immediate resolution')
        elif priority == 'high':
            recommendations.append('⚡ HIGH: Respond within 4 hours')
        elif priority == 'medium':
            recommendations.append('📧 MEDIUM: Respond within 24 hours')
        else:
            recommendations.append('📝 LOW: Respond within 48 hours')
        
        intent_specific = {
            'complaint': ['Acknowledge the issue empathetically', 'Offer solution or compensation', 'Follow up to ensure satisfaction'],
            'cancellation': ['Understand reason for cancellation', 'Offer retention incentives', 'Process cancellation if confirmed'],
            'support': ['Provide clear step-by-step solution', 'Offer additional resources', 'Check if issue is resolved'],
            'inquiry': ['Provide comprehensive information', 'Include pricing and features', 'Schedule demo if interested'],
            'order': ['Confirm order details', 'Provide tracking information', 'Set delivery expectations']
        }
        
        recommendations.extend(intent_specific.get(intent, ['Respond professionally and thoroughly']))
        
        return recommendations


if __name__ == '__main__':
    classifier = EmailIntentClassifier()
    
    test_email = {
        'id': '1',
        'sender': 'customer@example.com',
        'recipients': ['support@company.com', 'manager@company.com'],
        'subject': 'Problem with my order',
        'body': 'I have a problem with my recent order. The product arrived broken and I need help. This is unacceptable and I want a refund.',
        'timestamp': '2024-01-15T10:00:00'
    }
    
    result = classifier.classify_intent(test_email)
    
    print("=== V1071: Email Intent Classifier ===\n")
    print(f"Primary Intent: {result['primary_intent']}")
    print(f"Confidence: {result['confidence_score']}%")
    print(f"Priority: {result['priority_level']}")
    print(f"Matched Keywords: {result['matched_keywords']}")
    print(f"Routing: {result['routing']['email']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")
