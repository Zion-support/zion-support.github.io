// servicesData - Service data and utilities
export interface ServiceData {
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

export const servicesData: ServiceData[] = [
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Automate your business processes with AI',
    category: 'AI',
    features: ['Process Automation', 'Data Analysis', 'Predictive Analytics'],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 999
    }
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom web applications and websites',
    category: 'Development',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning'],
    pricing: {
      basic: 199,
      pro: 599,
      enterprise: 1999
    }
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps',
    category: 'Development',
    features: ['iOS Development', 'Android Development', 'Cross-platform'],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 2499
    }
  }
];

export default servicesData;