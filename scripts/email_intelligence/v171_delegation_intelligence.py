#!/usr/bin/env python3
"""
V171 - AI Email Delegation Intelligence
Intelligently routes emails to team members based on expertise, workload,
availability, and historical performance. Ensures optimal assignment.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict


class DelegationIntelligence:
    """AI-powered email delegation and routing system."""

    def __init__(self):
        self.team_members = {}
        self.expertise_map = defaultdict(dict)
        self.workload_tracker = defaultdict(dict)
        self.routing_history = []
        self.performance_metrics = defaultdict(dict)

    def register_team_member(self, member_id: str, profile: Dict):
        """Register a team member with their profile."""
        self.team_members[member_id] = {
            'name': profile.get('name', member_id),
            'email': profile.get('email', ''),
            'role': profile.get('role', 'general'),
            'expertise': profile.get('expertise', []),
            'timezone': profile.get('timezone', 'UTC'),
            'working_hours': profile.get('working_hours', {'start': 9, 'end': 17}),
            'max_daily_emails': profile.get('max_daily_emails', 50),
            'status': profile.get('status', 'available'),
            'languages': profile.get('languages', ['en'])
        }

    def track_workload(self, member_id: str, date: str = None):
        """Track current workload for a team member."""
        if not date:
            date = datetime.now().strftime('%Y-%m-%d')

        if member_id not in self.workload_tracker:
            self.workload_tracker[member_id] = {}

        if date not in self.workload_tracker[member_id]:
            self.workload_tracker[member_id][date] = {
                'emails_assigned': 0,
                'emails_completed': 0,
                'avg_response_time': None,
                'pending': 0
            }

    def assign_email(self, member_id: str, email: Dict):
        """Record email assignment to team member."""
        date = datetime.now().strftime('%Y-%m-%d')
        self.track_workload(member_id, date)

        self.workload_tracker[member_id][date]['emails_assigned'] += 1
        self.workload_tracker[member_id][date]['pending'] += 1

        self.routing_history.append({
            'email_id': email.get('id', ''),
            'assigned_to': member_id,
            'timestamp': datetime.now().isoformat(),
            'from': email.get('from', ''),
            'subject': email.get('subject', '')
        })

    def complete_email(self, member_id: str, response_time_hours: float):
        """Record email completion."""
        date = datetime.now().strftime('%Y-%m-%d')
        if member_id in self.workload_tracker and date in self.workload_tracker[member_id]:
            tracker = self.workload_tracker[member_id][date]
            tracker['emails_completed'] += 1
            tracker['pending'] = max(0, tracker['pending'] - 1)

            # Update average response time
            completed = tracker['emails_completed']
            current_avg = tracker.get('avg_response_time') or response_time_hours
            tracker['avg_response_time'] = (current_avg * (completed - 1) + response_time_hours) / completed

    def recommend_delegation(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Recommend optimal team member for email delegation."""
        if not self.team_members:
            return {'error': 'No team members registered'}

        # Analyze email requirements
        requirements = self._analyze_requirements(email)

        # Score each team member
        candidates = []
        for member_id, profile in self.team_members.items():
            score = self._calculate_match_score(member_id, profile, requirements, email)
            candidates.append({
                'member_id': member_id,
                'name': profile['name'],
                'email': profile['email'],
                'match_score': round(score['total'], 1),
                'breakdown': score,
                'current_workload': self._get_current_workload(member_id),
                'availability': self._check_availability(member_id)
            })

        # Sort by score
        candidates.sort(key=lambda x: x['match_score'], reverse=True)

        # Filter available candidates
        available = [c for c in candidates if c['availability']['is_available']]

        best_match = available[0] if available else candidates[0]

        return {
            'email_subject': email.get('subject', ''),
            'email_from': email.get('from', ''),
            'requirements': requirements,
            'recommended_delegate': best_match,
            'all_candidates': candidates[:5],
            'reasoning': self._generate_reasoning(best_match, requirements),
            'reply_all_with_delegation': len(email.get('cc', [])) > 0,
            'escalation_path': self._build_escalation_path(candidates),
            'fallback_options': [c for c in candidates[1:4] if c['availability']['is_available']]
        }

    def _analyze_requirements(self, email: Dict) -> Dict:
        """Analyze email to determine delegation requirements."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()

        # Detect expertise areas needed
        expertise_areas = []
        expertise_keywords = {
            'technical': ['api', 'code', 'bug', 'server', 'deploy', 'database', 'infrastructure'],
            'sales': ['pricing', 'contract', 'deal', 'proposal', 'quote', 'negotiation'],
            'support': ['help', 'issue', 'problem', 'not working', 'error', 'troubleshoot'],
            'finance': ['invoice', 'payment', 'billing', 'budget', 'cost', 'financial'],
            'legal': ['contract', 'agreement', 'legal', 'compliance', 'terms', 'liability'],
            'marketing': ['campaign', 'content', 'brand', 'social media', 'seo', 'marketing'],
            'hr': ['hiring', 'interview', 'onboarding', 'employee', 'benefits', 'policy']
        }

        for area, keywords in expertise_keywords.items():
            if any(kw in content for kw in keywords):
                expertise_areas.append(area)

        # Detect urgency
        urgency = 'medium'
        if any(w in content for w in ['urgent', 'asap', 'critical', 'emergency']):
            urgency = 'high'
        elif any(w in content for w in ['when convenient', 'no rush', 'fyi']):
            urgency = 'low'

        # Detect language
        language = 'en'
        lang_indicators = {
            'es': ['hola', 'gracias', 'por favor', 'buenos'],
            'pt': ['olá', 'obrigado', 'por favor', 'bom dia'],
            'fr': ['bonjour', 'merci', 'sil vous plaît'],
            'de': ['hallo', 'danke', 'bitte', 'guten']
        }
        for lang, indicators in lang_indicators.items():
            if any(ind in content for ind in indicators):
                language = lang
                break

        return {
            'expertise_needed': expertise_areas or ['general'],
            'urgency': urgency,
            'language': language,
            'complexity': 'high' if len(content) > 1000 else 'medium' if len(content) > 300 else 'low',
            'requires_specialist': len(expertise_areas) > 0
        }

    def _calculate_match_score(self, member_id: str, profile: Dict, 
                                requirements: Dict, email: Dict) -> Dict:
        """Calculate match score for a team member."""
        scores = {}

        # Expertise match (0-40)
        expertise_needed = requirements['expertise_needed']
        member_expertise = profile.get('expertise', [])
        overlap = set(expertise_needed) & set(member_expertise)
        expertise_match = len(overlap) / max(len(expertise_needed), 1)
        scores['expertise'] = expertise_match * 40

        # Workload capacity (0-25)
        workload = self._get_current_workload(member_id)
        max_capacity = profile.get('max_daily_emails', 50)
        remaining = max_capacity - workload['assigned_today']
        capacity_ratio = remaining / max(max_capacity, 1)
        scores['capacity'] = max(0, capacity_ratio * 25)

        # Availability (0-15)
        availability = self._check_availability(member_id)
        scores['availability'] = 15 if availability['is_available'] else 3

        # Performance history (0-10)
        performance = self._get_performance_score(member_id)
        scores['performance'] = performance * 10

        # Language match (0-10)
        required_lang = requirements.get('language', 'en')
        member_langs = profile.get('languages', ['en'])
        scores['language'] = 10 if required_lang in member_langs else 2

        scores['total'] = sum(scores.values())
        return scores

    def _get_current_workload(self, member_id: str) -> Dict:
        """Get current workload for a team member."""
        date = datetime.now().strftime('%Y-%m-%d')
        tracker = self.workload_tracker.get(member_id, {})
        today = tracker.get(date, {'emails_assigned': 0, 'emails_completed': 0, 'pending': 0})

        return {
            'assigned_today': today['emails_assigned'],
            'completed_today': today['emails_completed'],
            'pending': today['pending']
        }

    def _check_availability(self, member_id: str) -> Dict:
        """Check if team member is currently available."""
        profile = self.team_members.get(member_id, {})

        if profile.get('status') != 'available':
            return {'is_available': False, 'reason': f"Status: {profile.get('status')}"}

        # Check working hours
        now = datetime.now()
        working_hours = profile.get('working_hours', {'start': 9, 'end': 17})

        if working_hours['start'] <= now.hour < working_hours['end']:
            return {'is_available': True, 'reason': 'Within working hours'}
        else:
            return {'is_available': False, 'reason': 'Outside working hours'}

    def _get_performance_score(self, member_id: str) -> float:
        """Get performance score (0-1) for a team member."""
        tracker = self.workload_tracker.get(member_id, {})

        all_assigned = 0
        all_completed = 0
        response_times = []

        for date_data in tracker.values():
            all_assigned += date_data.get('emails_assigned', 0)
            all_completed += date_data.get('emails_completed', 0)
            if date_data.get('avg_response_time'):
                response_times.append(date_data['avg_response_time'])

        if all_assigned == 0:
            return 0.5  # New member, neutral score

        completion_rate = all_completed / all_assigned
        avg_response = sum(response_times) / len(response_times) if response_times else 24

        # Score: completion rate + response time factor
        response_score = max(0, 1 - (avg_response / 48))  # Penalize slow responses
        return (completion_rate * 0.6 + response_score * 0.4)

    def _generate_reasoning(self, match: Dict, requirements: Dict) -> str:
        """Generate human-readable reasoning for delegation recommendation."""
        parts = []

        score = match['breakdown']
        if score['expertise'] >= 30:
            parts.append(f"Strong expertise match ({score['expertise']:.0f}/40)")
        if score['capacity'] >= 20:
            parts.append(f"Has capacity ({match['current_workload']['assigned_today']} emails today)")
        if match['availability']['is_available']:
            parts.append("Currently available")
        if score['language'] >= 8:
            parts.append(f"Speaks required language ({requirements['language']})")

        return ' | '.join(parts) if parts else 'Best available match'

    def _build_escalation_path(self, candidates: List[Dict]) -> List[Dict]:
        """Build escalation path if primary delegate is unavailable."""
        path = []
        for i, candidate in enumerate(candidates[:3]):
            path.append({
                'level': i + 1,
                'member': candidate['name'],
                'member_id': candidate['member_id'],
                'match_score': candidate['match_score'],
                'available': candidate['availability']['is_available']
            })
        return path

    def get_delegation_stats(self) -> Dict:
        """Get delegation statistics."""
        total_routed = len(self.routing_history)
        member_distribution = defaultdict(int)
        for route in self.routing_history:
            member_distribution[route['assigned_to']] += 1

        return {
            'total_emails_routed': total_routed,
            'team_size': len(self.team_members),
            'distribution': dict(member_distribution),
            'avg_per_member': round(total_routed / max(len(self.team_members), 1), 1)
        }


if __name__ == '__main__':
    delegation = DelegationIntelligence()

    # Register team
    delegation.register_team_member('alice', {
        'name': 'Alice Johnson', 'email': 'alice@zion.com',
        'expertise': ['technical', 'support'], 'languages': ['en', 'es'],
        'max_daily_emails': 40
    })
    delegation.register_team_member('bob', {
        'name': 'Bob Smith', 'email': 'bob@zion.com',
        'expertise': ['sales', 'finance'], 'languages': ['en'],
        'max_daily_emails': 30
    })

    # Recommend delegation
    result = delegation.recommend_delegation({
        'from': 'client@company.com',
        'subject': 'API integration issue - urgent',
        'body': 'Our API endpoint is returning 500 errors. This is critical and we need immediate help debugging the server issue.',
        'cc': ['manager@company.com']
    })
    print(json.dumps(result, indent=2))
