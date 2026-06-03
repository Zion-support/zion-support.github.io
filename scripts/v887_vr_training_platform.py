#!/usr/bin/env python3
"""
V887: VR Training & Simulation Platform
Manages virtual reality training scenarios, learner progress, skill assessments,
and immersive learning experiences for enterprise training.
"""

import json
import hashlib
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict

class VRTrainingEngine:
    def __init__(self):
        self.training_modules = {}
        self.learners = {}
        self.sessions = []
        self.assessments = defaultdict(list)
        self.skill_profiles = defaultdict(dict)
        
    def create_training_module(self, module_id: str, title: str, industry: str,
                               difficulty: str, duration_minutes: int, objectives: List[str]) -> Dict:
        """Create a VR training module"""
        module = {
            'module_id': module_id,
            'title': title,
            'industry': industry,
            'difficulty': difficulty,  # beginner, intermediate, advanced
            'duration_minutes': duration_minutes,
            'objectives': objectives,
            'scenarios': [],
            'created_at': datetime.now().isoformat(),
            'status': 'active',
            'completion_rate': 0,
            'avg_score': 0
        }
        self.training_modules[module_id] = module
        return {'success': True, 'module_id': module_id, 'message': f'Training module "{title}" created'}
    
    def add_scenario(self, module_id: str, scenario: Dict) -> Dict:
        """Add a training scenario to a module"""
        if module_id not in self.training_modules:
            return {'success': False, 'error': 'Module not found'}
        
        scenario_entry = {
            'scenario_id': f"scn_{len(self.training_modules[module_id]['scenarios']) + 1}",
            'name': scenario.get('name', 'Unnamed Scenario'),
            'description': scenario.get('description', ''),
            'environment': scenario.get('environment', 'default'),
            'interactions': scenario.get('interactions', []),
            'success_criteria': scenario.get('success_criteria', {}),
            'time_limit_sec': scenario.get('time_limit_sec', 300),
            'hazards': scenario.get('hazards', []),
            'scoring_weights': scenario.get('scoring_weights', {'accuracy': 0.4, 'speed': 0.3, 'safety': 0.3})
        }
        
        self.training_modules[module_id]['scenarios'].append(scenario_entry)
        return {
            'success': True,
            'scenario': scenario_entry,
            'total_scenarios': len(self.training_modules[module_id]['scenarios'])
        }
    
    def register_learner(self, learner_id: str, name: str, department: str, 
                         experience_level: str) -> Dict:
        """Register a learner for VR training"""
        learner = {
            'learner_id': learner_id,
            'name': name,
            'department': department,
            'experience_level': experience_level,
            'enrolled_modules': [],
            'completed_modules': [],
            'total_hours': 0,
            'avg_score': 0,
            'certifications': [],
            'registered_at': datetime.now().isoformat()
        }
        self.learners[learner_id] = learner
        return {'success': True, 'learner_id': learner_id}
    
    def start_session(self, learner_id: str, module_id: str) -> Dict:
        """Start a VR training session"""
        if learner_id not in self.learners:
            return {'success': False, 'error': 'Learner not found'}
        if module_id not in self.training_modules:
            return {'success': False, 'error': 'Module not found'}
        
        session = {
            'session_id': f"sess_{int(time.time())}_{learner_id}",
            'learner_id': learner_id,
            'module_id': module_id,
            'started_at': datetime.now().isoformat(),
            'status': 'in_progress',
            'scenarios_completed': [],
            'current_scenario': 0,
            'score': 0
        }
        
        self.sessions.append(session)
        self.learners[learner_id]['enrolled_modules'].append(module_id)
        
        return {'success': True, 'session': session}
    
    def complete_scenario(self, session_id: str, scenario_id: str, performance: Dict) -> Dict:
        """Record scenario completion within a session"""
        session = next((s for s in self.sessions if s['session_id'] == session_id), None)
        if not session:
            return {'success': False, 'error': 'Session not found'}
        
        # Calculate score
        weights = {'accuracy': 0.4, 'speed': 0.3, 'safety': 0.3}
        score = sum(performance.get(k, 0) * v for k, v in weights.items())
        
        completion = {
            'scenario_id': scenario_id,
            'score': round(score, 1),
            'accuracy': performance.get('accuracy', 0),
            'speed_score': performance.get('speed', 0),
            'safety_score': performance.get('safety', 0),
            'errors': performance.get('errors', 0),
            'time_taken_sec': performance.get('time_taken_sec', 0),
            'completed_at': datetime.now().isoformat()
        }
        
        session['scenarios_completed'].append(completion)
        session['current_scenario'] += 1
        
        return {
            'success': True,
            'completion': completion,
            'scenarios_remaining': len(self.training_modules[session['module_id']]['scenarios']) - session['current_scenario']
        }
    
    def complete_session(self, session_id: str) -> Dict:
        """Complete a VR training session and calculate final metrics"""
        session = next((s for s in self.sessions if s['session_id'] == session_id), None)
        if not session:
            return {'success': False, 'error': 'Session not found'}
        
        completions = session['scenarios_completed']
        if not completions:
            return {'success': False, 'error': 'No scenarios completed'}
        
        avg_score = sum(c['score'] for c in completions) / len(completions)
        total_time = sum(c['time_taken_sec'] for c in completions)
        total_errors = sum(c['errors'] for c in completions)
        
        session['status'] = 'completed'
        session['score'] = round(avg_score, 1)
        session['completed_at'] = datetime.now().isoformat()
        
        learner = self.learners[session['learner_id']]
        learner['total_hours'] += total_time / 3600
        
        module = self.training_modules[session['module_id']]
        if avg_score >= 70:
            learner['completed_modules'].append(session['module_id'])
            
            # Check for certification
            if len(learner['completed_modules']) >= 3:
                cert = {
                    'certification_id': hashlib.md5(f"{learner['learner_id']}{int(time.time())}".encode()).hexdigest()[:12],
                    'title': f'VR Certified: {module["industry"]}',
                    'issued_at': datetime.now().isoformat(),
                    'score': round(avg_score, 1)
                }
                learner['certifications'].append(cert)
        
        # Update module stats
        all_sessions = [s for s in self.sessions if s['module_id'] == session['module_id'] and s['status'] == 'completed']
        module['avg_score'] = round(sum(s['score'] for s in all_sessions) / max(len(all_sessions), 1), 1)
        module['completion_rate'] = round(len(all_sessions) / max(len(self.learners), 1) * 100, 1)
        
        # Update skill profile
        self.skill_profiles[session['learner_id']][module['industry']] = {
            'level': 'expert' if avg_score > 90 else 'proficient' if avg_score > 70 else 'developing',
            'score': round(avg_score, 1),
            'sessions': len([s for s in self.sessions if s['learner_id'] == session['learner_id'] and s['module_id'] == session['module_id']])
        }
        
        return {
            'success': True,
            'session_score': round(avg_score, 1),
            'total_time_sec': total_time,
            'total_errors': total_errors,
            'certification_earned': len(learner['certifications']) > 0 and avg_score >= 70,
            'skill_profile': self.skill_profiles[session['learner_id']]
        }
    
    def generate_learning_path(self, learner_id: str) -> Dict:
        """Generate personalized learning path based on skill gaps"""
        if learner_id not in self.learners:
            return {'success': False, 'error': 'Learner not found'}
        
        learner = self.learners[learner_id]
        skills = self.skill_profiles.get(learner_id, {})
        
        # Find modules to recommend
        completed = set(learner['completed_modules'])
        recommended = []
        
        for module_id, module in self.training_modules.items():
            if module_id not in completed:
                priority = 'high' if module['industry'] not in skills else 'medium'
                recommended.append({
                    'module_id': module_id,
                    'title': module['title'],
                    'difficulty': module['difficulty'],
                    'priority': priority,
                    'reason': f'Build {module["industry"]} skills' if module['industry'] not in skills else f'Advance {module["industry"]} proficiency'
                })
        
        return {
            'success': True,
            'learner_id': learner_id,
            'current_skills': skills,
            'recommended_modules': sorted(recommended, key=lambda x: x['priority'] == 'high', reverse=True),
            'total_hours_completed': round(learner['total_hours'], 1)
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive VR training report"""
        total_learners = len(self.learners)
        total_sessions = len(self.sessions)
        completed_sessions = sum(1 for s in self.sessions if s['status'] == 'completed')
        avg_completion_score = sum(s['score'] for s in self.sessions if s['status'] == 'completed') / max(completed_sessions, 1)
        
        report = f"""
🎓 VR TRAINING & SIMULATION REPORT (V887)
{'='*60}

TRAINING OVERVIEW:
- Training Modules: {len(self.training_modules)}
- Registered Learners: {total_learners}
- Total Sessions: {total_sessions}
- Completed Sessions: {completed_sessions}
- Avg Completion Score: {round(avg_completion_score, 1)}/100

MODULE PERFORMANCE:
"""
        for mod_id, mod in self.training_modules.items():
            report += f"""
  📚 {mod['title']}
    Industry: {mod['industry']} | Difficulty: {mod['difficulty']}
    Scenarios: {len(mod['scenarios'])} | Completion Rate: {mod['completion_rate']}%
    Avg Score: {mod['avg_score']}/100
"""
        
        report += f"""
LEARNER ACHIEVEMENTS:
- Total Certifications: {sum(len(l['certifications']) for l in self.learners.values())}
- Total Training Hours: {round(sum(l['total_hours'] for l in self.learners.values()), 1)}

RECOMMENDATIONS:
- {'✅ High completion rates' if all(m['completion_rate'] > 50 for m in self.training_modules.values()) else '⚠️ Some modules have low completion rates'}
- {'✅ Strong average scores' if avg_completion_score > 70 else '⚠️ Consider simplifying difficult modules'}

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for VR training requests"""
    vr_keywords = ['vr training', 'virtual reality', 'simulation', 'immersive learning', 'vr module']
    assess_keywords = ['assessment', 'certification', 'score', 'evaluate', 'skill gap']
    
    has_vr = any(kw in email_text.lower() for kw in vr_keywords)
    has_assess = any(kw in email_text.lower() for kw in assess_keywords)
    
    analysis = {
        'email_type': 'vr_training',
        'vr_request': has_vr,
        'assessment_requested': has_assess,
        'reply_all_required': True,
        'priority': 'medium'
    }
    
    if has_vr and has_assess:
        analysis['priority'] = 'high'
        analysis['action'] = 'create_training_and_assess'
    
    return analysis


if __name__ == '__main__':
    engine = VRTrainingEngine()
    
    # Create modules
    engine.create_training_module('MOD-001', 'Fire Safety VR', 'Safety', 'beginner', 30, 
                                   ['Identify fire hazards', 'Use fire extinguisher', 'Evacuation procedures'])
    engine.create_training_module('MOD-002', 'Surgical Procedure VR', 'Healthcare', 'advanced', 60,
                                   ['Pre-op preparation', 'Surgical technique', 'Post-op care'])
    engine.create_training_module('MOD-003', 'Heavy Equipment Operation', 'Construction', 'intermediate', 45,
                                   ['Equipment inspection', 'Safe operation', 'Emergency procedures'])
    
    # Add scenarios
    engine.add_scenario('MOD-001', {'name': 'Office Fire Drill', 'environment': 'office', 
                                     'hazards': ['electrical fire', 'blocked exit'], 'time_limit_sec': 180})
    engine.add_scenario('MOD-001', {'name': 'Kitchen Fire Response', 'environment': 'kitchen',
                                     'hazards': ['grease fire', 'gas leak'], 'time_limit_sec': 120})
    
    # Register learners
    engine.register_learner('L-001', 'Alice Johnson', 'Operations', 'intermediate')
    engine.register_learner('L-002', 'Bob Smith', 'Engineering', 'beginner')
    
    # Run training session
    session = engine.start_session('L-001', 'MOD-001')
    sess_id = session['session']['session_id']
    
    engine.complete_scenario(sess_id, 'scn_1', {'accuracy': 85, 'speed': 78, 'safety': 92, 'errors': 2, 'time_taken_sec': 160})
    engine.complete_scenario(sess_id, 'scn_2', {'accuracy': 90, 'speed': 85, 'safety': 95, 'errors': 1, 'time_taken_sec': 100})
    
    result = engine.complete_session(sess_id)
    
    # Generate learning path
    path = engine.generate_learning_path('L-001')
    
    print(engine.generate_report())
    print(f"\nLearning Path: {json.dumps(path, indent=2)}")
    
    test_email = "Create a VR training module for fire safety with assessment scenarios and track learner certifications"
    analysis = analyze_email_content(test_email)
    print("\nEmail Analysis:")
    print(json.dumps(analysis, indent=2))
