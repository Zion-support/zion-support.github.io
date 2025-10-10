// Comprehensive Services Data for Zion Tech Group
// Real micro SAAS, IT, and AI services with market pricing and features

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Emerging Tech' | 'Enterprise Solutions';
  subcategory: string;
  icon: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    custom?: boolean;
    currency: string;
  };
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  technicalSpecs: {
    integrations: string[];
    apis: string[];
    security: string[];
    compliance: string[];
  };
  support: {
    level: 'Basic' | 'Standard' | 'Premium' | 'Enterprise';
    responseTime: string;
    channels: string[];
  };
  trial: {
    available: boolean;
    duration: string;
    features: string[];
  };
  deployment: {
    cloud: boolean;
    onPremise: boolean;
    hybrid: boolean;
    setupTime: string;
  };
  scalability: {
    users: string;
    data: string;
    performance: string;
  };
  roi: {
    timeToValue: string;
    averageSavings: string;
    productivityGain: string;
  };
  competitors: string[];
  marketPosition: string;
  lastUpdated: string;
  status: 'Active' | 'Beta' | 'Coming Soon' | 'Deprecated';
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-customer-support-pro',
    name: 'AI Customer Support Pro',
    description: 'Revolutionary AI-powered customer support system with 24/7 intelligent chatbots, sentiment analysis, and automated ticket routing. Reduces support costs by 60% while improving customer satisfaction.',
    category: 'AI Services',
    subcategory: 'Customer Experience',
    icon: '🤖',
    features: [
      'Multi-language AI chatbots with 95% accuracy',
      'Real-time sentiment analysis and mood detection',
      'Automated ticket classification and routing',
      'Knowledge base integration with smart search',
      'Voice and text support across all channels',
      'Advanced analytics and reporting dashboard',
      'Integration with 50+ CRM and helpdesk systems',
      'Custom AI model training for your industry'
    ],
    pricing: {
      monthly: 299,
      yearly: 2990,
      currency: 'USD'
    },
    benefits: [
      '60% reduction in support costs',
      '95% customer satisfaction rate',
      '24/7 availability without human intervention',
      'Instant response times under 2 seconds',
      'Scalable to handle unlimited concurrent conversations',
      'Reduces agent workload by 70%'
    ],
    useCases: [
      'E-commerce customer support',
      'SaaS product support',
      'Financial services inquiries',
      'Healthcare patient support',
      'Educational institution helpdesk',
      'Government citizen services'
    ],
    targetAudience: [
      'Mid to large enterprises',
      'E-commerce businesses',
      'SaaS companies',
      'Financial institutions',
      'Healthcare organizations',
      'Educational institutions'
    ],
    technicalSpecs: {
      integrations: ['Salesforce', 'Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp Business', 'Facebook Messenger'],
      apis: ['REST API', 'GraphQL', 'Webhook support', 'SDK for major languages'],
      security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'SSO integration'],
      compliance: ['GDPR', 'CCPA', 'HIPAA', 'PCI DSS', 'SOC 2']
    },
    support: {
      level: 'Premium',
      responseTime: '2 hours',
      channels: ['Email', 'Phone', 'Chat', 'Video call']
    },
    trial: {
      available: true,
      duration: '14 days',
      features: ['Full feature access', 'Up to 1000 conversations', 'Basic analytics', 'Email support']
    },
    deployment: {
      cloud: true,
      onPremise: true,
      hybrid: true,
      setupTime: '24-48 hours'
    },
    scalability: {
      users: 'Unlimited concurrent users',
      data: 'Unlimited conversation history',
      performance: '99.9% uptime SLA'
    },
    roi: {
      timeToValue: '2-4 weeks',
      averageSavings: '$50,000+ annually',
      productivityGain: '70% reduction in manual support tasks'
    },
    competitors: ['Intercom', 'Zendesk', 'Freshdesk', 'Drift'],
    marketPosition: 'Premium AI-first solution with superior accuracy',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  {
    id: 'ai-marketing-automation-suite',
    name: 'AI Marketing Automation Suite',
    description: 'Complete AI-powered marketing automation platform that increases conversion rates by 300% through intelligent campaign optimization, personalized content generation, and predictive analytics.',
    category: 'AI Services',
    subcategory: 'Marketing',
    icon: '📈',
    features: [
      'AI-powered email campaign optimization',
      'Dynamic content personalization',
      'Predictive customer journey mapping',
      'Automated A/B testing with AI insights',
      'Social media content generation and scheduling',
      'Advanced lead scoring and qualification',
      'Multi-channel campaign orchestration',
      'Real-time performance analytics and optimization'
    ],
    pricing: {
      monthly: 499,
      yearly: 4990,
      currency: 'USD'
    },
    benefits: [
      '300% increase in conversion rates',
      '50% reduction in campaign creation time',
      '40% improvement in email open rates',
      'Automated optimization saves 20 hours/week',
      'Predictive analytics prevent churn',
      'ROI tracking across all channels'
    ],
    useCases: [
      'E-commerce marketing campaigns',
      'B2B lead generation',
      'Customer retention programs',
      'Product launch campaigns',
      'Event marketing automation',
      'Content marketing optimization'
    ],
    targetAudience: [
      'Marketing agencies',
      'E-commerce businesses',
      'B2B SaaS companies',
      'Enterprise marketing teams',
      'Digital marketing consultants',
      'Growth-focused startups'
    ],
    technicalSpecs: {
      integrations: ['HubSpot', 'Salesforce', 'Mailchimp', 'Facebook Ads', 'Google Ads', 'LinkedIn Ads', 'Twitter Ads', 'Instagram Business'],
      apis: ['REST API', 'Webhook support', 'Custom integrations'],
      security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption at rest and in transit'],
      compliance: ['GDPR', 'CCPA', 'CAN-SPAM', 'CASL']
    },
    support: {
      level: 'Premium',
      responseTime: '4 hours',
      channels: ['Email', 'Phone', 'Chat', 'Video call']
    },
    trial: {
      available: true,
      duration: '30 days',
      features: ['Full platform access', 'Up to 10,000 contacts', 'Basic analytics', 'Email support']
    },
    deployment: {
      cloud: true,
      onPremise: false,
      hybrid: false,
      setupTime: '1-2 weeks'
    },
    scalability: {
      users: 'Unlimited team members',
      data: 'Unlimited contacts and campaigns',
      performance: '99.9% uptime SLA'
    },
    roi: {
      timeToValue: '4-6 weeks',
      averageSavings: '$100,000+ annually',
      productivityGain: '300% increase in marketing ROI'
    },
    competitors: ['HubSpot', 'Marketo', 'Pardot', 'ActiveCampaign'],
    marketPosition: 'AI-first approach with superior automation capabilities',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  {
    id: 'ai-data-analytics-platform',
    name: 'AI Data Analytics Platform',
    description: 'Advanced AI-powered business intelligence platform that transforms raw data into actionable insights with predictive analytics, automated reporting, and real-time dashboards.',
    category: 'AI Services',
    subcategory: 'Analytics',
    icon: '📊',
    features: [
      'AI-powered data visualization and insights',
      'Predictive analytics and forecasting',
      'Automated report generation and distribution',
      'Real-time dashboard with 100+ data sources',
      'Natural language query interface',
      'Anomaly detection and alerting',
      'Custom ML model deployment',
      'Advanced statistical analysis tools'
    ],
    pricing: {
      monthly: 799,
      yearly: 7990,
      currency: 'USD'
    },
    benefits: [
      '50% faster decision making',
      '90% reduction in manual reporting',
      'Predictive insights prevent 30% of business risks',
      'Real-time data processing and visualization',
      'Automated insights save 25 hours/week',
      'Custom ML models for industry-specific needs'
    ],
    useCases: [
      'Financial performance analysis',
      'Sales forecasting and pipeline management',
      'Customer behavior analysis',
      'Supply chain optimization',
      'Risk assessment and management',
      'Operational efficiency monitoring'
    ],
    targetAudience: [
      'Data analysts and scientists',
      'Business intelligence teams',
      'C-level executives',
      'Operations managers',
      'Financial analysts',
      'Marketing analysts'
    ],
    technicalSpecs: {
      integrations: ['Salesforce', 'Google Analytics', 'MySQL', 'PostgreSQL', 'MongoDB', 'Snowflake', 'BigQuery', 'Tableau'],
      apis: ['REST API', 'GraphQL', 'Python SDK', 'R SDK', 'SQL interface'],
      security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Role-based access control'],
      compliance: ['GDPR', 'CCPA', 'SOX', 'HIPAA', 'SOC 2']
    },
    support: {
      level: 'Enterprise',
      responseTime: '1 hour',
      channels: ['Email', 'Phone', 'Chat', 'Video call', 'Dedicated support']
    },
    trial: {
      available: true,
      duration: '30 days',
      features: ['Full platform access', 'Up to 1M data points', 'Basic analytics', 'Email support']
    },
    deployment: {
      cloud: true,
      onPremise: true,
      hybrid: true,
      setupTime: '1-2 weeks'
    },
    scalability: {
      users: 'Unlimited users',
      data: 'Unlimited data processing',
      performance: '99.9% uptime SLA'
    },
    roi: {
      timeToValue: '6-8 weeks',
      averageSavings: '$200,000+ annually',
      productivityGain: '90% reduction in manual reporting'
    },
    competitors: ['Tableau', 'Power BI', 'Looker', 'Qlik Sense'],
    marketPosition: 'AI-first analytics with superior predictive capabilities',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  // Micro SAAS Services
  {
    id: 'ai-content-studio-pro',
    name: 'AI Content Studio Pro',
    description: 'Complete AI-powered content creation suite for blogs, social media, videos, and marketing materials. Generate high-quality content 10x faster with brand consistency.',
    category: 'Micro SAAS',
    subcategory: 'Content Creation',
    icon: '✍️',
    features: [
      'AI blog post generation with SEO optimization',
      'Social media content creation for all platforms',
      'Video script writing and storyboarding',
      'Image generation and editing with AI',
      'Brand voice consistency across all content',
      'Multi-language content translation',
      'Content calendar and scheduling',
      'Performance analytics and optimization'
    ],
    pricing: {
      monthly: 99,
      yearly: 990,
      currency: 'USD'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand voice across all content',
      'SEO-optimized content increases organic traffic by 150%',
      'Multi-platform content from single input',
      'Automated content calendar management',
      'Professional-quality output without design skills'
    ],
    useCases: [
      'Blog content creation',
      'Social media marketing',
      'Email newsletter content',
      'Product descriptions',
      'Marketing copywriting',
      'Video content planning'
    ],
    targetAudience: [
      'Content creators',
      'Marketing teams',
      'Small businesses',
      'Freelancers',
      'Agencies',
      'E-commerce stores'
    ],
    technicalSpecs: {
      integrations: ['WordPress', 'Hootsuite', 'Buffer', 'Mailchimp', 'HubSpot', 'Canva', 'Figma'],
      apis: ['REST API', 'Webhook support'],
      security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption'],
      compliance: ['GDPR', 'CCPA']
    },
    support: {
      level: 'Standard',
      responseTime: '24 hours',
      channels: ['Email', 'Chat']
    },
    trial: {
      available: true,
      duration: '7 days',
      features: ['10 content pieces', 'Basic templates', 'Email support']
    },
    deployment: {
      cloud: true,
      onPremise: false,
      hybrid: false,
      setupTime: 'Immediate'
    },
    scalability: {
      users: 'Up to 10 team members',
      data: 'Unlimited content generation',
      performance: '99.5% uptime SLA'
    },
    roi: {
      timeToValue: '1-2 weeks',
      averageSavings: '$5,000+ annually',
      productivityGain: '10x faster content creation'
    },
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'ContentBot'],
    marketPosition: 'Comprehensive content suite with superior AI quality',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  {
    id: 'ai-invoice-generator-plus',
    name: 'AI Invoice Generator Plus',
    description: 'Intelligent invoice generation and payment tracking system with AI-powered expense categorization, automated follow-ups, and financial insights.',
    category: 'Micro SAAS',
    subcategory: 'Finance',
    icon: '💰',
    features: [
      'AI-powered invoice generation from templates',
      'Automated expense categorization and tracking',
      'Payment reminder automation',
      'Multi-currency support with real-time rates',
      'Client portal for invoice viewing and payment',
      'Financial reporting and analytics',
      'Integration with accounting software',
      'Mobile app for on-the-go management'
    ],
    pricing: {
      monthly: 49,
      yearly: 490,
      currency: 'USD'
    },
    benefits: [
      '90% reduction in invoice creation time',
      'Automated payment reminders increase collection by 40%',
      'Real-time financial insights and reporting',
      'Professional invoices improve brand perception',
      'Automated expense tracking saves 5 hours/week',
      'Integration with major accounting platforms'
    ],
    useCases: [
      'Freelancer invoice management',
      'Small business billing',
      'Service-based company invoicing',
      'Contractor payment tracking',
      'Agency client billing',
      'Consulting firm invoicing'
    ],
    targetAudience: [
      'Freelancers',
      'Small businesses',
      'Consultants',
      'Agencies',
      'Contractors',
      'Service providers'
    ],
    technicalSpecs: {
      integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Stripe', 'PayPal', 'Square', 'Wise'],
      apis: ['REST API', 'Webhook support'],
      security: ['SOC 2 Type II', 'GDPR compliant', 'Bank-level encryption'],
      compliance: ['GDPR', 'CCPA', 'PCI DSS']
    },
    support: {
      level: 'Standard',
      responseTime: '24 hours',
      channels: ['Email', 'Chat']
    },
    trial: {
      available: true,
      duration: '14 days',
      features: ['Unlimited invoices', 'Basic reporting', 'Email support']
    },
    deployment: {
      cloud: true,
      onPremise: false,
      hybrid: false,
      setupTime: 'Immediate'
    },
    scalability: {
      users: 'Up to 5 team members',
      data: 'Unlimited invoices and transactions',
      performance: '99.5% uptime SLA'
    },
    roi: {
      timeToValue: '1 week',
      averageSavings: '$2,000+ annually',
      productivityGain: '90% reduction in billing time'
    },
    competitors: ['FreshBooks', 'Wave', 'Zoho Invoice', 'Invoice2go'],
    marketPosition: 'AI-powered invoicing with superior automation',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  {
    id: 'ai-seo-optimizer-pro',
    name: 'AI SEO Optimizer Pro',
    description: 'Advanced AI-powered SEO optimization tool that analyzes your website, suggests improvements, and tracks rankings across all major search engines.',
    category: 'Micro SAAS',
    subcategory: 'SEO',
    icon: '🔍',
    features: [
      'AI-powered keyword research and analysis',
      'On-page SEO optimization suggestions',
      'Competitor analysis and gap identification',
      'Content optimization recommendations',
      'Technical SEO auditing and fixes',
      'Local SEO optimization for businesses',
      'Ranking tracking across search engines',
      'Automated SEO reporting and insights'
    ],
    pricing: {
      monthly: 79,
      yearly: 790,
      currency: 'USD'
    },
    benefits: [
      'Average 200% increase in organic traffic',
      'AI suggestions improve rankings by 150%',
      'Automated monitoring saves 10 hours/week',
      'Comprehensive competitor analysis',
      'Technical SEO fixes prevent ranking drops',
      'Local SEO optimization for better visibility'
    ],
    useCases: [
      'Website SEO optimization',
      'E-commerce product optimization',
      'Local business SEO',
      'Content marketing optimization',
      'Competitor analysis',
      'Technical SEO auditing'
    ],
    targetAudience: [
      'SEO professionals',
      'Digital marketing agencies',
      'Website owners',
      'E-commerce businesses',
      'Local businesses',
      'Content creators'
    ],
    technicalSpecs: {
      integrations: ['Google Search Console', 'Google Analytics', 'Bing Webmaster Tools', 'WordPress', 'Shopify', 'Wix'],
      apis: ['REST API', 'Webhook support'],
      security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption'],
      compliance: ['GDPR', 'CCPA']
    },
    support: {
      level: 'Standard',
      responseTime: '24 hours',
      channels: ['Email', 'Chat']
    },
    trial: {
      available: true,
      duration: '14 days',
      features: ['Up to 5 websites', 'Basic analytics', 'Email support']
    },
    deployment: {
      cloud: true,
      onPremise: false,
      hybrid: false,
      setupTime: 'Immediate'
    },
    scalability: {
      users: 'Up to 3 team members',
      data: 'Unlimited website analysis',
      performance: '99.5% uptime SLA'
    },
    roi: {
      timeToValue: '2-4 weeks',
      averageSavings: '$10,000+ annually',
      productivityGain: '200% increase in organic traffic'
    },
    competitors: ['Ahrefs', 'SEMrush', 'Moz', 'Screaming Frog'],
    marketPosition: 'AI-first SEO with superior optimization suggestions',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  // IT Services
  {
    id: 'cloud-migration-expert',
    name: 'Cloud Migration Expert',
    description: 'Comprehensive cloud migration services with zero downtime, automated testing, and 99.9% uptime guarantee. Migrate to AWS, Azure, or Google Cloud with confidence.',
    category: 'IT Services',
    subcategory: 'Cloud Services',
    icon: '☁️',
    features: [
      'Zero-downtime migration strategy',
      'Automated testing and validation',
      'Multi-cloud and hybrid cloud solutions',
      'Data security and compliance assurance',
      'Performance optimization and monitoring',
      'Cost optimization and management',
      '24/7 support during migration',
      'Post-migration optimization and training'
    ],
    pricing: {
      monthly: 2999,
      yearly: 29990,
      custom: true,
      currency: 'USD'
    },
    benefits: [
      'Zero downtime during migration',
      '99.9% uptime guarantee',
      'Average 40% cost reduction in cloud spend',
      'Improved security and compliance',
      'Scalable infrastructure for growth',
      'Expert support throughout the process'
    ],
    useCases: [
      'Legacy system modernization',
      'Data center migration',
      'Hybrid cloud implementation',
      'Multi-cloud strategy',
      'Disaster recovery setup',
      'Compliance migration'
    ],
    targetAudience: [
      'Enterprise companies',
      'Mid-size businesses',
      'Government organizations',
      'Healthcare institutions',
      'Financial services',
      'E-commerce platforms'
    ],
    technicalSpecs: {
      integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes', 'Terraform'],
      apis: ['Cloud provider APIs', 'Custom migration tools', 'Monitoring APIs'],
      security: ['SOC 2 Type II', 'ISO 27001', 'FedRAMP', 'HIPAA', 'PCI DSS'],
      compliance: ['SOC 2', 'ISO 27001', 'FedRAMP', 'HIPAA', 'PCI DSS', 'GDPR']
    },
    support: {
      level: 'Enterprise',
      responseTime: '1 hour',
      channels: ['Phone', 'Email', 'Chat', 'Video call', 'Dedicated support']
    },
    trial: {
      available: false,
      duration: 'N/A',
      features: ['Free consultation and assessment']
    },
    deployment: {
      cloud: true,
      onPremise: true,
      hybrid: true,
      setupTime: '2-8 weeks depending on complexity'
    },
    scalability: {
      users: 'Unlimited',
      data: 'Unlimited',
      performance: '99.9% uptime SLA'
    },
    roi: {
      timeToValue: '2-4 weeks',
      averageSavings: '$100,000+ annually',
      productivityGain: '40% reduction in infrastructure costs'
    },
    competitors: ['Accenture', 'Deloitte', 'IBM', 'Capgemini'],
    marketPosition: 'Specialized cloud migration with zero downtime guarantee',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  {
    id: 'cybersecurity-suite-pro',
    name: 'Cybersecurity Suite Pro',
    description: 'Comprehensive cybersecurity solution with AI-powered threat detection, 24/7 monitoring, and automated incident response. Protect your business from evolving cyber threats.',
    category: 'IT Services',
    subcategory: 'Security',
    icon: '🔒',
    features: [
      'AI-powered threat detection and prevention',
      '24/7 security monitoring and alerting',
      'Automated incident response and remediation',
      'Vulnerability assessment and penetration testing',
      'Compliance management and reporting',
      'Security awareness training for employees',
      'Endpoint protection and mobile security',
      'Network security and firewall management'
    ],
    pricing: {
      monthly: 1299,
      yearly: 12990,
      currency: 'USD'
    },
    benefits: [
      '99.9% threat detection accuracy',
      'Average 90% reduction in security incidents',
      'Automated response reduces damage by 80%',
      'Compliance with major security standards',
      '24/7 expert monitoring and support',
      'Proactive threat hunting and prevention'
    ],
    useCases: [
      'Enterprise security protection',
      'Compliance and audit requirements',
      'Incident response and recovery',
      'Security awareness training',
      'Vulnerability management',
      'Threat intelligence and monitoring'
    ],
    targetAudience: [
      'Enterprise companies',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'E-commerce businesses',
      'SaaS companies'
    ],
    technicalSpecs: {
      integrations: ['SIEM platforms', 'EDR solutions', 'Firewall systems', 'Identity providers', 'Cloud platforms'],
      apis: ['REST API', 'Webhook support', 'SIEM integration'],
      security: ['SOC 2 Type II', 'ISO 27001', 'FedRAMP', 'HIPAA', 'PCI DSS'],
      compliance: ['SOC 2', 'ISO 27001', 'FedRAMP', 'HIPAA', 'PCI DSS', 'GDPR', 'NIST']
    },
    support: {
      level: 'Enterprise',
      responseTime: '15 minutes for critical issues',
      channels: ['Phone', 'Email', 'Chat', 'Video call', 'Dedicated support']
    },
    trial: {
      available: true,
      duration: '30 days',
      features: ['Basic threat detection', 'Security assessment', 'Email support']
    },
    deployment: {
      cloud: true,
      onPremise: true,
      hybrid: true,
      setupTime: '1-2 weeks'
    },
    scalability: {
      users: 'Unlimited',
      data: 'Unlimited',
      performance: '99.9% uptime SLA'
    },
    roi: {
      timeToValue: '2-4 weeks',
      averageSavings: '$500,000+ annually',
      productivityGain: '90% reduction in security incidents'
    },
    competitors: ['CrowdStrike', 'Palo Alto Networks', 'Fortinet', 'Check Point'],
    marketPosition: 'AI-first security with superior threat detection',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  // Emerging Technologies
  {
    id: 'quantum-computing-solutions',
    name: 'Quantum Computing Solutions',
    description: 'Cutting-edge quantum computing services for complex optimization problems, cryptography, and scientific research. Harness the power of quantum mechanics for breakthrough solutions.',
    category: 'Emerging Tech',
    subcategory: 'Quantum Computing',
    icon: '⚛️',
    features: [
      'Quantum algorithm development and optimization',
      'Quantum cryptography and secure communications',
      'Quantum machine learning and AI',
      'Quantum simulation for scientific research',
      'Quantum optimization for logistics and finance',
      'Quantum error correction and fault tolerance',
      'Hybrid classical-quantum computing solutions',
      'Quantum cloud access and development tools'
    ],
    pricing: {
      monthly: 0,
      yearly: 0,
      custom: true,
      currency: 'USD'
    },
    benefits: [
      'Exponential speedup for specific problems',
      'Breakthrough solutions in optimization',
      'Unbreakable quantum cryptography',
      'Revolutionary machine learning capabilities',
      'Scientific research acceleration',
      'Competitive advantage in innovation'
    ],
    useCases: [
      'Financial portfolio optimization',
      'Drug discovery and molecular simulation',
      'Cryptography and cybersecurity',
      'Supply chain optimization',
      'Climate modeling and research',
      'Machine learning acceleration'
    ],
    targetAudience: [
      'Research institutions',
      'Financial services',
      'Pharmaceutical companies',
      'Government agencies',
      'Technology companies',
      'Academic institutions'
    ],
    technicalSpecs: {
      integrations: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Amazon Braket'],
      apis: ['Quantum SDKs', 'Qiskit', 'Cirq', 'Q#'],
      security: ['Quantum-safe cryptography', 'Post-quantum security'],
      compliance: ['Research compliance', 'Data protection standards']
    },
    support: {
      level: 'Enterprise',
      responseTime: '24 hours',
      channels: ['Email', 'Phone', 'Video call', 'Dedicated support']
    },
    trial: {
      available: true,
      duration: '90 days',
      features: ['Quantum cloud access', 'Basic algorithms', 'Consultation']
    },
    deployment: {
      cloud: true,
      onPremise: false,
      hybrid: true,
      setupTime: '2-4 weeks'
    },
    scalability: {
      users: 'Research teams',
      data: 'Quantum-scale processing',
      performance: 'Quantum advantage for specific problems'
    },
    roi: {
      timeToValue: '6-12 months',
      averageSavings: 'Breakthrough solutions',
      productivityGain: 'Exponential problem-solving capability'
    },
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    marketPosition: 'Leading quantum computing consultancy and solutions',
    lastUpdated: '2024-01-15',
    status: 'Active'
  },

  {
    id: 'ai-3d-generation-studio',
    name: 'AI 3D Generation Studio',
    description: 'Revolutionary AI-powered 3D content creation platform that generates high-quality 3D models, animations, and virtual environments from text descriptions and images.',
    category: 'Emerging Tech',
    subcategory: '3D AI',
    icon: '🎨',
    features: [
      'Text-to-3D model generation with AI',
      'Image-to-3D conversion technology',
      '3D animation and rigging automation',
      'Virtual environment generation',
      '3D asset optimization and compression',
      'Real-time 3D rendering and preview',
      'VR/AR content creation tools',
      '3D printing model generation'
    ],
    pricing: {
      monthly: 199,
      yearly: 1990,
      currency: 'USD'
    },
    benefits: [
      '90% faster 3D content creation',
      'Professional-quality 3D models without expertise',
      'Automated animation and rigging',
      'VR/AR ready content generation',
      'Cost-effective 3D asset production',
      'Scalable 3D content pipeline'
    ],
    useCases: [
      'Game development and design',
      'Architectural visualization',
      'Product design and prototyping',
      'Marketing and advertising content',
      'VR/AR applications',
      '3D printing and manufacturing'
    ],
    targetAudience: [
      'Game developers',
      '3D artists and designers',
      'Architects and engineers',
      'Marketing agencies',
      'VR/AR developers',
      'Product designers'
    ],
    technicalSpecs: {
      integrations: ['Blender', 'Maya', '3ds Max', 'Unity', 'Unreal Engine', 'Sketchfab'],
      apis: ['REST API', 'Webhook support', '3D model APIs'],
      security: ['SOC 2 Type II', 'GDPR compliant', 'Data encryption'],
      compliance: ['GDPR', 'CCPA']
    },
    support: {
      level: 'Standard',
      responseTime: '24 hours',
      channels: ['Email', 'Chat', 'Video call']
    },
    trial: {
      available: true,
      duration: '14 days',
      features: ['10 3D models', 'Basic rendering', 'Email support']
    },
    deployment: {
      cloud: true,
      onPremise: false,
      hybrid: false,
      setupTime: 'Immediate'
    },
    scalability: {
      users: 'Up to 10 team members',
      data: 'Unlimited 3D generation',
      performance: '99.5% uptime SLA'
    },
    roi: {
      timeToValue: '2-4 weeks',
      averageSavings: '$20,000+ annually',
      productivityGain: '90% faster 3D content creation'
    },
    competitors: ['NVIDIA Omniverse', 'Blender AI', 'Autodesk AI', 'Sketchfab AI'],
    marketPosition: 'Leading AI-powered 3D generation platform',
    lastUpdated: '2024-01-15',
    status: 'Active'
  }
];

export const serviceCategories = [
  {
    id: 'ai-services',
    name: 'AI Services',
    description: 'Advanced artificial intelligence solutions for business automation and optimization',
    icon: '🤖',
    count: services.filter(s => s.category === 'AI Services').length
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    description: 'Affordable, powerful AI-driven tools for modern businesses',
    icon: '💻',
    count: services.filter(s => s.category === 'Micro SAAS').length
  },
  {
    id: 'it-services',
    name: 'IT Services',
    description: 'Comprehensive IT solutions and infrastructure management',
    icon: '⚙️',
    count: services.filter(s => s.category === 'IT Services').length
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technologies',
    description: 'Cutting-edge technologies shaping the future',
    icon: '🚀',
    count: services.filter(s => s.category === 'Emerging Tech').length
  },
  {
    id: 'enterprise-solutions',
    name: 'Enterprise Solutions',
    description: 'Scalable solutions for large organizations',
    icon: '🏢',
    count: services.filter(s => s.category === 'Enterprise Solutions').length
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = (limit: number = 6): Service[] => {
  return services
    .filter(service => service.status === 'Active')
    .sort((a, b) => b.pricing.monthly - a.pricing.monthly)
    .slice(0, limit);
};

export const getTrialServices = (): Service[] => {
  return services.filter(service => service.trial.available);
};