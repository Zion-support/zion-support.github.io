"""
Email Intelligence V333 - Performance Benchmarking
Compare email metrics against industry standards, identify improvement opportunities,
and provide personalized recommendations for better engagement.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json


class EmailPerformanceBenchmarking:
    """
    V333: Performance benchmarking with industry comparisons, gap analysis,
    and personalized improvement recommendations.
    """
    
    VERSION = "V333"
    ENGINE_NAME = "Performance Benchmarking"
    
    def __init__(self):
        self.performance_metrics = {}
        self.industry_benchmarks = {
            'response_time_minutes': {
                'excellent': 30,
                'good': 60,
                'average': 120,
                'poor': 240
            },
            'email_length_words': {
                'concise': 100,
                'optimal': 200,
                'detailed': 400,
                'verbose': 600
            },
            'open_rate_percent': {
                'excellent': 40,
                'good': 30,
                'average': 20,
                'poor': 10
            },
            'reply_rate_percent': {
                'excellent': 50,
                'good': 35,
                'average': 20,
                'poor': 10
            }
        }
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email performance metrics case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Calculate metrics
        metrics = self._calculate_metrics(email_data)
        
        # Benchmark against industry standards
        benchmarks = self._benchmark_metrics(metrics)
        
        # Identify gaps
        gaps = self._identify_gaps(metrics, benchmarks)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(metrics, gaps)
        
        # Performance score
        performance_score = self._calculate_performance_score(metrics, benchmarks)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'metrics': metrics,
            'benchmarks': benchmarks,
            'gaps': gaps,
            'performance_score': performance_score,
            'recommendations': recommendations
        }
        
        # Track performance
        self._track_performance(sender, analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate performance-aware response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate response
        response_body = self._generate_performance_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'performance_score': analysis['performance_score'],
            'metrics_tracked': len(analysis['metrics']),
            'improvement_areas': len(analysis['gaps']),
            'reply_all_enforced': True
        }
        
        return response
    
    def _calculate_metrics(self, email_data: Dict) -> Dict:
        """Calculate email performance metrics"""
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        # Word count
        word_count = len(content.split())
        
        # Reading time (200 wpm)
        reading_time_minutes = word_count / 200
        
        # Subject line metrics
        subject_length = len(subject)
        subject_words = len(subject.split())
        
        # Complexity (simple heuristic)
        sentences = content.split('.')
        avg_sentence_length = word_count / len(sentences) if sentences else 0
        
        # Engagement indicators
        questions = content.count('?')
        calls_to_action = sum(1 for word in ['please', 'review', 'confirm', 'reply'] if word in content.lower())
        
        return {
            'word_count': word_count,
            'reading_time_minutes': round(reading_time_minutes, 2),
            'subject_length': subject_length,
            'subject_words': subject_words,
            'avg_sentence_length': round(avg_sentence_length, 2),
            'questions_asked': questions,
            'calls_to_action': calls_to_action,
            'complexity_score': round(avg_sentence_length / 20, 2)  # Normalized
        }
    
    def _benchmark_metrics(self, metrics: Dict) -> Dict:
        """Benchmark metrics against industry standards"""
        benchmarks = {}
        
        # Word count benchmark
        word_count = metrics['word_count']
        if word_count <= 100:
            benchmarks['word_count'] = 'concise'
        elif word_count <= 200:
            benchmarks['word_count'] = 'optimal'
        elif word_count <= 400:
            benchmarks['word_count'] = 'detailed'
        else:
            benchmarks['word_count'] = 'verbose'
        
        # Subject line benchmark
        subject_length = metrics['subject_length']
        if subject_length <= 40:
            benchmarks['subject_length'] = 'optimal'
        elif subject_length <= 60:
            benchmarks['subject_length'] = 'good'
        else:
            benchmarks['subject_length'] = 'too_long'
        
        # Complexity benchmark
        complexity = metrics['complexity_score']
        if complexity <= 1.0:
            benchmarks['complexity'] = 'easy_to_read'
        elif complexity <= 1.5:
            benchmarks['complexity'] = 'moderate'
        else:
            benchmarks['complexity'] = 'complex'
        
        # Engagement benchmark
        engagement_score = metrics['questions_asked'] + metrics['calls_to_action']
        if engagement_score >= 3:
            benchmarks['engagement'] = 'high'
        elif engagement_score >= 1:
            benchmarks['engagement'] = 'medium'
        else:
            benchmarks['engagement'] = 'low'
        
        return benchmarks
    
    def _identify_gaps(self, metrics: Dict, benchmarks: Dict) -> List[Dict]:
        """Identify performance gaps"""
        gaps = []
        
        # Word count gap
        if benchmarks['word_count'] == 'verbose':
            gaps.append({
                'area': 'email_length',
                'issue': 'Email is too long',
                'current': metrics['word_count'],
                'target': 200,
                'severity': 'medium'
            })
        elif benchmarks['word_count'] == 'concise':
            gaps.append({
                'area': 'email_length',
                'issue': 'Email may be too brief',
                'current': metrics['word_count'],
                'target': 150,
                'severity': 'low'
            })
        
        # Subject line gap
        if benchmarks['subject_length'] == 'too_long':
            gaps.append({
                'area': 'subject_line',
                'issue': 'Subject line is too long',
                'current': metrics['subject_length'],
                'target': 50,
                'severity': 'medium'
            })
        
        # Complexity gap
        if benchmarks['complexity'] == 'complex':
            gaps.append({
                'area': 'readability',
                'issue': 'Email is too complex',
                'current': metrics['complexity_score'],
                'target': 1.0,
                'severity': 'medium'
            })
        
        # Engagement gap
        if benchmarks['engagement'] == 'low':
            gaps.append({
                'area': 'engagement',
                'issue': 'Low engagement indicators',
                'current': metrics['questions_asked'] + metrics['calls_to_action'],
                'target': 2,
                'severity': 'high'
            })
        
        return gaps
    
    def _generate_recommendations(self, metrics: Dict, gaps: List[Dict]) -> List[str]:
        """Generate improvement recommendations"""
        recommendations = []
        
        for gap in gaps:
            if gap['area'] == 'email_length':
                if gap['current'] > gap['target']:
                    recommendations.append(f"Shorten email to around {gap['target']} words for better engagement")
                else:
                    recommendations.append("Add more detail to provide complete information")
            
            elif gap['area'] == 'subject_line':
                recommendations.append("Shorten subject line to under 50 characters for better open rates")
            
            elif gap['area'] == 'readability':
                recommendations.append("Use shorter sentences and simpler language for better readability")
            
            elif gap['area'] == 'engagement':
                recommendations.append("Add questions and clear calls-to-action to increase engagement")
        
        # General recommendations
        if metrics['questions_asked'] == 0:
            recommendations.append("Consider adding questions to encourage responses")
        
        if metrics['calls_to_action'] == 0:
            recommendations.append("Include clear calls-to-action to guide next steps")
        
        return recommendations
    
    def _calculate_performance_score(self, metrics: Dict, benchmarks: Dict) -> float:
        """Calculate overall performance score (0-100)"""
        score = 70  # Base score
        
        # Word count scoring
        if benchmarks['word_count'] == 'optimal':
            score += 10
        elif benchmarks['word_count'] in ['concise', 'detailed']:
            score += 5
        
        # Subject line scoring
        if benchmarks['subject_length'] == 'optimal':
            score += 10
        elif benchmarks['subject_length'] == 'good':
            score += 5
        
        # Complexity scoring
        if benchmarks['complexity'] == 'easy_to_read':
            score += 10
        elif benchmarks['complexity'] == 'moderate':
            score += 5
        
        # Engagement scoring
        if benchmarks['engagement'] == 'high':
            score += 10
        elif benchmarks['engagement'] == 'medium':
            score += 5
        
        return min(100, max(0, score))
    
    def _track_performance(self, sender: str, analysis: Dict):
        """Track performance over time"""
        if sender not in self.performance_metrics:
            self.performance_metrics[sender] = []
        
        self.performance_metrics[sender].append({
            'timestamp': analysis['timestamp'],
            'performance_score': analysis['performance_score'],
            'metrics': analysis['metrics'],
            'gaps': len(analysis['gaps'])
        })
        
        # Keep only last 100 entries
        if len(self.performance_metrics[sender]) > 100:
            self.performance_metrics[sender] = self.performance_metrics[sender][-100:]
    
    def _generate_performance_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate performance-aware response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        score = analysis['performance_score']
        gaps_count = len(analysis['gaps'])
        
        if score >= 85:
            opening = f"Dear {sender_name},\n\nExcellent email! Your communication is clear and effective."
        elif score >= 70:
            opening = f"Hello {sender_name},\n\nThank you for your well-structured email."
        else:
            opening = f"Hi {sender_name},\n\nThank you for your email."
        
        response = f"""{opening}

I've analyzed your email performance and here are the insights:

Performance Score: {score}/100
Metrics Tracked: {len(analysis['metrics'])}
Improvement Areas: {gaps_count}

Key Metrics:
- Word Count: {analysis['metrics']['word_count']} words
- Reading Time: {analysis['metrics']['reading_time_minutes']} minutes
- Engagement Indicators: {analysis['metrics']['questions_asked'] + analysis['metrics']['calls_to_action']}

I'll respond to your message shortly and incorporate these insights for better communication.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with performance benchmarking.
Score: {score}/100 | Gaps: {gaps_count}
"""
        
        return response
    
    def _enforce_reply_all(self, to_recipients: List, cc_recipients: List, sender: str) -> List:
        """ENFORCE REPLY-ALL: Always include all original recipients."""
        all_recipients = set()
        
        if isinstance(to_recipients, list):
            all_recipients.update(to_recipients)
        elif to_recipients:
            all_recipients.add(to_recipients)
        
        if isinstance(cc_recipients, list):
            all_recipients.update(cc_recipients)
        elif cc_recipients:
            all_recipients.add(cc_recipients)
        
        all_recipients.discard(sender)
        
        if not all_recipients:
            all_recipients.add(sender)
        
        return list(all_recipients)
    
    def get_performance_stats(self) -> Dict:
        """Get performance statistics"""
        total_tracked = sum(len(metrics) for metrics in self.performance_metrics.values())
        
        if total_tracked == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No performance data tracked yet'
            }
        
        # Calculate average performance
        all_scores = []
        for metrics_list in self.performance_metrics.values():
            for entry in metrics_list:
                all_scores.append(entry['performance_score'])
        
        avg_score = sum(all_scores) / len(all_scores) if all_scores else 0
        
        # Track improvement
        if len(all_scores) >= 2:
            improvement = all_scores[-1] - all_scores[0]
        else:
            improvement = 0
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_emails_tracked': total_tracked,
            'average_performance_score': round(avg_score, 2),
            'improvement_trend': round(improvement, 2),
            'senders_tracked': len(self.performance_metrics),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailPerformanceBenchmarking()
    
    test_email = {
        'from': 'sales.manager@company.com',
        'to': ['team@company.com'],
        'cc': ['director@company.com', 'marketing@company.com'],
        'subject': 'Q4 Sales Strategy - Action Required',
        'body': 'Team, please review the attached Q4 sales strategy document. We need to increase our conversion rate by 20%. Can you provide feedback by Friday? Let me know if you have any questions.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_performance_stats()
    print("\n📊 Performance Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Performance Benchmarking: ENABLED")
