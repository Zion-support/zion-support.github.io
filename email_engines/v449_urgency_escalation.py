#!/usr/bin/env python3
"""
V449 - AI Email Urgency Escalation Engine
Detects escalating urgency in email threads and alerts managers before issues become critical.
Features: Urgency trend analysis, escalation prediction, manager notification, SLA breach prevention.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any


class UrgencyEscalationEngine:
    """Detects and manages email urgency escalation patterns."""
    
    URGENCY_INDICATORS = {
        'critical': [
            r'\burgent\b', r'\basap\b', r'\bimmediately\b', r'\bright\s+now\b',
            r'\bcritical\b', r'\bemergency\b', r'\bdown\b', r'\boutage\b',
            r'\bproduction\s+issue\b', r'\bdata\s+loss\b', r'\bsecurity\s+breach\b'
        ],
        'high': [
            r'\bimportant\b', r'\bpriority\b', r'\bneed\s+(?:this|it)\b',
            r'\bdeadline\b', r'\bdue\s+(?:today|tomorrow|soon)\b',
            r'\bwaiting\b', r'\boverdue\b', r'\bdelayed\b'
        ],
        'medium': [
            r'\bwhen\s+(?:can|will)\b', r'\bupdate\b', r'\bstatus\b',
            r'\bfollow\s*up\b', r'\bcheck\s+in\b', r'\breminder\b'
        ],
        'low': [
            r'\bwhen\s+you\s+have\s+(?:a\s+)?(?:moment|chance|time)\b',
            r'\bno\s+rush\b', r'\bat\s+your\s+convenience\b',
            r'\bwhenever\b', r'\bsome\s+time\s+next\s+week\b'
        ]
    }
    
    ESCALATION_TRIGGERS = [
        r'\b(?:still|yet)\s+(?:waiting|haven\'?t|no\s+response)\b',
        r'\b(?:second|third|fourth)\s+(?:follow\s*up|reminder|attempt)\b',
        r'\b(?:escalat|manag(?:er)|director|vp|ceo)\b',
        r'\b(?:complaint|unacceptable|disappointed|frustrated)\b',
        r'\b(?:legal|lawsuit|attorney|regulatory)\b',
        r'\b(?:cancel|terminate|churn|leave)\b',
    ]
    
    def __init__(self):
        self.thread_urgency_history: Dict[str, List[Dict]] = {}
        self.escalation_alerts: List[Dict] = []
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for urgency and escalation patterns."""
        body = email.get('body', '')
        subject = email.get('subject', '')
        sender = email.get('from', '')
        recipients = email.get('to', []) + email.get('cc', [])
        thread_id = self._get_thread_id(email)
        
        text = subject + ' ' + body
        
        urgency_level = self._detect_urgency_level(text)
        urgency_score = self._calculate_urgency_score(text)
        escalation_triggers = self._detect_escalation_triggers(text)
        sentiment = self._analyze_sentiment(text)
        
        self._update_thread_history(thread_id, urgency_level, urgency_score, sender)
        
        trend = self._analyze_urgency_trend(thread_id)
        escalation_risk = self._predict_escalation(thread_id, urgency_level, escalation_triggers, trend)
        sla_status = self._check_sla_status(thread_id, urgency_level)
        
        reply_all_required = len(recipients) > 1
        manager_alert_needed = escalation_risk.get('risk_level') in ['high', 'critical']
        
        return {
            'engine': 'V449_UrgencyEscalation',
            'thread_id': thread_id,
            'urgency_level': urgency_level,
            'urgency_score': urgency_score,
            'escalation_triggers': escalation_triggers,
            'sentiment': sentiment,
            'urgency_trend': trend,
            'escalation_risk': escalation_risk,
            'sla_status': sla_status,
            'manager_alert_needed': manager_alert_needed,
            'suggested_response_time': self._suggest_response_time(urgency_level),
            'recommended_actions': self._recommend_actions(urgency_level, escalation_risk, sla_status),
            'reply_all_required': reply_all_required,
            'reply_all_enforced': reply_all_required,
            'recipients': recipients,
            'timestamp': datetime.now().isoformat()
        }
    
    def _get_thread_id(self, email: Dict) -> str:
        """Get thread identifier."""
        if 'message_id' in email:
            return email.get('in_reply_to', email['message_id'])
        subject = email.get('subject', '').replace('Re:', '').replace('FW:', '').strip()
        return re.sub(r'\W+', '_', subject.lower())[:50]
    
    def _detect_urgency_level(self, text: str) -> str:
        """Detect the urgency level of the email."""
        text_lower = text.lower()
        scores = {}
        
        for level, patterns in self.URGENCY_INDICATORS.items():
            count = 0
            for pattern in patterns:
                count += len(re.findall(pattern, text_lower))
            scores[level] = count
        
        if scores.get('critical', 0) > 0:
            return 'critical'
        elif scores.get('high', 0) > 0:
            return 'high'
        elif scores.get('medium', 0) > 0:
            return 'medium'
        else:
            return 'low'
    
    def _calculate_urgency_score(self, text: str) -> float:
        """Calculate numerical urgency score (0-100)."""
        score = 0.0
        text_lower = text.lower()
        
        weight_map = {'critical': 25, 'high': 15, 'medium': 8, 'low': 2}
        for level, patterns in self.URGENCY_INDICATORS.items():
            for pattern in patterns:
                count = len(re.findall(pattern, text_lower))
                score += count * weight_map[level]
        
        exclamation_count = text.count('!')
        score += min(exclamation_count * 3, 15)
        
        caps_words = re.findall(r'\b[A-Z]{3,}\b', text)
        score += min(len(caps_words) * 5, 15)
        
        question_marks = text.count('?')
        if question_marks > 2:
            score += (question_marks - 2) * 2
        
        return min(100.0, round(score, 1))
    
    def _detect_escalation_triggers(self, text: str) -> List[Dict]:
        """Detect escalation trigger phrases."""
        triggers = []
        text_lower = text.lower()
        
        for pattern in self.ESCALATION_TRIGGERS:
            matches = re.findall(pattern, text_lower)
            if matches:
                triggers.append({
                    'pattern': pattern,
                    'matched': matches[0] if isinstance(matches[0], str) else str(matches[0]),
                    'severity': 'high'
                })
        
        return triggers
    
    def _analyze_sentiment(self, text: str) -> Dict:
        """Quick sentiment analysis."""
        negative_words = ['angry', 'frustrated', 'disappointed', 'unacceptable', 'terrible',
                         'worst', 'horrible', 'upset', 'annoyed', 'furious']
        positive_words = ['great', 'excellent', 'thank', 'appreciate', 'wonderful',
                         'happy', 'pleased', 'satisfied', 'good', 'fantastic']
        
        text_lower = text.lower()
        neg_count = sum(1 for w in negative_words if w in text_lower)
        pos_count = sum(1 for w in positive_words if w in text_lower)
        
        if neg_count > pos_count:
            return {'label': 'negative', 'score': -min(neg_count * 0.3, 1.0)}
        elif pos_count > neg_count:
            return {'label': 'positive', 'score': min(pos_count * 0.3, 1.0)}
        return {'label': 'neutral', 'score': 0.0}
    
    def _update_thread_history(self, thread_id: str, urgency: str, score: float, sender: str):
        """Update thread urgency history."""
        if thread_id not in self.thread_urgency_history:
            self.thread_urgency_history[thread_id] = []
        
        self.thread_urgency_history[thread_id].append({
            'urgency_level': urgency,
            'urgency_score': score,
            'sender': sender,
            'timestamp': datetime.now().isoformat()
        })
    
    def _analyze_urgency_trend(self, thread_id: str) -> Dict:
        """Analyze urgency trend over the thread."""
        history = self.thread_urgency_history.get(thread_id, [])
        
        if len(history) < 2:
            return {'trend': 'insufficient_data', 'direction': 'unknown', 'change': 0}
        
        recent = history[-1]['urgency_score']
        previous = history[-2]['urgency_score']
        change = recent - previous
        
        if change > 10:
            direction = 'escalating'
        elif change < -10:
            direction = 'de-escalating'
        else:
            direction = 'stable'
        
        return {
            'trend': direction,
            'direction': direction,
            'change': round(change, 1),
            'message_count': len(history),
            'avg_urgency': round(sum(h['urgency_score'] for h in history) / len(history), 1)
        }
    
    def _predict_escalation(self, thread_id: str, urgency: str, triggers: List, trend: Dict) -> Dict:
        """Predict escalation risk."""
        risk_score = 0.0
        
        urgency_weights = {'critical': 40, 'high': 25, 'medium': 10, 'low': 2}
        risk_score += urgency_weights.get(urgency, 0)
        
        risk_score += len(triggers) * 15
        
        if trend.get('direction') == 'escalating':
            risk_score += 20
        
        if trend.get('message_count', 0) > 5:
            risk_score += 10
        
        risk_score = min(100, risk_score)
        
        if risk_score >= 70:
            level = 'critical'
        elif risk_score >= 50:
            level = 'high'
        elif risk_score >= 25:
            level = 'medium'
        else:
            level = 'low'
        
        return {
            'risk_level': level,
            'risk_score': risk_score,
            'triggers_count': len(triggers),
            'recommend_escalation': risk_score >= 50
        }
    
    def _check_sla_status(self, thread_id: str, urgency: str) -> Dict:
        """Check SLA compliance."""
        sla_times = {'critical': 1, 'high': 4, 'medium': 24, 'low': 72}
        sla_hours = sla_times.get(urgency, 24)
        
        history = self.thread_urgency_history.get(thread_id, [])
        if not history:
            return {'status': 'unknown', 'sla_hours': sla_hours}
        
        first_msg = datetime.fromisoformat(history[0]['timestamp'])
        elapsed = (datetime.now() - first_msg).total_seconds() / 3600
        
        if elapsed > sla_hours:
            return {'status': 'breached', 'sla_hours': sla_hours, 'elapsed_hours': round(elapsed, 1), 'overdue_by': round(elapsed - sla_hours, 1)}
        elif elapsed > sla_hours * 0.75:
            return {'status': 'at_risk', 'sla_hours': sla_hours, 'elapsed_hours': round(elapsed, 1), 'remaining_hours': round(sla_hours - elapsed, 1)}
        else:
            return {'status': 'on_track', 'sla_hours': sla_hours, 'elapsed_hours': round(elapsed, 1), 'remaining_hours': round(sla_hours - elapsed, 1)}
    
    def _suggest_response_time(self, urgency: str) -> str:
        """Suggest appropriate response time."""
        times = {
            'critical': 'Within 15 minutes',
            'high': 'Within 1 hour',
            'medium': 'Within 4 hours',
            'low': 'Within 24 hours'
        }
        return times.get(urgency, 'Within 24 hours')
    
    def _recommend_actions(self, urgency: str, risk: Dict, sla: Dict) -> List[str]:
        """Recommend actions based on analysis."""
        actions = []
        
        if urgency == 'critical':
            actions.append("Respond immediately with acknowledgment")
            actions.append("Escalate to management team")
            actions.append("Create incident ticket")
        elif urgency == 'high':
            actions.append("Prioritize response within 1 hour")
            actions.append("Notify team lead")
        
        if risk.get('recommend_escalation'):
            actions.append("Forward to manager with context summary")
        
        if sla.get('status') == 'breached':
            actions.append("Apologize for delay and provide immediate update")
            actions.append("Escalate to prevent further SLA violations")
        elif sla.get('status') == 'at_risk':
            actions.append("Send interim response to reset SLA clock")
        
        actions.append("Use reply-all to keep all stakeholders informed")
        
        return actions


def main():
    """Test V449 engine."""
    engine = UrgencyEscalationEngine()
    
    test_email = {
        'from': 'angry-client@acme.com',
        'to': ['support@ziontechgroup.com', 'kleber@ziontechgroup.com'],
        'cc': ['manager@acme.com', 'cto@acme.com'],
        'subject': 'URGENT: Third Follow-up - Production System DOWN!!!',
        'body': "This is UNACCEPTABLE! We've been waiting for 3 days with NO response. Our production system is DOWN and we're losing money every minute. This is the THIRD time I'm following up. If this isn't resolved ASAP, we will escalate to legal and consider terminating our contract. I need your manager involved IMMEDIATELY!",
        'message_id': 'msg-449-001'
    }
    
    result = engine.analyze_email(test_email)
    print(json.dumps(result, indent=2))
    print(f"\n✅ Urgency Level: {result['urgency_level']}")
    print(f"✅ Urgency Score: {result['urgency_score']}/100")
    print(f"✅ Escalation Risk: {result['escalation_risk']['risk_level']}")
    print(f"✅ Reply-all enforced: {result['reply_all_enforced']}")
    print(f"✅ Manager alert needed: {result['manager_alert_needed']}")


if __name__ == '__main__':
    main()
