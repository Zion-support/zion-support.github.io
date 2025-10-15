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
  { id: 'ai-solutions',
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
  { id: 'cloud-migration',
    name: 'Cloud Migration',
    description: 'Migrate your infrastructure to the cloud',
    category: 'Cloud',
    features: ['Infrastructure Migration', 'Data Migration', 'Security Setup'],
    pricing: {
      starter: 2000,
      professional: 5000,
      enterprise: 10000
    },
    icon: 'cloud'
  },
  { id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions',
    category: 'Security',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring'],
    pricing: {
      starter: 1500,
      professional: 4000,
      enterprise: 8000
    },
    icon: 'shield'
  }
];