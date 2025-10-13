// Comprehensive Services Data for Zion Tech Group
export interface Service {
  id: string;
  name: string;
  category: 'ai' | 'it' | 'micro-saas' | 'cybersecurity' | 'cloud' | '5g' | 'blockchain' | 'iot';
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: number;
    professional: number;
    enterprise: number;
  };
  capabilities: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder Pro',
    category: 'ai',
    description: 'Build intelligent, conversational AI chatbots for customer support, sales, and engagement with our no-code platform.',
    features: [
      'Drag-and-drop conversation designer',
      'Multi-language support (50+ languages)',
      'Integration with 100+ platforms',
      'Advanced NLP and sentiment analysis',
      'Real-time analytics dashboard',
      'Custom voice and personality settings',
      'API access for developers',
      'White-label solutions'
    ],
    benefits: [
      'Reduce customer support costs by 60%',
      '24/7 availability for customer queries',
      'Improve response time by 90%',
      'Scale customer service without additional staff',
      'Collect valuable customer insights',
      'Increase conversion rates by 35%'
    ],
    pricing: {
      basic: 99,
      professional: 299,
      enterprise: 999
    },
    capabilities: [
      'Natural language understanding',
      'Context-aware conversations',
      'Multi-channel deployment',
      'Advanced analytics and reporting',
      'Custom integrations',
      'A/B testing for conversations'
    ],
    useCases: [
      'Customer support automation',
      'Lead qualification and nurturing',
      'E-commerce product recommendations',
      'Appointment scheduling',
      'FAQ automation',
      'Order tracking and updates'
    ],
    technologies: ['OpenAI GPT-4', 'Google Dialogflow', 'Microsoft Bot Framework', 'React', 'Node.js', 'MongoDB'],
    link: '/ai-chatbot-builder',
    icon: 'ChatBubbleLeftRightIcon',
    isPopular: true
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Studio',
    category: 'ai',
    description: 'Generate high-quality, SEO-optimized content at scale using advanced AI models for blogs, social media, and marketing.',
    features: [
      '50+ content templates',
      'SEO optimization suggestions',
      'Brand voice customization',
      'Multi-language content generation',
      'Plagiarism detection',
      'Content calendar planning',
      'Team collaboration tools',
      'Performance analytics'
    ],
    benefits: [
      'Save 80% of content creation time',
      'Increase content output by 500%',
      'Improve SEO rankings by 40%',
      'Maintain consistent brand voice',
      'Reduce content creation costs by 70%',
      'Scale content marketing efforts'
    ],
    pricing: {
      basic: 79,
      professional: 199,
      enterprise: 599
    },
    capabilities: [
      'Blog post generation',
      'Social media content creation',
      'Email marketing campaigns',
      'Product descriptions',
      'Ad copy generation',
      'Technical documentation'
    ],
    useCases: [
      'Blog content automation',
      'Social media management',
      'Email marketing campaigns',
      'E-commerce product descriptions',
      'Technical documentation',
      'Marketing copy creation'
    ],
    technologies: ['GPT-4', 'Claude AI', 'BERT', 'React', 'Python', 'PostgreSQL'],
    link: '/ai-content-generation',
    icon: 'DocumentTextIcon',
    isNew: true
  },
  {
    id: 'ai-data-analytics',
    name: 'AI-Powered Business Intelligence',
    category: 'ai',
    description: 'Transform raw data into actionable insights with our AI-driven analytics platform that predicts trends and optimizes business decisions.',
    features: [
      'Real-time data visualization',
      'Predictive analytics and forecasting',
      'Custom dashboard creation',
      'Automated report generation',
      'Data source integration (100+ connectors)',
      'Machine learning model deployment',
      'Collaborative workspace',
      'Mobile app access'
    ],
    benefits: [
      'Make data-driven decisions 3x faster',
      'Identify business opportunities early',
      'Reduce manual reporting by 90%',
      'Improve forecast accuracy by 60%',
      'Increase operational efficiency by 45%',
      'Save 20+ hours per week on analysis'
    ],
    pricing: {
      basic: 149,
      professional: 399,
      enterprise: 1299
    },
    capabilities: [
      'Advanced data visualization',
      'Predictive modeling',
      'Anomaly detection',
      'Trend analysis',
      'Custom KPI tracking',
      'Automated insights generation'
    ],
    useCases: [
      'Sales performance analysis',
      'Customer behavior insights',
      'Financial forecasting',
      'Supply chain optimization',
      'Marketing campaign analysis',
      'Operational efficiency monitoring'
    ],
    technologies: ['Python', 'TensorFlow', 'Tableau', 'Apache Spark', 'React', 'PostgreSQL'],
    link: '/ai-data-analytics',
    icon: 'ChartBarIcon'
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Suite',
    category: 'cybersecurity',
    description: 'Advanced AI-powered cybersecurity solution that detects, prevents, and responds to threats in real-time across your entire infrastructure.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis and anomaly detection',
      'Automated incident response',
      'Zero-day attack prevention',
      'Compliance monitoring (GDPR, HIPAA, SOX)',
      'Security orchestration and automation',
      'Threat intelligence integration',
      '24/7 security operations center'
    ],
    benefits: [
      'Reduce security incidents by 85%',
      'Detect threats 10x faster than traditional methods',
      'Automate 90% of security responses',
      'Ensure compliance with regulations',
      'Reduce false positives by 70%',
      'Lower security operation costs by 60%'
    ],
    pricing: {
      basic: 199,
      professional: 599,
      enterprise: 1999
    },
    capabilities: [
      'Network security monitoring',
      'Endpoint protection',
      'Email security scanning',
      'Cloud security assessment',
      'Vulnerability management',
      'Security awareness training'
    ],
    useCases: [
      'Enterprise security monitoring',
      'SMB cybersecurity protection',
      'Cloud infrastructure security',
      'Compliance management',
      'Incident response automation',
      'Security team augmentation'
    ],
    technologies: ['Machine Learning', 'SIEM', 'SOAR', 'Python', 'Elasticsearch', 'Kubernetes'],
    link: '/ai-cybersecurity',
    icon: 'ShieldCheckIcon',
    isPopular: true
  },

  // Micro SaaS Services
  {
    id: 'micro-saas-inventory',
    name: 'Smart Inventory Manager',
    category: 'micro-saas',
    description: 'Complete inventory management solution for small to medium businesses with AI-powered demand forecasting and automated reordering.',
    features: [
      'Real-time inventory tracking',
      'AI demand forecasting',
      'Automated reorder points',
      'Multi-location support',
      'Barcode scanning integration',
      'Supplier management',
      'Cost tracking and analysis',
      'Mobile app access'
    ],
    benefits: [
      'Reduce stockouts by 80%',
      'Lower inventory costs by 25%',
      'Improve cash flow management',
      'Eliminate manual counting errors',
      'Optimize supplier relationships',
      'Increase operational efficiency'
    ],
    pricing: {
      basic: 49,
      professional: 99,
      enterprise: 199
    },
    capabilities: [
      'Inventory tracking and monitoring',
      'Demand forecasting',
      'Automated purchasing',
      'Supplier performance analysis',
      'Cost optimization',
      'Reporting and analytics'
    ],
    useCases: [
      'Retail inventory management',
      'Manufacturing parts tracking',
      'E-commerce stock control',
      'Restaurant supply management',
      'Warehouse operations',
      'Multi-channel selling'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'REST API', 'WebSocket'],
    link: '/micro-saas-inventory',
    icon: 'CubeIcon'
  },
  {
    id: 'micro-saas-crm',
    name: 'AI-Powered CRM Pro',
    category: 'micro-saas',
    description: 'Intelligent customer relationship management system with AI-driven insights, automated follow-ups, and predictive lead scoring.',
    features: [
      'Contact and lead management',
      'AI-powered lead scoring',
      'Automated email sequences',
      'Sales pipeline tracking',
      'Customer communication history',
      'Task and appointment scheduling',
      'Custom field creation',
      'Advanced reporting and analytics'
    ],
    benefits: [
      'Increase sales by 35%',
      'Improve lead conversion by 50%',
      'Reduce manual data entry by 90%',
      'Enhance customer relationships',
      'Streamline sales processes',
      'Make data-driven decisions'
    ],
    pricing: {
      basic: 29,
      professional: 79,
      enterprise: 199
    },
    capabilities: [
      'Lead management and scoring',
      'Sales pipeline automation',
      'Customer communication tracking',
      'Task and activity management',
      'Performance analytics',
      'Integration with email and calendar'
    ],
    useCases: [
      'Small business sales management',
      'Real estate lead tracking',
      'Service business customer management',
      'E-commerce customer insights',
      'B2B sales automation',
      'Customer support integration'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Email API', 'Calendar API'],
    link: '/micro-saas-crm',
    icon: 'UserGroupIcon',
    isNew: true
  },
  {
    id: 'micro-saas-project',
    name: 'Project Management Hub',
    category: 'micro-saas',
    description: 'Comprehensive project management solution with team collaboration, time tracking, resource planning, and AI-powered project insights.',
    features: [
      'Project planning and scheduling',
      'Team collaboration tools',
      'Time tracking and reporting',
      'Resource allocation and planning',
      'Gantt charts and Kanban boards',
      'File sharing and document management',
      'Budget tracking and cost analysis',
      'Mobile app for on-the-go management'
    ],
    benefits: [
      'Improve project delivery by 40%',
      'Reduce project costs by 25%',
      'Enhance team productivity by 50%',
      'Better resource utilization',
      'Improved client communication',
      'Real-time project visibility'
    ],
    pricing: {
      basic: 39,
      professional: 89,
      enterprise: 179
    },
    capabilities: [
      'Project planning and tracking',
      'Team collaboration',
      'Time and resource management',
      'Budget and cost control',
      'Progress monitoring',
      'Client communication tools'
    ],
    useCases: [
      'Software development projects',
      'Marketing campaign management',
      'Construction project tracking',
      'Event planning and execution',
      'Consulting project management',
      'Creative agency workflows'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Chart.js', 'PDF Generator'],
    link: '/micro-saas-project',
    icon: 'ClipboardDocumentListIcon'
  },

  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    category: 'cloud',
    description: 'Comprehensive cloud infrastructure services including migration, optimization, and management for AWS, Azure, and Google Cloud.',
    features: [
      'Cloud migration planning and execution',
      'Infrastructure optimization',
      'Cost management and optimization',
      'Security and compliance setup',
      'Disaster recovery planning',
      '24/7 monitoring and support',
      'Auto-scaling configuration',
      'Multi-cloud strategy implementation'
    ],
    benefits: [
      'Reduce infrastructure costs by 30%',
      'Improve system reliability by 99.9%',
      'Enhance security and compliance',
      'Scale resources automatically',
      'Reduce maintenance overhead',
      'Access to latest cloud technologies'
    ],
    pricing: {
      basic: 299,
      professional: 799,
      enterprise: 2499
    },
    capabilities: [
      'Cloud architecture design',
      'Migration and deployment',
      'Performance optimization',
      'Security implementation',
      'Cost optimization',
      'Ongoing management and support'
    ],
    useCases: [
      'Legacy system modernization',
      'Scalable web application hosting',
      'Data center migration',
      'Disaster recovery setup',
      'Multi-cloud deployment',
      'DevOps automation'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    link: '/cloud-infrastructure',
    icon: 'CloudIcon',
    isPopular: true
  },
  {
    id: 'it-consulting',
    name: 'IT Strategy Consulting',
    category: 'it',
    description: 'Strategic IT consulting services to help businesses align technology with business goals, optimize processes, and drive digital transformation.',
    features: [
      'IT strategy development',
      'Technology roadmap planning',
      'Digital transformation guidance',
      'Process optimization',
      'Technology vendor evaluation',
      'IT governance and compliance',
      'Change management support',
      'Ongoing strategic advisory'
    ],
    benefits: [
      'Align IT with business objectives',
      'Optimize technology investments',
      'Improve operational efficiency',
      'Reduce technology risks',
      'Accelerate digital transformation',
      'Maximize ROI on technology spend'
    ],
    pricing: {
      basic: 150,
      professional: 250,
      enterprise: 500
    },
    capabilities: [
      'Strategic planning',
      'Technology assessment',
      'Process improvement',
      'Vendor management',
      'Change management',
      'Performance optimization'
    ],
    useCases: [
      'Digital transformation planning',
      'Technology stack evaluation',
      'IT process optimization',
      'Vendor selection and management',
      'Compliance and governance',
      'Technology investment planning'
    ],
    technologies: ['Strategic Planning', 'Process Analysis', 'Technology Assessment', 'Change Management', 'Governance', 'Compliance'],
    link: '/it-consulting',
    icon: 'CogIcon'
  },

  // 5G Solutions
  {
    id: '5g-iot-solutions',
    name: '5G IoT Solutions',
    category: '5g',
    description: 'Comprehensive 5G and IoT solutions for smart cities, industrial automation, and connected devices with ultra-low latency and high reliability.',
    features: [
      '5G network planning and deployment',
      'IoT device management platform',
      'Real-time data processing',
      'Edge computing solutions',
      'Smart city infrastructure',
      'Industrial IoT automation',
      'Predictive maintenance systems',
      'Custom IoT application development'
    ],
    benefits: [
      'Ultra-low latency communication',
      'Massive device connectivity',
      'Real-time data processing',
      'Improved operational efficiency',
      'Enhanced automation capabilities',
      'Future-proof technology infrastructure'
    ],
    pricing: {
      basic: 999,
      professional: 2999,
      enterprise: 9999
    },
    capabilities: [
      '5G network design and deployment',
      'IoT platform development',
      'Edge computing implementation',
      'Real-time analytics',
      'Device management',
      'Custom application development'
    ],
    useCases: [
      'Smart city infrastructure',
      'Industrial automation',
      'Connected vehicles',
      'Smart agriculture',
      'Healthcare monitoring',
      'Supply chain optimization'
    ],
    technologies: ['5G', 'IoT', 'Edge Computing', 'Machine Learning', 'Kubernetes', 'MQTT'],
    link: '/5g-iot-solutions',
    icon: 'SignalIcon'
  },

  // Blockchain Solutions
  {
    id: 'blockchain-solutions',
    name: 'Blockchain Development Services',
    category: 'blockchain',
    description: 'Comprehensive blockchain solutions including smart contracts, DeFi applications, NFT platforms, and enterprise blockchain integration.',
    features: [
      'Smart contract development',
      'DeFi application creation',
      'NFT marketplace development',
      'Enterprise blockchain solutions',
      'Cryptocurrency wallet development',
      'Blockchain consulting',
      'Security auditing',
      'Token economics design'
    ],
    benefits: [
      'Enhanced security and transparency',
      'Reduced transaction costs',
      'Improved traceability',
      'Decentralized operations',
      'Immutable record keeping',
      'Global accessibility'
    ],
    pricing: {
      basic: 2999,
      professional: 9999,
      enterprise: 29999
    },
    capabilities: [
      'Smart contract development',
      'DApp creation',
      'Blockchain integration',
      'Security auditing',
      'Token development',
      'DeFi protocol design'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital identity management',
      'Financial services automation',
      'NFT marketplace creation',
      'Decentralized finance applications',
      'Voting and governance systems'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3', 'IPFS', 'React', 'Node.js'],
    link: '/blockchain-solutions',
    icon: 'CurrencyDollarIcon'
  }
];

// Service categories for filtering
export const serviceCategories = [
  { id: 'ai', name: 'AI Solutions', icon: 'CpuChipIcon', count: 4 },
  { id: 'micro-saas', name: 'Micro SaaS', icon: 'GlobeAltIcon', count: 3 },
  { id: 'it', name: 'IT Services', icon: 'CogIcon', count: 2 },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: 'ShieldCheckIcon', count: 1 },
  { id: 'cloud', name: 'Cloud Solutions', icon: 'CloudIcon', count: 1 },
  { id: '5g', name: '5G Solutions', icon: 'SignalIcon', count: 1 },
  { id: 'blockchain', name: 'Blockchain', icon: 'CurrencyDollarIcon', count: 1 }
];

// Helper functions
export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return services.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return services.filter(service => service.isNew);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const searchServices = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return services.filter(service => 
    service.name.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.features.some(feature => feature.toLowerCase().includes(lowercaseQuery)) ||
    service.useCases.some(useCase => useCase.toLowerCase().includes(lowercaseQuery))
  );
};