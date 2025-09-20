export interface Real2029Q2Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

const contact = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export const real2029Q2Additions: Real2029Q2Service[] = [
  {
    id: "managed-soc-as-a-service",
    name: "Managed SOC-as-a-Service",
    tagline: "24/7 monitoring, detection, and response with MDR",
    price: "$2,999/month",
    description: "Fully managed security operations with real-time threat detection, triage, and incident response. Includes SIEM setup, rule tuning, and monthly posture reports.",
    features: [
      "SIEM onboarding and tuning",
      "Managed detection and response (MDR)",
      "Threat intel and hunting",
      "Playbooks and incident reports",
      "Compliance mappings (SOC2/ISO)"
    ],
    link: "https://ziontechgroup.com/services/managed-soc-as-a-service",
    category: "Cybersecurity",
    realImplementation: true,
    contactInfo: contact
  },
  {
    id: "ai-lead-enrichment-api",
    name: "AI Lead Enrichment API",
    tagline: "Real-time firmographic, technographic, and intent signals",
    price: "$149/month",
    description: "Enrich emails and domains with company size, tech stack, industry, and buying stage intent using multiple data sources and ML inference.",
    features: [
      "Email/domain enrichment",
      "Company and role inference",
      "Intent and fit scoring",
      "Webhook + batch exports",
      "GDPR-compliant processing"
    ],
    link: "https://ziontechgroup.com/services/ai-lead-enrichment-api",
    category: "Sales & Marketing",
    realImplementation: true,
    contactInfo: contact
  },
  {
    id: "llm-eval-harness",
    name: "LLM Eval Harness",
    tagline: "Golden sets, regressions, safety tests, and dashboards",
    price: "$199/month",
    description: "Continuously evaluate your LLM apps with golden datasets, hallucination checks, grounding scores, and release gates integrated into CI.",
    features: [
      "Golden set runner",
      "Hallucination and toxicity checks",
      "Grounding and attribution scores",
      "SARIF/CI outputs",
      "Dashboards and trends"
    ],
    link: "https://ziontechgroup.com/services/llm-eval-harness",
    category: "AI Quality",
    realImplementation: true,
    contactInfo: contact
  },
  {
    id: "data-contracts-service",
    name: "Data Contracts Service",
    tagline: "Schema SLAs, drift alerts, and producer/consumer guardrails",
    price: "$249/month",
    description: "Define and enforce data contracts across pipelines with schema registries, versioning, drift detection, and consumer impact analysis.",
    features: [
      "Schema registry + versions",
      "Contract tests and gates",
      "Drift and null spike alerts",
      "Consumer impact analysis",
      "Evidence reports for audits"
    ],
    link: "https://ziontechgroup.com/services/data-contracts-service",
    category: "Data & Analytics",
    realImplementation: true,
    contactInfo: contact
  },
  {
    id: "warehouse-query-optimizer",
    name: "Warehouse Query Optimizer",
    tagline: "Explain plans, cost hints, and auto-index/materialize",
    price: "$179/month",
    description: "Analyze Snowflake/BigQuery/Redshift workloads, generate optimization hints, recommend materialized views, and track savings over time.",
    features: [
      "Query plan analysis",
      "Cost and latency hints",
      "MV/index recommendations",
      "Scheduler and what-if",
      "Savings tracking"
    ],
    link: "https://ziontechgroup.com/services/warehouse-query-optimizer",
    category: "Data & Analytics",
    realImplementation: true,
    contactInfo: contact
  },
  {
    id: "rag-knowledge-base-in-a-week",
    name: "RAG Knowledge Base in a Week",
    tagline: "Production semantic search and QA over your docs in 7 days",
    price: "$9,999",
    description: "End-to-end implementation of a retrieval-augmented generation system with ingestion pipelines, embeddings, relevance tuning, and guardrails.",
    features: [
      "Document ingestion and chunking",
      "Hybrid vector + keyword search",
      "Prompt templates and guardrails",
      "Relevance tuning and evals",
      "Dashboards and monitoring"
    ],
    link: "https://ziontechgroup.com/services/rag-knowledge-base-in-a-week",
    category: "AI & Machine Learning",
    realImplementation: true,
    contactInfo: contact
  },
  {
    id: "cloud-finops-advisory",
    name: "Cloud FinOps Advisory",
    tagline: "Rightsizing, reservations, and unit economics coaching",
    price: "$4,999",
    description: "Hands-on FinOps program with monthly reviews, commitment planning, and dashboards to align cost with business value.",
    features: [
      "Savings plan recommendations",
      "Rightsizing playbooks",
      "Unit economics models",
      "Monthly executive reviews",
      "Automation hooks"
    ],
    link: "https://ziontechgroup.com/services/cloud-finops-advisory",
    category: "Cloud & Infrastructure",
    realImplementation: true,
    contactInfo: contact
  },
  {
    id: "managed-m365-hardening",
    name: "Managed M365 Hardening",
    tagline: "Baselines, drift detection, and automated remediation",
    price: "$1,999/month",
    description: "Enforce M365 security baselines with continuous drift detection and remediation. Includes reporting and auditor-ready evidence packs.",
    features: [
      "Secure baseline as code",
      "Misconfig detection",
      "Auto-remediation playbooks",
      "Weekly drift reports",
      "Audit evidence exports"
    ],
    link: "https://ziontechgroup.com/services/managed-m365-hardening",
    category: "Security & IT",
    realImplementation: true,
    contactInfo: contact
  }
];

