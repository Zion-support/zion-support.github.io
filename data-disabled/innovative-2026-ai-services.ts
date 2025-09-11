export interface Innovative2026AIService {
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
  targetAudience: string;
  realImplementation: boolean;
}

export const innovative2026AIServices: Innovative2026AIService[] = [
  {
    id: 'ai-2026-service',
    name: 'AI 2026 Service',
    tagline: 'Next generation AI service',
    price: '$99',
    period: '/month',
    description: 'Advanced AI service for 2026.',
    features: [
      'Advanced AI capabilities',
      'Real-time processing',
      'Scalable architecture',
    ],
    popular: true,
    icon: '🤖',
    color: 'purple',
    textColor: 'white',
    link: '/services/ai-2026-service',
    marketPosition: 'Leading',
    targetAudience: 'Enterprises',
    realImplementation: true,
  },
];
