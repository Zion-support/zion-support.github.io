export interface Service {;
  id: string;
  name: string;
  category: "micro-saas" | "it-services" | "ai-services";
  description: string;
  features: string[];
  pricing: {;
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;,
}
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: string;,
}
;
export const services: Service[] = [;
  // Micro SaaS Services;
  {;
    id: "ai-content-generator",;
    name: "AI Content Generator Pro",;
    category: "micro-saas",;
    description: "Advanced AI-powered content generation platform for blogs, social media, and marketing materials with GPT-4 integration.",;
    features: [;
      "Multi-language content generation",;
      "SEO-optimized content",;
      "Brand voice customization",;
      "Content scheduling",;
      "Analytics dashboard",;
      "API integration",;
      "Plagiarism detection",;
      "Content templates library";
    ],;
    pricing: {;
      starter: 29,;
      professional: 79,;
      enterprise: 199,;
      currency: "USD";,
},;
    benefits: [;
      "10x faster content creation",;
      "Consistent brand messaging",;
      "SEO optimization built-in",;
      "Multi-platform publishing",;
      "Cost-effective content marketing";
    ],;
    useCases: [;
      "Blog content creation",;
      "Social media management",;
      "Email marketing campaigns",;
      "Product descriptions",;
      "Marketing copywriting";
    ],;
    technologies: ["OpenAI GPT-4", "React", "Node.js", "PostgreSQL", "Stripe"],;
    link: "https://ziontechgroup.com/services/ai-content-generator",;
    icon: "📝";,
},;
  {;
    id: "ai-contract-clause-checker",;
    name: "AI Contract Clause Checker",;
    category: "micro-saas",;
    description: "Instantly review contracts for risky clauses, missing terms, and compliance issues with explainable AI suggestions.",;
    features: [;
      "Risky clause detection and highlights",;
      "Jurisdiction-aware templates",;
      "Playbook and fallback language library",;
      "Version comparison and redlines",;
      "Export to DOCX/PDF",;
      "Secure data handling and audit log",;
      "API for CLM integration",;
      "Multi-language support";
    ],;
    pricing: { starter: 39, professional: 99, enterprise: 299, currency: "USD" },;
    benefits: [;
      "Reduce legal review time by 60%",;
      "Improve compliance and reduce risk",;
      "Enable business teams to self-serve",;
      "Lower outside counsel costs";
    ],;
    useCases: ["Sales contract review", "Vendor agreements", "DPAs and NDAs", "MSAs and SOWs"],;
    technologies: ["OpenAI", "RAG", "Vector DB", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/ai-contract-clause-checker",;
    icon: "⚖️";,
},;
  {;
    id: "customer-feedback-analyzer",;
    name: "Customer Feedback Analyzer",;
    category: "micro-saas",;
    description: "Aggregate app reviews, NPS, tickets, and social mentions into one AI-structured insight hub with themes and priorities.",;
    features: [;
      "Unified feedback ingestion",;
      "Topic and sentiment clustering",;
      "Impact vs effort prioritization",;
      "Release note generator",;
      "Slack/Jira bi-directional sync",;
      "Dashboards and alerts",;
      "Multi-brand and locale support",;
      "Data export/API";
    ],;
    pricing: { starter: 29, professional: 79, enterprise: 249, currency: "USD" },;
    benefits: ["Faster product decisions", "Higher CSAT/NPS", "Less manual tagging", "Clear roadmap inputs"],;
    useCases: ["Product ops", "Support ops", "Marketing insights", "Voice of customer"],;
    technologies: ["NLP", "Embeddings", "React", "Node.js", "PostgreSQL"],;
    link: "https://ziontechgroup.com/services/customer-feedback-analyzer",;
    icon: "🗣️";,
},;
  {;
    id: "invoice-processing-automation",;
    name: "Invoice Processing Automation",;
    category: "micro-saas",;
    description: "Extract, validate, and reconcile invoices from email and portals with 2/3-way PO matching and ERP sync.",;
    features: [;
      "Document capture and OCR",;
      "Key-value extraction and validation",;
      "PO and receipt matching",;
      "Duplicate and fraud detection",;
      "Approval workflows",;
      "ERP connectors (NetSuite, SAP, QuickBooks)",;
      "Exception handling queue",;
      "Audit trail and reports";
    ],;
    pricing: { starter: 49, professional: 149, enterprise: 399, currency: "USD" },;
    benefits: ["Cut AP processing cost 50%+", "Faster closing", "Fewer errors", "Better cash visibility"],;
    useCases: ["Accounts payable", "Shared service centers", "Procurement", "Finance ops"],;
    technologies: ["OCR", "OpenAI", "ETL", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/invoice-processing-automation",;
    icon: "🧾";,
},;
  {;
    id: "no-code-data-pipelines",;
    name: "No‑Code Data Pipelines",;
    category: "micro-saas",;
    description: "Drag-and-drop pipelines to move and transform data between SaaS apps, warehouses, and lakes with governance.",;
    features: [;
      "Visual pipeline builder",;
      "Prebuilt connectors",;
      "Scheduled and event-driven runs",;
      "Data quality checks",;
      "Schema evolution handling",;
      "Credential vault and RBAC",;
      "Observability and retries",;
      "Versioning and change review";
    ],;
    pricing: { starter: 59, professional: 199, enterprise: 799, currency: "USD" },;
    benefits: ["Ship integrations faster", "Reduce engineering toil", "Reliable pipelines", "Lower TCO"],;
    useCases: ["RevOps integrations", "Analytics ingestion", "Back-office automation", "Data sharing"],;
    technologies: ["dbt", "Airflow", "Fivetran-style", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/no-code-data-pipelines",;
    icon: "🧩";,
},;
  {;
    id: "ai-video-subtitle-generator",;
    name: "AI Video Subtitle Generator",;
    category: "micro-saas",;
    description: "Auto-generate multilingual, brand-styled subtitles and captions for marketing and training videos with high accuracy.",;
    features: [;
      "High-accuracy transcription",;
      "Speaker diarization",;
      "On-brand style templates",;
      "40+ languages and locales",;
      "Burn-in and SRT/VTT export",;
      "Batch processing",;
      "Team collaboration",;
      "YouTube/Vimeo/TikTok integrations";
    ],;
    pricing: { starter: 15, professional: 49, enterprise: 199, currency: "USD" },;
    benefits: ["Faster localization", "Accessible content", "Higher engagement", "Lower editing cost"],;
    useCases: ["Marketing teams", "Course creators", "Internal training", "Agencies"],;
    technologies: ["Whisper", "FFmpeg", "React", "Node.js", "GPU"],;
    link: "https://ziontechgroup.com/services/ai-video-subtitle-generator",;
    icon: "🎬";,
},;
  {;
    id: "zero-trust-network-deployment",;
    name: "Zero Trust Network Deployment",;
    category: "it-services",;
    description: "Design and roll out zero-trust architectures with identity-aware access, micro-segmentation, and continuous verification.",;
    features: [;
      "Current-state assessment",;
      "Identity and device posture",;
      "Policy and micro-segmentation",;
      "Secure access to apps and data",;
      "MFA/SSO rollout",;
      "SIEM/SOAR integrations",;
      "Runbooks and training",;
      "Ongoing monitoring";
    ],;
    pricing: { starter: 25000, professional: 90000, enterprise: 250000, currency: "USD" },;
    benefits: ["Reduce lateral movement risk", "Meet compliance goals", "Stronger security posture", "Better user experience"],;
    useCases: ["Remote workforce", "Hybrid cloud", "Regulated industries", "High-value assets"],;
    technologies: ["Okta", "Zscaler", "CrowdStrike", "Azure AD", "Kubernetes"],;
    link: "https://ziontechgroup.com/services/zero-trust-network-deployment",;
    icon: "🔒";,
},;
  {;
    id: "managed-kubernetes-platform",;
    name: "Managed Kubernetes Platform Engineering",;
    category: "it-services",;
    description: "Platform engineering for Kubernetes with GitOps, golden paths, cost governance, and secure multi-tenant clusters.",;
    features: [;
      "Cluster landing zone",;
      "GitOps with Argo CD/Flux",;
      "Golden path developer portals",;
      "Network and policy baselines",;
      "Observability and SLOs",;
      "FinOps guardrails",;
      "Backup and DR",;
      "Playbooks and enablement";
    ],;
    pricing: { starter: 40000, professional: 120000, enterprise: 300000, currency: "USD" },;
    benefits: ["Faster delivery", "Secure by default", "Predictable costs", "Happier developers"],;
    useCases: ["Microservices estates", "Data platforms", "ML workloads", "Edge"],;
    technologies: ["Kubernetes", "Terraform", "Argo CD", "Istio", "Grafana"],;
    link: "https://ziontechgroup.com/services/managed-kubernetes-platform",;
    icon: "☸️";,
},;
  {;
    id: "data-platform-modernization",;
    name: "Data Platform Modernization Assessment",;
    category: "it-services",;
    description: "Comprehensive assessment to modernize your data platform across ingestion, storage, transformation, governance, and BI.",;
    features: [;
      "Current-state review",;
      "Architecture blueprint",;
      "Cost and performance analysis",;
      "Security and compliance review",;
      "Roadmap and quick wins",;
      "Pilot implementation",;
      "Change management",;
      "Executive briefing";
    ],;
    pricing: { starter: 18000, professional: 60000, enterprise: 180000, currency: "USD" },;
    benefits: ["Lower data latency", "Reduced spend", "Higher trust and adoption", "Faster insights"],;
    useCases: ["Warehouse to lakehouse", "Marketing data hub", "Realtime analytics", "Self-serve BI"],;
    technologies: ["Snowflake", "BigQuery", "Databricks", "dbt", "Airflow"],;
    link: "https://ziontechgroup.com/services/data-platform-modernization",;
    icon: "🗄️";,
},;
  {;
    id: "genai-customer-support-agent",;
    name: "GenAI Customer Support Agent",;
    category: "ai-services",;
    description: "Deploy source-grounded AI agents that deflect tickets, resolve issues, and hand off with full context to human agents.",;
    features: [;
      "Omnichannel chat and email",;
      "Citations and step validation",;
      "Escalation with context packs",;
      "PII redaction and guardrails",;
      "Multi-lingual support",;
      "CS platform integrations",;
      "A/B experiments and analytics",;
      "Human-in-the-loop review";
    ],;
    pricing: { starter: 7000, professional: 25000, enterprise: 150000, currency: "USD" },;
    benefits: ["Lower handle time", "Higher first-contact resolution", "Happier customers", "Lower cost per ticket"],;
    useCases: ["E-commerce support", "SaaS troubleshooting", "Telecom billing", "Banking FAQs"],;
    technologies: ["RAG", "OpenAI", "LangChain", "Next.js", "Zendesk/Freshdesk"],;
    link: "https://ziontechgroup.com/services/genai-customer-support-agent",;
    icon: "🤝";,
},;
  {;
    id: "document-intelligence-suite",;
    name: "Document Intelligence Suite",;
    category: "ai-services",;
    description: "End-to-end document AI for extraction, classification, validation, and workflows across PDFs, scans, and forms.",;
    features: [;
      "Layout-aware extraction",;
      "Few-shot customization",;
      "Document classification",;
      "Business rule validation",;
      "Human review UI",;
      "ERP/CRM integrations",;
      "Monitoring and QA",;
      "Security and compliance";
    ],;
    pricing: { starter: 8000, professional: 30000, enterprise: 180000, currency: "USD" },;
    benefits: ["Reduce manual entry", "Faster SLAs", "Higher accuracy", "Scalable automation"],;
    useCases: ["KYC/AML", "Claims intake", "Loan processing", "HR onboarding"],;
    technologies: ["Transformers", "OCR", "Python", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/document-intelligence-suite",;
    icon: "📄";,
},;
  {;
    id: "predictive-maintenance-iot",;
    name: "Predictive Maintenance for IoT Fleets",;
    category: "ai-services",;
    description: "Sensor-driven predictive maintenance to reduce unplanned downtime with anomaly detection and failure prediction.",;
    features: [;
      "Edge and cloud ingestion",;
      "Feature engineering for time series",;
      "Anomaly and failure models",;
      "Maintenance scheduling",;
      "Technician mobile app",;
      "CMMS/ERP integrations",;
      "Drift monitoring",;
      "ROI dashboards";
    ],;
    pricing: { starter: 12000, professional: 60000, enterprise: 250000, currency: "USD" },;
    benefits: ["Reduce downtime 20–40%", "Lower spare part costs", "Higher asset life", "Safer operations"],;
    useCases: ["Manufacturing lines", "Wind turbines", "Fleet vehicles", "Mining equipment"],;
    technologies: ["IoT", "Time-series ML", "Azure/AWS IoT", "Grafana", "Airflow"],;
    link: "https://ziontechgroup.com/services/predictive-maintenance-iot",;
    icon: "⚙️";,
},;
  {;
    id: "ai-meeting-notes-assistant",;
    name: "AI Meeting Notes Assistant",;
    category: "micro-saas",;
    description: "Automated recording, transcription, summarization, and action-item extraction for meetings across Zoom, Google Meet, and Teams.",;
    features: [;
      "One-click meeting recording",;
      "Accurate multilingual transcription",;
      "Key-point and decision summaries",;
      "Action items with owners and due dates",;
      "CRM and task manager sync (HubSpot, Jira, Asana)",;
      "Speaker diarization",;
      "Secure storage and search",;
      "Compliance-friendly redaction";
    ],;
    pricing: { starter: 19, professional: 49, enterprise: 149, currency: "USD" },;
    benefits: [;
      "Save 4+ hours per week per employee",;
      "Never miss decisions or follow-ups",;
      "Centralized, searchable meeting knowledge",;
      "Improved accountability across teams";
    ],;
    useCases: [;
      "Sales and customer success reviews",;
      "Engineering standups and retrospectives",;
      "Executive and board meetings",;
      "Client discovery and requirement gathering";
    ],;
    technologies: ["Whisper/ASR", "OpenAI", "React", "Node.js", "PostgreSQL"],;
    link: "https://ziontechgroup.com/services/ai-meeting-notes-assistant",;
    icon: "📝";,
},;
  {;
    id: "whatsapp-crm-inbox",;
    name: "WhatsApp CRM Inbox",;
    category: "micro-saas",;
    description: "Unified WhatsApp shared inbox with automation, templates, and CRM enrichment for SMB sales and support teams.",;
    features: [;
      "Team shared inbox and assignment",;
      "Templates and quick replies",;
      "AI reply suggestions",;
      "Contact enrichment and tagging",;
      "Campaign broadcasts with opt-in",;
      "CRM sync (HubSpot, Pipedrive)",;
      "Metrics and SLA tracking",;
      "Role-based permissions";
    ],;
    pricing: { starter: 29, professional: 79, enterprise: 199, currency: "USD" },;
    benefits: [;
      "Faster first-response times",;
      "Higher conversion from chat-to-deal",;
      "Reduced context switching",;
      "Compliance-friendly messaging";
    ],;
    useCases: ["Inbound sales", "Customer support", "Abandoned cart recovery", "Local services intake"],;
    technologies: ["Meta WhatsApp API", "React", "Node.js", "Redis"],;
    link: "https://ziontechgroup.com/services/whatsapp-crm-inbox",;
    icon: "💬";,
},;
  {;
    id: "local-seo-audit-suite",;
    name: "Local SEO Audit Suite",;
    category: "micro-saas",;
    description: "Automated local SEO audits with citation checks, GBP optimization, review insights, and prioritized recommendations.",;
    features: [;
      "Google Business Profile audit",;
      "NAP consistency checks",;
      "Review sentiment analysis",;
      "Local SERP and competitor gap analysis",;
      "Structured data validation",;
      "Automated weekly reports",;
      "Backlink discovery",;
      "Actionable checklist";
    ],;
    pricing: { starter: 12, professional: 35, enterprise: 99, currency: "USD" },;
    benefits: ["Higher local rankings", "Increased foot traffic and calls", "Quick, actionable fixes", "Benchmark vs competitors"],;
    useCases: ["Local services", "Restaurants", "Clinics", "Home services"],;
    technologies: ["SEO APIs", "React", "Node.js", "PostgreSQL"],;
    link: "https://ziontechgroup.com/services/local-seo-audit-suite",;
    icon: "📍";,
},;
  {;
    id: "ai-rfp-proposal-writer",;
    name: "AI RFP & Proposal Writer",;
    category: "micro-saas",;
    description: "Generate compliant RFP responses and tailored proposals using your past wins, case studies, and brand tone.",;
    features: [;
      "RFP requirements extraction",;
      "Reusable answer library",;
      "Auto-compliance checklists",;
      "Citations and source linking",;
      "Reviewer workflows",;
      "Style and tone controls",;
      "Export to DOCX/PDF",;
      "Red teaming and accuracy guardrails";
    ],;
    pricing: { starter: 59, professional: 149, enterprise: 399, currency: "USD" },;
    benefits: ["Win more bids", "Cut drafting time by 70%", "Ensure compliance", "Consistent branding"],;
    useCases: ["Government contracts", "Enterprise RFPs", "Agency proposals", "Vendor questionnaires"],;
    technologies: ["RAG", "OpenAI", "Vector DB", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/ai-rfp-proposal-writer",;
    icon: "📄";,
},;
  {;
    id: "ecommerce-image-optimizer",;
    name: "E‑commerce Image Optimizer",;
    category: "micro-saas",;
    description: "Automated product image background removal, uniform shadows, variants, and size optimization for faster storefronts.",;
    features: [;
      "Background removal and replacement",;
      "Consistent lighting and shadow",;
      "Batch processing and presets",;
      "WebP/AVIF conversion",;
      "Shopify/BigCommerce apps",;
      "A/B visual testing",;
      "CDN delivery",;
      "Accessibility contrast checks";
    ],;
    pricing: { starter: 15, professional: 49, enterprise: 129, currency: "USD" },;
    benefits: ["Higher conversion rates", "Improved Core Web Vitals", "Brand-consistent visuals", "Reduced design costs"],;
    useCases: ["D2C stores", "Marketplaces", "Wholesale catalogs", "Dropshipping"],;
    technologies: ["Computer Vision", "FFmpeg", "CDN", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/ecommerce-image-optimizer",;
    icon: "🛍️";,
},;
  {;
    id: "soc2-readiness-and-automation",;
    name: "SOC 2 Readiness & Automation",;
    category: "it-services",;
    description: "End-to-end SOC 2 readiness with control mapping, evidence collection automation, and auditor collaboration.",;
    features: [;
      "Gap assessment and remediation plan",;
      "Automated evidence collection",;
      "Policy generation and training",;
      "Continuous control monitoring",;
      "Risk register and vendor tracking",;
      "Auditor workspace access",;
      "Ticketing and workflows",;
      "Reporting and dashboards";
    ],;
    pricing: { starter: 8000, professional: 25000, enterprise: 65000, currency: "USD" },;
    benefits: ["Faster audit timelines", "Lower compliance costs", "Reduced manual effort", "Audit-ready anytime"],;
    useCases: ["SaaS startups", "FinTech", "HealthTech", "Enterprise vendor programs"],;
    technologies: ["GRC", "SIEM", "IDP", "Cloud APIs", "Automation"],;
    link: "https://ziontechgroup.com/services/soc2-readiness-and-automation",;
    icon: "✅";,
},;
  {;
    id: "lakehouse-architecture-deployment",;
    name: "Data Lakehouse Architecture & Deployment",;
    category: "it-services",;
    description: "Design and implement a modern lakehouse leveraging open table formats, scalable ETL, and governed self-serve analytics.",;
    features: [;
      "Architecture and governance blueprint",;
      "Medallion data modeling",;
      "Ingestion and ETL pipelines",;
      "Batch and streaming processing",;
      "Data catalog and lineage",;
      "Cost and performance optimization",;
      "BI and semantic layer setup",;
      "Security and compliance";
    ],;
    pricing: { starter: 30000, professional: 90000, enterprise: 250000, currency: "USD" },;
    benefits: ["Unified storage and compute", "Lower TCO vs legacy DW", "Governed self-serve analytics", "Future-proof architecture"],;
    useCases: ["Enterprise analytics", "IoT telemetry", "Marketing data hubs", "Financial reporting"],;
    technologies: ["Delta Lake", "Iceberg", "Apache Spark", "dbt", "Airflow", "AWS/Azure/GCP"],;
    link: "https://ziontechgroup.com/services/lakehouse-architecture-deployment",;
    icon: "🏗️";,
},;
  {;
    id: "finops-cloud-cost-optimization",;
    name: "FinOps Cloud Cost Optimization",;
    category: "it-services",;
    description: "Operationalize FinOps with visibility, anomaly detection, and automated rightsizing to reduce cloud spend without slowing delivery.",;
    features: [;
      "Cost allocation and showback",;
      "Anomaly detection and alerts",;
      "Rightsizing and scheduling automation",;
      "Reserved/spot strategy",;
      "Kubernetes cost governance",;
      "Tagging standards rollout",;
      "Dashboards and KPIs",;
      "Stakeholder enablement";
    ],;
    pricing: { starter: 6000, professional: 18000, enterprise: 75000, currency: "USD" },;
    benefits: ["Reduce cloud spend 20–40%", "Faster budgeting cycles", "Predictable unit economics", "No vendor lock-in"],;
    useCases: ["SaaS platforms", "Data platforms", "Microservices estates", "Seasonal workloads"],;
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Cloud APIs", "Automation"],;
    link: "https://ziontechgroup.com/services/finops-cloud-cost-optimization",;
    icon: "💸";,
},;
  {;
    id: "sre-reliability-retainer",;
    name: "SRE Reliability Retainer",;
    category: "it-services",;
    description: "24/7 SRE services with SLIs/SLOs, incident response, and proactive reliability engineering for critical systems.",;
    features: [;
      "SLO design and error budgets",;
      "On-call runbooks and automation",;
      "Chaos and load testing",;
      "Observability as code",;
      "Post-incident reviews",;
      "Capacity planning",;
      "Reliability roadmap",;
      "Monthly executive reporting";
    ],;
    pricing: { starter: 12000, professional: 35000, enterprise: 120000, currency: "USD" },;
    benefits: ["Lower downtime risk", "Faster MTTR", "Predictable reliability", "Happier engineers and users"],;
    useCases: ["Payments and checkout", "Core APIs", "Real-time apps", "Multi-tenant SaaS"],;
    technologies: ["Terraform", "Kubernetes", "Prometheus", "Grafana", "OpenTelemetry", "PagerDuty"],;
    link: "https://ziontechgroup.com/services/sre-reliability-retainer",;
    icon: "🛠️";,
},;
  {;
    id: "rag-enterprise-search",;
    name: "RAG Enterprise Search",;
    category: "ai-services",;
    description: "Retrieval-Augmented Generation for enterprise knowledge: private, secure question answering over documents, tickets, and wikis.",;
    features: [;
      "Document ingestion and chunking",;
      "Embeddings and vector indexing",;
      "Source-grounded citations",;
      "Access control and redaction",;
      "Feedback loops and evaluation",;
      "Enterprise SSO integration",;
      "Usage analytics and guardrails",;
      "Multi-tenant isolation";
    ],;
    pricing: { starter: 10000, professional: 35000, enterprise: 120000, currency: "USD" },;
    benefits: ["Reduce search time by 80%", "Trustworthy answers with citations", "Protect sensitive data", "Scale across departments"],;
    useCases: ["Support deflection", "Policy Q&A", "Sales playbooks", "Engineering runbooks"],;
    technologies: ["RAG", "Vector DB", "OpenAI", "Azure OpenAI", "LangChain", "Next.js"],;
    link: "https://ziontechgroup.com/services/rag-enterprise-search",;
    icon: "🔎";,
},;
  {;
    id: "mlops-platform-and-ops",;
    name: "MLOps Platform & Operations",;
    category: "ai-services",;
    description: "Productionize ML with experiment tracking, model registry, CI/CD for models, monitoring, and drift remediation.",;
    features: [;
      "Feature store and governance",;
      "Experiment tracking",;
      "Model registry and promotion gates",;
      "Model CI/CD and canarying",;
      "Online/offline evaluation",;
      "Data and concept drift detection",;
      "Shadow deployments",;
      "Incident and rollback playbooks";
    ],;
    pricing: { starter: 20000, professional: 60000, enterprise: 180000, currency: "USD" },;
    benefits: ["Faster model velocity", "Reduced production risk", "Traceable lineage", "Operational excellence"],;
    useCases: ["Personalization", "Fraud detection", "Forecasting", "NLP pipelines"],;
    technologies: ["MLflow", "Kubeflow", "Vertex AI", "SageMaker", "Airflow", "dbt"],;
    link: "https://ziontechgroup.com/services/mlops-platform-and-ops",;
    icon: "🧪";,
},;
  {;
    id: "synthetic-data-generation",;
    name: "Synthetic Data Generation",;
    category: "ai-services",;
    description: "Create privacy-preserving synthetic datasets to unblock AI/analytics while meeting compliance and bias-reduction goals.",;
    features: [;
      "Tabular, image, and text synthesis",;
      "Differential privacy controls",;
      "Quality and utility evaluation",;
      "Bias detection and mitigation",;
      "Domain constraint enforcement",;
      "Secure data sandboxing",;
      "Versioning and governance",;
      "Regulatory documentation";
    ],;
    pricing: { starter: 15000, professional: 45000, enterprise: 150000, currency: "USD" },;
    benefits: ["Accelerate AI safely", "Reduce privacy risk", "Balance rare classes", "Share data across teams"],;
    useCases: ["Healthcare analytics", "Financial modeling", "CV pretraining", "Anomaly detection"],;
    technologies: ["GANs", "Diffusion", "DP-SGD", "Python", "TensorFlow", "PyTorch"],;
    link: "https://ziontechgroup.com/services/synthetic-data-generation",;
    icon: "🧬";,
},;
  {;
    id: "llm-evaluation-red-teaming",;
    name: "LLM Evaluation & Red-Teaming",;
    category: "ai-services",;
    description: "Holistic LLM safety and quality evaluation with automated test suites, jailbreak resistance, and bias and toxicity audits.",;
    features: [;
      "Automated eval harness and metrics",;
      "Adversarial prompt libraries",;
      "Hallucination and citation checks",;
      "PII/PHI leakage testing",;
      "Bias, harm, and toxicity audits",;
      "Safety guardrail tuning",;
      "Incident response runbooks",;
      "Reporting for compliance teams";
    ],;
    pricing: { starter: 12000, professional: 35000, enterprise: 100000, currency: "USD" },;
    benefits: ["Reduce production incidents", "Meet regulatory expectations", "Improve answer quality", "Strengthen brand trust"],;
    useCases: ["Customer support agents", "Internal copilots", "Content generation", "Healthcare/finance assistants"],;
    technologies: ["Eval frameworks", "OpenAI", "Azure OpenAI", "Guardrails", "Vector search"],;
    link: "https://ziontechgroup.com/services/llm-evaluation-red-teaming",;
    icon: "🛡️";,
},;
  {;
    id: "social-media-scheduler",;
    name: "Social Media Scheduler Pro",;
    category: "micro-saas",;
    description: "Comprehensive social media management platform with AI-powered content optimization and cross-platform scheduling.",;
    features: [;
      "Multi-platform scheduling",;
      "AI content optimization",;
      "Hashtag research",;
      "Analytics & reporting",;
      "Team collaboration",;
      "Content calendar",;
      "Auto-posting",;
      "Engagement tracking";
    ],;
    pricing: {;
      starter: 19,;
      professional: 49,;
      enterprise: 129,;
      currency: "USD";,
},;
    benefits: [;
      "Save 5+ hours weekly",;
      "Increase engagement by 40%",;
      "Consistent posting schedule",;
      "Data-driven insights";
    ],;
    useCases: [;
      "Small businesses",;
      "Marketing agencies",;
      "Content creators",;
      "E-commerce brands";
    ],;
    technologies: ["React", "Node.js", "MongoDB", "Social APIs", "Redis"],;
    link: "https://ziontechgroup.com/services/social-media-scheduler",;
    icon: "📱";,
},;
  {;
    id: "email-marketing-automation",;
    name: "Email Marketing Automation Suite",;
    category: "micro-saas",;
    description: "Advanced email marketing platform with AI-driven personalization, automation workflows, and detailed analytics.",;
    features: [;
      "Drag-and-drop email builder",;
      "AI personalization",;
      "Automation workflows",;
      "A/B testing",;
      "Advanced segmentation",;
      "Deliverability optimization",;
      "Analytics dashboard",;
      "Template library";
    ],;
    pricing: {;
      starter: 25,;
      professional: 65,;
      enterprise: 179,;
      currency: "USD";,
},;
    benefits: [;
      "3x higher open rates",;
      "Automated lead nurturing",;
      "Personalized customer journeys",;
      "ROI tracking";
    ],;
    useCases: [;
      "E-commerce businesses",;
      "SaaS companies",;
      "Marketing agencies",;
      "Non-profit organizations";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "SendGrid", "Redis"],;
    link: "https://ziontechgroup.com/services/email-marketing-automation",;
    icon: "📧";,
},;
  {;
    id: "invoice-management-system",;
    name: "Smart Invoice Management",;
    category: "micro-saas",;
    description: "Intelligent invoice management system with automated billing, payment tracking, and financial reporting.",;
    features: [;
      "Automated invoice generation",;
      "Payment tracking",;
      "Recurring billing",;
      "Multi-currency support",;
      "Tax calculations",;
      "Client portal",;
      "Financial reporting",;
      "Payment reminders";
    ],;
    pricing: {;
      starter: 15,;
      professional: 39,;
      enterprise: 99,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce billing time by 80%",;
      "Faster payment collection",;
      "Automated tax compliance",;
      "Better cash flow management";
    ],;
    useCases: [;
      "Freelancers",;
      "Small businesses",;
      "Consulting firms",;
      "Service providers";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "PDF.js"],;
    link: "https://ziontechgroup.com/services/invoice-management",;
    icon: "🧾";,
},;
  {;
    id: "time-tracking-productivity",;
    name: "Time Tracking & Productivity Suite",;
    category: "micro-saas",;
    description: "Comprehensive time tracking and productivity management platform with AI insights and team collaboration.",;
    features: [;
      "Automatic time tracking",;
      "Project management",;
      "Team collaboration",;
      "Productivity analytics",;
      "Screenshot monitoring",;
      "Expense tracking",;
      "Reporting dashboard",;
      "Mobile apps";
    ],;
    pricing: {;
      starter: 12,;
      professional: 29,;
      enterprise: 79,;
      currency: "USD";,
},;
    benefits: [;
      "Increase productivity by 25%",;
      "Accurate project billing",;
      "Team performance insights",;
      "Better resource allocation";
    ],;
    useCases: [;
      "Remote teams",;
      "Freelancers",;
      "Consulting firms",;
      "Software development";
    ],;
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Chart.js"],;
    link: "https://ziontechgroup.com/services/time-tracking",;
    icon: "⏱️";,
},;
  {;
    id: "crm-sales-pipeline",;
    name: "CRM & Sales Pipeline Manager",;
    category: "micro-saas",;
    description: "Customer relationship management platform with AI-powered lead scoring and sales pipeline automation.",;
    features: [;
      "Lead management",;
      "Sales pipeline tracking",;
      "AI lead scoring",;
      "Email integration",;
      "Task automation",;
      "Reporting & analytics",;
      "Mobile access",;
      "Team collaboration";
    ],;
    pricing: {;
      starter: 22,;
      professional: 55,;
      enterprise: 149,;
      currency: "USD";,
},;
    benefits: [;
      "Increase sales by 30%",;
      "Better lead qualification",;
      "Automated follow-ups",;
      "Sales forecasting";
    ],;
    useCases: [;
      "Sales teams",;
      "Real estate agents",;
      "Insurance brokers",;
      "B2B companies";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "AI/ML", "Email APIs"],;
    link: "https://ziontechgroup.com/services/crm-sales-pipeline",;
    icon: "📊";,
},;
  {;
    id: "appointment-booking-system",;
    name: "Smart Appointment Booking",;
    category: "micro-saas",;
    description: "Intelligent appointment booking system with automated scheduling, reminders, and payment processing.",;
    features: [;
      "Online booking calendar",;
      "Automated reminders",;
      "Payment processing",;
      "Multi-service support",;
      "Staff scheduling",;
      "Client management",;
      "Analytics dashboard",;
      "Mobile optimization";
    ],;
    pricing: {;
      starter: 18,;
      professional: 45,;
      enterprise: 119,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce no-shows by 50%",;
      "24/7 booking availability",;
      "Automated payment collection",;
      "Streamlined operations";
    ],;
    useCases: [;
      "Healthcare providers",;
      "Beauty salons",;
      "Consulting services",;
      "Fitness trainers";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Calendar APIs"],;
    link: "https://ziontechgroup.com/services/appointment-booking",;
    icon: "📅";,
},;
  {;
    id: "inventory-pos-system",;
    name: "Inventory & POS System",;
    category: "micro-saas",;
    description: "Complete point-of-sale and inventory management system for retail and restaurant businesses.",;
    features: [;
      "Point of sale terminal",;
      "Inventory tracking",;
      "Barcode scanning",;
      "Multi-location support",;
      "Sales reporting",;
      "Customer management",;
      "Payment processing",;
      "Staff management";
    ],;
    pricing: {;
      starter: 35,;
      professional: 85,;
      enterprise: 229,;
      currency: "USD";,
},;
    benefits: [;
      "Streamlined operations",;
      "Real-time inventory",;
      "Better sales insights",;
      "Reduced manual work";
    ],;
    useCases: [;
      "Retail stores",;
      "Restaurants",;
      "Coffee shops",;
      "Boutique stores";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Barcode APIs"],;
    link: "https://ziontechgroup.com/services/inventory-pos",;
    icon: "🛒";,
},;
  {;
    id: "document-management-system",;
    name: "Document Management & Collaboration",;
    category: "micro-saas",;
    description: "Secure document management platform with version control, collaboration tools, and AI-powered search.",;
    features: [;
      "Document storage",;
      "Version control",;
      "Collaborative editing",;
      "AI-powered search",;
      "Access control",;
      "Document templates",;
      "Workflow automation",;
      "Audit trails";
    ],;
    pricing: {;
      starter: 20,;
      professional: 50,;
      enterprise: 139,;
      currency: "USD";,
},;
    benefits: [;
      "Centralized document storage",;
      "Improved collaboration",;
      "Version control",;
      "Enhanced security";
    ],;
    useCases: [;
      "Legal firms",;
      "Accounting firms",;
      "Real estate agencies",;
      "Consulting companies";
    ],;
    technologies: ["React", "Node.js", "MongoDB", "AWS S3", "AI Search"],;
    link: "https://ziontechgroup.com/services/document-management",;
    icon: "📄";,
},;
  {;
    id: "survey-feedback-platform",;
    name: "Survey & Feedback Platform",;
    category: "micro-saas",;
    description: "Advanced survey and feedback collection platform with AI analysis and real-time insights.",;
    features: [;
      "Drag-and-drop survey builder",;
      "AI response analysis",;
      "Real-time analytics",;
      "Multi-channel distribution",;
      "Custom branding",;
      "Advanced reporting",;
      "Integration APIs",;
      "Mobile optimization";
    ],;
    pricing: {;
      starter: 16,;
      professional: 42,;
      enterprise: 109,;
      currency: "USD";,
},;
    benefits: [;
      "Better customer insights",;
      "Automated analysis",;
      "Real-time feedback",;
      "Data-driven decisions";
    ],;
    useCases: [;
      "Market research",;
      "Customer satisfaction",;
      "Employee feedback",;
      "Event feedback";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "AI/ML", "Chart.js"],;
    link: "https://ziontechgroup.com/services/survey-feedback",;
    icon: "📋";,
},;
  {;
    id: "expense-management-system",;
    name: "Expense Management & Reimbursement",;
    category: "micro-saas",;
    description: "Automated expense management system with receipt scanning, approval workflows, and financial reporting.",;
    features: [;
      "Receipt scanning",;
      "Expense categorization",;
      "Approval workflows",;
      "Reimbursement processing",;
      "Policy compliance",;
      "Financial reporting",;
      "Mobile app",;
      "Integration with accounting";
    ],;
    pricing: {;
      starter: 14,;
      professional: 35,;
      enterprise: 89,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce processing time by 70%",;
      "Automated compliance",;
      "Better expense control",;
      "Streamlined reimbursements";
    ],;
    useCases: [;
      "Small businesses",;
      "Startups",;
      "Consulting firms",;
      "Sales teams";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "OCR", "Stripe"],;
    link: "https://ziontechgroup.com/services/expense-management",;
    icon: "💰";,
},;
  {;
    id: "project-management-suite",;
    name: "Smart Project Manager",;
    category: "micro-saas",;
    description: "Intelligent project management platform with AI-powered task prioritization and team collaboration.",;
    features: [;
      "AI task prioritization",;
      "Real-time collaboration",;
      "Time tracking",;
      "Resource allocation",;
      "Progress analytics",;
      "Mobile app";
    ],;
    pricing: {;
      starter: 19,;
      professional: 49,;
      enterprise: 129,;
      currency: "USD";,
},;
    benefits: [;
      "30% faster project completion",;
      "Improved team productivity",;
      "Better resource utilization",;
      "Real-time insights";
    ],;
    useCases: [;
      "Software development teams",;
      "Marketing agencies",;
      "Construction projects",;
      "Event planning";
    ],;
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],;
    link: "https://ziontechgroup.com/services/project-management",;
    icon: "📊";,
},;
  {;
    id: "inventory-management",;
    name: "Inventory Tracker Pro",;
    category: "micro-saas",;
    description: "Smart inventory management system with predictive analytics and automated reordering.",;
    features: [;
      "Real-time inventory tracking",;
      "Predictive analytics",;
      "Automated reordering",;
      "Barcode scanning",;
      "Multi-location support",;
      "Integration APIs";
    ],;
    pricing: {;
      starter: 39,;
      professional: 89,;
      enterprise: 249,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce stockouts by 80%",;
      "Optimize inventory levels",;
      "Automated procurement",;
      "Cost savings";
    ],;
    useCases: [;
      "E-commerce businesses",;
      "Retail stores",;
      "Manufacturing",;
      "Warehouse management";
    ],;
    technologies: ["React Native", "Python", "PostgreSQL", "TensorFlow"],;
    link: "https://ziontechgroup.com/services/inventory-management",;
    icon: "📦";,
},;
  {;
    id: "customer-support-platform",;
    name: "AI Support Assistant",;
    category: "micro-saas",;
    description: "Intelligent customer support platform with AI chatbots and automated ticket routing.",;
    features: [;
      "AI-powered chatbots",;
      "Smart ticket routing",;
      "Knowledge base management",;
      "Multi-channel support",;
      "Performance analytics",;
      "Integration capabilities";
    ],;
    pricing: {;
      starter: 25,;
      professional: 65,;
      enterprise: 179,;
      currency: "USD";,
},;
    benefits: [;
      "24/7 customer support",;
      "Faster response times",;
      "Reduced support costs",;
      "Improved customer satisfaction";
    ],;
    useCases: [;
      "E-commerce platforms",;
      "SaaS companies",;
      "Service businesses",;
      "Educational institutions";
    ],;
    technologies: ["Next.js", "OpenAI", "Redis", "PostgreSQL"],;
    link: "https://ziontechgroup.com/services/customer-support",;
    icon: "🤖";,
},;

<<<<<<< HEAD
export const services: Service[] = [
  // Micro SaaS Services
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered content generation platform for blogs, social media, and marketing materials with GPT-4 integration.',
    features: [
      'Multi-language content generation',
      'SEO-optimized content',
      'Brand voice customization',
      'Content scheduling',
      'Analytics dashboard',
      'API integration',
      'Plagiarism detection',
      'Content templates library'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO optimization built-in',
      'Multi-platform publishing',
      'Cost-effective content marketing'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing copywriting'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: 'https://ziontechgroup.com/services/ai-content-generator',
    icon: '📝'
  },
  {
    id: 'ai-meeting-notes-assistant',
    name: 'AI Meeting Notes Assistant',
    category: 'micro-saas',
    description: 'Automated recording, transcription, summarization, and action-item extraction for meetings across Zoom, Google Meet, and Teams.',
    features: [
      'One-click meeting recording',
      'Accurate multilingual transcription',
      'Key-point and decision summaries',
      'Action items with owners and due dates',
      'CRM and task manager sync (HubSpot, Jira, Asana)',
      'Speaker diarization',
      'Secure storage and search',
      'Compliance-friendly redaction'
    ],
    pricing: { starter: 19, professional: 49, enterprise: 149, currency: 'USD' },
    benefits: [
      'Save 4+ hours per week per employee',
      'Never miss decisions or follow-ups',
      'Centralized, searchable meeting knowledge',
      'Improved accountability across teams'
    ],
    useCases: [
      'Sales and customer success reviews',
      'Engineering standups and retrospectives',
      'Executive and board meetings',
      'Client discovery and requirement gathering'
    ],
    technologies: ['Whisper/ASR', 'OpenAI', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/ai-meeting-notes-assistant',
    icon: '📝'
  },
  {
    id: 'whatsapp-crm-inbox',
    name: 'WhatsApp CRM Inbox',
    category: 'micro-saas',
    description: 'Unified WhatsApp shared inbox with automation, templates, and CRM enrichment for SMB sales and support teams.',
    features: [
      'Team shared inbox and assignment',
      'Templates and quick replies',
      'AI reply suggestions',
      'Contact enrichment and tagging',
      'Campaign broadcasts with opt-in',
      'CRM sync (HubSpot, Pipedrive)',
      'Metrics and SLA tracking',
      'Role-based permissions'
    ],
    pricing: { starter: 29, professional: 79, enterprise: 199, currency: 'USD' },
    benefits: [
      'Faster first-response times',
      'Higher conversion from chat-to-deal',
      'Reduced context switching',
      'Compliance-friendly messaging'
    ],
    useCases: ['Inbound sales', 'Customer support', 'Abandoned cart recovery', 'Local services intake'],
    technologies: ['Meta WhatsApp API', 'React', 'Node.js', 'Redis'],
    link: 'https://ziontechgroup.com/services/whatsapp-crm-inbox',
    icon: '💬'
  },
  {
    id: 'local-seo-audit-suite',
    name: 'Local SEO Audit Suite',
    category: 'micro-saas',
    description: 'Automated local SEO audits with citation checks, GBP optimization, review insights, and prioritized recommendations.',
    features: [
      'Google Business Profile audit',
      'NAP consistency checks',
      'Review sentiment analysis',
      'Local SERP and competitor gap analysis',
      'Structured data validation',
      'Automated weekly reports',
      'Backlink discovery',
      'Actionable checklist'
    ],
    pricing: { starter: 12, professional: 35, enterprise: 99, currency: 'USD' },
    benefits: ['Higher local rankings', 'Increased foot traffic and calls', 'Quick, actionable fixes', 'Benchmark vs competitors'],
    useCases: ['Local services', 'Restaurants', 'Clinics', 'Home services'],
    technologies: ['SEO APIs', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/local-seo-audit-suite',
    icon: '📍'
  },
  {
    id: 'ai-rfp-proposal-writer',
    name: 'AI RFP & Proposal Writer',
    category: 'micro-saas',
    description: 'Generate compliant RFP responses and tailored proposals using your past wins, case studies, and brand tone.',
    features: [
      'RFP requirements extraction',
      'Reusable answer library',
      'Auto-compliance checklists',
      'Citations and source linking',
      'Reviewer workflows',
      'Style and tone controls',
      'Export to DOCX/PDF',
      'Red teaming and accuracy guardrails'
    ],
    pricing: { starter: 59, professional: 149, enterprise: 399, currency: 'USD' },
    benefits: ['Win more bids', 'Cut drafting time by 70%', 'Ensure compliance', 'Consistent branding'],
    useCases: ['Government contracts', 'Enterprise RFPs', 'Agency proposals', 'Vendor questionnaires'],
    technologies: ['RAG', 'OpenAI', 'Vector DB', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/ai-rfp-proposal-writer',
    icon: '📄'
  },
  {
    id: 'ecommerce-image-optimizer',
    name: 'E‑commerce Image Optimizer',
    category: 'micro-saas',
    description: 'Automated product image background removal, uniform shadows, variants, and size optimization for faster storefronts.',
    features: [
      'Background removal and replacement',
      'Consistent lighting and shadow',
      'Batch processing and presets',
      'WebP/AVIF conversion',
      'Shopify/BigCommerce apps',
      'A/B visual testing',
      'CDN delivery',
      'Accessibility contrast checks'
    ],
    pricing: { starter: 15, professional: 49, enterprise: 129, currency: 'USD' },
    benefits: ['Higher conversion rates', 'Improved Core Web Vitals', 'Brand-consistent visuals', 'Reduced design costs'],
    useCases: ['D2C stores', 'Marketplaces', 'Wholesale catalogs', 'Dropshipping'],
    technologies: ['Computer Vision', 'FFmpeg', 'CDN', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/ecommerce-image-optimizer',
    icon: '🛍️'
  },
  {
    id: 'soc2-readiness-and-automation',
    name: 'SOC 2 Readiness & Automation',
    category: 'it-services',
    description: 'End-to-end SOC 2 readiness with control mapping, evidence collection automation, and auditor collaboration.',
    features: [
      'Gap assessment and remediation plan',
      'Automated evidence collection',
      'Policy generation and training',
      'Continuous control monitoring',
      'Risk register and vendor tracking',
      'Auditor workspace access',
      'Ticketing and workflows',
      'Reporting and dashboards'
    ],
    pricing: { starter: 8000, professional: 25000, enterprise: 65000, currency: 'USD' },
    benefits: ['Faster audit timelines', 'Lower compliance costs', 'Reduced manual effort', 'Audit-ready anytime'],
    useCases: ['SaaS startups', 'FinTech', 'HealthTech', 'Enterprise vendor programs'],
    technologies: ['GRC', 'SIEM', 'IDP', 'Cloud APIs', 'Automation'],
    link: 'https://ziontechgroup.com/services/soc2-readiness-and-automation',
    icon: '✅'
  },
  {
    id: 'lakehouse-architecture-deployment',
    name: 'Data Lakehouse Architecture & Deployment',
    category: 'it-services',
    description: 'Design and implement a modern lakehouse leveraging open table formats, scalable ETL, and governed self-serve analytics.',
    features: [
      'Architecture and governance blueprint',
      'Medallion data modeling',
      'Ingestion and ETL pipelines',
      'Batch and streaming processing',
      'Data catalog and lineage',
      'Cost and performance optimization',
      'BI and semantic layer setup',
      'Security and compliance'
    ],
    pricing: { starter: 30000, professional: 90000, enterprise: 250000, currency: 'USD' },
    benefits: ['Unified storage and compute', 'Lower TCO vs legacy DW', 'Governed self-serve analytics', 'Future-proof architecture'],
    useCases: ['Enterprise analytics', 'IoT telemetry', 'Marketing data hubs', 'Financial reporting'],
    technologies: ['Delta Lake', 'Iceberg', 'Apache Spark', 'dbt', 'Airflow', 'AWS/Azure/GCP'],
    link: 'https://ziontechgroup.com/services/lakehouse-architecture-deployment',
    icon: '🏗️'
  },
  {
    id: 'finops-cloud-cost-optimization',
    name: 'FinOps Cloud Cost Optimization',
    category: 'it-services',
    description: 'Operationalize FinOps with visibility, anomaly detection, and automated rightsizing to reduce cloud spend without slowing delivery.',
    features: [
      'Cost allocation and showback',
      'Anomaly detection and alerts',
      'Rightsizing and scheduling automation',
      'Reserved/spot strategy',
      'Kubernetes cost governance',
      'Tagging standards rollout',
      'Dashboards and KPIs',
      'Stakeholder enablement'
    ],
    pricing: { starter: 6000, professional: 18000, enterprise: 75000, currency: 'USD' },
    benefits: ['Reduce cloud spend 20–40%', 'Faster budgeting cycles', 'Predictable unit economics', 'No vendor lock-in'],
    useCases: ['SaaS platforms', 'Data platforms', 'Microservices estates', 'Seasonal workloads'],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Cloud APIs', 'Automation'],
    link: 'https://ziontechgroup.com/services/finops-cloud-cost-optimization',
    icon: '💸'
  },
  {
    id: 'sre-reliability-retainer',
    name: 'SRE Reliability Retainer',
    category: 'it-services',
    description: '24/7 SRE services with SLIs/SLOs, incident response, and proactive reliability engineering for critical systems.',
    features: [
      'SLO design and error budgets',
      'On-call runbooks and automation',
      'Chaos and load testing',
      'Observability as code',
      'Post-incident reviews',
      'Capacity planning',
      'Reliability roadmap',
      'Monthly executive reporting'
    ],
    pricing: { starter: 12000, professional: 35000, enterprise: 120000, currency: 'USD' },
    benefits: ['Lower downtime risk', 'Faster MTTR', 'Predictable reliability', 'Happier engineers and users'],
    useCases: ['Payments and checkout', 'Core APIs', 'Real-time apps', 'Multi-tenant SaaS'],
    technologies: ['Terraform', 'Kubernetes', 'Prometheus', 'Grafana', 'OpenTelemetry', 'PagerDuty'],
    link: 'https://ziontechgroup.com/services/sre-reliability-retainer',
    icon: '🛠️'
  },
  {
    id: 'rag-enterprise-search',
    name: 'RAG Enterprise Search',
    category: 'ai-services',
    description: 'Retrieval-Augmented Generation for enterprise knowledge: private, secure question answering over documents, tickets, and wikis.',
    features: [
      'Document ingestion and chunking',
      'Embeddings and vector indexing',
      'Source-grounded citations',
      'Access control and redaction',
      'Feedback loops and evaluation',
      'Enterprise SSO integration',
      'Usage analytics and guardrails',
      'Multi-tenant isolation'
    ],
    pricing: { starter: 10000, professional: 35000, enterprise: 120000, currency: 'USD' },
    benefits: ['Reduce search time by 80%', 'Trustworthy answers with citations', 'Protect sensitive data', 'Scale across departments'],
    useCases: ['Support deflection', 'Policy Q&A', 'Sales playbooks', 'Engineering runbooks'],
    technologies: ['RAG', 'Vector DB', 'OpenAI', 'Azure OpenAI', 'LangChain', 'Next.js'],
    link: 'https://ziontechgroup.com/services/rag-enterprise-search',
    icon: '🔎'
  },
  {
    id: 'mlops-platform-and-ops',
    name: 'MLOps Platform & Operations',
    category: 'ai-services',
    description: 'Productionize ML with experiment tracking, model registry, CI/CD for models, monitoring, and drift remediation.',
    features: [
      'Feature store and governance',
      'Experiment tracking',
      'Model registry and promotion gates',
      'Model CI/CD and canarying',
      'Online/offline evaluation',
      'Data and concept drift detection',
      'Shadow deployments',
      'Incident and rollback playbooks'
    ],
    pricing: { starter: 20000, professional: 60000, enterprise: 180000, currency: 'USD' },
    benefits: ['Faster model velocity', 'Reduced production risk', 'Traceable lineage', 'Operational excellence'],
    useCases: ['Personalization', 'Fraud detection', 'Forecasting', 'NLP pipelines'],
    technologies: ['MLflow', 'Kubeflow', 'Vertex AI', 'SageMaker', 'Airflow', 'dbt'],
    link: 'https://ziontechgroup.com/services/mlops-platform-and-ops',
    icon: '🧪'
  },
  {
    id: 'synthetic-data-generation',
    name: 'Synthetic Data Generation',
    category: 'ai-services',
    description: 'Create privacy-preserving synthetic datasets to unblock AI/analytics while meeting compliance and bias-reduction goals.',
    features: [
      'Tabular, image, and text synthesis',
      'Differential privacy controls',
      'Quality and utility evaluation',
      'Bias detection and mitigation',
      'Domain constraint enforcement',
      'Secure data sandboxing',
      'Versioning and governance',
      'Regulatory documentation'
    ],
    pricing: { starter: 15000, professional: 45000, enterprise: 150000, currency: 'USD' },
    benefits: ['Accelerate AI safely', 'Reduce privacy risk', 'Balance rare classes', 'Share data across teams'],
    useCases: ['Healthcare analytics', 'Financial modeling', 'CV pretraining', 'Anomaly detection'],
    technologies: ['GANs', 'Diffusion', 'DP-SGD', 'Python', 'TensorFlow', 'PyTorch'],
    link: 'https://ziontechgroup.com/services/synthetic-data-generation',
    icon: '🧬'
  },
  {
    id: 'llm-evaluation-red-teaming',
    name: 'LLM Evaluation & Red-Teaming',
    category: 'ai-services',
    description: 'Holistic LLM safety and quality evaluation with automated test suites, jailbreak resistance, and bias and toxicity audits.',
    features: [
      'Automated eval harness and metrics',
      'Adversarial prompt libraries',
      'Hallucination and citation checks',
      'PII/PHI leakage testing',
      'Bias, harm, and toxicity audits',
      'Safety guardrail tuning',
      'Incident response runbooks',
      'Reporting for compliance teams'
    ],
    pricing: { starter: 12000, professional: 35000, enterprise: 100000, currency: 'USD' },
    benefits: ['Reduce production incidents', 'Meet regulatory expectations', 'Improve answer quality', 'Strengthen brand trust'],
    useCases: ['Customer support agents', 'Internal copilots', 'Content generation', 'Healthcare/finance assistants'],
    technologies: ['Eval frameworks', 'OpenAI', 'Azure OpenAI', 'Guardrails', 'Vector search'],
    link: 'https://ziontechgroup.com/services/llm-evaluation-red-teaming',
    icon: '🛡️'
  },
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler Pro',
    category: 'micro-saas',
    description: 'Comprehensive social media management platform with AI-powered content optimization and cross-platform scheduling.',
    features: [
      'Multi-platform scheduling',
      'AI content optimization',
      'Hashtag research',
      'Analytics & reporting',
      'Team collaboration',
      'Content calendar',
      'Auto-posting',
      'Engagement tracking'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Save 5+ hours weekly',
      'Increase engagement by 40%',
      'Consistent posting schedule',
      'Data-driven insights'
    ],
    useCases: [
      'Small businesses',
      'Marketing agencies',
      'Content creators',
      'E-commerce brands'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs', 'Redis'],
    link: 'https://ziontechgroup.com/services/social-media-scheduler',
    icon: '📱'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation Suite',
    category: 'micro-saas',
    description: 'Advanced email marketing platform with AI-driven personalization, automation workflows, and detailed analytics.',
    features: [
      'Drag-and-drop email builder',
      'AI personalization',
      'Automation workflows',
      'A/B testing',
      'Advanced segmentation',
      'Deliverability optimization',
      'Analytics dashboard',
      'Template library'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      '3x higher open rates',
      'Automated lead nurturing',
      'Personalized customer journeys',
      'ROI tracking'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Marketing agencies',
      'Non-profit organizations'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'Redis'],
    link: 'https://ziontechgroup.com/services/email-marketing-automation',
    icon: '📧'
  },
  {
    id: 'invoice-management-system',
    name: 'Smart Invoice Management',
    category: 'micro-saas',
    description: 'Intelligent invoice management system with automated billing, payment tracking, and financial reporting.',
    features: [
      'Automated invoice generation',
      'Payment tracking',
      'Recurring billing',
      'Multi-currency support',
      'Tax calculations',
      'Client portal',
      'Financial reporting',
      'Payment reminders'
    ],
    pricing: {
      starter: 15,
      professional: 39,
      enterprise: 99,
      currency: 'USD'
    },
    benefits: [
      'Reduce billing time by 80%',
      'Faster payment collection',
      'Automated tax compliance',
      'Better cash flow management'
    ],
    useCases: [
      'Freelancers',
      'Small businesses',
      'Consulting firms',
      'Service providers'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'PDF.js'],
    link: 'https://ziontechgroup.com/services/invoice-management',
    icon: '🧾'
  },
  {
    id: 'time-tracking-productivity',
    name: 'Time Tracking & Productivity Suite',
    category: 'micro-saas',
    description: 'Comprehensive time tracking and productivity management platform with AI insights and team collaboration.',
    features: [
      'Automatic time tracking',
      'Project management',
      'Team collaboration',
      'Productivity analytics',
      'Screenshot monitoring',
      'Expense tracking',
      'Reporting dashboard',
      'Mobile apps'
    ],
    pricing: {
      starter: 12,
      professional: 29,
      enterprise: 79,
      currency: 'USD'
    },
    benefits: [
      'Increase productivity by 25%',
      'Accurate project billing',
      'Team performance insights',
      'Better resource allocation'
    ],
    useCases: [
      'Remote teams',
      'Freelancers',
      'Consulting firms',
      'Software development'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Chart.js'],
    link: 'https://ziontechgroup.com/services/time-tracking',
    icon: '⏱️'
  },
  {
    id: 'crm-sales-pipeline',
    name: 'CRM & Sales Pipeline Manager',
    category: 'micro-saas',
    description: 'Customer relationship management platform with AI-powered lead scoring and sales pipeline automation.',
    features: [
      'Lead management',
      'Sales pipeline tracking',
      'AI lead scoring',
      'Email integration',
      'Task automation',
      'Reporting & analytics',
      'Mobile access',
      'Team collaboration'
    ],
    pricing: {
      starter: 22,
      professional: 55,
      enterprise: 149,
      currency: 'USD'
    },
    benefits: [
      'Increase sales by 30%',
      'Better lead qualification',
      'Automated follow-ups',
      'Sales forecasting'
    ],
    useCases: [
      'Sales teams',
      'Real estate agents',
      'Insurance brokers',
      'B2B companies'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/crm-sales-pipeline',
    icon: '📊'
  },
  {
    id: 'appointment-booking-system',
    name: 'Smart Appointment Booking',
    category: 'micro-saas',
    description: 'Intelligent appointment booking system with automated scheduling, reminders, and payment processing.',
    features: [
      'Online booking calendar',
      'Automated reminders',
      'Payment processing',
      'Multi-service support',
      'Staff scheduling',
      'Client management',
      'Analytics dashboard',
      'Mobile optimization'
    ],
    pricing: {
      starter: 18,
      professional: 45,
      enterprise: 119,
      currency: 'USD'
    },
    benefits: [
      'Reduce no-shows by 50%',
      '24/7 booking availability',
      'Automated payment collection',
      'Streamlined operations'
    ],
    useCases: [
      'Healthcare providers',
      'Beauty salons',
      'Consulting services',
      'Fitness trainers'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Calendar APIs'],
    link: 'https://ziontechgroup.com/services/appointment-booking',
    icon: '📅'
  },
  {
    id: 'inventory-pos-system',
    name: 'Inventory & POS System',
    category: 'micro-saas',
    description: 'Complete point-of-sale and inventory management system for retail and restaurant businesses.',
    features: [
      'Point of sale terminal',
      'Inventory tracking',
      'Barcode scanning',
      'Multi-location support',
      'Sales reporting',
      'Customer management',
      'Payment processing',
      'Staff management'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 229,
      currency: 'USD'
    },
    benefits: [
      'Streamlined operations',
      'Real-time inventory',
      'Better sales insights',
      'Reduced manual work'
    ],
    useCases: [
      'Retail stores',
      'Restaurants',
      'Coffee shops',
      'Boutique stores'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Barcode APIs'],
    link: 'https://ziontechgroup.com/services/inventory-pos',
    icon: '🛒'
  },
  {
    id: 'document-management-system',
    name: 'Document Management & Collaboration',
    category: 'micro-saas',
    description: 'Secure document management platform with version control, collaboration tools, and AI-powered search.',
    features: [
      'Document storage',
      'Version control',
      'Collaborative editing',
      'AI-powered search',
      'Access control',
      'Document templates',
      'Workflow automation',
      'Audit trails'
    ],
    pricing: {
      starter: 20,
      professional: 50,
      enterprise: 139,
      currency: 'USD'
    },
    benefits: [
      'Centralized document storage',
      'Improved collaboration',
      'Version control',
      'Enhanced security'
    ],
    useCases: [
      'Legal firms',
      'Accounting firms',
      'Real estate agencies',
      'Consulting companies'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'AI Search'],
    link: 'https://ziontechgroup.com/services/document-management',
    icon: '📄'
  },
  {
    id: 'survey-feedback-platform',
    name: 'Survey & Feedback Platform',
    category: 'micro-saas',
    description: 'Advanced survey and feedback collection platform with AI analysis and real-time insights.',
    features: [
      'Drag-and-drop survey builder',
      'AI response analysis',
      'Real-time analytics',
      'Multi-channel distribution',
      'Custom branding',
      'Advanced reporting',
      'Integration APIs',
      'Mobile optimization'
    ],
    pricing: {
      starter: 16,
      professional: 42,
      enterprise: 109,
      currency: 'USD'
    },
    benefits: [
      'Better customer insights',
      'Automated analysis',
      'Real-time feedback',
      'Data-driven decisions'
    ],
    useCases: [
      'Market research',
      'Customer satisfaction',
      'Employee feedback',
      'Event feedback'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Chart.js'],
    link: 'https://ziontechgroup.com/services/survey-feedback',
    icon: '📋'
  },
  {
    id: 'expense-management-system',
    name: 'Expense Management & Reimbursement',
    category: 'micro-saas',
    description: 'Automated expense management system with receipt scanning, approval workflows, and financial reporting.',
    features: [
      'Receipt scanning',
      'Expense categorization',
      'Approval workflows',
      'Reimbursement processing',
      'Policy compliance',
      'Financial reporting',
      'Mobile app',
      'Integration with accounting'
    ],
    pricing: {
      starter: 14,
      professional: 35,
      enterprise: 89,
      currency: 'USD'
    },
    benefits: [
      'Reduce processing time by 70%',
      'Automated compliance',
      'Better expense control',
      'Streamlined reimbursements'
    ],
    useCases: [
      'Small businesses',
      'Startups',
      'Consulting firms',
      'Sales teams'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OCR', 'Stripe'],
    link: 'https://ziontechgroup.com/services/expense-management',
    icon: '💰'
  },
  {
    id: 'project-management-suite',
    name: 'Smart Project Manager',
    category: 'micro-saas',
    description: 'Intelligent project management platform with AI-powered task prioritization and team collaboration.',
    features: [
      'AI task prioritization',
      'Real-time collaboration',
      'Time tracking',
      'Resource allocation',
      'Progress analytics',
      'Mobile app'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      '30% faster project completion',
      'Improved team productivity',
      'Better resource utilization',
      'Real-time insights'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction projects',
      'Event planning'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://ziontechgroup.com/services/project-management',
    icon: '📊'
  },
  {
    id: 'inventory-management',
    name: 'Inventory Tracker Pro',
    category: 'micro-saas',
    description: 'Smart inventory management system with predictive analytics and automated reordering.',
    features: [
      'Real-time inventory tracking',
      'Predictive analytics',
      'Automated reordering',
      'Barcode scanning',
      'Multi-location support',
      'Integration APIs'
    ],
    pricing: {
      starter: 39,
      professional: 89,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce stockouts by 80%',
      'Optimize inventory levels',
      'Automated procurement',
      'Cost savings'
    ],
    useCases: [
      'E-commerce businesses',
      'Retail stores',
      'Manufacturing',
      'Warehouse management'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/inventory-management',
    icon: '📦'
  },
  {
    id: 'customer-support-platform',
    name: 'AI Support Assistant',
    category: 'micro-saas',
    description: 'Intelligent customer support platform with AI chatbots and automated ticket routing.',
    features: [
      'AI-powered chatbots',
      'Smart ticket routing',
      'Knowledge base management',
      'Multi-channel support',
      'Performance analytics',
      'Integration capabilities'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Faster response times',
      'Reduced support costs',
      'Improved customer satisfaction'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Service businesses',
      'Educational institutions'
    ],
    technologies: ['Next.js', 'OpenAI', 'Redis', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/customer-support',
    icon: '🤖'
  },
=======
  // IT Services;
  {;
    id: "cloud-migration",;
    name: "Cloud Migration Expert",;
    category: "it-services",;
    description: "Comprehensive cloud migration services for seamless transition to AWS, Azure, or Google Cloud with zero downtime.",;
    features: [;
      "Infrastructure assessment",;
      "Migration planning",;
      "Data migration",;
      "Application modernization",;
      "Security implementation",;
      "Performance optimization",;
      "Cost optimization",;
      "24/7 monitoring";
    ],;
    pricing: {;
      starter: 5000,;
      professional: 15000,;
      enterprise: 50000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduced infrastructure costs by 40%",;
      "Improved scalability",;
      "Enhanced security",;
      "Better performance",;
      "Disaster recovery";
    ],;
    useCases: [;
      "Legacy system modernization",;
      "Data center consolidation",;
      "Disaster recovery setup",;
      "Application scaling";
    ],;
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],;
    link: "https://ziontechgroup.com/services/cloud-migration",;
    icon: "☁️";,
},;
  {;
    id: "multi-cloud-strategy",;
    name: "Multi-Cloud Strategy & Management",;
    category: "it-services",;
    description: "Strategic multi-cloud implementation and management to optimize costs, performance, and avoid vendor lock-in.",;
    features: [;
      "Multi-cloud architecture design",;
      "Cost optimization across providers",;
      "Disaster recovery planning",;
      "Security compliance",;
      "Performance monitoring",;
      "Vendor management",;
      "Automated scaling",;
      "Compliance auditing";
    ],;
    pricing: {;
      starter: 8000,;
      professional: 25000,;
      enterprise: 75000,;
      currency: "USD";,
},;
    benefits: [;
      "Avoid vendor lock-in",;
      "Optimize costs across providers",;
      "Enhanced disaster recovery",;
      "Better performance distribution";
    ],;
    useCases: [;
      "Enterprise applications",;
      "Global businesses",;
      "High-availability systems",;
      "Compliance requirements";
    ],;
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Ansible"],;
    link: "https://ziontechgroup.com/services/multi-cloud-strategy",;
    icon: "🌐";,
},;
  {;
    id: "container-orchestration",;
    name: "Container Orchestration & Kubernetes",;
    category: "it-services",;
    description: "Complete container orchestration setup with Kubernetes, Docker, and microservices architecture implementation.",;
    features: [;
      "Kubernetes cluster setup",;
      "Container orchestration",;
      "Microservices architecture",;
      "Service mesh implementation",;
      "Auto-scaling configuration",;
      "Monitoring & logging",;
      "CI/CD integration",;
      "Security hardening";
    ],;
    pricing: {;
      starter: 6000,;
      professional: 18000,;
      enterprise: 55000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved scalability",;
      "Better resource utilization",;
      "Faster deployments",;
      "Enhanced reliability";
    ],;
    useCases: [;
      "Microservices applications",;
      "Scalable web services",;
      "DevOps transformation",;
      "Legacy application modernization";
    ],;
    technologies: ["Kubernetes", "Docker", "Istio", "Helm", "Prometheus", "Grafana"],;
    link: "https://ziontechgroup.com/services/container-orchestration",;
    icon: "📦";,
},;
  {;
    id: "serverless-architecture",;
    name: "Serverless Architecture Implementation",;
    category: "it-services",;
    description: "Serverless architecture design and implementation using AWS Lambda, Azure Functions, and Google Cloud Functions.",;
    features: [;
      "Serverless architecture design",;
      "Function optimization",;
      "API Gateway setup",;
      "Event-driven architecture",;
      "Cost optimization",;
      "Performance monitoring",;
      "Security implementation",;
      "Auto-scaling configuration";
    ],;
    pricing: {;
      starter: 4000,;
      professional: 12000,;
      enterprise: 35000,;
      currency: "USD";,
},;
    benefits: [;
      "Pay-per-use pricing",;
      "Automatic scaling",;
      "Reduced operational overhead",;
      "Faster time to market";
    ],;
    useCases: [;
      "API development",;
      "Event processing",;
      "Data processing pipelines",;
      "IoT applications";
    ],;
    technologies: ["AWS Lambda", "Azure Functions", "GCP Functions", "API Gateway", "EventBridge"],;
    link: "https://ziontechgroup.com/services/serverless-architecture",;
    icon: "⚡";,
},;
  {;
    id: "network-security-audit",;
    name: "Network Security & Infrastructure Audit",;
    category: "it-services",;
    description: "Comprehensive network security assessment and infrastructure hardening to protect against cyber threats.",;
    features: [;
      "Network vulnerability assessment",;
      "Firewall configuration review",;
      "Intrusion detection setup",;
      "Network segmentation",;
      "VPN implementation",;
      "Security policy development",;
      "Compliance auditing",;
      "Incident response planning";
    ],;
    pricing: {;
      starter: 3500,;
      professional: 9500,;
      enterprise: 28000,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced network security",;
      "Compliance with regulations",;
      "Reduced security risks",;
      "Better threat detection";
    ],;
    useCases: [;
      "Enterprise networks",;
      "Healthcare organizations",;
      "Financial institutions",;
      "Government agencies";
    ],;
    technologies: ["Cisco", "Fortinet", "Palo Alto", "Wireshark", "Nmap", "Snort"],;
    link: "https://ziontechgroup.com/services/network-security-audit",;
    icon: "🛡️";,
},;
  {;
    id: "database-optimization",;
    name: "Database Optimization & Migration",;
    category: "it-services",;
    description: "Database performance optimization, migration, and management services for improved performance and scalability.",;
    features: [;
      "Database performance tuning",;
      "Migration planning & execution",;
      "Query optimization",;
      "Index optimization",;
      "Backup & recovery setup",;
      "High availability configuration",;
      "Security hardening",;
      "Monitoring & alerting";
    ],;
    pricing: {;
      starter: 3000,;
      professional: 8500,;
      enterprise: 25000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved query performance",;
      "Reduced downtime",;
      "Better scalability",;
      "Enhanced data security";
    ],;
    useCases: [;
      "Legacy database modernization",;
      "Performance optimization",;
      "Cloud database migration",;
      "High-availability setup";
    ],;
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS RDS", "Azure SQL"],;
    link: "https://ziontechgroup.com/services/database-optimization",;
    icon: "🗄️";,
},;
  {;
    id: "api-gateway-management",;
    name: "API Gateway & Microservices Management",;
    category: "it-services",;
    description: "API gateway setup and microservices management for scalable, secure, and efficient API operations.",;
    features: [;
      "API gateway configuration",;
      "Rate limiting & throttling",;
      "Authentication & authorization",;
      "API versioning",;
      "Monitoring & analytics",;
      "Documentation generation",;
      "Load balancing",;
      "Security policies";
    ],;
    pricing: {;
      starter: 2500,;
      professional: 7500,;
      enterprise: 22000,;
      currency: "USD";,
},;
    benefits: [;
      "Centralized API management",;
      "Enhanced security",;
      "Better performance monitoring",;
      "Simplified integration";
    ],;
    useCases: [;
      "Microservices architecture",;
      "API-first businesses",;
      "Third-party integrations",;
      "Mobile app backends";
    ],;
    technologies: ["Kong", "AWS API Gateway", "Azure API Management", "Istio", "Nginx"],;
    link: "https://ziontechgroup.com/services/api-gateway-management",;
    icon: "🔗";,
},;
  {;
    id: "disaster-recovery-planning",;
    name: "Disaster Recovery & Business Continuity",;
    category: "it-services",;
    description: "Comprehensive disaster recovery planning and business continuity solutions to ensure minimal downtime.",;
    features: [;
      "Disaster recovery planning",;
      "Backup strategy implementation",;
      "Failover systems setup",;
      "Recovery time objectives",;
      "Testing & validation",;
      "Documentation & procedures",;
      "Staff training",;
      "Regular audits";
    ],;
    pricing: {;
      starter: 4000,;
      professional: 12000,;
      enterprise: 35000,;
      currency: "USD";,
},;
    benefits: [;
      "Minimal downtime",;
      "Data protection",;
      "Business continuity",;
      "Compliance adherence";
    ],;
    useCases: [;
      "Critical business systems",;
      "Financial institutions",;
      "Healthcare organizations",;
      "E-commerce platforms";
    ],;
    technologies: ["Veeam", "Commvault", "AWS DR", "Azure Site Recovery", "VMware SRM"],;
    link: "https://ziontechgroup.com/services/disaster-recovery-planning",;
    icon: "🔄";,
},;
  {;
    id: "it-infrastructure-monitoring",;
    name: "IT Infrastructure Monitoring & Management",;
    category: "it-services",;
    description: "24/7 IT infrastructure monitoring and management services with proactive issue detection and resolution.",;
    features: [;
      "24/7 infrastructure monitoring",;
      "Proactive issue detection",;
      "Performance optimization",;
      "Capacity planning",;
      "Security monitoring",;
      "Automated alerting",;
      "Incident response",;
      "Regular reporting";
    ],;
    pricing: {;
      starter: 2000,;
      professional: 6000,;
      enterprise: 18000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduced downtime",;
      "Proactive issue resolution",;
      "Better performance",;
      "Cost optimization";
    ],;
    useCases: [;
      "Enterprise infrastructure",;
      "Cloud environments",;
      "Hybrid systems",;
      "Critical applications";
    ],;
    technologies: ["Nagios", "Zabbix", "Prometheus", "Grafana", "ELK Stack", "Splunk"],;
    link: "https://ziontechgroup.com/services/it-infrastructure-monitoring",;
    icon: "📊";,
},;
  {;
    id: "identity-access-management",;
    name: "Identity & Access Management (IAM)",;
    category: "it-services",;
    description: "Comprehensive identity and access management solutions with single sign-on, multi-factor authentication, and role-based access control.",;
    features: [;
      "Single Sign-On (SSO) setup",;
      "Multi-factor authentication",;
      "Role-based access control",;
      "Identity provisioning",;
      "Audit & compliance",;
      "Password management",;
      "API security",;
      "Integration with existing systems";
    ],;
    pricing: {;
      starter: 3000,;
      professional: 9000,;
      enterprise: 27000,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced security",;
      "Simplified user management",;
      "Compliance adherence",;
      "Reduced IT overhead";
    ],;
    useCases: [;
      "Enterprise organizations",;
      "Healthcare systems",;
      "Financial institutions",;
      "Government agencies";
    ],;
    technologies: ["Okta", "Azure AD", "AWS IAM", "Auth0", "SAML", "OAuth"],;
    link: "https://ziontechgroup.com/services/identity-access-management",;
    icon: "🔐";,
},;
  {;
    id: "cybersecurity-audit",;
    name: "Cybersecurity Assessment",;
    category: "it-services",;
    description: "Comprehensive cybersecurity audit and penetration testing services to protect your business.",;
    features: [;
      "Vulnerability assessment",;
      "Penetration testing",;
      "Security policy review",;
      "Compliance auditing",;
      "Incident response planning",;
      "Security training";
    ],;
    pricing: {;
      starter: 3000,;
      professional: 8000,;
      enterprise: 25000,;
      currency: "USD";,
},;
    benefits: [;
      "Identify security vulnerabilities",;
      "Compliance with regulations",;
      "Protect customer data",;
      "Reduce security risks";
    ],;
    useCases: [;
      "Financial institutions",;
      "Healthcare organizations",;
      "E-commerce platforms",;
      "Government agencies";
    ],;
    technologies: ["Nmap", "Metasploit", "Burp Suite", "OWASP ZAP"],;
    link: "https://ziontechgroup.com/services/cybersecurity",;
    icon: "🔒";,
},;
  {;
    id: "devops-automation",;
    name: "DevOps Automation Suite",;
    category: "it-services",;
    description: "Complete DevOps automation including CI/CD pipelines, infrastructure as code, and monitoring.",;
    features: [;
      "CI/CD pipeline setup",;
      "Infrastructure as Code",;
      "Container orchestration",;
      "Monitoring & alerting",;
      "Automated testing",;
      "Deployment automation";
    ],;
    pricing: {;
      starter: 4000,;
      professional: 12000,;
      enterprise: 35000,;
      currency: "USD";,
},;
    benefits: [;
      "Faster deployments",;
      "Reduced manual errors",;
      "Improved reliability",;
      "Better collaboration";
    ],;
    useCases: [;
      "Software development teams",;
      "Startups scaling up",;
      "Enterprise applications",;
      "Microservices architecture";
    ],;
    technologies: ["Jenkins", "GitLab CI", "Terraform", "Kubernetes", "Prometheus"],;
    link: "https://ziontechgroup.com/services/devops",;
    icon: "⚙️";,
},;
  {;
    id: "data-backup-recovery",;
    name: "Data Backup & Recovery",;
    category: "it-services",;
    description: "Comprehensive data backup and disaster recovery solutions to protect your critical business data.",;
    features: [;
      "Automated backup scheduling",;
      "Incremental backups",;
      "Disaster recovery planning",;
      "Data encryption",;
      "Backup testing",;
      "Recovery time objectives";
    ],;
    pricing: {;
      starter: 2000,;
      professional: 6000,;
      enterprise: 18000,;
      currency: "USD";,
},;
    benefits: [;
      "Data protection",;
      "Business continuity",;
      "Compliance adherence",;
      "Peace of mind";
    ],;
    useCases: [;
      "Database systems",;
      "File servers",;
      "Virtual machines",;
      "Cloud applications";
    ],;
    technologies: ["Veeam", "Commvault", "AWS S3", "Azure Backup"],;
    link: "https://ziontechgroup.com/services/backup-recovery",;
    icon: "💾";,
},;
>>>>>>> main

  // AI Services;
  {;
    id: "custom-ai-models",;
    name: "Custom AI Model Development",;
    category: "ai-services",;
    description: "Custom AI model development tailored to your specific business needs and data with advanced machine learning techniques.",;
    features: [;
      "Custom model training",;
      "Data preprocessing",;
      "Model optimization",;
      "API development",;
      "Integration support",;
      "Ongoing maintenance",;
      "Model versioning",;
      "Performance monitoring";
    ],;
    pricing: {;
      starter: 10000,;
      professional: 30000,;
      enterprise: 100000,;
      currency: "USD";,
},;
    benefits: [;
      "Tailored to your data",;
      "Better accuracy",;
      "Competitive advantage",;
      "Scalable solutions",;
      "ROI optimization";
    ],;
    useCases: [;
      "Predictive analytics",;
      "Image recognition",;
      "Natural language processing",;
      "Recommendation systems",;
      "Fraud detection";
    ],;
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Python", "Docker", "MLflow"],;
    link: "https://ziontechgroup.com/services/custom-ai-models",;
    icon: "🧠";,
},;
  {;
    id: "computer-vision-solutions",;
    name: "Computer Vision & Image Recognition",;
    category: "ai-services",;
    description: "Advanced computer vision solutions for object detection, facial recognition, and image analysis applications.",;
    features: [;
      "Object detection & classification",;
      "Facial recognition systems",;
      "Image segmentation",;
      "OCR & text extraction",;
      "Quality inspection",;
      "Real-time processing",;
      "Custom model training",;
      "API integration";
    ],;
    pricing: {;
      starter: 8000,;
      professional: 25000,;
      enterprise: 75000,;
      currency: "USD";,
},;
    benefits: [;
      "Automated visual inspection",;
      "Enhanced security",;
      "Improved accuracy",;
      "Cost reduction";
    ],;
    useCases: [;
      "Manufacturing quality control",;
      "Security & surveillance",;
      "Medical imaging",;
      "Retail analytics",;
      "Autonomous vehicles";
    ],;
    technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO", "ResNet", "CUDA"],;
    link: "https://ziontechgroup.com/services/computer-vision-solutions",;
    icon: "👁️";,
},;
  {;
    id: "natural-language-processing",;
    name: "Natural Language Processing (NLP)",;
    category: "ai-services",;
    description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",;
    features: [;
      "Text classification & analysis",;
      "Sentiment analysis",;
      "Language translation",;
      "Named entity recognition",;
      "Text summarization",;
      "Question answering systems",;
      "Chatbot development",;
      "Document processing";
    ],;
    pricing: {;
      starter: 7000,;
      professional: 22000,;
      enterprise: 65000,;
      currency: "USD";,
},;
    benefits: [;
      "Automated text processing",;
      "Better customer insights",;
      "Multilingual support",;
      "Improved efficiency";
    ],;
    useCases: [;
      "Customer service automation",;
      "Content moderation",;
      "Market research",;
      "Legal document analysis",;
      "Social media monitoring";
    ],;
    technologies: ["BERT", "GPT", "Transformers", "spaCy", "NLTK", "Hugging Face"],;
    link: "https://ziontechgroup.com/services/natural-language-processing",;
    icon: "💬";,
},;
  {;
    id: "predictive-analytics-platform",;
    name: "Predictive Analytics & Forecasting",;
    category: "ai-services",;
    description: "Advanced predictive analytics platform for business forecasting, demand planning, and risk assessment.",;
    features: [;
      "Time series forecasting",;
      "Demand prediction",;
      "Risk assessment models",;
      "Customer behavior analysis",;
      "Sales forecasting",;
      "Inventory optimization",;
      "Churn prediction",;
      "Real-time predictions";
    ],;
    pricing: {;
      starter: 9000,;
      professional: 28000,;
      enterprise: 85000,;
      currency: "USD";,
},;
    benefits: [;
      "Data-driven decisions",;
      "Reduced risks",;
      "Optimized operations",;
      "Competitive advantage";
    ],;
    useCases: [;
      "Supply chain optimization",;
      "Financial risk management",;
      "Marketing campaign optimization",;
      "Healthcare predictions",;
      "Energy demand forecasting";
    ],;
    technologies: ["Python", "R", "TensorFlow", "Prophet", "ARIMA", "XGBoost"],;
    link: "https://ziontechgroup.com/services/predictive-analytics-platform",;
    icon: "📈";,
},;
  {;
    id: "ai-powered-recommendation-engine",;
    name: "AI Recommendation Engine",;
    category: "ai-services",;
    description: "Intelligent recommendation systems for personalized content, products, and services using advanced ML algorithms.",;
    features: [;
      "Collaborative filtering",;
      "Content-based filtering",;
      "Hybrid recommendation systems",;
      "Real-time recommendations",;
      "A/B testing framework",;
      "Performance analytics",;
      "Multi-domain support",;
      "Scalable architecture";
    ],;
    pricing: {;
      starter: 6000,;
      professional: 18000,;
      enterprise: 55000,;
      currency: "USD";,
},;
    benefits: [;
      "Increased engagement",;
      "Higher conversion rates",;
      "Personalized experiences",;
      "Revenue growth";
    ],;
    useCases: [;
      "E-commerce platforms",;
      "Streaming services",;
      "Social media platforms",;
      "News websites",;
      "Job matching platforms";
    ],;
    technologies: ["TensorFlow", "PyTorch", "Apache Spark", "Redis", "Kafka", "Elasticsearch"],;
    link: "https://ziontechgroup.com/services/ai-powered-recommendation-engine",;
    icon: "🎯";,
},;
  {;
    id: "ai-automation-workflows",;
    name: "AI-Powered Workflow Automation",;
    category: "ai-services",;
    description: "Intelligent workflow automation using AI to streamline business processes and reduce manual intervention.",;
    features: [;
      "Process mining & analysis",;
      "Intelligent document processing",;
      "Decision automation",;
      "Exception handling",;
      "Process optimization",;
      "Integration with existing systems",;
      "Monitoring & analytics",;
      "Continuous improvement";
    ],;
    pricing: {;
      starter: 8000,;
      professional: 25000,;
      enterprise: 75000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce manual work by 80%",;
      "Faster processing times",;
      "Improved accuracy",;
      "Cost savings";
    ],;
    useCases: [;
      "Invoice processing",;
      "Customer onboarding",;
      "Claims processing",;
      "HR workflows",;
      "Compliance monitoring";
    ],;
    technologies: ["UiPath", "Automation Anywhere", "Python", "OCR", "RPA", "ML"],;
    link: "https://ziontechgroup.com/services/ai-automation-workflows",;
    icon: "⚙️";,
},;
  {;
    id: "ai-data-analytics-platform",;
    name: "AI Data Analytics & Business Intelligence",;
    category: "ai-services",;
    description: "Advanced AI-powered analytics platform for business intelligence, data visualization, and automated insights.",;
    features: [;
      "Automated data analysis",;
      "Natural language queries",;
      "Predictive insights",;
      "Anomaly detection",;
      "Automated reporting",;
      "Interactive dashboards",;
      "Data visualization",;
      "Real-time analytics";
    ],;
    pricing: {;
      starter: 6000,;
      professional: 18000,;
      enterprise: 55000,;
      currency: "USD";,
},;
    benefits: [;
      "Faster insights",;
      "Automated analysis",;
      "Better decision making",;
      "Reduced manual work";
    ],;
    useCases: [;
      "Business intelligence",;
      "Financial analysis",;
      "Marketing analytics",;
      "Operations monitoring",;
      "Performance tracking";
    ],;
    technologies: ["Tableau", "Power BI", "Python", "Apache Spark", "TensorFlow", "D3.js"],;
    link: "https://ziontechgroup.com/services/ai-data-analytics-platform",;
    icon: "📊";,
},;
  {;
    id: "ai-chatbot-voice-assistant",;
    name: "AI Chatbot & Voice Assistant Development",;
    category: "ai-services",;
    description: "Advanced conversational AI solutions including chatbots, voice assistants, and virtual agents.",;
    features: [;
      "Natural language understanding",;
      "Multi-channel deployment",;
      "Voice recognition",;
      "Context awareness",;
      "Integration with business systems",;
      "Analytics & insights",;
      "Custom training",;
      "24/7 availability";
    ],;
    pricing: {;
      starter: 5000,;
      professional: 15000,;
      enterprise: 45000,;
      currency: "USD";,
},;
    benefits: [;
      "24/7 customer support",;
      "Reduced response times",;
      "Scalable customer service",;
      "Cost-effective support";
    ],;
    useCases: [;
      "Customer support",;
      "Sales assistance",;
      "Appointment booking",;
      "FAQ handling",;
      "Voice commands";
    ],;
    technologies: ["OpenAI GPT", "Dialogflow", "Amazon Lex", "Azure Bot", "WebRTC", "Speech APIs"],;
    link: "https://ziontechgroup.com/services/ai-chatbot-voice-assistant",;
    icon: "🤖";,
},;
  {;
    id: "ai-fraud-detection",;
    name: "AI Fraud Detection & Security",;
    category: "ai-services",;
    description: "Advanced AI-powered fraud detection and security systems to protect against financial crimes and cyber threats.",;
    features: [;
      "Real-time fraud detection",;
      "Anomaly detection",;
      "Risk scoring",;
      "Behavioral analysis",;
      "Transaction monitoring",;
      "Identity verification",;
      "Threat intelligence",;
      "Automated response";
    ],;
    pricing: {;
      starter: 10000,;
      professional: 30000,;
      enterprise: 90000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduced fraud losses",;
      "Real-time protection",;
      "Improved accuracy",;
      "Compliance adherence";
    ],;
    useCases: [;
      "Financial institutions",;
      "E-commerce platforms",;
      "Payment processors",;
      "Insurance companies",;
      "Gaming platforms";
    ],;
    technologies: ["TensorFlow", "PyTorch", "Apache Kafka", "Redis", "Elasticsearch", "MLflow"],;
    link: "https://ziontechgroup.com/services/ai-fraud-detection",;
    icon: "🛡️";,
},;
  {;
    id: "ai-content-moderation",;
    name: "AI Content Moderation & Safety",;
    category: "ai-services",;
    description: "Intelligent content moderation system using AI to automatically detect and filter inappropriate content.",;
    features: [;
      "Text content analysis",;
      "Image & video moderation",;
      "Hate speech detection",;
      "Spam filtering",;
      "Age-appropriate content",;
      "Real-time processing",;
      "Custom policy enforcement",;
      "Human review integration";
    ],;
    pricing: {;
      starter: 4000,;
      professional: 12000,;
      enterprise: 35000,;
      currency: "USD";,
},;
    benefits: [;
      "Automated content filtering",;
      "Reduced manual moderation",;
      "Consistent policy enforcement",;
      "Improved user safety";
    ],;
    useCases: [;
      "Social media platforms",;
      "Online communities",;
      "E-commerce marketplaces",;
      "Educational platforms",;
      "Gaming communities";
    ],;
    technologies: ["OpenAI", "Google Vision API", "AWS Rekognition", "TensorFlow", "NLP", "Computer Vision"],;
    link: "https://ziontechgroup.com/services/ai-content-moderation",;
    icon: "🔍";,
},;
  {;
    id: "ai-supply-chain-optimization",;
    name: "AI Supply Chain Optimization",;
    category: "ai-services",;
    description: "AI-powered supply chain optimization for demand forecasting, inventory management, and logistics optimization.",;
    features: [;
      "Demand forecasting",;
      "Inventory optimization",;
      "Route optimization",;
      "Supplier risk assessment",;
      "Quality prediction",;
      "Cost optimization",;
      "Real-time monitoring",;
      "Predictive maintenance";
    ],;
    pricing: {;
      starter: 12000,;
      professional: 35000,;
      enterprise: 100000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduced inventory costs",;
      "Improved efficiency",;
      "Better demand planning",;
      "Risk mitigation";
    ],;
    useCases: [;
      "Manufacturing companies",;
      "Retail chains",;
      "Logistics providers",;
      "Food & beverage industry",;
      "Pharmaceutical companies";
    ],;
    technologies: ["Python", "TensorFlow", "Apache Spark", "Optimization algorithms", "IoT", "Blockchain"],;
    link: "https://ziontechgroup.com/services/ai-supply-chain-optimization",;
    icon: "🚚";,
},;
  {;
    id: "ai-process-automation",;
    name: "AI Process Automation",;
    category: "ai-services",;
    description: "Intelligent process automation using AI to streamline business operations and reduce manual work.",;
    features: [;
      "Process analysis",;
      "RPA implementation",;
      "AI decision making",;
      "Workflow automation",;
      "Integration with existing systems",;
      "Performance monitoring";
    ],;
    pricing: {;
      starter: 8000,;
      professional: 25000,;
      enterprise: 75000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce manual work by 70%",;
      "Improve accuracy",;
      "Faster processing",;
      "Cost savings";
    ],;
    useCases: [;
      "Invoice processing",;
      "Customer onboarding",;
      "Data entry automation",;
      "Report generation";
    ],;
    technologies: ["UiPath", "Automation Anywhere", "Python", "OCR"],;
    link: "https://ziontechgroup.com/services/ai-automation",;
    icon: "🤖";,
},;
  {;
    id: "ai-analytics-platform",;
    name: "AI Analytics Platform",;
    category: "ai-services",;
    description: "Advanced analytics platform powered by AI for deep business insights and predictive analytics.",;
    features: [;
      "Data visualization",;
      "Predictive analytics",;
      "Real-time dashboards",;
      "Automated reporting",;
      "Anomaly detection",;
      "Custom alerts";
    ],;
    pricing: {;
      starter: 6000,;
      professional: 18000,;
      enterprise: 55000,;
      currency: "USD";,
},;
    benefits: [;
      "Data-driven decisions",;
      "Predictive insights",;
      "Real-time monitoring",;
      "Competitive advantage";
    ],;
    useCases: [;
      "Business intelligence",;
      "Sales forecasting",;
      "Risk assessment",;
      "Performance monitoring";
    ],;
    technologies: ["Tableau", "Power BI", "Python", "Apache Spark", "TensorFlow"],;
    link: "https://ziontechgroup.com/services/ai-analytics",;
    icon: "📈";,
},;
  {;
    id: "ai-chatbot-development",;
    name: "AI Chatbot Development",;
    category: "ai-services",;
    description: "Custom AI chatbot development for customer service, sales, and internal communication.",;
    features: [;
      "Natural language processing",;
      "Multi-language support",;
      "Integration APIs",;
      "Analytics dashboard",;
      "Custom training",;
      "24/7 availability";
    ],;
    pricing: {;
      starter: 5000,;
      professional: 15000,;
      enterprise: 45000,;
      currency: "USD";,
},;
    benefits: [;
      "24/7 customer support",;
      "Reduced response times",;
      "Scalable customer service",;
      "Cost-effective support";
    ],;
    useCases: [;
      "Customer support",;
      "Sales qualification",;
      "Appointment booking",;
      "FAQ handling";
    ],;
    technologies: ["OpenAI GPT", "Dialogflow", "React", "Node.js", "MongoDB"],;
    link: "https://ziontechgroup.com/services/ai-chatbot",;
    icon: "💬";,
},;

  // Additional Micro SaaS Services;
  {;
    id: "social-media-scheduler",;
    name: "Social Media Scheduler Pro",;
    category: "micro-saas",;
    description: "Advanced social media management platform with AI-powered content optimization and cross-platform scheduling.",;
    features: [;
      "Multi-platform scheduling",;
      "AI content optimization",;
      "Hashtag research",;
      "Analytics & insights",;
      "Team collaboration",;
      "Content calendar";
    ],;
    pricing: {;
      starter: 15,;
      professional: 45,;
      enterprise: 120,;
      currency: "USD";,
},;
    benefits: [;
      "Save 10+ hours per week",;
      "Increase engagement by 40%",;
      "Consistent brand presence",;
      "Data-driven content strategy";
    ],;
    useCases: [;
      "Marketing agencies",;
      "Small businesses",;
      "Content creators",;
      "E-commerce brands";
    ],;
    technologies: ["React", "Node.js", "MongoDB", "Social APIs"],;
    link: "https://ziontechgroup.com/services/social-media-scheduler",;
    icon: "📱";,
},;
  {;
    id: "expense-tracker",;
    name: "Smart Expense Tracker",;
    category: "micro-saas",;
    description: "Intelligent expense management with receipt scanning, categorization, and automated reporting.",;
    features: [;
      "Receipt scanning with OCR",;
      "Automatic categorization",;
      "Multi-currency support",;
      "Tax preparation",;
      "Team expense management",;
      "Mobile app";
    ],;
    pricing: {;
      starter: 12,;
      professional: 35,;
      enterprise: 95,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce expense processing time by 80%",;
      "Accurate tax deductions",;
      "Real-time expense insights",;
      "Compliance with regulations";
    ],;
    useCases: [;
      "Small businesses",;
      "Freelancers",;
      "Sales teams",;
      "Remote workers";
    ],;
    technologies: ["React Native", "Python", "PostgreSQL", "OCR"],;
    link: "https://ziontechgroup.com/services/expense-tracker",;
    icon: "💰";,
},;
  {;
    id: "lead-scoring-platform",;
    name: "AI Lead Scoring Platform",;
    category: "micro-saas",;
    description: "Intelligent lead scoring system that uses AI to identify and prioritize high-value prospects.",;
    features: [;
      "AI-powered lead scoring",;
      "Behavioral tracking",;
      "CRM integration",;
      "Custom scoring models",;
      "Real-time alerts",;
      "Performance analytics";
    ],;
    pricing: {;
      starter: 49,;
      professional: 129,;
      enterprise: 349,;
      currency: "USD";,
},;
    benefits: [;
      "Increase conversion rates by 35%",;
      "Focus on high-value leads",;
      "Automated lead qualification",;
      "Better sales efficiency";
    ],;
    useCases: [;
      "Sales teams",;
      "Marketing agencies",;
      "B2B companies",;
      "Lead generation services";
    ],;
    technologies: ["Machine Learning", "React", "Node.js", "PostgreSQL"],;
    link: "https://ziontechgroup.com/services/lead-scoring",;
    icon: "🎯";,
},;
  {;
    id: "time-tracking-analytics",;
    name: "Time Tracking Analytics Pro",;
    category: "micro-saas",;
    description: "Advanced time tracking with productivity analytics, project insights, and team performance metrics.",;
    features: [;
      "Automatic time tracking",;
      "Productivity analytics",;
      "Project profitability analysis",;
      "Team performance metrics",;
      "Client billing integration",;
      "Mobile time tracking";
    ],;
    pricing: {;
      starter: 8,;
      professional: 25,;
      enterprise: 65,;
      currency: "USD";,
},;
    benefits: [;
      "Increase billable hours by 25%",;
      "Better project profitability",;
      "Improved team productivity",;
      "Accurate client billing";
    ],;
    useCases: [;
      "Consulting firms",;
      "Freelancers",;
      "Remote teams",;
      "Project-based businesses";
    ],;
    technologies: ["React", "Node.js", "MongoDB", "Analytics"],;
    link: "https://ziontechgroup.com/services/time-tracking",;
    icon: "⏱️";,
},;
  {;
    id: "email-marketing-automation",;
    name: "Email Marketing Automation Suite",;
    category: "micro-saas",;
    description: "Comprehensive email marketing platform with advanced automation, segmentation, and personalization.",;
    features: [;
      "Drag-and-drop email builder",;
      "Advanced automation workflows",;
      "Behavioral segmentation",;
      "A/B testing",;
      "Deliverability optimization",;
      "Analytics & reporting";
    ],;
    pricing: {;
      starter: 29,;
      professional: 79,;
      enterprise: 199,;
      currency: "USD";,
},;
    benefits: [;
      "Increase email ROI by 300%",;
      "Automated customer journeys",;
      "Personalized messaging",;
      "Better deliverability rates";
    ],;
    useCases: [;
      "E-commerce businesses",;
      "SaaS companies",;
      "Marketing agencies",;
      "Content creators";
    ],;
    technologies: ["React", "Node.js", "Redis", "Email APIs"],;
    link: "https://ziontechgroup.com/services/email-marketing",;
    icon: "📧";,
},;
  {;
    id: "website-speed-optimizer",;
    name: "Website Speed Optimizer",;
    category: "micro-saas",;
    description: "AI-powered website performance optimization tool that automatically improves loading speeds and Core Web Vitals.",;
    features: [;
      "Automatic image optimization",;
      "Code minification",;
      "CDN integration",;
      "Core Web Vitals monitoring",;
      "Performance reports",;
      "One-click optimization";
    ],;
    pricing: {;
      starter: 19,;
      professional: 49,;
      enterprise: 129,;
      currency: "USD";,
},;
    benefits: [;
      "Improve page speed by 60%",;
      "Better SEO rankings",;
      "Reduced bounce rates",;
      "Improved user experience";
    ],;
    useCases: [;
      "Website owners",;
      "Digital agencies",;
      "E-commerce sites",;
      "Content websites";
    ],;
    technologies: ["AI Optimization", "CDN", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/speed-optimizer",;
    icon: "⚡";,
},;
  {;
    id: "api-monitoring-platform",;
    name: "API Monitoring Platform",;
    category: "micro-saas",;
    description: "Comprehensive API monitoring and testing platform with real-time alerts and performance analytics.",;
    features: [;
      "Real-time API monitoring",;
      "Automated testing",;
      "Performance analytics",;
      "Uptime monitoring",;
      "Error tracking",;
      "SLA monitoring";
    ],;
    pricing: {;
      starter: 25,;
      professional: 65,;
      enterprise: 175,;
      currency: "USD";,
},;
    benefits: [;
      "99.9% API uptime",;
      "Faster issue resolution",;
      "Better user experience",;
      "Proactive monitoring";
    ],;
    useCases: [;
      "API developers",;
      "SaaS companies",;
      "Mobile app developers",;
      "Enterprise applications";
    ],;
    technologies: ["Node.js", "MongoDB", "Monitoring APIs", "React"],;
    link: "https://ziontechgroup.com/services/api-monitoring",;
    icon: "🔍";,
},;
  {;
    id: "password-manager-business",;
    name: "Business Password Manager",;
    category: "micro-saas",;
    description: "Enterprise-grade password management solution with team sharing, security policies, and audit trails.",;
    features: [;
      "Secure password storage",;
      "Team password sharing",;
      "Security policies",;
      "Audit trails",;
      "SSO integration",;
      "Mobile apps";
    ],;
    pricing: {;
      starter: 3,;
      professional: 8,;
      enterprise: 20,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced security",;
      "Reduced password-related breaches",;
      "Centralized access management",;
      "Compliance with security standards";
    ],;
    useCases: [;
      "Small businesses",;
      "Remote teams",;
      "IT departments",;
      "Security-conscious organizations";
    ],;
    technologies: ["Encryption", "React", "Node.js", "PostgreSQL"],;
    link: "https://ziontechgroup.com/services/password-manager",;
    icon: "🔐";,
},;
  {;
    id: "form-builder-platform",;
    name: "Advanced Form Builder",;
    category: "micro-saas",;
    description: "Powerful form builder with conditional logic, payment integration, and advanced analytics.",;
    features: [;
      "Drag-and-drop builder",;
      "Conditional logic",;
      "Payment integration",;
      "Multi-step forms",;
      "Analytics dashboard",;
      "API access";
    ],;
    pricing: {;
      starter: 15,;
      professional: 45,;
      enterprise: 120,;
      currency: "USD";,
},;
    benefits: [;
      "Increase form conversions by 40%",;
      "Reduce form abandonment",;
      "Streamlined data collection",;
      "Better user experience";
    ],;
    useCases: [;
      "Lead generation",;
      "Event registration",;
      "Customer feedback",;
      "Order processing";
    ],;
    technologies: ["React", "Node.js", "MongoDB", "Payment APIs"],;
    link: "https://ziontechgroup.com/services/form-builder",;
    icon: "📋";,
},;
  {;
    id: "screenshot-api-service",;
    name: "Screenshot API Service",;
    category: "micro-saas",;
    description: "High-performance screenshot API for websites, PDFs, and web applications with advanced customization options.",;
    features: [;
      "High-quality screenshots",;
      "PDF generation",;
      "Custom dimensions",;
      "Mobile device simulation",;
      "Batch processing",;
      "API integration";
    ],;
    pricing: {;
      starter: 20,;
      professional: 60,;
      enterprise: 160,;
      currency: "USD";,
},;
    benefits: [;
      "Fast screenshot generation",;
      "Scalable infrastructure",;
      "Multiple output formats",;
      "Developer-friendly API";
    ],;
    useCases: [;
      "Web development",;
      "Quality assurance",;
      "Documentation",;
      "Social media automation";
    ],;
    technologies: ["Puppeteer", "Node.js", "AWS", "React"],;
    link: "https://ziontechgroup.com/services/screenshot-api",;
    icon: "📸";,
},;

  // Additional IT Services;
  {;
    id: "kubernetes-orchestration",;
    name: "Kubernetes Orchestration",;
    category: "it-services",;
    description: "Complete Kubernetes setup, management, and optimization for containerized applications.",;
    features: [;
      "Cluster setup & configuration",;
      "Auto-scaling implementation",;
      "Service mesh integration",;
      "Monitoring & logging",;
      "Security hardening",;
      "Disaster recovery";
    ],;
    pricing: {;
      starter: 8000,;
      professional: 25000,;
      enterprise: 75000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved application reliability",;
      "Automatic scaling",;
      "Reduced infrastructure costs",;
      "Better resource utilization";
    ],;
    useCases: [;
      "Microservices architecture",;
      "Cloud-native applications",;
      "High-traffic websites",;
      "Enterprise applications";
    ],;
    technologies: ["Kubernetes", "Docker", "Helm", "Prometheus", "Istio"],;
    link: "https://ziontechgroup.com/services/kubernetes",;
    icon: "☸️";,
},;
  {;
    id: "api-gateway-setup",;
    name: "API Gateway & Management",;
    category: "it-services",;
    description: "Enterprise API gateway setup with rate limiting, authentication, monitoring, and analytics.",;
    features: [;
      "API gateway configuration",;
      "Rate limiting & throttling",;
      "Authentication & authorization",;
      "API versioning",;
      "Analytics & monitoring",;
      "Developer portal";
    ],;
    pricing: {;
      starter: 6000,;
      professional: 18000,;
      enterprise: 55000,;
      currency: "USD";,
},;
    benefits: [;
      "Centralized API management",;
      "Enhanced security",;
      "Better performance",;
      "Simplified integration";
    ],;
    useCases: [;
      "Microservices architecture",;
      "Third-party integrations",;
      "Mobile app backends",;
      "Enterprise systems";
    ],;
    technologies: ["Kong", "AWS API Gateway", "Azure API Management", "Nginx"],;
    link: "https://ziontechgroup.com/services/api-gateway",;
    icon: "🚪";,
},;
  {;
    id: "database-optimization",;
    name: "Database Performance Optimization",;
    category: "it-services",;
    description: "Comprehensive database optimization including query tuning, indexing, and performance monitoring.",;
    features: [;
      "Query performance analysis",;
      "Index optimization",;
      "Database tuning",;
      "Performance monitoring",;
      "Backup optimization",;
      "Scaling strategies";
    ],;
    pricing: {;
      starter: 4000,;
      professional: 12000,;
      enterprise: 35000,;
      currency: "USD";,
},;
    benefits: [;
      "Faster query execution",;
      "Reduced resource usage",;
      "Better scalability",;
      "Improved user experience";
    ],;
    useCases: [;
      "High-traffic applications",;
      "Data-intensive systems",;
      "E-commerce platforms",;
      "Analytics systems";
    ],;
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],;
    link: "https://ziontechgroup.com/services/database-optimization",;
    icon: "🗄️";,
},;
  {;
    id: "network-security-audit",;
    name: "Network Security Audit",;
    category: "it-services",;
    description: "Comprehensive network security assessment including penetration testing and vulnerability scanning.",;
    features: [;
      "Network vulnerability scanning",;
      "Penetration testing",;
      "Firewall configuration review",;
      "Wireless security audit",;
      "Compliance assessment",;
      "Security recommendations";
    ],;
    pricing: {;
      starter: 5000,;
      professional: 15000,;
      enterprise: 45000,;
      currency: "USD";,
},;
    benefits: [;
      "Identify security vulnerabilities",;
      "Compliance with standards",;
      "Protect against threats",;
      "Improve security posture";
    ],;
    useCases: [;
      "Corporate networks",;
      "Healthcare organizations",;
      "Financial institutions",;
      "Government agencies";
    ],;
    technologies: ["Nmap", "Nessus", "Metasploit", "Wireshark", "Burp Suite"],;
    link: "https://ziontechgroup.com/services/network-security",;
    icon: "🛡️";,
},;
  {;
    id: "disaster-recovery-planning",;
    name: "Disaster Recovery Planning",;
    category: "it-services",;
    description: "Comprehensive disaster recovery planning and implementation for business continuity.",;
    features: [;
      "Business impact analysis",;
      "Recovery time objectives",;
      "Backup strategy design",;
      "Failover implementation",;
      "Testing & validation",;
      "Documentation & training";
    ],;
    pricing: {;
      starter: 7000,;
      professional: 20000,;
      enterprise: 60000,;
      currency: "USD";,
},;
    benefits: [;
      "Minimize downtime",;
      "Protect critical data",;
      "Ensure business continuity",;
      "Compliance requirements";
    ],;
    useCases: [;
      "Enterprise systems",;
      "Critical applications",;
      "Data centers",;
      "Cloud infrastructure";
    ],;
    technologies: ["AWS", "Azure", "VMware", "Veeam", "Commvault"],;
    link: "https://ziontechgroup.com/services/disaster-recovery",;
    icon: "🔄";,
},;
  {;
    id: "microservices-architecture",;
    name: "Microservices Architecture Design",;
    category: "it-services",;
    description: "Complete microservices architecture design and implementation for scalable applications.",;
    features: [;
      "Architecture design",;
      "Service decomposition",;
      "API design",;
      "Container orchestration",;
      "Service mesh implementation",;
      "Monitoring setup";
    ],;
    pricing: {;
      starter: 15000,;
      professional: 45000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved scalability",;
      "Better maintainability",;
      "Faster development",;
      "Technology flexibility";
    ],;
    useCases: [;
      "Legacy system modernization",;
      "High-scale applications",;
      "Multi-team development",;
      "Cloud-native applications";
    ],;
    technologies: ["Docker", "Kubernetes", "Istio", "gRPC", "Redis"],;
    link: "https://ziontechgroup.com/services/microservices",;
    icon: "🏗️";,
},;
  {;
    id: "performance-monitoring",;
    name: "Application Performance Monitoring",;
    category: "it-services",;
    description: "Comprehensive APM solution with real-time monitoring, alerting, and performance optimization.",;
    features: [;
      "Real-time performance monitoring",;
      "Error tracking & alerting",;
      "User experience monitoring",;
      "Infrastructure monitoring",;
      "Custom dashboards",;
      "Performance optimization";
    ],;
    pricing: {;
      starter: 3000,;
      professional: 9000,;
      enterprise: 25000,;
      currency: "USD";,
},;
    benefits: [;
      "Proactive issue detection",;
      "Improved application performance",;
      "Better user experience",;
      "Reduced downtime";
    ],;
    useCases: [;
      "Web applications",;
      "Mobile apps",;
      "API services",;
      "Enterprise systems";
    ],;
    technologies: ["New Relic", "Datadog", "Prometheus", "Grafana", "ELK Stack"],;
    link: "https://ziontechgroup.com/services/apm",;
    icon: "📊";,
},;
  {;
    id: "identity-access-management",;
    name: "Identity & Access Management",;
    category: "it-services",;
    description: "Enterprise IAM solution with SSO, multi-factor authentication, and role-based access control.",;
    features: [;
      "Single Sign-On (SSO)",;
      "Multi-factor authentication",;
      "Role-based access control",;
      "User provisioning",;
      "Audit & compliance",;
      "API security";
    ],;
    pricing: {;
      starter: 5000,;
      professional: 15000,;
      enterprise: 40000,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced security",;
      "Simplified user management",;
      "Compliance adherence",;
      "Reduced IT overhead";
    ],;
    useCases: [;
      "Enterprise organizations",;
      "Healthcare systems",;
      "Financial institutions",;
      "Government agencies";
    ],;
    technologies: ["Okta", "Azure AD", "Auth0", "SAML", "OAuth"],;
    link: "https://ziontechgroup.com/services/iam",;
    icon: "👤";,
},;

  // Additional AI Services;
  {;
    id: "computer-vision-solutions",;
    name: "Computer Vision Solutions",;
    category: "ai-services",;
    description: "Custom computer vision solutions for image recognition, object detection, and visual analytics.",;
    features: [;
      "Image classification",;
      "Object detection",;
      "Facial recognition",;
      "OCR & text extraction",;
      "Quality inspection",;
      "Real-time processing";
    ],;
    pricing: {;
      starter: 12000,;
      professional: 35000,;
      enterprise: 100000,;
      currency: "USD";,
},;
    benefits: [;
      "Automated visual inspection",;
      "Improved accuracy",;
      "Cost reduction",;
      "24/7 operation";
    ],;
    useCases: [;
      "Manufacturing quality control",;
      "Retail analytics",;
      "Security surveillance",;
      "Medical imaging";
    ],;
    technologies: ["TensorFlow", "OpenCV", "YOLO", "PyTorch", "CUDA"],;
    link: "https://ziontechgroup.com/services/computer-vision",;
    icon: "👁️";,
},;
  {;
    id: "natural-language-processing",;
    name: "Natural Language Processing",;
    category: "ai-services",;
    description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.",;
    features: [;
      "Text classification",;
      "Sentiment analysis",;
      "Named entity recognition",;
      "Language translation",;
      "Text summarization",;
      "Question answering";
    ],;
    pricing: {;
      starter: 8000,;
      professional: 25000,;
      enterprise: 75000,;
      currency: "USD";,
},;
    benefits: [;
      "Automated text processing",;
      "Better customer insights",;
      "Improved content management",;
      "Multilingual support";
    ],;
    useCases: [;
      "Customer feedback analysis",;
      "Content moderation",;
      "Document processing",;
      "Chatbot enhancement";
    ],;
    technologies: ["BERT", "GPT", "spaCy", "NLTK", "Transformers"],;
    link: "https://ziontechgroup.com/services/nlp",;
    icon: "📝";,
},;
  {;
    id: "predictive-analytics",;
    name: "Predictive Analytics Platform",;
    category: "ai-services",;
    description: "Advanced predictive analytics using machine learning for forecasting and trend analysis.",;
    features: [;
      "Demand forecasting",;
      "Risk assessment",;
      "Customer behavior prediction",;
      "Market trend analysis",;
      "Anomaly detection",;
      "Real-time predictions";
    ],;
    pricing: {;
      starter: 10000,;
      professional: 30000,;
      enterprise: 90000,;
      currency: "USD";,
},;
    benefits: [;
      "Data-driven decisions",;
      "Reduced risks",;
      "Improved efficiency",;
      "Competitive advantage";
    ],;
    useCases: [;
      "Supply chain optimization",;
      "Financial risk management",;
      "Sales forecasting",;
      "Maintenance scheduling";
    ],;
    technologies: ["Scikit-learn", "XGBoost", "Prophet", "Python", "Apache Spark"],;
    link: "https://ziontechgroup.com/services/predictive-analytics",;
    icon: "🔮";,
},;
  {;
    id: "recommendation-engine",;
    name: "AI Recommendation Engine",;
    category: "ai-services",;
    description: "Intelligent recommendation system for personalized content, products, and services.",;
    features: [;
      "Collaborative filtering",;
      "Content-based filtering",;
      "Hybrid recommendations",;
      "Real-time personalization",;
      "A/B testing framework",;
      "Performance analytics";
    ],;
    pricing: {;
      starter: 15000,;
      professional: 45000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Increased engagement",;
      "Higher conversion rates",;
      "Better user experience",;
      "Revenue growth";
    ],;
    useCases: [;
      "E-commerce platforms",;
      "Streaming services",;
      "Content platforms",;
      "Social media";
    ],;
    technologies: ["TensorFlow", "Apache Spark", "Redis", "Python", "MLlib"],;
    link: "https://ziontechgroup.com/services/recommendation-engine",;
    icon: "🎯";,
},;
  {;
    id: "ai-powered-search",;
    name: "AI-Powered Search Engine",;
    category: "ai-services",;
    description: "Intelligent search solution with semantic understanding, auto-complete, and personalized results.",;
    features: [;
      "Semantic search",;
      "Auto-complete suggestions",;
      "Personalized results",;
      "Multi-language support",;
      "Voice search",;
      "Search analytics";
    ],;
    pricing: {;
      starter: 6000,;
      professional: 18000,;
      enterprise: 55000,;
      currency: "USD";,
},;
    benefits: [;
      "Better search accuracy",;
      "Improved user experience",;
      "Increased engagement",;
      "Reduced bounce rates";
    ],;
    useCases: [;
      "E-commerce search",;
      "Document management",;
      "Knowledge bases",;
      "Content platforms";
    ],;
    technologies: ["Elasticsearch", "BERT", "Vector Search", "Python", "React"],;
    link: "https://ziontechgroup.com/services/ai-search",;
    icon: "🔍";,
},;
  {;
    id: "ai-content-moderation",;
    name: "AI Content Moderation",;
    category: "ai-services",;
    description: "Automated content moderation using AI to detect and filter inappropriate content across platforms.",;
    features: [;
      "Text content filtering",;
      "Image content detection",;
      "Video content analysis",;
      "Real-time moderation",;
      "Custom policy enforcement",;
      "Human review integration";
    ],;
    pricing: {;
      starter: 5000,;
      professional: 15000,;
      enterprise: 45000,;
      currency: "USD";,
},;
    benefits: [;
      "24/7 content monitoring",;
      "Reduced moderation costs",;
      "Consistent policy enforcement",;
      "Scalable solution";
    ],;
    useCases: [;
      "Social media platforms",;
      "User-generated content",;
      "Online communities",;
      "Marketplace platforms";
    ],;
    technologies: ["Computer Vision", "NLP", "TensorFlow", "OpenCV", "Python"],;
    link: "https://ziontechgroup.com/services/content-moderation",;
    icon: "🛡️";,
},;
  {;
    id: "ai-fraud-detection",;
    name: "AI Fraud Detection System",;
    category: "ai-services",;
    description: "Advanced fraud detection using machine learning to identify and prevent fraudulent activities.",;
    features: [;
      "Real-time fraud detection",;
      "Transaction monitoring",;
      "Behavioral analysis",;
      "Risk scoring",;
      "Alert system",;
      "False positive reduction";
    ],;
    pricing: {;
      starter: 8000,;
      professional: 25000,;
      enterprise: 75000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduced fraud losses",;
      "Faster detection",;
      "Lower false positives",;
      "Compliance adherence";
    ],;
    useCases: [;
      "Financial institutions",;
      "E-commerce platforms",;
      "Payment processors",;
      "Insurance companies";
    ],;
    technologies: ["Machine Learning", "Anomaly Detection", "Python", "Apache Spark", "TensorFlow"],;
    link: "https://ziontechgroup.com/services/fraud-detection",;
    icon: "🚨";,
},;
  {;
    id: "ai-voice-assistant",;
    name: "AI Voice Assistant Development",;
    category: "ai-services",;
    description: "Custom voice assistant development with natural language understanding and multi-platform integration.",;
    features: [;
      "Voice recognition",;
      "Natural language understanding",;
      "Multi-platform support",;
      "Custom wake words",;
      "Integration APIs",;
      "Analytics dashboard";
    ],;
    pricing: {;
      starter: 10000,;
      professional: 30000,;
      enterprise: 90000,;
      currency: "USD";,
},;
    benefits: [;
      "Hands-free operation",;
      "Improved accessibility",;
      "Enhanced user experience",;
      "Multi-language support";
    ],;
    useCases: [;
      "Smart home automation",;
      "Customer service",;
      "Healthcare applications",;
      "Automotive systems";
    ],;
    technologies: ["Speech Recognition", "NLP", "WebRTC", "Python", "Node.js"],;
    link: "https://ziontechgroup.com/services/voice-assistant",;
    icon: "🎤";,
},;

  // Additional Innovative Micro SaaS Services;
  {;
    id: "ai-email-responder",;
    name: "AI Email Responder Pro",;
    category: "micro-saas",;
    description: "Intelligent email automation that reads, categorizes, and responds to emails using advanced AI, handling simple inquiries and flagging important messages.",;
    features: [;
      "AI-powered email analysis",;
      "Automatic response generation",;
      "Priority email flagging",;
      "Sentiment analysis",;
      "Multi-language support",;
      "Custom response templates",;
      "Integration with CRM systems",;
      "Analytics dashboard";
    ],;
    pricing: {;
      starter: 35,;
      professional: 89,;
      enterprise: 249,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce email response time by 80%",;
      "24/7 email handling",;
      "Improved customer satisfaction",;
      "Better email organization",;
      "Reduced manual workload";
    ],;
    useCases: [;
      "Customer support teams",;
      "Sales departments",;
      "Small businesses",;
      "Freelancers and consultants";
    ],;
    technologies: ["OpenAI GPT-4", "React", "Node.js", "PostgreSQL", "Email APIs"],;
    link: "https://ziontechgroup.com/services/ai-email-responder",;
    icon: "📧";,
},;
  {;
    id: "ai-video-editor",;
    name: "AI Video Editor Pro",;
    category: "micro-saas",;
    description: "Revolutionary AI-powered video editing platform that automatically creates professional videos from raw footage with intelligent scene detection and editing.",;
    features: [;
      "AI-powered scene detection",;
      "Automatic video editing",;
      "Smart transitions and effects",;
      "Voice-over generation",;
      "Background music matching",;
      "Multi-format export",;
      "Collaborative editing",;
      "Real-time preview";
    ],;
    pricing: {;
      starter: 49,;
      professional: 129,;
      enterprise: 349,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce video editing time by 90%",;
      "Professional quality output",;
      "No technical skills required",;
      "Consistent brand styling",;
      "Scalable video production";
    ],;
    useCases: [;
      "Content creators",;
      "Marketing agencies",;
      "E-learning platforms",;
      "Social media managers";
    ],;
    technologies: ["Computer Vision", "AI/ML", "React", "Node.js", "FFmpeg"],;
    link: "https://ziontechgroup.com/services/ai-video-editor",;
    icon: "🎬";,
},;
  {;
    id: "smart-contract-auditor",;
    name: "Smart Contract Security Auditor",;
    category: "micro-saas",;
    description: "AI-powered smart contract auditing platform that automatically detects vulnerabilities, security issues, and compliance problems in blockchain code.",;
    features: [;
      "Automated vulnerability scanning",;
      "Security pattern analysis",;
      "Gas optimization suggestions",;
      "Compliance checking",;
      "Code quality assessment",;
      "Risk scoring",;
      "Detailed audit reports",;
      "Integration with development tools";
    ],;
    pricing: {;
      starter: 199,;
      professional: 499,;
      enterprise: 1299,;
      currency: "USD";,
},;
    benefits: [;
      "Prevent costly security breaches",;
      "Reduce audit time by 80%",;
      "Comprehensive security coverage",;
      "Automated compliance checking",;
      "Cost-effective auditing";
    ],;
    useCases: [;
      "DeFi protocols",;
      "NFT marketplaces",;
      "Blockchain startups",;
      "Enterprise blockchain projects";
    ],;
    technologies: ["AI/ML", "Solidity", "React", "Node.js", "Blockchain APIs"],;
    link: "https://ziontechgroup.com/services/smart-contract-auditor",;
    icon: "🔒";,
},;
  {;
    id: "ai-code-reviewer",;
    name: "AI Code Reviewer Pro",;
    category: "micro-saas",;
    description: "Intelligent code review platform that automatically analyzes code quality, detects bugs, suggests improvements, and enforces coding standards.",;
    features: [;
      "Automated code analysis",;
      "Bug detection and prevention",;
      "Code quality scoring",;
      "Performance optimization suggestions",;
      "Security vulnerability scanning",;
      "Style guide enforcement",;
      "Team collaboration tools",;
      "Integration with CI/CD";
    ],;
    pricing: {;
      starter: 29,;
      professional: 79,;
      enterprise: 199,;
      currency: "USD";,
},;
    benefits: [;
      "Improve code quality by 60%",;
      "Reduce bugs in production",;
      "Faster development cycles",;
      "Consistent coding standards",;
      "Knowledge sharing across teams";
    ],;
    useCases: [;
      "Software development teams",;
      "DevOps teams",;
      "Code quality managers",;
      "Technical leads";
    ],;
    technologies: ["AI/ML", "Static Analysis", "React", "Node.js", "Git APIs"],;
    link: "https://ziontechgroup.com/services/ai-code-reviewer",;
    icon: "👨‍💻";,
},;
  {;
    id: "ai-customer-insights",;
    name: "AI Customer Insights Platform",;
    category: "micro-saas",;
    description: "Advanced customer analytics platform that uses AI to analyze customer behavior, predict churn, and provide actionable insights for business growth.",;
    features: [;
      "Customer behavior analysis",;
      "Churn prediction models",;
      "Sentiment analysis",;
      "Customer segmentation",;
      "Lifetime value prediction",;
      "Personalization recommendations",;
      "Real-time dashboards",;
      "Automated reporting";
    ],;
    pricing: {;
      starter: 99,;
      professional: 249,;
      enterprise: 649,;
      currency: "USD";,
},;
    benefits: [;
      "Increase customer retention by 40%",;
      "Predict customer behavior",;
      "Optimize marketing campaigns",;
      "Improve customer experience",;
      "Data-driven decision making";
    ],;
    useCases: [;
      "E-commerce businesses",;
      "SaaS companies",;
      "Subscription services",;
      "Customer success teams";
    ],;
    technologies: ["AI/ML", "Analytics", "React", "Node.js", "Data Science"],;
    link: "https://ziontechgroup.com/services/ai-customer-insights",;
    icon: "📊";,
},;
  {;
    id: "ai-translation-platform",;
    name: "AI Translation Platform",;
    category: "micro-saas",;
    description: "Advanced AI-powered translation platform supporting 100+ languages with context-aware translations, voice translation, and document processing.",;
    features: [;
      "100+ language support",;
      "Context-aware translation",;
      "Voice translation",;
      "Document translation",;
      "Real-time translation",;
      "Translation memory",;
      "Quality assurance tools",;
      "API integration";
    ],;
    pricing: {;
      starter: 39,;
      professional: 99,;
      enterprise: 249,;
      currency: "USD";,
},;
    benefits: [;
      "Accurate translations",;
      "Faster content localization",;
      "Cost-effective translation",;
      "Consistent terminology",;
      "Scalable translation workflow";
    ],;
    useCases: [;
      "Global businesses",;
      "Content creators",;
      "E-learning platforms",;
      "Customer support teams";
    ],;
    technologies: ["NLP", "AI/ML", "React", "Node.js", "Translation APIs"],;
    link: "https://ziontechgroup.com/services/ai-translation-platform",;
    icon: "🌐";,
},;
  {;
    id: "ai-workflow-automation",;
    name: "AI Workflow Automation Suite",;
    category: "micro-saas",;
    description: "Intelligent workflow automation platform that uses AI to analyze business processes and automatically create optimized workflows.",;
    features: [;
      "Process discovery and analysis",;
      "AI-powered workflow creation",;
      "Automated task assignment",;
      "Performance monitoring",;
      "Exception handling",;
      "Integration with 500+ apps",;
      "Custom workflow builder",;
      "Analytics and reporting";
    ],;
    pricing: {;
      starter: 59,;
      professional: 149,;
      enterprise: 399,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce manual work by 70%",;
      "Improve process efficiency",;
      "Eliminate human errors",;
      "Faster task completion",;
      "Better resource allocation";
    ],;
    useCases: [;
      "Business process automation",;
      "HR workflows",;
      "Sales processes",;
      "Customer onboarding";
    ],;
    technologies: ["AI/ML", "Workflow Engine", "React", "Node.js", "Integration APIs"],;
    link: "https://ziontechgroup.com/services/ai-workflow-automation",;
    icon: "⚙️";,
},;
  {;
    id: "ai-data-visualization",;
    name: "AI Data Visualization Studio",;
    category: "micro-saas",;
    description: "Intelligent data visualization platform that automatically creates interactive charts, dashboards, and reports from raw data using AI.",;
    features: [;
      "Automatic chart generation",;
      "Interactive dashboards",;
      "AI-powered insights",;
      "Real-time data updates",;
      "Custom visualization types",;
      "Export to multiple formats",;
      "Collaborative features",;
      "Mobile-responsive design";
    ],;
    pricing: {;
      starter: 45,;
      professional: 119,;
      enterprise: 299,;
      currency: "USD";,
},;
    benefits: [;
      "Create visualizations in minutes",;
      "Better data understanding",;
      "Automated insight generation",;
      "Professional presentation quality",;
      "Easy data storytelling";
    ],;
    useCases: [;
      "Business intelligence",;
      "Data analysts",;
      "Marketing teams",;
      "Executive reporting";
    ],;
    technologies: ["Data Visualization", "AI/ML", "React", "D3.js", "Chart.js"],;
    link: "https://ziontechgroup.com/services/ai-data-visualization",;
    icon: "📈";,
},;
  {;
    id: "ai-social-listening",;
    name: "AI Social Listening Platform",;
    category: "micro-saas",;
    description: "Advanced social media monitoring platform that uses AI to track brand mentions, analyze sentiment, and provide actionable insights across all social platforms.",;
    features: [;
      "Multi-platform monitoring",;
      "Sentiment analysis",;
      "Influencer identification",;
      "Trend detection",;
      "Crisis management alerts",;
      "Competitor analysis",;
      "Custom reporting",;
      "Real-time notifications";
    ],;
    pricing: {;
      starter: 79,;
      professional: 199,;
      enterprise: 499,;
      currency: "USD";,
},;
    benefits: [;
      "Monitor brand reputation",;
      "Identify growth opportunities",;
      "Prevent PR crises",;
      "Track competitor activities",;
      "Improve customer engagement";
    ],;
    useCases: [;
      "Brand managers",;
      "Marketing agencies",;
      "PR teams",;
      "Social media managers";
    ],;
    technologies: ["NLP", "AI/ML", "Social APIs", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/ai-social-listening",;
    icon: "👂";,
},;
  {;
    id: "ai-predictive-maintenance",;
    name: "AI Predictive Maintenance System",;
    category: "micro-saas",;
    description: "Intelligent predictive maintenance platform that uses IoT sensors and AI to predict equipment failures and optimize maintenance schedules.",;
    features: [;
      "IoT sensor integration",;
      "Failure prediction models",;
      "Maintenance scheduling",;
      "Cost optimization",;
      "Real-time monitoring",;
      "Alert system",;
      "Performance analytics",;
      "Mobile app access";
    ],;
    pricing: {;
      starter: 199,;
      professional: 499,;
      enterprise: 1299,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce downtime by 50%",;
      "Lower maintenance costs",;
      "Extend equipment lifespan",;
      "Prevent unexpected failures",;
      "Optimize resource allocation";
    ],;
    useCases: [;
      "Manufacturing companies",;
      "Facility management",;
      "Transportation companies",;
      "Energy sector";
    ],;
    technologies: ["IoT", "AI/ML", "Predictive Analytics", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/ai-predictive-maintenance",;
    icon: "🔧";,
},;
  {;
    id: "mobile-survey-platform",;
    name: "Mobile-First Survey Platform",;
    category: "micro-saas",;
    description: "Advanced mobile-optimized survey platform with adaptive questioning, real-time analytics, and AI-powered insights for better data collection.",;
    features: [;
      "Mobile-first design",;
      "Adaptive questioning logic",;
      "Real-time analytics",;
      "Offline survey capability",;
      "Multi-media question types",;
      "AI-powered insights",;
      "Custom branding",;
      "Integration APIs";
    ],;
    pricing: {;
      starter: 25,;
      professional: 65,;
      enterprise: 179,;
      currency: "USD";,
},;
    benefits: [;
      "Increase response rates by 60%",;
      "Better data quality",;
      "Real-time insights",;
      "Mobile-optimized experience",;
      "Reduced survey abandonment";
    ],;
    useCases: [;
      "Market research",;
      "Customer feedback",;
      "Employee surveys",;
      "Event feedback collection";
    ],;
    technologies: ["React Native", "Node.js", "MongoDB", "AI/ML", "Analytics"],;
    link: "https://ziontechgroup.com/services/mobile-survey-platform",;
    icon: "📱";,
},;
  {;
    id: "niche-productivity-planner",;
    name: "Industry-Specific Productivity Planner",;
    category: "micro-saas",;
    description: "Specialized productivity planning tool tailored to specific industries with custom dashboards, tools, and AI-powered recommendations.",;
    features: [;
      "Industry-specific templates",;
      "AI-powered goal setting",;
      "Custom dashboard creation",;
      "Team collaboration tools",;
      "Progress tracking",;
      "Performance analytics",;
      "Integration with industry tools",;
      "Mobile app";
    ],;
    pricing: {;
      starter: 22,;
      professional: 55,;
      enterprise: 149,;
      currency: "USD";,
},;
    benefits: [;
      "Increase productivity by 35%",;
      "Industry-specific insights",;
      "Better goal achievement",;
      "Streamlined workflows",;
      "Data-driven decisions";
    ],;
    useCases: [;
      "Healthcare professionals",;
      "Legal firms",;
      "Real estate agents",;
      "Consulting firms";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "AI/ML", "Analytics"],;
    link: "https://ziontechgroup.com/services/niche-productivity-planner",;
    icon: "📋";,
},;
  {;
    id: "event-management-dashboard",;
    name: "Smart Event Management Dashboard",;
    category: "micro-saas",;
    description: "Comprehensive event management platform with ticket sales, guest management, scheduling, and real-time analytics for successful events.",;
    features: [;
      "Event planning tools",;
      "Ticket sales management",;
      "Guest registration",;
      "Schedule management",;
      "Real-time analytics",;
      "Payment processing",;
      "Mobile check-in",;
      "Post-event surveys";
    ],;
    pricing: {;
      starter: 45,;
      professional: 119,;
      enterprise: 299,;
      currency: "USD";,
},;
    benefits: [;
      "Streamline event planning",;
      "Increase ticket sales",;
      "Better guest experience",;
      "Real-time insights",;
      "Reduced manual work";
    ],;
    useCases: [;
      "Conference organizers",;
      "Wedding planners",;
      "Corporate events",;
      "Community organizations";
    ],;
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Analytics"],;
    link: "https://ziontechgroup.com/services/event-management-dashboard",;
    icon: "🎪";,
},;
  {;
    id: "ai-seo-optimizer",;
    name: "AI SEO Content Optimizer",;
    category: "micro-saas",;
    description: "AI-powered SEO optimization platform that analyzes web pages, provides keyword recommendations, and optimizes content for better search rankings.",;
    features: [;
      "Real-time SEO analysis",;
      "Keyword research and recommendations",;
      "Content optimization suggestions",;
      "Competitor analysis",;
      "Technical SEO audits",;
      "Performance tracking",;
      "Content scoring",;
      "Automated reports";
    ],;
    pricing: {;
      starter: 39,;
      professional: 99,;
      enterprise: 249,;
      currency: "USD";,
},;
    benefits: [;
      "Improve search rankings by 50%",;
      "Increase organic traffic",;
      "Better content performance",;
      "Automated optimization",;
      "Competitive advantage";
    ],;
    useCases: [;
      "Content creators",;
      "Digital marketing agencies",;
      "E-commerce businesses",;
      "Blog owners";
    ],;
    technologies: ["AI/ML", "React", "Node.js", "SEO APIs", "Analytics"],;
    link: "https://ziontechgroup.com/services/ai-seo-optimizer",;
    icon: "🔍";,
},;
  {;
    id: "ai-talent-matching",;
    name: "AI Talent Matching Platform",;
    category: "micro-saas",;
    description: "Advanced AI-powered talent matching system that connects businesses with the right tech professionals using machine learning algorithms.",;
    features: [;
      "AI-powered candidate matching",;
      "Skills assessment tools",;
      "Behavioral analysis",;
      "Cultural fit evaluation",;
      "Interview scheduling",;
      "Performance tracking",;
      "Integration with job boards",;
      "Analytics dashboard";
    ],;
    pricing: {;
      starter: 199,;
      professional: 499,;
      enterprise: 1299,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce hiring time by 70%",;
      "Better candidate matches",;
      "Improved retention rates",;
      "Cost-effective recruitment",;
      "Data-driven hiring decisions";
    ],;
    useCases: [;
      "Tech companies",;
      "Recruitment agencies",;
      "HR departments",;
      "Startups";
    ],;
    technologies: ["AI/ML", "React", "Node.js", "PostgreSQL", "Matching Algorithms"],;
    link: "https://ziontechgroup.com/services/ai-talent-matching",;
    icon: "👥";,
},;
  {;
    id: "ai-recruiting-platform",;
    name: "AI Recruiting Platform",;
    category: "micro-saas",;
    description: "Intelligent recruitment platform with automated screening, candidate scoring, and streamlined hiring processes for faster, better hires.",;
    features: [;
      "Automated resume screening",;
      "AI candidate scoring",;
      "Video interview analysis",;
      "Reference checking automation",;
      "Job posting optimization",;
      "Candidate pipeline management",;
      "Diversity and inclusion metrics",;
      "Integration with ATS systems";
    ],;
    pricing: {;
      starter: 149,;
      professional: 399,;
      enterprise: 999,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce time-to-hire by 60%",;
      "Improve candidate quality",;
      "Eliminate bias in hiring",;
      "Streamlined recruitment process",;
      "Better candidate experience";
    ],;
    useCases: [;
      "Enterprise companies",;
      "HR departments",;
      "Recruitment agencies",;
      "Growing startups";
    ],;
    technologies: ["AI/ML", "React", "Node.js", "PostgreSQL", "Video Analysis"],;
    link: "https://ziontechgroup.com/services/ai-recruiting-platform",;
    icon: "🎯";,
},;
  {;
    id: "quantum-computing-solutions",;
    name: "Quantum Computing Solutions",;
    category: "micro-saas",;
    description: "Cutting-edge quantum computing applications for optimization, cryptography, and scientific research, positioning businesses at the forefront of innovation.",;
    features: [;
      "Quantum optimization algorithms",;
      "Cryptographic solutions",;
      "Scientific simulation tools",;
      "Quantum machine learning",;
      "Performance benchmarking",;
      "Cloud quantum access",;
      "Custom algorithm development",;
      "Research collaboration tools";
    ],;
    pricing: {;
      starter: 999,;
      professional: 2999,;
      enterprise: 9999,;
      currency: "USD";,
},;
    benefits: [;
      "Exponential computational power",;
      "Advanced optimization capabilities",;
      "Future-proof technology",;
      "Competitive advantage",;
      "Research and development edge";
    ],;
    useCases: [;
      "Financial institutions",;
      "Pharmaceutical companies",;
      "Research organizations",;
      "Government agencies";
    ],;
    technologies: ["Quantum Computing", "Python", "Qiskit", "Cirq", "Quantum Algorithms"],;
    link: "https://ziontechgroup.com/services/quantum-computing-solutions",;
    icon: "⚛️";,
},;

  // Additional Advanced IT Services;
  {;
    id: "edge-computing-solutions",;
    name: "Edge Computing Solutions",;
    category: "it-services",;
    description: "Comprehensive edge computing implementation for reduced latency, improved performance, and enhanced data processing at the network edge.",;
    features: [;
      "Edge infrastructure setup",;
      "Data processing optimization",;
      "Latency reduction strategies",;
      "Edge security implementation",;
      "IoT device management",;
      "Real-time analytics",;
      "Disaster recovery planning",;
      "Performance monitoring";
    ],;
    pricing: {;
      starter: 12000,;
      professional: 35000,;
      enterprise: 100000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce latency by 90%",;
      "Improved application performance",;
      "Better data privacy",;
      "Reduced bandwidth costs",;
      "Enhanced reliability";
    ],;
    useCases: [;
      "IoT applications",;
      "Real-time gaming",;
      "Autonomous vehicles",;
      "Smart cities";
    ],;
    technologies: ["Kubernetes", "Docker", "Edge Computing", "5G", "IoT"],;
    link: "https://ziontechgroup.com/services/edge-computing-solutions",;
    icon: "🌐";,
},;
  {;
    id: "cloud-native-transformation",;
    name: "Cloud-Native Transformation",;
    category: "it-services",;
    description: "Complete cloud-native transformation services including containerization, microservices architecture, and DevOps implementation for modern applications.",;
    features: [;
      "Legacy application modernization",;
      "Container orchestration setup",;
      "Microservices architecture design",;
      "CI/CD pipeline implementation",;
      "Service mesh configuration",;
      "Observability and monitoring",;
      "Security and compliance",;
      "Performance optimization";
    ],;
    pricing: {;
      starter: 25000,;
      professional: 75000,;
      enterprise: 200000,;
      currency: "USD";,
},;
    benefits: [;
      "Faster time to market",;
      "Improved scalability",;
      "Better resource utilization",;
      "Enhanced reliability",;
      "Reduced operational costs";
    ],;
    useCases: [;
      "Enterprise applications",;
      "Legacy system modernization",;
      "High-scale web services",;
      "Digital transformation projects";
    ],;
    technologies: ["Kubernetes", "Docker", "Istio", "Prometheus", "Grafana", "Jenkins"],;
    link: "https://ziontechgroup.com/services/cloud-native-transformation",;
    icon: "☁️";,
},;
  {;
    id: "cyber-security-operations-center",;
    name: "Cybersecurity Operations Center (SOC)",;
    category: "it-services",;
    description: "24/7 cybersecurity operations center with advanced threat detection, incident response, and security monitoring services.",;
    features: [;
      "24/7 security monitoring",;
      "Threat detection and analysis",;
      "Incident response management",;
      "Vulnerability assessment",;
      "Security awareness training",;
      "Compliance monitoring",;
      "Forensic analysis",;
      "Security reporting";
    ],;
    pricing: {;
      starter: 15000,;
      professional: 45000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Proactive threat detection",;
      "Faster incident response",;
      "Reduced security risks",;
      "Compliance assurance",;
      "Peace of mind";
    ],;
    useCases: [;
      "Financial institutions",;
      "Healthcare organizations",;
      "Government agencies",;
      "Enterprise companies";
    ],;
    technologies: ["SIEM", "SOAR", "EDR", "XDR", "Threat Intelligence", "Forensics"],;
    link: "https://ziontechgroup.com/services/cyber-security-operations-center",;
    icon: "🛡️";,
},;
  {;
    id: "data-lake-architecture",;
    name: "Data Lake & Analytics Architecture",;
    category: "it-services",;
    description: "Comprehensive data lake implementation with advanced analytics, machine learning pipelines, and real-time data processing capabilities.",;
    features: [;
      "Data lake architecture design",;
      "ETL/ELT pipeline development",;
      "Real-time data streaming",;
      "Data governance implementation",;
      "Analytics platform setup",;
      "Machine learning pipelines",;
      "Data visualization tools",;
      "Performance optimization";
    ],;
    pricing: {;
      starter: 30000,;
      professional: 90000,;
      enterprise: 250000,;
      currency: "USD";,
},;
    benefits: [;
      "Centralized data management",;
      "Advanced analytics capabilities",;
      "Real-time insights",;
      "Scalable data processing",;
      "Better decision making";
    ],;
    useCases: [;
      "Big data analytics",;
      "Business intelligence",;
      "Machine learning projects",;
      "Data-driven organizations";
    ],;
    technologies: ["Apache Spark", "Hadoop", "Kafka", "Elasticsearch", "Tableau", "Power BI"],;
    link: "https://ziontechgroup.com/services/data-lake-architecture",;
    icon: "🏞️";,
},;
  {;
    id: "iot-platform-development",;
    name: "IoT Platform Development",;
    category: "it-services",;
    description: "Complete IoT platform development including device management, data collection, analytics, and integration with existing systems.",;
    features: [;
      "IoT device management",;
      "Data collection and processing",;
      "Real-time analytics",;
      "Device security implementation",;
      "Integration with existing systems",;
      "Mobile app development",;
      "Dashboard and reporting",;
      "Scalability planning";
    ],;
    pricing: {;
      starter: 20000,;
      professional: 60000,;
      enterprise: 150000,;
      currency: "USD";,
},;
    benefits: [;
      "Connected device management",;
      "Real-time data insights",;
      "Improved operational efficiency",;
      "Predictive maintenance capabilities",;
      "Cost optimization";
    ],;
    useCases: [;
      "Smart manufacturing",;
      "Connected vehicles",;
      "Smart buildings",;
      "Agricultural monitoring";
    ],;
    technologies: ["IoT Platforms", "MQTT", "CoAP", "Edge Computing", "Time Series DB", "React"],;
    link: "https://ziontechgroup.com/services/iot-platform-development",;
    icon: "🌐";,
},;
  {;
    id: "api-first-architecture",;
    name: "API-First Architecture Design",;
    category: "it-services",;
    description: "Comprehensive API-first architecture design and implementation with microservices, API gateway, and developer portal setup.",;
    features: [;
      "API architecture design",;
      "Microservices implementation",;
      "API gateway configuration",;
      "Developer portal development",;
      "API documentation",;
      "Rate limiting and security",;
      "Monitoring and analytics",;
      "Version management";
    ],;
    pricing: {;
      starter: 18000,;
      professional: 55000,;
      enterprise: 140000,;
      currency: "USD";,
},;
    benefits: [;
      "Faster development cycles",;
      "Better system integration",;
      "Improved scalability",;
      "Enhanced developer experience",;
      "Monetization opportunities";
    ],;
    useCases: [;
      "Digital transformation",;
      "Third-party integrations",;
      "Mobile app backends",;
      "Partner ecosystem development";
    ],;
    technologies: ["REST APIs", "GraphQL", "Kong", "AWS API Gateway", "Swagger", "Postman"],;
    link: "https://ziontechgroup.com/services/api-first-architecture",;
    icon: "🔗";,
},;
  {;
    id: "hybrid-cloud-strategy",;
    name: "Hybrid Cloud Strategy & Implementation",;
    category: "it-services",;
    description: "Strategic hybrid cloud implementation combining on-premises infrastructure with public and private cloud services for optimal performance and cost.",;
    features: [;
      "Hybrid cloud architecture design",;
      "Workload migration planning",;
      "Data synchronization setup",;
      "Security and compliance",;
      "Cost optimization",;
      "Performance monitoring",;
      "Disaster recovery planning",;
      "Governance framework";
    ],;
    pricing: {;
      starter: 25000,;
      professional: 75000,;
      enterprise: 200000,;
      currency: "USD";,
},;
    benefits: [;
      "Flexibility and scalability",;
      "Cost optimization",;
      "Data sovereignty compliance",;
      "Reduced vendor lock-in",;
      "Improved performance";
    ],;
    useCases: [;
      "Enterprise organizations",;
      "Regulated industries",;
      "Global businesses",;
      "Digital transformation projects";
    ],;
    technologies: ["AWS", "Azure", "Google Cloud", "VMware", "Kubernetes", "Terraform"],;
    link: "https://ziontechgroup.com/services/hybrid-cloud-strategy",;
    icon: "☁️";,
},;
  {;
    id: "digital-workplace-solutions",;
    name: "Digital Workplace Solutions",;
    category: "it-services",;
    description: "Complete digital workplace transformation including collaboration tools, productivity platforms, and employee experience optimization.",;
    features: [;
      "Collaboration platform setup",;
      "Productivity tool integration",;
      "Employee experience optimization",;
      "Remote work enablement",;
      "Security and compliance",;
      "Training and adoption",;
      "Performance monitoring",;
      "Continuous improvement";
    ],;
    pricing: {;
      starter: 12000,;
      professional: 35000,;
      enterprise: 90000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved productivity",;
      "Better employee experience",;
      "Enhanced collaboration",;
      "Reduced operational costs",;
      "Increased flexibility";
    ],;
    useCases: [;
      "Remote work enablement",;
      "Digital transformation",;
      "Employee engagement",;
      "Productivity optimization";
    ],;
    technologies: ["Microsoft 365", "Google Workspace", "Slack", "Teams", "SharePoint", "Zoom"],;
    link: "https://ziontechgroup.com/services/digital-workplace-solutions",;
    icon: "💼";,
},;
  {;
    id: "compliance-automation",;
    name: "Compliance Automation & Governance",;
    category: "it-services",;
    description: "Automated compliance management system for regulatory requirements including GDPR, HIPAA, SOX, and industry-specific standards.",;
    features: [;
      "Compliance framework implementation",;
      "Automated policy enforcement",;
      "Audit trail management",;
      "Risk assessment automation",;
      "Documentation management",;
      "Training and awareness",;
      "Incident management",;
      "Reporting and analytics";
    ],;
    pricing: {;
      starter: 15000,;
      professional: 45000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduced compliance costs",;
      "Automated policy enforcement",;
      "Better risk management",;
      "Audit readiness",;
      "Regulatory compliance";
    ],;
    useCases: [;
      "Financial services",;
      "Healthcare organizations",;
      "Government agencies",;
      "Regulated industries";
    ],;
    technologies: ["GRC Platforms", "Automation Tools", "Document Management", "Risk Assessment", "Audit Tools"],;
    link: "https://ziontechgroup.com/services/compliance-automation",;
    icon: "📋";,
},;
  {;
    id: "performance-engineering",;
    name: "Performance Engineering & Optimization",;
    category: "it-services",;
    description: "Comprehensive performance engineering services including load testing, optimization, and scalability planning for high-performance applications.",;
    features: [;
      "Performance testing and analysis",;
      "Load testing and stress testing",;
      "Code optimization",;
      "Database performance tuning",;
      "Infrastructure optimization",;
      "Caching strategies",;
      "CDN implementation",;
      "Monitoring and alerting";
    ],;
    pricing: {;
      starter: 10000,;
      professional: 30000,;
      enterprise: 80000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved application performance",;
      "Better user experience",;
      "Reduced infrastructure costs",;
      "Higher scalability",;
      "Faster response times";
    ],;
    useCases: [;
      "High-traffic websites",;
      "E-commerce platforms",;
      "Mobile applications",;
      "Enterprise systems";
    ],;
    technologies: ["Load Testing", "APM Tools", "CDN", "Caching", "Database Optimization", "Monitoring"],;
    link: "https://ziontechgroup.com/services/performance-engineering",;
    icon: "⚡";,
},;
  {;
    id: "blockchain-infrastructure",;
    name: "Blockchain Infrastructure & Development",;
    category: "it-services",;
    description: "Complete blockchain infrastructure setup and smart contract development for secure, decentralized applications and business processes.",;
    features: [;
      "Blockchain network setup",;
      "Smart contract development",;
      "DeFi protocol integration",;
      "NFT marketplace development",;
      "Cryptocurrency wallet integration",;
      "Security auditing",;
      "Performance optimization",;
      "Compliance consulting";
    ],;
    pricing: {;
      starter: 15000,;
      professional: 45000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced security and transparency",;
      "Reduced transaction costs",;
      "Improved traceability",;
      "Decentralized operations",;
      "Future-proof technology";
    ],;
    useCases: [;
      "Financial services",;
      "Supply chain management",;
      "Digital identity",;
      "Asset tokenization";
    ],;
    technologies: ["Ethereum", "Solidity", "Web3", "IPFS", "Blockchain"],;
    link: "https://ziontechgroup.com/services/blockchain-infrastructure",;
    icon: "⛓️";,
},;
  {;
    id: "zero-trust-security",;
    name: "Zero Trust Security Architecture",;
    category: "it-services",;
    description: "Comprehensive zero trust security implementation with continuous verification, micro-segmentation, and advanced threat protection.",;
    features: [;
      "Identity verification systems",;
      "Micro-segmentation implementation",;
      "Continuous monitoring",;
      "Threat detection and response",;
      "Access control policies",;
      "Security analytics",;
      "Compliance automation",;
      "Incident response planning";
    ],;
    pricing: {;
      starter: 20000,;
      professional: 60000,;
      enterprise: 150000,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced security posture",;
      "Reduced attack surface",;
      "Better compliance adherence",;
      "Improved visibility",;
      "Proactive threat protection";
    ],;
    useCases: [;
      "Enterprise organizations",;
      "Healthcare systems",;
      "Financial institutions",;
      "Government agencies";
    ],;
    technologies: ["Zero Trust", "SIEM", "SOAR", "Identity Management", "Network Security"],;
    link: "https://ziontechgroup.com/services/zero-trust-security",;
    icon: "🔒";,
},;
  {;
    id: "5g-network-implementation",;
    name: "5G Network Implementation & Optimization",;
    category: "it-services",;
    description: "Complete 5G network deployment and optimization services for ultra-fast connectivity, low latency, and massive IoT device support.",;
    features: [;
      "5G network planning and design",;
      "Infrastructure deployment",;
      "Network optimization",;
      "IoT device integration",;
      "Edge computing setup",;
      "Performance monitoring",;
      "Security implementation",;
      "Compliance management";
    ],;
    pricing: {;
      starter: 50000,;
      professional: 150000,;
      enterprise: 500000,;
      currency: "USD";,
},;
    benefits: [;
      "Ultra-fast connectivity",;
      "Low latency applications",;
      "Massive device support",;
      "Enhanced mobile experiences",;
      "Future-ready infrastructure";
    ],;
    useCases: [;
      "Smart cities",;
      "Industrial IoT",;
      "Autonomous vehicles",;
      "Telecommunications";
    ],;
    technologies: ["5G", "Network Infrastructure", "IoT", "Edge Computing", "Telecommunications"],;
    link: "https://ziontechgroup.com/services/5g-network-implementation",;
    icon: "📡";,
},;
  {;
    id: "hyperautomation-platform",;
    name: "Hyperautomation Platform",;
    category: "it-services",;
    description: "Comprehensive hyperautomation solution combining RPA, AI, and process mining to automate complex business processes end-to-end.",;
    features: [;
      "Process discovery and mining",;
      "RPA implementation",;
      "AI-powered decision making",;
      "Workflow automation",;
      "Integration orchestration",;
      "Performance monitoring",;
      "Continuous optimization",;
      "Change management";
    ],;
    pricing: {;
      starter: 25000,;
      professional: 75000,;
      enterprise: 200000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce operational costs by 60%",;
      "Improve process efficiency",;
      "Eliminate manual errors",;
      "Faster process execution",;
      "Better resource utilization";
    ],;
    useCases: [;
      "Financial services",;
      "Healthcare organizations",;
      "Manufacturing companies",;
      "Government agencies";
    ],;
    technologies: ["RPA", "AI/ML", "Process Mining", "Workflow Automation", "Integration"],;
    link: "https://ziontechgroup.com/services/hyperautomation-platform",;
    icon: "🤖";,
},;

  // Additional Advanced AI Services;
  {;
    id: "ai-drug-discovery",;
    name: "AI Drug Discovery Platform",;
    category: "ai-services",;
    description: "Revolutionary AI-powered drug discovery platform using machine learning to accelerate pharmaceutical research and development.",;
    features: [;
      "Molecular design and optimization",;
      "Drug-target interaction prediction",;
      "Toxicity assessment",;
      "Clinical trial optimization",;
      "Biomarker discovery",;
      "Drug repurposing analysis",;
      "Patent analysis",;
      "Regulatory compliance support";
    ],;
    pricing: {;
      starter: 100000,;
      professional: 300000,;
      enterprise: 1000000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce drug development time by 50%",;
      "Lower R&D costs",;
      "Higher success rates",;
      "Faster time to market",;
      "Improved patient outcomes";
    ],;
    useCases: [;
      "Pharmaceutical companies",;
      "Biotech startups",;
      "Research institutions",;
      "Government health agencies";
    ],;
    technologies: ["Deep Learning", "Molecular AI", "Bioinformatics", "Python", "TensorFlow"],;
    link: "https://ziontechgroup.com/services/ai-drug-discovery",;
    icon: "💊";,
},;
  {;
    id: "ai-autonomous-systems",;
    name: "AI Autonomous Systems Development",;
    category: "ai-services",;
    description: "Advanced AI autonomous systems for self-driving vehicles, drones, and robotics with real-time decision making and safety protocols.",;
    features: [;
      "Autonomous navigation systems",;
      "Real-time decision making",;
      "Computer vision integration",;
      "Sensor fusion algorithms",;
      "Safety and fail-safe systems",;
      "Path planning optimization",;
      "Obstacle avoidance",;
      "Performance monitoring";
    ],;
    pricing: {;
      starter: 150000,;
      professional: 450000,;
      enterprise: 1500000,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced safety and reliability",;
      "Improved operational efficiency",;
      "Reduced human intervention",;
      "24/7 autonomous operation",;
      "Cost-effective automation";
    ],;
    useCases: [;
      "Autonomous vehicles",;
      "Delivery drones",;
      "Industrial robotics",;
      "Smart city infrastructure";
    ],;
    technologies: ["Computer Vision", "Reinforcement Learning", "ROS", "Lidar", "Sensor Fusion", "Python"],;
    link: "https://ziontechgroup.com/services/ai-autonomous-systems",;
    icon: "🚗";,
},;
  {;
    id: "ai-personalized-medicine",;
    name: "AI Personalized Medicine Platform",;
    category: "ai-services",;
    description: "Revolutionary AI platform for personalized medicine that analyzes genetic data, medical history, and lifestyle factors to provide tailored treatment recommendations.",;
    features: [;
      "Genomic data analysis",;
      "Medical history integration",;
      "Lifestyle factor assessment",;
      "Treatment recommendation engine",;
      "Drug interaction analysis",;
      "Side effect prediction",;
      "Clinical trial matching",;
      "Patient monitoring";
    ],;
    pricing: {;
      starter: 200000,;
      professional: 600000,;
      enterprise: 2000000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved treatment outcomes",;
      "Reduced adverse effects",;
      "Personalized care plans",;
      "Better patient engagement",;
      "Cost-effective healthcare";
    ],;
    useCases: [;
      "Healthcare providers",;
      "Pharmaceutical companies",;
      "Research institutions",;
      "Personalized medicine clinics";
    ],;
    technologies: ["Genomics AI", "Machine Learning", "Medical AI", "Python", "Bioinformatics"],;
    link: "https://ziontechgroup.com/services/ai-personalized-medicine",;
    icon: "🧬";,
},;
  {;
    id: "ai-cyber-threat-intelligence",;
    name: "AI Cyber Threat Intelligence",;
    category: "ai-services",;
    description: "Advanced AI-powered cyber threat intelligence platform that predicts, detects, and responds to sophisticated cyber attacks in real-time.",;
    features: [;
      "Threat prediction and analysis",;
      "Real-time attack detection",;
      "Behavioral anomaly detection",;
      "Automated incident response",;
      "Threat hunting capabilities",;
      "Vulnerability assessment",;
      "Security orchestration",;
      "Intelligence sharing";
    ],;
    pricing: {;
      starter: 50000,;
      professional: 150000,;
      enterprise: 500000,;
      currency: "USD";,
},;
    benefits: [;
      "Proactive threat prevention",;
      "Faster incident response",;
      "Reduced security risks",;
      "Automated threat hunting",;
      "Enhanced security posture";
    ],;
    useCases: [;
      "Cybersecurity firms",;
      "Government agencies",;
      "Financial institutions",;
      "Enterprise security teams";
    ],;
    technologies: ["Threat Intelligence", "Machine Learning", "SIEM", "SOAR", "Python", "Security AI"],;
    link: "https://ziontechgroup.com/services/ai-cyber-threat-intelligence",;
    icon: "🛡️";,
},;
  {;
    id: "ai-energy-optimization",;
    name: "AI Energy Optimization Platform",;
    category: "ai-services",;
    description: "Intelligent energy optimization platform that uses AI to optimize energy consumption, predict demand, and manage renewable energy sources.",;
    features: [;
      "Energy consumption optimization",;
      "Demand forecasting",;
      "Renewable energy management",;
      "Smart grid integration",;
      "Carbon footprint tracking",;
      "Cost optimization",;
      "Real-time monitoring",;
      "Predictive maintenance";
    ],;
    pricing: {;
      starter: 75000,;
      professional: 225000,;
      enterprise: 750000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce energy costs by 30%",;
      "Improve energy efficiency",;
      "Better renewable integration",;
      "Lower carbon emissions",;
      "Optimized energy management";
    ],;
    useCases: [;
      "Energy companies",;
      "Smart cities",;
      "Industrial facilities",;
      "Commercial buildings";
    ],;
    technologies: ["Energy AI", "IoT", "Machine Learning", "Smart Grid", "Python", "Analytics"],;
    link: "https://ziontechgroup.com/services/ai-energy-optimization",;
    icon: "⚡";,
},;
  {;
    id: "ai-agricultural-intelligence",;
    name: "AI Agricultural Intelligence Platform",;
    category: "ai-services",;
    description: "Advanced AI platform for precision agriculture that optimizes crop yields, monitors soil health, and predicts weather patterns for sustainable farming.",;
    features: [;
      "Crop yield optimization",;
      "Soil health monitoring",;
      "Weather prediction",;
      "Pest and disease detection",;
      "Irrigation optimization",;
      "Harvest timing prediction",;
      "Market price forecasting",;
      "Sustainability tracking";
    ],;
    pricing: {;
      starter: 40000,;
      professional: 120000,;
      enterprise: 400000,;
      currency: "USD";,
},;
    benefits: [;
      "Increase crop yields by 25%",;
      "Reduce water usage",;
      "Minimize pesticide use",;
      "Improve sustainability",;
      "Better resource management";
    ],;
    useCases: [;
      "Large-scale farming",;
      "Agricultural cooperatives",;
      "Food production companies",;
      "Government agriculture agencies";
    ],;
    technologies: ["Agricultural AI", "IoT Sensors", "Satellite Imagery", "Machine Learning", "Python"],;
    link: "https://ziontechgroup.com/services/ai-agricultural-intelligence",;
    icon: "🌾";,
},;
  {;
    id: "ai-mental-health-support",;
    name: "AI Mental Health Support Platform",;
    category: "ai-services",;
    description: "Compassionate AI platform for mental health support that provides personalized therapy, mood tracking, and crisis intervention using advanced NLP and behavioral analysis.",;
    features: [;
      "Personalized therapy sessions",;
      "Mood and behavior tracking",;
      "Crisis intervention system",;
      "Medication adherence monitoring",;
      "Therapist matching",;
      "Progress analytics",;
      "Privacy and security",;
      "24/7 support availability";
    ],;
    pricing: {;
      starter: 60000,;
      professional: 180000,;
      enterprise: 600000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved mental health outcomes",;
      "Accessible mental healthcare",;
      "Early intervention capabilities",;
      "Reduced healthcare costs",;
      "Better patient engagement";
    ],;
    useCases: [;
      "Healthcare providers",;
      "Mental health clinics",;
      "Corporate wellness programs",;
      "Educational institutions";
    ],;
    technologies: ["NLP", "Behavioral AI", "Mental Health AI", "Python", "Privacy-Preserving ML"],;
    link: "https://ziontechgroup.com/services/ai-mental-health-support",;
    icon: "🧠";,
},;
  {;
    id: "ai-educational-personalization",;
    name: "AI Educational Personalization Platform",;
    category: "ai-services",;
    description: "Intelligent educational platform that personalizes learning experiences, adapts to individual learning styles, and provides real-time feedback for optimal educational outcomes.",;
    features: [;
      "Personalized learning paths",;
      "Adaptive content delivery",;
      "Learning style analysis",;
      "Real-time progress tracking",;
      "Intelligent tutoring system",;
      "Assessment and feedback",;
      "Parent and teacher dashboards",;
      "Accessibility features";
    ],;
    pricing: {;
      starter: 30000,;
      professional: 90000,;
      enterprise: 300000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved learning outcomes",;
      "Personalized education",;
      "Better student engagement",;
      "Reduced learning gaps",;
      "Scalable education delivery";
    ],;
    useCases: [;
      "Educational institutions",;
      "Online learning platforms",;
      "Corporate training programs",;
      "Government education agencies";
    ],;
    technologies: ["Educational AI", "Adaptive Learning", "NLP", "Machine Learning", "Python"],;
    link: "https://ziontechgroup.com/services/ai-educational-personalization",;
    icon: "🎓";,
},;
  {;
    id: "ai-creative-content-generation",;
    name: "AI Creative Content Generation Studio",;
    category: "ai-services",;
    description: "Advanced AI creative studio that generates original artwork, music, literature, and multimedia content using cutting-edge generative AI models.",;
    features: [;
      "AI-generated artwork and illustrations",;
      "Original music composition",;
      "Creative writing and storytelling",;
      "Video and animation creation",;
      "Brand asset generation",;
      "Style transfer and adaptation",;
      "Collaborative creative tools",;
      "Copyright and licensing management";
    ],;
    pricing: {;
      starter: 25000,;
      professional: 75000,;
      enterprise: 250000,;
      currency: "USD";,
},;
    benefits: [;
      "Unlimited creative possibilities",;
      "Faster content production",;
      "Cost-effective creative solutions",;
      "Consistent brand assets",;
      "Scalable creative workflows";
    ],;
    useCases: [;
      "Creative agencies",;
      "Marketing departments",;
      "Content creators",;
      "Entertainment industry";
    ],;
    technologies: ["Generative AI", "Computer Vision", "NLP", "Audio Processing", "Python", "Creative AI"],;
    link: "https://ziontechgroup.com/services/ai-creative-content-generation",;
    icon: "🎨";,
},;
  {;
    id: "ai-legal-document-analysis",;
    name: "AI Legal Document Analysis Platform",;
    category: "ai-services",;
    description: "Intelligent legal document analysis platform that reviews contracts, identifies risks, extracts key information, and provides legal insights using advanced NLP and legal AI.",;
    features: [;
      "Contract analysis and review",;
      "Risk identification and assessment",;
      "Legal clause extraction",;
      "Compliance checking",;
      "Document comparison",;
      "Legal research assistance",;
      "Case law analysis",;
      "Due diligence automation";
    ],;
    pricing: {;
      starter: 80000,;
      professional: 240000,;
      enterprise: 800000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce document review time by 80%",;
      "Improve accuracy and consistency",;
      "Identify hidden risks",;
      "Lower legal costs",;
      "Better compliance management";
    ],;
    useCases: [;
      "Law firms",;
      "Corporate legal departments",;
      "Compliance teams",;
      "Legal technology companies";
    ],;
    technologies: ["Legal AI", "NLP", "Document Analysis", "Machine Learning", "Python", "Legal Tech"],;
    link: "https://ziontechgroup.com/services/ai-legal-document-analysis",;
    icon: "⚖️";,
},;
  {;
    id: "ai-climate-modeling",;
    name: "AI Climate Modeling & Prediction",;
    category: "ai-services",;
    description: "Advanced AI climate modeling system for accurate weather prediction, climate change analysis, and environmental impact assessment.",;
    features: [;
      "Weather pattern prediction",;
      "Climate change modeling",;
      "Environmental impact analysis",;
      "Natural disaster forecasting",;
      "Carbon footprint tracking",;
      "Renewable energy optimization",;
      "Agricultural yield prediction",;
      "Risk assessment tools";
    ],;
    pricing: {;
      starter: 50000,;
      professional: 150000,;
      enterprise: 500000,;
      currency: "USD";,
},;
    benefits: [;
      "Accurate climate predictions",;
      "Better disaster preparedness",;
      "Environmental sustainability",;
      "Cost-effective solutions",;
      "Data-driven decisions";
    ],;
    useCases: [;
      "Government agencies",;
      "Environmental organizations",;
      "Agricultural companies",;
      "Energy sector";
    ],;
    technologies: ["Climate AI", "Machine Learning", "Satellite Data", "Python", "TensorFlow"],;
    link: "https://ziontechgroup.com/services/ai-climate-modeling",;
    icon: "🌍";,
},;
  {;
    id: "ai-space-exploration",;
    name: "AI Space Exploration Solutions",;
    category: "ai-services",;
    description: "Cutting-edge AI solutions for space exploration, satellite management, and astronomical research with advanced data analysis capabilities.",;
    features: [;
      "Satellite orbit optimization",;
      "Space debris tracking",;
      "Astronomical data analysis",;
      "Mission planning automation",;
      "Space weather prediction",;
      "Planetary exploration support",;
      "Communication optimization",;
      "Resource management";
    ],;
    pricing: {;
      starter: 200000,;
      professional: 600000,;
      enterprise: 2000000,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced mission success rates",;
      "Optimized resource utilization",;
      "Improved safety protocols",;
      "Advanced data insights",;
      "Cost-effective operations";
    ],;
    useCases: [;
      "Space agencies",;
      "Satellite companies",;
      "Research institutions",;
      "Defense organizations";
    ],;
    technologies: ["Space AI", "Orbital Mechanics", "Machine Learning", "Python", "Satellite Data"],;
    link: "https://ziontechgroup.com/services/ai-space-exploration",;
    icon: "🚀";,
},;
  {;
    id: "ai-neuroscience-research",;
    name: "AI Neuroscience Research Platform",;
    category: "ai-services",;
    description: "Advanced AI platform for neuroscience research, brain-computer interfaces, and neurological disorder analysis using cutting-edge machine learning.",;
    features: [;
      "Brain signal analysis",;
      "Neural network modeling",;
      "Brain-computer interface development",;
      "Neurological disorder detection",;
      "Cognitive assessment tools",;
      "Treatment optimization",;
      "Research data management",;
      "Clinical trial support";
    ],;
    pricing: {;
      starter: 75000,;
      professional: 225000,;
      enterprise: 750000,;
      currency: "USD";,
},;
    benefits: [;
      "Accelerated research progress",;
      "Better treatment outcomes",;
      "Improved patient care",;
      "Advanced diagnostic capabilities",;
      "Research collaboration tools";
    ],;
    useCases: [;
      "Medical research institutions",;
      "Hospitals and clinics",;
      "Pharmaceutical companies",;
      "Neuroscience laboratories";
    ],;
    technologies: ["Neural Networks", "Brain Imaging", "Machine Learning", "Python", "Medical AI"],;
    link: "https://ziontechgroup.com/services/ai-neuroscience-research",;
    icon: "🧠";,
},;
  {;
    id: "ai-robotics-automation",;
    name: "AI Robotics & Automation",;
    category: "ai-services",;
    description: "Intelligent robotics solutions with advanced AI for autonomous operations, human-robot collaboration, and industrial automation.",;
    features: [;
      "Autonomous robot control",;
      "Human-robot interaction",;
      "Computer vision integration",;
      "Predictive maintenance",;
      "Quality control automation",;
      "Safety monitoring",;
      "Performance optimization",;
      "Custom robot programming";
    ],;
    pricing: {;
      starter: 100000,;
      professional: 300000,;
      enterprise: 1000000,;
      currency: "USD";,
},;
    benefits: [;
      "Increased productivity",;
      "Reduced operational costs",;
      "Improved safety",;
      "24/7 operations",;
      "Consistent quality";
    ],;
    useCases: [;
      "Manufacturing companies",;
      "Warehouse operations",;
      "Healthcare facilities",;
      "Agricultural operations";
    ],;
    technologies: ["Robotics", "Computer Vision", "Machine Learning", "ROS", "AI Control Systems"],;
    link: "https://ziontechgroup.com/services/ai-robotics-automation",;
    icon: "🤖";,
},;
  {;
    id: "ai-financial-trading",;
    name: "AI Financial Trading Platform",;
    category: "ai-services",;
    description: "Advanced AI-powered financial trading platform with algorithmic trading, risk management, and market prediction capabilities.",;
    features: [;
      "Algorithmic trading strategies",;
      "Real-time market analysis",;
      "Risk assessment and management",;
      "Portfolio optimization",;
      "Sentiment analysis",;
      "High-frequency trading",;
      "Backtesting capabilities",;
      "Regulatory compliance";
    ],;
    pricing: {;
      starter: 50000,;
      professional: 150000,;
      enterprise: 500000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved trading performance",;
      "Reduced risk exposure",;
      "24/7 market monitoring",;
      "Data-driven decisions",;
      "Automated execution";
    ],;
    useCases: [;
      "Investment firms",;
      "Hedge funds",;
      "Banks and financial institutions",;
      "Individual traders";
    ],;
    technologies: ["Financial AI", "Machine Learning", "Quantitative Analysis", "Python", "Trading APIs"],;
    link: "https://ziontechgroup.com/services/ai-financial-trading",;
    icon: "📈";,
},;

  // Additional Innovative Micro SaaS Services;
  {;
    id: "ai-video-editor",;
    name: "AI Video Editor Pro",;
    category: "micro-saas",;
    description: "Revolutionary AI-powered video editing platform that automatically creates professional videos from raw footage with intelligent scene detection and editing.",;
    features: [;
      "AI-powered auto-editing",;
      "Smart scene detection",;
      "Automatic color correction",;
      "Background music matching",;
      "Text-to-video generation",;
      "Multi-format export",;
      "Collaborative editing",;
      "Cloud storage integration";
    ],;
    pricing: {;
      starter: 29,;
      professional: 79,;
      enterprise: 199,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce editing time by 80%",;
      "Professional-quality results",;
      "No technical skills required",;
      "Consistent brand styling",;
      "Faster content production";
    ],;
    useCases: [;
      "Content creators",;
      "Marketing agencies",;
      "Small businesses",;
      "Social media managers";
    ],;
    technologies: ["AI Video Processing", "React", "Node.js", "FFmpeg", "Cloud Storage"],;
    link: "https://ziontechgroup.com/services/ai-video-editor",;
    icon: "🎬";,
},;
  {;
    id: "smart-contract-auditor",;
    name: "Smart Contract Security Auditor",;
    category: "micro-saas",;
    description: "AI-powered smart contract auditing platform that automatically detects vulnerabilities, security issues, and compliance problems in blockchain code.",;
    features: [;
      "Automated vulnerability scanning",;
      "Security best practices checking",;
      "Gas optimization analysis",;
      "Compliance verification",;
      "Code quality assessment",;
      "Detailed audit reports",;
      "Integration with development tools",;
      "Continuous monitoring";
    ],;
    pricing: {;
      starter: 199,;
      professional: 499,;
      enterprise: 1299,;
      currency: "USD";,
},;
    benefits: [;
      "Prevent costly security breaches",;
      "Reduce audit time by 90%",;
      "Comprehensive security coverage",;
      "Compliance assurance",;
      "Cost-effective auditing";
    ],;
    useCases: [;
      "Blockchain developers",;
      "DeFi projects",;
      "NFT platforms",;
      "Crypto startups";
    ],;
    technologies: ["AI Code Analysis", "Solidity", "React", "Node.js", "Blockchain APIs"],;
    link: "https://ziontechgroup.com/services/smart-contract-auditor",;
    icon: "🔍";,
},;
  {;
    id: "ai-code-reviewer",;
    name: "AI Code Review Assistant",;
    category: "micro-saas",;
    description: "Intelligent code review platform that automatically analyzes code quality, suggests improvements, and ensures best practices across development teams.",;
    features: [;
      "Automated code analysis",;
      "Security vulnerability detection",;
      "Performance optimization suggestions",;
      "Code style enforcement",;
      "Documentation generation",;
      "Team collaboration tools",;
      "Integration with Git platforms",;
      "Custom rule configuration";
    ],;
    pricing: {;
      starter: 49,;
      professional: 129,;
      enterprise: 349,;
      currency: "USD";,
},;
    benefits: [;
      "Improve code quality by 40%",;
      "Reduce bugs and security issues",;
      "Faster development cycles",;
      "Consistent coding standards",;
      "Knowledge sharing across teams";
    ],;
    useCases: [;
      "Software development teams",;
      "Tech startups",;
      "Enterprise development",;
      "Open source projects";
    ],;
    technologies: ["AI Code Analysis", "React", "Node.js", "Git APIs", "Static Analysis"],;
    link: "https://ziontechgroup.com/services/ai-code-reviewer",;
    icon: "👨‍💻";,
},;
  {;
    id: "ai-translation-platform",;
    name: "AI Translation Platform",;
    category: "micro-saas",;
    description: "Advanced AI-powered translation platform supporting 100+ languages with context-aware translations, industry-specific terminology, and real-time collaboration.",;
    features: [;
      "100+ language support",;
      "Context-aware translations",;
      "Industry-specific terminology",;
      "Real-time collaboration",;
      "Translation memory",;
      "Quality assurance tools",;
      "API integration",;
      "Bulk translation processing";
    ],;
    pricing: {;
      starter: 39,;
      professional: 99,;
      enterprise: 249,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce translation costs by 60%",;
      "Faster time to market",;
      "Consistent terminology",;
      "High-quality translations",;
      "Scalable translation workflow";
    ],;
    useCases: [;
      "Global businesses",;
      "E-commerce platforms",;
      "Content creators",;
      "Software companies";
    ],;
    technologies: ["AI Translation", "React", "Node.js", "Translation APIs", "NLP"],;
    link: "https://ziontechgroup.com/services/ai-translation-platform",;
    icon: "🌐";,
},;
  {;
    id: "ai-customer-insights",;
    name: "AI Customer Insights Platform",;
    category: "micro-saas",;
    description: "Intelligent customer analytics platform that analyzes customer behavior, predicts churn, and provides actionable insights for better business decisions.",;
    features: [;
      "Customer behavior analysis",;
      "Churn prediction models",;
      "Sentiment analysis",;
      "Customer segmentation",;
      "Lifetime value prediction",;
      "Personalization recommendations",;
      "Real-time dashboards",;
      "Integration with CRM systems";
    ],;
    pricing: {;
      starter: 79,;
      professional: 199,;
      enterprise: 499,;
      currency: "USD";,
},;
    benefits: [;
      "Increase customer retention by 30%",;
      "Better understanding of customers",;
      "Data-driven marketing decisions",;
      "Improved customer experience",;
      "Higher customer lifetime value";
    ],;
    useCases: [;
      "E-commerce businesses",;
      "SaaS companies",;
      "Retail chains",;
      "Subscription services";
    ],;
    technologies: ["AI Analytics", "Machine Learning", "React", "Node.js", "Analytics APIs"],;
    link: "https://ziontechgroup.com/services/ai-customer-insights",;
    icon: "👥";,
},;
  {;
    id: "ai-workflow-automation",;
    name: "AI Workflow Automation Suite",;
    category: "micro-saas",;
    description: "Intelligent workflow automation platform that learns from your processes and automatically optimizes business workflows for maximum efficiency.",;
    features: [;
      "Process mining and analysis",;
      "Intelligent workflow design",;
      "Automated task routing",;
      "Exception handling",;
      "Performance optimization",;
      "Integration with 500+ apps",;
      "Custom automation rules",;
      "Analytics and reporting";
    ],;
    pricing: {;
      starter: 45,;
      professional: 119,;
      enterprise: 299,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce manual work by 70%",;
      "Improve process efficiency",;
      "Eliminate human errors",;
      "Faster task completion",;
      "Better resource allocation";
    ],;
    useCases: [;
      "Business process automation",;
      "HR workflows",;
      "Finance operations",;
      "Customer service";
    ],;
    technologies: ["AI Automation", "Workflow Engine", "React", "Node.js", "Integration APIs"],;
    link: "https://ziontechgroup.com/services/ai-workflow-automation",;
    icon: "⚙️";,
},;
  {;
    id: "ai-data-privacy",;
    name: "AI Data Privacy Compliance",;
    category: "micro-saas",;
    description: "Comprehensive data privacy compliance platform that automatically ensures GDPR, CCPA, and other privacy regulations compliance with AI-powered monitoring.",;
    features: [;
      "Automated compliance checking",;
      "Data mapping and classification",;
      "Privacy impact assessments",;
      "Consent management",;
      "Data subject rights handling",;
      "Breach detection and reporting",;
      "Compliance reporting",;
      "Integration with existing systems";
    ],;
    pricing: {;
      starter: 99,;
      professional: 249,;
      enterprise: 599,;
      currency: "USD";,
},;
    benefits: [;
      "Ensure regulatory compliance",;
      "Reduce compliance costs by 50%",;
      "Automated privacy management",;
      "Risk mitigation",;
      "Audit-ready documentation";
    ],;
    useCases: [;
      "Enterprise organizations",;
      "Healthcare providers",;
      "Financial institutions",;
      "E-commerce platforms";
    ],;
    technologies: ["AI Compliance", "Privacy Analytics", "React", "Node.js", "Compliance APIs"],;
    link: "https://ziontechgroup.com/services/ai-data-privacy",;
    icon: "🔒";,
},;
  {;
    id: "ai-performance-monitoring",;
    name: "AI Performance Monitoring",;
    category: "micro-saas",;
    description: "Advanced AI-powered application performance monitoring that predicts issues before they occur and provides intelligent optimization recommendations.",;
    features: [;
      "Predictive performance analysis",;
      "Anomaly detection",;
      "Root cause analysis",;
      "Performance optimization suggestions",;
      "Real-time alerting",;
      "Custom dashboards",;
      "Integration with monitoring tools",;
      "Automated scaling recommendations";
    ],;
    pricing: {;
      starter: 35,;
      professional: 89,;
      enterprise: 229,;
      currency: "USD";,
},;
    benefits: [;
      "Prevent performance issues",;
      "Reduce downtime by 80%",;
      "Optimize resource usage",;
      "Better user experience",;
      "Cost-effective monitoring";
    ],;
    useCases: [;
      "Web applications",;
      "Mobile apps",;
      "API services",;
      "Cloud infrastructure";
    ],;
    technologies: ["AI Monitoring", "Performance Analytics", "React", "Node.js", "Monitoring APIs"],;
    link: "https://ziontechgroup.com/services/ai-performance-monitoring",;
    icon: "📊";,
},;
  {;
    id: "ai-content-moderation-advanced",;
    name: "AI Content Moderation Pro",;
    category: "micro-saas",;
    description: "Advanced AI content moderation platform with real-time detection of inappropriate content, hate speech, and spam across text, images, and videos.",;
    features: [;
      "Real-time content analysis",;
      "Multi-modal content detection",;
      "Custom moderation rules",;
      "Human review integration",;
      "Bulk content processing",;
      "API integration",;
      "Analytics and reporting",;
      "Compliance monitoring";
    ],;
    pricing: {;
      starter: 25,;
      professional: 65,;
      enterprise: 175,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce moderation costs by 70%",;
      "24/7 content monitoring",;
      "Consistent policy enforcement",;
      "Improved user safety",;
      "Scalable moderation solution";
    ],;
    useCases: [;
      "Social media platforms",;
      "Online communities",;
      "E-commerce marketplaces",;
      "Educational platforms";
    ],;
    technologies: ["AI Content Analysis", "Computer Vision", "NLP", "React", "Node.js"],;
    link: "https://ziontechgroup.com/services/ai-content-moderation-pro",;
    icon: "🛡️";,
},;
  {;
    id: "ai-financial-forecasting",;
    name: "AI Financial Forecasting",;
    category: "micro-saas",;
    description: "Intelligent financial forecasting platform that uses AI to predict cash flow, revenue, and financial performance with high accuracy.",;
    features: [;
      "Cash flow prediction",;
      "Revenue forecasting",;
      "Expense optimization",;
      "Risk assessment",;
      "Scenario planning",;
      "Financial modeling",;
      "Integration with accounting software",;
      "Real-time financial insights";
    ],;
    pricing: {;
      starter: 59,;
      professional: 149,;
      enterprise: 399,;
      currency: "USD";,
},;
    benefits: [;
      "Improve financial planning accuracy",;
      "Better cash flow management",;
      "Reduced financial risks",;
      "Data-driven financial decisions",;
      "Optimized resource allocation";
    ],;
    useCases: [;
      "Small businesses",;
      "Startups",;
      "Financial advisors",;
      "Accounting firms";
    ],;
    technologies: ["AI Forecasting", "Financial Analytics", "React", "Node.js", "Financial APIs"],;
    link: "https://ziontechgroup.com/services/ai-financial-forecasting",;
    icon: "💰";,
},;

  // Additional Advanced IT Services;
  {;
    id: "cloud-native-architecture",;
    name: "Cloud-Native Architecture Design",;
    category: "it-services",;
    description: "Complete cloud-native architecture design and implementation using microservices, containers, and serverless technologies for maximum scalability and efficiency.",;
    features: [;
      "Microservices architecture design",;
      "Container orchestration setup",;
      "Serverless function implementation",;
      "API gateway configuration",;
      "Service mesh implementation",;
      "Observability and monitoring",;
      "Security and compliance",;
      "Cost optimization strategies";
    ],;
    pricing: {;
      starter: 25000,;
      professional: 75000,;
      enterprise: 200000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved scalability and performance",;
      "Reduced infrastructure costs",;
      "Faster time to market",;
      "Better resource utilization",;
      "Enhanced reliability and availability";
    ],;
    useCases: [;
      "Digital transformation projects",;
      "Legacy system modernization",;
      "High-scale applications",;
      "Startup scaling";
    ],;
    technologies: ["Kubernetes", "Docker", "AWS", "Azure", "GCP", "Istio", "Prometheus"],;
    link: "https://ziontechgroup.com/services/cloud-native-architecture",;
    icon: "☁️";,
},;
  {;
    id: "cybersecurity-operations-center",;
    name: "Cybersecurity Operations Center (SOC)",;
    category: "it-services",;
    description: "24/7 cybersecurity operations center with advanced threat detection, incident response, and security monitoring to protect your organization from cyber threats.",;
    features: [;
      "24/7 security monitoring",;
      "Advanced threat detection",;
      "Incident response and forensics",;
      "Security information and event management (SIEM)",;
      "Threat intelligence integration",;
      "Vulnerability management",;
      "Compliance monitoring",;
      "Security awareness training";
    ],;
    pricing: {;
      starter: 15000,;
      professional: 45000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Proactive threat detection",;
      "Reduced security incidents",;
      "Faster incident response",;
      "Compliance adherence",;
      "Peace of mind";
    ],;
    useCases: [;
      "Enterprise organizations",;
      "Financial institutions",;
      "Healthcare providers",;
      "Government agencies";
    ],;
    technologies: ["SIEM", "SOAR", "EDR", "XDR", "Threat Intelligence", "Forensics Tools"],;
    link: "https://ziontechgroup.com/services/cybersecurity-operations-center",;
    icon: "🛡️";,
},;
  {;
    id: "data-lake-architecture",;
    name: "Data Lake & Analytics Architecture",;
    category: "it-services",;
    description: "Comprehensive data lake architecture design and implementation for big data analytics, machine learning, and business intelligence with scalable data processing.",;
    features: [;
      "Data lake architecture design",;
      "Data ingestion and processing",;
      "Real-time and batch analytics",;
      "Machine learning pipeline setup",;
      "Data governance and security",;
      "Business intelligence integration",;
      "Data quality management",;
      "Cost optimization";
    ],;
    pricing: {;
      starter: 30000,;
      professional: 90000,;
      enterprise: 250000,;
      currency: "USD";,
},;
    benefits: [;
      "Unified data platform",;
      "Scalable analytics capabilities",;
      "Improved data insights",;
      "Reduced data silos",;
      "Better decision making";
    ],;
    useCases: [;
      "Big data analytics",;
      "Machine learning projects",;
      "Business intelligence",;
      "Data-driven organizations";
    ],;
    technologies: ["AWS S3", "Apache Spark", "Hadoop", "Kafka", "Elasticsearch", "Tableau"],;
    link: "https://ziontechgroup.com/services/data-lake-architecture",;
    icon: "🏞️";,
},;
  {;
    id: "iot-platform-development",;
    name: "IoT Platform Development",;
    category: "it-services",;
    description: "Complete IoT platform development with device management, data processing, analytics, and integration capabilities for connected devices and smart systems.",;
    features: [;
      "IoT device management",;
      "Data ingestion and processing",;
      "Real-time analytics",;
      "Device connectivity management",;
      "Security and authentication",;
      "Integration with cloud services",;
      "Custom dashboard development",;
      "Predictive maintenance";
    ],;
    pricing: {;
      starter: 40000,;
      professional: 120000,;
      enterprise: 300000,;
      currency: "USD";,
},;
    benefits: [;
      "Connected device ecosystem",;
      "Real-time insights",;
      "Improved operational efficiency",;
      "Predictive maintenance capabilities",;
      "Scalable IoT infrastructure";
    ],;
    useCases: [;
      "Smart manufacturing",;
      "Connected vehicles",;
      "Smart cities",;
      "Industrial automation";
    ],;
    technologies: ["IoT Platforms", "MQTT", "CoAP", "Edge Computing", "Time Series DB", "Machine Learning"],;
    link: "https://ziontechgroup.com/services/iot-platform-development",;
    icon: "🌐";,
},;
  {;
    id: "api-first-architecture",;
    name: "API-First Architecture Design",;
    category: "it-services",;
    description: "Strategic API-first architecture design and implementation for modern applications with comprehensive API management, security, and developer experience.",;
    features: [;
      "API strategy and design",;
      "API gateway implementation",;
      "API security and authentication",;
      "Developer portal development",;
      "API versioning and lifecycle management",;
      "Performance monitoring and analytics",;
      "Documentation and testing tools",;
      "Integration with existing systems";
    ],;
    pricing: {;
      starter: 20000,;
      professional: 60000,;
      enterprise: 150000,;
      currency: "USD";,
},;
    benefits: [;
      "Improved developer experience",;
      "Faster integration capabilities",;
      "Better system scalability",;
      "Enhanced security",;
      "Reduced development time";
    ],;
    useCases: [;
      "Digital transformation",;
      "Microservices architecture",;
      "Third-party integrations",;
      "Mobile app development";
    ],;
    technologies: ["API Gateway", "OpenAPI", "GraphQL", "REST", "OAuth", "Rate Limiting"],;
    link: "https://ziontechgroup.com/services/api-first-architecture",;
    icon: "🔗";,
},;
  {;
    id: "hybrid-cloud-strategy",;
    name: "Hybrid Cloud Strategy & Implementation",;
    category: "it-services",;
    description: "Comprehensive hybrid cloud strategy and implementation that seamlessly integrates on-premises infrastructure with public and private cloud services.",;
    features: [;
      "Hybrid cloud architecture design",;
      "Cloud migration planning",;
      "Data synchronization strategies",;
      "Security and compliance management",;
      "Cost optimization across environments",;
      "Disaster recovery planning",;
      "Performance monitoring",;
      "Governance and policy management";
    ],;
    pricing: {;
      starter: 35000,;
      professional: 100000,;
      enterprise: 250000,;
      currency: "USD";,
},;
    benefits: [;
      "Flexibility and scalability",;
      "Cost optimization",;
      "Risk mitigation",;
      "Compliance adherence",;
      "Seamless operations";
    ],;
    useCases: [;
      "Enterprise organizations",;
      "Regulated industries",;
      "Legacy system integration",;
      "Multi-cloud environments";
    ],;
    technologies: ["AWS", "Azure", "VMware", "Kubernetes", "Terraform", "Cloud Management"],;
    link: "https://ziontechgroup.com/services/hybrid-cloud-strategy",;
    icon: "🌩️";,
},;
  {;
    id: "devsecops-implementation",;
    name: "DevSecOps Implementation",;
    category: "it-services",;
    description: "Complete DevSecOps implementation integrating security into the development lifecycle with automated security testing, compliance, and continuous monitoring.",;
    features: [;
      "Security integration in CI/CD",;
      "Automated security testing",;
      "Infrastructure as code security",;
      "Container security scanning",;
      "Compliance automation",;
      "Security monitoring and alerting",;
      "Vulnerability management",;
      "Security training and awareness";
    ],;
    pricing: {;
      starter: 25000,;
      professional: 75000,;
      enterprise: 200000,;
      currency: "USD";,
},;
    benefits: [;
      "Shift-left security approach",;
      "Reduced security vulnerabilities",;
      "Faster secure deployments",;
      "Compliance automation",;
      "Improved security posture";
    ],;
    useCases: [;
      "Software development teams",;
      "Financial services",;
      "Healthcare organizations",;
      "Government agencies";
    ],;
    technologies: ["Jenkins", "GitLab CI", "SonarQube", "OWASP", "SAST", "DAST"],;
    link: "https://ziontechgroup.com/services/devsecops-implementation",;
    icon: "🔐";,
},;
  {;
    id: "observability-platform",;
    name: "Observability Platform Implementation",;
    category: "it-services",;
    description: "Comprehensive observability platform setup with logging, monitoring, tracing, and alerting for complete system visibility and proactive issue resolution.",;
    features: [;
      "Centralized logging setup",;
      "Application performance monitoring",;
      "Distributed tracing implementation",;
      "Infrastructure monitoring",;
      "Custom dashboards and alerts",;
      "Anomaly detection",;
      "Root cause analysis tools",;
      "Integration with existing tools";
    ],;
    pricing: {;
      starter: 15000,;
      professional: 45000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Complete system visibility",;
      "Proactive issue detection",;
      "Faster troubleshooting",;
      "Improved system reliability",;
      "Better user experience";
    ],;
    useCases: [;
      "Microservices applications",;
      "Cloud-native systems",;
      "High-traffic websites",;
      "Enterprise applications";
    ],;
    technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "OpenTelemetry", "AlertManager"],;
    link: "https://ziontechgroup.com/services/observability-platform",;
    icon: "👁️";,
},;

<<<<<<< HEAD
  // Additional Advanced IT Services
  {
    id: 'cloud-native-architecture,
    name:,
  Cloud-Native Architecture Design',
    category: 'it-services,
    description:,
  Complete cloud-native architecture design and implementation using microservices, containers, and serverless technologies for maximum scalability and efficiency.',
    features: [
  'Microservices architecture design,
  'Container orchestration setup',
  'Serverless function implementation',
  'API gateway configuration',
  'Service mesh implementation',
  'Observability and monitoring',
  'Security and compliance',
  'Cost optimization strategies'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency:,
  USD'
    },
    benefits: [
  'Improved scalability and performance,
,
  Reduced infrastructure costs',
  'Faster time to market',
  'Better resource utilization',
  'Enhanced reliability and availability'
    ],
    useCases: [
  'Digital transformation projects,
,
  Legacy system modernization',
  'High-scale applications',
  'Startup scaling'
    ],
    technologies: [
  'Kubernetes,
,
  Docker',
  'AWS',
  'Azure',
  'GCP',
  'Istio',
  'Prometheus'],
    link: 'https://ziontechgroup.com/services/cloud-native-architecture,
    icon:,
  ☁️'
  },
  {
    id: 'cybersecurity-operations-center,
    name:,
  Cybersecurity Operations Center (SOC)',
    category: 'it-services,
    description:,
  24/7 cybersecurity operations center with advanced threat detection, incident response, and security monitoring to protect your organization from cyber threats.',
    features: [
<<<<<<< HEAD
      'Weather pattern prediction',
      'Climate change modeling',
      'Environmental impact analysis',
      'Natural disaster forecasting',
      'Carbon footprint tracking',
      'Renewable energy optimization',
      'Agricultural yield prediction',
      'Risk assessment tools'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Accurate climate predictions',
      'Better disaster preparedness',
      'Environmental sustainability',
      'Cost-effective solutions',
      'Data-driven decisions'
    ],
    useCases: [
      'Government agencies',
      'Environmental organizations',
      'Agricultural companies',
      'Energy sector'
    ],
    technologies: ['Climate AI', 'Machine Learning', 'Satellite Data', 'Python', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-space-exploration',
    name: 'AI Space Exploration Solutions',
    category: 'ai-services',
    description: 'Cutting-edge AI solutions for space exploration, satellite management, and astronomical research with advanced data analysis capabilities.',
    features: [
      'Satellite orbit optimization',
      'Space debris tracking',
      'Astronomical data analysis',
      'Mission planning automation',
      'Space weather prediction',
      'Planetary exploration support',
      'Communication optimization',
      'Resource management'
    ],
    pricing: {
      starter: 200000,
      professional: 600000,
      enterprise: 2000000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced mission success rates',
      'Optimized resource utilization',
      'Improved safety protocols',
      'Advanced data insights',
      'Cost-effective operations'
    ],
    useCases: [
      'Space agencies',
      'Satellite companies',
      'Research institutions',
      'Defense organizations'
    ],
    technologies: ['Space AI', 'Orbital Mechanics', 'Machine Learning', 'Python', 'Satellite Data'],
    link: 'https://ziontechgroup.com/services/ai-space-exploration',
    icon: '🚀'
  },
  {
    id: 'ai-neuroscience-research',
    name: 'AI Neuroscience Research Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for neuroscience research, brain-computer interfaces, and neurological disorder analysis using cutting-edge machine learning.',
    features: [
      'Brain signal analysis',
      'Neural network modeling',
      'Brain-computer interface development',
      'Neurological disorder detection',
      'Cognitive assessment tools',
      'Treatment optimization',
      'Research data management',
      'Clinical trial support'
    ],
    pricing: {
      starter: 75000,
      professional: 225000,
      enterprise: 750000,
      currency: 'USD'
    },
    benefits: [
      'Accelerated research progress',
      'Better treatment outcomes',
      'Improved patient care',
      'Advanced diagnostic capabilities',
      'Research collaboration tools'
    ],
    useCases: [
      'Medical research institutions',
      'Hospitals and clinics',
      'Pharmaceutical companies',
      'Neuroscience laboratories'
    ],
    technologies: ['Neural Networks', 'Brain Imaging', 'Machine Learning', 'Python', 'Medical AI'],
    link: 'https://ziontechgroup.com/services/ai-neuroscience-research',
    icon: '🧠'
  },
  {
    id: 'ai-robotics-automation',
    name: 'AI Robotics & Automation',
    category: 'ai-services',
    description: 'Intelligent robotics solutions with advanced AI for autonomous operations, human-robot collaboration, and industrial automation.',
    features: [
      'Autonomous robot control',
      'Human-robot interaction',
      'Computer vision integration',
      'Predictive maintenance',
      'Quality control automation',
      'Safety monitoring',
      'Performance optimization',
      'Custom robot programming'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 1000000,
      currency: 'USD'
    },
    benefits: [
      'Increased productivity',
      'Reduced operational costs',
      'Improved safety',
      '24/7 operations',
      'Consistent quality'
    ],
    useCases: [
      'Manufacturing companies',
      'Warehouse operations',
      'Healthcare facilities',
      'Agricultural operations'
    ],
    technologies: ['Robotics', 'Computer Vision', 'Machine Learning', 'ROS', 'AI Control Systems'],
    link: 'https://ziontechgroup.com/services/ai-robotics-automation',
    icon: '🤖'
  },
  {
    id: 'ai-financial-trading',
    name: 'AI Financial Trading Platform',
    category: 'ai-services',
    description: 'Advanced AI-powered financial trading platform with algorithmic trading, risk management, and market prediction capabilities.',
    features: [
      'Algorithmic trading strategies',
      'Real-time market analysis',
      'Risk assessment and management',
      'Portfolio optimization',
      'Sentiment analysis',
      'High-frequency trading',
      'Backtesting capabilities',
      'Regulatory compliance'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Improved trading performance',
      'Reduced risk exposure',
      '24/7 market monitoring',
      'Data-driven decisions',
      'Automated execution'
    ],
    useCases: [
      'Investment firms',
      'Hedge funds',
      'Banks and financial institutions',
      'Individual traders'
    ],
    technologies: ['Financial AI', 'Machine Learning', 'Quantitative Analysis', 'Python', 'Trading APIs'],
    link: 'https://ziontechgroup.com/services/ai-financial-trading',
    icon: '📈'
  },

  // NEW INNOVATIVE MICRO SAAS SERVICES
  {
<<<<<<< HEAD
    id: 'quantum-computing-simulator',
    name: 'Quantum Computing Simulator Pro',
=======
    id: 'ai-video-editing-platform',
    name: 'AI Video Editing Studio',
>>>>>>> main
    category: 'micro-saas',
    description: 'Advanced quantum computing simulation platform for researchers, developers, and businesses exploring quantum algorithms.',
    features: [
<<<<<<< HEAD
      'Quantum circuit designer',
      'Algorithm simulation',
      'Performance benchmarking',
      'Quantum error correction',
      'Multi-qubit operations',
      'Visualization tools',
      'API integration',
      'Cloud-based processing'
=======
      'AI-powered auto-editing',
      'Smart scene detection',
      'Automatic color correction',
      'Background music matching',
      'Text overlay generation',
      'Multi-format export',
      'Cloud-based processing',
      'Collaborative editing'
    ],
    pricing: {
      starter: 39,
      professional: 89,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '90% faster video production',
      'Professional quality output',
      'No editing skills required',
      'Scalable video creation'
    ],
    useCases: [
      'Content creators',
      'Marketing agencies',
      'Social media managers',
      'E-learning platforms'
    ],
    technologies: ['AI Video Processing', 'Computer Vision', 'FFmpeg', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/ai-video-editing',
    icon: '🎬'
  },
  {
    id: 'smart-contract-auditor',
    name: 'Smart Contract Security Auditor',
    category: 'micro-saas',
    description: 'AI-powered smart contract auditing platform that automatically detects vulnerabilities and security issues in blockchain smart contracts.',
    features: [
      'Automated vulnerability scanning',
      'Gas optimization analysis',
      'Security best practices check',
      'Code quality assessment',
      'Detailed audit reports',
      'Remediation suggestions',
      'Multi-blockchain support',
      'Continuous monitoring'
>>>>>>> main
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    benefits: [
<<<<<<< HEAD
      'Access to quantum computing',
      'Cost-effective research',
      'Educational platform',
      'Future-proof technology'
    ],
    useCases: [
      'Research institutions',
      'Cryptography development',
      'Optimization problems',
      'Machine learning research'
    ],
    technologies: ['Qiskit', 'Cirq', 'Python', 'Quantum SDKs', 'Cloud Computing'],
    link: 'https://ziontechgroup.com/services/quantum-computing-simulator',
    icon: '⚛️'
=======
      'Prevent costly security breaches',
      'Faster audit process',
      'Comprehensive security coverage',
      'Reduced audit costs'
    ],
    useCases: [
      'DeFi protocols',
      'NFT marketplaces',
      'Blockchain startups',
      'Enterprise blockchain'
    ],
    technologies: ['Solidity', 'AI Security Analysis', 'Blockchain', 'Python', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/smart-contract-auditor',
    icon: '🔒'
>>>>>>> main
  },
  {
    id: 'blockchain-nft-platform',
    name: 'Blockchain NFT Marketplace Builder',
    category: 'micro-saas',
<<<<<<< HEAD
    description: 'Complete NFT marketplace creation platform with smart contracts, minting tools, and trading capabilities.',
    features: [
      'Smart contract deployment',
      'NFT minting tools',
      'Marketplace creation',
      'Wallet integration',
      'Royalty management',
      'Multi-chain support',
      'Analytics dashboard',
      'Mobile app builder'
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    benefits: [
      'Quick marketplace launch',
      'No coding required',
      'Multi-blockchain support',
      'Revenue sharing model'
    ],
    useCases: [
      'Digital artists',
      'Gaming companies',
      'Brand marketing',
      'Collectibles trading'
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'IPFS'],
    link: 'https://ziontechgroup.com/services/blockchain-nft-platform',
    icon: '🎨'
  },
  {
    id: 'iot-device-management',
    name: 'IoT Device Management Suite',
    category: 'micro-saas',
    description: 'Comprehensive IoT device management platform with real-time monitoring, analytics, and automation.',
    features: [
      'Device provisioning',
      'Real-time monitoring',
      'Data analytics',
      'Remote updates',
      'Security management',
      'Alert system',
      'Dashboard creation',
      'API integration'
    ],
    pricing: {
      starter: 89,
      professional: 249,
      enterprise: 699,
      currency: 'USD'
    },
    benefits: [
      'Centralized device control',
      'Predictive maintenance',
      'Cost optimization',
      'Scalable infrastructure'
    ],
    useCases: [
      'Smart buildings',
      'Manufacturing',
      'Agriculture',
      'Healthcare monitoring'
    ],
    technologies: ['MQTT', 'Node.js', 'MongoDB', 'React', 'AWS IoT'],
    link: 'https://ziontechgroup.com/services/iot-device-management',
    icon: '🌐'
  },
  {
    id: 'ar-vr-experience-builder',
    name: 'AR/VR Experience Builder',
    category: 'micro-saas',
    description: 'No-code AR/VR experience creation platform for immersive marketing, training, and entertainment.',
    features: [
      'Drag-and-drop editor',
      '3D model library',
      'Animation tools',
      'Multi-platform deployment',
      'Analytics tracking',
      'Collaboration features',
      'Template marketplace',
      'Cloud rendering'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD'
    },
    benefits: [
      'No coding required',
      'Rapid prototyping',
      'Cross-platform compatibility',
      'Immersive experiences'
    ],
    useCases: [
      'Marketing campaigns',
      'Employee training',
      'Product visualization',
      'Educational content'
    ],
    technologies: ['Unity', 'WebXR', 'Three.js', 'ARCore', 'ARKit'],
    link: 'https://ziontechgroup.com/services/ar-vr-experience-builder',
    icon: '🥽'
  },
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered coding assistant with code generation, debugging, and optimization capabilities.',
    features: [
      'Code generation',
      'Bug detection',
      'Code optimization',
      'Documentation generation',
      'Multi-language support',
      'IDE integration',
      'Team collaboration',
      'Learning analytics'
=======
    description: 'Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and performance issues with detailed recommendations.',
    features: [
      'Automated code analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code style enforcement',
      'Best practices recommendations',
      'Integration with Git workflows',
      'Team collaboration tools',
      'Custom rule configuration'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 299,
      currency: 'USD'
    },
    benefits: [
      'Improve code quality by 40%',
      'Reduce security vulnerabilities',
      'Faster development cycles',
      'Consistent coding standards'
    ],
    useCases: [
      'Software development teams',
      'DevOps organizations',
      'Code quality assurance',
      'Security compliance'
    ],
    technologies: ['AI Code Analysis', 'Static Analysis', 'Machine Learning', 'Git Integration', 'CI/CD'],
    link: 'https://ziontechgroup.com/services/ai-code-reviewer',
    icon: '👨‍💻'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimization Suite',
    category: 'micro-saas',
    description: 'Advanced AI-powered SEO optimization platform that automatically analyzes and improves website rankings with intelligent content optimization.',
    features: [
      'AI content optimization',
      'Keyword research automation',
      'Technical SEO analysis',
      'Competitor analysis',
      'Link building suggestions',
      'Performance tracking',
      'Content gap analysis',
      'Ranking prediction'
>>>>>>> main
    ],
    pricing: {
      starter: 59,
      professional: 149,
      enterprise: 349,
      currency: 'USD'
    },
    benefits: [
<<<<<<< HEAD
      'Faster development',
      'Reduced bugs',
      'Code quality improvement',
      'Learning acceleration'
    ],
    useCases: [
      'Software development',
      'Code review',
      'Learning programming',
      'Legacy code modernization'
    ],
    technologies: ['OpenAI Codex', 'GitHub Copilot', 'VS Code', 'JetBrains', 'AI/ML'],
    link: 'https://ziontechgroup.com/services/ai-code-assistant',
    icon: '🤖'
=======
      'Increase organic traffic by 200%',
      'Automated SEO optimization',
      'Competitive advantage',
      'Data-driven insights'
    ],
    useCases: [
      'Digital marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'SaaS companies'
    ],
    technologies: ['AI SEO', 'Natural Language Processing', 'Web Scraping', 'Analytics APIs', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/ai-seo-optimizer',
    icon: '🔍'
>>>>>>> main
  },
  {
    id: 'metaverse-platform-builder',
    name: 'Metaverse Platform Builder',
    category: 'micro-saas',
<<<<<<< HEAD
    description: 'Complete metaverse platform creation tool with virtual worlds, avatars, and social features.',
    features: [
      '3D world builder',
      'Avatar customization',
      'Social features',
      'Virtual economy',
      'Event hosting',
      'Brand integration',
      'Analytics dashboard',
      'Mobile support'
    ],
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1599,
      currency: 'USD'
    },
    benefits: [
      'Future-ready platform',
      'Engaging experiences',
      'Brand presence',
      'Revenue opportunities'
    ],
    useCases: [
      'Virtual events',
      'Brand experiences',
      'Gaming platforms',
      'Educational spaces'
    ],
    technologies: ['Unity', 'Unreal Engine', 'Web3', 'Blockchain', 'VR/AR'],
    link: 'https://ziontechgroup.com/services/metaverse-platform-builder',
    icon: '🌍'
  },
  {
    id: 'ai-voice-cloning-platform',
    name: 'AI Voice Cloning Platform',
    category: 'micro-saas',
    description: 'Advanced AI voice cloning and synthesis platform for content creation, accessibility, and personalization.',
    features: [
      'Voice cloning',
      'Text-to-speech',
      'Voice conversion',
      'Emotion control',
      'Multi-language support',
      'Real-time processing',
      'API integration',
      'Voice library'
=======
    description: 'Intelligent customer analytics platform that provides deep insights into customer behavior, preferences, and lifetime value using advanced AI.',
    features: [
      'Customer behavior analysis',
      'Predictive customer lifetime value',
      'Churn prediction',
      'Personalization recommendations',
      'Customer segmentation',
      'Sentiment analysis',
      'Real-time insights',
      'Integration with CRM systems'
>>>>>>> main
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
<<<<<<< HEAD
      'Personalized content',
      'Accessibility improvement',
      'Cost-effective voiceovers',
      'Multilingual support'
    ],
    useCases: [
      'Content creation',
      'Accessibility services',
      'Gaming industry',
      'Educational content'
    ],
    technologies: ['Deep Learning', 'Neural Networks', 'Python', 'TensorFlow', 'Audio Processing'],
    link: 'https://ziontechgroup.com/services/ai-voice-cloning-platform',
    icon: '🎤'
  },
  {
    id: 'smart-contract-auditor',
    name: 'Smart Contract Security Auditor',
    category: 'micro-saas',
    description: 'Automated smart contract security auditing platform with vulnerability detection and compliance checking.',
    features: [
      'Automated vulnerability scanning',
      'Code analysis',
      'Gas optimization',
      'Compliance checking',
      'Security reports',
      'Remediation suggestions',
      'Multi-blockchain support',
      'API integration'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD'
    },
    benefits: [
      'Security assurance',
      'Cost savings',
      'Compliance adherence',
      'Risk mitigation'
    ],
    useCases: [
      'DeFi protocols',
      'NFT projects',
      'Blockchain startups',
      'Enterprise blockchain'
    ],
    technologies: ['Solidity', 'Security Tools', 'AI/ML', 'Blockchain', 'Python'],
    link: 'https://ziontechgroup.com/services/smart-contract-auditor',
    icon: '🔒'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation Suite',
    category: 'micro-saas',
    description: 'Advanced AI-powered content moderation platform for text, images, and videos with real-time processing.',
    features: [
      'Multi-modal moderation',
      'Real-time processing',
      'Custom rule creation',
      'Bias detection',
      'API integration',
      'Analytics dashboard',
      'Human review workflow',
      'Compliance reporting'
=======
      'Increase customer retention by 35%',
      'Better customer understanding',
      'Data-driven personalization',
      'Improved customer experience'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Retail businesses',
      'Subscription services'
    ],
    technologies: ['Customer Analytics', 'Machine Learning', 'Predictive Modeling', 'Data Science', 'AI Insights'],
    link: 'https://ziontechgroup.com/services/ai-customer-insights',
    icon: '👥'
  },
  {
    id: 'ai-translation-platform',
    name: 'AI Translation & Localization',
    category: 'micro-saas',
    description: 'Advanced AI-powered translation platform with real-time translation, cultural adaptation, and multi-language content management.',
    features: [
      'Real-time translation',
      'Cultural context adaptation',
      'Industry-specific terminology',
      'Voice translation',
      'Document translation',
      'Website localization',
      'Quality assurance',
      'Translation memory'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '99% translation accuracy',
      'Faster time to market',
      'Cost-effective localization',
      'Global market expansion'
    ],
    useCases: [
      'International businesses',
      'E-commerce platforms',
      'Content creators',
      'Educational institutions'
    ],
    technologies: ['Neural Machine Translation', 'Natural Language Processing', 'AI Translation', 'Multilingual AI'],
    link: 'https://ziontechgroup.com/services/ai-translation',
    icon: '🌍'
  },
  {
    id: 'ai-voice-cloning',
    name: 'AI Voice Cloning Studio',
    category: 'micro-saas',
    description: 'Professional AI voice cloning platform that creates realistic voice replicas for content creation, accessibility, and personalized experiences.',
    features: [
      'High-quality voice cloning',
      'Emotion and tone control',
      'Multiple language support',
      'Real-time voice synthesis',
      'Voice customization',
      'Audio editing tools',
      'API integration',
      'Privacy protection'
>>>>>>> main
    ],
    pricing: {
      starter: 99,
      professional: 249,
      enterprise: 599,
      currency: 'USD'
    },
    benefits: [
<<<<<<< HEAD
      'Automated moderation',
      'Consistent enforcement',
      'Scalable solution',
      'Cost reduction'
=======
      'Professional voice synthesis',
      'Accessibility improvements',
      'Content creation efficiency',
      'Personalized experiences'
    ],
    useCases: [
      'Content creators',
      'Accessibility services',
      'E-learning platforms',
      'Entertainment industry'
    ],
    technologies: ['Neural Voice Synthesis', 'Deep Learning', 'Audio Processing', 'AI Voice Models'],
    link: 'https://ziontechgroup.com/services/ai-voice-cloning',
    icon: '🎤'
  },
  {
    id: 'ai-data-privacy-manager',
    name: 'AI Data Privacy & Compliance Manager',
    category: 'micro-saas',
    description: 'Intelligent data privacy management platform that automatically ensures GDPR, CCPA, and other privacy regulation compliance.',
    features: [
      'Automated compliance checking',
      'Data mapping and classification',
      'Privacy impact assessments',
      'Consent management',
      'Data subject rights handling',
      'Breach detection and reporting',
      'Privacy policy generation',
      'Audit trail management'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD'
    },
    benefits: [
      'Ensure regulatory compliance',
      'Reduce privacy risks',
      'Automated compliance management',
      'Cost-effective privacy protection'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare providers',
      'Financial institutions',
      'E-commerce platforms'
    ],
    technologies: ['Privacy AI', 'Compliance Automation', 'Data Classification', 'Regulatory AI'],
    link: 'https://ziontechgroup.com/services/ai-data-privacy',
    icon: '🔐'
  },
  {
    id: 'ai-marketplace-optimizer',
    name: 'AI Marketplace Optimization',
    category: 'micro-saas',
    description: 'Intelligent marketplace optimization platform that maximizes product visibility, pricing, and sales performance across multiple marketplaces.',
    features: [
      'Dynamic pricing optimization',
      'Product listing optimization',
      'Competitor analysis',
      'Inventory management',
      'Performance analytics',
      'Multi-marketplace sync',
      'Automated repricing',
      'Sales forecasting'
    ],
    pricing: {
      starter: 69,
      professional: 179,
      enterprise: 449,
      currency: 'USD'
    },
    benefits: [
      'Increase sales by 150%',
      'Optimize pricing strategies',
      'Reduce manual work',
      'Multi-platform management'
    ],
    useCases: [
      'E-commerce sellers',
      'Amazon sellers',
      'eBay merchants',
      'Multi-channel retailers'
    ],
    technologies: ['Marketplace AI', 'Pricing Optimization', 'E-commerce Analytics', 'Multi-platform Integration'],
    link: 'https://ziontechgroup.com/services/ai-marketplace-optimizer',
    icon: '🛍️'
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation Platform',
    category: 'micro-saas',
    description: 'Intelligent workflow automation platform that uses AI to identify, optimize, and automate complex business processes.',
    features: [
      'Process discovery and mapping',
      'AI-powered automation suggestions',
      'Workflow optimization',
      'Integration with 500+ apps',
      'Custom automation builder',
      'Performance monitoring',
      'Exception handling',
      'Compliance tracking'
    ],
    pricing: {
      starter: 89,
      professional: 229,
      enterprise: 599,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 80%',
      'Improve process efficiency',
      'Cost savings',
      'Better compliance'
    ],
    useCases: [
      'Business process automation',
      'HR workflows',
      'Finance operations',
      'Customer service'
    ],
    technologies: ['Workflow AI', 'Process Mining', 'Automation Engine', 'Integration Platform'],
    link: 'https://ziontechgroup.com/services/ai-workflow-automation',
    icon: '⚙️'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation Suite',
    category: 'micro-saas',
    description: 'Advanced AI-powered content moderation platform that automatically detects and filters inappropriate content across text, images, and videos.',
    features: [
      'Multi-modal content analysis',
      'Real-time moderation',
      'Custom policy configuration',
      'False positive reduction',
      'Bulk content processing',
      'API integration',
      'Analytics dashboard',
      'Human review workflow'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      '99.9% accuracy in content detection',
      'Reduce moderation costs by 70%',
      '24/7 automated monitoring',
      'Scalable content protection'
>>>>>>> main
    ],
    useCases: [
      'Social media platforms',
      'E-commerce sites',
      'Gaming communities',
      'Educational platforms'
    ],
<<<<<<< HEAD
    technologies: ['Computer Vision', 'NLP', 'Deep Learning', 'Python', 'TensorFlow'],
=======
    technologies: ['Content Moderation AI', 'Computer Vision', 'Natural Language Processing', 'Multi-modal AI'],
>>>>>>> main
    link: 'https://ziontechgroup.com/services/ai-content-moderation',
    icon: '🛡️'
  },
  {
<<<<<<< HEAD
    id: 'digital-twin-platform',
    name: 'Digital Twin Platform',
    category: 'micro-saas',
    description: 'Comprehensive digital twin creation platform for physical assets, processes, and systems simulation.',
    features: [
      '3D modeling tools',
      'Real-time data integration',
      'Simulation engine',
      'Predictive analytics',
      'IoT connectivity',
      'Visualization dashboard',
      'API integration',
      'Collaboration tools'
    ],
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1599,
      currency: 'USD'
    },
    benefits: [
      'Predictive maintenance',
      'Optimization insights',
      'Risk reduction',
      'Cost savings'
=======
    id: 'ai-financial-forecasting',
    name: 'AI Financial Forecasting Platform',
    category: 'micro-saas',
    description: 'Intelligent financial forecasting platform that provides accurate predictions for revenue, expenses, and cash flow using advanced AI models.',
    features: [
      'Revenue forecasting',
      'Expense prediction',
      'Cash flow analysis',
      'Scenario planning',
      'Risk assessment',
      'Financial modeling',
      'Integration with accounting systems',
      'Real-time updates'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Improve financial planning accuracy',
      'Better cash flow management',
      'Risk mitigation',
      'Data-driven decisions'
>>>>>>> main
    ],
    useCases: [
      'Manufacturing',
      'Smart cities',
      'Healthcare',
      'Energy systems'
    ],
<<<<<<< HEAD
    technologies: ['IoT', '3D Modeling', 'Simulation', 'AI/ML', 'Cloud Computing'],
    link: 'https://ziontechgroup.com/services/digital-twin-platform',
    icon: '🔄'
  },

  // NEW ADVANCED AI SERVICES
  {
    id: 'quantum-machine-learning',
    name: 'Quantum Machine Learning Solutions',
    category: 'ai-services',
    description: 'Cutting-edge quantum machine learning solutions for complex optimization and pattern recognition problems.',
    features: [
      'Quantum algorithm development',
      'Hybrid classical-quantum models',
      'Quantum optimization',
      'Pattern recognition',
      'Drug discovery applications',
      'Financial modeling',
      'Research collaboration',
      'Custom implementations'
=======
    technologies: ['Financial AI', 'Predictive Analytics', 'Time Series Analysis', 'Financial Modeling'],
    link: 'https://ziontechgroup.com/services/ai-financial-forecasting',
    icon: '💰'
  },
  {
    id: 'ai-email-security',
    name: 'AI Email Security & Phishing Protection',
    category: 'micro-saas',
    description: 'Advanced AI-powered email security platform that protects against phishing, malware, and advanced email threats with real-time analysis.',
    features: [
      'Real-time threat detection',
      'Phishing email identification',
      'Malware scanning',
      'URL analysis',
      'Sender reputation checking',
      'Email encryption',
      'Incident response',
      'Security training'
>>>>>>> main
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
<<<<<<< HEAD
      'Exponential speedup potential',
      'Complex problem solving',
      'Competitive advantage',
      'Future-proof technology'
    ],
    useCases: [
      'Drug discovery',
      'Financial optimization',
      'Supply chain optimization',
      'Cryptography'
    ],
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Quantum SDKs', 'Python'],
    link: 'https://ziontechgroup.com/services/quantum-machine-learning',
    icon: '⚛️'
  },
  {
    id: 'autonomous-ai-systems',
    name: 'Autonomous AI Systems Development',
    category: 'ai-services',
    description: 'Development of fully autonomous AI systems for robotics, vehicles, and intelligent automation.',
    features: [
      'Autonomous decision making',
      'Real-time adaptation',
      'Multi-sensor fusion',
      'Safety protocols',
      'Learning algorithms',
      'Edge computing',
      'System integration',
      'Continuous monitoring'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Full automation',
      'Reduced human intervention',
      '24/7 operation',
      'Scalable solutions'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial robotics',
      'Smart cities',
      'Healthcare automation'
    ],
    technologies: ['ROS', 'TensorFlow', 'PyTorch', 'Computer Vision', 'Robotics'],
    link: 'https://ziontechgroup.com/services/autonomous-ai-systems',
    icon: '🤖'
  },
  {
    id: 'ai-cybersecurity-suite',
    name: 'AI-Powered Cybersecurity Suite',
    category: 'ai-services',
    description: 'Advanced AI-driven cybersecurity solutions with threat detection, response automation, and predictive security.',
    features: [
      'Threat detection & analysis',
      'Automated response',
      'Behavioral analytics',
      'Zero-day protection',
      'Incident response',
      'Security orchestration',
      'Compliance monitoring',
      'Risk assessment'
=======
      '99.9% phishing detection rate',
      'Reduce security incidents',
      'Protect sensitive data',
      'Compliance assurance'
    ],
    useCases: [
      'Enterprise organizations',
      'Small businesses',
      'Educational institutions',
      'Healthcare providers'
    ],
    technologies: ['Email Security AI', 'Threat Detection', 'Machine Learning', 'Security Analytics'],
    link: 'https://ziontechgroup.com/services/ai-email-security',
    icon: '📧'
  },
  {
    id: 'ai-recruitment-platform',
    name: 'AI Recruitment & Talent Acquisition',
    category: 'micro-saas',
    description: 'Intelligent recruitment platform that automates candidate sourcing, screening, and matching using advanced AI and machine learning.',
    features: [
      'Automated candidate sourcing',
      'AI-powered resume screening',
      'Skill matching algorithms',
      'Video interview analysis',
      'Bias detection and reduction',
      'Candidate ranking',
      'Interview scheduling',
      'Analytics and reporting'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD'
    },
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality',
      'Reduce bias in hiring',
      'Cost-effective recruitment'
    ],
    useCases: [
      'HR departments',
      'Recruitment agencies',
      'Staffing companies',
      'Enterprise organizations'
    ],
    technologies: ['Recruitment AI', 'Natural Language Processing', 'Candidate Matching', 'HR Analytics'],
    link: 'https://ziontechgroup.com/services/ai-recruitment',
    icon: '👔'
  },
  {
    id: 'ai-supply-chain-optimizer',
    name: 'AI Supply Chain Optimization',
    category: 'micro-saas',
    description: 'Intelligent supply chain optimization platform that predicts demand, optimizes inventory, and reduces costs using advanced AI algorithms.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Supplier risk assessment',
      'Route optimization',
      'Cost reduction analysis',
      'Supply chain visibility',
      'Risk management',
      'Performance analytics'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve demand accuracy',
      'Optimize supply chain efficiency',
      'Risk mitigation'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail businesses',
      'E-commerce platforms',
      'Logistics companies'
    ],
    technologies: ['Supply Chain AI', 'Demand Forecasting', 'Optimization Algorithms', 'Supply Chain Analytics'],
    link: 'https://ziontechgroup.com/services/ai-supply-chain',
    icon: '🚚'
=======
  '24/7 security monitoring,
  'Advanced threat detection',
  'Incident response and forensics',
  'Security information and event management (SIEM)',
  'Threat intelligence integration',
  'Vulnerability management',
  'Compliance monitoring',
  'Security awareness training'
>>>>>>> main
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency:,
  USD'
    },
    benefits: [
<<<<<<< HEAD
      'Proactive threat detection',
      'Automated response',
      'Reduced false positives',
      'Enhanced security posture'
    ],
    useCases: [
      'Enterprise security',
      'Critical infrastructure',
      'Financial services',
      'Healthcare systems'
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'SOAR', 'Python'],
    link: 'https://ziontechgroup.com/services/ai-cybersecurity-suite',
    icon: '🔐'
  },
  {
    id: 'ai-drug-discovery',
    name: 'AI Drug Discovery Platform',
    category: 'ai-services',
    description: 'Revolutionary AI platform for accelerating drug discovery, molecular design, and pharmaceutical research.',
    features: [
      'Molecular design',
      'Drug-target interaction',
      'Toxicity prediction',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Personalized medicine',
      'Research collaboration',
      'Regulatory compliance'
=======
  'Proactive threat detection,
,
  Reduced security incidents',
  'Faster incident response',
  'Compliance adherence',
  'Peace of mind'
    ],
    useCases: [
  'Enterprise organizations,
,
  Financial institutions',
  'Healthcare providers',
  'Government agencies'
    ],
    technologies: [
  'SIEM,
,
  SOAR',
  'EDR',
  'XDR',
  'Threat Intelligence',
  'Forensics Tools'],
    link: 'https://ziontechgroup.com/services/cybersecurity-operations-center,
    icon:,
  🛡️'
  },
  {
    id: 'data-lake-architecture,
    name:,
  Data Lake & Analytics Architecture',
    category: 'it-services,
    description:,
  Comprehensive data lake architecture design and implementation for big data analytics, machine learning, and business intelligence with scalable data processing.',
    features: [
  'Data lake architecture design,
  'Data ingestion and processing',
  'Real-time and batch analytics',
  'Machine learning pipeline setup',
  'Data governance and security',
  'Business intelligence integration',
  'Data quality management',
  'Cost optimization'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency:,
  USD'
    },
    benefits: [
  'Unified data platform,
,
  Scalable analytics capabilities',
  'Improved data insights',
  'Reduced data silos',
  'Better decision making'
    ],
    useCases: [
  'Big data analytics,
,
  Machine learning projects',
  'Business intelligence',
  'Data-driven organizations'
    ],
    technologies: [
  'AWS S3,
,
  Apache Spark',
  'Hadoop',
  'Kafka',
  'Elasticsearch',
  'Tableau'],
    link: 'https://ziontechgroup.com/services/data-lake-architecture,
    icon:,
  🏞️'
  },
  {
    id: 'iot-platform-development,
    name:,
  IoT Platform Development',
    category: 'it-services,
    description:,
  Complete IoT platform development with device management, data processing, analytics, and integration capabilities for connected devices and smart systems.',
    features: [
  'IoT device management,
  'Data ingestion and processing',
  'Real-time analytics',
  'Device connectivity management',
  'Security and authentication',
  'Integration with cloud services',
  'Custom dashboard development',
  'Predictive maintenance'
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 300000,
      currency:,
  USD'
    },
    benefits: [
  'Connected device ecosystem,
,
  Real-time insights',
  'Improved operational efficiency',
  'Predictive maintenance capabilities',
  'Scalable IoT infrastructure'
    ],
    useCases: [
  'Smart manufacturing,
,
  Connected vehicles',
  'Smart cities',
  'Industrial automation'
    ],
    technologies: [
  'IoT Platforms,
,
  MQTT',
  'CoAP',
  'Edge Computing',
  'Time Series DB',
  'Machine Learning'],
    link: 'https://ziontechgroup.com/services/iot-platform-development,
    icon:,
  🌐'
  },
  {
    id: 'api-first-architecture,
    name:,
  API-First Architecture Design',
    category: 'it-services,
    description:,
  Strategic API-first architecture design and implementation for modern applications with comprehensive API management, security, and developer experience.',
    features: [
  'API strategy and design,
  'API gateway implementation',
  'API security and authentication',
  'Developer portal development',
  'API versioning and lifecycle management',
  'Performance monitoring and analytics',
  'Documentation and testing tools',
  'Integration with existing systems'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency:,
  USD'
    },
    benefits: [
  'Improved developer experience,
,
  Faster integration capabilities',
  'Better system scalability',
  'Enhanced security',
  'Reduced development time'
    ],
    useCases: [
  'Digital transformation,
,
  Microservices architecture',
  'Third-party integrations',
  'Mobile app development'
    ],
    technologies: [
  'API Gateway,
,
  OpenAPI',
  'GraphQL',
  'REST',
  'OAuth',
  'Rate Limiting'],
    link: 'https://ziontechgroup.com/services/api-first-architecture,
    icon:,
  🔗'
  },
  {
    id: 'hybrid-cloud-strategy,
    name:,
  Hybrid Cloud Strategy & Implementation',
    category: 'it-services,
    description:,
  Comprehensive hybrid cloud strategy and implementation that seamlessly integrates on-premises infrastructure with public and private cloud services.',
    features: [
  'Hybrid cloud architecture design,
  'Cloud migration planning',
  'Data synchronization strategies',
  'Security and compliance management',
  'Cost optimization across environments',
  'Disaster recovery planning',
  'Performance monitoring',
  'Governance and policy management'
    ],
    pricing: {
      starter: 35000,
      professional: 100000,
      enterprise: 250000,
      currency:,
  USD'
    },
    benefits: [
  'Flexibility and scalability,
,
  Cost optimization',
  'Risk mitigation',
  'Compliance adherence',
  'Seamless operations'
    ],
    useCases: [
  'Enterprise organizations,
,
  Regulated industries',
  'Legacy system integration',
  'Multi-cloud environments'
    ],
    technologies: [
  'AWS,
,
  Azure',
  'VMware',
  'Kubernetes',
  'Terraform',
  'Cloud Management'],
    link: 'https://ziontechgroup.com/services/hybrid-cloud-strategy,
    icon:,
  🌩️'
  },
  {
    id: 'devsecops-implementation,
    name:,
  DevSecOps Implementation',
    category: 'it-services,
    description:,
  Complete DevSecOps implementation integrating security into the development lifecycle with automated security testing, compliance, and continuous monitoring.',
    features: [
  'Security integration in CI/CD,
  'Automated security testing',
  'Infrastructure as code security',
  'Container security scanning',
  'Compliance automation',
  'Security monitoring and alerting',
  'Vulnerability management',
  'Security training and awareness'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency:,
  USD'
    },
    benefits: [
  'Shift-left security approach,
,
  Reduced security vulnerabilities',
  'Faster secure deployments',
  'Compliance automation',
  'Improved security posture'
    ],
    useCases: [
  'Software development teams,
,
  Financial services',
  'Healthcare organizations',
  'Government agencies'
    ],
    technologies: [
  'Jenkins,
,
  GitLab CI',
  'SonarQube',
  'OWASP',
  'SAST',
  'DAST'],
    link: 'https://ziontechgroup.com/services/devsecops-implementation,
    icon:,
  🔐'
  },
  {
    id: 'observability-platform,
    name:,
  Observability Platform Implementation',
    category: 'it-services,
    description:,
  Comprehensive observability platform setup with logging, monitoring, tracing, and alerting for complete system visibility and proactive issue resolution.',
    features: [
  'Centralized logging setup,
  'Application performance monitoring',
  'Distributed tracing implementation',
  'Infrastructure monitoring',
  'Custom dashboards and alerts',
  'Anomaly detection',
  'Root cause analysis tools',
  'Integration with existing tools'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency:,
  USD'
    },
    benefits: [
  'Complete system visibility,
,
  Proactive issue detection',
  'Faster troubleshooting',
  'Improved system reliability',
  'Better user experience'
    ],
    useCases: [
  'Microservices applications,
,
  Cloud-native systems',
  'High-traffic websites',
  'Enterprise applications'
    ],
    technologies: [
  'Prometheus,
,
  Grafana',
  'ELK Stack',
  'Jaeger',
  'OpenTelemetry',
  'AlertManager'],
    link: 'https://ziontechgroup.com/services/observability-platform,
    icon:,
  👁️'
>>>>>>> main
  },

  // Additional Cutting-Edge IT Services
  {
<<<<<<< HEAD
    id: 'quantum-computing-services',
    name: 'Quantum Computing Solutions',
    category: 'it-services',
    description: 'Revolutionary quantum computing services for complex problem-solving, optimization, and cryptographic applications using cutting-edge quantum technology.',
    features: [
      'Quantum algorithm development',
      'Quantum optimization problems',
      'Cryptographic solutions',
      'Quantum machine learning',
      'Quantum simulation',
      'Quantum cloud access',
      'Expert consultation',
      'Performance benchmarking'
=======
    id: 'ai-generative-design,
    name:,
  AI Generative Design Platform',
    category: 'ai-services,
    description:,
  Revolutionary AI-powered generative design platform that creates optimized designs, prototypes, and solutions using advanced machine learning algorithms.',
    features: [
  'Automated design generation,
  'Multi-objective optimization',
  'Material and cost optimization',
  'Performance simulation',
  'Design iteration and refinement',
  '3D modeling and visualization',
  'Manufacturing feasibility analysis',
  'Patent and IP protection'
>>>>>>> main
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 500000,
      currency:,
  USD'
    },
    benefits: [
<<<<<<< HEAD
      'Exponential computational power',
      'Solve previously impossible problems',
      'Future-proof technology',
      'Competitive advantage'
    ],
    useCases: [
      'Financial modeling',
      'Drug discovery',
      'Cryptography',
      'Optimization problems'
    ],
    technologies: ['Quantum Computing', 'Qiskit', 'Cirq', 'Quantum Algorithms', 'Quantum ML'],
    link: 'https://ziontechgroup.com/services/quantum-computing',
    icon: '⚛️'
  },
  {
    id: 'edge-computing-infrastructure',
    name: 'Edge Computing Infrastructure',
    category: 'it-services',
    description: 'Comprehensive edge computing solutions for low-latency applications, IoT processing, and distributed computing infrastructure.',
    features: [
      'Edge server deployment',
      'IoT data processing',
      'Low-latency applications',
      'Distributed computing',
      'Edge AI deployment',
      'Network optimization',
      'Security implementation',
      'Monitoring and management'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-low latency processing',
      'Reduced bandwidth usage',
      'Improved reliability',
      'Real-time data processing'
    ],
    useCases: [
      'IoT applications',
      'Autonomous vehicles',
      'Smart cities',
      'Real-time analytics'
    ],
    technologies: ['Edge Computing', 'Kubernetes', 'Docker', 'IoT Platforms', 'Edge AI'],
    link: 'https://ziontechgroup.com/services/edge-computing',
    icon: '🌐'
  },
  {
    id: 'zero-trust-security-architecture',
    name: 'Zero Trust Security Architecture',
    category: 'it-services',
    description: 'Complete zero trust security implementation with identity verification, micro-segmentation, and continuous monitoring for maximum security.',
    features: [
      'Identity and access management',
      'Micro-segmentation',
      'Continuous verification',
      'Least privilege access',
      'Network security',
      'Device management',
      'Data protection',
      'Security monitoring'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security posture',
      'Reduced attack surface',
      'Compliance assurance',
      'Better threat detection'
    ],
    useCases: [
      'Enterprise organizations',
      'Government agencies',
      'Healthcare institutions',
      'Financial services'
    ],
    technologies: ['Zero Trust', 'Identity Management', 'Network Security', 'Security Monitoring'],
    link: 'https://ziontechgroup.com/services/zero-trust-security',
    icon: '🔐'
  },
  {
    id: '5g-network-implementation',
    name: '5G Network Implementation & Optimization',
    category: 'it-services',
    description: 'Advanced 5G network deployment and optimization services for ultra-fast connectivity, IoT support, and next-generation applications.',
    features: [
      '5G network planning',
      'Infrastructure deployment',
      'Network optimization',
      'IoT connectivity',
      'Edge computing integration',
      'Performance monitoring',
      'Security implementation',
      'Capacity planning'
=======
  'Reduce design time by 80%,
,
  Optimize for multiple criteria',
  'Innovative design solutions',
  'Cost-effective prototyping',
  'Competitive advantage'
    ],
    useCases: [
  'Product design and development,
,
  Architecture and construction',
  'Automotive industry',
  'Aerospace engineering'
    ],
    technologies: [
  'Generative AI,
,
  CAD Integration',
  'Simulation Software',
  'Machine Learning',
  '3D Modeling'],
    link: 'https://ziontechgroup.com/services/ai-generative-design,
    icon:,
  🎨'
  },
  {
    id: 'ai-autonomous-systems,
    name:,
  AI Autonomous Systems Development',
    category: 'ai-services,
    description:,
  Advanced AI autonomous systems development for self-driving vehicles, drones, robots, and smart infrastructure with real-time decision making capabilities.',
    features: [
  'Autonomous navigation systems,
  'Real-time decision making',
  'Sensor fusion and processing',
  'Path planning and optimization',
  'Obstacle detection and avoidance',
  'Machine learning model deployment',
  'Safety and reliability systems',
  'Regulatory compliance support'
>>>>>>> main
>>>>>>> main
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 1000000,
      currency:,
  USD'
    },
    benefits: [
<<<<<<< HEAD
      'Ultra-fast connectivity',
      'Massive IoT support',
      'Low latency applications',
      'Future-ready infrastructure'
    ],
    useCases: [
      'Telecommunications',
      'Smart cities',
      'Industrial IoT',
      'Autonomous systems'
    ],
    technologies: ['5G Networks', 'Network Optimization', 'IoT Connectivity', 'Edge Computing'],
    link: 'https://ziontechgroup.com/services/5g-network-implementation',
    icon: '📡'
  },
  {
    id: 'blockchain-infrastructure',
    name: 'Blockchain Infrastructure & Development',
    category: 'it-services',
    description: 'Comprehensive blockchain infrastructure services including private blockchain setup, smart contract development, and DeFi solutions.',
    features: [
      'Private blockchain setup',
      'Smart contract development',
      'DeFi protocol development',
      'NFT marketplace creation',
      'Blockchain integration',
      'Security auditing',
      'Performance optimization',
      'Maintenance and support'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
<<<<<<< HEAD
      'Faster drug development',
      'Reduced costs',
      'Higher success rates',
      'Personalized treatments'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Biotech startups',
      'Research institutions',
      'Clinical trials'
    ],
    technologies: ['Deep Learning', 'Molecular Modeling', 'Bioinformatics', 'Python', 'Quantum Computing'],
    link: 'https://ziontechgroup.com/services/ai-drug-discovery',
    icon: '💊'
  },
  {
    id: 'ai-climate-modeling',
    name: 'AI Climate Modeling & Prediction',
    category: 'ai-services',
    description: 'Advanced AI climate modeling solutions for weather prediction, climate analysis, and environmental monitoring.',
    features: [
      'Weather prediction models',
      'Climate change analysis',
      'Environmental monitoring',
      'Disaster prediction',
      'Carbon footprint analysis',
      'Renewable energy optimization',
      'Real-time data processing',
      'Visualization tools'
=======
      'Decentralized solutions',
      'Enhanced security',
      'Transparency and trust',
      'Innovation opportunities'
    ],
    useCases: [
      'Financial services',
      'Supply chain management',
      'Digital identity',
      'Decentralized applications'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'DeFi', 'Web3', 'Cryptocurrency'],
    link: 'https://ziontechgroup.com/services/blockchain-infrastructure',
    icon: '⛓️'
  },
  {
    id: 'ai-infrastructure-setup',
    name: 'AI Infrastructure & ML Platform Setup',
    category: 'it-services',
    description: 'Complete AI infrastructure setup including GPU clusters, ML platforms, data pipelines, and model deployment infrastructure.',
    features: [
      'GPU cluster setup',
      'ML platform deployment',
      'Data pipeline creation',
      'Model training infrastructure',
      'Model deployment platform',
      'MLOps implementation',
      'Monitoring and logging',
      'Auto-scaling configuration'
=======
  'Enhanced safety and efficiency,
,
  Reduced operational costs',
  '24/7 autonomous operation',
  'Improved performance',
  'Future-ready technology'
    ],
    useCases: [
  'Autonomous vehicles,
,
  Delivery drones',
  'Industrial robots',
  'Smart city infrastructure'
    ],
    technologies: [
  'Computer Vision,
,
  Reinforcement Learning',
  'ROS',
  'Edge Computing',
  'Sensor Fusion'],
    link: 'https://ziontechgroup.com/services/ai-autonomous-systems,
    icon:,
  🚗'
  },
  {
    id: 'ai-digital-twin,
    name:,
  AI Digital Twin Platform',
    category: 'ai-services,
    description:,
  Comprehensive AI-powered digital twin platform that creates virtual replicas of physical systems for simulation, monitoring, and optimization.',
    features: [
  'Real-time system modeling,
  'Predictive maintenance',
  'Performance optimization',
  'Simulation and testing',
  'IoT data integration',
  'Machine learning insights',
  '3D visualization',
  'Collaborative platform'
    ],
    pricing: {
      starter: 75000,
      professional: 225000,
      enterprise: 750000,
      currency:,
  USD'
    },
    benefits: [
  'Reduce maintenance costs by 40%,
,
  Improve system performance',
  'Predict and prevent failures',
  'Optimize operations',
  'Better decision making'
    ],
    useCases: [
  'Manufacturing facilities,
,
  Smart buildings',
  'Energy systems',
  'Transportation networks'
    ],
    technologies: [
  'IoT,
,
  Machine Learning',
  '3D Modeling',
  'Simulation',
  'Real-time Analytics'],
    link: 'https://ziontechgroup.com/services/ai-digital-twin,
    icon:,
  🔄'
  },
  {
    id: 'ai-meta-learning,
    name:,
  AI Meta-Learning Systems',
    category: 'ai-services,
    description:,
  Advanced meta-learning AI systems that can quickly adapt to new tasks and environments with minimal training data, enabling rapid AI deployment.',
    features: [
  'Few-shot learning capabilities,
  'Rapid task adaptation',
  'Transfer learning optimization',
  'Automated model selection',
  'Continuous learning systems',
  'Multi-task learning',
  'Domain adaptation',
  'Performance monitoring'
    ],
    pricing: {
      starter: 80000,
      professional: 240000,
      enterprise: 800000,
      currency:,
  USD'
    },
    benefits: [
  'Faster AI deployment,
,
  Reduced training data requirements',
  'Better generalization',
  'Adaptive AI systems',
  'Cost-effective AI solutions'
    ],
    useCases: [
  'Rapid prototyping,
,
  Multi-domain applications',
  'Resource-constrained environments',
  'Dynamic business requirements'
    ],
    technologies: [
  'Meta-Learning,
,
  Few-Shot Learning',
  'Transfer Learning',
  'Neural Architecture Search',
  'Python'],
    link: 'https://ziontechgroup.com/services/ai-meta-learning,
    icon:,
  🧠'
  },
  {
    id: 'ai-federated-learning,
    name:,
  AI Federated Learning Platform',
    category: 'ai-services,
    description:,
  Privacy-preserving federated learning platform that enables AI model training across distributed data sources without compromising data privacy.',
    features: [
  'Distributed model training,
  'Privacy-preserving algorithms',
  'Secure aggregation protocols',
  'Differential privacy',
  'Multi-party computation',
  'Model synchronization',
  'Performance monitoring',
  'Compliance management'
    ],
    pricing: {
      starter: 60000,
      professional: 180000,
      enterprise: 600000,
      currency:,
  USD'
    },
    benefits: [
  'Maintain data privacy,
,
  Collaborative AI development',
  'Regulatory compliance',
  'Distributed intelligence',
  'Reduced data transfer costs'
    ],
    useCases: [
  'Healthcare data analysis,
,
  Financial services',
  'Cross-organization collaboration',
  'Privacy-sensitive applications'
    ],
    technologies: [
  'Federated Learning,
,
  Cryptography',
  'Privacy-Preserving ML',
  'Distributed Systems',
  'Blockchain'],
    link: 'https://ziontechgroup.com/services/ai-federated-learning,
    icon:,
  🔐'
  },
  {
    id: 'ai-explainable-ai,
    name:,
  Explainable AI (XAI) Platform',
    category: 'ai-services,
    description:,
  Comprehensive explainable AI platform that provides transparent, interpretable, and trustworthy AI decision-making processes for critical applications.',
    features: [
  'Model interpretability tools,
  'Decision explanation generation',
  'Bias detection and mitigation',
  'Feature importance analysis',
  'Counterfactual explanations',
  'Trust scoring systems',
  'Regulatory compliance tools',
  'Human-AI collaboration interfaces'
>>>>>>> main
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 400000,
      currency:,
  USD'
    },
    benefits: [
<<<<<<< HEAD
      'Scalable AI infrastructure',
      'Faster model training',
      'Efficient model deployment',
      'Cost optimization'
    ],
    useCases: [
      'AI research organizations',
      'Machine learning teams',
      'Data science departments',
      'AI startups'
    ],
    technologies: ['AI Infrastructure', 'GPU Computing', 'MLOps', 'Kubernetes', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-infrastructure',
    icon: '🤖'
  },
  {
    id: 'cybersecurity-operations-center',
    name: 'Cybersecurity Operations Center (SOC)',
    category: 'it-services',
    description: '24/7 cybersecurity operations center with advanced threat detection, incident response, and security monitoring services.',
    features: [
      '24/7 security monitoring',
      'Threat detection and analysis',
      'Incident response',
      'Vulnerability management',
      'Security awareness training',
      'Compliance monitoring',
      'Threat intelligence',
      'Forensic analysis'
>>>>>>> main
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
<<<<<<< HEAD
      enterprise: 180000,
      currency: 'USD'
    },
    benefits: [
      'Accurate predictions',
      'Environmental protection',
      'Risk mitigation',
      'Sustainable solutions'
    ],
    useCases: [
      'Weather services',
      'Agriculture',
      'Energy companies',
      'Government agencies'
    ],
    technologies: ['Deep Learning', 'Climate Models', 'Satellite Data', 'Python', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-space-exploration',
    name: 'AI Space Exploration Solutions',
    category: 'ai-services',
    description: 'Cutting-edge AI solutions for space exploration, satellite operations, and astronomical research.',
    features: [
      'Satellite mission planning',
      'Space debris tracking',
      'Planetary exploration',
      'Astronomical data analysis',
      'Autonomous spacecraft control',
      'Mission optimization',
      'Data processing',
      'Research collaboration'
=======
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Proactive threat detection',
      'Rapid incident response',
      'Reduced security risks',
      'Compliance assurance'
    ],
    useCases: [
      'Enterprise organizations',
      'Government agencies',
      'Healthcare providers',
      'Financial institutions'
    ],
    technologies: ['SOC Operations', 'SIEM', 'Threat Detection', 'Incident Response', 'Security Analytics'],
    link: 'https://ziontechgroup.com/services/cybersecurity-soc',
    icon: '🛡️'
  },
  {
    id: 'hyperconverged-infrastructure',
    name: 'Hyperconverged Infrastructure (HCI)',
    category: 'it-services',
    description: 'Modern hyperconverged infrastructure solutions that combine compute, storage, and networking in a single, scalable platform.',
    features: [
      'HCI platform deployment',
      'Virtualization setup',
      'Storage optimization',
      'Network configuration',
      'Backup and disaster recovery',
      'Performance monitoring',
      'Capacity planning',
      'Migration services'
=======
  'Build trust in AI systems,
,
  Meet regulatory requirements',
  'Improve model performance',
  'Enable human oversight',
  'Reduce bias and discrimination'
    ],
    useCases: [
  'Financial decision making,
,
  Healthcare diagnostics',
  'Legal and compliance',
  'Critical infrastructure'
    ],
    technologies: [
  'Explainable AI,
,
  Interpretability Methods',
  'Bias Detection',
  'Fairness Metrics',
  'Python'],
    link: 'https://ziontechgroup.com/services/ai-explainable-ai,
    icon:,
  🔍'
  },
  {
    id: 'ai-edge-intelligence,
    name:,
  AI Edge Intelligence Platform',
    category: 'ai-services,
    description:,
  Advanced edge AI platform that brings intelligent processing to the edge of networks, enabling real-time AI inference with minimal latency.',
    features: [
  'Edge AI model deployment,
  'Real-time inference processing',
  'Model optimization for edge devices',
  'Distributed AI coordination',
  'Offline AI capabilities',
  'Edge-to-cloud synchronization',
  'Resource-constrained optimization',
  'Security and privacy protection'
>>>>>>> main
    ],
    pricing: {
      starter: 35000,
      professional: 105000,
      enterprise: 350000,
      currency:,
  USD'
    },
    benefits: [
<<<<<<< HEAD
      'Simplified infrastructure',
      'Improved scalability',
      'Reduced complexity',
      'Cost optimization'
    ],
    useCases: [
      'Data center modernization',
      'Virtual desktop infrastructure',
      'Cloud migration',
      'Disaster recovery'
    ],
    technologies: ['HCI', 'Virtualization', 'Software-Defined Storage', 'Network Virtualization'],
    link: 'https://ziontechgroup.com/services/hyperconverged-infrastructure',
    icon: '🏗️'
  },
  {
    id: 'iot-platform-development',
    name: 'IoT Platform Development & Management',
    category: 'it-services',
    description: 'Comprehensive IoT platform development including device management, data processing, analytics, and application development.',
    features: [
      'IoT device management',
      'Data collection and processing',
      'Real-time analytics',
      'Device connectivity',
      'Security implementation',
      'Scalable architecture',
      'Integration services',
      'Monitoring and maintenance'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Connected device ecosystem',
      'Real-time insights',
      'Operational efficiency',
      'Innovation opportunities'
    ],
    useCases: [
      'Smart manufacturing',
      'Connected vehicles',
      'Smart buildings',
      'Industrial automation'
    ],
    technologies: ['IoT Platforms', 'Edge Computing', 'Device Management', 'Data Analytics', 'IoT Security'],
    link: 'https://ziontechgroup.com/services/iot-platform-development',
    icon: '🌐'
  },

  // Additional Advanced AI Services
  {
    id: 'quantum-ai-algorithms',
    name: 'Quantum AI & Machine Learning',
    category: 'ai-services',
    description: 'Revolutionary quantum AI algorithms that leverage quantum computing for exponentially faster machine learning and optimization problems.',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization',
      'Quantum neural networks',
      'Quantum data processing',
      'Hybrid classical-quantum models',
      'Quantum feature selection',
      'Quantum clustering',
      'Performance benchmarking'
>>>>>>> main
    ],
    pricing: {
      starter: 75000,
      professional: 225000,
      enterprise: 750000,
      currency: 'USD'
    },
    benefits: [
<<<<<<< HEAD
      'Mission optimization',
      'Cost reduction',
      'Enhanced safety',
      'Scientific discovery'
    ],
    useCases: [
      'Space agencies',
      'Satellite companies',
      'Research institutions',
      'Private space companies'
    ],
    technologies: ['AI/ML', 'Computer Vision', 'Robotics', 'Python', 'Space Systems'],
    link: 'https://ziontechgroup.com/services/ai-space-exploration',
    icon: '🚀'
=======
      'Exponential speed improvements',
      'Solve complex optimization problems',
      'Breakthrough AI capabilities',
      'Future-proof technology'
    ],
    useCases: [
      'Drug discovery',
      'Financial modeling',
      'Supply chain optimization',
      'Cryptography'
    ],
    technologies: ['Quantum AI', 'Quantum Computing', 'Quantum ML', 'Qiskit', 'Cirq'],
    link: 'https://ziontechgroup.com/services/quantum-ai',
    icon: '⚛️'
>>>>>>> main
  },

  // NEW ADVANCED IT SERVICES
  {
<<<<<<< HEAD
    id: 'edge-computing-infrastructure',
    name: 'Edge Computing Infrastructure',
    category: 'it-services',
    description: 'Complete edge computing infrastructure design and implementation for low-latency, distributed applications.',
    features: [
      'Edge node deployment',
      'Distributed computing',
      'Low-latency optimization',
      'Data processing at edge',
      'Network optimization',
      'Security implementation',
      'Monitoring & management',
      'Scalable architecture'
=======
    id: 'autonomous-systems-ai',
    name: 'Autonomous Systems & Self-Driving AI',
    category: 'ai-services',
    description: 'Advanced AI systems for autonomous vehicles, drones, and robots with real-time decision making and environmental awareness.',
    features: [
      'Autonomous vehicle AI',
      'Drone navigation systems',
      'Robotic decision making',
      'Computer vision integration',
      'Sensor fusion',
      'Path planning algorithms',
      'Obstacle avoidance',
      'Real-time processing'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 1000000,
      currency: 'USD'
    },
    benefits: [
      'Fully autonomous operations',
      'Enhanced safety',
      'Operational efficiency',
      '24/7 availability'
    ],
    useCases: [
      'Autonomous vehicles',
      'Delivery drones',
      'Industrial robots',
      'Agricultural automation'
    ],
    technologies: ['Autonomous AI', 'Computer Vision', 'Sensor Fusion', 'Robotics', 'Real-time AI'],
    link: 'https://ziontechgroup.com/services/autonomous-systems-ai',
    icon: '🚗'
  },
  {
    id: 'ai-drug-discovery',
    name: 'AI Drug Discovery & Pharmaceutical Research',
    category: 'ai-services',
    description: 'Cutting-edge AI solutions for pharmaceutical research, drug discovery, and molecular design using advanced machine learning algorithms.',
    features: [
      'Molecular design and optimization',
      'Drug-target interaction prediction',
      'Toxicity prediction',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Drug repurposing',
      'Pharmacokinetic modeling',
      'Regulatory compliance support'
    ],
    pricing: {
      starter: 150000,
      professional: 450000,
      enterprise: 1500000,
      currency: 'USD'
    },
    benefits: [
      'Faster drug development',
      'Reduced research costs',
      'Higher success rates',
      'Personalized medicine'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Biotech startups',
      'Research institutions',
      'Clinical research organizations'
    ],
    technologies: ['Drug Discovery AI', 'Molecular AI', 'Bioinformatics', 'Deep Learning', 'Computational Biology'],
    link: 'https://ziontechgroup.com/services/ai-drug-discovery',
    icon: '💊'
  },
  {
    id: 'ai-climate-modeling',
    name: 'AI Climate Modeling & Environmental Analytics',
    category: 'ai-services',
    description: 'Advanced AI systems for climate modeling, environmental monitoring, and sustainability analytics to address climate change challenges.',
    features: [
      'Climate change prediction',
      'Environmental monitoring',
      'Carbon footprint analysis',
      'Renewable energy optimization',
      'Weather pattern analysis',
      'Ecosystem modeling',
      'Sustainability reporting',
      'Policy impact assessment'
>>>>>>> main
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
<<<<<<< HEAD
      'Reduced latency',
      'Improved performance',
      'Bandwidth optimization',
      'Enhanced reliability'
    ],
    useCases: [
      'IoT applications',
      'Autonomous vehicles',
      'Real-time analytics',
      'Gaming platforms'
    ],
    technologies: ['Kubernetes', 'Docker', 'Edge Computing', '5G', 'Cloud Computing'],
    link: 'https://ziontechgroup.com/services/edge-computing-infrastructure',
    icon: '⚡'
  },
  {
    id: 'zero-trust-security-architecture',
    name: 'Zero Trust Security Architecture',
    category: 'it-services',
    description: 'Complete zero trust security architecture implementation with continuous verification and micro-segmentation.',
    features: [
      'Identity verification',
      'Device trust assessment',
      'Network micro-segmentation',
      'Continuous monitoring',
      'Policy enforcement',
      'Threat detection',
      'Incident response',
      'Compliance reporting'
=======
      'Accurate climate predictions',
      'Environmental impact reduction',
      'Sustainability optimization',
      'Policy support'
    ],
    useCases: [
      'Government agencies',
      'Environmental organizations',
      'Energy companies',
      'Research institutions'
    ],
    technologies: ['Climate AI', 'Environmental Modeling', 'Sustainability Analytics', 'Climate Science'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-space-exploration',
    name: 'AI Space Exploration & Satellite Analytics',
    category: 'ai-services',
    description: 'Revolutionary AI solutions for space exploration, satellite data analysis, and space mission optimization using advanced machine learning.',
    features: [
      'Satellite data analysis',
      'Space mission planning',
      'Orbital mechanics optimization',
      'Space debris tracking',
      'Planetary exploration AI',
      'Space weather prediction',
      'Satellite constellation management',
      'Deep space communication'
=======
  'Ultra-low latency processing,
,
  Reduced bandwidth requirements',
  'Enhanced privacy and security',
  'Offline AI capabilities',
  'Cost-effective deployment'
    ],
    useCases: [
  'IoT devices and sensors,
,
  Autonomous vehicles',
  'Smart manufacturing',
  'Real-time surveillance'
    ],
    technologies: [
  'Edge Computing,
,
  Model Compression',
  'TensorRT',
  'OpenVINO',
  'Edge AI Frameworks'],
    link: 'https://ziontechgroup.com/services/ai-edge-intelligence,
    icon:,
  ⚡'
  },
  {
    id: 'ai-multimodal-learning,
    name:,
  AI Multimodal Learning Systems',
    category: 'ai-services,
    description:,
  Advanced multimodal AI systems that process and understand multiple data types (text, images, audio, video) simultaneously for comprehensive insights.',
    features: [
  'Cross-modal data processing,
  'Multimodal fusion techniques',
  'Cross-modal retrieval',
  'Multimodal generation',
  'Attention mechanisms',
  'Transfer learning across modalities',
  'Real-time multimodal analysis',
  'Custom multimodal models'
    ],
    pricing: {
      starter: 70000,
      professional: 210000,
      enterprise: 700000,
      currency:,
  USD'
    },
    benefits: [
  'Richer data understanding,
,
  Improved accuracy and robustness',
  'Comprehensive insights',
  'Better user experiences',
  'Advanced AI capabilities'
    ],
    useCases: [
  'Content analysis and moderation,
,
  Autonomous systems',
  'Healthcare diagnostics',
  'Creative AI applications'
    ],
    technologies: [
  'Multimodal AI,
,
  Transformer Models',
  'Cross-Modal Learning',
  'Computer Vision',
  'NLP'],
    link: 'https://ziontechgroup.com/services/ai-multimodal-learning,
    icon:,
  🎭'
  },
  {
    id: 'ai-neuromorphic-computing,
    name:,
  AI Neuromorphic Computing Solutions',
    category: 'ai-services,
    description:,
  Cutting-edge neuromorphic computing solutions that mimic brain-like processing for ultra-efficient AI computation and real-time learning capabilities.',
    features: [
  'Brain-inspired computing architectures,
  'Spiking neural networks',
  'Ultra-low power consumption',
  'Real-time learning and adaptation',
  'Event-driven processing',
  'Hardware-software co-design',
  'Scalable neuromorphic systems',
  'Research and development support'
>>>>>>> main
    ],
    pricing: {
      starter: 200000,
      professional: 600000,
      enterprise: 2000000,
      currency:,
  USD'
    },
    benefits: [
<<<<<<< HEAD
      'Enhanced space mission success',
      'Optimized satellite operations',
      'Improved space safety',
      'Advanced space exploration'
    ],
    useCases: [
      'Space agencies',
      'Satellite companies',
      'Space exploration missions',
      'Aerospace industry'
    ],
    technologies: ['Space AI', 'Satellite Analytics', 'Orbital Mechanics', 'Space Mission AI'],
    link: 'https://ziontechgroup.com/services/ai-space-exploration',
    icon: '🚀'
  },
  {
    id: 'ai-neuroscience-research',
    name: 'AI Neuroscience & Brain-Computer Interfaces',
    category: 'ai-services',
    description: 'Advanced AI solutions for neuroscience research, brain-computer interfaces, and neural signal processing for medical and research applications.',
    features: [
      'Neural signal processing',
      'Brain-computer interfaces',
      'Neural network modeling',
      'Cognitive function analysis',
      'Brain imaging analysis',
      'Neurofeedback systems',
      'Neural prosthetics',
      'Mental health monitoring'
    ],
    pricing: {
      starter: 120000,
      professional: 360000,
      enterprise: 1200000,
      currency: 'USD'
    },
    benefits: [
      'Breakthrough neuroscience insights',
      'Enhanced brain-computer interfaces',
      'Improved medical treatments',
      'Cognitive enhancement'
    ],
    useCases: [
      'Medical research',
      'Rehabilitation centers',
      'Mental health clinics',
      'Neuroscience laboratories'
    ],
    technologies: ['Neuroscience AI', 'Brain-Computer Interfaces', 'Neural Signal Processing', 'Medical AI'],
    link: 'https://ziontechgroup.com/services/ai-neuroscience',
    icon: '🧠'
  },
  {
    id: 'ai-cybersecurity-ai',
    name: 'AI-Powered Cybersecurity & Threat Intelligence',
    category: 'ai-services',
    description: 'Advanced AI-driven cybersecurity solutions with real-time threat detection, behavioral analysis, and automated incident response.',
    features: [
      'Real-time threat detection',
      'Behavioral anomaly detection',
      'Automated incident response',
      'Threat intelligence analysis',
      'Malware detection and analysis',
      'Network traffic analysis',
      'User behavior analytics',
      'Predictive threat modeling'
    ],
    pricing: {
      starter: 60000,
      professional: 180000,
      enterprise: 600000,
      currency: 'USD'
    },
    benefits: [
      'Proactive threat detection',
      'Reduced false positives',
      'Automated response',
      'Enhanced security posture'
    ],
    useCases: [
      'Enterprise security',
      'Government agencies',
      'Financial institutions',
      'Healthcare organizations'
    ],
    technologies: ['Cybersecurity AI', 'Threat Detection', 'Behavioral Analytics', 'Security AI'],
    link: 'https://ziontechgroup.com/services/ai-cybersecurity',
    icon: '🛡️'
  },
  {
    id: 'ai-financial-risk-modeling',
    name: 'AI Financial Risk Modeling & Fraud Detection',
    category: 'ai-services',
    description: 'Advanced AI solutions for financial risk assessment, fraud detection, and regulatory compliance in banking and financial services.',
    features: [
      'Real-time fraud detection',
      'Credit risk assessment',
      'Market risk modeling',
      'Regulatory compliance monitoring',
      'Anti-money laundering',
      'Transaction monitoring',
      'Risk scoring algorithms',
      'Compliance reporting'
    ],
    pricing: {
      starter: 80000,
      professional: 240000,
      enterprise: 800000,
      currency: 'USD'
    },
    benefits: [
      'Reduced financial losses',
      'Improved risk management',
      'Regulatory compliance',
      'Enhanced security'
    ],
    useCases: [
      'Banks and financial institutions',
      'Insurance companies',
      'Fintech startups',
      'Investment firms'
    ],
    technologies: ['Financial AI', 'Risk Modeling', 'Fraud Detection', 'Regulatory AI'],
    link: 'https://ziontechgroup.com/services/ai-financial-risk',
    icon: '💳'
  },
  {
    id: 'ai-personalized-medicine',
    name: 'AI Personalized Medicine & Genomic Analysis',
    category: 'ai-services',
    description: 'Revolutionary AI solutions for personalized medicine, genomic analysis, and precision healthcare using advanced machine learning.',
    features: [
      'Genomic data analysis',
      'Personalized treatment recommendations',
      'Drug response prediction',
      'Disease risk assessment',
      'Biomarker discovery',
      'Clinical decision support',
      'Population health analytics',
      'Precision medicine protocols'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 1000000,
      currency: 'USD'
    },
    benefits: [
      'Personalized treatment plans',
      'Improved patient outcomes',
      'Reduced healthcare costs',
      'Precision medicine'
    ],
    useCases: [
      'Hospitals and clinics',
      'Pharmaceutical companies',
      'Research institutions',
      'Healthcare providers'
    ],
    technologies: ['Personalized Medicine AI', 'Genomic Analysis', 'Precision Healthcare', 'Medical AI'],
    link: 'https://ziontechgroup.com/services/ai-personalized-medicine',
    icon: '🏥'
=======
  'Extremely low power consumption,
,
  Real-time learning capabilities',
  'Brain-like processing efficiency',
  'Future-proof technology',
  'Research and innovation edge'
    ],
    useCases: [
  'Edge AI applications,
,
  Autonomous systems',
  'IoT devices',
  'Research and development'
    ],
    technologies: [
  'Neuromorphic Hardware,
,
  Spiking Neural Networks',
  'Event-Driven Processing',
  'Low-Power AI',
  'Research Tools'],
    link: 'https://ziontechgroup.com/services/ai-neuromorphic-computing,
    icon:,
  🧬'
  },
  {
    id: 'ai-legal-contract-review-pro,
    name:,
  AI Legal Contract Review Pro',
    category: 'micro-saas,
    description:,
  Automated contract review micro SaaS with clause extraction, risk scoring, and redline suggestions for NDAs, MSAs, SOWs, and DPAs.',
    features: [
  'Clause extraction and tagging,
  'Risk and compliance scoring',
  'Auto redlines and suggestions',
  'Playbook-based review rules',
  'Version comparison and diff',
  'PII detection and masking',
  'Export to Word/PDF',
  'API for DMS/CLM integration'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 499,
      currency:,
  USD'
    },
    benefits: [
  'Reduce review time by 70%,
,
  Improve legal compliance',
  'Consistent playbook enforcement',
  'Lower outside counsel costs',
  'Faster deal cycles'
    ],
    useCases: [
  'Procurement contract intake,
,
  Sales contract review',
  'Vendor risk assessments',
  'Policy compliance checks'
    ],
    technologies: [
  'RAG,
,
  LLMs',
  'NLP',
  'Node.js',
  'Next.js',
  'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/ai-legal-contract-review-pro,
    icon:,
  ⚖️'
  },
  {
    id: 'ecommerce-repricing-optimizer,
    name:,
  eCommerce Repricing Optimizer',
    category: 'micro-saas,
    description:,
  Real-time automated repricing engine for marketplaces and storefronts to maximize buy-box win rate and margins.',
    features: [
  'Competitor price tracking,
  'Dynamic repricing rules',
  'MAP policy enforcement',
  'Cost and fee awareness',
  'Inventory-aware pricing',
  'A/B price testing',
  'Alerts and anomaly detection',
  'CSV and API imports'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 299,
      currency:,
  USD'
    },
    benefits: [
  'Increase buy-box wins,
,
  Grow gross margin',
  'Reduce manual pricing work',
  'Protect brand pricing policies'
    ],
    useCases: [
  'Amazon and Walmart marketplaces,
,
  Shopify and BigCommerce',
  'B2B price lists',
  'Promo and seasonal pricing'
    ],
    technologies: [
  'TypeScript,
,
  Next.js',
  'Queues',
  'Redis',
  'PostgreSQL',
  'Playwright'],
    link: 'https://ziontechgroup.com/services/ecommerce-repricing-optimizer,
    icon:,
  💹'
  },
  {
    id: 'customer-feedback-mining,
    name:,
  Customer Feedback Mining',
    category: 'micro-saas,
    description:,
  AI-driven feedback aggregation from reviews, tickets, and NPS to extract themes, sentiment, and product opportunities.',
    features: [
  'Multi-source ingestion,
  'Topic modeling and clustering',
  'Sentiment and emotion detection',
  'Feature request surfacing',
  'Churn risk signals',
  'Dashboards and alerts',
  'Exports to Jira/Linear',
  'Slack/MS Teams integration'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 249,
      currency:,
  USD'
    },
    benefits: [
  'Prioritize roadmap by data,
,
  Faster bug/issue detection',
  'Reduce churn with insights',
  'Amplify customer voice'
    ],
    useCases: [
  'Product ops and UX research,
,
  CS leadership reporting',
  'Marketing messaging testing',
  'C-suite customer health'
    ],
    technologies: [
  'Python,
,
  NLP',
  'Vector DB',
  'Next.js',
  'Airflow/Temporal'],
    link: 'https://ziontechgroup.com/services/customer-feedback-mining,
    icon:,
  🗣️'
  },
  {
    id: 'cloud-migration-accelerator,
    name:,
  Cloud Migration Accelerator',
    category: 'it-services,
    description:,
  Blueprint-driven assessment, landing zone setup, and phased migration to AWS/Azure/GCP with zero-trust security and FinOps.',
    features: [
  'TCO/ROI assessment,
  'Landing zone and guardrails',
  'Workload discovery and grouping',
  'Data migration and cutover',
  'Zero-downtime strategies',
  'Observability and SRE setup',
  'FinOps and cost optimization',
  'Knowledge transfer and docs'
>>>>>>> main
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency:,
  USD'
    },
    benefits: [
<<<<<<< HEAD
      'Enhanced security',
      'Reduced attack surface',
      'Compliance adherence',
      'Improved visibility'
    ],
    useCases: [
      'Enterprise networks',
      'Remote workforces',
      'Cloud environments',
      'Critical infrastructure'
    ],
    technologies: ['Zero Trust', 'SD-WAN', 'SASE', 'Identity Management', 'Security Tools'],
    link: 'https://ziontechgroup.com/services/zero-trust-security-architecture',
    icon: '🔐'
  },
  {
    id: 'quantum-safe-cryptography',
    name: 'Quantum-Safe Cryptography Implementation',
    category: 'it-services',
    description: 'Implementation of quantum-resistant cryptographic solutions to protect against future quantum computing threats.',
    features: [
      'Post-quantum algorithms',
      'Cryptographic migration',
      'Key management systems',
      'Compliance assessment',
      'Performance optimization',
      'Integration support',
      'Training & documentation',
      'Ongoing monitoring'
=======
  'Accelerate time-to-cloud,
,
  Reduce migration risk',
  'Improve security posture',
  'Lower run costs with FinOps'
    ],
    useCases: [
  'Data center exit,
,
  Modernize legacy apps',
  'Disaster recovery setup',
  'Global scalability needs'
    ],
    technologies: [
  'AWS,
,
  Azure',
  'GCP',
  'Terraform',
  'Kubernetes',
  'Datadog'],
    link: 'https://ziontechgroup.com/services/cloud-migration-accelerator,
    icon:,
  ☁️'
  },
  {
    id: 'kubernetes-platform-engineering,
    name:,
  Kubernetes Platform Engineering',
    category: 'it-services,
    description:,
  Enterprise-grade Kubernetes platform with golden paths, GitOps, self-service environments, and security by default.',
    features: [
  'Cluster design and hardening,
  'GitOps (Argo CD/Flux)',
  'Golden paths and templates',
  'Service mesh and policies',
  'CI/CD and artifact supply chain',
  'Observability stack',
  'Secrets and identity',
  'Runbooks and training'
>>>>>>> main
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 350000,
      currency: 'USD'
    },
    benefits: [
      'Future-proof security',
      'Quantum resistance',
      'Compliance readiness',
      'Long-term protection'
    ],
    useCases: [
      'Financial institutions',
      'Government agencies',
      'Healthcare systems',
      'Critical infrastructure'
    ],
    technologies: ['Post-Quantum Cryptography', 'NIST Standards', 'PKI', 'Hardware Security', 'Quantum Computing'],
    link: 'https://ziontechgroup.com/services/quantum-safe-cryptography',
    icon: '🔒'
  },
  {
    id: 'aiops-platform',
    name: 'AIOps Platform Implementation',
    category: 'it-services',
    description: 'Complete AIOps platform implementation for intelligent IT operations, monitoring, and automation.',
    features: [
      'Intelligent monitoring',
      'Anomaly detection',
      'Automated remediation',
      'Predictive analytics',
      'Root cause analysis',
      'Performance optimization',
      'Capacity planning',
      'Service management'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 180000,
      currency:,
  USD'
    },
    benefits: [
<<<<<<< HEAD
      'Proactive operations',
      'Reduced downtime',
      'Cost optimization',
      'Improved efficiency'
    ],
    useCases: [
      'Enterprise IT',
      'Cloud operations',
      'DevOps teams',
      'Service providers'
    ],
    technologies: ['AI/ML', 'Monitoring Tools', 'Automation', 'Analytics', 'Cloud Platforms'],
    link: 'https://ziontechgroup.com/services/aiops-platform',
    icon: '🤖'
  },
  {
    id: '5g-network-implementation',
    name: '5G Network Implementation',
    category: 'it-services',
    description: 'Complete 5G network design, implementation, and optimization for enterprise and carrier environments.',
    features: [
      'Network architecture design',
      '5G core implementation',
      'Edge computing integration',
      'Network slicing',
      'Performance optimization',
      'Security implementation',
      'Testing & validation',
      'Ongoing support'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 1000000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-low latency',
      'High bandwidth',
      'Massive connectivity',
      'Enhanced reliability'
    ],
    useCases: [
      'Telecommunications',
      'Smart cities',
      'Industrial IoT',
      'Autonomous systems'
    ],
    technologies: ['5G', 'Network Equipment', 'Edge Computing', 'SDN/NFV', 'Cloud Computing'],
    link: 'https://ziontechgroup.com/services/5g-network-implementation',
    icon: '📡'
  },
  {
    id: 'green-it-sustainability',
    name: 'Green IT & Sustainability Solutions',
    category: 'it-services',
    description: 'Comprehensive green IT solutions for sustainable technology operations and carbon footprint reduction.',
    features: [
      'Energy efficiency optimization',
      'Carbon footprint tracking',
      'Sustainable infrastructure',
      'Green cloud migration',
      'Waste reduction programs',
      'Renewable energy integration',
      'Compliance reporting',
      'Sustainability metrics'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Cost reduction',
      'Environmental responsibility',
      'Compliance adherence',
      'Brand reputation'
    ],
    useCases: [
      'Enterprise organizations',
      'Data centers',
      'Cloud providers',
      'Government agencies'
    ],
    technologies: ['Green Computing', 'Energy Management', 'Cloud Optimization', 'Sustainability Tools', 'Monitoring'],
    link: 'https://ziontechgroup.com/services/green-it-sustainability',
    icon: '🌱'
=======
  'Faster developer onboarding,
,
  Higher deployment velocity',
  'Improved reliability and SLOs',
  'Governance and compliance'
    ],
    useCases: [
  'Multi-tenant platforms,
,
  Hybrid/multi-cloud',
  'Regulated environments',
  'Edge and on-prem clusters'
    ],
    technologies: [
  'Kubernetes,
,
  Helm',
  'Argo CD',
  'Istio/Linkerd',
  'OPA/Gatekeeper'],
    link: 'https://ziontechgroup.com/services/kubernetes-platform-engineering,
    icon:,
  🐳'
  },
  {
    id: 'soc2-compliance-implementation,
    name:,
  SOC 2 Compliance Implementation',
    category: 'it-services,
    description:,
  End-to-end SOC 2 readiness, controls implementation, evidence automation, and audit support.',
    features: [
  'Gap assessment and roadmap,
  'Policy and control library',
  'Evidence automation',
  'Vulnerability management',
  'Security awareness training',
  'Risk register and treatments',
  'Vendor risk management',
  'Audit coordination'
    ],
    pricing: {
      starter: 8000,
      professional: 35000,
      enterprise: 120000,
      currency:,
  USD'
    },
    benefits: [
  'Faster audit readiness,
,
  Reduced manual evidence work',
  'Improved security hygiene',
  'Stronger customer trust'
    ],
    useCases: [
  'Pre-seed to enterprise SaaS,
,
  Healthcare and fintech',
  'B2B vendor due diligence',
  'Continuous compliance'
    ],
    technologies: [
  'GRC Platforms,
,
  CIS Benchmarks',
  'SIEM',
  'CSPM',
  'IaC'],
    link: 'https://ziontechgroup.com/services/soc2-compliance-implementation,
    icon:,
  🔒'
  },
  {
    id: 'ragt-knowledge-bot,
    name:,
  RAG Knowledge Bot',
    category: 'ai-services,
    description:,
  Retrieval-augmented generation assistant grounded in your docs, tickets, and code with robust guardrails and analytics.',
    features: [
  'Multi-repo document ingestion,
  'Embeddings and vector search',
  'Conversation memory and tools',
  'Citations and source tracing',
  'Quality and safety guardrails',
  'Analytics and feedback loops',
  'SSO and role permissions',
  'SDK and API access'
    ],
    pricing: {
      starter: 7000,
      professional: 18000,
      enterprise: 120000,
      currency:,
  USD'
    },
    benefits: [
  'Reduce support tickets,
,
  Accelerate onboarding',
  'Improve answer accuracy',
  'Protect IP and privacy'
    ],
    useCases: [
  'Internal IT helpdesk,
,
  Customer self-service',
  'Sales and SE enablement',
  'Policy and compliance Q&A'
    ],
    technologies: [
  'RAG,
,
  Vector DB',
  'OpenAI/Azure OpenAI',
  'LangChain',
  'Next.js'],
    link: 'https://ziontechgroup.com/services/rag-knowledge-bot,
    icon:,
  🤖'
  },
  {
    id: 'computer-vision-inspection,
    name:,
  Computer Vision Quality Inspection',
    category: 'ai-services,
    description:,
  High-accuracy vision models for defect detection, part counting, and assembly verification on the factory line.',
    features: [
  'Dataset labeling workflows,
  'Model training and evaluation',
  'On-edge inference optimization',
  'Active learning loops',
  'Real-time alarms and APIs',
  'Lifecycle MLOps',
  'Integration with PLC/SCADA',
  'Secure on-prem deployment'
    ],
    pricing: {
      starter: 20000,
      professional: 90000,
      enterprise: 400000,
      currency:,
  USD'
    },
    benefits: [
  'Reduce scrap and rework,
,
  Increase throughput and OEE',
  'Consistent quality at scale',
  'Lower inspection costs'
    ],
    useCases: [
  'Electronics assembly,
,
  Automotive parts',
  'Pharmaceutical packaging',
  'Food and beverage lines'
    ],
    technologies: [
  'PyTorch,
,
  ONNX/TensorRT',
  'Edge AI',
  'OpenCV',
  'MLOps'],
    link: 'https://ziontechgroup.com/services/computer-vision-inspection,
    icon:,
  📷'
  },
  {
    id: 'ai-sales-forecasting-suite,
    name:,
  AI Sales Forecasting Suite',
    category: 'ai-services,
    description:,
  Probabilistic demand and revenue forecasting with scenario planning and driver analysis for sales and operations teams.',
    features: [
  'Time-series feature store,
  'Hierarchical forecasting',
  'Causal and driver analysis',
  'Promotion and seasonality modeling',
  'Scenario planning and what-ifs',
  'BI dashboards and exports',
  'Data quality and lineage',
  'API for ERP/CRM integration'
    ],
    pricing: {
      starter: 10000,
      professional: 35000,
      enterprise: 150000,
      currency:,
  USD'
    },
    benefits: [
  'Improve forecast accuracy,
,
  Optimize inventory levels',
  'Increase service levels',
  'Align finance and supply chain'
    ],
    useCases: [
  'CPG demand planning,
,
  SaaS ARR forecasting',
  'Retail allocation',
  'Manufacturing S&OP'
    ],
<<<<<<< HEAD
    technologies: ['Python', 'Prophet', 'NeuralForecast', 'dbt', 'Snowflake/BigQuery'],
    link: 'https://ziontechgroup.com/services/ai-sales-forecasting-suite',
    icon: '📈'
  },
  // New Innovative AI Services
  {
    id: 'ai-customer-sentiment-analyzer',
    name: 'AI Customer Sentiment Analyzer Pro',
    category: 'ai-services',
    description: 'Advanced AI-powered sentiment analysis platform that monitors customer feedback across all channels in real-time, providing actionable insights for customer experience optimization.',
    features: [
      'Real-time sentiment monitoring',
      'Multi-channel data integration (social media, reviews, surveys, support tickets)',
      'Emotion detection and classification',
      'Trend analysis and predictive insights',
      'Automated alert system for negative sentiment spikes',
      'Custom dashboard with KPI tracking',
      'API integration with CRM systems',
      'White-label reporting capabilities'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Improve customer satisfaction by 40%',
      'Reduce churn through early warning system',
      'Enhance brand reputation management',
      'Data-driven customer experience decisions',
      'Competitive advantage through sentiment insights'
    ],
    useCases: [
      'Brand reputation monitoring',
      'Product feedback analysis',
      'Customer service optimization',
      'Marketing campaign effectiveness',
      'Competitor sentiment tracking'
    ],
    technologies: ['OpenAI GPT-4', 'BERT', 'Python', 'React', 'Node.js', 'MongoDB', 'Redis'],
    link: 'https://ziontechgroup.com/services/ai-customer-sentiment-analyzer',
    icon: '😊'
  },
  {
    id: 'ai-automated-email-followup',
    name: 'AI Automated Email Follow-up System',
    category: 'micro-saas',
    description: 'Intelligent email automation platform that creates personalized follow-up sequences based on recipient behavior, industry best practices, and AI-optimized timing.',
    features: [
      'Behavior-triggered email sequences',
      'AI-powered personalization engine',
      'Optimal send time prediction',
      'A/B testing for subject lines and content',
      'Multi-channel follow-up (email, LinkedIn, SMS)',
      'CRM integration and lead scoring',
      'Compliance with GDPR and CAN-SPAM',
      'Advanced analytics and ROI tracking'
    ],
    pricing: {
      starter: 49,
      professional: 149,
      enterprise: 399,
      currency: 'USD'
    },
    benefits: [
      'Increase email open rates by 60%',
      'Automate 80% of follow-up activities',
      'Improve lead conversion by 35%',
      'Save 10+ hours per week on manual follow-ups',
      'Scale personalized outreach efforts'
    ],
    useCases: [
      'Sales prospecting and nurturing',
      'Customer onboarding sequences',
      'Event follow-up campaigns',
      'Abandoned cart recovery',
      'Lead qualification automation'
    ],
    technologies: ['OpenAI GPT-4', 'SendGrid', 'HubSpot API', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/ai-automated-email-followup',
    icon: '📧'
  },
  {
    id: 'ai-seo-content-optimizer',
    name: 'AI SEO Content Optimizer',
    category: 'ai-services',
    description: 'Advanced AI-powered SEO optimization platform that analyzes and optimizes content for search engines, providing real-time suggestions and competitive analysis.',
    features: [
      'Real-time SEO scoring and recommendations',
      'Keyword research and competitor analysis',
      'Content optimization suggestions',
      'Technical SEO audit and fixes',
      'Local SEO optimization',
      'Schema markup generation',
      'Performance tracking and reporting',
      'Multi-language SEO support'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 599,
      currency: 'USD'
    },
    benefits: [
      'Increase organic traffic by 150%',
      'Improve search rankings significantly',
      'Reduce SEO management time by 70%',
      'Stay ahead of algorithm updates',
      'Competitive advantage in search results'
    ],
    useCases: [
      'Website SEO optimization',
      'Content marketing campaigns',
      'E-commerce product optimization',
      'Local business visibility',
      'Technical SEO audits'
    ],
    technologies: ['OpenAI GPT-4', 'Google Search Console API', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/ai-seo-content-optimizer',
    icon: '🔍'
  },
  {
    id: 'ai-customer-support-automation',
    name: 'AI Customer Support Automation Platform',
    category: 'ai-services',
    description: 'Comprehensive AI-powered customer support platform with intelligent chatbots, ticket routing, and automated resolution capabilities.',
    features: [
      'Intelligent chatbot with natural language processing',
      'Automated ticket classification and routing',
      'Knowledge base integration and auto-updates',
      'Multi-language support (50+ languages)',
      'Sentiment analysis and escalation triggers',
      'Integration with popular CRM systems',
      'Real-time analytics and performance metrics',
      'Custom workflow automation'
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 80%',
      'Increase customer satisfaction scores',
      '24/7 automated support availability',
      'Scale support operations efficiently'
    ],
    useCases: [
      'E-commerce customer support',
      'SaaS product support',
      'Enterprise helpdesk automation',
      'Multi-channel support management',
      'Customer onboarding assistance'
    ],
    technologies: ['OpenAI GPT-4', 'Dialogflow', 'React', 'Node.js', 'MongoDB', 'WebSocket'],
    link: 'https://ziontechgroup.com/services/ai-customer-support-automation',
    icon: '🤖'
  },
  {
    id: 'ai-affiliate-marketing-tracker',
    name: 'AI Affiliate Marketing Tracker',
    category: 'micro-saas',
    description: 'Advanced affiliate marketing platform with AI-powered fraud detection, performance optimization, and automated commission management.',
    features: [
      'Real-time affiliate performance tracking',
      'AI-powered fraud detection and prevention',
      'Automated commission calculations and payments',
      'Cross-device attribution tracking',
      'Custom landing page builder',
      'Advanced analytics and reporting',
      'API integration with e-commerce platforms',
      'Compliance with affiliate marketing regulations'
    ],
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 799,
      currency: 'USD'
    },
    benefits: [
      'Increase affiliate program ROI by 40%',
      'Reduce fraud losses by 85%',
      'Automate 90% of affiliate management tasks',
      'Improve affiliate partner relationships',
      'Scale affiliate marketing efforts'
    ],
    useCases: [
      'E-commerce affiliate programs',
      'SaaS referral programs',
      'Content creator partnerships',
      'Influencer marketing campaigns',
      'Multi-brand affiliate management'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/ai-affiliate-marketing-tracker',
    icon: '🤝'
  },
  {
    id: 'ai-project-management-assistant',
    name: 'AI Project Management Assistant',
    category: 'micro-saas',
    description: 'Intelligent project management platform with AI-powered task prioritization, resource allocation, and risk prediction capabilities.',
    features: [
      'AI-powered task prioritization and scheduling',
      'Intelligent resource allocation and workload balancing',
      'Risk prediction and mitigation suggestions',
      'Automated progress tracking and reporting',
      'Team collaboration and communication tools',
      'Integration with popular project management tools',
      'Custom workflow automation',
      'Advanced analytics and insights'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Improve project delivery time by 30%',
      'Reduce project risks by 50%',
      'Optimize resource utilization',
      'Enhance team productivity',
      'Better project visibility and control'
    ],
    useCases: [
      'Software development projects',
      'Marketing campaign management',
      'Event planning and execution',
      'Construction project management',
      'Consulting project delivery'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Machine Learning', 'WebSocket', 'Calendar APIs'],
    link: 'https://ziontechgroup.com/services/ai-project-management-assistant',
    icon: '📋'
  },
  // New IT Services
  {
    id: 'cloud-cost-optimization-suite',
    name: 'Cloud Cost Optimization Suite',
    category: 'it-services',
    description: 'Comprehensive cloud cost management platform that uses AI to analyze usage patterns, identify waste, and optimize cloud spending across AWS, Azure, and GCP.',
    features: [
      'Multi-cloud cost analysis and optimization',
      'AI-powered usage pattern analysis',
      'Automated rightsizing recommendations',
      'Reserved instance and savings plan optimization',
      'Real-time cost monitoring and alerts',
      'Budget management and forecasting',
      'Cost allocation and chargeback reporting',
      'Integration with cloud provider APIs'
    ],
    pricing: {
      starter: 500,
      professional: 2000,
      enterprise: 10000,
      currency: 'USD'
    },
    benefits: [
      'Reduce cloud costs by 30-50%',
      'Eliminate waste and unused resources',
      'Optimize resource utilization',
      'Improve budget predictability',
      'Automate cost management processes'
    ],
    useCases: [
      'Enterprise cloud cost management',
      'Multi-cloud environment optimization',
      'Startup cost optimization',
      'DevOps cost monitoring',
      'Financial planning and budgeting'
    ],
    technologies: ['Python', 'AWS Cost Explorer API', 'Azure Cost Management', 'GCP Billing API', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/cloud-cost-optimization-suite',
    icon: '💰'
  },
  {
    id: 'zero-trust-security-platform',
    name: 'Zero Trust Security Platform',
    category: 'it-services',
    description: 'Comprehensive zero trust security solution that implements identity verification, device trust, and network segmentation for enterprise environments.',
    features: [
      'Identity and access management (IAM)',
      'Device trust and compliance verification',
      'Network segmentation and micro-segmentation',
      'Continuous security monitoring',
      'Privileged access management (PAM)',
      'Multi-factor authentication (MFA)',
      'Security policy enforcement',
      'Incident response automation'
    ],
    pricing: {
      starter: 2000,
      professional: 8000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Reduce security breaches by 80%',
      'Comply with industry regulations',
      'Improve security posture',
      'Simplify access management',
      'Enable secure remote work'
    ],
    useCases: [
      'Enterprise security transformation',
      'Remote workforce security',
      'Compliance and regulatory requirements',
      'Cloud migration security',
      'Merger and acquisition security'
    ],
    technologies: ['Okta', 'Azure AD', 'AWS IAM', 'Cisco', 'Palo Alto', 'Python', 'React'],
    link: 'https://ziontechgroup.com/services/zero-trust-security-platform',
    icon: '🔒'
  },
  {
    id: 'ai-devops-automation-platform',
    name: 'AI DevOps Automation Platform',
    category: 'it-services',
    description: 'Intelligent DevOps platform that automates CI/CD pipelines, infrastructure provisioning, and deployment processes using AI and machine learning.',
    features: [
      'AI-powered CI/CD pipeline optimization',
      'Automated infrastructure provisioning',
      'Intelligent deployment strategies',
      'Performance monitoring and optimization',
      'Automated testing and quality gates',
      'Infrastructure as Code (IaC) management',
      'Container orchestration and management',
      'Disaster recovery automation'
    ],
    pricing: {
      starter: 1000,
      professional: 4000,
      enterprise: 15000,
      currency: 'USD'
    },
    benefits: [
      'Reduce deployment time by 70%',
      'Improve deployment success rates',
      'Minimize human errors',
      'Scale DevOps operations',
      'Optimize resource utilization'
    ],
    useCases: [
      'Software development automation',
      'Cloud infrastructure management',
      'Microservices deployment',
      'Legacy system modernization',
      'Multi-environment management'
    ],
    technologies: ['Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'Ansible', 'Python', 'React'],
    link: 'https://ziontechgroup.com/services/ai-devops-automation-platform',
    icon: '⚙️'
=======
    technologies: [
  'Python,
,
  Prophet',
  'NeuralForecast',
  'dbt',
  'Snowflake/BigQuery'],
    link: 'https://ziontechgroup.com/services/ai-sales-forecasting-suite,
    icon:,
  📈'
>>>>>>> origin/main
>>>>>>> main
>>>>>>> main
  }
=======
  // Additional Cutting-Edge AI Services;
  {;
    id: "ai-generative-design",;
    name: "AI Generative Design Platform",;
    category: "ai-services",;
    description: "Revolutionary AI-powered generative design platform that creates optimized designs, prototypes, and solutions using advanced machine learning algorithms.",;
    features: [;
      "Automated design generation",;
      "Multi-objective optimization",;
      "Material and cost optimization",;
      "Performance simulation",;
      "Design iteration and refinement",;
      "3D modeling and visualization",;
      "Manufacturing feasibility analysis",;
      "Patent and IP protection";
    ],;
    pricing: {;
      starter: 50000,;
      professional: 150000,;
      enterprise: 500000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce design time by 80%",;
      "Optimize for multiple criteria",;
      "Innovative design solutions",;
      "Cost-effective prototyping",;
      "Competitive advantage";
    ],;
    useCases: [;
      "Product design and development",;
      "Architecture and construction",;
      "Automotive industry",;
      "Aerospace engineering";
    ],;
    technologies: ["Generative AI", "CAD Integration", "Simulation Software", "Machine Learning", "3D Modeling"],;
    link: "https://ziontechgroup.com/services/ai-generative-design",;
    icon: "🎨";,
},;
  {;
    id: "ai-autonomous-systems",;
    name: "AI Autonomous Systems Development",;
    category: "ai-services",;
    description: "Advanced AI autonomous systems development for self-driving vehicles, drones, robots, and smart infrastructure with real-time decision making capabilities.",;
    features: [;
      "Autonomous navigation systems",;
      "Real-time decision making",;
      "Sensor fusion and processing",;
      "Path planning and optimization",;
      "Obstacle detection and avoidance",;
      "Machine learning model deployment",;
      "Safety and reliability systems",;
      "Regulatory compliance support";
    ],;
    pricing: {;
      starter: 100000,;
      professional: 300000,;
      enterprise: 1000000,;
      currency: "USD";,
},;
    benefits: [;
      "Enhanced safety and efficiency",;
      "Reduced operational costs",;
      "24/7 autonomous operation",;
      "Improved performance",;
      "Future-ready technology";
    ],;
    useCases: [;
      "Autonomous vehicles",;
      "Delivery drones",;
      "Industrial robots",;
      "Smart city infrastructure";
    ],;
    technologies: ["Computer Vision", "Reinforcement Learning", "ROS", "Edge Computing", "Sensor Fusion"],;
    link: "https://ziontechgroup.com/services/ai-autonomous-systems",;
    icon: "🚗";,
},;
  {;
    id: "ai-digital-twin",;
    name: "AI Digital Twin Platform",;
    category: "ai-services",;
    description: "Comprehensive AI-powered digital twin platform that creates virtual replicas of physical systems for simulation, monitoring, and optimization.",;
    features: [;
      "Real-time system modeling",;
      "Predictive maintenance",;
      "Performance optimization",;
      "Simulation and testing",;
      "IoT data integration",;
      "Machine learning insights",;
      "3D visualization",;
      "Collaborative platform";
    ],;
    pricing: {;
      starter: 75000,;
      professional: 225000,;
      enterprise: 750000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce maintenance costs by 40%",;
      "Improve system performance",;
      "Predict and prevent failures",;
      "Optimize operations",;
      "Better decision making";
    ],;
    useCases: [;
      "Manufacturing facilities",;
      "Smart buildings",;
      "Energy systems",;
      "Transportation networks";
    ],;
    technologies: ["IoT", "Machine Learning", "3D Modeling", "Simulation", "Real-time Analytics"],;
    link: "https://ziontechgroup.com/services/ai-digital-twin",;
    icon: "🔄";,
},;
  {;
    id: "ai-meta-learning",;
    name: "AI Meta-Learning Systems",;
    category: "ai-services",;
    description: "Advanced meta-learning AI systems that can quickly adapt to new tasks and environments with minimal training data, enabling rapid AI deployment.",;
    features: [;
      "Few-shot learning capabilities",;
      "Rapid task adaptation",;
      "Transfer learning optimization",;
      "Automated model selection",;
      "Continuous learning systems",;
      "Multi-task learning",;
      "Domain adaptation",;
      "Performance monitoring";
    ],;
    pricing: {;
      starter: 80000,;
      professional: 240000,;
      enterprise: 800000,;
      currency: "USD";,
},;
    benefits: [;
      "Faster AI deployment",;
      "Reduced training data requirements",;
      "Better generalization",;
      "Adaptive AI systems",;
      "Cost-effective AI solutions";
    ],;
    useCases: [;
      "Rapid prototyping",;
      "Multi-domain applications",;
      "Resource-constrained environments",;
      "Dynamic business requirements";
    ],;
    technologies: ["Meta-Learning", "Few-Shot Learning", "Transfer Learning", "Neural Architecture Search", "Python"],;
    link: "https://ziontechgroup.com/services/ai-meta-learning",;
    icon: "🧠";,
},;
  {;
    id: "ai-federated-learning",;
    name: "AI Federated Learning Platform",;
    category: "ai-services",;
    description: "Privacy-preserving federated learning platform that enables AI model training across distributed data sources without compromising data privacy.",;
    features: [;
      "Distributed model training",;
      "Privacy-preserving algorithms",;
      "Secure aggregation protocols",;
      "Differential privacy",;
      "Multi-party computation",;
      "Model synchronization",;
      "Performance monitoring",;
      "Compliance management";
    ],;
    pricing: {;
      starter: 60000,;
      professional: 180000,;
      enterprise: 600000,;
      currency: "USD";,
},;
    benefits: [;
      "Maintain data privacy",;
      "Collaborative AI development",;
      "Regulatory compliance",;
      "Distributed intelligence",;
      "Reduced data transfer costs";
    ],;
    useCases: [;
      "Healthcare data analysis",;
      "Financial services",;
      "Cross-organization collaboration",;
      "Privacy-sensitive applications";
    ],;
    technologies: ["Federated Learning", "Cryptography", "Privacy-Preserving ML", "Distributed Systems", "Blockchain"],;
    link: "https://ziontechgroup.com/services/ai-federated-learning",;
    icon: "🔐";,
},;
  {;
    id: "ai-explainable-ai",;
    name: "Explainable AI (XAI) Platform",;
    category: "ai-services",;
    description: "Comprehensive explainable AI platform that provides transparent, interpretable, and trustworthy AI decision-making processes for critical applications.",;
    features: [;
      "Model interpretability tools",;
      "Decision explanation generation",;
      "Bias detection and mitigation",;
      "Feature importance analysis",;
      "Counterfactual explanations",;
      "Trust scoring systems",;
      "Regulatory compliance tools",;
      "Human-AI collaboration interfaces";
    ],;
    pricing: {;
      starter: 40000,;
      professional: 120000,;
      enterprise: 400000,;
      currency: "USD";,
},;
    benefits: [;
      "Build trust in AI systems",;
      "Meet regulatory requirements",;
      "Improve model performance",;
      "Enable human oversight",;
      "Reduce bias and discrimination";
    ],;
    useCases: [;
      "Financial decision making",;
      "Healthcare diagnostics",;
      "Legal and compliance",;
      "Critical infrastructure";
    ],;
    technologies: ["Explainable AI", "Interpretability Methods", "Bias Detection", "Fairness Metrics", "Python"],;
    link: "https://ziontechgroup.com/services/ai-explainable-ai",;
    icon: "🔍";,
},;
  {;
    id: "ai-edge-intelligence",;
    name: "AI Edge Intelligence Platform",;
    category: "ai-services",;
    description: "Advanced edge AI platform that brings intelligent processing to the edge of networks, enabling real-time AI inference with minimal latency.",;
    features: [;
      "Edge AI model deployment",;
      "Real-time inference processing",;
      "Model optimization for edge devices",;
      "Distributed AI coordination",;
      "Offline AI capabilities",;
      "Edge-to-cloud synchronization",;
      "Resource-constrained optimization",;
      "Security and privacy protection";
    ],;
    pricing: {;
      starter: 35000,;
      professional: 105000,;
      enterprise: 350000,;
      currency: "USD";,
},;
    benefits: [;
      "Ultra-low latency processing",;
      "Reduced bandwidth requirements",;
      "Enhanced privacy and security",;
      "Offline AI capabilities",;
      "Cost-effective deployment";
    ],;
    useCases: [;
      "IoT devices and sensors",;
      "Autonomous vehicles",;
      "Smart manufacturing",;
      "Real-time surveillance";
    ],;
    technologies: ["Edge Computing", "Model Compression", "TensorRT", "OpenVINO", "Edge AI Frameworks"],;
    link: "https://ziontechgroup.com/services/ai-edge-intelligence",;
    icon: "⚡";,
},;
  {;
    id: "ai-multimodal-learning",;
    name: "AI Multimodal Learning Systems",;
    category: "ai-services",;
    description: "Advanced multimodal AI systems that process and understand multiple data types (text, images, audio, video) simultaneously for comprehensive insights.",;
    features: [;
      "Cross-modal data processing",;
      "Multimodal fusion techniques",;
      "Cross-modal retrieval",;
      "Multimodal generation",;
      "Attention mechanisms",;
      "Transfer learning across modalities",;
      "Real-time multimodal analysis",;
      "Custom multimodal models";
    ],;
    pricing: {;
      starter: 70000,;
      professional: 210000,;
      enterprise: 700000,;
      currency: "USD";,
},;
    benefits: [;
      "Richer data understanding",;
      "Improved accuracy and robustness",;
      "Comprehensive insights",;
      "Better user experiences",;
      "Advanced AI capabilities";
    ],;
    useCases: [;
      "Content analysis and moderation",;
      "Autonomous systems",;
      "Healthcare diagnostics",;
      "Creative AI applications";
    ],;
    technologies: ["Multimodal AI", "Transformer Models", "Cross-Modal Learning", "Computer Vision", "NLP"],;
    link: "https://ziontechgroup.com/services/ai-multimodal-learning",;
    icon: "🎭";,
},;
  {;
    id: "ai-neuromorphic-computing",;
    name: "AI Neuromorphic Computing Solutions",;
    category: "ai-services",;
    description: "Cutting-edge neuromorphic computing solutions that mimic brain-like processing for ultra-efficient AI computation and real-time learning capabilities.",;
    features: [;
      "Brain-inspired computing architectures",;
      "Spiking neural networks",;
      "Ultra-low power consumption",;
      "Real-time learning and adaptation",;
      "Event-driven processing",;
      "Hardware-software co-design",;
      "Scalable neuromorphic systems",;
      "Research and development support";
    ],;
    pricing: {;
      starter: 200000,;
      professional: 600000,;
      enterprise: 2000000,;
      currency: "USD";,
},;
    benefits: [;
      "Extremely low power consumption",;
      "Real-time learning capabilities",;
      "Brain-like processing efficiency",;
      "Future-proof technology",;
      "Research and innovation edge";
    ],;
    useCases: [;
      "Edge AI applications",;
      "Autonomous systems",;
      "IoT devices",;
      "Research and development";
    ],;
    technologies: ["Neuromorphic Hardware", "Spiking Neural Networks", "Event-Driven Processing", "Low-Power AI", "Research Tools"],;
    link: "https://ziontechgroup.com/services/ai-neuromorphic-computing",;
    icon: "🧬";,
},;
  {;
    id: "ai-legal-contract-review-pro",;
    name: "AI Legal Contract Review Pro",;
    category: "micro-saas",;
    description: "Automated contract review micro SaaS with clause extraction, risk scoring, and redline suggestions for NDAs, MSAs, SOWs, and DPAs.",;
    features: [;
      "Clause extraction and tagging",;
      "Risk and compliance scoring",;
      "Auto redlines and suggestions",;
      "Playbook-based review rules",;
      "Version comparison and diff",;
      "PII detection and masking",;
      "Export to Word/PDF",;
      "API for DMS/CLM integration";
    ],;
    pricing: {;
      starter: 49,;
      professional: 129,;
      enterprise: 499,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce review time by 70%",;
      "Improve legal compliance",;
      "Consistent playbook enforcement",;
      "Lower outside counsel costs",;
      "Faster deal cycles";
    ],;
    useCases: [;
      "Procurement contract intake",;
      "Sales contract review",;
      "Vendor risk assessments",;
      "Policy compliance checks";
    ],;
    technologies: ["RAG", "LLMs", "NLP", "Node.js", "Next.js", "PostgreSQL"],;
    link: "https://ziontechgroup.com/services/ai-legal-contract-review-pro",;
    icon: "⚖️";,
},;
  {;
    id: "ecommerce-repricing-optimizer",;
    name: "eCommerce Repricing Optimizer",;
    category: "micro-saas",;
    description: "Real-time automated repricing engine for marketplaces and storefronts to maximize buy-box win rate and margins.",;
    features: [;
      "Competitor price tracking",;
      "Dynamic repricing rules",;
      "MAP policy enforcement",;
      "Cost and fee awareness",;
      "Inventory-aware pricing",;
      "A/B price testing",;
      "Alerts and anomaly detection",;
      "CSV and API imports";
    ],;
    pricing: {;
      starter: 39,;
      professional: 99,;
      enterprise: 299,;
      currency: "USD";,
},;
    benefits: [;
      "Increase buy-box wins",;
      "Grow gross margin",;
      "Reduce manual pricing work",;
      "Protect brand pricing policies";
    ],;
    useCases: [;
      "Amazon and Walmart marketplaces",;
      "Shopify and BigCommerce",;
      "B2B price lists",;
      "Promo and seasonal pricing";
    ],;
    technologies: ["TypeScript", "Next.js", "Queues", "Redis", "PostgreSQL", "Playwright"],;
    link: "https://ziontechgroup.com/services/ecommerce-repricing-optimizer",;
    icon: "💹";,
},;
  {;
    id: "customer-feedback-mining",;
    name: "Customer Feedback Mining",;
    category: "micro-saas",;
    description: "AI-driven feedback aggregation from reviews, tickets, and NPS to extract themes, sentiment, and product opportunities.",;
    features: [;
      "Multi-source ingestion",;
      "Topic modeling and clustering",;
      "Sentiment and emotion detection",;
      "Feature request surfacing",;
      "Churn risk signals",;
      "Dashboards and alerts",;
      "Exports to Jira/Linear",;
      "Slack/MS Teams integration";
    ],;
    pricing: {;
      starter: 29,;
      professional: 79,;
      enterprise: 249,;
      currency: "USD";,
},;
    benefits: [;
      "Prioritize roadmap by data",;
      "Faster bug/issue detection",;
      "Reduce churn with insights",;
      "Amplify customer voice";
    ],;
    useCases: [;
      "Product ops and UX research",;
      "CS leadership reporting",;
      "Marketing messaging testing",;
      "C-suite customer health";
    ],;
    technologies: ["Python", "NLP", "Vector DB", "Next.js", "Airflow/Temporal"],;
    link: "https://ziontechgroup.com/services/customer-feedback-mining",;
    icon: "🗣️";,
},;
  {;
    id: "cloud-migration-accelerator",;
    name: "Cloud Migration Accelerator",;
    category: "it-services",;
    description: "Blueprint-driven assessment, landing zone setup, and phased migration to AWS/Azure/GCP with zero-trust security and FinOps.",;
    features: [;
      "TCO/ROI assessment",;
      "Landing zone and guardrails",;
      "Workload discovery and grouping",;
      "Data migration and cutover",;
      "Zero-downtime strategies",;
      "Observability and SRE setup",;
      "FinOps and cost optimization",;
      "Knowledge transfer and docs";
    ],;
    pricing: {;
      starter: 15000,;
      professional: 65000,;
      enterprise: 250000,;
      currency: "USD";,
},;
    benefits: [;
      "Accelerate time-to-cloud",;
      "Reduce migration risk",;
      "Improve security posture",;
      "Lower run costs with FinOps";
    ],;
    useCases: [;
      "Data center exit",;
      "Modernize legacy apps",;
      "Disaster recovery setup",;
      "Global scalability needs";
    ],;
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Datadog"],;
    link: "https://ziontechgroup.com/services/cloud-migration-accelerator",;
    icon: "☁️";,
},;
  {;
    id: "kubernetes-platform-engineering",;
    name: "Kubernetes Platform Engineering",;
    category: "it-services",;
    description: "Enterprise-grade Kubernetes platform with golden paths, GitOps, self-service environments, and security by default.",;
    features: [;
      "Cluster design and hardening",;
      "GitOps (Argo CD/Flux)",;
      "Golden paths and templates",;
      "Service mesh and policies",;
      "CI/CD and artifact supply chain",;
      "Observability stack",;
      "Secrets and identity",;
      "Runbooks and training";
    ],;
    pricing: {;
      starter: 12000,;
      professional: 48000,;
      enterprise: 180000,;
      currency: "USD";,
},;
    benefits: [;
      "Faster developer onboarding",;
      "Higher deployment velocity",;
      "Improved reliability and SLOs",;
      "Governance and compliance";
    ],;
    useCases: [;
      "Multi-tenant platforms",;
      "Hybrid/multi-cloud",;
      "Regulated environments",;
      "Edge and on-prem clusters";
    ],;
    technologies: ["Kubernetes", "Helm", "Argo CD", "Istio/Linkerd", "OPA/Gatekeeper"],;
    link: "https://ziontechgroup.com/services/kubernetes-platform-engineering",;
    icon: "🐳";,
},;
  {;
    id: "soc2-compliance-implementation",;
    name: "SOC 2 Compliance Implementation",;
    category: "it-services",;
    description: "End-to-end SOC 2 readiness, controls implementation, evidence automation, and audit support.",;
    features: [;
      "Gap assessment and roadmap",;
      "Policy and control library",;
      "Evidence automation",;
      "Vulnerability management",;
      "Security awareness training",;
      "Risk register and treatments",;
      "Vendor risk management",;
      "Audit coordination";
    ],;
    pricing: {;
      starter: 8000,;
      professional: 35000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Faster audit readiness",;
      "Reduced manual evidence work",;
      "Improved security hygiene",;
      "Stronger customer trust";
    ],;
    useCases: [;
      "Pre-seed to enterprise SaaS",;
      "Healthcare and fintech",;
      "B2B vendor due diligence",;
      "Continuous compliance";
    ],;
    technologies: ["GRC Platforms", "CIS Benchmarks", "SIEM", "CSPM", "IaC"],;
    link: "https://ziontechgroup.com/services/soc2-compliance-implementation",;
    icon: "🔒";,
},;
  {;
    id: "ragt-knowledge-bot",;
    name: "RAG Knowledge Bot",;
    category: "ai-services",;
    description: "Retrieval-augmented generation assistant grounded in your docs, tickets, and code with robust guardrails and analytics.",;
    features: [;
      "Multi-repo document ingestion",;
      "Embeddings and vector search",;
      "Conversation memory and tools",;
      "Citations and source tracing",;
      "Quality and safety guardrails",;
      "Analytics and feedback loops",;
      "SSO and role permissions",;
      "SDK and API access";
    ],;
    pricing: {;
      starter: 7000,;
      professional: 18000,;
      enterprise: 120000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce support tickets",;
      "Accelerate onboarding",;
      "Improve answer accuracy",;
      "Protect IP and privacy";
    ],;
    useCases: [;
      "Internal IT helpdesk",;
      "Customer self-service",;
      "Sales and SE enablement",;
      "Policy and compliance Q&A";
    ],;
    technologies: ["RAG", "Vector DB", "OpenAI/Azure OpenAI", "LangChain", "Next.js"],;
    link: "https://ziontechgroup.com/services/rag-knowledge-bot",;
    icon: "🤖";,
},;
  {;
    id: "computer-vision-inspection",;
    name: "Computer Vision Quality Inspection",;
    category: "ai-services",;
    description: "High-accuracy vision models for defect detection, part counting, and assembly verification on the factory line.",;
    features: [;
      "Dataset labeling workflows",;
      "Model training and evaluation",;
      "On-edge inference optimization",;
      "Active learning loops",;
      "Real-time alarms and APIs",;
      "Lifecycle MLOps",;
      "Integration with PLC/SCADA",;
      "Secure on-prem deployment";
    ],;
    pricing: {;
      starter: 20000,;
      professional: 90000,;
      enterprise: 400000,;
      currency: "USD";,
},;
    benefits: [;
      "Reduce scrap and rework",;
      "Increase throughput and OEE",;
      "Consistent quality at scale",;
      "Lower inspection costs";
    ],;
    useCases: [;
      "Electronics assembly",;
      "Automotive parts",;
      "Pharmaceutical packaging",;
      "Food and beverage lines";
    ],;
    technologies: ["PyTorch", "ONNX/TensorRT", "Edge AI", "OpenCV", "MLOps"],;
    link: "https://ziontechgroup.com/services/computer-vision-inspection",;
    icon: "📷";,
},;
  {;
    id: "ai-sales-forecasting-suite",;
    name: "AI Sales Forecasting Suite",;
    category: "ai-services",;
    description: "Probabilistic demand and revenue forecasting with scenario planning and driver analysis for sales and operations teams.",;
    features: [;
      "Time-series feature store",;
      "Hierarchical forecasting",;
      "Causal and driver analysis",;
      "Promotion and seasonality modeling",;
      "Scenario planning and what-ifs",;
      "BI dashboards and exports",;
      "Data quality and lineage",;
      "API for ERP/CRM integration";
    ],;
    pricing: {;
      starter: 10000,;
      professional: 35000,;
      enterprise: 150000,;
      currency: "USD";,
},;
    benefits: [;
      "Improve forecast accuracy",;
      "Optimize inventory levels",;
      "Increase service levels",;
      "Align finance and supply chain";
    ],;
    useCases: [;
      "CPG demand planning",;
      "SaaS ARR forecasting",;
      "Retail allocation",;
      "Manufacturing S&OP";
    ],;
    technologies: ["Python", "Prophet", "NeuralForecast", "dbt", "Snowflake/BigQuery"],;
    link: "https://ziontechgroup.com/services/ai-sales-forecasting-suite",;
    icon: "📈";,
},;
  {;
    id: "ai-compliance-monitoring-suite",;
    name: "AI Compliance Monitoring Suite",;
    category: "ai-services",;
    description: "Automated monitoring for SOC 2, HIPAA, and GDPR controls with evidence collection and auditor-ready reports.",;
    features: [;
      "Continuous control monitoring",;
      "Automated evidence capture",;
      "Policy change detection",;
      "Vendor risk scoring",;
      "Real-time alerts and dashboards",;
      "Auditor collaboration workspace",;
      "API and SIEM integrations",;
      "Report exports (PDF/CSV)";
    ],;
    pricing: { starter: 8000, professional: 30000, enterprise: 120000, currency: "USD" },;
    benefits: [;
      "Reduce audit preparation time by 70%",;
      "Lower compliance risk",;
      "Single source of truth for controls",;
      "Auditor-ready evidence";
    ],;
    useCases: ["SOC 2 Type I/II readiness", "HIPAA compliance", "GDPR DPIA tracking", "Vendor risk management"],;
    technologies: ["OpenAI", "Supabase/Postgres", "Node.js", "React", "SIEM APIs"],;
    link: "https://ziontechgroup.com/services/ai-compliance-monitoring-suite",;
    icon: "✅";,
},;
  {;
    id: "mlops-foundation-pack",;
    name: "MLOps Foundation Pack",;
    category: "it-services",;
    description: "Production-grade MLOps setup with feature store, CI/CD for models, monitoring, and governance.",;
    features: [;
      "Model registry and versioning",;
      "Feature store setup",;
      "CI/CD pipelines for training and deploy",;
      "Data and model lineage",;
      "Model performance monitoring",;
      "Shadow/canary deployments",;
      "RBAC and audit trails",;
      "Playbooks and enablement";
    ],;
    pricing: { starter: 25000, professional: 90000, enterprise: 250000, currency: "USD" },;
    benefits: [;
      "Faster model time-to-production",;
      "Reduced operational risk",;
      "Repeatable, governed workflows",;
      "Improved reliability of ML systems";
    ],;
    useCases: ["Forecasting platforms", "Recommendation engines", "Fraud detection", "NLP copilots"],;
    technologies: ["Docker/K8s", "MLflow", "dbt", "Argo/GitHub Actions", "Prometheus/Grafana"],;
    link: "https://ziontechgroup.com/services/mlops-foundation-pack",;
    icon: "🧰";,
},;
  {;
    id: "ai-knowledge-base-copilot",;
    name: "AI Knowledge Base Copilot",;
    category: "micro-saas",;
    description: "Self-serve AI assistant that answers from your docs, tickets, and wikis with citations and guardrails.",;
    features: [;
      "RAG with citations",;
      "Connector library (Confluence, Notion, Zendesk)",;
      "Feedback loops and fine-tuning",;
      "Admin console with redaction",;
      "Multilingual support",;
      "Embeddings and vector search",;
      "Access controls and SSO",;
      "Analytics and deflection rates";
    ],;
    pricing: { starter: 39, professional: 129, enterprise: 399, currency: "USD" },;
    benefits: ["Higher case deflection", "Faster onboarding", "Consistent answers with sources", "Reduced support costs"],;
    useCases: ["Customer support portals", "Internal IT helpdesk", "Partner enablement", "Product documentation"],;
    technologies: ["OpenAI", "Vector DB", "Next.js", "Node.js", "SSO/OAuth"],;
    link: "https://ziontechgroup.com/services/ai-knowledge-base-copilot",;
    icon: "📚";,
},;
  {;
    id: "cloud-cost-optimizer",;
    name: "Cloud Cost Optimizer",;
    category: "it-services",;
    description: "FinOps assessment and automation to reduce AWS, GCP, and Azure spend without sacrificing performance.",;
    features: [;
      "Billing and usage analysis",;
      "Right-sizing and auto-scheduling",;
      "Reserved/Savings Plans modeling",;
      "Storage and data transfer optimization",;
      "Kubernetes cost allocation",;
      "Alerting and anomaly detection",;
      "Monthly optimization reports",;
      "Automation-as-code delivery";
    ],;
    pricing: { starter: 5000, professional: 20000, enterprise: 80000, currency: "USD" },;
    benefits: ["Cut 20–40% of cloud spend", "Visibility by team/service", "No performance regression", "Continuous savings"],;
    useCases: ["SaaS platforms", "Data pipelines", "Ecommerce workloads", "ML training clusters"],;
    technologies: ["AWS/GCP/Azure", "Kubecost", "Terraform", "BigQuery/Athena", "Looker/Data Studio"],;
    link: "https://ziontechgroup.com/services/cloud-cost-optimizer",;
    icon: "💸";,
},;
  {;
    id: "ai-security-copilot-managed",;
    name: "AI Security Copilot (Managed)",;
    category: "ai-services",;
    description: "Managed AI assistant for SecOps that triages alerts, summarizes incidents, and suggests playbooks.",;
    features: [;
      "Alert triage and deduplication",;
      "Incident summarization",;
      "Playbook recommendations",;
      "SOAR ticket enrichment",;
      "Threat intel enrichment",;
      "Knowledge base citations",;
      "SOC metrics and QA",;
      "On-prem or SaaS options";
    ],;
    pricing: { starter: 12000, professional: 45000, enterprise: 180000, currency: "USD" },;
    benefits: ["Faster MTTR", "Reduced alert fatigue", "Consistent response", "Improved analyst productivity"],;
    useCases: ["SOC augmentation", "Managed detection and response", "IR playbook automation"],;
    technologies: ["SIEM/SOAR", "RAG", "OpenAI", "K8s", "Elasticsearch"],;
    link: "https://ziontechgroup.com/services/ai-security-copilot-managed",;
    icon: "🛡️";,
},;
  {;
    id: "sales-enablement-studio",;
    name: "Sales Enablement Studio",;
    category: "micro-saas",;
    description: "Personalized microsites, proposals, and ROI calculators auto-generated for every prospect with analytics.",;
    features: [;
      "Prospect microsite generator",;
      "ROI calculator builder",;
      "Proposal templates with e-sign",;
      "CRM and MAP integrations",;
      "AI copy and design suggestions",;
      "Engagement analytics",;
      "ABM asset personalization",;
      "Team collaboration";
    ],;
    pricing: { starter: 59, professional: 149, enterprise: 399, currency: "USD" },;
    benefits: ["Higher win rates", "Shorter sales cycles", "On-brand experiences at scale", "Deal intelligence"],;
    useCases: ["B2B SaaS sales", "Agencies", "Channel/partner sales", "Enterprise pursuits"],;
    technologies: ["Next.js", "Stripe", "HubSpot/Salesforce", "OpenAI"],;
    link: "https://ziontechgroup.com/services/sales-enablement-studio",;
    icon: "🧾";,
}
  ,;
  {;
    id: "gdpr-dsar-portal",;
    name: "GDPR/DSAR Request Portal",;
    category: "micro-saas",;
    description: "Self-serve data subject access request (DSAR) intake, verification, fulfillment workflows, and auditor-ready logs.",;
    features: [;
      "Secure request intake forms",;
      "Identity verification and consent tracking",;
      "Automated data export across systems",;
      "Deadline and SLA management",;
      "Redaction tools and legal holds",;
      "Auditable activity history",;
      "Email templates and status portal",;
      "API and webhook integrations";
    ],;
    pricing: { starter: 49, professional: 149, enterprise: 499, currency: "USD" },;
    benefits: [;
      "Reduce compliance workload",;
      "Meet GDPR/CCPA deadlines",;
      "Improve data privacy posture",;
      "Lower legal risk";
    ],;
    useCases: ["SaaS vendors", "E‑commerce", "Healthcare providers", "Financial services"],;
    technologies: ["Node.js", "React", "PostgreSQL", "S3", "KMS"],;
    link: "https://ziontechgroup.com/services/gdpr-dsar-portal",;
    icon: "🛡️";,
},;
  {;
    id: "price-intelligence-monitor",;
    name: "Price Intelligence Monitor",;
    category: "micro-saas",;
    description: "Competitor price monitoring, MAP violations alerts, and automated repricing recommendations for retail and D2C.",;
    features: [;
      "Competitor product matching",;
      "MAP policy detection",;
      "Dynamic pricing recommendations",;
      "Channel breakouts and reports",;
      "Alerting and anomaly detection",;
      "API and Google Sheets sync",;
      "Scheduled crawls",;
      "Dashboard and exports";
    ],;
    pricing: { starter: 79, professional: 199, enterprise: 599, currency: "USD" },;
    benefits: ["Protect margins", "React to market changes", "Reduce manual tracking", "Win Buy Box more often"],;
    useCases: ["Retailers", "Brands", "Distributors", "Marketplaces"],;
    technologies: ["Headless browsers", "Cheerio", "Node.js", "PostgreSQL"],;
    link: "https://ziontechgroup.com/services/price-intelligence-monitor",;
    icon: "💹";,
},;
  {;
    id: "micro-crm-lite",;
    name: "Micro CRM Lite",;
    category: "micro-saas",;
    description: "Lightweight CRM with pipeline, email tracking, and AI assist for SMBs wanting simplicity over bloat.",;
    features: [;
      "Kanban pipeline",;
      "Email tracking and templates",;
      "Contact enrichment",;
      "Basic reporting",;
      "AI drafting suggestions",;
      "Zapier/Make integrations",;
      "CSV import/export",;
      "Mobile-friendly UI";
    ],;
    pricing: { starter: 19, professional: 49, enterprise: 129, currency: "USD" },;
    benefits: ["Faster deal cycles", "Lower tool cost", "Team adoption increases", "Zero heavy setup"],;
    useCases: ["Agencies", "Consultancies", "Local services", "Freelancers"],;
    technologies: ["React", "Node.js", "SQLite/PostgreSQL"],;
    link: "https://ziontechgroup.com/services/micro-crm-lite",;
    icon: "📇";,
},;
  {;
    id: "cloud-finops-optimizer",;
    name: "Cloud FinOps Optimizer",;
    category: "it-services",;
    description: "Assessment and implementation to cut cloud costs using rightsizing, savings plans, storage classes, and architecture changes.",;
    features: [;
      "Spend analysis and tagging hygiene",;
      "Rightsizing and autoscaling plans",;
      "Savings plans and reservations",;
      "Storage lifecycle and archive strategy",;
      "Idle/underused resource cleanup",;
      "Cost guardrails and budgets",;
      "Dashboards and alerts",;
      "Hands-on remediation";
    ],;
    pricing: { starter: 8000, professional: 20000, enterprise: 75000, currency: "USD" },;
    benefits: ["Cut 20–45% cloud spend", "Faster ROI", "Predictable budgets", "Better tagging governance"],;
    useCases: ["AWS/GCP/Azure estates", "Kubernetes clusters", "Data platforms", "SaaS infra"],;
    technologies: ["AWS/GCP/Azure", "Terraform", "Kubernetes", "Cost Explorer/BigQuery"],;
    link: "https://ziontechgroup.com/services/cloud-finops-optimizer",;
    icon: "☁️";,
},;
  {;
    id: "zero-trust-rollout",;
    name: "Zero Trust Security Rollout",;
    category: "it-services",;
    description: "Design and implement zero trust across identity, devices, networks, and workloads to reduce breach risk.",;
    features: [;
      "Identity-centric segmentation",;
      "MFA, PAM, and SSO hardening",;
      "Device posture and EDR integration",;
      "Microsegmentation and policy",;
      "Secrets management and vaulting",;
      "Continuous verification",;
      "SIEM/SOAR integrations",;
      "Playbooks and training";
    ],;
    pricing: { starter: 25000, professional: 95000, enterprise: 350000, currency: "USD" },;
    benefits: ["Lower lateral movement", "Audit-ready security", "Reduced incident blast radius", "Modernized access"],;
    useCases: ["Hybrid cloud", "Remote workforce", "Regulated industries", "M&A transitions"],;
    technologies: ["Okta/AAD", "ZTA gateways", "EDR/MDM", "HashiCorp Vault", "Kubernetes"],;
    link: "https://ziontechgroup.com/services/zero-trust-rollout",;
    icon: "🔐";,
},;
  {;
    id: "modern-data-mesh",;
    name: "Modern Data Mesh Enablement",;
    category: "it-services",;
    description: "Standing up domain-oriented data products with governance, catalogs, and self-service analytics.",;
    features: [;
      "Domain modeling and contracts",;
      "Data product templates",;
      "Catalog, lineage, and quality SLAs",;
      "Streaming and batch ingestion",;
      "Semantic layer and metrics",;
      "Federated governance operating model",;
      "Observability and cost controls",;
      "Enablement and training";
    ],;
    pricing: { starter: 35000, professional: 125000, enterprise: 400000, currency: "USD" },;
    benefits: ["Faster analytics delivery", "Higher data trust", "Reduced bottlenecks", "Reusable data products"],;
    useCases: ["Enterprise analytics", "ML feature platforms", "Finance and ops reporting"],;
    technologies: ["dbt", "Open table formats", "Airflow", "Kafka", "BI/semantic tools"],;
    link: "https://ziontechgroup.com/services/modern-data-mesh",;
    icon: "🗂️";,
},;
  {;
    id: "rag-search-platform",;
    name: "RAG Search Platform",;
    category: "ai-services",;
    description: "Retrieval-augmented generation search over your documents with citations, access control, and safety guardrails.",;
    features: [;
      "Connectors for Drive/SharePoint/Confluence",;
      "Chunking and embeddings optimization",;
      "Hybrid/vector search with filters",;
      "Citations and source previews",;
      "Role-based access control",;
      "Feedback loops and analytics",;
      "Admin console and red-teaming",;
      "APIs and chat widgets";
    ],;
    pricing: { starter: 4000, professional: 18000, enterprise: 120000, currency: "USD" },;
    benefits: ["Reduce search time", "Trustworthy answers with sources", "Knowledge reuse", "Lower support volume"],;
    useCases: ["Internal knowledge bases", "Support portals", "Compliance wikis", "Research teams"],;
    technologies: ["OpenAI/OSS LLMs", "Vector DB", "Node.js", "React"],;
    link: "https://ziontechgroup.com/services/rag-search-platform",;
    icon: "🔎";,
},;
  {;
    id: "custom-llm-fine-tuning",;
    name: "Custom LLM Fine‑Tuning & Evaluation",;
    category: "ai-services",;
    description: "Dataset curation, supervised fine-tuning, preference optimization, eval harnesses, and deployment for your domain.",;
    features: [;
      "Data collection and cleaning",;
      "SFT/DPO/LoRA pipelines",;
      "Task-specific eval suites",;
      "Safety and bias checks",;
      "Latency and cost optimization",;
      "Serving and autoscaling",;
      "Monitoring and drift detection",;
      "Human-in-the-loop review";
    ],;
    pricing: { starter: 15000, professional: 60000, enterprise: 300000, currency: "USD" },;
    benefits: ["Higher task accuracy", "Domain-aligned outputs", "Lower inference cost", "IP ownership"],;
    useCases: ["Customer support", "Document Q&A", "Agent workflows", "Content generation"],;
    technologies: ["PyTorch", "TRL", "vLLM/TGI", "Weights & Biases", "Cloud GPUs"],;
    link: "https://ziontechgroup.com/services/custom-llm-fine-tuning",;
    icon: "🧪";,
},;
  {;
    id: "mlops-foundations",;
    name: "MLOps Foundations",;
    category: "ai-services",;
    description: "End-to-end MLOps setup covering data/versioning, CI/CD for models, feature stores, and observability.",;
    features: [;
      "Experiment tracking",;
      "Model registry and promotion gates",;
      "Feature store setup",;
      "CI/CD pipelines for ML",;
      "Canary and shadow deployments",;
      "Data validation and drift alerts",;
      "Cost and performance monitoring",;
      "Playbooks and enablement";
    ],;
    pricing: { starter: 25000, professional: 90000, enterprise: 250000, currency: "USD" },;
    benefits: ["Fewer failed releases", "Faster iteration", "Traceability and governance", "Operational reliability"],;
    useCases: ["Recommendation systems", "Forecasting", "NLP/vision deployments", "Personalization"],;
    technologies: ["MLflow", "Feast", "Kubeflow/Vertex/SageMaker", "dbt", "Airflow"],;
    link: "https://ziontechgroup.com/services/mlops-foundations",;
    icon: "⚙️";,
}
>>>>>>> main
];
export const getServicesByCategory = (category: Service["category"]) => {;
  return services.filter(service => service.category === category);,
}
export const getServiceById = (id: string) => {;
  return services.find(service => service.id === id);,
}