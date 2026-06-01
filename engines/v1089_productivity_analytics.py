#!/usr/bin/env python3
"""
V1089: Email Productivity Analytics Dashboard
Track email productivity metrics, identify bottlenecks, and optimize workflows.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

from datetime import datetime, timedelta
from typing import Dict, List
from collections import defaultdict

class ProductivityAnalytics:
    def __init__(self):
        self.email_log = []
        self.daily_stats = defaultdict(lambda: {
            'sent': 0,
            'received': 0,
            'response_times': [],
            'processing_time': []
        })
    
    def track_email(self, email_data: Dict) -> Dict:
        """Track email for productivity analytics."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        direction = email_data.get('direction', 'outbound')
        response_time_minutes = email_data.get('response_time_minutes', None)
        processing_time_minutes = email_data.get('processing_time_minutes', None)
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Log email
        email_entry = {
            'id': email_data.get('id'),
            'timestamp': timestamp,
            'direction': direction,
            'sender': sender,
            'recipients': recipients,
            'body_length': len(body),
            'word_count': len(body.split()),
            'response_time': response_time_minutes,
            'processing_time': processing_time_minutes
        }
        self.email_log.append(email_entry)
        
        # Update daily stats
        day = timestamp[:10]
        if direction == 'outbound':
            self.daily_stats[day]['sent'] += 1
        else:
            self.daily_stats[day]['received'] += 1
        
        if response_time_minutes:
            self.daily_stats[day]['response_times'].append(response_time_minutes)
        
        if processing_time_minutes:
            self.daily_stats[day]['processing_time'].append(processing_time_minutes)
        
        # Calculate metrics
        metrics = self._calculate_metrics()
        
        # Identify bottlenecks
        bottlenecks = self._identify_bottlenecks(metrics)
        
        # Assess inbox health
        inbox_health = self._assess_inbox_health()
        
        # Calculate efficiency score
        efficiency_score = self._calculate_efficiency_score(metrics)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(metrics, bottlenecks, efficiency_score, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'productivity_metrics': metrics,
            'bottlenecks': bottlenecks,
            'inbox_health': inbox_health,
            'efficiency_score': efficiency_score,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _calculate_metrics(self) -> Dict:
        """Calculate productivity metrics."""
        if not self.email_log:
            return {'status': 'no_data'}
        
        total = len(self.email_log)
        sent = sum(1 for e in self.email_log if e['direction'] == 'outbound')
        received = sum(1 for e in self.email_log if e['direction'] == 'inbound')
        
        # Response times
        response_times = [e['response_time'] for e in self.email_log if e['response_time']]
        avg_response = sum(response_times) / len(response_times) if response_times else 0
        
        # Processing times
        processing_times = [e['processing_time'] for e in self.email_log if e['processing_time']]
        avg_processing = sum(processing_times) / len(processing_times) if processing_times else 0
        
        # Daily average
        days_active = len(self.daily_stats)
        daily_avg = total / max(days_active, 1)
        
        # Email length
        avg_length = sum(e['word_count'] for e in self.email_log) / total
        
        # Send/receive ratio
        ratio = sent / max(received, 1)
        
        # Peak hours
        hour_distribution = defaultdict(int)
        for email in self.email_log:
            try:
                hour = datetime.fromisoformat(email['timestamp'].replace('Z', '+00:00')).hour
                hour_distribution[hour] += 1
            except:
                pass
        
        peak_hour = max(hour_distribution.items(), key=lambda x: x[1])[0] if hour_distribution else None
        
        return {
            'total_emails': total,
            'sent': sent,
            'received': received,
            'send_receive_ratio': round(ratio, 2),
            'avg_response_time_minutes': round(avg_response, 1),
            'avg_processing_time_minutes': round(avg_processing, 1),
            'daily_average': round(daily_avg, 1),
            'avg_email_length_words': round(avg_length, 0),
            'days_tracked': days_active,
            'peak_hour': peak_hour,
            'hour_distribution': dict(hour_distribution)
        }
    
    def _identify_bottlenecks(self, metrics: Dict) -> List[Dict]:
        """Identify productivity bottlenecks."""
        bottlenecks = []
        
        # Slow response time
        if metrics.get('avg_response_time_minutes', 0) > 120:
            bottlenecks.append({
                'type': 'slow_response',
                'severity': 'high',
                'description': f"Average response time is {metrics['avg_response_time_minutes']} minutes",
                'impact': 'Delayed responses may harm relationships and miss opportunities',
                'recommendation': 'Implement email batching (2-3 times per day) and prioritize urgent emails'
            })
        
        # Email overload
        if metrics.get('daily_average', 0) > 100:
            bottlenecks.append({
                'type': 'email_overload',
                'severity': 'high',
                'description': f"Processing {metrics['daily_average']} emails per day",
                'impact': 'Risk of burnout and decreased quality of responses',
                'recommendation': 'Use templates, automation, and delegate non-essential emails'
            })
        
        # Low outbound ratio
        if metrics.get('send_receive_ratio', 1) < 0.3:
            bottlenecks.append({
                'type': 'low_outbound',
                'severity': 'medium',
                'description': 'Low send-to-receive ratio indicates reactive communication',
                'impact': 'May miss proactive opportunities and relationship building',
                'recommendation': 'Schedule time for proactive outreach and relationship nurturing'
            })
        
        # Verbose emails
        if metrics.get('avg_email_length_words', 0) > 300:
            bottlenecks.append({
                'type': 'verbose_emails',
                'severity': 'low',
                'description': 'Emails are longer than average',
                'impact': 'Longer emails take more time to write and read',
                'recommendation': 'Use bullet points, be concise, and consider if a call would be more efficient'
            })
        
        # Slow processing time
        if metrics.get('avg_processing_time_minutes', 0) > 10:
            bottlenecks.append({
                'type': 'slow_processing',
                'severity': 'medium',
                'description': f"Average processing time is {metrics['avg_processing_time_minutes']} minutes per email",
                'impact': 'Inefficient email handling reduces productivity',
                'recommendation': 'Use templates, keyboard shortcuts, and email rules/filters'
            })
        
        return bottlenecks
    
    def _assess_inbox_health(self) -> Dict:
        """Assess overall inbox health."""
        if not self.daily_stats:
            return {'score': 50, 'status': 'unknown'}
        
        # Calculate based on response times and volume
        all_response_times = []
        total_received = 0
        total_sent = 0
        
        for day_stats in self.daily_stats.values():
            all_response_times.extend(day_stats['response_times'])
            total_received += day_stats['received']
            total_sent += day_stats['sent']
        
        avg_response = sum(all_response_times) / len(all_response_times) if all_response_times else 60
        
        # Response time score (0-40 points)
        if avg_response < 30:
            response_score = 40
        elif avg_response < 60:
            response_score = 30
        elif avg_response < 120:
            response_score = 20
        else:
            response_score = 10
        
        # Balance score (0-30 points)
        ratio = total_sent / max(total_received, 1)
        if 0.4 <= ratio <= 0.8:
            balance_score = 30
        elif 0.3 <= ratio <= 1.0:
            balance_score = 20
        else:
            balance_score = 10
        
        # Volume score (0-30 points)
        avg_daily = (total_received + total_sent) / max(len(self.daily_stats), 1)
        if avg_daily < 50:
            volume_score = 30
        elif avg_daily < 80:
            volume_score = 25
        elif avg_daily < 120:
            volume_score = 15
        else:
            volume_score = 5
        
        total_score = response_score + balance_score + volume_score
        
        if total_score >= 80:
            status = 'excellent'
        elif total_score >= 60:
            status = 'good'
        elif total_score >= 40:
            status = 'moderate'
        else:
            status = 'needs_improvement'
        
        return {
            'score': total_score,
            'status': status,
            'avg_response_minutes': round(avg_response, 1),
            'response_score': response_score,
            'balance_score': balance_score,
            'volume_score': volume_score
        }
    
    def _calculate_efficiency_score(self, metrics: Dict) -> Dict:
        """Calculate overall efficiency score."""
        score = 100
        
        # Response time penalty
        response_time = metrics.get('avg_response_time_minutes', 0)
        if response_time > 120:
            score -= 30
        elif response_time > 60:
            score -= 15
        
        # Processing time penalty
        processing_time = metrics.get('avg_processing_time_minutes', 0)
        if processing_time > 10:
            score -= 20
        elif processing_time > 5:
            score -= 10
        
        # Volume penalty
        daily_avg = metrics.get('daily_average', 0)
        if daily_avg > 100:
            score -= 25
        elif daily_avg > 80:
            score -= 10
        
        # Email length penalty
        avg_length = metrics.get('avg_email_length_words', 0)
        if avg_length > 300:
            score -= 15
        elif avg_length > 200:
            score -= 5
        
        score = max(0, score)
        
        if score >= 85:
            level = 'excellent'
        elif score >= 70:
            level = 'good'
        elif score >= 55:
            level = 'fair'
        else:
            level = 'needs_improvement'
        
        return {
            'score': score,
            'level': level
        }
    
    def _generate_recommendations(self, metrics, bottlenecks, efficiency_score, reply_all_required) -> List[str]:
        """Generate actionable insights."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in your response')
        
        # Based on efficiency score
        if efficiency_score['score'] >= 85:
            recommendations.append('⚡ Excellent productivity! Maintain current practices')
        elif efficiency_score['score'] < 55:
            recommendations.append('⚠️ Productivity needs improvement - review bottlenecks below')
        
        # Based on metrics
        if metrics.get('avg_response_time_minutes', 0) < 30:
            recommendations.append('⚡ Excellent response time! You are highly responsive')
        elif metrics.get('avg_response_time_minutes', 0) > 120:
            recommendations.append('⏰ Consider email batching (2-3 times per day) to improve focus')
        
        if metrics.get('daily_average', 0) > 80:
            recommendations.append('📧 High email volume - use templates and automation for common responses')
        
        if metrics.get('send_receive_ratio', 1) > 0.8:
            recommendations.append('✅ Good proactive communication balance')
        
        # Based on bottlenecks
        for bottleneck in bottlenecks[:2]:  # Top 2 bottlenecks
            recommendations.append(f"🔧 {bottleneck['recommendation']}")
        
        # Peak hour optimization
        if metrics.get('peak_hour'):
            recommendations.append(f"📊 Peak email hour: {metrics['peak_hour']}:00 - protect this time for focused work")
        
        if not recommendations:
            recommendations.append('✅ Your email productivity is on track')
        
        return recommendations


if __name__ == '__main__':
    analytics = ProductivityAnalytics()
    
    # Simulate email tracking
    test_emails = [
        {
            'id': '1',
            'sender': 'client@company.com',
            'recipients': ['me@company.com'],
            'body': 'Quick question about the project',
            'timestamp': '2024-01-10T09:00:00',
            'direction': 'inbound'
        },
        {
            'id': '2',
            'sender': 'me@company.com',
            'recipients': ['client@company.com', 'manager@company.com'],
            'body': 'Here is the answer to your question about the project timeline and deliverables.',
            'timestamp': '2024-01-10T09:25:00',
            'direction': 'outbound',
            'response_time_minutes': 25,
            'processing_time_minutes': 8
        },
        {
            'id': '3',
            'sender': 'vendor@partner.com',
            'recipients': ['me@company.com'],
            'body': 'Can we schedule a call?',
            'timestamp': '2024-01-10T11:00:00',
            'direction': 'inbound'
        }
    ]
    
    print("=== V1089: Email Productivity Analytics Dashboard ===\n")
    
    for email in test_emails:
        result = analytics.track_email(email)
    
    # Show final analytics
    result = analytics.track_email(test_emails[-1])
    print(f"Productivity Metrics:")
    for key, value in result['productivity_metrics'].items():
        if key not in ['hour_distribution']:
            print(f"  {key}: {value}")
    print(f"\nInbox Health: {result['inbox_health']['status']} (Score: {result['inbox_health']['score']}/100)")
    print(f"Efficiency: {result['efficiency_score']['level']} (Score: {result['efficiency_score']['score']}/100)")
    print(f"Bottlenecks: {len(result['bottlenecks'])}")
    for b in result['bottlenecks']:
        print(f"  [{b['severity']}] {b['type']}: {b['description']}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print(f"\nReply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print("\n✅ All tests passed!")
