export interface ITService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
}

export const cuttingEdgeITServices: ITService[] = [
  {
    id: '1',
    name: 'AI-Powered IT Operations',
    description: 'Intelligent IT operations management with predictive analytics',
    category: 'AI Operations',
    price: '$5,000/month',
    features: ['Predictive Analytics', 'Automated Incident Response', 'Performance Monitoring']
  }
];