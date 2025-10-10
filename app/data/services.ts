export interface Service {
  id: string;
  name: string;
  category: 'ai' | 'it' | 'micro-saas' | 'emerging-tech';
  subcategory: string;
  description: string;
  features: string[];
  pricing: {
    starting: number;
    currency: string;
    period: 'month' | 'year' | 'one-time';
    custom?: boolean;
  };
  benefits: string[];
  useCases: string[];
  icon: string;
  popular: boolean;
  new?: boolean;
  path: string;
  contact: {
    phone: string;
    email: string;
    demo: string;
  };
  marketPrice?: {
    min: number;
    max: number;
    currency: string;
  };
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager Pro',
    category: 'ai',
    subcategory: 'Project Management',
    description: 'Intelligent project management with AI-powered scheduling, resource allocation, and risk prediction.',
    features: [
      'AI-powered task prioritization',
      'Automated resource allocation',
      'Risk prediction and mitigation',
      'Real-time progress tracking',
      'Team collaboration tools',
      'Integration with 50+ tools'
    ],
    pricing: {
      starting: 299,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '40% faster project delivery',
      '25% reduction in project costs',
      '95% accuracy in deadline prediction',
      'Real-time risk assessment'
    ],
    useCases: [
      'Software development projects',
      'Marketing campaign management',
      'Construction project oversight',
      'Event planning and execution'
    ],
    icon: '📊',
    popular: true,
    new: true,
    path: '/ai-project-manager',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-project-manager'
    },
    marketPrice: {
      min: 200,
      max: 500,
      currency: 'USD'
    }
  },
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot',
    category: 'ai',
    subcategory: 'Customer Service',
    description: '24/7 AI-powered customer support with natural language processing and multi-channel support.',
    features: [
      'Natural language understanding',
      'Multi-language support (50+ languages)',
      'Integration with CRM systems',
      'Sentiment analysis',
      'Escalation to human agents',
      'Analytics and reporting'
    ],
    pricing: {
      starting: 199,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '80% reduction in response time',
      '24/7 availability',
      '90% customer satisfaction rate',
      '60% cost reduction vs human agents'
    ],
    useCases: [
      'E-commerce customer support',
      'SaaS product support',
      'Healthcare patient inquiries',
      'Financial services support'
    ],
    icon: '🤖',
    popular: true,
    path: '/ai-customer-support-bot',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-customer-support-bot'
    },
    marketPrice: {
      min: 150,
      max: 400,
      currency: 'USD'
    }
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Studio',
    category: 'ai',
    subcategory: 'Content Creation',
    description: 'Advanced AI-powered content creation for blogs, social media, emails, and marketing materials.',
    features: [
      'Multi-format content generation',
      'SEO optimization',
      'Brand voice consistency',
      'Plagiarism detection',
      'Content scheduling',
      'Performance analytics'
    ],
    pricing: {
      starting: 149,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO-optimized content',
      'Multi-language support'
    ],
    useCases: [
      'Blog content creation',
      'Social media marketing',
      'Email marketing campaigns',
      'Product descriptions'
    ],
    icon: '✍️',
    popular: true,
    path: '/ai-content-generation',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-content-generator'
    },
    marketPrice: {
      min: 99,
      max: 300,
      currency: 'USD'
    }
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics Platform',
    category: 'ai',
    subcategory: 'Analytics',
    description: 'Advanced AI-powered data analytics with predictive insights and automated reporting.',
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Automated report generation',
      'Custom dashboard creation',
      'Data visualization',
      'Machine learning models'
    ],
    pricing: {
      starting: 499,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '50% faster insights generation',
      'Predictive accuracy up to 95%',
      'Automated reporting saves 20 hours/week',
      'Real-time decision making'
    ],
    useCases: [
      'Business intelligence',
      'Sales forecasting',
      'Customer behavior analysis',
      'Financial risk assessment'
    ],
    icon: '📈',
    popular: true,
    path: '/ai-data-analytics',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-data-analytics'
    },
    marketPrice: {
      min: 300,
      max: 1000,
      currency: 'USD'
    }
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Suite',
    category: 'ai',
    subcategory: 'Security',
    description: 'Advanced AI-powered cybersecurity with threat detection, prevention, and response automation.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Vulnerability assessment',
      'Compliance monitoring',
      'Security training'
    ],
    pricing: {
      starting: 799,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '99.9% threat detection accuracy',
      '50% faster incident response',
      'Automated compliance reporting',
      '24/7 security monitoring'
    ],
    useCases: [
      'Enterprise security',
      'Financial services',
      'Healthcare data protection',
      'Government agencies'
    ],
    icon: '🔒',
    popular: true,
    path: '/ai-cybersecurity',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-cybersecurity'
    },
    marketPrice: {
      min: 500,
      max: 2000,
      currency: 'USD'
    }
  },

  // Micro SAAS Services
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    category: 'micro-saas',
    subcategory: 'Social Media',
    description: 'Automated social media management with AI-powered content creation and scheduling.',
    features: [
      'Multi-platform posting',
      'AI content suggestions',
      'Optimal timing analysis',
      'Engagement tracking',
      'Hashtag optimization',
      'Competitor analysis'
    ],
    pricing: {
      starting: 79,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '3x more engagement',
      'Save 15 hours/week',
      'Consistent posting schedule',
      'Data-driven content strategy'
    ],
    useCases: [
      'Small business marketing',
      'Personal branding',
      'E-commerce promotion',
      'Content creators'
    ],
    icon: '📱',
    popular: true,
    path: '/ai-social-media-manager',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-social-media-manager'
    },
    marketPrice: {
      min: 50,
      max: 150,
      currency: 'USD'
    }
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Pro',
    category: 'micro-saas',
    subcategory: 'Email Marketing',
    description: 'Intelligent email marketing with AI-powered segmentation, personalization, and automation.',
    features: [
      'AI-powered segmentation',
      'Personalized content',
      'Send time optimization',
      'A/B testing automation',
      'Email template library',
      'Performance analytics'
    ],
    pricing: {
      starting: 99,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '40% higher open rates',
      '60% increase in click-through rates',
      'Automated campaign optimization',
      'Personalized customer journeys'
    ],
    useCases: [
      'E-commerce marketing',
      'Newsletter campaigns',
      'Lead nurturing',
      'Customer retention'
    ],
    icon: '📧',
    popular: true,
    path: '/ai-email-marketing',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-email-marketing'
    },
    marketPrice: {
      min: 60,
      max: 200,
      currency: 'USD'
    }
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    category: 'micro-saas',
    subcategory: 'SEO',
    description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking tracking.',
    features: [
      'AI keyword research',
      'Content optimization suggestions',
      'Competitor analysis',
      'Ranking tracking',
      'Technical SEO audit',
      'Link building recommendations'
    ],
    pricing: {
      starting: 129,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '50% faster SEO results',
      'Comprehensive keyword analysis',
      'Automated optimization suggestions',
      'Competitive advantage insights'
    ],
    useCases: [
      'Website optimization',
      'Blog content SEO',
      'E-commerce SEO',
      'Local business SEO'
    ],
    icon: '🎯',
    popular: true,
    path: '/ai-seo-optimizer',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-seo-optimizer'
    },
    marketPrice: {
      min: 80,
      max: 250,
      currency: 'USD'
    }
  },
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator',
    category: 'micro-saas',
    subcategory: 'Finance',
    description: 'Automated invoice generation with AI-powered data extraction and payment tracking.',
    features: [
      'Automated invoice creation',
      'AI data extraction',
      'Payment tracking',
      'Recurring billing',
      'Multi-currency support',
      'Tax calculation'
    ],
    pricing: {
      starting: 49,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '90% time savings on invoicing',
      'Reduced billing errors',
      'Faster payment processing',
      'Professional invoice templates'
    ],
    useCases: [
      'Freelancer billing',
      'Small business invoicing',
      'Service-based businesses',
      'Contractor payments'
    ],
    icon: '💰',
    popular: false,
    path: '/ai-invoice-generator',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-invoice-generator'
    },
    marketPrice: {
      min: 30,
      max: 100,
      currency: 'USD'
    }
  },
  {
    id: 'ai-time-tracker',
    name: 'AI Time Tracker Pro',
    category: 'micro-saas',
    subcategory: 'Productivity',
    description: 'Intelligent time tracking with AI-powered productivity insights and automated reporting.',
    features: [
      'Automatic time tracking',
      'AI productivity insights',
      'Project time allocation',
      'Team collaboration',
      'Detailed reporting',
      'Integration with 100+ tools'
    ],
    pricing: {
      starting: 39,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      'Accurate time tracking',
      'Productivity optimization',
      'Project profitability analysis',
      'Team performance insights'
    ],
    useCases: [
      'Freelancer time tracking',
      'Team productivity monitoring',
      'Project billing',
      'Remote work management'
    ],
    icon: '⏰',
    popular: false,
    path: '/ai-time-tracker',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/ai-time-tracker'
    },
    marketPrice: {
      min: 20,
      max: 80,
      currency: 'USD'
    }
  },

  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    category: 'it',
    subcategory: 'Cloud Computing',
    description: 'Enterprise-grade cloud infrastructure with 99.9% uptime guarantee and 24/7 support.',
    features: [
      'Multi-cloud deployment',
      'Auto-scaling capabilities',
      'Disaster recovery',
      'Security compliance',
      'Performance monitoring',
      'Cost optimization'
    ],
    pricing: {
      starting: 999,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '99.9% uptime guarantee',
      '50% cost reduction vs on-premise',
      'Instant scalability',
      'Enhanced security'
    ],
    useCases: [
      'Enterprise applications',
      'E-commerce platforms',
      'Data analytics',
      'Web applications'
    ],
    icon: '☁️',
    popular: true,
    path: '/cloud-infrastructure',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/cloud-infrastructure'
    },
    marketPrice: {
      min: 500,
      max: 2000,
      currency: 'USD'
    }
  },
  {
    id: 'cybersecurity-suite',
    name: 'Enterprise Cybersecurity Suite',
    category: 'it',
    subcategory: 'Security',
    description: 'Comprehensive cybersecurity solution with threat detection, prevention, and compliance.',
    features: [
      'Network security monitoring',
      'Endpoint protection',
      'Email security',
      'Web application firewall',
      'Compliance reporting',
      'Incident response'
    ],
    pricing: {
      starting: 1299,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '360-degree security coverage',
      'Compliance with industry standards',
      '24/7 security monitoring',
      'Rapid threat response'
    ],
    useCases: [
      'Enterprise security',
      'Healthcare compliance',
      'Financial services',
      'Government agencies'
    ],
    icon: '🛡️',
    popular: true,
    path: '/cybersecurity-suite',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/cybersecurity-suite'
    },
    marketPrice: {
      min: 800,
      max: 3000,
      currency: 'USD'
    }
  },
  {
    id: 'devops-automation',
    name: 'DevOps & CI/CD Automation',
    category: 'it',
    subcategory: 'DevOps',
    description: 'Complete DevOps automation with CI/CD pipelines, infrastructure as code, and monitoring.',
    features: [
      'Automated CI/CD pipelines',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring and alerting',
      'Security scanning',
      'Performance optimization'
    ],
    pricing: {
      starting: 799,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      '10x faster deployments',
      'Reduced deployment errors',
      'Automated testing',
      'Improved team productivity'
    ],
    useCases: [
      'Software development',
      'Microservices deployment',
      'Cloud migration',
      'Application modernization'
    ],
    icon: '🔄',
    popular: true,
    path: '/devops-automation',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/devops-automation'
    },
    marketPrice: {
      min: 500,
      max: 1500,
      currency: 'USD'
    }
  },
  {
    id: 'database-management',
    name: 'Database Management & Optimization',
    category: 'it',
    subcategory: 'Database',
    description: 'Professional database management with optimization, backup, and performance tuning.',
    features: [
      'Database optimization',
      'Automated backups',
      'Performance monitoring',
      'Security hardening',
      'Migration services',
      '24/7 support'
    ],
    pricing: {
      starting: 599,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      'Improved database performance',
      'Data security and compliance',
      'Reduced downtime',
      'Expert database administration'
    ],
    useCases: [
      'Enterprise databases',
      'E-commerce platforms',
      'Data analytics',
      'Application databases'
    ],
    icon: '🗄️',
    popular: false,
    path: '/database-management',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/database-management'
    },
    marketPrice: {
      min: 300,
      max: 1200,
      currency: 'USD'
    }
  },

  // Emerging Technologies
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    category: 'emerging-tech',
    subcategory: 'Quantum',
    description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
    features: [
      'Quantum algorithm development',
      'Optimization problems',
      'Cryptography solutions',
      'Simulation capabilities',
      'Research collaboration',
      'Custom quantum applications'
    ],
    pricing: {
      starting: 5000,
      currency: 'USD',
      period: 'month',
      custom: true
    },
    benefits: [
      'Exponential computational power',
      'Revolutionary problem solving',
      'Future-proof technology',
      'Competitive advantage'
    ],
    useCases: [
      'Drug discovery',
      'Financial modeling',
      'Cryptography',
      'Optimization problems'
    ],
    icon: '⚛️',
    popular: false,
    new: true,
    path: '/quantum-computing',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/quantum-computing'
    },
    marketPrice: {
      min: 3000,
      max: 10000,
      currency: 'USD'
    }
  },
  {
    id: 'blockchain-solutions',
    name: 'Blockchain & Web3 Solutions',
    category: 'emerging-tech',
    subcategory: 'Blockchain',
    description: 'Comprehensive blockchain solutions including smart contracts, DeFi, and NFT platforms.',
    features: [
      'Smart contract development',
      'DeFi platform creation',
      'NFT marketplace development',
      'Blockchain integration',
      'Token development',
      'Security auditing'
    ],
    pricing: {
      starting: 2999,
      currency: 'USD',
      period: 'month',
      custom: true
    },
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparency and trust',
      'Future of digital assets'
    ],
    useCases: [
      'DeFi applications',
      'NFT marketplaces',
      'Supply chain tracking',
      'Digital identity'
    ],
    icon: '⛓️',
    popular: false,
    new: true,
    path: '/blockchain-solutions',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/blockchain-solutions'
    },
    marketPrice: {
      min: 2000,
      max: 8000,
      currency: 'USD'
    }
  },
  {
    id: 'iot-edge-computing',
    name: 'IoT & Edge Computing Platform',
    category: 'emerging-tech',
    subcategory: 'IoT',
    description: 'Complete IoT and edge computing solution with real-time data processing and analytics.',
    features: [
      'IoT device management',
      'Edge computing infrastructure',
      'Real-time data processing',
      'Predictive maintenance',
      'Device security',
      'Analytics dashboard'
    ],
    pricing: {
      starting: 1299,
      currency: 'USD',
      period: 'month'
    },
    benefits: [
      'Real-time data processing',
      'Reduced latency',
      'Cost-effective data management',
      'Scalable IoT solutions'
    ],
    useCases: [
      'Smart manufacturing',
      'Smart cities',
      'Healthcare monitoring',
      'Agriculture automation'
    ],
    icon: '🌐',
    popular: false,
    path: '/iot-edge-computing',
    contact: {
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      demo: 'https://ziontechgroup.com/demo/iot-edge-computing'
    },
    marketPrice: {
      min: 800,
      max: 2500,
      currency: 'USD'
    }
  }
];

export const serviceCategories = [
  {
    id: 'ai',
    name: 'AI Services',
    description: 'Advanced artificial intelligence solutions',
    icon: '🤖',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    description: 'Affordable, powerful AI-driven tools',
    icon: '⚡',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10'
  },
  {
    id: 'it',
    name: 'IT Services',
    description: 'Enterprise-grade IT solutions',
    icon: '☁️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technologies',
    description: 'Next-generation technology solutions',
    icon: '🚀',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10'
  }
];

export const contactInfo = {
  phone: '+1 (302) 464-0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST'
};
