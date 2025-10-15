export interface Service {;
  id: string;
  title: string,
        description: string;
  shortDescription: string;
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT'";"'"'"
  icon: string;
  features: string[];};
  pricing: {};
    basic: number;};
    pro: number;};
    enterprise: number};
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;,
    website: string;};
  };
      'Threat Detection','"'Vulnerability Assessment','"'Security Monitoring','"'Compliance Management','"'Incident Response','"'Security Training'"'''"'"
    ],
    pricing: {,
      basic: 3000,
      pro: 10000,
      enterprise: 30000;
      'Cloud Migration','"'Architecture Design','"'DevOps Implementation','"'Cloud Management','"'Auto-scaling','"'Disaster Recovery'"'''"'"
    ],
    pricing: {,
      basic: 2000,
      pro: 8000,
      'Process Automation','"'Workflow Optimization','"'System Integration','"'Change Management','"'Digital Strategy','"'Technology Adoption'"'''"'"
    ],
    pricing: {,
      basic: 10000,
      pro: 30000,
      'Network Implementation','"'IoT Connectivity','"'Mobile Optimization','"'Enterprise Services','"'Edge Computing','"'Network Slicing'"'''"'"
    ],
    pricing: {,
      basic: 15000,
      pro: 50000,
      'Application Development','"'API Integration','"'Subscription Management','"'Scalable Architecture','"'Multi-tenancy','"'Analytics Dashboard'"'''"'"
    ],
    pricing: {,
      basic: 8000,
      pro: 25000,;
export const getServiceById  = (id: string) => {return services.find(service => service.id === id)};

}