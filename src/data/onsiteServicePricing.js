export const onsiteServicePricing = [
  {
    id: 1,
    service: 'Basic IT Support',
    description: 'Essential IT troubleshooting and maintenance',
    hourlyRate: 95,
    minimumHours: 2,
    features: [
      'Hardware diagnostics and repair',
      'Software installation and updates',
      'Basic network troubleshooting',
      'Virus and malware removal',
      'Data backup assistance',
      'Email setup and configuration'
    ],
    responseTime: '24-48 hours',
    category: 'basic',
    popular: false
  },
  {
    id: 2,
    service: 'Network & Security',
    description: 'Comprehensive network setup and security services',
    hourlyRate: 125,
    minimumHours: 4,
    features: [
      'Network infrastructure design',
      'Router and switch configuration',
      'WiFi network setup and optimization',
      'Firewall installation and configuration',
      'VPN setup and management',
      'Network security audits',
      'Intrusion detection systems',
      'Network monitoring tools'
    ],
    responseTime: '24 hours',
    category: 'network',
    popular: true
  },
  {
    id: 3,
    service: 'Server Management',
    description: 'Professional server setup and maintenance',
    hourlyRate: 150,
    minimumHours: 6,
    features: [
      'Server hardware installation',
      'Operating system installation',
      'Server virtualization setup',
      'Active Directory configuration',
      'Backup system implementation',
      'Performance monitoring',
      'Disaster recovery planning',
      'Server security hardening'
    ],
    responseTime: '24 hours',
    category: 'server',
    popular: false
  },
  {
    id: 4,
    service: 'Cloud Migration',
    description: 'Complete cloud infrastructure migration',
    hourlyRate: 175,
    minimumHours: 8,
    features: [
      'Cloud platform assessment',
      'Migration strategy planning',
      'Data migration services',
      'Application deployment',
      'Cloud security configuration',
      'Performance optimization',
      'Cost optimization analysis',
      'Training and documentation'
    ],
    responseTime: '48 hours',
    category: 'cloud',
    popular: false
  },
  {
    id: 5,
    service: 'Emergency Response',
    description: '24/7 emergency IT support and recovery',
    hourlyRate: 200,
    minimumHours: 1,
    features: [
      'Critical system recovery',
      'Data emergency recovery',
      'Network outage resolution',
      'Security breach response',
      'Hardware failure repair',
      'Immediate on-site support',
      'Priority escalation',
      'After-hours availability'
    ],
    responseTime: '2-4 hours',
    category: 'emergency',
    popular: false
  },
  {
    id: 6,
    service: 'IT Consulting',
    description: 'Strategic IT planning and consulting',
    hourlyRate: 225,
    minimumHours: 2,
    features: [
      'Technology roadmap planning',
      'IT budget optimization',
      'Vendor selection assistance',
      'Compliance assessment',
      'Security policy development',
      'Staff training programs',
      'Technology evaluation',
      'Project management'
    ],
    responseTime: '72 hours',
    category: 'consulting',
    popular: false
  }
];

export const serviceCategories = [
  {
    name: 'Basic Support',
    description: 'Essential IT services for small businesses',
    icon: '🔧',
    averageRate: 95
  },
  {
    name: 'Network & Security',
    description: 'Professional networking and security solutions',
    icon: '🛡️',
    averageRate: 125
  },
  {
    name: 'Server Management',
    description: 'Enterprise server infrastructure services',
    icon: '🖥️',
    averageRate: 150
  },
  {
    name: 'Cloud Services',
    description: 'Cloud migration and management',
    icon: '☁️',
    averageRate: 175
  },
  {
    name: 'Emergency Support',
    description: '24/7 critical issue resolution',
    icon: '🚨',
    averageRate: 200
  },
  {
    name: 'Strategic Consulting',
    description: 'IT strategy and planning services',
    icon: '📊',
    averageRate: 225
  }
];

export const additionalServices = [
  {
    name: 'Hardware Installation',
    price: 75,
    description: 'Per device installation and setup',
    category: 'hardware'
  },
  {
    name: 'Software Licensing',
    price: 'Varies',
    description: 'Software procurement and licensing',
    category: 'software'
  },
  {
    name: 'Training Sessions',
    price: 150,
    description: 'Staff IT training (per session)',
    category: 'training'
  },
  {
    name: 'Documentation',
    price: 100,
    description: 'Technical documentation creation',
    category: 'documentation'
  },
  {
    name: 'Remote Support',
    price: 65,
    description: 'Remote troubleshooting (per hour)',
    category: 'remote'
  },
  {
    name: 'Maintenance Contracts',
    price: 'Monthly',
    description: 'Ongoing maintenance agreements',
    category: 'maintenance'
  }
];

export const getServiceById = (id) => {
  return onsiteServicePricing.find(service => service.id === id);
};

export const getServicesByCategory = (category) => {
  return onsiteServicePricing.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return onsiteServicePricing.filter(service => service.popular);
};

export const calculateServiceCost = (serviceId, hours) => {
  const service = getServiceById(serviceId);
  if (!service) return 0;

  const actualHours = Math.max(hours, service.minimumHours);
  return actualHours * service.hourlyRate;
};

export const getServiceRecommendations = (businessSize, industry) => {
  // Simple recommendation logic based on business size
  if (businessSize === 'small') {
    return onsiteServicePricing.filter(service =>
      ['basic', 'network'].includes(service.category)
    );
  } else if (businessSize === 'medium') {
    return onsiteServicePricing.filter(service =>
      ['basic', 'network', 'server'].includes(service.category)
    );
  } else {
    return onsiteServicePricing; // All services for large businesses
  }
};