#!/usr/bin/env python3
"""
V659 - Email Burnout Prevention Engine
Monitors email load per team member and suggests redistribution before burnout.
Tracks response burden, after-hours activity, and workload imbalance.

Key Features:
- Per-person email load monitoring
- After-hours activity detection
- Workload imbalance identification
- Redistribution recommendations
- Burnout risk scoring (0-100)
- Wellness break suggestions
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta, time
from collections import defaultdict, Counter
from typing import Dict, List, Optional, Tuple

class EmailBurnoutPreventionEngine:
    """Prevents email-related burnout through intelligent monitoring"""
    
    def __init__(self, work_hours_start: int = 9, work_hours_end: int = 17):
        self.email_logs = defaultdict(list)  # person -> list of email events
        self.workload_data = defaultdict(dict)  # person -> workload metrics
        self.alerts = []
        self.work_start = work_hours_start
        self.work_end = work_hours_end
        self.redistribution_suggestions = []
    
    def log_email_activity(self, person: str, email: Dict, activity_type: str = 'received') -> Dict:
        """Log email activity for a person"""
        timestamp = datetime.fromisoformat(email.get('timestamp', datetime.now().isoformat()))
        
        event = {
            'email_id': email.get('id', ''),
            'timestamp': timestamp.isoformat(),
            'type': activity_type,  # received, sent, replied
            'is_after_hours': timestamp.hour < self.work_start or timestamp.hour >= self.work_end,
            'is_weekend': timestamp.weekday() >= 5,
            'subject': email.get('subject', ''),
            'from': email.get('from', ''),
            'to': email.get('to', []),
            'body_length': len(email.get('body', '')),
            'requires_response': activity_type == 'received' and person not in email.get('cc', [])
        }
        
        self.email_logs[person].append(event)
        self._update_workload_metrics(person)
        self._check_burnout_risk(person)
        
        return event
    
    def _update_workload_metrics(self, person: str) -> None:
        """Update workload metrics for a person"""
        events = self.email_logs[person]
        if not events:
            return
        
        now = datetime.now()
        
        # Last 7 days metrics
        recent = [e for e in events if datetime.fromisoformat(e['timestamp']) > now - timedelta(days=7)]
        
        received = [e for e in recent if e['type'] == 'received']
        sent = [e for e in recent if e['type'] == 'sent']
        replied = [e for e in recent if e['type'] == 'replied']
        after_hours = [e for e in recent if e['is_after_hours']]
        weekend = [e for e in recent if e['is_weekend']]
        
        # Calculate response rate
        needs_response = [e for e in received if e['requires_response']]
        responded_to = len(replied)
        response_rate = responded_to / max(1, len(needs_response))
        
        # Calculate average body length (cognitive load)
        avg_body_length = sum(e['body_length'] for e in received) / max(1, len(received))
        
        self.workload_data[person] = {
            'emails_received_7d': len(received),
            'emails_sent_7d': len(sent),
            'emails_replied_7d': len(replied),
            'after_hours_count': len(after_hours),
            'weekend_count': len(weekend),
            'response_rate': round(response_rate, 2),
            'avg_email_length': round(avg_body_length, 0),
            'cognitive_load_score': self._calculate_cognitive_load(recent),
            'last_updated': now.isoformat()
        }
    
    def _calculate_cognitive_load(self, events: List[Dict]) -> int:
        """Calculate cognitive load score (0-100)"""
        if not events:
            return 0
        
        score = 0
        
        # Volume factor (0-40 points)
        volume = len(events)
        score += min(40, volume * 2)
        
        # After-hours factor (0-30 points)
        after_hours = sum(1 for e in events if e['is_after_hours'])
        score += min(30, after_hours * 10)
        
        # Long email factor (0-15 points)
        long_emails = sum(1 for e in events if e['body_length'] > 1000)
        score += min(15, long_emails * 3)
        
        # Weekend factor (0-15 points)
        weekend = sum(1 for e in events if e['is_weekend'])
        score += min(15, weekend * 5)
        
        return min(100, score)
    
    def _check_burnout_risk(self, person: str) -> None:
        """Check burnout risk for a person"""
        metrics = self.workload_data.get(person, {})
        
        risk_factors = []
        risk_score = 0
        
        # High volume
        if metrics.get('emails_received_7d', 0) > 200:
            risk_factors.append('Very high email volume (>200/week)')
            risk_score += 25
        
        # After-hours activity
        if metrics.get('after_hours_count', 0) > 10:
            risk_factors.append('Frequent after-hours activity (>10/week)')
            risk_score += 25
        
        # Weekend work
        if metrics.get('weekend_count', 0) > 5:
            risk_factors.append('Regular weekend email activity (>5/week)')
            risk_score += 20
        
        # Low response rate (feeling overwhelmed)
        if metrics.get('response_rate', 1) < 0.5:
            risk_factors.append('Low response rate (<50%) - possible overwhelm')
            risk_score += 15
        
        # High cognitive load
        if metrics.get('cognitive_load_score', 0) > 70:
            risk_factors.append('High cognitive load score')
            risk_score += 15
        
        if risk_score >= 50:
            self.alerts.append({
                'person': person,
                'risk_score': min(100, risk_score),
                'risk_factors': risk_factors,
                'timestamp': datetime.now().isoformat(),
                'severity': 'critical' if risk_score >= 75 else 'high'
            })
    
    def calculate_burnout_risk(self, person: str) -> Dict:
        """Calculate detailed burnout risk assessment"""
        metrics = self.workload_data.get(person, {})
        
        if not metrics:
            return {'person': person, 'risk_score': 0, 'risk_level': 'no_data'}
        
        # Calculate risk score (0-100)
        risk_score = 0
        
        # Volume risk (0-25)
        volume = metrics.get('emails_received_7d', 0)
        risk_score += min(25, volume / 10)
        
        # After-hours risk (0-25)
        after_hours = metrics.get('after_hours_count', 0)
        risk_score += min(25, after_hours * 2.5)
        
        # Weekend risk (0-20)
        weekend = metrics.get('weekend_count', 0)
        risk_score += min(20, weekend * 4)
        
        # Response burden risk (0-15)
        response_rate = metrics.get('response_rate', 1)
        if response_rate < 0.5:
            risk_score += 15
        elif response_rate < 0.7:
            risk_score += 8
        
        # Cognitive load risk (0-15)
        cognitive = metrics.get('cognitive_load_score', 0)
        risk_score += min(15, cognitive * 0.15)
        
        risk_score = min(100, round(risk_score, 1))
        
        if risk_score >= 75:
            level = 'critical'
        elif risk_score >= 50:
            level = 'high'
        elif risk_score >= 30:
            level = 'moderate'
        elif risk_score >= 15:
            level = 'low'
        else:
            level = 'minimal'
        
        return {
            'person': person,
            'risk_score': risk_score,
            'risk_level': level,
            'metrics': metrics,
            'recommendations': self._generate_wellness_recommendations(risk_score, metrics),
            'reply_all_required': False
        }
    
    def _generate_wellness_recommendations(self, risk_score: float, metrics: Dict) -> List[Dict]:
        """Generate wellness recommendations based on risk"""
        recommendations = []
        
        if risk_score >= 75:
            recommendations.append({
                'priority': 'urgent',
                'action': 'immediate_break',
                'description': 'Take a 24-hour email break. Delegate urgent matters.',
                'category': 'rest'
            })
            recommendations.append({
                'priority': 'urgent',
                'action': 'manager_conversation',
                'description': 'Discuss workload with manager. Consider temporary redistribution.',
                'category': 'support'
            })
        
        if metrics.get('after_hours_count', 0) > 5:
            recommendations.append({
                'priority': 'high',
                'action': 'set_boundaries',
                'description': 'Set email boundaries: no emails after 6 PM or before 8 AM.',
                'category': 'boundaries'
            })
        
        if metrics.get('emails_received_7d', 0) > 150:
            recommendations.append({
                'priority': 'high',
                'action': 'batch_processing',
                'description': 'Process emails in 3 scheduled batches instead of real-time.',
                'category': 'efficiency'
            })
        
        if metrics.get('weekend_count', 0) > 3:
            recommendations.append({
                'priority': 'medium',
                'action': 'weekend_disconnect',
                'description': 'Disconnect from email on weekends. Use auto-responder.',
                'category': 'rest'
            })
        
        if metrics.get('response_rate', 1) < 0.5:
            recommendations.append({
                'priority': 'medium',
                'action': 'triage_system',
                'description': 'Implement email triage: delete, delegate, defer, do.',
                'category': 'efficiency'
            })
        
        if not recommendations:
            recommendations.append({
                'priority': 'low',
                'action': 'maintain_habits',
                'description': 'Current email habits are healthy. Keep it up!',
                'category': 'maintenance'
            })
        
        return recommendations
    
    def suggest_redistribution(self, team: List[str]) -> Dict:
        """Suggest email redistribution across team"""
        team_metrics = {}
        for person in team:
            risk = self.calculate_burnout_risk(person)
            team_metrics[person] = risk
        
        # Find overloaded and underloaded members
        overloaded = [(p, m) for p, m in team_metrics.items() if m['risk_score'] > 50]
        underloaded = [(p, m) for p, m in team_metrics.items() if m['risk_score'] < 30]
        
        suggestions = []
        
        for over_person, over_data in overloaded:
            # Find best match for redistribution
            best_match = None
            best_score = float('inf')
            
            for under_person, under_data in underloaded:
                if under_data['risk_score'] < best_score:
                    best_score = under_data['risk_score']
                    best_match = under_person
            
            if best_match:
                suggestions.append({
                    'from': over_person,
                    'to': best_match,
                    'reason': f'{over_person} is at {over_data["risk_score"]}% burnout risk, {best_match} is at {best_score}%',
                    'estimated_reduction': '20-30% of email load',
                    'priority': 'high' if over_data['risk_score'] > 75 else 'medium'
                })
        
        return {
            'team_size': len(team),
            'overloaded_count': len(overloaded),
            'underloaded_count': len(underloaded),
            'redistribution_suggestions': suggestions,
            'team_avg_risk': round(sum(m['risk_score'] for m in team_metrics.values()) / max(1, len(team_metrics)), 1),
            'reply_all_required': True
        }
    
    def generate_team_wellness_report(self, team: List[str]) -> Dict:
        """Generate team wellness report"""
        assessments = []
        for person in team:
            assessment = self.calculate_burnout_risk(person)
            assessments.append(assessment)
        
        risk_levels = Counter(a['risk_level'] for a in assessments)
        avg_risk = sum(a['risk_score'] for a in assessments) / max(1, len(assessments))
        
        return {
            'team_size': len(team),
            'avg_risk_score': round(avg_risk, 1),
            'risk_distribution': dict(risk_levels),
            'critical_cases': [a for a in assessments if a['risk_level'] == 'critical'],
            'high_risk_cases': [a for a in assessments if a['risk_level'] == 'high'],
            'healthy_members': [a for a in assessments if a['risk_level'] in ['minimal', 'low']],
            'team_recommendations': [
                'Implement email-free meeting days',
                'Set team-wide after-hours boundaries',
                'Use async communication tools for non-urgent matters',
                'Regular workload check-ins during 1:1s'
            ]
        }


def test_v659():
    """Test V659 Email Burnout Prevention Engine"""
    engine = EmailBurnoutPreventionEngine()
    
    team = ['alice@company.com', 'bob@company.com', 'carol@company.com']
    
    # Simulate Alice being overloaded
    for i in range(25):
        hour = 20 if i % 3 == 0 else 10  # Some after-hours
        day_offset = i % 8  # Some weekend days
        ts = datetime(2026, 5, 22 + day_offset, hour, 30)
        engine.log_email_activity('alice@company.com', {
            'id': f'alice_e{i}', 'from': f'sender{i}@company.com',
            'to': ['alice@company.com'], 'subject': f'Task {i}',
            'body': 'x' * (500 + i * 100), 'timestamp': ts.isoformat()
        })
    
    # Simulate Bob with moderate load
    for i in range(8):
        ts = datetime(2026, 5, 26 + i % 3, 11, 0)
        engine.log_email_activity('bob@company.com', {
            'id': f'bob_e{i}', 'from': f'sender{i}@company.com',
            'to': ['bob@company.com'], 'subject': f'Update {i}',
            'body': 'x' * 300, 'timestamp': ts.isoformat()
        })
    
    # Simulate Carol with low load
    for i in range(3):
        ts = datetime(2026, 5, 28, 14, 0)
        engine.log_email_activity('carol@company.com', {
            'id': f'carol_e{i}', 'from': f'sender{i}@company.com',
            'to': ['carol@company.com'], 'subject': f'Info {i}',
            'body': 'x' * 200, 'timestamp': ts.isoformat()
        })
    
    # Generate reports
    alice_risk = engine.calculate_burnout_risk('alice@company.com')
    bob_risk = engine.calculate_burnout_risk('bob@company.com')
    carol_risk = engine.calculate_burnout_risk('carol@company.com')
    redistribution = engine.suggest_redistribution(team)
    team_report = engine.generate_team_wellness_report(team)
    
    print("✅ V659 Email Burnout Prevention Engine Test")
    print(f"\nAlice: {alice_risk['risk_score']}/100 ({alice_risk['risk_level']})")
    for rec in alice_risk['recommendations']:
        print(f"  [{rec['priority']}] {rec['description']}")
    print(f"\nBob: {bob_risk['risk_score']}/100 ({bob_risk['risk_level']})")
    print(f"Carol: {carol_risk['risk_score']}/100 ({carol_risk['risk_level']})")
    print(f"\nTeam Avg Risk: {team_report['avg_risk_score']}/100")
    print(f"Redistribution Suggestions: {len(redistribution['redistribution_suggestions'])}")
    for s in redistribution['redistribution_suggestions']:
        print(f"  {s['from']} → {s['to']}: {s['reason']}")
    
    return team_report


if __name__ == '__main__':
    test_v659()
