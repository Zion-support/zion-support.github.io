#!/usr/bin/env python3
"""
Email Intelligence V304 - Email Decision Intelligence
Analyzes decision-making patterns in email threads
Identifies bottlenecks and suggests optimal decision paths
"""
import json, re
from datetime import datetime
from typing import Dict, List
from collections import defaultdict

class EmailDecisionIntelligence:
    def __init__(self):
        self.version = "V304"
        self.name = "Email Decision Intelligence"
    
    def analyze_decisions(self, email_thread: List[Dict]) -> Dict:
        """Analyze decision-making patterns in email thread"""
        print(f"[{self.version}] ⚖️ Analyzing decision patterns in {len(email_thread)} emails...")
        
        decisions = []
        bottlenecks = []
        participants = defaultdict(lambda: {'emails': 0, 'decisions_made': 0, 'avg_response_time': 0})
        decision_signals = []
        
        for i, email in enumerate(email_thread):
            content = email.get('content', '')
            sender = email.get('sender', {}).get('email', 'unknown')
            participants[sender]['emails'] += 1
            
            # Detect decision signals
            if re.search(r'(?:I (?:think|believe|recommend|suggest)|my recommendation|we should|let\'s|go with|option [A-Z])', content, re.I):
                decision_signals.append({'sender': sender, 'signal': content[:100], 'position': i})
            
            # Detect decisions made
            if re.search(r'(?:we (?:decided|agreed|approved)|final decision|going with|confirmed)', content, re.I):
                decisions.append({'decision': content[:150], 'made_by': sender, 'position': i})
                participants[sender]['decisions_made'] += 1
            
            # Detect bottlenecks (long gaps between emails)
            if i > 0:
                gap = email.get('minutes_since_previous', 0)
                if gap > 1440:  # > 24 hours
                    bottlenecks.append({
                        'between': email_thread[i-1].get('sender', {}).get('email', '') + ' → ' + sender,
                        'delay_hours': round(gap / 60, 1),
                        'reason_guess': 'Waiting for approval' if re.search(r'(?:approve|approval|sign.off|review)', content, re.I) else 'Information gathering'
                    })
        
        # Decision efficiency score
        thread_length = len(email_thread)
        decision_count = len(decisions)
        bottleneck_count = len(bottlenecks)
        efficiency = max(0, 100 - (thread_length * 5) - (bottleneck_count * 15) + (decision_count * 20))
        
        return {
            'version': self.version,
            'engine': self.name,
            'thread_analysis': {
                'thread_length': thread_length,
                'participants': dict(participants),
                'decisions_made': decisions,
                'decision_signals': decision_signals,
                'bottlenecks': bottlenecks,
                'efficiency_score': min(100, max(0, efficiency)),
                'decision_velocity': f'{decision_count}/{thread_length} emails'
            },
            'recommendations': self._generate_recommendations(bottlenecks, decision_count, thread_length),
            'optimal_path': self._suggest_optimal_path(email_thread),
            'timestamp': datetime.now().isoformat()
        }
    
    def _generate_recommendations(self, bottlenecks: List, decisions: int, length: int) -> List[str]:
        recs = []
        if bottlenecks:
            recs.append(f"Address {len(bottlenecks)} bottlenecks causing delays >24h")
        if decisions == 0 and length > 5:
            recs.append("Thread has no clear decision - consider scheduling a meeting")
        if length > 10:
            recs.append("Thread is too long - summarize and create action items")
        recs.append("Use structured decision format: Options → Trade-offs → Recommendation → Decision")
        return recs
    
    def _suggest_optimal_path(self, thread: List[Dict]) -> Dict:
        return {
            'suggested_steps': ['Define question clearly', 'Gather 2-3 options', 'Assign decision owner', 'Set deadline', 'Document decision'],
            'estimated_emails_needed': 3,
            'estimated_time_hours': 24
        }
    
    def analyze_and_respond(self, email_data: Dict) -> Dict:
        """Analyze decisions and respond - REPLY-ALL enforced"""
        analysis = self.analyze_decisions(email_data.get('thread', []))
        all_recipients = email_data.get('to', []) + email_data.get('cc', [])
        return {
            'version': self.version,
            'engine': self.name,
            'analysis': analysis,
            'reply_all_enforced': True,
            'all_recipients': all_recipients,
            'case_by_case_analysis': True
        }

if __name__ == '__main__':
    di = EmailDecisionIntelligence()
    thread = [
        {'sender': {'email': 'pm@co.com'}, 'content': 'Team, should we go with Option A (AWS) or Option B (Azure) for the new platform?', 'minutes_since_previous': 0},
        {'sender': {'email': 'dev@co.com'}, 'content': 'I recommend Option A because of better Kubernetes support.', 'minutes_since_previous': 120},
        {'sender': {'email': 'cto@co.com'}, 'content': 'I think Option B has better pricing. Let me check with finance.', 'minutes_since_previous': 2880},
        {'sender': {'email': 'cfo@co.com'}, 'content': 'Option B saves us $50K/year. My recommendation is Option B.', 'minutes_since_previous': 4320},
        {'sender': {'email': 'cto@co.com'}, 'content': 'We decided to go with Option B. Please proceed with the migration.', 'minutes_since_previous': 60}
    ]
    result = di.analyze_decisions(thread)
    print(json.dumps(result, indent=2))
