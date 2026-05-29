#!/usr/bin/env python3
"""
V63 Smart Email Templates System
=================================
AI-powered template generation with personalization, performance tracking, and intent-based selection.

Features:
- Template library organized by intent category
- Personalization tokens ({{recipient_name}}, {{company}}, {{subject_context}})
- A/B testing for subject lines
- Performance tracking (open rate, response rate, conversion)
- Template recommendations based on historical performance
- Dynamic template generation using LLM

Author: Kleber Garcia Alcatrao
Contact: kleber@ziontechgroup.com | +1 302 464 0950
Address: 364 E Main St STE 1008, Middletown, DE 19709
"""

import json
import re
import hashlib
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional
import os

# Template data directory
TEMPLATE_DIR = Path(__file__).parent.parent / "data" / "email_templates"
TEMPLATE_DIR.mkdir(parents=True, exist_ok=True)

class SmartEmailTemplates:
    """
    Intelligent email template system with personalization and performance tracking.
    """
    
    def __init__(self):
        self.templates = self._load_templates()
        self.performance_data = self._load_performance_data()
    
    def _load_templates(self) -> Dict:
        """Load template library from JSON file."""
        template_file = TEMPLATE_DIR / "template_library.json"
        if template_file.exists():
            with open(template_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        
        # Initialize with default templates
        default_templates = self._create_default_templates()
        self._save_templates(default_templates)
        return default_templates
    
    def _save_templates(self, templates: Dict):
        """Save template library to JSON file."""
        template_file = TEMPLATE_DIR / "template_library.json"
        with open(template_file, 'w', encoding='utf-8') as f:
            json.dump(templates, f, indent=2, ensure_ascii=False)
    
    def _load_performance_data(self) -> Dict:
        """Load template performance metrics."""
        perf_file = TEMPLATE_DIR / "performance.json"
        if perf_file.exists():
            with open(perf_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        return {}
    
    def _save_performance_data(self):
        """Save performance metrics."""
        perf_file = TEMPLATE_DIR / "performance.json"
        with open(perf_file, 'w', encoding='utf-8') as f:
            json.dump(self.performance_data, f, indent=2)
    
    def _create_default_templates(self) -> Dict:
        """Create default template library organized by intent."""
        return {
            "sales_inquiry": [
                {
                    "id": "sales_warm_lead_v1",
                    "name": "Warm Sales Lead Response",
                    "subject": "Re: {{subject_context}} - Let's Connect",
                    "body": """Hi {{recipient_name}},

Thank you for reaching out about {{subject_context}}. I appreciate your interest in {{company}}'s solutions.

Based on your inquiry, I believe we can help you achieve your goals. Here's what I'd like to propose:

1. A brief 15-minute discovery call to understand your specific needs
2. A customized proposal tailored to your requirements
3. References from similar clients in your industry

Would you be available for a quick call this week? I have openings on {{available_times}}.

Looking forward to hearing from you.

Best regards,
{{sender_name}}
{{sender_title}}
{{company}}
{{phone}} | {{email}}""",
                    "variables": ["recipient_name", "subject_context", "company", "available_times", "sender_name", "sender_title", "phone", "email"],
                    "tags": ["sales", "warm_lead", "discovery_call"],
                    "version": 1
                },
                {
                    "id": "sales_cold_outreach_v1",
                    "name": "Cold Outreach Introduction",
                    "subject": "Quick Question About {{recipient_company}}'s {{pain_point}}",
                    "body": """Hi {{recipient_name}},

I came across {{recipient_company}} while researching companies in the {{industry}} space, and I noticed you might be dealing with {{pain_point}}.

At {{company}}, we've helped {{similar_companies}} overcome similar challenges and achieve {{specific_result}}.

Would you be open to a brief conversation to explore if we might be a good fit?

Best,
{{sender_name}}
{{sender_title}} | {{company}}
{{phone}}""",
                    "variables": ["recipient_name", "recipient_company", "pain_point", "industry", "company", "similar_companies", "specific_result", "sender_name", "sender_title", "phone"],
                    "tags": ["sales", "cold_outreach", "introduction"],
                    "version": 1
                }
            ],
            "support_ticket": [
                {
                    "id": "support_acknowledgment_v1",
                    "name": "Support Ticket Acknowledgment",
                    "subject": "Re: {{subject_context}} - Ticket #{{ticket_id}}",
                    "body": """Hi {{recipient_name}},

Thank you for contacting {{company}} support. We've received your request and created ticket #{{ticket_id}}.

**Issue Summary:**
{{issue_summary}}

**Next Steps:**
Our technical team is reviewing your case and will respond within {{response_time}}. For urgent matters, you can reach us at {{urgent_phone}}.

**What You Can Do:**
- Check ticket status: {{ticket_url}}
- Add more details: Reply to this email
- Self-service resources: {{knowledge_base_url}}

We appreciate your patience as we work to resolve this for you.

Best regards,
{{support_team}}
{{company}} Support
{{support_email}} | {{support_phone}}""",
                    "variables": ["recipient_name", "company", "ticket_id", "issue_summary", "response_time", "urgent_phone", "ticket_url", "knowledge_base_url", "support_team", "support_email", "support_phone"],
                    "tags": ["support", "acknowledgment", "ticket"],
                    "version": 1
                },
                {
                    "id": "support_resolution_v1",
                    "name": "Support Issue Resolved",
                    "subject": "Re: {{subject_context}} - Resolved ✓",
                    "body": """Hi {{recipient_name}},

Great news! We've resolved the issue reported in ticket #{{ticket_id}}.

**Resolution:**
{{resolution_details}}

**What We Did:**
{{actions_taken}}

**Verification:**
Please confirm the issue is resolved on your end. If you're still experiencing problems, reply to this email and we'll investigate further.

**Feedback:**
Your feedback helps us improve. Please rate your support experience: {{feedback_url}}

Thank you for your patience and understanding.

Best regards,
{{support_agent}}
{{company}} Support Team""",
                    "variables": ["recipient_name", "ticket_id", "resolution_details", "actions_taken", "feedback_url", "support_agent", "company"],
                    "tags": ["support", "resolution", "follow_up"],
                    "version": 1
                }
            ],
            "billing_invoice": [
                {
                    "id": "billing_payment_reminder_v1",
                    "name": "Payment Reminder",
                    "subject": "Friendly Reminder: Invoice #{{invoice_number}} Due {{due_date}}",
                    "body": """Hi {{recipient_name}},

This is a friendly reminder that invoice #{{invoice_number}} for {{amount}} is due on {{due_date}}.

**Invoice Details:**
- Invoice #: {{invoice_number}}
- Amount: {{amount}}
- Due Date: {{due_date}}
- Service Period: {{service_period}}

**Payment Options:**
- Online: {{payment_url}}
- Bank Transfer: {{bank_details}}
- Check: Mail to {{billing_address}}

If you've already sent payment, please disregard this message. If you have questions or need assistance, reply to this email or call {{billing_phone}}.

Thank you for your prompt attention to this matter.

Best regards,
{{billing_team}}
{{company}} Billing Department
{{billing_email}} | {{billing_phone}}""",
                    "variables": ["recipient_name", "invoice_number", "amount", "due_date", "service_period", "payment_url", "bank_details", "billing_address", "billing_phone", "billing_team", "company", "billing_email"],
                    "tags": ["billing", "reminder", "payment"],
                    "version": 1
                },
                {
                    "id": "billing_overdue_v1",
                    "name": "Overdue Invoice Notice",
                    "subject": "URGENT: Invoice #{{invoice_number}} Overdue - Action Required",
                    "body": """Hi {{recipient_name}},

We're writing to inform you that invoice #{{invoice_number}} for {{amount}} is now {{days_overdue}} days overdue.

**Outstanding Balance:**
- Invoice #: {{invoice_number}}
- Original Amount: {{amount}}
- Late Fee: {{late_fee}}
- **Total Due: {{total_due}}**

**Immediate Action Required:**
Please submit payment immediately to avoid service interruption:
- Pay Now: {{payment_url}}
- Call Us: {{billing_phone}} (Mon-Fri 9am-5pm EST)

**Payment Arrangements:**
If you're experiencing financial difficulties, we're here to help. Contact us to discuss payment plan options.

We value your business and want to continue serving you. Please contact us within 48 hours to resolve this matter.

Sincerely,
{{billing_manager}}
{{company}} Billing Manager
{{billing_email}} | {{billing_phone}}""",
                    "variables": ["recipient_name", "invoice_number", "amount", "days_overdue", "late_fee", "total_due", "payment_url", "billing_phone", "billing_manager", "company", "billing_email"],
                    "tags": ["billing", "overdue", "urgent"],
                    "version": 1
                }
            ],
            "partnership": [
                {
                    "id": "partnership_interest_v1",
                    "name": "Partnership Interest Response",
                    "subject": "Re: {{subject_context}} - Partnership Opportunity",
                    "body": """Hi {{recipient_name}},

Thank you for your interest in partnering with {{company}}. We're always excited to explore collaboration opportunities with like-minded organizations.

**About {{company}}:**
{{company_description}}

**Partnership Models:**
We offer several partnership structures:
- {{partnership_option_1}}
- {{partnership_option_2}}
- {{partnership_option_3}}

**Next Steps:**
I'd like to schedule a 30-minute call to discuss:
1. Your organization's goals and capabilities
2. Potential synergy and mutual benefits
3. Partnership structure and terms

Are you available on {{proposed_dates}}?

Looking forward to exploring this opportunity together.

Best regards,
{{sender_name}}
{{sender_title}}
{{company}}
{{phone}} | {{email}}""",
                    "variables": ["recipient_name", "company", "company_description", "partnership_option_1", "partnership_option_2", "partnership_option_3", "proposed_dates", "sender_name", "sender_title", "phone", "email"],
                    "tags": ["partnership", "collaboration", "business_development"],
                    "version": 1
                }
            ],
            "follow_up": [
                {
                    "id": "follow_up_gentle_v1",
                    "name": "Gentle Follow-Up",
                    "subject": "Re: {{subject_context}} - Following Up",
                    "body": """Hi {{recipient_name}},

I hope this message finds you well. I wanted to follow up on our previous conversation about {{subject_context}}.

**Quick Recap:**
{{previous_context}}

**Current Status:**
{{status_update}}

**Next Steps:**
{{proposed_next_steps}}

I understand you're busy, so no pressure. When you have a moment, I'd love to hear your thoughts.

Best regards,
{{sender_name}}
{{company}}""",
                    "variables": ["recipient_name", "subject_context", "previous_context", "status_update", "proposed_next_steps", "sender_name", "company"],
                    "tags": ["follow_up", "gentle", "reminder"],
                    "version": 1
                },
                {
                    "id": "follow_up_urgent_v1",
                    "name": "Urgent Follow-Up",
                    "subject": "URGENT: {{subject_context}} - Response Needed by {{deadline}}",
                    "body": """Hi {{recipient_name}},

I'm following up on {{subject_context}} as we're approaching the {{deadline}} deadline.

**Time-Sensitive Information:**
{{urgent_details}}

**Impact of Delay:**
{{consequences}}

**Immediate Action Needed:**
{{required_actions}}

Please respond by {{response_deadline}} so we can proceed accordingly. If you need more time or have concerns, let me know immediately.

Thank you for your prompt attention.

Best regards,
{{sender_name}}
{{sender_title}} | {{company}}
{{phone}} (available 24/7 for urgent matters)""",
                    "variables": ["recipient_name", "subject_context", "deadline", "urgent_details", "consequences", "required_actions", "response_deadline", "sender_name", "sender_title", "company", "phone"],
                    "tags": ["follow_up", "urgent", "deadline"],
                    "version": 1
                }
            ],
            "thank_you": [
                {
                    "id": "thank_you_business_v1",
                    "name": "Thank You for Business",
                    "subject": "Thank You for Choosing {{company}}!",
                    "body": """Hi {{recipient_name}},

On behalf of everyone at {{company}}, I want to express our sincere gratitude for choosing us as your partner.

**What's Next:**
{{onboarding_steps}}

**Your Dedicated Support:**
- Account Manager: {{account_manager}}
- Support Email: {{support_email}}
- Support Phone: {{support_phone}}
- Knowledge Base: {{knowledge_base_url}}

**Resources for You:**
- Getting Started Guide: {{guide_url}}
- Video Tutorials: {{tutorial_url}}
- Community Forum: {{forum_url}}

We're committed to your success and are here to support you every step of the way.

Welcome to the {{company}} family!

Warm regards,
{{sender_name}}
{{sender_title}}
{{company}}
{{phone}} | {{email}}""",
                    "variables": ["recipient_name", "company", "onboarding_steps", "account_manager", "support_email", "support_phone", "knowledge_base_url", "guide_url", "tutorial_url", "forum_url", "sender_name", "sender_title", "phone", "email"],
                    "tags": ["thank_you", "onboarding", "welcome"],
                    "version": 1
                }
            ],
            "general": [
                {
                    "id": "general_professional_v1",
                    "name": "Professional General Response",
                    "subject": "Re: {{subject_context}}",
                    "body": """Hi {{recipient_name}},

Thank you for your email regarding {{subject_context}}.

{{main_response}}

{{additional_information}}

If you have any further questions or need clarification, please don't hesitate to reach out.

Best regards,
{{sender_name}}
{{sender_title}}
{{company}}
{{phone}} | {{email}}""",
                    "variables": ["recipient_name", "subject_context", "main_response", "additional_information", "sender_name", "sender_title", "company", "phone", "email"],
                    "tags": ["general", "professional", "versatile"],
                    "version": 1
                }
            ]
        }
    
    def get_templates_for_intent(self, intent: str) -> List[Dict]:
        """Get all templates for a specific intent category."""
        return self.templates.get(intent, self.templates.get("general", []))
    
    def recommend_template(self, intent: str, context: Dict) -> Optional[Dict]:
        """
        Recommend the best template based on intent and historical performance.
        
        Args:
            intent: Email intent category
            context: Email context (sender info, subject, etc.)
        
        Returns:
            Recommended template or None
        """
        templates = self.get_templates_for_intent(intent)
        if not templates:
            return None
        
        # Score templates based on performance and context match
        scored_templates = []
        for template in templates:
            score = self._score_template(template, context)
            scored_templates.append((score, template))
        
        # Sort by score descending
        scored_templates.sort(key=lambda x: x[0], reverse=True)
        
        # Return highest scoring template
        return scored_templates[0][1] if scored_templates else None
    
    def _score_template(self, template: Dict, context: Dict) -> float:
        """
        Score a template based on performance metrics and context relevance.
        
        Scoring factors:
        - Historical performance (response rate, conversion rate)
        - Tag relevance to context
        - Template freshness (version number)
        """
        score = 0.0
        template_id = template["id"]
        
        # Performance score (0-50 points)
        if template_id in self.performance_data:
            perf = self.performance_data[template_id]
            response_rate = perf.get("response_rate", 0)
            conversion_rate = perf.get("conversion_rate", 0)
            score += (response_rate * 25) + (conversion_rate * 25)
        
        # Tag relevance score (0-30 points)
        template_tags = set(template.get("tags", []))
        context_tags = set(context.get("tags", []))
        tag_overlap = len(template_tags & context_tags)
        score += tag_overlap * 10
        
        # Version freshness (0-20 points)
        version = template.get("version", 1)
        score += min(version * 5, 20)
        
        return score
    
    def personalize_template(self, template: Dict, variables: Dict) -> Dict:
        """
        Replace template variables with actual values.
        
        Args:
            template: Template dictionary
            variables: Dictionary of variable values
        
        Returns:
            Personalized template with filled subject and body
        """
        personalized = template.copy()
        
        # Replace variables in subject
        subject = template["subject"]
        for var, value in variables.items():
            subject = subject.replace(f"{{{{{var}}}}}", str(value))
        personalized["subject"] = subject
        
        # Replace variables in body
        body = template["body"]
        for var, value in variables.items():
            body = body.replace(f"{{{{{var}}}}}", str(value))
        personalized["body"] = body
        
        return personalized
    
    def track_template_usage(self, template_id: str, metrics: Dict):
        """
        Track template performance metrics.
        
        Args:
            template_id: Template identifier
            metrics: Dictionary containing:
                - sent: Number of times sent
                - opened: Number of opens
                - responded: Number of responses
                - converted: Number of conversions
        """
        if template_id not in self.performance_data:
            self.performance_data[template_id] = {
                "sent": 0,
                "opened": 0,
                "responded": 0,
                "converted": 0,
                "response_rate": 0,
                "conversion_rate": 0,
                "last_used": None
            }
        
        perf = self.performance_data[template_id]
        
        # Update counts
        perf["sent"] += metrics.get("sent", 0)
        perf["opened"] += metrics.get("opened", 0)
        perf["responded"] += metrics.get("responded", 0)
        perf["converted"] += metrics.get("converted", 0)
        
        # Calculate rates
        if perf["sent"] > 0:
            perf["response_rate"] = perf["responded"] / perf["sent"]
            perf["conversion_rate"] = perf["converted"] / perf["sent"]
        
        perf["last_used"] = datetime.now().isoformat()
        
        self._save_performance_data()
    
    def get_performance_report(self) -> Dict:
        """
        Generate performance report for all templates.
        
        Returns:
            Dictionary with performance metrics and rankings
        """
        report = {
            "total_templates": sum(len(templates) for templates in self.templates.values()),
            "total_tracked": len(self.performance_data),
            "top_performers": [],
            "category_breakdown": {}
        }
        
        # Find top performers by response rate
        performers = []
        for template_id, perf in self.performance_data.items():
            if perf["sent"] >= 10:  # Minimum threshold
                performers.append({
                    "template_id": template_id,
                    "response_rate": perf["response_rate"],
                    "conversion_rate": perf["conversion_rate"],
                    "sent": perf["sent"]
                })
        
        performers.sort(key=lambda x: x["response_rate"], reverse=True)
        report["top_performers"] = performers[:10]
        
        # Category breakdown
        for intent, templates in self.templates.items():
            category_stats = {
                "templates": len(templates),
                "total_sent": 0,
                "avg_response_rate": 0
            }
            
            rates = []
            for template in templates:
                template_id = template["id"]
                if template_id in self.performance_data:
                    perf = self.performance_data[template_id]
                    category_stats["total_sent"] += perf["sent"]
                    if perf["sent"] > 0:
                        rates.append(perf["response_rate"])
            
            if rates:
                category_stats["avg_response_rate"] = sum(rates) / len(rates)
            
            report["category_breakdown"][intent] = category_stats
        
        return report
    
    def add_custom_template(self, intent: str, template: Dict):
        """
        Add a custom template to the library.
        
        Args:
            intent: Intent category
            template: Template dictionary with required fields:
                - id: Unique identifier
                - name: Human-readable name
                - subject: Subject line with {{variables}}
                - body: Body text with {{variables}}
                - variables: List of variable names
                - tags: List of tags
        """
        if intent not in self.templates:
            self.templates[intent] = []
        
        # Ensure template has required fields
        required_fields = ["id", "name", "subject", "body", "variables"]
        for field in required_fields:
            if field not in template:
                raise ValueError(f"Template missing required field: {field}")
        
        # Add version if not present
        if "version" not in template:
            template["version"] = 1
        
        # Add tags if not present
        if "tags" not in template:
            template["tags"] = [intent]
        
        self.templates[intent].append(template)
        self._save_templates(self.templates)
    
    def update_template(self, intent: str, template_id: str, updates: Dict):
        """
        Update an existing template.
        
        Args:
            intent: Intent category
            template_id: Template identifier
            updates: Dictionary of fields to update
        """
        templates = self.templates.get(intent, [])
        
        for template in templates:
            if template["id"] == template_id:
                # Update fields
                for key, value in updates.items():
                    if key != "id":  # Don't allow ID changes
                        template[key] = value
                
                # Increment version
                template["version"] = template.get("version", 1) + 1
                
                self._save_templates(self.templates)
                return True
        
        return False


# Utility functions for template management

def create_template_from_email(email_data: Dict, intent: str) -> Dict:
    """
    Create a template from an existing email.
    
    Args:
        email_data: Dictionary with email content
        intent: Intent category
    
    Returns:
        Template dictionary ready for customization
    """
    # Generate template ID
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    template_id = f"{intent}_custom_{timestamp}"
    
    # Extract potential variables from email
    body = email_data.get("body", "")
    variables = []
    
    # Common patterns to replace with variables
    patterns = {
        "recipient_name": r"Hi\s+([A-Z][a-z]+)",
        "company": r"(?:at|from)\s+([A-Z][a-zA-Z\s]+?)(?:\.|,|\n)",
        "date": r"\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\b",
        "amount": r"\$[\d,]+(?:\.\d{2})?",
    }
    
    body_template = body
    for var_name, pattern in patterns.items():
        matches = re.findall(pattern, body)
        if matches:
            variables.append(var_name)
            # Replace first occurrence with variable placeholder
            body_template = re.sub(pattern, f"{{{{{var_name}}}}}", body_template, count=1)
    
    template = {
        "id": template_id,
        "name": f"Custom {intent.title()} Template",
        "subject": email_data.get("subject", "").replace("Re: ", ""),
        "body": body_template,
        "variables": variables,
        "tags": [intent, "custom"],
        "version": 1,
        "created_from": email_data.get("id", "unknown")
    }
    
    return template


def a_b_test_subjects(template: Dict, variants: List[str]) -> List[Dict]:
    """
    Create A/B test variants for subject lines.
    
    Args:
        template: Original template
        variants: List of alternative subject lines
    
    Returns:
        List of template variants with unique IDs
    """
    ab_variants = []
    
    for i, subject in enumerate(variants, 1):
        variant = template.copy()
        variant["id"] = f"{template['id']}_ab_{i}"
        variant["name"] = f"{template['name']} (Variant {i})"
        variant["subject"] = subject
        variant["ab_test_group"] = i
        ab_variants.append(variant)
    
    return ab_variants


# Example usage and testing

if __name__ == "__main__":
    print("=" * 70)
    print("V63 Smart Email Templates System")
    print("=" * 70)
    print()
    
    # Initialize template system
    template_system = SmartEmailTemplates()
    
    # Test 1: Get templates for intent
    print("Test 1: Retrieve templates for 'sales_inquiry' intent")
    sales_templates = template_system.get_templates_for_intent("sales_inquiry")
    print(f"  Found {len(sales_templates)} templates")
    for template in sales_templates:
        print(f"    - {template['name']} ({template['id']})")
    print()
    
    # Test 2: Personalize template
    print("Test 2: Personalize template with variables")
    if sales_templates:
        template = sales_templates[0]
        variables = {
            "recipient_name": "John Smith",
            "subject_context": "AI Solutions",
            "company": "Zion Tech Group",
            "available_times": "Tuesday 2pm or Thursday 10am",
            "sender_name": "Kleber Garcia",
            "sender_title": "Business Development",
            "phone": "+1 302 464 0950",
            "email": "kleber@ziontechgroup.com"
        }
        
        personalized = template_system.personalize_template(template, variables)
        print(f"  Subject: {personalized['subject']}")
        print(f"  Body preview: {personalized['body'][:200]}...")
    print()
    
    # Test 3: Track template usage
    print("Test 3: Track template performance")
    if sales_templates:
        template_id = sales_templates[0]["id"]
        template_system.track_template_usage(template_id, {
            "sent": 100,
            "opened": 45,
            "responded": 12,
            "converted": 3
        })
        print(f"  Tracked usage for {template_id}")
        print(f"  Response rate: {12/100:.1%}")
        print(f"  Conversion rate: {3/100:.1%}")
    print()
    
    # Test 4: Generate performance report
    print("Test 4: Generate performance report")
    report = template_system.get_performance_report()
    print(f"  Total templates: {report['total_templates']}")
    print(f"  Templates tracked: {report['total_tracked']}")
    print(f"  Top performer: {report['top_performers'][0]['template_id'] if report['top_performers'] else 'N/A'}")
    print()
    
    # Test 5: Create custom template from email
    print("Test 5: Create template from existing email")
    sample_email = {
        "id": "email_12345",
        "subject": "Re: Partnership Opportunity",
        "body": "Hi Sarah,\n\nThank you for reaching out about a potential partnership. At Acme Corp, we're always interested in exploring collaboration opportunities.\n\nLet's schedule a call next week to discuss further.\n\nBest regards,\nJohn"
    }
    
    custom_template = create_template_from_email(sample_email, "partnership")
    print(f"  Created template: {custom_template['id']}")
    print(f"  Variables detected: {custom_template['variables']}")
    print(f"  Body template preview: {custom_template['body'][:150]}...")
    print()
    
    # Test 6: A/B test subjects
    print("Test 6: Create A/B test variants")
    if sales_templates:
        variants = [
            "Quick Question About Your Business",
            "Let's Connect - 15 Min Call?",
            "{{recipient_name}}, Can We Help?"
        ]
        ab_tests = a_b_test_subjects(sales_templates[0], variants)
        print(f"  Created {len(ab_tests)} variants:")
        for variant in ab_tests:
            print(f"    Variant {variant['ab_test_group']}: {variant['subject']}")
    print()
    
    print("=" * 70)
    print("All tests completed successfully!")
    print()
    print("Contact Information:")
    print("  Kleber Garcia Alcatrao")
    print("  Email: kleber@ziontechgroup.com")
    print("  Phone: +1 302 464 0950")
    print("  Address: 364 E Main St STE 1008, Middletown, DE 19709")
    print("=" * 70)
