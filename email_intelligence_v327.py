"""
Email Intelligence V327 - Goal Alignment Tracker
Aligns every email to business objectives (OKRs/KPIs), tracks time spent on
strategic vs tactical communications, and suggests prioritization based on goal impact.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json


class EmailGoalAlignmentTracker:
    """
    V327: Aligns emails to OKRs/KPIs, tracks strategic vs tactical time,
    prioritizes based on business impact.
    """
    
    VERSION = "V327"
    ENGINE_NAME = "Goal Alignment Tracker"
    
    def __init__(self):
        self.okr_mapping = {
            'revenue': ['sales', 'deal', 'contract', 'revenue', 'profit', 'client', 'customer'],
            'growth': ['expand', 'scale', 'growth', 'new market', 'partnership', 'acquisition'],
            'product': ['feature', 'launch', 'product', 'release', 'roadmap', 'development'],
            'operations': ['process', 'efficiency', 'automation', 'workflow', 'optimization'],
            'talent': ['hiring', 'recruitment', 'training', 'team', 'culture', 'retention']
        }
        self.email_log = []
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email alignment with business goals case-by-case."""
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        sender = email_data.get('from', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Map to OKRs
        okr_alignment = self._map_to_okrs(subject, content)
        
        # Classify strategic vs tactical
        classification = self._classify_email_type(subject, content)
        
        # Calculate goal impact score
        impact_score = self._calculate_impact_score(okr_alignment, classification)
        
        # Prioritization recommendation
        priority = self._recommend_priority(impact_score, classification)
        
        # Time investment recommendation
        time_recommendation = self._recommend_time_investment(impact_score, classification)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'okr_alignment': okr_alignment,
            'classification': classification,
            'impact_score': impact_score,
            'priority': priority,
            'time_recommendation': time_recommendation,
            'alignment_status': 'tracked'
        }
        
        # Log for tracking
        self._log_email(analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate goal-aligned response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate goal-aligned response
        response_body = self._generate_goal_aligned_response(
            sender, content, analysis
        )
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'okr_aligned': analysis['okr_alignment']['primary_okr'],
            'impact_score': analysis['impact_score'],
            'priority': analysis['priority'],
            'classification': analysis['classification'],
            'reply_all_enforced': True
        }
        
        return response
    
    def _map_to_okrs(self, subject: str, content: str) -> Dict:
        """Map email to OKR categories"""
        text = f"{subject} {content}".lower()
        
        okr_scores = {}
        for okr, keywords in self.okr_mapping.items():
            score = sum(1 for kw in keywords if kw in text)
            if score > 0:
                okr_scores[okr] = score
        
        if not okr_scores:
            primary_okr = 'operational'
            confidence = 0.5
        else:
            primary_okr = max(okr_scores, key=okr_scores.get)
            total_score = sum(okr_scores.values())
            confidence = okr_scores[primary_okr] / total_score if total_score > 0 else 0.5
        
        return {
            'primary_okr': primary_okr,
            'confidence': round(confidence, 2),
            'all_alignments': okr_scores,
            'mapped': bool(okr_scores)
        }
    
    def _classify_email_type(self, subject: str, content: str) -> Dict:
        """Classify as strategic vs tactical"""
        text = f"{subject} {content}".lower()
        
        strategic_keywords = ['strategy', 'vision', 'long-term', 'quarterly', 'annual', 'roadmap', 'initiative']
        tactical_keywords = ['urgent', 'asap', 'today', 'fix', 'bug', 'issue', 'daily', 'immediate']
        
        strategic_score = sum(1 for kw in strategic_keywords if kw in text)
        tactical_score = sum(1 for kw in tactical_keywords if kw in text)
        
        if strategic_score > tactical_score:
            classification = 'strategic'
            confidence = strategic_score / (strategic_score + tactical_score) if (strategic_score + tactical_score) > 0 else 0.7
        elif tactical_score > strategic_score:
            classification = 'tactical'
            confidence = tactical_score / (strategic_score + tactical_score) if (strategic_score + tactical_score) > 0 else 0.7
        else:
            classification = 'operational'
            confidence = 0.5
        
        return {
            'type': classification,
            'confidence': round(confidence, 2),
            'strategic_score': strategic_score,
            'tactical_score': tactical_score
        }
    
    def _calculate_impact_score(self, okr_alignment: Dict, classification: Dict) -> float:
        """Calculate business impact score (0-100)"""
        base_score = 50
        
        # OKR alignment bonus
        if okr_alignment['mapped']:
            base_score += 20
            if okr_alignment['primary_okr'] in ['revenue', 'growth']:
                base_score += 15
        
        # Strategic bonus
        if classification['type'] == 'strategic':
            base_score += 15
        elif classification['type'] == 'tactical':
            base_score -= 10
        
        return min(100, max(0, base_score))
    
    def _recommend_priority(self, impact_score: float, classification: Dict) -> str:
        """Recommend priority level"""
        if impact_score >= 80:
            return 'critical'
        elif impact_score >= 60:
            return 'high'
        elif impact_score >= 40:
            return 'medium'
        else:
            return 'low'
    
    def _recommend_time_investment(self, impact_score: float, classification: Dict) -> Dict:
        """Recommend time investment strategy"""
        if impact_score >= 80:
            time_minutes = 30
            strategy = 'deep_focus'
        elif impact_score >= 60:
            time_minutes = 20
            strategy = 'focused'
        elif impact_score >= 40:
            time_minutes = 10
            strategy = 'standard'
        else:
            time_minutes = 5
            strategy = 'quick_response'
        
        return {
            'recommended_minutes': time_minutes,
            'strategy': strategy,
            'batch_recommended': classification['type'] == 'tactical'
        }
    
    def _enforce_reply_all(self, to_recipients: List, cc_recipients: List, sender: str) -> List:
        """ENFORCE REPLY-ALL: Always include all original recipients."""
        all_recipients = set()
        
        if isinstance(to_recipients, list):
            all_recipients.update(to_recipients)
        elif to_recipients:
            all_recipients.add(to_recipients)
        
        if isinstance(cc_recipients, list):
            all_recipients.update(cc_recipients)
        elif cc_recipients:
            all_recipients.add(cc_recipients)
        
        all_recipients.discard(sender)
        
        if not all_recipients:
            all_recipients.add(sender)
        
        return list(all_recipients)
    
    def _generate_goal_aligned_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate response aligned with business goals"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        okr = analysis['okr_alignment']['primary_okr']
        impact = analysis['impact_score']
        
        if impact >= 70:
            opening = f"Dear {sender_name},\n\nThank you for this high-impact communication aligned with our {okr} objectives."
        else:
            opening = f"Hello {sender_name},\n\nThank you for your email regarding {okr}."
        
        response = f"""{opening}

I've reviewed your message and understand its importance to our business goals.

Based on the strategic alignment, I'll prioritize this appropriately and ensure timely follow-up.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with goal alignment tracking.
Impact Score: {impact}/100 | OKR: {okr} | Priority: {analysis['priority']}
"""
        
        return response
    
    def _log_email(self, analysis: Dict):
        """Log email for tracking"""
        self.email_log.append({
            'timestamp': analysis['timestamp'],
            'sender': analysis['sender'],
            'okr': analysis['okr_alignment']['primary_okr'],
            'impact_score': analysis['impact_score'],
            'classification': analysis['classification']['type']
        })
        
        # Keep only last 1000 entries
        if len(self.email_log) > 1000:
            self.email_log = self.email_log[-1000:]
    
    def get_goal_stats(self) -> Dict:
        """Get goal alignment statistics"""
        if not self.email_log:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'total_emails': 0,
                'message': 'No emails tracked yet'
            }
        
        okr_counts = {}
        strategic_count = 0
        tactical_count = 0
        total_impact = 0
        
        for entry in self.email_log:
            okr = entry['okr']
            okr_counts[okr] = okr_counts.get(okr, 0) + 1
            
            if entry['classification'] == 'strategic':
                strategic_count += 1
            elif entry['classification'] == 'tactical':
                tactical_count += 1
            
            total_impact += entry['impact_score']
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_emails': len(self.email_log),
            'okr_distribution': okr_counts,
            'strategic_emails': strategic_count,
            'tactical_emails': tactical_count,
            'operational_emails': len(self.email_log) - strategic_count - tactical_count,
            'average_impact_score': round(total_impact / len(self.email_log), 2),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailGoalAlignmentTracker()
    
    # Test strategic email
    test_email = {
        'from': 'ceo@company.com',
        'to': ['team@company.com'],
        'cc': ['board@company.com', 'investors@company.com'],
        'subject': 'Q4 Strategic Initiative - Revenue Growth Plan',
        'body': 'Team, we need to finalize our strategy for Q4 revenue growth. This is critical for our annual targets.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    # Analyze email
    analysis = engine.analyze_email(test_email)
    print("\n📧 Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    # Generate response
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    # Get stats
    stats = engine.get_goal_stats()
    print("\n📊 Goal Alignment Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Goal Alignment: ENABLED")
