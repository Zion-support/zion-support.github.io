export type Service = {
  slug: string;
  name: string;
  category: 'AI Services' | 'Micro SaaS' | 'IT Services';
  headline: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    plan: string;
    pricePerMonthUsd: number | 'Custom';
    includes: string[];
  }[];
  externalLinks: { label: string; url: string }[];
};

export const services: Service[] = [
  {
    slug: 'ai-content-optimization-platform',
    name: 'AI Content Optimization Platform',
    category: 'AI Services',
    headline: 'Increase content conversion with AI-driven suggestions and testing',
    description:
      'Optimize blogs, landing pages, and product copy using LLM-driven rewrites, tone control, SEO entity coverage, and auto A/B test suggestions.',
    features: [
      'LLM-based rewrite with brand tone presets',
      'On-page SEO entity coverage insights',
      'Headline and CTA generator with multi-variant suggestions',
      'Auto-experiments export for Google Optimize/VWO',
      'Multilingual content support'
    ],
    benefits: [
      'Reduce content production time by 40–60%',
      'Increase conversion rates by 10–25% on average',
      'Improve SEO coverage for priority entities and intents'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 199, includes: ['Up to 20 pages', '3 brand presets', 'Email support'] },
      { plan: 'Growth', pricePerMonthUsd: 499, includes: ['Up to 100 pages', 'A/B export', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 'Custom', includes: ['SAML SSO', 'Custom workflows', 'Dedicated CSM'] }
    ],
    externalLinks: [
      { label: 'Content optimization best practices', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'A/B testing guide', url: 'https://www.optimizely.com/optimization-glossary/ab-testing/' }
    ]
  },
  {
    slug: 'ai-lead-scoring-api',
    name: 'AI Lead Scoring API',
    category: 'Micro SaaS',
    headline: 'Score inbound leads with intent, firmographics, and activity signals',
    description:
      'Drop-in API to score and route leads using a configurable ML model that blends CRM activity, UTM, content touchpoints, and enrichment.',
    features: [
      'Configurable feature store and model weights',
      'Enrichment via Clearbit/People Data Labs connectors',
      'Webhooks for CRM routing (HubSpot, Salesforce)',
      'Bias/variance monitoring dashboards'
    ],
    benefits: [
      'Prioritize high-intent leads automatically',
      'Reduce manual triage and response delays',
      'Improve pipeline quality and win-rate'
    ],
    pricing: [
      { plan: 'Developer', pricePerMonthUsd: 49, includes: ['50k events', 'Sandbox key', 'Community support'] },
      { plan: 'Pro', pricePerMonthUsd: 299, includes: ['1M events', 'Prod key', 'Email support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 'Custom', includes: ['Custom SLAs', 'On-prem options', 'SAML SSO'] }
    ],
    externalLinks: [
      { label: 'HubSpot CRM', url: 'https://www.hubspot.com/products/crm' },
      { label: 'Salesforce', url: 'https://www.salesforce.com/' }
    ]
  },
  {
    slug: 'cloud-native-devops-platform',
    name: 'Cloud-Native DevOps Platform',
    category: 'IT Services',
    headline: 'Golden-path CI/CD, IaC, and observability for teams of any size',
    description:
      'Opinionated platform engineering accelerators: VPC/IaC blueprints, CI/CD templates, SRE runbooks, cost guardrails, and SOC2-ready controls.',
    features: [
      'Terraform/Azure Bicep reference stacks',
      'GitHub Actions/GitLab CI pipelines',
      'SRE runbooks and golden signals dashboards',
      'FinOps budgets and anomaly alerts'
    ],
    benefits: [
      'Ship faster on a paved road',
      'Reduce cloud waste by 20–35%',
      'Improve reliability with SLOs and error budgets'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 999, includes: ['1 environment', 'Core blueprints', 'Email support'] },
      { plan: 'Scale', pricePerMonthUsd: 2499, includes: ['3 environments', 'Advanced dashboards', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 'Custom', includes: ['Custom controls', 'Dedicated SRE', 'On-call assistance'] }
    ],
    externalLinks: [
      { label: 'Terraform docs', url: 'https://developer.hashicorp.com/terraform/docs' },
      { label: 'Google SRE workbook', url: 'https://sre.google/workbook/' }
    ]
  },
  {
    slug: 'ai-cybersecurity-automation-suite',
    name: 'AI Cybersecurity Automation Suite',
    category: 'AI Services',
    headline: 'Detect, triage, and respond faster with autonomous security playbooks',
    description:
      'Combine LLM-assisted triage with rule-based and ML detections. Automate response with safe-guarded playbooks across EDR, SIEM, and cloud.',
    features: [
      'LLM-assisted alert summarization',
      'MITRE ATT&CK mapped detections',
      'SOAR playbooks with approvals',
      'Attack surface inventory and drift alerts'
    ],
    benefits: [
      'Cut alert fatigue and MTTR',
      'Improve detection coverage and response consistency',
      'Reduce breach risk and compliance gaps'
    ],
    pricing: [
      { plan: 'SOC Starter', pricePerMonthUsd: 1499, includes: ['Up to 5k EPS', 'Triage assistant', 'Email support'] },
      { plan: 'SOC Pro', pricePerMonthUsd: 3999, includes: ['Up to 25k EPS', 'SOAR playbooks', 'Priority support'] },
      { plan: 'SOC Enterprise', pricePerMonthUsd: 'Custom', includes: ['MSSP integration', 'Custom detections', '24/7 support'] }
    ],
    externalLinks: [
      { label: 'MITRE ATT&CK', url: 'https://attack.mitre.org/' },
      { label: 'NIST CSF', url: 'https://www.nist.gov/cyberframework' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
