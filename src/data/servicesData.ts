export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'AI' | 'Quantum' | 'Cybersecurity' | 'Cloud' | 'IoT' | 'Space' | 'Sustainability' | 'Enterprise' | 'Micro-SaaS' | 'FinTech' | 'HealthTech' | 'EdTech' | 'GreenTech';
  icon: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    period: string;
  };
  useCases: string[];
  technologies: string[];
  link: string;
  isNew?: boolean;
  isPopular?: boolean;
  tags: string[];
}

export const servicesData: Service[] = [
  // AI-Powered Micro SaaS Solutions
  {
    id: 'ai-content-studio-pro',
    title: 'AI Content Studio Pro',
    description: 'Advanced AI-powered content creation platform with multi-format support, SEO optimization, and brand voice consistency.',
    shortDescription: 'Professional AI content creation with SEO optimization',
    category: 'AI',
    icon: 'Brain',
    features: [
      'Multi-format content generation (blogs, social media, emails)',
      'SEO optimization with keyword research',
      'Brand voice consistency across all content',
      'Plagiarism detection and originality scoring',
      'Content performance analytics',
      'Multi-language support (25+ languages)',
      'Collaborative editing and approval workflows',
      'AI-powered content calendar and scheduling'
    ],
    benefits: [
      '10x faster content creation',
      'Improved SEO rankings',
      'Consistent brand messaging',
      'Reduced content costs by 60%',
      '24/7 content generation capability'
    ],
    pricing: {
      starter: 49,
      professional: 149,
      enterprise: 399,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Small to medium businesses',
      'Startups'
    ],
    technologies: ['OpenAI GPT-4', 'Claude 3', 'BERT', 'NLP', 'React', 'Node.js', 'PostgreSQL'],
    link: '/services/ai-content-studio-pro',
    isNew: true,
    isPopular: true,
    tags: ['AI', 'Content Creation', 'SEO', 'Marketing']
  },
  {
    id: 'ai-sales-copilot',
    title: 'AI Sales Copilot',
    description: 'Intelligent sales assistant that automates lead qualification, follow-ups, and sales process optimization.',
    shortDescription: 'AI-powered sales automation and optimization',
    category: 'AI',
    icon: 'Users',
    features: [
      'Automated lead scoring and qualification',
      'Smart follow-up scheduling and reminders',
      'Sales conversation analysis and insights',
      'Predictive sales forecasting',
      'CRM integration and automation',
      'Email and call tracking',
      'Sales performance analytics',
      'AI-powered objection handling suggestions'
    ],
    benefits: [
      'Increase sales conversion by 35%',
      'Reduce follow-up time by 70%',
      'Automated lead nurturing',
      'Better sales pipeline visibility',
      'Improved customer relationship management'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Sales teams',
      'Real estate agencies',
      'Insurance companies',
      'B2B businesses',
      'Consulting firms'
    ],
    technologies: ['Machine Learning', 'NLP', 'Predictive Analytics', 'CRM APIs', 'Python', 'TensorFlow'],
    link: '/services/ai-sales-copilot',
    isNew: true,
    tags: ['AI', 'Sales', 'Automation', 'CRM']
  },
  {
    id: 'ai-customer-support-automation',
    title: 'AI Customer Support Automation',
    description: 'Intelligent customer support platform with chatbots, ticket routing, and sentiment analysis.',
    shortDescription: 'Automated customer support with AI chatbots',
    category: 'AI',
    icon: 'MessageCircle',
    features: [
      'AI-powered chatbots with natural language processing',
      'Intelligent ticket routing and prioritization',
      'Sentiment analysis and customer satisfaction tracking',
      'Multi-channel support (email, chat, social media)',
      'Knowledge base management and auto-suggestions',
      'Customer self-service portal',
      'Support analytics and reporting',
      'Integration with popular CRM systems'
    ],
    benefits: [
      '24/7 customer support availability',
      'Reduce support costs by 40%',
      'Faster response times',
      'Improved customer satisfaction',
      'Scalable support operations'
    ],
    pricing: {
      starter: 99,
      professional: 249,
      enterprise: 599,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Service providers',
      'Educational institutions',
      'Healthcare organizations'
    ],
    technologies: ['NLP', 'Machine Learning', 'Chatbot Framework', 'React', 'Node.js', 'MongoDB'],
    link: '/services/ai-customer-support-automation',
    isPopular: true,
    tags: ['AI', 'Customer Support', 'Chatbots', 'Automation']
  },
  {
    id: 'ai-project-management-platform',
    title: 'AI Project Management Platform',
    description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and risk prediction.',
    shortDescription: 'AI-enhanced project management and collaboration',
    category: 'AI',
    icon: 'Target',
    features: [
      'AI-powered task prioritization and scheduling',
      'Resource allocation optimization',
      'Risk prediction and mitigation suggestions',
      'Team collaboration and communication tools',
      'Project timeline visualization and Gantt charts',
      'Budget tracking and cost optimization',
      'Performance analytics and reporting',
      'Integration with popular project tools'
    ],
    benefits: [
      'Improve project success rate by 45%',
      'Reduce project delays by 30%',
      'Better resource utilization',
      'Proactive risk management',
      'Enhanced team collaboration'
    ],
    pricing: {
      starter: 89,
      professional: 229,
      enterprise: 549,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Project managers',
      'Development teams',
      'Marketing agencies',
      'Construction companies',
      'Consulting firms'
    ],
    technologies: ['Machine Learning', 'Predictive Analytics', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    link: '/services/ai-project-management-platform',
    isNew: true,
    tags: ['AI', 'Project Management', 'Collaboration', 'Analytics']
  },
  {
    id: 'ai-financial-trading-platform',
    title: 'AI Financial Trading Platform',
    description: 'Advanced AI-powered trading platform with predictive analytics, risk management, and automated trading strategies.',
    shortDescription: 'AI-driven financial trading and analysis',
    category: 'AI',
    icon: 'TrendingUp',
    features: [
      'AI-powered market prediction and analysis',
      'Automated trading strategies and execution',
      'Risk management and portfolio optimization',
      'Real-time market data and alerts',
      'Backtesting and strategy validation',
      'Multi-asset trading support',
      'Compliance and regulatory reporting',
      'Advanced charting and technical analysis'
    ],
    benefits: [
      'Improve trading performance by 25%',
      'Reduce trading risks through AI analysis',
      '24/7 automated trading capability',
      'Better portfolio diversification',
      'Data-driven investment decisions'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Individual traders',
      'Investment firms',
      'Hedge funds',
      'Financial advisors',
      'Institutional investors'
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'Quantitative Analysis', 'Python', 'TensorFlow', 'PyTorch'],
    link: '/services/ai-financial-trading-platform',
    isNew: true,
    tags: ['AI', 'Trading', 'Finance', 'Analytics']
  },
  {
    id: 'ai-healthcare-analytics-platform',
    title: 'AI Healthcare Analytics Platform',
    description: 'Comprehensive healthcare analytics platform with patient insights, predictive diagnostics, and operational optimization.',
    shortDescription: 'AI-powered healthcare analytics and insights',
    category: 'AI',
    icon: 'Heart',
    features: [
      'Patient data analysis and insights',
      'Predictive diagnostics and risk assessment',
      'Treatment outcome prediction',
      'Healthcare operational analytics',
      'Drug interaction analysis',
      'Medical image analysis and interpretation',
      'Compliance and regulatory reporting',
      'Integration with EHR systems'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce healthcare costs by 20%',
      'Better patient outcomes',
      'Operational efficiency improvements',
      'Enhanced clinical decision support'
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Hospitals and clinics',
      'Medical research institutions',
      'Pharmaceutical companies',
      'Health insurance providers',
      'Telemedicine platforms'
    ],
    technologies: ['Machine Learning', 'Computer Vision', 'NLP', 'Python', 'TensorFlow', 'Medical APIs'],
    link: '/services/ai-healthcare-analytics-platform',
    isNew: true,
    tags: ['AI', 'Healthcare', 'Analytics', 'Medical']
  },
  {
    id: 'ai-supply-chain-optimization',
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
    shortDescription: 'AI-powered supply chain optimization',
    category: 'AI',
    icon: 'Truck',
    features: [
      'AI-powered demand forecasting',
      'Inventory optimization and management',
      'Logistics route optimization',
      'Supplier performance analytics',
      'Risk assessment and mitigation',
      'Real-time supply chain visibility',
      'Cost optimization and analysis',
      'Integration with ERP systems'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times by 40%',
      'Better demand forecasting accuracy',
      'Optimized supplier relationships',
      'Enhanced operational efficiency'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Manufacturing companies',
      'Retail businesses',
      'Logistics providers',
      'E-commerce platforms',
      'Distribution companies'
    ],
    technologies: ['Machine Learning', 'Optimization Algorithms', 'IoT', 'Python', 'React', 'PostgreSQL'],
    link: '/services/ai-supply-chain-optimization',
    tags: ['AI', 'Supply Chain', 'Logistics', 'Optimization']
  },
  {
    id: 'ai-workflow-orchestrator',
    title: 'AI Workflow Orchestrator',
    description: 'Intelligent workflow automation platform that learns and optimizes business processes automatically.',
    shortDescription: 'AI-powered workflow automation and optimization',
    category: 'AI',
    icon: 'Workflow',
    features: [
      'AI-powered process discovery and mapping',
      'Intelligent workflow automation',
      'Process optimization recommendations',
      'Real-time workflow monitoring',
      'Exception handling and resolution',
      'Integration with business systems',
      'Performance analytics and reporting',
      'Custom workflow builder'
    ],
    benefits: [
      'Automate 80% of repetitive tasks',
      'Improve process efficiency by 50%',
      'Reduce operational costs',
      'Better compliance and audit trails',
      'Scalable business operations'
    ],
    pricing: {
      starter: 129,
      professional: 349,
      enterprise: 899,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Business process managers',
      'Operations teams',
      'HR departments',
      'Finance teams',
      'Customer service departments'
    ],
    technologies: ['Machine Learning', 'RPA', 'Workflow Engine', 'React', 'Node.js', 'PostgreSQL'],
    link: '/services/ai-workflow-orchestrator',
    isNew: true,
    tags: ['AI', 'Workflow', 'Automation', 'BPM']
  },
  {
    id: 'ai-cybersecurity-threat-detection',
    title: 'AI Cybersecurity Threat Detection',
    description: 'Advanced AI-powered cybersecurity platform with real-time threat detection, behavioral analysis, and automated response.',
    shortDescription: 'AI-driven cybersecurity threat detection',
    category: 'Cybersecurity',
    icon: 'Shield',
    features: [
      'AI-powered threat detection and analysis',
      'Behavioral anomaly detection',
      'Real-time security monitoring',
      'Automated incident response',
      'Threat intelligence and sharing',
      'Vulnerability assessment and management',
      'Compliance reporting and auditing',
      'Integration with security tools'
    ],
    benefits: [
      'Detect threats 10x faster than traditional methods',
      'Reduce false positives by 60%',
      '24/7 automated security monitoring',
      'Proactive threat prevention',
      'Comprehensive security coverage'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Enterprise organizations',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Educational institutions'
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'Behavioral Analysis', 'Python', 'TensorFlow', 'Security APIs'],
    link: '/services/ai-cybersecurity-threat-detection',
    isPopular: true,
    tags: ['AI', 'Cybersecurity', 'Threat Detection', 'Security']
  },
  {
    id: 'quantum-ai-hybrid-platform',
    title: 'Quantum AI Hybrid Platform',
    description: 'Revolutionary platform combining quantum computing with AI for unprecedented computational power and problem-solving capabilities.',
    shortDescription: 'Quantum computing meets AI for breakthrough solutions',
    category: 'Quantum',
    icon: 'Atom',
    features: [
      'Quantum machine learning algorithms',
      'Hybrid classical-quantum computing',
      'Quantum optimization for complex problems',
      'Quantum cryptography and security',
      'Quantum simulation capabilities',
      'AI-powered quantum algorithm optimization',
      'Real-time quantum computing access',
      'Integration with classical AI systems'
    ],
    benefits: [
      'Solve previously intractable problems',
      'Exponential speedup for specific algorithms',
      'Enhanced AI model training capabilities',
      'Breakthrough discoveries in science and technology',
      'Competitive advantage in research and development'
    ],
    pricing: {
      starter: 999,
      professional: 2499,
      enterprise: 5999,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Research institutions',
      'Pharmaceutical companies',
      'Financial institutions',
      'Government agencies',
      'Technology companies'
    ],
    technologies: ['Quantum Computing', 'Machine Learning', 'Quantum Algorithms', 'Python', 'Qiskit', 'Cirq'],
    link: '/services/quantum-ai-hybrid-platform',
    isNew: true,
    isPopular: true,
    tags: ['Quantum', 'AI', 'Computing', 'Research']
  },
  {
    id: 'space-technology-platform',
    title: 'Space Technology Platform',
    description: 'Comprehensive space technology solutions including satellite management, space data analytics, and orbital optimization.',
    shortDescription: 'Advanced space technology and satellite solutions',
    category: 'Space',
    icon: 'Rocket',
    features: [
      'Satellite constellation management',
      'Space data collection and analysis',
      'Orbital optimization and planning',
      'Space weather monitoring',
      'Satellite communication systems',
      'Earth observation and remote sensing',
      'Space debris tracking',
      'Launch vehicle optimization'
    ],
    benefits: [
      'Access to space-based data and services',
      'Optimized satellite operations',
      'Enhanced communication capabilities',
      'Environmental monitoring and insights',
      'Space exploration and research support'
    ],
    pricing: {
      starter: 499,
      professional: 1299,
      enterprise: 2999,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Space agencies',
      'Satellite operators',
      'Telecommunications companies',
      'Environmental organizations',
      'Research institutions'
    ],
    technologies: ['Satellite Technology', 'Space Data Analytics', 'Orbital Mechanics', 'Python', 'React', 'Space APIs'],
    link: '/services/space-technology-platform',
    isNew: true,
    tags: ['Space', 'Satellite', 'Technology', 'Analytics']
  },
  {
    id: 'digital-twin-platform',
    title: 'Digital Twin Platform',
    description: 'Comprehensive digital twin solution for creating virtual replicas of physical assets, processes, and systems.',
    shortDescription: 'Digital twin creation and management platform',
    category: 'Enterprise',
    icon: 'Eye',
    features: [
      '3D asset modeling and visualization',
      'Real-time data integration and synchronization',
      'Predictive maintenance and analytics',
      'Simulation and scenario testing',
      'IoT sensor integration',
      'Performance monitoring and optimization',
      'Collaborative visualization tools',
      'Integration with enterprise systems'
    ],
    benefits: [
      'Reduce maintenance costs by 30%',
      'Improve operational efficiency',
      'Better decision-making with real-time data',
      'Predictive maintenance capabilities',
      'Enhanced asset lifecycle management'
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Manufacturing companies',
      'Infrastructure operators',
      'Energy companies',
      'Smart cities',
      'Healthcare facilities'
    ],
    technologies: ['3D Modeling', 'IoT', 'Real-time Analytics', 'Unity', 'React', 'Node.js'],
    link: '/services/digital-twin-platform',
    tags: ['Digital Twin', 'IoT', '3D Modeling', 'Analytics']
  },
  {
    id: 'green-it-sustainability-platform',
    title: 'Green IT Sustainability Platform',
    description: 'Comprehensive sustainability platform for monitoring, analyzing, and optimizing environmental impact of IT operations.',
    shortDescription: 'IT sustainability monitoring and optimization',
    category: 'Sustainability',
    icon: 'Leaf',
    features: [
      'Carbon footprint tracking and analysis',
      'Energy consumption monitoring',
      'Sustainable IT procurement recommendations',
      'Green computing optimization',
      'Environmental compliance reporting',
      'Sustainability scorecards and metrics',
      'Carbon offset tracking',
      'Integration with IT management tools'
    ],
    benefits: [
      'Reduce carbon footprint by 40%',
      'Lower energy costs',
      'Meet sustainability goals',
      'Enhanced corporate social responsibility',
      'Regulatory compliance support'
    ],
    pricing: {
      starter: 89,
      professional: 229,
      enterprise: 549,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Enterprise IT departments',
      'Data centers',
      'Cloud service providers',
      'Government agencies',
      'Educational institutions'
    ],
    technologies: ['IoT Sensors', 'Energy Analytics', 'Sustainability Metrics', 'React', 'Node.js', 'Green APIs'],
    link: '/services/green-it-sustainability-platform',
    isNew: true,
    tags: ['Sustainability', 'Green IT', 'Energy', 'Environment']
  },
  {
    id: 'blockchain-enterprise-solutions',
    title: 'Blockchain Enterprise Solutions',
    description: 'Enterprise-grade blockchain solutions for supply chain transparency, smart contracts, and decentralized applications.',
    shortDescription: 'Enterprise blockchain and smart contract solutions',
    category: 'Enterprise',
    icon: 'Link',
    features: [
      'Private blockchain networks',
      'Smart contract development and deployment',
      'Supply chain transparency and tracking',
      'Digital identity management',
      'Tokenization and asset management',
      'Interoperability solutions',
      'Compliance and regulatory support',
      'Integration with enterprise systems'
    ],
    benefits: [
      'Enhanced transparency and trust',
      'Reduced transaction costs',
      'Improved security and immutability',
      'Streamlined business processes',
      'New business model opportunities'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Financial institutions',
      'Supply chain companies',
      'Healthcare organizations',
      'Government agencies',
      'Real estate companies'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'Web3', 'Solidity', 'React', 'Node.js'],
    link: '/services/blockchain-enterprise-solutions',
    tags: ['Blockchain', 'Smart Contracts', 'Web3', 'Enterprise']
  },
  {
    id: 'iot-edge-computing-platform',
    title: 'IoT Edge Computing Platform',
    description: 'Advanced IoT platform with edge computing capabilities for real-time data processing and intelligent device management.',
    shortDescription: 'IoT edge computing and device management',
    category: 'IoT',
    icon: 'Activity',
    features: [
      'Edge computing and local data processing',
      'IoT device management and monitoring',
      'Real-time data analytics',
      'Predictive maintenance',
      'Device security and authentication',
      'Scalable IoT infrastructure',
      'Integration with cloud services',
      'Custom IoT application development'
    ],
    benefits: [
      'Reduce latency and bandwidth costs',
      'Enhanced data privacy and security',
      'Real-time decision making',
      'Scalable IoT deployments',
      'Improved operational efficiency'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Manufacturing companies',
      'Smart cities',
      'Healthcare facilities',
      'Agriculture businesses',
      'Energy companies'
    ],
    technologies: ['IoT', 'Edge Computing', 'Real-time Analytics', 'Python', 'React', 'MQTT'],
    link: '/services/iot-edge-computing-platform',
    tags: ['IoT', 'Edge Computing', 'Real-time', 'Analytics']
  },
  {
    id: 'cloud-devops-automation',
    title: 'Cloud DevOps Automation',
    description: 'Comprehensive DevOps automation platform for cloud-native applications with CI/CD, infrastructure as code, and monitoring.',
    shortDescription: 'Cloud DevOps automation and orchestration',
    category: 'Cloud',
    icon: 'Cloud',
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as Code (IaC)',
      'Container orchestration and management',
      'Cloud cost optimization',
      'Monitoring and alerting',
      'Security and compliance automation',
      'Multi-cloud management',
      'Integration with popular DevOps tools'
    ],
    benefits: [
      'Faster deployment cycles',
      'Reduced infrastructure costs',
      'Improved reliability and uptime',
      'Enhanced security and compliance',
      'Better team collaboration'
    ],
    pricing: {
      starter: 129,
      professional: 349,
      enterprise: 899,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Development teams',
      'DevOps engineers',
      'Cloud architects',
      'Startups',
      'Enterprise IT departments'
    ],
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'React', 'Node.js'],
    link: '/services/cloud-devops-automation',
    tags: ['DevOps', 'Cloud', 'Automation', 'CI/CD']
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation',
    description: 'Intelligent marketing automation platform with AI-powered personalization, campaign optimization, and customer journey mapping.',
    shortDescription: 'AI-driven marketing automation and optimization',
    category: 'AI',
    icon: 'TrendingUp',
    features: [
      'AI-powered customer segmentation',
      'Personalized marketing campaigns',
      'Automated email marketing',
      'Social media automation',
      'Campaign performance analytics',
      'Customer journey mapping',
      'A/B testing and optimization',
      'Integration with marketing tools'
    ],
    benefits: [
      'Increase conversion rates by 50%',
      'Reduce marketing costs by 30%',
      'Personalized customer experiences',
      'Automated campaign management',
      'Better ROI tracking and optimization'
    ],
    pricing: {
      starter: 99,
      professional: 249,
      enterprise: 599,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Marketing teams',
      'E-commerce businesses',
      'B2B companies',
      'Agencies',
      'Startups'
    ],
    technologies: ['Machine Learning', 'Marketing Automation', 'Analytics', 'React', 'Node.js', 'Marketing APIs'],
    link: '/services/ai-marketing-automation',
    tags: ['AI', 'Marketing', 'Automation', 'Personalization']
  },
  {
    id: 'ai-powered-seo-platform',
    title: 'AI-Powered SEO Platform',
    description: 'Advanced SEO platform with AI-driven keyword research, content optimization, and competitive analysis.',
    shortDescription: 'AI-enhanced SEO optimization and analysis',
    category: 'AI',
    icon: 'Search',
    features: [
      'AI-powered keyword research and analysis',
      'Content optimization recommendations',
      'Competitive analysis and insights',
      'Technical SEO auditing',
      'Ranking tracking and reporting',
      'Local SEO optimization',
      'Schema markup generation',
      'Integration with analytics tools'
    ],
    benefits: [
      'Improve search rankings by 40%',
      'Increase organic traffic',
      'Better content optimization',
      'Competitive advantage insights',
      'Automated SEO monitoring'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'SEO agencies',
      'Digital marketers',
      'E-commerce businesses',
      'Content creators',
      'Small businesses'
    ],
    technologies: ['Machine Learning', 'NLP', 'SEO Analytics', 'React', 'Node.js', 'SEO APIs'],
    link: '/services/ai-powered-seo-platform',
    tags: ['AI', 'SEO', 'Analytics', 'Marketing']
  },
  {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance',
    description: 'Intelligent predictive maintenance platform using AI and IoT to prevent equipment failures and optimize maintenance schedules.',
    shortDescription: 'AI-powered predictive maintenance and monitoring',
    category: 'AI',
    icon: 'Wrench',
    features: [
      'Equipment health monitoring',
      'Failure prediction algorithms',
      'Maintenance schedule optimization',
      'Real-time alerts and notifications',
      'Performance analytics and reporting',
      'IoT sensor integration',
      'Cost optimization analysis',
      'Integration with maintenance systems'
    ],
    benefits: [
      'Reduce unplanned downtime by 50%',
      'Lower maintenance costs by 30%',
      'Extend equipment lifespan',
      'Improved safety and reliability',
      'Optimized resource allocation'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Manufacturing companies',
      'Energy companies',
      'Transportation companies',
      'Healthcare facilities',
      'Data centers'
    ],
    technologies: ['Machine Learning', 'IoT', 'Predictive Analytics', 'Python', 'React', 'IoT APIs'],
    link: '/services/ai-predictive-maintenance',
    tags: ['AI', 'Predictive Maintenance', 'IoT', 'Analytics']
  },
  {
    id: 'ai-hr-platform',
    title: 'AI HR Platform',
    description: 'Comprehensive HR platform with AI-powered recruitment, employee engagement, and performance management.',
    shortDescription: 'AI-enhanced HR management and automation',
    category: 'AI',
    icon: 'Users',
    features: [
      'AI-powered candidate screening',
      'Automated interview scheduling',
      'Employee engagement monitoring',
      'Performance analytics and insights',
      'Skills gap analysis',
      'Learning and development tracking',
      'HR analytics and reporting',
      'Integration with HR systems'
    ],
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality',
      'Enhanced employee engagement',
      'Better performance management',
      'Data-driven HR decisions'
    ],
    pricing: {
      starter: 89,
      professional: 229,
      enterprise: 549,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'HR departments',
      'Recruitment agencies',
      'Large enterprises',
      'Startups',
      'Educational institutions'
    ],
    technologies: ['Machine Learning', 'NLP', 'HR Analytics', 'React', 'Node.js', 'HR APIs'],
    link: '/services/ai-hr-platform',
    tags: ['AI', 'HR', 'Recruitment', 'Analytics']
  },
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence',
    description: 'Advanced business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
    shortDescription: 'AI-driven business intelligence and analytics',
    category: 'AI',
    icon: 'BarChart3',
    features: [
      'AI-powered data analysis and insights',
      'Predictive analytics and forecasting',
      'Automated report generation',
      'Interactive dashboards and visualizations',
      'Natural language query interface',
      'Data integration and ETL',
      'Real-time analytics',
      'Integration with business systems'
    ],
    benefits: [
      'Faster insights and decision making',
      'Improved forecasting accuracy',
      'Automated reporting and analysis',
      'Better data-driven decisions',
      'Enhanced business performance'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Business analysts',
      'Executives and managers',
      'Data scientists',
      'Consulting firms',
      'Enterprise organizations'
    ],
    technologies: ['Machine Learning', 'Data Analytics', 'BI Tools', 'React', 'Python', 'Data APIs'],
    link: '/services/ai-business-intelligence',
    tags: ['AI', 'Business Intelligence', 'Analytics', 'Reporting']
  },
  {
    id: 'ai-code-review-security',
    title: 'AI Code Review & Security',
    description: 'Intelligent code review platform with security analysis, vulnerability detection, and code quality assessment.',
    shortDescription: 'AI-powered code review and security analysis',
    category: 'AI',
    icon: 'Code',
    features: [
      'Automated code review and analysis',
      'Security vulnerability detection',
      'Code quality assessment',
      'Performance optimization suggestions',
      'Compliance checking',
      'Integration with development tools',
      'Team collaboration features',
      'Security best practices recommendations'
    ],
    benefits: [
      'Reduce security vulnerabilities by 70%',
      'Improve code quality',
      'Faster code review process',
      'Better security compliance',
      'Enhanced development productivity'
    ],
    pricing: {
      starter: 129,
      professional: 349,
      enterprise: 899,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Development teams',
      'Software companies',
      'DevOps teams',
      'Security teams',
      'Code review specialists'
    ],
    technologies: ['Machine Learning', 'Static Analysis', 'Security Scanning', 'Python', 'React', 'Security APIs'],
    link: '/services/ai-code-review-security',
    tags: ['AI', 'Code Review', 'Security', 'Development']
  },
  {
    id: 'ai-content-optimizer-pro',
    title: 'AI Content Optimizer Pro',
    description: 'Advanced content optimization platform with AI-powered editing, SEO optimization, and performance analytics.',
    shortDescription: 'AI-enhanced content optimization and editing',
    category: 'AI',
    icon: 'Edit',
    features: [
      'AI-powered content editing and suggestions',
      'SEO optimization recommendations',
      'Readability and engagement analysis',
      'Content performance tracking',
      'Multi-format content support',
      'Collaborative editing tools',
      'Content analytics and insights',
      'Integration with CMS platforms'
    ],
    benefits: [
      'Improve content quality by 40%',
      'Better SEO performance',
      'Enhanced reader engagement',
      'Faster content creation',
      'Data-driven content optimization'
    ],
    pricing: {
      starter: 69,
      professional: 179,
      enterprise: 449,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Content creators',
      'Marketing teams',
      'Publishers',
      'Bloggers',
      'E-commerce businesses'
    ],
    technologies: ['NLP', 'Machine Learning', 'Content Analysis', 'React', 'Node.js', 'Content APIs'],
    link: '/services/ai-content-optimizer-pro',
    tags: ['AI', 'Content', 'Optimization', 'SEO']
  },
  {
    id: 'ai-customer-experience-analytics',
    title: 'AI Customer Experience Analytics',
    description: 'Comprehensive customer experience analytics platform with sentiment analysis, journey mapping, and predictive insights.',
    shortDescription: 'AI-powered customer experience analytics',
    category: 'AI',
    icon: 'Smile',
    features: [
      'Customer sentiment analysis',
      'Journey mapping and optimization',
      'Predictive customer behavior',
      'Real-time feedback monitoring',
      'Customer satisfaction scoring',
      'Churn prediction and prevention',
      'Personalization recommendations',
      'Integration with CRM systems'
    ],
    benefits: [
      'Improve customer satisfaction by 35%',
      'Reduce customer churn',
      'Better customer insights',
      'Enhanced personalization',
      'Proactive customer service'
    ],
    pricing: {
      starter: 179,
      professional: 449,
      enterprise: 1099,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Customer success teams',
      'Marketing departments',
      'Product managers',
      'E-commerce businesses',
      'Service companies'
    ],
    technologies: ['Machine Learning', 'Sentiment Analysis', 'Customer Analytics', 'React', 'Python', 'Analytics APIs'],
    link: '/services/ai-customer-experience-analytics',
    tags: ['AI', 'Customer Experience', 'Analytics', 'Personalization']
  },
  {
    id: 'ai-devops-automation-platform',
    title: 'AI DevOps Automation Platform',
    description: 'Intelligent DevOps automation platform with AI-powered deployment optimization, monitoring, and incident response.',
    shortDescription: 'AI-enhanced DevOps automation and monitoring',
    category: 'AI',
    icon: 'Settings',
    features: [
      'AI-powered deployment optimization',
      'Intelligent monitoring and alerting',
      'Automated incident response',
      'Performance optimization',
      'Security scanning and compliance',
      'Infrastructure scaling',
      'Integration with DevOps tools',
      'Predictive maintenance'
    ],
    benefits: [
      'Reduce deployment failures by 60%',
      'Faster incident resolution',
      'Improved system performance',
      'Enhanced security and compliance',
      'Better resource utilization'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'DevOps teams',
      'Site reliability engineers',
      'Cloud architects',
      'Development teams',
      'IT operations'
    ],
    technologies: ['Machine Learning', 'DevOps Automation', 'Monitoring', 'Python', 'React', 'DevOps APIs'],
    link: '/services/ai-devops-automation-platform',
    tags: ['AI', 'DevOps', 'Automation', 'Monitoring']
  },
  {
    id: 'ai-auto-email-responder',
    title: 'AI Auto Email Responder',
    description: 'Intelligent email automation platform with AI-powered responses, categorization, and workflow automation.',
    shortDescription: 'AI-powered email automation and responses',
    category: 'AI',
    icon: 'Mail',
    features: [
      'AI-powered email categorization',
      'Automated response generation',
      'Smart email routing',
      'Workflow automation',
      'Email analytics and insights',
      'Integration with email platforms',
      'Custom response templates',
      'Multi-language support'
    ],
    benefits: [
      'Reduce email response time by 80%',
      'Automate repetitive email tasks',
      'Better email organization',
      'Improved customer communication',
      'Enhanced productivity'
    ],
    pricing: {
      starter: 59,
      professional: 149,
      enterprise: 399,
      currency: 'USD',
      period: 'month'
    },
    useCases: [
      'Customer service teams',
      'Sales teams',
      'HR departments',
      'Support teams',
      'Small businesses'
    ],
    technologies: ['NLP', 'Machine Learning', 'Email Automation', 'React', 'Node.js', 'Email APIs'],
    link: '/services/ai-auto-email-responder',
    tags: ['AI', 'Email', 'Automation', 'Communication']
  }
];

export const getServicesByCategory = (category: string) => {
  return servicesData.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return servicesData.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return servicesData.filter(service => service.isNew);
};

export const searchServices = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return servicesData.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
