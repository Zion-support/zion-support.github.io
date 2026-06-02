#!/usr/bin/env python3
"""Add Wave 146-147 services: real micro-SaaS, IT, and AI solutions."""
import json
import os
import sys

SERVICES_FILE = os.path.join(os.path.dirname(__file__), '..', 'app', 'data', 'servicesData.json')

CONTACT = {
    "website": "https://ziontechgroup.com",
    "email": "kleber@ziontechgroup.com",
    "phone": "+1 302 464 0950"
}

ADDRESS = "364 E Main St STE 1008, Middletown, DE 19709"

new_services = [
    # === MICRO-SAAS (5) ===
    {
        "id": "micro-saas-smart-subscription-manager",
        "title": "Micro-SaaS Smart Subscription Manager",
        "description": "AI-powered subscription analytics and churn prediction platform. Tracks MRR, LTV, cohort analysis, and automates dunning emails to reduce involuntary churn by up to 40%.",
        "features": [
            "Real-time MRR/ARR dashboard with trend analysis",
            "AI churn prediction with risk scoring per customer",
            "Automated dunning email sequences with A/B testing",
            "Cohort retention analysis and LTV forecasting",
            "Stripe/Paddle/Chargebee integration",
            "Revenue recognition automation (ASC 606)",
            "Custom pricing page builder with localization",
            "Webhook alerts for failed payments and cancellations"
        ],
        "benefits": [
            "Reduce churn by up to 40% with predictive alerts",
            "Increase LTV through smart upsell recommendations",
            "Save 10+ hours/week on manual subscription management",
            "Real-time revenue visibility for stakeholders"
        ],
        "pricing": {"basic": "$49/mo", "pro": "$149/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "💳",
        "href": "/services/micro-saas-smart-subscription-manager",
        "popular": True,
        "category": "micro-saas",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "micro-saas-ai-content-calendar",
        "title": "Micro-SaaS AI Content Calendar & Planner",
        "description": "Intelligent content planning platform that uses AI to generate content ideas, auto-schedule posts across channels, and optimize posting times based on audience engagement patterns.",
        "features": [
            "AI content idea generation based on trending topics",
            "Multi-channel scheduling (Twitter, LinkedIn, Instagram, TikTok)",
            "Optimal posting time prediction per audience segment",
            "Content performance analytics with ROI tracking",
            "Collaborative editorial calendar with approval workflows",
            "Hashtag and keyword research built-in",
            "Repurpose long-form content into social snippets",
            "Brand voice consistency checker"
        ],
        "benefits": [
            "Plan a month of content in under 2 hours",
            "Increase engagement 3x with optimal timing",
            "Maintain consistent brand voice across all channels",
            "Eliminate content gaps with AI suggestions"
        ],
        "pricing": {"basic": "$29/mo", "pro": "$79/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "📅",
        "href": "/services/micro-saas-ai-content-calendar",
        "popular": False,
        "category": "micro-saas",
        "industry": "marketing",
        "stage": "published"
    },
    {
        "id": "micro-saas-customer-health-score",
        "title": "Micro-SaaS Customer Health Score Platform",
        "description": "B2B SaaS customer health monitoring that aggregates product usage, support tickets, NPS scores, and payment history into a single health score. Predicts churn 60 days in advance.",
        "features": [
            "Composite health score (0-100) per customer account",
            "Product usage tracking and feature adoption metrics",
            "Support ticket sentiment analysis and escalation triggers",
            "NPS/CSAT survey automation and trend analysis",
            "Payment history and contract renewal tracking",
            "Automated playbooks for at-risk accounts",
            "Slack/Teams alerts for health score drops",
            "Executive dashboard with portfolio health overview"
        ],
        "benefits": [
            "Predict churn 60 days before it happens",
            "Prioritize CSM time on highest-risk accounts",
            "Increase net revenue retention by 15-25%",
            "Data-driven renewal and expansion conversations"
        ],
        "pricing": {"basic": "$99/mo", "pro": "$299/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "❤️",
        "href": "/services/micro-saas-customer-health-score",
        "popular": True,
        "category": "micro-saas",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "micro-saas-employee-onboarding-hub",
        "title": "Micro-SaaS Employee Onboarding Hub",
        "description": "Automated employee onboarding platform that creates personalized onboarding journeys, tracks progress, collects e-signatures, and integrates with HRIS, Slack, and IT provisioning systems.",
        "features": [
            "Drag-and-drop onboarding journey builder",
            "Role-based onboarding templates (engineer, sales, manager)",
            "Automated IT provisioning (laptop, accounts, access)",
            "E-signature collection for policies and agreements",
            "Progress tracking dashboard for HR and managers",
            "Buddy/mentor assignment and check-in scheduling",
            "30/60/90-day milestone tracking and surveys",
            "Integration with BambooHR, Workday, Gusto, Rippling"
        ],
        "benefits": [
            "Reduce onboarding time from weeks to days",
            "Ensure 100% compliance with policy acknowledgments",
            "Improve new hire satisfaction scores by 35%",
            "Free HR team from manual onboarding tasks"
        ],
        "pricing": {"basic": "$199/mo", "pro": "$499/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🎯",
        "href": "/services/micro-saas-employee-onboarding-hub",
        "popular": False,
        "category": "micro-saas",
        "industry": "hr-tech",
        "stage": "published"
    },
    {
        "id": "micro-saas-api-monetization-platform",
        "title": "Micro-SaaS API Monetization Platform",
        "description": "Complete API monetization solution with usage-based billing, developer portal, rate limiting, and analytics. Turn any API into a revenue stream with tiered pricing and self-service signup.",
        "features": [
            "Usage-based billing with tiered and freemium plans",
            "Self-service developer portal with API documentation",
            "Rate limiting, quotas, and throttling per API key",
            "Real-time usage analytics and revenue dashboards",
            "Automated invoicing and payment collection",
            "API versioning and deprecation management",
            "Webhook notifications for usage thresholds",
            "Stripe billing integration with proration"
        ],
        "benefits": [
            "Launch API monetization in days, not months",
            "Increase API revenue with usage-based pricing",
            "Reduce developer support with self-service portal",
            "Real-time visibility into API consumption and revenue"
        ],
        "pricing": {"basic": "$79/mo", "pro": "$249/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🔌",
        "href": "/services/micro-saas-api-monetization-platform",
        "popular": False,
        "category": "micro-saas",
        "industry": "technology",
        "stage": "published"
    },
    # === IT SERVICES (5) ===
    {
        "id": "it-cloud-cost-optimization",
        "title": "IT Cloud Cost Optimization Service",
        "description": "Comprehensive cloud cost analysis and optimization for AWS, Azure, and GCP. Identifies waste, recommends right-sizing, manages reserved instances, and implements FinOps best practices to reduce cloud spend by 30-50%.",
        "features": [
            "Multi-cloud cost analysis (AWS, Azure, GCP)",
            "Idle resource detection and auto-remediation",
            "Reserved instance and savings plan management",
            "Right-sizing recommendations with performance impact analysis",
            "Cost allocation tagging strategy and enforcement",
            "Anomaly detection for unexpected spend spikes",
            "Monthly FinOps reports with executive summaries",
            "Kubernetes cost allocation per namespace/pod"
        ],
        "benefits": [
            "Reduce cloud spend by 30-50% within 90 days",
            "Eliminate waste from idle and over-provisioned resources",
            "Implement FinOps culture with team accountability",
            "Predictable cloud budgeting with forecasting"
        ],
        "pricing": {"basic": "$2,500/mo", "pro": "$5,000/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "☁️",
        "href": "/services/it-cloud-cost-optimization",
        "popular": True,
        "category": "it",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "it-disaster-recovery-as-a-service",
        "title": "IT Disaster Recovery as a Service (DRaaS)",
        "description": "Enterprise disaster recovery solution with automated failover, continuous data replication, and sub-minute RTO/RPO. Includes runbook automation, regular DR testing, and compliance documentation.",
        "features": [
            "Continuous data replication with sub-minute RPO",
            "Automated failover and failback orchestration",
            "DR runbook automation with one-click execution",
            "Regular DR testing without production impact",
            "Multi-region and multi-cloud DR topologies",
            "Compliance documentation (SOC 2, HIPAA, ISO 27001)",
            "Real-time DR health monitoring and alerting",
            "Dedicated DR environment with warm standby"
        ],
        "benefits": [
            "Achieve sub-minute RTO for critical applications",
            "Eliminate manual DR testing with automated runs",
            "Meet compliance requirements with documented DR",
            "Reduce DR costs by 60% vs. traditional hot sites"
        ],
        "pricing": {"basic": "$3,000/mo", "pro": "$8,000/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🔄",
        "href": "/services/it-disaster-recovery-as-a-service",
        "popular": False,
        "category": "it",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "it-zero-trust-network-access",
        "title": "IT Zero Trust Network Access (ZTNA)",
        "description": "Implement zero trust security architecture with identity-aware micro-segmentation, continuous device trust verification, and least-privilege access controls. Replace VPN with secure, granular access.",
        "features": [
            "Identity-aware proxy for application access",
            "Device trust verification (MDM, EDR integration)",
            "Micro-segmentation with software-defined perimeters",
            "Continuous authentication and session monitoring",
            "Least-privilege access with just-in-time provisioning",
            "Full audit trail of all access events",
            "Integration with Okta, Azure AD, Google Workspace",
            "Legacy application support without agents"
        ],
        "benefits": [
            "Eliminate VPN bottlenecks and security gaps",
            "Reduce attack surface by 90% with micro-segmentation",
            "Enable secure remote work without compromising security",
            "Meet zero trust compliance requirements (NIST 800-207)"
        ],
        "pricing": {"basic": "$5,000 setup + $2,000/mo", "pro": "Custom", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🔒",
        "href": "/services/it-zero-trust-network-access",
        "popular": True,
        "category": "security",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "it-data-center-modernization",
        "title": "IT Data Center Modernization Service",
        "description": "End-to-end data center transformation including assessment, migration planning, hybrid cloud architecture, and decommissioning. Modernize legacy infrastructure with minimal downtime.",
        "features": [
            "Comprehensive infrastructure assessment and TCO analysis",
            "Hybrid cloud architecture design (on-prem + cloud)",
            "Workload migration planning with dependency mapping",
            "Network redesign for software-defined networking",
            "Storage modernization (SAN/NAS to software-defined)",
            "Legacy system decommissioning and data migration",
            "Post-migration optimization and cost validation",
            "Knowledge transfer and documentation"
        ],
        "benefits": [
            "Reduce infrastructure costs by 40-60%",
            "Improve application performance and availability",
            "Enable cloud-native development on modern platform",
            "Eliminate end-of-life hardware risks"
        ],
        "pricing": {"basic": "$25,000 project", "pro": "$75,000 project", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🏢",
        "href": "/services/it-data-center-modernization",
        "popular": False,
        "category": "it",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "it-managed-detection-response",
        "title": "IT Managed Detection & Response (MDR)",
        "description": "24/7 managed security operations with advanced threat detection, incident response, and digital forensics. Combines SIEM, EDR, NDR, and human analysts to protect your organization.",
        "features": [
            "24/7/365 security monitoring by certified analysts",
            "Advanced threat detection with behavioral analytics",
            "Endpoint detection and response (EDR) management",
            "Network detection and response (NDR) with full packet capture",
            "Threat intelligence feeds and IOC correlation",
            "Incident response with 15-minute SLA for critical alerts",
            "Digital forensics and root cause analysis",
            "Monthly security posture reports and recommendations"
        ],
        "benefits": [
            "Enterprise-grade SOC at 1/3 the cost of building in-house",
            "Detect and respond to threats in under 15 minutes",
            "Reduce false positives by 95% with tuned detection rules",
            "Meet cyber insurance and compliance requirements"
        ],
        "pricing": {"basic": "$3,500/mo", "pro": "$7,500/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🛡️",
        "href": "/services/it-managed-detection-response",
        "popular": True,
        "category": "security",
        "industry": "technology",
        "stage": "published"
    },
    # === AI SERVICES (10) ===
    {
        "id": "ai-supply-chain-risk-intelligence",
        "title": "AI Supply Chain Risk Intelligence Platform",
        "description": "Real-time supply chain risk monitoring using AI to analyze supplier financial health, geopolitical events, weather disruptions, and logistics bottlenecks. Predicts disruptions 30-90 days in advance.",
        "features": [
            "Multi-tier supplier risk scoring and monitoring",
            "Geopolitical and regulatory change impact analysis",
            "Weather and natural disaster disruption forecasting",
            "Logistics bottleneck prediction with alternative routing",
            "Supplier financial health monitoring and early warning",
            "Inventory optimization with demand sensing",
            "ESG compliance tracking across supply chain",
            "Executive risk dashboard with scenario modeling"
        ],
        "benefits": [
            "Predict supply chain disruptions 30-90 days ahead",
            "Reduce stockouts by 45% with demand sensing",
            "Diversify supplier base with data-driven insights",
            "Meet ESG reporting requirements across supply chain"
        ],
        "pricing": {"basic": "$2,999/mo", "pro": "$6,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🔗",
        "href": "/services/ai-supply-chain-risk-intelligence",
        "popular": True,
        "category": "ai",
        "industry": "logistics",
        "stage": "published"
    },
    {
        "id": "ai-customer-intent-prediction",
        "title": "AI Customer Intent Prediction Engine",
        "description": "Real-time customer intent prediction using behavioral signals, browsing patterns, and historical data. Identifies buying intent, support needs, and churn risk to trigger proactive engagement.",
        "features": [
            "Real-time intent scoring across web, email, and chat",
            "Behavioral pattern analysis with ML models",
            "Buying intent prediction with lead scoring",
            "Churn risk identification with trigger alerts",
            "Personalized content and offer recommendations",
            "Integration with CRM, marketing automation, and support",
            "A/B testing framework for engagement strategies",
            "Privacy-compliant tracking (GDPR, CCPA)"
        ],
        "benefits": [
            "Increase conversion rates by 25-40%",
            "Reduce churn with proactive retention campaigns",
            "Personalize every customer interaction at scale",
            "Identify high-value prospects before competitors"
        ],
        "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🎯",
        "href": "/services/ai-customer-intent-prediction",
        "popular": True,
        "category": "ai",
        "industry": "marketing",
        "stage": "published"
    },
    {
        "id": "ai-document-understanding-platform",
        "title": "AI Document Understanding Platform",
        "description": "Enterprise document AI platform that extracts, classifies, and processes unstructured documents at scale. Handles contracts, invoices, forms, IDs, and custom documents with 99%+ accuracy.",
        "features": [
            "OCR + AI extraction for any document type",
            "Automatic document classification and routing",
            "Contract analysis with clause extraction and risk flags",
            "Invoice processing with GL code assignment",
            "ID and form verification with fraud detection",
            "Custom model training for proprietary document types",
            "Human-in-the-loop validation workflow",
            "API-first architecture with SDKs for all languages"
        ],
        "benefits": [
            "Process documents 10x faster than manual review",
            "Achieve 99%+ extraction accuracy with AI validation",
            "Reduce document processing costs by 80%",
            "Scale document operations without adding headcount"
        ],
        "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "📄",
        "href": "/services/ai-document-understanding-platform",
        "popular": True,
        "category": "ai",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "ai-voice-agent-platform",
        "title": "AI Voice Agent Platform",
        "description": "Build and deploy AI voice agents for customer service, sales, and internal operations. Natural conversations with real-time transcription, sentiment analysis, and seamless human handoff.",
        "features": [
            "Natural language voice agents with custom personalities",
            "Real-time transcription and sentiment analysis",
            "Multi-language support (50+ languages)",
            "Seamless human agent handoff with context transfer",
            "Call recording, analytics, and compliance archiving",
            "Integration with Twilio, Vonage, and major PBX systems",
            "Custom voice cloning for brand consistency",
            "Real-time coaching suggestions for human agents"
        ],
        "benefits": [
            "Handle 80% of calls without human intervention",
            "Reduce call center costs by 60%",
            "Provide 24/7 support in 50+ languages",
            "Improve customer satisfaction with instant responses"
        ],
        "pricing": {"basic": "$1,999/mo", "pro": "$4,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🎙️",
        "href": "/services/ai-voice-agent-platform",
        "popular": True,
        "category": "ai",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "ai-predictive-maintenance-iot",
        "title": "AI Predictive Maintenance for IoT",
        "description": "Industrial IoT predictive maintenance platform that analyzes sensor data to predict equipment failures before they happen. Reduces unplanned downtime by up to 70% and extends asset life.",
        "features": [
            "Real-time sensor data ingestion and processing",
            "ML-based failure prediction with confidence scores",
            "Remaining useful life (RUL) estimation per asset",
            "Automated work order generation in CMMS",
            "Root cause analysis with explainable AI",
            "Digital twin simulation for scenario testing",
            "Mobile alerts for maintenance teams",
            "Integration with SAP, Maximo, and ServiceNow"
        ],
        "benefits": [
            "Reduce unplanned downtime by up to 70%",
            "Extend asset lifespan by 20-40%",
            "Optimize spare parts inventory with demand forecasting",
            "Shift from reactive to predictive maintenance"
        ],
        "pricing": {"basic": "$3,999/mo", "pro": "$9,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "⚙️",
        "href": "/services/ai-predictive-maintenance-iot",
        "popular": True,
        "category": "ai",
        "industry": "manufacturing",
        "stage": "published"
    },
    {
        "id": "ai-fraud-detection-realtime",
        "title": "AI Real-Time Fraud Detection Engine",
        "description": "Machine learning fraud detection system that analyzes transactions in real-time with sub-100ms latency. Detects payment fraud, account takeover, identity theft, and money laundering patterns.",
        "features": [
            "Real-time transaction scoring (< 100ms latency)",
            "Behavioral biometrics for account takeover detection",
            "Graph analytics for fraud ring identification",
            "Adaptive ML models that learn from new fraud patterns",
            "Case management dashboard for fraud analysts",
            "Regulatory reporting (SAR, CTR) automation",
            "Device fingerprinting and IP reputation analysis",
            "Custom rule engine with ML model overlay"
        ],
        "benefits": [
            "Detect fraud in real-time with 99.5% accuracy",
            "Reduce false positives by 60% vs. rule-only systems",
            "Prevent account takeover before damage occurs",
            "Automate regulatory compliance reporting"
        ],
        "pricing": {"basic": "$2,499/mo", "pro": "$5,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🔍",
        "href": "/services/ai-fraud-detection-realtime",
        "popular": True,
        "category": "ai",
        "industry": "financial",
        "stage": "published"
    },
    {
        "id": "ai-knowledge-graph-engine",
        "title": "AI Knowledge Graph Engine",
        "description": "Enterprise knowledge graph platform that connects disparate data sources into a unified semantic layer. Enables intelligent search, recommendation, and decision support across organizational knowledge.",
        "features": [
            "Automated knowledge extraction from unstructured data",
            "Entity resolution and relationship mapping",
            "Natural language query interface",
            "Semantic search with context understanding",
            "Graph-based recommendation engine",
            "Data lineage and impact analysis",
            "Integration with data warehouses and lakes",
            "API access for custom applications"
        ],
        "benefits": [
            "Connect siloed data into unified knowledge layer",
            "Enable intelligent search across all enterprise data",
            "Discover hidden relationships and insights",
            "Power next-gen AI applications with structured knowledge"
        ],
        "pricing": {"basic": "$1,999/mo", "pro": "$4,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🧠",
        "href": "/services/ai-knowledge-graph-engine",
        "popular": False,
        "category": "ai",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "ai-sentiment-analysis-realtime",
        "title": "AI Real-Time Sentiment Analysis Platform",
        "description": "Monitor brand sentiment across social media, news, reviews, and support channels in real-time. AI-powered emotion detection, trend analysis, and automated alerting for reputation management.",
        "features": [
            "Real-time sentiment monitoring across 50+ sources",
            "Emotion detection (joy, anger, fear, surprise, etc.)",
            "Trend analysis with anomaly detection",
            "Competitor sentiment benchmarking",
            "Automated crisis alerts for negative sentiment spikes",
            "Multi-language sentiment analysis (30+ languages)",
            "Custom dashboard with shareable reports",
            "API for integration with existing tools"
        ],
        "benefits": [
            "Detect PR crises before they go viral",
            "Track campaign effectiveness in real-time",
            "Benchmark sentiment against competitors",
            "Respond to customer issues 10x faster"
        ],
        "pricing": {"basic": "$399/mo", "pro": "$999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "😊",
        "href": "/services/ai-sentiment-analysis-realtime",
        "popular": False,
        "category": "ai",
        "industry": "marketing",
        "stage": "published"
    },
    {
        "id": "ai-process-mining-optimization",
        "title": "AI Process Mining & Optimization",
        "description": "Discover, analyze, and optimize business processes using AI-powered process mining. Automatically identify bottlenecks, compliance violations, and optimization opportunities from event logs.",
        "features": [
            "Automatic process discovery from system event logs",
            "Conformance checking against designed processes",
            "Bottleneck identification and root cause analysis",
            "Process simulation for what-if scenarios",
            "Compliance violation detection and alerting",
            "RPA opportunity identification",
            "Process performance benchmarking",
            "Integration with SAP, Salesforce, ServiceNow"
        ],
        "benefits": [
            "Reduce process cycle times by 30-50%",
            "Identify automation opportunities worth millions",
            "Ensure compliance with automated conformance checks",
            "Data-driven process improvement decisions"
        ],
        "pricing": {"basic": "$2,499/mo", "pro": "$5,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "⚡",
        "href": "/services/ai-process-mining-optimization",
        "popular": True,
        "category": "ai",
        "industry": "technology",
        "stage": "published"
    },
    {
        "id": "ai-cyber-threat-hunting",
        "title": "AI Cyber Threat Hunting Platform",
        "description": "Proactive threat hunting platform that uses AI to identify advanced persistent threats, insider threats, and zero-day attacks that bypass traditional security controls. Combines UEBA, NTA, and threat intelligence.",
        "features": [
            "User and entity behavior analytics (UEBA)",
            "Network traffic analysis with deep packet inspection",
            "Lateral movement detection across endpoints",
            "Insider threat identification with risk scoring",
            "Threat intelligence correlation and enrichment",
            "Automated hunt playbooks with MITRE ATT&CK mapping",
            "Forensic timeline reconstruction",
            "Integration with SIEM, EDR, and SOAR platforms"
        ],
        "benefits": [
            "Detect threats that bypass traditional security",
            "Reduce dwell time from months to hours",
            "Proactively hunt for adversaries in your network",
            "Meet advanced threat detection compliance requirements"
        ],
        "pricing": {"basic": "$4,999/mo", "pro": "$12,999/mo", "enterprise": "Custom"},
        "contactInfo": CONTACT,
        "icon": "🕵️",
        "href": "/services/ai-cyber-threat-hunting",
        "popular": True,
        "category": "security",
        "industry": "technology",
        "stage": "published"
    }
]

# Load existing services
with open(SERVICES_FILE, 'r') as f:
    existing = json.load(f)

existing_ids = {s['id'] for s in existing}
print(f"Existing services: {len(existing)}")

# Add only new services (avoid duplicates)
added = 0
for svc in new_services:
    if svc['id'] not in existing_ids:
        existing.append(svc)
        existing_ids.add(svc['id'])
        added += 1
        print(f"  + {svc['id']}")
    else:
        print(f"  ~ SKIP (exists): {svc['id']}")

# Save
with open(SERVICES_FILE, 'w') as f:
    json.dump(existing, f, indent=2)

print(f"\n✅ Added {added} new services. Total: {len(existing)}")
