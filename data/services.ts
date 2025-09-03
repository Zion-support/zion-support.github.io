export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
  icon?: string;
}

export const services: Service[] = [
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    description: 'Intelligent conversational AI for customer support and engagement',
    category: 'ai-services',
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-channel Support', 'Analytics Dashboard'],
    pricing: { basic: 99, premium: 299, enterprise: 999 }
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration',
    description: 'Seamless migration to cloud platforms with zero downtime',
    category: 'cloud-services',
    features: ['Zero Downtime', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
    pricing: { basic: 5000, premium: 15000, enterprise: 50000 }
  },
  {
    id: 'micro-saas-platform',
    name: 'Micro SaaS Platform',
    description: 'Custom software-as-a-service solutions for your business',
    category: 'micro-saas',
    features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'Analytics'],
    pricing: { basic: 2999, premium: 8999, enterprise: 29999 }
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Audit',
    description: 'Comprehensive security assessment and compliance review',
    category: 'cybersecurity',
    features: ['Vulnerability Assessment', 'Compliance Check', 'Security Recommendations', 'Ongoing Monitoring'],
    pricing: { basic: 2000, premium: 5000, enterprise: 15000 }
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Business intelligence and data insights for informed decision making',
    category: 'data-analytics',
    features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
    pricing: { basic: 1500, premium: 4000, enterprise: 12000 }
  },
  {
    id: 'iot-solutions',
    name: 'IoT Solutions',
    description: 'Internet of Things solutions for smart business operations',
    category: 'iot-solutions',
    features: ['Device Management', 'Data Collection', 'Real-time Monitoring', 'Automation'],
    pricing: { basic: 3000, premium: 8000, enterprise: 25000 }
  },
  {
    id: 'blockchain-development',
    name: 'Blockchain Development',
    description: 'Secure blockchain solutions for modern business needs',
    category: 'blockchain-solutions',
    features: ['Smart Contracts', 'Decentralized Apps', 'Security Audit', 'Integration'],
    pricing: { basic: 5000, premium: 15000, enterprise: 50000 }
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Modern, responsive web applications and websites',
    category: 'web-development',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Maintenance'],
    pricing: { basic: 2000, premium: 6000, enterprise: 20000 }
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    category: 'mobile-development',
    features: ['Cross-platform', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
    pricing: { basic: 5000, premium: 15000, enterprise: 50000 }
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation',
    description: 'Automated CI/CD pipelines and infrastructure management',
    category: 'devops',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Security Integration'],
    pricing: { basic: 3000, premium: 8000, enterprise: 25000 }
  }
];

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getAllServices = (): Service[] => {
  return services;
};

export const getCategories = (): string[] => {
  return [...new Set(services.map(service => service.category))];
};