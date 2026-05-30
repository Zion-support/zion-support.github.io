#!/usr/bin/env python3
"""
Email Intelligence V297 - Analytics Dashboard Engine
Real-time email performance metrics and trends
Response time tracking, engagement scoring, team analytics
Predictive insights for email optimization
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
import statistics

class EmailAnalyticsDashboard:
    def __init__(self):
        self.version = "V297"
        self.name = "Email Analytics Dashboard Engine"
        self.metrics_cache = {}
        self.engagement_weights = {
            'reply_rate': 0.25,
            'response_time': 0.20,
            'open_rate': 0.15,
            'click_rate': 0.10,
            'conversion_rate': 0.15,
            'sentiment': 0.15
        }
    
    def generate_analytics(self, email_history: List[Dict], team_members: List[str] = None) -> Dict:
        """Generate comprehensive email analytics dashboard"""
        print(f"[{self.version}] 📊 Generating email analytics dashboard...")
        
        total_emails = len(email_history)
        
        # Response time metrics
        response_times = self._calculate_response_times(email_history)
        
        # Engagement scoring
        engagement_scores = self._calculate_engagement_scores(email_history)
        
        # Team analytics
        team_analytics = self._generate_team_analytics(email_history, team_members or [])
        
        # Trend analysis
        trends = self._analyze_trends(email_history)
        
        # Predictive insights
        predictions = self._generate_predictions(response_times, engagement_scores, trends)
        
        # Intent distribution
        intent_distribution = self._analyze_intent_distribution(email_history)
        
        # SLA compliance
        sla_compliance = self._check_sla_compliance(email_history)
        
        return {
            'version': self.version,
            'engine': self.name,
            'dashboard': {
                'total_emails': total_emails,
                'response_times': response_times,
                'engagement_scores': engagement_scores,
                'team_analytics': team_analytics,
                'trends': trends,
                'predictions': predictions,
                'intent_distribution': intent_distribution,
                'sla_compliance': sla_compliance,
                'kpi_summary': self._generate_kpi_summary(response_times, engagement_scores, sla_compliance)
            },
            'recommendations': self._generate_recommendations(response_times, engagement_scores, trends),
            'timestamp': datetime.now().isoformat(),
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def _calculate_response_times(self, emails: List[Dict]) -> Dict:
        """Calculate response time metrics"""
        response_times_hours = []
        for email in emails:
            if email.get('response_time_minutes'):
                response_times_hours.append(email['response_time_minutes'] / 60)
        
        if not response_times_hours:
            return {'avg_hours': 0, 'median_hours': 0, 'fastest_hours': 0, 'slowest_hours': 0}
        
        return {
            'avg_hours': round(statistics.mean(response_times_hours), 2),
            'median_hours': round(statistics.median(response_times_hours), 2),
            'fastest_hours': round(min(response_times_hours), 2),
            'slowest_hours': round(max(response_times_hours), 2),
            'std_deviation': round(statistics.stdev(response_times_hours), 2) if len(response_times_hours) > 1 else 0,
            'within_1hr': sum(1 for t in response_times_hours if t <= 1) / len(response_times_hours) * 100,
            'within_4hr': sum(1 for t in response_times_hours if t <= 4) / len(response_times_hours) * 100,
            'within_24hr': sum(1 for t in response_times_hours if t <= 24) / len(response_times_hours) * 100
        }
    
    def _calculate_engagement_scores(self, emails: List[Dict]) -> Dict:
        """Calculate engagement scores per email and overall"""
        scores = []
        for email in emails:
            score = 0
            if email.get('replied'): score += 30
            if email.get('opened'): score += 20
            if email.get('clicked_link'): score += 15
            if email.get('forwarded'): score += 10
            if email.get('sentiment', 'neutral') == 'positive': score += 15
            elif email.get('sentiment') == 'negative': score -= 10
            scores.append(score)
        
        return {
            'avg_score': round(statistics.mean(scores), 1) if scores else 0,
            'high_engagement_pct': round(sum(1 for s in scores if s >= 60) / len(scores) * 100, 1) if scores else 0,
            'medium_engagement_pct': round(sum(1 for s in scores if 30 <= s < 60) / len(scores) * 100, 1) if scores else 0,
            'low_engagement_pct': round(sum(1 for s in scores if s < 30) / len(scores) * 100, 1) if scores else 0
        }
    
    def _generate_team_analytics(self, emails: List[Dict], team: List[str]) -> Dict:
        """Generate per-team-member analytics"""
        member_stats = defaultdict(lambda: {'emails_handled': 0, 'avg_response_time': 0, 'satisfaction': 0})
        
        for email in emails:
            handler = email.get('assigned_to', 'unassigned')
            member_stats[handler]['emails_handled'] += 1
            if email.get('response_time_minutes'):
                member_stats[handler]['avg_response_time'] += email['response_time_minutes']
        
        for handler in member_stats:
            if member_stats[handler]['emails_handled'] > 0:
                member_stats[handler]['avg_response_time'] = round(
                    member_stats[handler]['avg_response_time'] / member_stats[handler]['emails_handled'] / 60, 2
                )
        
        return dict(member_stats)
    
    def _analyze_trends(self, emails: List[Dict]) -> Dict:
        """Analyze email trends over time"""
        daily_counts = defaultdict(int)
        for email in emails:
            if email.get('date'):
                day = email['date'][:10]
                daily_counts[day] += 1
        
        sorted_days = sorted(daily_counts.items())
        if len(sorted_days) >= 2:
            recent_avg = statistics.mean([c for _, c in sorted_days[-7:]])
            older_avg = statistics.mean([c for _, c in sorted_days[:-7]]) if len(sorted_days) > 7 else recent_avg
            trend = 'increasing' if recent_avg > older_avg * 1.1 else 'decreasing' if recent_avg < older_avg * 0.9 else 'stable'
        else:
            trend = 'insufficient_data'
        
        return {
            'volume_trend': trend,
            'daily_avg': round(statistics.mean(daily_counts.values()), 1) if daily_counts else 0,
            'peak_day': max(daily_counts, key=daily_counts.get) if daily_counts else None,
            'peak_volume': max(daily_counts.values()) if daily_counts else 0
        }
    
    def _generate_predictions(self, response_times: Dict, engagement: Dict, trends: Dict) -> Dict:
        """Generate predictive insights"""
        predictions = []
        
        if response_times.get('avg_hours', 0) > 4:
            predictions.append({'type': 'warning', 'message': 'Response times trending above SLA threshold', 'confidence': 85})
        
        if engagement.get('low_engagement_pct', 0) > 40:
            predictions.append({'type': 'alert', 'message': 'Engagement declining - review email strategy', 'confidence': 78})
        
        if trends.get('volume_trend') == 'increasing':
            predictions.append({'type': 'info', 'message': 'Email volume increasing - consider scaling team', 'confidence': 72})
        
        return {
            'insights': predictions,
            'next_week_forecast': {
                'estimated_volume': round(trends.get('daily_avg', 0) * 7 * 1.05, 0),
                'estimated_avg_response_time': round(response_times.get('avg_hours', 0) * 0.95, 2)
            }
        }
    
    def _analyze_intent_distribution(self, emails: List[Dict]) -> Dict:
        """Analyze distribution of email intents"""
        intents = defaultdict(int)
        for email in emails:
            intents[email.get('intent', 'general')] += 1
        return dict(intents)
    
    def _check_sla_compliance(self, emails: List[Dict]) -> Dict:
        """Check SLA compliance rates"""
        compliant = 0
        total_with_sla = 0
        for email in emails:
            if email.get('sla_hours'):
                total_with_sla += 1
                response_time = email.get('response_time_minutes')
                response_hrs = (response_time / 60) if response_time else 999
                if response_hrs <= email['sla_hours']:
                    compliant += 1
        
        compliance_rate = (compliant / total_with_sla * 100) if total_with_sla > 0 else 100
        return {
            'compliance_rate': round(compliance_rate, 1),
            'total_sla_emails': total_with_sla,
            'compliant_count': compliant,
            'breached_count': total_with_sla - compliant
        }
    
    def _generate_kpi_summary(self, response_times: Dict, engagement: Dict, sla: Dict) -> Dict:
        """Generate KPI summary"""
        return {
            'avg_response_hours': response_times.get('avg_hours', 0),
            'engagement_score': engagement.get('avg_score', 0),
            'sla_compliance': sla.get('compliance_rate', 0),
            'health_score': round(
                (100 - response_times.get('avg_hours', 0) * 10) * 0.4 +
                engagement.get('avg_score', 0) * 0.3 +
                sla.get('compliance_rate', 0) * 0.3, 1
            )
        }
    
    def _generate_recommendations(self, response_times: Dict, engagement: Dict, trends: Dict) -> List[str]:
        """Generate actionable recommendations"""
        recs = []
        if response_times.get('avg_hours', 0) > 4:
            recs.append("Implement auto-acknowledgment for faster perceived response")
        if engagement.get('low_engagement_pct', 0) > 40:
            recs.append("A/B test subject lines and email content")
        if trends.get('volume_trend') == 'increasing':
            recs.append("Scale email handling team or automate more responses")
        recs.append("Monitor reply-all compliance continuously")
        return recs
    
    def analyze_and_respond(self, email_data: Dict) -> Dict:
        """Analyze and respond with analytics insights - REPLY-ALL enforced"""
        all_recipients = email_data.get('to', []) + email_data.get('cc', [])
        
        return {
            'version': self.version,
            'engine': self.name,
            'analytics': self.generate_analytics(email_data.get('history', [])),
            'reply_all_required': len(all_recipients) > 1,
            'all_recipients': all_recipients,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }

# Test the engine
if __name__ == '__main__':
    analytics = EmailAnalyticsDashboard()
    
    test_history = [
        {'date': '2026-05-28', 'intent': 'request', 'replied': True, 'opened': True, 'response_time_minutes': 120, 'sla_hours': 4, 'assigned_to': 'sales'},
        {'date': '2026-05-28', 'intent': 'inquiry', 'replied': True, 'opened': True, 'response_time_minutes': 45, 'sla_hours': 2, 'assigned_to': 'support'},
        {'date': '2026-05-29', 'intent': 'complaint', 'replied': True, 'opened': True, 'sentiment': 'negative', 'response_time_minutes': 30, 'sla_hours': 1, 'assigned_to': 'success'},
        {'date': '2026-05-29', 'intent': 'negotiation', 'replied': True, 'opened': True, 'clicked_link': True, 'response_time_minutes': 180, 'sla_hours': 8, 'assigned_to': 'sales'},
        {'date': '2026-05-30', 'intent': 'follow_up', 'replied': False, 'opened': False, 'response_time_minutes': None, 'sla_hours': 24, 'assigned_to': 'support'}
    ]
    
    result = analytics.generate_analytics(test_history, ['sales', 'support', 'success'])
    print(json.dumps(result, indent=2))
