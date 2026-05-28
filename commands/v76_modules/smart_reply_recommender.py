#!/usr/bin/env python3
"""
V76 – Smart Reply Recommendation Engine

Analyzes an email and recommends 3 pre-written reply options
(short / medium / full), ranked by predicted effectiveness
for the detected sender type and conversation stage.

Each recommendation includes:
  - Tone / approach
  - Reply-all guidance
  - Subject line reconstruction
  - Personalized body template
  - Estimated send time / engagement score
"""

import re
from typing import Dict, List, Optional, Tuple

# ── Sender Profile Heuristics ────────────────────────────────────────────────

SENDER_TYPES = {
    "executive": {
        "indicators": [
            "ceo", "cto", "cfo", "coo", "chief", "president", "vp ", "vice president",
            "director of", "head of", "partner", "founder", "managing director",
            "sVP", "EVP", "SVP"
        ],
        "tone": "concise_executive",
        "reply_length": "short",
        "reply_all": False,
        "urgency_weight": 1.5,
        "detail_level": "minimal",
    },
    "procurement": {
        "indicators": [
            "procurement", "purchasing", "buyer", "vendor", "sourcing",
            "supply chain manager", "contract specialist", "category manager",
            "procurement manager", "supply manager"
        ],
        "tone": "professional_detailed",
        "reply_length": "full",
        "reply_all": False,
        "urgency_weight": 1.2,
        "detail_level": "high",
    },
    "technical": {
        "indicators": [
            "engineer", "developer", "architect", "devops", "sre", "dba",
            "security analyst", "infrastructure", "backend", "frontend",
            "full stack", "software engineer", "site reliability", "platform"
        ],
        "tone": "technical_precise",
        "reply_length": "medium",
        "reply_all": True,
        "urgency_weight": 1.0,
        "detail_level": "high",
    },
    "marketing": {
        "indicators": [
            "marketing", "growth", "brand", "content", "demand generation",
            "campaign manager", "seo specialist", "marketing manager",
            "acquisition", "engagement", "product marketing"
        ],
        "tone": "friendly_enthusiastic",
        "reply_length": "medium",
        "reply_all": False,
        "urgency_weight": 1.0,
        "detail_level": "medium",
    },
    "hr": {
        "indicators": [
            "human resources", "hr ", " hr", "people operations", "talent",
            "recruiter", "hiring", "people team", "culture", "hr manager",
            "people partner", "staffing"
        ],
        "tone": "warm_professional",
        "reply_length": "medium",
        "reply_all": True,
        "urgency_weight": 1.3,
        "detail_level": "medium",
    },
    "legal": {
        "indicators": [
            "legal", "counsel", "compliance", "contract", "jurist", "attorney",
            "paralegal", "general counsel", "legal affairs", "gdpr", "privacy"
        ],
        "tone": "formal_precise",
        "reply_length": "full",
        "reply_all": False,
        "urgency_weight": 1.8,
        "detail_level": "exhaustive",
    },
    "finance": {
        "indicators": [
            "finance", "accounting", "accounts payable", "accounts receivable",
            "controller", "treasury", "financial analyst", "cfo", "billing",
            "invoice", "payment", "accounts", "bookkeeping"
        ],
        "tone": "professional_financial",
        "reply_length": "full",
        "reply_all": False,
        "urgency_weight": 1.4,
        "detail_level": "high",
    },
    "general": {
        "indicators": [],
        "tone": "professional_friendly",
        "reply_length": "medium",
        "reply_all": False,
        "urgency_weight": 1.0,
        "detail_level": "standard",
    }
}

TONE_TEMPLATES = {
    "concise_executive": {
        "greeting": "Hi {name},",
        "opening": "Happy to help. Here is the summary:",
        "body_template": "{key_point}",
        "closing": "Let me know if you need anything else.",
        "signature": "Best,\n{agent_name}\nZion Tech Group\n+1 302 464 0950",
        "max_lines": 5,
    },
    "professional_detailed": {
        "greeting": "Dear {name},",
        "opening": "Thank you for reaching out. Please find the details below:",
        "body_template": "{key_point}\n\nAdditional Information:\n{secondary_point}",
        "closing": "Please do not hesitate to contact us if you have further questions.",
        "signature": "Best regards,\n{agent_name}\nZion Tech Group\n📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com",
        "max_lines": 15,
    },
    "technical_precise": {
        "greeting": "Hi {name},",
        "opening": "Good question. Here is the technical breakdown:",
        "body_template": "1. {point_a}\n2. {point_b}\n3. {point_c}",
        "closing": "Let me know if you need additional technical details.",
        "signature": "Best regards,\n{agent_name}\nZion Tech Group — Technical Team\n+1 302 464 0950",
        "max_lines": 12,
    },
    "friendly_enthusiastic": {
        "greeting": "Hi {name}!",
        "opening": "Great to hear from you! Here's what I can share:",
        "body_template": "{key_point} — happy to discuss further!",
        "closing": "Looking forward to hearing from you!",
        "signature": "Cheers,\n{agent_name}\nZion Tech Group\n📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com",
        "max_lines": 8,
    },
    "warm_professional": {
        "greeting": "Hi {name},",
        "opening": "Thank you for reaching out. I am happy to assist:",
        "body_template": "{key_point}",
        "closing": "Please let me know if there is anything else I can help with.",
        "signature": "Warm regards,\n{agent_name}\nZion Tech Group\n📞 +1 302 464 0950",
        "max_lines": 10,
    },
    "formal_precise": {
        "greeting": "Dear {name},",
        "opening": "In response to your inquiry, please see our formal response below:",
        "body_template": "Regarding: {topic}\n\n{key_point}\n\nThis communication is intended solely for the named recipient.",
        "closing": "We remain available to provide further clarification.",
        "signature": "Sincerely,\n{agent_name}\nZion Tech Group\n📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n364 E Main St STE 1008, Middletown DE 19709",
        "max_lines": 20,
    },
    "professional_financial": {
        "greeting": "Dear {name},",
        "opening": "Thank you for your inquiry. Please find our response below:",
        "body_template": "{key_point}\n\nFor billing and payment matters, our finance team can be reached at kleber@ziontechgroup.com.",
        "closing": "We appreciate your prompt attention to this matter.",
        "signature": "Best regards,\n{agent_name}\nZion Tech Group — Finance & Accounting\n📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com",
        "max_lines": 15,
    },
    "professional_friendly": {
        "greeting": "Hi {name},",
        "opening": "Thank you for reaching out! Here is what I found:",
        "body_template": "{key_point}",
        "closing": "Let me know if you have any other questions!",
        "signature": "Best regards,\n{agent_name}\nZion Tech Group\n📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com",
        "max_lines": 10,
    }
}

REPLY_VARIANTS = {
    "short": {
        "name": "📝 Brief Reply",
        "description": "1-3 sentence concise response — ideal for quick questions or acknowledgments",
        "sections": ["greeting", "opening", "body_template", "closing", "signature"],
        "urgency_tags": ["quick answer", "acknowledgment", "confirmation", "scheduling"],
    },
    "medium": {
        "name": "📋 Standard Reply",
        "description": "Balanced response with key information, context, and next steps — most common use case",
        "sections": ["greeting", "opening", "body_template", "closing", "signature"],
        "urgency_tags": ["detailed response", "follow-up", "explanation", "proposal"],
    },
    "full": {
        "name": "📄 Comprehensive Reply",
        "description": "Complete response with full details, alternatives, and supporting resources — for complex inquiries",
        "sections": ["greeting", "opening", "body_template", "secondary_points", "closing", "signature"],
        "urgency_tags": ["RFP/RFI", "contract review", "integration query", "enterprise pricing"],
    }
}

def detect_sender_type(email_body: str, sender_name: Optional[str] = None) -> Tuple[str, float]:
    """
    Detect sender category from email body and name heuristics.
    Returns (sender_type, confidence).
    """
    combined = f"{email_body} {sender_name or ''}".lower()
    
    scores: Dict[str, float] = {}
    for stype, cfg in SENDER_TYPES.items():
        if stype == "general":
            continue
        score = 0.0
        for indicator in cfg["indicators"]:
            if indicator.lower() in combined:
                score += 1.0
        scores[stype] = score
    
    if not scores or max(scores.values()) == 0:
        return ("general", 0.6)
    
    best_type = max(scores, key=scores.get)
    confidence = min(0.95, 0.5 + scores[best_type] * 0.15)
    return (best_type, confidence)

def score_reply_effectiveness(
    sender_type: str,
    reply_length: str,
    has_attachments: bool,
    is_reply_all: bool,
    topic_complexity: str,
) -> Dict:
    """
    Score a reply recommendation for predicted effectiveness.
    Returns dict with overall_score, strengths, weaknesses.
    """
    cfg = SENDER_TYPES.get(sender_type, SENDER_TYPES["general"])
    
    score = 70.0
    strengths = []
    weaknesses = []
    
    if reply_length == cfg["reply_length"]:
        score += 10
        strengths.append(f"Length matches {sender_type} profile")
    elif reply_length == "short" and cfg["reply_length"] in ("short", "medium"):
        score += 5
        strengths.append("Concise response appropriate for sender type")
    else:
        score -= 5
        weaknesses.append(f"Recommended length '{reply_length}' differs from optimal '{cfg['reply_length']}' for {sender_type}")
    
    if is_reply_all == cfg["reply_all"]:
        score += 8
        strengths.append(f"Reply-all matches {sender_type} protocol")
    else:
        note = "not reply-all" if is_reply_all else "reply-all"
        weaknesses.append(f"Reply-all ({is_reply_all}) differs from typical {sender_type} behavior")
    
    if has_attachments and topic_complexity in ("high", "enterprise"):
        score += 5
        strengths.append("Attachments appropriate for complex topic")
    
    if cfg["urgency_weight"] >= 1.4:
        score += 5
        strengths.append(f"High-urgency sender type ({sender_type}) flagged")
    
    # Clamp
    score = max(0, min(100, score))
    return {
        "overall_score": score,
        "strengths": strengths,
        "weaknesses": weaknesses,
        "urgency_flag": cfg["urgency_weight"] >= 1.4,
    }

def generate_reply_options(
    topic: str,
    key_point: str,
    secondary_point: Optional[str] = None,
    sender_name: Optional[str] = None,
    agent_name: str = "Kleber",
    topic_complexity: str = "medium",
    is_reply_all: bool = False,
    has_attachments: bool = False,
) -> Dict:
    """
    Generate 3 reply options (short, medium, full) for a given email context.
    """
    sender_type, stype_conf = detect_sender_type(key_point + " " + topic, sender_name)
    tone_cfg = TONE_TEMPLATES.get(cfg["tone"] if (cfg := SENDER_TYPES.get(sender_type)) else "professional_friendly")
    cfg = SENDER_TYPES[sender_type]
    
    options = {}
    
    for variant_key, variant_cfg in REPLY_VARIANTS.items():
        tmpl = TONE_TEMPLATES.get(cfg["tone"], TONE_TEMPLATES["professional_friendly"])
        
        # Build body content
        body = tmpl["body_template"].replace("{key_point}", key_point)
        if secondary_point and variant_key in ("medium", "full"):
            body += f"\n\nAdditional Details:\n{secondary_point}"
        
        # Greeting
        greeting = tmpl["greeting"].replace("{name}", sender_name or "there")
        
        # Signature
        sig = tmpl["signature"].replace("{agent_name}", agent_name)
        
        reply_body = f"{greeting}\n\n{tmpl['opening']}\n\n{body}\n\n{tmpl['closing']}\n\n{sig}"
        
        # Truncate to max lines if needed
        lines = reply_body.split('\n')
        max_l = tmpl.get("max_lines", 10)
        if len(lines) > max_l:
            lines = lines[:max_l] + ["..."]
        
        effect = score_reply_effectiveness(
            sender_type, variant_key, has_attachments, is_reply_all, topic_complexity
        )
        
        options[variant_key] = {
            "label": variant_cfg["name"],
            "description": variant_cfg["description"],
            "reply_body": '\n'.join(lines),
            "reply_all": cfg["reply_all"],
            "effectiveness": effect,
            "sender_type": sender_type,
            "sender_type_confidence": stype_conf,
        }
    
    # Sort by effectiveness score
    ranked = sorted(options.items(), key=lambda x: x[1]["effectiveness"]["overall_score"], reverse=True)
    
    return {
        "topic": topic,
        "sender_type": sender_type,
        "sender_type_confidence": stype_conf,
        "recommended": ranked[0][0],  # best option key
        "ranked_options": [(k, v["effectiveness"]["overall_score"]) for k, v in ranked],
        "all_options": options,
    }

if __name__ == "__main__":
    # ── Test Suite ───────────────────────────────────────────────────────────
    test_cases = [
        {
            "name": "Executive pricing question",
            "topic": "Enterprise pricing for Compliance Evidence Collector",
            "key_point": "We need the enterprise pricing for up to 500 employees, please send a formal quote.",
            "secondary_point": "Timeline: Q2 deployment. Primary decision maker is our CFO.",
            "sender_name": "Sarah Johnson",
            "topic_complexity": "high",
        },
        {
            "name": "Technical integration question",
            "topic": "API integration specs for Webhook Failover Router",
            "key_point": "Can you share the REST API endpoints and webhook payload schema for the failover router? Need to integrate with our backend.",
            "sender_name": "Mike Chen",
            "topic_complexity": "medium",
        },
        {
            "name": "Procurement vendor inquiry",
            "topic": "Contract terms for IT Asset Lifecycle Manager",
            "key_point": "We need the contract terms, SLA details, and vendor onboarding process for the IT Asset Lifecycle Manager.",
            "secondary_point": "Our procurement team requires 90-day payment terms and vendor compliance docs.",
            "sender_name": "Linda Martinez",
            "topic_complexity": "high",
        },
    ]

    print("=" * 70)
    print("V76 — Smart Reply Recommendation Engine — Test Suite")
    print("=" * 70)

    for tc in test_cases:
        result = generate_reply_options(
            topic=tc["topic"],
            key_point=tc["key_point"],
            secondary_point=tc.get("secondary_point"),
            sender_name=tc.get("sender_name"),
            topic_complexity=tc.get("topic_complexity", "medium"),
        )
        
        print(f"\n📧 [{tc['name']}]")
        print(f"   Detected sender type: {result['sender_type']} "
              f"(conf={result['sender_type_confidence']:.0%})")
        print(f"   Ranked options: {result['ranked_options']}")
        print(f"   Recommended: {result['recommended']}")
        
        for opt_key, opt_data in result["all_options"].items():
            eff = opt_data["effectiveness"]
            marker = "★" if opt_key == result["recommended"] else " "
            print(f"   {marker} [{opt_key.upper()}] score={eff['overall_score']} "
                  f"| reply_all={opt_data['reply_all']}")
            if eff['weaknesses']:
                print(f"     ⚠ {eff['weaknesses'][0]}")

    print("\n" + "=" * 70)