export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'ai' | 'it' | 'saas' | 'infrastructure' | 'business';
  features: string[];
  benefits: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technologies: string[];
  useCases: string[];
  integrations: string[];
  support: string[];
}

export const servicesData: Service[] = [
  // AI Services
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator Pro',
    description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy using state-of-the-art language models.',
    icon: '🤖',
    category: 'ai',
    features: [
      'Multi-language content generation',
      'SEO-optimized content',
      'Brand voice customization',
      'Content templates library',
      'Plagiarism detection',
      'Real-time collaboration',
      'Content scheduling',
      'Analytics dashboard'
    ],
    benefits: [
      'Save 80% content creation time',
      'Increase content output by 500%',
      'Improve SEO rankings',
      'Maintain consistent brand voice',
      'Reduce content costs by 70%'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    marketPrice: '$99-299/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-generator'
    },
    technologies: ['GPT-4', 'Claude', 'BERT', 'React', 'Node.js', 'MongoDB'],
    useCases: ['Blog writing', 'Social media', 'Email marketing', 'Product descriptions', 'Press releases'],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Google Analytics'],
    support: ['24/7 chat support', 'Video tutorials', 'API documentation', 'Custom training']
  },
  {
    id: 'ai-customer-churn-predictor',
    title: 'AI Customer Churn Predictor',
    description: 'Machine learning solution that predicts customer churn with 95% accuracy, helping businesses retain customers and increase lifetime value.',
    icon: '📊',
    category: 'ai',
    features: [
      'Real-time churn prediction',
      'Customer segmentation',
      'Risk scoring algorithms',
      'Automated alerts',
      'Retention campaign suggestions',
      'ROI tracking',
      'Custom ML models',
      'API integration'
    ],
    benefits: [
      'Reduce churn by 40%',
      'Increase customer lifetime value',
      'Save $50K+ annually on retention',
      'Improve customer satisfaction',
      'Data-driven decisions'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799
    },
    marketPrice: '$200-800/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-customer-churn-predictor'
    },
    technologies: ['TensorFlow', 'Scikit-learn', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    useCases: ['SaaS companies', 'E-commerce', 'Subscription services', 'Telecom', 'Financial services'],
    integrations: ['Salesforce', 'HubSpot', 'Stripe', 'Zendesk', 'Mixpanel'],
    support: ['Dedicated success manager', 'Custom model training', '24/7 support', 'Monthly reports']
  },
  {
    id: 'ai-document-analyzer',
    title: 'AI Document Analyzer',
    description: 'Intelligent document processing system that extracts, analyzes, and categorizes information from PDFs, images, and text documents using advanced OCR and NLP.',
    icon: '📄',
    category: 'ai',
    features: [
      'OCR text extraction',
      'Document classification',
      'Data extraction',
      'Form processing',
      'Language detection',
      'Batch processing',
      'API endpoints',
      'Custom templates'
    ],
    benefits: [
      'Process 1000+ documents/hour',
      'Reduce manual data entry by 90%',
      'Improve accuracy to 99%',
      'Save 20+ hours weekly',
      'Automate workflows'
    ],
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399
    },
    marketPrice: '$150-500/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-document-analyzer'
    },
    technologies: ['Tesseract OCR', 'spaCy', 'OpenCV', 'FastAPI', 'AWS S3', 'Elasticsearch'],
    useCases: ['Invoice processing', 'Contract analysis', 'Legal documents', 'Insurance claims', 'Medical records'],
    integrations: ['Dropbox', 'Google Drive', 'SharePoint', 'Slack', 'Zapier'],
    support: ['Custom model training', 'API documentation', '24/7 support', 'Integration assistance']
  },
  {
    id: 'ai-financial-forecaster',
    title: 'AI Financial Forecaster',
    description: 'Advanced financial forecasting tool that uses machine learning to predict revenue, expenses, and cash flow with high accuracy for better business planning.',
    icon: '💰',
    category: 'ai',
    features: [
      'Revenue forecasting',
      'Expense prediction',
      'Cash flow analysis',
      'Scenario planning',
      'Risk assessment',
      'Automated reports',
      'Real-time updates',
      'Custom models'
    ],
    benefits: [
      'Improve forecast accuracy by 85%',
      'Reduce planning time by 70%',
      'Better cash flow management',
      'Identify growth opportunities',
      'Minimize financial risks'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    marketPrice: '$500-2000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-financial-forecaster'
    },
    technologies: ['Prophet', 'ARIMA', 'LSTM', 'Python', 'Pandas', 'Plotly'],
    useCases: ['Startups', 'SMBs', 'Enterprise', 'Financial services', 'Consulting'],
    integrations: ['QuickBooks', 'Xero', 'Sage', 'Excel', 'Google Sheets'],
    support: ['Financial consultant', 'Custom modeling', 'Training sessions', 'Monthly reviews']
  },
  {
    id: 'ai-meeting-transcriber',
    title: 'AI Meeting Transcriber',
    description: 'Real-time meeting transcription and analysis tool that converts speech to text, generates summaries, and extracts action items automatically.',
    icon: '🎤',
    category: 'ai',
    features: [
      'Real-time transcription',
      'Speaker identification',
      'Meeting summaries',
      'Action item extraction',
      'Sentiment analysis',
      'Search functionality',
      'Export options',
      'Integration APIs'
    ],
    benefits: [
      'Save 2+ hours per meeting',
      'Never miss important points',
      'Improve meeting efficiency',
      'Better follow-up tracking',
      'Accessible meetings'
    ],
    pricing: {
      basic: 39,
      pro: 99,
      enterprise: 299
    },
    marketPrice: '$100-400/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-meeting-transcriber'
    },
    technologies: ['Whisper AI', 'WebRTC', 'React', 'Node.js', 'WebSocket', 'AWS'],
    useCases: ['Team meetings', 'Client calls', 'Interviews', 'Webinars', 'Training sessions'],
    integrations: ['Zoom', 'Teams', 'Google Meet', 'Slack', 'Notion'],
    support: ['Setup assistance', 'Custom training', '24/7 support', 'API documentation']
  },

  // IT Services
  {
    id: 'api-development',
    title: 'API Development & Integration',
    description: 'Custom API development and integration services for seamless data exchange between systems, applications, and third-party services.',
    icon: '🔌',
    category: 'it',
    features: [
      'RESTful API design',
      'GraphQL implementation',
      'API documentation',
      'Rate limiting',
      'Authentication & security',
      'Testing & monitoring',
      'Version control',
      'Performance optimization'
    ],
    benefits: [
      'Improve system integration',
      'Reduce development time',
      'Enhance security',
      'Better performance',
      'Scalable architecture'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    marketPrice: '$5K-25K per project',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/api-development'
    },
    technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'Redis', 'Docker'],
    useCases: ['E-commerce', 'Mobile apps', 'Third-party integrations', 'Microservices', 'Data synchronization'],
    integrations: ['Stripe', 'PayPal', 'Twilio', 'SendGrid', 'AWS'],
    support: ['Code review', 'Documentation', 'Maintenance', '24/7 support']
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation & CI/CD',
    description: 'Complete DevOps automation solutions including CI/CD pipelines, infrastructure as code, monitoring, and deployment automation.',
    icon: '⚙️',
    category: 'it',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & alerting',
      'Auto-scaling',
      'Security scanning',
      'Backup & recovery',
      'Performance optimization'
    ],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment errors by 95%',
      'Improve system reliability',
      'Lower operational costs',
      'Better security posture'
    ],
    pricing: {
      basic: 4999,
      pro: 12999,
      enterprise: 29999
    },
    marketPrice: '$8K-35K per project',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/devops-automation'
    },
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Prometheus'],
    useCases: ['Web applications', 'Microservices', 'Mobile backends', 'Data pipelines', 'Machine learning'],
    integrations: ['GitHub', 'GitLab', 'AWS', 'Azure', 'GCP'],
    support: ['Training', 'Documentation', '24/7 monitoring', 'Emergency support']
  },
  {
    id: 'security-audit',
    title: 'Security Audit & Penetration Testing',
    description: 'Comprehensive security assessment services including vulnerability scanning, penetration testing, and security compliance audits.',
    icon: '🔒',
    category: 'it',
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Security compliance audit',
      'Code security review',
      'Network security scan',
      'Social engineering tests',
      'Security recommendations',
      'Compliance reporting'
    ],
    benefits: [
      'Identify security vulnerabilities',
      'Meet compliance requirements',
      'Protect customer data',
      'Avoid costly breaches',
      'Build trust with customers'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    marketPrice: '$5K-25K per audit',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/security-audit'
    },
    technologies: ['OWASP', 'Nessus', 'Burp Suite', 'Nmap', 'Metasploit', 'Custom tools'],
    useCases: ['Web applications', 'Mobile apps', 'Network infrastructure', 'Cloud services', 'Compliance'],
    integrations: ['JIRA', 'Slack', 'Email alerts', 'SIEM systems', 'Ticketing systems'],
    support: ['Detailed reports', 'Remediation guidance', 'Follow-up testing', 'Training sessions']
  },

  // Micro SaaS Solutions
  {
    id: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    description: 'AI-powered expense management tool that automatically categorizes receipts, tracks spending patterns, and provides financial insights.',
    icon: '💳',
    category: 'saas',
    features: [
      'Receipt scanning & OCR',
      'Automatic categorization',
      'Spending analytics',
      'Budget tracking',
      'Expense reports',
      'Team collaboration',
      'Mobile app',
      'API integration'
    ],
    benefits: [
      'Save 5+ hours weekly',
      'Reduce expense errors by 90%',
      'Better budget control',
      'Automated compliance',
      'Real-time insights'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 99
    },
    marketPrice: '$30-150/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-smart-expense-tracker'
    },
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'OCR API', 'Machine Learning'],
    useCases: ['Small businesses', 'Freelancers', 'Teams', 'Accountants', 'Consultants'],
    integrations: ['QuickBooks', 'Xero', 'Slack', 'Email', 'Bank APIs'],
    support: ['Setup assistance', 'Training videos', 'Email support', 'API documentation']
  },
  {
    id: 'customer-satisfaction-monitor',
    title: 'Customer Satisfaction Monitor',
    description: 'Real-time customer satisfaction tracking and analysis platform that monitors feedback across multiple channels and provides actionable insights.',
    icon: '😊',
    category: 'saas',
    features: [
      'Multi-channel feedback collection',
      'Sentiment analysis',
      'Real-time dashboards',
      'Automated alerts',
      'Trend analysis',
      'Custom surveys',
      'Team notifications',
      'Integration APIs'
    ],
    benefits: [
      'Increase customer satisfaction by 40%',
      'Reduce churn by 30%',
      'Faster issue resolution',
      'Better customer insights',
      'Proactive support'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    marketPrice: '$50-300/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-customer-satisfaction-monitor'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'NLP', 'WebSocket', 'AWS'],
    useCases: ['E-commerce', 'SaaS companies', 'Service businesses', 'Retail', 'Healthcare'],
    integrations: ['Zendesk', 'Intercom', 'Slack', 'Email', 'SMS', 'Social media'],
    support: ['Setup assistance', 'Custom dashboards', 'Training', '24/7 support']
  },
  {
    id: 'inventory-optimizer-pro',
    title: 'AI Inventory Optimizer Pro',
    description: 'Intelligent inventory management system that uses machine learning to optimize stock levels, predict demand, and reduce carrying costs.',
    icon: '📦',
    category: 'saas',
    features: [
      'Demand forecasting',
      'Stock optimization',
      'Reorder point calculation',
      'Supplier management',
      'Cost analysis',
      'Multi-location support',
      'Barcode scanning',
      'Mobile app'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Eliminate stockouts',
      'Improve cash flow',
      'Better supplier relationships',
      'Automated reordering'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799
    },
    marketPrice: '$200-800/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-inventory-optimizer-pro'
    },
    technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'Redis', 'AWS'],
    useCases: ['Retail', 'E-commerce', 'Manufacturing', 'Wholesale', 'Distribution'],
    integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'SAP', 'Oracle'],
    support: ['Custom modeling', 'Training sessions', '24/7 support', 'Monthly reviews']
  },

  // Infrastructure Services
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure Solutions',
    description: 'Comprehensive cloud infrastructure services including migration, optimization, security, and 24/7 monitoring for scalable and reliable systems.',
    icon: '☁️',
    category: 'infrastructure',
    features: [
      'Cloud migration',
      'Infrastructure optimization',
      'Auto-scaling setup',
      'Security hardening',
      'Disaster recovery',
      'Performance monitoring',
      'Cost optimization',
      '24/7 support'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve system reliability',
      'Better security posture',
      'Faster deployment',
      'Scalable architecture'
    ],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 12999
    },
    marketPrice: '$3K-15K per project',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    useCases: ['Web applications', 'Data centers', 'Hybrid cloud', 'Multi-cloud', 'Compliance'],
    integrations: ['CI/CD pipelines', 'Monitoring tools', 'Security tools', 'Backup systems'],
    support: ['Architecture review', 'Migration planning', '24/7 monitoring', 'Emergency support']
  },
  {
    id: '5g-solutions',
    title: '5G Network Solutions',
    description: 'Advanced 5G network implementation and optimization services for ultra-fast connectivity, IoT integration, and next-generation applications.',
    icon: '📡',
    category: 'infrastructure',
    features: [
      '5G network planning',
      'IoT device integration',
      'Edge computing setup',
      'Network optimization',
      'Security implementation',
      'Performance monitoring',
      'Custom applications',
      'Training & support'
    ],
    benefits: [
      'Ultra-fast connectivity',
      'Low latency applications',
      'Massive IoT support',
      'Better user experience',
      'Future-proof technology'
    ],
    pricing: {
      basic: 9999,
      pro: 24999,
      enterprise: 49999
    },
    marketPrice: '$15K-60K per project',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-solutions'
    },
    technologies: ['5G NR', 'Edge Computing', 'IoT Protocols', 'SDN', 'NFV', 'AI/ML'],
    useCases: ['Smart cities', 'Industrial IoT', 'Autonomous vehicles', 'AR/VR', 'Telemedicine'],
    integrations: ['Cloud platforms', 'IoT platforms', 'Analytics tools', 'Security systems'],
    support: ['Network design', 'Implementation', 'Testing', 'Ongoing support']
  },

  // Business Solutions
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    description: 'End-to-end digital transformation services that modernize business processes, implement new technologies, and drive digital innovation.',
    icon: '🚀',
    category: 'business',
    features: [
      'Digital strategy development',
      'Process automation',
      'Technology implementation',
      'Change management',
      'Training & support',
      'Performance monitoring',
      'ROI tracking',
      'Continuous improvement'
    ],
    benefits: [
      'Increase efficiency by 50%',
      'Reduce operational costs',
      'Improve customer experience',
      'Enable data-driven decisions',
      'Future-proof business'
    ],
    pricing: {
      basic: 9999,
      pro: 24999,
      enterprise: 49999
    },
    marketPrice: '$20K-100K per project',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/digital-transformation'
    },
    technologies: ['Cloud Computing', 'AI/ML', 'RPA', 'Analytics', 'Mobile', 'IoT'],
    useCases: ['Manufacturing', 'Healthcare', 'Finance', 'Retail', 'Government'],
    integrations: ['ERP systems', 'CRM platforms', 'Analytics tools', 'Cloud services'],
    support: ['Strategy consulting', 'Implementation', 'Training', 'Ongoing support']
  },
  {
    id: 'data-analytics',
    title: 'Advanced Data Analytics Platform',
    description: 'Comprehensive data analytics solution that collects, processes, and visualizes business data to provide actionable insights and drive growth.',
    icon: '📈',
    category: 'business',
    features: [
      'Data collection & integration',
      'Real-time analytics',
      'Custom dashboards',
      'Predictive modeling',
      'Data visualization',
      'Automated reporting',
      'API access',
      'Custom metrics'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify growth opportunities',
      'Improve operational efficiency',
      'Better customer insights',
      'Competitive advantage'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999
    },
    marketPrice: '$500-3000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/data-analytics'
    },
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'AWS'],
    useCases: ['E-commerce', 'SaaS', 'Marketing', 'Operations', 'Finance'],
    integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Social media'],
    support: ['Custom dashboards', 'Data modeling', 'Training', '24/7 support']
  }
];

export const serviceCategories = [
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: '🤖',
    count: 5,
    description: 'Advanced artificial intelligence solutions powered by cutting-edge machine learning algorithms'
  },
  {
    id: 'it',
    name: 'IT Services',
    icon: '💻',
    count: 3,
    description: 'Comprehensive IT services including development, security, and infrastructure management'
  },
  {
    id: 'saas',
    name: 'Micro SaaS Solutions',
    icon: '📱',
    count: 3,
    description: 'Specialized software-as-a-service solutions designed for specific business needs'
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: '🏗️',
    count: 2,
    description: 'Cloud infrastructure, networking, and scalable system architecture solutions'
  },
  {
    id: 'business',
    name: 'Business Solutions',
    icon: '💼',
    count: 2,
    description: 'Strategic business solutions including digital transformation and data analytics'
  }
];

export const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  website: 'https://ziontechgroup.com'
};