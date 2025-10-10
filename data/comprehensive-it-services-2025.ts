export interface ITService {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  originalPrice?: string;
  features: string[];
  benefits: string[];
  link: string;
  popular: boolean;
  category: string;
  rating: number;
  users: string;
  freeTrial: string;
  marketPrice: string;
  technologies: string[];
  contactInfo: string;
  launchDate: string;
  lastUpdated: string;
  pricingTiers: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  integrations: string[];
  useCases: string[];
  competitors: string[];
  roi: string;
  setupTime: string;
  support: string[];
  technicalSpecs: {
    uptime: string;
    scalability: string;
    security: string;
    performance: string;
    compliance: string;
  };
}

export const comprehensiveITServices: ITService[] = [
  // Cloud Infrastructure & Migration
  {
    id: 'cloud-infrastructure-migration',
    title: 'Cloud Infrastructure & Migration',
    description: 'Complete cloud infrastructure solutions with seamless migration, optimization, and management across AWS, Azure, and Google Cloud. Trusted by 25,000+ businesses.',
    icon: '☁️',
    price: '$1,999/month',
    originalPrice: '$2,999/month',
    features: [
      'Multi-cloud Strategy',
      'Migration Planning',
      'Infrastructure as Code',
      'Auto-scaling',
      'Cost Optimization',
      'Security Hardening',
      'Disaster Recovery',
      'Monitoring & Alerting',
      'Performance Tuning',
      '24/7 Support'
    ],
    benefits: [
      '50% cost reduction',
      '99.9% uptime',
      '3x faster deployment',
      'Unlimited scalability'
    ],
    link: '/cloud-infrastructure-migration',
    popular: true,
    category: 'Cloud Computing',
    rating: 4.8,
    users: '25,000+',
    freeTrial: '30 days',
    marketPrice: '$5,000-15,000/month',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-01-01',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Small Business', price: '$999/month', features: ['Basic cloud setup', '1 cloud provider', 'Standard support'] },
      { name: 'Professional', price: '$1,999/month', features: ['Multi-cloud setup', 'All providers', 'Priority support'], popular: true },
      { name: 'Enterprise', price: '$4,999/month', features: ['Custom cloud solutions', 'White-label', 'Dedicated support'] }
    ],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'On-premises', 'Hybrid Cloud'],
    useCases: ['Digital Transformation', 'Scalability', 'Cost Optimization', 'Disaster Recovery'],
    competitors: ['AWS Professional Services', 'Microsoft Azure Consulting', 'Google Cloud Professional Services', 'Accenture'],
    roi: '300% within 6 months',
    setupTime: '2 weeks',
    support: ['Cloud Architects', 'Migration Specialists', '24/7 Support', 'Technical Training'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'Enterprise-grade',
      performance: 'Optimized',
      compliance: 'SOC 2, ISO 27001'
    }
  },

  // Cybersecurity & Compliance
  {
    id: 'cybersecurity-compliance',
    title: 'Cybersecurity & Compliance',
    description: 'Comprehensive cybersecurity solutions with threat detection, incident response, and compliance management. Protecting 30,000+ organizations worldwide.',
    icon: '🔒',
    price: '$2,499/month',
    originalPrice: '$3,499/month',
    features: [
      'Threat Detection & Response',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Monitoring',
      'Incident Response',
      'Compliance Management',
      'Security Training',
      'Risk Assessment',
      'Security Auditing',
      '24/7 SOC'
    ],
    benefits: [
      '99.9% threat prevention',
      '100% compliance',
      'Real-time protection',
      'Zero security breaches'
    ],
    link: '/cybersecurity-compliance',
    popular: true,
    category: 'Cybersecurity',
    rating: 4.9,
    users: '30,000+',
    freeTrial: '14 days',
    marketPrice: '$5,000-20,000/month',
    technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Firewalls', 'VPN'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-01-15',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Essential', price: '$999/month', features: ['Basic security', 'Up to 100 users', 'Standard monitoring'] },
      { name: 'Professional', price: '$2,499/month', features: ['Advanced security', 'Unlimited users', '24/7 SOC'], popular: true },
      { name: 'Enterprise', price: '$5,999/month', features: ['Full security suite', 'Custom solutions', 'Dedicated team'] }
    ],
    integrations: ['SIEM', 'SOAR', 'EDR', 'Firewalls', 'VPN', 'Identity Management'],
    useCases: ['Threat Protection', 'Compliance', 'Incident Response', 'Security Training'],
    competitors: ['CrowdStrike', 'Palo Alto Networks', 'Fortinet', 'Check Point'],
    roi: '400% within 4 months',
    setupTime: '1 week',
    support: ['Security Experts', 'Incident Response', 'Compliance Support', 'Training'],
    technicalSpecs: {
      uptime: '99.99%',
      scalability: 'Unlimited',
      security: 'Military-grade',
      performance: 'Real-time',
      compliance: 'SOC 2, ISO 27001, GDPR'
    }
  },

  // DevOps & CI/CD
  {
    id: 'devops-cicd',
    title: 'DevOps & CI/CD',
    description: 'Complete DevOps solutions with automated CI/CD pipelines, infrastructure management, and deployment automation. Accelerating development for 20,000+ teams.',
    icon: '⚙️',
    price: '$1,799/month',
    originalPrice: '$2,499/month',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Container Orchestration',
      'Automated Testing',
      'Deployment Automation',
      'Monitoring & Logging',
      'Version Control',
      'Code Quality Gates',
      'Security Scanning',
      'Performance Optimization'
    ],
    benefits: [
      '10x faster deployments',
      '90% fewer errors',
      'Continuous integration',
      'Automated quality checks'
    ],
    link: '/devops-cicd',
    popular: true,
    category: 'DevOps',
    rating: 4.8,
    users: '20,000+',
    freeTrial: '21 days',
    marketPrice: '$4,000-12,000/month',
    technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-02-01',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Startup', price: '$799/month', features: ['Basic CI/CD', '1 application', 'Standard automation'] },
      { name: 'Professional', price: '$1,799/month', features: ['Advanced CI/CD', 'Multiple apps', 'Full automation'], popular: true },
      { name: 'Enterprise', price: '$3,999/month', features: ['Custom CI/CD', 'Unlimited apps', 'Dedicated support'] }
    ],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'AWS', 'Azure', 'Google Cloud'],
    useCases: ['Software Development', 'Deployment Automation', 'Quality Assurance', 'Infrastructure Management'],
    competitors: ['GitLab', 'Jenkins', 'CircleCI', 'GitHub Actions'],
    roi: '350% within 6 months',
    setupTime: '1 week',
    support: ['DevOps Engineers', 'Pipeline Setup', 'Training', 'Best Practices'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'Secure',
      performance: 'Optimized',
      compliance: 'SOC 2'
    }
  },

  // Data Management & Analytics
  {
    id: 'data-management-analytics',
    title: 'Data Management & Analytics',
    description: 'Comprehensive data solutions with warehousing, analytics, and business intelligence. Empowering 35,000+ organizations with data-driven insights.',
    icon: '📊',
    price: '$2,199/month',
    originalPrice: '$3,199/month',
    features: [
      'Data Warehousing',
      'ETL/ELT Pipelines',
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Data Governance',
      'Data Quality',
      'Real-time Processing',
      'Machine Learning',
      'Custom Dashboards'
    ],
    benefits: [
      '5x faster insights',
      '90% data accuracy',
      'Real-time analytics',
      'Data-driven decisions'
    ],
    link: '/data-management-analytics',
    popular: true,
    category: 'Data & Analytics',
    rating: 4.7,
    users: '35,000+',
    freeTrial: '21 days',
    marketPrice: '$5,000-15,000/month',
    technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Tableau', 'Power BI', 'Apache Spark'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-02-15',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Analyst', price: '$999/month', features: ['Basic analytics', '5 data sources', 'Standard reports'] },
      { name: 'Professional', price: '$2,199/month', features: ['Advanced analytics', 'Unlimited sources', 'Custom dashboards'], popular: true },
      { name: 'Enterprise', price: '$4,999/month', features: ['Full data suite', 'White-label', 'Dedicated support'] }
    ],
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'MySQL', 'PostgreSQL', 'MongoDB'],
    useCases: ['Business Intelligence', 'Sales Analytics', 'Marketing ROI', 'Operational Metrics'],
    competitors: ['Tableau', 'Power BI', 'Looker', 'Domo'],
    roi: '300% within 6 months',
    setupTime: '2 weeks',
    support: ['Data Engineers', 'Analytics Experts', 'Training', 'Best Practices'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Petabyte-scale',
      security: 'Enterprise-grade',
      performance: 'Real-time',
      compliance: 'GDPR, CCPA'
    }
  },

  // Network Infrastructure
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Complete network solutions with design, implementation, and management of enterprise networks. Connecting 40,000+ organizations worldwide.',
    icon: '🌐',
    price: '$1,599/month',
    originalPrice: '$2,299/month',
    features: [
      'Network Design',
      'Implementation',
      'Security Configuration',
      'Performance Optimization',
      'Monitoring & Management',
      'Troubleshooting',
      'Upgrades & Maintenance',
      'Wireless Solutions',
      'VPN Setup',
      '24/7 Support'
    ],
    benefits: [
      '99.9% uptime',
      '3x faster speeds',
      'Enhanced security',
      'Reduced downtime'
    ],
    link: '/network-infrastructure',
    popular: true,
    category: 'Networking',
    rating: 4.8,
    users: '40,000+',
    freeTrial: '14 days',
    marketPrice: '$3,000-10,000/month',
    technologies: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto', 'SD-WAN'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-03-01',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Small Office', price: '$799/month', features: ['Basic networking', 'Up to 50 users', 'Standard support'] },
      { name: 'Professional', price: '$1,599/month', features: ['Advanced networking', 'Unlimited users', 'Priority support'], popular: true },
      { name: 'Enterprise', price: '$3,999/month', features: ['Full network suite', 'Custom solutions', 'Dedicated support'] }
    ],
    integrations: ['Firewalls', 'Switches', 'Routers', 'Wireless', 'VPN', 'SD-WAN'],
    useCases: ['Network Design', 'Security', 'Performance', 'Scalability'],
    competitors: ['Cisco', 'Juniper', 'Aruba', 'Fortinet'],
    roi: '250% within 4 months',
    setupTime: '1 week',
    support: ['Network Engineers', 'Security Experts', '24/7 Support', 'Training'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'Enterprise-grade',
      performance: 'Optimized',
      compliance: 'SOC 2'
    }
  },

  // Mobile App Development
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Complete mobile app development services for iOS, Android, and cross-platform solutions. Delivering 15,000+ successful mobile applications.',
    icon: '📱',
    price: '$2,999/month',
    originalPrice: '$4,499/month',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'UI/UX Design',
      'App Store Optimization',
      'Backend Development',
      'API Integration',
      'Push Notifications',
      'Analytics Integration',
      'Maintenance & Support'
    ],
    benefits: [
      'Native performance',
      'Cross-platform compatibility',
      'App store optimization',
      'Ongoing support'
    ],
    link: '/mobile-app-development',
    popular: true,
    category: 'Mobile Development',
    rating: 4.9,
    users: '15,000+',
    freeTrial: '30 days',
    marketPrice: '$8,000-25,000/month',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-03-15',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Basic App', price: '$1,999/month', features: ['Simple app', '1 platform', 'Basic features'] },
      { name: 'Professional', price: '$2,999/month', features: ['Advanced app', 'Multiple platforms', 'Full features'], popular: true },
      { name: 'Enterprise', price: '$5,999/month', features: ['Complex app', 'All platforms', 'Custom solutions'] }
    ],
    integrations: ['APIs', 'Backend Services', 'Payment Systems', 'Analytics', 'Push Services', 'Social Media'],
    useCases: ['Business Apps', 'E-commerce', 'Social Media', 'Gaming'],
    competitors: ['Appinventiv', 'Fueled', 'WillowTree', 'Intellectsoft'],
    roi: '400% within 8 months',
    setupTime: '4 weeks',
    support: ['Mobile Developers', 'UI/UX Designers', 'App Store Support', 'Training'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'Secure',
      performance: 'Optimized',
      compliance: 'App Store Guidelines'
    }
  },

  // Web Development
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Full-stack web development services with modern technologies and best practices. Building 50,000+ websites and web applications.',
    icon: '💻',
    price: '$1,499/month',
    originalPrice: '$2,199/month',
    features: [
      'Frontend Development',
      'Backend Development',
      'Database Design',
      'API Development',
      'Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
      'Security Implementation',
      'Testing & QA',
      'Maintenance & Support'
    ],
    benefits: [
      'Modern web technologies',
      'SEO optimized',
      'Mobile responsive',
      'High performance'
    ],
    link: '/web-development',
    popular: true,
    category: 'Web Development',
    rating: 4.8,
    users: '50,000+',
    freeTrial: '21 days',
    marketPrice: '$3,000-12,000/month',
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-04-01',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Website', price: '$799/month', features: ['Basic website', 'Standard features', 'Basic support'] },
      { name: 'Web App', price: '$1,499/month', features: ['Advanced web app', 'Custom features', 'Priority support'], popular: true },
      { name: 'Enterprise', price: '$2,999/month', features: ['Complex web app', 'All features', 'Dedicated support'] }
    ],
    integrations: ['APIs', 'Databases', 'Payment Systems', 'Analytics', 'CMS', 'Third-party Services'],
    useCases: ['Business Websites', 'E-commerce', 'Web Applications', 'Portals'],
    competitors: ['Toptal', 'Upwork', 'Freelancer', 'Fiverr'],
    roi: '300% within 6 months',
    setupTime: '2 weeks',
    support: ['Web Developers', 'UI/UX Designers', 'SEO Experts', 'Training'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'Secure',
      performance: 'Optimized',
      compliance: 'WCAG, GDPR'
    }
  },

  // IT Support & Helpdesk
  {
    id: 'it-support-helpdesk',
    title: 'IT Support & Helpdesk',
    description: 'Comprehensive IT support services with 24/7 helpdesk, remote assistance, and proactive monitoring. Supporting 60,000+ users worldwide.',
    icon: '🛠️',
    price: '$899/month',
    originalPrice: '$1,299/month',
    features: [
      '24/7 Helpdesk',
      'Remote Support',
      'Proactive Monitoring',
      'Issue Resolution',
      'Software Installation',
      'Hardware Support',
      'Network Troubleshooting',
      'Security Updates',
      'User Training',
      'Documentation'
    ],
    benefits: [
      '24/7 availability',
      '90% faster resolution',
      'Proactive monitoring',
      'Reduced downtime'
    ],
    link: '/it-support-helpdesk',
    popular: true,
    category: 'IT Support',
    rating: 4.7,
    users: '60,000+',
    freeTrial: '14 days',
    marketPrice: '$2,000-8,000/month',
    technologies: ['Remote Desktop', 'Ticketing Systems', 'Monitoring Tools', 'Asset Management', 'Knowledge Base', 'Chat Support'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-04-15',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Basic', price: '$499/month', features: ['Basic support', 'Up to 25 users', 'Business hours'] },
      { name: 'Professional', price: '$899/month', features: ['24/7 support', 'Unlimited users', 'Priority support'], popular: true },
      { name: 'Enterprise', price: '$1,999/month', features: ['Dedicated support', 'Custom SLA', 'On-site support'] }
    ],
    integrations: ['Ticketing Systems', 'Monitoring Tools', 'Asset Management', 'Knowledge Base', 'Chat Systems', 'Remote Tools'],
    useCases: ['Technical Support', 'Issue Resolution', 'User Training', 'System Maintenance'],
    competitors: ['IBM', 'Accenture', 'Cognizant', 'Infosys'],
    roi: '200% within 3 months',
    setupTime: '3 days',
    support: ['IT Support Specialists', 'Technical Training', 'Documentation', 'Best Practices'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'Secure',
      performance: 'Optimized',
      compliance: 'ITIL, ISO 20000'
    }
  },

  // Database Management
  {
    id: 'database-management',
    title: 'Database Management',
    description: 'Complete database solutions with design, optimization, and management of enterprise databases. Managing 25,000+ databases worldwide.',
    icon: '🗄️',
    price: '$1,799/month',
    originalPrice: '$2,599/month',
    features: [
      'Database Design',
      'Performance Tuning',
      'Backup & Recovery',
      'Security Hardening',
      'Monitoring & Alerting',
      'Capacity Planning',
      'Migration Services',
      'High Availability',
      'Disaster Recovery',
      '24/7 Support'
    ],
    benefits: [
      '99.9% uptime',
      '3x performance improvement',
      'Zero data loss',
      'Automated backups'
    ],
    link: '/database-management',
    popular: true,
    category: 'Database',
    rating: 4.8,
    users: '25,000+',
    freeTrial: '21 days',
    marketPrice: '$4,000-15,000/month',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-05-01',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Small Business', price: '$899/month', features: ['Basic database', '1 database', 'Standard support'] },
      { name: 'Professional', price: '$1,799/month', features: ['Advanced database', 'Multiple databases', 'Priority support'], popular: true },
      { name: 'Enterprise', price: '$3,999/month', features: ['Full database suite', 'Unlimited databases', 'Dedicated support'] }
    ],
    integrations: ['Applications', 'APIs', 'Cloud Services', 'Monitoring Tools', 'Backup Systems', 'Security Tools'],
    useCases: ['Data Storage', 'Performance Optimization', 'Backup & Recovery', 'Security'],
    competitors: ['Oracle', 'Microsoft', 'Amazon RDS', 'Google Cloud SQL'],
    roi: '300% within 6 months',
    setupTime: '1 week',
    support: ['Database Administrators', 'Performance Experts', 'Security Specialists', 'Training'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'Enterprise-grade',
      performance: 'Optimized',
      compliance: 'SOC 2, ISO 27001'
    }
  },

  // Blockchain Solutions
  {
    id: 'blockchain-solutions',
    title: 'Blockchain Solutions',
    description: 'Comprehensive blockchain development services including smart contracts, DeFi applications, and enterprise blockchain solutions. Building the future of decentralized technology.',
    icon: '⛓️',
    price: '$3,499/month',
    originalPrice: '$4,999/month',
    features: [
      'Smart Contract Development',
      'DeFi Applications',
      'NFT Marketplaces',
      'Enterprise Blockchain',
      'Token Development',
      'Wallet Integration',
      'DApp Development',
      'Security Auditing',
      'Consensus Mechanisms',
      'Cross-chain Solutions'
    ],
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparent transactions',
      'Future-proof technology'
    ],
    link: '/blockchain-solutions',
    popular: true,
    category: 'Blockchain',
    rating: 4.9,
    users: '5,000+',
    freeTrial: '14 days',
    marketPrice: '$8,000-30,000/month',
    technologies: ['Ethereum', 'Solidity', 'Web3', 'IPFS', 'Polygon', 'Binance Smart Chain'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-05-15',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'DeFi', price: '$1,999/month', features: ['Basic DeFi app', '1 blockchain', 'Standard features'] },
      { name: 'Professional', price: '$3,499/month', features: ['Advanced blockchain', 'Multiple chains', 'Custom features'], popular: true },
      { name: 'Enterprise', price: '$7,999/month', features: ['Full blockchain suite', 'All chains', 'Dedicated support'] }
    ],
    integrations: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'IPFS', 'Web3 Wallets', 'Oracle Services'],
    useCases: ['DeFi Applications', 'NFT Marketplaces', 'Smart Contracts', 'Enterprise Solutions'],
    competitors: ['ConsenSys', 'Chainlink', 'Polygon', 'Binance'],
    roi: '500% within 12 months',
    setupTime: '2 weeks',
    support: ['Blockchain Developers', 'Smart Contract Auditors', 'DeFi Experts', 'Training'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'Cryptographically Secure',
      performance: 'Optimized',
      compliance: 'Regulatory Compliant'
    }
  },

  // IoT Solutions
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    description: 'Complete IoT development services including device management, data collection, and analytics. Connecting 20,000+ devices worldwide.',
    icon: '🌐',
    price: '$2,299/month',
    originalPrice: '$3,299/month',
    features: [
      'Device Management',
      'Data Collection',
      'Real-time Analytics',
      'Edge Computing',
      'Security Implementation',
      'Protocol Support',
      'Dashboard Development',
      'Alert Systems',
      'Integration Services',
      'Maintenance & Support'
    ],
    benefits: [
      'Real-time monitoring',
      'Predictive maintenance',
      'Cost optimization',
      'Enhanced efficiency'
    ],
    link: '/iot-solutions',
    popular: true,
    category: 'IoT',
    rating: 4.8,
    users: '20,000+',
    freeTrial: '21 days',
    marketPrice: '$5,000-20,000/month',
    technologies: ['MQTT', 'CoAP', 'LoRaWAN', 'Zigbee', 'Bluetooth', 'WiFi'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    launchDate: '2024-06-01',
    lastUpdated: '2025-01-08',
    pricingTiers: [
      { name: 'Small Scale', price: '$1,199/month', features: ['Basic IoT', 'Up to 100 devices', 'Standard features'] },
      { name: 'Professional', price: '$2,299/month', features: ['Advanced IoT', 'Unlimited devices', 'Custom features'], popular: true },
      { name: 'Enterprise', price: '$4,999/month', features: ['Full IoT suite', 'White-label', 'Dedicated support'] }
    ],
    integrations: ['Cloud Platforms', 'Databases', 'Analytics Tools', 'Mobile Apps', 'Web Dashboards', 'Third-party APIs'],
    useCases: ['Smart Cities', 'Industrial IoT', 'Smart Homes', 'Agriculture'],
    competitors: ['Microsoft Azure IoT', 'AWS IoT', 'Google Cloud IoT', 'IBM Watson IoT'],
    roi: '350% within 8 months',
    setupTime: '2 weeks',
    support: ['IoT Engineers', 'Data Scientists', 'Hardware Specialists', 'Training'],
    technicalSpecs: {
      uptime: '99.9%',
      scalability: 'Unlimited',
      security: 'End-to-end',
      performance: 'Real-time',
      compliance: 'IoT Security Standards'
    }
  }
];

export const itServiceCategories = [
  { name: 'All', count: comprehensiveITServices.length },
  { name: 'Cloud Computing', count: comprehensiveITServices.filter(s => s.category === 'Cloud Computing').length },
  { name: 'Cybersecurity', count: comprehensiveITServices.filter(s => s.category === 'Cybersecurity').length },
  { name: 'DevOps', count: comprehensiveITServices.filter(s => s.category === 'DevOps').length },
  { name: 'Data & Analytics', count: comprehensiveITServices.filter(s => s.category === 'Data & Analytics').length },
  { name: 'Networking', count: comprehensiveITServices.filter(s => s.category === 'Networking').length },
  { name: 'Mobile Development', count: comprehensiveITServices.filter(s => s.category === 'Mobile Development').length },
  { name: 'Web Development', count: comprehensiveITServices.filter(s => s.category === 'Web Development').length },
  { name: 'IT Support', count: comprehensiveITServices.filter(s => s.category === 'IT Support').length },
  { name: 'Database', count: comprehensiveITServices.filter(s => s.category === 'Database').length },
  { name: 'Blockchain', count: comprehensiveITServices.filter(s => s.category === 'Blockchain').length },
  { name: 'IoT', count: comprehensiveITServices.filter(s => s.category === 'IoT').length }
];