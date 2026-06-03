#!/usr/bin/env python3
"""Wave 155 - 15 new real, useful, diversified services."""
import json

SERVICES_JSON = 'app/data/servicesData.json'
SERVICES_TS = 'app/data/servicesData.ts'
CONTACT = {"email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950", "address": "364 E Main St STE 1008, Middletown, DE 19709"}

NEW = [
    # ===== MICRO-SAAS (5) =====
    {
        "id": "micro-saas-ai-deal-room",
        "title": "AI Virtual Deal Room & Due Diligence Platform",
        "category": "ai", "industry": "finance", "icon": "🏦", "popular": True,
        "pricing": {"basic": "$999/mo", "pro": "$2,499/mo", "enterprise": "Custom"},
        "description": "Secure virtual deal room with AI-powered document organization, redaction, and due diligence tracking. Accelerate M&A, fundraising, and IPO processes by 50%.",
        "features": ["Secure document sharing with granular permissions", "AI document classification and indexing", "Automatic PII redaction", "Due diligence checklist management", "Q&A workflow with AI-suggested answers", "Watermarking and audit trails", "Integration with DocuSign and Dropbox", "Real-time activity analytics for deal makers"],
        "benefits": ["Accelerate deal timelines by 50%", "Automate document organization and redaction", "Track buyer/investor engagement in real-time", "Bank-grade security with full audit trails"]
    },
    {
        "id": "micro-saas-ai-returns-manager",
        "title": "AI Returns & Reverse Logistics Platform",
        "category": "ai", "industry": "e-commerce", "icon": "🔄", "popular": False,
        "pricing": {"basic": "$149/mo", "pro": "$449/mo", "enterprise": "Custom"},
        "description": "AI-powered returns management that automates approval decisions, optimizes disposition, and recovers maximum value from returned products.",
        "features": ["AI return approval based on policy and history", "Automated disposition routing (restock, refurbish, liquidate)", "Fraud detection for return abuse", "Integration with Shopify, Amazon, WooCommerce", "Customer self-service return portal", "Environmental impact tracking", "Analytics on return reasons and trends", "Automated refund and exchange processing"],
        "benefits": ["Reduce return processing costs by 60%", "Detect and prevent return fraud", "Recover 30% more value from returns", "Improve customer satisfaction with instant refunds"]
    },
    {
        "id": "micro-saas-ai-localization",
        "title": "AI Translation & Localization Platform",
        "category": "ai", "industry": "technology", "icon": "🌍", "popular": True,
        "pricing": {"basic": "$199/mo", "pro": "$599/mo", "enterprise": "Custom"},
        "description": "AI-powered translation and localization for websites, apps, docs, and marketing. Go beyond translation with cultural adaptation, SEO optimization, and quality scoring.",
        "features": ["AI translation with domain-specific models", "Cultural adaptation and localization review", "SEO-optimized translation for each locale", "Quality scoring with human-in-the-loop", "Integration with CMS, GitHub, Figma", "Glossary and style guide enforcement", "Real-time collaboration for translators", "Support for 100+ languages"],
        "benefits": ["Launch in 100+ languages in weeks", "Reduce translation costs by 70%", "Maintain brand voice across all locales", "SEO-optimized for each target market"]
    },
    {
        "id": "micro-saas-ai-warranty-manager",
        "title": "AI Warranty & Claims Management Platform",
        "category": "ai", "industry": "manufacturing", "icon": "🛡️", "popular": False,
        "pricing": {"basic": "$299/mo", "pro": "$799/mo", "enterprise": "Custom"},
        "description": "AI-powered warranty management that automates claims processing, detects fraud, and predicts warranty costs. Reduce claims processing time by 80%.",
        "features": ["Automated warranty claims processing", "AI fraud detection for warranty claims", "Predictive warranty cost forecasting", "Customer self-service warranty portal", "Integration with ERP and CRM systems", "Warranty policy management and enforcement", "Supplier recovery automation", "Analytics on product failure patterns"],
        "benefits": ["80% faster claims processing", "Detect warranty fraud with 95% accuracy", "Forecast warranty costs within 5%", "Identify product quality issues early"]
    },
    {
        "id": "micro-saas-ai-survey-analyzer",
        "title": "AI Survey & Research Analysis Platform",
        "category": "ai", "industry": "research", "icon": "📊", "popular": False,
        "pricing": {"basic": "$79/mo", "pro": "$249/mo", "enterprise": "Custom"},
        "description": "AI-powered survey analysis that goes beyond charts. Open-ended response analysis, sentiment tracking, bias detection, and automated report generation.",
        "features": ["Open-ended response analysis with AI", "Sentiment and emotion tracking over time", "Survey bias detection and correction", "Automated report generation", "Integration with Qualtrics, SurveyMonkey, Typeform", "Cross-survey trend analysis", "Audience segmentation and comparison", "Real-time response monitoring"],
        "benefits": ["Analyze open-ended responses in seconds", "Detect and correct survey bias automatically", "Track sentiment trends across surveys", "Generate board-ready reports with one click"]
    },
    # ===== IT SERVICES (5) =====
    {
        "id": "it-email-security",
        "title": "IT Email Security, Compliance & Archiving",
        "category": "security", "industry": "technology", "icon": "📧", "popular": True,
        "pricing": {"basic": "$5/user/mo", "pro": "$12/user/mo", "enterprise": "Custom"},
        "description": "Comprehensive email security, compliance, and archiving solution. Protect against phishing, BEC, and data loss while meeting legal and regulatory requirements.",
        "features": ["AI-powered phishing and BEC detection", "Email encryption and DLP", "Automated email archiving with legal hold", "eDiscovery and compliance reporting", "Integration with Microsoft 365 and Google Workspace", "Email continuity during outages", "Advanced threat protection sandboxing", "User security awareness training"],
        "benefits": ["Block 99.9% of email threats", "Meet SEC, FINRA, HIPAA, GDPR requirements", "Recover emails instantly with granular search", "Maintain email continuity even during outages"]
    },
    {
        "id": "it-hybrid-cloud",
        "title": "IT Hybrid Cloud Architecture & Management",
        "category": "it", "industry": "technology", "icon": "🔗", "popular": False,
        "pricing": {"basic": "$5,000/mo", "pro": "$12,000/mo", "enterprise": "Custom"},
        "description": "Design and manage hybrid cloud environments that seamlessly connect on-premises infrastructure with public and private clouds. Optimize workloads for cost and performance.",
        "features": ["Hybrid cloud architecture design", "Workload placement optimization", "Multi-cloud networking and security", "Kubernetes across on-prem and cloud", "Cost optimization and FinOps", "Disaster recovery across environments", "Integration with AWS Outposts, Azure Arc, GCP Anthos", "24/7 monitoring and management"],
        "benefits": ["Optimize workload costs by 35%", "Seamlessly burst to cloud during peak demand", "Maintain data sovereignty with hybrid architecture", "Unified management across all environments"]
    },
    {
        "id": "it-identity-access",
        "title": "IT Identity & Access Management (IAM) Modernization",
        "category": "security", "industry": "technology", "icon": "🔑", "popular": True,
        "pricing": {"basic": "$3,000/mo", "pro": "$7,500/mo", "enterprise": "Custom"},
        "description": "Modernize identity and access management with SSO, MFA, privileged access, and zero-trust policies. Reduce security risk while improving user experience.",
        "features": ["Single sign-on (SSO) for all applications", "Adaptive multi-factor authentication", "Privileged access management (PAM)", "Identity governance and access reviews", "Zero-trust policy enforcement", "Integration with Okta, Azure AD, Ping", "Automated provisioning and deprovisioning", "Compliance reporting for SOX, HIPAA, PCI"],
        "benefits": ["Reduce password-related tickets by 80%", "Enforce least-privilege access automatically", "Meet compliance requirements for access control", "Enable secure access from anywhere"]
    },
    {
        "id": "it-network-modernization",
        "title": "IT Network Modernization & SD-WAN",
        "category": "it", "industry": "technology", "icon": "🌐", "popular": False,
        "pricing": {"basic": "$3,000/mo", "pro": "$8,000/mo", "enterprise": "Custom"},
        "description": "Modernize your network with SD-WAN, SASE, and intent-based networking. Reduce costs by 40% while improving performance, security, and reliability.",
        "features": ["SD-WAN design and deployment", "SASE (Secure Access Service Edge)", "Intent-based networking", "Network automation and orchestration", "Zero-trust network access (ZTNA)", "24/7 network monitoring and NOC", "Integration with Cisco, Palo Alto, Fortinet", "Performance optimization and QoS"],
        "benefits": ["Reduce network costs by 40%", "Improve application performance by 60%", "Secure branch offices without backhauling", "Automate network operations with zero-touch"]
    },
    {
        "id": "it-data-protection",
        "title": "IT Data Protection, Backup & Ransomware Recovery",
        "category": "it", "industry": "technology", "icon": "🔒", "popular": True,
        "pricing": {"basic": "$1,000/mo", "pro": "$3,000/mo", "enterprise": "Custom"},
        "description": "Comprehensive data protection with immutable backups, air-gapped copies, and instant ransomware recovery. Achieve RPO under 1 hour and RTO under 15 minutes.",
        "features": ["Immutable and air-gapped backups", "Instant VM and file-level recovery", "Ransomware detection and automated isolation", "Cross-site and cloud replication", "Automated backup testing and verification", "Integration with Veeam, Commvault, Rubrik", "Compliance reporting for data retention", "24/7 monitoring and alerting"],
        "benefits": ["Recover from ransomware in under 15 minutes", "Achieve RPO under 1 hour", "Automate backup testing and compliance", "Protect against data loss from any threat"]
    },
    # ===== AI SERVICES (5) =====
    {
        "id": "ai-document-understanding",
        "title": "AI Document Understanding & Data Extraction",
        "category": "ai", "industry": "technology", "icon": "📄", "popular": True,
        "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
        "description": "AI that reads and understands any document — invoices, contracts, forms, handwritten notes. Extract structured data with 99% accuracy and learn from corrections.",
        "features": ["Multi-format document ingestion (PDF, scan, photo)", "AI classification by document type", "Structured data extraction with confidence scores", "Human-in-the-loop validation", "Continuous learning from corrections", "Integration with ERP, CRM, and accounting", "Batch processing and real-time API", "Compliance-ready audit trail"],
        "benefits": ["Process documents 20x faster than manual", "Achieve 99%+ extraction accuracy", "Reduce processing costs by 80%", "Scale without adding headcount"]
    },
    {
        "id": "ai-predictive-analytics",
        "title": "AI Predictive Analytics & Decision Intelligence",
        "category": "ai", "industry": "technology", "icon": "📈", "popular": True,
        "pricing": {"basic": "$1,999/mo", "pro": "$4,999/mo", "enterprise": "Custom"},
        "description": "Enterprise predictive analytics with automated model selection, explainable AI, and real-time forecasting. No ML expertise required — connect data and get predictions.",
        "features": ["Automated model selection and training", "Explainable AI with feature importance", "Real-time forecasting and anomaly detection", "50+ data connectors (databases, APIs, files)", "Custom dashboards and alerts", "What-if scenario modeling", "Integration with Tableau, Power BI, Looker", "API for embedding predictions in applications"],
        "benefits": ["35% improvement in forecast accuracy", "Zero ML expertise required", "Real-time predictions at scale", "Embed intelligence in any application"]
    },
    {
        "id": "ai-conversational-ai",
        "title": "AI Conversational AI & Voice Agent Platform",
        "category": "ai", "industry": "customer-service", "icon": "🗣️", "popular": False,
        "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
        "description": "Build and deploy AI conversational agents for chat and voice. Handle customer service, sales, and internal support with natural language understanding.",
        "features": ["No-code conversational AI builder", "Natural language understanding (NLU)", "Voice agent with text-to-speech", "Integration with CRM, knowledge base, ticketing", "Multi-language support (50+ languages)", "Human handoff with full context", "Analytics on conversation quality", "Custom training with your data"],
        "benefits": ["Handle 70% of inquiries without humans", "24/7 availability in 50+ languages", "Reduce support costs by 50%", "Improve CSAT with instant responses"]
    },
    {
        "id": "ai-computer-vision",
        "title": "AI Computer Vision & Image Recognition Platform",
        "category": "ai", "industry": "technology", "icon": "👁️", "popular": False,
        "pricing": {"basic": "$1,499/mo", "pro": "$3,999/mo", "enterprise": "Custom"},
        "description": "AI computer vision platform for object detection, facial recognition, OCR, and visual inspection. Train custom models without ML expertise.",
        "features": ["Object detection and classification", "Facial recognition with privacy controls", "OCR and text extraction from images", "Visual quality inspection", "Custom model training with your images", "Edge deployment for real-time inference", "Integration with cameras, drones, and IoT", "API for embedding vision in applications"],
        "benefits": ["Detect objects with 99%+ accuracy", "Process images 100x faster than manual", "Train custom models without ML expertise", "Deploy to edge for real-time inference"]
    },
    {
        "id": "ai-nlp-text-analytics",
        "title": "AI NLP & Text Analytics Platform",
        "category": "ai", "industry": "technology", "icon": "💬", "popular": False,
        "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
        "description": "AI-powered natural language processing for text classification, entity extraction, sentiment analysis, and summarization. Process millions of documents in minutes.",
        "features": ["Text classification and categorization", "Named entity extraction", "Sentiment and emotion analysis", "Document summarization", "Topic modeling and trend detection", "Multi-language NLP (100+ languages)", "Custom model training", "API and batch processing"],
        "benefits": ["Process millions of documents in minutes", "Extract insights from unstructured text", "Support 100+ languages out of the box", "Train custom models for your domain"]
    },
]

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

# Update JSON
with open(SERVICES_JSON) as f:
    data = json.load(f)
existing_ids = {s['id'] for s in data}

added = 0
new_entries = []
for svc in NEW:
    if svc['id'] not in existing_ids:
        svc['contactInfo'] = {"website": f"/services/{svc['id']}", "email": CONTACT['email'], "phone": CONTACT['phone'], "address": CONTACT['address']}
        data.append(svc)
        new_entries.append(svc)
        added += 1
        print(f"  ADD: {svc['id']}")
    else:
        print(f"  SKIP: {svc['id']}")

with open(SERVICES_JSON, 'w') as f:
    json.dump(data, f, indent=2)
print(f"\nJSON: {added} added, total: {len(data)}")

# Update TS
with open(SERVICES_TS) as f:
    content = f.read()

ai_entries = [e for e in new_entries if e['category'] == 'ai']
it_entries = [e for e in new_entries if e['category'] == 'it']
sec_entries = [e for e in new_entries if e['category'] == 'security']

for array_name, entries, next_export in [
    ('aiServices', ai_entries, 'export const itServices'),
    ('itServices', it_entries, 'export const cloudServices'),
    ('securityServices', sec_entries, 'export const dataServices'),
]:
    if not entries:
        continue
    arr_start = content.find(f'export const {array_name}')
    next_start = content.find(next_export, arr_start)
    close = content.rfind('];', arr_start, next_start) if next_start != -1 else content.rfind('];', arr_start)
    if close != -1:
        entries_str = ',\n' + ',\n'.join(make_ts_entry(e) for e in entries)
        content = content[:close] + entries_str + content[close:]
        print(f"  ✅ {array_name}: {len(entries)} entries")
    else:
        print(f"  ❌ {array_name}: closing not found")

with open(SERVICES_TS, 'w') as f:
    f.write(content)
