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

  // Advanced AI Services
  {
    id: 'ai-3d-generation-pro',
    title: 'AI 3D Generation Pro',
    description: 'Revolutionary AI-powered 3D content generation platform for creating realistic 3D models, animations, and virtual environments.',
    shortDescription: 'AI-powered 3D content generation and modeling',
    category: 'AI',
    icon: '🎨',
    features: [
      '3D Model Generation from Text',
      'Real-time 3D Rendering',
      'Animation Creation',
      'Virtual Environment Design',
      'Texture Generation',
      'Lighting Optimization',
      'AR/VR Integration',
      'Export to Multiple Formats'
    ],
    pricing: {
      basic: 899,
      pro: 1999,
      enterprise: 4999
    },
    benefits: [
      '90% faster 3D content creation',
      'Professional quality output',
      'No 3D modeling experience required',
      'Seamless AR/VR integration',
      'Cost-effective alternative to traditional 3D studios'
    ],
    useCases: [
      'Game Development',
      'Architectural Visualization',
      'Product Design',
      'Marketing Content',
      'Virtual Reality Experiences'
    ],
    technologies: ['NeRF', 'Stable Diffusion', 'Blender', 'Unity', 'Unreal Engine', 'WebGL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-3d-generation-pro'
    },
    href: '/ai-3d-generation-pro',
    glowColor: 'purple'
  },
  {
    id: 'ai-climate-prediction-engine',
    title: 'AI Climate Prediction Engine',
    description: 'Advanced AI system for climate modeling, weather prediction, and environmental impact analysis using machine learning and satellite data.',
    shortDescription: 'AI-powered climate modeling and weather prediction',
    category: 'AI',
    icon: '🌍',
    features: [
      'Climate Pattern Analysis',
      'Weather Forecasting (30-90 days)',
      'Environmental Impact Assessment',
      'Satellite Data Processing',
      'Carbon Footprint Analysis',
      'Disaster Risk Prediction',
      'Real-time Monitoring',
      'Custom Climate Models'
    ],
    pricing: {
      basic: 2499,
      pro: 5999,
      enterprise: 14999
    },
    benefits: [
      '95% accuracy in weather predictions',
      'Early warning systems for natural disasters',
      'Environmental compliance support',
      'Data-driven climate strategies',
      'Reduced environmental risks'
    ],
    useCases: [
      'Agriculture Planning',
      'Renewable Energy Optimization',
      'Disaster Preparedness',
      'Environmental Compliance',
      'Urban Planning'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Satellite APIs', 'Python', 'PostgreSQL', 'Docker'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-climate-prediction-engine'
    },
    href: '/ai-climate-prediction-engine',
    glowColor: 'green'
  },
  {
    id: 'ai-autonomous-systems',
    title: 'AI Autonomous Systems',
    description: 'Cutting-edge AI systems for autonomous vehicles, drones, and robotics with advanced computer vision and decision-making capabilities.',
    shortDescription: 'AI-powered autonomous systems for vehicles and robotics',
    category: 'AI',
    icon: '🤖',
    features: [
      'Autonomous Vehicle Control',
      'Drone Navigation Systems',
      'Robotic Process Automation',
      'Computer Vision Integration',
      'Real-time Decision Making',
      'Obstacle Detection & Avoidance',
      'Path Planning Algorithms',
      'Safety Monitoring Systems'
    ],
    pricing: {
      basic: 4999,
      pro: 12999,
      enterprise: 29999
    },
    benefits: [
      '99.9% safety record',
      'Reduced operational costs',
      '24/7 autonomous operation',
      'Advanced safety protocols',
      'Scalable deployment'
    ],
    useCases: [
      'Autonomous Vehicles',
      'Delivery Drones',
      'Industrial Robotics',
      'Agricultural Automation',
      'Security Systems'
    ],
    technologies: ['ROS', 'OpenCV', 'TensorFlow', 'C++', 'Python', 'CUDA'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-autonomous-systems'
    },
    href: '/ai-autonomous-systems',
    glowColor: 'cyan'
  },

  // Advanced Micro SaaS Solutions
  {
    id: 'ai-accounting-assistant',
    title: 'AI Accounting Assistant Pro',
    description: 'Intelligent accounting software with AI-powered bookkeeping, tax preparation, financial analysis, and automated compliance reporting.',
    shortDescription: 'AI-powered accounting and financial management',
    category: 'SaaS',
    icon: '📊',
    features: [
      'Automated Bookkeeping',
      'AI Tax Preparation',
      'Financial Forecasting',
      'Expense Categorization',
      'Invoice Generation',
      'Compliance Reporting',
      'Multi-currency Support',
      'Integration with Banks'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      '90% reduction in bookkeeping time',
      'Automated tax compliance',
      'Real-time financial insights',
      'Error-free calculations',
      'Seamless bank integration'
    ],
    useCases: [
      'Small Business Accounting',
      'Freelancer Finance Management',
      'Tax Preparation',
      'Financial Planning',
      'Audit Support'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'Stripe', 'Plaid'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-accounting-assistant'
    },
    href: '/ai-accounting-assistant',
    glowColor: 'green'
  },
  {
    id: 'ai-agricultural-intelligence-pro',
    title: 'AI Agricultural Intelligence Pro',
    description: 'Comprehensive AI platform for precision agriculture, crop monitoring, yield prediction, and automated farming operations.',
    shortDescription: 'AI-powered precision agriculture and crop management',
    category: 'SaaS',
    icon: '🌾',
    features: [
      'Crop Health Monitoring',
      'Yield Prediction Models',
      'Soil Analysis & Recommendations',
      'Weather Integration',
      'Pest & Disease Detection',
      'Irrigation Optimization',
      'Harvest Planning',
      'Market Price Analysis'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999
    },
    benefits: [
      '25% increase in crop yields',
      '30% reduction in water usage',
      'Early pest detection',
      'Optimized resource allocation',
      'Data-driven farming decisions'
    ],
    useCases: [
      'Precision Agriculture',
      'Crop Monitoring',
      'Farm Management',
      'Supply Chain Optimization',
      'Sustainable Farming'
    ],
    technologies: ['Computer Vision', 'IoT Sensors', 'Machine Learning', 'React', 'Python', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-agricultural-intelligence-pro'
    },
    href: '/ai-agricultural-intelligence-pro',
    glowColor: 'yellow'
  },
  {
    id: 'ai-blockchain-analytics',
    title: 'AI Blockchain Analytics Pro',
    description: 'Advanced AI-powered blockchain analytics platform for cryptocurrency analysis, DeFi insights, and smart contract auditing.',
    shortDescription: 'AI-powered blockchain and cryptocurrency analytics',
    category: 'Blockchain',
    icon: '⛓️',
    features: [
      'Cryptocurrency Price Prediction',
      'DeFi Protocol Analysis',
      'Smart Contract Auditing',
      'Transaction Pattern Analysis',
      'Risk Assessment',
      'Portfolio Optimization',
      'Market Sentiment Analysis',
      'Compliance Monitoring'
    ],
    pricing: {
      basic: 499,
      pro: 1299,
      enterprise: 3499
    },
    benefits: [
      '95% accuracy in price predictions',
      'Real-time market insights',
      'Automated risk assessment',
      'Compliance automation',
      'Portfolio optimization'
    ],
    useCases: [
      'Cryptocurrency Trading',
      'DeFi Investment',
      'Smart Contract Development',
      'Compliance Management',
      'Risk Assessment'
    ],
    technologies: ['Python', 'TensorFlow', 'Web3.js', 'Ethereum', 'React', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-blockchain-analytics'
    },
    href: '/ai-blockchain-analytics',
    glowColor: 'blue'
  },

  // Advanced IT Services
  {
    id: 'quantum-computing-solutions',
    title: 'Quantum Computing Solutions',
    description: 'Cutting-edge quantum computing services for optimization problems, cryptography, and advanced computational challenges.',
    shortDescription: 'Quantum computing solutions for complex problems',
    category: 'IT',
    icon: '⚛️',
    features: [
      'Quantum Algorithm Development',
      'Optimization Problem Solving',
      'Quantum Cryptography',
      'Quantum Machine Learning',
      'Quantum Simulation',
      'Hybrid Classical-Quantum Systems',
      'Quantum Security Solutions',
      'Research & Development'
    ],
    pricing: {
      basic: 9999,
      pro: 24999,
      enterprise: 99999
    },
    benefits: [
      'Exponential speed improvements',
      'Breakthrough optimization results',
      'Future-proof technology',
      'Competitive advantage',
      'Research collaboration'
    ],
    useCases: [
      'Financial Modeling',
      'Drug Discovery',
      'Supply Chain Optimization',
      'Cryptography',
      'Machine Learning'
    ],
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++', 'Quantum Hardware'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/quantum-computing-solutions'
    },
    href: '/quantum-computing-solutions',
    glowColor: 'purple'
  },
  {
    id: 'edge-computing-platform',
    title: 'Edge Computing Platform',
    description: 'Comprehensive edge computing solutions for real-time processing, IoT applications, and distributed computing infrastructure.',
    shortDescription: 'Edge computing platform for real-time processing',
    category: 'IT',
    icon: '🌐',
    features: [
      'Distributed Edge Nodes',
      'Real-time Data Processing',
      'Low-latency Applications',
      'IoT Device Management',
      'Edge AI Inference',
      'Content Delivery Network',
      'Edge Security',
      'Monitoring & Analytics'
    ],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 14999
    },
    benefits: [
      'Sub-10ms latency',
      'Reduced bandwidth costs',
      'Improved reliability',
      'Enhanced security',
      'Scalable infrastructure'
    ],
    useCases: [
      'Autonomous Vehicles',
      'Industrial IoT',
      'Real-time Analytics',
      'Gaming & AR/VR',
      'Smart Cities'
    ],
    technologies: ['Kubernetes', 'Docker', 'TensorFlow Lite', 'MQTT', 'React', 'Node.js'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/edge-computing-platform'
    },
    href: '/edge-computing-platform',
    glowColor: 'cyan'
  },
  {
    id: 'ai-cyber-defense-matrix',
    title: 'AI Cyber Defense Matrix',
    description: 'Next-generation AI-powered cybersecurity platform with advanced threat detection, automated response, and predictive security analytics.',
    shortDescription: 'AI-powered advanced cybersecurity defense system',
    category: 'Cybersecurity',
    icon: '🛡️',
    features: [
      'AI Threat Detection',
      'Behavioral Analysis',
      'Automated Incident Response',
      'Predictive Security Analytics',
      'Zero-trust Architecture',
      'Advanced Persistent Threat (APT) Protection',
      'Security Orchestration',
      'Compliance Automation'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    benefits: [
      '99.9% threat detection accuracy',
      'Automated response in seconds',
      'Predictive threat prevention',
      'Zero false positives',
      'Compliance automation'
    ],
    useCases: [
      'Enterprise Security',
      'Government Agencies',
      'Financial Institutions',
      'Healthcare Organizations',
      'Critical Infrastructure'
    ],
    technologies: ['Machine Learning', 'SIEM', 'SOAR', 'Python', 'Elasticsearch', 'Kafka'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-cyber-defense-matrix'
    },
    href: '/ai-cyber-defense-matrix',
    glowColor: 'red'
  },

  // 5G and Advanced Connectivity
  {
    id: '5g-smart-city-solutions',
    title: '5G Smart City Solutions',
    description: 'Comprehensive 5G-powered smart city infrastructure including traffic management, environmental monitoring, and citizen services.',
    shortDescription: '5G-powered smart city infrastructure and services',
    category: '5G',
    icon: '🏙️',
    features: [
      'Smart Traffic Management',
      'Environmental Monitoring',
      'Citizen Service Apps',
      'IoT Device Integration',
      'Real-time Data Analytics',
      'Emergency Response Systems',
      'Energy Management',
      'Public Safety Solutions'
    ],
    pricing: {
      basic: 25000,
      pro: 75000,
      enterprise: 250000
    },
    benefits: [
      '30% reduction in traffic congestion',
      'Real-time city monitoring',
      'Improved citizen services',
      'Energy efficiency gains',
      'Enhanced public safety'
    ],
    useCases: [
      'Smart City Planning',
      'Traffic Optimization',
      'Environmental Monitoring',
      'Public Safety',
      'Citizen Engagement'
    ],
    technologies: ['5G NR', 'Edge Computing', 'IoT', 'AI/ML', 'React', 'Python'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-smart-city-solutions'
    },
    href: '/5g-smart-city-solutions',
    glowColor: 'green'
  },
  {
    id: '5g-iot-solutions',
    title: '5G IoT Solutions',
    description: 'Advanced 5G-enabled IoT platform for industrial automation, smart manufacturing, and connected device management.',
    shortDescription: '5G-powered IoT solutions for industrial applications',
    category: '5G',
    icon: '🏭',
    features: [
      'Industrial IoT Integration',
      'Real-time Device Monitoring',
      'Predictive Maintenance',
      'Smart Manufacturing',
      'Asset Tracking',
      'Quality Control Systems',
      'Supply Chain Optimization',
      'Remote Operations'
    ],
    pricing: {
      basic: 15000,
      pro: 45000,
      enterprise: 150000
    },
    benefits: [
      'Ultra-low latency connectivity',
      'Massive device connectivity',
      'Real-time industrial control',
      'Predictive maintenance',
      'Operational efficiency gains'
    ],
    useCases: [
      'Smart Manufacturing',
      'Industrial Automation',
      'Supply Chain Management',
      'Quality Control',
      'Remote Monitoring'
    ],
    technologies: ['5G', 'Industrial IoT', 'Edge Computing', 'AI/ML', 'React', 'Python'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-iot-solutions'
    },
    href: '/5g-iot-solutions',
    glowColor: 'blue'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};