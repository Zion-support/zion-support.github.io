export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT';
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  href: string;
  glowColor: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow';
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-enterprise',
    title: 'AI Enterprise Chatbot Platform',
    description: 'Advanced conversational AI platform with natural language processing, multi-language support, and seamless integration with existing business systems.',
    shortDescription: 'Enterprise-grade AI chatbots with advanced NLP capabilities',
    category: 'AI',
    icon: '🤖',
    features: [
      'Natural Language Processing (NLP)',
      'Multi-language Support (50+ languages)',
      'Voice Recognition & Synthesis',
      'Sentiment Analysis',
      'Custom Knowledge Base Integration',
      'Real-time Analytics Dashboard',
      'API Integration (REST, GraphQL)',
      '24/7 Customer Support'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 2499
    },
    benefits: [
      'Reduce customer support costs by 60%',
      '24/7 availability for customer inquiries',
      'Scalable to handle unlimited conversations',
      'Easy integration with existing systems',
      'Advanced analytics and reporting'
    ],
    useCases: [
      'Customer Support Automation',
      'Lead Qualification',
      'FAQ Automation',
      'Appointment Scheduling',
      'E-commerce Support'
    ],
    technologies: ['OpenAI GPT-4', 'TensorFlow', 'Python', 'React', 'Node.js', 'MongoDB'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-chatbot-enterprise'
    },
    href: '/ai-chatbot-enterprise',
    glowColor: 'purple'
  },
  {
    id: 'ai-content-generation-pro',
    title: 'AI Content Generation Pro',
    description: 'Revolutionary AI-powered content creation platform that generates high-quality articles, marketing copy, social media posts, and technical documentation.',
    shortDescription: 'AI-powered content creation for all your marketing needs',
    category: 'AI',
    icon: '✍️',
    features: [
      'Article & Blog Post Generation',
      'Marketing Copy Creation',
      'Social Media Content',
      'Technical Documentation',
      'SEO-Optimized Content',
      'Multi-language Support',
      'Brand Voice Customization',
      'Plagiarism Detection'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Save 80% of content creation time',
      'Consistent brand voice across all content',
      'SEO-optimized content for better rankings',
      'Unlimited content generation',
      'Professional quality output'
    ],
    useCases: [
      'Blog Content Creation',
      'Marketing Campaigns',
      'Social Media Management',
      'Technical Documentation',
      'Product Descriptions'
    ],
    technologies: ['GPT-4', 'BERT', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-generation-pro'
    },
    href: '/ai-content-generation-pro',
    glowColor: 'cyan'
  },
  {
    id: 'ai-data-analytics-pro',
    title: 'AI Data Analytics Pro',
    description: 'Advanced AI-powered data analytics platform that provides real-time insights, predictive analytics, and automated reporting for business intelligence.',
    shortDescription: 'AI-driven analytics platform for data-driven decision making',
    category: 'AI',
    icon: '📊',
    features: [
      'Real-time Data Processing',
      'Predictive Analytics',
      'Automated Report Generation',
      'Interactive Dashboards',
      'Machine Learning Models',
      'Data Visualization',
      'Custom Metrics & KPIs',
      'API Integration'
    ],
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2999
    },
    benefits: [
      'Make data-driven decisions faster',
      'Identify trends and patterns automatically',
      'Reduce manual reporting by 90%',
      'Real-time insights and alerts',
      'Scalable data processing'
    ],
    useCases: [
      'Business Intelligence',
      'Sales Forecasting',
      'Customer Behavior Analysis',
      'Financial Reporting',
      'Marketing Analytics'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'React', 'D3.js', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-data-analytics-pro'
    },
    href: '/ai-data-analytics-pro',
    glowColor: 'green'
  },
  {
    id: 'ai-voice-assistant-platform',
    title: 'AI Voice Assistant Platform',
    description: 'Enterprise-grade voice assistant platform with natural language processing, multi-language support, and custom skill development.',
    shortDescription: 'Custom AI voice assistants for businesses',
    category: 'AI',
    icon: '🎙️',
    features: [
      'Natural Language Understanding',
      'Multi-language Support',
      'Custom Skill Development',
      'Voice Command Processing',
      'Integration APIs',
      'Analytics Dashboard',
      'Real-time Processing',
      'Custom Wake Words'
    ],
    pricing: {
      basic: 899,
      pro: 1999,
      enterprise: 4999
    },
    benefits: [
      'Hands-free operation',
      'Multi-language support',
      'Custom voice commands',
      'Seamless integration',
      'Real-time processing'
    ],
    useCases: [
      'Customer Service',
      'Smart Office Automation',
      'Accessibility Solutions',
      'Voice Commerce',
      'IoT Control'
    ],
    technologies: ['Speech Recognition', 'NLP', 'React', 'Node.js', 'WebRTC', 'AI/ML'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-voice-assistant-platform'
    },
    href: '/ai-voice-assistant-platform',
    glowColor: 'purple'
  },
  {
    id: 'ai-image-recognition-api',
    title: 'AI Image Recognition API',
    description: 'Advanced image recognition and analysis API with object detection, facial recognition, and content moderation capabilities.',
    shortDescription: 'AI-powered image recognition and analysis API',
    category: 'AI',
    icon: '👁️',
    features: [
      'Object Detection',
      'Facial Recognition',
      'Content Moderation',
      'OCR Text Extraction',
      'Image Classification',
      'Brand Detection',
      'Scene Analysis',
      'API Integration'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      '99.5% accuracy',
      'Real-time processing',
      'Easy API integration',
      'Multiple recognition types',
      'Scalable infrastructure'
    ],
    useCases: [
      'Content Moderation',
      'Security Systems',
      'E-commerce',
      'Social Media',
      'Medical Imaging'
    ],
    technologies: ['Computer Vision', 'Deep Learning', 'Python', 'TensorFlow', 'REST APIs', 'Cloud'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-image-recognition-api'
    },
    href: '/ai-image-recognition-api',
    glowColor: 'blue'
  },
  {
    id: 'ai-translation-service',
    title: 'AI Translation Service',
    description: 'Real-time AI translation service supporting 100+ languages with context-aware translations and industry-specific terminology.',
    shortDescription: 'AI-powered real-time translation service',
    category: 'AI',
    icon: '🌍',
    features: [
      '100+ Language Support',
      'Real-time Translation',
      'Context-aware Translation',
      'Industry-specific Terminology',
      'Voice Translation',
      'Document Translation',
      'API Integration',
      'Quality Assessment'
    ],
    pricing: {
      basic: 149,
      pro: 349,
      enterprise: 899
    },
    benefits: [
      '99% translation accuracy',
      'Real-time processing',
      'Context-aware translations',
      'Industry-specific terms',
      'Easy integration'
    ],
    useCases: [
      'Global Communication',
      'E-commerce',
      'Customer Support',
      'Content Localization',
      'Document Translation'
    ],
    technologies: ['NLP', 'Neural Networks', 'Python', 'TensorFlow', 'REST APIs', 'Cloud'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-translation-service'
    },
    href: '/ai-translation-service',
    glowColor: 'cyan'
  },
  {
    id: 'ai-personalization-engine',
    title: 'AI Personalization Engine',
    description: 'Advanced personalization platform that uses AI to deliver customized experiences, recommendations, and content to users.',
    shortDescription: 'AI-powered personalization and recommendation engine',
    category: 'AI',
    icon: '🎯',
    features: [
      'Behavioral Analysis',
      'Recommendation Engine',
      'A/B Testing',
      'Real-time Personalization',
      'Cross-platform Sync',
      'Performance Analytics',
      'Segmentation',
      'Content Optimization'
    ],
    pricing: {
      basic: 299,
      pro: 699,
      enterprise: 1799
    },
    benefits: [
      'Increase engagement by 50%',
      'Personalized experiences',
      'Real-time optimization',
      'Cross-platform consistency',
      'Data-driven insights'
    ],
    useCases: [
      'E-commerce',
      'Content Platforms',
      'Mobile Apps',
      'Marketing Campaigns',
      'User Experience'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-personalization-engine'
    },
    href: '/ai-personalization-engine',
    glowColor: 'pink'
  },
  {
    id: 'ai-sentiment-analysis-api',
    title: 'AI Sentiment Analysis API',
    description: 'Advanced sentiment analysis API that analyzes text, social media posts, and customer feedback to determine emotional tone and sentiment.',
    shortDescription: 'AI-powered sentiment analysis and emotion detection',
    category: 'AI',
    icon: '😊',
    features: [
      'Text Sentiment Analysis',
      'Social Media Monitoring',
      'Emotion Detection',
      'Multi-language Support',
      'Real-time Processing',
      'Batch Processing',
      'API Integration',
      'Custom Models'
    ],
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599
    },
    benefits: [
      '95% accuracy',
      'Real-time analysis',
      'Multi-language support',
      'Easy API integration',
      'Custom model training'
    ],
    useCases: [
      'Social Media Monitoring',
      'Customer Feedback',
      'Brand Reputation',
      'Market Research',
      'Content Moderation'
    ],
    technologies: ['NLP', 'Deep Learning', 'Python', 'TensorFlow', 'REST APIs', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-sentiment-analysis-api'
    },
    href: '/ai-sentiment-analysis-api',
    glowColor: 'green'
  },
  {
    id: 'ai-automated-testing',
    title: 'AI Automated Testing',
    description: 'Intelligent automated testing platform that uses AI to generate test cases, identify bugs, and optimize testing processes.',
    shortDescription: 'AI-powered automated testing and quality assurance',
    category: 'AI',
    icon: '🧪',
    features: [
      'AI Test Generation',
      'Bug Detection',
      'Performance Testing',
      'UI Testing',
      'API Testing',
      'Regression Testing',
      'Test Optimization',
      'Reporting Dashboard'
    ],
    pricing: {
      basic: 399,
      pro: 899,
      enterprise: 2199
    },
    benefits: [
      'Reduce testing time by 70%',
      'Increase test coverage',
      'Automated bug detection',
      'Continuous testing',
      'Quality assurance'
    ],
    useCases: [
      'Software Development',
      'Quality Assurance',
      'Regression Testing',
      'Performance Testing',
      'CI/CD Integration'
    ],
    technologies: ['AI/ML', 'Selenium', 'Python', 'Jest', 'Cypress', 'Docker'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-automated-testing'
    },
    href: '/ai-automated-testing',
    glowColor: 'yellow'
  },
  {
    id: 'ai-supply-chain-optimizer',
    title: 'AI Supply Chain Optimizer',
    description: 'Intelligent supply chain optimization platform that uses AI to predict demand, optimize inventory, and streamline logistics.',
    shortDescription: 'AI-powered supply chain optimization and logistics',
    category: 'AI',
    icon: '🚚',
    features: [
      'Demand Forecasting',
      'Inventory Optimization',
      'Route Optimization',
      'Supplier Management',
      'Risk Assessment',
      'Cost Optimization',
      'Real-time Monitoring',
      'Predictive Analytics'
    ],
    pricing: {
      basic: 599,
      pro: 1299,
      enterprise: 2999
    },
    benefits: [
      'Reduce costs by 25%',
      'Improve efficiency',
      'Predict demand accurately',
      'Optimize inventory',
      'Risk mitigation'
    ],
    useCases: [
      'Supply Chain Management',
      'Logistics Optimization',
      'Inventory Management',
      'Demand Planning',
      'Risk Management'
    ],
    technologies: ['AI/ML', 'Python', 'TensorFlow', 'React', 'PostgreSQL', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-supply-chain-optimizer'
    },
    href: '/ai-supply-chain-optimizer',
    glowColor: 'orange'
  },

  // Micro SaaS Services
  {
    id: 'project-management-saas',
    title: 'Project Management SaaS',
    description: 'Comprehensive project management platform with task tracking, team collaboration, time tracking, and advanced reporting capabilities.',
    shortDescription: 'Complete project management solution for teams of all sizes',
    category: 'SaaS',
    icon: '📋',
    features: [
      'Task & Project Tracking',
      'Team Collaboration Tools',
      'Time Tracking & Reporting',
      'Gantt Charts & Timelines',
      'File Sharing & Storage',
      'Custom Workflows',
      'Mobile App Access',
      'Integration with 100+ tools'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799
    },
    benefits: [
      'Increase team productivity by 40%',
      'Centralized project visibility',
      'Automated time tracking',
      'Seamless team collaboration',
      'Comprehensive reporting'
    ],
    useCases: [
      'Software Development',
      'Marketing Campaigns',
      'Event Planning',
      'Construction Projects',
      'Consulting Services'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/project-management-saas'
    },
    href: '/project-management-saas',
    glowColor: 'blue'
  },
  {
    id: 'crm-saas-platform',
    title: 'CRM SaaS Platform',
    description: 'Advanced Customer Relationship Management platform with lead tracking, sales pipeline management, and customer communication tools.',
    shortDescription: 'Complete CRM solution for sales and customer management',
    category: 'SaaS',
    icon: '👥',
    features: [
      'Lead & Contact Management',
      'Sales Pipeline Tracking',
      'Email Marketing Integration',
      'Customer Communication History',
      'Automated Follow-ups',
      'Sales Analytics & Reporting',
      'Mobile App Access',
      'API Integration'
    ],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999
    },
    benefits: [
      'Increase sales conversion by 35%',
      'Centralized customer data',
      'Automated sales processes',
      'Better customer relationships',
      'Data-driven sales insights'
    ],
    useCases: [
      'Sales Team Management',
      'Lead Nurturing',
      'Customer Support',
      'Marketing Automation',
      'Account Management'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'Stripe', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/crm-saas-platform'
    },
    href: '/crm-saas-platform',
    glowColor: 'pink'
  },
  {
    id: 'inventory-management-saas',
    title: 'Inventory Management SaaS',
    description: 'Comprehensive inventory management system with real-time tracking, automated reordering, and advanced analytics for businesses.',
    shortDescription: 'Real-time inventory tracking and management solution',
    category: 'SaaS',
    icon: '📦',
    features: [
      'Real-time Inventory Tracking',
      'Automated Reorder Points',
      'Barcode Scanning',
      'Multi-location Support',
      'Supplier Management',
      'Cost Tracking & Analysis',
      'Mobile App Access',
      'API Integration'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Reduce inventory costs by 25%',
      'Eliminate stockouts and overstock',
      'Automated reordering',
      'Real-time visibility',
      'Improved cash flow'
    ],
    useCases: [
      'Retail Stores',
      'E-commerce',
      'Manufacturing',
      'Warehousing',
      'Distribution'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Barcode Scanner API', 'AWS', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/inventory-management-saas'
    },
    href: '/inventory-management-saas',
    glowColor: 'yellow'
  },

  // IT Services
  {
    id: 'cloud-migration-service',
    title: 'Cloud Migration Service',
    description: 'Complete cloud migration service that helps businesses move their infrastructure, applications, and data to the cloud securely and efficiently.',
    shortDescription: 'Seamless cloud migration for businesses of all sizes',
    category: 'IT',
    icon: '☁️',
    features: [
      'Infrastructure Assessment',
      'Migration Planning & Strategy',
      'Data Migration Services',
      'Application Modernization',
      'Security Implementation',
      'Performance Optimization',
      '24/7 Support & Monitoring',
      'Cost Optimization'
    ],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improved scalability and flexibility',
      'Enhanced security and compliance',
      'Better disaster recovery',
      '24/7 monitoring and support'
    ],
    useCases: [
      'Legacy System Migration',
      'Multi-cloud Strategy',
      'Disaster Recovery Setup',
      'Application Modernization',
      'Cost Optimization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cloud-migration-service'
    },
    href: '/cloud-migration-service',
    glowColor: 'cyan'
  },
  {
    id: 'cybersecurity-suite-pro',
    title: 'Cybersecurity Suite Pro',
    description: 'Comprehensive cybersecurity solution providing advanced threat protection, security monitoring, and compliance management for businesses.',
    shortDescription: 'Complete cybersecurity protection for your business',
    category: 'Cybersecurity',
    icon: '🛡️',
    features: [
      'Advanced Threat Detection',
      '24/7 Security Monitoring',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Training',
      'Compliance Management',
      'Incident Response',
      'Security Analytics'
    ],
    pricing: {
      basic: 999,
      pro: 2499,
      enterprise: 5999
    },
    benefits: [
      'Protect against 99.9% of threats',
      'Reduce security incidents by 80%',
      'Ensure compliance with regulations',
      '24/7 security monitoring',
      'Expert security team support'
    ],
    useCases: [
      'Threat Protection',
      'Compliance Management',
      'Security Audits',
      'Incident Response',
      'Security Training'
    ],
    technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Encryption', 'AI/ML'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cybersecurity-suite-pro'
    },
    href: '/cybersecurity-suite-pro',
    glowColor: 'purple'
  },
  {
    id: '5g-network-solutions',
    title: '5G Network Solutions',
    description: 'Complete 5G network implementation and optimization services for businesses looking to leverage next-generation connectivity.',
    shortDescription: 'Next-generation 5G network solutions for businesses',
    category: '5G',
    icon: '📡',
    features: [
      '5G Network Planning',
      'Infrastructure Deployment',
      'Network Optimization',
      'IoT Integration',
      'Edge Computing Setup',
      'Performance Monitoring',
      'Security Implementation',
      '24/7 Support'
    ],
    pricing: {
      basic: 10000,
      pro: 25000,
      enterprise: 75000
    },
    benefits: [
      'Ultra-fast connectivity',
      'Low latency applications',
      'Massive IoT connectivity',
      'Enhanced mobile experiences',
      'Future-proof infrastructure'
    ],
    useCases: [
      'Smart City Implementation',
      'Industrial IoT',
      'Autonomous Vehicles',
      'Remote Work Solutions',
      'Healthcare Applications'
    ],
    technologies: ['5G NR', 'Edge Computing', 'IoT', 'AI/ML', 'Cloud Computing', 'SDN'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-network-solutions'
    },
    href: '/5g-network-solutions',
    glowColor: 'green'
  },
  {
    id: 'ai-powered-devops',
    title: 'AI-Powered DevOps Platform',
    description: 'Intelligent DevOps platform that uses AI to automate deployment, monitoring, and optimization of applications and infrastructure.',
    shortDescription: 'AI-driven DevOps automation and optimization',
    category: 'IT',
    icon: '⚙️',
    features: [
      'Automated Deployment',
      'AI Performance Monitoring',
      'Predictive Scaling',
      'Anomaly Detection',
      'Auto-healing Systems',
      'CI/CD Optimization',
      'Resource Optimization',
      'Security Scanning'
    ],
    pricing: {
      basic: 799,
      pro: 1799,
      enterprise: 3999
    },
    benefits: [
      'Reduce deployment time by 80%',
      'Automated scaling',
      'Predictive maintenance',
      'Zero-downtime deployments',
      'Cost optimization'
    ],
    useCases: [
      'Application Deployment',
      'Infrastructure Management',
      'Performance Optimization',
      'Security Monitoring',
      'Cost Management'
    ],
    technologies: ['AI/ML', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-powered-devops'
    },
    href: '/ai-powered-devops',
    glowColor: 'purple'
  },
  {
    id: 'edge-computing-solutions',
    title: 'Edge Computing Solutions',
    description: 'Comprehensive edge computing infrastructure for low-latency applications, IoT devices, and real-time data processing.',
    shortDescription: 'Edge computing infrastructure for low-latency applications',
    category: 'IT',
    icon: '🌐',
    features: [
      'Edge Server Deployment',
      'Low-latency Processing',
      'IoT Device Management',
      'Real-time Analytics',
      'Content Delivery',
      'Edge Security',
      'Bandwidth Optimization',
      'Distributed Computing'
    ],
    pricing: {
      basic: 1299,
      pro: 2999,
      enterprise: 6999
    },
    benefits: [
      'Reduce latency by 90%',
      'Improved performance',
      'Bandwidth optimization',
      'Real-time processing',
      'Scalable infrastructure'
    ],
    useCases: [
      'IoT Applications',
      'Real-time Analytics',
      'Content Delivery',
      'Autonomous Systems',
      'Gaming & Streaming'
    ],
    technologies: ['Edge Computing', 'Kubernetes', 'Docker', 'MQTT', 'React', 'Node.js'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/edge-computing-solutions'
    },
    href: '/edge-computing-solutions',
    glowColor: 'cyan'
  },
  {
    id: 'microservices-architecture',
    title: 'Microservices Architecture',
    description: 'Complete microservices architecture design and implementation for scalable, maintainable, and resilient applications.',
    shortDescription: 'Microservices architecture design and implementation',
    category: 'IT',
    icon: '🔧',
    features: [
      'Service Design & Architecture',
      'API Gateway Implementation',
      'Service Discovery',
      'Load Balancing',
      'Circuit Breaker Pattern',
      'Distributed Logging',
      'Monitoring & Observability',
      'Container Orchestration'
    ],
    pricing: {
      basic: 2499,
      pro: 4999,
      enterprise: 12999
    },
    benefits: [
      'Improved scalability',
      'Better fault tolerance',
      'Independent deployments',
      'Technology diversity',
      'Team autonomy'
    ],
    useCases: [
      'Legacy System Modernization',
      'Scalable Application Development',
      'Cloud Migration',
      'API Development',
      'Distributed Systems'
    ],
    technologies: ['Docker', 'Kubernetes', 'API Gateway', 'Service Mesh', 'React', 'Node.js'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/microservices-architecture'
    },
    href: '/microservices-architecture',
    glowColor: 'green'
  },
  {
    id: 'api-management-platform',
    title: 'API Management Platform',
    description: 'Comprehensive API management solution with security, monitoring, analytics, and developer portal capabilities.',
    shortDescription: 'Complete API management and developer platform',
    category: 'IT',
    icon: '🔌',
    features: [
      'API Gateway',
      'Authentication & Authorization',
      'Rate Limiting & Throttling',
      'API Analytics',
      'Developer Portal',
      'API Documentation',
      'Version Management',
      'Security Policies'
    ],
    pricing: {
      basic: 399,
      pro: 899,
      enterprise: 2199
    },
    benefits: [
      'Centralized API management',
      'Enhanced security',
      'Developer experience',
      'API analytics',
      'Scalable architecture'
    ],
    useCases: [
      'API Monetization',
      'Third-party Integration',
      'Internal API Management',
      'Developer Ecosystem',
      'Digital Transformation'
    ],
    technologies: ['API Gateway', 'OAuth', 'OpenAPI', 'React', 'Node.js', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/api-management-platform'
    },
    href: '/api-management-platform',
    glowColor: 'blue'
  },
  {
    id: 'data-warehouse-solutions',
    title: 'Data Warehouse Solutions',
    description: 'Enterprise data warehouse design and implementation with ETL processes, data modeling, and business intelligence integration.',
    shortDescription: 'Enterprise data warehouse and analytics platform',
    category: 'IT',
    icon: '📊',
    features: [
      'Data Warehouse Design',
      'ETL/ELT Processes',
      'Data Modeling',
      'Business Intelligence',
      'Data Governance',
      'Real-time Analytics',
      'Data Quality Management',
      'Scalable Architecture'
    ],
    pricing: {
      basic: 1999,
      pro: 4499,
      enterprise: 9999
    },
    benefits: [
      'Centralized data storage',
      'Improved data quality',
      'Faster analytics',
      'Better decision making',
      'Scalable infrastructure'
    ],
    useCases: [
      'Business Intelligence',
      'Data Analytics',
      'Reporting Systems',
      'Machine Learning',
      'Compliance Reporting'
    ],
    technologies: ['PostgreSQL', 'Apache Spark', 'Kafka', 'React', 'Python', 'Tableau'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/data-warehouse-solutions'
    },
    href: '/data-warehouse-solutions',
    glowColor: 'yellow'
  },
  {
    id: 'disaster-recovery-solutions',
    title: 'Disaster Recovery Solutions',
    description: 'Comprehensive disaster recovery and business continuity solutions to ensure minimal downtime and data protection.',
    shortDescription: 'Disaster recovery and business continuity solutions',
    category: 'IT',
    icon: '🛡️',
    features: [
      'Backup & Recovery',
      'Failover Systems',
      'Data Replication',
      'Recovery Testing',
      'RTO/RPO Optimization',
      'Multi-site Redundancy',
      'Automated Recovery',
      'Compliance Support'
    ],
    pricing: {
      basic: 599,
      pro: 1299,
      enterprise: 2999
    },
    benefits: [
      'Minimal downtime',
      'Data protection',
      'Automated recovery',
      'Compliance assurance',
      'Cost-effective solutions'
    ],
    useCases: [
      'Business Continuity',
      'Data Protection',
      'Compliance Requirements',
      'Risk Mitigation',
      'High Availability'
    ],
    technologies: ['Backup Systems', 'Replication', 'Cloud Storage', 'Monitoring', 'Automation'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/disaster-recovery-solutions'
    },
    href: '/disaster-recovery-solutions',
    glowColor: 'red'
  },

  // Blockchain Services
  {
    id: 'blockchain-development',
    title: 'Blockchain Development',
    description: 'Custom blockchain solutions including smart contracts, DeFi applications, NFT platforms, and enterprise blockchain integration.',
    shortDescription: 'Custom blockchain solutions for modern businesses',
    category: 'Blockchain',
    icon: '⛓️',
    features: [
      'Smart Contract Development',
      'DeFi Application Development',
      'NFT Platform Creation',
      'Blockchain Integration',
      'Cryptocurrency Development',
      'Security Audits',
      'Token Economics Design',
      'DApp Development'
    ],
    pricing: {
      basic: 15000,
      pro: 35000,
      enterprise: 75000
    },
    benefits: [
      'Decentralized and secure solutions',
      'Transparent and immutable records',
      'Reduced transaction costs',
      'Global accessibility',
      'Future-proof technology'
    ],
    useCases: [
      'Supply Chain Management',
      'Digital Identity',
      'Financial Services',
      'Gaming & NFTs',
      'Healthcare Records'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'React', 'Node.js'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/blockchain-development'
    },
    href: '/blockchain-development',
    glowColor: 'blue'
  },

  // IoT Services
  {
    id: 'iot-platform-solution',
    title: 'IoT Platform Solution',
    description: 'Complete IoT platform for device management, data collection, real-time monitoring, and analytics for connected devices.',
    shortDescription: 'Comprehensive IoT platform for connected devices',
    category: 'IoT',
    icon: '🌐',
    features: [
      'Device Management',
      'Real-time Data Collection',
      'Data Analytics & Visualization',
      'Remote Monitoring',
      'Alert & Notification System',
      'API Integration',
      'Mobile App Access',
      'Cloud Storage'
    ],
    pricing: {
      basic: 799,
      pro: 1999,
      enterprise: 4999
    },
    benefits: [
      'Centralized device management',
      'Real-time insights and monitoring',
      'Scalable IoT infrastructure',
      'Reduced operational costs',
      'Improved efficiency'
    ],
    useCases: [
      'Smart Home Automation',
      'Industrial Monitoring',
      'Asset Tracking',
      'Environmental Monitoring',
      'Healthcare Devices'
    ],
    technologies: ['MQTT', 'CoAP', 'REST APIs', 'React', 'Node.js', 'MongoDB'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/iot-platform-solution'
    },
    href: '/iot-platform-solution',
    glowColor: 'yellow'
  },

  // Additional Micro SaaS Services
  {
    id: 'ai-social-media-scheduler',
    title: 'AI Social Media Scheduler Pro',
    description: 'Intelligent social media management platform with AI-powered content optimization, optimal posting times, and engagement analytics.',
    shortDescription: 'AI-powered social media scheduling and optimization',
    category: 'SaaS',
    icon: '📱',
    features: [
      'AI Content Optimization',
      'Optimal Posting Time Detection',
      'Multi-Platform Scheduling',
      'Engagement Analytics',
      'Hashtag Research & Suggestions',
      'Content Calendar Management',
      'Team Collaboration Tools',
      'Brand Voice Consistency'
    ],
    pricing: {
      basic: 89,
      pro: 199,
      enterprise: 499
    },
    benefits: [
      'Increase engagement by 150%',
      'Save 10+ hours per week',
      'AI-optimized posting times',
      'Multi-platform management',
      'Detailed performance analytics'
    ],
    useCases: [
      'Social Media Marketing',
      'Brand Management',
      'Content Strategy',
      'Community Building',
      'Influencer Marketing'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Social APIs', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-social-media-scheduler'
    },
    href: '/ai-social-media-scheduler',
    glowColor: 'pink'
  },
  {
    id: 'ai-email-marketing-automation',
    title: 'AI Email Marketing Automation',
    description: 'Advanced email marketing platform with AI-powered personalization, send time optimization, and automated campaign management.',
    shortDescription: 'AI-driven email marketing automation platform',
    category: 'SaaS',
    icon: '📧',
    features: [
      'AI-Powered Personalization',
      'Send Time Optimization',
      'Subject Line A/B Testing',
      'Automated Drip Campaigns',
      'Advanced Segmentation',
      'Performance Analytics',
      'Template Builder',
      'Deliverability Optimization'
    ],
    pricing: {
      basic: 79,
      pro: 179,
      enterprise: 399
    },
    benefits: [
      'Increase open rates by 40%',
      'Automated campaign management',
      'AI-optimized send times',
      'Advanced personalization',
      'Comprehensive analytics'
    ],
    useCases: [
      'Email Marketing Campaigns',
      'Lead Nurturing',
      'Newsletter Management',
      'Customer Retention',
      'Sales Automation'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Email APIs', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-email-marketing-automation'
    },
    href: '/ai-email-marketing-automation',
    glowColor: 'cyan'
  },
  {
    id: 'ai-customer-feedback-analyzer',
    title: 'AI Customer Feedback Analyzer',
    description: 'Intelligent customer feedback analysis platform that automatically processes reviews, surveys, and support tickets to extract actionable insights.',
    shortDescription: 'AI-powered customer feedback analysis and insights',
    category: 'SaaS',
    icon: '💬',
    features: [
      'Sentiment Analysis',
      'Automatic Categorization',
      'Trend Detection',
      'Competitor Analysis',
      'Response Generation',
      'Dashboard & Reports',
      'Multi-Source Integration',
      'Real-time Alerts'
    ],
    pricing: {
      basic: 149,
      pro: 299,
      enterprise: 699
    },
    benefits: [
      'Process 1000+ reviews per hour',
      'Identify trends automatically',
      'Improve customer satisfaction',
      'Competitive intelligence',
      'Actionable insights'
    ],
    useCases: [
      'Customer Experience Management',
      'Product Development',
      'Competitive Analysis',
      'Brand Monitoring',
      'Quality Assurance'
    ],
    technologies: ['Python', 'NLP', 'React', 'Node.js', 'MongoDB', 'AI/ML'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-feedback-analyzer'
    },
    href: '/ai-customer-feedback-analyzer',
    glowColor: 'green'
  },
  {
    id: 'ai-expense-tracker-pro',
    title: 'AI Expense Tracker Pro',
    description: 'Smart expense management platform with AI-powered receipt scanning, automatic categorization, and intelligent budget recommendations.',
    shortDescription: 'AI-powered expense tracking and budget management',
    category: 'SaaS',
    icon: '💰',
    features: [
      'AI Receipt Scanning',
      'Automatic Categorization',
      'Smart Budget Recommendations',
      'Expense Analytics',
      'Tax Preparation Tools',
      'Multi-Currency Support',
      'Team Expense Management',
      'Integration with Accounting Software'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    benefits: [
      'Save 5+ hours per week',
      '99% accurate categorization',
      'Automatic tax preparation',
      'Smart budget insights',
      'Team collaboration'
    ],
    useCases: [
      'Personal Finance Management',
      'Small Business Accounting',
      'Team Expense Tracking',
      'Tax Preparation',
      'Budget Planning'
    ],
    technologies: ['React', 'Node.js', 'OCR', 'AI/ML', 'PostgreSQL', 'Mobile Apps'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-expense-tracker-pro'
    },
    href: '/ai-expense-tracker-pro',
    glowColor: 'yellow'
  },
  {
    id: 'ai-meeting-transcriber',
    title: 'AI Meeting Transcriber Pro',
    description: 'Advanced meeting transcription and analysis platform with real-time transcription, action item extraction, and meeting insights.',
    shortDescription: 'AI-powered meeting transcription and analysis',
    category: 'SaaS',
    icon: '🎤',
    features: [
      'Real-time Transcription',
      'Speaker Identification',
      'Action Item Extraction',
      'Meeting Summaries',
      'Search & Filter',
      'Integration with Calendar',
      'Multi-language Support',
      'Meeting Analytics'
    ],
    pricing: {
      basic: 49,
      pro: 129,
      enterprise: 299
    },
    benefits: [
      '99% transcription accuracy',
      'Extract action items automatically',
      'Searchable meeting history',
      'Multi-language support',
      'Meeting insights and analytics'
    ],
    useCases: [
      'Meeting Documentation',
      'Action Item Tracking',
      'Team Collaboration',
      'Client Meetings',
      'Training Sessions'
    ],
    technologies: ['Speech Recognition', 'NLP', 'React', 'Node.js', 'WebRTC', 'AI/ML'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-meeting-transcriber'
    },
    href: '/ai-meeting-transcriber',
    glowColor: 'blue'
  },
  {
    id: 'ai-website-optimizer',
    title: 'AI Website Optimizer',
    description: 'Intelligent website optimization platform that automatically improves page speed, SEO, and user experience using AI algorithms.',
    shortDescription: 'AI-powered website performance and SEO optimization',
    category: 'SaaS',
    icon: '🚀',
    features: [
      'Automatic Speed Optimization',
      'SEO Analysis & Recommendations',
      'User Experience Optimization',
      'A/B Testing Automation',
      'Performance Monitoring',
      'Content Optimization',
      'Mobile Optimization',
      'Conversion Rate Optimization'
    ],
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599
    },
    benefits: [
      'Improve page speed by 60%',
      'Increase SEO rankings',
      'Boost conversion rates',
      'Automated optimization',
      'Real-time monitoring'
    ],
    useCases: [
      'Website Performance',
      'SEO Optimization',
      'Conversion Rate Optimization',
      'User Experience',
      'Mobile Optimization'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'Performance APIs', 'SEO Tools', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-website-optimizer'
    },
    href: '/ai-website-optimizer',
    glowColor: 'purple'
  },
  {
    id: 'ai-lead-scoring-platform',
    title: 'AI Lead Scoring Platform',
    description: 'Intelligent lead scoring and qualification platform that uses AI to identify high-value prospects and optimize sales processes.',
    shortDescription: 'AI-powered lead scoring and sales optimization',
    category: 'SaaS',
    icon: '🎯',
    features: [
      'AI Lead Scoring',
      'Behavioral Analysis',
      'Predictive Analytics',
      'Sales Pipeline Optimization',
      'Lead Nurturing Automation',
      'CRM Integration',
      'Performance Analytics',
      'Custom Scoring Models'
    ],
    pricing: {
      basic: 199,
      pro: 449,
      enterprise: 999
    },
    benefits: [
      'Increase conversion by 35%',
      'Identify high-value leads',
      'Automate lead qualification',
      'Optimize sales processes',
      'Predictive lead insights'
    ],
    useCases: [
      'Sales Lead Management',
      'Marketing Automation',
      'Sales Process Optimization',
      'Lead Qualification',
      'Revenue Optimization'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'PostgreSQL', 'CRM APIs', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-lead-scoring-platform'
    },
    href: '/ai-lead-scoring-platform',
    glowColor: 'green'
  },
  {
    id: 'ai-document-workflow-automation',
    title: 'AI Document Workflow Automation',
    description: 'Intelligent document processing and workflow automation platform that streamlines document handling and approval processes.',
    shortDescription: 'AI-powered document workflow and approval automation',
    category: 'SaaS',
    icon: '📄',
    features: [
      'Document OCR & Processing',
      'Workflow Automation',
      'Digital Signatures',
      'Approval Management',
      'Document Version Control',
      'Compliance Tracking',
      'Integration APIs',
      'Audit Trail'
    ],
    pricing: {
      basic: 159,
      pro: 349,
      enterprise: 799
    },
    benefits: [
      'Reduce processing time by 80%',
      'Eliminate manual errors',
      'Streamline approvals',
      'Ensure compliance',
      'Complete audit trail'
    ],
    useCases: [
      'Document Management',
      'Approval Workflows',
      'Compliance Processing',
      'Contract Management',
      'Invoice Processing'
    ],
    technologies: ['OCR', 'AI/ML', 'React', 'Node.js', 'Workflow Engine', 'Blockchain'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-document-workflow-automation'
    },
    href: '/ai-document-workflow-automation',
    glowColor: 'cyan'
  },
  {
    id: 'ai-customer-churn-predictor',
    title: 'AI Customer Churn Predictor',
    description: 'Advanced customer retention platform that uses AI to predict churn risk and automatically trigger retention campaigns.',
    shortDescription: 'AI-powered customer churn prediction and retention',
    category: 'SaaS',
    icon: '📈',
    features: [
      'Churn Risk Prediction',
      'Behavioral Analysis',
      'Retention Campaign Automation',
      'Customer Segmentation',
      'Intervention Recommendations',
      'Success Metrics Tracking',
      'CRM Integration',
      'Real-time Alerts'
    ],
    pricing: {
      basic: 299,
      pro: 699,
      enterprise: 1499
    },
    benefits: [
      'Reduce churn by 40%',
      'Predict churn 30 days early',
      'Automated retention campaigns',
      'Increase customer lifetime value',
      'Data-driven insights'
    ],
    useCases: [
      'Customer Retention',
      'Churn Prevention',
      'Customer Success',
      'Revenue Protection',
      'Lifetime Value Optimization'
    ],
    technologies: ['AI/ML', 'Predictive Analytics', 'React', 'Node.js', 'PostgreSQL', 'CRM APIs'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-churn-predictor'
    },
    href: '/ai-customer-churn-predictor',
    glowColor: 'red'
  },
  {
    id: 'ai-competitor-analysis-tool',
    title: 'AI Competitor Analysis Tool',
    description: 'Intelligent competitive intelligence platform that automatically monitors competitors, analyzes market trends, and provides strategic insights.',
    shortDescription: 'AI-powered competitive intelligence and market analysis',
    category: 'SaaS',
    icon: '🔍',
    features: [
      'Competitor Monitoring',
      'Price Tracking',
      'Feature Comparison',
      'Market Trend Analysis',
      'SWOT Analysis',
      'Alert System',
      'Report Generation',
      'Strategic Recommendations'
    ],
    pricing: {
      basic: 179,
      pro: 399,
      enterprise: 899
    },
    benefits: [
      'Stay ahead of competition',
      'Automated market monitoring',
      'Strategic insights',
      'Price optimization',
      'Market opportunity identification'
    ],
    useCases: [
      'Competitive Intelligence',
      'Market Research',
      'Strategic Planning',
      'Pricing Strategy',
      'Product Development'
    ],
    technologies: ['Web Scraping', 'AI/ML', 'React', 'Node.js', 'MongoDB', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-competitor-analysis-tool'
    },
    href: '/ai-competitor-analysis-tool',
    glowColor: 'purple'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};