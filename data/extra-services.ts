export interface ExtraService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const extraServices: ExtraService[] = [
  {
    id: 'cloud-migration-expert',
    name: 'Cloud Migration Expert',
    tagline: 'Seamless cloud migration and optimization',
    price: '$99/hour',
    description: 'Professional cloud migration services for businesses looking to modernize their infrastructure.',
    features: [
      'AWS/Azure/GCP migration',
      'Performance optimization',
      'Cost analysis',
      'Security implementation',
      '24/7 support'
    ],
    link: 'https://ziontechgroup.com/services/cloud-migration-expert',
    category: 'Cloud Services',
    realImplementation: true,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Audit Pro',
    tagline: 'Comprehensive security assessment and protection',
    price: '$199/hour',
    description: 'Complete cybersecurity audit and vulnerability assessment for enterprise-level protection.',
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Security policy review',
      'Compliance audit',
      'Remediation guidance'
    ],
    link: 'https://ziontechgroup.com/services/cybersecurity-audit',
    category: 'Security',
    realImplementation: true,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-consulting-expert',
    name: 'AI Strategy Consulting',
    tagline: 'Strategic AI implementation and optimization',
    price: '$299/hour',
    description: 'Expert AI consulting services to help businesses develop and implement AI strategies.',
    features: [
      'AI strategy development',
      'Technology assessment',
      'Implementation planning',
      'ROI analysis',
      'Change management support'
    ],
    link: 'https://ziontechgroup.com/services/ai-consulting-expert',
    category: 'AI Services',
    realImplementation: true,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'data-analytics-expert',
    name: 'Data Analytics Expert',
    tagline: 'Advanced data analytics and business intelligence',
    price: '$249/hour',
    description: 'Professional data analytics services to transform your data into actionable business insights.',
    features: [
      'Data strategy development',
      'Advanced analytics implementation',
      'Dashboard creation',
      'Predictive modeling',
      'Performance optimization'
    ],
    link: 'https://ziontechgroup.com/services/data-analytics-expert',
    category: 'Analytics',
    realImplementation: true,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'devops-automation-expert',
    name: 'DevOps Automation Expert',
    tagline: 'Complete DevOps transformation and automation',
    price: '$199/hour',
    description: 'Expert DevOps services to automate your development and deployment processes.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure automation',
      'Monitoring and alerting',
      'Security integration',
      'Performance optimization'
    ],
    link: 'https://ziontechgroup.com/services/devops-automation-expert',
    category: 'IT Services',
    realImplementation: true,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const getServicesByCategory = (category: string) => {
  return extraServices.filter(service => service.category === category);
};

export const getRealImplementationServices = () => {
  return extraServices.filter(service => service.realImplementation);
};