#!/usr/bin/env python3
"""Wave 153 - 15 new real, useful, diversified services for Zion Tech Group."""
import json, os, re

SERVICES_JSON = 'app/data/servicesData.json'
SERVICES_TS = 'app/data/servicesData.ts'

CONTACT = {
    "email": "kleber@ziontechgroup.com",
    "phone": "+1 302 464 0950",
    "address": "364 E Main St STE 1008, Middletown, DE 19709"
}

NEW_SERVICES = [
    # ===== MICRO-SAAS (5) =====
    {
        "id": "micro-saas-ai-sales-coach",
        "title": "AI Sales Coach & Pipeline Optimizer",
        "category": "ai",
        "industry": "sales",
        "icon": "🏆",
        "popular": True,
        "pricing": {"basic": "$149/mo", "pro": "$399/mo", "enterprise": "Custom"},
        "description": "AI-powered sales coaching that analyzes calls, emails, and pipeline data to recommend winning strategies. Real-time deal scoring, next-best-action suggestions, and automated follow-ups.",
        "features": [
            "AI call analysis with talk-to-listen ratio scoring",
            "Deal health scoring with win probability",
            "Next-best-action recommendations per opportunity",
            "Automated follow-up email sequences",
            "Sales playbook enforcement and coaching",
            "Integration with Salesforce, HubSpot, Pipedrive",
            "Revenue forecasting with pipeline analytics",
            "Rep performance benchmarking and leaderboards"
        ],
        "benefits": [
            "Increase win rates by 25-35%",
            "Shorten sales cycles by 20%",
            "Coach reps with AI instead of manual review",
            "Forecast revenue with 90%+ accuracy"
        ]
    },
    {
        "id": "micro-saas-ai-content-planner",
        "title": "AI Content Strategy & SEO Planner",
        "category": "ai",
        "industry": "marketing",
        "icon": "✍️",
        "popular": True,
        "pricing": {"basic": "$79/mo", "pro": "$249/mo", "enterprise": "Custom"},
        "description": "AI-driven content strategy platform that identifies content gaps, generates topic clusters, and optimizes for SEO. Includes AI writing assistant, content calendar, and performance tracking.",
        "features": [
            "AI content gap analysis vs competitors",
            "Topic cluster and pillar page planning",
            "AI writing assistant with brand voice",
            "SEO optimization scoring in real-time",
            "Content calendar with team collaboration",
            "Performance tracking and ROI attribution",
            "Integration with WordPress, Webflow, HubSpot",
            "Content refresh recommendations based on rankings"
        ],
        "benefits": [
            "Rank for 3x more keywords in 6 months",
            "Create content 5x faster with AI",
            "Align content strategy with revenue goals",
            "Automate content performance reporting"
        ]
    },
    {
        "id": "micro-saas-ai-inventory-manager",
        "title": "AI Inventory & Supply Chain Manager",
        "category": "ai",
        "industry": "supply-chain",
        "icon": "📦",
        "popular": False,
        "pricing": {"basic": "$199/mo", "pro": "$549/mo", "enterprise": "Custom"},
        "description": "AI-powered inventory management that predicts demand, optimizes stock levels, and automates reordering. Reduces carrying costs by 30% while preventing stockouts.",
        "features": [
            "AI demand forecasting with seasonality",
            "Automatic reorder point calculation",
            "Multi-warehouse inventory optimization",
            "Supplier lead time tracking and alerts",
            "Dead stock identification and liquidation",
            "Integration with Shopify, WooCommerce, QuickBooks",
            "Barcode and QR code scanning mobile app",
            "Real-time inventory dashboard and alerts"
        ],
        "benefits": [
            "Reduce inventory costs by 30%",
            "Eliminate stockouts with AI predictions",
            "Automate reordering and save 10+ hours/week",
            "Optimize warehouse space utilization"
        ]
    },
    {
        "id": "micro-saas-ai-customer-onboarding",
        "title": "AI Customer Onboarding & Success Platform",
        "category": "ai",
        "industry": "customer-success",
        "icon": "🚀",
        "popular": False,
        "pricing": {"basic": "$299/mo", "pro": "$799/mo", "enterprise": "Custom"},
        "description": "Automate and optimize customer onboarding with AI-guided workflows, in-app walkthroughs, and health scoring. Reduce time-to-value by 50% and improve activation rates.",
        "features": [
            "AI-generated onboarding plans per customer segment",
            "In-app guided walkthroughs and tooltips",
            "Automated email and in-app messaging sequences",
            "Customer health scoring with risk alerts",
            "Time-to-value tracking and optimization",
            "Integration with Intercom, Pendo, Gainsight",
            "NPS and CSAT surveys triggered by milestones",
            "Customer success playbooks and automation"
        ],
        "benefits": [
            "Reduce time-to-value by 50%",
            "Increase activation rates by 40%",
            "Scale customer success without adding headcount",
            "Identify at-risk customers before they churn"
        ]
    },
    {
        "id": "micro-saas-ai-booking-engine",
        "title": "AI Smart Booking & Scheduling Engine",
        "category": "ai",
        "industry": "productivity",
        "icon": "📅",
        "popular": False,
        "pricing": {"basic": "$59/mo", "pro": "$179/mo", "enterprise": "Custom"},
        "description": "Intelligent booking system that optimizes schedules, reduces no-shows, and maximizes utilization. AI learns booking patterns and suggests optimal availability windows.",
        "features": [
            "AI-optimized availability suggestions",
            "Smart scheduling with buffer time optimization",
            "Automated reminders via SMS, email, WhatsApp",
            "No-show prediction and overbooking protection",
            "Multi-timezone support with automatic conversion",
            "Payment collection at booking time",
            "Integration with Google Calendar, Outlook, Calendly",
            "Analytics on booking patterns and utilization"
        ],
        "benefits": [
            "Reduce no-shows by 80%",
            "Maximize schedule utilization by 25%",
            "Eliminate back-and-forth scheduling emails",
            "Collect payments automatically at booking"
        ]
    },
    # ===== IT SERVICES (5) =====
    {
        "id": "it-zero-trust-security",
        "title": "IT Zero Trust Security Architecture",
        "category": "security",
        "industry": "technology",
        "icon": "🔒",
        "popular": True,
        "pricing": {"basic": "$5,000/mo", "pro": "$12,000/mo", "enterprise": "Custom"},
        "description": "Implement zero trust security architecture across your organization. Never trust, always verify — with identity-based access, micro-segmentation, and continuous monitoring.",
        "features": [
            "Zero trust architecture design and roadmap",
            "Identity-based access control (beyond VPN)",
            "Micro-segmentation of network resources",
            "Continuous device and user verification",
            "Least-privilege access policy enforcement",
            "Integration with existing IAM and SIEM tools",
            "Phased implementation with minimal disruption",
            "Compliance mapping (SOC 2, HIPAA, PCI, NIST)"
        ],
        "benefits": [
            "Eliminate lateral movement by attackers",
            "Reduce breach impact by 90%",
            "Meet compliance requirements for access control",
            "Enable secure remote work without VPN"
        ]
    },
    {
        "id": "it-data-governance",
        "title": "IT Data Governance & Privacy Compliance",
        "category": "it",
        "industry": "technology",
        "icon": "📋",
        "popular": True,
        "pricing": {"basic": "$3,500/mo", "pro": "$8,000/mo", "enterprise": "Custom"},
        "description": "Comprehensive data governance framework including data cataloging, lineage tracking, quality management, and privacy compliance for GDPR, CCPA, and HIPAA.",
        "features": [
            "Automated data catalog and classification",
            "Data lineage tracking across systems",
            "Data quality monitoring and remediation",
            "Privacy impact assessments (DPIA)",
            "Consent management and data subject requests",
            "Policy enforcement and access controls",
            "Integration with Snowflake, Databricks, BigQuery",
            "Executive dashboards and compliance reporting"
        ],
        "benefits": [
            "Achieve GDPR, CCPA, and HIPAA compliance",
            "Automate data subject access requests",
            "Improve data quality by 40%",
            "Reduce data breach risk with proper classification"
        ]
    },
    {
        "id": "it-saas-backup-recovery",
        "title": "IT SaaS Backup & Disaster Recovery",
        "category": "it",
        "industry": "technology",
        "icon": "💾",
        "popular": False,
        "pricing": {"basic": "$500/mo", "pro": "$1,500/mo", "enterprise": "Custom"},
        "description": "Protect your SaaS data with automated backups and one-click recovery for Microsoft 365, Google Workspace, Salesforce, and 50+ SaaS applications. RPO under 1 hour.",
        "features": [
            "Automated daily backups for 50+ SaaS apps",
            "One-click granular recovery (files, emails, records)",
            "Point-in-time recovery with unlimited retention",
            "Cross-account and cross-region backup copies",
            "Ransomware detection and alerting",
            "Compliance reporting and audit logs",
            "Self-service recovery portal for end users",
            "24/7 monitoring and support"
        ],
        "benefits": [
            "Protect against SaaS data loss and ransomware",
            "Meet compliance backup requirements",
            "Recover data in minutes, not days",
            "Eliminate manual backup processes"
        ]
    },
    {
        "id": "it-edge-computing",
        "title": "IT Edge Computing & IoT Infrastructure",
        "category": "it",
        "industry": "technology",
        "icon": "📡",
        "popular": False,
        "pricing": {"basic": "$4,000/mo", "pro": "$10,000/mo", "enterprise": "Custom"},
        "description": "Design and deploy edge computing infrastructure for low-latency applications. From IoT gateways to edge data centers, with centralized management and security.",
        "features": [
            "Edge architecture design and deployment",
            "IoT device management and monitoring",
            "Edge-to-cloud data synchronization",
            "Low-latency application hosting",
            "Edge security and access control",
            "Centralized management dashboard",
            "Integration with AWS IoT, Azure IoT, GCP IoT",
            "Predictive maintenance for edge hardware"
        ],
        "benefits": [
            "Reduce latency to under 10ms",
            "Process data locally for real-time decisions",
            "Reduce cloud bandwidth costs by 60%",
            "Enable offline operation for critical systems"
        ]
    },
    {
        "id": "it-itam-asset-management",
        "title": "IT Asset Management (ITAM) & Lifecycle",
        "category": "it",
        "industry": "technology",
        "icon": "🖥️",
        "popular": False,
        "pricing": {"basic": "$1,500/mo", "pro": "$4,000/mo", "enterprise": "Custom"},
        "description": "Complete IT asset management from procurement to disposal. Track hardware, software licenses, and cloud resources. Optimize costs and ensure compliance.",
        "features": [
            "Automated hardware and software discovery",
            "Software license management and optimization",
            "Cloud resource tracking and cost optimization",
            "Asset lifecycle management (procure to retire)",
            "Contract and warranty tracking",
            "Compliance auditing and reporting",
            "Integration with ServiceNow, Jira, SCCM",
            "Executive dashboards and cost analytics"
        ],
        "benefits": [
            "Reduce software license costs by 25%",
            "Eliminate unused hardware and cloud waste",
            "Pass software audits with confidence",
            "Optimize IT spend with data-driven decisions"
        ]
    },
    # ===== AI SERVICES (5) =====
    {
        "id": "ai-conversational-commerce",
        "title": "AI Conversational Commerce Platform",
        "category": "ai",
        "industry": "e-commerce",
        "icon": "🛍️",
        "popular": True,
        "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
        "description": "AI-powered shopping assistant that engages customers via chat, voice, and social media. Personalized product recommendations, order tracking, and automated support.",
        "features": [
            "AI shopping assistant for web, mobile, and social",
            "Personalized product recommendations in conversation",
            "Order tracking and returns via chat",
            "Integration with Shopify, Magento, WooCommerce",
            "Multi-language support (50+ languages)",
            "Abandoned cart recovery via messaging",
            "Customer preference learning and profiling",
            "Analytics on conversion and engagement"
        ],
        "benefits": [
            "Increase conversion rates by 35%",
            "Reduce support tickets by 50%",
            "Deliver 1:1 shopping experience at scale",
            "Recover 20% of abandoned carts automatically"
        ]
    },
    {
        "id": "ai-energy-optimization",
        "title": "AI Energy Management & Carbon Tracker",
        "category": "ai",
        "industry": "energy",
        "icon": "⚡",
        "popular": False,
        "pricing": {"basic": "$1,999/mo", "pro": "$4,999/mo", "enterprise": "Custom"},
        "description": "AI-powered energy management that reduces consumption by 20-40% and tracks carbon footprint in real-time. Integrates with building management systems and IoT sensors.",
        "features": [
            "Real-time energy consumption monitoring",
            "AI optimization of HVAC, lighting, and equipment",
            "Carbon footprint tracking and reporting",
            "Demand response and peak shaving",
            "Integration with BMS, SCADA, and IoT sensors",
            "Sustainability reporting (GRI, CDP, TCFD)",
            "Renewable energy optimization",
            "Cost savings tracking and ROI reporting"
        ],
        "benefits": [
            "Reduce energy costs by 20-40%",
            "Track and report carbon emissions accurately",
            "Optimize renewable energy usage",
            "Meet ESG reporting requirements"
        ]
    },
    {
        "id": "ai-video-analytics",
        "title": "AI Video Analytics & Content Intelligence",
        "category": "ai",
        "industry": "media",
        "icon": "🎬",
        "popular": False,
        "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
        "description": "AI-powered video analytics for security, retail, and content. Object detection, facial recognition, behavior analysis, and automated content tagging at scale.",
        "features": [
            "Real-time object and person detection",
            "Facial recognition with privacy controls",
            "Behavior analysis and anomaly detection",
            "Automated video content tagging and search",
            "Crowd counting and flow analysis",
            "Integration with CCTV, NVR, and video platforms",
            "Edge processing for low-latency analysis",
            "Compliance with privacy regulations (GDPR, BIPA)"
        ],
        "benefits": [
            "Detect security threats in real-time",
            "Analyze customer behavior in retail spaces",
            "Search hours of video in seconds",
            "Automate content moderation at scale"
        ]
    },
    {
        "id": "ai-cyber-threat-hunting",
        "title": "AI Cyber Threat Hunting & Incident Response",
        "category": "security",
        "industry": "technology",
        "icon": "🛡️",
        "popular": True,
        "pricing": {"basic": "$3,999/mo", "pro": "$9,999/mo", "enterprise": "Custom"},
        "description": "Proactive threat hunting powered by AI. Our analysts and AI work together to find hidden threats, investigate incidents, and respond in under 15 minutes.",
        "features": [
            "AI-powered threat hunting 24/7/365",
            "Behavioral analytics and anomaly detection",
            "Automated incident triage and response",
            "Digital forensics and malware analysis",
            "Threat intelligence integration",
            "Incident response playbooks and automation",
            "Post-incident reporting and recommendations",
            "Integration with SIEM, EDR, and SOAR platforms"
        ],
        "benefits": [
            "Find threats that evade traditional security",
            "Respond to incidents in under 15 minutes",
            "Reduce breach impact with rapid containment",
            "Meet cyber insurance requirements"
        ]
    },
    {
        "id": "ai-legal-research-assistant",
        "title": "AI Legal Research & Case Analysis",
        "category": "ai",
        "industry": "legal-tech",
        "icon": "⚖️",
        "popular": False,
        "pricing": {"basic": "$599/mo", "pro": "$1,799/mo", "enterprise": "Custom"},
        "description": "AI legal research assistant that analyzes case law, statutes, and regulations in seconds. Generate legal memos, find relevant precedents, and predict case outcomes.",
        "features": [
            "Natural language legal research across jurisdictions",
            "Case law analysis with relevance scoring",
            "Automated legal memo generation",
            "Contract clause risk analysis",
            "Regulatory change monitoring",
            "Case outcome prediction based on historical data",
            "Integration with Westlaw, LexisNexis, Clio",
            "Citation checking and brief analysis"
        ],
        "benefits": [
            "Research 10x faster than manual methods",
            "Find relevant precedents others miss",
            "Reduce legal research costs by 70%",
            "Predict case outcomes with 85% accuracy"
        ]
    },
]

def load_json():
    with open(SERVICES_JSON, 'r') as f:
        return json.load(f)

def save_json(data):
    with open(SERVICES_JSON, 'w') as f:
        json.dump(data, f, indent=2)

def make_ts_entry(s):
    return f"""  {{
    id: '{s['id']}',
    title: '{s['title']}',
    description: '{s['description']}',
    features: {json.dumps(s['features'])},
    benefits: {json.dumps(s['benefits'])},
    pricing: {{ basic: '{s['pricing']['basic']}', pro: '{s['pricing']['pro']}', enterprise: '{s['pricing']['enterprise']}' }},
    contactInfo: {{ website: '/services/{s['id']}', email: '{CONTACT['email']}', phone: '{CONTACT['phone']}' }},
    icon: '{s['icon']}',
    href: '/services/{s['id']}',
    popular: {str(s['popular']).lower()},
    category: '{s['category']}',
    industry: '{s['industry']}',
  }}"""

def insert_into_ts(filepath, new_entries, array_name, closing_marker):
    """Insert new entries into a specific service array before its closing ];"""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find the array
    array_start = content.find(f'export const {array_name}')
    if array_start == -1:
        print(f"  ❌ Array {array_name} not found")
        return False
    
    # Find the closing ]; after this array
    close_pos = content.find(closing_marker, array_start)
    if close_pos == -1:
        # Fallback: find ]; after array start
        close_pos = content.find('];', array_start)
        if close_pos == -1:
            print(f"  ❌ Closing not found for {array_name}")
            return False
    
    entries_str = ',\n' + ',\n'.join(make_ts_entry(e) for e in new_entries)
    content = content[:close_pos] + entries_str + '\n' + content[close_pos:]
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"  ✅ {array_name}: {len(new_entries)} entries")
    return True

def main():
    # Load and update JSON
    data = load_json()
    existing_ids = {s['id'] for s in data}
    
    added = 0
    skipped = 0
    new_entries = []
    
    for svc in NEW_SERVICES:
        if svc['id'] in existing_ids:
            print(f"  SKIP: {svc['id']}")
            skipped += 1
            continue
        
        svc['contactInfo'] = {
            "website": f"/services/{svc['id']}",
            "email": CONTACT['email'],
            "phone": CONTACT['phone'],
            "address": CONTACT['address']
        }
        data.append(svc)
        new_entries.append(svc)
        added += 1
        print(f"  ADD: {svc['id']}")
    
    save_json(data)
    print(f"\nJSON: {added} added, {skipped} skipped, total: {len(data)}")
    
    if not new_entries:
        print("TS: No new entries to add")
        return
    
    # Categorize new entries by their category
    ai_entries = [e for e in new_entries if e['category'] == 'ai']
    it_entries = [e for e in new_entries if e['category'] == 'it']
    sec_entries = [e for e in new_entries if e['category'] == 'security']
    
    # Insert into appropriate arrays in TS
    # aiServices array ends with }]; before export const itServices
    if ai_entries:
        insert_into_ts(SERVICES_TS, ai_entries, 'aiServices', '];\n\nexport const itServices')
    
    # itServices array ends with }]; before export const cloudServices
    if it_entries:
        insert_into_ts(SERVICES_TS, it_entries, 'itServices', '];\n\nexport const cloudServices')
    
    # securityServices array ends with }]; before export const dataServices
    if sec_entries:
        insert_into_ts(SERVICES_TS, sec_entries, 'securityServices', '];\n\nexport const dataServices')

if __name__ == '__main__':
    main()
