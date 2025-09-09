export interface Revolutionary2030AIService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string[];
  realImplementation: boolean;
}

export const revolutionary2030AIServices: Revolutionary2030AIService[] = [
  {
    id: 'ai-2030-service',
    name: 'AI 2030 Service',
    tagline: 'Revolutionary AI service for 2030',
    price: '$199',
    period: '/month',
    description: 'A revolutionary AI service for 2030.',
    features: ['AI capabilities', 'Autonomous operation', 'Advanced analytics'],
    popular: true,
    icon: '🤖',
    color: 'purple',
    textColor: 'white',
    link: '/services/ai-2030-service',
    marketPosition: 'Revolutionary',
    targetAudience: ['Enterprises', 'Research institutions'],
    realImplementation: true
  }
];