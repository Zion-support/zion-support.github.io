#!/usr/bin/env python3
"""
V158 - AI Email Team Performance Analytics
Tracks team email metrics, identifies bottlenecks, optimizes workflows,
and provides actionable insights for team productivity improvement.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
import statistics


class TeamPerformanceAnalytics:
    """AI-powered team email performance analytics and optimization."""
    
    def __init__(self):
        self.team_metrics = defaultdict(dict)
        self.individual_metrics = defaultdict(dict)
        self.response_times = defaultdict(list)
        self.email_volumes = defaultdict(list)
        self.quality_scores = defaultdict(list)
        self.bottleneck_patterns = []
        self.benchmarks = self._build_benchmarks()
    
    def _build_benchmarks(self) -> Dict[str, Dict]:
        """Build industry benchmarks for email performance."""
        return {
            'response_time': {
                'excellent': {'hours': 2, 'description': 'World-class response'},
                'good': {'hours': 8, 'description': 'Above average'},
                'average': {'hours': 24, 'description': 'Industry standard'},
                'poor': {'hours': 48, 'description': 'Below average'}
            },
            'email_volume': {
                'light': {'per_day': 25, 'description': 'Low volume role'},
                'moderate': {'per_day': 50, 'description': 'Standard role'},
                'heavy': {'per_day': 100, 'description': 'High volume role'},
                'extreme': {'per_day': 150, 'description': 'Overloaded'}
            },
            'quality_score': {
                'excellent': 90,
                'good': 75,
                'average': 60,
                'poor': 40
            },
            'inbox_zero_rate': {
                'excellent': 0.90,
                'good': 0.70,
                'average': 0.50,
                'poor': 0.30
            }
        }
    
    def analyze_team_performance(self, team_emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Comprehensive team performance analysis."""
        
        # Calculate team-level metrics
        team_metrics = self._calculate_team_metrics(team_emails)
        
        # Calculate individual metrics
        individual_metrics = self._calculate_individual_metrics(team_emails)
        
        # Identify bottlenecks
        bottlenecks = self._identify_bottlenecks(team_emails, individual_metrics)
        
        # Compare against benchmarks
        benchmark_comparison = self._compare_benchmarks(team_metrics, individual_metrics)
        
        # Generate insights
        insights = self._generate_insights(team_metrics, individual_metrics, bottlenecks)
        
        # Recommendations
        recommendations = self._generate_recommendations(team_metrics, bottlenecks, benchmark_comparison)
        
        # Team health score
        health_score = self._calculate_health_score(team_metrics, benchmark_comparison)
        
        return {
            'analysis_id': f"team_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'team_health_score': health_score,
            'team_metrics': team_metrics,
            'individual_metrics': individual_metrics,
            'bottlenecks': bottlenecks,
            'benchmark_comparison': benchmark_comparison,
            'insights': insights,
            'recommendations': recommendations,
            'trends': self._analyze_trends(team_emails),
            'reply_all_compliance': self._check_reply_all_compliance(team_emails)
        }
    
    def _calculate_team_metrics(self, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Calculate team-level metrics."""
        if not emails:
            return {}
        
        # Response times
        response_times = []
        for email in emails:
            if 'response_time_hours' in email:
                response_times.append(email['response_time_hours'])
        
        avg_response_time = statistics.mean(response_times) if response_times else 0
        median_response_time = statistics.median(response_times) if response_times else 0
        
        # Email volume
        total_emails = len(emails)
        unique_days = len(set(e.get('date', '')[:10] for e in emails))
        avg_daily_volume = total_emails / max(unique_days, 1)
        
        # Category distribution
        categories = defaultdict(int)
        for email in emails:
            cat = email.get('category', 'general')
            categories[cat] += 1
        
        # Resolution rate
        resolved = sum(1 for e in emails if e.get('status') == 'resolved')
        resolution_rate = resolved / total_emails if total_emails > 0 else 0
        
        # SLA compliance
        sla_met = sum(1 for e in emails if e.get('sla_met', True))
        sla_compliance = sla_met / total_emails if total_emails > 0 else 0
        
        return {
            'total_emails_processed': total_emails,
            'avg_response_time_hours': round(avg_response_time, 1),
            'median_response_time_hours': round(median_response_time, 1),
            'avg_daily_volume': round(avg_daily_volume, 1),
            'resolution_rate': round(resolution_rate, 2),
            'sla_compliance': round(sla_compliance, 2),
            'category_distribution': dict(categories),
            'team_size': len(set(e.get('responder', '') for e in emails)),
            'productivity_score': self._calculate_productivity_score(
                avg_response_time, resolution_rate, sla_compliance
            )
        }
    
    def _calculate_individual_metrics(self, emails: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Calculate individual team member metrics."""
        responder_emails = defaultdict(list)
        
        for email in emails:
            responder = email.get('responder', 'unknown')
            responder_emails[responder].append(email)
        
        metrics = []
        for responder, resp_emails in responder_emails.items():
            response_times = [e.get('response_time_hours', 0) for e in resp_emails 
                            if 'response_time_hours' in e]
            
            avg_rt = statistics.mean(response_times) if response_times else 0
            
            resolved = sum(1 for e in resp_emails if e.get('status') == 'resolved')
            total = len(resp_emails)
            
            metrics.append({
                'responder': responder,
                'email_count': total,
                'avg_response_time_hours': round(avg_rt, 1),
                'resolution_rate': round(resolved / total, 2) if total > 0 else 0,
                'sla_compliance': round(
                    sum(1 for e in resp_emails if e.get('sla_met', True)) / total, 2
                ) if total > 0 else 0,
                'quality_score': self._calculate_individual_quality(resp_emails),
                'workload_balance': self._assess_workload(total, len(emails)),
                'performance_tier': self._classify_performance(avg_rt, resolved / total if total > 0 else 0)
            })
        
        return sorted(metrics, key=lambda x: x['quality_score'], reverse=True)
    
    def _calculate_individual_quality(self, emails: List[Dict[str, Any]]) -> float:
        """Calculate quality score for individual."""
        if not emails:
            return 0
        
        score = 50  # Baseline
        
        # Response time quality
        response_times = [e.get('response_time_hours', 24) for e in emails]
        avg_rt = statistics.mean(response_times) if response_times else 24
        
        if avg_rt < 2:
            score += 20
        elif avg_rt < 8:
            score += 15
        elif avg_rt < 24:
            score += 5
        else:
            score -= 10
        
        # Resolution quality
        resolved = sum(1 for e in emails if e.get('status') == 'resolved')
        resolution_rate = resolved / len(emails)
        score += resolution_rate * 30
        
        # SLA compliance
        sla_met = sum(1 for e in emails if e.get('sla_met', True))
        sla_rate = sla_met / len(emails)
        score += sla_rate * 20
        
        return min(max(round(score, 1), 0), 100)
    
    def _assess_workload(self, individual_count: int, team_total: int) -> str:
        """Assess workload balance."""
        if team_total == 0:
            return 'unknown'
        
        share = individual_count / team_total
        
        if share > 0.4:
            return 'overloaded'
        elif share > 0.25:
            return 'heavy'
        elif share > 0.1:
            return 'balanced'
        else:
            return 'light'
    
    def _classify_performance(self, avg_response_time: float, resolution_rate: float) -> str:
        """Classify individual performance tier."""
        score = 0
        
        if avg_response_time < 4:
            score += 2
        elif avg_response_time < 12:
            score += 1
        
        if resolution_rate > 0.9:
            score += 2
        elif resolution_rate > 0.7:
            score += 1
        
        if score >= 3:
            return 'top_performer'
        elif score >= 2:
            return 'strong_performer'
        elif score >= 1:
            return 'average_performer'
        else:
            return 'needs_improvement'
    
    def _identify_bottlenecks(self, emails: List[Dict[str, Any]], 
                             individual_metrics: List[Dict]) -> List[Dict[str, Any]]:
        """Identify performance bottlenecks."""
        bottlenecks = []
        
        # Response time bottleneck
        slow_responders = [m for m in individual_metrics if m['avg_response_time_hours'] > 24]
        if slow_responders:
            bottlenecks.append({
                'type': 'response_time',
                'severity': 'high',
                'affected_members': [m['responder'] for m in slow_responders],
                'impact': 'Delayed customer responses affecting satisfaction',
                'recommendation': 'Provide response time training and set up auto-acknowledgments'
            })
        
        # Workload imbalance
        overloaded = [m for m in individual_metrics if m['workload_balance'] == 'overloaded']
        if overloaded:
            bottlenecks.append({
                'type': 'workload_imbalance',
                'severity': 'high',
                'affected_members': [m['responder'] for m in overloaded],
                'impact': 'Burnout risk and potential quality degradation',
                'recommendation': 'Redistribute workload or add team capacity'
            })
        
        # Category concentration
        category_counts = defaultdict(int)
        for email in emails:
            category_counts[email.get('category', 'general')] += 1
        
        total = len(emails)
        for cat, count in category_counts.items():
            if count / total > 0.5:
                bottlenecks.append({
                    'type': 'category_concentration',
                    'severity': 'medium',
                    'category': cat,
                    'percentage': round(count / total * 100, 1),
                    'impact': 'Team over-specialized in one area',
                    'recommendation': 'Cross-train team members on other categories'
                })
        
        # SLA violations
        sla_violations = sum(1 for e in emails if not e.get('sla_met', True))
        if sla_violations > len(emails) * 0.1:
            bottlenecks.append({
                'type': 'sla_compliance',
                'severity': 'critical',
                'violation_rate': round(sla_violations / len(emails) * 100, 1),
                'impact': 'Customer SLA breaches risking penalties',
                'recommendation': 'Implement priority-based routing and escalation alerts'
            })
        
        return bottlenecks
    
    def _compare_benchmarks(self, team_metrics: Dict, individual_metrics: List) -> Dict[str, Any]:
        """Compare metrics against industry benchmarks."""
        comparisons = {}
        
        # Response time comparison
        avg_rt = team_metrics.get('avg_response_time_hours', 24)
        if avg_rt <= 2:
            rt_rating = 'excellent'
        elif avg_rt <= 8:
            rt_rating = 'good'
        elif avg_rt <= 24:
            rt_rating = 'average'
        else:
            rt_rating = 'poor'
        
        comparisons['response_time'] = {
            'actual': avg_rt,
            'benchmark': rt_rating,
            'gap': self._calculate_gap(avg_rt, self.benchmarks['response_time'][rt_rating]['hours'])
        }
        
        # Resolution rate comparison
        res_rate = team_metrics.get('resolution_rate', 0)
        if res_rate >= 0.9:
            res_rating = 'excellent'
        elif res_rate >= 0.75:
            res_rating = 'good'
        elif res_rate >= 0.6:
            res_rating = 'average'
        else:
            res_rating = 'poor'
        
        comparisons['resolution_rate'] = {
            'actual': res_rate,
            'benchmark': res_rating
        }
        
        # SLA compliance
        sla = team_metrics.get('sla_compliance', 0)
        if sla >= 0.95:
            sla_rating = 'excellent'
        elif sla >= 0.85:
            sla_rating = 'good'
        elif sla >= 0.7:
            sla_rating = 'average'
        else:
            sla_rating = 'poor'
        
        comparisons['sla_compliance'] = {
            'actual': sla,
            'benchmark': sla_rating
        }
        
        return comparisons
    
    def _calculate_gap(self, actual: float, benchmark: float) -> str:
        """Calculate gap description."""
        if actual <= benchmark:
            return 'meeting_or_exceeding'
        elif actual <= benchmark * 1.5:
            return 'slightly_below'
        elif actual <= benchmark * 2:
            return 'below'
        else:
            return 'significantly_below'
    
    def _generate_insights(self, team_metrics: Dict, individual_metrics: List, 
                          bottlenecks: List) -> List[Dict[str, Any]]:
        """Generate actionable insights."""
        insights = []
        
        # Top performer insight
        if individual_metrics:
            top = individual_metrics[0]
            insights.append({
                'type': 'recognition',
                'message': f"Top performer: {top['responder']} with quality score of {top['quality_score']}",
                'action': 'Recognize and share best practices with team'
            })
        
        # Productivity insight
        productivity = team_metrics.get('productivity_score', 0)
        if productivity >= 80:
            insights.append({
                'type': 'strength',
                'message': f"Team productivity score is excellent at {productivity}",
                'action': 'Maintain current processes and document best practices'
            })
        elif productivity < 50:
            insights.append({
                'type': 'improvement_needed',
                'message': f"Team productivity score is low at {productivity}",
                'action': 'Review processes and implement automation where possible'
            })
        
        # Bottleneck insights
        for bottleneck in bottlenecks:
            insights.append({
                'type': 'bottleneck',
                'message': f"Bottleneck detected: {bottleneck['type']} ({bottleneck['severity']} severity)",
                'action': bottleneck['recommendation']
            })
        
        return insights
    
    def _generate_recommendations(self, team_metrics: Dict, bottlenecks: List,
                                  benchmarks: Dict) -> List[Dict[str, Any]]:
        """Generate strategic recommendations."""
        recommendations = []
        
        # Based on bottlenecks
        for bottleneck in bottlenecks:
            recommendations.append({
                'priority': 'high' if bottleneck['severity'] in ['critical', 'high'] else 'medium',
                'category': bottleneck['type'],
                'recommendation': bottleneck['recommendation'],
                'expected_improvement': '20-40% improvement in affected metrics'
            })
        
        # Based on benchmarks
        for metric, comparison in benchmarks.items():
            if comparison.get('benchmark') in ['poor', 'average']:
                recommendations.append({
                    'priority': 'medium',
                    'category': metric,
                    'recommendation': f"Improve {metric} to reach 'good' benchmark level",
                    'expected_improvement': f"Move from {comparison['benchmark']} to 'good'"
                })
        
        # General recommendations
        if team_metrics.get('avg_daily_volume', 0) > 100:
            recommendations.append({
                'priority': 'high',
                'category': 'automation',
                'recommendation': 'Implement AI-powered email triage and auto-responses',
                'expected_improvement': 'Reduce manual workload by 40%'
            })
        
        return recommendations
    
    def _calculate_health_score(self, team_metrics: Dict, benchmarks: Dict) -> float:
        """Calculate overall team health score."""
        score = 50  # Baseline
        
        # Response time contribution
        rt = team_metrics.get('avg_response_time_hours', 24)
        if rt < 4:
            score += 15
        elif rt < 12:
            score += 10
        elif rt < 24:
            score += 5
        else:
            score -= 10
        
        # Resolution rate contribution
        res = team_metrics.get('resolution_rate', 0)
        score += res * 25
        
        # SLA compliance contribution
        sla = team_metrics.get('sla_compliance', 0)
        score += sla * 15
        
        return min(max(round(score, 1), 0), 100)
    
    def _calculate_productivity_score(self, avg_rt: float, res_rate: float, sla: float) -> float:
        """Calculate productivity score."""
        rt_score = max(0, 30 - avg_rt)  # Lower is better
        res_score = res_rate * 40
        sla_score = sla * 30
        
        return round(min(rt_score + res_score + sla_score, 100), 1)
    
    def _analyze_trends(self, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Analyze performance trends over time."""
        if len(emails) < 10:
            return {'trend': 'insufficient_data'}
        
        # Sort by date
        sorted_emails = sorted(emails, key=lambda x: x.get('date', ''))
        
        # Split into halves
        mid = len(sorted_emails) // 2
        first_half = sorted_emails[:mid]
        second_half = sorted_emails[mid:]
        
        # Compare metrics
        first_rt = statistics.mean([e.get('response_time_hours', 24) for e in first_half])
        second_rt = statistics.mean([e.get('response_time_hours', 24) for e in second_half])
        
        if second_rt < first_rt * 0.9:
            trend = 'improving'
        elif second_rt > first_rt * 1.1:
            trend = 'declining'
        else:
            trend = 'stable'
        
        return {
            'trend': trend,
            'response_time_change': round((second_rt - first_rt) / first_rt * 100, 1),
            'period': f"{first_half[0].get('date', '')[:10]} to {second_half[-1].get('date', '')[:10]}"
        }
    
    def _check_reply_all_compliance(self, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Check reply-all compliance across team."""
        total = len(emails)
        reply_all_used = sum(1 for e in emails if e.get('reply_all', False))
        
        compliance_rate = reply_all_used / total if total > 0 else 0
        
        return {
            'reply_all_usage': reply_all_used,
            'total_emails': total,
            'compliance_rate': round(compliance_rate, 2),
            'status': 'good' if compliance_rate > 0.8 else 'needs_improvement'
        }


def process_team_performance(team_emails: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Main entry point for team performance analytics."""
    analytics = TeamPerformanceAnalytics()
    return analytics.analyze_team_performance(team_emails)


if __name__ == '__main__':
    test_emails = [
        {
            'from': 'customer1@company.com',
            'responder': 'alice@ziontechgroup.com',
            'subject': 'Support Request',
            'response_time_hours': 2,
            'status': 'resolved',
            'sla_met': True,
            'category': 'support',
            'date': '2024-01-15T10:00:00'
        },
        {
            'from': 'customer2@company.com',
            'responder': 'bob@ziontechgroup.com',
            'subject': 'Billing Question',
            'response_time_hours': 18,
            'status': 'resolved',
            'sla_met': True,
            'category': 'billing',
            'date': '2024-01-16T14:00:00'
        },
        {
            'from': 'customer3@company.com',
            'responder': 'alice@ziontechgroup.com',
            'subject': 'Feature Request',
            'response_time_hours': 4,
            'status': 'resolved',
            'sla_met': True,
            'category': 'product',
            'date': '2024-01-17T09:00:00',
            'reply_all': True
        }
    ]
    
    result = process_team_performance(test_emails)
    print(json.dumps(result, indent=2))
