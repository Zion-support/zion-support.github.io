export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 'ai' | 'it' | 'saas' | 'blockchain' | 'iot' | 'devops' | 'data' | 'security' | 'cloud' | 'mobile' | 'web';
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  demoUrl?: string;
  documentationUrl?: string;
  apiUrl?: string;
  status: 'active' | 'beta' | 'coming-soon';
  launchDate: string;
  lastUpdated: string;
  icon: string;
  gradient: string;
  glow: string;
  route: string;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Build intelligent conversational AI chatbots with natural language processing, multi-language support, and seamless integration capabilities.',
    shortDescription: 'Create intelligent chatbots with advanced NLP capabilities',
    category: 'ai',
    pricing: {
      basic: 29,
      pro: 99,
      enterprise: 299,
      currency: 'USD'
    },
    features: [
      'Natural Language Processing',
      'Multi-language Support',
      'Custom Training Models',
      'API Integration',
      'Analytics Dashboard',
      'Voice Recognition',
      'Sentiment Analysis',
      'Conversation Flow Builder'
    ],
    benefits: [
      '24/7 Customer Support',
      'Reduced Response Time',
      'Cost-effective Solution',
      'Scalable Architecture',
      'Easy Integration',
      'Real-time Analytics'
    ],
    useCases: [
      'Customer Support Automation',
      'Lead Qualification',
      'FAQ Automation',
      'E-commerce Assistance',
      'Booking Systems',
      'Technical Support'
    ],
    technologies: ['OpenAI GPT-4', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'WebSocket'],
    demoUrl: 'https://ziontechgroup.com/ai-chatbot-builder/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-chatbot-builder',
    apiUrl: 'https://api.ziontechgroup.com/v1/chatbot',
    status: 'active',
    launchDate: '2024-01-15',
    lastUpdated: '2024-10-15',
    icon: 'ChatBubbleLeftRightIcon',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/25',
    route: '/ai-chatbot-builder'
  },
  {
    id: 'ai-document-processor',
    name: 'AI Document Processor',
    description: 'Automatically extract, analyze, and process documents with advanced OCR, data extraction, and intelligent classification capabilities.',
    shortDescription: 'Intelligent document processing and data extraction',
    category: 'ai',
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399,
      currency: 'USD'
    },
    features: [
      'OCR Technology',
      'Data Extraction',
      'Document Classification',
      'Batch Processing',
      'API Integration',
      'Cloud Storage',
      'Security Encryption',
      'Custom Templates'
    ],
    benefits: [
      'Automated Data Entry',
      'Error Reduction',
      'Time Savings',
      'Cost Efficiency',
      'Scalable Processing',
      'Secure Handling'
    ],
    useCases: [
      'Invoice Processing',
      'Contract Analysis',
      'Form Data Extraction',
      'Legal Document Review',
      'Medical Records Processing',
      'Financial Document Analysis'
    ],
    technologies: ['Tesseract OCR', 'AWS Textract', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    demoUrl: 'https://ziontechgroup.com/ai-document-processor/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-document-processor',
    apiUrl: 'https://api.ziontechgroup.com/v1/document-processor',
    status: 'active',
    launchDate: '2024-02-01',
    lastUpdated: '2024-10-15',
    icon: 'DocumentTextIcon',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/25',
    route: '/ai-document-processor'
  },
  {
    id: 'ai-form-builder',
    name: 'AI Form Builder',
    description: 'Create intelligent forms with smart validation, conditional logic, and automated responses using AI-powered form generation.',
    shortDescription: 'Build smart forms with AI-powered validation and logic',
    category: 'ai',
    pricing: {
      basic: 19,
      pro: 79,
      enterprise: 199,
      currency: 'USD'
    },
    features: [
      'Drag & Drop Builder',
      'Smart Validation',
      'Conditional Logic',
      'Auto-Responses',
      'Analytics Dashboard',
      'Multi-step Forms',
      'Payment Integration',
      'Custom Styling'
    ],
    benefits: [
      'Faster Form Creation',
      'Better User Experience',
      'Reduced Abandonment',
      'Data Quality Improvement',
      'Easy Customization',
      'Real-time Analytics'
    ],
    useCases: [
      'Lead Generation',
      'Customer Feedback',
      'Event Registration',
      'Survey Collection',
      'Order Forms',
      'Contact Forms'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'SendGrid'],
    demoUrl: 'https://ziontechgroup.com/ai-form-builder/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-form-builder',
    apiUrl: 'https://api.ziontechgroup.com/v1/form-builder',
    status: 'active',
    launchDate: '2024-01-20',
    lastUpdated: '2024-10-15',
    icon: 'ClipboardDocumentListIcon',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/25',
    route: '/ai-form-builder'
  },
  {
    id: 'ai-voice-assistant',
    name: 'AI Voice Assistant',
    description: 'Deploy intelligent voice assistants with speech recognition, natural language understanding, and multi-platform integration.',
    shortDescription: 'Intelligent voice assistants with speech recognition',
    category: 'ai',
    pricing: {
      basic: 39,
      pro: 129,
      enterprise: 349,
      currency: 'USD'
    },
    features: [
      'Speech Recognition',
      'Natural Language Understanding',
      'Voice Synthesis',
      'Multi-platform Support',
      'Custom Commands',
      'Integration APIs',
      'Analytics Dashboard',
      'Offline Capabilities'
    ],
    benefits: [
      'Hands-free Operation',
      'Accessibility Improvement',
      'Enhanced User Experience',
      'Multi-language Support',
      'Easy Integration',
      'Scalable Architecture'
    ],
    useCases: [
      'Smart Home Control',
      'Customer Service',
      'Accessibility Tools',
      'Mobile Apps',
      'IoT Devices',
      'Automotive Systems'
    ],
    technologies: ['Google Speech API', 'Amazon Polly', 'WebRTC', 'Node.js', 'WebSocket', 'TensorFlow'],
    demoUrl: 'https://ziontechgroup.com/ai-voice-assistant/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-voice-assistant',
    apiUrl: 'https://api.ziontechgroup.com/v1/voice-assistant',
    status: 'active',
    launchDate: '2024-02-15',
    lastUpdated: '2024-10-15',
    icon: 'MicrophoneIcon',
    gradient: 'from-orange-500 to-red-500',
    glow: 'shadow-orange-500/25',
    route: '/ai-voice-assistant'
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection',
    description: 'Advanced fraud detection system using machine learning algorithms to identify and prevent fraudulent activities in real-time.',
    shortDescription: 'Real-time fraud detection with ML algorithms',
    category: 'ai',
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799,
      currency: 'USD'
    },
    features: [
      'Real-time Detection',
      'Machine Learning Models',
      'Pattern Recognition',
      'Risk Scoring',
      'API Integration',
      'Dashboard Analytics',
      'Custom Rules',
      'Alert System'
    ],
    benefits: [
      'Fraud Prevention',
      'Cost Reduction',
      'Risk Mitigation',
      'Real-time Monitoring',
      'Scalable Solution',
      'Easy Integration'
    ],
    useCases: [
      'Payment Fraud',
      'Identity Theft',
      'Account Takeover',
      'Transaction Monitoring',
      'Credit Card Fraud',
      'Insurance Fraud'
    ],
    technologies: ['TensorFlow', 'Scikit-learn', 'Python', 'FastAPI', 'Redis', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/ai-fraud-detection/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-fraud-detection',
    apiUrl: 'https://api.ziontechgroup.com/v1/fraud-detection',
    status: 'active',
    launchDate: '2024-01-10',
    lastUpdated: '2024-10-15',
    icon: 'ShieldCheckIcon',
    gradient: 'from-red-500 to-pink-500',
    glow: 'shadow-red-500/25',
    route: '/ai-fraud-detection'
  },
  {
    id: 'ai-image-recognition',
    name: 'AI Image Recognition',
    description: 'Advanced image recognition and computer vision services for object detection, classification, and analysis.',
    shortDescription: 'Computer vision and image analysis services',
    category: 'ai',
    pricing: {
      basic: 59,
      pro: 179,
      enterprise: 499,
      currency: 'USD'
    },
    features: [
      'Object Detection',
      'Image Classification',
      'Face Recognition',
      'OCR Integration',
      'Batch Processing',
      'API Endpoints',
      'Custom Models',
      'Real-time Analysis'
    ],
    benefits: [
      'Automated Analysis',
      'High Accuracy',
      'Scalable Processing',
      'Easy Integration',
      'Cost Effective',
      'Real-time Results'
    ],
    useCases: [
      'Quality Control',
      'Security Systems',
      'Medical Imaging',
      'E-commerce',
      'Social Media',
      'Automotive'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'Python', 'FastAPI', 'AWS S3'],
    demoUrl: 'https://ziontechgroup.com/ai-image-recognition/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-image-recognition',
    apiUrl: 'https://api.ziontechgroup.com/v1/image-recognition',
    status: 'active',
    launchDate: '2024-01-25',
    lastUpdated: '2024-10-15',
    icon: 'EyeIcon',
    gradient: 'from-indigo-500 to-purple-500',
    glow: 'shadow-indigo-500/25',
    route: '/ai-image-recognition'
  },
  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Comprehensive cloud infrastructure solutions with automated scaling, monitoring, and security management.',
    shortDescription: 'Scalable cloud infrastructure and management',
    category: 'cloud',
    pricing: {
      basic: 199,
      pro: 599,
      enterprise: 1499,
      currency: 'USD'
    },
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Monitoring & Alerting',
      'Security Management',
      'Backup & Recovery',
      'Multi-cloud Support',
      'Cost Optimization',
      '24/7 Support'
    ],
    benefits: [
      'Scalable Architecture',
      'Cost Optimization',
      'High Availability',
      'Security Compliance',
      'Easy Management',
      'Global Reach'
    ],
    useCases: [
      'Web Applications',
      'Mobile Backends',
      'Data Processing',
      'E-commerce Platforms',
      'SaaS Applications',
      'Enterprise Systems'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    demoUrl: 'https://ziontechgroup.com/cloud-infrastructure/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/cloud-infrastructure',
    apiUrl: 'https://api.ziontechgroup.com/v1/cloud-infrastructure',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-15',
    icon: 'CloudIcon',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/25',
    route: '/cloud-infrastructure'
  },
  {
    id: 'api-development',
    name: 'API Development',
    description: 'Professional API development services with comprehensive documentation, testing, and monitoring capabilities.',
    shortDescription: 'Professional API development and management',
    category: 'it',
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999,
      currency: 'USD'
    },
    features: [
      'RESTful APIs',
      'GraphQL Support',
      'API Documentation',
      'Testing Suite',
      'Rate Limiting',
      'Authentication',
      'Monitoring',
      'Versioning'
    ],
    benefits: [
      'Fast Development',
      'Scalable Architecture',
      'Comprehensive Testing',
      'Easy Integration',
      'Security Focused',
      'Well Documented'
    ],
    useCases: [
      'Mobile Apps',
      'Web Applications',
      'Third-party Integrations',
      'Microservices',
      'Data Exchange',
      'IoT Systems'
    ],
    technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
    demoUrl: 'https://ziontechgroup.com/api-development/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/api-development',
    apiUrl: 'https://api.ziontechgroup.com/v1/api-development',
    status: 'active',
    launchDate: '2024-01-05',
    lastUpdated: '2024-10-15',
    icon: 'CodeBracketIcon',
    gradient: 'from-green-500 to-teal-500',
    glow: 'shadow-green-500/25',
    route: '/api-development'
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation',
    description: 'Complete DevOps automation solutions with CI/CD pipelines, infrastructure as code, and automated testing.',
    shortDescription: 'Automated DevOps and CI/CD solutions',
    category: 'devops',
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    features: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Automated Testing',
      'Monitoring & Alerting',
      'Security Scanning',
      'Deployment Automation',
      'Configuration Management',
      'Disaster Recovery'
    ],
    benefits: [
      'Faster Deployments',
      'Reduced Errors',
      'Cost Savings',
      'Improved Security',
      'Better Monitoring',
      'Scalable Operations'
    ],
    useCases: [
      'Software Development',
      'Web Applications',
      'Mobile Apps',
      'Microservices',
      'Data Pipelines',
      'Enterprise Systems'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    demoUrl: 'https://ziontechgroup.com/devops-automation/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/devops-automation',
    apiUrl: 'https://api.ziontechgroup.com/v1/devops-automation',
    status: 'active',
    launchDate: '2024-01-12',
    lastUpdated: '2024-10-15',
    icon: 'CogIcon',
    gradient: 'from-orange-500 to-yellow-500',
    glow: 'shadow-orange-500/25',
    route: '/devops-automation'
  },
  // Blockchain Services
  {
    id: 'blockchain-solutions',
    name: 'Blockchain Solutions',
    description: 'Comprehensive blockchain development services including smart contracts, DeFi applications, and NFT platforms.',
    shortDescription: 'Blockchain development and smart contract solutions',
    category: 'blockchain',
    pricing: {
      basic: 499,
      pro: 1299,
      enterprise: 2999,
      currency: 'USD'
    },
    features: [
      'Smart Contract Development',
      'DeFi Applications',
      'NFT Platforms',
      'Token Development',
      'Wallet Integration',
      'Security Auditing',
      'Cross-chain Support',
      'DApp Development'
    ],
    benefits: [
      'Decentralized Solutions',
      'Enhanced Security',
      'Transparency',
      'Cost Reduction',
      'Global Access',
      'Innovation Focus'
    ],
    useCases: [
      'Cryptocurrency Exchanges',
      'DeFi Platforms',
      'NFT Marketplaces',
      'Supply Chain',
      'Identity Management',
      'Voting Systems'
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'IPFS', 'MetaMask'],
    demoUrl: 'https://ziontechgroup.com/blockchain-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/blockchain-solutions',
    apiUrl: 'https://api.ziontechgroup.com/v1/blockchain-solutions',
    status: 'active',
    launchDate: '2024-02-01',
    lastUpdated: '2024-10-15',
    icon: 'CircleStackIcon',
    gradient: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-500/25',
    route: '/blockchain-solutions'
  },
  // IoT Services
  {
    id: 'iot-solutions',
    name: 'IoT Solutions',
    description: 'Complete IoT solutions with device management, data analytics, and real-time monitoring capabilities.',
    shortDescription: 'Internet of Things solutions and device management',
    category: 'iot',
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2499,
      currency: 'USD'
    },
    features: [
      'Device Management',
      'Real-time Monitoring',
      'Data Analytics',
      'Edge Computing',
      'Security Management',
      'API Integration',
      'Dashboard Analytics',
      'Alert System'
    ],
    benefits: [
      'Real-time Insights',
      'Automated Operations',
      'Cost Reduction',
      'Improved Efficiency',
      'Scalable Architecture',
      'Easy Integration'
    ],
    useCases: [
      'Smart Cities',
      'Industrial Monitoring',
      'Agriculture',
      'Healthcare',
      'Energy Management',
      'Transportation'
    ],
    technologies: ['MQTT', 'Node.js', 'Python', 'MongoDB', 'Grafana', 'InfluxDB'],
    demoUrl: 'https://ziontechgroup.com/iot-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/iot-solutions',
    apiUrl: 'https://api.ziontechgroup.com/v1/iot-solutions',
    status: 'active',
    launchDate: '2024-02-10',
    lastUpdated: '2024-10-15',
    icon: 'SignalIcon',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/25',
    route: '/iot-solutions'
  },

  // Additional AI Services
  {
    id: 'ai-lead-scoring',
    name: 'AI Lead Scoring',
    description: 'Intelligent lead scoring system that uses machine learning to predict lead quality and conversion probability.',
    shortDescription: 'AI-powered lead scoring and qualification',
    category: 'ai',
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 499,
      currency: 'USD'
    },
    features: [
      'Machine Learning Models',
      'Behavioral Analysis',
      'Predictive Scoring',
      'CRM Integration',
      'Real-time Updates',
      'Custom Scoring Rules',
      'Analytics Dashboard',
      'API Integration'
    ],
    benefits: [
      'Higher Conversion Rates',
      'Reduced Sales Cycle',
      'Better Lead Quality',
      'Automated Qualification',
      'Data-driven Decisions',
      'ROI Optimization'
    ],
    useCases: [
      'Sales Teams',
      'Marketing Automation',
      'Lead Nurturing',
      'Customer Acquisition',
      'Revenue Optimization',
      'Sales Forecasting'
    ],
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/ai-lead-scoring/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-lead-scoring',
    apiUrl: 'https://api.ziontechgroup.com/v1/lead-scoring',
    status: 'active',
    launchDate: '2024-03-01',
    lastUpdated: '2024-10-15',
    icon: 'ChartBarIcon',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/25',
    route: '/ai-lead-scoring'
  },
  {
    id: 'ai-predictive-maintenance',
    name: 'AI Predictive Maintenance',
    description: 'Predictive maintenance system that uses AI to predict equipment failures and optimize maintenance schedules.',
    shortDescription: 'AI-powered predictive maintenance and equipment monitoring',
    category: 'ai',
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    features: [
      'Failure Prediction',
      'Sensor Data Analysis',
      'Maintenance Scheduling',
      'Cost Optimization',
      'Real-time Alerts',
      'Historical Analysis',
      'Custom Models',
      'Integration APIs'
    ],
    benefits: [
      'Reduced Downtime',
      'Cost Savings',
      'Extended Equipment Life',
      'Proactive Maintenance',
      'Data-driven Insights',
      'ROI Maximization'
    ],
    useCases: [
      'Manufacturing',
      'Industrial Equipment',
      'Fleet Management',
      'HVAC Systems',
      'Machinery Monitoring',
      'Asset Management'
    ],
    technologies: ['Python', 'TensorFlow', 'IoT Sensors', 'Time Series Analysis', 'React', 'Node.js'],
    demoUrl: 'https://ziontechgroup.com/ai-predictive-maintenance/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-predictive-maintenance',
    apiUrl: 'https://api.ziontechgroup.com/v1/predictive-maintenance',
    status: 'active',
    launchDate: '2024-03-05',
    lastUpdated: '2024-10-15',
    icon: 'CogIcon',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/25',
    route: '/ai-predictive-maintenance'
  },
  {
    id: 'ai-price-optimizer',
    name: 'AI Price Optimizer',
    description: 'Dynamic pricing optimization using AI to maximize revenue and profit through intelligent price adjustments.',
    shortDescription: 'AI-powered dynamic pricing and revenue optimization',
    category: 'ai',
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999,
      currency: 'USD'
    },
    features: [
      'Dynamic Pricing',
      'Market Analysis',
      'Competitor Monitoring',
      'Demand Forecasting',
      'Revenue Optimization',
      'A/B Testing',
      'Real-time Updates',
      'Analytics Dashboard'
    ],
    benefits: [
      'Revenue Maximization',
      'Competitive Advantage',
      'Data-driven Pricing',
      'Automated Optimization',
      'Market Responsiveness',
      'Profit Enhancement'
    ],
    useCases: [
      'E-commerce',
      'SaaS Pricing',
      'Hotel Booking',
      'Airlines',
      'Retail',
      'Subscription Services'
    ],
    technologies: ['Python', 'Machine Learning', 'React', 'Node.js', 'Redis', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/ai-price-optimizer/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-price-optimizer',
    apiUrl: 'https://api.ziontechgroup.com/v1/price-optimizer',
    status: 'active',
    launchDate: '2024-03-10',
    lastUpdated: '2024-10-15',
    icon: 'CurrencyDollarIcon',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/25',
    route: '/ai-price-optimizer'
  },
  {
    id: 'ai-scheduling-assistant',
    name: 'AI Scheduling Assistant',
    description: 'Intelligent scheduling system that automates meeting coordination, resource allocation, and calendar management.',
    shortDescription: 'AI-powered scheduling and calendar automation',
    category: 'ai',
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199,
      currency: 'USD'
    },
    features: [
      'Smart Scheduling',
      'Calendar Integration',
      'Conflict Resolution',
      'Resource Optimization',
      'Time Zone Handling',
      'Automated Reminders',
      'Meeting Analytics',
      'Custom Rules'
    ],
    benefits: [
      'Time Savings',
      'Reduced Conflicts',
      'Better Resource Utilization',
      'Improved Productivity',
      'Automated Coordination',
      'Enhanced Efficiency'
    ],
    useCases: [
      'Office Scheduling',
      'Healthcare Appointments',
      'Service Booking',
      'Event Planning',
      'Resource Management',
      'Team Coordination'
    ],
    technologies: ['React', 'Node.js', 'Calendar APIs', 'Machine Learning', 'PostgreSQL', 'Redis'],
    demoUrl: 'https://ziontechgroup.com/ai-scheduling-assistant/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-scheduling-assistant',
    apiUrl: 'https://api.ziontechgroup.com/v1/scheduling-assistant',
    status: 'active',
    launchDate: '2024-03-15',
    lastUpdated: '2024-10-15',
    icon: 'ClockIcon',
    gradient: 'from-blue-500 to-indigo-500',
    glow: 'shadow-blue-500/25',
    route: '/ai-scheduling-assistant'
  },
  {
    id: 'ai-crm-optimizer',
    name: 'AI CRM Optimizer',
    description: 'AI-powered CRM optimization that enhances customer relationships through intelligent insights and automation.',
    shortDescription: 'AI-enhanced CRM with intelligent customer insights',
    category: 'ai',
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599,
      currency: 'USD'
    },
    features: [
      'Customer Insights',
      'Sales Forecasting',
      'Automated Follow-ups',
      'Lead Prioritization',
      'Churn Prediction',
      'Personalization',
      'Analytics Dashboard',
      'Integration APIs'
    ],
    benefits: [
      'Improved Customer Relations',
      'Higher Sales Conversion',
      'Reduced Churn',
      'Automated Processes',
      'Data-driven Insights',
      'Enhanced Productivity'
    ],
    useCases: [
      'Sales Teams',
      'Customer Success',
      'Marketing Teams',
      'Account Management',
      'Lead Generation',
      'Customer Retention'
    ],
    technologies: ['Python', 'Machine Learning', 'React', 'Node.js', 'Salesforce API', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/ai-crm-optimizer/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-crm-optimizer',
    apiUrl: 'https://api.ziontechgroup.com/v1/crm-optimizer',
    status: 'active',
    launchDate: '2024-03-20',
    lastUpdated: '2024-10-15',
    icon: 'UserGroupIcon',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/25',
    route: '/ai-crm-optimizer'
  },
  {
    id: 'ai-data-visualizer',
    name: 'AI Data Visualizer',
    description: 'Intelligent data visualization platform that automatically creates meaningful charts and insights from your data.',
    shortDescription: 'AI-powered data visualization and analytics',
    category: 'ai',
    pricing: {
      basic: 49,
      pro: 129,
      enterprise: 349,
      currency: 'USD'
    },
    features: [
      'Auto Chart Generation',
      'Smart Insights',
      'Interactive Dashboards',
      'Data Storytelling',
      'Custom Visualizations',
      'Real-time Updates',
      'Export Options',
      'API Integration'
    ],
    benefits: [
      'Faster Insights',
      'Better Data Understanding',
      'Automated Analysis',
      'Professional Charts',
      'Easy Sharing',
      'Data-driven Decisions'
    ],
    useCases: [
      'Business Intelligence',
      'Data Analysis',
      'Reporting',
      'Presentations',
      'Research',
      'Monitoring'
    ],
    technologies: ['D3.js', 'React', 'Python', 'Machine Learning', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/ai-data-visualizer/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-data-visualizer',
    apiUrl: 'https://api.ziontechgroup.com/v1/data-visualizer',
    status: 'active',
    launchDate: '2024-03-25',
    lastUpdated: '2024-10-15',
    icon: 'ChartBarIcon',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/25',
    route: '/ai-data-visualizer'
  },
  {
    id: 'ai-email-optimizer',
    name: 'AI Email Optimizer',
    description: 'AI-powered email optimization that improves open rates, click-through rates, and overall email performance.',
    shortDescription: 'AI-enhanced email marketing and optimization',
    category: 'ai',
    pricing: {
      basic: 39,
      pro: 99,
      enterprise: 249,
      currency: 'USD'
    },
    features: [
      'Subject Line Optimization',
      'Content Personalization',
      'Send Time Optimization',
      'A/B Testing',
      'Performance Analytics',
      'Audience Segmentation',
      'Template Generation',
      'Integration APIs'
    ],
    benefits: [
      'Higher Open Rates',
      'Better Engagement',
      'Improved Deliverability',
      'Automated Optimization',
      'Data-driven Campaigns',
      'ROI Maximization'
    ],
    useCases: [
      'Email Marketing',
      'Newsletter Campaigns',
      'Customer Communication',
      'Lead Nurturing',
      'Product Announcements',
      'Event Promotion'
    ],
    technologies: ['Python', 'Machine Learning', 'React', 'Node.js', 'Email APIs', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/ai-email-optimizer/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-email-optimizer',
    apiUrl: 'https://api.ziontechgroup.com/v1/email-optimizer',
    status: 'active',
    launchDate: '2024-04-01',
    lastUpdated: '2024-10-15',
    icon: 'EnvelopeIcon',
    gradient: 'from-orange-500 to-red-500',
    glow: 'shadow-orange-500/25',
    route: '/ai-email-optimizer'
  },

  // Micro SaaS Solutions
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler',
    description: 'Comprehensive social media management platform with AI-powered content scheduling and analytics.',
    shortDescription: 'AI-powered social media scheduling and management',
    category: 'saas',
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 99,
      currency: 'USD'
    },
    features: [
      'Multi-platform Scheduling',
      'Content Calendar',
      'Analytics Dashboard',
      'Hashtag Optimization',
      'Auto-posting',
      'Engagement Tracking',
      'Team Collaboration',
      'Content Library'
    ],
    benefits: [
      'Time Savings',
      'Consistent Posting',
      'Better Engagement',
      'Analytics Insights',
      'Team Coordination',
      'Content Optimization'
    ],
    useCases: [
      'Social Media Marketing',
      'Content Creation',
      'Brand Management',
      'Community Building',
      'Influencer Marketing',
      'Customer Engagement'
    ],
    technologies: ['React', 'Node.js', 'Social Media APIs', 'MongoDB', 'Redis', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/social-media-scheduler/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/social-media-scheduler',
    apiUrl: 'https://api.ziontechgroup.com/v1/social-scheduler',
    status: 'active',
    launchDate: '2024-04-05',
    lastUpdated: '2024-10-15',
    icon: 'ShareIcon',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/25',
    route: '/social-media-scheduler'
  },
  {
    id: 'expense-tracker-pro',
    name: 'Expense Tracker Pro',
    description: 'Advanced expense tracking and financial management platform with AI-powered categorization and insights.',
    shortDescription: 'AI-powered expense tracking and financial management',
    category: 'saas',
    pricing: {
      basic: 9,
      pro: 29,
      enterprise: 79,
      currency: 'USD'
    },
    features: [
      'Receipt Scanning',
      'AI Categorization',
      'Budget Management',
      'Expense Reports',
      'Tax Preparation',
      'Multi-currency Support',
      'Team Management',
      'Analytics Dashboard'
    ],
    benefits: [
      'Automated Tracking',
      'Tax Compliance',
      'Budget Control',
      'Time Savings',
      'Financial Insights',
      'Team Coordination'
    ],
    useCases: [
      'Personal Finance',
      'Business Expenses',
      'Team Management',
      'Tax Preparation',
      'Budget Planning',
      'Financial Reporting'
    ],
    technologies: ['React', 'Node.js', 'OCR Technology', 'Machine Learning', 'PostgreSQL', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/expense-tracker-pro/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/expense-tracker-pro',
    apiUrl: 'https://api.ziontechgroup.com/v1/expense-tracker',
    status: 'active',
    launchDate: '2024-04-10',
    lastUpdated: '2024-10-15',
    icon: 'CurrencyDollarIcon',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/25',
    route: '/expense-tracker-pro'
  },
  {
    id: 'task-manager-pro',
    name: 'Task Manager Pro',
    description: 'AI-powered task management platform with intelligent prioritization, automation, and team collaboration.',
    shortDescription: 'AI-enhanced task management and project coordination',
    category: 'saas',
    pricing: {
      basic: 15,
      pro: 39,
      enterprise: 99,
      currency: 'USD'
    },
    features: [
      'AI Prioritization',
      'Smart Scheduling',
      'Team Collaboration',
      'Project Tracking',
      'Time Management',
      'Progress Analytics',
      'Automation Rules',
      'Integration APIs'
    ],
    benefits: [
      'Improved Productivity',
      'Better Organization',
      'Team Coordination',
      'Automated Workflows',
      'Progress Tracking',
      'Time Optimization'
    ],
    useCases: [
      'Project Management',
      'Team Coordination',
      'Personal Productivity',
      'Workflow Automation',
      'Goal Tracking',
      'Resource Planning'
    ],
    technologies: ['React', 'Node.js', 'Machine Learning', 'PostgreSQL', 'Redis', 'WebSocket'],
    demoUrl: 'https://ziontechgroup.com/task-manager-pro/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/task-manager-pro',
    apiUrl: 'https://api.ziontechgroup.com/v1/task-manager',
    status: 'active',
    launchDate: '2024-04-15',
    lastUpdated: '2024-10-15',
    icon: 'CheckCircleIcon',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/25',
    route: '/task-manager-pro'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Advanced AI content creation platform that generates high-quality text, images, and multimedia content.',
    shortDescription: 'AI-powered content creation and generation',
    category: 'ai',
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199,
      currency: 'USD'
    },
    features: [
      'Text Generation',
      'Image Creation',
      'Video Generation',
      'Content Templates',
      'Brand Voice Training',
      'Multi-language Support',
      'SEO Optimization',
      'Plagiarism Detection'
    ],
    benefits: [
      'Faster Content Creation',
      'Consistent Quality',
      'Cost Reduction',
      'Scalable Production',
      'SEO Optimization',
      'Brand Consistency'
    ],
    useCases: [
      'Content Marketing',
      'Blog Writing',
      'Social Media',
      'Product Descriptions',
      'Email Campaigns',
      'Website Content'
    ],
    technologies: ['OpenAI GPT-4', 'DALL-E', 'React', 'Node.js', 'MongoDB', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/ai-content-generator/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-content-generator',
    apiUrl: 'https://api.ziontechgroup.com/v1/content-generator',
    status: 'active',
    launchDate: '2024-04-20',
    lastUpdated: '2024-10-15',
    icon: 'DocumentTextIcon',
    gradient: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-500/25',
    route: '/ai-content-generator'
  },
  {
    id: 'ai-translator',
    name: 'AI Translator',
    description: 'Advanced AI translation service supporting 100+ languages with context-aware and industry-specific translations.',
    shortDescription: 'AI-powered translation service for 100+ languages',
    category: 'ai',
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129,
      currency: 'USD'
    },
    features: [
      '100+ Languages',
      'Context-aware Translation',
      'Industry-specific Models',
      'Real-time Translation',
      'Document Translation',
      'Voice Translation',
      'API Integration',
      'Quality Assurance'
    ],
    benefits: [
      'Accurate Translations',
      'Fast Processing',
      'Cost-effective',
      'Easy Integration',
      'Scalable Service',
      'Professional Quality'
    ],
    useCases: [
      'Website Localization',
      'Document Translation',
      'Customer Support',
      'E-commerce',
      'Content Creation',
      'Communication'
    ],
    technologies: ['Google Translate API', 'OpenAI', 'React', 'Node.js', 'MongoDB', 'Redis'],
    demoUrl: 'https://ziontechgroup.com/ai-translator/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-translator',
    apiUrl: 'https://api.ziontechgroup.com/v1/translator',
    status: 'active',
    launchDate: '2024-04-25',
    lastUpdated: '2024-10-15',
    icon: 'GlobeAltIcon',
    gradient: 'from-teal-500 to-cyan-500',
    glow: 'shadow-teal-500/25',
    route: '/ai-translator'
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator',
    description: 'AI-powered video creation platform that generates professional videos from text, images, and templates.',
    shortDescription: 'AI-powered video creation and editing platform',
    category: 'ai',
    pricing: {
      basic: 49,
      pro: 129,
      enterprise: 349,
      currency: 'USD'
    },
    features: [
      'Text-to-Video',
      'Template Library',
      'Auto-editing',
      'Voice Synthesis',
      'Music Integration',
      'Brand Customization',
      'Export Options',
      'API Integration'
    ],
    benefits: [
      'Fast Video Creation',
      'Professional Quality',
      'Cost Reduction',
      'Easy to Use',
      'Scalable Production',
      'Brand Consistency'
    ],
    useCases: [
      'Marketing Videos',
      'Social Media Content',
      'Training Materials',
      'Product Demos',
      'Educational Content',
      'Promotional Videos'
    ],
    technologies: ['OpenAI Sora', 'FFmpeg', 'React', 'Node.js', 'AWS S3', 'WebRTC'],
    demoUrl: 'https://ziontechgroup.com/ai-video-generator/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-video-generator',
    apiUrl: 'https://api.ziontechgroup.com/v1/video-generator',
    status: 'active',
    launchDate: '2024-05-01',
    lastUpdated: '2024-10-15',
    icon: 'VideoCameraIcon',
    gradient: 'from-red-500 to-pink-500',
    glow: 'shadow-red-500/25',
    route: '/ai-video-generator'
  },
  {
    id: 'ai-audio-processor',
    name: 'AI Audio Processor',
    description: 'Advanced AI audio processing platform for noise reduction, enhancement, transcription, and voice synthesis.',
    shortDescription: 'AI-powered audio processing and enhancement',
    category: 'ai',
    pricing: {
      basic: 39,
      pro: 99,
      enterprise: 249,
      currency: 'USD'
    },
    features: [
      'Noise Reduction',
      'Audio Enhancement',
      'Speech-to-Text',
      'Voice Synthesis',
      'Audio Transcription',
      'Music Generation',
      'Podcast Editing',
      'Real-time Processing'
    ],
    benefits: [
      'Professional Audio Quality',
      'Automated Processing',
      'Time Savings',
      'Cost Reduction',
      'Easy Integration',
      'Scalable Service'
    ],
    useCases: [
      'Podcast Production',
      'Video Editing',
      'Voice Overs',
      'Transcription Services',
      'Music Production',
      'Accessibility'
    ],
    technologies: ['Web Audio API', 'FFmpeg', 'OpenAI Whisper', 'React', 'Node.js', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/ai-audio-processor/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-audio-processor',
    apiUrl: 'https://api.ziontechgroup.com/v1/audio-processor',
    status: 'active',
    launchDate: '2024-05-05',
    lastUpdated: '2024-10-15',
    icon: 'MicrophoneIcon',
    gradient: 'from-indigo-500 to-purple-500',
    glow: 'shadow-indigo-500/25',
    route: '/ai-audio-processor'
  },

  // Advanced IT Solutions
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Professional web development services with modern frameworks, responsive design, and performance optimization.',
    shortDescription: 'Professional web development and design services',
    category: 'web',
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    features: [
      'Responsive Design',
      'Modern Frameworks',
      'Performance Optimization',
      'SEO Optimization',
      'Security Implementation',
      'CMS Integration',
      'E-commerce Solutions',
      'Maintenance Support'
    ],
    benefits: [
      'Professional Quality',
      'Mobile Responsive',
      'Fast Loading',
      'SEO Optimized',
      'Secure & Reliable',
      'Scalable Architecture'
    ],
    useCases: [
      'Corporate Websites',
      'E-commerce Platforms',
      'Web Applications',
      'Portfolio Sites',
      'Landing Pages',
      'SaaS Platforms'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/web-development/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/web-development',
    apiUrl: 'https://api.ziontechgroup.com/v1/web-development',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-15',
    icon: 'GlobeAltIcon',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/25',
    route: '/web-development'
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile app development with modern technologies and performance optimization.',
    shortDescription: 'Professional mobile app development services',
    category: 'mobile',
    pricing: {
      basic: 499,
      pro: 1299,
      enterprise: 2999,
      currency: 'USD'
    },
    features: [
      'Native Development',
      'Cross-platform Apps',
      'Performance Optimization',
      'App Store Optimization',
      'Push Notifications',
      'Offline Support',
      'Security Implementation',
      'Analytics Integration'
    ],
    benefits: [
      'High Performance',
      'Native Experience',
      'Cross-platform Compatibility',
      'App Store Ready',
      'Secure & Reliable',
      'Scalable Architecture'
    ],
    useCases: [
      'Business Apps',
      'E-commerce Apps',
      'Social Media Apps',
      'Productivity Apps',
      'Gaming Apps',
      'IoT Apps'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'Firebase'],
    demoUrl: 'https://ziontechgroup.com/mobile-development/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/mobile-development',
    apiUrl: 'https://api.ziontechgroup.com/v1/mobile-development',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-15',
    icon: 'DevicePhoneMobileIcon',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/25',
    route: '/mobile-development'
  },
  {
    id: 'database-management',
    name: 'Database Management',
    description: 'Comprehensive database design, optimization, and management services for optimal performance and security.',
    shortDescription: 'Professional database design and management services',
    category: 'data',
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    features: [
      'Database Design',
      'Performance Optimization',
      'Security Implementation',
      'Backup & Recovery',
      'Monitoring & Alerting',
      'Migration Services',
      'Cloud Integration',
      '24/7 Support'
    ],
    benefits: [
      'Optimal Performance',
      'Data Security',
      'Reliable Backup',
      'Cost Optimization',
      'Scalable Architecture',
      'Expert Support'
    ],
    useCases: [
      'Application Databases',
      'Data Warehousing',
      'Analytics Platforms',
      'E-commerce Systems',
      'CRM Systems',
      'IoT Data Storage'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS RDS', 'Docker'],
    demoUrl: 'https://ziontechgroup.com/database-management/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/database-management',
    apiUrl: 'https://api.ziontechgroup.com/v1/database-management',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-15',
    icon: 'CircleStackIcon',
    gradient: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-500/25',
    route: '/database-management'
  },
  {
    id: 'network-infrastructure',
    name: 'Network Infrastructure',
    description: 'Enterprise-grade network design, implementation, and management for secure and scalable connectivity.',
    shortDescription: 'Enterprise network infrastructure and security',
    category: 'it',
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2499,
      currency: 'USD'
    },
    features: [
      'Network Design',
      'Security Implementation',
      'Performance Optimization',
      'Monitoring & Management',
      'Disaster Recovery',
      'Cloud Integration',
      'VPN Solutions',
      '24/7 Support'
    ],
    benefits: [
      'Secure Connectivity',
      'High Performance',
      'Reliable Infrastructure',
      'Cost Optimization',
      'Scalable Design',
      'Expert Management'
    ],
    useCases: [
      'Corporate Networks',
      'Data Centers',
      'Cloud Connectivity',
      'Remote Work',
      'IoT Networks',
      'Security Systems'
    ],
    technologies: ['Cisco', 'Juniper', 'Fortinet', 'AWS', 'Azure', 'Docker'],
    demoUrl: 'https://ziontechgroup.com/network-infrastructure/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/network-infrastructure',
    apiUrl: 'https://api.ziontechgroup.com/v1/network-infrastructure',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-15',
    icon: 'SignalIcon',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/25',
    route: '/network-infrastructure'
  },
  {
    id: 'security-audit',
    name: 'Security Audit',
    description: 'Comprehensive security assessment and penetration testing to identify vulnerabilities and strengthen defenses.',
    shortDescription: 'Professional security audit and penetration testing',
    category: 'security',
    pricing: {
      basic: 599,
      pro: 1499,
      enterprise: 3999,
      currency: 'USD'
    },
    features: [
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Compliance',
      'Risk Analysis',
      'Remediation Guidance',
      'Ongoing Monitoring',
      'Security Training',
      'Incident Response'
    ],
    benefits: [
      'Enhanced Security',
      'Compliance Assurance',
      'Risk Mitigation',
      'Expert Analysis',
      'Ongoing Protection',
      'Peace of Mind'
    ],
    useCases: [
      'Web Applications',
      'Network Security',
      'Compliance Audits',
      'Data Protection',
      'Cloud Security',
      'Mobile Security'
    ],
    technologies: ['OWASP', 'Nmap', 'Burp Suite', 'Metasploit', 'Nessus', 'Custom Tools'],
    demoUrl: 'https://ziontechgroup.com/security-audit/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/security-audit',
    apiUrl: 'https://api.ziontechgroup.com/v1/security-audit',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-15',
    icon: 'ShieldCheckIcon',
    gradient: 'from-red-500 to-orange-500',
    glow: 'shadow-red-500/25',
    route: '/security-audit'
  },

  // Advanced Solutions
  {
    id: 'quantum-computing-solutions',
    name: 'Quantum Computing Solutions',
    description: 'Cutting-edge quantum computing services for optimization, cryptography, and advanced problem-solving.',
    shortDescription: 'Quantum computing solutions and optimization',
    category: 'it',
    pricing: {
      basic: 999,
      pro: 2999,
      enterprise: 7999,
      currency: 'USD'
    },
    features: [
      'Quantum Algorithms',
      'Optimization Problems',
      'Cryptography Solutions',
      'Quantum Simulation',
      'Research & Development',
      'Custom Solutions',
      'Expert Consultation',
      'Training Programs'
    ],
    benefits: [
      'Exponential Speedup',
      'Advanced Optimization',
      'Future-proof Technology',
      'Competitive Advantage',
      'Research Innovation',
      'Expert Guidance'
    ],
    useCases: [
      'Financial Modeling',
      'Drug Discovery',
      'Supply Chain Optimization',
      'Cryptography',
      'Machine Learning',
      'Scientific Research'
    ],
    technologies: ['Qiskit', 'Cirq', 'Q#', 'Python', 'Quantum Hardware', 'Cloud Quantum'],
    demoUrl: 'https://ziontechgroup.com/quantum-computing-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/quantum-computing-solutions',
    apiUrl: 'https://api.ziontechgroup.com/v1/quantum-computing',
    status: 'active',
    launchDate: '2024-06-01',
    lastUpdated: '2024-10-15',
    icon: 'CpuChipIcon',
    gradient: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/25',
    route: '/quantum-computing-solutions'
  },
  {
    id: 'edge-computing-solutions',
    name: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for real-time processing, reduced latency, and distributed applications.',
    shortDescription: 'Edge computing infrastructure and real-time processing',
    category: 'cloud',
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    features: [
      'Edge Infrastructure',
      'Real-time Processing',
      'Low Latency',
      'Distributed Computing',
      'IoT Integration',
      'Edge Analytics',
      'Security Management',
      'Global Deployment'
    ],
    benefits: [
      'Reduced Latency',
      'Real-time Processing',
      'Bandwidth Optimization',
      'Improved Performance',
      'Cost Efficiency',
      'Global Reach'
    ],
    useCases: [
      'IoT Applications',
      'Real-time Analytics',
      'Content Delivery',
      'Autonomous Vehicles',
      'Smart Cities',
      'Industrial IoT'
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS Edge', 'Azure Edge', 'Google Edge', '5G'],
    demoUrl: 'https://ziontechgroup.com/edge-computing-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/edge-computing-solutions',
    apiUrl: 'https://api.ziontechgroup.com/v1/edge-computing',
    status: 'active',
    launchDate: '2024-06-05',
    lastUpdated: '2024-10-15',
    icon: 'CloudIcon',
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'shadow-cyan-500/25',
    route: '/edge-computing-solutions'
  },
  {
    id: 'augmented-reality-solutions',
    name: 'Augmented Reality Solutions',
    description: 'AR development services for immersive experiences, training, and interactive applications.',
    shortDescription: 'Augmented reality development and immersive experiences',
    category: 'it',
    pricing: {
      basic: 799,
      pro: 1999,
      enterprise: 4999,
      currency: 'USD'
    },
    features: [
      'AR App Development',
      '3D Object Recognition',
      'Markerless Tracking',
      'Real-time Rendering',
      'Cross-platform Support',
      'Cloud Integration',
      'Analytics Dashboard',
      'Custom Solutions'
    ],
    benefits: [
      'Immersive Experiences',
      'Enhanced Engagement',
      'Interactive Learning',
      'Brand Differentiation',
      'Innovative Solutions',
      'Future-ready Technology'
    ],
    useCases: [
      'Retail & E-commerce',
      'Education & Training',
      'Healthcare',
      'Manufacturing',
      'Real Estate',
      'Entertainment'
    ],
    technologies: ['Unity', 'ARCore', 'ARKit', 'WebXR', 'React Native', 'Unreal Engine'],
    demoUrl: 'https://ziontechgroup.com/augmented-reality-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/augmented-reality-solutions',
    apiUrl: 'https://api.ziontechgroup.com/v1/ar-solutions',
    status: 'active',
    launchDate: '2024-06-10',
    lastUpdated: '2024-10-15',
    icon: 'EyeIcon',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/25',
    route: '/augmented-reality-solutions'
  },
  {
    id: 'virtual-reality-solutions',
    name: 'Virtual Reality Solutions',
    description: 'VR development services for immersive training, virtual experiences, and interactive applications.',
    shortDescription: 'Virtual reality development and immersive experiences',
    category: 'it',
    pricing: {
      basic: 999,
      pro: 2499,
      enterprise: 5999,
      currency: 'USD'
    },
    features: [
      'VR App Development',
      'Immersive Environments',
      'Hand Tracking',
      'Spatial Audio',
      'Multi-user Support',
      'Cloud Integration',
      'Analytics Dashboard',
      'Custom Solutions'
    ],
    benefits: [
      'Immersive Training',
      'Enhanced Learning',
      'Remote Collaboration',
      'Cost Reduction',
      'Safe Simulation',
      'Innovative Solutions'
    ],
    useCases: [
      'Training & Simulation',
      'Education',
      'Healthcare',
      'Real Estate',
      'Entertainment',
      'Remote Work'
    ],
    technologies: ['Unity', 'Unreal Engine', 'Oculus SDK', 'SteamVR', 'WebXR', 'OpenXR'],
    demoUrl: 'https://ziontechgroup.com/virtual-reality-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/virtual-reality-solutions',
    apiUrl: 'https://api.ziontechgroup.com/v1/vr-solutions',
    status: 'active',
    launchDate: '2024-06-15',
    lastUpdated: '2024-10-15',
    icon: 'EyeIcon',
    gradient: 'from-indigo-500 to-purple-500',
    glow: 'shadow-indigo-500/25',
    route: '/virtual-reality-solutions'
  },
  {
    id: 'robotic-process-automation',
    name: 'Robotic Process Automation',
    description: 'RPA solutions to automate repetitive tasks, improve efficiency, and reduce operational costs.',
    shortDescription: 'Automated process optimization and task automation',
    category: 'it',
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    features: [
      'Process Automation',
      'Workflow Optimization',
      'Data Processing',
      'System Integration',
      'Monitoring & Analytics',
      'Custom Bots',
      'Scalable Deployment',
      '24/7 Operation'
    ],
    benefits: [
      'Cost Reduction',
      'Improved Efficiency',
      'Error Elimination',
      '24/7 Operation',
      'Scalable Automation',
      'Quick ROI'
    ],
    useCases: [
      'Data Entry',
      'Invoice Processing',
      'Customer Service',
      'HR Processes',
      'Financial Operations',
      'Compliance Tasks'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'RPA Tools', 'APIs'],
    demoUrl: 'https://ziontechgroup.com/robotic-process-automation/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/robotic-process-automation',
    apiUrl: 'https://api.ziontechgroup.com/v1/rpa-solutions',
    status: 'active',
    launchDate: '2024-06-20',
    lastUpdated: '2024-10-15',
    icon: 'CogIcon',
    gradient: 'from-orange-500 to-amber-500',
    glow: 'shadow-orange-500/25',
    route: '/robotic-process-automation'
  },
  {
    id: 'low-code-platform',
    name: 'Low-Code Platform',
    description: 'Visual development platform for rapid application development with drag-and-drop interface and pre-built components.',
    shortDescription: 'Visual low-code platform for rapid app development',
    category: 'it',
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799,
      currency: 'USD'
    },
    features: [
      'Drag & Drop Builder',
      'Pre-built Components',
      'Visual Workflow',
      'Database Integration',
      'API Management',
      'User Management',
      'Deployment Tools',
      'Custom Extensions'
    ],
    benefits: [
      'Rapid Development',
      'No Coding Required',
      'Faster Time-to-Market',
      'Cost Effective',
      'Easy Maintenance',
      'Scalable Solutions'
    ],
    useCases: [
      'Business Applications',
      'Workflow Automation',
      'Data Management',
      'Customer Portals',
      'Internal Tools',
      'Process Management'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/low-code-platform/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/low-code-platform',
    apiUrl: 'https://api.ziontechgroup.com/v1/low-code-platform',
    status: 'active',
    launchDate: '2024-06-25',
    lastUpdated: '2024-10-15',
    icon: 'CodeBracketIcon',
    gradient: 'from-teal-500 to-cyan-500',
    glow: 'shadow-teal-500/25',
    route: '/low-code-platform'
  },
  {
    id: 'serverless-architecture',
    name: 'Serverless Architecture',
    description: 'Serverless application development and deployment with auto-scaling, pay-per-use pricing, and zero server management.',
    shortDescription: 'Serverless application development and deployment',
    category: 'cloud',
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399,
      currency: 'USD'
    },
    features: [
      'Auto-scaling',
      'Pay-per-use',
      'Zero Server Management',
      'Event-driven Architecture',
      'Microservices',
      'API Gateway',
      'Database Integration',
      'Monitoring & Logging'
    ],
    benefits: [
      'Cost Optimization',
      'Automatic Scaling',
      'No Server Management',
      'Faster Development',
      'High Availability',
      'Global Deployment'
    ],
    useCases: [
      'Web Applications',
      'API Services',
      'Data Processing',
      'IoT Applications',
      'Mobile Backends',
      'Event Processing'
    ],
    technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Node.js', 'Python', 'Docker'],
    demoUrl: 'https://ziontechgroup.com/serverless-architecture/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/serverless-architecture',
    apiUrl: 'https://api.ziontechgroup.com/v1/serverless-architecture',
    status: 'active',
    launchDate: '2024-07-01',
    lastUpdated: '2024-10-15',
    icon: 'CloudIcon',
    gradient: 'from-blue-500 to-indigo-500',
    glow: 'shadow-blue-500/25',
    route: '/serverless-architecture'
  },
  {
    id: 'container-orchestration',
    name: 'Container Orchestration',
    description: 'Kubernetes-based container orchestration for scalable, reliable, and efficient application deployment and management.',
    shortDescription: 'Kubernetes container orchestration and management',
    category: 'devops',
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    features: [
      'Kubernetes Management',
      'Auto-scaling',
      'Load Balancing',
      'Service Discovery',
      'Health Monitoring',
      'Rolling Updates',
      'Resource Management',
      'Security Policies'
    ],
    benefits: [
      'Scalable Deployment',
      'High Availability',
      'Resource Optimization',
      'Easy Management',
      'Cost Efficiency',
      'Reliable Operations'
    ],
    useCases: [
      'Microservices',
      'Web Applications',
      'Data Processing',
      'CI/CD Pipelines',
      'Machine Learning',
      'IoT Applications'
    ],
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana', 'Istio'],
    demoUrl: 'https://ziontechgroup.com/container-orchestration/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/container-orchestration',
    apiUrl: 'https://api.ziontechgroup.com/v1/container-orchestration',
    status: 'active',
    launchDate: '2024-07-05',
    lastUpdated: '2024-10-15',
    icon: 'CogIcon',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/25',
    route: '/container-orchestration'
  },
  {
    id: 'ai-infrastructure',
    name: 'AI Infrastructure',
    description: 'Specialized infrastructure for AI and machine learning workloads with GPU acceleration and optimized performance.',
    shortDescription: 'AI-optimized infrastructure and GPU acceleration',
    category: 'ai',
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2499,
      currency: 'USD'
    },
    features: [
      'GPU Acceleration',
      'ML Pipeline Management',
      'Model Training Infrastructure',
      'Inference Optimization',
      'Data Pipeline',
      'Model Versioning',
      'Auto-scaling',
      'Monitoring & Analytics'
    ],
    benefits: [
      'Optimized Performance',
      'Cost Efficiency',
      'Scalable Infrastructure',
      'Easy Management',
      'Fast Training',
      'Reliable Inference'
    ],
    useCases: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Recommendation Systems',
      'Predictive Analytics'
    ],
    technologies: ['NVIDIA GPUs', 'Kubernetes', 'TensorFlow', 'PyTorch', 'Docker', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/ai-infrastructure/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-infrastructure',
    apiUrl: 'https://api.ziontechgroup.com/v1/ai-infrastructure',
    status: 'active',
    launchDate: '2024-07-10',
    lastUpdated: '2024-10-15',
    icon: 'CpuChipIcon',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/25',
    route: '/ai-infrastructure'
  },
  {
    id: 'data-lake-solutions',
    name: 'Data Lake Solutions',
    description: 'Comprehensive data lake architecture for storing, processing, and analyzing large volumes of structured and unstructured data.',
    shortDescription: 'Data lake architecture and big data analytics',
    category: 'data',
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    features: [
      'Data Ingestion',
      'Data Storage',
      'Data Processing',
      'Data Analytics',
      'Data Governance',
      'Security & Compliance',
      'Real-time Processing',
      'Scalable Architecture'
    ],
    benefits: [
      'Unified Data Storage',
      'Scalable Processing',
      'Cost Optimization',
      'Data Governance',
      'Real-time Analytics',
      'Flexible Schema'
    ],
    useCases: [
      'Big Data Analytics',
      'Machine Learning',
      'Business Intelligence',
      'Data Warehousing',
      'IoT Data Processing',
      'Compliance Reporting'
    ],
    technologies: ['Apache Spark', 'Hadoop', 'AWS S3', 'Apache Kafka', 'Elasticsearch', 'Kubernetes'],
    demoUrl: 'https://ziontechgroup.com/data-lake-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/data-lake-solutions',
    apiUrl: 'https://api.ziontechgroup.com/v1/data-lake-solutions',
    status: 'active',
    launchDate: '2024-07-15',
    lastUpdated: '2024-10-15',
    icon: 'CircleStackIcon',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/25',
    route: '/data-lake-solutions'
  },

  // Specialized AI Services
  {
    id: 'ai-legal-assistant',
    name: 'AI Legal Assistant',
    description: 'AI-powered legal research, document analysis, and contract review with natural language processing and legal expertise.',
    shortDescription: 'AI-powered legal research and document analysis',
    category: 'ai',
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    features: [
      'Legal Research',
      'Document Analysis',
      'Contract Review',
      'Case Law Search',
      'Legal Writing',
      'Compliance Checking',
      'Risk Assessment',
      'Expert Consultation'
    ],
    benefits: [
      'Faster Research',
      'Cost Reduction',
      'Improved Accuracy',
      '24/7 Availability',
      'Expert Knowledge',
      'Time Savings'
    ],
    useCases: [
      'Law Firms',
      'Corporate Legal',
      'Contract Review',
      'Legal Research',
      'Compliance',
      'Document Analysis'
    ],
    technologies: ['OpenAI GPT-4', 'Legal Databases', 'NLP', 'Python', 'React', 'PostgreSQL'],
    demoUrl: 'https://ziontechgroup.com/ai-legal-assistant/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-legal-assistant',
    apiUrl: 'https://api.ziontechgroup.com/v1/legal-assistant',
    status: 'active',
    launchDate: '2024-08-01',
    lastUpdated: '2024-10-15',
    icon: 'ScaleIcon',
    gradient: 'from-indigo-500 to-purple-500',
    glow: 'shadow-indigo-500/25',
    route: '/ai-legal-assistant'
  },
  {
    id: 'ai-medical-assistant',
    name: 'AI Medical Assistant',
    description: 'AI-powered medical diagnosis support, symptom analysis, and healthcare decision assistance with clinical expertise.',
    shortDescription: 'AI-powered medical diagnosis and healthcare support',
    category: 'ai',
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    features: [
      'Symptom Analysis',
      'Diagnosis Support',
      'Treatment Recommendations',
      'Drug Interaction Check',
      'Medical Literature Search',
      'Patient Monitoring',
      'Clinical Decision Support',
      'Expert Consultation'
    ],
    benefits: [
      'Improved Diagnosis',
      'Faster Treatment',
      'Reduced Errors',
      'Cost Savings',
      'Better Outcomes',
      'Expert Support'
    ],
    useCases: [
      'Hospitals',
      'Clinics',
      'Telemedicine',
      'Medical Research',
      'Patient Care',
      'Diagnostic Support'
    ],
    technologies: ['Medical AI', 'NLP', 'Machine Learning', 'Python', 'React', 'HIPAA Compliance'],
    demoUrl: 'https://ziontechgroup.com/ai-medical-assistant/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-medical-assistant',
    apiUrl: 'https://api.ziontechgroup.com/v1/medical-assistant',
    status: 'active',
    launchDate: '2024-08-05',
    lastUpdated: '2024-10-15',
    icon: 'HeartIcon',
    gradient: 'from-red-500 to-pink-500',
    glow: 'shadow-red-500/25',
    route: '/ai-medical-assistant'
  },
  {
    id: 'ai-education-tutor',
    name: 'AI Education Tutor',
    description: 'Personalized AI tutoring system with adaptive learning, progress tracking, and interactive educational content.',
    shortDescription: 'AI-powered personalized tutoring and education',
    category: 'ai',
    pricing: {
      basic: 49,
      pro: 129,
      enterprise: 349,
      currency: 'USD'
    },
    features: [
      'Personalized Learning',
      'Adaptive Curriculum',
      'Progress Tracking',
      'Interactive Content',
      'Assessment Tools',
      'Multi-subject Support',
      'Parent Dashboard',
      'Teacher Integration'
    ],
    benefits: [
      'Personalized Education',
      'Improved Learning',
      'Flexible Scheduling',
      'Progress Monitoring',
      'Cost Effective',
      'Accessible Learning'
    ],
    useCases: [
      'K-12 Education',
      'Higher Education',
      'Professional Training',
      'Language Learning',
      'Test Preparation',
      'Skill Development'
    ],
    technologies: ['Machine Learning', 'NLP', 'React', 'Node.js', 'MongoDB', 'Video Streaming'],
    demoUrl: 'https://ziontechgroup.com/ai-education-tutor/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-education-tutor',
    apiUrl: 'https://api.ziontechgroup.com/v1/education-tutor',
    status: 'active',
    launchDate: '2024-08-10',
    lastUpdated: '2024-10-15',
    icon: 'AcademicCapIcon',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/25',
    route: '/ai-education-tutor'
  },
  {
    id: 'ai-real-estate-analyzer',
    name: 'AI Real Estate Analyzer',
    description: 'AI-powered real estate market analysis, property valuation, and investment opportunity identification.',
    shortDescription: 'AI-powered real estate analysis and investment insights',
    category: 'ai',
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599,
      currency: 'USD'
    },
    features: [
      'Property Valuation',
      'Market Analysis',
      'Investment Scoring',
      'Price Prediction',
      'Neighborhood Insights',
      'ROI Calculation',
      'Risk Assessment',
      'Portfolio Management'
    ],
    benefits: [
      'Data-driven Decisions',
      'Investment Optimization',
      'Risk Reduction',
      'Market Insights',
      'Time Savings',
      'Better Returns'
    ],
    useCases: [
      'Real Estate Agents',
      'Property Investors',
      'Real Estate Companies',
      'Property Management',
      'Market Research',
      'Investment Analysis'
    ],
    technologies: ['Machine Learning', 'Real Estate APIs', 'Python', 'React', 'PostgreSQL', 'Maps API'],
    demoUrl: 'https://ziontechgroup.com/ai-real-estate-analyzer/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-real-estate-analyzer',
    apiUrl: 'https://api.ziontechgroup.com/v1/real-estate-analyzer',
    status: 'active',
    launchDate: '2024-08-15',
    lastUpdated: '2024-10-15',
    icon: 'HomeIcon',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/25',
    route: '/ai-real-estate-analyzer'
  },
  {
    id: 'ai-supply-chain-optimizer',
    name: 'AI Supply Chain Optimizer',
    description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
    shortDescription: 'AI-powered supply chain optimization and management',
    category: 'ai',
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    features: [
      'Demand Forecasting',
      'Inventory Optimization',
      'Route Optimization',
      'Supplier Management',
      'Risk Assessment',
      'Cost Optimization',
      'Real-time Monitoring',
      'Analytics Dashboard'
    ],
    benefits: [
      'Cost Reduction',
      'Improved Efficiency',
      'Risk Mitigation',
      'Better Planning',
      'Optimized Operations',
      'Data-driven Decisions'
    ],
    useCases: [
      'Manufacturing',
      'Retail',
      'Logistics',
      'Distribution',
      'E-commerce',
      'Healthcare'
    ],
    technologies: ['Machine Learning', 'Optimization Algorithms', 'Python', 'React', 'PostgreSQL', 'IoT'],
    demoUrl: 'https://ziontechgroup.com/ai-supply-chain-optimizer/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-supply-chain-optimizer',
    apiUrl: 'https://api.ziontechgroup.com/v1/supply-chain-optimizer',
    status: 'active',
    launchDate: '2024-08-20',
    lastUpdated: '2024-10-15',
    icon: 'TruckIcon',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/25',
    route: '/ai-supply-chain-optimizer'
  },
  {
    id: 'ai-3d-model-generator',
    name: 'AI 3D Model Generator',
    description: 'AI-powered 3D model generation from text descriptions, images, and sketches with high-quality output.',
    shortDescription: 'AI-powered 3D model generation and creation',
    category: 'ai',
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 499,
      currency: 'USD'
    },
    features: [
      'Text-to-3D',
      'Image-to-3D',
      'Sketch-to-3D',
      'High-quality Output',
      'Multiple Formats',
      'Custom Styling',
      'Batch Processing',
      'API Integration'
    ],
    benefits: [
      'Faster Creation',
      'Cost Reduction',
      'High Quality',
      'Easy to Use',
      'Scalable Production',
      'Creative Freedom'
    ],
    useCases: [
      'Game Development',
      'Architecture',
      'Product Design',
      '3D Printing',
      'Virtual Reality',
      'Marketing'
    ],
    technologies: ['NeRF', 'Blender', 'Unity', 'React', 'Node.js', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/ai-3d-model-generator/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-3d-model-generator',
    apiUrl: 'https://api.ziontechgroup.com/v1/3d-model-generator',
    status: 'active',
    launchDate: '2024-08-25',
    lastUpdated: '2024-10-15',
    icon: 'CubeIcon',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/25',
    route: '/ai-3d-model-generator'
  },

  // Zion AI Specialized Services
  {
    id: 'zion-ai-chatbot-builder',
    name: 'Zion AI Chatbot Builder',
    description: 'Advanced AI chatbot builder with enterprise-grade features, multi-language support, and seamless integrations.',
    shortDescription: 'Enterprise-grade AI chatbot builder with advanced features',
    category: 'ai',
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799,
      currency: 'USD'
    },
    features: [
      'Advanced NLP',
      'Multi-language Support',
      'Voice Integration',
      'Custom Training',
      'Analytics Dashboard',
      'API Integration',
      'White-label Solution',
      '24/7 Support'
    ],
    benefits: [
      'Enterprise Features',
      'Advanced Capabilities',
      'Custom Solutions',
      'Reliable Support',
      'Scalable Architecture',
      'Professional Quality'
    ],
    useCases: [
      'Enterprise Support',
      'E-commerce',
      'Healthcare',
      'Financial Services',
      'Education',
      'Government'
    ],
    technologies: ['OpenAI GPT-4', 'Custom Models', 'React', 'Node.js', 'Kubernetes', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-chatbot-builder/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-chatbot-builder',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-chatbot-builder',
    status: 'active',
    launchDate: '2024-09-01',
    lastUpdated: '2024-10-15',
    icon: 'ChatBubbleLeftRightIcon',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/25',
    route: '/zion-ai-chatbot-builder'
  },
  {
    id: 'zion-ai-code-assistant',
    name: 'Zion AI Code Assistant',
    description: 'Advanced AI coding assistant with code generation, debugging, optimization, and multi-language support.',
    shortDescription: 'AI-powered coding assistant and development tool',
    category: 'ai',
    pricing: {
      basic: 49,
      pro: 129,
      enterprise: 349,
      currency: 'USD'
    },
    features: [
      'Code Generation',
      'Debugging Assistance',
      'Code Optimization',
      'Multi-language Support',
      'IDE Integration',
      'Code Review',
      'Documentation Generation',
      'Team Collaboration'
    ],
    benefits: [
      'Faster Development',
      'Better Code Quality',
      'Reduced Bugs',
      'Learning Support',
      'Time Savings',
      'Team Productivity'
    ],
    useCases: [
      'Software Development',
      'Code Review',
      'Learning',
      'Debugging',
      'Documentation',
      'Team Collaboration'
    ],
    technologies: ['OpenAI Codex', 'GitHub Copilot', 'VS Code', 'Python', 'JavaScript', 'Docker'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-code-assistant/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-code-assistant',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-code-assistant',
    status: 'active',
    launchDate: '2024-09-05',
    lastUpdated: '2024-10-15',
    icon: 'CodeBracketIcon',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/25',
    route: '/zion-ai-code-assistant'
  },
  {
    id: 'zion-ai-content-moderator',
    name: 'Zion AI Content Moderator',
    description: 'Advanced AI content moderation system with real-time detection of inappropriate content across text, images, and videos.',
    shortDescription: 'AI-powered content moderation and safety system',
    category: 'ai',
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 499,
      currency: 'USD'
    },
    features: [
      'Real-time Moderation',
      'Multi-media Support',
      'Custom Rules',
      'API Integration',
      'Analytics Dashboard',
      'Human Review',
      'Compliance Tools',
      'Scalable Processing'
    ],
    benefits: [
      'Automated Moderation',
      'Consistent Standards',
      'Cost Reduction',
      'Scalable Solution',
      'Compliance Support',
      'Real-time Protection'
    ],
    useCases: [
      'Social Media',
      'E-commerce',
      'Content Platforms',
      'Gaming',
      'Education',
      'Community Forums'
    ],
    technologies: ['Computer Vision', 'NLP', 'Machine Learning', 'React', 'Node.js', 'AWS'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-content-moderator/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-content-moderator',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-content-moderator',
    status: 'active',
    launchDate: '2024-09-10',
    lastUpdated: '2024-10-15',
    icon: 'ShieldCheckIcon',
    gradient: 'from-red-500 to-orange-500',
    glow: 'shadow-red-500/25',
    route: '/zion-ai-content-moderator'
  },
  {
    id: 'zion-ai-customer-support-pro',
    name: 'Zion AI Customer Support Pro',
    description: 'Enterprise-grade AI customer support system with advanced automation, sentiment analysis, and multi-channel support.',
    shortDescription: 'Enterprise AI customer support and automation',
    category: 'ai',
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    features: [
      'Multi-channel Support',
      'Sentiment Analysis',
      'Ticket Automation',
      'Knowledge Base',
      'Live Chat Integration',
      'Analytics Dashboard',
      'Custom Workflows',
      '24/7 Support'
    ],
    benefits: [
      'Improved Customer Satisfaction',
      'Reduced Response Time',
      'Cost Reduction',
      'Scalable Support',
      'Data-driven Insights',
      'Automated Resolution'
    ],
    useCases: [
      'E-commerce',
      'SaaS Companies',
      'Financial Services',
      'Healthcare',
      'Education',
      'Government'
    ],
    technologies: ['OpenAI GPT-4', 'Sentiment Analysis', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-customer-support-pro/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-customer-support-pro',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-customer-support-pro',
    status: 'active',
    launchDate: '2024-09-15',
    lastUpdated: '2024-10-15',
    icon: 'UserGroupIcon',
    gradient: 'from-blue-500 to-indigo-500',
    glow: 'shadow-blue-500/25',
    route: '/zion-ai-customer-support-pro'
  },
  {
    id: 'zion-ai-workflow-automator-pro',
    name: 'Zion AI Workflow Automator Pro',
    description: 'Advanced AI workflow automation platform with intelligent process optimization and custom automation rules.',
    shortDescription: 'AI-powered workflow automation and process optimization',
    category: 'ai',
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999,
      currency: 'USD'
    },
    features: [
      'Visual Workflow Builder',
      'AI Process Optimization',
      'Custom Automation Rules',
      'Integration APIs',
      'Analytics Dashboard',
      'Error Handling',
      'Scalable Deployment',
      'Team Collaboration'
    ],
    benefits: [
      'Process Optimization',
      'Cost Reduction',
      'Improved Efficiency',
      'Error Reduction',
      'Scalable Automation',
      'Team Productivity'
    ],
    useCases: [
      'Business Processes',
      'Data Processing',
      'Customer Onboarding',
      'Invoice Processing',
      'HR Workflows',
      'Marketing Automation'
    ],
    technologies: ['Workflow Engines', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-workflow-automator-pro/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-workflow-automator-pro',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-workflow-automator-pro',
    status: 'active',
    launchDate: '2024-09-20',
    lastUpdated: '2024-10-15',
    icon: 'CogIcon',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/25',
    route: '/zion-ai-workflow-automator-pro'
  },
  {
    id: 'zion-ai-email-marketing-pro',
    name: 'Zion AI Email Marketing Pro',
    description: 'Advanced AI email marketing platform with intelligent segmentation, personalization, and performance optimization.',
    shortDescription: 'AI-powered email marketing and automation platform',
    category: 'ai',
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 499,
      currency: 'USD'
    },
    features: [
      'AI Segmentation',
      'Personalization Engine',
      'Send Time Optimization',
      'A/B Testing',
      'Analytics Dashboard',
      'Template Generator',
      'Deliverability Tools',
      'Compliance Management'
    ],
    benefits: [
      'Higher Engagement',
      'Better Deliverability',
      'Automated Optimization',
      'Data-driven Campaigns',
      'Cost Efficiency',
      'ROI Maximization'
    ],
    useCases: [
      'E-commerce',
      'SaaS Marketing',
      'Newsletter Campaigns',
      'Lead Nurturing',
      'Customer Retention',
      'Product Announcements'
    ],
    technologies: ['Machine Learning', 'Email APIs', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-email-marketing-pro/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-email-marketing-pro',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-email-marketing-pro',
    status: 'active',
    launchDate: '2024-09-25',
    lastUpdated: '2024-10-15',
    icon: 'EnvelopeIcon',
    gradient: 'from-orange-500 to-red-500',
    glow: 'shadow-orange-500/25',
    route: '/zion-ai-email-marketing-pro'
  },
  {
    id: 'zion-ai-financial-forecaster',
    name: 'Zion AI Financial Forecaster',
    description: 'Advanced AI financial forecasting system with market analysis, risk assessment, and investment recommendations.',
    shortDescription: 'AI-powered financial forecasting and investment analysis',
    category: 'ai',
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999,
      currency: 'USD'
    },
    features: [
      'Market Analysis',
      'Risk Assessment',
      'Investment Recommendations',
      'Portfolio Optimization',
      'Real-time Updates',
      'Custom Models',
      'Compliance Tools',
      'Expert Consultation'
    ],
    benefits: [
      'Data-driven Decisions',
      'Risk Mitigation',
      'Investment Optimization',
      'Market Insights',
      'Professional Analysis',
      'Compliance Support'
    ],
    useCases: [
      'Investment Firms',
      'Financial Advisors',
      'Portfolio Management',
      'Risk Management',
      'Trading',
      'Financial Planning'
    ],
    technologies: ['Financial AI', 'Machine Learning', 'Python', 'React', 'PostgreSQL', 'Financial APIs'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-financial-forecaster/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-financial-forecaster',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-financial-forecaster',
    status: 'active',
    launchDate: '2024-10-01',
    lastUpdated: '2024-10-15',
    icon: 'CurrencyDollarIcon',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/25',
    route: '/zion-ai-financial-forecaster'
  },
  {
    id: 'zion-ai-sales-predictor',
    name: 'Zion AI Sales Predictor',
    description: 'AI-powered sales forecasting and pipeline analysis with predictive insights and revenue optimization.',
    shortDescription: 'AI-powered sales forecasting and pipeline analysis',
    category: 'ai',
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999,
      currency: 'USD'
    },
    features: [
      'Sales Forecasting',
      'Pipeline Analysis',
      'Lead Scoring',
      'Revenue Prediction',
      'Trend Analysis',
      'Custom Models',
      'Analytics Dashboard',
      'Integration APIs'
    ],
    benefits: [
      'Accurate Forecasting',
      'Better Planning',
      'Revenue Optimization',
      'Data-driven Insights',
      'Improved Performance',
      'Competitive Advantage'
    ],
    useCases: [
      'Sales Teams',
      'Sales Management',
      'Revenue Operations',
      'Business Planning',
      'Performance Analysis',
      'Goal Setting'
    ],
    technologies: ['Machine Learning', 'Time Series', 'Python', 'React', 'PostgreSQL', 'Sales APIs'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-sales-predictor/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-sales-predictor',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-sales-predictor',
    status: 'active',
    launchDate: '2024-10-05',
    lastUpdated: '2024-10-15',
    icon: 'ChartBarIcon',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/25',
    route: '/zion-ai-sales-predictor'
  },
  {
    id: 'zion-ai-translation-service',
    name: 'Zion AI Translation Service',
    description: 'Enterprise-grade AI translation service with 100+ languages, context awareness, and industry-specific models.',
    shortDescription: 'Enterprise AI translation service for 100+ languages',
    category: 'ai',
    pricing: {
      basic: 49,
      pro: 129,
      enterprise: 349,
      currency: 'USD'
    },
    features: [
      '100+ Languages',
      'Context-aware Translation',
      'Industry-specific Models',
      'Real-time Translation',
      'Document Translation',
      'API Integration',
      'Quality Assurance',
      'Custom Training'
    ],
    benefits: [
      'Accurate Translations',
      'Fast Processing',
      'Cost-effective',
      'Easy Integration',
      'Scalable Service',
      'Professional Quality'
    ],
    useCases: [
      'Global Businesses',
      'E-commerce',
      'Content Localization',
      'Customer Support',
      'Document Translation',
      'Communication'
    ],
    technologies: ['Advanced NLP', 'Custom Models', 'React', 'Node.js', 'MongoDB', 'Cloud Translation'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-translation-service/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-translation-service',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-translation-service',
    status: 'active',
    launchDate: '2024-10-10',
    lastUpdated: '2024-10-15',
    icon: 'GlobeAltIcon',
    gradient: 'from-teal-500 to-cyan-500',
    glow: 'shadow-teal-500/25',
    route: '/zion-ai-translation-service'
  },
  {
    id: 'zion-ai-voice-synthesis',
    name: 'Zion AI Voice Synthesis',
    description: 'Advanced AI voice synthesis with natural-sounding speech, multiple voices, and real-time generation.',
    shortDescription: 'AI-powered voice synthesis and text-to-speech',
    category: 'ai',
    pricing: {
      basic: 39,
      pro: 99,
      enterprise: 249,
      currency: 'USD'
    },
    features: [
      'Natural Voice Synthesis',
      'Multiple Voice Options',
      'Real-time Generation',
      'Custom Voice Training',
      'Multi-language Support',
      'Emotion Control',
      'API Integration',
      'High Quality Audio'
    ],
    benefits: [
      'Natural Sounding Speech',
      'Multiple Voice Options',
      'Real-time Processing',
      'Cost Effective',
      'Easy Integration',
      'High Quality'
    ],
    useCases: [
      'Voice Assistants',
      'Audiobooks',
      'Podcasts',
      'Accessibility',
      'E-learning',
      'Customer Service'
    ],
    technologies: ['Advanced TTS', 'Neural Networks', 'React', 'Node.js', 'Audio Processing', 'Cloud APIs'],
    demoUrl: 'https://ziontechgroup.com/zion-ai-voice-synthesis/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/zion-ai-voice-synthesis',
    apiUrl: 'https://api.ziontechgroup.com/v1/zion-voice-synthesis',
    status: 'active',
    launchDate: '2024-10-15',
    lastUpdated: '2024-10-15',
    icon: 'MicrophoneIcon',
    gradient: 'from-indigo-500 to-purple-500',
    glow: 'shadow-indigo-500/25',
    route: '/zion-ai-voice-synthesis'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.status === 'active').slice(0, 6);
};

export const getPricingTiers = () => {
  return {
    basic: 'Basic',
    pro: 'Professional',
    enterprise: 'Enterprise'
  };
};