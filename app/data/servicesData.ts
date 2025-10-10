// Comprehensive Services Data for Zion Tech Group
// This file contains all services, pricing, and features

export interface ServiceFeature {
  name: string;
  description: string;
  icon: string;
  category: string;
  subcategory?: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  popular?: boolean;
  new?: boolean;
  description: string;
  useCases: string[];
  technologies: string[];
  pricing: {
    basic: string;
    professional: string;
    enterprise: string;
  };
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

// AI Services
export const aiServices: ServiceFeature[] = [
  {
    name: 'AI-Powered Business Intelligence',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform that learns from your business patterns.',
    icon: 'BarChart3',
    category: 'AI Services',
    subcategory: 'Analytics',
    features: [
      'Real-time data processing and analysis',
      'Predictive analytics and forecasting',
      'Natural language query interface',
      'Automated report generation',
      'Custom dashboard creation',
      'Multi-source data integration',
      'Anomaly detection and alerting',
      'ROI tracking and optimization'
    ],
    price: 'Starting at $1,299/month',
    marketPrice: '$2,500-8,000/month',
    benefits: [
      'Increase decision-making speed by 75%',
      'Reduce manual reporting time by 90%',
      'Improve forecast accuracy by 60%',
      'Identify new revenue opportunities'
    ],
    popular: true,
    new: false,
    useCases: [
      'Sales performance optimization',
      'Customer behavior analysis',
      'Financial forecasting',
      'Supply chain optimization',
      'Marketing campaign effectiveness'
    ],
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Apache Spark', 'Tableau', 'Power BI'],
    pricing: {
      basic: '$1,299/month',
      professional: '$2,999/month',
      enterprise: '$5,999/month'
    },
    contactInfo
  },
  {
    name: 'AI Customer Support Automation',
    description: 'Revolutionary AI-powered customer support that provides 24/7 intelligent assistance with human-like understanding.',
    icon: 'MessageCircle',
    category: 'AI Services',
    subcategory: 'Customer Service',
    features: [
      'Natural language processing (NLP)',
      'Multi-channel support (web, phone, email, chat)',
      'Sentiment analysis and emotion detection',
      'Automated ticket routing and escalation',
      'Knowledge base integration',
      'Live agent handoff with context preservation',
      'Multi-language support (50+ languages)',
      'Performance analytics and insights'
    ],
    price: 'Starting at $599/month',
    marketPrice: '$1,200-4,000/month',
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 95%',
      'Increase customer satisfaction by 40%',
      'Handle 10x more inquiries simultaneously'
    ],
    popular: true,
    new: false,
    useCases: [
      'E-commerce customer support',
      'SaaS product support',
      'Financial services assistance',
      'Healthcare patient inquiries',
      'Technical support automation'
    ],
    technologies: ['GPT-4', 'OpenAI API', 'React', 'Node.js', 'WebSocket', 'Redis'],
    pricing: {
      basic: '$599/month',
      professional: '$1,299/month',
      enterprise: '$2,999/month'
    },
    contactInfo
  },
  {
    name: 'AI Content Generation Suite',
    description: 'Create high-quality, SEO-optimized content at scale with our advanced AI writing and design tools.',
    icon: 'FileText',
    category: 'AI Services',
    subcategory: 'Content Creation',
    features: [
      'Blog post and article generation',
      'Social media content creation',
      'Email marketing campaigns',
      'Product descriptions and copy',
      'SEO optimization and keyword integration',
      'Brand voice customization',
      'Multi-language content generation',
      'Content performance analytics'
    ],
    price: 'Starting at $299/month',
    marketPrice: '$500-2,000/month',
    benefits: [
      'Save 80% content creation time',
      'Increase content output by 500%',
      'Improve SEO rankings by 65%',
      'Maintain consistent brand voice'
    ],
    popular: false,
    new: true,
    useCases: [
      'Content marketing automation',
      'E-commerce product descriptions',
      'Social media management',
      'Email marketing campaigns',
      'Blog and website content'
    ],
    technologies: ['GPT-4', 'DALL-E', 'Midjourney', 'React', 'Node.js', 'MongoDB'],
    pricing: {
      basic: '$299/month',
      professional: '$699/month',
      enterprise: '$1,499/month'
    },
    contactInfo
  },
  {
    name: 'AI Computer Vision Solutions',
    description: 'Advanced image and video analysis for quality control, security, and automation across industries.',
    icon: 'Eye',
    category: 'AI Services',
    subcategory: 'Computer Vision',
    features: [
      'Object detection and recognition',
      'Quality control automation',
      'Facial recognition and biometrics',
      'Video analytics and monitoring',
      'OCR and document scanning',
      'Medical image analysis',
      'Real-time processing capabilities',
      'Custom model training'
    ],
    price: 'Starting at $1,999/month',
    marketPrice: '$3,500-12,000/month',
    benefits: [
      'Reduce quality control costs by 70%',
      'Improve accuracy by 95%',
      'Enable 24/7 automated monitoring',
      'Reduce human error by 90%'
    ],
    popular: false,
    new: false,
    useCases: [
      'Manufacturing quality control',
      'Retail inventory management',
      'Security and surveillance',
      'Medical diagnosis support',
      'Autonomous vehicle systems'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'CUDA', 'Docker', 'Kubernetes'],
    pricing: {
      basic: '$1,999/month',
      professional: '$4,999/month',
      enterprise: '$9,999/month'
    },
    contactInfo
  },
  {
    name: 'AI Process Automation (RPA+)',
    description: 'Intelligent robotic process automation that learns and adapts to optimize your business workflows.',
    icon: 'Zap',
    category: 'AI Services',
    subcategory: 'Automation',
    features: [
      'Intelligent workflow automation',
      'Document processing and data extraction',
      'Email and calendar automation',
      'Invoice processing and approval',
      'Customer onboarding automation',
      'Compliance monitoring and reporting',
      'Exception handling and escalation',
      'Performance analytics and optimization'
    ],
    price: 'Starting at $899/month',
    marketPrice: '$1,500-5,000/month',
    benefits: [
      'Reduce manual work by 85%',
      'Improve process accuracy by 95%',
      'Cut operational costs by 50%',
      'Scale operations without additional staff'
    ],
    popular: true,
    new: false,
    useCases: [
      'Financial services processing',
      'HR and payroll automation',
      'Supply chain management',
      'Customer service workflows',
      'Compliance and audit processes'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'Selenium', 'APIs', 'Machine Learning'],
    pricing: {
      basic: '$899/month',
      professional: '$1,999/month',
      enterprise: '$3,999/month'
    },
    contactInfo
  },
  {
    name: 'AI Cybersecurity & Threat Detection',
    description: 'Advanced AI-powered security solutions that protect your digital assets with intelligent threat detection.',
    icon: 'Shield',
    category: 'AI Services',
    subcategory: 'Security',
    features: [
      'Real-time threat detection and response',
      'Behavioral analysis and anomaly detection',
      'Automated incident response',
      'Vulnerability assessment and management',
      'Compliance monitoring (SOC2, GDPR, HIPAA)',
      'Dark web monitoring and breach detection',
      'Security awareness training platform',
      '24/7 SOC (Security Operations Center) support'
    ],
    price: 'Starting at $1,499/month',
    marketPrice: '$2,500-8,000/month',
    benefits: [
      'Reduce security incidents by 80%',
      'Improve threat detection speed by 90%',
      'Ensure compliance with regulations',
      'Minimize security breach impact'
    ],
    popular: false,
    new: true,
    useCases: [
      'Enterprise security monitoring',
      'Financial services protection',
      'Healthcare data security',
      'E-commerce fraud prevention',
      'Government and defense'
    ],
    technologies: ['Machine Learning', 'SIEM', 'SOAR', 'Python', 'Elasticsearch', 'Kibana'],
    pricing: {
      basic: '$1,499/month',
      professional: '$2,999/month',
      enterprise: '$5,999/month'
    },
    contactInfo
  },
  {
    name: 'AI Financial Analysis & Trading',
    description: 'Intelligent financial analysis and algorithmic trading solutions for investment optimization.',
    icon: 'TrendingUp',
    category: 'AI Services',
    subcategory: 'Finance',
    features: [
      'Algorithmic trading strategies',
      'Risk assessment and management',
      'Portfolio optimization',
      'Market sentiment analysis',
      'Fraud detection and prevention',
      'Credit scoring and underwriting',
      'Real-time market monitoring',
      'Regulatory compliance reporting'
    ],
    price: 'Starting at $2,999/month',
    marketPrice: '$5,000-20,000/month',
    benefits: [
      'Improve trading performance by 40%',
      'Reduce risk exposure by 60%',
      'Automate investment decisions',
      'Ensure regulatory compliance'
    ],
    popular: false,
    new: false,
    useCases: [
      'Hedge fund management',
      'Banking and financial services',
      'Insurance underwriting',
      'Cryptocurrency trading',
      'Investment advisory services'
    ],
    technologies: ['Python', 'QuantLib', 'TensorFlow', 'Pandas', 'NumPy', 'APIs'],
    pricing: {
      basic: '$2,999/month',
      professional: '$5,999/month',
      enterprise: '$12,999/month'
    },
    contactInfo
  },
  {
    name: 'AI Healthcare Solutions',
    description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.',
    icon: 'Heart',
    category: 'AI Services',
    subcategory: 'Healthcare',
    features: [
      'Medical image analysis and diagnosis',
      'Drug discovery and development',
      'Patient risk assessment',
      'Treatment recommendation systems',
      'Electronic health record analysis',
      'Clinical trial optimization',
      'Telemedicine support',
      'HIPAA compliance and security'
    ],
    price: 'Starting at $3,999/month',
    marketPrice: '$7,500-25,000/month',
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce treatment costs by 25%',
      'Accelerate drug discovery by 50%',
      'Enhance patient outcomes'
    ],
    popular: false,
    new: true,
    useCases: [
      'Hospital and clinic systems',
      'Pharmaceutical companies',
      'Medical device manufacturers',
      'Telemedicine platforms',
      'Health insurance providers'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'DICOM', 'FHIR', 'Python', 'Docker'],
    pricing: {
      basic: '$3,999/month',
      professional: '$7,999/month',
      enterprise: '$15,999/month'
    },
    contactInfo
  },
  {
    name: 'AI Marketing Automation Platform',
    description: 'Comprehensive AI-powered marketing automation with personalized campaigns and intelligent optimization.',
    icon: 'Target',
    category: 'AI Services',
    subcategory: 'Marketing',
    features: [
      'Personalized campaign creation',
      'Customer segmentation and targeting',
      'A/B testing and optimization',
      'Email and SMS marketing automation',
      'Social media management',
      'Content recommendation engines',
      'Lead scoring and qualification',
      'ROI tracking and analytics'
    ],
    price: 'Starting at $799/month',
    marketPrice: '$1,500-5,000/month',
    benefits: [
      'Increase conversion rates by 65%',
      'Reduce marketing costs by 40%',
      'Improve customer engagement by 80%',
      'Automate repetitive marketing tasks'
    ],
    popular: true,
    new: false,
    useCases: [
      'E-commerce marketing',
      'SaaS customer acquisition',
      'B2B lead generation',
      'Retail customer retention',
      'Service-based businesses'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'MongoDB', 'APIs', 'Analytics'],
    pricing: {
      basic: '$799/month',
      professional: '$1,599/month',
      enterprise: '$3,199/month'
    },
    contactInfo
  },
  {
    name: 'AI Voice & Speech Solutions',
    description: 'Advanced voice recognition, synthesis, and conversational AI for enhanced customer interactions.',
    icon: 'Mic',
    category: 'AI Services',
    subcategory: 'Voice AI',
    features: [
      'Speech-to-text conversion',
      'Text-to-speech synthesis',
      'Voice biometrics and authentication',
      'Call analytics and insights',
      'Multi-language voice support',
      'Voice command processing',
      'Real-time transcription',
      'Custom voice model training'
    ],
    price: 'Starting at $499/month',
    marketPrice: '$800-3,000/month',
    benefits: [
      'Improve accessibility by 90%',
      'Reduce call center costs by 50%',
      'Enhance customer experience',
      'Enable hands-free operations'
    ],
    popular: false,
    new: true,
    useCases: [
      'Call center automation',
      'Voice assistants and chatbots',
      'Accessibility solutions',
      'IoT voice interfaces',
      'Customer service automation'
    ],
    technologies: ['Google Cloud Speech', 'Amazon Polly', 'Azure Speech', 'WebRTC', 'Node.js'],
    pricing: {
      basic: '$499/month',
      professional: '$999/month',
      enterprise: '$1,999/month'
    },
    contactInfo
  },
  {
    name: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
    icon: 'Truck',
    category: 'AI Services',
    subcategory: 'Supply Chain',
    features: [
      'Demand forecasting and planning',
      'Inventory optimization',
      'Route planning and logistics',
      'Supplier risk assessment',
      'Quality control automation',
      'Cost optimization analysis',
      'Real-time tracking and monitoring',
      'Sustainability reporting'
    ],
    price: 'Starting at $1,799/month',
    marketPrice: '$3,000-10,000/month',
    benefits: [
      'Reduce inventory costs by 30%',
      'Improve delivery times by 40%',
      'Minimize supply chain disruptions',
      'Optimize logistics operations'
    ],
    popular: false,
    new: false,
    useCases: [
      'Manufacturing companies',
      'Retail and e-commerce',
      'Logistics providers',
      'Food and beverage industry',
      'Automotive supply chains'
    ],
    technologies: ['Machine Learning', 'Python', 'Optimization Algorithms', 'APIs', 'IoT', 'Blockchain'],
    pricing: {
      basic: '$1,799/month',
      professional: '$3,599/month',
      enterprise: '$6,999/month'
    },
    contactInfo
  }
];

// IT Services
export const itServices: ServiceFeature[] = [
  {
    name: 'Cloud Infrastructure & Migration',
    description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration and optimization services.',
    icon: 'Cloud',
    category: 'IT Services',
    subcategory: 'Cloud Computing',
    features: [
      'Multi-cloud architecture design',
      'Zero-downtime migration services',
      'Cost optimization and monitoring',
      'Auto-scaling and load balancing',
      'Disaster recovery and backup',
      'Security compliance (SOC2, ISO27001)',
      '24/7 monitoring and support',
      'Performance optimization'
    ],
    price: 'Starting at $2,999/month',
    marketPrice: '$5,000-15,000/month',
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve scalability and flexibility',
      'Enhance security and compliance',
      'Enable remote work capabilities'
    ],
    popular: true,
    new: false,
    useCases: [
      'Enterprise cloud migration',
      'SaaS application hosting',
      'Data center consolidation',
      'Disaster recovery solutions',
      'Hybrid cloud environments'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    pricing: {
      basic: '$2,999/month',
      professional: '$5,999/month',
      enterprise: '$11,999/month'
    },
    contactInfo
  },
  {
    name: 'Cybersecurity & Compliance',
    description: 'Comprehensive security solutions including threat detection, compliance management, and incident response.',
    icon: 'Shield',
    category: 'IT Services',
    subcategory: 'Security',
    features: [
      'Security assessment and auditing',
      'Threat detection and response',
      'Vulnerability management',
      'Compliance monitoring (SOC2, GDPR, HIPAA)',
      'Penetration testing',
      'Security awareness training',
      'Incident response planning',
      '24/7 security operations center'
    ],
    price: 'Starting at $1,999/month',
    marketPrice: '$3,500-12,000/month',
    benefits: [
      'Reduce security risks by 85%',
      'Ensure regulatory compliance',
      'Minimize breach impact',
      'Improve security posture'
    ],
    popular: true,
    new: false,
    useCases: [
      'Enterprise security programs',
      'Healthcare compliance',
      'Financial services security',
      'Government and defense',
      'E-commerce protection'
    ],
    technologies: ['SIEM', 'SOAR', 'Firewalls', 'EDR', 'MDR', 'Compliance Tools'],
    pricing: {
      basic: '$1,999/month',
      professional: '$3,999/month',
      enterprise: '$7,999/month'
    },
    contactInfo
  },
  {
    name: 'DevOps & CI/CD Pipeline',
    description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
    icon: 'Settings',
    category: 'IT Services',
    subcategory: 'DevOps',
    features: [
      'CI/CD pipeline setup and optimization',
      'Infrastructure as Code (IaC)',
      'Container orchestration (Kubernetes)',
      'Automated testing and deployment',
      'Monitoring and logging solutions',
      'Performance optimization',
      'Security integration',
      'Team training and support'
    ],
    price: 'Starting at $2,499/month',
    marketPrice: '$4,000-12,000/month',
    benefits: [
      'Reduce deployment time by 90%',
      'Improve code quality and reliability',
      'Enable faster feature delivery',
      'Reduce operational overhead'
    ],
    popular: true,
    new: false,
    useCases: [
      'Software development teams',
      'SaaS companies',
      'E-commerce platforms',
      'Financial technology',
      'Healthcare applications'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    pricing: {
      basic: '$2,499/month',
      professional: '$4,999/month',
      enterprise: '$9,999/month'
    },
    contactInfo
  },
  {
    name: 'Database Management & Optimization',
    description: 'Expert database design, optimization, and management for all major database systems.',
    icon: 'Database',
    category: 'IT Services',
    subcategory: 'Database',
    features: [
      'Database design and architecture',
      'Performance tuning and optimization',
      'Backup and disaster recovery',
      'Data migration and consolidation',
      'Security hardening and compliance',
      'Monitoring and alerting',
      'Capacity planning',
      '24/7 database administration'
    ],
    price: 'Starting at $1,299/month',
    marketPrice: '$2,000-8,000/month',
    benefits: [
      'Improve database performance by 70%',
      'Reduce downtime by 95%',
      'Ensure data security and compliance',
      'Optimize storage costs'
    ],
    popular: false,
    new: false,
    useCases: [
      'Enterprise applications',
      'E-commerce platforms',
      'Financial systems',
      'Healthcare databases',
      'Analytics and reporting'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
    pricing: {
      basic: '$1,299/month',
      professional: '$2,599/month',
      enterprise: '$4,999/month'
    },
    contactInfo
  },
  {
    name: 'IT Infrastructure Management',
    description: 'Complete infrastructure setup and management including servers, networks, and hardware optimization.',
    icon: 'Server',
    category: 'IT Services',
    subcategory: 'Infrastructure',
    features: [
      'Server setup and configuration',
      'Network design and implementation',
      'Hardware procurement and management',
      'System administration and maintenance',
      'Performance monitoring and optimization',
      'Capacity planning and scaling',
      'Security implementation',
      'Disaster recovery planning'
    ],
    price: 'Starting at $1,799/month',
    marketPrice: '$3,000-10,000/month',
    benefits: [
      'Improve system reliability by 90%',
      'Reduce maintenance costs by 50%',
      'Enhance security posture',
      'Enable business growth'
    ],
    popular: false,
    new: false,
    useCases: [
      'Enterprise infrastructure',
      'Data center management',
      'Remote work solutions',
      'Hybrid cloud environments',
      'Legacy system modernization'
    ],
    technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Cisco', 'Fortinet'],
    pricing: {
      basic: '$1,799/month',
      professional: '$3,599/month',
      enterprise: '$6,999/month'
    },
    contactInfo
  },
  {
    name: 'Managed IT Services',
    description: 'Comprehensive IT management including helpdesk, monitoring, maintenance, and support services.',
    icon: 'Headphones',
    category: 'IT Services',
    subcategory: 'Support',
    features: [
      '24/7 helpdesk support',
      'Remote monitoring and management',
      'Proactive maintenance and updates',
      'Software license management',
      'User training and support',
      'Incident management and resolution',
      'Vendor management',
      'IT strategy and planning'
    ],
    price: 'Starting at $999/month',
    marketPrice: '$1,500-5,000/month',
    benefits: [
      'Reduce IT costs by 40%',
      'Improve system uptime by 95%',
      'Enhance user productivity',
      'Minimize IT disruptions'
    ],
    popular: true,
    new: false,
    useCases: [
      'Small to medium businesses',
      'Remote workforces',
      'Multi-location companies',
      'Growing startups',
      'Non-profit organizations'
    ],
    technologies: ['RMM Tools', 'PSA Software', 'Remote Access', 'Monitoring', 'Ticketing', 'Documentation'],
    pricing: {
      basic: '$999/month',
      professional: '$1,999/month',
      enterprise: '$3,999/month'
    },
    contactInfo
  },
  {
    name: 'Web Development & E-commerce',
    description: 'Custom web applications and e-commerce solutions built with modern technologies and best practices.',
    icon: 'Globe',
    category: 'IT Services',
    subcategory: 'Development',
    features: [
      'Custom web application development',
      'E-commerce platform development',
      'API development and integration',
      'Responsive design and mobile optimization',
      'Performance optimization and SEO',
      'Security implementation',
      'Content management systems',
      'Third-party integrations'
    ],
    price: 'Starting at $5,999/project',
    marketPrice: '$10,000-50,000/project',
    benefits: [
      'Modern, scalable web solutions',
      'Mobile-responsive design',
      'SEO optimization',
      'Security best practices'
    ],
    popular: false,
    new: false,
    useCases: [
      'E-commerce websites',
      'Corporate websites',
      'SaaS applications',
      'Portfolio sites',
      'Online marketplaces'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
    pricing: {
      basic: '$5,999/project',
      professional: '$12,999/project',
      enterprise: '$25,999/project'
    },
    contactInfo
  },
  {
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
    icon: 'Smartphone',
    category: 'IT Services',
    subcategory: 'Development',
    features: [
      'Native iOS and Android development',
      'Cross-platform development (React Native, Flutter)',
      'UI/UX design and prototyping',
      'App store optimization and deployment',
      'Push notifications and analytics',
      'Backend API development',
      'Security and compliance',
      'Maintenance and updates'
    ],
    price: 'Starting at $8,999/project',
    marketPrice: '$15,000-100,000/project',
    benefits: [
      'Native performance and user experience',
      'Cross-platform compatibility',
      'Modern UI/UX design',
      'App store optimization'
    ],
    popular: false,
    new: false,
    useCases: [
      'Business mobile apps',
      'E-commerce mobile platforms',
      'SaaS mobile applications',
      'Healthcare apps',
      'Financial services apps'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'APIs'],
    pricing: {
      basic: '$8,999/project',
      professional: '$18,999/project',
      enterprise: '$39,999/project'
    },
    contactInfo
  },
  {
    name: 'Data Analytics & Business Intelligence',
    description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
    icon: 'BarChart3',
    category: 'IT Services',
    subcategory: 'Analytics',
    features: [
      'Data warehouse design and implementation',
      'ETL/ELT process development',
      'Custom dashboard and report creation',
      'Predictive analytics and modeling',
      'Data visualization and storytelling',
      'Real-time reporting and alerts',
      'Data governance and quality',
      'Machine learning integration'
    ],
    price: 'Starting at $2,299/month',
    marketPrice: '$4,000-15,000/month',
    benefits: [
      'Data-driven decision making',
      'Improved business performance',
      'Automated reporting and insights',
      'Competitive advantage through data'
    ],
    popular: true,
    new: false,
    useCases: [
      'Business intelligence dashboards',
      'Sales and marketing analytics',
      'Financial reporting and analysis',
      'Operational efficiency metrics',
      'Customer behavior analysis'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'R', 'SQL', 'Apache Spark'],
    pricing: {
      basic: '$2,299/month',
      professional: '$4,599/month',
      enterprise: '$8,999/month'
    },
    contactInfo
  },
  {
    name: 'Network Solutions & Security',
    description: 'Complete network design, implementation, and security solutions for enterprise environments.',
    icon: 'Wifi',
    category: 'IT Services',
    subcategory: 'Networking',
    features: [
      'Network design and architecture',
      'Wireless network solutions',
      'VPN setup and management',
      'Network security implementation',
      'Performance monitoring and optimization',
      'Disaster recovery planning',
      'Network documentation',
      '24/7 network monitoring'
    ],
    price: 'Starting at $1,499/month',
    marketPrice: '$2,500-8,000/month',
    benefits: [
      'Reliable and secure connectivity',
      'Improved network performance',
      'Enhanced security posture',
      'Reduced network downtime'
    ],
    popular: false,
    new: false,
    useCases: [
      'Enterprise network infrastructure',
      'Remote work solutions',
      'Multi-site connectivity',
      'Data center networking',
      'Cloud network integration'
    ],
    technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Aruba', 'Meraki', 'SD-WAN'],
    pricing: {
      basic: '$1,499/month',
      professional: '$2,999/month',
      enterprise: '$5,999/month'
    },
    contactInfo
  }
];

// Micro SaaS Services
export const microSaasServices: ServiceFeature[] = [
  {
    name: 'Zion Analytics Pro',
    description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive analytics.',
    icon: 'BarChart3',
    category: 'Micro SaaS',
    subcategory: 'Analytics',
    features: [
      'Real-time data visualization with 50+ chart types',
      'AI-powered predictive analytics and forecasting',
      'Custom dashboard builder with drag-and-drop interface',
      'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
      'Automated report generation and email delivery',
      'Multi-tenant architecture for agencies',
      'API access for custom integrations',
      'White-label solution available'
    ],
    price: '$89/month',
    marketPrice: '$150-500/month',
    benefits: [
      'Make data-driven decisions faster',
      'Reduce reporting time by 80%',
      'Identify trends and opportunities',
      'Scale analytics across teams'
    ],
    popular: true,
    new: false,
    useCases: [
      'Business performance tracking',
      'Sales and marketing analytics',
      'Financial reporting',
      'Customer behavior analysis',
      'Operational metrics monitoring'
    ],
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    pricing: {
      basic: '$89/month',
      professional: '$199/month',
      enterprise: '$399/month'
    },
    contactInfo
  },
  {
    name: 'Zion Chat AI',
    description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis for superior customer experiences.',
    icon: 'MessageCircle',
    category: 'Micro SaaS',
    subcategory: 'Customer Service',
    features: [
      'GPT-4 powered conversational AI with custom training',
      'Multi-channel support (Web, WhatsApp, SMS, Email)',
      'Advanced sentiment analysis and emotion detection',
      'Automated ticket routing and escalation',
      'Live agent handoff with context preservation',
      'Multi-language support (50+ languages)',
      'Advanced analytics and conversation insights',
      'CRM integration and lead qualification'
    ],
    price: '$149/month',
    marketPrice: '$250-800/month',
    benefits: [
      'Reduce support costs by 60%',
      'Improve customer satisfaction by 40%',
      'Handle 10x more inquiries',
      'Provide 24/7 support coverage'
    ],
    popular: true,
    new: false,
    useCases: [
      'E-commerce customer support',
      'SaaS product support',
      'Lead qualification and nurturing',
      'Technical support automation',
      'Sales assistance'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'WebSocket', 'MongoDB', 'Redis'],
    pricing: {
      basic: '$149/month',
      professional: '$299/month',
      enterprise: '$599/month'
    },
    contactInfo
  },
  {
    name: 'Zion Security Shield',
    description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response for comprehensive protection.',
    icon: 'Shield',
    category: 'Micro SaaS',
    subcategory: 'Security',
    features: [
      'AI-powered threat detection and behavioral analysis',
      'Real-time security monitoring across all endpoints',
      'Automated incident response and remediation',
      'Compliance reporting (SOC2, GDPR, HIPAA)',
      'Penetration testing and vulnerability assessments',
      'Security awareness training platform',
      'Dark web monitoring and breach detection',
      '24/7 SOC (Security Operations Center) support'
    ],
    price: '$299/month',
    marketPrice: '$500-1,500/month',
    benefits: [
      'Reduce security incidents by 80%',
      'Improve threat detection speed by 90%',
      'Ensure regulatory compliance',
      'Minimize security breach impact'
    ],
    popular: false,
    new: true,
    useCases: [
      'Small to medium businesses',
      'Remote workforces',
      'E-commerce security',
      'Healthcare compliance',
      'Financial services'
    ],
    technologies: ['Machine Learning', 'SIEM', 'SOAR', 'Python', 'Elasticsearch', 'Docker'],
    pricing: {
      basic: '$299/month',
      professional: '$599/month',
      enterprise: '$1,199/month'
    },
    contactInfo
  },
  {
    name: 'Zion Cloud Vault',
    description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization and instant recovery capabilities.',
    icon: 'Cloud',
    category: 'Micro SaaS',
    subcategory: 'Storage',
    features: [
      'AI-optimized backup scheduling and deduplication',
      'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
      'Instant disaster recovery with RTO < 15 minutes',
      'Advanced version control and file history',
      'End-to-end encryption with zero-knowledge architecture',
      'Compliance and audit trail reporting',
      'Automated testing and recovery validation',
      'Global CDN for fast data access'
    ],
    price: '$79/month',
    marketPrice: '$120-400/month',
    benefits: [
      'Protect critical business data',
      'Minimize downtime during disasters',
      'Reduce backup storage costs by 50%',
      'Ensure compliance and security'
    ],
    popular: false,
    new: false,
    useCases: [
      'Business data backup',
      'Disaster recovery planning',
      'File sharing and collaboration',
      'Compliance requirements',
      'Remote work data access'
    ],
    technologies: ['AWS S3', 'Azure Blob', 'Google Cloud Storage', 'Encryption', 'CDN', 'APIs'],
    pricing: {
      basic: '$79/month',
      professional: '$159/month',
      enterprise: '$319/month'
    },
    contactInfo
  },
  {
    name: 'Zion Performance AI',
    description: 'Advanced application performance monitoring with AI-powered optimization recommendations and real-time insights.',
    icon: 'Activity',
    category: 'Micro SaaS',
    subcategory: 'Monitoring',
    features: [
      'Real-time APM with distributed tracing',
      'AI-powered performance anomaly detection',
      'Automated optimization recommendations',
      'Error tracking and crash reporting',
      'Uptime monitoring with global checkpoints',
      'Performance budget tracking and alerts',
      'Custom metrics and business KPIs',
      'Integration with CI/CD pipelines'
    ],
    price: '$129/month',
    marketPrice: '$200-600/month',
    benefits: [
      'Improve application performance by 40%',
      'Reduce downtime by 90%',
      'Identify performance bottlenecks',
      'Optimize user experience'
    ],
    popular: false,
    new: true,
    useCases: [
      'Web application monitoring',
      'Mobile app performance',
      'API monitoring',
      'E-commerce optimization',
      'SaaS application insights'
    ],
    technologies: ['Machine Learning', 'APM Tools', 'Python', 'React', 'Node.js', 'Docker'],
    pricing: {
      basic: '$129/month',
      professional: '$259/month',
      enterprise: '$519/month'
    },
    contactInfo
  },
  {
    name: 'Zion Workflow AI',
    description: 'Intelligent process automation with AI-powered workflow optimization and exception handling for business efficiency.',
    icon: 'Workflow',
    category: 'Micro SaaS',
    subcategory: 'Automation',
    features: [
      'Visual workflow builder with AI assistance',
      'Intelligent process mining and optimization',
      'Exception handling and escalation',
      'Integration with 200+ business tools',
      'Custom AI model training for specific processes',
      'Performance analytics and optimization',
      'Multi-tenant architecture',
      'White-label automation solutions'
    ],
    price: '$199/month',
    marketPrice: '$300-1,000/month',
    benefits: [
      'Reduce manual work by 85%',
      'Improve process accuracy by 95%',
      'Scale operations without additional staff',
      'Optimize business workflows'
    ],
    popular: true,
    new: false,
    useCases: [
      'Invoice processing automation',
      'Customer onboarding workflows',
      'HR and payroll automation',
      'Sales process optimization',
      'Compliance and audit processes'
    ],
    technologies: ['Machine Learning', 'RPA', 'Python', 'React', 'APIs', 'Workflow Engine'],
    pricing: {
      basic: '$199/month',
      professional: '$399/month',
      enterprise: '$799/month'
    },
    contactInfo
  },
  {
    name: 'Zion Email Marketing Pro',
    description: 'Advanced email marketing automation with AI-powered personalization and intelligent campaign optimization.',
    icon: 'Mail',
    category: 'Micro SaaS',
    subcategory: 'Marketing',
    features: [
      'AI-powered email personalization',
      'Advanced segmentation and targeting',
      'A/B testing and optimization',
      'Automated drip campaigns',
      'Email template builder with AI suggestions',
      'Deliverability optimization',
      'Advanced analytics and reporting',
      'Integration with major CRMs and platforms'
    ],
    price: '$69/month',
    marketPrice: '$100-300/month',
    benefits: [
      'Increase email open rates by 60%',
      'Improve click-through rates by 45%',
      'Reduce unsubscribe rates by 30%',
      'Automate email marketing campaigns'
    ],
    popular: false,
    new: false,
    useCases: [
      'E-commerce email marketing',
      'SaaS customer onboarding',
      'Lead nurturing campaigns',
      'Newsletter management',
      'Event marketing'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'MongoDB', 'SMTP', 'APIs'],
    pricing: {
      basic: '$69/month',
      professional: '$139/month',
      enterprise: '$279/month'
    },
    contactInfo
  },
  {
    name: 'Zion Social Manager',
    description: 'Complete social media management with AI content generation, scheduling, and analytics for all major platforms.',
    icon: 'Share2',
    category: 'Micro SaaS',
    subcategory: 'Social Media',
    features: [
      'AI-powered content generation and suggestions',
      'Multi-platform posting (Facebook, Instagram, Twitter, LinkedIn)',
      'Advanced scheduling and automation',
      'Hashtag optimization and research',
      'Engagement tracking and analytics',
      'Social listening and sentiment analysis',
      'Team collaboration and approval workflows',
      'Brand monitoring and reputation management'
    ],
    price: '$59/month',
    marketPrice: '$100-400/month',
    benefits: [
      'Increase social media engagement by 70%',
      'Save 80% content creation time',
      'Improve brand consistency',
      'Grow social media following'
    ],
    popular: false,
    new: true,
    useCases: [
      'Social media marketing',
      'Brand management',
      'Content marketing',
      'Community building',
      'Influencer marketing'
    ],
    technologies: ['AI Content Generation', 'Social Media APIs', 'React', 'Node.js', 'Analytics', 'Scheduling'],
    pricing: {
      basic: '$59/month',
      professional: '$119/month',
      enterprise: '$239/month'
    },
    contactInfo
  },
  {
    name: 'Zion Finance AI',
    description: 'Intelligent financial management and accounting automation platform with AI-powered insights and compliance.',
    icon: 'DollarSign',
    category: 'Micro SaaS',
    subcategory: 'Finance',
    features: [
      'AI-powered expense categorization and reconciliation',
      'Automated invoice processing and approval workflows',
      'Real-time financial reporting and forecasting',
      'Tax compliance and preparation assistance',
      'Multi-currency support and exchange rate tracking',
      'Integration with banks and payment processors',
      'Advanced fraud detection and prevention',
      'Custom financial dashboards and KPIs'
    ],
    price: '$179/month',
    marketPrice: '$300-800/month',
    benefits: [
      'Reduce accounting time by 70%',
      'Improve financial accuracy by 95%',
      'Automate compliance reporting',
      'Gain real-time financial insights'
    ],
    popular: false,
    new: false,
    useCases: [
      'Small business accounting',
      'Freelancer financial management',
      'E-commerce financial tracking',
      'Expense management',
      'Financial reporting'
    ],
    technologies: ['Machine Learning', 'OCR', 'Banking APIs', 'React', 'Node.js', 'PostgreSQL'],
    pricing: {
      basic: '$179/month',
      professional: '$359/month',
      enterprise: '$719/month'
    },
    contactInfo
  },
  {
    name: 'Zion HR Management',
    description: 'Comprehensive human resources management with AI-powered insights and automation for modern HR teams.',
    icon: 'Users',
    category: 'Micro SaaS',
    subcategory: 'HR',
    features: [
      'AI-powered candidate screening and matching',
      'Employee onboarding and offboarding automation',
      'Performance management and review cycles',
      'Time tracking and attendance management',
      'Benefits administration and enrollment',
      'Learning management system (LMS)',
      'Employee engagement surveys and analytics',
      'Compliance tracking and reporting'
    ],
    price: '$159/month',
    marketPrice: '$250-600/month',
    benefits: [
      'Streamline HR processes by 60%',
      'Improve candidate quality by 40%',
      'Reduce administrative overhead',
      'Enhance employee experience'
    ],
    popular: false,
    new: true,
    useCases: [
      'Small to medium businesses',
      'Remote workforce management',
      'Talent acquisition',
      'Employee development',
      'HR compliance'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'MongoDB', 'APIs', 'Document Processing'],
    pricing: {
      basic: '$159/month',
      professional: '$319/month',
      enterprise: '$639/month'
    },
    contactInfo
  },
  {
    name: 'Zion E-commerce AI',
    description: 'AI-powered e-commerce platform with advanced personalization, optimization, and intelligent recommendations.',
    icon: 'ShoppingCart',
    category: 'Micro SaaS',
    subcategory: 'E-commerce',
    features: [
      'AI-powered product recommendations',
      'Dynamic pricing optimization',
      'Inventory management and demand forecasting',
      'Customer behavior analysis and segmentation',
      'Automated marketing campaigns',
      'Multi-channel selling (web, mobile, social)',
      'Advanced analytics and reporting',
      'Integration with major payment gateways'
    ],
    price: '$249/month',
    marketPrice: '$400-1,200/month',
    benefits: [
      'Increase conversion rates by 65%',
      'Improve average order value by 40%',
      'Reduce cart abandonment by 50%',
      'Optimize inventory management'
    ],
    popular: true,
    new: false,
    useCases: [
      'Online retail stores',
      'Dropshipping businesses',
      'Digital product sales',
      'Subscription services',
      'Marketplace selling'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'MongoDB', 'Payment APIs', 'Analytics'],
    pricing: {
      basic: '$249/month',
      professional: '$499/month',
      enterprise: '$999/month'
    },
    contactInfo
  },
  {
    name: 'Zion Mobile App Builder',
    description: 'No-code mobile app development platform with AI-powered design and optimization for iOS and Android.',
    icon: 'Smartphone',
    category: 'Micro SaaS',
    subcategory: 'Development',
    features: [
      'Drag-and-drop app builder with AI assistance',
      'Cross-platform development (iOS, Android)',
      'AI-powered UI/UX design recommendations',
      'Real-time preview and testing',
      'App store optimization and publishing',
      'Push notifications and analytics',
      'Backend integration and API management',
      'White-label app development'
    ],
    price: '$189/month',
    marketPrice: '$300-800/month',
    benefits: [
      'Build apps 10x faster',
      'No coding skills required',
      'Professional app quality',
      'Easy maintenance and updates'
    ],
    popular: false,
    new: true,
    useCases: [
      'Business mobile apps',
      'E-commerce mobile platforms',
      'Event management apps',
      'Community platforms',
      'Internal business tools'
    ],
    technologies: ['React Native', 'AI Design', 'No-Code Platform', 'APIs', 'App Store', 'Analytics'],
    pricing: {
      basic: '$189/month',
      professional: '$379/month',
      enterprise: '$759/month'
    },
    contactInfo
  },
  {
    name: 'Zion SEO Optimizer',
    description: 'AI-powered SEO optimization platform with advanced keyword research, content optimization, and ranking tracking.',
    icon: 'Search',
    category: 'Micro SaaS',
    subcategory: 'SEO',
    features: [
      'AI-powered keyword research and analysis',
      'Content optimization and suggestions',
      'Technical SEO auditing and recommendations',
      'Competitor analysis and tracking',
      'Local SEO optimization',
      'Link building and outreach automation',
      'Ranking tracking and reporting',
      'Integration with Google Search Console'
    ],
    price: '$119/month',
    marketPrice: '$200-500/month',
    benefits: [
      'Improve search rankings by 60%',
      'Increase organic traffic by 80%',
      'Automate SEO tasks by 70%',
      'Stay ahead of competitors'
    ],
    popular: false,
    new: false,
    useCases: [
      'Website SEO optimization',
      'E-commerce SEO',
      'Local business SEO',
      'Content marketing',
      'Competitive analysis'
    ],
    technologies: ['AI/ML', 'SEO APIs', 'React', 'Node.js', 'Data Analysis', 'Reporting'],
    pricing: {
      basic: '$119/month',
      professional: '$239/month',
      enterprise: '$479/month'
    },
    contactInfo
  }
];

// Export all services combined
export const allServices = [...aiServices, ...itServices, ...microSaasServices];

// Service categories for filtering
export const serviceCategories = [
  'All',
  'AI Services',
  'IT Services', 
  'Micro SaaS'
];

// Subcategories for each main category
export const serviceSubcategories = {
  'AI Services': [
    'Analytics',
    'Customer Service',
    'Content Creation',
    'Computer Vision',
    'Automation',
    'Security',
    'Finance',
    'Healthcare',
    'Marketing',
    'Voice AI',
    'Supply Chain'
  ],
  'IT Services': [
    'Cloud Computing',
    'Security',
    'DevOps',
    'Database',
    'Infrastructure',
    'Support',
    'Development',
    'Analytics',
    'Networking'
  ],
  'Micro SaaS': [
    'Analytics',
    'Customer Service',
    'Security',
    'Storage',
    'Monitoring',
    'Automation',
    'Marketing',
    'Social Media',
    'Finance',
    'HR',
    'E-commerce',
    'Development',
    'SEO'
  ]
};