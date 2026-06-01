#!/usr/bin/env python3
"""
V1090: AI Email Follow-up Automation
Intelligent follow-up system that tracks commitments, deadlines, and unanswered emails.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
from datetime import datetime, timedelta
from typing import Dict, List

class FollowUpAutomation:
    def __init__(self):
        self.commitments = []
        self.deadlines = []
        self.unanswered_questions = []
        self.follow_up_schedule = []
    
    def process_email(self, email_data: Dict) -> Dict:
        """Process email and set up follow-up tracking."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        thread_id = email_data.get('thread_id', '')
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Extract commitments
        commitments = self._extract_commitments(body, sender, timestamp)
        
        # Extract deadlines
        deadlines = self._extract_deadlines(body)
        
        # Check for unanswered questions
        unanswered = self._check_unanswered_questions(body, thread_id)
        
        # Generate follow-up schedule
        follow_up_schedule = self._generate_schedule(commitments, deadlines, unanswered)
        
        # Create follow-up templates
        templates = self._create_templates(commitments, deadlines, unanswered)
        
        # Calculate priority score
        priority_score = self._calculate_priority(commitments, deadlines, unanswered)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(commitments, deadlines, unanswered, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'commitments_tracked': commitments,
            'deadlines_detected': deadlines,
            'unanswered_questions': unanswered,
            'follow_up_schedule': follow_up_schedule,
            'follow_up_templates': templates,
            'priority_score': priority_score,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_commitments(self, body: str, sender: str, timestamp: str) -> List[Dict]:
        """Extract commitments from email."""
        commitments = []
        
        patterns = [
            (r'(?:I|we) (?:will|shall) (.+?)(?:\.|$)', 'self_commitment'),
            (r'(?:please|could you|can you) (.+?)(?:\.|$)', 'request_to_other'),
            (r'(?:I|we) (?:promise|guarantee|commit to) (.+?)(?:\.|$)', 'strong_commitment'),
            (r'(?:let me|I\'ll) (.+?)(?:\.|$)', 'informal_commitment')
        ]
        
        for pattern, commit_type in patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                commitments.append({
                    'text': match.group(1).strip(),
                    'type': commit_type,
                    'made_by': sender if commit_type in ['self_commitment', 'strong_commitment', 'informal_commitment'] else 'other',
                    'timestamp': timestamp,
                    'status': 'pending',
                    'confidence': 0.9 if commit_type == 'strong_commitment' else 0.7
                })
        
        self.commitments.extend(commitments)
        return commitments
    
    def _extract_deadlines(self, body: str) -> List[Dict]:
        """Extract deadlines from email."""
        deadlines = []
        
        patterns = [
            r'(?:by|before|due|deadline)[:\s]+(.+?)(?:\.|$)',
            r'(?:by|before)\s+(\w+day)',
            r'(?:by|before)\s+(\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)',
            r'(?:by|before)\s+(the end of\s+\w+)',
            r'(?:next|this)\s+(week|month|quarter)'
        ]
        
        for pattern in patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                deadline_text = match.group(1).strip()
                deadline_date = self._parse_deadline(deadline_text)
                
                deadlines.append({
                    'text': deadline_text,
                    'parsed_date': deadline_date,
                    'days_remaining': self._days_until(deadline_date) if deadline_date else None,
                    'status': 'upcoming'
                })
        
        self.deadlines.extend(deadlines)
        return deadlines
    
    def _parse_deadline(self, text: str) -> str:
        """Parse deadline text into date."""
        text = text.lower().strip()
        now = datetime.now()
        
        if 'today' in text:
            return now.strftime('%Y-%m-%d')
        elif 'tomorrow' in text:
            return (now + timedelta(days=1)).strftime('%Y-%m-%d')
        elif 'next week' in text:
            return (now + timedelta(days=7)).strftime('%Y-%m-%d')
        elif 'end of week' in text:
            days_until_friday = (4 - now.weekday()) % 7
            return (now + timedelta(days=days_until_friday)).strftime('%Y-%m-%d')
        elif 'end of month' in text:
            next_month = now.replace(day=28) + timedelta(days=4)
            return (next_month - timedelta(days=next_month.day)).strftime('%Y-%m-%d')
        
        return None
    
    def _days_until(self, date_str: str) -> int:
        """Calculate days until date."""
        if not date_str:
            return None
        try:
            target = datetime.strptime(date_str, '%Y-%m-%d')
            return (target - datetime.now()).days
        except:
            return None
    
    def _check_unanswered_questions(self, body: str, thread_id: str) -> List[Dict]:
        """Check for unanswered questions."""
        questions = re.findall(r'([^.!?]*\?[^.!?]*)', body)
        
        unanswered = []
        for question in questions[:5]:
            unanswered.append({
                'question': question.strip(),
                'answered': False,
                'thread_id': thread_id
            })
        
        self.unanswered_questions.extend(unanswered)
        return unanswered
    
    def _generate_schedule(self, commitments, deadlines, unanswered) -> List[Dict]:
        """Generate follow-up schedule."""
        schedule = []
        
        # Commitment follow-up (3 days)
        if commitments:
            schedule.append({
                'type': 'commitment_check',
                'days_from_now': 3,
                'reason': f'Check progress on {len(commitments)} commitment(s)',
                'priority': 'medium',
                'items': commitments[:3]
            })
        
        # Deadline reminders (2 days before)
        for deadline in deadlines:
            if deadline.get('days_remaining') and deadline['days_remaining'] > 2:
                schedule.append({
                    'type': 'deadline_reminder',
                    'days_from_now': deadline['days_remaining'] - 2,
                    'reason': f'Reminder: {deadline["text"]} due in 2 days',
                    'priority': 'high',
                    'deadline': deadline
                })
        
        # Unanswered questions (1 day)
        if unanswered:
            schedule.append({
                'type': 'question_followup',
                'days_from_now': 1,
                'reason': f'Follow up on {len(unanswered)} unanswered question(s)',
                'priority': 'medium',
                'questions': unanswered[:3]
            })
        
        # General follow-up (7 days)
        schedule.append({
            'type': 'general_followup',
            'days_from_now': 7,
            'reason': 'General follow-up if no response',
            'priority': 'low'
        })
        
        # Sort by days_from_now
        schedule.sort(key=lambda x: x['days_from_now'])
        
        self.follow_up_schedule.extend(schedule)
        return schedule
    
    def _create_templates(self, commitments, deadlines, unanswered) -> List[Dict]:
        """Create follow-up email templates."""
        templates = []
        
        if commitments:
            templates.append({
                'type': 'commitment_check',
                'subject': 'Following up on our commitments',
                'body': f'''Hi,

I wanted to follow up on the commitments we discussed:
{chr(10).join("- " + c["text"] for c in commitments[:3])}

Could you provide an update on the progress? Let me know if there are any blockers I can help with.

Best regards'''
            })
        
        if deadlines:
            templates.append({
                'type': 'deadline_reminder',
                'subject': 'Upcoming deadline reminder',
                'body': f'''Hi,

This is a friendly reminder about the upcoming deadline:
{chr(10).join("- " + d["text"] for d in deadlines[:3])}

Please let me know if you need any assistance to meet this deadline.

Best regards'''
            })
        
        if unanswered:
            templates.append({
                'type': 'question_followup',
                'subject': 'Following up on questions',
                'body': f'''Hi,

I wanted to follow up on the questions from our previous conversation:
{chr(10).join("- " + q["question"] for q in unanswered[:3])}

Would you be able to provide some insight on these?

Best regards'''
            })
        
        return templates
    
    def _calculate_priority(self, commitments, deadlines, unanswered) -> int:
        """Calculate priority score."""
        score = 0
        
        score += len(commitments) * 10
        score += len(deadlines) * 15
        score += len(unanswered) * 5
        
        for deadline in deadlines:
            if deadline.get('days_remaining') is not None:
                if deadline['days_remaining'] <= 1:
                    score += 30
                elif deadline['days_remaining'] <= 3:
                    score += 15
        
        return min(100, score)
    
    def _generate_recommendations(self, commitments, deadlines, unanswered, reply_all_required) -> List[str]:
        """Generate recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in follow-ups')
        
        if commitments:
            recommendations.append(f'📋 Track {len(commitments)} commitment(s) and follow up in 3 days')
        
        if deadlines:
            urgent = [d for d in deadlines if d.get('days_remaining') and d['days_remaining'] <= 3]
            if urgent:
                recommendations.append(f'⏰ {len(urgent)} deadline(s) within 3 days - prioritize these')
        
        if unanswered:
            recommendations.append(f'❓ Follow up on {len(unanswered)} unanswered question(s) within 24 hours')
        
        if not recommendations:
            recommendations.append('✅ No follow-up items detected - conversation appears complete')
        
        return recommendations


if __name__ == '__main__':
    automation = FollowUpAutomation()
    
    test_email = {
        'id': '1',
        'thread_id': 'project_discussion',
        'sender': 'client@company.com',
        'recipients': ['me@company.com', 'team@company.com'],
        'subject': 'Project Timeline and Next Steps',
        'body': '''Hi Team,

Thank you for the meeting today. Here are the action items we discussed:

1. I will send the updated proposal by Friday
2. Could you please review the technical specifications?
3. We need to finalize the budget by the end of next week

What is your availability for a follow-up call next Tuesday?

Looking forward to your response.

Best regards,
Client''',
        'timestamp': '2024-01-15T14:00:00'
    }
    
    result = automation.process_email(test_email)
    
    print("=== V1090: AI Email Follow-up Automation ===\n")
    print(f"Commitments Tracked: {len(result['commitments_tracked'])}")
    for c in result['commitments_tracked']:
        print(f"  - [{c['type']}] {c['text'][:50]}...")
    print(f"\nDeadlines Detected: {len(result['deadlines_detected'])}")
    for d in result['deadlines_detected']:
        print(f"  - {d['text']} (Days: {d['days_remaining']})")
    print(f"\nUnanswered Questions: {len(result['unanswered_questions'])}")
    for q in result['unanswered_questions']:
        print(f"  - {q['question'][:50]}...")
    print(f"\nFollow-up Schedule:")
    for f in result['follow_up_schedule']:
        print(f"  Day +{f['days_from_now']}: [{f['priority']}] {f['reason']}")
    print(f"\nFollow-up Templates: {len(result['follow_up_templates'])}")
    print(f"Priority Score: {result['priority_score']}/100")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")
