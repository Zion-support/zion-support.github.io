export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  features: string[];
}

export const enhancedServices: Service[] = [
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    description: 'Intelligent chatbot solution',
    category: 'AI',
    price: 99,
    features: ['Natural Language Processing', 'Multi-language Support', 'Custom Training']
  }
];
