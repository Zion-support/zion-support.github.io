// Comprehensive Services Data for Zion Tech Group
export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 'ai' | 'it' | 'micro-saas' | 'emerging';
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
  demoUrl?: string;
  documentationUrl?: string;
  supportLevel: 'basic' | 'premium' | 'enterprise';
  setupTime: string;
  freeTrial: boolean;
  popular?: boolean;
}

export const microSaasServices: Service[] = [
  {
    id: 'ai-content-writer',
    name: 'AI Content Writer Pro',
    description: 'Advanced AI-powered content creation platform that generates high-quality articles, blog posts, marketing copy, and social media content using cutting-edge language models.',
    shortDescription: 'AI-powered content creation for blogs, marketing, and social media',
    category: 'micro-saas',
    icon: '✍️',
    features: [
      'Multi-language content generation',
      'SEO-optimized writing',
      'Brand voice customization',
      'Content templates library',
      'Plagiarism detection',
      'Content scheduling',
      'Analytics dashboard',
      'Team collaboration tools'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    benefits: [
      'Save 80% time on content creation',
      'Increase content output by 500%',
      'Improve SEO rankings',
      'Maintain consistent brand voice',
      'Scale content marketing efforts'
    ],
    useCases: [
      'Blog content creation',
      'Social media posts',
      'Email marketing campaigns',
      'Product descriptions',
      'Press releases',
      'Technical documentation'
    ],
    technologies: ['GPT-4', 'Claude', 'BERT', 'React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-content-writer',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-content-writer',
    supportLevel: 'premium',
    setupTime: '5 minutes',
    freeTrial: true,
    popular: true
  },
  {
    id: 'ai-email-assistant',
    name: 'AI Email Assistant',
    description: 'Intelligent email management system that automatically categorizes, prioritizes, and responds to emails using advanced AI algorithms.',
    shortDescription: 'Smart email management with AI-powered responses',
    category: 'micro-saas',
    icon: '📧',
    features: [
      'Smart email categorization',
      'Auto-response generation',
      'Priority scoring',
      'Email templates',
      'Calendar integration',
      'Follow-up reminders',
      'Spam filtering',
      'Email analytics'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    benefits: [
      'Reduce email processing time by 70%',
      'Never miss important emails',
      'Improve response time',
      'Organize inbox automatically',
      'Increase productivity'
    ],
    useCases: [
      'Customer support',
      'Sales follow-ups',
      'Meeting scheduling',
      'Email marketing',
      'Internal communications'
    ],
    technologies: ['NLP', 'Machine Learning', 'Gmail API', 'Outlook API', 'Python', 'Redis'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-email-assistant',
    supportLevel: 'premium',
    setupTime: '10 minutes',
    freeTrial: true
  },
  {
    id: 'ai-expense-tracker',
    name: 'AI Expense Tracker',
    description: 'Automated expense management system that uses AI to categorize, track, and analyze business expenses with receipt scanning and reporting.',
    shortDescription: 'Automated expense tracking with AI-powered categorization',
    category: 'micro-saas',
    icon: '💰',
    features: [
      'Receipt scanning with OCR',
      'Automatic categorization',
      'Expense approval workflows',
      'Tax preparation tools',
      'Multi-currency support',
      'Real-time reporting',
      'Mobile app',
      'Integration with accounting software'
    ],
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99
    },
    benefits: [
      'Save 90% time on expense management',
      'Reduce human errors',
      'Improve compliance',
      'Real-time expense insights',
      'Streamline reimbursement process'
    ],
    useCases: [
      'Business expense tracking',
      'Travel expense management',
      'Receipt digitization',
      'Tax preparation',
      'Budget monitoring'
    ],
    technologies: ['OCR', 'Computer Vision', 'Machine Learning', 'React Native', 'PostgreSQL', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-expense-tracker',
    supportLevel: 'basic',
    setupTime: '15 minutes',
    freeTrial: true
  },
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator',
    description: 'Intelligent invoicing system that automatically generates professional invoices, tracks payments, and manages client billing with AI-powered features.',
    shortDescription: 'Smart invoicing with automated generation and payment tracking',
    category: 'micro-saas',
    icon: '🧾',
    features: [
      'Auto-invoice generation',
      'Payment tracking',
      'Client management',
      'Recurring billing',
      'Multi-currency support',
      'Tax calculations',
      'Payment reminders',
      'Financial reporting'
    ],
    pricing: {
      basic: 25,
      pro: 59,
      enterprise: 149
    },
    benefits: [
      'Reduce invoicing time by 85%',
      'Improve cash flow',
      'Reduce payment delays',
      'Professional invoice templates',
      'Automated follow-ups'
    ],
    useCases: [
      'Freelancer billing',
      'Service business invoicing',
      'Subscription management',
      'Project billing',
      'Recurring payments'
    ],
    technologies: ['AI Templates', 'Payment APIs', 'PDF Generation', 'React', 'Stripe', 'MongoDB'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-invoice-generator',
    supportLevel: 'premium',
    setupTime: '20 minutes',
    freeTrial: true,
    popular: true
  },
  {
    id: 'ai-lead-generation',
    name: 'AI Lead Generation',
    description: 'Advanced lead generation platform that uses AI to identify, qualify, and nurture potential customers across multiple channels.',
    shortDescription: 'AI-powered lead identification and qualification system',
    category: 'micro-saas',
    icon: '🎯',
    features: [
      'Lead scoring algorithms',
      'Multi-channel prospecting',
      'Email sequence automation',
      'CRM integration',
      'Lead qualification',
      'Contact enrichment',
      'Campaign analytics',
      'A/B testing tools'
    ],
    pricing: {
      basic: 99,
      pro: 199,
      enterprise: 499
    },
    benefits: [
      'Increase qualified leads by 300%',
      'Reduce cost per lead by 60%',
      'Improve conversion rates',
      'Automate prospecting',
      'Scale lead generation'
    ],
    useCases: [
      'B2B sales prospecting',
      'Email marketing campaigns',
      'Social media outreach',
      'Content marketing',
      'Event lead capture'
    ],
    technologies: ['Machine Learning', 'Web Scraping', 'Email APIs', 'CRM APIs', 'Python', 'Elasticsearch'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-lead-generation',
    supportLevel: 'enterprise',
    setupTime: '30 minutes',
    freeTrial: true
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager',
    description: 'Intelligent project management platform that uses AI to optimize workflows, predict risks, and automate task assignments.',
    shortDescription: 'AI-powered project management with predictive analytics',
    category: 'micro-saas',
    icon: '📋',
    features: [
      'Smart task assignment',
      'Risk prediction',
      'Resource optimization',
      'Progress tracking',
      'Team collaboration',
      'Time tracking',
      'Budget monitoring',
      'Performance analytics'
    ],
    pricing: {
      basic: 39,
      pro: 89,
      enterprise: 199
    },
    benefits: [
      'Improve project success rate by 40%',
      'Reduce project delays',
      'Optimize resource allocation',
      'Predict and prevent risks',
      'Increase team productivity'
    ],
    useCases: [
      'Software development',
      'Marketing campaigns',
      'Event planning',
      'Construction projects',
      'Product launches'
    ],
    technologies: ['Machine Learning', 'Predictive Analytics', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-project-manager',
    supportLevel: 'premium',
    setupTime: '25 minutes',
    freeTrial: true
  },
  {
    id: 'ai-crm-assistant',
    name: 'AI CRM Assistant',
    description: 'Intelligent customer relationship management system with AI-powered insights, automated follow-ups, and predictive analytics.',
    shortDescription: 'Smart CRM with AI insights and automated workflows',
    category: 'micro-saas',
    icon: '👥',
    features: [
      'Customer behavior analysis',
      'Automated follow-ups',
      'Lead scoring',
      'Sales forecasting',
      'Email integration',
      'Call logging',
      'Pipeline management',
      'Performance analytics'
    ],
    pricing: {
      basic: 49,
      pro: 119,
      enterprise: 299
    },
    benefits: [
      'Increase sales by 35%',
      'Improve customer retention',
      'Automate routine tasks',
      'Better sales forecasting',
      'Enhanced customer insights'
    ],
    useCases: [
      'Sales team management',
      'Customer support',
      'Lead nurturing',
      'Account management',
      'Sales reporting'
    ],
    technologies: ['AI Analytics', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Salesforce API'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-crm-assistant',
    supportLevel: 'enterprise',
    setupTime: '45 minutes',
    freeTrial: true,
    popular: true
  },
  {
    id: 'ai-inventory-manager',
    name: 'AI Inventory Manager',
    description: 'Smart inventory management system that uses AI to optimize stock levels, predict demand, and automate reordering.',
    shortDescription: 'AI-powered inventory optimization and demand forecasting',
    category: 'micro-saas',
    icon: '📦',
    features: [
      'Demand forecasting',
      'Automated reordering',
      'Stock optimization',
      'Barcode scanning',
      'Multi-location support',
      'Supplier management',
      'Cost tracking',
      'Analytics dashboard'
    ],
    pricing: {
      basic: 35,
      pro: 79,
      enterprise: 179
    },
    benefits: [
      'Reduce inventory costs by 25%',
      'Prevent stockouts',
      'Optimize cash flow',
      'Improve accuracy',
      'Automate procurement'
    ],
    useCases: [
      'Retail inventory',
      'Manufacturing',
      'E-commerce',
      'Warehouse management',
      'Supply chain optimization'
    ],
    technologies: ['Machine Learning', 'IoT Sensors', 'Barcode APIs', 'React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-inventory-manager',
    supportLevel: 'premium',
    setupTime: '40 minutes',
    freeTrial: true
  }
];

export const aiServices: Service[] = [
  {
    id: 'ai-analytics',
    name: 'AI Analytics Platform',
    description: 'Advanced AI-powered analytics platform that transforms raw data into actionable insights with predictive modeling and real-time dashboards.',
    shortDescription: 'AI-powered data analytics with predictive insights',
    category: 'ai',
    icon: '📊',
    features: [
      'Predictive modeling',
      'Real-time dashboards',
      'Natural language queries',
      'Automated reporting',
      'Data visualization',
      'Machine learning models',
      'API integrations',
      'Custom algorithms'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Make data-driven decisions',
      'Predict future trends',
      'Automate reporting',
      'Improve accuracy',
      'Scale analytics capabilities'
    ],
    useCases: [
      'Business intelligence',
      'Sales forecasting',
      'Customer analytics',
      'Risk assessment',
      'Performance monitoring'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Python', 'React', 'D3.js', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-analytics',
    supportLevel: 'enterprise',
    setupTime: '2-4 weeks',
    freeTrial: true,
    popular: true
  },
  {
    id: 'ai-automation',
    name: 'AI Process Automation',
    description: 'Intelligent automation platform that uses AI to streamline business processes, reduce manual work, and improve efficiency.',
    shortDescription: 'AI-powered business process automation',
    category: 'ai',
    icon: '🤖',
    features: [
      'Workflow automation',
      'Document processing',
      'Data extraction',
      'Decision automation',
      'Integration capabilities',
      'Monitoring dashboard',
      'Custom workflows',
      'API connections'
    ],
    pricing: {
      basic: 299,
      pro: 699,
      enterprise: 1999
    },
    benefits: [
      'Reduce manual work by 80%',
      'Improve accuracy',
      'Increase efficiency',
      'Scale operations',
      'Reduce costs'
    ],
    useCases: [
      'Document processing',
      'Data entry automation',
      'Customer onboarding',
      'Invoice processing',
      'Report generation'
    ],
    technologies: ['RPA', 'Machine Learning', 'Python', 'React', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-automation',
    supportLevel: 'enterprise',
    setupTime: '3-6 weeks',
    freeTrial: true
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Advanced chatbot creation platform that builds intelligent conversational AI agents for customer service, sales, and support.',
    shortDescription: 'Build intelligent chatbots with no coding required',
    category: 'ai',
    icon: '💬',
    features: [
      'Visual chatbot builder',
      'Multi-language support',
      'Voice integration',
      'CRM integration',
      'Analytics dashboard',
      'A/B testing',
      'Custom training',
      'API access'
    ],
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599
    },
    benefits: [
      '24/7 customer support',
      'Reduce support costs',
      'Improve response time',
      'Scale customer service',
      'Collect valuable insights'
    ],
    useCases: [
      'Customer support',
      'Sales qualification',
      'Lead generation',
      'FAQ automation',
      'Appointment booking'
    ],
    technologies: ['NLP', 'GPT-4', 'React', 'Node.js', 'WebSocket', 'MongoDB'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-chatbot-builder',
    supportLevel: 'premium',
    setupTime: '1-2 weeks',
    freeTrial: true,
    popular: true
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Suite',
    description: 'Comprehensive AI-powered cybersecurity platform that provides real-time threat detection, automated response, and security analytics.',
    shortDescription: 'AI-powered cybersecurity with real-time threat detection',
    category: 'ai',
    icon: '🔒',
    features: [
      'Real-time threat detection',
      'Automated incident response',
      'Behavioral analysis',
      'Vulnerability scanning',
      'Security monitoring',
      'Compliance reporting',
      'Threat intelligence',
      'Custom rules engine'
    ],
    pricing: {
      basic: 399,
      pro: 899,
      enterprise: 2499
    },
    benefits: [
      'Detect threats in real-time',
      'Reduce false positives',
      'Automate response',
      'Improve security posture',
      'Meet compliance requirements'
    ],
    useCases: [
      'Network security',
      'Endpoint protection',
      'Cloud security',
      'Compliance monitoring',
      'Incident response'
    ],
    technologies: ['Machine Learning', 'SIEM', 'Python', 'React', 'Elasticsearch', 'Kubernetes'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-cybersecurity',
    supportLevel: 'enterprise',
    setupTime: '2-3 weeks',
    freeTrial: true
  },
  {
    id: 'ai-healthcare',
    name: 'AI Healthcare Solutions',
    description: 'Advanced AI healthcare platform providing diagnostic assistance, treatment recommendations, and patient monitoring capabilities.',
    shortDescription: 'AI-powered healthcare diagnostics and patient care',
    category: 'ai',
    icon: '🏥',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Treatment recommendations',
      'Patient monitoring',
      'Drug interaction checking',
      'Clinical decision support',
      'Electronic health records',
      'Telemedicine integration'
    ],
    pricing: {
      basic: 599,
      pro: 1299,
      enterprise: 3499
    },
    benefits: [
      'Improve diagnostic accuracy',
      'Reduce medical errors',
      'Enhance patient care',
      'Streamline workflows',
      'Support clinical decisions'
    ],
    useCases: [
      'Medical imaging',
      'Diagnosis support',
      'Treatment planning',
      'Patient monitoring',
      'Clinical research'
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'Python', 'React', 'PostgreSQL', 'HIPAA'],
    demoUrl: 'https://ziontechgroup.com/demo/ai-healthcare',
    supportLevel: 'enterprise',
    setupTime: '4-8 weeks',
    freeTrial: false
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    description: 'Comprehensive cloud infrastructure services including migration, optimization, and management across AWS, Azure, and Google Cloud.',
    shortDescription: 'Complete cloud infrastructure migration and management',
    category: 'it',
    icon: '☁️',
    features: [
      'Cloud migration',
      'Infrastructure optimization',
      'Cost management',
      'Security implementation',
      'Monitoring and alerting',
      'Disaster recovery',
      'Auto-scaling',
      '24/7 support'
    ],
    pricing: {
      basic: 999,
      pro: 2499,
      enterprise: 5999
    },
    benefits: [
      'Reduce infrastructure costs',
      'Improve scalability',
      'Enhance security',
      'Increase reliability',
      'Simplify management'
    ],
    useCases: [
      'Cloud migration',
      'Infrastructure modernization',
      'Disaster recovery',
      'Cost optimization',
      'Security hardening'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
    demoUrl: 'https://ziontechgroup.com/demo/cloud-infrastructure',
    supportLevel: 'enterprise',
    setupTime: '2-4 weeks',
    freeTrial: false,
    popular: true
  },
  {
    id: 'api-management',
    name: 'API Management Platform',
    description: 'Enterprise-grade API management solution with security, monitoring, and developer portal capabilities.',
    shortDescription: 'Complete API lifecycle management and security',
    category: 'it',
    icon: '🔌',
    features: [
      'API gateway',
      'Security policies',
      'Rate limiting',
      'Analytics dashboard',
      'Developer portal',
      'Documentation generation',
      'Version management',
      'Integration tools'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Secure API access',
      'Monitor API usage',
      'Improve developer experience',
      'Scale API operations',
      'Reduce development time'
    ],
    useCases: [
      'API security',
      'Developer onboarding',
      'API monetization',
      'Integration management',
      'Microservices architecture'
    ],
    technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Node.js', 'React', 'MongoDB'],
    demoUrl: 'https://ziontechgroup.com/demo/api-management',
    supportLevel: 'premium',
    setupTime: '1-2 weeks',
    freeTrial: true
  },
  {
    id: 'cybersecurity-suite',
    name: 'Cybersecurity Suite',
    description: 'Comprehensive cybersecurity services including vulnerability assessment, penetration testing, and security monitoring.',
    shortDescription: 'Complete cybersecurity protection and monitoring',
    category: 'it',
    icon: '🛡️',
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Security monitoring',
      'Incident response',
      'Compliance auditing',
      'Security training',
      'Threat intelligence',
      '24/7 SOC support'
    ],
    pricing: {
      basic: 499,
      pro: 1299,
      enterprise: 2999
    },
    benefits: [
      'Protect against threats',
      'Meet compliance requirements',
      'Reduce security risks',
      'Improve security posture',
      'Minimize breach impact'
    ],
    useCases: [
      'Security assessment',
      'Compliance auditing',
      'Threat monitoring',
      'Incident response',
      'Security training'
    ],
    technologies: ['SIEM', 'Nessus', 'Metasploit', 'Python', 'React', 'Elasticsearch'],
    demoUrl: 'https://ziontechgroup.com/demo/cybersecurity-suite',
    supportLevel: 'enterprise',
    setupTime: '1-3 weeks',
    freeTrial: false
  },
  {
    id: 'infrastructure-monitoring',
    name: 'Infrastructure Monitoring',
    description: 'Advanced infrastructure monitoring solution with real-time alerts, performance analytics, and automated remediation.',
    shortDescription: 'Real-time infrastructure monitoring and alerting',
    category: 'it',
    icon: '📈',
    features: [
      'Real-time monitoring',
      'Performance analytics',
      'Automated alerting',
      'Capacity planning',
      'Log analysis',
      'Custom dashboards',
      'Mobile app',
      'API access'
    ],
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599
    },
    benefits: [
      'Prevent downtime',
      'Optimize performance',
      'Reduce costs',
      'Improve reliability',
      'Automate operations'
    ],
    useCases: [
      'Server monitoring',
      'Application performance',
      'Database monitoring',
      'Network monitoring',
      'Cloud infrastructure'
    ],
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Python', 'React', 'InfluxDB'],
    demoUrl: 'https://ziontechgroup.com/demo/infrastructure-monitoring',
    supportLevel: 'premium',
    setupTime: '1 week',
    freeTrial: true
  }
];

export const emergingTechServices: Service[] = [
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Cutting-edge quantum computing services for optimization, cryptography, and advanced problem-solving applications.',
    shortDescription: 'Quantum computing for optimization and cryptography',
    category: 'emerging',
    icon: '⚛️',
    features: [
      'Quantum algorithms',
      'Optimization problems',
      'Cryptography solutions',
      'Quantum simulation',
      'Research collaboration',
      'Custom development',
      'Performance analysis',
      'Future planning'
    ],
    pricing: {
      basic: 4999,
      pro: 9999,
      enterprise: 24999
    },
    benefits: [
      'Solve complex problems',
      'Advance research',
      'Future-proof technology',
      'Competitive advantage',
      'Innovation leadership'
    ],
    useCases: [
      'Financial modeling',
      'Drug discovery',
      'Cryptography',
      'Optimization problems',
      'Research projects'
    ],
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'Quantum Hardware', 'Custom Algorithms'],
    demoUrl: 'https://ziontechgroup.com/demo/quantum-computing',
    supportLevel: 'enterprise',
    setupTime: '2-6 months',
    freeTrial: false
  },
  {
    id: '5g-implementation',
    name: '5G Implementation Services',
    description: 'Complete 5G network implementation and optimization services for businesses looking to leverage next-generation connectivity.',
    shortDescription: '5G network implementation and optimization',
    category: 'emerging',
    icon: '📡',
    features: [
      '5G network design',
      'Infrastructure deployment',
      'Performance optimization',
      'IoT integration',
      'Edge computing',
      'Security implementation',
      'Testing and validation',
      'Ongoing support'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    benefits: [
      'Ultra-fast connectivity',
      'Low latency applications',
      'IoT enablement',
      'Future-ready infrastructure',
      'Competitive advantage'
    ],
    useCases: [
      'Smart cities',
      'Industrial IoT',
      'Autonomous vehicles',
      'Remote work',
      'AR/VR applications'
    ],
    technologies: ['5G NR', 'Edge Computing', 'IoT Protocols', 'Network Slicing', 'Python', 'C++'],
    demoUrl: 'https://ziontechgroup.com/demo/5g-implementation',
    supportLevel: 'enterprise',
    setupTime: '3-6 months',
    freeTrial: false
  },
  {
    id: 'blockchain-solutions',
    name: 'Blockchain Solutions',
    description: 'Comprehensive blockchain development services including smart contracts, DeFi applications, and enterprise blockchain solutions.',
    shortDescription: 'Blockchain development and smart contract solutions',
    category: 'emerging',
    icon: '⛓️',
    features: [
      'Smart contract development',
      'DeFi applications',
      'NFT platforms',
      'Enterprise blockchain',
      'Token development',
      'Security auditing',
      'Integration services',
      'Consulting'
    ],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 12999
    },
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparency',
      'Cost reduction',
      'Innovation opportunities'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital identity',
      'Financial services',
      'Gaming platforms',
      'Real estate'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3', 'React', 'Node.js', 'IPFS'],
    demoUrl: 'https://ziontechgroup.com/demo/blockchain-solutions',
    supportLevel: 'premium',
    setupTime: '1-3 months',
    freeTrial: false
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems',
    description: 'Advanced autonomous system development including robotics, self-driving vehicles, and intelligent automation solutions.',
    shortDescription: 'Autonomous robotics and intelligent systems',
    category: 'emerging',
    icon: '🤖',
    features: [
      'Robotic process automation',
      'Computer vision',
      'Machine learning',
      'Sensor integration',
      'Path planning',
      'Decision making',
      'Safety systems',
      'Performance monitoring'
    ],
    pricing: {
      basic: 3999,
      pro: 8999,
      enterprise: 19999
    },
    benefits: [
      'Automate complex tasks',
      'Improve efficiency',
      'Reduce human error',
      '24/7 operation',
      'Scalable solutions'
    ],
    useCases: [
      'Manufacturing automation',
      'Autonomous vehicles',
      'Service robots',
      'Warehouse automation',
      'Agricultural robots'
    ],
    technologies: ['ROS', 'OpenCV', 'TensorFlow', 'Python', 'C++', 'Hardware Integration'],
    demoUrl: 'https://ziontechgroup.com/demo/autonomous-systems',
    supportLevel: 'enterprise',
    setupTime: '2-6 months',
    freeTrial: false
  }
];

export const allServices = [
  ...microSaasServices,
  ...aiServices,
  ...itServices,
  ...emergingTechServices
];

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service.popular);
};