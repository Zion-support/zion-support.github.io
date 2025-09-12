import SEO from '@/components/SEO';
import { Cloud } from 'lucide-react';
import { Code } from 'lucide-react';
const features = [];
const benefits = [];
const useCases = [];
const integrations = [];
const services = [];
const solutions = [];

export interface EnhancedService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "micro-saas" | "it-services" | "ai-services" | "emerging-tech";
pricing: {

    monthly: string;
    yearly: string;
    enterprise: string;
    setup: string;
}
  features: string[];
  benefits: string[];
  technology: string[];
  integrations: string[];
  useCases: string[];
  targetAudience: string;
  marketPosition: string;
  competitors: string[];
  roi: string;
  trialDays: number;
  setupTime: string;
  icon: string;
  color: string;
  link: string;
  contactInfo: {

    mobile: string;
    email: string;
    address: string;
    website: string}}
export const ENHANCED_SERVICES_2025: EnhancedService2025[] = [// AI-Powered Autonomous Services;
  {

    id: "ai-autonomous-business-manager","
    title: "AI Autonomous Business Manager","
    description: "Fully autonomous business operations powered by advanced AI with real-time decision making, resource optimization, and strategic planning.","
    category: "AI & Autonomous Systems"
    price: 2999,"
    currency: "$","
    tags["Autonomous Operations", "AI Decision Making", "Business Intelligence", "Strategic Planning"]
    author: {
"
      name: "Zion AI Labs","
      id: "zion-ai-labs","
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto = format&fit=crop&w=100&h=100"},"
    images["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],"
    createdAt: "2025-01-15T10:00:00.000Z"
    aiScore: 99;
    rating: 4.9;
    reviewCount: 28;
    features[;"
      "Autonomous decision-making engine","
      "Real-time market analysis","
      "Predictive business modeling","
      "Resource optimization algorithms","
      "Strategic planning automation"
    ],"
    useCases["Business automation", "Strategic planning", "Resource optimization", "Risk management"],"
    integrations["ERP Systems", "CRM Platforms", "Financial Software", "HR Systems"],"
    marketPosition: "First-to-market autonomous business management platform","
    targetAudience: "Enterprise businesses, Fortune 500 companies, tech startups"
    trialDays: 30,"
    setupTime: "2-4 weeks"
    contactInfo: {

        mobile: string;
        email: string;
        address: string;
        website: string}
;
};
  ;
  ;
  ;
  website: "https://ziontechgroup.com"};
;
export const enhancedServices2025: EnhancedService[] = [{

        id: "ai-powered-code-review-assistant",
        name: "AI-Powered Code Review Assistant",
        tagline: "Automated code quality, security scanning, and best-practice guidance",
        description: "Analyzes pull requests to flag security risks, style issues, and performance regressions.Posts actionable comments, gates CI on severity rules, and learns from team decisions.",
        category: "micro-saas",
        pricing: { monthly: "$199/month", yearly: "$1,999/year", enterprise: "Custom", setup: "$299 one-time" },
        features: ["
            "OWASP and supply‑chain risk checks",PR auto-comments with code snippets",Custom policy rules and severity gates",Multi-language static analysis + ML insights",CI/CD integrations(GitHub, GitLab, Bitbucket)

        ],
        benefits: ["
            "Cut review time 40–60%",Catch critical issues pre-merge",Standardize engineering quality",Reduce technical debt"
        ],
        roi: "Reduce rework and incidents; recoup 5–10 dev hours/week/team",
        trialDays: 14,
        setupTime: "2 hours",
        icon: "🔍",
        color: "from-blue-600 to-indigo-700",
        link: "/services/ai-code-review-assistant",
        technology: ["AI/ML",SAST",SBOM"],
        integrations: ["GitHub",GitLab",Bitbucket",Jira",Slack"],
        useCases: ["Secure SDLC",Code quality",Compliance gates"],
        targetAudience: "Engineering teams and platform engineering",
        marketPosition: "AI-first code review companion",
        competitors: ["SonarQube",CodeClimate",Snyk Code"],
        contactInfo: CONTACT
    },
    {

        id: "intelligent-incident-response-platform",
        name: "Intelligent Incident Response Platform",
        tagline: "AI detection, response runbooks, and post-mortems",
        description: "Unifies alert correlation, automated triage, and guided remediation with live runbooks and evidence capture for faster incident resolution.",
        category: "micro-saas",
        pricing: { monthly: "$299/month", yearly: "$2,999/year", enterprise: "Custom", setup: "$499 one-time" },
        features: ["
            "Alert deduplication and correlation",Auto-triage and enrichment",Runbook automation",RCA templates and knowledge capture",SIEM/EDR integrations"
        ],
        benefits: ["MTTR ↓ up to 70%",Fewer false positives",Better post‑incident learning"],
        roi: "Fewer outages and faster recoveries",
        trialDays: 14,
        setupTime: "4 hours",
        icon: "🚨",
        color: "from-red-600 to-pink-700",
        link: "/services/incident-response-platform",
        technology: ["AI/ML",Automation"],
        integrations: ["SIEM",EDR",Slack",Teams",Jira"],
        contactInfo: CONTACT
    },
    {

        id: "smart-invoice-management-system",
        name: "Smart Invoice Management System",
        tagline: "OCR, approvals, and payment reconciliation",
        description: "End-to-end AP automation with invoice capture, duplicate detection, policy workflows, and payment status sync.",
        category: "micro-saas",
        pricing: { monthly: "$79/month", yearly: "$799/year", enterprise: "Custom", setup: "$199 one-time" },
        features: ["OCR and entity extraction",Approval workflows",3‑way match",Vendor portal",Analytics"],
        benefits: ["Cycle time ↓ 90%",Errors ↓ 95%",Better cash visibility"],
        roi: "Lower processing cost per invoice by 60%",
        trialDays: 30,
        setupTime: "1 hour",
        icon: "📄",
        color: "from-green-600 to-emerald-700",
        link: "/services/invoice-management",
        contactInfo: CONTACT
    },
    {

        id: "ai-customer-success-automation",
        name: "AI Customer Success Automation",
        tagline: "Onboarding journeys, churn prediction, and health scoring",
        description: "Customer lifecycle automation with risk prediction, QBR prep, and proactive playbooks to scale CS impact.",
        category: "micro-saas",
        pricing: { monthly: "$149/month", yearly: "$1,499/year", enterprise: "Custom", setup: "$299 one-time" },
        features: ["Journeys & playbooks",Churn prediction",Health scores",NPS/CSAT",CRM sync"],
        benefits: ["Retention ↑ 25–30%",Time-to-value ↓",Scaled touch coverage"],
        roi: "Reduced churn; revenue retention uplift",
        trialDays: 14,
        setupTime: "3 hours",
        icon: "🎯",
        color: "from-purple-600 to-violet-700",
        link: "/services/customer-success-automation",
        contactInfo: CONTACT
    },
    {

        id: "intelligent-data-analytics-dashboard",
        name: "Intelligent Data Analytics Dashboard",
        tagline: "Real‑time KPIs and predictive analytics",
        description: "Unified dashboards with live connectors and automated narrative insights for business users.",
        category: "micro-saas",
        pricing: { monthly: "$199/month", yearly: "$1,999/year", enterprise: "Custom", setup: "$399 one-time" },
        features: ["Live connectors",Forecasting",Anomaly detection",Custom alerts",Embed SDK"],
        benefits: ["Decisions ↑ 40%",Reporting time ↓ 80%",Self‑serve BI"],
        roi: "Time saved on reporting and better outcomes",
        trialDays: 14,
        setupTime: "2 hours",
        icon: "📊",
        color: "from-cyan-600 to-blue-700",
        link: "/services/analytics-dashboard",
        contactInfo: CONTACT
    },
    // IT services
    {

        id: "network-security-monitoring",
        name: "Network Security Monitoring",
        tagline: "24/7 threat detection and compliance reporting",
        description: "Managed detection, continuous monitoring, and incident assistance for hybrid networks and clouds.",
        category: "it-services",
        pricing: { monthly: "$1,500/month", yearly: "$15,000/year", enterprise: "Custom", setup: "$2,000 one-time" },
        features: ["SIEM tuning",Threat intel",Vuln scanning",Compliance packs",IR support"],
        benefits: ["Fewer incidents",Audit readiness",Expert coverage"],
        roi: "Reduce security incidents by up to 60%",
        trialDays: 0,
        setupTime: "1–2 weeks",
        icon: "🛡️",
        color: "from-red-600 to-orange-700",
        link: "/services/network-security-monitoring",
        contactInfo: CONTACT
    },
    {

        id: "data-backup-recovery-solutions",
        name: "Data Backup & Recovery Solutions",
        tagline: "Automated backups with DR runbooks",
        description: "Policy-based backups, cross-region replication, encrypted stores, and verified recovery drills.",
        category: "it-services",
        pricing: { monthly: "$800/month", yearly: "$8,000/year", enterprise: "Custom", setup: "$1,500 one-time" },
        features: ["RPO/RTO design",Immutable backups",DR tests",BCP docs",24/7 support"],
        benefits: ["99.99% recovery",Compliance",Downtime ↓ 80%"],
        roi: "Avoided downtime and data loss",
        trialDays: 0,
        setupTime: "1–2 weeks",
        icon: "💾",
        color: "from-blue-600 to-indigo-700",
        link: "/services/backup-recovery",
        contactInfo: CONTACT
    },
    {

        id: "it-asset-management-platform",
        name: "IT Asset Management Platform",
        tagline: "Unified hardware, software, and license lifecycle",
        description: "Discovery, license compliance, depreciation tracking, and cost optimization with vendor workflows.",
        category: "it-services",
        pricing: { monthly: "$500/month", yearly: "$5,000/year", enterprise: "Custom", setup: "$1,000 one-time" },
        features: ["Agent/agentless discovery",License compliance",Contracts & vendors",APIs",Mobile"],
        benefits: ["IT spend ↓ 30%",Audit time ↓",Better visibility"],
        roi: "Tangible capex/opex savings",
        trialDays: 14,
        setupTime: "1 week",
        icon: "🏷️",
        color: "from-green-600 to-emerald-700",
        link: "/services/asset-management",
        contactInfo: CONTACT
    },
    // AI services
    {

        id: "ai-chatbot-development",
        name: "AI Chatbot Development",
        tagline: "Custom multilingual chat and voice bots",
        description: "24/7 support across channels with domain-tuned LLMs, guardrails, and human handoff.",
        category: "ai-services",
        pricing: { monthly: "$2,000/month", yearly: "$20,000/year", enterprise: "Custom", setup: "$5,000 one-time" },
        features: ["NLP/NLU",Retrieval augmentation",Voice IVR",Analytics",Escalation"],
        benefits: ["Costs ↓ 40%",CSAT ↑",Scale support"],
        roi: "Lower cost per contact and higher CSAT",
        trialDays: 7,
        setupTime: "2–4 weeks",
        icon: "🤖",
        color: "from-purple-600 to-violet-700",
        link: "/services/ai-chatbot",
        contactInfo: CONTACT
    },
    {

        id: "predictive-analytics-platform",
        name: "Predictive Analytics Platform",
        tagline: "Forecasting and scenario planning",
        description: "Automated model building with explainability and connectors for operational forecasting.",
        category: "ai-services",
        pricing: { monthly: "$3,500/month", yearly: "$35,000/year", enterprise: "Custom", setup: "$8,000 one-time" },
        features: ["AutoML",Explainability",What‑if",Real‑time scoring",APIs"],
        benefits: ["Revenue ↑",Stockouts ↓",Better planning"],
        roi: "Improved decisions and reduced risk",
        trialDays: 14,
        setupTime: "3–4 weeks",
        icon: "🔮",
        color: "from-indigo-600 to-purple-700",
        link: "/services/predictive-analytics",
        contactInfo: CONTACT
    },
    {

        id: "computer-vision-solutions",
        name: "Computer Vision Solutions",
        tagline: "Inspection, safety, and retail analytics",
        description: "Edge and cloud vision systems for detection, tracking, and QA with human-in-the-loop.",
        category: "ai-services",
        pricing: { monthly: "$4,000/month", yearly: "$40,000/year", enterprise: "Custom", setup: "$10,000 one-time" },
        features: ["Detection/classification",Video analytics",Realtime/edge",MLOps",Mobile SDK"],
        benefits: ["Defects ↓ 60%",Throughput ↑",Safety ↑"],
        roi: "Defect reduction and productivity gains",
        trialDays: 7,
        setupTime: "4–6 weeks",
        icon: "👁️",
        color: "from-cyan-600 to-blue-700",
        link: "/services/computer-vision",
        contactInfo: CONTACT
    },
    // Emerging tech
    {

        id: "quantum-computing-solutions",
        name: "Quantum Computing Solutions",
        tagline: "Optimization and cryptography research services",
        description: "Advisory and prototypes on major quantum platforms for hard optimization and simulation problems.",
        category: "emerging-tech",
        pricing: { monthly: "$10,000/month", yearly: "$100,000/year", enterprise: "Custom", setup: "$25,000 one-time" },
        features: ["Algorithm design",Benchmarking",Cloud quantum access",Training",Research"],
        benefits: ["Solve intractable problems",Future readiness"],
        roi: "Strategic capability building",
        trialDays: 0,
        setupTime: "2–3 months",
        icon: "⚛️",
        color: "from-violet-600 to-purple-700",
        link: "/services/quantum-computing",
        contactInfo: CONTACT
    },
    {

        id: "blockchain-web3-solutions",
        name: "Blockchain & Web3 Solutions",
        tagline: "Smart contracts, DeFi, and tokenization",
        description: "End-to-end Web3 product development with audits and token economics design.",
        category: "emerging-tech",
        pricing: { monthly: "$5,000/month", yearly: "$50,000/year", enterprise: "Custom", setup: "$15,000 one-time" },
        features: ["Smart contracts",NFT/DeFi",Audits",Cross-chain",Wallets"],
        benefits: ["Transparency ↑",Intermediaries ↓",Security ↑"],
        roi: "Lower transaction costs; new revenue models",
        trialDays: 0,
        setupTime: "2–4 months",
        icon: "🔗",
        color: "from-orange-600 to-red-700",
        link: "/services/blockchain-web3",
        contactInfo: CONTACT
    },
    // New additions
    {

        id: "seo-content-optimizer",
        name: "SEO Content Optimizer",
        tagline: "Programmatic SEO at scale with AI",
        description: "Generates, audits, and A/B tests landing pages with structured data and internal links.",
        category: "micro-saas",
        pricing: { monthly: "$129/month", yearly: "$1,290/year", enterprise: "Custom", setup: "$199 one-time" },
        features: ["Keyword clustering",Content briefs",On-page audit",Internal linking",A/B testing"],
        benefits: ["Organic traffic ↑",Publishing velocity ↑"],
        roi: "Lower CAC via organic growth",
        trialDays: 14,
        setupTime: "1 day",
        icon: "🧭",
        color: "from-emerald-600 to-teal-700",
        link: "/services/seo-content-optimizer",
        contactInfo: CONTACT
    },
    {

        id: "ai-sales-email-copilot",
        name: "AI Sales Email Copilot",
        tagline: "Personalized outbound that actually converts",
        description: "Enrich leads, draft multi-step sequences, and adapt tone by persona with live A/B improvements.",
        category: "micro-saas",
        pricing: { monthly: "$99/month", yearly: "$990/year", enterprise: "Custom", setup: "$149 one-time" },
        features: ["Lead enrichment",Sequence drafts",Deliverability guardrails",CRM sync",Analytics"],
        benefits: ["Reply rate ↑",Time saved for AEs"],
        roi: "More meetings per rep with less effort",
        trialDays: 7,
        setupTime: "2 hours",
        icon: "✉️",
        color: "from-sky-600 to-blue-700",
        link: "/services/ai-sales-email-copilot",
        contactInfo: CONTACT
    },
    {

        id: "cloud-cost-optimizer",
        name: "Cloud Cost Optimizer",
        tagline: "Rightsizing, RI/SP management, and anomaly alerts",
        description: "Identifies idle resources, optimizes storage tiers, and automates savings plan purchases safely.",
        category: "it-services",
        pricing: { monthly: "$600/month", yearly: "$6,000/year", enterprise: "Custom", setup: "$1,000 one-time" },
        features: ["Idle detection",Scheduling",Storage tiering",RI/SP advisor",Alerts"],
        benefits: ["Cloud spend ↓ 20–40%"],
        roi: "Direct opex savings within first quarter",
        trialDays: 0,
        setupTime: "3 days",
        icon: "☁️",
        color: "from-slate-600 to-gray-700",
        link: "/services/cloud-cost-optimizer",
        contactInfo: CONTACT
    },
    {

        id: "data-governance-suite",
        name: "Data Governance Suite",
        tagline: "Lineage, PII detection, and access controls",
        description: "Map data flows, classify sensitive data, and enforce access with audit trails.",
        category: "it-services",
        pricing: { monthly: "$1,200/month", yearly: "$12,000/year", enterprise: "Custom", setup: "$3,000 one-time" },
        features: ["Catalog and lineage",PII scanners",DLP policies",RBAC/ABAC",Audit"],
        benefits: ["Compliance readiness",Reduced data risk"],
        roi: "Avoided fines and faster audits",
        trialDays: 0,
        setupTime: "2–4 weeks",
        icon: "🧭",
        color: "from-amber-600 to-yellow-700",
        link: "/services/data-governance-suite",
        contactInfo: CONTACT
    },
    {

        id: "ai-rag-knowledge-base",
        name: "AI RAG Knowledge Base",
        tagline: "Private, secure retrieval-augmented generation",
        description: "Index your documents and systems to power grounded LLM answers with citations and access controls.",
        category: "ai-services",
        pricing: { monthly: "$1,500/month", yearly: "$15,000/year", enterprise: "Custom", setup: "$4,000 one-time" },
        features: ["Connectors",Chunking & embeddings",Citations",Guardrails",Admin console"],
        benefits: ["Faster knowledge access",Reduced support load"],
        roi: "Employee time savings and better accuracy",
        trialDays: 14,
        setupTime: "2–3 weeks",
        icon: "📚",
        color: "from-fuchsia-600 to-rose-700",
        link: "/services/ai-rag-knowledge-base",
        contactInfo: CONTACT
    },
    {

        id: "edge-iot-observability",
        name: "Edge IoT Observability",
        tagline: "Unified metrics, logs, and traces for fleets",
        description: "Collects telemetry from constrained devices and gateways with offline buffering and OTA updates.",
        category: "emerging-tech",
        pricing: { monthly: "$1,000/month", yearly: "$10,000/year", enterprise: "Custom", setup: "$2,000 one-time" },
        features: ["OpenTelemetry",Edge buffering",Fleet updates",Digital twins",Rules engine"],
        benefits: ["Fewer truck rolls",Uptime ↑"],
        roi: "Operational efficiency at the edge",
        trialDays: 7,
        setupTime: "3–6 weeks",
        icon: "📡",
        color: "from-lime-600 to-green-700",
        link: "/services/edge-iot-observability",
        contactInfo: CONTACT