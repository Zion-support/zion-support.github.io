export type AddedService = {}
  id: string;
  title: string;
  description: string;
  category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cloud & DevOps' | 'Cybersecurity' | 'Data & Analytics';
  price: string; // average market starting price string like "$299""
  billing: 'month' | 'project' | 'hour';
  features: string[];
  benefits: string[];
  ctaLabel: string;
  href: string; // external or internal URL;
};

export const ADDED_SERVICES_2025: AddedService[] = []
  {}
    id: 'ai-sales-email-copilot',
    title: 'AI Sales Email Copilot',
    description: 'Personalizes outreach, drafts replies, and updates CRM with context-aware follow-ups.',
    category: 'Micro SaaS',
    price: '$149',
    billing: 'month',
    features: []
      'Auto-draft and personalize emails',
      'Inbox triage and reply suggestions',
      'Salesforce/HubSpot sync',
      'Compliance guardrails (PII/PHI redaction)'
    ],
    benefits: []
      'Increase reply rate 20–40%',
      'Save 5–8 hours per rep weekly'
    ],
    ctaLabel: 'Start 14‑day Trial',
    href: 'https://ziontechgroup.com/contact'
  },
  {}
    id: 'enterprise-rag-chat',
    title: 'Enterprise RAG Knowledge Chat',
    description: 'Private chat over docs, wikis, tickets, and data with citations and access controls.',
    category: 'AI Solutions',
    price: '$2,999',
    billing: 'month',
    features: []
      'Vector + keyword hybrid search',
      'Source citations and grounding',
      'SSO/Okta and row‑level permissions',
      'Plugins: Confluence, Google Drive, SharePoint'
    ],
    benefits: []
      'Deflect internal tickets 15–30%',
      'Accelerate onboarding and support'
    ],
    ctaLabel: 'Book Demo',
    href: 'https://ziontechgroup.com/services'
  },
  {}
    id: 'meeting-notes-agent',
    title: 'Meeting Notes & Action Items Agent',
    description: 'Transcribes meetings, extracts actions/owners, and syncs to Jira, Asana, or CRM.',
    category: 'Micro SaaS',
    price: '$69',
    billing: 'month',
    features: []
      'Accurate transcription',
      'Action item and owner extraction',
      'Calendar integration',
      'CRM/PM sync'
    ],
    benefits: []
      'Reduce manual note time by 90%',
      'Improve accountability and follow‑through'
    ],
    ctaLabel: 'Start Now',
    href: 'https://ziontechgroup.com/services'
  },
  {}
    id: 'cloud-cost-optimizer-pro',
    title: 'Cloud Cost Optimizer Pro',
    description: 'FinOps automation for AWS, Azure, and GCP with savings insights and guardrails.',
    category: 'Cloud & DevOps',
    price: '$1,999',
    billing: 'month',
    features: []
      'Automated rightsizing and scheduling',
      'RI/SP recommendations',
      'Unused resource detection',
      'Budget alerts and governance'
    ],
    benefits: []
      'Cut monthly cloud spend 15–35%',
      'Prevent surprise overages'
    ],
    ctaLabel: 'Get Assessment',
    href: 'https://ziontechgroup.com/contact'
  },
  {}
    id: 'soc2-compliance-automation',
    title: 'SOC 2 Compliance Automation',
    description: 'Evidence collection, control monitoring, and audit prep with policy automation.',
    category: 'Cybersecurity',
    price: '$4,000',
    billing: 'project',
    features: []
      'Pre‑built policy library',
      'Automated evidence collection',
      'Vendor risk tracking',
      'Continuous control monitoring'
    ],
    benefits: []
      'Accelerate audit readiness',
      'Reduce manual effort 50%+'
    ],
    ctaLabel: 'Request Quote',
    href: 'https://ziontechgroup.com/contact'
  },
  {}
    id: 'm365-security-copilot',
    title: 'Microsoft 365 Security Copilot',
    description: 'Detects misconfigurations, risky apps, and insecure sharing across M365.',
    category: 'Cybersecurity',
    price: '$1,499',
    billing: 'month',
    features: []
      'SharePoint/OneDrive exposure scan',
      'Conditional Access review',
      'Phishing simulation and training',
      'Automated hardening playbooks'
    ],
    benefits: []
      'Reduce breach risk significantly',
      'Meet compliance requirements'
    ],
    ctaLabel: 'Schedule Assessment',
    href: 'https://ziontechgroup.com/services'
  },
  {}
    id: 'devops-release-automation',
    title: 'DevOps Release Automation',
    description: 'GitHub Actions/GitLab CI pipelines with quality gates, test coverage, and blue‑green deploys.',
    category: 'Cloud & DevOps',
    price: '$8,000',
    billing: 'project',
    features: []
      'CI/CD pipeline design',
      'Automated tests and linting',
      'Deploy previews and canary',
      'Observability integration'
    ],
    benefits: []
      'Ship faster with confidence',
      'Reduce change failure rate'
    ],
    ctaLabel: 'Get Proposal',
    href: 'https://ziontechgroup.com/contact'
  },
  {}
    id: 'data-governance-observability',
    title: 'Data Governance & Observability',
    description: 'Lineage, quality checks, and access control for analytics and ML platforms.',
    category: 'Data & Analytics',
    price: '$12,000',
    billing: 'project',
    features: []
      'Column‑level lineage',
      'Quality rules and SLAs',
      'Access policies and anonymization',
      'dbt/Great Expectations integration'
    ],
    benefits: []
      'Trustworthy analytics',
      'Faster root‑cause analysis'
    ],
    ctaLabel: 'Talk to Data Team',
    href: 'https://ziontechgroup.com/contact'
  },
  {}
    id: 'developer-productivity-copilot',
    title: 'Developer Productivity Copilot',
    description: 'AI reviews PRs, suggests tests, and highlights risky changes across monorepos.',
    category: 'AI Solutions',
    price: '$299',
    billing: 'month',
    features: []
      'Automated PR review comments',
      'Test case generation hints',
      'Security and secret scanning',
      'Code search with embeddings'
    ],
    benefits: []
      'Higher code quality',
      'Fewer regressions and faster PRs'
    ],
    ctaLabel: 'Try Copilot',
    href: 'https://ziontechgroup.com/services'
  },
  {}
    id: 'customer-support-chatbot-pro',
    title: 'Customer Support Chatbot Pro',
    description: 'Deflects tickets with high‑quality answers grounded in your docs and tickets.',
    category: 'AI Solutions',
    price: '$399',
    billing: 'month',
    features: []
      'Zendesk/Freshdesk connectors',
      'Escalation to human with context',
      'Analytics and feedback loops',
      'Multilingual responses'
    ],
    benefits: []
      'Reduce support load 20–50%',
      'Improve CSAT/NPS'
    ],
    ctaLabel: 'Launch Bot',
    href: 'https://ziontechgroup.com/services'
  },
  {}
    id: 'landing-page-generator',
    title: 'Landing Page Generator',
    description: 'Create SEO‑optimized landing pages from a single prompt with analytics baked in.',
    category: 'Micro SaaS',
    price: '$99',
    billing: 'month',
    features: []
      'Templates tuned for conversion',
      'A/B testing support',
      'SEO meta and schema automation',
      'Image and copy generation'
    ],
    benefits: []
      'Ship pages in minutes',
      'Increase lead conversion'
    ],
    ctaLabel: 'Generate a Page',
    href: 'https://ziontechgroup.com/services'
  },
  {}
    id: 'managed-kubernetes-sre',
    title: 'Managed Kubernetes SRE',
    description: 'Production‑grade clusters with IaC, monitoring, and 24/7 on‑call SRE support.',
    category: 'IT Services',
    price: '$125',
    billing: 'hour',
    features: []
      'EKS/AKS/GKE setup and hardening',
      'Terraform modules and GitOps',
      'Prometheus/Grafana/Alerting',
      'Runbooks and incident response'
    ],
    benefits: []
      'Resilient infra with best practices',
      'Lower downtime and faster MTTR'
    ],
    ctaLabel: 'Engage SRE Team',
    href: 'https://ziontechgroup.com/contact'
  },
  {}
    id: 'mlops-platform-setup',
    title: 'MLOps Platform Setup',
    description: 'End‑to‑end MLOps with experiment tracking, feature store, and automated deployment.',
    category: 'AI Solutions',
    price: '$15,000',
    billing: 'project',
    features: []
      'MLflow/Weights & Biases integration',
      'Feature store and model registry',
      'CI/CD for models',
      'Monitoring and drift detection'
    ],
    benefits: []
      'Shorter time‑to‑production',
      'Better governance and reproducibility'
    ],
    ctaLabel: 'Plan Your Platform',
    href: 'https://ziontechgroup.com/contact'
  },
  {}
    id: 'bi-dashboards-dbt-duckdb',
    title: 'BI Dashboards with dbt + DuckDB',
    description: 'Modern ELT with dbt and DuckDB for fast, low‑cost analytics and dashboards.',
    category: 'Data & Analytics',
    price: '$9,000',
    billing: 'project',
    features: []
      'dbt models and tests',
      'DuckDB or warehouse targets',
      'Superset/Metabase dashboards',
      'Data contracts and docs'
    ],
    benefits: []
      'Lower analytics spend',
      'Maintainable data models'
    ],
    ctaLabel: 'Get a BI Sprint',
    href: 'https://ziontechgroup.com/contact'
  }
];

