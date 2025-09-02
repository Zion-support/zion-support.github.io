export interface ComprehensiveItService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const COMPREHENSIVE_IT_SERVICES_2025: ComprehensiveItService[] = [
  // Cloud Infrastructure Services
  {
    id: 'cloud-infrastructure-services',
    title: 'Cloud Infrastructure Services',
    description:
      'Complete cloud infrastructure management including migration, optimization, monitoring, and support for AWS, Azure, Google Cloud, and hybrid environments.',
    category: 'Cloud & Infrastructure',
    subcategory: 'Infrastructure Management',
    price: 2499,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Cloud migration planning',
      'Multi-cloud management',
      'Infrastructure automation',
      '24/7 monitoring',
      'Cost optimization',
      'Security hardening',
      'Backup & disaster recovery',
      'Performance tuning',
      'Compliance management',
      'Technical support'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve system reliability',
      'Enhanced security posture',
      'Scalable cloud solutions',
      '24/7 expert support'
    ],
    useCases: [
      'Cloud migration',
      'Infrastructure modernization',
      'Disaster recovery',
      'Cost optimization',
      'Compliance requirements',
      'Scalability planning'
    ],
    targetAudience: [
      'Enterprise companies',
      'Growing businesses',
      'Startups',
      'Government agencies',
      'Healthcare organizations'
    ],
    tags: ['Cloud Infrastructure', 'Migration', 'AWS', 'Azure', 'DevOps'],
    estimatedDelivery: '2-4 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$2,499 - $9,999/month',
    roi: '200-350%',
    innovationLevel: 'Standard',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
      integrations: ['Monitoring tools', 'CI/CD pipelines', 'Security tools', 'Backup solutions'],
      apiEndpoints: 50,
      uptime: '99.9%',
      security: ['SOC 2', 'ISO 27001', 'Encryption', 'Access controls']
    },
    competitors: ['Rackspace', 'Cloudflare', 'DigitalOcean', 'Linode'],
    marketSize: '$98.4B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/cloud-infrastructure',
    documentationUrl: 'https://ziontechgroup.com/docs/cloud-infrastructure'
  },

  // Managed IT Services
  {
    id: 'managed-it-services',
    title: 'Managed IT Services',
    description:
      'Comprehensive managed IT services including helpdesk support, network management, security monitoring, and proactive maintenance for businesses of all sizes.',
    category: 'Managed Services',
    subcategory: 'IT Support',
    price: 149,
    currency: '$',
    pricingModel: 'per user/month',
    features: [
      '24/7 helpdesk support',
      'Network monitoring',
      'Security management',
      'Patch management',
      'Hardware maintenance',
      'Software licensing',
      'Data backup',
      'Remote support',
      'On-site assistance',
      'Strategic IT planning'
    ],
    benefits: [
      'Reduce IT costs by 30%',
      'Proactive problem resolution',
      'Enhanced security',
      'Predictable IT expenses',
      'Expert technical support'
    ],
    useCases: [
      'Small business IT support',
      'Remote work enablement',
      'IT outsourcing',
      'Technology refreshes',
      'Compliance management',
      'Business continuity'
    ],
    targetAudience: [
      'Small to medium businesses',
      'Professional services',
      'Non-profit organizations',
      'Manufacturing companies',
      'Retail businesses'
    ],
    tags: ['Managed IT', 'IT Support', 'Helpdesk', 'Network Management', 'Security'],
    estimatedDelivery: '1-2 weeks',
    supportLevel: 'premium',
    marketPrice: '$149 - $299/user/month',
    roi: '150-250%',
    innovationLevel: 'Standard',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Windows', 'macOS', 'Linux', 'Office 365', 'Google Workspace'],
      integrations: ['PSA tools', 'RMM platforms', 'Security tools', 'Backup solutions'],
      apiEndpoints: 30,
      uptime: '99.5%',
      security: ['SOC 2', 'Data encryption', 'Access controls', 'Audit trails']
    },
    competitors: ['ConnectWise', 'Kaseya', 'Datto', 'SolarWinds'],
    marketSize: '$267.8B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/managed-it',
    documentationUrl: 'https://ziontechgroup.com/docs/managed-it'
  },

  // Cybersecurity Solutions
  {
    id: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    description:
      'Comprehensive cybersecurity services including threat detection, incident response, security assessments, compliance, and employee training.',
    category: 'Cybersecurity',
    subcategory: 'Security Services',
    price: 1999,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Security assessments',
      'Threat monitoring',
      'Incident response',
      'Vulnerability scanning',
      'Penetration testing',
      'Compliance auditing',
      'Security training',
      'Firewall management',
      'Endpoint protection',
      'Security consulting'
    ],
    benefits: [
      'Reduce security risks by 80%',
      'Regulatory compliance',
      'Rapid incident response',
      'Employee security awareness',
      'Peace of mind'
    ],
    useCases: [
      'Security posture improvement',
      'Compliance requirements',
      'Incident response',
      'Risk assessment',
      'Employee training',
      'Vendor security'
    ],
    targetAudience: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Enterprise companies',
      'E-commerce businesses'
    ],
    tags: ['Cybersecurity', 'Threat Detection', 'Compliance', 'Risk Management', 'Training'],
    estimatedDelivery: '2-3 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$1,999 - $7,999/month',
    roi: '300-500%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['SIEM', 'EDR', 'Firewalls', 'IDS/IPS', 'Security frameworks'],
      integrations: ['Security tools', 'ITSM platforms', 'Compliance tools', 'Training platforms'],
      apiEndpoints: 40,
      uptime: '99.9%',
      security: ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA']
    },
    competitors: ['CrowdStrike', 'Palo Alto Networks', 'Fortinet', 'Check Point'],
    marketSize: '$193.8B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/cybersecurity',
    documentationUrl: 'https://ziontechgroup.com/docs/cybersecurity'
  },

  // Network Infrastructure Solutions
  {
    id: 'network-infrastructure-solutions',
    title: 'Network Infrastructure Solutions',
    description:
      'Design, implementation, and management of enterprise network infrastructure including LAN, WAN, wireless, and software-defined networking.',
    category: 'Network Infrastructure',
    subcategory: 'Networking',
    price: 3499,
    currency: '$',
    pricingModel: 'project-based',
    features: [
      'Network design',
      'Infrastructure deployment',
      'Wireless solutions',
      'SD-WAN implementation',
      'Network security',
      'Performance optimization',
      'Monitoring & management',
      'Troubleshooting',
      'Documentation',
      'Training'
    ],
    benefits: [
      'Improved network performance',
      'Enhanced security',
      'Scalable infrastructure',
      'Reduced downtime',
      'Future-ready technology'
    ],
    useCases: [
      'Office networking',
      'Branch connectivity',
      'Wireless deployments',
      'Network upgrades',
      'Remote work enablement',
      'IoT connectivity'
    ],
    targetAudience: [
      'Enterprise companies',
      'Educational institutions',
      'Healthcare facilities',
      'Manufacturing plants',
      'Government offices'
    ],
    tags: ['Network Infrastructure', 'SD-WAN', 'Wireless', 'Security', 'Performance'],
    estimatedDelivery: '4-8 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$3,499 - $15,999/project',
    roi: '200-300%',
    innovationLevel: 'Standard',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Cisco', 'Juniper', 'Aruba', 'Meraki', 'SD-WAN'],
      integrations: ['Monitoring tools', 'Security platforms', 'Cloud services', 'VoIP systems'],
      apiEndpoints: 25,
      uptime: '99.9%',
      security: ['Network segmentation', 'Access controls', 'Encryption', 'Monitoring']
    },
    competitors: ['Cisco', 'Juniper', 'Aruba', 'Fortinet'],
    marketSize: '$78.2B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/network-infrastructure',
    documentationUrl: 'https://ziontechgroup.com/docs/network-infrastructure'
  },

  // Data Backup & Recovery Services
  {
    id: 'data-backup-recovery-services',
    title: 'Data Backup & Recovery Services',
    description:
      'Comprehensive data protection services including automated backups, disaster recovery planning, business continuity, and data restoration.',
    category: 'Data Protection',
    subcategory: 'Backup & Recovery',
    price: 899,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Automated backups',
      'Cloud storage',
      'Disaster recovery planning',
      'Point-in-time recovery',
      'Data encryption',
      'Compliance reporting',
      'Recovery testing',
      'Business continuity',
      '24/7 monitoring',
      'Rapid restoration'
    ],
    benefits: [
      'Protect critical business data',
      'Minimize downtime',
      'Regulatory compliance',
      'Peace of mind',
      'Quick recovery'
    ],
    useCases: [
      'Data protection',
      'Disaster recovery',
      'Compliance requirements',
      'Business continuity',
      'Ransomware protection',
      'System migrations'
    ],
    targetAudience: [
      'All businesses',
      'Healthcare organizations',
      'Financial institutions',
      'Legal firms',
      'Government agencies'
    ],
    tags: ['Data Backup', 'Disaster Recovery', 'Business Continuity', 'Compliance', 'Cloud Storage'],
    estimatedDelivery: '1-2 weeks',
    supportLevel: 'standard',
    marketPrice: '$899 - $2,999/month',
    roi: '400-600%',
    innovationLevel: 'Standard',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Backup'],
      integrations: ['Cloud platforms', 'Virtualization', 'Databases', 'Applications'],
      apiEndpoints: 20,
      uptime: '99.9%',
      security: ['AES-256 encryption', 'Access controls', 'Audit trails', 'Compliance']
    },
    competitors: ['Veeam', 'Commvault', 'Rubrik', 'Acronis'],
    marketSize: '$18.9B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/backup-recovery',
    documentationUrl: 'https://ziontechgroup.com/docs/backup-recovery'
  },

  // Enterprise Software Development
  {
    id: 'enterprise-software-development',
    title: 'Enterprise Software Development',
    description:
      'Custom software development for enterprise applications including web applications, mobile apps, integrations, and legacy system modernization.',
    category: 'Software Development',
    subcategory: 'Custom Development',
    price: 15000,
    currency: '$',
    pricingModel: 'project-based',
    features: [
      'Requirements analysis',
      'Custom development',
      'Architecture design',
      'API development',
      'Database design',
      'Security implementation',
      'Testing & QA',
      'Deployment',
      'Maintenance',
      'Training'
    ],
    benefits: [
      'Tailored to business needs',
      'Competitive advantage',
      'Process automation',
      'Improved efficiency',
      'Scalable solutions'
    ],
    useCases: [
      'Business applications',
      'Process automation',
      'System integration',
      'Legacy modernization',
      'Mobile applications',
      'Data management'
    ],
    targetAudience: [
      'Enterprise companies',
      'Growing businesses',
      'Government agencies',
      'Non-profit organizations',
      'Startups'
    ],
    tags: ['Software Development', 'Custom Applications', 'Enterprise', 'Integration', 'Modernization'],
    estimatedDelivery: '12-24 weeks',
    supportLevel: 'premium',
    marketPrice: '$15,000 - $100,000/project',
    roi: '250-400%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['React', 'Node.js', 'Python', '.NET', 'Java', 'Cloud platforms'],
      integrations: ['ERP systems', 'CRM platforms', 'Databases', 'APIs', 'Third-party services'],
      apiEndpoints: 100,
      uptime: '99.9%',
      security: ['OWASP standards', 'Data encryption', 'Authentication', 'Authorization']
    },
    competitors: ['Accenture', 'IBM', 'Deloitte', 'Capgemini'],
    marketSize: '$429.8B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/software-development',
    documentationUrl: 'https://ziontechgroup.com/docs/software-development'
  },

  // IT Consulting Services
  {
    id: 'it-consulting-services',
    title: 'IT Consulting Services',
    description:
      'Strategic IT consulting services including digital transformation, technology roadmaps, vendor selection, and IT governance.',
    category: 'IT Consulting',
    subcategory: 'Strategic Consulting',
    price: 250,
    currency: '$',
    pricingModel: 'hourly',
    features: [
      'IT strategy development',
      'Digital transformation',
      'Technology assessment',
      'Vendor evaluation',
      'Project management',
      'Change management',
      'Risk assessment',
      'Compliance guidance',
      'Budget planning',
      'Performance metrics'
    ],
    benefits: [
      'Strategic IT alignment',
      'Cost optimization',
      'Risk mitigation',
      'Technology innovation',
      'Competitive advantage'
    ],
    useCases: [
      'Digital transformation',
      'IT strategy',
      'Technology selection',
      'Process improvement',
      'Compliance planning',
      'Merger & acquisitions'
    ],
    targetAudience: [
      'C-level executives',
      'IT directors',
      'Business leaders',
      'Government officials',
      'Board members'
    ],
    tags: ['IT Consulting', 'Digital Transformation', 'Strategy', 'Technology', 'Governance'],
    estimatedDelivery: '2-8 weeks',
    supportLevel: 'premium',
    marketPrice: '$250 - $500/hour',
    roi: '300-500%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Analysis tools', 'Project management', 'Documentation platforms', 'Assessment frameworks'],
      integrations: ['Business systems', 'Analytics platforms', 'Collaboration tools', 'Reporting tools'],
      apiEndpoints: 10,
      uptime: '99%',
      security: ['Confidentiality agreements', 'Data protection', 'Secure communications']
    },
    competitors: ['McKinsey', 'Deloitte', 'PwC', 'EY'],
    marketSize: '$145.2B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/it-consulting',
    documentationUrl: 'https://ziontechgroup.com/docs/it-consulting'
  },

  // Microsoft 365 Services
  {
    id: 'microsoft-365-services',
    title: 'Microsoft 365 Services',
    description:
      'Complete Microsoft 365 services including migration, implementation, optimization, training, and ongoing support for all Microsoft cloud services.',
    category: 'Cloud Services',
    subcategory: 'Microsoft 365',
    price: 49,
    currency: '$',
    pricingModel: 'per user/month',
    features: [
      'Migration services',
      'Tenant setup',
      'Security configuration',
      'SharePoint deployment',
      'Teams implementation',
      'Power Platform',
      'Exchange management',
      'Compliance setup',
      'User training',
      'Ongoing support'
    ],
    benefits: [
      'Improved collaboration',
      'Enhanced productivity',
      'Cost savings',
      'Better security',
      'Seamless integration'
    ],
    useCases: [
      'Office 365 migration',
      'Remote work enablement',
      'Collaboration improvement',
      'Document management',
      'Communication tools',
      'Business applications'
    ],
    targetAudience: [
      'Small businesses',
      'Medium enterprises',
      'Non-profit organizations',
      'Educational institutions',
      'Professional services'
    ],
    tags: ['Microsoft 365', 'Office 365', 'SharePoint', 'Teams', 'Exchange'],
    estimatedDelivery: '1-3 weeks',
    supportLevel: 'standard',
    marketPrice: '$49 - $99/user/month',
    roi: '200-300%',
    innovationLevel: 'Standard',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Microsoft 365', 'Azure AD', 'Exchange Online', 'SharePoint', 'Teams'],
      integrations: ['Third-party apps', 'Line of business systems', 'Security tools', 'Backup solutions'],
      apiEndpoints: 50,
      uptime: '99.9%',
      security: ['Microsoft security', 'Conditional access', 'Data loss prevention', 'Compliance']
    },
    competitors: ['Google Workspace', 'Slack', 'Zoom', 'Dropbox'],
    marketSize: '$57.3B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/microsoft-365',
    documentationUrl: 'https://ziontechgroup.com/docs/microsoft-365'
  },

  // Database Management Services
  {
    id: 'database-management-services',
    title: 'Database Management Services',
    description:
      'Comprehensive database services including design, implementation, optimization, monitoring, backup, and support for all major database platforms.',
    category: 'Database Services',
    subcategory: 'Database Management',
    price: 1499,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Database design',
      'Performance tuning',
      'Backup & recovery',
      'Security hardening',
      'Monitoring & alerting',
      'Migration services',
      'Maintenance',
      'Compliance',
      'Disaster recovery',
      '24/7 support'
    ],
    benefits: [
      'Improved performance',
      'Enhanced security',
      'Reduced downtime',
      'Cost optimization',
      'Expert management'
    ],
    useCases: [
      'Database optimization',
      'Migration projects',
      'Performance improvement',
      'Security enhancement',
      'Compliance requirements',
      'Disaster recovery'
    ],
    targetAudience: [
      'Enterprise companies',
      'SaaS providers',
      'E-commerce businesses',
      'Financial institutions',
      'Healthcare organizations'
    ],
    tags: ['Database Management', 'SQL Server', 'Oracle', 'MySQL', 'PostgreSQL'],
    estimatedDelivery: '2-4 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$1,499 - $4,999/month',
    roi: '200-350%',
    innovationLevel: 'Standard',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB'],
      integrations: ['Monitoring tools', 'Backup solutions', 'BI platforms', 'Applications'],
      apiEndpoints: 30,
      uptime: '99.9%',
      security: ['Encryption', 'Access controls', 'Audit trails', 'Compliance']
    },
    competitors: ['Oracle', 'Microsoft', 'IBM', 'Amazon RDS'],
    marketSize: '$82.1B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/database-management',
    documentationUrl: 'https://ziontechgroup.com/docs/database-management'
  },

  // VoIP & Communications Solutions
  {
    id: 'voip-communications-solutions',
    title: 'VoIP & Communications Solutions',
    description:
      'Modern business communications including VoIP phone systems, video conferencing, unified communications, and contact center solutions.',
    category: 'Communications',
    subcategory: 'VoIP Systems',
    price: 39,
    currency: '$',
    pricingModel: 'per user/month',
    features: [
      'Cloud-based phone system',
      'Video conferencing',
      'Instant messaging',
      'Call routing',
      'Voicemail to email',
      'Mobile apps',
      'Analytics & reporting',
      'CRM integration',
      'Auto attendant',
      'Conference rooms'
    ],
    benefits: [
      'Reduce phone costs by 50%',
      'Improved communication',
      'Scalable solution',
      'Mobile workforce support',
      'Professional image'
    ],
    useCases: [
      'Business phone system',
      'Remote work communication',
      'Customer service',
      'Sales teams',
      'Conference rooms',
      'Multi-location businesses'
    ],
    targetAudience: [
      'Small businesses',
      'Growing companies',
      'Remote teams',
      'Professional services',
      'Call centers'
    ],
    tags: ['VoIP', 'Business Phone', 'Video Conferencing', 'Unified Communications', 'Contact Center'],
    estimatedDelivery: '1-2 weeks',
    supportLevel: 'standard',
    marketPrice: '$39 - $89/user/month',
    roi: '200-300%',
    innovationLevel: 'Standard',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['SIP', 'WebRTC', 'Cloud infrastructure', 'Mobile apps', 'Web interface'],
      integrations: ['CRM systems', 'Help desk tools', 'Office 365', 'Google Workspace'],
      apiEndpoints: 40,
      uptime: '99.9%',
      security: ['SIP encryption', 'Access controls', 'Compliance', 'Privacy protection']
    },
    competitors: ['RingCentral', '8x8', 'Vonage', 'Dialpad'],
    marketSize: '$31.8B (2025)',
    demoUrl: 'https://ziontechgroup.com/demo/voip-communications',
    documentationUrl: 'https://ziontechgroup.com/docs/voip-communications'
  }
];

export default COMPREHENSIVE_IT_SERVICES_2025;