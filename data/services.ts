export interface Service {
  id: string;
  name: string;
  category: 'micro-saas' | 'it-services' | 'ai-services';
  description: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: string;
}

export const services: Service[] = [
  // Micro SaaS Services
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered content generation platform for blogs, social media, and marketing materials.',
    features: [
      'Multi-language content generation',
      'SEO-optimized content',
      'Brand voice customization',
      'Content scheduling',
      'Analytics dashboard',
      'API integration'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO optimization built-in',
      'Multi-platform publishing'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/ai-content-generator',
    icon: '📝'
  },
  {
    id: 'project-management-suite',
    name: 'Smart Project Manager',
    category: 'micro-saas',
    description: 'Intelligent project management platform with AI-powered task prioritization and team collaboration.',
    features: [
      'AI task prioritization',
      'Real-time collaboration',
      'Time tracking',
      'Resource allocation',
      'Progress analytics',
      'Mobile app'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      '30% faster project completion',
      'Improved team productivity',
      'Better resource utilization',
      'Real-time insights'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction projects',
      'Event planning'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://ziontechgroup.com/services/project-management',
    icon: '📊'
  },
  {
    id: 'inventory-management',
    name: 'Inventory Tracker Pro',
    category: 'micro-saas',
    description: 'Smart inventory management system with predictive analytics and automated reordering.',
    features: [
      'Real-time inventory tracking',
      'Predictive analytics',
      'Automated reordering',
      'Barcode scanning',
      'Multi-location support',
      'Integration APIs'
    ],
    pricing: {
      starter: 39,
      professional: 89,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce stockouts by 80%',
      'Optimize inventory levels',
      'Automated procurement',
      'Cost savings'
    ],
    useCases: [
      'E-commerce businesses',
      'Retail stores',
      'Manufacturing',
      'Warehouse management'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/inventory-management',
    icon: '📦'
  },
  {
    id: 'customer-support-platform',
    name: 'AI Support Assistant',
    category: 'micro-saas',
    description: 'Intelligent customer support platform with AI chatbots and automated ticket routing.',
    features: [
      'AI-powered chatbots',
      'Smart ticket routing',
      'Knowledge base management',
      'Multi-channel support',
      'Performance analytics',
      'Integration capabilities'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Faster response times',
      'Reduced support costs',
      'Improved customer satisfaction'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Service businesses',
      'Educational institutions'
    ],
    technologies: ['Next.js', 'OpenAI', 'Redis', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/customer-support',
    icon: '🤖'
  },

  // IT Services
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Expert',
    category: 'it-services',
    description: 'Comprehensive cloud migration services for seamless transition to AWS, Azure, or Google Cloud.',
    features: [
      'Infrastructure assessment',
      'Migration planning',
      'Data migration',
      'Application modernization',
      'Security implementation',
      'Performance optimization'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 50000,
      currency: 'USD'
    },
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better performance'
    ],
    useCases: [
      'Legacy system modernization',
      'Data center consolidation',
      'Disaster recovery setup',
      'Application scaling'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    link: 'https://ziontechgroup.com/services/cloud-migration',
    icon: '☁️'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Assessment',
    category: 'it-services',
    description: 'Comprehensive cybersecurity audit and penetration testing services to protect your business.',
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Security policy review',
      'Compliance auditing',
      'Incident response planning',
      'Security training'
    ],
    pricing: {
      starter: 3000,
      professional: 8000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Identify security vulnerabilities',
      'Compliance with regulations',
      'Protect customer data',
      'Reduce security risks'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce platforms',
      'Government agencies'
    ],
    technologies: ['Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP'],
    link: 'https://ziontechgroup.com/services/cybersecurity',
    icon: '🔒'
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation Suite',
    category: 'it-services',
    description: 'Complete DevOps automation including CI/CD pipelines, infrastructure as code, and monitoring.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & alerting',
      'Automated testing',
      'Deployment automation'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Faster deployments',
      'Reduced manual errors',
      'Improved reliability',
      'Better collaboration'
    ],
    useCases: [
      'Software development teams',
      'Startups scaling up',
      'Enterprise applications',
      'Microservices architecture'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Kubernetes', 'Prometheus'],
    link: 'https://ziontechgroup.com/services/devops',
    icon: '⚙️'
  },
  {
    id: 'data-backup-recovery',
    name: 'Data Backup & Recovery',
    category: 'it-services',
    description: 'Comprehensive data backup and disaster recovery solutions to protect your critical business data.',
    features: [
      'Automated backup scheduling',
      'Incremental backups',
      'Disaster recovery planning',
      'Data encryption',
      'Backup testing',
      'Recovery time objectives'
    ],
    pricing: {
      starter: 2000,
      professional: 6000,
      enterprise: 18000,
      currency: 'USD'
    },
    benefits: [
      'Data protection',
      'Business continuity',
      'Compliance adherence',
      'Peace of mind'
    ],
    useCases: [
      'Database systems',
      'File servers',
      'Virtual machines',
      'Cloud applications'
    ],
    technologies: ['Veeam', 'Commvault', 'AWS S3', 'Azure Backup'],
    link: 'https://ziontechgroup.com/services/backup-recovery',
    icon: '💾'
  },

  // AI Services
  {
    id: 'custom-ai-models',
    name: 'Custom AI Model Development',
    category: 'ai-services',
    description: 'Custom AI model development tailored to your specific business needs and data.',
    features: [
      'Custom model training',
      'Data preprocessing',
      'Model optimization',
      'API development',
      'Integration support',
      'Ongoing maintenance'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Tailored to your data',
      'Better accuracy',
      'Competitive advantage',
      'Scalable solutions'
    ],
    useCases: [
      'Predictive analytics',
      'Image recognition',
      'Natural language processing',
      'Recommendation systems'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'Docker'],
    link: 'https://ziontechgroup.com/services/custom-ai-models',
    icon: '🧠'
  },
  {
    id: 'ai-process-automation',
    name: 'AI Process Automation',
    category: 'ai-services',
    description: 'Intelligent process automation using AI to streamline business operations and reduce manual work.',
    features: [
      'Process analysis',
      'RPA implementation',
      'AI decision making',
      'Workflow automation',
      'Integration with existing systems',
      'Performance monitoring'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 70%',
      'Improve accuracy',
      'Faster processing',
      'Cost savings'
    ],
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Data entry automation',
      'Report generation'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'OCR'],
    link: 'https://ziontechgroup.com/services/ai-automation',
    icon: '🤖'
  },
  {
    id: 'ai-analytics-platform',
    name: 'AI Analytics Platform',
    category: 'ai-services',
    description: 'Advanced analytics platform powered by AI for deep business insights and predictive analytics.',
    features: [
      'Data visualization',
      'Predictive analytics',
      'Real-time dashboards',
      'Automated reporting',
      'Anomaly detection',
      'Custom alerts'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Predictive insights',
      'Real-time monitoring',
      'Competitive advantage'
    ],
    useCases: [
      'Business intelligence',
      'Sales forecasting',
      'Risk assessment',
      'Performance monitoring'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'Apache Spark', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-analytics',
    icon: '📈'
  },
  {
    id: 'ai-chatbot-development',
    name: 'AI Chatbot Development',
    category: 'ai-services',
    description: 'Custom AI chatbot development for customer service, sales, and internal communication.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Integration APIs',
      'Analytics dashboard',
      'Custom training',
      '24/7 availability'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Reduced response times',
      'Scalable customer service',
      'Cost-effective support'
    ],
    useCases: [
      'Customer support',
      'Sales qualification',
      'Appointment booking',
      'FAQ handling'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'React', 'Node.js', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/ai-chatbot',
    icon: '💬'
  },

  // Additional Micro SaaS Services
  {
    id: 'social-media-automation',
    name: 'Social Media Automation Suite',
    category: 'micro-saas',
    description: 'Comprehensive social media management platform with AI-powered content creation and scheduling.',
    features: [
      'AI content generation',
      'Multi-platform posting',
      'Analytics & insights',
      'Hashtag optimization',
      'Competitor analysis',
      'Team collaboration'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 225,
      currency: 'USD'
    },
    benefits: [
      'Save 10+ hours weekly',
      'Increase engagement by 40%',
      'Consistent brand presence',
      'Data-driven strategies'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce brands',
      'Content creators',
      'Small businesses'
    ],
    technologies: ['React', 'Node.js', 'OpenAI API', 'Social Media APIs', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/social-media-automation',
    icon: '📱'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation Pro',
    category: 'micro-saas',
    description: 'Advanced email marketing platform with AI-driven personalization and automation workflows.',
    features: [
      'AI email personalization',
      'Behavioral triggers',
      'A/B testing',
      'Advanced segmentation',
      'Deliverability optimization',
      'Revenue tracking'
    ],
    pricing: {
      starter: 45,
      professional: 95,
      enterprise: 275,
      currency: 'USD'
    },
    benefits: [
      '3x higher open rates',
      'Automated lead nurturing',
      'Personalized experiences',
      'ROI optimization'
    ],
    useCases: [
      'E-commerce stores',
      'SaaS companies',
      'Online courses',
      'Service businesses'
    ],
    technologies: ['React', 'Node.js', 'SendGrid', 'Machine Learning', 'Redis'],
    link: 'https://ziontechgroup.com/services/email-marketing-automation',
    icon: '📧'
  },
  {
    id: 'hr-management-system',
    name: 'Smart HR Management System',
    category: 'micro-saas',
    description: 'Comprehensive HR platform with AI-powered recruitment, employee management, and performance analytics.',
    features: [
      'AI resume screening',
      'Employee onboarding',
      'Performance tracking',
      'Payroll integration',
      'Time & attendance',
      'Compliance management'
    ],
    pricing: {
      starter: 55,
      professional: 125,
      enterprise: 350,
      currency: 'USD'
    },
    benefits: [
      'Reduce hiring time by 60%',
      'Improve employee retention',
      'Automated compliance',
      'Data-driven insights'
    ],
    useCases: [
      'Growing companies',
      'Remote teams',
      'HR departments',
      'Staffing agencies'
    ],
    technologies: ['React', 'Node.js', 'AI/ML', 'Payroll APIs', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/hr-management',
    icon: '👥'
  },
  {
    id: 'financial-analytics-dashboard',
    name: 'Financial Analytics Dashboard',
    category: 'micro-saas',
    description: 'Real-time financial analytics platform with AI-powered insights and forecasting capabilities.',
    features: [
      'Real-time financial tracking',
      'AI cash flow forecasting',
      'Expense categorization',
      'Investment analysis',
      'Tax optimization',
      'Multi-currency support'
    ],
    pricing: {
      starter: 65,
      professional: 145,
      enterprise: 425,
      currency: 'USD'
    },
    benefits: [
      'Better financial decisions',
      'Automated reporting',
      'Tax savings identification',
      'Risk assessment'
    ],
    useCases: [
      'Small businesses',
      'Freelancers',
      'Investment firms',
      'Accounting firms'
    ],
    technologies: ['React', 'Python', 'Financial APIs', 'Machine Learning', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/financial-analytics',
    icon: '💰'
  },

  // Additional IT Services
  {
    id: 'blockchain-development',
    name: 'Blockchain Development Services',
    category: 'it-services',
    description: 'Comprehensive blockchain solutions including smart contracts, DeFi applications, and NFT platforms.',
    features: [
      'Smart contract development',
      'DeFi protocol creation',
      'NFT marketplace development',
      'Blockchain integration',
      'Security auditing',
      'Token economics design'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparent transactions',
      'Future-proof technology'
    ],
    useCases: [
      'Financial services',
      'Supply chain management',
      'Digital identity',
      'Gaming platforms'
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'IPFS'],
    link: 'https://ziontechgroup.com/services/blockchain-development',
    icon: '⛓️'
  },
  {
    id: 'iot-solutions',
    name: 'IoT Solutions & Integration',
    category: 'it-services',
    description: 'End-to-end IoT solutions including device connectivity, data analytics, and smart system integration.',
    features: [
      'IoT device development',
      'Sensor integration',
      'Real-time data processing',
      'Cloud connectivity',
      'Predictive maintenance',
      'Mobile app development'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Operational efficiency',
      'Predictive insights',
      'Cost reduction',
      'Automated monitoring'
    ],
    useCases: [
      'Smart manufacturing',
      'Agriculture monitoring',
      'Building automation',
      'Fleet management'
    ],
    technologies: ['Arduino', 'Raspberry Pi', 'AWS IoT', 'MQTT', 'Time Series DB'],
    link: 'https://ziontechgroup.com/services/iot-solutions',
    icon: '🌐'
  },
  {
    id: 'api-development-integration',
    name: 'API Development & Integration',
    category: 'it-services',
    description: 'Custom API development and third-party integration services for seamless system connectivity.',
    features: [
      'RESTful API development',
      'GraphQL implementation',
      'Third-party integrations',
      'API documentation',
      'Rate limiting & security',
      'Performance optimization'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'System interoperability',
      'Improved efficiency',
      'Scalable architecture',
      'Enhanced user experience'
    ],
    useCases: [
      'Legacy system integration',
      'Third-party service integration',
      'Mobile app backends',
      'Microservices architecture'
    ],
    technologies: ['Node.js', 'Python', 'GraphQL', 'Postman', 'Swagger'],
    link: 'https://ziontechgroup.com/services/api-development',
    icon: '🔌'
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    category: 'it-services',
    description: 'Native and cross-platform mobile app development with modern UI/UX and backend integration.',
    features: [
      'iOS & Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'Backend integration',
      'Push notifications',
      'App store optimization'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced user engagement',
      'Mobile-first experience',
      'Offline functionality',
      'App store presence'
    ],
    useCases: [
      'Business applications',
      'E-commerce platforms',
      'Social networking',
      'Productivity tools'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    link: 'https://ziontechgroup.com/services/mobile-app-development',
    icon: '📱'
  },

  // Additional AI Services
  {
    id: 'computer-vision-solutions',
    name: 'Computer Vision Solutions',
    category: 'ai-services',
    description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
    features: [
      'Image classification',
      'Object detection & tracking',
      'Facial recognition',
      'OCR text extraction',
      'Quality inspection',
      'Real-time processing'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Automated visual inspection',
      'Enhanced security',
      'Quality control',
      'Process automation'
    ],
    useCases: [
      'Manufacturing quality control',
      'Security surveillance',
      'Medical imaging',
      'Retail analytics'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'CUDA'],
    link: 'https://ziontechgroup.com/services/computer-vision',
    icon: '👁️'
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    category: 'ai-services',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
    features: [
      'Sentiment analysis',
      'Text classification',
      'Named entity recognition',
      'Language translation',
      'Text summarization',
      'Chatbot development'
    ],
    pricing: {
      starter: 9000,
      professional: 28000,
      enterprise: 85000,
      currency: 'USD'
    },
    benefits: [
      'Automated text processing',
      'Customer insight extraction',
      'Multilingual support',
      'Content optimization'
    ],
    useCases: [
      'Customer feedback analysis',
      'Content moderation',
      'Document processing',
      'Market research'
    ],
    technologies: ['spaCy', 'NLTK', 'Transformers', 'BERT', 'GPT'],
    link: 'https://ziontechgroup.com/services/nlp',
    icon: '📝'
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Solutions',
    category: 'ai-services',
    description: 'Advanced predictive analytics using machine learning to forecast trends and optimize business decisions.',
    features: [
      'Demand forecasting',
      'Risk assessment',
      'Customer behavior prediction',
      'Market trend analysis',
      'Anomaly detection',
      'Real-time predictions'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Risk mitigation',
      'Revenue optimization',
      'Competitive advantage'
    ],
    useCases: [
      'Supply chain optimization',
      'Financial risk management',
      'Marketing campaign optimization',
      'Inventory management'
    ],
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Apache Spark', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/predictive-analytics',
    icon: '🔮'
  },
  {
    id: 'ai-powered-recommendation-engine',
    name: 'AI Recommendation Engine',
    category: 'ai-services',
    description: 'Intelligent recommendation systems to personalize user experiences and increase engagement.',
    features: [
      'Collaborative filtering',
      'Content-based recommendations',
      'Hybrid recommendation models',
      'Real-time personalization',
      'A/B testing framework',
      'Performance analytics'
    ],
    pricing: {
      starter: 11000,
      professional: 32000,
      enterprise: 95000,
      currency: 'USD'
    },
    benefits: [
      'Increased user engagement',
      'Higher conversion rates',
      'Personalized experiences',
      'Revenue growth'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'Content platforms',
      'Social media'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Redis', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/recommendation-engine',
    icon: '🎯'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};