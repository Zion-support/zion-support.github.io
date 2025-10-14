'use client';

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing?: {
    basic: number;
    pro: number;
    enterprise: number;
  };
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Automate your business processes with cutting-edge AI technology',
    category: 'AI Solutions',
    features: ['Process Automation', 'Workflow Optimization', 'Smart Analytics'],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 999
    }
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for your business',
    category: 'Infrastructure',
    features: ['Cloud Migration', 'Security', 'Monitoring'],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1499
    }
  }
];

export default services;