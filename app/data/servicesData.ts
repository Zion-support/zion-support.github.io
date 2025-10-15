export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: 'ai' | 'it' | 'micro-saas' | 'cloud' | 'data';
  icon: string;
  link: string;
  marketPrice: {
    min: number;
    max: number;
  };
  benefits: string[];
  useCases: string[];
}

export const microSAASServices: Service[] = [
  {
    id: 'ai-content-moderator',
    name: 'AI Content Moderator Pro',
    description: 'Advanced AI-powered content moderation system that automatically detects and filters inappropriate content across text, images, and videos.',
    features: [
      'Real-time content analysis',
      'Multi-language support (50+ languages)',
      'Custom moderation rules',
      'API integration',
      'Dashboard analytics',
      'Bulk content processing',
      'Custom model training',
      '99.9% uptime SLA'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 999
    },
    category: 'micro-saas',
    icon: '🛡️',
    link: '/zion-ai-content-moderator',
    marketPrice: {
      min: 50,
      max: 500
    },
    benefits: [
      'Reduces moderation costs by 80%',
      '24/7 automated monitoring',
      'Scalable to millions of posts',
      'Compliance with platform policies'
    ],
    useCases: [
      'Social media platforms',
      'E-commerce marketplaces',
      'Online communities',
      'Content management systems'
    ]
  },
  {
    id: 'customer-churn-predictor',
    name: 'Customer Churn Predictor AI',
    description: 'Predict customer churn with 95% accuracy using machine learning algorithms and behavioral analysis.',
    features: [
      'Real-time churn scoring',
      'Behavioral pattern analysis',
      'Email alerts and notifications',
      'Customer segmentation',
      'Retention campaign suggestions',
      'Integration with CRM systems',
      'Custom model training',
      'ROI tracking dashboard'
    ],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 1299
    },
    category: 'micro-saas',
    icon: '📊',
    link: '/zion-ai-customer-churn-predictor',
    marketPrice: {
      min: 100,
      max: 800
    },
    benefits: [
      'Increase retention by 35%',
      'Reduce churn by 50%',
      'Save on customer acquisition costs',
      'Improve customer lifetime value'
    ],
    useCases: [
      'SaaS companies',
      'E-commerce businesses',
      'Subscription services',
      'Financial services'
    ]
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Pro',
    description: 'Intelligent email marketing platform with AI-powered personalization, send time optimization, and content generation.',
    features: [
      'AI content generation',
      'Send time optimization',
      'Subject line testing',
      'Personalization engine',
      'A/B testing automation',
      'Email template library',
      'Analytics and reporting',
      'Integration with major platforms'
    ],
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 599
    },
    category: 'micro-saas',
    icon: '📧',
    link: '/zion-ai-email-marketing-pro',
    marketPrice: {
      min: 50,
      max: 400
    },
    benefits: [
      'Increase open rates by 40%',
      'Boost click-through rates by 60%',
      'Reduce unsubscribe rates by 30%',
      'Save 10+ hours per week'
    ],
    useCases: [
      'E-commerce stores',
      'Digital agencies',
      'Content creators',
      'SaaS companies'
    ]
  },
  {
    id: 'ai-workflow-automator',
    name: 'AI Workflow Automator Pro',
    description: 'Automate complex business workflows with AI-powered decision making and intelligent task routing.',
    features: [
      'Visual workflow builder',
      'AI decision nodes',
      'Multi-platform integrations',
      'Custom triggers and actions',
      'Error handling and retry logic',
      'Performance monitoring',
      'Team collaboration tools',
      'Enterprise security features'
    ],
    pricing: {
      basic: 129,
      pro: 349,
      enterprise: 999
    },
    category: 'micro-saas',
    icon: '⚡',
    link: '/zion-ai-workflow-automator-pro',
    marketPrice: {
      min: 80,
      max: 600
    },
    benefits: [
      'Reduce manual work by 70%',
      'Eliminate human errors',
      'Scale operations efficiently',
      'Improve process consistency'
    ],
    useCases: [
      'Customer onboarding',
      'Order processing',
      'Data entry automation',
      'Approval workflows'
    ]
  },
  {
    id: 'ai-financial-forecaster',
    name: 'AI Financial Forecaster',
    description: 'Advanced financial forecasting tool using machine learning to predict revenue, expenses, and cash flow.',
    features: [
      'Revenue forecasting',
      'Expense prediction',
      'Cash flow analysis',
      'Scenario planning',
      'Risk assessment',
      'Integration with accounting software',
      'Custom model training',
      'Executive dashboards'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1499
    },
    category: 'micro-saas',
    icon: '💰',
    link: '/zion-ai-financial-forecaster',
    marketPrice: {
      min: 150,
      max: 1000
    },
    benefits: [
      'Improve financial planning accuracy',
      'Identify growth opportunities',
      'Reduce financial risks',
      'Make data-driven decisions'
    ],
    useCases: [
      'Startups and SMEs',
      'Financial planning',
      'Investment analysis',
      'Budget management'
    ]
  },
  {
    id: 'ai-inventory-optimizer',
    name: 'AI Inventory Optimizer Pro',
    description: 'Optimize inventory levels using AI to predict demand, prevent stockouts, and reduce carrying costs.',
    features: [
      'Demand forecasting',
      'Stock level optimization',
      'Reorder point calculation',
      'Seasonal trend analysis',
      'Supplier performance tracking',
      'Multi-location management',
      'Integration with ERP systems',
      'Real-time alerts'
    ],
    pricing: {
      basic: 179,
      pro: 449,
      enterprise: 1299
    },
    category: 'micro-saas',
    icon: '📦',
    link: '/zion-ai-inventory-optimizer-pro',
    marketPrice: {
      min: 120,
      max: 800
    },
    benefits: [
      'Reduce inventory costs by 25%',
      'Eliminate stockouts by 90%',
      'Improve cash flow',
      'Increase customer satisfaction'
    ],
    useCases: [
      'Retail businesses',
      'E-commerce stores',
      'Manufacturing',
      'Distribution centers'
    ]
  }
];

export const aiServices: Service[] = [
  {
    id: 'machine-learning-consulting',
    name: 'Machine Learning Consulting',
    description: 'Expert machine learning consulting services to help you build, deploy, and scale ML solutions.',
    features: [
      'Custom ML model development',
      'Data preprocessing and feature engineering',
      'Model training and optimization',
      'Production deployment',
      'Performance monitoring',
      'Team training and mentoring',
      'Technical documentation',
      'Ongoing support and maintenance'
    ],
    pricing: {
      basic: 150,
      pro: 300,
      enterprise: 500
    },
    category: 'ai',
    icon: '🤖',
    link: '/ai-services',
    marketPrice: {
      min: 100,
      max: 400
    },
    benefits: [
      'Accelerate ML project delivery',
      'Reduce development costs',
      'Improve model accuracy',
      'Scale ML operations'
    ],
    useCases: [
      'Predictive analytics',
      'Computer vision applications',
      'Natural language processing',
      'Recommendation systems'
    ]
  },
  {
    id: 'computer-vision-solutions',
    name: 'Computer Vision Solutions',
    description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
    features: [
      'Image classification',
      'Object detection and tracking',
      'Facial recognition',
      'OCR and document processing',
      'Quality inspection systems',
      'Real-time video analysis',
      'Custom model training',
      'API and SDK development'
    ],
    pricing: {
      basic: 200,
      pro: 400,
      enterprise: 800
    },
    category: 'ai',
    icon: '👁️',
    link: '/ai-services',
    marketPrice: {
      min: 150,
      max: 600
    },
    benefits: [
      'Automate visual inspection processes',
      'Improve accuracy and consistency',
      'Reduce manual labor costs',
      'Enable 24/7 monitoring'
    ],
    useCases: [
      'Manufacturing quality control',
      'Security and surveillance',
      'Medical imaging',
      'Autonomous vehicles'
    ]
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    description: 'NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding.',
    features: [
      'Text classification and sentiment analysis',
      'Named entity recognition',
      'Language translation',
      'Chatbot development',
      'Document summarization',
      'Question answering systems',
      'Custom model training',
      'Multi-language support'
    ],
    pricing: {
      basic: 180,
      pro: 350,
      enterprise: 700
    },
    category: 'ai',
    icon: '💬',
    link: '/ai-services',
    marketPrice: {
      min: 120,
      max: 500
    },
    benefits: [
      'Automate text processing tasks',
      'Improve customer service',
      'Extract insights from documents',
      'Enable multilingual applications'
    ],
    useCases: [
      'Customer support automation',
      'Content moderation',
      'Document analysis',
      'Market research'
    ]
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    description: 'Comprehensive cloud infrastructure services including migration, optimization, and management.',
    features: [
      'Cloud migration planning and execution',
      'Infrastructure as Code (IaC)',
      'Auto-scaling and load balancing',
      'Security and compliance',
      'Cost optimization',
      'Disaster recovery planning',
      '24/7 monitoring and support',
      'Performance optimization'
    ],
    pricing: {
      basic: 250,
      pro: 500,
      enterprise: 1000
    },
    category: 'it',
    icon: '☁️',
    link: '/cloud-infrastructure',
    marketPrice: {
      min: 200,
      max: 800
    },
    benefits: [
      'Reduce infrastructure costs by 30%',
      'Improve scalability and reliability',
      'Enhance security posture',
      'Enable remote work capabilities'
    ],
    useCases: [
      'Application hosting',
      'Data storage and backup',
      'Development environments',
      'High-availability systems'
    ]
  },
  {
    id: 'cybersecurity-services',
    name: 'Cybersecurity Services',
    description: 'Comprehensive cybersecurity solutions to protect your business from threats and ensure compliance.',
    features: [
      'Security assessment and auditing',
      'Penetration testing',
      'Vulnerability management',
      'Incident response planning',
      'Security awareness training',
      'Compliance consulting (SOC2, GDPR, HIPAA)',
      '24/7 security monitoring',
      'Threat intelligence'
    ],
    pricing: {
      basic: 300,
      pro: 600,
      enterprise: 1200
    },
    category: 'it',
    icon: '🔒',
    link: '/it-services',
    marketPrice: {
      min: 250,
      max: 1000
    },
    benefits: [
      'Protect against cyber threats',
      'Ensure regulatory compliance',
      'Reduce security risks',
      'Build customer trust'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'E-commerce platforms',
      'Government agencies'
    ]
  },
  {
    id: 'web-development',
    name: 'Web Development Services',
    description: 'Modern web development services including responsive design, e-commerce, and custom applications.',
    features: [
      'Responsive web design',
      'E-commerce development',
      'Custom web applications',
      'API development and integration',
      'Performance optimization',
      'SEO optimization',
      'Content management systems',
      'Maintenance and support'
    ],
    pricing: {
      basic: 100,
      pro: 200,
      enterprise: 400
    },
    category: 'it',
    icon: '🌐',
    link: '/web-development',
    marketPrice: {
      min: 80,
      max: 300
    },
    benefits: [
      'Professional online presence',
      'Improved user experience',
      'Better search engine rankings',
      'Mobile-friendly design'
    ],
    useCases: [
      'Business websites',
      'E-commerce stores',
      'Web applications',
      'Portfolio sites'
    ]
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile app development for iOS and Android platforms.',
    features: [
      'Native iOS and Android development',
      'Cross-platform development (React Native, Flutter)',
      'UI/UX design',
      'App store optimization',
      'Push notifications',
      'Offline functionality',
      'API integration',
      'Testing and quality assurance'
    ],
    pricing: {
      basic: 150,
      pro: 300,
      enterprise: 600
    },
    category: 'it',
    icon: '📱',
    link: '/mobile-development',
    marketPrice: {
      min: 120,
      max: 500
    },
    benefits: [
      'Reach mobile users effectively',
      'Improve customer engagement',
      'Increase brand visibility',
      'Generate additional revenue'
    ],
    useCases: [
      'Business applications',
      'E-commerce apps',
      'Social media apps',
      'Utility applications'
    ]
  },
  {
    id: 'database-management',
    name: 'Database Management Services',
    description: 'Comprehensive database design, optimization, and management services for all major database systems.',
    features: [
      'Database design and architecture',
      'Performance tuning and optimization',
      'Data migration and integration',
      'Backup and recovery planning',
      'Security and access control',
      'Monitoring and maintenance',
      'Cloud database solutions',
      'Data warehousing'
    ],
    pricing: {
      basic: 200,
      pro: 400,
      enterprise: 800
    },
    category: 'it',
    icon: '🗄️',
    link: '/database-management',
    marketPrice: {
      min: 150,
      max: 600
    },
    benefits: [
      'Improve database performance',
      'Ensure data security and integrity',
      'Reduce maintenance costs',
      'Enable better decision making'
    ],
    useCases: [
      'Enterprise applications',
      'Data analytics platforms',
      'E-commerce systems',
      'Content management'
    ]
  }
];

export const allServices = [...microSAASServices, ...aiServices, ...itServices];