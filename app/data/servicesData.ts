// Service data for AI and IT solutions;

export interface Service {
  return null;
}
  return null;
}
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
  return null;
}
  return null;
;}
    basic: string;
    pro: string;
    enterprise: string;
  ;}
  contactInfo: {
  return null;
}
  return null;
;}
    website: string;
    email: string;
    phone: string;
  ;}
  icon: string;
  href: string;
  popular?: boolean;
  category: 'ai' | 'it' | 'cloud' | 'security' | 'data' | 'automation';
;}
;

export const aiServices: Service[] = [
  {
  return null;
}
  return null;
;}
    id: 'ai-analytics';,
    title: 'AI Analytics & BI';,
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.';,
    features: [
      'Real-time data processing';,
      'Predictive analytics',
      'Custom dashboards',
      'Automated reporting',
      'Machine learning models'
    ],
    benefits: [
      'Increased efficiency';,
      'Better decision making',
      'Cost reduction',
      'Competitive advantage'
    ],
    pricing: {
  return null;
}
  return null;
;}
      basic: '299';,
      pro: '599';,
      enterprise: '1299'
    ;},
    contactInfo: {
  return null;
}
  return null;
;}
      website: '/ai-analytics';,
      email: 'ai@ziontechgroup.com';,
      phone: '+1-555-0123'
    ;},
    icon: '📊';,
    href: '/ai-analytics';,
    popular: true;,
    category: 'ai'
  ;},
  {
  return null;
}
  return null;
}
    id: 'ai-automation';,
    title: 'AI Automation';,
    description: 'Streamline your business processes with intelligent automation solutions.';,
    features: [
      'Workflow automation';,
      'Document processing',
      'Email automation',
      'Task scheduling',
      'Process optimization'
    ],
    benefits: [
      'Time savings';,
      'Reduced errors',
      'Scalable processes',
      'Improved productivity'
    ],
    pricing: {
  return null;
}
  return null;
;}
      basic: '199';,
      pro: '399';,
      enterprise: '899'
    ;},
    contactInfo: {
  return null;
}
  return null;
;}
      website: '/ai-automation';,
      email: 'automation@ziontechgroup.com';,
      phone: '+1-555-0124'
    ;},
    icon: '🤖';,
    href: '/ai-automation';,
    category: 'ai'
  ;}
];
;

export const itServices: Service[] = [
  {
  return null;
}
  return null;
;}
    id: 'web-development';,
    title: 'Web Development';,
    description: 'Build modern;, responsive websites and web applications that drive results.',
    features: [
      'Responsive design';,
      'SEO optimization',
      'Performance optimization',
      'Cross-browser compatibility',
      'Mobile-first approach'
    ],
    benefits: [
      'Better user experience';,
      'Higher conversion rates',
      'Mobile accessibility',
      'Search engine visibility'
    ],
    pricing: {
  return null;
}
  return null;
;}
      basic: '2999';,
      pro: '5999';,
      enterprise: '12999'
    ;},
    contactInfo: {
  return null;
}
  return null;
;}
      website: '/web-development';,
      email: 'web@ziontechgroup.com';,
      phone: '+1-555-0125'
    ;},
    icon: '🌐';,
    href: '/web-development';,
    popular: true;,
    category: 'it'
  ;},
  {
  return null;
}
  return null;
}
    id: 'cloud-infrastructure';,
    title: 'Cloud Infrastructure';,
    description: 'Scalable and secure cloud solutions for modern businesses.';,
    features: [
      'Cloud migration';,
      'Infrastructure as Code',
      'Auto-scaling',
      'Security compliance',
      '24/7 monitoring'
    ],
    benefits: [
      'Scalable resources';,
      'Cost optimization',
      'High availability',
      'Security compliance'
    ],
    pricing: {
  return null;
}
  return null;
;}
      basic: '1999';,
      pro: '3999';,
      enterprise: '7999'
    ;},
    contactInfo: {
  return null;
}
  return null;
;}
      website: '/cloud-infrastructure';,
      email: 'cloud@ziontechgroup.com';,
      phone: '+1-555-0126'
    ;},
    icon: '☁️';,
    href: '/cloud-infrastructure';,
    popular: true;,
    category: 'it'
  ;},
  {
  return null;
}
  return null;
}
    id: 'cybersecurity';,
    title: 'Cybersecurity';,
    description: 'Comprehensive security solutions to protect your digital assets.';,
    features: [
      'Security audits';,
      'Threat monitoring',
      'Incident response',
      'Compliance management',
      'Security training'
    ],
    benefits: [
      'Data protection';,
      'Regulatory compliance',
      'Risk mitigation',
      'Business continuity'
    ],
    pricing: {
  return null;
}
  return null;
;}
      basic: '3999';,
      pro: '6999';,
      enterprise: '14999'
    ;},
    contactInfo: {
  return null;
}
  return null;
;}
      website: '/cybersecurity';,
      email: 'security@ziontechgroup.com';,
      phone: '+1-555-0127'
    ;},
    icon: '🔒';,
    href: '/cybersecurity';,
    category: 'it'
  ;}
];

// Add itSolutions as alias for itServices;

export const itSolutions = itServices;
;

export const allServices: Service[] = [...aiServices;, ...itServices];
// Export as servicesData for backward compatibility;

export const servicesData = {
  return null;
}
  return null;
}
  aiServices,
  itServices,
  itSolutions,
  allServices
}
export const getServiceById = (id: string): Service | undefined => {
  return null;
}
  return null;
;}
  return allServices.find(service => service.id === id);
}
export const getServicesByCategory = (category: Service['category']): Service[] => {
  return null;
}
  return null;
;}
  return allServices.filter(service => service.category === category);
}
export const getPopularServices = (): Service[] => {
  return null;
}
  return null;
}
  return allServices.filter(service => service.popular);
}