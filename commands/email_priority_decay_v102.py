#!/usr/bin/env python3
"""
V102: AI Email Priority Decay Engine
Implements dynamic priority adjustment based on time elapsed, sender importance,
thread activity, business impact, deadline proximity, and response time SLAs.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass, field
from enum import Enum
import math


class PriorityLevel(Enum):
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
    ARCHIVED = "archived"


class DecayRate(Enum):
    FAST = "fast"          # Decays quickly (notifications, alerts)
    NORMAL = "normal"      # Standard decay
    SLOW = "slow"          # Decays slowly (important relationships)
    NONE = "none"          # No decay (legal holds, compliance)


class SenderImportance(Enum):
    EXECUTIVE = "executive"      # C-level, board members
    KEY_CLIENT = "key_client"    # Top 20% revenue clients
    VIP = "vip"                  # Strategic partners
    REGULAR = "regular"          # Normal contacts
    AUTOMATED = "automated"      # System notifications


@dataclass
class PriorityConfig:
    base_priority: PriorityLevel
    decay_rate: DecayRate
    half_life_hours: float  # Hours until priority halves
    min_priority: PriorityLevel
    boost_factors: Dict[str, float] = field(default_factory=dict)


@dataclass
class EmailPriority:
    email_id: str
    original_priority: PriorityLevel
    current_priority: PriorityLevel
    priority_score: float  # 0-100 scale
    last_updated: datetime
    decay_start: datetime
    boosts_applied: List[str] = field(default_factory=list)
    sla_deadline: Optional[datetime] = None
    business_impact: float = 0.0  # 0-1 scale
    sender_importance: SenderImportance = SenderImportance.REGULAR


class V102PriorityDecayEngine:
    """
    V102: AI Email Priority Decay Engine
    
    Features:
    1. Dynamic priority adjustment based on time elapsed
    2. Sender importance scoring
    3. Thread activity level tracking
    4. Business impact assessment
    5. Deadline proximity detection
    6. Response time SLA management
    7. Priority boost and decay algorithms
    """
    
    def __init__(self):
        self.email_priorities: Dict[str, EmailPriority] = {}
        self.sender_scores: Dict[str, SenderImportance] = {}
        self.sla_configs: Dict[str, timedelta] = {
            'critical': timedelta(hours=2),
            'high': timedelta(hours=8),
            'medium': timedelta(hours=24),
            'low': timedelta(days=3)
        }
        
        # Priority decay configurations
        self.priority_configs = {
            PriorityLevel.CRITICAL: PriorityConfig(
                base_priority=PriorityLevel.CRITICAL,
                decay_rate=DecayRate.SLOW,
                half_life_hours=48,
                min_priority=PriorityLevel.HIGH,
                boost_factors={'executive': 1.5, 'key_client': 1.3, 'deadline': 2.0}
            ),
            PriorityLevel.HIGH: PriorityConfig(
                base_priority=PriorityLevel.HIGH,
                decay_rate=DecayRate.NORMAL,
                half_life_hours=24,
                min_priority=PriorityLevel.MEDIUM,
                boost_factors={'executive': 1.3, 'key_client': 1.2, 'deadline': 1.5}
            ),
            PriorityLevel.MEDIUM: PriorityConfig(
                base_priority=PriorityLevel.MEDIUM,
                decay_rate=DecayRate.NORMAL,
                half_life_hours=12,
                min_priority=PriorityLevel.LOW,
                boost_factors={'executive': 1.2, 'key_client': 1.1}
            ),
            PriorityLevel.LOW: PriorityConfig(
                base_priority=PriorityLevel.LOW,
                decay_rate=DecayRate.FAST,
                half_life_hours=6,
                min_priority=PriorityLevel.ARCHIVED,
                boost_factors={}
            )
        }
        
        # Keywords for deadline detection
        self.deadline_keywords = [
            'deadline', 'due', 'due date', 'by', 'before', 'asap', 'urgent',
            'eod', 'end of day', 'cob', 'close of business', 'tomorrow',
            'this week', 'next week', 'by friday', 'by monday'
        ]
        
        # Business impact keywords
        self.impact_keywords = {
            'high': ['revenue', 'contract', 'deal', 'sale', 'partnership', 'acquisition', 'merger'],
            'medium': ['project', 'initiative', 'launch', 'release', 'deployment', 'migration'],
            'low': ['update', 'status', 'information', 'fyi', 'newsletter']
        }
    
    def register_sender_importance(self, sender: str, importance: SenderImportance):
        """Register sender importance level."""
        self.sender_scores[sender] = importance
    
    def process_email(self, email_data: Dict) -> Dict:
        """Process email and calculate dynamic priority."""
        email_id = email_data.get('id', 'unknown')
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        from_addr = email_data.get('from', '')
        timestamp = datetime.fromisoformat(email_data.get('timestamp', datetime.now().isoformat()))
        
        full_text = f"{subject}\n{body}".lower()
        
        # Determine base priority
        base_priority = self._determine_base_priority(full_text)
        
        # Get sender importance
        sender_importance = self.sender_scores.get(from_addr, SenderImportance.REGULAR)
        
        # Detect deadline
        deadline = self._detect_deadline(full_text, timestamp)
        
        # Assess business impact
        business_impact = self._assess_business_impact(full_text)
        
        # Calculate initial priority score
        priority_score = self._calculate_priority_score(
            base_priority, sender_importance, deadline, business_impact, timestamp
        )
        
        # Determine current priority level
        current_priority = self._score_to_priority(priority_score)
        
        # Create priority record
        priority_record = EmailPriority(
            email_id=email_id,
            original_priority=base_priority,
            current_priority=current_priority,
            priority_score=priority_score,
            last_updated=timestamp,
            decay_start=timestamp,
            sla_deadline=deadline,
            business_impact=business_impact,
            sender_importance=sender_importance
        )
        
        self.email_priorities[email_id] = priority_record
        
        # Apply immediate boosts
        boosts = self._apply_immediate_boosts(priority_record, email_data)
        
        return {
            'email_id': email_id,
            'original_priority': base_priority.value,
            'current_priority': current_priority.value,
            'priority_score': priority_score,
            'sender_importance': sender_importance.value,
            'business_impact': business_impact,
            'deadline': deadline.isoformat() if deadline else None,
            'sla_deadline': self._calculate_sla_deadline(current_priority, timestamp).isoformat(),
            'boosts_applied': boosts,
            'recommended_action': self._get_recommended_action(priority_record)
        }
    
    def _determine_base_priority(self, text: str) -> PriorityLevel:
        """Determine base priority from email content."""
        text_lower = text.lower()
        
        # Critical keywords
        critical_keywords = ['emergency', 'critical', 'urgent', 'immediately', 'asap', 
                           'production down', 'outage', 'security breach', 'data loss']
        if any(kw in text_lower for kw in critical_keywords):
            return PriorityLevel.CRITICAL
        
        # High keywords
        high_keywords = ['important', 'priority', 'deadline', 'client', 'customer', 
                        'revenue', 'contract', 'executive', 'board']
        if any(kw in text_lower for kw in high_keywords):
            return PriorityLevel.HIGH
        
        # Medium keywords
        medium_keywords = ['project', 'update', 'meeting', 'review', 'feedback', 'question']
        if any(kw in text_lower for kw in medium_keywords):
            return PriorityLevel.MEDIUM
        
        return PriorityLevel.LOW
    
    def _detect_deadline(self, text: str, email_time: datetime) -> Optional[datetime]:
        """Detect deadline from email content."""
        text_lower = text.lower()
        
        # Check for explicit deadlines
        if 'today' in text_lower or 'eod' in text_lower or 'end of day' in text_lower:
            return email_time.replace(hour=17, minute=0, second=0)
        
        if 'tomorrow' in text_lower:
            return (email_time + timedelta(days=1)).replace(hour=17, minute=0, second=0)
        
        if 'this week' in text_lower:
            days_until_friday = (4 - email_time.weekday()) % 7
            return (email_time + timedelta(days=days_until_friday)).replace(hour=17, minute=0, second=0)
        
        if 'next week' in text_lower:
            days_until_next_friday = (4 - email_time.weekday()) % 7 + 7
            return (email_time + timedelta(days=days_until_next_friday)).replace(hour=17, minute=0, second=0)
        
        # Check for specific times
        time_patterns = [
            r'by (\d{1,2})(?::(\d{2}))?\s*(am|pm)?',
            r'before (\d{1,2})(?::(\d{2}))?\s*(am|pm)?'
        ]
        
        for pattern in time_patterns:
            import re
            match = re.search(pattern, text_lower)
            if match:
                hour = int(match.group(1))
                minute = int(match.group(2)) if match.group(2) else 0
                ampm = match.group(3)
                
                if ampm == 'pm' and hour < 12:
                    hour += 12
                elif ampm == 'am' and hour == 12:
                    hour = 0
                
                return email_time.replace(hour=hour, minute=minute, second=0)
        
        return None
    
    def _assess_business_impact(self, text: str) -> float:
        """Assess business impact of email."""
        text_lower = text.lower()
        impact_score = 0.0
        
        # High impact keywords
        high_count = sum(1 for kw in self.impact_keywords['high'] if kw in text_lower)
        impact_score += high_count * 0.3
        
        # Medium impact keywords
        medium_count = sum(1 for kw in self.impact_keywords['medium'] if kw in text_lower)
        impact_score += medium_count * 0.15
        
        # Low impact keywords
        low_count = sum(1 for kw in self.impact_keywords['low'] if kw in text_lower)
        impact_score += low_count * 0.05
        
        # Normalize to 0-1
        return min(1.0, impact_score)
    
    def _calculate_priority_score(self, base_priority: PriorityLevel, 
                                  sender_importance: SenderImportance,
                                  deadline: Optional[datetime],
                                  business_impact: float,
                                  current_time: datetime) -> float:
        """Calculate priority score (0-100)."""
        # Base scores
        base_scores = {
            PriorityLevel.CRITICAL: 90,
            PriorityLevel.HIGH: 70,
            PriorityLevel.MEDIUM: 50,
            PriorityLevel.LOW: 30
        }
        
        score = base_scores[base_priority]
        
        # Sender importance boost
        sender_boosts = {
            SenderImportance.EXECUTIVE: 15,
            SenderImportance.KEY_CLIENT: 12,
            SenderImportance.VIP: 10,
            SenderImportance.REGULAR: 0,
            SenderImportance.AUTOMATED: -10
        }
        score += sender_boosts[sender_importance]
        
        # Deadline proximity boost
        if deadline:
            hours_until_deadline = (deadline - current_time).total_seconds() / 3600
            if hours_until_deadline < 0:
                score += 20  # Overdue
            elif hours_until_deadline < 4:
                score += 15
            elif hours_until_deadline < 24:
                score += 10
            elif hours_until_deadline < 72:
                score += 5
        
        # Business impact boost
        score += business_impact * 20
        
        # Normalize to 0-100
        return max(0, min(100, score))
    
    def _score_to_priority(self, score: float) -> PriorityLevel:
        """Convert score to priority level."""
        if score >= 80:
            return PriorityLevel.CRITICAL
        elif score >= 60:
            return PriorityLevel.HIGH
        elif score >= 40:
            return PriorityLevel.MEDIUM
        elif score >= 20:
            return PriorityLevel.LOW
        else:
            return PriorityLevel.ARCHIVED
    
    def _apply_immediate_boosts(self, priority: EmailPriority, email_data: Dict) -> List[str]:
        """Apply immediate priority boosts."""
        boosts = []
        
        # Thread activity boost
        thread_id = email_data.get('thread_id')
        if thread_id:
            thread_emails = [p for p in self.email_priorities.values() 
                           if self.email_index.get(p.email_id, {}).get('thread_id') == thread_id]
            if len(thread_emails) > 5:
                priority.priority_score = min(100, priority.priority_score + 10)
                boosts.append('thread_activity')
        
        # Attachment boost
        if email_data.get('attachments'):
            priority.priority_score = min(100, priority.priority_score + 5)
            boosts.append('has_attachments')
        
        # Mention boost
        body = email_data.get('body', '').lower()
        if '@' in body or 'mention' in body:
            priority.priority_score = min(100, priority.priority_score + 5)
            boosts.append('mentioned')
        
        # Update priority level
        priority.current_priority = self._score_to_priority(priority.priority_score)
        priority.boosts_applied = boosts
        
        return boosts
    
    def _calculate_sla_deadline(self, priority: PriorityLevel, email_time: datetime) -> datetime:
        """Calculate SLA deadline based on priority."""
        sla_hours = {
            PriorityLevel.CRITICAL: 2,
            PriorityLevel.HIGH: 8,
            PriorityLevel.MEDIUM: 24,
            PriorityLevel.LOW: 72
        }
        
        hours = sla_hours.get(priority, 24)
        return email_time + timedelta(hours=hours)
    
    def apply_decay(self, email_id: str, current_time: datetime) -> Dict:
        """Apply priority decay to an email."""
        if email_id not in self.email_priorities:
            return {'error': 'Email not found'}
        
        priority = self.email_priorities[email_id]
        config = self.priority_configs[priority.original_priority]
        
        # Calculate time elapsed
        hours_elapsed = (current_time - priority.decay_start).total_seconds() / 3600
        
        # Apply decay based on half-life
        if config.decay_rate != DecayRate.NONE:
            decay_factor = math.pow(0.5, hours_elapsed / config.half_life_hours)
            new_score = priority.priority_score * decay_factor
            
            # Don't go below minimum priority
            min_score = {
                PriorityLevel.CRITICAL: 80,
                PriorityLevel.HIGH: 60,
                PriorityLevel.MEDIUM: 40,
                PriorityLevel.LOW: 20
            }.get(config.min_priority, 0)
            
            new_score = max(min_score, new_score)
            
            priority.priority_score = new_score
            priority.current_priority = self._score_to_priority(new_score)
            priority.last_updated = current_time
        
        return {
            'email_id': email_id,
            'original_priority': priority.original_priority.value,
            'current_priority': priority.current_priority.value,
            'priority_score': priority.priority_score,
            'hours_elapsed': hours_elapsed,
            'decay_applied': config.decay_rate.value != 'none'
        }
    
    def _get_recommended_action(self, priority: EmailPriority) -> str:
        """Get recommended action based on priority."""
        if priority.current_priority == PriorityLevel.CRITICAL:
            return "Respond immediately - escalate if needed"
        elif priority.current_priority == PriorityLevel.HIGH:
            return "Respond within 8 hours"
        elif priority.current_priority == PriorityLevel.MEDIUM:
            return "Respond within 24 hours"
        elif priority.current_priority == PriorityLevel.LOW:
            return "Respond when convenient or archive"
        else:
            return "Archive - no action needed"
    
    def get_priority_dashboard(self) -> Dict:
        """Get priority dashboard summary."""
        priority_counts = {level.value: 0 for level in PriorityLevel}
        sla_breaches = 0
        current_time = datetime.now()
        
        for priority in self.email_priorities.values():
            priority_counts[priority.current_priority.value] += 1
            
            # Check SLA breaches
            if priority.sla_deadline and current_time > priority.sla_deadline:
                sla_breaches += 1
        
        # Calculate average priority score
        avg_score = sum(p.priority_score for p in self.email_priorities.values()) / len(self.email_priorities) if self.email_priorities else 0
        
        return {
            'total_emails': len(self.email_priorities),
            'priority_distribution': priority_counts,
            'average_priority_score': avg_score,
            'sla_breaches': sla_breaches,
            'critical_emails': priority_counts['critical'],
            'high_priority_emails': priority_counts['high'],
            'emails_needing_attention': priority_counts['critical'] + priority_counts['high']
        }
    
    def get_priority_queue(self, limit: int = 20) -> List[Dict]:
        """Get priority queue sorted by priority score."""
        sorted_priorities = sorted(
            self.email_priorities.values(),
            key=lambda p: p.priority_score,
            reverse=True
        )[:limit]
        
        return [
            {
                'email_id': p.email_id,
                'priority': p.current_priority.value,
                'score': p.priority_score,
                'sender_importance': p.sender_importance.value,
                'sla_deadline': p.sla_deadline.isoformat() if p.sla_deadline else None,
                'recommended_action': self._get_recommended_action(p)
            }
            for p in sorted_priorities
        ]


# Test the implementation
if __name__ == "__main__":
    engine = V102PriorityDecayEngine()
    
    # Register sender importance
    engine.register_sender_importance('ceo@company.com', SenderImportance.EXECUTIVE)
    engine.register_sender_importance('key.client@fortune500.com', SenderImportance.KEY_CLIENT)
    engine.register_sender_importance('newsletter@service.com', SenderImportance.AUTOMATED)
    
    # Test emails
    test_emails = [
        {
            'id': 'email_critical',
            'from': 'ceo@company.com',
            'subject': 'URGENT: Production System Down',
            'body': 'The production system is down. This is critical and needs immediate attention. Revenue impact is high.',
            'timestamp': datetime.now().isoformat(),
            'attachments': []
        },
        {
            'id': 'email_high',
            'from': 'key.client@fortune500.com',
            'subject': 'Contract Renewal Discussion',
            'body': 'We need to discuss the contract renewal. The deadline is tomorrow. This is important for our partnership.',
            'timestamp': datetime.now().isoformat(),
            'attachments': ['contract.pdf']
        },
        {
            'id': 'email_medium',
            'from': 'colleague@company.com',
            'subject': 'Project Update Meeting',
            'body': 'Can we schedule a meeting to review the project status? Please let me know your availability this week.',
            'timestamp': datetime.now().isoformat(),
            'attachments': []
        },
        {
            'id': 'email_low',
            'from': 'newsletter@service.com',
            'subject': 'Weekly Newsletter - Industry Updates',
            'body': 'Here are the latest industry updates and news for your information.',
            'timestamp': datetime.now().isoformat(),
            'attachments': []
        }
    ]
    
    print("V102: AI Email Priority Decay Engine")
    print("=" * 60)
    
    for email in test_emails:
        result = engine.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"  Original Priority: {result['original_priority']}")
        print(f"  Current Priority: {result['current_priority']}")
        print(f"  Priority Score: {result['priority_score']:.1f}")
        print(f"  Sender Importance: {result['sender_importance']}")
        print(f"  Business Impact: {result['business_impact']:.2f}")
        print(f"  SLA Deadline: {result['sla_deadline']}")
        print(f"  Boosts Applied: {result['boosts_applied']}")
        print(f"  Recommended Action: {result['recommended_action']}")
    
    # Test decay
    print("\n" + "=" * 60)
    print("Applying decay after 24 hours...")
    
    for email_id in ['email_critical', 'email_high', 'email_medium', 'email_low']:
        decay_result = engine.apply_decay(email_id, datetime.now() + timedelta(hours=24))
        print(f"\n{email_id}:")
        print(f"  Original: {decay_result['original_priority']}")
        print(f"  Current: {decay_result['current_priority']}")
        print(f"  Score: {decay_result['priority_score']:.1f}")
        print(f"  Decay Applied: {decay_result['decay_applied']}")
    
    print("\n" + "=" * 60)
    print("Priority Dashboard:")
    dashboard = engine.get_priority_dashboard()
    print(json.dumps(dashboard, indent=2))
    
    print("\n" + "=" * 60)
    print("Priority Queue:")
    queue = engine.get_priority_queue()
    for item in queue:
        print(f"  [{item['priority']}] {item['email_id']} - Score: {item['score']:.1f}")
