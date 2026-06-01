#!/usr/bin/env python3
"""V1041: AI Email Sentiment Evolution Tracker
Tracks sentiment changes across email threads over time.
Detects relationship deterioration early.
Alerts when key accounts show negative trends.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime, timedelta
from collections import defaultdict

# Sentiment lexicon
POSITIVE_WORDS = {
    'excellent', 'amazing', 'wonderful', 'great', 'fantastic', 'perfect',
    'love', 'happy', 'pleased', 'satisfied', 'thank', 'appreciate',
    'impressed', 'delighted', 'thrilled', 'grateful', 'excited',
    'outstanding', 'superb', 'brilliant', 'helpful', 'responsive',
    'professional', 'reliable', 'efficient', 'smooth', 'seamless'
}

NEGATIVE_WORDS = {
    'terrible', 'awful', 'horrible', 'bad', 'poor', 'disappointed',
    'frustrated', 'angry', 'upset', 'annoyed', 'unhappy', 'dissatisfied',
    'unacceptable', 'pathetic', 'useless', 'broken', 'failed', 'error',
    'problem', 'issue', 'concern', 'worried', 'stressed', 'confused',
    'late', 'delayed', 'unresponsive', 'rude', 'unprofessional'
}

URGENT_WORDS = {
    'urgent', 'asap', 'immediately', 'critical', 'emergency', 'deadline',
    'important', 'priority', 'escalation', 'complaint'
}

class SentimentEvolutionTracker:
    def __init__(self):
        self.thread_sentiments = defaultdict(list)
        self.contact_sentiments = defaultdict(list)
        self.account_health = {}
        self.alerts = []
    
    def analyze_email(self, email_data):
        """Analyze a single email and track sentiment evolution."""
        thread_id = email_data.get('thread_id', 'unknown')
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        if len(recipients) > 1:
            email_data['reply_all_required'] = True
            email_data['reply_all_note'] = "MANDATORY: Reply to ALL recipients"
        
        # Calculate sentiment score
        text = (subject + ' ' + body).lower()
        words = re.findall(r'\b\w+\b', text)
        
        positive_count = sum(1 for w in words if w in POSITIVE_WORDS)
        negative_count = sum(1 for w in words if w in NEGATIVE_WORDS)
        urgent_count = sum(1 for w in words if w in URGENT_WORDS)
        
        total_sentiment_words = positive_count + negative_count
        if total_sentiment_words > 0:
            sentiment_score = (positive_count - negative_count) / total_sentiment_words
        else:
            sentiment_score = 0.0
        
        # Normalize to -1 to +1 scale
        sentiment_score = max(-1.0, min(1.0, sentiment_score))
        
        # Track thread sentiment
        self.thread_sentiments[thread_id].append({
            'timestamp': timestamp,
            'sender': sender,
            'score': sentiment_score,
            'positive_words': positive_count,
            'negative_words': negative_count,
            'urgent_words': urgent_count,
            'word_count': len(words)
        })
        
        # Track contact sentiment
        self.contact_sentiments[sender].append({
            'timestamp': timestamp,
            'thread_id': thread_id,
            'score': sentiment_score
        })
        
        # Detect trends and generate alerts
        analysis = self._detect_trends(thread_id, sender, sentiment_score)
        
        return {
            'email_id': email_data.get('id'),
            'thread_id': thread_id,
            'sentiment_score': round(sentiment_score, 3),
            'sentiment_label': self._score_to_label(sentiment_score),
            'positive_signals': positive_count,
            'negative_signals': negative_count,
            'urgency_level': urgent_count,
            'reply_all_required': email_data.get('reply_all_required', False),
            'trend_analysis': analysis,
            'recommendations': self._generate_recommendations(analysis),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _detect_trends(self, thread_id, sender, current_score):
        """Detect sentiment trends and potential issues."""
        trends = {}
        
        # Thread trend analysis
        thread_history = self.thread_sentiments.get(thread_id, [])
        if len(thread_history) >= 3:
            recent_scores = [e['score'] for e in thread_history[-5:]]
            earlier_scores = [e['score'] for e in thread_history[:-5]] if len(thread_history) > 5 else recent_scores
            
            recent_avg = sum(recent_scores) / len(recent_scores)
            earlier_avg = sum(earlier_scores) / len(earlier_scores)
            
            trend_delta = recent_avg - earlier_avg
            
            if trend_delta < -0.3:
                trends['thread_status'] = 'DETERIORATING'
                trends['severity'] = 'HIGH'
                self.alerts.append({
                    'type': 'SENTIMENT_DROP',
                    'thread_id': thread_id,
                    'delta': round(trend_delta, 3),
                    'message': f'Thread sentiment dropped by {abs(round(trend_delta, 3))}. Immediate attention needed.'
                })
            elif trend_delta > 0.3:
                trends['thread_status'] = 'IMPROVING'
                trends['severity'] = 'LOW'
            else:
                trends['thread_status'] = 'STABLE'
                trends['severity'] = 'MEDIUM'
            
            trends['trend_delta'] = round(trend_delta, 3)
            trends['recent_avg'] = round(recent_avg, 3)
        
        # Contact health analysis
        contact_history = self.contact_sentiments.get(sender, [])
        if len(contact_history) >= 5:
            last_5 = [e['score'] for e in contact_history[-5:]]
            contact_avg = sum(last_5) / len(last_5)
            
            if contact_avg < -0.4:
                trends['contact_health'] = 'AT_RISK'
                self.alerts.append({
                    'type': 'CONTACT_AT_RISK',
                    'sender': sender,
                    'avg_sentiment': round(contact_avg, 3),
                    'message': f'Contact {sender} showing persistent negative sentiment. Relationship intervention recommended.'
                })
            elif contact_avg > 0.4:
                trends['contact_health'] = 'HEALTHY'
            else:
                trends['contact_health'] = 'NEUTRAL'
            
            trends['contact_avg'] = round(contact_avg, 3)
        
        return trends
    
    def _score_to_label(self, score):
        """Convert numeric score to human-readable label."""
        if score >= 0.6:
            return 'Very Positive'
        elif score >= 0.2:
            return 'Positive'
        elif score >= -0.2:
            return 'Neutral'
        elif score >= -0.6:
            return 'Negative'
        else:
            return 'Very Negative'
    
    def _generate_recommendations(self, analysis):
        """Generate actionable recommendations based on trend analysis."""
        recs = []
        
        if analysis.get('thread_status') == 'DETERIORATING':
            recs.append('URGENT: Schedule a call to address concerns directly')
            recs.append('Offer escalated support or dedicated account manager')
            recs.append('Review recent interactions for missed commitments')
        
        if analysis.get('contact_health') == 'AT_RISK':
            recs.append('Initiate relationship recovery campaign')
            recs.append('Send personalized appreciation message')
            recs.append('Offer exclusive value-add or discount')
        
        if analysis.get('thread_status') == 'IMPROVING':
            recs.append('Continue current approach - it is working well')
            recs.append('Consider upsell opportunity while relationship is strong')
        
        if not recs:
            recs.append('Monitor sentiment trends in next 3 interactions')
        
        return recs
    
    def get_account_health_report(self):
        """Generate comprehensive account health report."""
        report = {
            'generated_at': datetime.now().isoformat(),
            'total_threads_analyzed': len(self.thread_sentiments),
            'total_contacts_tracked': len(self.contact_sentiments),
            'active_alerts': len(self.alerts),
            'alerts': self.alerts[-10:],  # Last 10 alerts
            'thread_summary': {},
            'contact_summary': {}
        }
        
        for thread_id, history in self.thread_sentiments.items():
            scores = [e['score'] for e in history]
            report['thread_summary'][thread_id] = {
                'emails': len(history),
                'avg_sentiment': round(sum(scores) / len(scores), 3),
                'latest_sentiment': round(scores[-1], 3),
                'trend': 'up' if len(scores) >= 2 and scores[-1] > scores[0] else 'down'
            }
        
        for contact, history in self.contact_sentiments.items():
            scores = [e['score'] for e in history]
            report['contact_summary'][contact] = {
                'interactions': len(history),
                'avg_sentiment': round(sum(scores) / len(scores), 3),
                'health_status': 'AT_RISK' if sum(scores)/len(scores) < -0.4 else 'HEALTHY' if sum(scores)/len(scores) > 0.4 else 'NEUTRAL'
            }
        
        return report


# Demo execution
if __name__ == '__main__':
    tracker = SentimentEvolutionTracker()
    
    # Simulate email thread with declining sentiment
    test_emails = [
        {
            'id': 'e001', 'thread_id': 't001',
            'sender': 'client@acme.com',
            'recipients': ['kleber@ziontechgroup.com', 'team@ziontechgroup.com'],
            'subject': 'Great start on the project!',
            'body': 'We are very happy with the initial results. Excellent work team!',
            'timestamp': '2026-05-01T10:00:00'
        },
        {
            'id': 'e002', 'thread_id': 't001',
            'sender': 'client@acme.com',
            'recipients': ['kleber@ziontechgroup.com', 'team@ziontechgroup.com'],
            'subject': 'Re: Project update - some concerns',
            'body': 'We noticed some delays and the latest deliverable has issues. Concerned about timeline.',
            'timestamp': '2026-05-10T14:00:00'
        },
        {
            'id': 'e003', 'thread_id': 't001',
            'sender': 'client@acme.com',
            'recipients': ['kleber@ziontechgroup.com', 'team@ziontechgroup.com', 'manager@ziontechgroup.com'],
            'subject': 'URGENT: Project issues escalating',
            'body': 'This is unacceptable. We are frustrated with the repeated delays and poor quality. Need immediate resolution or we will consider alternatives.',
            'timestamp': '2026-05-20T09:00:00'
        }
    ]
    
    print("=== V1041: AI Sentiment Evolution Tracker ===\n")
    
    for email in test_emails:
        result = tracker.analyze_email(email)
        print(f"Email: {email['subject']}")
        print(f"  Sentiment: {result['sentiment_label']} ({result['sentiment_score']})")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print(f"  Trend: {result['trend_analysis']}")
        print(f"  Recommendations: {result['recommendations']}")
        print()
    
    report = tracker.get_account_health_report()
    print(f"=== Account Health Report ===")
    print(f"Threads analyzed: {report['total_threads_analyzed']}")
    print(f"Active alerts: {report['active_alerts']}")
    for alert in report['alerts']:
        print(f"  ⚠️ {alert['type']}: {alert['message']}")
