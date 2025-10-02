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
  // NEW MICRO SAAS SERVICES
  {
    slug: 'ai-workflow-automation-suite',
    name: 'AI Workflow Automation Suite',
    category: 'Micro SaaS',
    headline: 'Automate repetitive tasks with AI-powered workflow intelligence',
    description: 'Transform your business operations with intelligent workflow automation that learns from your processes and optimizes them automatically.',
    features: [
      'AI-powered task recognition and automation',
      'Smart workflow optimization suggestions',
      'Multi-platform integration (Slack, Teams, Google Workspace)',
      'Custom automation builder with no-code interface',
      'Real-time performance analytics and insights',
      'Advanced error handling and recovery mechanisms'
    ],
    benefits: [
      'Reduce manual work by 70%',
      'Increase team productivity by 50%',
      'Eliminate human errors in repetitive tasks',
      'Scale operations without additional headcount'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 99, includes: ['Up to 5 workflows', 'Basic AI automation', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 299, includes: ['Up to 25 workflows', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 799, includes: ['Unlimited workflows', 'Custom integrations', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Workflow Automation Best Practices', url: 'https://ziontechgroup.com/guides/workflow-automation' },
      { label: 'Integration Documentation', url: 'https://ziontechgroup.com/docs/integrations' }
    ]
  },
  {
    slug: 'smart-expense-management-saas',
    name: 'Smart Expense Management SaaS',
    category: 'Micro SaaS',
    headline: 'AI-powered expense tracking and reimbursement automation',
    description: 'Revolutionize expense management with intelligent receipt processing, automated categorization, and seamless reimbursement workflows.',
    features: [
      'AI-powered receipt scanning and data extraction',
      'Automatic expense categorization and approval routing',
      'Real-time policy compliance checking',
      'Multi-currency support with automatic conversion',
      'Advanced reporting and analytics dashboard',
      'Mobile app with offline capability'
    ],
    benefits: [
      'Reduce expense processing time by 80%',
      'Eliminate manual data entry errors',
      'Improve policy compliance by 95%',
      'Accelerate reimbursement cycles by 60%'
    ],
    pricing: [
      { plan: 'Small Business', pricePerMonthUsd: 79, includes: ['Up to 50 employees', 'Basic AI features', 'Standard support'] },
      { plan: 'Mid-Market', pricePerMonthUsd: 199, includes: ['Up to 200 employees', 'Advanced AI automation', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 499, includes: ['Unlimited employees', 'Custom policies', 'White-label options'] }
    ],
    externalLinks: [
      { label: 'Expense Management ROI Calculator', url: 'https://ziontechgroup.com/tools/expense-roi-calculator' },
      { label: 'Compliance Guidelines', url: 'https://ziontechgroup.com/compliance/expense-management' }
    ]
  },
  {
    slug: 'ai-powered-inventory-optimizer',
    name: 'AI-Powered Inventory Optimizer',
    category: 'Micro SaaS',
    headline: 'Intelligent inventory management with predictive analytics',
    description: 'Optimize your inventory levels with AI-driven demand forecasting, automated reorder points, and intelligent stock allocation.',
    features: [
      'AI-powered demand forecasting with 95% accuracy',
      'Automated reorder point calculation and alerts',
      'Multi-location inventory synchronization',
      'Seasonal trend analysis and adjustment',
      'Supplier performance tracking and optimization',
      'Real-time inventory analytics and reporting'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Increase stock turnover by 40%',
      'Eliminate stockouts by 90%',
      'Improve cash flow management'
    ],
    pricing: [
      { plan: 'Basic', pricePerMonthUsd: 149, includes: ['Up to 1,000 SKUs', 'Basic forecasting', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 399, includes: ['Up to 10,000 SKUs', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 899, includes: ['Unlimited SKUs', 'Custom algorithms', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Inventory Management Best Practices', url: 'https://ziontechgroup.com/guides/inventory-optimization' },
      { label: 'Demand Forecasting Whitepaper', url: 'https://ziontechgroup.com/resources/demand-forecasting' }
    ]
  },
  {
    slug: 'intelligent-customer-feedback-platform',
    name: 'Intelligent Customer Feedback Platform',
    category: 'Micro SaaS',
    headline: 'AI-powered customer feedback analysis and action automation',
    description: 'Transform customer feedback into actionable insights with AI-powered sentiment analysis, trend identification, and automated response generation.',
    features: [
      'AI-powered sentiment analysis across multiple channels',
      'Automatic feedback categorization and tagging',
      'Trend identification and alert system',
      'Automated response generation and routing',
      'Customer journey mapping and insights',
      'Real-time feedback analytics dashboard'
    ],
    benefits: [
      'Increase customer satisfaction by 35%',
      'Reduce response time by 70%',
      'Identify issues before they escalate',
      'Improve product development decisions'
    ],
    pricing: [
      { plan: 'Startup', pricePerMonthUsd: 79, includes: ['Up to 1,000 feedback items', 'Basic AI analysis', 'Standard support'] },
      { plan: 'Growth', pricePerMonthUsd: 199, includes: ['Up to 10,000 feedback items', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 499, includes: ['Unlimited feedback', 'Custom analytics', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Customer Feedback Best Practices', url: 'https://ziontechgroup.com/guides/customer-feedback' },
      { label: 'Sentiment Analysis Guide', url: 'https://ziontechgroup.com/resources/sentiment-analysis' }
    ]
  },
  {
    slug: 'ai-powered-scheduling-optimizer',
    name: 'AI-Powered Scheduling Optimizer',
    category: 'Micro SaaS',
    headline: 'Intelligent scheduling with automated optimization',
    description: 'Optimize your scheduling operations with AI-powered resource allocation, conflict resolution, and automated appointment management.',
    features: [
      'AI-powered optimal time slot recommendations',
      'Automatic conflict detection and resolution',
      'Resource utilization optimization',
      'Customer preference learning and adaptation',
      'Multi-timezone support with automatic conversion',
      'Real-time schedule analytics and reporting'
    ],
    benefits: [
      'Increase booking rates by 45%',
      'Reduce scheduling conflicts by 90%',
      'Optimize resource utilization by 35%',
      'Improve customer satisfaction scores'
    ],
    pricing: [
      { plan: 'Individual', pricePerMonthUsd: 29, includes: ['Single user', 'Basic optimization', 'Email support'] },
      { plan: 'Team', pricePerMonthUsd: 99, includes: ['Up to 10 users', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 299, includes: ['Unlimited users', 'Custom optimization', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Scheduling Optimization Guide', url: 'https://ziontechgroup.com/guides/scheduling-optimization' },
      { label: 'Resource Management Best Practices', url: 'https://ziontechgroup.com/resources/resource-management' }
    ]
  },
  // NEW IT SERVICES
  {
    slug: 'cloud-native-security-platform',
    name: 'Cloud-Native Security Platform',
    category: 'IT Services',
    headline: 'Comprehensive cloud security with zero-trust architecture',
    description: 'Secure your cloud infrastructure with advanced threat detection, automated compliance monitoring, and zero-trust security implementation.',
    features: [
      'Zero-trust network access implementation',
      'Real-time threat detection and response',
      'Automated compliance monitoring (SOC2, ISO27001)',
      'Cloud workload protection and monitoring',
      'Security posture assessment and recommendations',
      'Incident response automation and orchestration'
    ],
    benefits: [
      'Reduce security incidents by 85%',
      'Achieve 99.9% compliance automation',
      'Decrease mean time to detection by 70%',
      'Lower security operational costs by 40%'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 2999, includes: ['Up to 100 workloads', 'Basic security monitoring', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 5999, includes: ['Up to 500 workloads', 'Advanced threat detection', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 12999, includes: ['Unlimited workloads', 'Custom security policies', '24/7 support'] }
    ],
    externalLinks: [
      { label: 'Zero-Trust Architecture Guide', url: 'https://ziontechgroup.com/security/zero-trust-guide' },
      { label: 'Cloud Security Best Practices', url: 'https://ziontechgroup.com/security/cloud-best-practices' }
    ]
  },
  {
    slug: 'enterprise-data-governance-suite',
    name: 'Enterprise Data Governance Suite',
    category: 'IT Services',
    headline: 'Comprehensive data governance with AI-powered compliance',
    description: 'Implement enterprise-grade data governance with automated compliance monitoring, data lineage tracking, and intelligent privacy controls.',
    features: [
      'Automated data discovery and classification',
      'AI-powered compliance monitoring (GDPR, CCPA)',
      'Data lineage tracking and visualization',
      'Privacy impact assessment automation',
      'Data quality monitoring and remediation',
      'Policy enforcement and violation alerts'
    ],
    benefits: [
      'Achieve 100% regulatory compliance',
      'Reduce data governance costs by 60%',
      'Improve data quality by 80%',
      'Accelerate privacy impact assessments'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 2499, includes: ['Up to 1M records', 'Basic governance', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 4999, includes: ['Up to 10M records', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 9999, includes: ['Unlimited records', 'Custom policies', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Data Governance Framework', url: 'https://ziontechgroup.com/data/governance-framework' },
      { label: 'Privacy Compliance Guide', url: 'https://ziontechgroup.com/privacy/compliance-guide' }
    ]
  },
  {
    slug: 'advanced-devops-automation-platform',
    name: 'Advanced DevOps Automation Platform',
    category: 'IT Services',
    headline: 'Complete DevOps automation with intelligent orchestration',
    description: 'Accelerate your DevOps transformation with intelligent automation, advanced monitoring, and seamless CI/CD pipeline orchestration.',
    features: [
      'Intelligent CI/CD pipeline optimization',
      'Automated infrastructure provisioning',
      'Advanced monitoring and alerting',
      'Security scanning and vulnerability management',
      'Performance optimization recommendations',
      'Multi-cloud deployment orchestration'
    ],
    benefits: [
      'Reduce deployment time by 75%',
      'Increase deployment frequency by 300%',
      'Lower infrastructure costs by 30%',
      'Improve system reliability by 95%'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 1999, includes: ['Up to 5 environments', 'Basic automation', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 3999, includes: ['Up to 15 environments', 'Advanced orchestration', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 7999, includes: ['Unlimited environments', 'Custom automation', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'DevOps Best Practices Guide', url: 'https://ziontechgroup.com/devops/best-practices' },
      { label: 'CI/CD Pipeline Optimization', url: 'https://ziontechgroup.com/devops/pipeline-optimization' }
    ]
  },
  {
    slug: 'enterprise-integration-platform',
    name: 'Enterprise Integration Platform',
    category: 'IT Services',
    headline: 'Seamless enterprise system integration with AI orchestration',
    description: 'Connect and integrate all your enterprise systems with intelligent data transformation, real-time synchronization, and automated workflow orchestration.',
    features: [
      'AI-powered data mapping and transformation',
      'Real-time system synchronization',
      'Advanced error handling and recovery',
      'Custom connector development',
      'Workflow orchestration and automation',
      'Comprehensive integration monitoring'
    ],
    benefits: [
      'Reduce integration time by 80%',
      'Eliminate data silos across systems',
      'Improve data accuracy by 95%',
      'Lower integration maintenance costs'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 1499, includes: ['Up to 10 integrations', 'Basic orchestration', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 2999, includes: ['Up to 50 integrations', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 5999, includes: ['Unlimited integrations', 'Custom connectors', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Integration Architecture Guide', url: 'https://ziontechgroup.com/integration/architecture-guide' },
      { label: 'API Management Best Practices', url: 'https://ziontechgroup.com/integration/api-management' }
    ]
  },
  {
    slug: 'intelligent-backup-recovery-solution',
    name: 'Intelligent Backup & Recovery Solution',
    category: 'IT Services',
    headline: 'AI-powered backup and disaster recovery with predictive analytics',
    description: 'Protect your critical data with intelligent backup strategies, automated recovery testing, and predictive disaster prevention.',
    features: [
      'AI-powered backup optimization and scheduling',
      'Automated disaster recovery testing',
      'Predictive failure analysis and prevention',
      'Multi-cloud backup orchestration',
      'Real-time backup monitoring and alerting',
      'Intelligent data deduplication and compression'
    ],
    benefits: [
      'Reduce backup costs by 50%',
      'Achieve 99.99% recovery success rate',
      'Minimize data loss to near zero',
      'Automate disaster recovery processes'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 999, includes: ['Up to 1TB storage', 'Basic AI features', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 1999, includes: ['Up to 10TB storage', 'Advanced automation', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 3999, includes: ['Unlimited storage', 'Custom strategies', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Backup Strategy Guide', url: 'https://ziontechgroup.com/backup/strategy-guide' },
      { label: 'Disaster Recovery Planning', url: 'https://ziontechgroup.com/backup/disaster-recovery' }
    ]
  },
  // NEW AI SERVICES
  {
    slug: 'ai-powered-predictive-analytics-platform',
    name: 'AI-Powered Predictive Analytics Platform',
    category: 'AI Services',
    headline: 'Advanced predictive analytics with machine learning automation',
    description: 'Unlock the power of predictive analytics with automated machine learning models, real-time forecasting, and intelligent business insights.',
    features: [
      'Automated machine learning model selection and training',
      'Real-time predictive modeling and forecasting',
      'Advanced statistical analysis and visualization',
      'Custom model development and deployment',
      'Automated feature engineering and selection',
      'Business intelligence dashboard and reporting'
    ],
    benefits: [
      'Improve forecast accuracy by 85%',
      'Reduce analysis time by 90%',
      'Increase business insights by 200%',
      'Accelerate data-driven decision making'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 2999, includes: ['Up to 1M data points', 'Basic ML models', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 5999, includes: ['Up to 10M data points', 'Advanced ML features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 12999, includes: ['Unlimited data points', 'Custom models', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Predictive Analytics Guide', url: 'https://ziontechgroup.com/ai/predictive-analytics-guide' },
      { label: 'Machine Learning Best Practices', url: 'https://ziontechgroup.com/ai/ml-best-practices' }
    ]
  },
  {
    slug: 'ai-powered-natural-language-processing-suite',
    name: 'AI-Powered Natural Language Processing Suite',
    category: 'AI Services',
    headline: 'Advanced NLP with automated text analysis and generation',
    description: 'Transform your text data with advanced NLP capabilities including sentiment analysis, automated content generation, and intelligent document processing.',
    features: [
      'Advanced sentiment analysis and emotion detection',
      'Automated content generation and summarization',
      'Multi-language text processing and translation',
      'Named entity recognition and extraction',
      'Document classification and routing',
      'Custom NLP model training and deployment'
    ],
    benefits: [
      'Process text data 100x faster than manual methods',
      'Improve content quality by 60%',
      'Reduce content creation costs by 70%',
      'Enhance customer understanding and insights'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 1999, includes: ['Up to 100K documents', 'Basic NLP features', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 3999, includes: ['Up to 1M documents', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 7999, includes: ['Unlimited documents', 'Custom models', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'NLP Implementation Guide', url: 'https://ziontechgroup.com/ai/nlp-implementation' },
      { label: 'Text Analytics Best Practices', url: 'https://ziontechgroup.com/ai/text-analytics' }
    ]
  },
  {
    slug: 'ai-powered-computer-vision-platform',
    name: 'AI-Powered Computer Vision Platform',
    category: 'AI Services',
    headline: 'Advanced computer vision with automated image and video analysis',
    description: 'Leverage cutting-edge computer vision technology for automated image recognition, object detection, and intelligent video analytics.',
    features: [
      'Advanced object detection and recognition',
      'Automated image classification and tagging',
      'Real-time video analytics and monitoring',
      'Facial recognition and emotion analysis',
      'OCR and document text extraction',
      'Custom computer vision model development'
    ],
    benefits: [
      'Process visual data 1000x faster than humans',
      'Achieve 99%+ accuracy in object recognition',
      'Reduce manual inspection costs by 80%',
      'Enable real-time visual monitoring and alerts'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 2499, includes: ['Up to 10K images/month', 'Basic CV features', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 4999, includes: ['Up to 100K images/month', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 9999, includes: ['Unlimited images', 'Custom models', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Computer Vision Guide', url: 'https://ziontechgroup.com/ai/computer-vision-guide' },
      { label: 'Image Recognition Best Practices', url: 'https://ziontechgroup.com/ai/image-recognition' }
    ]
  },
  {
    slug: 'ai-powered-recommendation-engine',
    name: 'AI-Powered Recommendation Engine',
    category: 'AI Services',
    headline: 'Intelligent recommendation system with advanced personalization',
    description: 'Boost customer engagement and sales with AI-powered recommendation engines that deliver personalized suggestions across all touchpoints.',
    features: [
      'Advanced collaborative and content-based filtering',
      'Real-time personalization and adaptation',
      'Multi-channel recommendation deployment',
      'A/B testing and performance optimization',
      'Customer behavior analysis and insights',
      'Custom recommendation algorithm development'
    ],
    benefits: [
      'Increase conversion rates by 45%',
      'Improve customer engagement by 60%',
      'Boost average order value by 35%',
      'Reduce customer acquisition costs'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 1999, includes: ['Up to 1M recommendations', 'Basic personalization', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 3999, includes: ['Up to 10M recommendations', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 7999, includes: ['Unlimited recommendations', 'Custom algorithms', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Recommendation Engine Guide', url: 'https://ziontechgroup.com/ai/recommendation-guide' },
      { label: 'Personalization Best Practices', url: 'https://ziontechgroup.com/ai/personalization' }
    ]
  },
  {
    slug: 'ai-powered-fraud-detection-system',
    name: 'AI-Powered Fraud Detection System',
    category: 'AI Services',
    headline: 'Advanced fraud detection with real-time threat prevention',
    description: 'Protect your business from fraud with AI-powered detection systems that analyze patterns, detect anomalies, and prevent fraudulent activities in real-time.',
    features: [
      'Real-time fraud detection and prevention',
      'Advanced anomaly detection algorithms',
      'Multi-channel fraud pattern analysis',
      'Automated risk scoring and decision making',
      'Behavioral analysis and user profiling',
      'Custom fraud detection model development'
    ],
    benefits: [
      'Reduce fraud losses by 95%',
      'Decrease false positive rates by 70%',
      'Process transactions 100x faster',
      'Improve customer experience with seamless security'
    ],
    pricing: [
      { plan: 'Standard', pricePerMonthUsd: 2999, includes: ['Up to 100K transactions', 'Basic fraud detection', 'Standard support'] },
      { plan: 'Professional', pricePerMonthUsd: 5999, includes: ['Up to 1M transactions', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 12999, includes: ['Unlimited transactions', 'Custom models', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Fraud Detection Guide', url: 'https://ziontechgroup.com/ai/fraud-detection-guide' },
      { label: 'Risk Management Best Practices', url: 'https://ziontechgroup.com/ai/risk-management' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
