#!/usr/bin/env python3
"""
V247: Email Analytics Dashboard Engine
Track response times, email volume, peak hours, and productivity metrics.
Generate weekly performance reports and identify optimization opportunities.
CRITICAL: Enforces reply-all for multi-recipient emails.
"""
import json
from datetime import datetime, timedelta
from collections import defaultdict
from typing import Dict, List


class EmailAnalyticsEngine:
    """Comprehensive email analytics and productivity tracking."""
    
    def __init__(self):
        self.email_history = []
        self.response_times = []
        self.hourly_volume = defaultdict(int)
        self.daily_volume = defaultdict(int)
        self.sender_stats = defaultdict(lambda: {'count': 0, 'avg_response_time': 0})
    
    def track_email(self, email: Dict, response_time_minutes: int = None,
                    recipients: List[str] = None):
        """Track email metrics for analytics."""
        timestamp = datetime.fromisoformat(email.get('timestamp', datetime.now().isoformat()))
        
        # Track volume by hour and day
        hour = timestamp.hour
        day = timestamp.strftime('%A')
        
        self.hourly_volume[hour] += 1
        self.daily_volume[day] += 1
        
        # Track sender statistics
        sender = email.get('from', 'unknown')
        self.sender_stats[sender]['count'] += 1
        
        # Track response times
        if response_time_minutes is not None:
            self.response_times.append(response_time_minutes)
            current_avg = self.sender_stats[sender]['avg_response_time']
            count = self.sender_stats[sender]['count']
            self.sender_stats[sender]['avg_response_time'] = (
                (current_avg * (count - 1) + response_time_minutes) / count
            )
        
        # Store email history
        self.email_history.append({
            'email': email,
            'timestamp': timestamp.isoformat(),
            'response_time': response_time_minutes,
            'recipients': recipients or [],
            'reply_all_required': len(recipients) > 1 if recipients else False
        })
    
    def generate_weekly_report(self, start_date: datetime = None) -> Dict:
        """Generate comprehensive weekly analytics report."""
        if not start_date:
            start_date = datetime.now() - timedelta(days=7)
        
        end_date = datetime.now()
        
        # Filter emails from the past week
        week_emails = [
            e for e in self.email_history
            if datetime.fromisoformat(e['timestamp']) >= start_date
        ]
        
        # Calculate metrics
        total_emails = len(week_emails)
        reply_all_emails = sum(1 for e in week_emails if e['reply_all_required'])
        
        # Response time statistics
        response_times = [e['response_time'] for e in week_emails if e['response_time']]
        avg_response_time = sum(response_times) / len(response_times) if response_times else 0
        fastest_response = min(response_times) if response_times else 0
        slowest_response = max(response_times) if response_times else 0
        
        # Peak hours analysis
        peak_hour = max(self.hourly_volume.items(), key=lambda x: x[1], default=(0, 0))
        quietest_hour = min(self.hourly_volume.items(), key=lambda x: x[1], default=(0, 0))
        
        # Peak day analysis
        peak_day = max(self.daily_volume.items(), key=lambda x: x[1], default=('Unknown', 0))
        
        # Top senders
        top_senders = sorted(
            self.sender_stats.items(),
            key=lambda x: x[1]['count'],
            reverse=True
        )[:5]
        
        # Productivity insights
        insights = []
        
        if avg_response_time > 120:  # More than 2 hours
            insights.append("Average response time exceeds 2 hours - consider setting up auto-responders")
        
        if reply_all_emails > total_emails * 0.3:  # More than 30% require reply-all
            insights.append("High percentage of multi-recipient emails - ensure reply-all enforcement")
        
        if peak_hour[1] > total_emails * 0.2:  # Peak hour has >20% of emails
            insights.append(f"Peak email hour is {peak_hour[0]}:00 - consider blocking focus time")
        
        # Generate recommendations
        recommendations = []
        
        if avg_response_time > 60:
            recommendations.append("Implement email batching: process emails at set times (9am, 12pm, 4pm)")
        
        if total_emails > 100:
            recommendations.append("High email volume - consider unsubscribing from non-essential newsletters")
        
        recommendations.append("Use priority scoring (V246) to focus on critical emails first")
        recommendations.append("Set up smart notifications (V248) to reduce interruptions during focus time")
        
        return {
            'report_period': {
                'start': start_date.isoformat(),
                'end': end_date.isoformat()
            },
            'volume_metrics': {
                'total_emails': total_emails,
                'daily_average': total_emails / 7,
                'reply_all_emails': reply_all_emails,
                'reply_all_percentage': (reply_all_emails / total_emails * 100) if total_emails > 0 else 0
            },
            'response_time_metrics': {
                'average_minutes': round(avg_response_time, 1),
                'fastest_minutes': fastest_response,
                'slowest_minutes': slowest_response,
                'emails_responded': len(response_times)
            },
            'peak_activity': {
                'busiest_hour': f"{peak_hour[0]}:00 ({peak_hour[1]} emails)",
                'quietest_hour': f"{quietest_hour[0]}:00 ({quietest_hour[1]} emails)",
                'busiest_day': f"{peak_day[0]} ({peak_day[1]} emails)"
            },
            'top_senders': [
                {
                    'sender': sender,
                    'email_count': stats['count'],
                    'avg_response_time': round(stats['avg_response_time'], 1)
                }
                for sender, stats in top_senders
            ],
            'insights': insights,
            'recommendations': recommendations,
            'generated_at': datetime.now().isoformat()
        }
    
    def compare_weeks(self, current_week_start: datetime, previous_week_start: datetime) -> Dict:
        """Compare current week performance with previous week."""
        current_report = self.generate_weekly_report(current_week_start)
        previous_report = self.generate_weekly_report(previous_week_start)
        
        current_avg = current_report['response_time_metrics']['average_minutes']
        previous_avg = previous_report['response_time_metrics']['average_minutes']
        
        improvement = ((previous_avg - current_avg) / previous_avg * 100) if previous_avg > 0 else 0
        
        return {
            'current_week': current_report,
            'previous_week': previous_report,
            'comparison': {
                'response_time_change': f"{improvement:+.1f}%",
                'volume_change': current_report['volume_metrics']['total_emails'] - previous_report['volume_metrics']['total_emails'],
                'productivity_trend': 'improving' if improvement > 0 else 'declining' if improvement < 0 else 'stable'
            }
        }


if __name__ == '__main__':
    # Test the analytics engine
    analytics = EmailAnalyticsEngine()
    
    # Simulate email data
    base_time = datetime.now()
    
    test_data = [
        {'email': {'id': 'e1', 'from': 'ceo@company.com', 'subject': 'Urgent', 'timestamp': (base_time - timedelta(hours=2)).isoformat()}, 'response_time': 15, 'recipients': ['team@company.com', 'manager@company.com']},
        {'email': {'id': 'e2', 'from': 'client@corp.com', 'subject': 'Project update', 'timestamp': (base_time - timedelta(hours=4)).isoformat()}, 'response_time': 45, 'recipients': ['pm@company.com']},
        {'email': {'id': 'e3', 'from': 'newsletter@blog.com', 'subject': 'Weekly digest', 'timestamp': (base_time - timedelta(hours=6)).isoformat()}, 'response_time': None, 'recipients': ['user@company.com']},
        {'email': {'id': 'e4', 'from': 'manager@company.com', 'subject': 'Meeting notes', 'timestamp': (base_time - timedelta(hours=8)).isoformat()}, 'response_time': 120, 'recipients': ['team@company.com', 'lead@company.com']},
        {'email': {'id': 'e5', 'from': 'partner@vendor.com', 'subject': 'Invoice', 'timestamp': (base_time - timedelta(hours=10)).isoformat()}, 'response_time': 180, 'recipients': ['finance@company.com', 'manager@company.com']},
    ]
    
    for data in test_data:
        analytics.track_email(data['email'], data['response_time'], data['recipients'])
    
    print("=== V247: Email Analytics Dashboard Test ===\n")
    
    report = analytics.generate_weekly_report()
    
    print(f"Report Period: {report['report_period']['start'][:10]} to {report['report_period']['end'][:10]}\n")
    
    print("📊 Volume Metrics:")
    print(f"  Total Emails: {report['volume_metrics']['total_emails']}")
    print(f"  Daily Average: {report['volume_metrics']['daily_average']:.1f}")
    print(f"  Reply-All Emails: {report['volume_metrics']['reply_all_emails']} ({report['volume_metrics']['reply_all_percentage']:.1f}%)\n")
    
    print("⏱️ Response Time Metrics:")
    print(f"  Average: {report['response_time_metrics']['average_minutes']} minutes")
    print(f"  Fastest: {report['response_time_metrics']['fastest_minutes']} minutes")
    print(f"  Slowest: {report['response_time_metrics']['slowest_minutes']} minutes\n")
    
    print("📈 Peak Activity:")
    print(f"  Busiest Hour: {report['peak_activity']['busiest_hour']}")
    print(f"  Busiest Day: {report['peak_activity']['busiest_day']}\n")
    
    print("💡 Insights:")
    for insight in report['insights']:
        print(f"  • {insight}")
    
    print("\n🎯 Recommendations:")
    for rec in report['recommendations']:
        print(f"  • {rec}")
