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
  },
  {
    slug: 'ai-social-media-scheduler',
    name: 'AI Social Media Scheduler',
    category: 'Micro SaaS',
    headline: 'AI-powered social media scheduling with intelligent optimization',
    description: 'Transform your social media presence with AI-powered scheduling, content optimization, and intelligent hashtag suggestions across all platforms.',
    features: [
      'AI content optimization',
      'Multi-platform management',
      'Advanced analytics',
      'Smart scheduling',
      'Content automation',
      'Brand safety'
    ],
    benefits: [
      '300% increase in engagement',
      'Save 10+ hours weekly',
      'Data-driven insights'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 29, includes: ['Up to 3 social accounts', '100 posts per month', 'Basic AI optimization'] },
      { plan: 'Professional', pricePerMonthUsd: 79, includes: ['Up to 10 social accounts', '500 posts per month', 'Advanced AI features'] },
      { plan: 'Enterprise', pricePerMonthUsd: 199, includes: ['Unlimited accounts', 'Unlimited posts', 'Full AI suite'] }
    ],
    externalLinks: [
      { label: 'Social Media Today Research', url: 'https://www.socialmediatoday.com/' },
      { label: 'Hootsuite Digital Report', url: 'https://blog.hootsuite.com/' }
    ]
  },
  {
    slug: 'ai-email-marketing-automation',
    name: 'AI Email Marketing Automation',
    category: 'Micro SaaS',
    headline: 'Intelligent email marketing with AI-powered personalization',
    description: 'Revolutionize your email marketing with AI-powered automation, intelligent segmentation, and personalized content that drives conversions.',
    features: [
      'Intelligent segmentation',
      'AI content personalization',
      'Campaign optimization',
      'Automated workflows',
      'Advanced analytics',
      'Deliverability optimization'
    ],
    benefits: [
      '45% higher open rates',
      '60% increase in click-through rates',
      '300% ROI improvement'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 49, includes: ['Up to 5,000 contacts', '10,000 emails/month', 'Basic AI features'] },
      { plan: 'Professional', pricePerMonthUsd: 149, includes: ['Up to 25,000 contacts', '50,000 emails/month', 'Advanced AI automation'] },
      { plan: 'Enterprise', pricePerMonthUsd: 399, includes: ['Unlimited contacts', 'Unlimited emails', 'Full AI suite'] }
    ],
    externalLinks: [
      { label: 'McKinsey Digital Marketing Report', url: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights' },
      { label: 'Experian Email Marketing Study', url: 'https://www.experian.com/' }
    ]
  },
  {
    slug: 'ai-project-management-platform',
    name: 'AI Project Management Platform',
    category: 'Micro SaaS',
    headline: 'Intelligent project management with AI-powered task automation',
    description: 'Transform your project management with AI-powered task automation, intelligent resource allocation, and predictive analytics for optimal team performance.',
    features: [
      'AI task assignment',
      'Predictive analytics',
      'Automated workflows',
      'Resource optimization',
      'Performance insights',
      'Smart collaboration'
    ],
    benefits: [
      '40% faster project delivery',
      '25% reduction in project costs',
      '90% team satisfaction'
    ],
    pricing: [
      { plan: 'Team', pricePerMonthUsd: 12, includes: ['Up to 10 team members', 'Basic AI features', 'Project templates'] },
      { plan: 'Professional', pricePerMonthUsd: 25, includes: ['Up to 50 team members', 'Advanced AI automation', 'Custom workflows'] },
      { plan: 'Enterprise', pricePerMonthUsd: 45, includes: ['Unlimited team members', 'Full AI suite', 'White-label options'] }
    ],
    externalLinks: [
      { label: 'PMI Project Management Institute', url: 'https://www.pmi.org/' },
      { label: 'Gartner Project Management Research', url: 'https://www.gartner.com/en/project-management' }
    ]
  },
  {
    slug: 'aiops-platform',
    name: 'AIOps Platform',
    category: 'IT Services',
    headline: 'AI-powered IT operations with intelligent monitoring',
    description: 'Transform your IT operations with AI-powered monitoring, automated incident response, and predictive maintenance for maximum uptime and efficiency.',
    features: [
      'Intelligent monitoring',
      'Automated incident response',
      'Predictive maintenance',
      'Advanced analytics',
      'Security integration',
      'Workflow automation'
    ],
    benefits: [
      '75% reduction in MTTR',
      '99.9% uptime achievement',
      '40% cost reduction'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 2500, includes: ['Up to 1,000 monitored assets', 'Basic AI monitoring', 'Standard incident response'] },
      { plan: 'Professional', pricePerMonthUsd: 5000, includes: ['Up to 5,000 monitored assets', 'Advanced AI features', 'Automated remediation'] },
      { plan: 'Enterprise', pricePerMonthUsd: 10000, includes: ['Unlimited monitored assets', 'Full AI suite', 'Custom automation'] }
    ],
    externalLinks: [
      { label: 'Gartner AIOps Market Research', url: 'https://www.gartner.com/en/information-technology/glossary/aiops-artificial-intelligence-operations' },
      { label: 'Forrester AIOps Study', url: 'https://www.forrester.com/' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
