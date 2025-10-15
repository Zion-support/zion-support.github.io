export interface Service {
  id: string;
  name: string;
  category: 'micro-saas' | 'it-services' | 'ai-services';
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  link: string;
  icon: string;
  isPopular?: boolean;
  isNew?: boolean;
  technologies: string[];
  useCases: string[];
  targetAudience: string[];
}

export const microSAASServices: Service[] = [
  {
    id: 'zion-ai-content-moderator',
    name: 'Zion AI Content Moderator',
    category: 'micro-saas',
    description: 'Advanced AI-powered content moderation system that automatically detects and filters inappropriate content across text, images, and videos with 99.2% accuracy.',
    features: [
      'Real-time content analysis',
      'Multi-language support (50+ languages)',
      'Custom moderation rules',
      'API integration',
      'Dashboard analytics',
      'Bulk content processing',
      'Custom model training',
      'Webhook notifications'
    ],
    benefits: [
      'Reduce moderation costs by 85%',
      '24/7 automated monitoring',
      'Scalable to millions of posts',
      'Compliance with platform policies',
      'Customizable sensitivity levels',
      'Multi-platform support'
    ],
    pricing: {
      basic: 29,
      pro: 99,
      enterprise: 299
    },
    link: '/zion-ai-content-moderator',
    icon: '🛡️',
    isPopular: true,
    technologies: ['TensorFlow', 'OpenAI GPT-4', 'Computer Vision', 'NLP', 'React', 'Node.js'],
    useCases: ['Social Media Platforms', 'E-commerce', 'Forums', 'Chat Applications', 'Content Management Systems'],
    targetAudience: ['Social Media Companies', 'E-commerce Platforms', 'Content Creators', 'Community Managers']
  },
  {
    id: 'zion-ai-customer-churn-predictor',
    name: 'Zion AI Customer Churn Predictor',
    category: 'micro-saas',
    description: 'Predict customer churn with 94% accuracy using machine learning algorithms. Identify at-risk customers and implement retention strategies before they leave.',
    features: [
      'Predictive analytics dashboard',
      'Real-time churn scoring',
      'Automated alerts',
      'Retention campaign suggestions',
      'Customer segmentation',
      'Integration with CRM systems',
      'Custom model training',
      'ROI tracking'
    ],
    benefits: [
      'Increase customer retention by 35%',
      'Reduce churn prediction costs by 70%',
      'Identify at-risk customers early',
      'Automated retention workflows',
      'Data-driven insights',
      'Scalable across all customer segments'
    ],
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399
    },
    link: '/zion-ai-customer-churn-predictor',
    icon: '📊',
    isPopular: true,
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'React', 'PostgreSQL', 'Redis'],
    useCases: ['SaaS Companies', 'E-commerce', 'Subscription Services', 'Telecommunications', 'Financial Services'],
    targetAudience: ['Customer Success Teams', 'Marketing Managers', 'Data Analysts', 'Product Managers']
  },
  {
    id: 'zion-ai-workflow-automator',
    name: 'Zion AI Workflow Automator',
    category: 'micro-saas',
    description: 'Intelligent workflow automation platform that learns from your business processes and suggests optimizations. Automate repetitive tasks and streamline operations.',
    features: [
      'Visual workflow builder',
      'AI-powered process optimization',
      'Integration with 500+ apps',
      'Custom automation triggers',
      'Performance analytics',
      'Team collaboration tools',
      'Mobile app support',
      'Enterprise security'
    ],
    benefits: [
      'Save 20+ hours per week',
      'Reduce human errors by 90%',
      'Improve process efficiency',
      'Scale operations easily',
      'Real-time monitoring',
      'Cost-effective automation'
    ],
    pricing: {
      basic: 39,
      pro: 119,
      enterprise: 299
    },
    link: '/zion-ai-workflow-automator',
    icon: '⚡',
    technologies: ['Zapier API', 'Microsoft Power Automate', 'Python', 'React', 'MongoDB', 'Docker'],
    useCases: ['Business Process Automation', 'Data Processing', 'Customer Onboarding', 'Invoice Processing', 'Lead Management'],
    targetAudience: ['Operations Managers', 'Business Analysts', 'Administrative Staff', 'Small Business Owners']
  },
  {
    id: 'zion-ai-financial-forecaster',
    name: 'Zion AI Financial Forecaster',
    category: 'micro-saas',
    description: 'Advanced financial forecasting tool that uses AI to predict revenue, expenses, and cash flow with 96% accuracy. Perfect for budgeting and financial planning.',
    features: [
      'Automated financial forecasting',
      'Multiple scenario planning',
      'Cash flow predictions',
      'Budget variance analysis',
      'Integration with accounting software',
      'Custom financial models',
      'Risk assessment',
      'Executive dashboards'
    ],
    benefits: [
      'Improve financial planning accuracy',
      'Reduce forecasting time by 80%',
      'Better cash flow management',
      'Data-driven decisions',
      'Risk mitigation',
      'Scalable financial modeling'
    ],
    pricing: {
      basic: 59,
      pro: 179,
      enterprise: 449
    },
    link: '/zion-ai-financial-forecaster',
    icon: '💰',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'React', 'PostgreSQL', 'Chart.js'],
    useCases: ['Financial Planning', 'Budget Management', 'Investment Analysis', 'Risk Assessment', 'Cash Flow Management'],
    targetAudience: ['CFOs', 'Financial Analysts', 'Accounting Teams', 'Small Business Owners', 'Investment Managers']
  },
  {
    id: 'zion-ai-sales-predictor',
    name: 'Zion AI Sales Predictor',
    category: 'micro-saas',
    description: 'Predict sales performance and identify high-value opportunities with AI-powered analytics. Optimize your sales strategy and increase revenue by 40%.',
    features: [
      'Sales forecasting',
      'Lead scoring',
      'Opportunity identification',
      'Pipeline analysis',
      'Performance tracking',
      'CRM integration',
      'Custom sales models',
      'Team performance insights'
    ],
    benefits: [
      'Increase sales by 40%',
      'Improve lead conversion rates',
      'Better sales forecasting',
      'Identify high-value prospects',
      'Optimize sales processes',
      'Data-driven sales strategy'
    ],
    pricing: {
      basic: 69,
      pro: 199,
      enterprise: 499
    },
    link: '/zion-ai-sales-predictor',
    icon: '🎯',
    isPopular: true,
    technologies: ['Python', 'Scikit-learn', 'Salesforce API', 'React', 'PostgreSQL', 'D3.js'],
    useCases: ['Sales Forecasting', 'Lead Management', 'Pipeline Optimization', 'Performance Tracking', 'Revenue Planning'],
    targetAudience: ['Sales Managers', 'Sales Representatives', 'Business Development', 'Revenue Operations', 'Sales Directors']
  },
  {
    id: 'zion-ai-document-analyzer',
    name: 'Zion AI Document Analyzer',
    category: 'micro-saas',
    description: 'Intelligent document processing and analysis tool that extracts insights from PDFs, images, and text documents. Perfect for legal, research, and business analysis.',
    features: [
      'OCR text extraction',
      'Document classification',
      'Key information extraction',
      'Sentiment analysis',
      'Multi-format support',
      'Batch processing',
      'API integration',
      'Custom extraction rules'
    ],
    benefits: [
      'Process documents 10x faster',
      'Extract key insights automatically',
      'Reduce manual data entry',
      'Improve document accuracy',
      'Scale document processing',
      'Cost-effective solution'
    ],
    pricing: {
      basic: 39,
      pro: 129,
      enterprise: 349
    },
    link: '/zion-ai-document-analyzer',
    icon: '📄',
    technologies: ['Tesseract OCR', 'OpenAI GPT-4', 'Python', 'React', 'AWS S3', 'Elasticsearch'],
    useCases: ['Legal Document Review', 'Research Analysis', 'Contract Management', 'Invoice Processing', 'Academic Research'],
    targetAudience: ['Legal Professionals', 'Researchers', 'Business Analysts', 'Administrative Staff', 'Content Managers']
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    category: 'it-services',
    description: 'Comprehensive cloud infrastructure services including AWS, Azure, and Google Cloud setup, migration, and optimization. 99.9% uptime guaranteed.',
    features: [
      'Multi-cloud architecture design',
      'Cloud migration services',
      'Infrastructure automation',
      'Security implementation',
      'Performance optimization',
      'Cost optimization',
      '24/7 monitoring',
      'Disaster recovery planning'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve scalability and flexibility',
      'Enhanced security and compliance',
      'Faster deployment times',
      'Better disaster recovery',
      'Expert cloud management'
    ],
    pricing: {
      basic: 999,
      pro: 2999,
      enterprise: 8999
    },
    link: '/cloud-infrastructure',
    icon: '☁️',
    isPopular: true,
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    useCases: ['Cloud Migration', 'Infrastructure Scaling', 'Disaster Recovery', 'Security Implementation', 'Cost Optimization'],
    targetAudience: ['CTOs', 'IT Directors', 'DevOps Engineers', 'System Administrators', 'Enterprise Companies']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Solutions',
    category: 'it-services',
    description: 'Comprehensive cybersecurity services including threat assessment, penetration testing, security monitoring, and incident response. Protect your business from cyber threats.',
    features: [
      'Security assessment and auditing',
      'Penetration testing',
      'Vulnerability scanning',
      'Security monitoring (SOC)',
      'Incident response',
      'Security training',
      'Compliance management',
      'Threat intelligence'
    ],
    benefits: [
      'Protect against cyber threats',
      'Ensure compliance with regulations',
      'Reduce security risks',
      '24/7 security monitoring',
      'Expert security guidance',
      'Cost-effective security solutions'
    ],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 12999
    },
    link: '/cybersecurity',
    icon: '🔒',
    isPopular: true,
    technologies: ['SIEM', 'Firewalls', 'IDS/IPS', 'Vulnerability Scanners', 'Penetration Testing Tools', 'Compliance Frameworks'],
    useCases: ['Security Assessment', 'Threat Protection', 'Compliance Management', 'Incident Response', 'Security Training'],
    targetAudience: ['CISOs', 'Security Teams', 'IT Managers', 'Compliance Officers', 'Risk Managers']
  },
  {
    id: 'network-infrastructure',
    name: 'Network Infrastructure Solutions',
    category: 'it-services',
    description: 'Design, implement, and maintain robust network infrastructure solutions. High-performance networks with 99.99% uptime and advanced security features.',
    features: [
      'Network design and planning',
      'Router and switch configuration',
      'Wireless network setup',
      'Network security implementation',
      'Performance monitoring',
      'Troubleshooting and support',
      'Network optimization',
      'Disaster recovery planning'
    ],
    benefits: [
      'High-performance networks',
      'Improved connectivity',
      'Enhanced security',
      'Reduced downtime',
      'Scalable solutions',
      'Expert network management'
    ],
    pricing: {
      basic: 1499,
      pro: 3999,
      enterprise: 9999
    },
    link: '/network-infrastructure',
    icon: '🌐',
    technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Ubiquiti', 'Network Monitoring Tools'],
    useCases: ['Network Design', 'Infrastructure Setup', 'Security Implementation', 'Performance Optimization', 'Troubleshooting'],
    targetAudience: ['Network Engineers', 'IT Managers', 'System Administrators', 'Infrastructure Teams', 'Enterprise Companies']
  },
  {
    id: 'database-management',
    name: 'Database Management Services',
    category: 'it-services',
    description: 'Comprehensive database management services including design, optimization, migration, and maintenance. Ensure optimal performance and data security.',
    features: [
      'Database design and architecture',
      'Performance optimization',
      'Data migration services',
      'Backup and recovery',
      'Security implementation',
      'Monitoring and maintenance',
      'Scalability planning',
      '24/7 support'
    ],
    benefits: [
      'Optimized database performance',
      'Improved data security',
      'Reduced downtime',
      'Better scalability',
      'Cost-effective management',
      'Expert database administration'
    ],
    pricing: {
      basic: 1299,
      pro: 3499,
      enterprise: 7999
    },
    link: '/database-management',
    icon: '🗄️',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server'],
    useCases: ['Database Optimization', 'Data Migration', 'Performance Tuning', 'Security Implementation', 'Backup Management'],
    targetAudience: ['Database Administrators', 'Data Engineers', 'IT Managers', 'Development Teams', 'Enterprise Companies']
  },
  {
    id: 'web-development',
    name: 'Web Development Services',
    category: 'it-services',
    description: 'Modern web development services using cutting-edge technologies. Responsive, fast, and SEO-optimized websites and web applications.',
    features: [
      'Responsive web design',
      'Frontend development (React, Vue, Angular)',
      'Backend development (Node.js, Python, PHP)',
      'Database integration',
      'API development',
      'SEO optimization',
      'Performance optimization',
      'Security implementation'
    ],
    benefits: [
      'Modern, responsive websites',
      'Fast loading times',
      'SEO optimized',
      'Mobile-friendly design',
      'Secure and scalable',
      'Professional development'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    link: '/web-development',
    icon: '💻',
    isPopular: true,
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'MySQL', 'MongoDB'],
    useCases: ['Website Development', 'Web Applications', 'E-commerce Sites', 'Corporate Websites', 'Portfolio Sites'],
    targetAudience: ['Business Owners', 'Marketing Teams', 'E-commerce Companies', 'Startups', 'Enterprise Companies']
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    category: 'it-services',
    description: 'Native and cross-platform mobile app development for iOS and Android. High-performance apps with modern UI/UX design and advanced features.',
    features: [
      'Native iOS development (Swift)',
      'Native Android development (Kotlin)',
      'Cross-platform development (React Native, Flutter)',
      'UI/UX design',
      'API integration',
      'Push notifications',
      'App store optimization',
      'Maintenance and support'
    ],
    benefits: [
      'High-performance mobile apps',
      'Cross-platform compatibility',
      'Modern UI/UX design',
      'App store optimization',
      'Scalable solutions',
      'Ongoing support'
    ],
    pricing: {
      basic: 4999,
      pro: 12999,
      enterprise: 29999
    },
    link: '/mobile-development',
    icon: '📱',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    useCases: ['Mobile App Development', 'Cross-platform Apps', 'E-commerce Apps', 'Business Apps', 'Gaming Apps'],
    targetAudience: ['Startups', 'E-commerce Companies', 'Business Owners', 'Entertainment Companies', 'Enterprise Companies']
  }
];

export const aiServices: Service[] = [
  {
    id: 'ai-consulting',
    name: 'AI Strategy Consulting',
    category: 'ai-services',
    description: 'Comprehensive AI strategy consulting to help businesses identify opportunities, plan implementations, and maximize ROI from artificial intelligence investments.',
    features: [
      'AI readiness assessment',
      'Strategy development',
      'Technology selection',
      'Implementation planning',
      'ROI analysis',
      'Change management',
      'Training and education',
      'Ongoing support'
    ],
    benefits: [
      'Clear AI roadmap',
      'Maximize AI ROI',
      'Reduce implementation risks',
      'Expert guidance',
      'Competitive advantage',
      'Future-proof strategy'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    link: '/ai-consulting',
    icon: '🧠',
    isPopular: true,
    technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analytics', 'Cloud AI'],
    useCases: ['AI Strategy Planning', 'Technology Assessment', 'Implementation Roadmap', 'ROI Analysis', 'Change Management'],
    targetAudience: ['C-Level Executives', 'IT Directors', 'Innovation Managers', 'Business Strategists', 'Enterprise Companies']
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning Solutions',
    category: 'ai-services',
    description: 'Custom machine learning models and solutions tailored to your business needs. From data preprocessing to model deployment and monitoring.',
    features: [
      'Custom ML model development',
      'Data preprocessing and cleaning',
      'Feature engineering',
      'Model training and optimization',
      'Model deployment',
      'Performance monitoring',
      'A/B testing',
      'Continuous improvement'
    ],
    benefits: [
      'Custom ML solutions',
      'Improved business outcomes',
      'Data-driven insights',
      'Automated decision making',
      'Scalable ML infrastructure',
      'Expert ML engineering'
    ],
    pricing: {
      basic: 4999,
      pro: 12999,
      enterprise: 29999
    },
    link: '/machine-learning',
    icon: '🤖',
    isPopular: true,
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'MLflow', 'Kubernetes'],
    useCases: ['Predictive Analytics', 'Recommendation Systems', 'Fraud Detection', 'Customer Segmentation', 'Demand Forecasting'],
    targetAudience: ['Data Scientists', 'Business Analysts', 'Product Managers', 'CTOs', 'Enterprise Companies']
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    category: 'ai-services',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI. Process and understand human language at scale.',
    features: [
      'Text analysis and classification',
      'Sentiment analysis',
      'Language translation',
      'Named entity recognition',
      'Chatbot development',
      'Voice recognition',
      'Document processing',
      'Real-time processing'
    ],
    benefits: [
      'Automated text processing',
      'Better customer insights',
      'Multilingual support',
      'Improved customer service',
      'Scalable text analysis',
      'Cost-effective solutions'
    ],
    pricing: {
      basic: 3999,
      pro: 9999,
      enterprise: 24999
    },
    link: '/natural-language-processing',
    icon: '💬',
    technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face', 'FastAPI'],
    useCases: ['Customer Support', 'Content Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing'],
    targetAudience: ['Customer Service Teams', 'Content Managers', 'Marketing Teams', 'Product Managers', 'Enterprise Companies']
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision Solutions',
    category: 'ai-services',
    description: 'Advanced computer vision solutions for image recognition, object detection, facial recognition, and visual analytics. Transform visual data into actionable insights.',
    features: [
      'Image classification',
      'Object detection and tracking',
      'Facial recognition',
      'OCR and text extraction',
      'Medical image analysis',
      'Quality inspection',
      'Real-time video analysis',
      'Custom model training'
    ],
    benefits: [
      'Automated visual analysis',
      'Improved accuracy and speed',
      'Cost-effective solutions',
      'Scalable image processing',
      'Real-time insights',
      'Custom visual models'
    ],
    pricing: {
      basic: 5999,
      pro: 14999,
      enterprise: 34999
    },
    link: '/computer-vision',
    icon: '👁️',
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet', 'EfficientNet', 'AWS Rekognition'],
    useCases: ['Quality Control', 'Security Monitoring', 'Medical Imaging', 'Retail Analytics', 'Autonomous Vehicles'],
    targetAudience: ['Manufacturing Companies', 'Security Teams', 'Healthcare Organizations', 'Retail Companies', 'Automotive Industry']
  },
  {
    id: 'ai-automation',
    name: 'AI Process Automation',
    category: 'ai-services',
    description: 'Intelligent process automation using AI to streamline business operations, reduce costs, and improve efficiency. Automate complex workflows with cognitive capabilities.',
    features: [
      'Intelligent document processing',
      'Automated decision making',
      'Workflow optimization',
      'Exception handling',
      'Process monitoring',
      'ROI tracking',
      'Integration capabilities',
      'Scalable automation'
    ],
    benefits: [
      'Reduce operational costs',
      'Improve process efficiency',
      'Eliminate human errors',
      'Scale operations easily',
      'Better compliance',
      'Faster processing times'
    ],
    pricing: {
      basic: 3999,
      pro: 9999,
      enterprise: 24999
    },
    link: '/ai-automation',
    icon: '⚙️',
    technologies: ['RPA', 'Machine Learning', 'OCR', 'NLP', 'Workflow Engines', 'API Integration'],
    useCases: ['Document Processing', 'Invoice Automation', 'Customer Onboarding', 'Compliance Management', 'Data Entry'],
    targetAudience: ['Operations Managers', 'Process Owners', 'Administrative Teams', 'Compliance Officers', 'Enterprise Companies']
  },
  {
    id: 'ai-data-analytics',
    name: 'AI-Powered Data Analytics',
    category: 'ai-services',
    description: 'Advanced data analytics solutions powered by AI to uncover insights, predict trends, and drive data-driven decision making across your organization.',
    features: [
      'Predictive analytics',
      'Real-time data processing',
      'Advanced visualization',
      'Automated reporting',
      'Anomaly detection',
      'Trend analysis',
      'Custom dashboards',
      'Data integration'
    ],
    benefits: [
      'Deeper business insights',
      'Predictive capabilities',
      'Real-time analytics',
      'Automated reporting',
      'Better decision making',
      'Competitive advantage'
    ],
    pricing: {
      basic: 4999,
      pro: 12999,
      enterprise: 29999
    },
    link: '/ai-data-analytics',
    icon: '📈',
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Kafka', 'Elasticsearch'],
    useCases: ['Business Intelligence', 'Predictive Analytics', 'Performance Monitoring', 'Risk Analysis', 'Market Research'],
    targetAudience: ['Data Analysts', 'Business Intelligence Teams', 'Executives', 'Marketing Teams', 'Finance Teams']
  }
];

export const allServices: Service[] = [
  ...microSAASServices,
  ...itServices,
  ...aiServices
];

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: 'micro-saas' | 'it-services' | 'ai-services'): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service.isPopular);
};

export const getNewServices = (): Service[] => {
  return allServices.filter(service => service.isNew);
};