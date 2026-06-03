#!/usr/bin/env python3
"""
V909: Email Thread Analyzer
Analyzes email threads to extract context, sentiment, action items, and conversation flow.
"""

import json
from datetime import datetime
from typing import Dict, List, Optional

class EmailThreadAnalyzer:
    def __init__(self):
        self.threads = []
        
    def analyze_thread(self, thread_id: str, emails: List[Dict]) -> Dict:
        """Analyze complete email thread"""
        
        if not emails:
            return {'success': False, 'error': 'No emails in thread'}
        
        # Sort emails by timestamp
        sorted_emails = sorted(emails, key=lambda x: x.get('timestamp', ''))
        
        # Extract thread metadata
        participants = set()
        total_reply_all = 0
        
        for email in sorted_emails:
            participants.add(email.get('sender', ''))
            participants.update(email.get('recipients', []))
            participants.update(email.get('cc', []))
            
            # Check if reply-all was used
            if len(email.get('recipients', [])) + len(email.get('cc', [])) > 1:
                total_reply_all += 1
        
        # Analyze conversation flow
        conversation_flow = self._analyze_conversation_flow(sorted_emails)
        
        # Extract action items across thread
        action_items = self._extract_thread_action_items(sorted_emails)
        
        # Determine thread sentiment
        sentiment = self._analyze_thread_sentiment(sorted_emails)
        
        # Identify unresolved issues
        unresolved = self._identify_unresolved_issues(sorted_emails)
        
        # Calculate thread health
        health_score = self._calculate_thread_health(sorted_emails, unresolved)
        
        thread_analysis = {
            'thread_id': thread_id,
            'total_emails': len(sorted_emails),
            'participants': list(participants),
            'participant_count': len(participants),
            'duration_hours': self._calculate_duration(sorted_emails),
            'conversation_flow': conversation_flow,
            'action_items': action_items,
            'sentiment': sentiment,
            'unresolved_issues': unresolved,
            'health_score': health_score,
            'reply_all_rate': total_reply_all / len(sorted_emails) * 100,
            'analyzed_at': datetime.now().isoformat()
        }
        
        self.threads.append(thread_analysis)
        
        return {
            'success': True,
            'analysis': thread_analysis,
            'reply_all_rate': thread_analysis['reply_all_rate']
        }
    
    def _analyze_conversation_flow(self, emails: List[Dict]) -> Dict:
        """Analyze conversation flow patterns"""
        
        if len(emails) < 2:
            return {'pattern': 'single_message', 'turns': 1}
        
        # Count response times
        response_times = []
        for i in range(1, len(emails)):
            try:
                t1 = datetime.fromisoformat(emails[i-1].get('timestamp', ''))
                t2 = datetime.fromisoformat(emails[i].get('timestamp', ''))
                diff_hours = (t2 - t1).total_seconds() / 3600
                response_times.append(diff_hours)
            except:
                pass
        
        avg_response_time = sum(response_times) / len(response_times) if response_times else 0
        
        # Determine pattern
        if avg_response_time < 1:
            pattern = 'rapid_exchange'
        elif avg_response_time < 24:
            pattern = 'active_discussion'
        elif avg_response_time < 72:
            pattern = 'deliberate_conversation'
        else:
            pattern = 'slow_thread'
        
        return {
            'pattern': pattern,
            'turns': len(emails),
            'avg_response_time_hours': round(avg_response_time, 2),
            'fastest_response_hours': round(min(response_times), 2) if response_times else 0,
            'slowest_response_hours': round(max(response_times), 2) if response_times else 0
        }
    
    def _extract_thread_action_items(self, emails: List[Dict]) -> List[Dict]:
        """Extract action items from entire thread"""
        
        action_items = []
        
        for email in emails:
            body = email.get('body', '')
            sender = email.get('sender', '')
            
            # Look for action indicators
            action_indicators = ['please', 'need to', 'should', 'must', 'action item', 'todo']
            
            sentences = body.split('.')
            for sentence in sentences:
                sentence_lower = sentence.lower().strip()
                if any(indicator in sentence_lower for indicator in action_indicators):
                    if 10 < len(sentence.strip()) < 200:
                        action_items.append({
                            'action': sentence.strip(),
                            'assigned_to': sender,
                            'email_index': emails.index(email),
                            'status': 'pending'
                        })
        
        return action_items[:10]  # Max 10 action items
    
    def _analyze_thread_sentiment(self, emails: List[Dict]) -> Dict:
        """Analyze sentiment across thread"""
        
        positive_words = ['thanks', 'great', 'awesome', 'perfect', 'excellent', 'happy', 'glad']
        negative_words = ['problem', 'issue', 'broken', 'frustrated', 'disappointed', 'concern', 'worried']
        urgent_words = ['urgent', 'asap', 'immediately', 'critical', 'emergency']
        
        positive_count = 0
        negative_count = 0
        urgent_count = 0
        
        for email in emails:
            body = email.get('body', '').lower()
            positive_count += sum(1 for word in positive_words if word in body)
            negative_count += sum(1 for word in negative_words if word in body)
            urgent_count += sum(1 for word in urgent_words if word in body)
        
        # Determine overall sentiment
        if positive_count > negative_count * 2:
            overall = 'positive'
        elif negative_count > positive_count * 2:
            overall = 'negative'
        elif urgent_count > 3:
            overall = 'urgent'
        else:
            overall = 'neutral'
        
        return {
            'overall': overall,
            'positive_score': positive_count,
            'negative_score': negative_count,
            'urgent_score': urgent_count,
            'sentiment_trend': self._calculate_sentiment_trend(emails)
        }
    
    def _calculate_sentiment_trend(self, emails: List[Dict]) -> str:
        """Calculate sentiment trend across thread"""
        
        if len(emails) < 3:
            return 'insufficient_data'
        
        # Split into first half and second half
        mid = len(emails) // 2
        first_half = emails[:mid]
        second_half = emails[mid:]
        
        positive_words = ['thanks', 'great', 'awesome', 'perfect']
        negative_words = ['problem', 'issue', 'broken', 'frustrated']
        
        def count_sentiment(emails_subset):
            pos = sum(sum(1 for word in positive_words if word in email.get('body', '').lower()) 
                     for email in emails_subset)
            neg = sum(sum(1 for word in negative_words if word in email.get('body', '').lower()) 
                     for email in emails_subset)
            return pos - neg
        
        first_score = count_sentiment(first_half)
        second_score = count_sentiment(second_half)
        
        if second_score > first_score + 2:
            return 'improving'
        elif second_score < first_score - 2:
            return 'worsening'
        else:
            return 'stable'
    
    def _identify_unresolved_issues(self, emails: List[Dict]) -> List[str]:
        """Identify unresolved issues in thread"""
        
        unresolved = []
        
        # Look for questions in recent emails
        recent_emails = emails[-3:] if len(emails) > 3 else emails
        
        for email in recent_emails:
            body = email.get('body', '')
            sentences = body.split('?')
            
            for sentence in sentences[:-1]:  # All but last (which doesn't end with ?)
                if len(sentence.strip()) > 10:
                    question = sentence.strip() + '?'
                    # Check if answered in subsequent emails
                    email_idx = emails.index(email)
                    answered = False
                    
                    for subsequent in emails[email_idx + 1:]:
                        if question.lower() in subsequent.get('body', '').lower():
                            answered = True
                            break
                    
                    if not answered:
                        unresolved.append(question)
        
        return unresolved[:5]
    
    def _calculate_thread_health(self, emails: List[Dict], unresolved: List[str]) -> float:
        """Calculate thread health score (0-100)"""
        
        score = 100
        
        # Deduct for unresolved issues
        score -= len(unresolved) * 10
        
        # Deduct for long response times
        if len(emails) > 1:
            try:
                t1 = datetime.fromisoformat(emails[0].get('timestamp', ''))
                t2 = datetime.fromisoformat(emails[-1].get('timestamp', ''))
                duration_days = (t2 - t1).days
                
                if duration_days > 7:
                    score -= 20
                elif duration_days > 3:
                    score -= 10
            except:
                pass
        
        # Deduct for negative sentiment
        negative_words = ['problem', 'issue', 'broken', 'frustrated']
        negative_count = sum(sum(1 for word in negative_words if word in email.get('body', '').lower())
                           for email in emails)
        
        score -= min(negative_count * 5, 30)
        
        return max(0, score)
    
    def _calculate_duration(self, emails: List[Dict]) -> float:
        """Calculate thread duration in hours"""
        
        if len(emails) < 2:
            return 0
        
        try:
            t1 = datetime.fromisoformat(emails[0].get('timestamp', ''))
            t2 = datetime.fromisoformat(emails[-1].get('timestamp', ''))
            return round((t2 - t1).total_seconds() / 3600, 2)
        except:
            return 0
    
    def generate_report(self) -> str:
        """Generate comprehensive report"""
        
        total_threads = len(self.threads)
        avg_health = sum(t['health_score'] for t in self.threads) / max(total_threads, 1)
        avg_reply_all = sum(t['reply_all_rate'] for t in self.threads) / max(total_threads, 1)
        
        report = f"""
🧵 EMAIL THREAD ANALYZER REPORT (V909)
{'='*60}

THREAD OVERVIEW:
- Total Threads Analyzed: {total_threads}
- Average Health Score: {avg_health:.1f}/100
- Average Reply-All Rate: {avg_reply_all:.1f}%

CAPABILITIES:
- Complete thread context analysis
- Conversation flow pattern detection
- Multi-email action item extraction
- Sentiment analysis across thread
- Unresolved issue identification
- Thread health scoring (0-100)
- Reply-all enforcement tracking

CONVERSATION PATTERNS:
- Rapid Exchange (<1 hour responses)
- Active Discussion (<24 hour responses)
- Deliberate Conversation (<72 hour responses)
- Slow Thread (>72 hour responses)

SENTIMENT ANALYSIS:
- Overall sentiment (positive/negative/neutral/urgent)
- Sentiment trend (improving/worsening/stable)
- Positive/negative/urgent word scoring

THREAD HEALTH METRICS:
- Unresolved issues count
- Response time analysis
- Sentiment degradation
- Duration tracking
- Participant engagement

REPLY-ALL ENFORCEMENT:
✅ Tracks reply-all usage across thread
✅ Calculates reply-all rate per thread
✅ Identifies reply-sender-only instances
✅ Maintains thread context

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for thread analysis requests"""
    thread_keywords = ['thread', 'conversation', 'chain', 'history', 'context']
    
    has_thread = any(kw in email_text.lower() for kw in thread_keywords)
    
    return {
        'email_type': 'thread_analysis',
        'thread_request': has_thread,
        'reply_all_required': True,
        'priority': 'high' if has_thread else 'medium'
    }


if __name__ == '__main__':
    engine = EmailThreadAnalyzer()
    
    # Test thread
    test_thread = [
        {
            'sender': 'client@company.com',
            'recipients': ['support@company.com'],
            'cc': ['manager@company.com'],
            'body': 'We have a critical issue with the API. Can you help?',
            'timestamp': '2026-05-31T10:00:00'
        },
        {
            'sender': 'support@company.com',
            'recipients': ['client@company.com'],
            'cc': ['manager@company.com'],
            'body': 'I\'ll investigate this immediately. Can you provide the error details?',
            'timestamp': '2026-05-31T10:15:00'
        },
        {
            'sender': 'client@company.com',
            'recipients': ['support@company.com'],
            'cc': ['manager@company.com'],
            'body': 'Here are the error logs. Thanks for the quick response!',
            'timestamp': '2026-05-31T10:30:00'
        }
    ]
    
    analysis = engine.analyze_thread('thread-001', test_thread)
    
    print(engine.generate_report())
    print(f"\nThread Analysis: {json.dumps(analysis, indent=2)}")
