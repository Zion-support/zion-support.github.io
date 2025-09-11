export const comprehensiveServices = [
  {
    id: 1,
    name: 'IT Infrastructure Management',
    category: 'Infrastructure',
    description: 'Complete IT infrastructure setup, maintenance, and optimization',
    basePrice: 2500,
    pricingModel: 'monthly',
    features: [
      'Network infrastructure design and implementation',
      'Server setup and configuration',
      'Cloud infrastructure management',
      'Backup and disaster recovery',
      '24/7 monitoring and alerting',
      'Performance optimization',
      'Security hardening',
      'Compliance management'
    ],
    included: [
      'Unlimited support tickets',
      'Monthly health reports',
      'Quarterly security audits',
      'Annual infrastructure review',
      'Emergency response (4hr)',
      'Remote and on-site support'
    ],
    notIncluded: [
      'Hardware procurement',
      'Software licensing',
      'Custom development',
      'Staff training'
    ],
    popular: true,
    icon: '🏗️',
    responseTime: '4 hours',
    sla: '99.9% uptime'
  },
  {
    id: 2,
    name: 'Cybersecurity Services',
    category: 'Security',
    description: 'Comprehensive cybersecurity protection and compliance',
    basePrice: 1800,
    pricingModel: 'monthly',
    features: [
      'Threat detection and prevention',
      'Vulnerability assessments',
      'Penetration testing',
      'Security awareness training',
      'Incident response planning',
      'Compliance monitoring',
      'Security policy development',
      'Regular security updates'
    ],
    included: [
      '24/7 security monitoring',
      'Monthly security reports',
      'Quarterly penetration tests',
      'Annual security audits',
      'Emergency incident response',
      'Compliance documentation'
    ],
    notIncluded: [
      'Hardware security appliances',
      'Third-party security tools',
      'Legal compliance fees',
      'Insurance requirements'
    ],
    popular: false,
    icon: '🛡️',
    responseTime: '2 hours',
    sla: '99.95% threat detection'
  },
  {
    id: 3,
    name: 'Cloud Solutions',
    category: 'Cloud',
    description: 'Cloud migration, management, and optimization services',
    basePrice: 3200,
    pricingModel: 'monthly',
    features: [
      'Cloud strategy and planning',
      'Migration services',
      'Multi-cloud management',
      'Cost optimization',
      'Performance monitoring',
      'Security configuration',
      'Backup and recovery',
      'Auto-scaling setup'
    ],
    included: [
      'Cloud architecture design',
      'Migration project management',
      'Ongoing optimization',
      'Monthly cost analysis',
      'Performance reports',
      'Security reviews'
    ],
    notIncluded: [
      'Cloud platform costs',
      'Third-party tools',
      'Data transfer fees',
      'Custom development'
    ],
    popular: false,
    icon: '☁️',
    responseTime: '8 hours',
    sla: '99.9% availability'
  },
  {
    id: 4,
    name: 'Data Management',
    category: 'Data',
    description: 'Data backup, recovery, and management solutions',
    basePrice: 1200,
    pricingModel: 'monthly',
    features: [
      'Automated backup systems',
      'Data recovery services',
      'Archive management',
      'Data governance',
      'Compliance reporting',
      'Performance optimization',
      'Disaster recovery planning',
      'Regular testing and validation'
    ],
    included: [
      'Unlimited data backup',
      'Daily backup verification',
      'Monthly recovery testing',
      'Quarterly disaster recovery drills',
      'Annual compliance audits',
      '24/7 emergency recovery'
    ],
    notIncluded: [
      'Storage hardware',
      'Cloud storage costs',
      'Data transfer fees',
      'Legal compliance review'
    ],
    popular: false,
    icon: '💾',
    responseTime: '6 hours',
    sla: '99.99% data integrity'
  },
  {
    id: 5,
    name: 'Network Services',
    category: 'Networking',
    description: 'Professional network design, implementation, and management',
    basePrice: 1600,
    pricingModel: 'monthly',
    features: [
      'Network design and planning',
      'Hardware installation',
      'Configuration and optimization',
      'Security implementation',
      'Performance monitoring',
      'Troubleshooting support',
      'Capacity planning',
      'Documentation and training'
    ],
    included: [
      'Network health monitoring',
      'Monthly performance reports',
      'Quarterly capacity reviews',
      'Annual network audits',
      'Emergency troubleshooting',
      'Hardware warranty support'
    ],
    notIncluded: [
      'Network hardware',
      'ISP services',
      'Third-party licenses',
      'Custom network tools'
    ],
    popular: true,
    icon: '🌐',
    responseTime: '4 hours',
    sla: '99.9% network uptime'
  },
  {
    id: 6,
    name: 'Help Desk Support',
    category: 'Support',
    description: 'Comprehensive IT help desk and user support services',
    basePrice: 800,
    pricingModel: 'monthly',
    features: [
      '24/7 help desk support',
      'Remote troubleshooting',
      'User training and guidance',
      'Software support',
      'Hardware support',
      'Account management',
      'Password resets',
      'Basic troubleshooting'
    ],
    included: [
      'Unlimited support tickets',
      'Phone and email support',
      'Remote desktop assistance',
      'Knowledge base access',
      'Monthly support reports',
      'User satisfaction surveys'
    ],
    notIncluded: [
      'On-site visits',
      'Hardware repairs',
      'Software licensing',
      'Advanced training'
    ],
    popular: false,
    icon: '🎧',
    responseTime: '2 hours',
    sla: '95% first-call resolution'
  }
];

export const serviceCategories = [
  {
    name: 'Infrastructure',
    description: 'Core IT infrastructure services',
    icon: '🏗️',
    services: comprehensiveServices.filter(s => s.category === 'Infrastructure')
  },
  {
    name: 'Security',
    description: 'Cybersecurity and compliance services',
    icon: '🛡️',
    services: comprehensiveServices.filter(s => s.category === 'Security')
  },
  {
    name: 'Cloud',
    description: 'Cloud computing and migration services',
    icon: '☁️',
    services: comprehensiveServices.filter(s => s.category === 'Cloud')
  },
  {
    name: 'Data',
    description: 'Data management and recovery services',
    icon: '💾',
    services: comprehensiveServices.filter(s => s.category === 'Data')
  },
  {
    name: 'Networking',
    description: 'Network infrastructure services',
    icon: '🌐',
    services: comprehensiveServices.filter(s => s.category === 'Networking')
  },
  {
    name: 'Support',
    description: 'Help desk and user support services',
    icon: '🎧',
    services: comprehensiveServices.filter(s => s.category === 'Support')
  }
];

export const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses',
    price: 800,
    features: [
      'Basic IT support',
      'Email and file sharing',
      'Basic security',
      'Monthly reports',
      'Phone support'
    ],
    limitations: [
      'Up to 10 users',
      'Basic monitoring',
      'Standard response time'
    ]
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 2000,
    features: [
      'Everything in Starter',
      'Advanced security',
      'Cloud backup',
      'Network monitoring',
      'Priority support',
      'Quarterly reviews'
    ],
    limitations: [
      'Up to 50 users',
      'Business hours support',
      '4-hour response time'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 5000,
    features: [
      'Everything in Professional',
      '24/7 support',
      'Custom solutions',
      'Dedicated team',
      'Advanced analytics',
      'Strategic consulting'
    ],
    limitations: [
      'Unlimited users',
      'Custom SLAs',
      '1-hour response time'
    ]
  }
];

export const getServiceById = (id) => {
  return comprehensiveServices.find(service => service.id === id);
};

export const getServicesByCategory = (category) => {
  return comprehensiveServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return comprehensiveServices.filter(service => service.popular);
};

export const calculateServiceCost = (serviceId, months = 1, customizations = []) => {
  const service = getServiceById(serviceId);
  if (!service) return 0;
  
  let baseCost = service.basePrice * months;
  
  // Add customization costs
  customizations.forEach(customization => {
    if (customization.type === 'addon') {
      baseCost += customization.price * months;
    } else if (customization.type === 'oneTime') {
      baseCost += customization.price;
    }
  });
  
  return baseCost;
};

export const getServiceRecommendations = (businessSize, industry, budget) => {
  let recommendations = comprehensiveServices;
  
  // Filter by business size
  if (businessSize === 'small') {
    recommendations = recommendations.filter(service => 
      ['Support', 'Data'].includes(service.category)
    );
  } else if (businessSize === 'medium') {
    recommendations = recommendations.filter(service => 
      ['Support', 'Data', 'Networking', 'Security'].includes(service.category)
    );
  }
  
  // Filter by budget
  if (budget === 'low') {
    recommendations = recommendations.filter(service => service.basePrice <= 1500);
  } else if (budget === 'medium') {
    recommendations = recommendations.filter(service => service.basePrice <= 3000);
  }
  
  return recommendations;
};

// Service categories for filtering
export const SERVICE_CATEGORIES = [
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Security', value: 'security' },
  { label: 'Cloud', value: 'cloud' },
  { label: 'Support', value: 'support' },
  { label: 'Data', value: 'data' },
  { label: 'Networking', value: 'networking' },
  { label: 'Development', value: 'development' },
  { label: 'Consulting', value: 'consulting' }
];

// Alias exports for backward compatibility
export const COMPREHENSIVE_SERVICES = comprehensiveServices;
export const PRICING_TIERS = pricingTiers;