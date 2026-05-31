#!/usr/bin/env python3
"""
V674 - Email Resource Allocation Optimizer
Analyzes email workload patterns to optimize team resource allocation
and capacity planning. Identifies overallocation, underutilization,
and provides rebalancing recommendations.

Key Features:
- Workload analysis per team member
- Capacity utilization tracking
- Overallocation detection
- Underutilization identification
- Resource rebalancing recommendations
- Team efficiency optimization
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import Counter, defaultdict
from typing import Dict, List, Optional, Set

class EmailResourceAllocationOptimizer:
    """Optimizes team resource allocation based on email workload patterns"""
    
    def __init__(self):
        self.team_registry = {}
        self.workload_data = defaultdict(list)
        self.capacity_limits = {}
        self.allocation_recommendations = []
    
    WORKLOAD_INDICATORS = {
        'high': ['urgent', 'asap', 'immediately', 'critical', 'priority', 'deadline today', 'emergency', 'overwhelmed', 'too much', 'can\'t handle'],
        'medium': ['important', 'soon', 'this week', 'when possible', 'need help', 'support needed'],
        'low': ['when you have time', 'no rush', 'flexible', 'low priority', 'nice to have']
    }
    
    CAPACITY_SIGNALS = {
        'overloaded': ['swamped', 'overwhelmed', 'too much on my plate', 'can\'t take more', 'at capacity', 'maxed out', 'burning out'],
        'available': ['available', 'have bandwidth', 'can help', 'free time', 'capacity', 'can take on', 'light workload'],
        'balanced': ['managing well', 'on track', 'under control', 'steady pace']
    }
    
    TASK_TYPES = {
        'project': ['project', 'initiative', 'deliverable', 'milestone', 'phase'],
        'support': ['support', 'help', 'assistance', 'issue', 'problem', 'ticket'],
        'meeting': ['meeting', 'call', 'sync', 'discussion', 'review'],
        'administrative': ['report', 'documentation', 'update', 'status', 'admin'],
        'strategic': ['planning', 'strategy', 'roadmap', 'vision', 'goals']
    }
    
    def analyze_workload(self, team_member: str, emails: List[Dict]) -> Dict:
        """Analyze workload for a team member from email patterns"""
        if not emails:
            return {'error': 'No emails provided'}
        
        total_emails = len(emails)
        
        # Calculate workload intensity
        workload_scores = []
        task_distribution = defaultdict(int)
        
        for email in emails:
            text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
            
            # Calculate workload score for this email
            email_score = 0
            for intensity, keywords in self.WORKLOAD_INDICATORS.items():
                matches = [kw for kw in keywords if kw in text]
                if intensity == 'high':
                    email_score += len(matches) * 3
                elif intensity == 'medium':
                    email_score += len(matches) * 2
                else:
                    email_score += len(matches) * 1
            
            workload_scores.append(email_score)
            
            # Categorize task type
            for task_type, keywords in self.TASK_TYPES.items():
                if any(kw in text for kw in keywords):
                    task_distribution[task_type] += 1
        
        # Calculate average workload
        avg_workload = sum(workload_scores) / len(workload_scores) if workload_scores else 0
        
        # Determine workload level
        if avg_workload >= 15:
            workload_level = 'very_high'
        elif avg_workload >= 10:
            workload_level = 'high'
        elif avg_workload >= 5:
            workload_level = 'medium'
        else:
            workload_level = 'low'
        
        # Calculate time span
        timestamps = [datetime.fromisoformat(e['timestamp']) for e in emails if 'timestamp' in e]
        if len(timestamps) >= 2:
            time_span = (max(timestamps) - min(timestamps)).days
        else:
            time_span = 1
        
        # Email frequency (per day)
        frequency = total_emails / max(1, time_span)
        
        workload_analysis = {
            'team_member': team_member,
            'total_emails': total_emails,
            'avg_workload_score': round(avg_workload, 2),
            'workload_level': workload_level,
            'task_distribution': dict(task_distribution),
            'email_frequency_per_day': round(frequency, 2),
            'time_span_days': time_span,
            'high_priority_count': sum(1 for score in workload_scores if score >= 10),
            'analysis_date': datetime.now().isoformat()
        }
        
        self.workload_data[team_member].append(workload_analysis)
        return workload_analysis
    
    def detect_capacity_status(self, team_member: str, emails: List[Dict]) -> Dict:
        """Detect capacity status from email communications"""
        text_all = ' '.join(
            (e.get('body', '') + ' ' + e.get('subject', '')).lower()
            for e in emails
        )
        
        capacity_signals = {
            'overloaded': [],
            'available': [],
            'balanced': []
        }
        
        for status, keywords in self.CAPACITY_SIGNALS.items():
            for keyword in keywords:
                if keyword in text_all:
                    capacity_signals[status].append(keyword)
        
        # Determine capacity status
        overloaded_score = len(capacity_signals['overloaded'])
        available_score = len(capacity_signals['available'])
        balanced_score = len(capacity_signals['balanced'])
        
        if overloaded_score > available_score + balanced_score:
            capacity_status = 'overloaded'
            utilization = 95
        elif available_score > overloaded_score + balanced_score:
            capacity_status = 'available'
            utilization = 50
        elif balanced_score > 0:
            capacity_status = 'balanced'
            utilization = 75
        else:
            # Default to balanced if no clear signals
            capacity_status = 'balanced'
            utilization = 75
        
        capacity_assessment = {
            'team_member': team_member,
            'capacity_status': capacity_status,
            'utilization_estimate': utilization,
            'capacity_signals': capacity_signals,
            'overloaded_indicators': len(capacity_signals['overloaded']),
            'available_indicators': len(capacity_signals['available']),
            'balanced_indicators': len(capacity_signals['balanced']),
            'assessment_date': datetime.now().isoformat(),
            'recommendations': self._generate_capacity_recommendations(capacity_status, utilization)
        }
        
        return capacity_assessment
    
    def _generate_capacity_recommendations(self, status: str, utilization: int) -> List[str]:
        """Generate capacity-based recommendations"""
        recommendations = []
        
        if status == 'overloaded':
            recommendations.extend([
                'Immediate workload rebalancing needed',
                'Delegate or postpone non-critical tasks',
                'Consider temporary resource augmentation',
                'Review and prioritize current commitments'
            ])
        elif status == 'available':
            recommendations.extend([
                'Available for additional assignments',
                'Can assist overloaded team members',
                'Consider taking on stretch assignments',
                'Good candidate for new initiatives'
            ])
        elif status == 'balanced':
            recommendations.extend([
                'Maintain current workload distribution',
                'Monitor for capacity changes',
                'Available for selective new assignments'
            ])
        
        return recommendations
    
    def identify_overallocation(self, team_data: Dict[str, Dict]) -> List[Dict]:
        """Identify overallocated team members"""
        overallocated = []
        
        for member, data in team_data.items():
            workload_level = data.get('workload_level', 'low')
            capacity_status = data.get('capacity_status', 'balanced')
            utilization = data.get('utilization_estimate', 75)
            
            # Overallocation criteria
            is_overallocated = (
                workload_level in ['very_high', 'high'] or
                capacity_status == 'overloaded' or
                utilization >= 90
            )
            
            if is_overallocated:
                overallocated.append({
                    'team_member': member,
                    'workload_level': workload_level,
                    'capacity_status': capacity_status,
                    'utilization': utilization,
                    'severity': 'critical' if utilization >= 95 else 'high',
                    'immediate_action_needed': utilization >= 95
                })
        
        # Sort by severity
        overallocated.sort(key=lambda x: x['utilization'], reverse=True)
        
        return overallocated
    
    def identify_underutilization(self, team_data: Dict[str, Dict]) -> List[Dict]:
        """Identify underutilized team members"""
        underutilized = []
        
        for member, data in team_data.items():
            workload_level = data.get('workload_level', 'low')
            capacity_status = data.get('capacity_status', 'balanced')
            utilization = data.get('utilization_estimate', 75)
            
            # Underutilization criteria
            is_underutilized = (
                workload_level == 'low' or
                capacity_status == 'available' or
                utilization <= 60
            )
            
            if is_underutilized:
                underutilized.append({
                    'team_member': member,
                    'workload_level': workload_level,
                    'capacity_status': capacity_status,
                    'utilization': utilization,
                    'available_capacity': 100 - utilization,
                    'can_assist': utilization <= 50
                })
        
        # Sort by available capacity
        underutilized.sort(key=lambda x: x['available_capacity'], reverse=True)
        
        return underutilized
    
    def generate_rebalancing_recommendations(self, overallocated: List[Dict], underutilized: List[Dict]) -> List[Dict]:
        """Generate resource rebalancing recommendations"""
        recommendations = []
        
        # Match overallocated with underutilized
        for over in overallocated:
            over_member = over['team_member']
            excess_workload = over['utilization'] - 80  # Target 80% utilization
            
            # Find best matches
            matches = []
            for under in underutilized:
                under_member = under['team_member']
                available_capacity = under['available_capacity']
                
                # Calculate how much can be transferred
                transfer_amount = min(excess_workload, available_capacity - 20)  # Leave 20% buffer
                
                if transfer_amount > 0:
                    matches.append({
                        'from': over_member,
                        'to': under_member,
                        'transfer_amount': transfer_amount,
                        'priority': 'high' if over['severity'] == 'critical' else 'medium'
                    })
            
            # Sort matches by transfer amount
            matches.sort(key=lambda x: x['transfer_amount'], reverse=True)
            recommendations.extend(matches[:3])  # Top 3 matches
        
        self.allocation_recommendations.extend(recommendations)
        return recommendations
    
    def optimize_team_allocation(self, team_members: List[str], emails_by_member: Dict[str, List[Dict]]) -> Dict:
        """Optimize team resource allocation"""
        team_data = {}
        
        # Analyze each team member
        for member in team_members:
            emails = emails_by_member.get(member, [])
            
            if not emails:
                continue
            
            # Analyze workload
            workload = self.analyze_workload(member, emails)
            
            # Detect capacity
            capacity = self.detect_capacity_status(member, emails)
            
            team_data[member] = {
                **workload,
                **capacity
            }
        
        # Identify overallocation
        overallocated = self.identify_overallocation(team_data)
        
        # Identify underutilization
        underutilized = self.identify_underutilization(team_data)
        
        # Generate rebalancing recommendations
        rebalancing = self.generate_rebalancing_recommendations(overallocated, underutilized)
        
        # Calculate team metrics
        total_utilization = sum(d.get('utilization_estimate', 75) for d in team_data.values())
        avg_utilization = total_utilization / len(team_data) if team_data else 0
        
        optimization_report = {
            'team_size': len(team_data),
            'avg_team_utilization': round(avg_utilization, 1),
            'overallocated_count': len(overallocated),
            'underutilized_count': len(underutilized),
            'balanced_count': len(team_data) - len(overallocated) - len(underutilized),
            'overallocated_members': overallocated,
            'underutilized_members': underutilized,
            'rebalancing_recommendations': rebalancing,
            'team_efficiency_score': self._calculate_efficiency_score(avg_utilization, len(overallocated), len(underutilized)),
            'optimization_date': datetime.now().isoformat(),
            'reply_all_required': True
        }
        
        return optimization_report
    
    def _calculate_efficiency_score(self, avg_utilization: float, overallocated: int, underutilized: int) -> float:
        """Calculate team efficiency score"""
        # Optimal utilization is around 80%
        utilization_score = 100 - abs(avg_utilization - 80)
        
        # Penalize for imbalance
        imbalance_penalty = (overallocated + underutilized) * 10
        
        efficiency = max(0, utilization_score - imbalance_penalty)
        return round(efficiency, 1)
    
    def process_team_emails(self, emails_by_member: Dict[str, List[Dict]]) -> Dict:
        """Process team emails for resource allocation optimization"""
        team_members = list(emails_by_member.keys())
        
        # Optimize allocation
        optimization = self.optimize_team_allocation(team_members, emails_by_member)
        
        return {
            'team_members': team_members,
            'total_emails_processed': sum(len(emails) for emails in emails_by_member.values()),
            'optimization_report': optimization,
            'summary': {
                'team_size': optimization['team_size'],
                'avg_utilization': optimization['avg_team_utilization'],
                'efficiency_score': optimization['team_efficiency_score'],
                'overallocated': optimization['overallocated_count'],
                'underutilized': optimization['underutilized_count'],
                'rebalancing_needed': len(optimization['rebalancing_recommendations']) > 0
            },
            'reply_all_required': True,
            'timestamp': datetime.now().isoformat()
        }
    
    def generate_resource_report(self) -> Dict:
        """Generate comprehensive resource allocation report"""
        if not self.workload_data:
            return {'message': 'No workload data tracked'}
        
        # Aggregate workload data
        total_analyses = sum(len(analyses) for analyses in self.workload_data.values())
        
        # Workload level distribution
        workload_levels = Counter()
        for member_analyses in self.workload_data.values():
            for analysis in member_analyses:
                workload_levels[analysis['workload_level']] += 1
        
        # Task type distribution
        task_types = Counter()
        for member_analyses in self.workload_data.values():
            for analysis in member_analyses:
                for task_type, count in analysis.get('task_distribution', {}).items():
                    task_types[task_type] += count
        
        return {
            'total_analyses': total_analyses,
            'team_members_tracked': len(self.workload_data),
            'workload_distribution': dict(workload_levels),
            'task_type_distribution': dict(task_types),
            'total_recommendations': len(self.allocation_recommendations),
            'reply_all_enforcement': 'Active for all resource allocation communications',
            'timestamp': datetime.now().isoformat()
        }


def test_v674():
    """Test V674 Email Resource Allocation Optimizer"""
    optimizer = EmailResourceAllocationOptimizer()
    
    # Test data: emails by team member
    emails_by_member = {
        'alice@company.com': [
            {
                'id': 'e001',
                'from': 'manager@company.com',
                'to': ['alice@company.com'],
                'subject': 'Urgent: Critical project deadline today',
                'body': 'I\'m overwhelmed with the current workload. Too much on my plate. Need help with the critical project that\'s due today. This is an emergency and priority.',
                'timestamp': '2026-05-30T09:00:00'
            },
            {
                'id': 'e002',
                'from': 'alice@company.com',
                'to': ['manager@company.com'],
                'subject': 'Re: Project status',
                'body': 'I\'m swamped and maxed out. Can\'t take more tasks right now. At capacity with current deliverables.',
                'timestamp': '2026-05-30T10:00:00'
            }
        ],
        'bob@company.com': [
            {
                'id': 'e003',
                'from': 'bob@company.com',
                'to': ['manager@company.com'],
                'subject': 'Available for new assignments',
                'body': 'I have bandwidth and available for new tasks. Can help with additional projects. My workload is light and I can take on more.',
                'timestamp': '2026-05-30T09:30:00'
            }
        ],
        'carol@company.com': [
            {
                'id': 'e004',
                'from': 'carol@company.com',
                'to': ['team@company.com'],
                'subject': 'Project update - on track',
                'body': 'The project is on track and managing well. Everything is under control at a steady pace. Meeting our milestones as planned.',
                'timestamp': '2026-05-30T11:00:00'
            }
        ]
    }
    
    # Process team emails
    result = optimizer.process_team_emails(emails_by_member)
    
    print(f"{'='*50}")
    print(f"Team Resource Allocation Optimization")
    print(f"{'='*50}")
    print(f"Team Size: {result['summary']['team_size']}")
    print(f"Avg Utilization: {result['summary']['avg_utilization']}%")
    print(f"Efficiency Score: {result['summary']['efficiency_score']}/100")
    print(f"Overallocated: {result['summary']['overallocated']}")
    print(f"Underutilized: {result['summary']['underutilized']}")
    print(f"Rebalancing Needed: {result['summary']['rebalancing_needed']}")
    
    report = result['optimization_report']
    
    if report['overallocated_members']:
        print(f"\n{'='*50}")
        print(f"Overallocated Members:")
        for member in report['overallocated_members']:
            print(f"  - {member['team_member']}: {member['utilization']}% ({member['severity']})")
    
    if report['underutilized_members']:
        print(f"\n{'='*50}")
        print(f"Underutilized Members:")
        for member in report['underutilized_members']:
            print(f"  - {member['team_member']}: {member['utilization']}% (Available: {member['available_capacity']}%)")
    
    if report['rebalancing_recommendations']:
        print(f"\n{'='*50}")
        print(f"Rebalancing Recommendations:")
        for rec in report['rebalancing_recommendations']:
            print(f"  - Transfer {rec['transfer_amount']}% from {rec['from']} to {rec['to']} ({rec['priority']} priority)")
    
    resource_report = optimizer.generate_resource_report()
    print(f"\n{'='*50}")
    print(f"✅ V674 Email Resource Allocation Optimizer Test Complete")
    print(f"Total Analyses: {resource_report['total_analyses']}")
    print(f"Team Members: {resource_report['team_members_tracked']}")
    
    return resource_report


if __name__ == '__main__':
    test_v674()
