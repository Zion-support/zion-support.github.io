export interface ITService {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  features: string[];
  pricing: {
    basic: {
      price: number;
      features: string[];
      limitations: string[];
    };
    professional: {
      price: number;
      features: string[];
      popular?: boolean;
    };
    enterprise: {
      price: number;
      features: string[];
      custom?: boolean;
    };
  };
  category: string;
  icon: string;
  demoUrl: string;
  documentationUrl: string;
  apiUrl: string;
  status: 'active' | 'beta' | 'coming-soon';
  launchDate: string;
  lastUpdated: string;
  integrations: string[];
  useCases: string[];
  screenshots: string[];
  videoUrl?: string;
  tags: string[];
  marketSize: string;
  competitors: string[];
  uniqueValue: string;
  technicalRequirements: string[];
  supportChannels: string[];
  sla: string;
  uptime: string;
  security: string[];
  compliance: string[];
  languages: string[];
  regions: string[];
  technologies: string[];
  certifications: string[];
  responseTime: string;
  scalability: string;
  reliability: string;
}

export const itServices: ITService[] = [
  {
    id: 'cloud-migration-services',
    name: 'Cloud Migration Services',
    description: 'Comprehensive cloud migration services that help businesses seamlessly transition to cloud infrastructure with minimal downtime and maximum security.',
    shortDescription: 'Complete cloud migration solutions with zero-downtime deployment',
    features: [
      'Assessment and planning',
      'Zero-downtime migration',
      'Data security and compliance',
      'Performance optimization',
      'Cost optimization',
      'Disaster recovery setup',
      'Monitoring and alerting',
      'Training and support',
      'Multi-cloud strategies',
      'Hybrid cloud solutions',
      'Legacy system integration',
      'API migration',
      'Database migration',
      'Application modernization',
      'Post-migration support'
    ],
    pricing: {
      basic: {
        price: 5000,
        features: ['Small business migration', 'Basic security', 'Standard support'],
        limitations: ['Limited to 10 servers', 'Basic monitoring', 'Standard SLA']
      },
      professional: {
        price: 25000,
        features: ['Enterprise migration', 'Advanced security', 'Priority support', 'SLA guarantee'],
        popular: true
      },
      enterprise: {
        price: 100000,
        features: ['Custom migration strategy', 'White-label solution', 'Dedicated support', 'Custom SLA'],
        custom: true
      }
    },
    category: 'Cloud Services',
    icon: '☁️',
    demoUrl: 'https://ziontechgroup.com/cloud-migration-services/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/cloud-migration',
    apiUrl: 'https://api.ziontechgroup.com/v1/cloud-migration',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-08',
    integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes', 'Terraform'],
    useCases: ['Cloud migration', 'Infrastructure modernization', 'Disaster recovery', 'Cost optimization'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/cloud-migration-1.jpg',
      'https://ziontechgroup.com/screenshots/cloud-migration-2.jpg',
      'https://ziontechgroup.com/screenshots/cloud-migration-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/cloud-migration-demo.mp4',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'Google Cloud', 'Infrastructure'],
    marketSize: '$45.2B',
    competitors: ['Accenture', 'Deloitte', 'IBM', 'Capgemini', 'TCS'],
    uniqueValue: 'Only service with AI-powered migration optimization and real-time cost analysis',
    technicalRequirements: ['Existing infrastructure', 'Cloud provider accounts', 'Network connectivity'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Dedicated support'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001', 'HIPAA'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    certifications: ['AWS Certified', 'Azure Certified', 'Google Cloud Certified', 'Kubernetes Certified'],
    responseTime: '< 4 hours',
    scalability: 'Unlimited',
    reliability: '99.95%'
  },
  {
    id: 'cybersecurity-solutions',
    name: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity services that protect businesses from evolving threats with advanced security solutions, monitoring, and incident response.',
    shortDescription: 'Advanced cybersecurity solutions with 24/7 monitoring and response',
    features: [
      '24/7 security monitoring',
      'Threat detection and response',
      'Vulnerability assessment',
      'Penetration testing',
      'Security awareness training',
      'Incident response planning',
      'Compliance management',
      'Security architecture design',
      'Identity and access management',
      'Endpoint security',
      'Network security',
      'Cloud security',
      'Mobile security',
      'Data protection',
      'Security consulting'
    ],
    pricing: {
      basic: {
        price: 2000,
        features: ['Basic security monitoring', 'Standard compliance', 'Email support'],
        limitations: ['Limited monitoring', 'Basic reporting', 'Standard SLA']
      },
      professional: {
        price: 8000,
        features: ['Advanced monitoring', 'Full compliance', 'Priority support', 'SLA guarantee'],
        popular: true
      },
      enterprise: {
        price: 25000,
        features: ['Custom security solutions', 'White-label solution', 'Dedicated support', 'Custom SLA'],
        custom: true
      }
    },
    category: 'Cybersecurity',
    icon: '🔒',
    demoUrl: 'https://ziontechgroup.com/cybersecurity-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/cybersecurity',
    apiUrl: 'https://api.ziontechgroup.com/v1/cybersecurity',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-08',
    integrations: ['SIEM systems', 'EDR solutions', 'Firewalls', 'Identity providers', 'Cloud platforms'],
    useCases: ['Threat protection', 'Compliance management', 'Incident response', 'Security consulting'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/cybersecurity-1.jpg',
      'https://ziontechgroup.com/screenshots/cybersecurity-2.jpg',
      'https://ziontechgroup.com/screenshots/cybersecurity-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/cybersecurity-demo.mp4',
    tags: ['Cybersecurity', 'Security', 'Threat Detection', 'Compliance', 'Monitoring'],
    marketSize: '$8.2B',
    competitors: ['CrowdStrike', 'Palo Alto Networks', 'Fortinet', 'Check Point', 'Symantec'],
    uniqueValue: 'Only service with AI-powered threat detection and automated response',
    technicalRequirements: ['Security infrastructure', 'Network access', 'Compliance requirements'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Security support'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001', 'NIST', 'PCI DSS'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    technologies: ['SIEM', 'EDR', 'Firewalls', 'IDS/IPS', 'VPN', 'Zero Trust'],
    certifications: ['CISSP', 'CISM', 'CISA', 'CEH', 'Security+'],
    responseTime: '< 1 hour',
    scalability: 'Unlimited',
    reliability: '99.95%'
  },
  {
    id: 'devops-solutions',
    name: 'DevOps Solutions',
    description: 'Complete DevOps services that streamline software development and deployment with CI/CD pipelines, infrastructure automation, and monitoring solutions.',
    shortDescription: 'Complete DevOps solutions with CI/CD and infrastructure automation',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring and alerting',
      'Log management',
      'Performance optimization',
      'Security integration',
      'Automated testing',
      'Deployment automation',
      'Environment management',
      'Version control',
      'Code quality tools',
      'Dependency management',
      'Backup and recovery',
      'Training and support'
    ],
    pricing: {
      basic: {
        price: 3000,
        features: ['Basic CI/CD', 'Standard monitoring', 'Email support'],
        limitations: ['Limited automation', 'Basic reporting', 'Standard SLA']
      },
      professional: {
        price: 12000,
        features: ['Advanced CI/CD', 'Full monitoring', 'Priority support', 'SLA guarantee'],
        popular: true
      },
      enterprise: {
        price: 40000,
        features: ['Custom DevOps solutions', 'White-label solution', 'Dedicated support', 'Custom SLA'],
        custom: true
      }
    },
    category: 'DevOps & Automation',
    icon: '⚙️',
    demoUrl: 'https://ziontechgroup.com/devops-solutions/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/devops',
    apiUrl: 'https://api.ziontechgroup.com/v1/devops',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-08',
    integrations: ['Jenkins', 'GitLab', 'GitHub', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud'],
    useCases: ['CI/CD automation', 'Infrastructure management', 'Monitoring setup', 'Performance optimization'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/devops-1.jpg',
      'https://ziontechgroup.com/screenshots/devops-2.jpg',
      'https://ziontechgroup.com/screenshots/devops-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/devops-demo.mp4',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Docker', 'Kubernetes', 'Infrastructure'],
    marketSize: '$12.8B',
    competitors: ['GitLab', 'Jenkins', 'CircleCI', 'Travis CI', 'Azure DevOps'],
    uniqueValue: 'Only service with AI-powered deployment optimization and real-time performance analysis',
    technicalRequirements: ['Development environment', 'Cloud provider accounts', 'Version control'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Technical support'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Terraform', 'Ansible', 'Prometheus'],
    certifications: ['Docker Certified', 'Kubernetes Certified', 'AWS Certified', 'Azure Certified'],
    responseTime: '< 2 hours',
    scalability: 'Unlimited',
    reliability: '99.95%'
  },
  {
    id: 'data-analytics-services',
    name: 'Data Analytics Services',
    description: 'Advanced data analytics services that transform raw data into actionable insights using machine learning, AI, and advanced visualization techniques.',
    shortDescription: 'Advanced data analytics with AI and machine learning insights',
    features: [
      'Data collection and integration',
      'Data cleaning and preprocessing',
      'Machine learning model development',
      'Predictive analytics',
      'Real-time data processing',
      'Data visualization',
      'Business intelligence dashboards',
      'Statistical analysis',
      'Data mining',
      'Big data processing',
      'Cloud analytics',
      'Data governance',
      'Privacy protection',
      'Performance optimization',
      'Training and support'
    ],
    pricing: {
      basic: {
        price: 4000,
        features: ['Basic analytics', 'Standard visualization', 'Email support'],
        limitations: ['Limited data sources', 'Basic reporting', 'Standard SLA']
      },
      professional: {
        price: 15000,
        features: ['Advanced analytics', 'Full visualization', 'Priority support', 'SLA guarantee'],
        popular: true
      },
      enterprise: {
        price: 50000,
        features: ['Custom analytics solutions', 'White-label solution', 'Dedicated support', 'Custom SLA'],
        custom: true
      }
    },
    category: 'Data & Analytics',
    icon: '📊',
    demoUrl: 'https://ziontechgroup.com/data-analytics-services/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/data-analytics',
    apiUrl: 'https://api.ziontechgroup.com/v1/data-analytics',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-08',
    integrations: ['Tableau', 'Power BI', 'Looker', 'Google Analytics', 'Salesforce', 'MySQL', 'PostgreSQL'],
    useCases: ['Business intelligence', 'Predictive analytics', 'Data visualization', 'Performance optimization'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/data-analytics-1.jpg',
      'https://ziontechgroup.com/screenshots/data-analytics-2.jpg',
      'https://ziontechgroup.com/screenshots/data-analytics-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/data-analytics-demo.mp4',
    tags: ['Data Analytics', 'Machine Learning', 'AI', 'Business Intelligence', 'Visualization'],
    marketSize: '$6.8B',
    competitors: ['Tableau', 'Power BI', 'Looker', 'Qlik', 'Domo'],
    uniqueValue: 'Only service with AI-powered insights and real-time data processing',
    technicalRequirements: ['Data sources', 'Analytics tools', 'Cloud infrastructure'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Data support'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    technologies: ['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Apache Spark', 'Hadoop'],
    certifications: ['Data Science Certified', 'Machine Learning Certified', 'AWS Certified', 'Azure Certified'],
    responseTime: '< 3 hours',
    scalability: 'Unlimited',
    reliability: '99.95%'
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    description: 'Complete mobile app development services for iOS and Android platforms with modern technologies, AI integration, and comprehensive testing.',
    shortDescription: 'Complete mobile app development for iOS and Android platforms',
    features: [
      'iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'API integration',
      'Database design',
      'Cloud integration',
      'Push notifications',
      'Offline functionality',
      'Security implementation',
      'Performance optimization',
      'Testing and QA',
      'App store deployment',
      'Maintenance and support',
      'Analytics integration',
      'AI and ML integration'
    ],
    pricing: {
      basic: {
        price: 15000,
        features: ['Basic app development', 'Standard design', 'Email support'],
        limitations: ['Limited features', 'Basic testing', 'Standard SLA']
      },
      professional: {
        price: 45000,
        features: ['Advanced app development', 'Custom design', 'Priority support', 'SLA guarantee'],
        popular: true
      },
      enterprise: {
        price: 120000,
        features: ['Custom app solutions', 'White-label solution', 'Dedicated support', 'Custom SLA'],
        custom: true
      }
    },
    category: 'Mobile Development',
    icon: '📱',
    demoUrl: 'https://ziontechgroup.com/mobile-app-development/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/mobile-app-development',
    apiUrl: 'https://api.ziontechgroup.com/v1/mobile-development',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-08',
    integrations: ['iOS', 'Android', 'React Native', 'Flutter', 'Xamarin', 'Firebase', 'AWS'],
    useCases: ['Mobile app development', 'Cross-platform solutions', 'App maintenance', 'Performance optimization'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/mobile-development-1.jpg',
      'https://ziontechgroup.com/screenshots/mobile-development-2.jpg',
      'https://ziontechgroup.com/screenshots/mobile-development-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/mobile-development-demo.mp4',
    tags: ['Mobile Development', 'iOS', 'Android', 'React Native', 'Flutter', 'App Development'],
    marketSize: '$18.5B',
    competitors: ['Toptal', 'Upwork', 'Freelancer', 'Guru', '99designs'],
    uniqueValue: 'Only service with AI-powered app optimization and real-time performance monitoring',
    technicalRequirements: ['Development environment', 'Design requirements', 'Platform accounts'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Development support'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin', 'Firebase', 'AWS'],
    certifications: ['iOS Certified', 'Android Certified', 'React Native Certified', 'Flutter Certified'],
    responseTime: '< 4 hours',
    scalability: 'Unlimited',
    reliability: '99.95%'
  },
  {
    id: 'api-development-services',
    name: 'API Development Services',
    description: 'Comprehensive API development services that create robust, scalable, and secure APIs for modern applications with comprehensive documentation and testing.',
    shortDescription: 'Complete API development with documentation and testing',
    features: [
      'RESTful API development',
      'GraphQL API development',
      'API documentation',
      'API testing and validation',
      'Security implementation',
      'Rate limiting',
      'Authentication and authorization',
      'API versioning',
      'Performance optimization',
      'Monitoring and analytics',
      'SDK development',
      'Integration support',
      'API gateway setup',
      'Load balancing',
      'Maintenance and support'
    ],
    pricing: {
      basic: {
        price: 5000,
        features: ['Basic API development', 'Standard documentation', 'Email support'],
        limitations: ['Limited endpoints', 'Basic security', 'Standard SLA']
      },
      professional: {
        price: 18000,
        features: ['Advanced API development', 'Full documentation', 'Priority support', 'SLA guarantee'],
        popular: true
      },
      enterprise: {
        price: 50000,
        features: ['Custom API solutions', 'White-label solution', 'Dedicated support', 'Custom SLA'],
        custom: true
      }
    },
    category: 'API Development',
    icon: '🔌',
    demoUrl: 'https://ziontechgroup.com/api-development-services/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/api-development',
    apiUrl: 'https://api.ziontechgroup.com/v1/api-development',
    status: 'active',
    launchDate: '2024-01-01',
    lastUpdated: '2024-10-08',
    integrations: ['REST', 'GraphQL', 'gRPC', 'WebSocket', 'AWS API Gateway', 'Azure API Management'],
    useCases: ['API development', 'Integration services', 'API maintenance', 'Performance optimization'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/api-development-1.jpg',
      'https://ziontechgroup.com/screenshots/api-development-2.jpg',
      'https://ziontechgroup.com/screenshots/api-development-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/api-development-demo.mp4',
    tags: ['API Development', 'REST', 'GraphQL', 'Web Services', 'Integration', 'Documentation'],
    marketSize: '$3.2B',
    competitors: ['Postman', 'Swagger', 'Apigee', 'Kong', 'AWS API Gateway'],
    uniqueValue: 'Only service with AI-powered API optimization and real-time performance analysis',
    technicalRequirements: ['Development environment', 'API requirements', 'Integration needs'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Technical support'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    technologies: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'Rust', 'Docker'],
    certifications: ['API Development Certified', 'AWS Certified', 'Azure Certified', 'Google Cloud Certified'],
    responseTime: '< 2 hours',
    scalability: 'Unlimited',
    reliability: '99.95%'
  }
];

export const itServiceCategories = [
  'Cloud Services',
  'Cybersecurity',
  'DevOps & Automation',
  'Data & Analytics',
  'Mobile Development',
  'API Development'
];

export const getITServiceById = (id: string): ITService | undefined => {
  return itServices.find(service => service.id === id);
};

export const getITServicesByCategory = (category: string): ITService[] => {
  return itServices.filter(service => service.category === category);
};

export const getPopularITServices = (): ITService[] => {
  return itServices.filter(service => service.pricing.professional.popular);
};