export interface ServiceData {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  icon: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Advanced AI solutions to automate and optimize your business processes.',
    category: 'AI',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: {
      starter: 1000,
      professional: 2500,
      enterprise: 5000
    },
    icon: 'robot'
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses.',
    category: 'Infrastructure',
    features: ['Cloud Migration', 'Auto-scaling', 'Security Monitoring', 'Backup & Recovery'],
    pricing: {
      starter: 2000,
      professional: 5000,
      enterprise: 10000
    },
    icon: 'cloud-upload'
  }
]