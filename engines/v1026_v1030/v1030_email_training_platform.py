#!/usr/bin/env python3
"""
V1030 - Email Training Platform Engine
Interactive training modules to improve team email skills.
Includes assessments, progress tracking, and personalized learning paths.
"""
import re
from typing import Dict, List, Any, Optional
from datetime import datetime, timedelta
from collections import defaultdict


class EmailTrainingPlatform:
    """Interactive email training and skill development platform."""
    
    TRAINING_MODULES = {
        'email_etiquette': {
            'id': 'email_etiquette',
            'title': 'Professional Email Etiquette',
            'description': 'Learn best practices for professional email communication',
            'duration_minutes': 30,
            'difficulty': 'beginner',
            'topics': [
                'Subject line best practices',
                'Professional greetings and closings',
                'Tone and formality levels',
                'Response time expectations',
                'Email threading and reply-all'
            ],
            'assessment_questions': 10
        },
        'effective_writing': {
            'id': 'effective_writing',
            'title': 'Effective Email Writing',
            'description': 'Master clear, concise, and persuasive email writing',
            'duration_minutes': 45,
            'difficulty': 'intermediate',
            'topics': [
                'Structuring emails for clarity',
                'Writing compelling subject lines',
                'Using bullet points and formatting',
                'Call-to-action best practices',
                'Proofreading and editing'
            ],
            'assessment_questions': 15
        },
        'time_management': {
            'id': 'time_management',
            'title': 'Email Time Management',
            'description': 'Strategies for managing email efficiently and reducing overload',
            'duration_minutes': 35,
            'difficulty': 'intermediate',
            'topics': [
                'Inbox Zero methodology',
                'Email batching techniques',
                'Priority management',
                'Using filters and rules',
                'When to use email vs. other channels'
            ],
            'assessment_questions': 12
        },
        'security_awareness': {
            'id': 'security_awareness',
            'title': 'Email Security Awareness',
            'description': 'Identify and prevent phishing, malware, and social engineering attacks',
            'duration_minutes': 40,
            'difficulty': 'all_levels',
            'topics': [
                'Recognizing phishing attempts',
                'Safe attachment handling',
                'Password security',
                'Two-factor authentication',
                'Reporting suspicious emails'
            ],
            'assessment_questions': 20
        },
        'advanced_communication': {
            'id': 'advanced_communication',
            'title': 'Advanced Email Communication',
            'description': 'Handle difficult conversations, negotiations, and sensitive topics via email',
            'duration_minutes': 50,
            'difficulty': 'advanced',
            'topics': [
                'Conflict resolution via email',
                'Negotiation strategies',
                'Delivering bad news',
                'Cross-cultural communication',
                'Legal considerations'
            ],
            'assessment_questions': 15
        },
        'productivity_tools': {
            'id': 'productivity_tools',
            'title': 'Email Productivity Tools',
            'description': 'Master email client features and productivity tools',
            'duration_minutes': 30,
            'difficulty': 'intermediate',
            'topics': [
                'Keyboard shortcuts',
                'Templates and signatures',
                'Automation and rules',
                'Search techniques',
                'Integration with other tools'
            ],
            'assessment_questions': 10
        }
    }
    
    def __init__(self):
        self.user_profiles = {}
        self.progress_tracking = {}
        self.assessment_results = {}
        self.learning_paths = {}
    
    def create_user_profile(self, user_id: str, 
                           user_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Create user profile for training platform.
        
        Args:
            user_id: Unique user identifier
            user_data: User information
            
        Returns:
            Created user profile
        """
        profile = {
            'id': user_id,
            'name': user_data.get('name'),
            'email': user_data.get('email'),
            'department': user_data.get('department'),
            'role': user_data.get('role'),
            'skill_level': user_data.get('skill_level', 'beginner'),
            'learning_goals': user_data.get('learning_goals', []),
            'available_time_per_week': user_data.get('available_time_per_week', 60),
            'completed_modules': [],
            'in_progress_modules': [],
            'certifications': [],
            'created_at': datetime.now().isoformat()
        }
        
        self.user_profiles[user_id] = profile
        return profile
    
    def assess_current_skills(self, user_id: str) -> Dict[str, Any]:
        """
        Assess user's current email skills.
        
        Args:
            user_id: User identifier
            
        Returns:
            Skill assessment results
        """
        profile = self.user_profiles.get(user_id)
        if not profile:
            return {'success': False, 'error': 'User not found'}
        
        # Simulate assessment (in production, would be actual quiz)
        assessment = {
            'user_id': user_id,
            'assessed_at': datetime.now().isoformat(),
            'overall_score': 0,
            'skill_areas': {
                'email_etiquette': {
                    'score': 75,
                    'level': 'intermediate',
                    'strengths': ['Professional tone', 'Proper greetings'],
                    'improvements': ['Subject lines', 'Email threading']
                },
                'writing_clarity': {
                    'score': 68,
                    'level': 'intermediate',
                    'strengths': ['Grammar', 'Spelling'],
                    'improvements': ['Conciseness', 'Call-to-action clarity']
                },
                'time_management': {
                    'score': 55,
                    'level': 'beginner',
                    'strengths': ['Regular checking'],
                    'improvements': ['Inbox organization', 'Priority management']
                },
                'security_awareness': {
                    'score': 82,
                    'level': 'advanced',
                    'strengths': ['Phishing detection', 'Password security'],
                    'improvements': ['Attachment handling']
                },
                'advanced_communication': {
                    'score': 60,
                    'level': 'intermediate',
                    'strengths': ['Professional tone'],
                    'improvements': ['Conflict resolution', 'Negotiation']
                },
                'productivity_tools': {
                    'score': 70,
                    'level': 'intermediate',
                    'strengths': ['Basic shortcuts', 'Signatures'],
                    'improvements': ['Automation', 'Advanced search']
                }
            },
            'recommended_modules': [],
            'estimated_improvement_time': '4-6 weeks'
        }
        
        # Calculate overall score
        scores = [area['score'] for area in assessment['skill_areas'].values()]
        assessment['overall_score'] = sum(scores) / len(scores)
        
        # Recommend modules based on weaknesses
        for module_id, module in self.TRAINING_MODULES.items():
            skill_area = module_id.replace('_', '_')
            if skill_area in assessment['skill_areas']:
                if assessment['skill_areas'][skill_area]['score'] < 70:
                    assessment['recommended_modules'].append({
                        'module_id': module_id,
                        'title': module['title'],
                        'priority': 'high' if assessment['skill_areas'][skill_area]['score'] < 60 else 'medium',
                        'reason': f"Score: {assessment['skill_areas'][skill_area]['score']}/100"
                    })
        
        self.assessment_results[user_id] = assessment
        
        return {
            'engine': 'V1030 - Email Training Platform',
            'assessment': assessment,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def create_learning_path(self, user_id: str) -> Dict[str, Any]:
        """
        Create personalized learning path for user.
        
        Args:
            user_id: User identifier
            
        Returns:
            Learning path configuration
        """
        profile = self.user_profiles.get(user_id)
        assessment = self.assessment_results.get(user_id)
        
        if not profile or not assessment:
            return {'success': False, 'error': 'User profile or assessment not found'}
        
        # Build learning path based on assessment
        learning_path = {
            'user_id': user_id,
            'created_at': datetime.now().isoformat(),
            'total_modules': 0,
            'total_duration_minutes': 0,
            'estimated_completion_weeks': 0,
            'modules': [],
            'milestones': []
        }
        
        # Add recommended modules
        for rec in assessment['recommended_modules']:
            module = self.TRAINING_MODULES.get(rec['module_id'])
            if module:
                learning_path['modules'].append({
                    'module_id': module['id'],
                    'title': module['title'],
                    'duration_minutes': module['duration_minutes'],
                    'difficulty': module['difficulty'],
                    'priority': rec['priority'],
                    'status': 'not_started',
                    'order': len(learning_path['modules']) + 1
                })
                
                learning_path['total_modules'] += 1
                learning_path['total_duration_minutes'] += module['duration_minutes']
        
        # Add optional modules based on goals
        for goal in profile.get('learning_goals', []):
            for module_id, module in self.TRAINING_MODULES.items():
                if goal.lower() in module['title'].lower() or goal.lower() in module['description'].lower():
                    if not any(m['module_id'] == module_id for m in learning_path['modules']):
                        learning_path['modules'].append({
                            'module_id': module['id'],
                            'title': module['title'],
                            'duration_minutes': module['duration_minutes'],
                            'difficulty': module['difficulty'],
                            'priority': 'low',
                            'status': 'not_started',
                            'order': len(learning_path['modules']) + 1
                        })
                        
                        learning_path['total_modules'] += 1
                        learning_path['total_duration_minutes'] += module['duration_minutes']
        
        # Calculate estimated completion
        available_time = profile.get('available_time_per_week', 60)
        learning_path['estimated_completion_weeks'] = (
            learning_path['total_duration_minutes'] / available_time
        )
        
        # Create milestones
        if learning_path['total_modules'] > 0:
            milestone_interval = max(1, learning_path['total_modules'] // 3)
            for i in range(milestone_interval, learning_path['total_modules'] + 1, milestone_interval):
                learning_path['milestones'].append({
                    'milestone_id': f'milestone_{i}',
                    'title': f'Complete {i} module{"s" if i > 1 else ""}',
                    'modules_required': i,
                    'reward': 'Certificate of Progress' if i == learning_path['total_modules'] else 'Badge'
                })
        
        self.learning_paths[user_id] = learning_path
        
        return {
            'engine': 'V1030 - Email Training Platform',
            'learning_path': learning_path,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def start_module(self, user_id: str, module_id: str) -> Dict[str, Any]:
        """
        Start a training module.
        
        Args:
            user_id: User identifier
            module_id: Module identifier
            
        Returns:
            Module start result
        """
        profile = self.user_profiles.get(user_id)
        module = self.TRAINING_MODULES.get(module_id)
        
        if not profile:
            return {'success': False, 'error': 'User not found'}
        if not module:
            return {'success': False, 'error': 'Module not found'}
        
        # Check if already completed
        if module_id in profile['completed_modules']:
            return {'success': False, 'error': 'Module already completed'}
        
        # Add to in-progress
        if module_id not in profile['in_progress_modules']:
            profile['in_progress_modules'].append(module_id)
        
        # Initialize progress tracking
        if user_id not in self.progress_tracking:
            self.progress_tracking[user_id] = {}
        
        if module_id not in self.progress_tracking[user_id]:
            self.progress_tracking[user_id][module_id] = {
                'started_at': datetime.now().isoformat(),
                'completed_at': None,
                'time_spent_minutes': 0,
                'topics_completed': [],
                'assessment_attempts': 0,
                'assessment_score': None,
                'passed': False
            }
        
        return {
            'engine': 'V1030 - Email Training Platform',
            'user_id': user_id,
            'module': module,
            'progress': self.progress_tracking[user_id][module_id],
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def complete_module(self, user_id: str, module_id: str,
                       assessment_score: int) -> Dict[str, Any]:
        """
        Complete a training module.
        
        Args:
            user_id: User identifier
            module_id: Module identifier
            assessment_score: Assessment score (0-100)
            
        Returns:
            Module completion result
        """
        profile = self.user_profiles.get(user_id)
        module = self.TRAINING_MODULES.get(module_id)
        
        if not profile or not module:
            return {'success': False, 'error': 'User or module not found'}
        
        # Update progress
        if user_id in self.progress_tracking and module_id in self.progress_tracking[user_id]:
            progress = self.progress_tracking[user_id][module_id]
            progress['completed_at'] = datetime.now().isoformat()
            progress['assessment_score'] = assessment_score
            progress['passed'] = assessment_score >= 70
        
        # Move from in-progress to completed
        if module_id in profile['in_progress_modules']:
            profile['in_progress_modules'].remove(module_id)
        
        if module_id not in profile['completed_modules']:
            profile['completed_modules'].append(module_id)
        
        # Check for certification
        certification = None
        if assessment_score >= 80:
            certification = {
                'module_id': module_id,
                'title': module['title'],
                'score': assessment_score,
                'awarded_at': datetime.now().isoformat(),
                'certificate_id': f"CERT-{user_id}-{module_id}-{datetime.now().strftime('%Y%m%d')}"
            }
            profile['certifications'].append(certification)
        
        # Update learning path
        if user_id in self.learning_paths:
            for module_entry in self.learning_paths[user_id]['modules']:
                if module_entry['module_id'] == module_id:
                    module_entry['status'] = 'completed'
                    module_entry['completed_at'] = datetime.now().isoformat()
                    module_entry['score'] = assessment_score
        
        return {
            'engine': 'V1030 - Email Training Platform',
            'user_id': user_id,
            'module_id': module_id,
            'completed': True,
            'assessment_score': assessment_score,
            'passed': assessment_score >= 70,
            'certification': certification,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def get_user_progress(self, user_id: str) -> Dict[str, Any]:
        """
        Get user's overall progress.
        
        Args:
            user_id: User identifier
            
        Returns:
            User progress summary
        """
        profile = self.user_profiles.get(user_id)
        if not profile:
            return {'success': False, 'error': 'User not found'}
        
        learning_path = self.learning_paths.get(user_id, {})
        
        # Calculate progress
        total_modules = learning_path.get('total_modules', 0)
        completed_modules = len(profile['completed_modules'])
        in_progress_modules = len(profile['in_progress_modules'])
        
        progress_percentage = (completed_modules / total_modules * 100) if total_modules > 0 else 0
        
        # Calculate time spent
        total_time_spent = 0
        if user_id in self.progress_tracking:
            for module_id, progress in self.progress_tracking[user_id].items():
                total_time_spent += progress.get('time_spent_minutes', 0)
        
        # Check milestones
        completed_milestones = []
        for milestone in learning_path.get('milestones', []):
            if completed_modules >= milestone['modules_required']:
                completed_milestones.append(milestone)
        
        return {
            'engine': 'V1030 - Email Training Platform',
            'user_id': user_id,
            'progress': {
                'total_modules': total_modules,
                'completed_modules': completed_modules,
                'in_progress_modules': in_progress_modules,
                'progress_percentage': progress_percentage,
                'total_time_spent_minutes': total_time_spent,
                'certifications_earned': len(profile['certifications']),
                'completed_milestones': len(completed_milestones)
            },
            'recent_activity': self._get_recent_activity(user_id),
            'next_recommendations': self._get_next_recommendations(user_id),
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def _get_recent_activity(self, user_id: str) -> List[Dict[str, Any]]:
        """Get user's recent training activity."""
        activity = []
        
        if user_id in self.progress_tracking:
            for module_id, progress in self.progress_tracking[user_id].items():
                if progress.get('completed_at'):
                    activity.append({
                        'type': 'module_completed',
                        'module_id': module_id,
                        'timestamp': progress['completed_at'],
                        'score': progress.get('assessment_score')
                    })
                elif progress.get('started_at'):
                    activity.append({
                        'type': 'module_started',
                        'module_id': module_id,
                        'timestamp': progress['started_at']
                    })
        
        # Sort by timestamp
        activity.sort(key=lambda x: x['timestamp'], reverse=True)
        return activity[:10]  # Last 10 activities
    
    def _get_next_recommendations(self, user_id: str) -> List[Dict[str, Any]]:
        """Get recommendations for next modules to take."""
        recommendations = []
        
        if user_id in self.learning_paths:
            learning_path = self.learning_paths[user_id]
            
            for module_entry in learning_path['modules']:
                if module_entry['status'] == 'not_started':
                    module = self.TRAINING_MODULES.get(module_entry['module_id'])
                    if module:
                        recommendations.append({
                            'module_id': module['id'],
                            'title': module['title'],
                            'duration_minutes': module['duration_minutes'],
                            'priority': module_entry['priority'],
                            'reason': 'Part of your learning path'
                        })
                    
                    if len(recommendations) >= 3:
                        break
        
        return recommendations


def create_training_profile(user_data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Create training profile for user.
    
    Args:
        user_data: User information
        
    Returns:
        User profile
    """
    platform = EmailTrainingPlatform()
    user_id = f"user_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    return platform.create_user_profile(user_id, user_data)


if __name__ == '__main__':
    # Test cases
    print(f"{'='*60}")
    print("Email Training Platform Test")
    print('='*60)
    
    platform = EmailTrainingPlatform()
    
    # Create user profile
    user_data = {
        'name': 'John Smith',
        'email': 'john.smith@example.com',
        'department': 'Sales',
        'role': 'Account Manager',
        'skill_level': 'intermediate',
        'learning_goals': ['Improve email writing', 'Better time management'],
        'available_time_per_week': 90
    }
    
    user_id = 'user_001'
    profile = platform.create_user_profile(user_id, user_data)
    
    print(f"\nUser Profile Created:")
    print(f"  User ID: {profile['id']}")
    print(f"  Name: {profile['name']}")
    print(f"  Department: {profile['department']}")
    print(f"  Skill Level: {profile['skill_level']}")
    print(f"  Learning Goals: {', '.join(profile['learning_goals'])}")
    print(f"  Available Time: {profile['available_time_per_week']} min/week")
    
    # Assess skills
    print(f"\n{'='*60}")
    print("Skill Assessment")
    print('='*60)
    
    assessment = platform.assess_current_skills(user_id)
    
    print(f"\nOverall Score: {assessment['assessment']['overall_score']:.1f}/100")
    print(f"\nSkill Areas:")
    for area, data in assessment['assessment']['skill_areas'].items():
        print(f"  {area.replace('_', ' ').title()}: {data['score']}/100 ({data['level']})")
        print(f"    Strengths: {', '.join(data['strengths'][:2])}")
        print(f"    Improvements: {', '.join(data['improvements'][:2])}")
    
    print(f"\nRecommended Modules:")
    for rec in assessment['assessment']['recommended_modules'][:5]:
        print(f"  [{rec['priority'].upper()}] {rec['title']}")
        print(f"    Reason: {rec['reason']}")
    
    # Create learning path
    print(f"\n{'='*60}")
    print("Learning Path")
    print('='*60)
    
    learning_path = platform.create_learning_path(user_id)
    
    print(f"\nLearning Path Created:")
    print(f"  Total Modules: {learning_path['learning_path']['total_modules']}")
    print(f"  Total Duration: {learning_path['learning_path']['total_duration_minutes']} minutes")
    print(f"  Estimated Completion: {learning_path['learning_path']['estimated_completion_weeks']:.1f} weeks")
    
    print(f"\nModules in Path:")
    for module in learning_path['learning_path']['modules']:
        print(f"  {module['order']}. {module['title']} ({module['duration_minutes']} min) - {module['priority']}")
    
    print(f"\nMilestones:")
    for milestone in learning_path['learning_path']['milestones']:
        print(f"  {milestone['title']} - {milestone['reward']}")
    
    # Start module
    print(f"\n{'='*60}")
    print("Starting Module")
    print('='*60)
    
    first_module = learning_path['learning_path']['modules'][0]['module_id']
    start_result = platform.start_module(user_id, first_module)
    
    print(f"\nModule Started: {start_result['module']['title']}")
    print(f"  Duration: {start_result['module']['duration_minutes']} minutes")
    print(f"  Difficulty: {start_result['module']['difficulty']}")
    print(f"  Topics: {', '.join(start_result['module']['topics'][:3])}...")
    
    # Complete module
    print(f"\n{'='*60}")
    print("Completing Module")
    print('='*60)
    
    completion = platform.complete_module(user_id, first_module, assessment_score=85)
    
    print(f"\nModule Completed:")
    print(f"  Score: {completion['assessment_score']}/100")
    print(f"  Passed: {'✓' if completion['passed'] else '✗'}")
    if completion['certification']:
        print(f"  Certification: {completion['certification']['certificate_id']}")
    
    # Get progress
    print(f"\n{'='*60}")
    print("User Progress")
    print('='*60)
    
    progress = platform.get_user_progress(user_id)
    
    print(f"\nProgress Summary:")
    print(f"  Completed: {progress['progress']['completed_modules']}/{progress['progress']['total_modules']} modules")
    print(f"  Progress: {progress['progress']['progress_percentage']:.1f}%")
    print(f"  Time Spent: {progress['progress']['total_time_spent_minutes']} minutes")
    print(f"  Certifications: {progress['progress']['certifications_earned']}")
    print(f"  Milestones: {progress['progress']['completed_milestones']}")
    
    print(f"\nRecent Activity:")
    for activity in progress['recent_activity'][:5]:
        print(f"  [{activity['type']}] {activity['module_id']} - {activity['timestamp']}")
    
    print(f"\nNext Recommendations:")
    for rec in progress['next_recommendations'][:3]:
        print(f"  [{rec['priority'].upper()}] {rec['title']} ({rec['duration_minutes']} min)")
    
    print(f"\nReply-All Enforced: {progress['reply_all_enforced']}")
    print(f"Case-by-Case Analysis: {progress['case_by_case_analysis']}")
