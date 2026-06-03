#!/usr/bin/env python3
"""Add Wave 149 services: real micro-SaaS, IT, and AI solutions."""
import json, os

SERVICES_FILE = os.path.join(os.path.dirname(__file__), '..', 'app', 'data', 'servicesData.json')
CONTACT = {"website": "https://ziontechgroup.com", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"}

new_services = [
    # === MICRO-SAAS (5) ===
    {
        "id": "micro-saas-ai-social-listener",
        "title": "Micro-SaaS AI Social Media Listener & Engagement",
        "description": "AI-powered social listening platform that monitors brand mentions, competitor activity, and industry trends across 20+ platforms. Auto-responds to common queries and escalates issues.",
        "features": ["Real-time brand mention monitoring across 20+ platforms", "AI sentiment analysis with emotion detection", "Auto-response for common queries and FAQs", "Competitor tracking and benchmarking", "Influencer identification and engagement tracking", "Crisis alert system for negative sentiment spikes"],
        "benefits": ["Respond to customers 10x faster", "Catch PR crises before they escalate", "Identify sales opportunities from social signals", "Benchmark against competitors automatically"],
        "pricing": {"basic": "$79/mo", "pro": "$199/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "👂", "href": "/services/micro-saas-ai-social-listener",
        "popular": True, "category": "micro-saas", "industry": "marketing", "stage": "published"
    },
    {
        "id": "micro-saas-ai-expense-manager",
        "title": "Micro-SaaS AI Expense Manager & Approval Workflow",
        "description": "Smart expense management with AI receipt scanning, automatic categorization, policy enforcement, and multi-level approval workflows. Integrates with accounting systems.",
        "features": ["AI receipt scanning with OCR + ML", "Automatic expense categorization", "Policy enforcement with violation alerts", "Multi-level approval workflows", "Integration with QuickBooks, Xero, NetSuite", "Real-time spend analytics and budget tracking"],
        "benefits": ["Process expenses 5x faster", "Enforce spend policies automatically", "Reduce expense fraud by 90%", "Real-time visibility into company spend"],
        "pricing": {"basic": "$5/user/mo", "pro": "$12/user/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🧾", "href": "/services/micro-saas-ai-expense-manager",
        "popular": False, "category": "micro-saas", "industry": "fintech", "stage": "published"
    },
    {
        "id": "micro-saas-ai-warranty-tracker",
        "title": "Micro-SaaS AI Warranty & Asset Tracker",
        "description": "Track warranties, service contracts, and asset maintenance schedules with AI-powered reminders and predictive maintenance alerts. Never miss a warranty claim again.",
        "features": ["Warranty registration and tracking", "AI predictive maintenance alerts", "Service contract management", "Automated warranty claim filing", "Asset depreciation tracking", "Integration with procurement and ERP"],
        "benefits": ["Recover 15% more warranty claims", "Avoid unexpected equipment failures", "Optimize maintenance schedules", "Track total cost of ownership"],
        "pricing": {"basic": "$39/mo", "pro": "$99/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🔧", "href": "/services/micro-saas-ai-warranty-tracker",
        "popular": False, "category": "micro-saas", "industry": "operations", "stage": "published"
    },
    {
        "id": "micro-saas-ai-form-builder",
        "title": "Micro-SaaS AI Smart Form Builder & Data Collector",
        "description": "AI-powered form builder that creates optimized forms from natural language descriptions. Includes conditional logic, data validation, and automatic analysis of responses.",
        "features": ["AI form generation from text descriptions", "Smart conditional logic builder", "Real-time response analytics", "Spam detection and prevention", "Integration with 100+ tools via Zapier", "GDPR/CCPA compliant data handling"],
        "benefits": ["Create forms in seconds not hours", "Increase completion rates by 40%", "Auto-analyze open-ended responses", "Ensure compliance automatically"],
        "pricing": {"basic": "$29/mo", "pro": "$79/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "📋", "href": "/services/micro-saas-ai-form-builder",
        "popular": True, "category": "micro-saas", "industry": "productivity", "stage": "published"
    },
    {
        "id": "micro-saas-ai-matching-engine",
        "title": "Micro-SaaS AI Matching & Recommendation Engine",
        "description": "White-label matching engine for any two-sided marketplace. AI-powered compatibility scoring, recommendation algorithms, and fraud detection for marketplace platforms.",
        "features": ["AI compatibility scoring between any entities", "Real-time recommendation engine", "Fraud detection for marketplace abuse", "A/B testing for matching algorithms", "API-first with SDKs for all languages", "Custom matching rule engine"],
        "benefits": ["Increase match quality by 35%", "Reduce marketplace fraud by 80%", "Improve user engagement and retention", "Launch marketplace features in days"],
        "pricing": {"basic": "$199/mo", "pro": "$499/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🔗", "href": "/services/micro-saas-ai-matching-engine",
        "popular": False, "category": "micro-saas", "industry": "marketplace", "stage": "published"
    },
    # === IT SERVICES (5) ===
    {
        "id": "it-network-penetration-testing",
        "title": "IT Network Penetration Testing & Red Team",
        "description": "Comprehensive penetration testing and red team exercises to identify vulnerabilities before attackers do. Includes network, web app, social engineering, and physical security testing.",
        "features": ["Network penetration testing", "Web application security testing", "Social engineering campaigns", "Physical security assessment", "Detailed remediation roadmap", "Retesting after fixes"],
        "benefits": ["Find vulnerabilities before attackers", "Meet compliance requirements (PCI, SOC 2)", "Prioritize remediation by risk", "Reduce breach likelihood by 80%"],
        "pricing": {"basic": "$5,000/test", "pro": "$15,000/test", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🔴", "href": "/services/it-network-penetration-testing",
        "popular": True, "category": "security", "industry": "technology", "stage": "published"
    },
    {
        "id": "it-cloud-migration-factory",
        "title": "IT Cloud Migration Factory",
        "description": "Systematic cloud migration service with assessment, planning, migration, and optimization. Proven methodology for lifting and shifting or re-architecting to cloud-native.",
        "features": ["Application portfolio assessment", "Migration strategy (rehost, refactor, rearchitect)", "Automated migration tooling", "Data migration with zero downtime", "Post-migration optimization", "Knowledge transfer and training"],
        "benefits": ["Migrate 10x faster with automation", "Reduce cloud costs by 40% post-migration", "Zero-downtime migrations for critical apps", "De-risk migration with proven methodology"],
        "pricing": {"basic": "$25,000 project", "pro": "$75,000 project", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "☁️", "href": "/services/it-cloud-migration-factory",
        "popular": True, "category": "it", "industry": "technology", "stage": "published"
    },
    {
        "id": "it-identity-access-management",
        "title": "IT Identity & Access Management (IAM)",
        "description": "Enterprise IAM implementation with SSO, MFA, privileged access management, and identity governance. Centralize identity across cloud and on-prem applications.",
        "features": ["Single Sign-On (SSO) for all applications", "Multi-Factor Authentication (MFA)", "Privileged Access Management (PAM)", "Identity governance and access reviews", "Automated provisioning/deprovisioning", "Integration with 500+ applications"],
        "benefits": ["Eliminate password fatigue and breaches", "Automate compliance access reviews", "Reduce IT helpdesk tickets by 30%", "Enable secure remote work"],
        "pricing": {"basic": "$8/user/mo", "pro": "$15/user/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🔑", "href": "/services/it-identity-access-management",
        "popular": True, "category": "security", "industry": "technology", "stage": "published"
    },
    {
        "id": "it-data-backup-recovery",
        "title": "IT Data Backup & Recovery Service",
        "description": "Comprehensive backup and recovery solution with automated backups, point-in-time recovery, and disaster recovery testing. Protect against ransomware, human error, and hardware failure.",
        "features": ["Automated backup scheduling (hourly to daily)", "Point-in-time recovery for databases", "Immutable backups for ransomware protection", "Automated DR testing without production impact", "Cross-region replication", "Compliance retention policies"],
        "benefits": ["Recover from ransomware in hours not days", "Meet RPO/RTO requirements", "Automated DR testing ensures readiness", "Protect against accidental deletion"],
        "pricing": {"basic": "$500/mo", "pro": "$1,500/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "💾", "href": "/services/it-data-backup-recovery",
        "popular": False, "category": "it", "industry": "technology", "stage": "published"
    },
    {
        "id": "it-vendor-management",
        "title": "IT Vendor Management & Procurement Service",
        "description": "Streamline IT vendor management with vendor assessment, contract negotiation, SLA monitoring, and renewal management. Reduce vendor costs by 15-25% while improving service quality.",
        "features": ["Vendor assessment and scorecarding", "Contract negotiation support", "SLA monitoring and enforcement", "Spend analysis and optimization", "Renewal management and benchmarking", "Risk assessment for critical vendors"],
        "benefits": ["Reduce IT vendor costs by 15-25%", "Ensure SLA compliance with automated monitoring", "Avoid auto-renewal traps", "Data-driven vendor decisions"],
        "pricing": {"basic": "$2,500/mo", "pro": "$5,000/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🤝", "href": "/services/it-vendor-management",
        "popular": False, "category": "it", "industry": "technology", "stage": "published"
    },
    # === AI SERVICES (5) ===
    {
        "id": "ai-medical-imaging-analysis",
        "title": "AI Medical Imaging Analysis Platform",
        "description": "FDA-cleared AI medical imaging analysis for radiology, pathology, and dermatology. Detects anomalies in X-rays, CT scans, MRIs, and skin images with 95%+ accuracy.",
        "features": ["X-ray, CT, MRI anomaly detection", "Dermatological lesion classification", "Pathology slide analysis", "Automated radiology report generation", "Integration with PACS/RIS systems", "FDA 510(k) cleared algorithms"],
        "benefits": ["Detect conditions 30% earlier", "Reduce radiologist workload by 40%", "Improve diagnostic consistency", "FDA-cleared for clinical use"],
        "pricing": {"basic": "$5,000/mo", "pro": "$15,000/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🏥", "href": "/services/ai-medical-imaging-analysis",
        "popular": True, "category": "ai", "industry": "healthcare", "stage": "published"
    },
    {
        "id": "ai-conversational-commerce",
        "title": "AI Conversational Commerce Platform",
        "description": "AI shopping assistant that engages customers in natural conversations to recommend products, answer questions, and complete purchases. Increases conversion by 35%.",
        "features": ["Natural language product recommendations", "Visual search and similarity matching", "Multi-language conversational commerce", "Cart abandonment recovery via chat", "Integration with Shopify, Magento, WooCommerce", "Analytics dashboard with conversion tracking"],
        "benefits": ["Increase conversion by 35%", "Reduce support tickets by 50%", "Personalize every shopping experience", "24/7 automated sales assistant"],
        "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🛍️", "href": "/services/ai-conversational-commerce",
        "popular": True, "category": "ai", "industry": "retail", "stage": "published"
    },
    {
        "id": "ai-predictive-quality-control",
        "title": "AI Predictive Quality Control for Manufacturing",
        "description": "Computer vision AI for automated quality inspection on production lines. Detects defects in real-time with 99.5% accuracy, reducing waste and improving yield.",
        "features": ["Real-time visual defect detection", "Sub-millimeter defect classification", "Production line integration (PLC, SCADA)", "Root cause analysis for defect patterns", "Yield optimization recommendations", "Historical trend analysis"],
        "benefits": ["Detect 99.5% of defects automatically", "Reduce scrap by 30%", "Improve yield by 15%", "Eliminate manual inspection bottlenecks"],
        "pricing": {"basic": "$3,999/mo", "pro": "$9,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "🏭", "href": "/services/ai-predictive-quality-control",
        "popular": True, "category": "ai", "industry": "manufacturing", "stage": "published"
    },
    {
        "id": "ai-smart-document-workflow",
        "title": "AI Smart Document Workflow Automation",
        "description": "End-to-end document workflow automation with AI classification, extraction, routing, and approval. Processes invoices, contracts, forms, and custom documents at scale.",
        "features": ["AI document classification and routing", "Multi-format data extraction (PDF, scan, photo)", "Automated approval workflows", "Exception handling with human-in-the-loop", "Integration with ERP, CRM, and ECM systems", "Full audit trail and compliance logging"],
        "benefits": ["Process documents 20x faster", "Reduce processing costs by 75%", "Eliminate manual data entry errors", "Scale document operations without adding staff"],
        "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "📑", "href": "/services/ai-smart-document-workflow",
        "popular": True, "category": "ai", "industry": "technology", "stage": "published"
    },
    {
        "id": "ai-energy-optimization",
        "title": "AI Energy Optimization & Carbon Tracking",
        "description": "AI-powered energy management for commercial buildings and industrial facilities. Optimizes HVAC, lighting, and equipment scheduling to reduce energy costs by 20-35%.",
        "features": ["Real-time energy consumption monitoring", "AI HVAC optimization with weather forecasting", "Equipment scheduling and load balancing", "Carbon footprint tracking and reporting", "Demand response automation", "Integration with BMS, SCADA, smart meters"],
        "benefits": ["Reduce energy costs by 20-35%", "Lower carbon footprint by 25%", "Automate demand response for rebates", "Meet ESG reporting requirements"],
        "pricing": {"basic": "$1,999/mo", "pro": "$4,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT, "icon": "⚡", "href": "/services/ai-energy-optimization",
        "popular": False, "category": "ai", "industry": "energy", "stage": "published"
    }
]

with open(SERVICES_FILE, 'r') as f:
    existing = json.load(f)

existing_ids = {s['id'] for s in existing}
added = 0
for svc in new_services:
    if svc['id'] not in existing_ids:
        existing.append(svc)
        existing_ids.add(svc['id'])
        added += 1
        print(f"  + {svc['id']}")
    else:
        print(f"  ~ SKIP: {svc['id']}")

with open(SERVICES_FILE, 'w') as f:
    json.dump(existing, f, indent=2)

print(f"\n✅ Added {added} new services. Total: {len(existing)}")
