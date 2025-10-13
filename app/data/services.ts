/**
 * Services Data
 * Centralized service definitions for the Zion Tech Group application
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  icon: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'ai-development',
    name: 'AI Development',
    description: 'Custom AI solutions tailored to your business needs',
    category: 'AI Services',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000,
    },
    icon: 'brain',
    popular: true,
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    category: 'Development',
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
    pricing: {
      basic: 3000,
      pro: 8000,
      enterprise: 25000,
    },
    icon: 'code',
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    category: 'Infrastructure',
    features: ['AWS/Azure/GCP', 'Migration', 'Monitoring', 'Security'],
    pricing: {
      basic: 2000,
      pro: 6000,
      enterprise: 20000,
    },
    icon: 'cloud',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets',
    category: 'Security',
    features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring'],
    pricing: {
      basic: 4000,
      pro: 12000,
      enterprise: 35000,
    },
    icon: 'shield',
    popular: true,
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights',
    category: 'Analytics',
    features: ['Data Visualization', 'Business Intelligence', 'Reporting', 'Predictive Modeling'],
    pricing: {
      basic: 2500,
      pro: 7000,
      enterprise: 20000,
    },
    icon: 'chart',
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    category: 'Development',
    features: ['iOS/Android', 'React Native', 'Flutter', 'App Store Optimization'],
    pricing: {
      basic: 4000,
      pro: 10000,
      enterprise: 30000,
    },
    icon: 'smartphone',
  },
  {
    id: 'devops',
    name: 'DevOps Services',
    description: 'Streamline your development and deployment processes',
    category: 'Infrastructure',
    features: ['CI/CD', 'Containerization', 'Monitoring', 'Automation'],
    pricing: {
      basic: 3000,
      pro: 8000,
      enterprise: 25000,
    },
    icon: 'settings',
  },
  {
    id: 'consulting',
    name: 'IT Consulting',
    description: 'Strategic technology consulting to drive your business forward',
    category: 'Consulting',
    features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training'],
    pricing: {
      basic: 1500,
      pro: 4000,
      enterprise: 12000,
    },
    icon: 'users',
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular);
};

export default services;