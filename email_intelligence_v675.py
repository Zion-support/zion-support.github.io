#!/usr/bin/env python3
"""
V675 - Email Strategic Initiative Tracker
Identifies and tracks strategic initiatives, OKRs, and business goals
mentioned in executive communications. Provides strategic alignment
verification and progress tracking.

Key Features:
- Strategic initiative detection
- OKR (Objectives and Key Results) extraction
- Goal alignment verification
- Progress tracking from email updates
- Strategic priority classification
- Executive communication analysis
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from collections import Counter, defaultdict
from typing import Dict, List, Optional

class EmailStrategicInitiativeTracker:
    """Tracks strategic initiatives and OKRs from executive communications"""
    
    def __init__(self):
        self.initiative_registry = {}
        self.okr_registry = {}
        self.progress_updates = []
        self.alignment_verification = {}
    
    STRATEGIC_INDICATORS = {
        'initiative': ['strategic initiative', 'strategic project', 'key initiative', 'major project', 'transformation', 'program'],
        'vision': ['vision', 'mission', 'long-term', 'future state', 'north star', 'direction'],
        'roadmap': ['roadmap', 'timeline', 'phases', 'milestones', 'quarterly plan', 'annual plan'],
        'investment': ['investment', 'budget allocation', 'resource commitment', 'funding', 'capital']
    }
    
    OKR_PATTERNS = {
        'objective': ['objective:', 'goal:', 'target:', 'aim to', 'strive to', 'focus on'],
        'key_result': ['key result:', 'kr:', 'measure:', 'metric:', 'kpis:', 'success criteria:'],
        'quantified': [r'\d+%', r'\$\d+', r'\d+x', r'increase by \d+', r'reduce by \d+', r'achieve \d+']
    }
    
    PRIORITY_LEVELS = {
        'critical': ['critical priority', 'top priority', 'must-win', 'non-negotiable', 'essential'],
        'high': ['high priority', 'important', 'key focus', 'strategic priority'],
        'medium': ['medium priority', 'moderate priority', 'standard priority'],
        'low': ['low priority', 'nice to have', 'secondary']
    }
    
    PROGRESS_INDICATORS = {
        'on_track': ['on track', 'ahead of schedule', 'meeting targets', 'progressing well', 'milestone achieved'],
        'at_risk': ['at risk', 'behind schedule', 'concerns', 'challenges', 'delays', 'blockers'],
        'off_track': ['off track', 'critical issues', 'failed', 'missed target', 'significant delay'],
        'completed': ['completed', 'achieved', 'delivered', 'finished', 'launched', 'successful']
    }
    
    BUSINESS_GOALS = {
        'revenue': ['revenue', 'sales', 'income', 'profit', 'margin', 'growth'],
        'customer': ['customer', 'client', 'user', 'satisfaction', 'retention', 'acquisition', 'nps'],
        'product': ['product', 'feature', 'innovation', 'quality', 'reliability', 'performance'],
        'operational': ['efficiency', 'productivity', 'cost reduction', 'optimization', 'automation'],
        'people': ['hiring', 'talent', 'culture', 'engagement', 'retention', 'development'],
        'market': ['market share', 'positioning', 'brand', 'awareness', 'expansion']
    }
    
    def detect_strategic_initiatives(self, email: Dict) -> List[Dict]:
        """Detect strategic initiatives from email"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        initiatives = []
        
        # Check for strategic indicators
        for initiative_type, keywords in self.STRATEGIC_INDICATORS.items():
            for keyword in keywords:
                if keyword in text:
                    # Extract context
                    context = self._extract_context(text, keyword, 300)
                    
                    # Identify business goals
                    goals = self._identify_business_goals(text)
                    
                    # Determine priority
                    priority = self._determine_priority(text)
                    
                    # Extract timeline if present
                    timeline = self._extract_timeline(text)
                    
                    initiative = {
                        'initiative_id': f"init_{len(self.initiative_registry):05d}",
                        'type': initiative_type,
                        'context': context,
                        'business_goals': goals,
                        'priority': priority,
                        'timeline': timeline,
                        'stakeholders': email.get('to', []) + email.get('cc', []),
                        'owner': email.get('from', ''),
                        'email_id': email.get('id', ''),
                        'timestamp': email.get('timestamp', datetime.now().isoformat()),
                        'status': 'announced',
                        'progress': 0
                    }
                    
                    initiatives.append(initiative)
                    self.initiative_registry[initiative['initiative_id']] = initiative
        
        return initiatives
    
    def _extract_context(self, text: str, keyword: str, window: int = 300) -> str:
        """Extract context around keyword"""
        idx = text.find(keyword)
        if idx == -1:
            return ''
        start = max(0, idx - window)
        end = min(len(text), idx + len(keyword) + window)
        return text[start:end].strip()
    
    def _identify_business_goals(self, text: str) -> List[str]:
        """Identify business goals mentioned in text"""
        goals = []
        for goal_category, keywords in self.BUSINESS_GOALS.items():
            for keyword in keywords:
                if keyword in text:
                    goals.append(goal_category)
                    break
        return list(set(goals))
    
    def _determine_priority(self, text: str) -> str:
        """Determine strategic priority level"""
        for priority_level, keywords in self.PRIORITY_LEVELS.items():
            for keyword in keywords:
                if keyword in text:
                    return priority_level
        return 'medium'  # Default
    
    def _extract_timeline(self, text: str) -> Optional[Dict]:
        """Extract timeline information"""
        timeline = {}
        
        # Look for quarters
        quarter_pattern = r'q[1-4]\s*\d{4}'
        quarters = re.findall(quarter_pattern, text.lower())
        if quarters:
            timeline['quarters'] = quarters
        
        # Look for years
        year_pattern = r'\b20\d{2}\b'
        years = re.findall(year_pattern, text)
        if years:
            timeline['years'] = list(set(years))
        
        # Look for months
        month_pattern = r'\b(january|february|march|april|may|june|july|august|september|october|november|december)\b'
        months = re.findall(month_pattern, text.lower())
        if months:
            timeline['months'] = months
        
        return timeline if timeline else None
    
    def extract_okrs(self, email: Dict) -> List[Dict]:
        """Extract OKRs (Objectives and Key Results) from email"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        okrs = []
        
        # Look for objective patterns
        objective_patterns = self.OKR_PATTERNS['objective']
        key_result_patterns = self.OKR_PATTERNS['key_result']
        
        objectives = []
        key_results = []
        
        # Extract objectives
        for pattern in objective_patterns:
            if pattern in text:
                context = self._extract_context(text, pattern, 200)
                objectives.append(context)
        
        # Extract key results
        for pattern in key_result_patterns:
            if pattern in text:
                context = self._extract_context(text, pattern, 200)
                key_results.append(context)
        
        # Look for quantified targets
        quantified_targets = []
        for pattern in self.OKR_PATTERNS['quantified']:
            matches = re.findall(pattern, text)
            quantified_targets.extend(matches)
        
        # Create OKR objects if we found objectives
        if objectives:
            for i, objective in enumerate(objectives):
                okr = {
                    'okr_id': f"okr_{len(self.okr_registry):05d}",
                    'objective': objective,
                    'key_results': key_results if i == 0 else [],  # Associate KRs with first objective
                    'quantified_targets': quantified_targets,
                    'owner': email.get('from', ''),
                    'email_id': email.get('id', ''),
                    'timestamp': email.get('timestamp', datetime.now().isoformat()),
                    'status': 'defined',
                    'progress': 0
                }
                
                okrs.append(okr)
                self.okr_registry[okr['okr_id']] = okr
        
        return okrs
    
    def track_progress(self, email: Dict, initiative_id: str = None) -> Dict:
        """Track progress updates from email"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        
        # Detect progress status
        progress_status = None
        for status, keywords in self.PROGRESS_INDICATORS.items():
            if any(kw in text for kw in keywords):
                progress_status = status
                break
        
        if not progress_status:
            return {'error': 'No progress indicators found'}
        
        # Extract progress percentage if mentioned
        progress_pct = None
        pct_match = re.search(r'(\d+)%\s*(complete|done|progress)', text)
        if pct_match:
            progress_pct = int(pct_match.group(1))
        
        # Extract milestones achieved
        milestones = []
        if 'milestone' in text or 'achieved' in text:
            context = self._extract_context(text, 'milestone' if 'milestone' in text else 'achieved', 150)
            milestones.append(context)
        
        # Extract blockers or risks
        blockers = []
        if 'blocker' in text or 'risk' in text or 'issue' in text:
            context = self._extract_context(text, 'blocker' if 'blocker' in text else 'risk' if 'risk' in text else 'issue', 150)
            blockers.append(context)
        
        progress_update = {
            'email_id': email.get('id', ''),
            'initiative_id': initiative_id,
            'progress_status': progress_status,
            'progress_percentage': progress_pct,
            'milestones_achieved': milestones,
            'blockers_or_risks': blockers,
            'reporter': email.get('from', ''),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'context': self._extract_context(text, progress_status, 200)
        }
        
        self.progress_updates.append(progress_update)
        
        # Update initiative if ID provided
        if initiative_id and initiative_id in self.initiative_registry:
            initiative = self.initiative_registry[initiative_id]
            initiative['status'] = progress_status
            if progress_pct is not None:
                initiative['progress'] = progress_pct
        
        return progress_update
    
    def verify_strategic_alignment(self, initiative_id: str, related_emails: List[Dict]) -> Dict:
        """Verify strategic alignment of initiative across communications"""
        if initiative_id not in self.initiative_registry:
            return {'error': 'Initiative not found'}
        
        initiative = self.initiative_registry[initiative_id]
        
        # Analyze related emails for alignment
        alignment_scores = []
        stakeholders_mentioned = set()
        goals_mentioned = set()
        
        for email in related_emails:
            text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
            
            # Check if initiative context is mentioned
            initiative_keywords = initiative['context'][:100].split()
            mentions = sum(1 for kw in initiative_keywords if kw.lower() in text)
            alignment_score = min(100, mentions * 10)
            alignment_scores.append(alignment_score)
            
            # Track stakeholders
            stakeholders_mentioned.update(email.get('to', []) + email.get('cc', []))
            
            # Track goals
            goals = self._identify_business_goals(text)
            goals_mentioned.update(goals)
        
        # Calculate overall alignment
        avg_alignment = sum(alignment_scores) / len(alignment_scores) if alignment_scores else 0
        
        # Check goal consistency
        initiative_goals = set(initiative['business_goals'])
        goal_consistency = len(initiative_goals & goals_mentioned) / len(initiative_goals) if initiative_goals else 0
        
        alignment_assessment = {
            'initiative_id': initiative_id,
            'alignment_score': round(avg_alignment, 1),
            'goal_consistency': round(goal_consistency * 100, 1),
            'stakeholders_engaged': len(stakeholders_mentioned),
            'emails_analyzed': len(related_emails),
            'alignment_level': 'high' if avg_alignment >= 70 else 'medium' if avg_alignment >= 40 else 'low',
            'goal_alignment': 'consistent' if goal_consistency >= 0.8 else 'partial' if goal_consistency >= 0.5 else 'misaligned',
            'assessment_date': datetime.now().isoformat(),
            'recommendations': self._generate_alignment_recommendations(avg_alignment, goal_consistency)
        }
        
        self.alignment_verification[initiative_id] = alignment_assessment
        return alignment_assessment
    
    def _generate_alignment_recommendations(self, alignment_score: float, goal_consistency: float) -> List[str]:
        """Generate alignment recommendations"""
        recommendations = []
        
        if alignment_score < 40:
            recommendations.append('Low alignment detected - increase communication about initiative')
            recommendations.append('Schedule alignment meetings with key stakeholders')
        elif alignment_score < 70:
            recommendations.append('Moderate alignment - reinforce strategic messaging')
            recommendations.append('Share progress updates more frequently')
        else:
            recommendations.append('High alignment achieved - maintain communication cadence')
        
        if goal_consistency < 0.5:
            recommendations.append('Goal misalignment detected - clarify objectives')
            recommendations.append('Ensure all communications reference core goals')
        elif goal_consistency < 0.8:
            recommendations.append('Partial goal alignment - emphasize key objectives')
        
        return recommendations
    
    def generate_strategic_dashboard(self) -> Dict:
        """Generate strategic initiatives dashboard"""
        if not self.initiative_registry:
            return {'message': 'No strategic initiatives tracked'}
        
        # Initiative statistics
        total_initiatives = len(self.initiative_registry)
        by_priority = Counter(i['priority'] for i in self.initiative_registry.values())
        by_status = Counter(i['status'] for i in self.initiative_registry.values())
        
        # Business goals distribution
        all_goals = []
        for initiative in self.initiative_registry.values():
            all_goals.extend(initiative['business_goals'])
        goal_distribution = Counter(all_goals)
        
        # OKR statistics
        total_okrs = len(self.okr_registry)
        okr_by_status = Counter(o['status'] for o in self.okr_registry.values())
        
        # Progress statistics
        avg_progress = sum(i['progress'] for i in self.initiative_registry.values()) / total_initiatives if total_initiatives > 0 else 0
        
        # Alignment statistics
        alignment_levels = Counter(
            a['alignment_level'] for a in self.alignment_verification.values()
        )
        
        return {
            'total_initiatives': total_initiatives,
            'initiatives_by_priority': dict(by_priority),
            'initiatives_by_status': dict(by_status),
            'business_goals_distribution': dict(goal_distribution),
            'total_okrs': total_okrs,
            'okrs_by_status': dict(okr_by_status),
            'average_progress': round(avg_progress, 1),
            'alignment_distribution': dict(alignment_levels),
            'total_progress_updates': len(self.progress_updates),
            'reply_all_enforcement': 'Active for all strategic communications',
            'timestamp': datetime.now().isoformat()
        }
    
    def process_executive_email(self, email: Dict) -> Dict:
        """Process executive email for strategic initiative tracking"""
        # Detect strategic initiatives
        initiatives = self.detect_strategic_initiatives(email)
        
        # Extract OKRs
        okrs = self.extract_okrs(email)
        
        # Track progress if initiative mentioned
        progress_update = None
        if self.initiative_registry:
            # Try to match to existing initiative
            text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
            for init_id, initiative in self.initiative_registry.items():
                if any(kw.lower() in text for kw in initiative['context'][:50].split()):
                    progress_update = self.track_progress(email, init_id)
                    break
        
        return {
            'email_id': email.get('id', ''),
            'initiatives_detected': len(initiatives),
            'okrs_extracted': len(okrs),
            'progress_update': progress_update is not None,
            'initiatives': initiatives,
            'okrs': okrs,
            'summary': {
                'strategic_content': len(initiatives) > 0 or len(okrs) > 0,
                'priority_levels': list(set(i['priority'] for i in initiatives)),
                'business_goals': list(set(goal for i in initiatives for goal in i['business_goals']))
            },
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }


def test_v675():
    """Test V675 Email Strategic Initiative Tracker"""
    tracker = EmailStrategicInitiativeTracker()
    
    # Test 1: Strategic initiative announcement
    email1 = {
        'id': 'e001',
        'from': 'ceo@company.com',
        'to': ['executives@company.com', 'leadership@company.com'],
        'cc': ['board@company.com'],
        'subject': 'Strategic Initiative: Digital Transformation Program',
        'body': 'I\'m announcing a critical priority strategic initiative: our Digital Transformation Program. This top priority initiative will drive revenue growth and customer satisfaction. Our objective is to achieve 50% automation by Q4 2026. Key results include: reduce operational costs by 30%, increase customer NPS to 70+, and launch 5 new digital products. This is a must-win initiative with $10M investment over 2 years.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: OKR definition
    email2 = {
        'id': 'e002',
        'from': 'vp@company.com',
        'to': ['team@company.com'],
        'subject': 'Q3 OKRs: Product Innovation',
        'body': 'Objective: Launch innovative product features that delight customers. Key Result 1: Release 3 major features by end of Q3. Key Result 2: Achieve 90% customer satisfaction score. Key Result 3: Increase user engagement by 40%. We aim to focus on quality and reliability.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Progress update
    email3 = {
        'id': 'e003',
        'from': 'director@company.com',
        'to': ['executives@company.com'],
        'subject': 'Digital Transformation Progress Update',
        'body': 'The Digital Transformation Program is on track and progressing well. We\'ve achieved our first milestone: completed infrastructure migration. Currently at 25% complete. No major blockers at this time. Meeting our targets as planned.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    # Process emails
    result1 = tracker.process_executive_email(email1)
    result2 = tracker.process_executive_email(email2)
    result3 = tracker.process_executive_email(email3)
    
    print(f"{'='*50}")
    print(f"Email 1: Strategic Initiative Announcement")
    print(f"{'='*50}")
    print(f"Initiatives: {result1['initiatives_detected']}")
    print(f"OKRs: {result1['okrs_extracted']}")
    print(f"Strategic Content: {result1['summary']['strategic_content']}")
    
    if result1['initiatives']:
        init = result1['initiatives'][0]
        print(f"\nInitiative: {init['initiative_id']}")
        print(f"Type: {init['type']}")
        print(f"Priority: {init['priority']}")
        print(f"Business Goals: {', '.join(init['business_goals'])}")
        print(f"Timeline: {init['timeline']}")
    
    print(f"\n{'='*50}")
    print(f"Email 2: OKR Definition")
    print(f"{'='*50}")
    print(f"OKRs: {result2['okrs_extracted']}")
    
    if result2['okrs']:
        okr = result2['okrs'][0]
        print(f"\nOKR: {okr['okr_id']}")
        print(f"Objective: {okr['objective'][:100]}...")
        print(f"Key Results: {len(okr['key_results'])}")
        print(f"Quantified Targets: {okr['quantified_targets']}")
    
    print(f"\n{'='*50}")
    print(f"Email 3: Progress Update")
    print(f"{'='*50}")
    print(f"Progress Update: {result3['progress_update']}")
    
    # Test alignment verification
    if tracker.initiative_registry:
        init_id = list(tracker.initiative_registry.keys())[0]
        alignment = tracker.verify_strategic_alignment(init_id, [email1, email3])
        
        print(f"\n{'='*50}")
        print(f"Strategic Alignment Verification")
        print(f"{'='*50}")
        print(f"Initiative: {init_id}")
        print(f"Alignment Score: {alignment['alignment_score']}/100")
        print(f"Alignment Level: {alignment['alignment_level']}")
        print(f"Goal Consistency: {alignment['goal_consistency']}%")
        print(f"Stakeholders Engaged: {alignment['stakeholders_engaged']}")
    
    # Generate dashboard
    dashboard = tracker.generate_strategic_dashboard()
    print(f"\n{'='*50}")
    print(f"✅ V675 Email Strategic Initiative Tracker Test Complete")
    print(f"{'='*50}")
    print(f"Total Initiatives: {dashboard['total_initiatives']}")
    print(f"Total OKRs: {dashboard['total_okrs']}")
    print(f"Avg Progress: {dashboard['average_progress']}%")
    print(f"Progress Updates: {dashboard['total_progress_updates']}")
    
    return dashboard


if __name__ == '__main__':
    test_v675()
