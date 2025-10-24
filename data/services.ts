export interface Service {
  id: string
  title: string
  description: string
  icon: string
  category: string
  features: string[]
  benefits: string[]
  pricing: {
    starting: string
    popular?: string
    enterprise?: string
  }
  marketPrice: string
  link: string
  popular: boolean
  tags: string[]
}

export const aiServices: Service[] = [
  {
    id: 'ai-chatbot-builder',
    title: 'AI Chatbot Builder',
    description: 'Create intelligent chatbots with natural language processing and machine learning capabilities.',
    icon: '🤖',
    category: 'AI',
    features: [
      'Natural Language Processing',
      'Multi-language Support',
      'Integration with CRM Systems',
      'Analytics Dashboard',
      'Custom Training Models',
      'Voice Recognition'
    ],
    benefits: [
      '24/7 Customer Support',
      'Reduce Support Costs by 60%',
      'Instant Response Time',
      'Scalable Solutions'
    ],
    pricing: {
      starting: '$299/month',
      popular: '$599/month',
      enterprise: 'Custom',
    },
    marketPrice: '$500-2000/month',
    link: '/ai-chatbot-builder',
    popular: true,
    tags: ['NLP', 'Customer Service', 'Automation']
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
    icon: '✍️',
    category: 'AI',
    features: [
      'Blog Post Generation',
      'Social Media Content',
      'Email Marketing Copy',
      'SEO Optimization',
      'Multiple Content Formats',
      'Brand Voice Training'
    ],
    benefits: [
      'Save 80% Content Creation Time',
      'Consistent Brand Voice',
      'SEO-Optimized Content',
      'Scalable Content Production'
    ],
    pricing: {
      starting: '$199/month',
      popular: '$399/month',
      enterprise: 'Custom',
    },
    marketPrice: '$300-1500/month',
    link: '/ai-content-generator',
    popular: true,
    tags: ['Content Marketing', 'SEO', 'Automation']
  },
  {
    id: 'ai-data-analytics',
    title: 'AI Data Analytics Platform',
    description: 'Advanced data analytics with AI-powered insights and predictive modeling.',
    icon: '📊',
    category: 'AI',
    features: [
      'Predictive Analytics',
      'Real-time Dashboards',
      'Custom Report Generation',
      'Data Visualization',
      'Machine Learning Models',
      'API Integration'
    ],
    benefits: [
      'Data-Driven Decision Making',
      'Predict Future Trends',
      'Automated Reporting',
      'ROI Optimization'
    ],
    pricing: {
      starting: '$499/month',
      popular: '$999/month',
      enterprise: 'Custom',
    },
    marketPrice: '$800-3000/month',
    link: '/ai-data-analytics',
    popular: true,
    tags: ['Analytics', 'Machine Learning', 'Business Intelligence']
  },
  {
    id: 'ai-customer-support',
    title: 'AI Customer Support Suite',
    description: 'Comprehensive AI-powered customer support with ticket management and automated responses.',
    icon: '🎧',
    category: 'AI',
    features: [
      'Automated Ticket Routing',
      'Sentiment Analysis',
      'Knowledge Base Integration',
      'Multi-channel Support',
      'Performance Analytics',
      'Custom AI Training'
    ],
    benefits: [
      'Reduce Response Time by 90%',
      'Improve Customer Satisfaction',
      '24/7 Availability',
      'Cost Reduction'
    ],
    pricing: {
      starting: '$399/month',
      popular: '$799/month',
      enterprise: 'Custom',
    },
    marketPrice: '$600-2500/month',
    link: '/ai-customer-support',
    popular: false,
    tags: ['Customer Service', 'Automation', 'AI']
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI Cybersecurity Monitor',
    description: 'Advanced AI-powered cybersecurity monitoring and threat detection system.',
    icon: '🔒',
    category: 'AI',
    features: [
      'Real-time Threat Detection',
      'Behavioral Analysis',
      'Automated Incident Response',
      'Compliance Monitoring',
      'Security Dashboards',
      'Machine Learning Models'
    ],
    benefits: [
      'Proactive Threat Detection',
      'Reduce Security Incidents',
      'Compliance Assurance',
      'Cost-Effective Security'
    ],
    pricing: {
      starting: '$599/month',
      popular: '$1199/month',
      enterprise: 'Custom',
    },
    marketPrice: '$1000-4000/month',
    link: '/ai-cybersecurity',
    popular: false,
    tags: ['Cybersecurity', 'AI', 'Monitoring']
  },
  {
    id: 'ai-ecommerce-optimizer',
    title: 'AI E-commerce Optimizer',
    description: 'Optimize e-commerce operations with AI-powered recommendations and automation.',
    icon: '🛒',
    category: 'AI',
    features: [
      'Product Recommendation Engine',
      'Price Optimization',
      'Inventory Management',
      'Customer Segmentation',
      'Sales Forecasting',
      'A/B Testing Automation'
    ],
    benefits: [
      'Increase Sales by 25%',
      'Optimize Inventory Levels',
      'Personalized Shopping Experience',
      'Automated Operations'
    ],
    pricing: {
      starting: '$299/month',
      popular: '$599/month',
      enterprise: 'Custom',
    },
    marketPrice: '$500-2000/month',
    link: '/ai-ecommerce-optimizer',
    popular: true,
    tags: ['E-commerce', 'Optimization', 'AI']
  }
]
export const itServices: Service[] = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Services',
    description: 'Seamless migration to cloud platforms with zero downtime and optimized performance.',
    icon: '☁️',
    category: 'IT',
    features: [
      'AWS/Azure/GCP Migration',
      'Zero Downtime Migration',
      'Performance Optimization',
      'Security Configuration',
      'Cost Optimization',
      '24/7 Support'
    ],
    benefits: [
      'Reduce Infrastructure Costs',
      'Improved Scalability',
      'Enhanced Security',
      'Better Performance'
    ],
    pricing: {
      starting: '$2,000/project',
      popular: '$5,000/project',
      enterprise: 'Custom',
    },
    marketPrice: '$3000-15000/project',
    link: '/cloud-migration',
    popular: true,
    tags: ['Cloud', 'Migration', 'Infrastructure']
  },
  {
    id: 'devops-ci-cd',
    title: 'DevOps & CI/CD Pipeline',
    description: 'Complete DevOps solutions with automated CI/CD pipelines and infrastructure management.',
    icon: '⚙️',
    category: 'IT',
    features: [
      'Automated CI/CD Pipelines',
      'Infrastructure as Code',
      'Container Orchestration',
      'Monitoring & Logging',
      'Security Scanning',
      'Performance Testing'
    ],
    benefits: [
      'Faster Deployment',
      'Reduced Errors',
      'Improved Collaboration',
      'Cost Efficiency'
    ],
    pricing: {
      starting: '$1,500/month',
      popular: '$3,000/month',
      enterprise: 'Custom',
    },
    marketPrice: '$2000-8000/month',
    link: '/devops-ci-cd',
    popular: true,
    tags: ['DevOps', 'CI/CD', 'Automation']
  },
  {
    id: 'cybersecurity-audit',
    title: 'Cybersecurity Audit & Assessment',
    description: 'Comprehensive security assessment and vulnerability testing for your IT infrastructure.',
    icon: '🛡️',
    category: 'IT',
    features: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Compliance Auditing',
      'Security Policy Review',
      'Incident Response Planning',
      'Security Training'
    ],
    benefits: [
      'Identify Security Gaps',
      'Compliance Assurance',
      'Risk Mitigation',
      'Security Best Practices'
    ],
    pricing: {
      starting: '$2,500/audit',
      popular: '$5,000/audit',
      enterprise: 'Custom',
    },
    marketPrice: '$3000-12000/audit',
    link: '/cybersecurity-audit',
    popular: false,
    tags: ['Cybersecurity', 'Audit', 'Compliance']
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services',
    description: 'Complete IT management with 24/7 monitoring, support, and maintenance.',
    icon: '💻',
    category: 'IT',
    features: [
      '24/7 IT Support',
      'Network Monitoring',
      'Backup & Recovery',
      'Software Updates',
      'Security Management',
      'Help Desk Services'
    ],
    benefits: [
      'Reduced IT Costs',
      'Proactive Maintenance',
      'Expert Support',
      'Business Continuity'
    ],
    pricing: {
      starting: '$500/month',
      popular: '$1,200/month',
      enterprise: 'Custom',
    },
    marketPrice: '$800-3000/month',
    link: '/managed-it-services',
    popular: true,
    tags: ['IT Support', 'Managed Services', 'Monitoring']
  },
  {
    id: 'database-optimization',
    title: 'Database Optimization Services',
    description: 'Optimize database performance, security, and scalability for better application performance.',
    icon: '🗄️',
    category: 'IT',
    features: [
      'Performance Tuning',
      'Query Optimization',
      'Index Management',
      'Backup Strategies',
      'Security Hardening',
      'Scalability Planning'
    ],
    benefits: [
      'Improved Performance',
      'Reduced Costs',
      'Better Security',
      'Enhanced Scalability'
    ],
    pricing: {
      starting: '$1,000/month',
      popular: '$2,500/month',
      enterprise: 'Custom',
    },
    marketPrice: '$1500-5000/month',
    link: '/database-optimization',
    popular: false,
    tags: ['Database', 'Optimization', 'Performance']
  },
  {
    id: 'network-security',
    title: 'Network Security Solutions',
    description: 'Comprehensive network security with firewalls, monitoring, and threat protection.',
    icon: '🌐',
    category: 'IT',
    features: [
      'Firewall Configuration',
      'Intrusion Detection',
      'VPN Setup',
      'Network Monitoring',
      'Threat Prevention',
      'Compliance Management'
    ],
    benefits: [
      'Enhanced Security',
      'Threat Prevention',
      'Compliance Assurance',
      'Network Performance'
    ],
    pricing: {
      starting: '$800/month',
      popular: '$1,800/month',
      enterprise: 'Custom',
    },
    marketPrice: '$1200-4000/month',
    link: '/network-security',
    popular: true,
    tags: ['Network', 'Security', 'Firewall']
  }
]
export const microSaasServices: Service[] = [
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard Pro',
    description: 'Real-time business analytics dashboard with customizable widgets and automated reporting.',
    icon: '📈',
    category: 'Micro SaaS',
    features: [
      'Real-time Data Visualization',
      'Custom Widgets',
      'Automated Reports',
      'Multi-source Integration',
      'Mobile Responsive',
      'Export Capabilities'
    ],
    benefits: [
      'Data-Driven Decisions',
      'Time Savings',
      'Better Insights',
      'Easy Setup'
    ],
    pricing: {
      starting: '$29/month',
      popular: '$59/month',
      enterprise: '$99/month',
    },
    marketPrice: '$50-200/month',
    link: '/analytics-dashboard',
    popular: true,
    tags: ['Analytics', 'Dashboard', 'Reporting']
  },
  {
    id: 'email-marketing-automation',
    title: 'Email Marketing Automation',
    description: 'Advanced email marketing platform with AI-powered personalization and automation workflows.',
    icon: '📧',
    category: 'Micro SaaS',
    features: [
      'AI-Powered Personalization',
      'Automated Workflows',
      'A/B Testing',
      'Segmentation Tools',
      'Analytics & Reporting',
      'Template Library'
    ],
    benefits: [
      'Increase Open Rates by 40%',
      'Automated Campaigns',
      'Better Targeting',
      'ROI Tracking'
    ],
    pricing: {
      starting: '$39/month',
      popular: '$79/month',
      enterprise: '$149/month',
    },
    marketPrice: '$60-300/month',
    link: '/email-marketing-automation',
    popular: true,
    tags: ['Email Marketing', 'Automation', 'AI']
  },
  {
    id: 'social-media-scheduler',
    title: 'Social Media Scheduler',
    description: 'Schedule and manage social media posts across multiple platforms with analytics.',
    icon: '📱',
    category: 'Micro SaaS',
    features: [
      'Multi-platform Scheduling',
      'Content Calendar',
      'Analytics Dashboard',
      'Hashtag Suggestions',
      'Team Collaboration',
      'Auto-posting'
    ],
    benefits: [
      'Save Time',
      'Consistent Posting',
      'Better Engagement',
      'Analytics Insights'
    ],
    pricing: {
      starting: '$19/month',
      popular: '$39/month',
      enterprise: '$79/month',
    },
    marketPrice: '$30-150/month',
    link: '/social-media-scheduler',
    popular: true,
    tags: ['Social Media', 'Scheduling', 'Analytics']
  },
  {
    id: 'expense-tracker',
    title: 'Smart Expense Tracker',
    description: 'AI-powered expense tracking with receipt scanning and automated categorization.',
    icon: '💰',
    category: 'Micro SaaS',
    features: [
      'Receipt Scanning',
      'AI Categorization',
      'Expense Reports',
      'Budget Tracking',
      'Tax Preparation',
      'Mobile App'
    ],
    benefits: [
      'Automated Tracking',
      'Tax Compliance',
      'Budget Control',
      'Time Savings'
    ],
    pricing: {
      starting: '$15/month',
      popular: '$29/month',
      enterprise: '$49/month',
    },
    marketPrice: '$25-100/month',
    link: '/expense-tracker',
    popular: false,
    tags: ['Finance', 'Expense Tracking', 'AI']
  },
  {
    id: 'project-management',
    title: 'Project Management Suite',
    description: 'Comprehensive project management with task tracking, team collaboration, and reporting.',
    icon: '📋',
    category: 'Micro SaaS',
    features: [
      'Task Management',
      'Team Collaboration',
      'Time Tracking',
      'Gantt Charts',
      'File Sharing',
      'Progress Reporting'
    ],
    benefits: [
      'Better Organization',
      'Team Productivity',
      'Project Visibility',
      'Deadline Management'
    ],
    pricing: {
      starting: '$25/month',
      popular: '$49/month',
      enterprise: '$99/month',
    },
    marketPrice: '$40-200/month',
    link: '/project-management',
    popular: true,
    tags: ['Project Management', 'Collaboration', 'Productivity']
  },
  {
    id: 'inventory-manager',
    title: 'Inventory Management System',
    description: 'Smart inventory management with automated reordering and real-time tracking.',
    icon: '📦',
    category: 'Micro SaaS',
    features: [
      'Real-time Tracking',
      'Automated Reordering',
      'Barcode Scanning',
      'Multi-location Support',
      'Analytics Dashboard',
      'Integration APIs'
    ],
    benefits: [
      'Reduce Stockouts',
      'Optimize Inventory',
      'Cost Savings',
      'Better Control'
    ],
    pricing: {
      starting: '$35/month',
      popular: '$69/month',
      enterprise: '$129/month',
    },
    marketPrice: '$50-250/month',
    link: '/inventory-manager',
    popular: false,
    tags: ['Inventory', 'Management', 'Automation']
  }
]
export const allServices = [...aiServices, ...itServices, ...microSaasServices]