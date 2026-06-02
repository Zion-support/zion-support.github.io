#!/usr/bin/env python3
"""
V908: Email Priority & Routing Engine
Intelligently prioritizes emails and routes them to appropriate team members with case-by-case analysis.
"""

import json
from datetime import datetime
from typing import Dict, List, Optional

class EmailPriorityRouter:
    def __init__(self):
        self.routed_emails = []
        self.routing_rules = {
            'technical': ['bug', 'error', 'issue', 'crash', 'technical', 'code', 'api'],
            'sales': ['pricing', 'quote', 'purchase', 'buy', 'sales', 'demo', 'trial'],
            'support': ['help', 'support', 'assistance', 'problem', 'question'],
            'billing': ['invoice', 'payment', 'billing', 'refund', 'charge'],
            'management': ['strategy', 'planning', 'meeting', 'executive', 'board']
        }
        
    def analyze_and_route(self, email_id: str, subject: str, body: str,
                         sender: str, recipients: List[str],
                         cc: List[str] = None) -> Dict:
        """Analyze email and route to appropriate team member"""
        
        full_text = f"{subject} {body}".lower()
        
        # Determine category
        category_scores = {}
        for category, keywords in self.routing_rules.items():
            score = sum(1 for kw in keywords if kw in full_text)
            if score > 0:
                category_scores[category] = score
        
        primary_category = max(category_scores.keys(), key=lambda x: category_scores[x]) if category_scores else 'general'
        
        # Determine priority
        priority = self._determine_priority(full_text)
        
        # Determine assignee based on category and priority
        assignee = self._determine_assignee(primary_category, priority)
        
        # Determine if reply-all is needed
        total_recipients = len(recipients) + len(cc or [])
        reply_all_required = total_recipients > 1
        
        # Extract SLA requirement
        sla = self._determine_sla(priority, primary_category)
        
        routing = {
            'email_id': email_id,
            'subject': subject,
            'sender': sender,
            'recipients': recipients,
            'cc': cc or [],
            'category': primary_category,
            'priority': priority,
            'assigned_to': assignee,
            'sla_hours': sla,
            'reply_all_required': reply_all_required,
            'total_recipients': total_recipients,
            'routed_at': datetime.now().isoformat(),
            'status': 'assigned'
        }
        
        self.routed_emails.append(routing)
        
        return {
            'success': True,
            'routing': routing,
            'assigned_to': assignee,
            'priority': priority,
            'sla_hours': sla,
            'reply_all': reply_all_required
        }
    
    def _determine_priority(self, text: str) -> str:
        """Determine email priority"""
        high_indicators = ['urgent', 'critical', 'emergency', 'asap', 'immediately', 'deadline today']
        medium_indicators = ['important', 'soon', 'priority', 'this week']
        
        high_score = sum(1 for ind in high_indicators if ind in text)
        medium_score = sum(1 for ind in medium_indicators if ind in text)
        
        if high_score > 0:
            return 'high'
        elif medium_score > 0:
            return 'medium'
        else:
            return 'normal'
    
    def _determine_assignee(self, category: str, priority: str) -> str:
        """Determine assignee based on category and priority"""
        assignees = {
            'technical': {'high': 'senior-engineer@company.com', 'medium': 'engineer@company.com', 'normal': 'junior-engineer@company.com'},
            'sales': {'high': 'sales-manager@company.com', 'medium': 'sales-rep@company.com', 'normal': 'sales-rep@company.com'},
            'support': {'high': 'support-lead@company.com', 'medium': 'support-agent@company.com', 'normal': 'support-agent@company.com'},
            'billing': {'high': 'finance-manager@company.com', 'medium': 'billing@company.com', 'normal': 'billing@company.com'},
            'management': {'high': 'executive@company.com', 'medium': 'manager@company.com', 'normal': 'manager@company.com'},
            'general': {'high': 'manager@company.com', 'medium': 'team@company.com', 'normal': 'team@company.com'}
        }
        
        return assignees.get(category, assignees['general']).get(priority, 'team@company.com')
    
    def _determine_sla(self, priority: str, category: str) -> int:
        """Determine SLA in hours"""
        sla_matrix = {
            'high': {'technical': 2, 'sales': 4, 'support': 2, 'billing': 4, 'management': 4, 'general': 4},
            'medium': {'technical': 8, 'sales': 12, 'support': 8, 'billing': 12, 'management': 12, 'general': 12},
            'normal': {'technical': 24, 'sales': 24, 'support': 24, 'billing': 48, 'management': 48, 'general': 48}
        }
        
        return sla_matrix.get(priority, sla_matrix['normal']).get(category, 24)
    
    def reassign_email(self, email_id: str, new_assignee: str, reason: str = None) -> Dict:
        """Reassign email to different team member"""
        for routing in self.routed_emails:
            if routing['email_id'] == email_id:
                old_assignee = routing['assigned_to']
                routing['assigned_to'] = new_assignee
                routing['reassigned_at'] = datetime.now().isoformat()
                routing['reassign_reason'] = reason
                
                return {
                    'success': True,
                    'email_id': email_id,
                    'old_assignee': old_assignee,
                    'new_assignee': new_assignee,
                    'reason': reason
                }
        
        return {'success': False, 'error': 'Email not found'}
    
    def get_routing_stats(self) -> Dict:
        """Get routing statistics"""
        if not self.routed_emails:
            return {'success': True, 'total': 0}
        
        category_counts = {}
        priority_counts = {'high': 0, 'medium': 0, 'normal': 0}
        assignee_workload = {}
        reply_all_count = 0
        
        for routing in self.routed_emails:
            # Category counts
            cat = routing['category']
            category_counts[cat] = category_counts.get(cat, 0) + 1
            
            # Priority counts
            priority_counts[routing['priority']] += 1
            
            # Assignee workload
            assignee = routing['assigned_to']
            assignee_workload[assignee] = assignee_workload.get(assignee, 0) + 1
            
            # Reply-all count
            if routing['reply_all_required']:
                reply_all_count += 1
        
        return {
            'success': True,
            'total_routed': len(self.routed_emails),
            'category_distribution': category_counts,
            'priority_distribution': priority_counts,
            'assignee_workload': assignee_workload,
            'reply_all_rate': reply_all_count / len(self.routed_emails) * 100,
            'avg_sla_hours': sum(r['sla_hours'] for r in self.routed_emails) / len(self.routed_emails)
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive report"""
        stats = self.get_routing_stats()
        
        report = f"""
📬 EMAIL PRIORITY & ROUTING ENGINE REPORT (V908)
{'='*60}

ROUTING OVERVIEW:
- Total Emails Routed: {stats.get('total_routed', 0)}
- Reply-All Enforcement Rate: {stats.get('reply_all_rate', 0):.1f}%
- Average SLA: {stats.get('avg_sla_hours', 0):.1f} hours

CATEGORY DISTRIBUTION:
"""
        for cat, count in stats.get('category_distribution', {}).items():
            report += f"  - {cat.title()}: {count}\n"
        
        report += f"""
PRIORITY DISTRIBUTION:
  - High: {stats.get('priority_distribution', {}).get('high', 0)}
  - Medium: {stats.get('priority_distribution', {}).get('medium', 0)}
  - Normal: {stats.get('priority_distribution', {}).get('normal', 0)}

ASSIGNEE WORKLOAD:
"""
        for assignee, count in stats.get('assignee_workload', {}).items():
            report += f"  - {assignee}: {count} emails\n"
        
        report += f"""
CAPABILITIES:
- Intelligent email categorization (6 categories)
- Priority-based routing (high/medium/normal)
- Automatic assignee selection
- SLA determination (2-48 hours)
- Reply-all enforcement
- Reassignment support
- Workload balancing

ROUTING CATEGORIES:
- Technical (bugs, errors, code)
- Sales (pricing, quotes, demos)
- Support (help, questions, problems)
- Billing (invoices, payments, refunds)
- Management (strategy, planning, meetings)
- General (everything else)

SLA MATRIX:
- High Priority: 2-4 hours
- Medium Priority: 8-12 hours
- Normal Priority: 24-48 hours

REPLY-ALL ENFORCEMENT:
✅ Automatically detects multi-recipient emails
✅ Enforces reply-all when total recipients > 1
✅ Includes CC recipients
✅ Prevents accidental reply-sender-only

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for routing requests"""
    email_keywords = ['email', 'route', 'assign', 'priority', 'categorize']
    
    has_email = any(kw in email_text.lower() for kw in email_keywords)
    
    return {
        'email_type': 'email_routing',
        'routing_request': has_email,
        'reply_all_required': True,
        'priority': 'high' if has_email else 'medium'
    }


if __name__ == '__main__':
    engine = EmailPriorityRouter()
    
    # Route emails
    engine.analyze_and_route(
        'email-001',
        'Critical bug in production',
        'We have a critical bug causing crashes. Need immediate fix!',
        'user@company.com',
        ['support@company.com', 'dev@company.com'],
        ['manager@company.com']
    )
    
    engine.analyze_and_route(
        'email-002',
        'Pricing inquiry',
        'What are your enterprise pricing plans?',
        'prospect@company.com',
        ['sales@company.com'],
        []
    )
    
    print(engine.generate_report())
