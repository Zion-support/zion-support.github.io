#!/usr/bin/env python3
"""
Wave 126-127: Add 20 new micro-SaaS, IT, AI, and Industry services to the Zion Tech Group catalog.

This script reads the existing servicesData.json, appends 20 new services,
and writes the updated JSON back to disk. Existing services are never modified or deleted.

Usage:
    python3 scripts/add_wave_126_127.py
"""

import json
import os
import sys
from datetime import datetime

DATA_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "app", "data", "servicesData.json"
)

CONTACT = {
    "email": "kleber@ziontechgroup.com",
    "phone": "+1 302 464 0950",
}


def make_contact(href: str) -> dict:
    return {
        "website": href,
        "email": CONTACT["email"],
        "phone": CONTACT["phone"],
    }


NEW_SERVICES = [
    # ── Micro-SaaS (5) ────────────────────────────────────────────────
    {
        "id": "wave126-ai-code-review",
        "title": "AI-Powered Code Review Platform",
        "description": "Automated pull request reviews powered by deep code understanding. Scans for security vulnerabilities, enforces style guides, detects anti-patterns, and provides actionable suggestions — reducing review time by 80% and catching issues before they reach production.",
        "features": [
            "Automated PR review with contextual AI analysis",
            "Security vulnerability scanning (OWASP Top 10, SAST)",
            "Style guide enforcement & linting integration",
            "Anti-pattern & code smell detection",
            "Architecture compliance checks",
            "Custom rule engine for team-specific standards",
            "GitHub / GitLab / Bitbucket native integration",
            "Review summary & quality score dashboard",
        ],
        "benefits": [
            "80% faster code review cycles",
            "Ship with confidence — catch bugs before production",
            "Consistent code quality across every team",
            "Onboard new developers 3× faster with AI-guided reviews",
        ],
        "pricing": {
            "starter": "297",
            "pro": "797",
            "enterprise": "1997",
        },
        "icon": "🔍",
        "category": "micro-saas",
        "popular": True,
        "industry": "Software Development",
        "href": "/services/wave126-ai-code-review",
    },
    {
        "id": "wave126-smart-invoice-reconciliation",
        "title": "Smart Invoice Reconciliation",
        "description": "Automatically match invoices to purchase orders and payments using AI-powered pattern recognition. Flags discrepancies, detects duplicate payments, and reconciles accounts in real time — cutting month-end close time by 60%.",
        "features": [
            "AI-powered invoice-to-PO matching",
            "Payment discrepancy flagging & resolution workflows",
            "Duplicate payment detection & prevention",
            "Multi-currency & multi-entity support",
            "ERP integration (SAP, NetSuite, QuickBooks)",
            "Real-time reconciliation dashboard",
            "Audit trail & compliance reporting",
        ],
        "benefits": [
            "60% faster month-end close",
            "Eliminate duplicate payments and overcharges",
            "Full audit trail for SOX compliance",
            "Reduce finance team overtime by 70%",
        ],
        "pricing": {
            "starter": "197",
            "pro": "497",
            "enterprise": "1297",
        },
        "icon": "🧾",
        "category": "micro-saas",
        "popular": True,
        "industry": "Finance",
        "href": "/services/wave126-smart-invoice-reconciliation",
    },
    {
        "id": "wave126-ai-meeting-minutes",
        "title": "AI Meeting Minutes Generator",
        "description": "Transform every meeting into structured, actionable records in real time. AI transcribes conversations, identifies decisions and action items, assigns owners, and distributes summaries — ensuring nothing falls through the cracks.",
        "features": [
            "Real-time transcription with speaker diarization",
            "Action item extraction with owner assignment",
            "Decision & key takeaway summarization",
            "Multi-language support (40+ languages)",
            "Calendar & project management integration",
            "Searchable meeting archive with semantic search",
            "Customizable output templates (Slack, email, Notion)",
        ],
        "benefits": [
            "Never take manual notes again",
            "100% capture of decisions and commitments",
            "Instant accountability through action item tracking",
            "Searchable institutional memory across all meetings",
        ],
        "pricing": {
            "starter": "97",
            "pro": "297",
            "enterprise": "697",
        },
        "icon": "🎙️",
        "category": "micro-saas",
        "popular": True,
        "industry": "General",
        "href": "/services/wave126-ai-meeting-minutes",
    },
    {
        "id": "wave126-customer-feedback-analyzer",
        "title": "Customer Feedback Analyzer",
        "description": "Unified NLP-powered analysis across reviews, surveys, support tickets, and social mentions. Surfaces sentiment trends, emerging issues, and feature requests — turning unstructured feedback into strategic product intelligence.",
        "features": [
            "Multi-source ingestion (reviews, NPS, Zendesk, social)",
            "Sentiment analysis with emotion detection",
            "Topic modeling & theme clustering",
            "Feature request extraction & prioritization",
            "Competitor benchmarking from public reviews",
            "Trend detection & anomaly alerting",
            "Executive dashboards & automated reports",
            "API for product analytics integration",
        ],
        "benefits": [
            "Understand customers at scale without reading every ticket",
            "Spot churn risks early from sentiment shifts",
            "Prioritize product roadmap with real data, not guesses",
            "Benchmark against competitors automatically",
        ],
        "pricing": {
            "starter": "397",
            "pro": "997",
            "enterprise": "2497",
        },
        "icon": "📊",
        "category": "micro-saas",
        "popular": True,
        "industry": "Customer Experience",
        "href": "/services/wave126-customer-feedback-analyzer",
    },
    {
        "id": "wave126-automated-compliance-reporting",
        "title": "Automated Compliance Reporting",
        "description": "Continuous compliance automation for SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001. Auto-collects evidence, maps controls, generates audit-ready reports, and tracks remediation — compressing audit prep from months to days.",
        "features": [
            "Automated evidence collection from 100+ integrations",
            "SOC 2, HIPAA, GDPR, PCI-DSS, ISO 27001 frameworks",
            "Control mapping & gap analysis",
            "Audit-ready report generation",
            "Remediation tracking with SLA enforcement",
            "Real-time compliance score dashboard",
            "Vendor risk assessment workflows",
            "Change management & policy versioning",
        ],
        "benefits": [
            "Reduce audit prep from months to days",
            "Continuous compliance — not point-in-time",
            "Eliminate spreadsheet-driven compliance chaos",
            "Pass audits on the first attempt",
        ],
        "pricing": {
            "starter": "1497",
            "pro": "3997",
            "enterprise": "9997",
        },
        "icon": "✅",
        "category": "micro-saas",
        "popular": True,
        "industry": "Compliance",
        "href": "/services/wave126-automated-compliance-reporting",
    },

    # ── IT Services (5) ────────────────────────────────────────────────
    {
        "id": "wave126-managed-detection-response",
        "title": "Managed Detection & Response (MDR)",
        "description": "Enterprise-grade 24/7 security operations delivered as a service. AI-augmented threat detection across endpoints, network, and cloud — with human-led incident investigation, containment, and response in under 15 minutes.",
        "features": [
            "24/7 SOC with AI-augmented threat detection",
            "Endpoint, network, and cloud telemetry correlation",
            "Threat hunting by veteran security analysts",
            "Incident investigation & containment (<15 min SLA)",
            "Playbook-driven & custom incident response",
            "Monthly threat landscape briefings",
            "Deception technology & honeypot deployment",
            "MITRE ATT&CK mapping for all detections",
        ],
        "benefits": [
            "Enterprise SOC capability without building one",
            "Sub-15-minute response to active threats",
            "Reduce mean time to detect by 90%",
            "Compliance-ready with full audit trail",
        ],
        "pricing": {
            "starter": "4997",
            "pro": "14997",
            "enterprise": "29997",
        },
        "icon": "🛡️",
        "category": "security",
        "popular": True,
        "industry": "Cybersecurity",
        "href": "/services/wave126-managed-detection-response",
    },
    {
        "id": "wave126-cloud-cost-optimization",
        "title": "Cloud Cost Optimization Consulting",
        "description": "FinOps-led cloud spend management that delivers guaranteed savings. Right-sizes workloads, optimizes reserved instance and savings plan coverage, eliminates waste, and implements governance — typically reducing cloud spend by 25-40%.",
        "features": [
            "Comprehensive cloud spend audit & waste elimination",
            "Reserved instance & savings plan optimization",
            "Workload right-sizing recommendations",
            "Multi-cloud support (AWS, Azure, GCP)",
            "Tagging governance & cost allocation",
            "Automated anomaly detection on spend spikes",
            "FinOps maturity assessment & roadmap",
            "Executive reporting with unit economics",
        ],
        "benefits": [
            "25-40% cloud spend reduction, guaranteed",
            "Unit economics visibility per product/team",
            "Prevent cost anomalies before they escalate",
            "FinOps cultural transformation, not just tools",
        ],
        "pricing": {
            "starter": "2997",
            "pro": "8997",
            "enterprise": "18997",
        },
        "icon": "☁️",
        "category": "cloud",
        "popular": True,
        "industry": "Cloud Infrastructure",
        "href": "/services/wave126-cloud-cost-optimization",
    },
    {
        "id": "wave126-zero-trust-architecture",
        "title": "Zero Trust Network Architecture",
        "description": "Design and implement a zero trust security model tailored to your infrastructure. Identity-based access controls, microsegmentation, continuous verification, and encrypted service meshes — eliminating implicit trust and reducing blast radius by 95%.",
        "features": [
            "Identity-based access control implementation",
            "Network microsegmentation design & deployment",
            "Continuous device posture verification",
            "Encrypted service mesh (Istio / Linkerd)",
            "Least-privilege access policy automation",
            "Multi-factor authentication orchestration",
            "Blast radius reduction strategies",
            "Compliance mapping (NIST 800-207, CISA ZTMM)",
        ],
        "benefits": [
            "95% reduction in breach blast radius",
            "Eliminate implicit trust — verify everything, always",
            "Enable secure remote work without VPN complexity",
            "Meet federal zero trust mandates (CISA, OMB M-22-09)",
        ],
        "pricing": {
            "starter": "7997",
            "pro": "24997",
            "enterprise": "49997",
        },
        "icon": "🔐",
        "category": "it",
        "popular": True,
        "industry": "Cybersecurity",
        "href": "/services/wave126-zero-trust-architecture",
    },
    {
        "id": "wave126-data-loss-prevention",
        "title": "Data Loss Prevention (DLP)",
        "description": "Comprehensive data protection across endpoints, cloud applications, and email. AI-powered classification, policy enforcement, and insider threat detection — ensuring sensitive data never leaves your organization undetected.",
        "features": [
            "Endpoint DLP for managed & unmanaged devices",
            "Cloud app DLP (CASB integration for O365, GSuite, Slack)",
            "Email DLP with content inspection & encryption",
            "AI-powered data classification & labeling",
            "Insider threat detection & behavioral analysis",
            "PCI/PHI/PII discovery across file shares & databases",
            "Policy orchestration & incident workflow",
            "Forensic investigation & evidence export",
        ],
        "benefits": [
            "Stop data exfiltration before it happens",
            "Meet HIPAA, PCI-DSS, GDPR data handling requirements",
            "Detect insider threats through behavioral analytics",
            "Full visibility into where sensitive data lives and moves",
        ],
        "pricing": {
            "starter": "3497",
            "pro": "9997",
            "enterprise": "22997",
        },
        "icon": "🔒",
        "category": "security",
        "popular": True,
        "industry": "Data Security",
        "href": "/services/wave126-data-loss-prevention",
    },
    {
        "id": "wave126-it-asset-discovery-management",
        "title": "IT Asset Discovery & Management",
        "description": "Agentless auto-discovery of every asset in your environment — hardware, software, cloud, and shadow IT. Full lifecycle tracking, CMDB integration, license optimization, and vulnerability correlation for complete IT visibility.",
        "features": [
            "Agentless auto-discovery across network & cloud",
            "Hardware & software inventory management",
            "Shadow IT detection & SaaS rationalization",
            "CMDB integration (ServiceNow, Jira, Freshservice)",
            "Software license optimization & compliance",
            "Asset lifecycle tracking (procure → retire)",
            "Vulnerability correlation per asset",
            "Contract & warranty management",
        ],
        "benefits": [
            "Know exactly what you have — eliminate blind spots",
            "Reduce software spend by 20-30% through license optimization",
            "Shut down shadow IT before it becomes a risk",
            "Single source of truth for audit and compliance",
        ],
        "pricing": {
            "starter": "1997",
            "pro": "5997",
            "enterprise": "12997",
        },
        "icon": "🖥️",
        "category": "it",
        "popular": True,
        "industry": "IT Operations",
        "href": "/services/wave126-it-asset-discovery-management",
    },

    # ── AI Services (5) ────────────────────────────────────────────────
    {
        "id": "wave127-ai-synthetic-data-generator",
        "title": "AI Synthetic Data Generator",
        "description": "Generate privacy-safe, statistically faithful synthetic datasets for ML model training and testing. Preserves multivariate distributions and relational integrity — fully GDPR- and HIPAA-compliant so you can innovate without exposing real PII.",
        "features": [
            "Statistically faithful synthetic data generation",
            "GDPR & HIPAA compliance by design",
            "Multivariate distribution preservation",
            "Relational integrity across linked tables",
            "Differential privacy guarantees",
            "Tabular, time-series, and image data support",
            "Quality metrics & fidelity scoring",
            "API-first with Python SDK & CLI",
        ],
        "benefits": [
            "Train ML models without real data risk",
            "Share datasets across teams and borders freely",
            "Accelerate development with unlimited test data",
            "Pass privacy audits with mathematical guarantees",
        ],
        "pricing": {
            "starter": "997",
            "pro": "2997",
            "enterprise": "6997",
        },
        "icon": "🧪",
        "category": "ai",
        "popular": True,
        "industry": "Data Science",
        "href": "/services/wave127-ai-synthetic-data-generator",
    },
    {
        "id": "wave127-multimodal-ai-search",
        "title": "Multimodal AI Search",
        "description": "Unified semantic search across text, images, video, and audio within a single query. Vision-language models understand visual content, speech-to-text handles audio, and cross-modal ranking surfaces the most relevant results regardless of format.",
        "features": [
            "Cross-modal search (text → image, image → video, etc.)",
            "Vision-language model for visual understanding",
            "Speech-to-text audio indexing & search",
            "Video scene detection & timestamped retrieval",
            "Hybrid semantic + keyword ranking",
            "Real-time indexing with incremental updates",
            "Fine-tuning on enterprise domain data",
            "SaaS & self-hosted deployment options",
        ],
        "benefits": [
            "Find information regardless of format — text, image, or video",
            "Search visual assets without manual tagging",
            "Reduce time-to-insight across unstructured data",
            "Enterprise-grade relevance with domain fine-tuning",
        ],
        "pricing": {
            "starter": "2497",
            "pro": "7997",
            "enterprise": "16997",
        },
        "icon": "🔎",
        "category": "ai",
        "popular": True,
        "industry": "Enterprise Search",
        "href": "/services/wave127-multimodal-ai-search",
    },
    {
        "id": "wave127-ai-agent-orchestrator",
        "title": "AI Agent Orchestrator",
        "description": "Production-grade platform for managing, monitoring, and scaling fleets of autonomous AI agents. Define workflows, enforce guardrails, track performance, and coordinate multi-agent systems — turning experimental agents into reliable business automation.",
        "features": [
            "Multi-agent workflow definition & orchestration",
            "Guardrail enforcement & output validation",
            "Real-time agent monitoring & observability",
            "Human-in-the-loop escalation paths",
            "Agent performance analytics & benchmarking",
            "Tool & API permission management",
            "Agent versioning & rollback",
            "Horizontal auto-scaling for peak workloads",
        ],
        "benefits": [
            "Deploy AI agents to production with confidence",
            "Coordinate complex multi-step tasks across agents",
            "Full auditability and compliance for autonomous systems",
            "Scale agent fleets from 10 to 10,000 seamlessly",
        ],
        "pricing": {
            "starter": "4997",
            "pro": "14997",
            "enterprise": "34997",
        },
        "icon": "🤖",
        "category": "ai",
        "popular": True,
        "industry": "AI Automation",
        "href": "/services/wave127-ai-agent-orchestrator",
    },
    {
        "id": "wave127-predictive-maintenance-ai",
        "title": "Predictive Maintenance AI",
        "description": "ML-powered prediction of equipment failures from IoT sensor streams, maintenance logs, and environmental data. Forecasts remaining useful life, prescribes optimal intervention timing, and reduces unplanned downtime by up to 50%.",
        "features": [
            "IoT sensor data ingestion & real-time processing",
            "Remaining useful life (RUL) estimation",
            "Anomaly detection on multivariate sensor streams",
            "Failure mode classification & root cause hints",
            "Optimal maintenance scheduling & cost trade-offs",
            "Digital twin integration for what-if simulation",
            "Alert routing to CMMS & work order systems",
            "Model retraining pipeline for concept drift",
        ],
        "benefits": [
            "50% reduction in unplanned downtime",
            "Extend asset lifespan with optimal intervention timing",
            "Reduce maintenance costs with condition-based strategies",
            "Safety improvement through early failure warning",
        ],
        "pricing": {
            "starter": "3997",
            "pro": "11997",
            "enterprise": "24997",
        },
        "icon": "⚙️",
        "category": "ai",
        "popular": True,
        "industry": "Industrial IoT",
        "href": "/services/wave127-predictive-maintenance-ai",
    },
    {
        "id": "wave127-ai-legal-document-analyzer",
        "title": "AI-Powered Legal Document Analyzer",
        "description": "Intelligent contract review at scale — extracts clauses, evaluates risk, compares against gold-standard templates, and generates redline suggestions. Handles 50+ document types from NDAs to M&A agreements, cutting legal review costs by 70%.",
        "features": [
            "Automated clause extraction & classification",
            "Risk scoring with explanations & citations",
            "Template comparison & deviation analysis",
            "Redline & markup suggestion generation",
            "50+ document type support (NDA, SaaS, M&A, etc.)",
            "Obligation extraction & deadline tracking",
            "Multi-language contract analysis",
            "Integration with CLM platforms (Ironclad, DocuSign)",
        ],
        "benefits": [
            "70% reduction in legal review costs",
            "Never miss a risky clause again",
            "Standardize contracts across the organization",
            "Accelerate deal cycles from weeks to days",
        ],
        "pricing": {
            "starter": "1997",
            "pro": "5997",
            "enterprise": "14997",
        },
        "icon": "⚖️",
        "category": "ai",
        "popular": True,
        "industry": "Legal",
        "href": "/services/wave127-ai-legal-document-analyzer",
    },

    # ── Industry Solutions (5) ──────────────────────────────────────────
    {
        "id": "wave127-healthcare-ai-diagnostics",
        "title": "Healthcare AI Diagnostics Assistant",
        "description": "FDA-aligned AI assistant for clinical decision support. Analyzes medical imaging (X-ray, CT, MRI), correlates patient history, and surfaces differential diagnoses with evidence citations — augmenting clinician judgment, not replacing it.",
        "features": [
            "Medical imaging analysis (X-ray, CT, MRI, ultrasound)",
            "Differential diagnosis with evidence scoring",
            "Patient history correlation & risk factorization",
            "FDA 510(k) alignment & validation tracking",
            "Clinical workflow integration (EHR/FHIR)",
            "Peer-reviewed literature citation engine",
            "Bias detection & fairness monitoring",
            "Audit trail for clinical AI recommendations",
        ],
        "benefits": [
            "Augment diagnostic accuracy — not replace clinical judgment",
            "Reduce diagnostic turnaround from hours to minutes",
            "Equitable AI with continuous bias monitoring",
            "Full regulatory traceability for CMS / Joint Commission",
        ],
        "pricing": {
            "starter": "9997",
            "pro": "29997",
            "enterprise": "69997",
        },
        "icon": "🏥",
        "category": "ai",
        "popular": True,
        "industry": "Healthcare IT",
        "href": "/services/wave127-healthcare-ai-diagnostics",
    },
    {
        "id": "wave127-fintech-fraud-detection",
        "title": "FinTech Fraud Detection Engine",
        "description": "Real-time transaction monitoring with graph-based anomaly detection, behavioral biometrics, and adaptive ML models. Scores every transaction in under 50ms, reduces false positives by 80%, and integrates with payment processors for instant blocking.",
        "features": [
            "Real-time transaction scoring (<50ms latency)",
            "Graph-based fraud ring detection",
            "Behavioral biometrics (keystroke, device fingerprint)",
            "Adaptive ML with online learning from feedback",
            "Multi-channel monitoring (card, ACH, wire, crypto)",
            "Case management with SAR auto-generation",
            "Model explainability for regulatory compliance",
            "Integration with Stripe, Adyen, Fiserv, Plaid",
        ],
        "benefits": [
            "80% reduction in false-positive decline rates",
            "Detect fraud rings invisible to rule-based systems",
            "Sub-50ms scoring — no customer experience impact",
            "Regulatory-ready with explainable AI & SAR generation",
        ],
        "pricing": {
            "starter": "7997",
            "pro": "24997",
            "enterprise": "49997",
        },
        "icon": "🏦",
        "category": "ai",
        "popular": True,
        "industry": "FinTech",
        "href": "/services/wave127-fintech-fraud-detection",
    },
    {
        "id": "wave127-retail-personalization",
        "title": "Smart Retail Personalization Platform",
        "description": "Omnichannel personalization engine powering real-time product recommendations, dynamic pricing, and demand-driven inventory optimization. Contextual bandits adapt to shopper behavior in-session, lifting conversion 15-30% and reducing overstock by 20%.",
        "features": [
            "Real-time product recommendations (contextual bandits)",
            "Dynamic pricing & promo optimization",
            "Demand forecasting & inventory balancing",
            "Omnichannel session stitching (web, app, in-store)",
            "Customer segmentation & cohort analytics",
            "A/B testing & experimentation framework",
            "Shopify, Magento, Commerce Tools integration",
            "Privacy-first design (no PII leaves your infra)",
        ],
        "benefits": [
            "15-30% uplift in conversion rates",
            "20% reduction in overstock & markdowns",
            "Unified experience across every channel",
            "GDPR/CCPA compliant personalization",
        ],
        "pricing": {
            "starter": "4997",
            "pro": "14997",
            "enterprise": "32997",
        },
        "icon": "🛒",
        "category": "ai",
        "popular": True,
        "industry": "Retail Tech",
        "href": "/services/wave127-retail-personalization",
    },
    {
        "id": "wave127-manufacturing-digital-twin",
        "title": "Manufacturing Digital Twin Platform",
        "description": "High-fidelity digital replicas of production lines, facilities, and supply chains. Run what-if scenarios, optimize throughput, simulate disruptions, and validate changes before touching the physical plant — compressing commissioning time by 60%.",
        "features": [
            "High-fidelity process simulation & 3D visualization",
            "What-if scenario engine with constraint solving",
            "Real-time IoT data synchronization with twin",
            "Throughput optimization & bottleneck analysis",
            "Supply chain disruption simulation",
            "Energy consumption modeling & optimization",
            "AR/VR overlay for shop-floor visualization",
            "Integration with SCADA, MES, and ERP systems",
        ],
        "benefits": [
            "60% faster plant commissioning and changeovers",
            "Optimize throughput without disrupting production",
            "Simulate before you build — avoid costly mistakes",
            "Reduce energy costs 10-20% with consumption modeling",
        ],
        "pricing": {
            "starter": "12997",
            "pro": "39997",
            "enterprise": "89997",
        },
        "icon": "🏭",
        "category": "ai",
        "popular": True,
        "industry": "Manufacturing Tech",
        "href": "/services/wave127-manufacturing-digital-twin",
    },
    {
        "id": "wave127-edtech-adaptive-learning",
        "title": "EdTech Adaptive Learning Engine",
        "description": "AI-driven personalized learning that adapts curricula, pacing, and assessment difficulty in real time. Knowledge graph models each learner's mastery, while spaced repetition and retrieval practice lock in retention — improving outcomes by 25-40%.",
        "features": [
            "Real-time curriculum adaptation per learner",
            "Knowledge graph mastery modeling",
            "Spaced repetition & retrieval practice scheduling",
            "Adaptive assessment generation & scoring",
            "Multi-modal content delivery (video, text, interactive)",
            "Progress analytics & early intervention alerts",
            "LMS integration (Canvas, Moodle, Blackboard)",
            "Accessibility compliance (WCAG 2.1 AA)",
        ],
        "benefits": [
            "25-40% improvement in learning outcomes",
            "Every student gets a personal tutor at scale",
            "Early intervention before students fall behind",
            "Instructor dashboards for class-level insights",
        ],
        "pricing": {
            "starter": "3997",
            "pro": "11997",
            "enterprise": "24997",
        },
        "icon": "🎓",
        "category": "ai",
        "popular": True,
        "industry": "EdTech",
        "href": "/services/wave127-edtech-adaptive-learning",
    },
]


def main():
    # Load existing data
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        existing = json.load(f)

    before = len(existing)
    existing_ids = {s["id"] for s in existing}

    # Build lookup for duplicate detection
    duplicates = [s for s in NEW_SERVICES if s["id"] in existing_ids]
    if duplicates:
        print(f"⚠️  Skipping {len(duplicates)} duplicate IDs: {[d['id'] for d in duplicates]}")
    
    to_add = [s for s in NEW_SERVICES if s["id"] not in existing_ids]

    # Add contactInfo and href to each new service
    for svc in to_add:
        href = svc["href"]
        svc["contactInfo"] = make_contact(href)

    # Append
    existing.extend(to_add)
    after = len(existing)

    # Write back
    with open(DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(existing, f, indent=2, ensure_ascii=False)
        f.write("\n")  # trailing newline

    # Summary
    print(f"\n{'='*60}")
    print(f"  Wave 126-127 Service Addition Complete")
    print(f"{'='*60}")
    print(f"  📁 File: {DATA_PATH}")
    print(f"  📊 Before: {before} services")
    print(f"  ➕ Added:  {len(to_add)} services")
    print(f"  📊 After:  {after} services")
    print(f"{'='*60}")
    print()

    # Print table of added services
    print(f"  {'#':<3} {'ID':<40} {'Category':<12} {'Pricing':<30}")
    print(f"  {'─'*3} {'─'*40} {'─'*12} {'─'*30}")
    for i, svc in enumerate(to_add, 1):
        prices = svc["pricing"]
        price_str = f"${prices['starter']}/mo → ${prices['enterprise']}/mo"
        print(f"  {i:<3} {svc['id']:<40} {svc['category']:<12} {price_str:<30}")

    print()
    print("✅ All services appended successfully. No existing services were modified or deleted.")


if __name__ == "__main__":
    main()
