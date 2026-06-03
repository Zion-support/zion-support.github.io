#!/usr/bin/env python3
"""
Zion Tech Group — Email Intelligence Engine v3.0
Case-by-case email analysis with contextual reply generation.
Supports: classification, priority scoring, reply-all detection, draft generation.
"""

import json
import sys
import os
import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

# ── Configuration ──────────────────────────────────────────────────────────
OUTPUT_DIR = Path.home() / ".hermes" / "email-drafts"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# ── Intent Classification ──────────────────────────────────────────────────
INTENT_PATTERNS = {
    "sales_inquiry": [
        r"quote|pricing|cost|how much|proposal|estimate|budget|interested in purchasing",
        r"looking for|need a|want to buy|evaluate|compare vendors|rfp|request for",
    ],
    "support_request": [
        r"help|issue|problem|bug|error|broken|not working|support|ticket|assist",
        r"urgent|asap|critical|down|outage|failed|crash",
    ],
    "partnership": [
        r"partner|collaborat|joint venture|reseller|affiliate|distributor|white.?label",
        r"strategic alliance|co.?market|referral program|integration partner",
    ],
    "job_inquiry": [
        r"job|career|hire|recruit|position|opening|resume|cv|apply|interview",
        r"freelance|contractor|consultant available|looking for work",
    ],
    "media_press": [
        r"press|media|interview|article|blog|podcast|journalist|publication",
        r"press release|media kit|story about|feature",
    ],
    "complaint": [
        r"unhappy|disappointed|complaint|refund|cancel|terminate|close my account",
        r"terrible|worst|scam|fraud|lawsuit|legal action|better business bureau",
    ],
    "information_request": [
        r"information about|tell me more|details on|what do you offer|capabilities",
        r"brochure|datasheet|whitepaper|case study|portfolio",
    ],
    "meeting_request": [
        r"schedule a meeting|book a call|set up a time|calendar|availability",
        r"demo|presentation|walkthrough|screen share|zoom|teams call",
    ],
    "thank_you": [
        r"thank you|thanks|appreciate|great work|well done|good job",
    ],
    "spam": [
        r"viagra|crypto investment|make money fast|lottery|inheritance|nigerian prince",
        r"click here to win|act now|limited time|guaranteed returns",
    ],
}

# ── Priority Scoring ───────────────────────────────────────────────────────
URGENT_KEYWORDS = [
    "urgent", "asap", "immediately", "critical", "emergency", "outage",
    "down", "broken", "not working", "deadline", "today", "escalate",
    "ceo", "cto", "founder", "president", "legal", "lawsuit", "complaint",
]

HIGH_VALUE_KEYWORDS = [
    "enterprise", "contract", "annual", "revenue", "budget approved",
    "decision maker", "procurement", "purchase order", "signed",
    "500+", "1000+", "fortune 500", "government", "federal",
]

# ── Reply Templates by Intent ─────────────────────────────────────────────
REPLY_TEMPLATES = {
    "sales_inquiry": {
        "subject": "Re: {original_subject} — Custom Proposal from Zion Tech Group",
        "body": """Hi {sender_name},

Thank you for your interest in our {service_category} solutions. Based on your inquiry, I'd love to learn more about your specific needs.

Here's what we can offer:
• Custom AI/IT solutions tailored to your requirements
• Flexible pricing: from $9/mo starter plans to enterprise-grade deployments
• Free initial consultation and architecture review
• 24/7 support with 99.9% SLA uptime guarantee

Would you be available for a 15-minute call this week? I can prepare a preliminary proposal based on your use case.

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950
📍 364 E Main St STE 1008, Middletown DE 19709
🌐 https://ziontechgroup.com""",
    },
    "support_request": {
        "subject": "Re: {original_subject} — Support Ticket #{ticket_id}",
        "body": """Hi {sender_name},

Thank you for reaching out. I've received your support request and prioritized it accordingly.

{ticket_priority}

Next steps:
1. Our technical team is reviewing your issue
2. We'll provide an initial assessment within {response_time}
3. A dedicated engineer will be assigned if needed

For urgent issues, please call us directly at +1 302 464 0950 for immediate assistance.

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950""",
    },
    "partnership": {
        "subject": "Re: {original_subject} — Partnership Opportunities at Zion Tech Group",
        "body": """Hi {sender_name},

Thank you for your interest in partnering with Zion Tech Group. We're always looking for strategic partners who share our vision.

Our partnership programs include:
• Reseller & referral partnerships
• White-label solutions
• Technology integration partnerships
• Co-marketing opportunities

I'd love to schedule a call to explore how we can create mutual value. What does your availability look like this week?

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950
📍 364 E Main St STE 1008, Middletown DE 19709""",
    },
    "job_inquiry": {
        "subject": "Re: {original_subject} — Thank You for Your Interest",
        "body": """Hi {sender_name},

Thank you for your interest in joining Zion Tech Group. We appreciate you reaching out.

We review all applications carefully. If there's a match with our current needs, our team will reach out within 2 weeks.

In the meantime, feel free to explore our work at https://ziontechgroup.com

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com""",
    },
    "media_press": {
        "subject": "Re: {original_subject} — Zion Tech Group Media Inquiry",
        "body": """Hi {sender_name},

Thank you for your interest in covering Zion Tech Group. We'd be happy to provide information for your {media_type}.

I can arrange:
• An interview with our CEO
• Access to our media kit and company data
• Case studies and customer testimonials
• Technical deep-dives with our engineering team

What's your deadline and preferred format?

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950""",
    },
    "complaint": {
        "subject": "Re: {original_subject} — We Take This Seriously",
        "body": """Hi {sender_name},

I'm sorry to hear about your experience. At Zion Tech Group, we take every concern seriously and want to make this right.

I've personally flagged this for immediate review. Here's what we're doing:
1. Investigating the issue you described
2. Assigning a dedicated resolution specialist
3. Will follow up within 24 hours with a concrete action plan

Your satisfaction is our priority. Please call me directly at +1 302 464 0950 if you'd like to discuss this further.

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950""",
    },
    "information_request": {
        "subject": "Re: {original_subject} — Zion Tech Group Capabilities",
        "body": """Hi {sender_name},

Thank you for your interest in Zion Tech Group. Here's an overview of what we offer:

🧠 AI Services (387+ solutions)
   Machine learning, NLP, computer vision, predictive analytics

🖥️ IT Services (113+ solutions)
   Infrastructure, helpdesk, cloud migration, DevOps

🔐 Security Services (62+ solutions)
   SOC, pen testing, compliance, threat detection

📊 Data & Analytics (47+ solutions)
   BI dashboards, data pipelines, visualization

☁️ Cloud Services (72+ solutions)
   Multi-cloud, cost optimization, serverless

🤖 Automation (33+ solutions)
   RPA, workflow automation, invoice processing

Explore all 834+ services at https://ziontechgroup.com

Would you like a personalized recommendation? I'm happy to schedule a call.

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950
📍 364 E Main St STE 1008, Middletown DE 19709""",
    },
    "meeting_request": {
        "subject": "Re: {original_subject} — Let's Schedule a Call",
        "body": """Hi {sender_name},

Thank you for requesting a meeting. I'd love to connect.

I'm available for a call:
• Monday–Friday, 9 AM – 6 PM EST
• Video call (Zoom/Teams) or phone

Please let me know:
1. Your preferred date/time
2. Topics you'd like to cover
3. Any specific attendees

Or book directly at: https://ziontechgroup.com/contact

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950""",
    },
    "thank_you": {
        "subject": "Re: {original_subject}",
        "body": """Hi {sender_name},

Thank you so much for your kind words! It truly means a lot to our team.

We're committed to delivering exceptional results and your feedback motivates us to keep pushing forward.

If there's anything else we can help with, don't hesitate to reach out.

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950""",
    },
    "spam": {
        "subject": None,  # No reply for spam
        "body": None,
    },
    "general": {
        "subject": "Re: {original_subject}",
        "body": """Hi {sender_name},

Thank you for reaching out to Zion Tech Group.

I've received your message and will review it carefully. How can we best help you?

We offer 834+ AI, IT, cloud, security, and automation services. Explore at https://ziontechgroup.com

Best regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
📧 kleber@ziontechgroup.com
📞 +1 302 464 0950
📍 364 E Main St STE 1008, Middletown DE 19709""",
    },
}


def classify_intent(email_body: str, subject: str = "") -> tuple[str, float]:
    """Classify email intent with confidence score."""
    text = f"{subject} {email_body}".lower()
    scores = {}

    for intent, patterns in INTENT_PATTERNS.items():
        score = 0
        for pattern in patterns:
            matches = len(re.findall(pattern, text, re.IGNORECASE))
            score += matches * (2.0 if intent == "spam" else 1.0)
        if score > 0:
            scores[intent] = score

    if not scores:
        return "general", 0.3

    best_intent = max(scores, key=scores.get)
    total = sum(scores.values())
    confidence = min(scores[best_intent] / max(total, 1), 1.0)

    return best_intent, round(confidence, 2)


def detect_priority(email_body: str, subject: str = "") -> dict:
    """Detect email priority level."""
    text = f"{subject} {email_body}".lower()

    urgent_score = sum(1 for kw in URGENT_KEYWORDS if kw in text)
    high_value_score = sum(1 for kw in HIGH_VALUE_KEYWORDS if kw in text)

    if urgent_score >= 3:
        level = "urgent"
        response_time = "1 hour"
    elif urgent_score >= 1 or high_value_score >= 2:
        level = "high"
        response_time = "4 hours"
    elif high_value_score >= 1:
        level = "medium"
        response_time = "24 hours"
    else:
        level = "low"
        response_time = "48 hours"

    return {
        "level": level,
        "response_time": response_time,
        "urgent_signals": urgent_score,
        "high_value_signals": high_value_score,
    }


def should_reply_all(email_data: dict) -> dict:
    """Determine if reply-all is needed."""
    to_field = email_data.get("to", "")
    cc_field = email_data.get("cc", "")
    headers = email_data.get("headers", {})

    # Count recipients
    all_recipients = []
    for field in [to_field, cc_field]:
        if field:
            all_recipients.extend([r.strip() for r in field.split(",") if r.strip()])

    # Check for mailing lists
    is_mailing_list = any(
        indicator in to_field.lower()
        for indicator in ["@", "list@", "team@", "all@", "group@"]
    )

    # Check for reply-to-all indicators in body
    body = email_data.get("body", "")
    reply_all_indicators = [
        "team", "everyone", "all", "cc", "copying", "including",
        "for everyone", "team visibility", "keeping everyone",
    ]
    body_suggests_reply_all = any(ind in body.lower() for ind in reply_all_indicators)

    should_reply = len(all_recipients) > 1 or is_mailing_list or body_suggests_reply_all

    return {
        "reply_all": should_reply,
        "recipient_count": len(all_recipients),
        "is_mailing_list": is_mailing_list,
        "body_suggests_reply_all": body_suggests_reply_all,
        "recommendation": "Reply All" if should_reply else "Reply to Sender",
    }


def generate_draft(email_data: dict, intent: str, priority: dict) -> dict:
    """Generate contextual reply draft."""
    template = REPLY_TEMPLATES.get(intent, REPLY_TEMPLATES["general"])

    if intent == "spam":
        return {
            "action": "no_reply",
            "reason": "Classified as spam",
            "draft": None,
        }

    sender_name = email_data.get("from_name", "there")
    if not sender_name or sender_name == "there":
        # Try to extract from email
        from_email = email_data.get("from", "")
        match = re.match(r"(.+?)\s*<", from_email)
        sender_name = match.group(1).strip() if match else "there"

    original_subject = email_data.get("subject", "Your Inquiry")

    # Determine service category from body
    body_lower = email_data.get("body", "").lower()
    if any(kw in body_lower for kw in ["ai", "machine learning", "ml", "nlp", "computer vision"]):
        service_category = "AI"
    elif any(kw in body_lower for kw in ["security", "cyber", "penetration", "soc"]):
        service_category = "Security"
    elif any(kw in body_lower for kw in ["cloud", "aws", "azure", "gcp", "infrastructure"]):
        service_category = "Cloud"
    elif any(kw in body_lower for kw in ["data", "analytics", "bi", "dashboard"]):
        service_category = "Data & Analytics"
    else:
        service_category = "AI/IT"

    # Fill template
    subject_kwargs = {"original_subject": original_subject}
    body_kwargs = {
        "sender_name": sender_name.split()[0] if sender_name else "there",
        "original_subject": original_subject,
        "service_category": service_category,
        "response_time": priority["response_time"],
    }
    # Add template-specific fields
    if intent == "support_request":
        ticket_id = f"ZTG-{datetime.now().strftime('%Y%m%d')}-{hash(email_data.get('from', '')) % 10000:04d}"
        subject_kwargs["ticket_id"] = ticket_id
        body_kwargs["ticket_id"] = ticket_id
        body_kwargs["ticket_priority"] = f"Priority: {priority['level'].upper()} — Response expected within {priority['response_time']}"
    if intent == "media_press":
        body_kwargs["media_type"] = "article" if "article" in body_lower else "piece"
    subject = template["subject"].format(**subject_kwargs)
    body = template["body"].format(**body_kwargs)

    return {
        "action": "draft_reply",
        "subject": subject,
        "body": body,
        "service_category": service_category,
    }


def analyze_email(email_data: dict) -> dict:
    """Full case-by-case email analysis."""
    subject = email_data.get("subject", "")
    body = email_data.get("body", "")

    # Step 1: Classify intent
    intent, confidence = classify_intent(body, subject)

    # Step 2: Detect priority
    priority = detect_priority(body, subject)

    # Step 3: Determine reply-all
    reply_analysis = should_reply_all(email_data)

    # Step 4: Generate draft
    draft = generate_draft(email_data, intent, priority)

    # Step 5: Determine recommended action
    if intent == "spam":
        recommended_action = "archive"
    elif priority["level"] == "urgent":
        recommended_action = "reply_immediately"
    elif intent == "sales_inquiry" and priority["level"] in ("high", "medium"):
        recommended_action = "reply_with_proposal"
    elif intent == "complaint":
        recommended_action = "reply_with_escalation"
    elif intent == "meeting_request":
        recommended_action = "reply_with_calendar"
    elif intent == "partnership":
        recommended_action = "reply_with_partnership_info"
    elif confidence < 0.4:
        recommended_action = "review_manually"
    else:
        recommended_action = "reply_with_template"

    return {
        "analysis_id": f"analysis-{datetime.now().strftime('%Y%m%d%H%M%S')}",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "email": {
            "from": email_data.get("from", ""),
            "subject": subject,
            "preview": body[:200] + "..." if len(body) > 200 else body,
        },
        "classification": {
            "intent": intent,
            "confidence": confidence,
            "intent_display": intent.replace("_", " ").title(),
        },
        "priority": priority,
        "reply_analysis": reply_analysis,
        "draft": draft,
        "recommended_action": recommended_action,
        "action_display": recommended_action.replace("_", " ").title(),
    }


def fetch_emails_himalaya(limit: int = 10) -> list[dict]:
    """Fetch recent emails using himalaya CLI."""
    try:
        result = subprocess.run(
            ["himalaya", "list", "-s", str(limit), "-f", "json"],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            emails = json.loads(result.stdout)
            return emails
        else:
            print(f"himalaya error: {result.stderr}", file=sys.stderr)
            return []
    except FileNotFoundError:
        print("himalaya not installed. Run: pkg install himalaya", file=sys.stderr)
        return []
    except (json.JSONDecodeError, subprocess.TimeoutExpired) as e:
        print(f"Error fetching emails: {e}", file=sys.stderr)
        return []


def process_inbox(limit: int = 10) -> dict:
    """Process inbox and generate analysis for each email."""
    emails = fetch_emails_himalaya(limit)

    if not emails:
        return {"status": "no_emails", "analyses": []}

    analyses = []
    for email in emails:
        analysis = analyze_email(email)
        analyses.append(analysis)

    # Sort by priority
    priority_order = {"urgent": 0, "high": 1, "medium": 2, "low": 3}
    analyses.sort(key=lambda a: priority_order.get(a["priority"]["level"], 4))

    return {
        "status": "processed",
        "total": len(analyses),
        "urgent": sum(1 for a in analyses if a["priority"]["level"] == "urgent"),
        "high": sum(1 for a in analyses if a["priority"]["level"] == "high"),
        "reply_all_count": sum(1 for a in analyses if a["reply_analysis"]["reply_all"]),
        "analyses": analyses,
    }


def run_demo():
    """Run demo with sample emails."""
    demo_emails = [
        {
            "from": "john.smith@enterprise.com",
            "from_name": "John Smith",
            "to": "kleber@ziontechgroup.com",
            "cc": "procurement@enterprise.com, cto@enterprise.com",
            "subject": "RFP: AI Document Processing Solution — Enterprise Deployment",
            "body": """Hi Kleber,

We're evaluating AI document processing solutions for our enterprise. We process 50,000+ documents monthly and need OCR, classification, and data extraction.

Our budget is approved for $50K-$100K annually. We need:
- Integration with our existing SharePoint environment
- HIPAA compliance
- API access for custom workflows
- SLA guarantee

Can you provide a proposal by Friday? Our CTO Jane Doe is copied on this email and would like to review options.

Best,
John Smith
VP of Technology
Enterprise Corp""",
        },
        {
            "from": "sarah.jones@startup.io",
            "from_name": "Sarah Jones",
            "to": "kleber@ziontechgroup.com",
            "cc": "",
            "subject": "Urgent: Production API Down — Need Immediate Help",
            "body": """Kleber,

Our production API is down and we're losing $10K/hour. We think it's a database connection issue but our team is stuck.

This is critical — we need help ASAP.

Sarah
CTO, Startup.io""",
        },
        {
            "from": "mike.partner@bigtech.com",
            "from_name": "Mike Johnson",
            "to": "kleber@ziontechgroup.com",
            "cc": "partnerships@bigtech.com",
            "subject": "Partnership Opportunity — White-Label AI Services",
            "body": """Hi Kleber,

I lead partnerships at BigTech. We're looking for AI service providers to white-label for our enterprise clients.

Your catalog of 800+ services is impressive. I'd love to discuss:
- White-label/reseller arrangement
- Revenue sharing model
- Technical integration requirements

Are you available for a call next week?

Best,
Mike Johnson
Head of Partnerships
BigTech Inc.""",
        },
        {
            "from": "angry.customer@client.com",
            "from_name": "Robert Williams",
            "to": "kleber@ziontechgroup.com",
            "cc": "legal@client.com",
            "subject": "Complaint: Service Not as Described — Want Refund",
            "body": """Kleber,

I'm extremely disappointed with the service we received. The AI model accuracy is nowhere near what was promised in the contract.

We've wasted 3 months and $25K on this project. I want a full refund or I'm taking legal action.

This is unacceptable.

Robert Williams
CEO, Client Corp""",
        },
        {
            "from": "reporter@technews.com",
            "from_name": "Emily Chen",
            "to": "kleber@ziontechgroup.com",
            "cc": "",
            "subject": "Interview Request: AI Industry Trends Article",
            "body": """Hi Kleber,

I'm a reporter at TechNews working on an article about AI industry trends and the rise of micro-SaaS companies.

Would you be available for a 30-minute interview? I'd love to hear about Zion Tech Group's approach to building 800+ AI services.

The article publishes next Friday.

Best,
Emily Chen
Senior Reporter, TechNews""",
        },
    ]

    print("=" * 70)
    print("  ZION TECH GROUP — EMAIL INTELLIGENCE ENGINE v3.0")
    print("  Case-by-Case Analysis Demo")
    print("=" * 70)

    results = []
    for i, email in enumerate(demo_emails, 1):
        analysis = analyze_email(email)
        results.append(analysis)

        print(f"\n{'─' * 70}")
        print(f"  EMAIL {i}/{len(demo_emails)}")
        print(f"{'─' * 70}")
        print(f"  From:    {analysis['email']['from']}")
        print(f"  Subject: {analysis['email']['subject']}")
        print(f"  Preview: {analysis['email']['preview'][:100]}...")
        print()
        print(f"  📋 Intent:     {analysis['classification']['intent_display']} "
              f"(confidence: {analysis['classification']['confidence']})")
        print(f"  🚨 Priority:   {analysis['priority']['level'].upper()} "
              f"(respond within {analysis['priority']['response_time']})")
        print(f"  📧 Reply:      {analysis['reply_analysis']['recommendation']} "
              f"({analysis['reply_analysis']['recipient_count']} recipients)")
        print(f"  ✅ Action:     {analysis['action_display']}")

        if analysis['draft'] and analysis['draft'].get('subject'):
            print(f"\n  📝 Draft Subject: {analysis['draft']['subject']}")
            print(f"  Draft Preview: {analysis['draft']['body'][:150]}...")

    # Save results
    output_file = OUTPUT_DIR / f"analysis-{datetime.now().strftime('%Y%m%d-%H%M%S')}.json"
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)

    print(f"\n{'=' * 70}")
    print(f"  SUMMARY")
    print(f"{'=' * 70}")
    print(f"  Total emails analyzed: {len(results)}")
    print(f"  Urgent:  {sum(1 for r in results if r['priority']['level'] == 'urgent')}")
    print(f"  High:    {sum(1 for r in results if r['priority']['level'] == 'high')}")
    print(f"  Reply-All needed: {sum(1 for r in results if r['reply_analysis']['reply_all'])}")
    print(f"\n  Results saved to: {output_file}")
    print(f"{'=' * 70}")

    return results


if __name__ == "__main__":
    if "--demo" in sys.argv or len(sys.argv) == 1:
        run_demo()
    elif "--inbox" in sys.argv:
        limit = int(sys.argv[sys.argv.index("--inbox") + 1]) if "--inbox" in sys.argv and len(sys.argv) > sys.argv.index("--inbox") + 1 else 10
        result = process_inbox(limit)
        print(json.dumps(result, indent=2))
    elif "--analyze" in sys.argv:
        # Read email JSON from stdin
        email_data = json.load(sys.stdin)
        analysis = analyze_email(email_data)
        print(json.dumps(analysis, indent=2))
    else:
        print("Usage:")
        print("  python3 email-intelligence.py --demo          Run demo with sample emails")
        print("  python3 email-intelligence.py --inbox [N]     Process N recent emails")
        print("  python3 email-intelligence.py --analyze        Analyze email from stdin JSON")
