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
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Automate your business processes with AI',
    category: 'AI',
    features: ['Process Automation', 'Data Analysis', 'Predictive Analytics'],
    pricing: {
      starter: 2000,
      professional: 8000,
      enterprise: 25000
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
      starter: 5000,
      professional: 15000,
      enterprise: 50000
    },
    icon: 'cloud-upload'
  }
];