export interface Service {
  id: string;
  name: string;
  category: 'ai' | 'it' | 'micro-saas' | 'emerging';
  icon: string;
  description: string;
  features: string[];
  pricing: {
    starting: string;
    currency: string;
    period: string;
  };
  benefits: string[];
  useCases: string[];
  link: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot Platform',
    category: 'ai',
    icon: '🤖',
    description: 'Advanced conversational AI platform with natural language processing, multi-language support, and seamless integration capabilities.',
    features: [
      'Natural Language Processing',
      'Multi-language Support',
      'Custom Training Models',
      'API Integration',
      'Analytics Dashboard',
      'Voice Recognition'
    ],
    pricing: {
      starting: '299',
      currency: '$',
      period: '/month'
    },
    benefits: [
      '24/7 Customer Support',
      'Reduced Response Time',
      'Scalable Solutions',
      'Cost Effective'
    ],
    useCases: [
      'Customer Service',
      'Lead Generation',
      'Technical Support',
      'E-commerce Assistance'
    ],
    link: '/ai-services',
    isPopular: true
  },
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation Suite',
    category: 'ai',
    icon: '✍️',
    description: 'Comprehensive AI-powered content creation platform for blogs, social media, emails, and marketing materials.',
    features: [
      'Blog Post Generation',
      'Social Media Content',
      'Email Campaigns',
      'SEO Optimization',
      'Brand Voice Training',
      'Multi-format Export'
    ],
    pricing: {
      starting: '199',
      currency: '$',
      period: '/month'
    },
    benefits: [
      '10x Faster Content Creation',
      'Consistent Brand Voice',
      'SEO Optimized',
      'Multi-platform Ready'
    ],
    useCases: [
      'Content Marketing',
      'Social Media Management',
      'Email Marketing',
      'Blog Management'
    ],
    link: '/ai-content-generation'
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics Platform',
    category: 'ai',
    icon: '📊',
    description: 'Advanced data analytics platform with machine learning insights, predictive modeling, and automated reporting.',
    features: [
      'Predictive Analytics',
      'Real-time Dashboards',
      'Automated Reports',
      'Data Visualization',
      'Machine Learning Models',
      'Custom Metrics'
    ],
    pricing: {
      starting: '499',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Data-driven Decisions',
      'Predictive Insights',
      'Automated Reporting',
      'Real-time Monitoring'
    ],
    useCases: [
      'Business Intelligence',
      'Sales Forecasting',
      'Customer Analytics',
      'Performance Tracking'
    ],
    link: '/ai-data-analytics'
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Suite',
    category: 'ai',
    icon: '🔒',
    description: 'Intelligent cybersecurity platform with threat detection, automated response, and continuous monitoring.',
    features: [
      'Threat Detection',
      'Automated Response',
      'Behavioral Analysis',
      'Vulnerability Scanning',
      'Compliance Monitoring',
      'Incident Management'
    ],
    pricing: {
      starting: '799',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Proactive Threat Detection',
      'Automated Response',
      'Compliance Assurance',
      '24/7 Monitoring'
    ],
    useCases: [
      'Enterprise Security',
      'Compliance Management',
      'Threat Prevention',
      'Security Monitoring'
    ],
    link: '/ai-cybersecurity'
  },

  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Management',
    category: 'it',
    icon: '☁️',
    description: 'Comprehensive cloud infrastructure solutions with 99.9% uptime guarantee and 24/7 expert support.',
    features: [
      'AWS/Azure/GCP Setup',
      'Auto-scaling',
      'Load Balancing',
      'Disaster Recovery',
      'Security Hardening',
      'Cost Optimization'
    ],
    pricing: {
      starting: '999',
      currency: '$',
      period: '/month'
    },
    benefits: [
      '99.9% Uptime SLA',
      '24/7 Support',
      'Cost Optimization',
      'Scalable Architecture'
    ],
    useCases: [
      'Web Applications',
      'Data Storage',
      'API Services',
      'Microservices'
    ],
    link: '/it-infrastructure',
    isPopular: true
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation Platform',
    category: 'it',
    icon: '⚙️',
    description: 'Complete DevOps automation with CI/CD pipelines, infrastructure as code, and automated testing.',
    features: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Automated Testing',
      'Container Orchestration',
      'Monitoring & Logging',
      'Security Scanning'
    ],
    pricing: {
      starting: '599',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Faster Deployments',
      'Reduced Errors',
      'Automated Testing',
      'Better Collaboration'
    ],
    useCases: [
      'Software Development',
      'Application Deployment',
      'Infrastructure Management',
      'Quality Assurance'
    ],
    link: '/devops'
  },
  {
    id: 'database-management',
    name: 'Database Management Services',
    category: 'it',
    icon: '🗄️',
    description: 'Professional database management with optimization, backup, and performance tuning services.',
    features: [
      'Database Optimization',
      'Automated Backups',
      'Performance Tuning',
      'Security Hardening',
      'Migration Services',
      'Monitoring & Alerts'
    ],
    pricing: {
      starting: '399',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Optimized Performance',
      'Data Security',
      'Automated Backups',
      'Expert Support'
    ],
    useCases: [
      'Data Management',
      'Application Support',
      'Performance Optimization',
      'Data Migration'
    ],
    link: '/database'
  },

  // Micro SAAS Services
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    category: 'micro-saas',
    icon: '🎯',
    description: 'AI-powered SEO optimization tool that analyzes and improves your website\'s search engine ranking.',
    features: [
      'Keyword Research',
      'Content Optimization',
      'Technical SEO Audit',
      'Competitor Analysis',
      'Rank Tracking',
      'Automated Reports'
    ],
    pricing: {
      starting: '79',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Higher Search Rankings',
      'Automated Optimization',
      'Competitive Analysis',
      'Detailed Reports'
    ],
    useCases: [
      'Website Optimization',
      'Content Marketing',
      'SEO Strategy',
      'Competitive Analysis'
    ],
    link: '/micro-saas',
    isNew: true
  },
  {
    id: 'ai-code-reviewer',
    name: 'AI Code Reviewer',
    category: 'micro-saas',
    icon: '👨‍💻',
    description: 'Automated code review tool that analyzes code quality, security vulnerabilities, and best practices.',
    features: [
      'Code Quality Analysis',
      'Security Vulnerability Detection',
      'Best Practice Suggestions',
      'Performance Optimization',
      'Automated Testing',
      'Integration Support'
    ],
    pricing: {
      starting: '99',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Improved Code Quality',
      'Security Assurance',
      'Faster Development',
      'Best Practice Compliance'
    ],
    useCases: [
      'Code Quality Assurance',
      'Security Auditing',
      'Development Workflow',
      'Team Collaboration'
    ],
    link: '/micro-saas'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    category: 'micro-saas',
    icon: '📱',
    description: 'Intelligent social media management platform with automated posting, engagement, and analytics.',
    features: [
      'Automated Posting',
      'Content Scheduling',
      'Engagement Analysis',
      'Hashtag Optimization',
      'Performance Tracking',
      'Multi-platform Support'
    ],
    pricing: {
      starting: '149',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Automated Management',
      'Better Engagement',
      'Time Saving',
      'Performance Insights'
    ],
    useCases: [
      'Social Media Marketing',
      'Brand Management',
      'Content Strategy',
      'Engagement Optimization'
    ],
    link: '/micro-saas',
    isPopular: true
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Suite',
    category: 'micro-saas',
    icon: '📧',
    description: 'Advanced email marketing platform with AI-powered personalization, automation, and analytics.',
    features: [
      'AI Personalization',
      'Automated Campaigns',
      'A/B Testing',
      'Segmentation',
      'Analytics Dashboard',
      'Template Library'
    ],
    pricing: {
      starting: '129',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Higher Open Rates',
      'Automated Campaigns',
      'Personalized Content',
      'Detailed Analytics'
    ],
    useCases: [
      'Email Marketing',
      'Customer Retention',
      'Lead Nurturing',
      'Sales Automation'
    ],
    link: '/micro-saas'
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager',
    category: 'micro-saas',
    icon: '📋',
    description: 'Intelligent project management tool with AI-powered task allocation, progress tracking, and resource optimization.',
    features: [
      'AI Task Allocation',
      'Progress Tracking',
      'Resource Optimization',
      'Risk Assessment',
      'Team Collaboration',
      'Automated Reporting'
    ],
    pricing: {
      starting: '89',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Efficient Task Management',
      'Resource Optimization',
      'Risk Mitigation',
      'Team Productivity'
    ],
    useCases: [
      'Project Management',
      'Team Collaboration',
      'Resource Planning',
      'Progress Tracking'
    ],
    link: '/micro-saas'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Hub',
    category: 'micro-saas',
    icon: '🎧',
    description: 'Comprehensive customer support platform with AI chatbots, ticket management, and knowledge base.',
    features: [
      'AI Chatbots',
      'Ticket Management',
      'Knowledge Base',
      'Multi-channel Support',
      'Analytics Dashboard',
      'Integration APIs'
    ],
    pricing: {
      starting: '199',
      currency: '$',
      period: '/month'
    },
    benefits: [
      '24/7 Support',
      'Faster Response Times',
      'Reduced Support Costs',
      'Better Customer Satisfaction'
    ],
    useCases: [
      'Customer Service',
      'Technical Support',
      'Sales Support',
      'FAQ Management'
    ],
    link: '/micro-saas'
  },

  // Emerging Technologies
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    category: 'emerging',
    icon: '⚛️',
    description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
    features: [
      'Quantum Algorithms',
      'Optimization Problems',
      'Cryptography',
      'Simulation',
      'Research Support',
      'Custom Solutions'
    ],
    pricing: {
      starting: 'Custom',
      currency: '',
      period: 'Pricing'
    },
    benefits: [
      'Exponential Speed',
      'Complex Problem Solving',
      'Future-proof Technology',
      'Competitive Advantage'
    ],
    useCases: [
      'Cryptography',
      'Optimization',
      'Scientific Research',
      'Financial Modeling'
    ],
    link: '/quantum-computing'
  },
  {
    id: 'blockchain-web3',
    name: 'Blockchain & Web3 Solutions',
    category: 'emerging',
    icon: '🔗',
    description: 'Comprehensive blockchain and Web3 solutions including smart contracts, DeFi, and NFT platforms.',
    features: [
      'Smart Contracts',
      'DeFi Platforms',
      'NFT Marketplaces',
      'Token Development',
      'Blockchain Integration',
      'Security Auditing'
    ],
    pricing: {
      starting: '1,999',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Decentralized Solutions',
      'Enhanced Security',
      'Transparency',
      'Innovation'
    ],
    useCases: [
      'DeFi Applications',
      'NFT Platforms',
      'Smart Contracts',
      'Token Economics'
    ],
    link: '/blockchain-web3'
  },
  {
    id: 'iot-edge-computing',
    name: 'IoT & Edge Computing',
    category: 'emerging',
    icon: '🌐',
    description: 'Advanced IoT and edge computing solutions for connected devices and real-time data processing.',
    features: [
      'Device Management',
      'Real-time Processing',
      'Data Analytics',
      'Security Protocols',
      'Cloud Integration',
      'Custom Hardware'
    ],
    pricing: {
      starting: '799',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Real-time Processing',
      'Reduced Latency',
      'Scalable Solutions',
      'Cost Efficiency'
    ],
    useCases: [
      'Smart Cities',
      'Industrial IoT',
      'Connected Devices',
      'Real-time Analytics'
    ],
    link: '/iot-edge-computing'
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems',
    category: 'emerging',
    icon: '🤖',
    description: 'Self-managing autonomous systems with AI decision-making and adaptive capabilities.',
    features: [
      'AI Decision Making',
      'Adaptive Learning',
      'Self-healing Systems',
      'Predictive Maintenance',
      'Resource Optimization',
      'Monitoring & Control'
    ],
    pricing: {
      starting: '2,499',
      currency: '$',
      period: '/month'
    },
    benefits: [
      'Reduced Human Intervention',
      'Improved Efficiency',
      'Predictive Capabilities',
      'Cost Optimization'
    ],
    useCases: [
      'Manufacturing',
      'Logistics',
      'Energy Management',
      'Smart Infrastructure'
    ],
    link: '/autonomous-systems'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return services.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return services.filter(service => service.isNew);
};