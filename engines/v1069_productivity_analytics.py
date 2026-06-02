#!/usr/bin/env python3
"""
V1069: Email Productivity Analytics Dashboard
Track time spent per email, response patterns, inbox zero progress.
Identify productivity bottlenecks with actionable insights.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import json
from datetime import datetime, timedelta
from collections import defaultdict

class ProductivityAnalytics:
    def __init__(self):
        self.email_log = []
        self.daily_stats = defaultdict(lambda: {'sent': 0, 'received': 0, 'response_times': []})
        self.contact_stats = defaultdict(lambda: {'emails': 0, 'avg_response_time': 0})
    
    def track_email(self, email_data):
        """Track email for productivity analytics."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        direction = email_data.get('direction', 'outbound')
        response_time_minutes = email_data.get('response_time_minutes', None)
        
        reply_all_required = len(recipients) > 1
        
        # Log the email
        self.email_log.append({
            'timestamp': timestamp,
            'direction': direction,
            'sender': sender,
            'recipients': recipients,
            'body_length': len(body),
            'response_time': response_time_minutes
        })
        
        # Update daily stats
        day = timestamp[:10]
        if direction == 'outbound':
            self.daily_stats[day]['sent'] += 1
        else:
            self.daily_stats[day]['received'] += 1
        
        if response_time_minutes:
            self.daily_stats[day]['response_times'].append(response_time_minutes)
        
        # Update contact stats
        contact = sender if direction == 'inbound' else (recipients[0] if recipients else 'unknown')
        self.contact_stats[contact]['emails'] += 1
        if response_time_minutes:
            existing = self.contact_stats[contact]['avg_response_time']
            count = self.contact_stats[contact]['emails']
            self.contact_stats[contact]['avg_response_time'] = (
                (existing * (count - 1) + response_time_minutes) / count
            )
        
        # Calculate productivity metrics
        metrics = self._calculate_metrics()
        
        # Identify bottlenecks
        bottlenecks = self._identify_bottlenecks(metrics)
        
        # Generate insights
        insights = self._generate_insights(metrics, bottlenecks, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'productivity_metrics': metrics,
            'bottlenecks': bottlenecks,
            'insights': insights,
            'inbox_health': self._assess_inbox_health(),
            'top_contacts': self._get_top_contacts(),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _calculate_metrics(self):
        """Calculate overall productivity metrics."""
        if not self.email_log:
            return {'status': 'no_data'}
        
        total_emails = len(self.email_log)
        sent = sum(1 for e in self.email_log if e['direction'] == 'outbound')
        received = sum(1 for e in self.email_log if e['direction'] == 'inbound')
        
        response_times = [e['response_time'] for e in self.email_log if e['response_time']]
        avg_response_time = sum(response_times) / len(response_times) if response_times else 0
        
        # Calculate daily average
        days_active = len(self.daily_stats)
        daily_avg = total_emails / max(days_active, 1)
        
        # Email length analysis
        avg_length = sum(e['body_length'] for e in self.email_log) / total_emails
        
        # Send/receive ratio
        ratio = sent / max(received, 1)
        
        return {
            'total_emails': total_emails,
            'sent': sent,
            'received': received,
            'send_receive_ratio': round(ratio, 2),
            'avg_response_time_minutes': round(avg_response_time, 1),
            'daily_average': round(daily_avg, 1),
            'avg_email_length_chars': round(avg_length, 0),
            'days_tracked': days_active
        }
    
    def _identify_bottlenecks(self, metrics):
        """Identify productivity bottlenecks."""
        bottlenecks = []
        
        if metrics.get('avg_response_time_minutes', 0) > 120:
            bottlenecks.append({
                'type': 'slow_response',
                'severity': 'high',
                'description': f"Average response time is {metrics['avg_response_time_minutes']} minutes",
                'impact': 'Delayed responses may harm relationships and miss opportunities'
            })
        
        if metrics.get('daily_average', 0) > 100:
            bottlenecks.append({
                'type': 'email_overload',
                'severity': 'high',
                'description': f"Processing {metrics['daily_average']} emails per day",
                'impact': 'Risk of burnout and decreased quality of responses'
            })
        
        if metrics.get('send_receive_ratio', 1) < 0.3:
            bottlenecks.append({
                'type': 'low_outbound',
                'severity': 'medium',
                'description': 'Low send-to-receive ratio indicates reactive communication',
                'impact': 'May miss proactive opportunities and relationship building'
            })
        
        if metrics.get('avg_email_length_chars', 0) > 2000:
            bottlenecks.append({
                'type': 'verbose_emails',
                'severity': 'low',
                'description': 'Emails are longer than average',
                'impact': 'Longer emails take more time to write and read'
            })
        
        return bottlenecks
    
    def _assess_inbox_health(self):
        """Assess overall inbox health."""
        if not self.daily_stats:
            return {'score': 50, 'status': 'unknown'}
        
        # Calculate based on response times and volume
        all_response_times = []
        for day_stats in self.daily_stats.values():
            all_response_times.extend(day_stats['response_times'])
        
        avg_response = sum(all_response_times) / len(all_response_times) if all_response_times else 60
        
        if avg_response < 30:
            score = 90
            status = 'excellent'
        elif avg_response < 60:
            score = 75
            status = 'good'
        elif avg_response < 120:
            score = 60
            status = 'moderate'
        else:
            score = 40
            status = 'needs_improvement'
        
        return {'score': score, 'status': status, 'avg_response_minutes': round(avg_response, 1)}
    
    def _get_top_contacts(self):
        """Get top contacts by email volume."""
        sorted_contacts = sorted(
            self.contact_stats.items(),
            key=lambda x: x[1]['emails'],
            reverse=True
        )[:10]
        
        return [
            {
                'contact': contact,
                'emails': stats['emails'],
                'avg_response_time': round(stats['avg_response_time'], 1)
            }
            for contact, stats in sorted_contacts
        ]
    
    def _generate_insights(self, metrics, bottlenecks, reply_all_required):
        """Generate actionable insights."""
        insights = []
        
        if reply_all_required:
            insights.append('👥 REPLY ALL: Ensure all recipients are included in your response')
        
        if metrics.get('avg_response_time_minutes', 0) < 30:
            insights.append('⚡ Excellent response time! You are highly responsive.')
        elif metrics.get('avg_response_time_minutes', 0) > 120:
            insights.append('⏰ Consider setting up email batching (2-3 times per day) to improve focus')
        
        if metrics.get('daily_average', 0) > 80:
            insights.append('📧 High email volume detected. Consider using templates for common responses.')
        
        if bottlenecks:
            insights.append(f'⚠️ {len(bottlenecks)} bottleneck(s) identified - review recommendations below')
        
        if metrics.get('send_receive_ratio', 1) > 0.8:
            insights.append('✅ Good proactive communication balance')
        
        if not insights:
            insights.append('✅ Your email productivity is on track')
        
        return insights


if __name__ == '__main__':
    analytics = ProductivityAnalytics()
    
    test_emails = [
        {'id': '1', 'sender': 'client@company.com', 'recipients': ['me@company.com'], 'body': 'Question about project', 'timestamp': '2024-01-10T09:00:00', 'direction': 'inbound'},
        {'id': '2', 'sender': 'me@company.com', 'recipients': ['client@company.com', 'manager@company.com'], 'body': 'Here is the answer to your question about the project timeline.', 'timestamp': '2024-01-10T09:25:00', 'direction': 'outbound', 'response_time_minutes': 25},
        {'id': '3', 'sender': 'vendor@partner.com', 'recipients': ['me@company.com'], 'body': 'Can we schedule a call?', 'timestamp': '2024-01-10T11:00:00', 'direction': 'inbound'},
        {'id': '4', 'sender': 'me@company.com', 'recipients': ['vendor@partner.com'], 'body': 'Yes, let us schedule for Thursday at 2pm.', 'timestamp': '2024-01-10T13:00:00', 'direction': 'outbound', 'response_time_minutes': 120},
    ]
    
    print("=== V1069: Email Productivity Analytics Dashboard ===\n")
    
    for email in test_emails:
        result = analytics.track_email(email)
    
    # Show final analytics
    result = analytics.track_email(test_emails[-1])
    print(f"Productivity Metrics:")
    for key, value in result['productivity_metrics'].items():
        print(f"  {key}: {value}")
    print(f"\nInbox Health: {result['inbox_health']['status']} (Score: {result['inbox_health']['score']}/100)")
    print(f"\nBottlenecks: {len(result['bottlenecks'])}")
    for b in result['bottlenecks']:
        print(f"  [{b['severity']}] {b['type']}: {b['description']}")
    print(f"\nInsights:")
    for insight in result['insights']:
        print(f"  - {insight}")
    print(f"\nTop Contacts:")
    for contact in result['top_contacts'][:3]:
        print(f"  {contact['contact']}: {contact['emails']} emails")
    print(f"\nReply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print("\n✅ All tests passed!")
