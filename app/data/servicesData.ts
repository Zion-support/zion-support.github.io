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

  // Additional AI Services
  {
    id: 'ai-voice-assistant-platform',
    title: 'AI Voice Assistant Platform',
    description: 'Enterprise-grade voice assistant platform with natural language processing, multi-language support, and custom voice training capabilities.',
    shortDescription: 'Custom voice assistant solutions for businesses',
    category: 'AI',
    icon: '🎤',
    features: [
      'Natural Language Processing',
      'Multi-language Support (50+ languages)',
      'Custom Voice Training',
      'Business Integration APIs',
      'Analytics Dashboard',
      'Real-time Processing',
      'Voice Command Recognition',
      'Text-to-Speech Synthesis'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 2499
    },
    benefits: [
      '95% voice recognition accuracy',
      '24/7 voice assistance',
      'Multi-language support',
      'Custom voice branding',
      'Seamless business integration'
    ],
    useCases: [
      'Customer Service Automation',
      'Voice Commands for Apps',
      'Accessibility Solutions',
      'Smart Office Automation',
      'Voice-Enabled E-commerce'
    ],
    technologies: ['OpenAI Whisper', 'Google Speech API', 'Python', 'WebRTC', 'React', 'Node.js'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-voice-assistant-platform'
    },
    href: '/ai-voice-assistant-platform',
    glowColor: 'purple'
  },
  {
    id: 'ai-video-analytics-pro',
    title: 'AI Video Analytics Pro',
    description: 'Advanced video analytics platform with real-time object detection, facial recognition, and behavioral analysis for security and business intelligence.',
    shortDescription: 'AI-powered video analysis and insights',
    category: 'AI',
    icon: '📹',
    features: [
      'Real-time Object Detection',
      'Facial Recognition',
      'Behavioral Analysis',
      'Motion Tracking',
      'Crowd Analytics',
      'License Plate Recognition',
      'Emotion Detection',
      'Custom Alert System'
    ],
    pricing: {
      basic: 499,
      pro: 1299,
      enterprise: 3499
    },
    benefits: [
      'Real-time security monitoring',
      'Automated threat detection',
      'Customer behavior insights',
      'Reduced security costs',
      '24/7 surveillance'
    ],
    useCases: [
      'Retail Analytics',
      'Security Monitoring',
      'Traffic Management',
      'Event Analysis',
      'Smart City Solutions'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'YOLO', 'Python', 'FFmpeg', 'React'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-video-analytics-pro'
    },
    href: '/ai-video-analytics-pro',
    glowColor: 'cyan'
  },
  {
    id: 'ai-document-intelligence',
    title: 'AI Document Intelligence',
    description: 'Intelligent document processing platform with OCR, data extraction, classification, and automated workflow management for enterprise document handling.',
    shortDescription: 'AI-powered document processing and automation',
    category: 'AI',
    icon: '📄',
    features: [
      'Advanced OCR Technology',
      'Document Classification',
      'Data Extraction & Validation',
      'Workflow Automation',
      'Version Control',
      'Compliance Monitoring',
      'Multi-format Support',
      'API Integration'
    ],
    pricing: {
      basic: 199,
      pro: 599,
      enterprise: 1599
    },
    benefits: [
      '90% processing accuracy',
      '80% time savings',
      'Automated workflows',
      'Compliance assurance',
      'Multi-format support'
    ],
    useCases: [
      'Invoice Processing',
      'Contract Management',
      'Legal Document Review',
      'Insurance Claims',
      'Medical Records'
    ],
    technologies: ['Tesseract OCR', 'AWS Textract', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-document-intelligence'
    },
    href: '/ai-document-intelligence',
    glowColor: 'green'
  },

  // Additional Micro SaaS Services
  {
    id: 'ai-social-media-manager',
    title: 'AI Social Media Manager',
    description: 'Intelligent social media management platform with AI-powered content creation, optimal posting times, and engagement optimization.',
    shortDescription: 'AI-powered social media management and optimization',
    category: 'SaaS',
    icon: '📱',
    features: [
      'AI Content Generation',
      'Optimal Posting Times',
      'Hashtag Optimization',
      'Engagement Analytics',
      'Multi-platform Management',
      'Sentiment Analysis',
      'Competitor Analysis',
      'Automated Responses'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799
    },
    benefits: [
      '200% engagement increase',
      'Automated content creation',
      'Optimal posting timing',
      'Multi-platform management',
      'Real-time analytics'
    ],
    useCases: [
      'Social Media Marketing',
      'Brand Management',
      'Community Building',
      'Content Strategy',
      'Influencer Marketing'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs', 'AI/ML', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    href: '/ai-social-media-manager',
    glowColor: 'pink'
  },
  {
    id: 'ai-email-marketing-suite',
    title: 'AI Email Marketing Suite',
    description: 'Advanced email marketing platform with AI-powered personalization, send time optimization, and performance analytics for maximum engagement.',
    shortDescription: 'AI-powered email marketing automation',
    category: 'SaaS',
    icon: '📧',
    features: [
      'AI Personalization',
      'Send Time Optimization',
      'Subject Line Testing',
      'Advanced Segmentation',
      'A/B Testing',
      'Performance Analytics',
      'Template Generator',
      'Deliverability Optimization'
    ],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999
    },
    benefits: [
      '40% higher open rates',
      'Personalized content',
      'Optimized send times',
      'Advanced analytics',
      'Automated optimization'
    ],
    useCases: [
      'Email Campaigns',
      'Newsletter Management',
      'Lead Nurturing',
      'Customer Retention',
      'E-commerce Marketing'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'AI/ML', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-email-marketing-suite'
    },
    href: '/ai-email-marketing-suite',
    glowColor: 'blue'
  },
  {
    id: 'ai-customer-insights-platform',
    title: 'AI Customer Insights Platform',
    description: 'Comprehensive customer analytics platform with AI-powered insights, sentiment analysis, and predictive customer behavior modeling.',
    shortDescription: 'AI-driven customer insights and analytics',
    category: 'SaaS',
    icon: '👥',
    features: [
      'Customer Segmentation',
      'Sentiment Analysis',
      'Churn Prediction',
      'Lifetime Value Analysis',
      'Behavioral Analytics',
      'Personalization Engine',
      'Real-time Dashboards',
      'API Integration'
    ],
    pricing: {
      basic: 249,
      pro: 699,
      enterprise: 1899
    },
    benefits: [
      '35% increase in retention',
      'Predictive insights',
      'Real-time analytics',
      'Automated segmentation',
      'Personalized experiences'
    ],
    useCases: [
      'Customer Analytics',
      'Retention Strategies',
      'Personalization',
      'Marketing Optimization',
      'Product Development'
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis', 'D3.js'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-insights-platform'
    },
    href: '/ai-customer-insights-platform',
    glowColor: 'yellow'
  },

  // Additional IT Services
  {
    id: 'devops-automation-suite',
    title: 'DevOps Automation Suite',
    description: 'Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring, and automated deployment capabilities.',
    shortDescription: 'Comprehensive DevOps automation and deployment',
    category: 'IT',
    icon: '⚙️',
    features: [
      'CI/CD Pipeline Automation',
      'Infrastructure as Code',
      'Container Orchestration',
      'Automated Testing',
      'Monitoring & Alerting',
      'Security Scanning',
      'Multi-cloud Support',
      'Disaster Recovery'
    ],
    pricing: {
      basic: 2000,
      pro: 5000,
      enterprise: 15000
    },
    benefits: [
      '50% faster deployments',
      'Reduced manual errors',
      'Improved reliability',
      'Cost optimization',
      '24/7 monitoring'
    ],
    useCases: [
      'Software Development',
      'Cloud Migration',
      'Infrastructure Management',
      'Security Compliance',
      'Performance Optimization'
    ],
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS', 'Azure'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/devops-automation-suite'
    },
    href: '/devops-automation-suite',
    glowColor: 'cyan'
  },
  {
    id: 'api-management-platform',
    title: 'API Management Platform',
    description: 'Enterprise-grade API management solution with gateway, analytics, security, and developer portal for comprehensive API lifecycle management.',
    shortDescription: 'Complete API management and governance platform',
    category: 'IT',
    icon: '🔗',
    features: [
      'API Gateway',
      'Rate Limiting & Throttling',
      'Authentication & Authorization',
      'API Analytics',
      'Developer Portal',
      'API Documentation',
      'Version Management',
      'Security Policies'
    ],
    pricing: {
      basic: 999,
      pro: 2499,
      enterprise: 5999
    },
    benefits: [
      'Centralized API management',
      'Enhanced security',
      'Developer productivity',
      'API analytics',
      'Scalable architecture'
    ],
    useCases: [
      'Microservices Architecture',
      'Third-party Integrations',
      'Mobile App Backend',
      'Partner APIs',
      'Legacy System Modernization'
    ],
    technologies: ['Kong', 'Nginx', 'Redis', 'PostgreSQL', 'React', 'Node.js'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/api-management-platform'
    },
    href: '/api-management-platform',
    glowColor: 'purple'
  },
  {
    id: 'database-optimization-service',
    title: 'Database Optimization Service',
    description: 'Comprehensive database optimization service with performance tuning, query optimization, and automated maintenance for maximum efficiency.',
    shortDescription: 'Database performance optimization and maintenance',
    category: 'IT',
    icon: '🗄️',
    features: [
      'Performance Analysis',
      'Query Optimization',
      'Index Optimization',
      'Automated Maintenance',
      'Capacity Planning',
      'Backup & Recovery',
      'Security Hardening',
      'Monitoring & Alerting'
    ],
    pricing: {
      basic: 1500,
      pro: 3500,
      enterprise: 8500
    },
    benefits: [
      '300% performance improvement',
      'Reduced downtime',
      'Automated maintenance',
      'Cost optimization',
      'Enhanced security'
    ],
    useCases: [
      'Performance Optimization',
      'Database Migration',
      'Backup Strategy',
      'Security Enhancement',
      'Capacity Planning'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Python', 'Bash'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/database-optimization-service'
    },
    href: '/database-optimization-service',
    glowColor: 'green'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};