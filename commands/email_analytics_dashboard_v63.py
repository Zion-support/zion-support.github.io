#!/usr/bin/env python3
"""
V63 Email Analytics Dashboard
==============================
Comprehensive email analytics and performance tracking system.

Features:
- Response time metrics
- Email volume tracking
- Sentiment trend analysis
- Category distribution
- Performance KPIs
- Visual dashboard data generation
- Historical trend analysis

Author: Kleber Garcia Alcatrao
Contact: kleber@ziontechgroup.com | +1 302 464 0950
Address: 364 E Main St STE 1008, Middletown, DE 19709
"""

import json
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from collections import defaultdict, Counter
import statistics

# Analytics storage directory
ANALYTICS_DIR = Path(__file__).parent.parent / "data" / "email_analytics"
ANALYTICS_DIR.mkdir(parents=True, exist_ok=True)


class EmailAnalyticsDashboard:
    """
    Comprehensive email analytics and performance tracking dashboard.
    """
    
    def __init__(self):
        self.analytics_data = self._load_analytics()
        self.email_history = self._load_email_history()
    
    def _load_analytics(self) -> Dict:
        """Load analytics data from storage."""
        analytics_file = ANALYTICS_DIR / "analytics.json"
        if analytics_file.exists():
            with open(analytics_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        return self._initialize_analytics()
    
    def _initialize_analytics(self) -> Dict:
        """Initialize analytics structure."""
        return {
            'emails_processed': 0,
            'responses_sent': 0,
            'avg_response_time_minutes': 0,
            'response_times': [],
            'categories': defaultdict(int),
            'sentiments': defaultdict(int),
            'daily_volume': defaultdict(int),
            'hourly_distribution': defaultdict(int),
            'top_senders': defaultdict(int),
            'escalations': 0,
            'auto_responses': 0,
            'manual_reviews': 0,
            'last_updated': datetime.now().isoformat()
        }
    
    def _save_analytics(self):
        """Save analytics data to storage."""
        analytics_file = ANALYTICS_DIR / "analytics.json"
        with open(analytics_file, 'w', encoding='utf-8') as f:
            json.dump(self.analytics_data, f, indent=2, ensure_ascii=False)
    
    def _load_email_history(self) -> List[Dict]:
        """Load email processing history."""
        history_file = ANALYTICS_DIR / "email_history.json"
        if history_file.exists():
            with open(history_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        return []
    
    def _save_email_history(self):
        """Save email processing history."""
        history_file = ANALYTICS_DIR / "email_history.json"
        with open(history_file, 'w', encoding='utf-8') as f:
            json.dump(self.email_history, f, indent=2, ensure_ascii=False)
    
    def track_email_processed(self, email_data: Dict, processing_result: Dict):
        """
        Track an email that was processed by the system.
        
        Args:
            email_data: Original email data
            processing_result: Result from email processing (intent, sentiment, etc.)
        """
        email_timestamp = email_data.get('timestamp', datetime.now().isoformat())
        email_date = datetime.fromisoformat(email_timestamp.replace('Z', '+00:00'))
        
        # Update counters
        self.analytics_data['emails_processed'] += 1
        
        # Track category
        category = processing_result.get('intent', 'general')
        self.analytics_data['categories'][category] += 1
        
        # Track sentiment
        sentiment = processing_result.get('sentiment', 'neutral')
        self.analytics_data['sentiments'][sentiment] += 1
        
        # Track daily volume
        date_key = email_date.strftime('%Y-%m-%d')
        self.analytics_data['daily_volume'][date_key] += 1
        
        # Track hourly distribution
        hour_key = email_date.strftime('%H')
        self.analytics_data['hourly_distribution'][hour_key] += 1
        
        # Track sender
        sender = email_data.get('sender', 'unknown')
        self.analytics_data['top_senders'][sender] += 1
        
        # Track processing type
        if processing_result.get('auto_responded', False):
            self.analytics_data['auto_responses'] += 1
        else:
            self.analytics_data['manual_reviews'] += 1
        
        # Track escalations
        if processing_result.get('escalated', False):
            self.analytics_data['escalations'] += 1
        
        # Add to history
        history_entry = {
            'email_id': email_data.get('id', 'unknown'),
            'timestamp': email_timestamp,
            'sender': sender,
            'subject': email_data.get('subject', ''),
            'category': category,
            'sentiment': sentiment,
            'priority': processing_result.get('priority', 'normal'),
            'response_time_minutes': processing_result.get('response_time_minutes'),
            'auto_responded': processing_result.get('auto_responded', False),
            'escalated': processing_result.get('escalated', False)
        }
        self.email_history.append(history_entry)
        
        # Keep only last 1000 emails in history
        if len(self.email_history) > 1000:
            self.email_history = self.email_history[-1000:]
        
        self.analytics_data['last_updated'] = datetime.now().isoformat()
        self._save_analytics()
        self._save_email_history()
    
    def track_response_sent(self, email_id: str, response_time_minutes: float):
        """
        Track when a response was sent for an email.
        
        Args:
            email_id: ID of the original email
            response_time_minutes: Time taken to respond in minutes
        """
        self.analytics_data['responses_sent'] += 1
        self.analytics_data['response_times'].append(response_time_minutes)
        
        # Keep only last 100 response times
        if len(self.analytics_data['response_times']) > 100:
            self.analytics_data['response_times'] = self.analytics_data['response_times'][-100:]
        
        # Calculate average response time
        if self.analytics_data['response_times']:
            self.analytics_data['avg_response_time_minutes'] = statistics.mean(
                self.analytics_data['response_times']
            )
        
        self.analytics_data['last_updated'] = datetime.now().isoformat()
        self._save_analytics()
    
    def get_dashboard_summary(self) -> Dict:
        """
        Generate comprehensive dashboard summary.
        
        Returns:
            Dictionary with all dashboard metrics
        """
        summary = {
            'overview': self._get_overview_metrics(),
            'response_performance': self._get_response_metrics(),
            'category_breakdown': self._get_category_breakdown(),
            'sentiment_analysis': self._get_sentiment_analysis(),
            'volume_trends': self._get_volume_trends(),
            'hourly_patterns': self._get_hourly_patterns(),
            'top_senders': self._get_top_senders(),
            'performance_kpis': self._calculate_kpis()
        }
        return summary
    
    def _get_overview_metrics(self) -> Dict:
        """Get high-level overview metrics."""
        return {
            'total_emails_processed': self.analytics_data['emails_processed'],
            'total_responses_sent': self.analytics_data['responses_sent'],
            'auto_responses': self.analytics_data['auto_responses'],
            'manual_reviews': self.analytics_data['manual_reviews'],
            'escalations': self.analytics_data['escalations'],
            'automation_rate': (
                self.analytics_data['auto_responses'] / 
                max(self.analytics_data['emails_processed'], 1) * 100
            ),
            'last_updated': self.analytics_data['last_updated']
        }
    
    def _get_response_metrics(self) -> Dict:
        """Get response time and performance metrics."""
        response_times = self.analytics_data['response_times']
        
        if not response_times:
            return {
                'avg_response_time_minutes': 0,
                'median_response_time_minutes': 0,
                'fastest_response_minutes': 0,
                'slowest_response_minutes': 0,
                'response_time_distribution': {}
            }
        
        # Calculate distribution buckets
        buckets = {
            '< 5 min': 0,
            '5-15 min': 0,
            '15-30 min': 0,
            '30-60 min': 0,
            '1-4 hours': 0,
            '4-24 hours': 0,
            '> 24 hours': 0
        }
        
        for time in response_times:
            if time < 5:
                buckets['< 5 min'] += 1
            elif time < 15:
                buckets['5-15 min'] += 1
            elif time < 30:
                buckets['15-30 min'] += 1
            elif time < 60:
                buckets['30-60 min'] += 1
            elif time < 240:
                buckets['1-4 hours'] += 1
            elif time < 1440:
                buckets['4-24 hours'] += 1
            else:
                buckets['> 24 hours'] += 1
        
        return {
            'avg_response_time_minutes': round(self.analytics_data['avg_response_time_minutes'], 2),
            'median_response_time_minutes': round(statistics.median(response_times), 2),
            'fastest_response_minutes': round(min(response_times), 2),
            'slowest_response_minutes': round(max(response_times), 2),
            'response_time_distribution': buckets
        }
    
    def _get_category_breakdown(self) -> Dict:
        """Get email category distribution."""
        categories = self.analytics_data['categories']
        total = sum(categories.values())
        
        breakdown = {}
        for category, count in sorted(categories.items(), key=lambda x: x[1], reverse=True):
            breakdown[category] = {
                'count': count,
                'percentage': round(count / max(total, 1) * 100, 2)
            }
        
        return breakdown
    
    def _get_sentiment_analysis(self) -> Dict:
        """Get sentiment distribution and trends."""
        sentiments = self.analytics_data['sentiments']
        total = sum(sentiments.values())
        
        distribution = {}
        for sentiment, count in sentiments.items():
            distribution[sentiment] = {
                'count': count,
                'percentage': round(count / max(total, 1) * 100, 2)
            }
        
        # Calculate sentiment trend (last 7 days)
        trend = self._calculate_sentiment_trend(days=7)
        
        return {
            'distribution': distribution,
            'trend_7days': trend,
            'dominant_sentiment': max(sentiments.items(), key=lambda x: x[1])[0] if sentiments else 'neutral'
        }
    
    def _calculate_sentiment_trend(self, days: int = 7) -> List[Dict]:
        """Calculate sentiment trend over specified days."""
        today = datetime.now().date()
        trend = []
        
        for i in range(days):
            date = today - timedelta(days=i)
            date_str = date.strftime('%Y-%m-%d')
            
            # Count sentiments for this date
            day_sentiments = {'positive': 0, 'neutral': 0, 'negative': 0}
            for entry in self.email_history:
                entry_date = entry['timestamp'][:10]
                if entry_date == date_str:
                    sentiment = entry.get('sentiment', 'neutral')
                    day_sentiments[sentiment] = day_sentiments.get(sentiment, 0) + 1
            
            total = sum(day_sentiments.values())
            if total > 0:
                # Calculate sentiment score (-1 to 1)
                score = (day_sentiments['positive'] - day_sentiments['negative']) / total
            else:
                score = 0
            
            trend.append({
                'date': date_str,
                'score': round(score, 2),
                'volume': total,
                'positive': day_sentiments['positive'],
                'neutral': day_sentiments['neutral'],
                'negative': day_sentiments['negative']
            })
        
        return list(reversed(trend))
    
    def _get_volume_trends(self) -> Dict:
        """Get email volume trends."""
        daily_volume = self.analytics_data['daily_volume']
        
        # Get last 30 days
        today = datetime.now().date()
        last_30_days = []
        
        for i in range(30):
            date = today - timedelta(days=i)
            date_str = date.strftime('%Y-%m-%d')
            count = daily_volume.get(date_str, 0)
            last_30_days.append({
                'date': date_str,
                'count': count
            })
        
        last_30_days = list(reversed(last_30_days))
        
        # Calculate statistics
        counts = [day['count'] for day in last_30_days if day['count'] > 0]
        
        return {
            'last_30_days': last_30_days,
            'avg_daily_volume': round(statistics.mean(counts), 2) if counts else 0,
            'peak_day': max(last_30_days, key=lambda x: x['count']) if last_30_days else None,
            'total_last_30_days': sum(day['count'] for day in last_30_days)
        }
    
    def _get_hourly_patterns(self) -> Dict:
        """Get hourly email distribution patterns."""
        hourly = self.analytics_data['hourly_distribution']
        
        # Convert to list format
        hourly_list = []
        for hour in range(24):
            hour_str = f"{hour:02d}"
            count = hourly.get(hour_str, 0)
            hourly_list.append({
                'hour': hour,
                'hour_label': f"{hour:02d}:00",
                'count': count
            })
        
        # Find peak hours
        sorted_hours = sorted(hourly_list, key=lambda x: x['count'], reverse=True)
        peak_hours = sorted_hours[:3]
        
        # Categorize by time of day
        time_categories = {
            'morning (6-12)': sum(h['count'] for h in hourly_list if 6 <= h['hour'] < 12),
            'afternoon (12-18)': sum(h['count'] for h in hourly_list if 12 <= h['hour'] < 18),
            'evening (18-24)': sum(h['count'] for h in hourly_list if 18 <= h['hour'] < 24),
            'night (0-6)': sum(h['count'] for h in hourly_list if 0 <= h['hour'] < 6)
        }
        
        return {
            'hourly_distribution': hourly_list,
            'peak_hours': peak_hours,
            'time_of_day_breakdown': time_categories
        }
    
    def _get_top_senders(self) -> Dict:
        """Get top email senders."""
        senders = self.analytics_data['top_senders']
        
        # Sort by count
        sorted_senders = sorted(senders.items(), key=lambda x: x[1], reverse=True)
        
        top_10 = []
        for sender, count in sorted_senders[:10]:
            top_10.append({
                'sender': sender,
                'count': count,
                'percentage': round(count / max(self.analytics_data['emails_processed'], 1) * 100, 2)
            })
        
        return {
            'top_10': top_10,
            'unique_senders': len(senders)
        }
    
    def _calculate_kpis(self) -> Dict:
        """Calculate key performance indicators."""
        total_emails = self.analytics_data['emails_processed']
        total_responses = self.analytics_data['responses_sent']
        auto_responses = self.analytics_data['auto_responses']
        escalations = self.analytics_data['escalations']
        
        # Response rate
        response_rate = (total_responses / max(total_emails, 1)) * 100
        
        # Automation rate
        automation_rate = (auto_responses / max(total_emails, 1)) * 100
        
        # Escalation rate
        escalation_rate = (escalations / max(total_emails, 1)) * 100
        
        # Average response time
        avg_response_time = self.analytics_data['avg_response_time_minutes']
        
        # SLA compliance (responses within 24 hours)
        response_times = self.analytics_data['response_times']
        sla_compliant = sum(1 for t in response_times if t < 1440)  # 24 hours = 1440 minutes
        sla_compliance = (sla_compliant / max(len(response_times), 1)) * 100
        
        return {
            'response_rate': round(response_rate, 2),
            'automation_rate': round(automation_rate, 2),
            'escalation_rate': round(escalation_rate, 2),
            'avg_response_time_minutes': round(avg_response_time, 2),
            'sla_compliance_24h': round(sla_compliance, 2),
            'emails_per_day': round(total_emails / 30, 2) if total_emails > 0 else 0
        }
    
    def generate_dashboard_html(self) -> str:
        """
        Generate HTML dashboard for visualization.
        
        Returns:
            HTML string for dashboard
        """
        summary = self.get_dashboard_summary()
        
        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Analytics Dashboard - Zion Tech Group</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5; padding: 20px; }}
        .container {{ max-width: 1400px; margin: 0 auto; }}
        .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px; }}
        .header h1 {{ font-size: 2em; margin-bottom: 10px; }}
        .header p {{ opacity: 0.9; }}
        .grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px; }}
        .card {{ background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
        .card h2 {{ color: #667eea; margin-bottom: 15px; font-size: 1.3em; }}
        .metric {{ display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }}
        .metric:last-child {{ border-bottom: none; }}
        .metric-label {{ color: #666; }}
        .metric-value {{ font-weight: bold; color: #333; }}
        .metric-value.highlight {{ color: #667eea; font-size: 1.2em; }}
        .progress-bar {{ background: #e0e0e0; height: 20px; border-radius: 10px; overflow: hidden; margin-top: 5px; }}
        .progress-fill {{ height: 100%; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); transition: width 0.3s; }}
        .chart-container {{ height: 200px; position: relative; }}
        .bar {{ position: absolute; bottom: 0; background: #667eea; border-radius: 3px 3px 0 0; transition: all 0.3s; }}
        .bar:hover {{ background: #764ba2; }}
        .footer {{ text-align: center; padding: 20px; color: #666; font-size: 0.9em; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 Email Analytics Dashboard</h1>
            <p>Real-time email processing analytics and performance metrics</p>
            <p>Last updated: {summary['overview']['last_updated']}</p>
        </div>
        
        <div class="grid">
            <div class="card">
                <h2>📊 Overview</h2>
                <div class="metric">
                    <span class="metric-label">Total Emails Processed</span>
                    <span class="metric-value highlight">{summary['overview']['total_emails_processed']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Responses Sent</span>
                    <span class="metric-value">{summary['overview']['total_responses_sent']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Auto Responses</span>
                    <span class="metric-value">{summary['overview']['auto_responses']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Manual Reviews</span>
                    <span class="metric-value">{summary['overview']['manual_reviews']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Escalations</span>
                    <span class="metric-value">{summary['overview']['escalations']}</span>
                </div>
            </div>
            
            <div class="card">
                <h2>⚡ Performance KPIs</h2>
                <div class="metric">
                    <span class="metric-label">Automation Rate</span>
                    <span class="metric-value highlight">{summary['performance_kpis']['automation_rate']:.1f}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: {summary['performance_kpis']['automation_rate']:.1f}%"></div>
                </div>
                <div class="metric">
                    <span class="metric-label">Response Rate</span>
                    <span class="metric-value">{summary['performance_kpis']['response_rate']:.1f}%</span>
                </div>
                <div class="metric">
                    <span class="metric-label">SLA Compliance (24h)</span>
                    <span class="metric-value">{summary['performance_kpis']['sla_compliance_24h']:.1f}%</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Avg Response Time</span>
                    <span class="metric-value">{summary['performance_kpis']['avg_response_time_minutes']:.0f} min</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Escalation Rate</span>
                    <span class="metric-value">{summary['performance_kpis']['escalation_rate']:.1f}%</span>
                </div>
            </div>
            
            <div class="card">
                <h2>⏱️ Response Performance</h2>
                <div class="metric">
                    <span class="metric-label">Average</span>
                    <span class="metric-value highlight">{summary['response_performance']['avg_response_time_minutes']:.0f} min</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Median</span>
                    <span class="metric-value">{summary['response_performance']['median_response_time_minutes']:.0f} min</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Fastest</span>
                    <span class="metric-value">{summary['response_performance']['fastest_response_minutes']:.0f} min</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Slowest</span>
                    <span class="metric-value">{summary['response_performance']['slowest_response_minutes']:.0f} min</span>
                </div>
            </div>
            
            <div class="card">
                <h2>📈 Volume Trends</h2>
                <div class="metric">
                    <span class="metric-label">Avg Daily Volume</span>
                    <span class="metric-value highlight">{summary['volume_trends']['avg_daily_volume']:.1f}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Total (30 days)</span>
                    <span class="metric-value">{summary['volume_trends']['total_last_30_days']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Unique Senders</span>
                    <span class="metric-value">{summary['top_senders']['unique_senders']}</span>
                </div>
            </div>
        </div>
        
        <div class="grid">
            <div class="card">
                <h2>📂 Category Breakdown</h2>
                {''.join(f'''
                <div class="metric">
                    <span class="metric-label">{cat.replace('_', ' ').title()}</span>
                    <span class="metric-value">{data['count']} ({data['percentage']:.1f}%)</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: {data['percentage']:.1f}%"></div>
                </div>
                ''' for cat, data in list(summary['category_breakdown'].items())[:5])}
            </div>
            
            <div class="card">
                <h2>😊 Sentiment Analysis</h2>
                {''.join(f'''
                <div class="metric">
                    <span class="metric-label">{sent.title()}</span>
                    <span class="metric-value">{data['count']} ({data['percentage']:.1f}%)</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: {data['percentage']:.1f}%"></div>
                </div>
                ''' for sent, data in summary['sentiment_analysis']['distribution'].items())}
                <div class="metric">
                    <span class="metric-label">Dominant Sentiment</span>
                    <span class="metric-value highlight">{summary['sentiment_analysis']['dominant_sentiment'].title()}</span>
                </div>
            </div>
            
            <div class="card">
                <h2>🕐 Hourly Patterns</h2>
                <div class="metric">
                    <span class="metric-label">Peak Hour</span>
                    <span class="metric-value highlight">{summary['hourly_patterns']['peak_hours'][0]['hour_label']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Morning (6-12)</span>
                    <span class="metric-value">{summary['hourly_patterns']['time_of_day_breakdown']['morning (6-12)']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Afternoon (12-18)</span>
                    <span class="metric-value">{summary['hourly_patterns']['time_of_day_breakdown']['afternoon (12-18)']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Evening (18-24)</span>
                    <span class="metric-value">{summary['hourly_patterns']['time_of_day_breakdown']['evening (18-24)']}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Night (0-6)</span>
                    <span class="metric-value">{summary['hourly_patterns']['time_of_day_breakdown']['night (0-6)']}</span>
                </div>
            </div>
            
            <div class="card">
                <h2>👥 Top Senders</h2>
                {''.join(f'''
                <div class="metric">
                    <span class="metric-label">{sender['sender'][:30]}</span>
                    <span class="metric-value">{sender['count']} ({sender['percentage']:.1f}%)</span>
                </div>
                ''' for sender in summary['top_senders']['top_10'][:5])}
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Zion Tech Group</strong> - Email Analytics Dashboard</p>
            <p>Contact: Kleber Garcia Alcatrao | kleber@ziontechgroup.com | +1 302 464 0950</p>
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
    </div>
</body>
</html>"""
        
        # Save HTML file
        html_file = ANALYTICS_DIR / "dashboard.html"
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html)
        
        return html
    
    def export_analytics_report(self, format: str = 'json') -> str:
        """
        Export analytics report in various formats.
        
        Args:
            format: Export format ('json', 'csv', 'markdown')
        
        Returns:
            Exported content as string
        """
        summary = self.get_dashboard_summary()
        
        if format == 'json':
            return json.dumps(summary, indent=2, ensure_ascii=False)
        
        elif format == 'markdown':
            lines = ["# Email Analytics Report\n"]
            lines.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            
            # Overview
            lines.append("## Overview\n")
            for key, value in summary['overview'].items():
                if key != 'last_updated':
                    lines.append(f"- **{key.replace('_', ' ').title()}:** {value}")
            
            # KPIs
            lines.append("\n## Performance KPIs\n")
            for key, value in summary['performance_kpis'].items():
                lines.append(f"- **{key.replace('_', ' ').title()}:** {value}")
            
            # Categories
            lines.append("\n## Category Breakdown\n")
            for cat, data in summary['category_breakdown'].items():
                lines.append(f"- **{cat.replace('_', ' ').title()}:** {data['count']} ({data['percentage']:.1f}%)")
            
            # Sentiment
            lines.append("\n## Sentiment Analysis\n")
            for sent, data in summary['sentiment_analysis']['distribution'].items():
                lines.append(f"- **{sent.title()}:** {data['count']} ({data['percentage']:.1f}%)")
            
            lines.append(f"\n**Dominant Sentiment:** {summary['sentiment_analysis']['dominant_sentiment'].title()}")
            
            # Contact
            lines.append("\n---\n")
            lines.append("**Contact Information:**\n")
            lines.append("- Kleber Garcia Alcatrao")
            lines.append("- Email: kleber@ziontechgroup.com")
            lines.append("- Phone: +1 302 464 0950")
            lines.append("- Address: 364 E Main St STE 1008, Middletown, DE 19709")
            
            return '\n'.join(lines)
        
        else:
            raise ValueError(f"Unsupported format: {format}")


# Example usage and testing

if __name__ == "__main__":
    print("=" * 70)
    print("V63 Email Analytics Dashboard")
    print("=" * 70)
    print()
    
    # Initialize dashboard
    dashboard = EmailAnalyticsDashboard()
    
    # Test 1: Track sample emails
    print("Test 1: Track sample emails")
    sample_emails = [
        {
            'id': 'email_1',
            'timestamp': '2026-05-29T10:00:00',
            'sender': 'client@example.com',
            'subject': 'Project Inquiry',
        },
        {
            'id': 'email_2',
            'timestamp': '2026-05-29T11:30:00',
            'sender': 'partner@company.com',
            'subject': 'Partnership Opportunity',
        },
        {
            'id': 'email_3',
            'timestamp': '2026-05-29T14:00:00',
            'sender': 'support@vendor.com',
            'subject': 'Technical Support Request',
        }
    ]
    
    processing_results = [
        {'intent': 'sales_inquiry', 'sentiment': 'positive', 'auto_responded': True, 'response_time_minutes': 5},
        {'intent': 'partnership', 'sentiment': 'neutral', 'auto_responded': False, 'response_time_minutes': 45},
        {'intent': 'support_ticket', 'sentiment': 'negative', 'escalated': True, 'response_time_minutes': 120}
    ]
    
    for email, result in zip(sample_emails, processing_results):
        dashboard.track_email_processed(email, result)
        print(f"  Tracked: {email['subject']}")
    print()
    
    # Test 2: Track responses
    print("Test 2: Track response times")
    dashboard.track_response_sent('email_1', 5)
    dashboard.track_response_sent('email_2', 45)
    dashboard.track_response_sent('email_3', 120)
    print("  Tracked 3 responses")
    print()
    
    # Test 3: Get dashboard summary
    print("Test 3: Generate dashboard summary")
    summary = dashboard.get_dashboard_summary()
    print(f"  Total emails: {summary['overview']['total_emails_processed']}")
    print(f"  Automation rate: {summary['performance_kpis']['automation_rate']:.1f}%")
    print(f"  Avg response time: {summary['performance_kpis']['avg_response_time_minutes']:.0f} min")
    print()
    
    # Test 4: Generate HTML dashboard
    print("Test 4: Generate HTML dashboard")
    html = dashboard.generate_dashboard_html()
    print(f"  Generated HTML: {len(html)} characters")
    print(f"  Saved to: {ANALYTICS_DIR / 'dashboard.html'}")
    print()
    
    # Test 5: Export report
    print("Test 5: Export analytics report")
    markdown_report = dashboard.export_analytics_report(format='markdown')
    print(f"  Markdown report: {len(markdown_report)} characters")
    print()
    
    print("=" * 70)
    print("All tests completed successfully!")
    print()
    print("Dashboard Features:")
    print("  ✓ Response time metrics")
    print("  ✓ Email volume tracking")
    print("  ✓ Sentiment trend analysis")
    print("  ✓ Category distribution")
    print("  ✓ Performance KPIs")
    print("  ✓ Visual dashboard (HTML)")
    print("  ✓ Historical trend analysis")
    print()
    print("Contact Information:")
    print("  Kleber Garcia Alcatrao")
    print("  Email: kleber@ziontechgroup.com")
    print("  Phone: +1 302 464 0950")
    print("  Address: 364 E Main St STE 1008, Middletown, DE 19709")
    print("=" * 70)
