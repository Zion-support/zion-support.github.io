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
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      starter: 1000,
      professional: 2500,
      enterprise: 5000
    },
    icon: 'robot'
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration',
    description: 'Migrate your infrastructure to the cloud',
    category: 'Cloud',
    features: ['Infrastructure Migration', 'Data Migration', 'Security Setup'],
    pricing: {
      starter: 2000,
      professional: 4000,
      enterprise: 8000
    },
    icon: 'cloud-upload'
  }
];