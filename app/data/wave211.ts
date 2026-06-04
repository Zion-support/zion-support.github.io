import { Service } from './serviceTypes';

// Wave 211 — AI Agent Orchestration, Data Product Marketplace, Zero-Trust Network, Synthetic Data & MLOps Registry (5 services)
// Research by @tablet_kleber_bot — 2026-06-14
// New categories: ai-agent-orchestration, data-product, zero-trust, synthetic-data, mlops

export const wave211AiAgentOrchestrationServices: Service[] = [
  {
    id: 'ai-agent-orchestration-platform',
    title: 'AI Agent Orchestration Platform',
    description: 'Enterprise platform for building, deploying, and managing autonomous AI agent fleets that collaborate on complex multi-step workflows. As AI moves from chatbots to agentic systems in 2026, organizations need orchestration layers that handle agent-to-agent communication, task decomposition, tool access governance, and failure recovery. This platform provides a visual agent builder, pre-built agent templates for common enterprise tasks, and real-time monitoring of agent behavior and costs.',
    category: 'ai',
    icon: '🤖',
    href: '/services/ai-agent-orchestration-platform',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: true,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Visual agent builder with drag-and-drop workflow designer — no coding required for common patterns',
      'Pre-built agent templates: research analyst, code reviewer, customer support triage, data pipeline monitor',
      'Agent-to-agent communication protocol with task delegation, result aggregation, and conflict resolution',
      'Tool access governance with granular permissions — control which APIs, databases, and systems each agent can access',
      'Real-time agent behavior monitoring with cost tracking per agent, per task, and per workflow',
      'Automatic failure recovery with retry logic, fallback agents, and human-in-the-loop escalation',
      'Integration with OpenAI Agents SDK, LangChain, CrewAI, AutoGen, and custom agent frameworks'
    ],
    benefits: [
      'Automate complex multi-step workflows that previously required 5-10 FTEs across departments',
      'Reduce AI agent costs by 60% with intelligent task routing and model selection per subtask',
      'Deploy agent fleets in days instead of months with pre-built templates and visual tooling',
      'Maintain full auditability and governance over autonomous agent actions for compliance'
    ]
  }
];

export const wave211DataProductMarketplaceServices: Service[] = [
  {
    id: 'data-product-marketplace-platform',
    title: 'Data Product Marketplace Platform',
    description: 'Internal data product marketplace that enables teams to publish, discover, evaluate, and subscribe to trusted data products across the organization. In 2026, leading enterprises are shifting from raw data sharing to curated data products — with defined schemas, SLAs, quality guarantees, and usage analytics. This platform operationalizes the data mesh principle of treating data as a product, providing the marketplace infrastructure that makes it real.',
    category: 'data',
    icon: '🏪',
    href: '/services/data-product-marketplace-platform',
    industry: 'Data Engineering',
    stage: 'published',
    popular: false,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Self-service data product publishing with schema documentation, sample queries, and quality scorecards',
      'Search and discovery engine with natural language search, tags, ratings, and usage recommendations',
      'Automated data product onboarding — schema validation, access provisioning, and consumer contract generation',
      'Usage analytics dashboard: query volume, consumer satisfaction, freshness, and downstream impact tracking',
      'Data product versioning with backward compatibility guarantees and automated consumer migration',
      'Integration with Snowflake, Databricks, BigQuery, dbt, and any JDBC/ODBC data source',
      'Monetization support with internal chargeback and cost allocation per data product and consumer'
    ],
    benefits: [
      'Reduce time-to-data from weeks to minutes with self-service discovery and instant provisioning',
      'Increase data team productivity by 40% through reusable, well-documented data products',
      'Establish clear data ownership and accountability with published SLAs and quality guarantees',
      'Enable data mesh architecture without building marketplace infrastructure from scratch'
    ]
  }
];

export const wave211ZeroTrustNetworkServices: Service[] = [
  {
    id: 'zero-trust-network-access-platform',
    title: 'Zero-Trust Network Access (ZTNA) Platform',
    description: 'Enterprise zero-trust network access platform that replaces legacy VPNs with identity-aware, least-privilege access to internal applications and resources. In 2026, with 72% of enterprises operating hybrid work models and 68% of breaches involving compromised credentials (Verizon DBIR 2025), traditional perimeter-based security is obsolete. This platform enforces continuous verification — every user, device, and session is authenticated and authorized for each specific resource, eliminating lateral movement and reducing breach blast radius to near zero.',
    category: 'security',
    icon: '🔐',
    href: '/services/zero-trust-network-access-platform',
    industry: 'Financial Services & FinTech',
    stage: 'published',
    popular: true,
    pricing: { basic: '$15/user/mo', pro: '$35/user/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Identity-aware access proxy — every request authenticated via SSO/MFA before reaching any application',
      'Device posture checking: OS version, encryption status, EDR health, and compliance before granting access',
      'Micro-segmentation with per-application access policies — users see only resources they are authorized for',
      'Continuous session monitoring with real-time risk scoring and automatic session termination on anomaly',
      'Browser-based access to web apps, SSH, RDP, databases, and Kubernetes — no client software required',
      'Full audit logging of every access request, data transfer, and session activity for compliance reporting',
      'Integration with Okta, Azure AD, Google Workspace, CrowdStrike, and any SAML/OIDC identity provider'
    ],
    benefits: [
      'Eliminate VPN vulnerabilities — ZTNA reduces attack surface by 80% compared to traditional VPNs',
      'Achieve SOC 2, ISO 27001, and PCI-DSS compliance with continuous verification and audit trails',
      'Support seamless hybrid work — employees access internal apps from any device, any location, securely',
      'Reduce breach blast radius to a single application — attackers cannot move laterally through the network'
    ]
  }
];

export const wave211SyntheticDataServices: Service[] = [
  {
    id: 'synthetic-data-generation-platform',
    title: 'Synthetic Data Generation Platform',
    description: 'AI-powered synthetic data platform that generates statistically equivalent, privacy-safe datasets for software testing, ML training, and data sharing. In 2026, with GDPR fines exceeding €4B cumulatively and new AI training data regulations emerging, organizations cannot afford to use real customer data for development and testing. This platform uses generative models to create synthetic datasets that preserve the statistical properties, correlations, and edge cases of production data — without containing any real personal information.',
    category: 'data',
    icon: '🧬',
    href: '/services/synthetic-data-generation-platform',
    industry: 'Healthcare & Life Sciences',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Statistical fidelity engine — synthetic data preserves distributions, correlations, and rare edge cases from source data',
      'Privacy guarantee with differential privacy metrics and formal re-identification risk scoring',
      'Support for tabular, time-series, relational, and text data with referential integrity across tables',
      'Conditional generation — create synthetic datasets with specific characteristics for targeted testing scenarios',
      'Data augmentation mode — expand small datasets 10-100x while maintaining statistical properties',
      'Quality assessment dashboard with similarity scores, privacy metrics, and downstream ML model performance comparison',
      'One-click export to CSV, Parquet, databases, or direct integration with ML training pipelines'
    ],
    benefits: [
      'Eliminate privacy risk in development and testing — synthetic data contains zero real personal information',
      'Accelerate ML model development by generating unlimited training data without manual labeling',
      'Enable safe data sharing with partners, vendors, and offshore teams without legal or compliance risk',
      'Reduce data-related development bottlenecks by 70% — teams get production-like data on demand'
    ]
  }
];

export const wave211MLOpsRegistryServices: Service[] = [
  {
    id: 'mlops-model-registry-platform',
    title: 'MLOps Model Registry & Experiment Tracking',
    description: 'Enterprise MLOps platform that provides centralized model registry, experiment tracking, automated model validation, and one-click deployment across cloud and on-premise infrastructure. In 2026, the average enterprise has 50-200 ML models in production, yet 60% lack proper versioning, reproducibility, or deployment governance (Gartner). This platform brings software engineering best practices — version control, CI/CD, testing, and rollback — to the ML lifecycle, enabling teams to move from notebook experiments to production-grade ML systems.',
    category: 'devtools',
    icon: '⚙️',
    href: '/services/mlops-model-registry-platform',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$349/mo', pro: '$999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Centralized model registry with full lineage tracking — from training data and hyperparameters to deployment artifacts',
      'Experiment tracking with automatic logging of metrics, parameters, artifacts, and environment configurations',
      'Automated model validation gates — accuracy thresholds, bias checks, latency requirements, and regression tests',
      'One-click deployment to AWS SageMaker, Google Vertex AI, Azure ML, Kubernetes, and on-premise servers',
      'A/B testing and canary deployment with automatic rollback on performance degradation',
      'Model versioning with semantic versioning, tags, and approval workflows for production promotion',
      'Integration with MLflow, Kubeflow, Weights & Biases, DVC, and any Python-based ML framework'
    ],
    benefits: [
      'Reduce model deployment time from weeks to hours with automated validation and one-click deployment',
      'Ensure full reproducibility — every model can be retrained from exact data, code, and configuration',
      'Prevent production incidents with automated quality gates that catch regressions before deployment',
      'Scale ML operations from 5 to 200+ models without proportional increase in MLOps headcount'
    ]
  }
];
