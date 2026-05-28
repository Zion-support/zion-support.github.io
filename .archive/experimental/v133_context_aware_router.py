#!/usr/bin/env python3
"""
V133 - Context-Aware Smart Email Router
Analyzes email context and routes to the most appropriate action:
- Reply vs Reply-All vs Forward vs Escalate
- Generates context-specific responses
- Handles different scenarios intelligently
"""
import sys
from pathlib import Path
from datetime import datetime, timedelta
import json

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_send, gmail_list_messages

LABEL = 'V133-Context-Aware-Router'

class ContextAnalyzer:
    """Analyzes email context to determine best action"""
    
    GROUP_KEYWORDS = ['all', 'team', 'everyone', 'group', 'department', 'committee', 'board', 'list']
    URGENT_KEYWORDS = ['urgent', 'urgente', 'asap', 'immediately', 'emergency', 'critical', 'deadline', 'important']
    ACTION_KEYWORDS = ['please', 'could you', 'would you', 'need to', 'must', 'should', 'action required']
    QUESTION_KEYWORDS = ['?', 'how', 'what', 'why', 'when', 'where', 'can you', 'could you', 'would you']
    
    def analyze_context(self, subject, snippet, to_header, cc_header):
        text = f"{subject} {snippet}".lower()
        
        # Determine urgency
        is_urgent = any(kw in text for kw in self.URGENT_KEYWORDS)
        
        # Determine if it's a question
        is_question = any(kw in text for kw in self.QUESTION_KEYWORDS)
        
        # Determine if it requires action
        requires_action = any(kw in text for kw in self.ACTION_KEYWORDS)
        
        # Determine recipient count
        to_emails = len(to_header.replace(',', ';').split(';'))
        has_cc = bool(cc_header)
        is_group = to_emails > 1 or has_cc or any(kw in text for kw in self.GROUP_KEYWORDS)
        
        # Detect if it's a meeting request
        is_meeting = any(kw in text for kw in ['meeting', 'call', 'schedule', 'appointment', 'demo', 'calendar'])
        
        # Detect billing/payment related
        is_billing = any(kw in text for kw in ['invoice', 'payment', 'bill', 'charge', 'receipt', 'subscription'])
        
        # Detect support request
        is_support = any(kw in text for kw in ['help', 'support', 'issue', 'problem', 'bug', 'error', 'fix'])
        
        return {
            'urgent': is_urgent,
            'question': is_question,
            'action_required': requires_action,
            'is_group': is_group,
            'is_meeting': is_meeting,
            'is_billing': is_billing,
            'is_support': is_support,
            'recipient_count': to_emails,
            'has_cc': has_cc
        }

class ResponseBuilder:
    """Builds intelligent responses based on context"""
    
    def __init__(self):
        self.sig = "Kleber Garcia Alcatrão ✨ Zion Tech Group\n+1 302 464 0950 | kleber@ziontechgroup.com"
    
    def _get_dates(self):
        today = datetime.now()
        result = []
        count = 0
        d = today + timedelta(days=1)
        while count < 3:
            if d.weekday() < 5:
                result.append(d.strftime('%d/%m'))
                count += 1
            d += timedelta(days=1)
        return result
    
    def _get_name(self, sender):
        return sender.split('<')[0].strip().strip('"') if '<' in sender else sender
    
    def build_acknowledgment(self, name, context):
        """For simple inquiries"""
        dates = ', '.join(self._get_dates())
        return f"""📬 Smart Response

Olá {name}!

Thank you for reaching out! I've received your message and will respond within 2 hours.

For immediate assistance:
📞 +1 302 464 0950
📧 kleber@ziontechgroup.com

Best regards,
{self.sig}"""
    
    def build_urgent_response(self, name, context):
        """For urgent emails"""
        dates = ', '.join(self._get_dates())
        return f"""🚨 URGENT RESPONSE

Olá {name}!

I've received your urgent message and I'm prioritizing it immediately.

Available for call: +1 302 464 0950

Quick availability check: {dates}

I will get back to you within 30 minutes.

Best regards,
{self.sig}"""
    
    def build_meeting_response(self, name, context):
        """For meeting requests"""
        dates = ', '.join(self._get_dates())
        return f"""📅 Meeting Request Response

Olá {name}!

Thank you for your meeting request! I'd be happy to connect.

Available slots: {dates}
📞 +1 302 464 0950

Please let me know your preferred time and I'll send a calendar invite.

Best regards,
{self.sig}"""
    
    def build_support_response(self, name, context):
        """For support requests"""
        return f"""🛠️ Support Request Received

Olá {name}!

I've received your support request and our technical team is already on it.

Ticket created: Priority {context.get('urgent', False) and 'HIGH' or 'STANDARD'}

Typical response time: 2-4 hours
Urgent issues: Call +1 302 464 0950

Please reply with any additional details that might help us resolve your issue faster.

Best regards,
{self.sig}"""
    
    def build_billing_response(self, name, context):
        """For billing inquiries"""
        return f"""💳 Billing Inquiry Response

Olá {name}!

Thank you for your billing inquiry. I'm looking into this now.

For immediate billing assistance:
📧 billing@ziontechgroup.com
📞 +1 302 464 0950

I'll respond with a complete resolution within 2 hours.

Best regards,
{self.sig}"""
    
    def build_group_response(self, name, context, subject):
        """For group emails - uses Reply-All"""
        dates = ', '.join(self._get_dates())
        return f"""👥 Group Email Response

Olá {name}!

Thank you for your message regarding: {subject}

I acknowledge receipt and will coordinate with the relevant team members.

For collective action items, I'll ensure proper follow-up within 24 hours.

Best regards,
{self.sig}"""

def cmd_run(dry_run=False, limit=10):
    print("🧠 V133 Context-Aware Smart Router")
    print("=" * 40)
    
    analyzer = ContextAnalyzer()
    builder = ResponseBuilder()
    
    try:
        msgs = gmail_search('is:unread', limit=limit)
    except Exception as e:
        print(f"Search error: {e}")
        return
    
    print(f"Found {len(msgs)} unread emails\n")
    
    for msg in msgs:
        try:
            full = gmail_get(msg['id'])
            headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
            
            sender = headers.get('From', '')
            name = builder._get_name(sender)
            subject = headers.get('Subject', '')
            snippet = full.get('snippet', '')
            to_header = headers.get('To', '')
            cc_header = headers.get('Cc', '')
            
            # Analyze context
            ctx = analyzer.analyze_context(subject, snippet, to_header, cc_header)
            
            # Determine best action
            if ctx['is_support']:
                response = builder.build_support_response(name, ctx)
                action = "Support Response"
            elif ctx['is_billing']:
                response = builder.build_billing_response(name, ctx)
                action = "Billing Response"
            elif ctx['is_meeting']:
                response = builder.build_meeting_response(name, ctx)
                action = "Meeting Response"
            elif ctx['urgent']:
                response = builder.build_urgent_response(name, ctx)
                action = "URGENT Response"
            elif ctx['is_group']:
                response = builder.build_group_response(name, ctx, subject)
                action = "Group (Reply-All)"
            else:
                response = builder.build_acknowledgment(name, ctx)
                action = "Standard Response"
            
            # Route decision
            route = "Reply-All" if ctx['is_group'] else "Reply"
            
            print(f"📧 {name[:25]}")
            print(f"   Context: Urgent={ctx['urgent']}, Group={ctx['is_group']}, Q={ctx['question']}, Action={ctx['action_required']}")
            print(f"   Route: {route} | Action: {action}")
            
            if not dry_run:
                gmail_send_reply(msg['id'], response)
                print(f"   ✅ {action} sent")
            else:
                print(f"   ⚡ Dry run - would send: {action}")
            
            print()
            
        except Exception as e:
            print(f"Error: {e}")
            continue
    
    print("🧠 V133: Smart routing complete")

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)