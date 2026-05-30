"""
V148: AI Email SLA Enforcement Engine
Tracks response time commitments and enforces SLA compliance.
"""
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from enum import Enum
import hashlib


class SLATier(Enum):
    PREMIUM = "premium"      # 1 hour response
    ENTERPRISE = "enterprise"  # 4 hour response
    STANDARD = "standard"    # 24 hour response
    BASIC = "basic"          # 48 hour response
    FREE = "free"            # 72 hour response


class SLAStatus(Enum):
    ON_TRACK = "on_track"
    AT_RISK = "at_risk"
    BREACHED = "breached"
    COMPLETED = "completed"


class EscalationLevel(Enum):
    NONE = "none"
    WARNING = "warning"
    URGENT = "urgent"
    CRITICAL = "critical"


class SLAEnforcementEngine:
    """Enforces SLA compliance and tracks response times."""
    
    SLA_RESPONSE_TIMES = {
        SLATier.PREMIUM: timedelta(hours=1),
        SLATier.ENTERPRISE: timedelta(hours=4),
        SLATier.STANDARD: timedelta(hours=24),
        SLATier.BASIC: timedelta(hours=48),
        SLATier.FREE: timedelta(hours=72)
    }
    
    ESCALATION_THRESHOLDS = {
        'warning': 0.75,    # 75% of SLA time elapsed
        'urgent': 0.90,     # 90% of SLA time elapsed
        'critical': 1.0     # 100% of SLA time elapsed (breach)
    }
    
    def __init__(self):
        self.contacts: Dict[str, Dict] = {}  # contact -> SLA info
        self.email_tracker: Dict[str, Dict] = {}  # email_id -> tracking info
        self.escalations: List[Dict] = []
        self.sla_history: List[Dict] = []
        self.reply_all_count = 0
        
    def register_contact(self, contact_email: str, tier: SLATier,
                        company: Optional[str] = None, 
                        account_manager: Optional[str] = None) -> Dict:
        """Register a contact with their SLA tier."""
        self.contacts[contact_email] = {
            'tier': tier.value,
            'response_time': self.SLA_RESPONSE_TIMES[tier],
            'company': company,
            'account_manager': account_manager,
            'registered_at': datetime.now().isoformat(),
            'total_emails': 0,
            'breaches': 0,
            'avg_response_time': None
        }
        return self.contacts[contact_email]
    
    def track_email(self, email_id: str, sender: str, recipients: List[str],
                   subject: str, received_at: Optional[datetime] = None) -> Dict:
        """Start tracking an email for SLA compliance."""
        received_at = received_at or datetime.now()
        
        # Determine SLA tier
        tier = self._determine_tier(sender, recipients)
        response_deadline = received_at + self.SLA_RESPONSE_TIMES[tier]
        
        # Calculate escalation times
        escalations = self._calculate_escalation_times(received_at, response_deadline)
        
        # Generate tracking ID
        tracking_id = hashlib.md5(
            f"{email_id}{sender}{received_at.isoformat()}".encode()
        ).hexdigest()[:12]
        
        tracking_info = {
            'tracking_id': tracking_id,
            'email_id': email_id,
            'sender': sender,
            'recipients': recipients,
            'subject': subject,
            'tier': tier.value,
            'received_at': received_at.isoformat(),
            'response_deadline': response_deadline.isoformat(),
            'status': SLAStatus.ON_TRACK.value,
            'escalations': escalations,
            'response_sent_at': None,
            'response_time': None,
            'reply_all': len(recipients) > 1
        }
        
        self.email_tracker[email_id] = tracking_info
        
        # Update contact stats
        if sender in self.contacts:
            self.contacts[sender]['total_emails'] += 1
        
        # Track reply-all
        if tracking_info['reply_all']:
            self.reply_all_count += 1
        
        return tracking_info
    
    def _determine_tier(self, sender: str, recipients: List[str]) -> SLATier:
        """Determine SLA tier for email."""
        # Check sender first
        if sender in self.contacts:
            return SLATier(self.contacts[sender]['tier'])
        
        # Check recipients
        for recipient in recipients:
            if recipient in self.contacts:
                return SLATier(self.contacts[recipient]['tier'])
        
        # Default to standard
        return SLATier.STANDARD
    
    def _calculate_escalation_times(self, received_at: datetime,
                                   deadline: datetime) -> Dict:
        """Calculate when escalations should occur."""
        total_time = deadline - received_at
        
        return {
            'warning': received_at + (total_time * self.ESCALATION_THRESHOLDS['warning']),
            'urgent': received_at + (total_time * self.ESCALATION_THRESHOLDS['urgent']),
            'critical': deadline
        }
    
    def mark_responded(self, email_id: str, responded_at: Optional[datetime] = None) -> Dict:
        """Mark an email as responded."""
        if email_id not in self.email_tracker:
            return {'success': False, 'error': 'Email not being tracked'}
        
        responded_at = responded_at or datetime.now()
        tracking = self.email_tracker[email_id]
        
        # Calculate response time
        received_at = datetime.fromisoformat(tracking['received_at'])
        response_time = responded_at - received_at
        
        # Update tracking
        tracking['response_sent_at'] = responded_at.isoformat()
        tracking['response_time'] = response_time.total_seconds()
        tracking['status'] = SLAStatus.COMPLETED.value
        
        # Check if SLA was met
        deadline = datetime.fromisoformat(tracking['response_deadline'])
        sla_met = responded_at <= deadline
        
        # Update contact stats
        sender = tracking['sender']
        if sender in self.contacts:
            contact = self.contacts[sender]
            if not sla_met:
                contact['breaches'] += 1
            
            # Update average response time
            if contact['avg_response_time'] is None:
                contact['avg_response_time'] = response_time.total_seconds()
            else:
                # Running average
                total = contact['total_emails']
                contact['avg_response_time'] = (
                    (contact['avg_response_time'] * (total - 1) + response_time.total_seconds()) / total
                )
        
        # Store in history
        self.sla_history.append({
            'email_id': email_id,
            'sender': sender,
            'tier': tracking['tier'],
            'response_time': response_time.total_seconds(),
            'sla_met': sla_met,
            'timestamp': responded_at.isoformat()
        })
        
        return {
            'success': True,
            'sla_met': sla_met,
            'response_time': response_time.total_seconds(),
            'response_time_human': self._format_time(response_time)
        }
    
    def check_sla_status(self, email_id: str, current_time: Optional[datetime] = None) -> Dict:
        """Check current SLA status for an email."""
        if email_id not in self.email_tracker:
            return {'error': 'Email not being tracked'}
        
        current_time = current_time or datetime.now()
        tracking = self.email_tracker[email_id]
        
        # If already responded, return completed status
        if tracking['status'] == SLAStatus.COMPLETED.value:
            return {
                'status': SLAStatus.COMPLETED.value,
                'response_time': tracking['response_time'],
                'sla_met': tracking['response_time'] <= self.SLA_RESPONSE_TIMES[SLATier(tracking['tier'])].total_seconds()
            }
        
        # Calculate time elapsed
        received_at = datetime.fromisoformat(tracking['received_at'])
        deadline = datetime.fromisoformat(tracking['response_deadline'])
        time_elapsed = current_time - received_at
        total_time = deadline - received_at
        
        # Calculate percentage
        percentage_elapsed = time_elapsed.total_seconds() / total_time.total_seconds()
        
        # Determine status
        if current_time > deadline:
            status = SLAStatus.BREACHED.value
            escalation = EscalationLevel.CRITICAL
        elif percentage_elapsed >= self.ESCALATION_THRESHOLDS['urgent']:
            status = SLAStatus.AT_RISK.value
            escalation = EscalationLevel.URGENT
        elif percentage_elapsed >= self.ESCALATION_THRESHOLDS['warning']:
            status = SLAStatus.AT_RISK.value
            escalation = EscalationLevel.WARNING
        else:
            status = SLAStatus.ON_TRACK.value
            escalation = EscalationLevel.NONE
        
        # Update tracking status
        tracking['status'] = status
        
        # Time remaining
        time_remaining = deadline - current_time
        
        return {
            'status': status,
            'tier': tracking['tier'],
            'percentage_elapsed': percentage_elapsed,
            'time_remaining': time_remaining.total_seconds() if time_remaining.total_seconds() > 0 else 0,
            'time_remaining_human': self._format_time(time_remaining) if time_remaining.total_seconds() > 0 else 'BREACHED',
            'escalation_level': escalation.value,
            'deadline': tracking['response_deadline'],
            'reply_all': tracking['reply_all']
        }
    
    def generate_escalation_alert(self, email_id: str) -> Optional[Dict]:
        """Generate escalation alert if needed."""
        status = self.check_sla_status(email_id)
        
        if 'error' in status or status['escalation_level'] == EscalationLevel.NONE.value:
            return None
        
        tracking = self.email_tracker[email_id]
        
        # Determine recipients
        recipients = []
        if tracking['reply_all']:
            recipients = tracking['recipients']
        else:
            recipients = [tracking['sender']]
        
        # Add account manager if available
        sender = tracking['sender']
        if sender in self.contacts and self.contacts[sender].get('account_manager'):
            recipients.append(self.contacts[sender]['account_manager'])
        
        # Generate alert message
        alert_message = self._generate_alert_message(
            status['escalation_level'],
            tracking['tier'],
            status['time_remaining_human'],
            tracking['subject']
        )
        
        escalation = {
            'email_id': email_id,
            'escalation_level': status['escalation_level'],
            'tier': tracking['tier'],
            'recipients': recipients,
            'message': alert_message,
            'reply_all': len(recipients) > 1,
            'timestamp': datetime.now().isoformat()
        }
        
        self.escalations.append(escalation)
        
        if escalation['reply_all']:
            self.reply_all_count += 1
        
        return escalation
    
    def _generate_alert_message(self, escalation_level: str, tier: str,
                               time_remaining: str, subject: str) -> str:
        """Generate escalation alert message."""
        templates = {
            'warning': f"⚠️ SLA WARNING: Email regarding '{subject}' is approaching {tier} tier response deadline. Time remaining: {time_remaining}. Please prioritize this response.",
            'urgent': f"🚨 URGENT SLA ALERT: Email regarding '{subject}' is critically close to {tier} tier response deadline. Time remaining: {time_remaining}. Immediate action required.",
            'critical': f"❌ SLA BREACH: Email regarding '{subject}' has exceeded {tier} tier response deadline. This is a service level agreement violation. Escalate immediately."
        }
        return templates.get(escalation_level, "SLA alert")
    
    def prioritize_inbox(self, emails: List[Dict]) -> List[Dict]:
        """Prioritize inbox based on SLA urgency."""
        prioritized = []
        
        for email in emails:
            email_id = email.get('id')
            if email_id and email_id in self.email_tracker:
                status = self.check_sla_status(email_id)
                
                # Calculate priority score (higher = more urgent)
                priority_score = 0
                
                if status.get('status') == SLAStatus.BREACHED.value:
                    priority_score = 1000
                elif status.get('status') == SLAStatus.AT_RISK.value:
                    priority_score = 500 + status.get('percentage_elapsed', 0) * 500
                elif status.get('status') == SLAStatus.ON_TRACK.value:
                    priority_score = status.get('percentage_elapsed', 0) * 100
                
                # Boost by tier
                tier_boost = {
                    'premium': 200,
                    'enterprise': 150,
                    'standard': 100,
                    'basic': 50,
                    'free': 0
                }
                priority_score += tier_boost.get(status.get('tier', 'standard'), 0)
                
                email['sla_priority'] = priority_score
                email['sla_status'] = status.get('status')
                email['time_remaining'] = status.get('time_remaining_human')
                
                prioritized.append(email)
            else:
                email['sla_priority'] = 0
                prioritized.append(email)
        
        # Sort by priority (highest first)
        prioritized.sort(key=lambda x: x.get('sla_priority', 0), reverse=True)
        
        return prioritized
    
    def generate_compliance_report(self, start_date: Optional[datetime] = None,
                                  end_date: Optional[datetime] = None) -> Dict:
        """Generate SLA compliance report."""
        start_date = start_date or (datetime.now() - timedelta(days=30))
        end_date = end_date or datetime.now()
        
        # Filter history by date range
        filtered_history = [
            entry for entry in self.sla_history
            if start_date <= datetime.fromisoformat(entry['timestamp']) <= end_date
        ]
        
        if not filtered_history:
            return {
                'period': f"{start_date.date()} to {end_date.date()}",
                'total_emails': 0,
                'message': 'No SLA data for this period'
            }
        
        # Calculate metrics
        total_emails = len(filtered_history)
        sla_met = sum(1 for entry in filtered_history if entry['sla_met'])
        sla_breached = total_emails - sla_met
        
        compliance_rate = (sla_met / total_emails) * 100 if total_emails > 0 else 0
        
        # Average response time
        avg_response_time = sum(
            entry['response_time'] for entry in filtered_history
        ) / total_emails
        
        # Breakdown by tier
        tier_breakdown = {}
        for entry in filtered_history:
            tier = entry['tier']
            if tier not in tier_breakdown:
                tier_breakdown[tier] = {'total': 0, 'met': 0, 'breached': 0}
            tier_breakdown[tier]['total'] += 1
            if entry['sla_met']:
                tier_breakdown[tier]['met'] += 1
            else:
                tier_breakdown[tier]['breached'] += 1
        
        # Calculate compliance rate per tier
        for tier in tier_breakdown:
            total = tier_breakdown[tier]['total']
            met = tier_breakdown[tier]['met']
            tier_breakdown[tier]['compliance_rate'] = (met / total) * 100 if total > 0 else 0
        
        # Top offenders (contacts with most breaches)
        contact_breaches = {}
        for entry in filtered_history:
            if not entry['sla_met']:
                sender = entry['sender']
                contact_breaches[sender] = contact_breaches.get(sender, 0) + 1
        
        top_offenders = sorted(
            contact_breaches.items(),
            key=lambda x: x[1],
            reverse=True
        )[:5]
        
        report = {
            'period': f"{start_date.date()} to {end_date.date()}",
            'total_emails': total_emails,
            'sla_met': sla_met,
            'sla_breached': sla_breached,
            'compliance_rate': compliance_rate,
            'avg_response_time': avg_response_time,
            'avg_response_time_human': self._format_time(timedelta(seconds=avg_response_time)),
            'tier_breakdown': tier_breakdown,
            'top_offenders': top_offenders,
            'total_escalations': len(self.escalations),
            'timestamp': datetime.now().isoformat()
        }
        
        return report
    
    def _format_time(self, time_delta: timedelta) -> str:
        """Format timedelta in human-readable format."""
        total_seconds = int(time_delta.total_seconds())
        
        if total_seconds < 0:
            return "0 seconds"
        
        days = total_seconds // 86400
        hours = (total_seconds % 86400) // 3600
        minutes = (total_seconds % 3600) // 60
        seconds = total_seconds % 60
        
        parts = []
        if days > 0:
            parts.append(f"{days}d")
        if hours > 0:
            parts.append(f"{hours}h")
        if minutes > 0:
            parts.append(f"{minutes}m")
        if seconds > 0 or not parts:
            parts.append(f"{seconds}s")
        
        return ' '.join(parts)
    
    def get_stats(self) -> Dict:
        """Get engine statistics."""
        total_tracked = len(self.email_tracker)
        completed = sum(
            1 for t in self.email_tracker.values()
            if t['status'] == SLAStatus.COMPLETED.value
        )
        breached = sum(
            1 for t in self.email_tracker.values()
            if t['status'] == SLAStatus.BREACHED.value
        )
        
        return {
            'emails_tracked': total_tracked,
            'completed': completed,
            'breached': breached,
            'escalations_generated': len(self.escalations),
            'contacts_registered': len(self.contacts),
            'reply_all_enforcements': self.reply_all_count,
            'compliance_rate': (completed - breached) / max(1, completed) * 100
        }


def demo():
    """Demonstrate V148 SLA enforcement."""
    engine = SLAEnforcementEngine()
    
    print("=" * 60)
    print("V148: AI Email SLA Enforcement Engine - Demo")
    print("=" * 60)
    
    # Register contacts with different tiers
    print("\n[Registering Contacts]")
    engine.register_contact('premium@client.com', SLATier.PREMIUM, 'Premium Corp', 'manager@company.com')
    engine.register_contact('enterprise@client.com', SLATier.ENTERPRISE, 'Enterprise Inc', 'manager@company.com')
    engine.register_contact('standard@client.com', SLATier.STANDARD, 'Standard LLC')
    print("✓ Registered 3 contacts with different SLA tiers")
    
    # Track emails
    print("\n[Tracking Emails]")
    now = datetime.now()
    
    email1 = engine.track_email(
        'email_001',
        'premium@client.com',
        ['support@company.com', 'manager@company.com'],
        'Critical system issue',
        now - timedelta(minutes=45)
    )
    print(f"Email 1 (Premium): Deadline in {email1['response_deadline']}")
    
    email2 = engine.track_email(
        'email_002',
        'enterprise@client.com',
        ['support@company.com'],
        'Feature request',
        now - timedelta(hours=3)
    )
    print(f"Email 2 (Enterprise): Deadline in {email2['response_deadline']}")
    
    email3 = engine.track_email(
        'email_003',
        'standard@client.com',
        ['support@company.com', 'team@company.com'],
        'General inquiry',
        now - timedelta(hours=20)
    )
    print(f"Email 3 (Standard): Deadline in {email3['response_deadline']}")
    
    # Check SLA status
    print("\n[Checking SLA Status]")
    for email_id in ['email_001', 'email_002', 'email_003']:
        status = engine.check_sla_status(email_id)
        print(f"\n{email_id}:")
        print(f"  Status: {status['status']}")
        print(f"  Tier: {status['tier']}")
        print(f"  Time Remaining: {status['time_remaining_human']}")
        print(f"  Escalation Level: {status['escalation_level']}")
        print(f"  Reply-All: {status['reply_all']}")
    
    # Generate escalation alerts
    print("\n[Generating Escalation Alerts]")
    for email_id in ['email_001', 'email_002', 'email_003']:
        alert = engine.generate_escalation_alert(email_id)
        if alert:
            print(f"\n{email_id} Alert:")
            print(f"  Level: {alert['escalation_level']}")
            print(f"  Recipients: {len(alert['recipients'])}")
            print(f"  Reply-All: {alert['reply_all']}")
            print(f"  Message: {alert['message'][:80]}...")
    
    # Mark one as responded
    print("\n[Marking Email as Responded]")
    response = engine.mark_responded('email_002', now - timedelta(minutes=30))
    print(f"Email 002 responded:")
    print(f"  SLA Met: {response['sla_met']}")
    print(f"  Response Time: {response['response_time_human']}")
    
    # Prioritize inbox
    print("\n[Prioritizing Inbox]")
    inbox = [
        {'id': 'email_001', 'subject': 'Critical system issue', 'from': 'premium@client.com'},
        {'id': 'email_002', 'subject': 'Feature request', 'from': 'enterprise@client.com'},
        {'id': 'email_003', 'subject': 'General inquiry', 'from': 'standard@client.com'},
        {'id': 'email_004', 'subject': 'Random email', 'from': 'unknown@client.com'}
    ]
    
    prioritized = engine.prioritize_inbox(inbox)
    print("\nPrioritized Inbox:")
    for i, email in enumerate(prioritized, 1):
        print(f"  {i}. {email['subject']} (Priority: {email.get('sla_priority', 0):.0f}, Status: {email.get('sla_status', 'N/A')})")
    
    # Generate compliance report
    print("\n[Generating Compliance Report]")
    report = engine.generate_compliance_report()
    print(f"Period: {report['period']}")
    print(f"Total Emails: {report['total_emails']}")
    print(f"SLA Met: {report['sla_met']}")
    print(f"SLA Breached: {report['sla_breached']}")
    print(f"Compliance Rate: {report['compliance_rate']:.1f}%")
    print(f"Avg Response Time: {report['avg_response_time_human']}")
    
    # Statistics
    print("\n" + "=" * 60)
    print("\n[Engine Statistics]")
    stats = engine.get_stats()
    for key, value in stats.items():
        if isinstance(value, float):
            print(f"{key}: {value:.2f}")
        else:
            print(f"{key}: {value}")


if __name__ == "__main__":
    demo()
