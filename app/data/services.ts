export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'ai-analytics',
    name: 'AI Analytics',
    description: 'Advanced AI-powered analytics solutions',
    category: 'AI',
    features: ['Real-time analysis', 'Predictive insights', 'Custom dashboards']
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions',
    category: 'Infrastructure',
    features: ['Auto-scaling', 'High availability', 'Cost optimization']
  }
];