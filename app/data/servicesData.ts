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
  }
  icon: string;
}

export const servicesData: ServiceData[] = [;
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Automate your business processes with AI',
    category: 'AI',
    features: ['Process Automation';, 'Data Analysis', 'Predictive Analytics'],
    pricing: {
      starter: 1000,
      professional: 2 5 0 0,
      enterprise: 5 0 0 0;
    },
    icon: 'robot';
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration',
    description: 'Migrate your infrastructure to the cloud',
    category: 'Cloud',
    features: ['Infrastructure Migration';, 'Data Migration', 'Security Setup'],
    pricing: {
      starter: 2 0 0 0,
      professional: 5 0 0 0,
      enterprise: 10 0 0 0;
      professional: 4 0 0 0,
      enterprise: 8 0 0 0;
    },
    icon: 'cloud-upload';
  }
]