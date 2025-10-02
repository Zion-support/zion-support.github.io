export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  headline: string;
  icon: string;
  pricing: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  roi: string;
  implementationTime: string;
  supportLevel: string;
  targetAudience: string[];
  useCases: string[];
  technologies: string[];
  integrations: string[];
  compliance: string[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export const services: Service[] = [
  // AI-Powered Micro SaaS Solutions
  {
    id: 'ai-content-optimization-suite',
    name: 'AI Content Optimization Suite',
    slug: 'ai-content-optimization-suite',
    category: 'AI Micro SaaS',
    description: 'Revolutionary AI-powered content optimization platform that increases engagement by 60% and improves SEO rankings by 40%.',
    headline: 'Transform your content with AI that understands your audience',
    icon: '📝',
    pricing: '$199/month',
    marketPrice: '$299/month',
    roi: '300% ROI in 3 months',
    implementationTime: '2-3 days',
    supportLevel: '24/7 Expert Support',
    features: [
      'AI-powered headline optimization',
      'Content performance analytics',
      'SEO optimization suggestions',
      'A/B testing capabilities',
      'Brand voice consistency',
      'Multi-platform publishing'
    ],
    benefits: [
      '60% higher engagement rates',
      '40% improvement in SEO rankings',
      '70% time savings on content creation',
      '85% prediction accuracy for viral content'
    ],
    targetAudience: ['Marketing Teams', 'Content Creators', 'E-commerce Businesses', 'Digital Agencies'],
    useCases: [
      'Blog post optimization',
      'Social media content',
      'Email marketing campaigns',
      'Product descriptions'
    ],
    technologies: ['GPT-4', 'BERT', 'TensorFlow', 'React', 'Node.js'],
    integrations: ['WordPress', 'Shopify', 'Mailchimp', 'HubSpot', 'Google Analytics'],
    compliance: ['GDPR', 'CCPA', 'SOC 2'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  {
    id: 'ai-lead-scoring-api',
    name: 'AI Lead Scoring API',
    slug: 'ai-lead-scoring-api',
    category: 'AI Micro SaaS',
    description: 'Real-time lead scoring API with 95% accuracy using behavioral, firmographic, and engagement signals.',
    headline: 'Score leads instantly with AI-powered intelligence',
    icon: '📈',
    pricing: '$299/month',
    marketPrice: '$499/month',
    roi: '250% ROI in 2 months',
    implementationTime: '1-2 days',
    supportLevel: '24/7 API Support',
    features: [
      'Real-time lead scoring',
      'Behavioral analysis',
      'Firmographic data integration',
      'Explainable AI scores',
      'Custom scoring models',
      'API-first architecture'
    ],
    benefits: [
      '95% scoring accuracy',
      '50% increase in qualified leads',
      '30% reduction in sales cycle',
      '80% improvement in conversion rates'
    ],
    targetAudience: ['Sales Teams', 'Marketing Agencies', 'SaaS Companies', 'B2B Businesses'],
    useCases: [
      'CRM integration',
      'Marketing automation',
      'Sales prioritization',
      'Lead qualification'
    ],
    technologies: ['Machine Learning', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zapier', 'Webhooks'],
    compliance: ['SOC 2', 'GDPR', 'CCPA'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  {
    id: 'ai-financial-forecasting-suite',
    name: 'AI Financial Forecasting Suite',
    slug: 'ai-financial-forecasting-suite',
    category: 'AI Micro SaaS',
    description: 'Advanced AI financial forecasting with 78% accuracy for market trends, investment optimization, and risk assessment.',
    headline: 'Predict financial futures with AI-powered forecasting',
    icon: '💰',
    pricing: '$499/month',
    marketPrice: '$799/month',
    roi: '400% ROI in 6 months',
    implementationTime: '3-5 days',
    supportLevel: 'Dedicated Financial Analyst',
    features: [
      'Market trend prediction',
      'Investment optimization',
      'Risk assessment algorithms',
      'Portfolio analysis',
      'Real-time market data',
      'Custom forecasting models'
    ],
    benefits: [
      '78% prediction accuracy',
      '25% improvement in returns',
      '90% risk assessment accuracy',
      '80% time savings on analysis'
    ],
    targetAudience: ['Financial Advisors', 'Investment Firms', 'CFOs', 'Trading Companies'],
    useCases: [
      'Portfolio optimization',
      'Risk management',
      'Investment planning',
      'Market analysis'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Python', 'Pandas', 'NumPy'],
    integrations: ['Bloomberg API', 'Yahoo Finance', 'Alpha Vantage', 'TradingView'],
    compliance: ['FINRA', 'SEC', 'SOX', 'GDPR'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  {
    id: 'smart-inventory-management-saas',
    name: 'Smart Inventory Management SaaS',
    slug: 'smart-inventory-management-saas',
    category: 'AI Micro SaaS',
    description: 'AI-powered inventory optimization reducing costs by 30% and preventing stockouts with 85% demand accuracy.',
    headline: 'Optimize inventory with AI that predicts demand',
    icon: '📦',
    pricing: '$199/month',
    marketPrice: '$299/month',
    roi: '200% ROI in 4 months',
    implementationTime: '2-3 days',
    supportLevel: '24/7 Operations Support',
    features: [
      'Demand forecasting',
      'Automated reordering',
      'Stock optimization',
      'Supplier management',
      'Cost analysis',
      'Multi-location support'
    ],
    benefits: [
      '30% cost reduction',
      '60% fewer stockouts',
      '85% demand accuracy',
      '40% cash flow improvement'
    ],
    targetAudience: ['Retailers', 'E-commerce', 'Manufacturers', 'Distributors'],
    useCases: [
      'Retail inventory',
      'Warehouse management',
      'Supply chain optimization',
      'Multi-channel retail'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'MongoDB', 'Redis'],
    integrations: ['Shopify', 'WooCommerce', 'Amazon', 'QuickBooks', 'SAP'],
    compliance: ['ISO 9001', 'SOC 2', 'GDPR'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  // Advanced AI Services
  {
    id: 'ai-customer-insights-platform',
    name: 'AI Customer Insights Platform',
    slug: 'ai-customer-insights-platform',
    category: 'Advanced AI',
    description: 'Transform customer data into actionable insights with 95% accuracy sentiment analysis and predictive behavior modeling.',
    headline: 'Understand your customers like never before',
    icon: '🧠',
    pricing: '$799/month',
    marketPrice: '$1,299/month',
    roi: '350% ROI in 5 months',
    implementationTime: '1-2 weeks',
    supportLevel: 'Dedicated Data Scientist',
    features: [
      'Real-time sentiment analysis',
      'Predictive behavior modeling',
      'Customer journey mapping',
      'Churn prediction',
      'Personalization engine',
      'Advanced analytics dashboard'
    ],
    benefits: [
      '95% sentiment accuracy',
      '40% increase in customer retention',
      '60% improvement in personalization',
      '50% reduction in churn rate'
    ],
    targetAudience: ['E-commerce', 'SaaS Companies', 'Retailers', 'Service Providers'],
    useCases: [
      'Customer segmentation',
      'Personalized marketing',
      'Churn prevention',
      'Product recommendations'
    ],
    technologies: ['NLP', 'Machine Learning', 'Python', 'TensorFlow', 'Apache Kafka'],
    integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Google Analytics', 'Mixpanel'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'HIPAA'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  {
    id: 'ai-workflow-automation-platform',
    name: 'AI Workflow Automation Platform',
    slug: 'ai-workflow-automation-platform',
    category: 'Advanced AI',
    description: 'Automate complex business workflows with AI-powered decision making and 500+ app integrations.',
    headline: 'Automate workflows with intelligent AI decisions',
    icon: '⚡',
    pricing: '$599/month',
    marketPrice: '$999/month',
    roi: '280% ROI in 3 months',
    implementationTime: '1-2 weeks',
    supportLevel: '24/7 Automation Support',
    features: [
      'Visual workflow builder',
      'AI decision making',
      '500+ app integrations',
      'Real-time monitoring',
      'Custom automation rules',
      'Enterprise security'
    ],
    benefits: [
      '70% process automation',
      '50% time savings',
      '90% error reduction',
      '60% cost optimization'
    ],
    targetAudience: ['Enterprises', 'SMBs', 'Operations Teams', 'IT Departments'],
    useCases: [
      'Business process automation',
      'Data processing workflows',
      'Customer onboarding',
      'Invoice processing'
    ],
    technologies: ['AI/ML', 'Python', 'Node.js', 'PostgreSQL', 'Redis'],
    integrations: ['Salesforce', 'Slack', 'Microsoft 365', 'Google Workspace', 'Zapier'],
    compliance: ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  // IT Services & Solutions
  {
    id: 'cloud-native-devops-platform',
    name: 'Cloud-Native DevOps Platform',
    slug: 'cloud-native-devops-platform',
    category: 'IT Services',
    description: 'Enterprise-grade DevOps platform with CI/CD automation, infrastructure as code, and 99.9% uptime guarantee.',
    headline: 'Deploy faster with enterprise-grade DevOps',
    icon: '☁️',
    pricing: '$1,499/month',
    marketPrice: '$2,499/month',
    roi: '200% ROI in 6 months',
    implementationTime: '2-4 weeks',
    supportLevel: '24/7 DevOps Engineers',
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as code',
      'Container orchestration',
      'Monitoring & alerting',
      'Security scanning',
      'Multi-cloud support'
    ],
    benefits: [
      '50% faster deployments',
      '80% infrastructure automation',
      '99.9% uptime guarantee',
      '30% cost optimization'
    ],
    targetAudience: ['Enterprises', 'SaaS Companies', 'Development Teams', 'DevOps Engineers'],
    useCases: [
      'Application deployment',
      'Infrastructure management',
      'Security compliance',
      'Performance monitoring'
    ],
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Prometheus'],
    integrations: ['AWS', 'Azure', 'GCP', 'GitHub', 'GitLab', 'Slack'],
    compliance: ['SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  {
    id: 'ai-cybersecurity-automation-suite',
    name: 'AI Cybersecurity Automation Suite',
    slug: 'ai-cybersecurity-automation-suite',
    category: 'IT Services',
    description: 'Advanced AI-powered cybersecurity with 99.5% threat detection and automated response capabilities.',
    headline: 'Protect your business with AI-powered security',
    icon: '🛡️',
    pricing: '$1,999/month',
    marketPrice: '$3,499/month',
    roi: '300% ROI in 4 months',
    implementationTime: '2-3 weeks',
    supportLevel: '24/7 Security Operations Center',
    features: [
      'AI threat detection',
      'Automated incident response',
      'Vulnerability assessment',
      'Zero trust architecture',
      'Security orchestration',
      'Compliance reporting'
    ],
    benefits: [
      '99.5% threat detection',
      '90% faster response time',
      '95% insider threat detection',
      '70% alert reduction'
    ],
    targetAudience: ['Enterprises', 'Financial Services', 'Healthcare', 'Government'],
    useCases: [
      'Threat detection',
      'Incident response',
      'Compliance management',
      'Security monitoring'
    ],
    technologies: ['AI/ML', 'SIEM', 'SOAR', 'Python', 'Elasticsearch'],
    integrations: ['Splunk', 'QRadar', 'CrowdStrike', 'Okta', 'Microsoft Sentinel'],
    compliance: ['SOC 2', 'ISO 27001', 'NIST', 'PCI DSS', 'HIPAA'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  // Innovative Micro SaaS Solutions
  {
    id: 'ai-meeting-assistant-platform',
    name: 'AI Meeting Assistant Platform',
    slug: 'ai-meeting-assistant-platform',
    category: 'Micro SaaS',
    description: 'AI-powered meeting assistant with transcription, summarization, and automatic task management.',
    headline: 'Transform meetings with AI intelligence',
    icon: '🤖',
    pricing: '$99/month',
    marketPrice: '$149/month',
    roi: '250% ROI in 2 months',
    implementationTime: '1-2 days',
    supportLevel: '24/7 Technical Support',
    features: [
      'Real-time transcription',
      'AI summarization',
      'Action item extraction',
      'Meeting analytics',
      'Calendar integration',
      'Multi-language support'
    ],
    benefits: [
      '60% time savings on note-taking',
      '90% accuracy in transcription',
      '40% improvement in follow-up',
      '50% reduction in meeting time'
    ],
    targetAudience: ['Remote Teams', 'Consultants', 'Sales Teams', 'Project Managers'],
    useCases: [
      'Meeting documentation',
      'Action item tracking',
      'Team collaboration',
      'Client meetings'
    ],
    technologies: ['NLP', 'Speech Recognition', 'React', 'Node.js', 'WebRTC'],
    integrations: ['Zoom', 'Teams', 'Google Meet', 'Slack', 'Notion'],
    compliance: ['SOC 2', 'GDPR', 'CCPA'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  {
    id: 'smart-invoice-processing',
    name: 'Smart Invoice Processing System',
    slug: 'smart-invoice-processing',
    category: 'Micro SaaS',
    description: 'Automated invoice processing with 99% accuracy data extraction and fraud detection.',
    headline: 'Process invoices automatically with AI',
    icon: '🧾',
    pricing: '$299/month',
    marketPrice: '$499/month',
    roi: '200% ROI in 3 months',
    implementationTime: '2-3 days',
    supportLevel: '24/7 Processing Support',
    features: [
      'OCR data extraction',
      'Automated approval workflows',
      'Fraud detection',
      'Payment processing',
      'Compliance tracking',
      'Multi-currency support'
    ],
    benefits: [
      '99% extraction accuracy',
      '80% processing time reduction',
      '95% fraud detection rate',
      '60% cost savings'
    ],
    targetAudience: ['Accounting Firms', 'Enterprises', 'SMBs', 'Finance Teams'],
    useCases: [
      'Invoice processing',
      'Expense management',
      'Payment automation',
      'Compliance reporting'
    ],
    technologies: ['OCR', 'Machine Learning', 'Python', 'React', 'PostgreSQL'],
    integrations: ['QuickBooks', 'Xero', 'SAP', 'Oracle', 'Stripe'],
    compliance: ['SOC 2', 'PCI DSS', 'GDPR', 'SOX'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  // Healthcare Technology Solutions
  {
    id: 'healthcare-telemedicine-platform',
    name: 'Healthcare Telemedicine Platform',
    slug: 'healthcare-telemedicine-platform',
    category: 'Healthcare Tech',
    description: 'Complete telemedicine solution with HIPAA compliance, virtual consultations, and patient management.',
    headline: 'Deliver healthcare anywhere with telemedicine',
    icon: '🏥',
    pricing: '$499/month',
    marketPrice: '$799/month',
    roi: '300% ROI in 6 months',
    implementationTime: '1-2 weeks',
    supportLevel: '24/7 Healthcare Support',
    features: [
      'HD video consultations',
      'Patient management system',
      'HIPAA compliance',
      'Prescription management',
      'Appointment scheduling',
      'Insurance integration'
    ],
    benefits: [
      '200% increase in patient reach',
      '60% reduction in no-shows',
      '40% cost savings',
      '95% patient satisfaction'
    ],
    targetAudience: ['Hospitals', 'Clinics', 'Private Practices', 'Healthcare Systems'],
    useCases: [
      'Remote consultations',
      'Patient monitoring',
      'Follow-up appointments',
      'Mental health services'
    ],
    technologies: ['WebRTC', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    integrations: ['Epic', 'Cerner', 'Allscripts', 'Stripe', 'Twilio'],
    compliance: ['HIPAA', 'SOC 2', 'HITECH', 'FDA'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  // Blockchain & Fintech Solutions
  {
    id: 'ai-smart-contract-platform',
    name: 'AI Smart Contract Platform',
    slug: 'ai-smart-contract-platform',
    category: 'Blockchain',
    description: 'Automated smart contract development with AI-powered security auditing and gas optimization.',
    headline: 'Build secure smart contracts with AI',
    icon: '🔗',
    pricing: '$1,299/month',
    marketPrice: '$2,499/month',
    roi: '400% ROI in 8 months',
    implementationTime: '2-3 weeks',
    supportLevel: '24/7 Blockchain Support',
    features: [
      'Automated contract generation',
      'AI security auditing',
      'Gas optimization',
      'Multi-blockchain support',
      'DeFi protocol integration',
      'Real-time monitoring'
    ],
    benefits: [
      '90% faster development',
      '99% security accuracy',
      '50% gas savings',
      '24/7 monitoring'
    ],
    targetAudience: ['DeFi Projects', 'Blockchain Companies', 'Crypto Exchanges', 'NFT Platforms'],
    useCases: [
      'DeFi protocol development',
      'NFT marketplace contracts',
      'Token contracts',
      'Governance systems'
    ],
    technologies: ['Solidity', 'Web3', 'Python', 'React', 'Ethereum'],
    integrations: ['Ethereum', 'Polygon', 'BSC', 'Arbitrum', 'Optimism'],
    compliance: ['SOC 2', 'ISO 27001'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  },

  // Advanced Analytics & BI
  {
    id: 'ai-business-intelligence-platform',
    name: 'AI Business Intelligence Platform',
    slug: 'ai-business-intelligence-platform',
    category: 'Advanced AI',
    description: 'Intelligent BI platform with AI-driven insights, automated reporting, and predictive analytics.',
    headline: 'Get insights that drive business growth',
    icon: '📊',
    pricing: '$899/month',
    marketPrice: '$1,499/month',
    roi: '350% ROI in 4 months',
    implementationTime: '1-2 weeks',
    supportLevel: 'Dedicated BI Analyst',
    features: [
      'AI-driven insights',
      'Automated reporting',
      'Predictive analytics',
      'Interactive dashboards',
      'Data visualization',
      'Custom KPI tracking'
    ],
    benefits: [
      '60% faster insights',
      '40% better decision making',
      '80% automation of reports',
      '50% cost reduction'
    ],
    targetAudience: ['Enterprises', 'SMBs', 'Analysts', 'Executives'],
    useCases: [
      'Performance monitoring',
      'Predictive analytics',
      'Executive reporting',
      'Operational insights'
    ],
    technologies: ['Machine Learning', 'Python', 'React', 'D3.js', 'PostgreSQL'],
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'MySQL', 'MongoDB'],
    compliance: ['SOC 2', 'GDPR', 'SOX'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  }
];

export const serviceCategories = [
  {
    name: 'AI Micro SaaS',
    description: 'Intelligent software solutions for specific business needs',
    icon: '🤖',
    count: services.filter(s => s.category === 'AI Micro SaaS').length
  },
  {
    name: 'Advanced AI',
    description: 'Cutting-edge AI solutions for enterprise transformation',
    icon: '🧠',
    count: services.filter(s => s.category === 'Advanced AI').length
  },
  {
    name: 'IT Services',
    description: 'Comprehensive IT infrastructure and DevOps solutions',
    icon: '☁️',
    count: services.filter(s => s.category === 'IT Services').length
  },
  {
    name: 'Micro SaaS',
    description: 'Scalable software solutions for rapid deployment',
    icon: '⚡',
    count: services.filter(s => s.category === 'Micro SaaS').length
  },
  {
    name: 'Healthcare Tech',
    description: 'Technology solutions for healthcare industry',
    icon: '🏥',
    count: services.filter(s => s.category === 'Healthcare Tech').length
  },
  {
    name: 'Blockchain',
    description: 'Decentralized solutions and smart contract development',
    icon: '🔗',
    count: services.filter(s => s.category === 'Blockchain').length
  }
];