export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
  category: string;
}

export const services: Service[] = [
  {
    id: 'ai-ops',
    name: 'AI Operations',
    description: 'Intelligent IT operations with AI-powered automation and monitoring',
    icon: '🤖',
    features: [
      'Proactive monitoring',
      'Automated remediation',
      'Predictive analytics',
      '24/7 monitoring',
      'Self-healing systems',
      'Security automation'
    ],
    pricing: {
      basic: 999,
      premium: 2499,
      enterprise: 4999
    },
    category: 'AI & Automation'
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration',
    description: 'Seamless migration to cloud infrastructure with zero downtime',
    icon: '☁️',
    features: [
      'Zero-downtime migration',
      'Cost optimization',
      'Security compliance',
      'Performance monitoring',
      'Backup & recovery',
      '24/7 support'
    ],
    pricing: {
      basic: 1999,
      premium: 3999,
      enterprise: 7999
    },
    category: 'Cloud Services'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Advanced data analytics and business intelligence solutions',
    icon: '📊',
    features: [
      'Real-time analytics',
      'Predictive modeling',
      'Custom dashboards',
      'Data visualization',
      'Machine learning',
      'Automated reporting'
    ],
    pricing: {
      basic: 1499,
      premium: 2999,
      enterprise: 5999
    },
    category: 'Data & Analytics'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive cybersecurity solutions to protect your business',
    icon: '🔒',
    features: [
      'Threat detection',
      'Vulnerability assessment',
      'Security monitoring',
      'Incident response',
      'Compliance management',
      'Security training'
    ],
    pricing: {
      basic: 1299,
      premium: 2499,
      enterprise: 4999
    },
    category: 'Security'
  },
  {
    id: 'devops',
    name: 'DevOps Solutions',
    description: 'Streamline your development and deployment processes',
    icon: '⚙️',
    features: [
      'CI/CD pipelines',
      'Infrastructure as code',
      'Container orchestration',
      'Monitoring & logging',
      'Automated testing',
      'Performance optimization'
    ],
    pricing: {
      basic: 1799,
      premium: 3499,
      enterprise: 6999
    },
    category: 'Development'
  },
  {
    id: 'microservices',
    name: 'Microservices Architecture',
    description: 'Modern microservices architecture for scalable applications',
    icon: '🏗️',
    features: [
      'Service decomposition',
      'API gateway',
      'Service mesh',
      'Load balancing',
      'Auto-scaling',
      'Monitoring & tracing'
    ],
    pricing: {
      basic: 2199,
      premium: 4299,
      enterprise: 8499
    },
    category: 'Architecture'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(services.map(service => service.category))];
};