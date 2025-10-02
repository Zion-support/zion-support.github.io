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
    slug: 'ai-code-review-assistant',
    name: 'AI Code Review Assistant',
    category: 'AI Services',
    headline: 'Automated code review with AI-powered quality analysis and security scanning',
    description:
      'Revolutionize your development workflow with AI-powered code review that identifies bugs, security vulnerabilities, performance issues, and suggests improvements.',
    features: [
      'Automated bug detection and security scanning',
      'Code quality metrics and improvement suggestions',
      'Performance optimization recommendations',
      'Integration with GitHub, GitLab, and Bitbucket',
      'Custom coding standards enforcement',
      'Real-time feedback during development'
    ],
    benefits: [
      'Reduce code review time by 70%',
      'Catch 90% more bugs before production',
      'Improve code quality and maintainability',
      'Accelerate development cycles'
    ],
    pricing: [
      { plan: 'Developer', pricePerMonthUsd: 29, includes: ['Up to 5 repositories', 'Basic AI analysis', 'Email support'] },
      { plan: 'Team', pricePerMonthUsd: 99, includes: ['Up to 25 repositories', 'Advanced security scanning', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 299, includes: ['Unlimited repositories', 'Custom rules', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'GitHub Code Review Best Practices', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests' },
      { label: 'OWASP Security Guidelines', url: 'https://owasp.org/www-project-top-ten/' }
    ]
  },
  {
    slug: 'ai-document-processing-platform',
    name: 'AI Document Processing Platform',
    category: 'AI Services',
    headline: 'Intelligent document processing with OCR, data extraction, and workflow automation',
    description:
      'Transform unstructured documents into actionable data with AI-powered OCR, intelligent data extraction, and automated workflow processing.',
    features: [
      'Advanced OCR with 99.5% accuracy',
      'Intelligent data extraction and classification',
      'Automated workflow processing',
      'Multi-language document support',
      'Integration with popular business systems',
      'Custom template creation and training'
    ],
    benefits: [
      'Process documents 10x faster than manual methods',
      'Reduce data entry errors by 95%',
      'Save 20+ hours per week on document processing',
      'Improve compliance and audit trails'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 149, includes: ['Up to 1,000 documents', 'Basic OCR', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 399, includes: ['Up to 10,000 documents', 'Advanced AI extraction', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 999, includes: ['Unlimited documents', 'Custom workflows', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Document Processing Industry Report', url: 'https://www.gartner.com/en/information-technology/glossary/document-processing' },
      { label: 'OCR Technology Guide', url: 'https://www.ibm.com/cloud/learn/optical-character-recognition' }
    ]
  },
  {
    slug: 'ai-customer-insights-platform',
    name: 'AI Customer Insights Platform',
    category: 'AI Services',
    headline: 'Unlock customer behavior insights with AI-powered analytics and predictive modeling',
    description:
      'Gain deep customer insights with AI-powered analytics, sentiment analysis, churn prediction, and personalized recommendation engines.',
    features: [
      'Real-time customer behavior analytics',
      'Sentiment analysis across all touchpoints',
      'Churn prediction and retention strategies',
      'Personalized recommendation engines',
      'Customer journey mapping and optimization',
      'Advanced segmentation and targeting'
    ],
    benefits: [
      'Increase customer lifetime value by 35%',
      'Reduce churn rate by 40%',
      'Improve customer satisfaction scores',
      'Drive data-driven marketing decisions'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 199, includes: ['Up to 10,000 customers', 'Basic analytics', 'Email support'] },
      { plan: 'Growth', pricePerMonthUsd: 499, includes: ['Up to 100,000 customers', 'Advanced AI features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 1299, includes: ['Unlimited customers', 'Custom models', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Customer Analytics Best Practices', url: 'https://www.salesforce.com/resources/articles/customer-analytics/' },
      { label: 'Predictive Analytics Guide', url: 'https://www.ibm.com/cloud/learn/predictive-analytics' }
    ]
  },
  {
    slug: 'ai-predictive-analytics-suite',
    name: 'AI Predictive Analytics Suite',
    category: 'AI Services',
    headline: 'Advanced predictive analytics with machine learning models and forecasting',
    description:
      'Leverage advanced machine learning models for accurate forecasting, trend analysis, and predictive insights across your business operations.',
    features: [
      'Advanced machine learning algorithms',
      'Real-time forecasting and trend analysis',
      'Custom model development and training',
      'Automated report generation',
      'Integration with business intelligence tools',
      'Scenario planning and what-if analysis'
    ],
    benefits: [
      'Improve forecast accuracy by 60%',
      'Reduce inventory costs by 25%',
      'Optimize resource allocation',
      'Make data-driven strategic decisions'
    ],
    pricing: [
      { plan: 'Analyst', pricePerMonthUsd: 299, includes: ['Up to 5 models', 'Basic forecasting', 'Email support'] },
      { plan: 'Data Scientist', pricePerMonthUsd: 799, includes: ['Up to 20 models', 'Advanced ML features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 1999, includes: ['Unlimited models', 'Custom algorithms', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Predictive Analytics Market Research', url: 'https://www.gartner.com/en/information-technology/glossary/predictive-analytics' },
      { label: 'Machine Learning Best Practices', url: 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning' }
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
    slug: 'ai-invoice-processing-saas',
    name: 'AI Invoice Processing SaaS',
    category: 'Micro SaaS',
    headline: 'Automated invoice processing with AI-powered data extraction and approval workflows',
    description:
      'Streamline your accounts payable with AI-powered invoice processing that automatically extracts data, validates information, and routes for approval.',
    features: [
      'Automated invoice data extraction',
      'Smart approval routing and workflows',
      'Integration with accounting systems',
      'Duplicate detection and fraud prevention',
      'Real-time processing status tracking',
      'Custom approval rules and thresholds'
    ],
    benefits: [
      'Process invoices 15x faster',
      'Reduce processing costs by 80%',
      'Eliminate manual data entry errors',
      'Improve cash flow management'
    ],
    pricing: [
      { plan: 'Small Business', pricePerMonthUsd: 79, includes: ['Up to 100 invoices', 'Basic AI extraction', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 199, includes: ['Up to 500 invoices', 'Advanced workflows', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 499, includes: ['Unlimited invoices', 'Custom integrations', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Invoice Processing Automation Guide', url: 'https://www.sap.com/products/financial-management/invoice-processing.html' },
      { label: 'Accounts Payable Best Practices', url: 'https://www.netsuite.com/portal/resource/articles/accounting/accounts-payable.shtml' }
    ]
  },
  {
    slug: 'smart-expense-tracking-saas',
    name: 'Smart Expense Tracking SaaS',
    category: 'Micro SaaS',
    headline: 'AI-powered expense tracking with receipt scanning and automated categorization',
    description:
      'Simplify expense management with AI-powered receipt scanning, automatic categorization, and intelligent expense reporting for individuals and teams.',
    features: [
      'AI-powered receipt scanning and OCR',
      'Automatic expense categorization',
      'Smart duplicate detection',
      'Real-time expense reporting',
      'Integration with accounting software',
      'Mobile app for on-the-go tracking'
    ],
    benefits: [
      'Save 5+ hours per week on expense management',
      'Reduce expense processing errors by 95%',
      'Improve compliance and audit readiness',
      'Streamline reimbursement processes'
    ],
    pricing: [
      { plan: 'Individual', pricePerMonthUsd: 9, includes: ['Unlimited receipts', 'Basic categorization', 'Email support'] },
      { plan: 'Team', pricePerMonthUsd: 29, includes: ['Up to 10 users', 'Advanced features', 'Priority support'] },
      { plan: 'Business', pricePerMonthUsd: 79, includes: ['Unlimited users', 'Custom workflows', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Expense Management Software Comparison', url: 'https://www.capterra.com/expense-management-software/' },
      { label: 'Receipt Scanning Technology', url: 'https://www.adobe.com/acrobat/how-to/scan-receipts-mobile-app.html' }
    ]
  },
  {
    slug: 'automated-meeting-scheduler-saas',
    name: 'Automated Meeting Scheduler SaaS',
    category: 'Micro SaaS',
    headline: 'Intelligent meeting scheduling with AI-powered optimization and conflict resolution',
    description:
      'Eliminate scheduling headaches with AI-powered meeting coordination that finds optimal times, handles conflicts, and manages complex scheduling scenarios.',
    features: [
      'AI-powered optimal time suggestions',
      'Automatic conflict detection and resolution',
      'Multi-timezone coordination',
      'Integration with calendar systems',
      'Smart buffer time management',
      'Custom scheduling rules and preferences'
    ],
    benefits: [
      'Reduce scheduling time by 90%',
      'Eliminate double-bookings',
      'Improve meeting attendance rates',
      'Optimize team productivity'
    ],
    pricing: [
      { plan: 'Personal', pricePerMonthUsd: 15, includes: ['Up to 3 calendars', 'Basic scheduling', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 39, includes: ['Up to 10 calendars', 'Advanced features', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 99, includes: ['Unlimited calendars', 'Custom integrations', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'Meeting Scheduling Best Practices', url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2020/03/12/meeting-scheduling-best-practices/' },
      { label: 'Calendar Integration Guide', url: 'https://developers.google.com/calendar/api/v3/reference' }
    ]
  },
  {
    slug: 'ai-resume-screening-saas',
    name: 'AI Resume Screening SaaS',
    category: 'Micro SaaS',
    headline: 'Automated resume screening with AI-powered candidate matching and ranking',
    description:
      'Accelerate your hiring process with AI-powered resume screening that automatically matches candidates to job requirements and ranks them by fit.',
    features: [
      'AI-powered resume parsing and analysis',
      'Automatic candidate-job matching',
      'Intelligent ranking and scoring',
      'Integration with ATS systems',
      'Bias detection and mitigation',
      'Custom screening criteria'
    ],
    benefits: [
      'Screen resumes 10x faster',
      'Improve candidate quality by 40%',
      'Reduce hiring bias',
      'Accelerate time-to-hire'
    ],
    pricing: [
      { plan: 'Startup', pricePerMonthUsd: 49, includes: ['Up to 100 resumes', 'Basic AI screening', 'Email support'] },
      { plan: 'Growth', pricePerMonthUsd: 149, includes: ['Up to 500 resumes', 'Advanced matching', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 399, includes: ['Unlimited resumes', 'Custom integrations', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'AI in Recruitment Research', url: 'https://www.gartner.com/en/human-resources/insights/artificial-intelligence-in-recruiting' },
      { label: 'ATS Integration Guide', url: 'https://www.workday.com/en-us/products/human-capital-management/recruiting.html' }
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
    slug: 'cloud-migration-consulting',
    name: 'Cloud Migration Consulting',
    category: 'IT Services',
    headline: 'Expert cloud migration services with zero-downtime strategies and cost optimization',
    description:
      'Accelerate your cloud transformation with expert consulting services that ensure seamless migration, optimal architecture, and maximum ROI.',
    features: [
      'Comprehensive cloud readiness assessment',
      'Zero-downtime migration strategies',
      'Cost optimization and FinOps implementation',
      'Security and compliance framework alignment',
      'Performance optimization and monitoring',
      'Training and knowledge transfer'
    ],
    benefits: [
      'Reduce migration time by 50%',
      'Achieve 30% cost savings post-migration',
      'Minimize business disruption',
      'Ensure security and compliance'
    ],
    pricing: [
      { plan: 'Assessment', pricePerMonthUsd: 5000, includes: ['Cloud readiness analysis', 'Migration roadmap', 'Cost estimation'] },
      { plan: 'Migration', pricePerMonthUsd: 15000, includes: ['Full migration execution', 'Testing and validation', 'Go-live support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 'Custom', includes: ['Custom migration strategy', 'Dedicated team', 'Ongoing optimization'] }
    ],
    externalLinks: [
      { label: 'AWS Migration Guide', url: 'https://aws.amazon.com/migration/' },
      { label: 'Azure Migration Center', url: 'https://azure.microsoft.com/en-us/migration/' }
    ]
  },
  {
    slug: 'cybersecurity-assessment-service',
    name: 'Cybersecurity Assessment Service',
    category: 'IT Services',
    headline: 'Comprehensive cybersecurity assessment with penetration testing and compliance auditing',
    description:
      'Protect your organization with comprehensive cybersecurity assessments, penetration testing, and compliance auditing services.',
    features: [
      'Vulnerability assessment and scanning',
      'Penetration testing and ethical hacking',
      'Compliance auditing (SOC2, ISO27001, GDPR)',
      'Security architecture review',
      'Incident response planning',
      'Security awareness training'
    ],
    benefits: [
      'Identify and remediate security vulnerabilities',
      'Ensure compliance with industry standards',
      'Reduce security breach risk',
      'Improve security posture'
    ],
    pricing: [
      { plan: 'Basic Assessment', pricePerMonthUsd: 2500, includes: ['Vulnerability scanning', 'Basic report', 'Email support'] },
      { plan: 'Comprehensive', pricePerMonthUsd: 7500, includes: ['Penetration testing', 'Compliance audit', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 15000, includes: ['Full security assessment', 'Custom testing', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
      { label: 'OWASP Security Guidelines', url: 'https://owasp.org/www-project-top-ten/' }
    ]
  },
  {
    slug: 'devops-automation-service',
    name: 'DevOps Automation Service',
    category: 'IT Services',
    headline: 'Complete DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring',
    description:
      'Transform your development workflow with comprehensive DevOps automation including CI/CD pipelines, infrastructure as code, and advanced monitoring.',
    features: [
      'Custom CI/CD pipeline development',
      'Infrastructure as Code implementation',
      'Container orchestration and management',
      'Monitoring and alerting setup',
      'Security scanning and compliance',
      'Performance optimization'
    ],
    benefits: [
      'Accelerate software delivery by 300%',
      'Reduce deployment failures by 80%',
      'Improve system reliability and uptime',
      'Enable faster time-to-market'
    ],
    pricing: [
      { plan: 'Starter', pricePerMonthUsd: 2000, includes: ['Basic CI/CD setup', 'Standard monitoring', 'Email support'] },
      { plan: 'Professional', pricePerMonthUsd: 5000, includes: ['Advanced automation', 'Custom monitoring', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 12000, includes: ['Full DevOps transformation', 'Custom solutions', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'DevOps Best Practices', url: 'https://aws.amazon.com/devops/what-is-devops/' },
      { label: 'CI/CD Pipeline Guide', url: 'https://www.atlassian.com/continuous-delivery/ci-cd-pipeline' }
    ]
  },
  {
    slug: 'api-integration-services',
    name: 'API Integration Services',
    category: 'IT Services',
    headline: 'Expert API development and integration services for seamless system connectivity',
    description:
      'Connect your systems and applications with expert API development, integration, and management services for optimal performance and security.',
    features: [
      'Custom API development and design',
      'Third-party API integration',
      'API security and authentication',
      'Performance optimization and monitoring',
      'Documentation and testing',
      'API lifecycle management'
    ],
    benefits: [
      'Improve system connectivity and data flow',
      'Reduce integration complexity',
      'Enhance security and performance',
      'Accelerate digital transformation'
    ],
    pricing: [
      { plan: 'Basic Integration', pricePerMonthUsd: 1500, includes: ['Simple API connections', 'Basic documentation', 'Email support'] },
      { plan: 'Advanced Integration', pricePerMonthUsd: 4000, includes: ['Complex integrations', 'Custom APIs', 'Priority support'] },
      { plan: 'Enterprise', pricePerMonthUsd: 8000, includes: ['Full API strategy', 'Custom development', 'Dedicated support'] }
    ],
    externalLinks: [
      { label: 'API Design Best Practices', url: 'https://restfulapi.net/' },
      { label: 'API Security Guidelines', url: 'https://owasp.org/www-project-api-security/' }
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
