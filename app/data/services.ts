export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  category: 'ai' | 'it' | 'micro-saas' | 'quantum' | 'blockchain' | 'iot' | 'cybersecurity' | 'automation';
  pricing: {
    starting: number;
    currency: string;
    period: string;
    custom?: boolean;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  marketPrice: number;
  ourPrice: number;
  savings: number;
  link: string;
  isNew?: boolean;
  isPopular?: boolean;
  isEnterprise?: boolean;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-pro',
    name: 'AI Chatbot Pro',
    description: 'Advanced conversational AI chatbot with natural language processing, multi-language support, and seamless integration capabilities.',
    shortDescription: 'Intelligent chatbot with NLP and multi-language support',
    icon: '🤖',
    category: 'ai',
    pricing: { starting: 199, currency: 'USD', period: 'month' },
    features: [
      'Natural Language Processing',
      'Multi-language Support (50+ languages)',
      'Custom Training on Your Data',
      'API Integration',
      'Analytics Dashboard',
      '24/7 Support'
    ],
    benefits: [
      'Reduce customer service costs by 60%',
      'Handle 1000+ conversations simultaneously',
      'Improve response time by 95%',
      'Available 24/7 without breaks'
    ],
    useCases: [
      'Customer Support Automation',
      'Lead Qualification',
      'FAQ Handling',
      'Appointment Scheduling'
    ],
    marketPrice: 500,
    ourPrice: 199,
    savings: 301,
    link: '/ai-chatbot-pro'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Revolutionary AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
    shortDescription: 'AI-powered content creation for all your marketing needs',
    icon: '✍️',
    category: 'ai',
    pricing: { starting: 99, currency: 'USD', period: 'month' },
    features: [
      'Blog Post Generation',
      'Social Media Content',
      'Email Marketing Copy',
      'SEO Optimization',
      'Brand Voice Training',
      'Plagiarism Detection'
    ],
    benefits: [
      'Save 80% of content creation time',
      'Generate 100+ articles per month',
      'SEO-optimized content',
      'Consistent brand voice'
    ],
    useCases: [
      'Content Marketing',
      'Social Media Management',
      'Email Campaigns',
      'Blog Management'
    ],
    marketPrice: 300,
    ourPrice: 99,
    savings: 201,
    link: '/ai-content-generator'
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics',
    description: 'Advanced AI-powered data analytics platform that provides real-time insights, predictive analytics, and automated reporting.',
    shortDescription: 'AI-driven analytics with predictive insights and automated reporting',
    icon: '📊',
    category: 'ai',
    pricing: { starting: 299, currency: 'USD', period: 'month' },
    features: [
      'Real-time Data Processing',
      'Predictive Analytics',
      'Automated Reports',
      'Custom Dashboards',
      'Data Visualization',
      'Machine Learning Models'
    ],
    benefits: [
      'Make data-driven decisions faster',
      'Identify trends before competitors',
      'Reduce manual reporting by 90%',
      'Increase revenue by 25%'
    ],
    useCases: [
      'Business Intelligence',
      'Sales Forecasting',
      'Customer Behavior Analysis',
      'Performance Monitoring'
    ],
    marketPrice: 800,
    ourPrice: 299,
    savings: 501,
    link: '/ai-data-analytics'
  },

  // Micro SAAS Services
  {
    id: 'url-shortener-pro',
    name: 'URL Shortener Pro',
    description: 'Professional URL shortening service with custom domains, analytics, QR codes, and advanced link management capabilities.',
    shortDescription: 'Professional URL shortening with analytics and custom domains',
    icon: '🔗',
    category: 'micro-saas',
    pricing: { starting: 29, currency: 'USD', period: 'month' },
    features: [
      'Custom Domain Support',
      'Advanced Analytics',
      'QR Code Generation',
      'Bulk Link Management',
      'Password Protection',
      'Expiration Dates'
    ],
    benefits: [
      'Professional branded links',
      'Detailed click analytics',
      'Easy link management',
      'Increased click-through rates'
    ],
    useCases: [
      'Social Media Marketing',
      'Email Campaigns',
      'Print Materials',
      'QR Code Campaigns'
    ],
    marketPrice: 99,
    ourPrice: 29,
    savings: 70,
    link: '/url-shortener-pro'
  },
  {
    id: 'form-builder-ai',
    name: 'Form Builder AI',
    description: 'Intelligent form builder with AI-powered field suggestions, conditional logic, and seamless integrations.',
    shortDescription: 'AI-powered form builder with smart field suggestions',
    icon: '📝',
    category: 'micro-saas',
    pricing: { starting: 49, currency: 'USD', period: 'month' },
    features: [
      'AI Field Suggestions',
      'Conditional Logic',
      '100+ Integrations',
      'Custom Styling',
      'Analytics Dashboard',
      'Mobile Responsive'
    ],
    benefits: [
      'Create forms 10x faster',
      'Higher conversion rates',
      'Professional appearance',
      'Easy integration'
    ],
    useCases: [
      'Lead Generation',
      'Customer Feedback',
      'Event Registration',
      'Survey Collection'
    ],
    marketPrice: 150,
    ourPrice: 49,
    savings: 101,
    link: '/form-builder-ai'
  },
  {
    id: 'screenshot-api',
    name: 'Screenshot API',
    description: 'High-performance screenshot API service for capturing full-page screenshots, PDFs, and automated visual testing.',
    shortDescription: 'High-performance screenshot API for websites and applications',
    icon: '📸',
    category: 'micro-saas',
    pricing: { starting: 39, currency: 'USD', period: 'month' },
    features: [
      'Full-page Screenshots',
      'PDF Generation',
      'Mobile Device Simulation',
      'Batch Processing',
      'REST API',
      'Webhook Support'
    ],
    benefits: [
      'Automate visual testing',
      'Generate documentation',
      'Monitor website changes',
      'Create marketing materials'
    ],
    useCases: [
      'Visual Testing',
      'Documentation',
      'Marketing Materials',
      'Website Monitoring'
    ],
    marketPrice: 120,
    ourPrice: 39,
    savings: 81,
    link: '/screenshot-api'
  },
  {
    id: 'email-validator',
    name: 'Email Validator Pro',
    description: 'Advanced email validation service with real-time verification, bulk processing, and comprehensive deliverability checks.',
    shortDescription: 'Advanced email validation with real-time verification',
    icon: '📧',
    category: 'micro-saas',
    pricing: { starting: 19, currency: 'USD', period: 'month' },
    features: [
      'Real-time Validation',
      'Bulk Processing',
      'Deliverability Checks',
      'API Integration',
      'Detailed Reports',
      '99.9% Accuracy'
    ],
    benefits: [
      'Reduce bounce rates by 95%',
      'Improve email deliverability',
      'Save on email costs',
      'Maintain clean lists'
    ],
    useCases: [
      'Email Marketing',
      'Lead Validation',
      'Data Cleaning',
      'Compliance'
    ],
    marketPrice: 75,
    ourPrice: 19,
    savings: 56,
    link: '/email-validator'
  },
  {
    id: 'qr-generator',
    name: 'QR Generator Pro',
    description: 'Professional QR code generator with custom designs, analytics tracking, and dynamic QR codes for marketing campaigns.',
    shortDescription: 'Professional QR code generator with analytics and custom designs',
    icon: '📱',
    category: 'micro-saas',
    pricing: { starting: 25, currency: 'USD', period: 'month' },
    features: [
      'Custom QR Designs',
      'Analytics Tracking',
      'Dynamic QR Codes',
      'Bulk Generation',
      'API Access',
      'White-label Options'
    ],
    benefits: [
      'Track QR code performance',
      'Custom branded designs',
      'Easy campaign management',
      'Professional appearance'
    ],
    useCases: [
      'Marketing Campaigns',
      'Event Management',
      'Product Packaging',
      'Restaurant Menus'
    ],
    marketPrice: 80,
    ourPrice: 25,
    savings: 55,
    link: '/qr-generator'
  },

  // IT Services
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Pro',
    description: 'Complete cloud migration service with zero downtime, automated testing, and 24/7 support for seamless transition.',
    shortDescription: 'Zero-downtime cloud migration with automated testing',
    icon: '☁️',
    category: 'it',
    pricing: { starting: 2500, currency: 'USD', period: 'month' },
    features: [
      'Zero Downtime Migration',
      'Automated Testing',
      'Data Security',
      'Performance Optimization',
      '24/7 Support',
      'Cost Optimization'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve scalability',
      'Enhanced security',
      'Better performance'
    ],
    useCases: [
      'AWS Migration',
      'Azure Migration',
      'Google Cloud Migration',
      'Hybrid Cloud Setup'
    ],
    marketPrice: 5000,
    ourPrice: 2500,
    savings: 2500,
    link: '/cloud-migration'
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation',
    description: 'Complete DevOps automation service with CI/CD pipelines, infrastructure as code, and monitoring solutions.',
    shortDescription: 'Complete DevOps automation with CI/CD and monitoring',
    icon: '⚙️',
    category: 'it',
    pricing: { starting: 1500, currency: 'USD', period: 'month' },
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Container Orchestration',
      'Monitoring & Alerting',
      'Security Scanning',
      'Automated Testing'
    ],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment errors by 90%',
      'Improve team productivity',
      'Better code quality'
    ],
    useCases: [
      'Software Development',
      'Microservices Architecture',
      'Container Management',
      'Continuous Integration'
    ],
    marketPrice: 3000,
    ourPrice: 1500,
    savings: 1500,
    link: '/devops-automation'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Audit',
    description: 'Comprehensive cybersecurity audit with penetration testing, vulnerability assessment, and compliance reporting.',
    shortDescription: 'Comprehensive security audit with penetration testing',
    icon: '🔒',
    category: 'cybersecurity',
    pricing: { starting: 2000, currency: 'USD', period: 'month' },
    features: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Compliance Auditing',
      'Security Training',
      'Incident Response',
      'Regular Monitoring'
    ],
    benefits: [
      'Identify security vulnerabilities',
      'Meet compliance requirements',
      'Protect sensitive data',
      'Reduce security risks'
    ],
    useCases: [
      'PCI DSS Compliance',
      'HIPAA Compliance',
      'SOC 2 Auditing',
      'General Security Assessment'
    ],
    marketPrice: 5000,
    ourPrice: 2000,
    savings: 3000,
    link: '/cybersecurity-audit'
  },

  // Quantum Computing
  {
    id: 'quantum-optimization',
    name: 'Quantum Optimization',
    description: 'Quantum computing solutions for complex optimization problems, drug discovery, and financial modeling.',
    shortDescription: 'Quantum solutions for complex optimization and modeling',
    icon: '⚛️',
    category: 'quantum',
    pricing: { starting: 10000, currency: 'USD', period: 'month', custom: true },
    features: [
      'Quantum Algorithm Development',
      'Optimization Problems',
      'Drug Discovery',
      'Financial Modeling',
      'Research Collaboration',
      'Custom Solutions'
    ],
    benefits: [
      'Solve impossible problems',
      'Exponential speed improvements',
      'Breakthrough discoveries',
      'Competitive advantage'
    ],
    useCases: [
      'Drug Discovery',
      'Financial Risk Analysis',
      'Supply Chain Optimization',
      'Cryptography'
    ],
    marketPrice: 50000,
    ourPrice: 10000,
    savings: 40000,
    link: '/quantum-optimization'
  },

  // Blockchain & Web3
  {
    id: 'blockchain-development',
    name: 'Blockchain Development',
    description: 'Complete blockchain development services including smart contracts, DApps, and DeFi solutions.',
    shortDescription: 'Complete blockchain development with smart contracts and DApps',
    icon: '⛓️',
    category: 'blockchain',
    pricing: { starting: 5000, currency: 'USD', period: 'month' },
    features: [
      'Smart Contract Development',
      'DApp Development',
      'DeFi Solutions',
      'NFT Marketplaces',
      'Token Development',
      'Security Auditing'
    ],
    benefits: [
      'Decentralized solutions',
      'Transparent transactions',
      'Reduced intermediaries',
      'Enhanced security'
    ],
    useCases: [
      'DeFi Platforms',
      'NFT Marketplaces',
      'Supply Chain Tracking',
      'Digital Identity'
    ],
    marketPrice: 15000,
    ourPrice: 5000,
    savings: 10000,
    link: '/blockchain-development'
  },

  // IoT & Edge Computing
  {
    id: 'iot-platform',
    name: 'IoT Platform',
    description: 'Comprehensive IoT platform with device management, real-time analytics, and edge computing capabilities.',
    shortDescription: 'Complete IoT platform with device management and analytics',
    icon: '🌐',
    category: 'iot',
    pricing: { starting: 800, currency: 'USD', period: 'month' },
    features: [
      'Device Management',
      'Real-time Analytics',
      'Edge Computing',
      'Data Visualization',
      'API Integration',
      'Security Management'
    ],
    benefits: [
      'Monitor thousands of devices',
      'Real-time insights',
      'Predictive maintenance',
      'Reduced operational costs'
    ],
    useCases: [
      'Smart Manufacturing',
      'Smart Cities',
      'Agriculture Monitoring',
      'Fleet Management'
    ],
    marketPrice: 2000,
    ourPrice: 800,
    savings: 1200,
    link: '/iot-platform'
  }
];

export const getServicesByCategory = (category: Service['category']) => 
  services.filter(service => service.category === category);

export const getPopularServices = () => 
  services.filter(service => service.isPopular);

export const getNewServices = () => 
  services.filter(service => service.isNew);

export const getEnterpriseServices = () => 
  services.filter(service => service.isEnterprise);