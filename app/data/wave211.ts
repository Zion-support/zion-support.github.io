import { Service } from './serviceTypes';

// Wave 211 — AI Governance, Edge AI, Data Contract, FinOps & AI Red Teaming (5 services)
// Research by @tablet_kleber_bot — 2026-06-13
// New categories: ai-governance, edge-ai, data-contract, finops, ai-red-team

export const wave211AiGovernanceServices: Service[] = [
  {
    id: 'ai-governance-compliance-platform',
    title: 'AI Governance & Compliance Platform',
    description: 'Enterprise AI governance platform that provides model inventory, bias detection, explainability, audit trails, and regulatory compliance automation for all AI/ML systems. As the EU AI Act enforcement begins in 2026 and US state-level AI regulations multiply, organizations need centralized oversight of every model in production — from training data lineage to inference monitoring.',
    category: 'ai',
    icon: '🏛️',
    href: '/services/ai-governance-compliance-platform',
    industry: 'Regulated Industries',
    stage: 'published',
    popular: true,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Centralized model registry with full lifecycle tracking — from experimentation to production retirement',
      'Automated bias and fairness testing across demographic groups with configurable thresholds',
      'Explainability dashboards with SHAP/LIME integration for every model prediction',
      'Regulatory compliance automation: EU AI Act risk classification, NIST AI RMF, NYC Local Law 144',
      'Audit trail with immutable logs for every model change, approval, and deployment',
      'Policy-as-code guardrails that block non-compliant models from reaching production',
      'Automated model cards and documentation generation for stakeholder transparency'
    ],
    benefits: [
      'Avoid EU AI Act fines of up to €35M or 7% of global revenue for non-compliant AI systems',
      'Reduce AI risk incidents by 80% with proactive bias and drift monitoring',
      'Accelerate AI deployment with automated compliance checks replacing manual review cycles',
      'Build stakeholder trust with transparent, auditable AI decision-making'
    ]
  }
];

export const wave211EdgeAiServices: Service[] = [
  {
    id: 'edge-ai-inference-platform',
    title: 'Edge AI Inference Platform',
    description: 'Deploy and manage AI models on edge devices — from IoT sensors and cameras to factory floors and retail stores — with sub-10ms latency and no cloud dependency. As enterprises push AI to the edge for real-time decisions, data sovereignty, and bandwidth savings, this platform handles model optimization, OTA updates, and fleet-wide monitoring across thousands of devices.',
    category: 'infrastructure',
    icon: '📡',
    href: '/services/edge-ai-inference-platform',
    industry: 'Manufacturing & Retail',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Model optimization with quantization, pruning, and distillation for ARM, x86, and GPU edge hardware',
      'Over-the-air (OTA) model updates with rollback, canary deployment, and A/B testing across device fleets',
      'Real-time fleet monitoring: device health, inference latency, accuracy drift, and resource utilization',
      'Support for NVIDIA Jetson, Intel Movidius, Raspberry Pi, AWS Panorama, and custom silicon',
      'Offline-first architecture — devices operate fully without cloud connectivity, sync when available',
      'Edge-to-cloud hybrid mode for federated learning and aggregated analytics',
      'Security: encrypted model artifacts, secure boot, device attestation, and tamper detection'
    ],
    benefits: [
      'Achieve sub-10ms inference latency — 100x faster than cloud round-trip for real-time decisions',
      'Reduce cloud inference costs by 70-90% by processing data locally on edge devices',
      'Maintain operations during network outages with fully autonomous edge inference',
      'Keep sensitive data on-device for GDPR/HIPAA compliance — no data leaves the premises'
    ]
  }
];

export const wave211DataContractServices: Service[] = [
  {
    id: 'data-contract-enforcement-platform',
    title: 'Data Contract Enforcement Platform',
    description: 'Data contracts are the #1 trending data architecture pattern in 2026 — agreements between data producers and consumers that define schema, semantics, SLAs, and quality expectations. This platform automates data contract creation, validation, testing, and enforcement across your entire data ecosystem, preventing the broken pipelines that cost enterprises an average of $12.9M annually.',
    category: 'data',
    icon: '📋',
    href: '/services/data-contract-enforcement-platform',
    industry: 'Data Engineering',
    stage: 'published',
    popular: false,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Declarative data contract definition with schema, semantics, SLAs, and quality rules in YAML/JSON',
      'Automated contract testing in CI/CD pipelines — block deployments that break consumer contracts',
      'Schema evolution management with backward/forward compatibility checks and automated migration',
      'Data quality enforcement with freshness, completeness, uniqueness, and distribution monitoring',
      'Contract versioning with changelog, deprecation policies, and consumer notification workflows',
      'Integration with dbt, Airflow, Kafka, Snowflake, BigQuery, Databricks, and Fivetran',
      'Contract marketplace — discover, evaluate, and subscribe to data products across the organization'
    ],
    benefits: [
      'Eliminate 80% of data pipeline failures caused by unexpected schema or semantic changes',
      'Reduce data incident MTTR from hours to minutes with automated contract violation detection',
      'Enable data mesh adoption with clear ownership, SLAs, and self-service data discovery',
      'Shift-left data quality — catch breaking changes before they reach production consumers'
    ]
  }
];

export const wave211FinOpsServices: Service[] = [
  {
    id: 'finops-cloud-cost-intelligence',
    title: 'FinOps Cloud Cost Intelligence Platform',
    description: 'FinOps is now a $15B+ discipline in 2026, with 78% of enterprises reporting cloud waste averaging 32% of their cloud spend. This platform provides AI-powered cost optimization across AWS, Azure, and GCP — with automated rightsizing, reserved capacity planning, waste elimination, and chargeback/showback reporting. It goes beyond basic monitoring to actually implement savings autonomously.',
    category: 'cloud',
    icon: '💰',
    href: '/services/finops-cloud-cost-intelligence',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: true,
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-powered rightsizing recommendations with one-click implementation for EC2, RDS, Azure VMs, and GCE',
      'Reserved Instance and Savings Plan optimizer — analyze coverage, recommend purchases, and automate renewals',
      'Waste detection: orphaned volumes, idle load balancers, unused IPs, and zombie resources auto-remediation',
      'Kubernetes cost allocation by namespace, deployment, pod, and container with efficiency scoring',
      'Chargeback/showback reporting with custom cost allocation tags and department-level dashboards',
      'Anomaly detection with ML-based spend forecasting and budget breach alerts',
      'FinOps maturity assessment with benchmarking against industry peers and actionable improvement roadmap'
    ],
    benefits: [
      'Reduce cloud spend by 30-45% on average — typical enterprise saves $500K-$2M annually',
      'Automate 80% of cost optimization tasks that currently require dedicated FinOps engineers',
      'Provide finance and engineering teams a single source of truth for cloud cost accountability',
      'Achieve FinOps Foundation certification readiness with documented processes and controls'
    ]
  }
];

export const wave211AiRedTeamServices: Service[] = [
  {
    id: 'ai-red-team-security-lab',
    title: 'AI Red Team & Adversarial Security Lab',
    description: 'As enterprises deploy LLMs and AI agents at scale, a new attack surface emerges: prompt injection, jailbreaking, data extraction, model manipulation, and supply chain poisoning. This service provides continuous adversarial testing of your AI systems using the latest attack techniques — combining automated AI security scanners with expert human red teamers who specialize in LLM vulnerabilities.',
    category: 'security',
    icon: '🔴',
    href: '/services/ai-red-team-security-lab',
    industry: 'Enterprise AI',
    stage: 'published',
    popular: false,
    pricing: { basic: '$999/mo', pro: '$2,999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated prompt injection testing with 200+ attack vectors including indirect, multi-turn, and encoded payloads',
      'Jailbreak resistance evaluation against known and novel bypass techniques for GPT-4, Claude, Gemini, and open-source models',
      'Data exfiltration testing — attempt to extract system prompts, training data, and sensitive context from AI applications',
      'Model manipulation testing: goal hijacking, role confusion, and tool misuse in AI agent architectures',
      'Supply chain security scanning for poisoned datasets, backdoored models, and compromised model hubs',
      'Human-led red team exercises with custom attack scenarios tailored to your AI use cases',
      'Remediation guidance with prioritized findings, fix templates, and retesting validation'
    ],
    benefits: [
      'Identify AI-specific vulnerabilities that traditional penetration testing completely misses',
      'Meet emerging AI security requirements in SOC 2, ISO 42001, and NIST AI RMF frameworks',
      'Prevent costly AI incidents — a single prompt injection attack can expose millions of records',
      'Build customer and regulator confidence with certified AI security assessments'
    ]
  }
];
