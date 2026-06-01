#!/usr/bin/env python3
"""
V1097 - Email Response Time Optimizer
Analyze response time patterns and bottlenecks
Optimize reply timing for maximum engagement
Track SLA compliance
Predict optimal response windows
Generate response time analytics
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict

class ResponseTimeOptimizer:
    def __init__(self):
        self.response_times = defaultdict(list)
        self.engagement_data = defaultdict(list)
        self.sla_rules = {
            'critical': {'hours': 1, 'label': 'Critical'},
            'high': {'hours': 4, 'label': 'High Priority'},
            'medium': {'hours': 8, 'label': 'Medium Priority'},
            'low': {'hours': 24, 'label': 'Low Priority'}
        }
    
    def track_response_time(self, sender_email: str, received_time: datetime, 
                           response_time: datetime, priority: str = 'medium'):
        """Track response time for a specific sender"""
        elapsed = (response_time - received_time).total_seconds() / 3600  # hours
        
        entry = {
            'sender': sender_email,
            'received': received_time,
            'responded': response_time,
            'hours_elapsed': round(elapsed, 2),
            'priority': priority,
            'day_of_week': received_time.strftime('%A'),
            'hour_of_day': received_time.hour,
            'sla_met': self.check_sla(elapsed, priority)
        }
        
        self.response_times[sender_email].append(entry)
        return entry
    
    def check_sla(self, hours_elapsed: float, priority: str) -> bool:
        """Check if response time meets SLA requirements"""
        if priority not in self.sla_rules:
            return True
        return hours_elapsed <= self.sla_rules[priority]['hours']
    
    def track_engagement(self, sender_email: str, send_hour: int, 
                        response_received: bool, response_minutes: int = None):
        """Track engagement based on send time"""
        entry = {
            'sender': sender_email,
            'hour': send_hour,
            'responded': response_received,
            'response_minutes': response_minutes,
            'timestamp': datetime.now()
        }
        self.engagement_data[sender_email].append(entry)
        return entry
    
    def get_optimal_send_times(self, sender_email: str) -> Dict[str, Any]:
        """Determine optimal send times for maximum engagement"""
        if sender_email not in self.engagement_data:
            return {
                'optimal_hours': [9, 10, 14, 15],  # Default business hours
                'avoid_hours': [0, 1, 2, 3, 4, 5, 22, 23],
                'confidence': 'low'
            }
        
        data = self.engagement_data[sender_email]
        if len(data) < 5:
            return {
                'optimal_hours': [9, 10, 14, 15],
                'avoid_hours': [0, 1, 2, 3, 4, 5, 22, 23],
                'confidence': 'low'
            }
        
        # Analyze by hour
        hour_stats = defaultdict(lambda: {'sent': 0, 'responded': 0})
        for entry in data:
            hour = entry['hour']
            hour_stats[hour]['sent'] += 1
            if entry['responded']:
                hour_stats[hour]['responded'] += 1
        
        # Calculate response rates
        hour_rates = {}
        for hour, stats in hour_stats.items():
            if stats['sent'] >= 2:
                hour_rates[hour] = stats['responded'] / stats['sent']
        
        if not hour_rates:
            return {
                'optimal_hours': [9, 10, 14, 15],
                'avoid_hours': [0, 1, 2, 3, 4, 5, 22, 23],
                'confidence': 'low'
            }
        
        # Sort by response rate
        sorted_hours = sorted(hour_rates.items(), key=lambda x: x[1], reverse=True)
        optimal = [h for h, _ in sorted_hours[:4]]
        avoid = [h for h, r in sorted_hours if r < 0.3]
        
        return {
            'optimal_hours': sorted(optimal),
            'avoid_hours': sorted(avoid),
            'hour_rates': {str(k): round(v, 2) for k, v in hour_rates.items()},
            'confidence': 'high' if len(data) >= 20 else 'medium',
            'data_points': len(data)
        }
    
    def analyze_patterns(self, sender_email: str = None) -> Dict[str, Any]:
        """Analyze response time patterns"""
        if sender_email:
            data = self.response_times.get(sender_email, [])
        else:
            data = [entry for entries in self.response_times.values() for entry in entries]
        
        if not data:
            return {'error': 'No response time data available'}
        
        hours = [e['hours_elapsed'] for e in data]
        avg_time = sum(hours) / len(hours)
        
        # Day-of-week analysis
        day_stats = defaultdict(list)
        for entry in data:
            day_stats[entry['day_of_week']].append(entry['hours_elapsed'])
        
        day_averages = {day: round(sum(times) / len(times), 2) 
                       for day, times in day_stats.items()}
        
        # Hour-of-day analysis
        hour_stats = defaultdict(list)
        for entry in data:
            hour_stats[entry['hour_of_day']].append(entry['hours_elapsed'])
        
        hour_averages = {str(h): round(sum(times) / len(times), 2) 
                        for h, times in hour_stats.items()}
        
        # SLA compliance
        sla_compliance = sum(1 for e in data if e['sla_met']) / len(data) * 100
        
        return {
            'total_responses': len(data),
            'average_response_hours': round(avg_time, 2),
            'fastest_response': round(min(hours), 2),
            'slowest_response': round(max(hours), 2),
            'median_response': round(sorted(hours)[len(hours)//2], 2),
            'sla_compliance_rate': round(sla_compliance, 1),
            'day_averages': day_averages,
            'hour_averages': hour_averages,
            'slowest_day': max(day_averages.items(), key=lambda x: x[1])[0] if day_averages else None,
            'fastest_day': min(day_averages.items(), key=lambda x: x[1])[0] if day_averages else None
        }
    
    def predict_optimal_response_window(self, sender_email: str, 
                                       priority: str = 'medium') -> Dict[str, Any]:
        """Predict the optimal time window to respond"""
        optimal_times = self.get_optimal_send_times(sender_email)
        current_hour = datetime.now().hour
        current_day = datetime.now().strftime('%A')
        
        sla_hours = self.sla_rules.get(priority, {}).get('hours', 24)
        
        # Find best time within SLA
        now = datetime.now()
        best_time = now
        best_score = -1
        
        for offset in range(0, int(sla_hours) + 1):
            candidate = now + timedelta(hours=offset)
            hour = candidate.hour
            
            # Score based on engagement data
            if hour in optimal_times.get('optimal_hours', []):
                score = 10
            elif hour in optimal_times.get('avoid_hours', []):
                score = -5
            elif 9 <= hour <= 17:
                score = 5
            else:
                score = 0
            
            # Penalize weekends
            if candidate.strftime('%A') in ['Saturday', 'Sunday']:
                score -= 3
            
            if score > best_score:
                best_score = score
                best_time = candidate
        
        return {
            'recommended_time': best_time.isoformat(),
            'hours_from_now': round((best_time - now).total_seconds() / 3600, 1),
            'confidence': optimal_times.get('confidence', 'low'),
            'sla_deadline': (now + timedelta(hours=sla_hours)).isoformat(),
            'reasoning': f'Based on {optimal_times.get("data_points", 0)} engagement data points'
        }
    
    def generate_analytics_report(self) -> Dict[str, Any]:
        """Generate comprehensive response time analytics report"""
        all_data = [entry for entries in self.response_times.values() for entry in entries]
        
        if not all_data:
            return {'error': 'No data available'}
        
        total = len(all_data)
        sla_met = sum(1 for e in all_data if e['sla_met'])
        
        # Priority breakdown
        priority_stats = defaultdict(lambda: {'count': 0, 'avg_hours': 0, 'sla_met': 0})
        for entry in all_data:
            p = entry['priority']
            priority_stats[p]['count'] += 1
            priority_stats[p]['avg_hours'] += entry['hours_elapsed']
            if entry['sla_met']:
                priority_stats[p]['sla_met'] += 1
        
        for p, stats in priority_stats.items():
            stats['avg_hours'] = round(stats['avg_hours'] / stats['count'], 2)
            stats['sla_rate'] = round(stats['sla_met'] / stats['count'] * 100, 1)
        
        # Bottleneck detection
        slow_responses = [e for e in all_data if e['hours_elapsed'] > 8]
        bottlenecks = defaultdict(int)
        for entry in slow_responses:
            bottlenecks[entry['day_of_week']] += 1
        
        return {
            'total_responses_analyzed': total,
            'overall_sla_compliance': round(sla_met / total * 100, 1),
            'priority_breakdown': dict(priority_stats),
            'bottleneck_days': dict(bottlenecks),
            'improvement_recommendations': self.get_improvement_recommendations(all_data)
        }
    
    def get_improvement_recommendations(self, data: List[Dict]) -> List[str]:
        """Generate actionable improvement recommendations"""
        recommendations = []
        
        hours = [e['hours_elapsed'] for e in data]
        avg = sum(hours) / len(hours)
        
        if avg > 8:
            recommendations.append('Average response time exceeds 8 hours - consider hiring additional staff')
        
        sla_met = sum(1 for e in data if e['sla_met']) / len(data)
        if sla_met < 0.9:
            recommendations.append(f'SLA compliance at {sla_met*100:.0f}% - implement auto-acknowledgment')
        
        # Check for time-of-day bottlenecks
        hour_stats = defaultdict(list)
        for entry in data:
            hour_stats[entry['hour_of_day']].append(entry['hours_elapsed'])
        
        for hour, times in hour_stats.items():
            if len(times) >= 3:
                avg_for_hour = sum(times) / len(times)
                if avg_for_hour > avg * 1.5:
                    recommendations.append(f'Responses at {hour}:00 are 50% slower than average - consider shift adjustment')
        
        if not recommendations:
            recommendations.append('Performance is within acceptable parameters')
        
        return recommendations
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process incoming email and optimize response timing"""
        sender = email_data.get('from', 'unknown')
        received_time = email_data.get('timestamp', datetime.now())
        priority = email_data.get('priority', 'medium')
        recipients = email_data.get('to', [])
        
        # Predict optimal response window
        optimal = self.predict_optimal_response_window(sender, priority)
        
        # Analyze patterns for this sender
        patterns = self.analyze_patterns(sender)
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        return {
            'engine': 'V1097 - Response Time Optimizer',
            'sender': sender,
            'priority': priority,
            'optimal_response': optimal,
            'sender_patterns': patterns,
            'reply_all_required': reply_all,
            'sla_deadline': optimal['sla_deadline'],
            'action': self.determine_action(priority, optimal)
        }
    
    def determine_action(self, priority: str, optimal: Dict) -> str:
        """Determine action based on priority and optimal timing"""
        hours_until_optimal = optimal['hours_from_now']
        
        if priority == 'critical':
            return 'Respond IMMEDIATELY - critical priority'
        elif priority == 'high' and hours_until_optimal > 2:
            return 'Respond within 2 hours - high priority SLA'
        elif hours_until_optimal <= 0.5:
            return 'Optimal time is NOW - send response immediately'
        elif hours_until_optimal <= 2:
            return f'Schedule response in {hours_until_optimal:.1f} hours for optimal engagement'
        else:
            return 'Schedule response for next optimal window'


if __name__ == '__main__':
    optimizer = ResponseTimeOptimizer()
    
    # Test with sample data
    now = datetime.now()
    
    # Add historical data
    for i in range(20):
        day_offset = i % 7
        hour = 9 + (i % 8)
        received = now - timedelta(days=day_offset, hours=i)
        responded = received + timedelta(hours=2 + (i % 5))
        priority = ['critical', 'high', 'medium', 'low'][i % 4]
        optimizer.track_response_time(f'client{i%3}@example.com', received, responded, priority)
        optimizer.track_engagement(f'client{i%3}@example.com', hour, i % 3 != 0, 30 + i * 5)
    
    # Process test email
    test_email = {
        'from': 'client1@example.com',
        'to': ['team@example.com', 'manager@example.com'],
        'subject': 'Urgent project update',
        'body': 'Need your response on the project timeline ASAP',
        'priority': 'high',
        'timestamp': now
    }
    
    result = optimizer.process_email(test_email)
    print("V1097 - Response Time Optimizer Test")
    print("=" * 60)
    print(json.dumps(result, indent=2, default=str))
    print("\nAnalytics Report:")
    print(json.dumps(optimizer.generate_analytics_report(), indent=2))
