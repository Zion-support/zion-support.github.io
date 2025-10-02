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
  },
  {
    slug: 'ai-invoice-processing-saas',
    name: 'AI Invoice Processing SaaS',
    category: 'Micro SaaS',
    headline: 'Automate invoice processing with AI-powered data extraction and validation',
    description: 'Transform your accounts payable with intelligent invoice processing that extracts data, validates information, and automates approval workflows.',
    features: [
      'OCR-powered data extraction',
      'Automated validation rules',
      'Smart approval workflows',
      'Multi-format support (PDF, images, emails)',
      'Integration with accounting software',
      'Fraud detection algorithms'
    ],
    benefits: [
      '90% reduction in manual data entry',
      '50% faster invoice processing',
      '99.5% accuracy in data extraction'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 99, includes: ['Up to 500 invoices/month', 'Basic AI extraction', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 299, includes: ['Up to 2,000 invoices/month', 'Advanced validation', 'API access'] },
      { plan: 'Enterprise', pricePerMonthUsd: 799, includes: ['Unlimited invoices', 'Custom workflows', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Invoice Processing Best Practices', url: 'https://www.investopedia.com/terms/a/accounts-payable.asp' },
      { label: 'OCR Technology Guide', url: 'https://aws.amazon.com/textract/' }
    ]
  },
  {
    slug: 'ai-expense-management-platform',
    name: 'AI Expense Management Platform',
    category: 'Micro SaaS',
    headline: 'Intelligent expense tracking and reimbursement automation',
    description: 'Streamline expense management with AI-powered receipt scanning, policy compliance checking, and automated reimbursement processing.',
    features: [
      'Smart receipt scanning and categorization',
      'Policy compliance automation',
      'Automated approval workflows',
      'Real-time expense analytics',
      'Mobile app with offline support',
      'Integration with payroll systems'
    ],
    benefits: [
      '75% reduction in expense processing time',
      '95% policy compliance rate',
      '40% cost savings on expense management'
    ],
    pricing: [
      { plan: 'Small Business', pricePerMonthUsd: 49, includes: ['Up to 50 employees', 'Basic expense tracking', 'Standard reporting'] },
      { plan: 'Growing Company', pricePerMonthUsd: 149, includes: ['Up to 200 employees', 'Advanced analytics', 'Custom policies'] },
      { plan: 'Enterprise', pricePerMonthUsd: 399, includes: ['Unlimited employees', 'Full automation', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Expense Management ROI Calculator', url: 'https://www.concur.com/' },
      { label: 'Corporate Travel Policies', url: 'https://www.gbtravel.com/' }
    ]
  },
  {
    slug: 'ai-customer-onboarding-automation',
    name: 'AI Customer Onboarding Automation',
    category: 'Micro SaaS',
    headline: 'Automate and personalize customer onboarding experiences',
    description: 'Create seamless onboarding journeys with AI-powered personalization, automated task management, and intelligent progress tracking.',
    features: [
      'Personalized onboarding paths',
      'Automated task assignment and tracking',
      'Progress analytics and insights',
      'Multi-channel communication',
      'Integration with CRM systems',
      'Customer satisfaction monitoring'
    ],
    benefits: [
      '60% faster time-to-value',
      '85% customer satisfaction rate',
      '45% reduction in churn during onboarding'
    ],
    pricing: [
      { plan: 'Startup', pricePerMonthUsd: 79, includes: ['Up to 1,000 customers', 'Basic automation', 'Email support'] },
      { plan: 'Scale', pricePerMonthUsd: 199, includes: ['Up to 10,000 customers', 'Advanced personalization', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 499, includes: ['Unlimited customers', 'Custom workflows', 'White-label options'] }
    ],
    externalLinks: [
      { label: 'Customer Onboarding Best Practices', url: 'https://www.gainsight.com/' },
      { label: 'Customer Success Metrics', url: 'https://www.totango.com/' }
    ]
  },
  {
    slug: 'ai-lead-generation-engine',
    name: 'AI Lead Generation Engine',
    category: 'Micro SaaS',
    headline: 'Automated lead generation with AI-powered prospecting and qualification',
    description: 'Generate high-quality leads automatically with AI-powered prospecting, email outreach, and lead scoring across multiple channels.',
    features: [
      'AI-powered prospect identification',
      'Automated email sequences',
      'Multi-channel outreach (email, LinkedIn, phone)',
      'Lead scoring and qualification',
      'CRM integration and sync',
      'Performance analytics and optimization'
    ],
    benefits: [
      '300% increase in qualified leads',
      '50% reduction in lead generation costs',
      '25% higher conversion rates'
    ],
    pricing: [
      { plan: 'Solo', pricePerMonthUsd: 97, includes: ['Up to 1,000 prospects', 'Basic automation', 'Email support'] },
      { plan: 'Team', pricePerMonthUsd: 297, includes: ['Up to 5,000 prospects', 'Advanced features', 'Priority support'] },
      { plan: 'Agency', pricePerMonthUsd: 597, includes: ['Unlimited prospects', 'White-label options', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Lead Generation Strategies', url: 'https://blog.hubspot.com/marketing/lead-generation-guide' },
      { label: 'Sales Automation Tools', url: 'https://www.salesforce.com/products/sales-cloud/' }
    ]
  },
  {
    slug: 'ai-inventory-optimization-saas',
    name: 'AI Inventory Optimization SaaS',
    category: 'Micro SaaS',
    headline: 'Optimize inventory levels with AI-powered demand forecasting',
    description: 'Reduce stockouts and overstock with intelligent demand forecasting, automated reorder points, and real-time inventory optimization.',
    features: [
      'AI-powered demand forecasting',
      'Automated reorder point calculations',
      'Seasonal trend analysis',
      'Multi-location inventory management',
      'Supplier performance tracking',
      'Cost optimization recommendations'
    ],
    benefits: [
      '30% reduction in inventory costs',
      '95% reduction in stockouts',
      '20% improvement in cash flow'
    ],
    pricing: [
      { plan: 'Small Business', pricePerMonthUsd: 149, includes: ['Up to 1,000 SKUs', 'Basic forecasting', 'Email support'] },
      { plan: 'Growing Business', pricePerMonthUsd: 399, includes: ['Up to 10,000 SKUs', 'Advanced analytics', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 899, includes: ['Unlimited SKUs', 'Custom algorithms', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Inventory Management Best Practices', url: 'https://www.netsuite.com/portal/resource/articles/inventory-management.shtml' },
      { label: 'Supply Chain Optimization', url: 'https://www.sap.com/products/supply-chain-management.html' }
    ]
  },
  {
    slug: 'ai-social-media-analytics-platform',
    name: 'AI Social Media Analytics Platform',
    category: 'Micro SaaS',
    headline: 'Advanced social media analytics with AI-powered insights and recommendations',
    description: 'Transform your social media strategy with AI-powered analytics, sentiment analysis, competitor tracking, and actionable insights.',
    features: [
      'AI-powered sentiment analysis',
      'Competitor tracking and benchmarking',
      'Influencer identification and analysis',
      'Content performance optimization',
      'Trend prediction and alerts',
      'ROI tracking and attribution'
    ],
    benefits: [
      '40% improvement in engagement rates',
      '60% increase in social media ROI',
      'Real-time trend identification'
    ],
    pricing: [
      { plan: 'Individual', pricePerMonthUsd: 49, includes: ['Up to 5 social accounts', 'Basic analytics', 'Email support'] },
      { plan: 'Business', pricePerMonthUsd: 149, includes: ['Up to 20 social accounts', 'Advanced insights', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 399, includes: ['Unlimited accounts', 'Custom reports', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Social Media Analytics Guide', url: 'https://blog.hootsuite.com/social-media-analytics/' },
      { label: 'Social Media ROI Calculator', url: 'https://www.sproutsocial.com/insights/social-media-roi-calculator/' }
    ]
  },
  {
    slug: 'ai-appointment-scheduling-saas',
    name: 'AI Appointment Scheduling SaaS',
    category: 'Micro SaaS',
    headline: 'Intelligent appointment scheduling with AI-powered optimization',
    description: 'Streamline appointment booking with AI-powered scheduling optimization, automated reminders, and smart calendar management.',
    features: [
      'AI-powered time slot optimization',
      'Automated reminder sequences',
      'Multi-calendar integration',
      'Smart rescheduling suggestions',
      'Customer preference learning',
      'No-show prediction and prevention'
    ],
    benefits: [
      '80% reduction in scheduling conflicts',
      '50% decrease in no-shows',
      '90% customer satisfaction rate'
    ],
    pricing: [
      { plan: 'Solo', pricePerMonthUsd: 29, includes: ['Up to 100 appointments/month', 'Basic automation', 'Email support'] },
      { plan: 'Team', pricePerMonthUsd: 79, includes: ['Up to 1,000 appointments/month', 'Advanced features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 199, includes: ['Unlimited appointments', 'Custom integrations', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Appointment Scheduling Best Practices', url: 'https://www.calendly.com/' },
      { label: 'Healthcare Scheduling Solutions', url: 'https://www.doxy.me/' }
    ]
  },
  {
    slug: 'ai-chatbot-builder-platform',
    name: 'AI Chatbot Builder Platform',
    category: 'Micro SaaS',
    headline: 'Build intelligent chatbots without coding using AI-powered conversation design',
    description: 'Create sophisticated chatbots with natural language processing, multi-channel deployment, and intelligent conversation flows.',
    features: [
      'No-code chatbot builder',
      'Natural language processing',
      'Multi-channel deployment (web, mobile, social)',
      'Conversation analytics and optimization',
      'Integration with CRM and helpdesk',
      'Custom AI model training'
    ],
    benefits: [
      '90% reduction in customer support costs',
      '24/7 customer service availability',
      '85% customer query resolution rate'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 49, includes: ['Up to 1,000 conversations/month', 'Basic AI features', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 149, includes: ['Up to 10,000 conversations/month', 'Advanced AI', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 399, includes: ['Unlimited conversations', 'Custom AI models', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Chatbot Design Best Practices', url: 'https://www.drift.com/learn/chatbot/' },
      { label: 'Conversational AI Guide', url: 'https://aws.amazon.com/lex/' }
    ]
  },
  {
    slug: 'ai-email-signature-manager',
    name: 'AI Email Signature Manager',
    category: 'Micro SaaS',
    headline: 'Professional email signatures with AI-powered personalization and analytics',
    description: 'Create, manage, and optimize professional email signatures across your organization with AI-powered personalization and tracking.',
    features: [
      'AI-powered signature optimization',
      'Centralized signature management',
      'Personalization based on recipient',
      'Click tracking and analytics',
      'Brand consistency enforcement',
      'Mobile-responsive signatures'
    ],
    benefits: [
      '200% increase in email signature clicks',
      'Consistent brand representation',
      'Detailed engagement analytics'
    ],
    pricing: [
      { plan: 'Small Team', pricePerMonthUsd: 39, includes: ['Up to 10 users', 'Basic personalization', 'Email support'] },
      { plan: 'Growing Company', pricePerMonthUsd: 99, includes: ['Up to 50 users', 'Advanced analytics', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 249, includes: ['Unlimited users', 'Custom integrations', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Email Signature Best Practices', url: 'https://www.hubspot.com/email-signature-generator' },
      { label: 'Email Marketing Analytics', url: 'https://mailchimp.com/marketing-glossary/email-analytics/' }
    ]
  },
  {
    slug: 'ai-content-calendar-saas',
    name: 'AI Content Calendar SaaS',
    category: 'Micro SaaS',
    headline: 'Intelligent content planning with AI-powered optimization and scheduling',
    description: 'Plan, schedule, and optimize your content strategy with AI-powered recommendations, trend analysis, and performance insights.',
    features: [
      'AI-powered content recommendations',
      'Trend analysis and prediction',
      'Multi-platform scheduling',
      'Performance analytics and optimization',
      'Collaborative planning tools',
      'Content gap analysis'
    ],
    benefits: [
      '50% improvement in content performance',
      '30% increase in engagement rates',
      'Streamlined content planning workflow'
    ],
    pricing: [
      { plan: 'Solo Creator', pricePerMonthUsd: 29, includes: ['Up to 3 social accounts', 'Basic AI recommendations', 'Email support'] },
      { plan: 'Team', pricePerMonthUsd: 79, includes: ['Up to 10 social accounts', 'Advanced analytics', 'Priority support'] },
      { plan: 'Agency', pricePerMonthUsd: 199, includes: ['Unlimited accounts', 'White-label options', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Content Marketing Strategy Guide', url: 'https://blog.hubspot.com/marketing/content-marketing' },
      { label: 'Social Media Content Planning', url: 'https://www.coSchedule.com/' }
    ]
  },
  {
    slug: 'cloud-migration-services',
    name: 'Cloud Migration Services',
    category: 'IT Services',
    headline: 'Seamless cloud migration with zero-downtime and cost optimization',
    description: 'Migrate your infrastructure to the cloud with expert guidance, automated tools, and proven methodologies for minimal disruption and maximum ROI.',
    features: [
      'Comprehensive migration assessment',
      'Zero-downtime migration strategies',
      'Cost optimization and resource right-sizing',
      'Security and compliance validation',
      'Performance monitoring and optimization',
      '24/7 migration support'
    ],
    benefits: [
      '60% reduction in infrastructure costs',
      '99.9% uptime during migration',
      '50% faster deployment cycles'
    ],
    pricing: [
      { plan: 'Assessment Only', pricePerMonthUsd: 2500, includes: ['Migration readiness assessment', 'Cost analysis report', 'Migration roadmap'] },
      { plan: 'Managed Migration', pricePerMonthUsd: 7500, includes: ['Full migration execution', 'Training and documentation', '3 months post-migration support'] },
      { plan: 'Enterprise Migration', pricePerMonthUsd: 'Custom', includes: ['Complex multi-cloud migrations', 'Dedicated migration team', 'Custom SLAs'] }
    ],
    externalLinks: [
      { label: 'AWS Migration Hub', url: 'https://aws.amazon.com/migration/' },
      { label: 'Azure Migration Guide', url: 'https://azure.microsoft.com/en-us/migration/' }
    ]
  },
  {
    slug: 'devops-automation-services',
    name: 'DevOps Automation Services',
    category: 'IT Services',
    headline: 'Accelerate development with comprehensive DevOps automation and CI/CD pipelines',
    description: 'Transform your development workflow with automated CI/CD pipelines, infrastructure as code, and comprehensive DevOps practices.',
    features: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as Code (IaC) automation',
      'Container orchestration and management',
      'Monitoring and alerting setup',
      'Security scanning and compliance',
      'Performance optimization'
    ],
    benefits: [
      '80% reduction in deployment time',
      '95% reduction in deployment errors',
      '40% improvement in developer productivity'
    ],
    pricing: [
      { plan: 'Pipeline Setup', pricePerMonthUsd: 3500, includes: ['Basic CI/CD pipeline', 'Git integration', 'Email support'] },
      { plan: 'Full DevOps', pricePerMonthUsd: 8500, includes: ['Complete automation', 'Monitoring setup', 'Priority support'] },
      { plan: 'Enterprise DevOps', pricePerMonthUsd: 15000, includes: ['Multi-environment setup', 'Custom tooling', 'Dedicated team'] }
    ],
    externalLinks: [
      { label: 'DevOps Best Practices', url: 'https://aws.amazon.com/devops/what-is-devops/' },
      { label: 'CI/CD Pipeline Guide', url: 'https://www.atlassian.com/continuous-delivery/continuous-integration' }
    ]
  },
  {
    slug: 'cybersecurity-consulting-services',
    name: 'Cybersecurity Consulting Services',
    category: 'IT Services',
    headline: 'Comprehensive cybersecurity solutions to protect your business from evolving threats',
    description: 'Strengthen your security posture with expert cybersecurity consulting, risk assessments, and implementation of enterprise-grade security solutions.',
    features: [
      'Security risk assessment and audit',
      'Penetration testing and vulnerability scanning',
      'Security policy development and implementation',
      'Incident response planning and training',
      'Compliance framework implementation',
      'Security awareness training programs'
    ],
    benefits: [
      '90% reduction in security incidents',
      '100% compliance with industry standards',
      '24/7 security monitoring and response'
    ],
    pricing: [
      { plan: 'Security Assessment', pricePerMonthUsd: 5000, includes: ['Comprehensive security audit', 'Risk assessment report', 'Remediation recommendations'] },
      { plan: 'Managed Security', pricePerMonthUsd: 12000, includes: ['Continuous monitoring', 'Incident response', 'Security updates'] },
      { plan: 'Enterprise Security', pricePerMonthUsd: 'Custom', includes: ['Custom security solutions', 'Dedicated security team', 'Advanced threat protection'] }
    ],
    externalLinks: [
      { label: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
      { label: 'ISO 27001 Compliance', url: 'https://www.iso.org/isoiec-27001-information-security.html' }
    ]
  },
  {
    slug: 'data-analytics-consulting',
    name: 'Data Analytics Consulting',
    category: 'IT Services',
    headline: 'Transform raw data into actionable insights with advanced analytics solutions',
    description: 'Unlock the power of your data with comprehensive analytics solutions, from data warehousing to advanced machine learning models.',
    features: [
      'Data architecture design and implementation',
      'Data warehouse and lake setup',
      'ETL/ELT pipeline development',
      'Business intelligence dashboard creation',
      'Advanced analytics and machine learning',
      'Data governance and quality management'
    ],
    benefits: [
      '300% improvement in data-driven decision making',
      '50% reduction in reporting time',
      'Real-time business insights and analytics'
    ],
    pricing: [
      { plan: 'Analytics Setup', pricePerMonthUsd: 4500, includes: ['Data architecture design', 'Basic dashboard creation', 'Training sessions'] },
      { plan: 'Advanced Analytics', pricePerMonthUsd: 9500, includes: ['Full analytics platform', 'Machine learning models', 'Custom reporting'] },
      { plan: 'Enterprise Analytics', pricePerMonthUsd: 18000, includes: ['Multi-source data integration', 'Advanced AI models', 'Dedicated analytics team'] }
    ],
    externalLinks: [
      { label: 'Data Analytics Best Practices', url: 'https://aws.amazon.com/big-data/datalakes-and-analytics/' },
      { label: 'Business Intelligence Guide', url: 'https://www.tableau.com/learn/articles/business-intelligence' }
    ]
  },
  {
    slug: 'network-infrastructure-services',
    name: 'Network Infrastructure Services',
    category: 'IT Services',
    headline: 'Design, implement, and manage robust network infrastructure for optimal performance',
    description: 'Build and maintain secure, scalable network infrastructure with expert design, implementation, and ongoing management services.',
    features: [
      'Network architecture design and planning',
      'Hardware procurement and installation',
      'Network security implementation',
      'Performance monitoring and optimization',
      'Disaster recovery planning',
      '24/7 network monitoring and support'
    ],
    benefits: [
      '99.9% network uptime guarantee',
      '50% improvement in network performance',
      'Reduced IT infrastructure costs'
    ],
    pricing: [
      { plan: 'Network Design', pricePerMonthUsd: 3000, includes: ['Network architecture design', 'Equipment recommendations', 'Implementation roadmap'] },
      { plan: 'Full Implementation', pricePerMonthUsd: 8000, includes: ['Complete network setup', 'Security configuration', '3 months support'] },
      { plan: 'Managed Network', pricePerMonthUsd: 12000, includes: ['Ongoing network management', '24/7 monitoring', 'Proactive maintenance'] }
    ],
    externalLinks: [
      { label: 'Network Design Best Practices', url: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/network-design.html' },
      { label: 'Network Security Guide', url: 'https://www.sans.org/white-papers/network-security/' }
    ]
  },
  {
    slug: 'database-optimization-services',
    name: 'Database Optimization Services',
    category: 'IT Services',
    headline: 'Optimize database performance and ensure data integrity with expert database services',
    description: 'Improve database performance, ensure data integrity, and implement best practices for database management and optimization.',
    features: [
      'Database performance tuning and optimization',
      'Query optimization and indexing strategies',
      'Database backup and recovery solutions',
      'Data migration and consolidation',
      'Database security and access control',
      'Monitoring and alerting setup'
    ],
    benefits: [
      '70% improvement in query performance',
      '99.99% data availability',
      '50% reduction in database maintenance costs'
    ],
    pricing: [
      { plan: 'Performance Audit', pricePerMonthUsd: 2500, includes: ['Database performance analysis', 'Optimization recommendations', 'Implementation plan'] },
      { plan: 'Optimization Service', pricePerMonthUsd: 6000, includes: ['Full optimization implementation', 'Performance monitoring', '3 months support'] },
      { plan: 'Managed Database', pricePerMonthUsd: 10000, includes: ['Ongoing database management', '24/7 monitoring', 'Proactive optimization'] }
    ],
    externalLinks: [
      { label: 'Database Optimization Guide', url: 'https://aws.amazon.com/products/databases/' },
      { label: 'SQL Performance Tuning', url: 'https://docs.microsoft.com/en-us/sql/relational-databases/performance/' }
    ]
  },
  {
    slug: 'api-integration-services',
    name: 'API Integration Services',
    category: 'IT Services',
    headline: 'Connect and integrate systems with robust API development and integration solutions',
    description: 'Build, integrate, and manage APIs to connect your systems and enable seamless data flow across your organization.',
    features: [
      'Custom API development and design',
      'Third-party API integration',
      'API gateway setup and management',
      'API documentation and testing',
      'Performance monitoring and optimization',
      'API security and authentication'
    ],
    benefits: [
      '90% reduction in integration time',
      '99.9% API uptime guarantee',
      'Seamless system connectivity'
    ],
    pricing: [
      { plan: 'API Development', pricePerMonthUsd: 4000, includes: ['Custom API development', 'Documentation', 'Testing and validation'] },
      { plan: 'Integration Service', pricePerMonthUsd: 7500, includes: ['Full system integration', 'API gateway setup', '3 months support'] },
      { plan: 'Managed APIs', pricePerMonthUsd: 12000, includes: ['Ongoing API management', '24/7 monitoring', 'Performance optimization'] }
    ],
    externalLinks: [
      { label: 'API Design Best Practices', url: 'https://restfulapi.net/' },
      { label: 'API Integration Guide', url: 'https://aws.amazon.com/api-gateway/' }
    ]
  },
  {
    slug: 'mobile-app-development-services',
    name: 'Mobile App Development Services',
    category: 'IT Services',
    headline: 'Create powerful mobile applications with native and cross-platform development',
    description: 'Develop high-performance mobile applications for iOS and Android with expert development services and modern technologies.',
    features: [
      'Native iOS and Android development',
      'Cross-platform app development',
      'UI/UX design and optimization',
      'Backend API development',
      'App store deployment and optimization',
      'Performance monitoring and analytics'
    ],
    benefits: [
      '50% faster time-to-market',
      '95% user satisfaction rate',
      'Scalable and maintainable codebase'
    ],
    pricing: [
      { plan: 'MVP Development', pricePerMonthUsd: 8000, includes: ['Basic app development', 'Core features', 'App store submission'] },
      { plan: 'Full App Development', pricePerMonthUsd: 15000, includes: ['Complete app development', 'Backend integration', '3 months support'] },
      { plan: 'Enterprise App', pricePerMonthUsd: 25000, includes: ['Complex app development', 'Custom features', 'Dedicated development team'] }
    ],
    externalLinks: [
      { label: 'Mobile App Development Guide', url: 'https://developer.apple.com/ios/' },
      { label: 'Android Development', url: 'https://developer.android.com/' }
    ]
  },
  {
    slug: 'cloud-infrastructure-management',
    name: 'Cloud Infrastructure Management',
    category: 'IT Services',
    headline: 'Comprehensive cloud infrastructure management and optimization services',
    description: 'Manage and optimize your cloud infrastructure with expert services including monitoring, cost optimization, and performance tuning.',
    features: [
      'Cloud infrastructure monitoring and management',
      'Cost optimization and resource right-sizing',
      'Performance tuning and optimization',
      'Security configuration and compliance',
      'Backup and disaster recovery',
      '24/7 infrastructure support'
    ],
    benefits: [
      '40% reduction in cloud costs',
      '99.9% infrastructure uptime',
      'Automated scaling and optimization'
    ],
    pricing: [
      { plan: 'Basic Management', pricePerMonthUsd: 2000, includes: ['Infrastructure monitoring', 'Basic optimization', 'Email support'] },
      { plan: 'Advanced Management', pricePerMonthUsd: 5000, includes: ['Full infrastructure management', 'Cost optimization', 'Priority support'] },
      { plan: 'Enterprise Management', pricePerMonthUsd: 10000, includes: ['Dedicated management team', 'Custom solutions', '24/7 support'] }
    ],
    externalLinks: [
      { label: 'Cloud Infrastructure Best Practices', url: 'https://aws.amazon.com/architecture/well-architected/' },
      { label: 'Cloud Cost Optimization', url: 'https://cloud.google.com/cost-optimization' }
    ]
  },
  {
    slug: 'it-support-and-helpdesk-services',
    name: 'IT Support and Helpdesk Services',
    category: 'IT Services',
    headline: 'Professional IT support and helpdesk services for uninterrupted business operations',
    description: 'Provide comprehensive IT support to your employees with expert helpdesk services, remote support, and proactive issue resolution.',
    features: [
      '24/7 helpdesk support',
      'Remote desktop support',
      'Hardware and software troubleshooting',
      'User account management',
      'Software installation and updates',
      'IT asset management'
    ],
    benefits: [
      '95% first-call resolution rate',
      'Average 2-minute response time',
      '99% user satisfaction rate'
    ],
    pricing: [
      { plan: 'Basic Support', pricePerMonthUsd: 1500, includes: ['Business hours support', 'Basic troubleshooting', 'Email support'] },
      { plan: 'Standard Support', pricePerMonthUsd: 3000, includes: ['Extended hours support', 'Remote desktop support', 'Priority response'] },
      { plan: 'Premium Support', pricePerMonthUsd: 6000, includes: ['24/7 support', 'Dedicated support team', 'Proactive monitoring'] }
    ],
    externalLinks: [
      { label: 'IT Support Best Practices', url: 'https://www.itsupport.com/' },
      { label: 'Helpdesk Software Solutions', url: 'https://www.zendesk.com/service/' }
    ]
  },
  {
    slug: 'ai-predictive-analytics-platform',
    name: 'AI Predictive Analytics Platform',
    category: 'AI Services',
    headline: 'Advanced predictive analytics with machine learning models for business forecasting',
    description: 'Leverage advanced machine learning algorithms to predict future trends, customer behavior, and business outcomes with high accuracy.',
    features: [
      'Advanced machine learning model development',
      'Time series forecasting and trend analysis',
      'Customer lifetime value prediction',
      'Demand forecasting and inventory optimization',
      'Risk assessment and fraud detection',
      'Real-time prediction API and dashboards'
    ],
    benefits: [
      '85% accuracy in business predictions',
      '40% improvement in decision-making speed',
      '30% reduction in operational risks'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 999, includes: ['Basic predictive models', 'Standard forecasting', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 2499, includes: ['Advanced ML models', 'Custom forecasting', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 5999, includes: ['Custom AI models', 'Real-time predictions', 'Dedicated data science team'] }
    ],
    externalLinks: [
      { label: 'Predictive Analytics Guide', url: 'https://aws.amazon.com/machine-learning/predictive-analytics/' },
      { label: 'Machine Learning Best Practices', url: 'https://cloud.google.com/ai-platform' }
    ]
  },
  {
    slug: 'ai-natural-language-processing-service',
    name: 'AI Natural Language Processing Service',
    category: 'AI Services',
    headline: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding',
    description: 'Transform unstructured text data into actionable insights with state-of-the-art natural language processing and understanding capabilities.',
    features: [
      'Sentiment analysis and emotion detection',
      'Text classification and categorization',
      'Named entity recognition and extraction',
      'Language translation and localization',
      'Text summarization and key phrase extraction',
      'Custom NLP model training'
    ],
    benefits: [
      '95% accuracy in sentiment analysis',
      '80% reduction in manual text processing',
      'Real-time language understanding'
    ],
    pricing: [
      { plan: 'Basic NLP', pricePerMonthUsd: 499, includes: ['Standard text analysis', 'Basic sentiment analysis', 'Email support'] },
      { plan: 'Advanced NLP', pricePerMonthUsd: 1299, includes: ['Advanced text processing', 'Custom model training', 'Priority support'] },
      { plan: 'Enterprise NLP', pricePerMonthUsd: 2999, includes: ['Custom NLP solutions', 'Multi-language support', 'Dedicated NLP team'] }
    ],
    externalLinks: [
      { label: 'NLP Applications Guide', url: 'https://aws.amazon.com/comprehend/' },
      { label: 'Natural Language Understanding', url: 'https://cloud.google.com/natural-language' }
    ]
  },
  {
    slug: 'ai-computer-vision-platform',
    name: 'AI Computer Vision Platform',
    category: 'AI Services',
    headline: 'Advanced computer vision solutions for image and video analysis',
    description: 'Extract meaningful insights from images and videos with cutting-edge computer vision technology and custom model development.',
    features: [
      'Object detection and recognition',
      'Facial recognition and analysis',
      'Image classification and tagging',
      'Video content analysis',
      'OCR and document processing',
      'Custom vision model training'
    ],
    benefits: [
      '98% accuracy in object recognition',
      '90% reduction in manual image processing',
      'Real-time video analysis capabilities'
    ],
    pricing: [
      { plan: 'Vision Basic', pricePerMonthUsd: 799, includes: ['Standard image analysis', 'Basic object detection', 'Email support'] },
      { plan: 'Vision Pro', pricePerMonthUsd: 1999, includes: ['Advanced image processing', 'Custom model training', 'Priority support'] },
      { plan: 'Vision Enterprise', pricePerMonthUsd: 4999, includes: ['Custom vision solutions', 'Real-time processing', 'Dedicated vision team'] }
    ],
    externalLinks: [
      { label: 'Computer Vision Applications', url: 'https://aws.amazon.com/rekognition/' },
      { label: 'Image Recognition Guide', url: 'https://cloud.google.com/vision' }
    ]
  },
  {
    slug: 'ai-recommendation-engine',
    name: 'AI Recommendation Engine',
    category: 'AI Services',
    headline: 'Intelligent recommendation systems for personalized user experiences',
    description: 'Build sophisticated recommendation engines that deliver personalized content, products, and services to increase engagement and conversions.',
    features: [
      'Collaborative filtering algorithms',
      'Content-based recommendations',
      'Hybrid recommendation models',
      'Real-time recommendation updates',
      'A/B testing and optimization',
      'Performance analytics and insights'
    ],
    benefits: [
      '35% increase in user engagement',
      '25% improvement in conversion rates',
      'Personalized user experiences'
    ],
    pricing: [
      { plan: 'Recommendation Basic', pricePerMonthUsd: 699, includes: ['Standard recommendation models', 'Basic personalization', 'Email support'] },
      { plan: 'Recommendation Advanced', pricePerMonthUsd: 1799, includes: ['Advanced algorithms', 'Real-time recommendations', 'Priority support'] },
      { plan: 'Recommendation Enterprise', pricePerMonthUsd: 3999, includes: ['Custom recommendation models', 'Advanced analytics', 'Dedicated ML team'] }
    ],
    externalLinks: [
      { label: 'Recommendation Systems Guide', url: 'https://aws.amazon.com/personalize/' },
      { label: 'Personalization Best Practices', url: 'https://cloud.google.com/recommendations-ai' }
    ]
  },
  {
    slug: 'ai-chatbot-development-platform',
    name: 'AI Chatbot Development Platform',
    category: 'AI Services',
    headline: 'Intelligent conversational AI chatbots with advanced natural language understanding',
    description: 'Create sophisticated AI-powered chatbots that understand context, handle complex conversations, and provide human-like interactions.',
    features: [
      'Advanced natural language understanding',
      'Multi-turn conversation handling',
      'Intent recognition and entity extraction',
      'Integration with business systems',
      'Multi-channel deployment',
      'Continuous learning and improvement'
    ],
    benefits: [
      '90% customer query resolution',
      '24/7 automated customer service',
      '60% reduction in support costs'
    ],
    pricing: [
      { plan: 'Chatbot Basic', pricePerMonthUsd: 399, includes: ['Basic conversation handling', 'Standard integrations', 'Email support'] },
      { plan: 'Chatbot Advanced', pricePerMonthUsd: 999, includes: ['Advanced NLP capabilities', 'Custom integrations', 'Priority support'] },
      { plan: 'Chatbot Enterprise', pricePerMonthUsd: 2499, includes: ['Custom AI models', 'Multi-language support', 'Dedicated AI team'] }
    ],
    externalLinks: [
      { label: 'Conversational AI Guide', url: 'https://aws.amazon.com/lex/' },
      { label: 'Chatbot Development Best Practices', url: 'https://cloud.google.com/dialogflow' }
    ]
  },
  {
    slug: 'ai-automated-testing-platform',
    name: 'AI Automated Testing Platform',
    category: 'AI Services',
    headline: 'Intelligent test automation with AI-powered test generation and execution',
    description: 'Revolutionize your testing process with AI-powered test automation that generates, executes, and maintains tests automatically.',
    features: [
      'AI-powered test case generation',
      'Automated test execution and reporting',
      'Visual regression testing',
      'Performance testing automation',
      'Self-healing test scripts',
      'Continuous testing integration'
    ],
    benefits: [
      '80% reduction in test creation time',
      '95% reduction in false positives',
      '90% improvement in test coverage'
    ],
    pricing: [
      { plan: 'Testing Basic', pricePerMonthUsd: 599, includes: ['Basic test automation', 'Standard reporting', 'Email support'] },
      { plan: 'Testing Advanced', pricePerMonthUsd: 1499, includes: ['Advanced test generation', 'Custom integrations', 'Priority support'] },
      { plan: 'Testing Enterprise', pricePerMonthUsd: 3499, includes: ['Full test automation suite', 'Custom AI models', 'Dedicated testing team'] }
    ],
    externalLinks: [
      { label: 'Test Automation Best Practices', url: 'https://aws.amazon.com/device-farm/' },
      { label: 'AI Testing Guide', url: 'https://www.selenium.dev/' }
    ]
  },
  {
    slug: 'ai-data-quality-management',
    name: 'AI Data Quality Management',
    category: 'AI Services',
    headline: 'Intelligent data quality management with AI-powered cleansing and validation',
    description: 'Ensure high-quality data across your organization with AI-powered data cleansing, validation, and quality monitoring solutions.',
    features: [
      'AI-powered data cleansing and deduplication',
      'Automated data validation and quality checks',
      'Real-time data quality monitoring',
      'Data lineage tracking and governance',
      'Anomaly detection and alerting',
      'Custom data quality rules and policies'
    ],
    benefits: [
      '95% improvement in data quality',
      '80% reduction in data processing errors',
      'Real-time data quality insights'
    ],
    pricing: [
      { plan: 'Data Quality Basic', pricePerMonthUsd: 899, includes: ['Basic data cleansing', 'Standard validation', 'Email support'] },
      { plan: 'Data Quality Advanced', pricePerMonthUsd: 2199, includes: ['Advanced AI cleansing', 'Custom validation rules', 'Priority support'] },
      { plan: 'Data Quality Enterprise', pricePerMonthUsd: 4999, includes: ['Full data quality suite', 'Custom AI models', 'Dedicated data team'] }
    ],
    externalLinks: [
      { label: 'Data Quality Best Practices', url: 'https://aws.amazon.com/data-wrangler/' },
      { label: 'Data Governance Guide', url: 'https://cloud.google.com/data-catalog' }
    ]
  },
  {
    slug: 'ai-business-process-automation',
    name: 'AI Business Process Automation',
    category: 'AI Services',
    headline: 'Intelligent automation of complex business processes with AI and RPA',
    description: 'Automate complex business processes with intelligent AI-powered automation that learns, adapts, and improves over time.',
    features: [
      'Intelligent process discovery and mapping',
      'AI-powered decision making and routing',
      'Document processing and extraction',
      'Workflow optimization and orchestration',
      'Exception handling and escalation',
      'Performance monitoring and analytics'
    ],
    benefits: [
      '70% reduction in process execution time',
      '85% improvement in process accuracy',
      '60% cost savings in operations'
    ],
    pricing: [
      { plan: 'Process Automation Basic', pricePerMonthUsd: 1299, includes: ['Basic process automation', 'Standard workflows', 'Email support'] },
      { plan: 'Process Automation Advanced', pricePerMonthUsd: 2999, includes: ['Advanced AI automation', 'Custom workflows', 'Priority support'] },
      { plan: 'Process Automation Enterprise', pricePerMonthUsd: 6999, includes: ['Full automation suite', 'Custom AI models', 'Dedicated automation team'] }
    ],
    externalLinks: [
      { label: 'Business Process Automation Guide', url: 'https://aws.amazon.com/step-functions/' },
      { label: 'RPA Best Practices', url: 'https://cloud.google.com/workflows' }
    ]
  },
  {
    slug: 'ai-fraud-detection-system',
    name: 'AI Fraud Detection System',
    category: 'AI Services',
    headline: 'Advanced fraud detection and prevention with machine learning algorithms',
    description: 'Protect your business from fraud with AI-powered detection systems that identify suspicious activities in real-time.',
    features: [
      'Real-time fraud detection and scoring',
      'Advanced machine learning algorithms',
      'Behavioral analysis and anomaly detection',
      'Multi-channel fraud monitoring',
      'Automated risk assessment and decisioning',
      'Continuous model learning and adaptation'
    ],
    benefits: [
      '99.5% fraud detection accuracy',
      '90% reduction in false positives',
      'Real-time fraud prevention'
    ],
    pricing: [
      { plan: 'Fraud Detection Basic', pricePerMonthUsd: 1599, includes: ['Basic fraud detection', 'Standard monitoring', 'Email support'] },
      { plan: 'Fraud Detection Advanced', pricePerMonthUsd: 3999, includes: ['Advanced ML algorithms', 'Custom risk rules', 'Priority support'] },
      { plan: 'Fraud Detection Enterprise', pricePerMonthUsd: 8999, includes: ['Full fraud prevention suite', 'Custom AI models', 'Dedicated fraud team'] }
    ],
    externalLinks: [
      { label: 'Fraud Detection Best Practices', url: 'https://aws.amazon.com/fraud-detector/' },
      { label: 'Risk Management Guide', url: 'https://cloud.google.com/security-command-center' }
    ]
  },
  {
    slug: 'ai-customer-insights-platform',
    name: 'AI Customer Insights Platform',
    category: 'AI Services',
    headline: 'Comprehensive customer insights and analytics with AI-powered segmentation',
    description: 'Gain deep insights into customer behavior, preferences, and lifetime value with advanced AI-powered analytics and segmentation.',
    features: [
      'AI-powered customer segmentation',
      'Behavioral analysis and pattern recognition',
      'Customer lifetime value prediction',
      'Churn prediction and prevention',
      'Personalization recommendations',
      'Real-time customer insights dashboards'
    ],
    benefits: [
      '300% improvement in customer understanding',
      '40% increase in customer retention',
      '50% improvement in marketing ROI'
    ],
    pricing: [
      { plan: 'Customer Insights Basic', pricePerMonthUsd: 799, includes: ['Basic customer analytics', 'Standard segmentation', 'Email support'] },
      { plan: 'Customer Insights Advanced', pricePerMonthUsd: 1999, includes: ['Advanced AI analytics', 'Custom segmentation', 'Priority support'] },
      { plan: 'Customer Insights Enterprise', pricePerMonthUsd: 4999, includes: ['Full insights platform', 'Custom AI models', 'Dedicated analytics team'] }
    ],
    externalLinks: [
      { label: 'Customer Analytics Guide', url: 'https://aws.amazon.com/personalize/' },
      { label: 'Customer Segmentation Best Practices', url: 'https://cloud.google.com/retail' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
