#!/usr/bin/env python3
"""
V955: Email Performance Analytics Dashboard
Comprehensive analytics tracking email productivity metrics, response times,
engagement rates, team performance, and ROI calculations.
"""

import re
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict

class PerformanceAnalytics:
    def __init__(self):
        self.metrics = {
            'emails_sent': 0,
            'emails_received': 0,
            'response_times': [],
            'engagement_scores': [],
            'productivity_scores': []
        }
        
    def analyze_email_batch(self, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Analyze batch of emails for performance metrics."""
        if not emails:
            return {'error': 'No emails provided'}
        
        # Calculate metrics
        volume_metrics = self._calculate_volume_metrics(emails)
        response_metrics = self._calculate_response_metrics(emails)
        engagement_metrics = self._calculate_engagement_metrics(emails)
        productivity_metrics = self._calculate_productivity_metrics(emails)
        team_metrics = self._calculate_team_metrics(emails)
        
        # Calculate ROI
        roi_analysis = self._calculate_roi(emails)
        
        # Generate insights
        insights = self._generate_insights(
            volume_metrics, response_metrics, engagement_metrics, productivity_metrics
        )
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            volume_metrics, response_metrics, engagement_metrics, productivity_metrics
        )
        
        # Check reply-all requirement
        all_recipients = set()
        for email in emails:
            all_recipients.update(email.get('recipients', []))
        reply_all_required = len(all_recipients) > 1
        
        return {
            'batch_size': len(emails),
            'volume_metrics': volume_metrics,
            'response_metrics': response_metrics,
            'engagement_metrics': engagement_metrics,
            'productivity_metrics': productivity_metrics,
            'team_metrics': team_metrics,
            'roi_analysis': roi_analysis,
            'insights': insights,
            'recommendations': recommendations,
            'reply_all_required': reply_all_required
        }
    
    def _calculate_volume_metrics(self, emails: List[Dict]) -> Dict[str, Any]:
        """Calculate email volume metrics."""
        total = len(emails)
        sent = sum(1 for e in emails if e.get('direction') == 'sent')
        received = sum(1 for e in emails if e.get('direction') == 'received')
        
        # Calculate daily average (assuming 7-day period)
        daily_avg = total / 7
        
        # Peak hours analysis
        hour_counts = defaultdict(int)
        for email in emails:
            timestamp = email.get('timestamp', '')
            if timestamp:
                try:
                    dt = datetime.fromisoformat(timestamp)
                    hour_counts[dt.hour] += 1
                except:
                    pass
        
        peak_hour = max(hour_counts.items(), key=lambda x: x[1]) if hour_counts else (0, 0)
        
        return {
            'total_emails': total,
            'emails_sent': sent,
            'emails_received': received,
            'daily_average': round(daily_avg, 1),
            'peak_hour': peak_hour[0],
            'peak_hour_volume': peak_hour[1]
        }
    
    def _calculate_response_metrics(self, emails: List[Dict]) -> Dict[str, Any]:
        """Calculate response time metrics."""
        response_times = []
        
        for email in emails:
            response_time = email.get('response_time_minutes')
            if response_time is not None:
                response_times.append(response_time)
        
        if not response_times:
            return {
                'avg_response_time': 0,
                'median_response_time': 0,
                'fastest_response': 0,
                'slowest_response': 0,
                'response_rate': 0
            }
        
        # Calculate statistics
        avg_time = sum(response_times) / len(response_times)
        sorted_times = sorted(response_times)
        median_time = sorted_times[len(sorted_times) // 2]
        
        # Response rate (emails that received replies)
        responded = sum(1 for e in emails if e.get('has_response'))
        response_rate = (responded / len(emails)) * 100
        
        return {
            'avg_response_time': round(avg_time, 1),
            'median_response_time': round(median_time, 1),
            'fastest_response': min(response_times),
            'slowest_response': max(response_times),
            'response_rate': round(response_rate, 1)
        }
    
    def _calculate_engagement_metrics(self, emails: List[Dict]) -> Dict[str, Any]:
        """Calculate engagement metrics."""
        engagement_scores = []
        
        for email in emails:
            # Calculate engagement score based on multiple factors
            score = 0
            
            # Response received
            if email.get('has_response'):
                score += 30
            
            # Quick response
            response_time = email.get('response_time_minutes')
            if response_time is not None:
                if response_time < 60:
                    score += 20
                elif response_time < 240:
                    score += 10
            
            # Thread length (multiple exchanges)
            thread_length = email.get('thread_length', 1)
            if thread_length > 3:
                score += 20
            elif thread_length > 1:
                score += 10
            
            # Attachments (indicates substance)
            if email.get('attachments'):
                score += 10
            
            # Multiple recipients (indicates importance)
            if len(email.get('recipients', [])) > 2:
                score += 10
            
            engagement_scores.append(score)
        
        if not engagement_scores:
            return {'avg_engagement': 0, 'high_engagement_rate': 0}
        
        avg_engagement = sum(engagement_scores) / len(engagement_scores)
        high_engagement = sum(1 for s in engagement_scores if s > 60)
        high_engagement_rate = (high_engagement / len(engagement_scores)) * 100
        
        return {
            'avg_engagement': round(avg_engagement, 1),
            'high_engagement_count': high_engagement,
            'high_engagement_rate': round(high_engagement_rate, 1)
        }
    
    def _calculate_productivity_metrics(self, emails: List[Dict]) -> Dict[str, Any]:
        """Calculate productivity metrics."""
        # Inbox zero achievements
        inbox_zero_count = sum(1 for e in emails if e.get('inbox_zero'))
        
        # Emails processed per hour (assuming 8-hour workday)
        total_emails = len(emails)
        work_hours = 8 * 7  # 8 hours * 7 days
        emails_per_hour = total_emails / work_hours
        
        # Efficiency score (responses sent vs received)
        sent = sum(1 for e in emails if e.get('direction') == 'sent')
        received = sum(1 for e in emails if e.get('direction') == 'received')
        efficiency = (sent / max(received, 1)) * 100
        
        # Automation rate (emails handled by workflows)
        automated = sum(1 for e in emails if e.get('automated'))
        automation_rate = (automated / max(total_emails, 1)) * 100
        
        return {
            'inbox_zero_achievements': inbox_zero_count,
            'emails_per_hour': round(emails_per_hour, 2),
            'efficiency_score': round(efficiency, 1),
            'automation_rate': round(automation_rate, 1)
        }
    
    def _calculate_team_metrics(self, emails: List[Dict]) -> Dict[str, Any]:
        """Calculate team performance metrics."""
        # Group by sender
        sender_stats = defaultdict(lambda: {'count': 0, 'response_time': []})
        
        for email in emails:
            sender = email.get('sender', 'unknown')
            sender_stats[sender]['count'] += 1
            if email.get('response_time_minutes'):
                sender_stats[sender]['response_time'].append(email['response_time_minutes'])
        
        # Calculate top performers
        top_performers = []
        for sender, stats in sender_stats.items():
            avg_response = sum(stats['response_time']) / max(len(stats['response_time']), 1)
            top_performers.append({
                'sender': sender,
                'email_count': stats['count'],
                'avg_response_time': round(avg_response, 1)
            })
        
        # Sort by email count and response time
        top_performers.sort(key=lambda x: (x['email_count'], -x['avg_response_time']), reverse=True)
        
        return {
            'team_size': len(sender_stats),
            'top_performers': top_performers[:5]
        }
    
    def _calculate_roi(self, emails: List[Dict]) -> Dict[str, Any]:
        """Calculate email ROI metrics."""
        # Time saved through automation
        automated = sum(1 for e in emails if e.get('automated'))
        time_saved_minutes = automated * 5  # Assume 5 minutes saved per automated email
        time_saved_hours = time_saved_minutes / 60
        
        # Cost savings (assuming $50/hour labor cost)
        cost_savings = time_saved_hours * 50
        
        # Revenue impact (emails that led to deals)
        revenue_emails = sum(1 for e in emails if e.get('revenue_impact'))
        estimated_revenue = revenue_emails * 1000  # Assume $1000 per revenue email
        
        # ROI calculation
        total_value = cost_savings + estimated_revenue
        investment = len(emails) * 2  # Assume $2 cost per email
        roi = ((total_value - investment) / max(investment, 1)) * 100
        
        return {
            'time_saved_hours': round(time_saved_hours, 1),
            'cost_savings': round(cost_savings, 2),
            'estimated_revenue': round(estimated_revenue, 2),
            'total_value': round(total_value, 2),
            'roi_percentage': round(roi, 1)
        }
    
    def _generate_insights(self, volume: Dict, response: Dict, 
                          engagement: Dict, productivity: Dict) -> List[str]:
        """Generate performance insights."""
        insights = []
        
        # Volume insights
        if volume['daily_average'] > 50:
            insights.append(f"High email volume: {volume['daily_average']} emails/day")
        
        # Response insights
        if response['avg_response_time'] > 240:
            insights.append(f"Slow response times: {response['avg_response_time']} min average")
        elif response['avg_response_time'] < 60:
            insights.append(f"Excellent response times: {response['avg_response_time']} min average")
        
        # Engagement insights
        if engagement['high_engagement_rate'] > 60:
            insights.append(f"High engagement rate: {engagement['high_engagement_rate']}%")
        
        # Productivity insights
        if productivity['automation_rate'] > 30:
            insights.append(f"Good automation adoption: {productivity['automation_rate']}%")
        
        if productivity['efficiency_score'] > 80:
            insights.append(f"High efficiency: {productivity['efficiency_score']}% response rate")
        
        if not insights:
            insights.append("Performance metrics within normal range")
        
        return insights
    
    def _generate_recommendations(self, volume: Dict, response: Dict,
                                 engagement: Dict, productivity: Dict) -> List[str]:
        """Generate performance recommendations."""
        recommendations = []
        
        # Volume recommendations
        if volume['daily_average'] > 100:
            recommendations.append("Consider email filtering and prioritization")
        
        # Response recommendations
        if response['avg_response_time'] > 240:
            recommendations.append("Implement response time SLAs")
            recommendations.append("Use auto-responders for common inquiries")
        
        if response['response_rate'] < 70:
            recommendations.append("Improve response rate - follow up on unanswered emails")
        
        # Engagement recommendations
        if engagement['high_engagement_rate'] < 40:
            recommendations.append("Improve email content and relevance")
        
        # Productivity recommendations
        if productivity['automation_rate'] < 20:
            recommendations.append("Increase workflow automation adoption")
        
        if productivity['efficiency_score'] < 60:
            recommendations.append("Review email handling processes")
        
        # Peak hour optimization
        if volume['peak_hour_volume'] > volume['daily_average'] * 2:
            recommendations.append(f"Peak hour at {volume['peak_hour']}:00 - consider load balancing")
        
        if not recommendations:
            recommendations.append("Performance is optimal - maintain current practices")
        
        return recommendations


def main():
    """Test V955 Performance Analytics Dashboard."""
    analytics = PerformanceAnalytics()
    
    # Generate test email data
    test_emails = []
    for i in range(50):
        test_emails.append({
            'id': f'email_{i}',
            'sender': f'user{i % 5}@company.com',
            'recipients': ['team@company.com'],
            'timestamp': (datetime.now() - timedelta(hours=i)).isoformat(),
            'direction': 'sent' if i % 2 == 0 else 'received',
            'response_time_minutes': (i % 10) * 30 if i % 2 == 0 else None,
            'has_response': i % 3 != 0,
            'thread_length': (i % 5) + 1,
            'attachments': [{'filename': 'doc.pdf'}] if i % 4 == 0 else [],
            'inbox_zero': i % 10 == 0,
            'automated': i % 5 == 0,
            'revenue_impact': i % 20 == 0
        })
    
    print("=" * 60)
    print("V955: Email Performance Analytics Dashboard - Test Results")
    print("=" * 60)
    
    result = analytics.analyze_email_batch(test_emails)
    
    print(f"\nBatch Size: {result['batch_size']} emails")
    print(f"Reply-All Required: {result['reply_all_required']}")
    
    print("\n📊 Volume Metrics:")
    vol = result['volume_metrics']
    print(f"  Total: {vol['total_emails']} (Sent: {vol['emails_sent']}, Received: {vol['emails_received']})")
    print(f"  Daily Average: {vol['daily_average']}")
    print(f"  Peak Hour: {vol['peak_hour']}:00 ({vol['peak_hour_volume']} emails)")
    
    print("\n⏱️ Response Metrics:")
    resp = result['response_metrics']
    print(f"  Avg Response Time: {resp['avg_response_time']} min")
    print(f"  Median Response Time: {resp['median_response_time']} min")
    print(f"  Response Rate: {resp['response_rate']}%")
    
    print("\n💬 Engagement Metrics:")
    eng = result['engagement_metrics']
    print(f"  Avg Engagement Score: {eng['avg_engagement']}")
    print(f"  High Engagement Rate: {eng['high_engagement_rate']}%")
    
    print("\n⚡ Productivity Metrics:")
    prod = result['productivity_metrics']
    print(f"  Inbox Zero Achievements: {prod['inbox_zero_achievements']}")
    print(f"  Emails/Hour: {prod['emails_per_hour']}")
    print(f"  Efficiency Score: {prod['efficiency_score']}%")
    print(f"  Automation Rate: {prod['automation_rate']}%")
    
    print("\n👥 Team Metrics:")
    team = result['team_metrics']
    print(f"  Team Size: {team['team_size']}")
    if team['top_performers']:
        print(f"  Top Performer: {team['top_performers'][0]['sender']} ({team['top_performers'][0]['email_count']} emails)")
    
    print("\n💰 ROI Analysis:")
    roi = result['roi_analysis']
    print(f"  Time Saved: {roi['time_saved_hours']} hours")
    print(f"  Cost Savings: ${roi['cost_savings']}")
    print(f"  Estimated Revenue: ${roi['estimated_revenue']}")
    print(f"  ROI: {roi['roi_percentage']}%")
    
    print("\n💡 Key Insights:")
    for insight in result['insights'][:3]:
        print(f"  • {insight}")
    
    print("\n🎯 Recommendations:")
    for rec in result['recommendations'][:3]:
        print(f"  • {rec}")
    
    print("\n✅ V955 Performance Analytics Dashboard: OPERATIONAL")


if __name__ == '__main__':
    main()
