export interface ITService {
  id: string;
  title: string;
  description: string;
  category: 'Infrastructure' | 'Cloud & DevOps' | 'Digital Transformation' | 'Enterprise Solutions' | 'Managed Services' | 'Consulting' | 'Integration' | 'Support & Maintenance';
  price: string;
  billing: 'month' | 'year' | 'project' | 'hour' | 'managed';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetMarket: string[];
  ctaLabel: string;
  href: string;
  external?: boolean;
  marketSize?: string;
  competitiveAdvantage: string;
  technologyStack: string[];
  integrationCapabilities: string[];
  complianceStandards: string[];
  serviceLevel: 'Basic' | 'Standard' | 'Premium' | 'Enterprise';
  deploymentTime: string;
  scalability: string;
  securityFeatures: string[];
  supportHours: string;
  responseTime: string;
}

export const comprehensiveITServices2032: ITService[] = [
  // Infrastructure Services
  {
    id: 'enterprise-network-infrastructure',
    title: 'Enterprise Network Infrastructure Solutions',
    description: 'Comprehensive network infrastructure design, implementation, and management for enterprise organizations with high availability and security requirements.',
    category: 'Infrastructure',
    price: '$15,000',
    billing: 'project',
    features: [
      'Network architecture design',
      'High-availability setup',
      'Load balancing configuration',
      'Network security implementation',
      'Performance optimization',
      'Monitoring and alerting',
      'Disaster recovery planning',
      '24/7 support coverage'
    ],
    benefits: [
      '99.99% uptime guarantee',
      'Enhanced network performance',
      'Improved security posture',
      'Reduced operational costs',
      'Scalable architecture'
    ],
    useCases: [
      'Enterprise headquarters',
      'Multi-location businesses',
      'Data centers',
      'Cloud connectivity',
      'Remote workforce support'
    ],
    targetMarket: ['Large enterprises', 'Multi-national corporations', 'Government agencies', 'Healthcare organizations', 'Financial institutions'],
    ctaLabel: 'Get Infrastructure Quote',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$89.3B by 2030',
    competitiveAdvantage: 'Most comprehensive enterprise network solutions with AI-powered optimization and quantum-enhanced security',
    technologyStack: ['Cisco', 'Juniper', 'Aruba', 'VMware', 'AI/ML', 'Quantum Computing'],
    integrationCapabilities: ['Legacy systems', 'Cloud platforms', 'Security tools', 'Monitoring systems', 'Backup solutions'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'NIST', 'HIPAA', 'SOX'],
    serviceLevel: 'Enterprise',
    deploymentTime: '8-12 weeks',
    scalability: 'Unlimited users and locations',
    securityFeatures: ['Zero-trust architecture', 'Advanced threat protection', 'Encryption at rest and in transit', 'Multi-factor authentication'],
    supportHours: '24/7',
    responseTime: '15 minutes for critical issues'
  },
  {
    id: 'hybrid-cloud-solutions',
    title: 'Hybrid Cloud Solutions & Migration',
    description: 'End-to-end hybrid cloud solutions including migration strategy, implementation, and ongoing management for optimal performance and cost efficiency.',
    category: 'Cloud & DevOps',
    price: '$25,000',
    billing: 'project',
    features: [
      'Cloud strategy consulting',
      'Migration planning and execution',
      'Hybrid cloud architecture',
      'Cost optimization',
      'Performance monitoring',
      'Security implementation',
      'Backup and disaster recovery',
      'Ongoing management'
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve scalability and flexibility',
      'Enhanced disaster recovery',
      'Better performance and availability',
      'Reduced maintenance overhead'
    ],
    useCases: [
      'Legacy system modernization',
      'Digital transformation initiatives',
      'Cost optimization',
      'Disaster recovery enhancement',
      'Global expansion'
    ],
    targetMarket: ['Enterprises', 'Mid-market companies', 'Government agencies', 'Healthcare', 'Financial services'],
    ctaLabel: 'Plan Cloud Migration',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$145.2B by 2030',
    competitiveAdvantage: 'Most advanced hybrid cloud solutions with AI-powered optimization and quantum-enhanced security',
    technologyStack: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Kubernetes', 'Terraform', 'AI/ML'],
    integrationCapabilities: ['On-premises systems', 'Legacy applications', 'SaaS platforms', 'Data centers', 'Edge computing'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'FedRAMP', 'HIPAA', 'PCI DSS'],
    serviceLevel: 'Enterprise',
    deploymentTime: '12-20 weeks',
    scalability: 'Unlimited resources and users',
    securityFeatures: ['Zero-trust security', 'Encryption everywhere', 'Identity management', 'Compliance monitoring', 'Threat detection'],
    supportHours: '24/7',
    responseTime: '30 minutes for critical issues'
  },
  {
    id: 'devops-automation-platform',
    title: 'DevOps Automation & CI/CD Platform',
    description: 'Comprehensive DevOps automation platform with continuous integration, deployment, and monitoring for accelerated software delivery and improved quality.',
    category: 'Cloud & DevOps',
    price: '$8,999',
    billing: 'month',
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as code',
      'Automated testing',
      'Deployment automation',
      'Monitoring and alerting',
      'Performance optimization',
      'Security scanning',
      'Compliance automation'
    ],
    benefits: [
      'Reduce deployment time by 80%',
      'Improve code quality',
      'Faster time to market',
      'Reduced manual errors',
      'Better collaboration'
    ],
    useCases: [
      'Software development teams',
      'DevOps transformation',
      'Microservices architecture',
      'Container orchestration',
      'Cloud-native applications'
    ],
    targetMarket: ['Software companies', 'Enterprises', 'Startups', 'Government agencies', 'Financial services'],
    ctaLabel: 'Start DevOps Journey',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$67.8B by 2030',
    competitiveAdvantage: 'Most advanced DevOps platform with AI-powered automation and quantum-enhanced optimization',
    technologyStack: ['Jenkins', 'GitLab', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'AI/ML'],
    integrationCapabilities: ['Git repositories', 'Cloud platforms', 'Monitoring tools', 'Security scanners', 'Testing frameworks'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'NIST', 'Industry-specific standards'],
    serviceLevel: 'Premium',
    deploymentTime: '4-6 weeks',
    scalability: 'Unlimited pipelines and deployments',
    securityFeatures: ['Secure code scanning', 'Vulnerability assessment', 'Access controls', 'Audit logging', 'Compliance monitoring'],
    supportHours: '24/7',
    responseTime: '1 hour for critical issues'
  },
  {
    id: 'digital-transformation-consulting',
    title: 'Digital Transformation Consulting',
    description: 'Strategic digital transformation consulting services to help organizations modernize their operations, technology, and culture for the digital age.',
    category: 'Consulting',
    price: '$500',
    billing: 'hour',
    features: [
      'Digital strategy development',
      'Technology assessment',
      'Change management planning',
      'Process optimization',
      'Technology roadmap',
      'Implementation guidance',
      'Performance measurement',
      'Ongoing support'
    ],
    benefits: [
      'Clear digital transformation roadmap',
      'Improved operational efficiency',
      'Enhanced customer experience',
      'Competitive advantage',
      'Future-ready organization'
    ],
    useCases: [
      'Legacy system modernization',
      'Process digitization',
      'Customer experience improvement',
      'Operational efficiency',
      'Innovation initiatives'
    ],
    targetMarket: ['Enterprises', 'Mid-market companies', 'Government agencies', 'Healthcare', 'Manufacturing'],
    ctaLabel: 'Schedule Consultation',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$23.5B by 2030',
    competitiveAdvantage: 'Most comprehensive digital transformation consulting with AI-powered insights and quantum-enhanced strategy',
    technologyStack: ['Strategic frameworks', 'AI/ML', 'Analytics', 'Change management', 'Process optimization'],
    integrationCapabilities: ['Business processes', 'Technology systems', 'Organizational culture', 'Stakeholder management'],
    complianceStandards: ['Industry best practices', 'Regulatory requirements', 'Organizational standards'],
    serviceLevel: 'Premium',
    deploymentTime: 'Ongoing engagement',
    scalability: 'Unlimited scope and complexity',
    securityFeatures: ['Confidentiality agreements', 'Secure communication', 'Data protection', 'Access controls'],
    supportHours: 'Business hours + emergency',
    responseTime: '24 hours for standard requests'
  },
  {
    id: 'enterprise-software-integration',
    title: 'Enterprise Software Integration Services',
    description: 'Comprehensive software integration services to connect disparate systems, automate workflows, and create unified business processes.',
    category: 'Integration',
    price: '$12,000',
    billing: 'project',
    features: [
      'System analysis and design',
      'API development and integration',
      'Data mapping and transformation',
      'Workflow automation',
      'Real-time synchronization',
      'Error handling and monitoring',
      'Performance optimization',
      'Documentation and training'
    ],
    benefits: [
      'Eliminate data silos',
      'Automate manual processes',
      'Improve data accuracy',
      'Enhanced user experience',
      'Reduced operational costs'
    ],
    useCases: [
      'ERP system integration',
      'CRM platform connectivity',
      'Financial system integration',
      'HR system integration',
      'Legacy system modernization'
    ],
    targetMarket: ['Enterprises', 'Mid-market companies', 'Government agencies', 'Healthcare', 'Financial services'],
    ctaLabel: 'Integrate Your Systems',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$34.7B by 2030',
    competitiveAdvantage: 'Most advanced integration platform with AI-powered automation and quantum-enhanced optimization',
    technologyStack: ['MuleSoft', 'Boomi', 'Informatica', 'Custom APIs', 'AI/ML', 'Cloud platforms'],
    integrationCapabilities: ['ERP systems', 'CRM platforms', 'Legacy systems', 'Cloud applications', 'Data warehouses'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'Industry-specific standards', 'Data privacy regulations'],
    serviceLevel: 'Enterprise',
    deploymentTime: '6-12 weeks',
    scalability: 'Unlimited systems and data',
    securityFeatures: ['Secure APIs', 'Data encryption', 'Access controls', 'Audit logging', 'Compliance monitoring'],
    supportHours: '24/7',
    responseTime: '2 hours for critical issues'
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services & Support',
    description: 'Comprehensive managed IT services including 24/7 monitoring, proactive maintenance, and rapid response support for optimal system performance.',
    category: 'Managed Services',
    price: '$3,999',
    billing: 'month',
    features: [
      '24/7 system monitoring',
      'Proactive maintenance',
      'Rapid incident response',
      'Performance optimization',
      'Security management',
      'Backup and recovery',
      'Patch management',
      'Help desk support'
    ],
    benefits: [
      'Reduce IT costs by 25-40%',
      'Improve system reliability',
      'Enhanced security posture',
      'Predictable monthly costs',
      'Focus on core business'
    ],
    useCases: [
      'IT infrastructure management',
      'System administration',
      'Security monitoring',
      'Backup and recovery',
      'User support'
    ],
    targetMarket: ['Mid-market companies', 'Enterprises', 'Healthcare', 'Financial services', 'Manufacturing'],
    ctaLabel: 'Get Managed Services',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$274.2B by 2030',
    competitiveAdvantage: 'Most comprehensive managed services with AI-powered monitoring and quantum-enhanced security',
    technologyStack: ['Monitoring tools', 'Automation platforms', 'Security tools', 'Backup solutions', 'AI/ML'],
    integrationCapabilities: ['Existing IT infrastructure', 'Cloud platforms', 'Security tools', 'Monitoring systems'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'NIST', 'Industry-specific standards'],
    serviceLevel: 'Premium',
    deploymentTime: '2-4 weeks',
    scalability: 'Unlimited systems and users',
    securityFeatures: ['24/7 security monitoring', 'Threat detection', 'Incident response', 'Compliance monitoring', 'Regular security updates'],
    supportHours: '24/7',
    responseTime: '15 minutes for critical issues'
  },
  {
    id: 'cybersecurity-managed-services',
    title: 'Cybersecurity Managed Services',
    description: 'Comprehensive cybersecurity managed services including threat detection, incident response, and compliance management for complete security protection.',
    category: 'Managed Services',
    price: '$5,999',
    billing: 'month',
    features: [
      '24/7 threat monitoring',
      'Incident response',
      'Vulnerability management',
      'Security awareness training',
      'Compliance management',
      'Penetration testing',
      'Security assessments',
      'Risk management'
    ],
    benefits: [
      'Reduce security risks by 80%',
      'Meet compliance requirements',
      '24/7 security protection',
      'Expert security team',
      'Predictable security costs'
    ],
    useCases: [
      'Enterprise security',
      'Compliance management',
      'Threat protection',
      'Incident response',
      'Security awareness'
    ],
    targetMarket: ['Enterprises', 'Financial services', 'Healthcare', 'Government agencies', 'Critical infrastructure'],
    ctaLabel: 'Secure Your Business',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$376.3B by 2030',
    competitiveAdvantage: 'Most advanced cybersecurity services with AI-powered threat detection and quantum-enhanced protection',
    technologyStack: ['SIEM systems', 'EDR solutions', 'Firewalls', 'AI/ML', 'Threat intelligence', 'Compliance tools'],
    integrationCapabilities: ['Security tools', 'IT infrastructure', 'Cloud platforms', 'Legacy systems'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'NIST', 'GDPR', 'HIPAA', 'SOX'],
    serviceLevel: 'Enterprise',
    deploymentTime: '4-6 weeks',
    scalability: 'Unlimited endpoints and data',
    securityFeatures: ['Zero-trust architecture', 'Advanced threat protection', '24/7 monitoring', 'Incident response', 'Compliance automation'],
    supportHours: '24/7',
    responseTime: '15 minutes for critical incidents'
  },
  {
    id: 'data-center-solutions',
    title: 'Data Center Solutions & Colocation',
    description: 'Comprehensive data center solutions including design, implementation, and management for high-performance, secure, and scalable infrastructure.',
    category: 'Infrastructure',
    price: '$50,000',
    billing: 'project',
    features: [
      'Data center design',
      'Infrastructure implementation',
      'Power and cooling systems',
      'Security implementation',
      'Monitoring and management',
      'Backup and disaster recovery',
      'Compliance certification',
      'Ongoing maintenance'
    ],
    benefits: [
      '99.999% uptime guarantee',
      'Enhanced security',
      'Improved performance',
      'Scalable infrastructure',
      'Compliance ready'
    ],
    useCases: [
      'Enterprise data centers',
      'Cloud infrastructure',
      'Disaster recovery sites',
      'Edge computing',
      'High-performance computing'
    ],
    targetMarket: ['Large enterprises', 'Cloud providers', 'Government agencies', 'Financial institutions', 'Healthcare organizations'],
    ctaLabel: 'Design Your Data Center',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$105.4B by 2030',
    competitiveAdvantage: 'Most advanced data center solutions with AI-powered optimization and quantum-enhanced security',
    technologyStack: ['Cisco', 'Dell', 'HP', 'VMware', 'AI/ML', 'IoT', 'Quantum Computing'],
    integrationCapabilities: ['Cloud platforms', 'Legacy systems', 'Security tools', 'Monitoring systems', 'Backup solutions'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'NIST', 'TIA-942', 'Uptime Institute'],
    serviceLevel: 'Enterprise',
    deploymentTime: '16-24 weeks',
    scalability: 'Unlimited capacity and performance',
    securityFeatures: ['Physical security', 'Network security', 'Access controls', 'Surveillance systems', 'Environmental monitoring'],
    supportHours: '24/7',
    responseTime: '15 minutes for critical issues'
  }
];

export const itServiceCategories = [
  'Infrastructure',
  'Cloud & DevOps',
  'Digital Transformation',
  'Enterprise Solutions',
  'Managed Services',
  'Consulting',
  'Integration',
  'Support & Maintenance'
];

export const getITServicesByCategory = (category: string) => {
  return comprehensiveITServices2032.filter(service => service.category === category);
};

export const getITServiceById = (id: string) => {
  return comprehensiveITServices2032.find(service => service.id === id);
};

export const getITServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return comprehensiveITServices2032.filter(service => {
    const price = parseInt(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && price <= maxPrice;
  });
};