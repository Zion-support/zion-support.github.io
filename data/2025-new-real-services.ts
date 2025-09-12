export interface NewRealService2025 {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing?: {
    starter?: string;
    professional?: string;
    enterprise?: string;
    monthly?: string;
    yearly?: string;
    custom?: string;
  };
  benefits?: string[];
  useCases?: string[];
  technology?: string[];
  targetAudience?: string;
  marketSize?: string;
  competitiveAdvantage?: string;
  slug?: string;
}

export const newRealServices2025: NewRealService2025[] = [
  {
    id: 'ai-data-governance-suite',
    name: 'AI Data Governance Suite',
    description: 'End-to-end data governance with lineage, access controls, PII detection, and policy automation powered by AI.',
    category: 'enterprise',
    features: [
      'Automated data lineage mapping',
      'PII/PHI detection and redaction',
      'Policy-as-code enforcement',
      'Access governance and approvals',
      'Audit trails and reporting',
      'Cloud and on-prem connectors'
    ],
    pricing: { starter: '$199/month', professional: '$499/month', enterprise: 'Contact us' },
    benefits: ['Reduce risk', 'Ensure compliance', 'Increase trust'],
    useCases: ['SOC2/GDPR readiness', 'Access audits', 'Data minimization'],
    technology: ['OpenAI', 'Airflow', 'dbt', 'PostgreSQL'],
    targetAudience: 'Mid-market and enterprise data teams',
    marketSize: '$12B+ data governance',
    competitiveAdvantage: 'Policy-as-code with AI remediation',
    slug: 'ai-data-governance-suite'
  },
  {
    id: 'ai-agent-operations-platform',
    name: 'AI Agent Operations Platform',
    description: 'Operate fleets of production AI agents with guardrails, evals, cost controls, and observability.',
    category: 'ai',
    features: [
      'AI agent registry and versioning',
      'Safety guardrails and red teaming',
      'Offline/online evals with benchmarks',
      'Spend controls and rate limiting',
      'Incident response and rollback',
      'Full observability and tracing'
    ],
    pricing: { starter: '$149/month', professional: '$399/month', enterprise: 'Contact us' },
    benefits: ['Safer agents', 'Lower costs', 'Higher reliability'],
    useCases: ['Support agents', 'Sales agents', 'Workflow automation'],
    technology: ['LangGraph', 'OpenAI', 'Vector DBs', 'OpenTelemetry'],
    targetAudience: 'Product and platform teams',
    marketSize: '$8B+ agent ops',
    competitiveAdvantage: 'Unified guardrails + evals + ops in one',
    slug: 'ai-agent-operations-platform'
  }
];

