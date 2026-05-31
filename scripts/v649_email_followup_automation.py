#!/usr/bin/env python3
"""V649 - Email Follow-up Automation
Automatically schedule and send follow-up emails based on engagement and response patterns.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any

class EmailFollowUpAutomation:
    """Automate email follow-ups intelligently."""
    
    FOLLOW_UP_RULES = {
        "no_response_3_days": {
            "condition": "no_response",
            "delay_days": 3,
            "template": "gentle_reminder",
            "max_followups": 2
        },
        "no_response_7_days": {
            "condition": "no_response",
            "delay_days": 7,
            "template": "urgent_followup",
            "max_followups": 1
        },
        "after_meeting": {
            "condition": "meeting_completed",
            "delay_days": 1,
            "template": "meeting_summary",
            "max_followups": 1
        },
        "proposal_sent": {
            "condition": "proposal_sent",
            "delay_days": 5,
            "template": "proposal_checkin",
            "max_followups": 2
        }
    }
    
    def __init__(self):
        self.followup_queue = []
        self.sent_followups = []
    
    def schedule_followup(self, email: Dict[str, Any], rule_name: str) -> Dict[str, Any]:
        """Schedule a follow-up email."""
        if rule_name not in self.FOLLOW_UP_RULES:
            return {"error": "Invalid rule"}
        
        rule = self.FOLLOW_UP_RULES[rule_name]
        
        # Calculate send time
        sent_at = datetime.fromisoformat(email.get('sent_at', datetime.now().isoformat()))
        followup_at = sent_at + timedelta(days=rule['delay_days'])
        
        # Generate follow-up content
        followup_content = self._generate_followup_content(email, rule['template'])
        
        followup = {
            "followup_id": f"fu_{len(self.followup_queue) + 1:06d}",
            "original_email_id": email.get('id', 'unknown'),
            "original_subject": email.get('subject', ''),
            "recipients": email.get('to', []) + email.get('cc', []),
            "scheduled_for": followup_at.isoformat(),
            "rule_applied": rule_name,
            "template": rule['template'],
            "content": followup_content,
            "status": "scheduled"
        }
        
        self.followup_queue.append(followup)
        
        return {
            "engine": "V649",
            "followup": followup,
            "scheduled_for": followup_at.isoformat(),
            "reply_all_enforced": len(followup['recipients']) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _generate_followup_content(self, email: Dict, template: str) -> Dict[str, str]:
        """Generate follow-up email content."""
        original_subject = email.get('subject', '')
        recipient = email.get('to', [''])[0]
        
        templates = {
            "gentle_reminder": {
                "subject": f"Re: {original_subject}",
                "body": f"Hi,\n\nJust following up on my previous email regarding {original_subject}. "
                       f"Wanted to make sure it didn't get lost in your inbox.\n\n"
                       f"Please let me know if you need any additional information.\n\nBest regards"
            },
            "urgent_followup": {
                "subject": f"URGENT: {original_subject}",
                "body": f"Hi,\n\nI'm following up on my email from last week about {original_subject}. "
                       f"This requires your attention soon.\n\n"
                       f"Please respond at your earliest convenience.\n\nBest regards"
            },
            "meeting_summary": {
                "subject": f"Meeting Summary: {original_subject}",
                "body": f"Hi,\n\nThank you for the meeting today. Here's a quick summary:\n\n"
                       f"- Key points discussed\n- Action items assigned\n- Next steps\n\n"
                       f"Please let me know if I missed anything.\n\nBest regards"
            },
            "proposal_checkin": {
                "subject": f"Following up: {original_subject}",
                "body": f"Hi,\n\nI wanted to follow up on the proposal I sent last week. "
                       f"Do you have any questions or need clarification on anything?\n\n"
                       f"Looking forward to hearing from you.\n\nBest regards"
            }
        }
        
        return templates.get(template, templates["gentle_reminder"])
    
    def check_and_send_followups(self) -> Dict[str, Any]:
        """Check for due follow-ups and send them."""
        now = datetime.now()
        sent = []
        remaining = []
        
        for followup in self.followup_queue:
            scheduled_time = datetime.fromisoformat(followup['scheduled_for'])
            
            if scheduled_time <= now and followup['status'] == 'scheduled':
                # Send follow-up
                followup['status'] = 'sent'
                followup['sent_at'] = now.isoformat()
                sent.append(followup)
                self.sent_followups.append(followup)
            else:
                remaining.append(followup)
        
        self.followup_queue = remaining
        
        return {
            "engine": "V649",
            "followups_sent": len(sent),
            "followups_remaining": len(remaining),
            "sent_details": sent,
            "timestamp": datetime.now().isoformat()
        }
    
    def cancel_followup(self, followup_id: str) -> Dict[str, Any]:
        """Cancel a scheduled follow-up."""
        for i, followup in enumerate(self.followup_queue):
            if followup['followup_id'] == followup_id:
                self.followup_queue[i]['status'] = 'cancelled'
                return {
                    "engine": "V649",
                    "followup_id": followup_id,
                    "status": "cancelled",
                    "timestamp": datetime.now().isoformat()
                }
        
        return {"error": "Follow-up not found"}
    
    def get_followup_analytics(self) -> Dict[str, Any]:
        """Get follow-up performance analytics."""
        total_scheduled = len(self.followup_queue) + len(self.sent_followups)
        total_sent = len(self.sent_followups)
        total_cancelled = sum(1 for f in self.followup_queue if f['status'] == 'cancelled')
        
        # Calculate response rate (would need actual response tracking)
        response_rate = 0.65  # Mock value
        
        # Template performance
        template_stats = {}
        for followup in self.sent_followups:
            template = followup['template']
            if template not in template_stats:
                template_stats[template] = {"sent": 0}
            template_stats[template]["sent"] += 1
        
        return {
            "engine": "V649 - Email Follow-up Automation",
            "total_followups_scheduled": total_scheduled,
            "total_followups_sent": total_sent,
            "total_cancelled": total_cancelled,
            "estimated_response_rate_percent": response_rate * 100,
            "template_performance": template_stats,
            "timestamp": datetime.now().isoformat()
        }
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = []
        
        for email in emails:
            # Apply default follow-up rule
            result = self.schedule_followup(email, "no_response_3_days")
            results.append(result)
        
        return {
            "engine": "V649 - Email Follow-up Automation",
            "total_scheduled": len(results),
            "reply_all_enforced": sum(1 for r in results if r.get('reply_all_enforced')),
            "results": results
        }

if __name__ == "__main__":
    automation = EmailFollowUpAutomation()
    
    test_emails = [
        {
            "id": "email_001",
            "subject": "Project Proposal",
            "to": ["client@company.com"],
            "sent_at": (datetime.now() - timedelta(days=4)).isoformat()
        },
        {
            "id": "email_002",
            "subject": "Meeting Request",
            "to": ["team@company.com", "manager@company.com"],
            "sent_at": datetime.now().isoformat()
        }
    ]
    
    results = automation.process_batch(test_emails)
    print(json.dumps(results, indent=2))
    
    # Get analytics
    analytics = automation.get_followup_analytics()
    print("\nAnalytics:")
    print(json.dumps(analytics, indent=2))
