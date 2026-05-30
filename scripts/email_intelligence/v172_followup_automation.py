#!/usr/bin/env python3
"""
V172 - AI Email Follow-up Automation
Automatically schedules and sends follow-ups when no response is received.
Learns optimal follow-up timing and generates contextually appropriate reminders.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict


class FollowUpAutomation:
    """AI-powered automatic email follow-up system."""

    def __init__(self):
        self.pending_followups = {}
        self.followup_history = []
        self.response_patterns = defaultdict(list)
        self.templates = self._build_templates()

    def _build_templates(self) -> Dict[str, Dict]:
        """Build follow-up message templates."""
        return {
            'gentle_reminder': {
                'tone': 'friendly',
                'template': 'Hi {name}, just following up on my previous email about {subject}. Wanted to make sure it didn\'t get lost in your inbox.',
                'delay_hours': 48
            },
            'value_add': {
                'tone': 'helpful',
                'template': 'Hi {name}, following up on {subject}. I thought this additional information might be helpful: {value_add}.',
                'delay_hours': 72
            },
            'urgent_followup': {
                'tone': 'urgent',
                'template': 'Hi {name}, I need to follow up urgently regarding {subject}. This requires your attention by {deadline}.',
                'delay_hours': 24
            },
            'breakup_email': {
                'tone': 'final',
                'template': 'Hi {name}, I haven\'t heard back about {subject}. I\'ll assume this is no longer a priority and close this thread. Feel free to reach out if that changes.',
                'delay_hours': 168  # 7 days
            },
            'meeting_followup': {
                'tone': 'professional',
                'template': 'Hi {name}, following up on our meeting about {subject}. As discussed, here are the next steps: {action_items}.',
                'delay_hours': 24
            }
        }

    def schedule_followup(self, email: Dict[str, Any], options: Dict = None) -> Dict:
        """Schedule a follow-up for an email."""
        options = options or {}
        email_id = email.get('id', f"email_{hash(email.get('subject', ''))}")

        # Determine follow-up parameters
        urgency = self._detect_urgency(email)
        followup_type = options.get('type', self._recommend_followup_type(email, urgency))
        delay_hours = options.get('delay_hours', self.templates[followup_type]['delay_hours'])

        # Adjust delay based on learned patterns
        sender = email.get('from', '')
        learned_delay = self._get_learned_delay(sender, followup_type)
        if learned_delay:
            delay_hours = learned_delay

        scheduled_time = datetime.now() + timedelta(hours=delay_hours)

        followup = {
            'followup_id': f"fu_{datetime.now().strftime('%Y%m%d%H%M%S')}_{email_id[:8]}",
            'original_email_id': email_id,
            'original_subject': email.get('subject', ''),
            'recipient': email.get('from', ''),
            'scheduled_time': scheduled_time.isoformat(),
            'delay_hours': delay_hours,
            'followup_type': followup_type,
            'status': 'scheduled',
            'message': self._generate_followup_message(email, followup_type, options),
            'reply_all': email.get('cc') is not None and len(email.get('cc', [])) > 0,
            'max_followups': options.get('max_followups', 3),
            'current_attempt': 1,
            'created_at': datetime.now().isoformat()
        }

        self.pending_followups[followup['followup_id']] = followup
        return followup

    def _detect_urgency(self, email: Dict) -> str:
        """Detect urgency level of email."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()

        if any(w in content for w in ['urgent', 'asap', 'critical', 'immediately', 'emergency']):
            return 'high'
        elif any(w in content for w in ['when convenient', 'no rush', 'fyi']):
            return 'low'
        return 'medium'

    def _recommend_followup_type(self, email: Dict, urgency: str) -> str:
        """Recommend follow-up type based on email content."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()

        if urgency == 'high':
            return 'urgent_followup'
        elif any(w in content for w in ['meeting', 'call', 'discussed']):
            return 'meeting_followup'
        elif any(w in content for w in ['proposal', 'quote', 'pricing']):
            return 'value_add'
        else:
            return 'gentle_reminder'

    def _get_learned_delay(self, sender: str, followup_type: str) -> Optional[float]:
        """Get learned optimal delay for sender."""
        patterns = self.response_patterns.get(sender, [])
        if not patterns:
            return None

        # Find average response time for this sender
        relevant = [p for p in patterns if p.get('responded')]
        if relevant:
            avg_hours = sum(p.get('response_hours', 48) for p in relevant) / len(relevant)
            # Follow up slightly before their average response time
            return max(12, avg_hours * 0.8)

        return None

    def _generate_followup_message(self, email: Dict, followup_type: str, options: Dict) -> Dict:
        """Generate follow-up message."""
        template = self.templates.get(followup_type, self.templates['gentle_reminder'])
        sender = email.get('from', '')
        name = self._extract_name(sender)
        subject = email.get('subject', 'our previous conversation')

        message_text = template['template'].format(
            name=name,
            subject=subject[:80],
            value_add=options.get('value_add', 'some relevant insights'),
            deadline=options.get('deadline', 'end of week'),
            action_items=options.get('action_items', 'Please review and let me know your thoughts')
        )

        return {
            'subject': f"Re: {email.get('subject', 'Following up')}",
            'body': message_text,
            'tone': template['tone'],
            'personalization': {
                'name': name,
                'reference_subject': subject[:80]
            }
        }

    def _extract_name(self, email: str) -> str:
        """Extract name from email address."""
        if '<' in email:
            return email.split('<')[0].strip()
        local = email.split('@')[0] if '@' in email else email
        return local.replace('.', ' ').replace('_', ' ').replace('-', ' ').title()

    def check_and_execute_followups(self) -> List[Dict]:
        """Check for pending follow-ups that are due and execute them."""
        now = datetime.now()
        executed = []

        for fu_id, followup in list(self.pending_followups.items()):
            if followup['status'] != 'scheduled':
                continue

            scheduled_time = datetime.fromisoformat(followup['scheduled_time'])
            if now >= scheduled_time:
                # Execute follow-up
                result = self._execute_followup(followup)
                executed.append(result)

        return executed

    def _execute_followup(self, followup: Dict) -> Dict:
        """Execute a follow-up."""
        # Mark as sent
        followup['status'] = 'sent'
        followup['sent_at'] = datetime.now().isoformat()

        # Record in history
        self.followup_history.append(followup)

        # Schedule next follow-up if needed
        if followup['current_attempt'] < followup['max_followups']:
            next_type = self._get_escalation_type(followup['followup_type'], followup['current_attempt'])
            next_delay = self.templates[next_type]['delay_hours']

            next_followup = {
                'followup_id': f"fu_{datetime.now().strftime('%Y%m%d%H%M%S')}_next",
                'original_email_id': followup['original_email_id'],
                'original_subject': followup['original_subject'],
                'recipient': followup['recipient'],
                'scheduled_time': (datetime.now() + timedelta(hours=next_delay)).isoformat(),
                'delay_hours': next_delay,
                'followup_type': next_type,
                'status': 'scheduled',
                'message': self._generate_followup_message(
                    {'from': followup['recipient'], 'subject': followup['original_subject']},
                    next_type, {}
                ),
                'reply_all': followup['reply_all'],
                'max_followups': followup['max_followups'],
                'current_attempt': followup['current_attempt'] + 1,
                'created_at': datetime.now().isoformat()
            }
            self.pending_followups[next_followup['followup_id']] = next_followup

        # Remove from pending
        del self.pending_followups[followup['followup_id']]

        return {
            'action': 'followup_sent',
            'followup_id': followup['followup_id'],
            'recipient': followup['recipient'],
            'type': followup['followup_type'],
            'attempt': followup['current_attempt'],
            'next_scheduled': followup['current_attempt'] < followup['max_followups']
        }

    def _get_escalation_type(self, current_type: str, attempt: int) -> str:
        """Get escalated follow-up type."""
        escalation_chain = {
            'gentle_reminder': ['value_add', 'breakup_email'],
            'value_add': ['urgent_followup', 'breakup_email'],
            'meeting_followup': ['gentle_reminder', 'breakup_email'],
            'urgent_followup': ['urgent_followup', 'breakup_email']
        }

        chain = escalation_chain.get(current_type, ['gentle_reminder', 'breakup_email'])
        idx = min(attempt - 1, len(chain) - 1)
        return chain[idx]

    def cancel_followup(self, followup_id: str) -> Dict:
        """Cancel a pending follow-up (e.g., when response is received)."""
        if followup_id in self.pending_followups:
            self.pending_followups[followup_id]['status'] = 'cancelled'
            self.pending_followups[followup_id]['cancelled_at'] = datetime.now().isoformat()

            # Record response pattern
            fu = self.pending_followups[followup_id]
            self.response_patterns[fu['recipient']].append({
                'responded': True,
                'response_hours': (datetime.now() - datetime.fromisoformat(fu['created_at'])).total_seconds() / 3600,
                'followup_type': fu['followup_type']
            })

            del self.pending_followups[followup_id]
            return {'status': 'cancelled', 'followup_id': followup_id}

        return {'error': 'Follow-up not found'}

    def record_response(self, sender: str, original_subject: str, response_hours: float):
        """Record that a response was received."""
        self.response_patterns[sender].append({
            'responded': True,
            'response_hours': response_hours,
            'subject': original_subject,
            'timestamp': datetime.now().isoformat()
        })

        # Cancel any pending follow-ups for this sender/subject
        to_cancel = []
        for fu_id, fu in self.pending_followups.items():
            if fu['recipient'] == sender and fu['original_subject'] == original_subject:
                to_cancel.append(fu_id)

        for fu_id in to_cancel:
            self.cancel_followup(fu_id)

    def get_followup_stats(self) -> Dict:
        """Get follow-up statistics."""
        total_sent = len(self.followup_history)
        total_pending = len([f for f in self.pending_followups.values() if f['status'] == 'scheduled'])
        total_cancelled = len([f for f in self.followup_history if f.get('status') == 'cancelled'])

        response_rate = 0
        if total_sent > 0:
            responded = sum(1 for f in self.followup_history if f.get('got_response'))
            response_rate = responded / total_sent

        return {
            'total_followups_sent': total_sent,
            'pending_followups': total_pending,
            'response_rate': round(response_rate * 100, 1),
            'avg_response_time': self._get_avg_response_time(),
            'type_distribution': self._get_type_distribution()
        }

    def _get_avg_response_time(self) -> float:
        """Get average response time after follow-up."""
        times = []
        for patterns in self.response_patterns.values():
            for p in patterns:
                if p.get('responded') and p.get('response_hours'):
                    times.append(p['response_hours'])
        return round(sum(times) / len(times), 1) if times else 0

    def _get_type_distribution(self) -> Dict:
        """Get follow-up type distribution."""
        dist = defaultdict(int)
        for fu in self.followup_history:
            dist[fu.get('followup_type', 'unknown')] += 1
        return dict(dist)


if __name__ == '__main__':
    automation = FollowUpAutomation()

    # Schedule a follow-up
    result = automation.schedule_followup({
        'id': 'email_001',
        'from': 'prospect@company.com',
        'subject': 'AI consulting proposal - $75,000',
        'body': 'Please review our proposal for the AI consulting engagement.',
        'cc': ['decision_maker@company.com']
    })
    print(json.dumps(result, indent=2))
