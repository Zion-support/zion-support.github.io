export type AddedService = {
  id: string,
  title: string,
  description: string,
  category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cloud & DevOps' | 'Cybersecurity' | 'Data & Analytics',
  price: string, // average market starting price string like "$299"
  billing: 'month' | 'project' | 'hour',
  features: string[],
  benefits: string[],
  ctaLabel: string,
  href: string, // external or internal URL
},

export const ADDED_SERVICES_2025: AddedService[] = [{
    id: 'ai-sales-email-copilot',
    title: 'AI Sales Email Copilot',
    description: 'Personalizes outreach, drafts replies, and updates CRM with context-aware follow-ups.',
    category: 'Micro SaaS',
    price: '$149',
    billing: 'month',
    features: [
      'Auto-draft and personalize emailsInbox triage and reply suggestions',
      'Salesforce/HubSpot syncCompliance guardrails(PII/PHI redaction)'
    ],
    benefits: ['Increase reply rate 20–40%Save 5–8 hours per rep weekly'
    ],
    ctaLabel: 'Start 14‑day Trial',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'enterprise-rag-chat',
    title: 'Enterprise RAG Knowledge Chat',
    description: 'Private chat over docs, wikis, tickets, and data with citations and access controls.',
    category: 'AI Solutions',
    price: '$2,999',
    billing: 'month',
    features: ['Vector + keyword hybrid searchSource citations and grounding',
      'SSO/Okta and row‑level permissionsPlugins: Confluence, Google Drive, SharePoint'
    ],
    benefits: ['Deflect internal tickets 15–30%Accelerate onboarding and support'
    ],
    ctaLabel: 'Book Demo',
    href: 'https://ziontechgroup.com/services'
  },
  {
    id: 'meeting-notes-agent',
    title: 'Meeting Notes & Action Items Agent',
    description: 'Transcribes meetings, extracts actions/owners, and syncs to Jira, Asana, or CRM.',
    category: 'Micro SaaS',
    price: '$69',
    billing: 'month',
    features: ['Accurate transcriptionAction item and owner extraction',
      'Calendar integrationCRM/PM sync'
    ],
    benefits: ['Reduce manual note time by 90%Improve accountability and follow‑through'
    ],
    ctaLabel: 'Start Now',
    href: 'https://ziontechgroup.com/services'
  },
  {
    id: 'cloud-cost-optimizer-pro',
    title: 'Cloud Cost Optimizer Pro',
    description: 'FinOps automation for AWS, Azure, and GCP with savings insights and guardrails.',
    category: 'Cloud & DevOps',
    price: '$1,999',
    billing: 'month',
    features: ['Automated rightsizing and schedulingRI/SP recommendations',
      'Unused resource detectionBudget alerts and governance'
    ],
    benefits: ['Cut monthly cloud spend 15–35%Prevent surprise overages'
    ],
    ctaLabel: 'Get Assessment',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'soc2-compliance-automation',
    title: 'SOC 2 Compliance Automation',
    description: 'Evidence collection, control monitoring, and audit prep with policy automation.',
    category: 'Cybersecurity',
    price: '$4,000',
    billing: 'project',
    features: ['Pre‑built policy libraryAutomated evidence collection',
      'Vendor risk trackingContinuous control monitoring'
    ],
    benefits: ['Accelerate audit readinessReduce manual effort 50%+'
    ],
    ctaLabel: 'Request Quote',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'm365-security-copilot',
    title: 'Microsoft 365 Security Copilot',
    description: 'Detects misconfigurations, risky apps, and insecure sharing across M365.',
    category: 'Cybersecurity',
    price: '$1,499',
    billing: 'month',
    features: ['SharePoint/OneDrive exposure scanConditional Access review',
      'Phishing simulation and trainingAutomated hardening playbooks'
    ],
    benefits: ['Reduce breach risk significantlyMeet compliance requirements'
    ],
    ctaLabel: 'Schedule Assessment',
    href: 'https://ziontechgroup.com/services'
  },
  {
    id: 'devops-release-automation',
    title: 'DevOps Release Automation',
    description: 'GitHub Actions/GitLab CI pipelines with quality gates, test coverage, and blue‑green deploys.',
    category: 'Cloud & DevOps',
    price: '$8,000',
    billing: 'project',
    features: ['CI/CD pipeline designAutomated tests and linting',
      'Deploy previews and canaryObservability integration'
    ],
    benefits: ['Ship faster with confidenceReduce change failure rate'
    ],
    ctaLabel: 'Get Proposal',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'data-governance-observability',
    title: 'Data Governance & Observability',
    description: 'Lineage, quality checks, and access control for analytics and ML platforms.',
    category: 'Data & Analytics',
    price: '$12,000',
    billing: 'project',
    features: ['Column‑level lineageQuality rules and SLAs',
      'Access policies and anonymizationdbt/Great Expectations integration'
    ],
    benefits: ['Trustworthy analyticsFaster root‑cause analysis'
    ],
    ctaLabel: 'Talk to Data Team',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'developer-productivity-copilot',
    title: 'Developer Productivity Copilot',
    description: 'AI reviews PRs, suggests tests, and highlights risky changes across monorepos.',
    category: 'AI Solutions',
    price: '$299',
    billing: 'month',
    features: ['Automated PR review commentsTest case generation hints',
      'Security and secret scanningCode search with embeddings'
    ],
    benefits: ['Higher code qualityFewer regressions and faster PRs'
    ],
    ctaLabel: 'Try Copilot',
    href: 'https://ziontechgroup.com/services'
  },
  {
    id: 'customer-support-chatbot-pro',
    title: 'Customer Support Chatbot Pro',
    description: 'Deflects tickets with high‑quality answers grounded in your docs and tickets.',
    category: 'AI Solutions',
    price: '$399',
    billing: 'month',
    features: ['Zendesk/Freshdesk connectorsEscalation to human with context',
      'Analytics and feedback loopsMultilingual responses'
    ],
    benefits: ['Reduce support load 20–50%Improve CSAT/NPS'
    ],
    ctaLabel: 'Launch Bot',
    href: 'https://ziontechgroup.com/services'
  },
  {
    id: 'landing-page-generator',
    title: 'Landing Page Generator',
    description: 'Create SEO‑optimized landing pages from a single prompt with analytics baked in.',
    category: 'Micro SaaS',
    price: '$99',
    billing: 'month',
    features: ['Templates tuned for conversionA/B testing support',
      'SEO meta and schema automationImage and copy generation'
    ],
    benefits: ['Ship pages in minutesIncrease lead conversion'
    ],
    ctaLabel: 'Generate a Page',
    href: 'https://ziontechgroup.com/services'
  },
  {
    id: 'managed-kubernetes-sre',
    title: 'Managed Kubernetes SRE',
    description: 'Production‑grade clusters with IaC, monitoring, and 24/7 on‑call SRE support.',
    category: 'IT Services',
    price: '$125',
    billing: 'hour',
    features: ['EKS/AKS/GKE setup and hardeningTerraform modules and GitOps',
      'Prometheus/Grafana/AlertingRunbooks and incident response'
    ],
    benefits: ['Resilient infra with best practicesLower downtime and faster MTTR'
    ],
    ctaLabel: 'Engage SRE Team',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'mlops-platform-setup',
    title: 'MLOps Platform Setup',
    description: 'End‑to‑end MLOps with experiment tracking, feature store, and automated deployment.',
    category: 'AI Solutions',
    price: '$15,000',
    billing: 'project',
    features: ['MLflow/Weights & Biases integrationFeature store and model registry',
      'CI/CD for modelsMonitoring and drift detection'
    ],
    benefits: ['Shorter time‑to‑productionBetter governance and reproducibility'
    ],
    ctaLabel: 'Plan Your Platform',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'bi-dashboards-dbt-duckdb',
    title: 'BI Dashboards with dbt + DuckDB',
    description: 'Modern ELT with dbt and DuckDB for fast, low‑cost analytics and dashboards.',
    category: 'Data & Analytics',
    price: '$9,000',
    billing: 'project',
    features: ['dbt models and testsDuckDB or warehouse targets',
      'Superset/Metabase dashboardsData contracts and docs'
    ],
    benefits: ['Lower analytics spendMaintainable data models'
    ],
    ctaLabel: 'Get a BI Sprint',
    href: 'https://ziontechgroup.com/contact'
  }
],

