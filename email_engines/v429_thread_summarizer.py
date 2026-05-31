#!/usr/bin/env python3
"""
V429: AI Email Thread Summarizer
Creates concise summaries of long email threads, extracting key decisions,
action items, and important information. Case-by-case analysis.
Enforces reply-all for multi-recipient thread summaries.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V429ThreadSummarizer:
    """Summarizes email threads intelligently"""
    
    ACTION_ITEM_PATTERNS = [
        r'(?:please|could you|can you)\s+\w+\s+\w+',
        r'(?:we need to|we should|we must)\s+\w+',
        r'(?:action item|task|todo)[:\s]+\w+',
        r'(?:next steps?|follow up)[:\s]+\w+'
    ]
    
    DECISION_PATTERNS = [
        r"(?:we(?:'ll| will)?\s+(?:go with|choose|select|decide))",
        r'(?:the decision is|we decided|we agreed)',
        r"(?:let's proceed with|moving forward with)",
        r'(?:approved|rejected|accepted|denied)'
    ]
    
    DEADLINE_PATTERNS = [
        r'(?:by|before|until|due)\s+(?:tomorrow|today|next week|this week)',
        r'(?:deadline|due date)[:\s]+\w+',
        r'\b(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}(?:st|nd|rd|th)?',
        r'\d{1,2}/\d{1,2}/\d{2,4}'
    ]
    
    QUESTION_PATTERNS = [
        r'[^.!?]*\?[^.!?]*',
        r'(?:can you|could you|would you)\s+\w+',
        r'(?:what|when|where|why|how|who)\s+\w+\s*\?'
    ]
    
    def extract_action_items(self, emails: List[Dict]) -> List[Dict]:
        """Extract action items from thread"""
        action_items = []
        
        for email in emails:
            text = email.get('body', '')
            sender = email.get('sender', 'Unknown')
            
            for pattern in self.ACTION_ITEM_PATTERNS:
                matches = re.finditer(pattern, text, re.IGNORECASE)
                for match in matches:
                    action_items.append({
                        "item": match.group(0).strip(),
                        "assignee": sender,
                        "email_date": email.get('date', '')
                    })
        
        return action_items
    
    def extract_decisions(self, emails: List[Dict]) -> List[Dict]:
        """Extract decisions made in thread"""
        decisions = []
        
        for email in emails:
            text = email.get('body', '')
            sender = email.get('sender', 'Unknown')
            
            for pattern in self.DECISION_PATTERNS:
                matches = re.finditer(pattern, text, re.IGNORECASE)
                for match in matches:
                    # Get context around the decision
                    start = max(0, match.start() - 50)
                    end = min(len(text), match.end() + 50)
                    context = text[start:end].strip()
                    
                    decisions.append({
                        "decision": match.group(0).strip(),
                        "context": context,
                        "decided_by": sender,
                        "email_date": email.get('date', '')
                    })
        
        return decisions
    
    def extract_deadlines(self, emails: List[Dict]) -> List[Dict]:
        """Extract deadlines mentioned in thread"""
        deadlines = []
        
        for email in emails:
            text = email.get('body', '')
            sender = email.get('sender', 'Unknown')
            
            for pattern in self.DEADLINE_PATTERNS:
                matches = re.finditer(pattern, text, re.IGNORECASE)
                for match in matches:
                    # Get context
                    start = max(0, match.start() - 30)
                    end = min(len(text), match.end() + 30)
                    context = text[start:end].strip()
                    
                    deadlines.append({
                        "deadline": match.group(0).strip(),
                        "context": context,
                        "mentioned_by": sender,
                        "email_date": email.get('date', '')
                    })
        
        return deadlines
    
    def extract_questions(self, emails: List[Dict]) -> List[Dict]:
        """Extract questions asked in thread"""
        questions = []
        
        for email in emails:
            text = email.get('body', '')
            sender = email.get('sender', 'Unknown')
            
            for pattern in self.QUESTION_PATTERNS:
                matches = re.finditer(pattern, text, re.IGNORECASE)
                for match in matches:
                    question = match.group(0).strip()
                    if len(question) > 10:  # Filter out very short matches
                        questions.append({
                            "question": question,
                            "asked_by": sender,
                            "email_date": email.get('date', '')
                        })
        
        return questions
    
    def identify_key_participants(self, emails: List[Dict]) -> List[Dict]:
        """Identify key participants and their involvement"""
        participant_counts = {}
        
        for email in emails:
            sender = email.get('sender', 'Unknown')
            if sender not in participant_counts:
                participant_counts[sender] = 0
            participant_counts[sender] += 1
        
        # Sort by participation
        sorted_participants = sorted(
            participant_counts.items(),
            key=lambda x: x[1],
            reverse=True
        )
        
        return [
            {"email": email, "message_count": count, "role": "primary" if i == 0 else "participant"}
            for i, (email, count) in enumerate(sorted_participants)
        ]
    
    def generate_summary(self, emails: List[Dict], analysis: Dict) -> str:
        """Generate human-readable summary"""
        lines = []
        
        # Thread overview
        lines.append(f"Thread Summary: {len(emails)} emails")
        lines.append(f"Participants: {len(analysis['participants'])}")
        lines.append("")
        
        # Key decisions
        if analysis['decisions']:
            lines.append("KEY DECISIONS:")
            for i, decision in enumerate(analysis['decisions'][:3], 1):
                lines.append(f"{i}. {decision['decision']} (by {decision['decided_by']})")
            lines.append("")
        
        # Action items
        if analysis['action_items']:
            lines.append("ACTION ITEMS:")
            for i, item in enumerate(analysis['action_items'][:5], 1):
                lines.append(f"{i}. {item['item']} (assigned to {item['assignee']})")
            lines.append("")
        
        # Deadlines
        if analysis['deadlines']:
            lines.append("DEADLINES:")
            for i, deadline in enumerate(analysis['deadlines'][:3], 1):
                lines.append(f"{i}. {deadline['deadline']}")
            lines.append("")
        
        # Unanswered questions
        if analysis['questions']:
            lines.append("OPEN QUESTIONS:")
            for i, question in enumerate(analysis['questions'][:3], 1):
                lines.append(f"{i}. {question['question']}")
            lines.append("")
        
        return "\n".join(lines)
    
    def process(self, thread: List[Dict]) -> Dict:
        """Process email thread and generate summary"""
        if not thread:
            return {
                "engine": "V429 Thread Summarizer",
                "error": "No emails in thread"
            }
        
        # Extract all components
        action_items = self.extract_action_items(thread)
        decisions = self.extract_decisions(thread)
        deadlines = self.extract_deadlines(thread)
        questions = self.extract_questions(thread)
        participants = self.identify_key_participants(thread)
        
        analysis = {
            "action_items": action_items,
            "decisions": decisions,
            "deadlines": deadlines,
            "questions": questions,
            "participants": participants
        }
        
        # Generate summary
        summary = self.generate_summary(thread, analysis)
        
        # Check reply-all (for thread context)
        all_recipients = set()
        for email in thread:
            all_recipients.update(email.get('to', []))
            all_recipients.update(email.get('cc', []))
        should_reply_all = len(all_recipients) > 1
        
        # Calculate thread health
        thread_health = self._calculate_thread_health(analysis)
        
        result = {
            "engine": "V429 Thread Summarizer",
            "timestamp": datetime.now().isoformat(),
            "thread_stats": {
                "total_emails": len(thread),
                "participants": len(participants),
                "action_items": len(action_items),
                "decisions": len(decisions),
                "deadlines": len(deadlines),
                "open_questions": len(questions)
            },
            "summary": summary,
            "analysis": analysis,
            "thread_health": thread_health,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Thread involves {len(all_recipients)} participants" if should_reply_all else "Single participant thread"
        }
        
        return result
    
    def _calculate_thread_health(self, analysis: Dict) -> Dict:
        """Calculate overall thread health"""
        score = 100
        
        # Deduct for unanswered questions
        score -= len(analysis['questions']) * 5
        
        # Deduct for too many action items (might indicate lack of clarity)
        if len(analysis['action_items']) > 10:
            score -= 10
        
        # Add points for decisions made
        score += len(analysis['decisions']) * 10
        
        # Cap score
        score = max(0, min(100, score))
        
        if score >= 80:
            status = "HEALTHY"
        elif score >= 60:
            status = "NEEDS_ATTENTION"
        else:
            status = "AT_RISK"
        
        return {
            "score": score,
            "status": status,
            "recommendations": self._generate_health_recommendations(analysis, score)
        }
    
    def _generate_health_recommendations(self, analysis: Dict, score: int) -> List[str]:
        """Generate recommendations based on thread health"""
        recommendations = []
        
        if analysis['questions']:
            recommendations.append(f"Address {len(analysis['questions'])} unanswered question(s)")
        
        if len(analysis['action_items']) > 5:
            recommendations.append("Consider breaking down action items into smaller tasks")
        
        if not analysis['decisions'] and len(analysis['action_items']) > 0:
            recommendations.append("Clarify decision ownership for action items")
        
        if score < 60:
            recommendations.append("Consider scheduling a meeting to resolve open issues")
        
        return recommendations


if __name__ == "__main__":
    test_thread = [
        {
            "sender": "manager@company.com",
            "to": ["team@company.com"],
            "cc": [],
            "subject": "Q1 Project Planning",
            "body": "Hi team,\n\nWe need to plan our Q1 projects. Can everyone send me their proposals by next Friday?\n\nAlso, we decided to go with the new CRM system.\n\nThanks,\nManager",
            "date": "2024-01-10T09:00:00"
        },
        {
            "sender": "alice@company.com",
            "to": ["manager@company.com"],
            "cc": ["team@company.com"],
            "subject": "Re: Q1 Project Planning",
            "body": "Hi,\n\nI'll send my proposal by Wednesday. Quick question: what's the budget range?\n\nAlso, please review the timeline document I attached.\n\nBest,\nAlice",
            "date": "2024-01-10T14:00:00"
        },
        {
            "sender": "manager@company.com",
            "to": ["alice@company.com"],
            "cc": ["team@company.com"],
            "subject": "Re: Q1 Project Planning",
            "body": "Hi Alice,\n\nBudget is $50k-$100k. We approved your timeline.\n\nAction item: Bob needs to set up the CRM by January 31st.\n\nThanks,\nManager",
            "date": "2024-01-11T10:00:00"
        }
    ]
    
    summarizer = V429ThreadSummarizer()
    result = summarizer.process(test_thread)
    print(json.dumps(result, indent=2))
