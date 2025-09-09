export interface RealQ4Service {
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
  category: string;
  realImplementation: boolean;
}

export const real2025Q4Additions: RealQ4Service[] = [
  {
    id: 'q4-ai-service',
    name: 'Q4 AI Service',
    tagline: 'Latest AI service for Q4 2025',
    price: '$199',
    period: '/month',
    description: 'Advanced AI service launched in Q4 2025',
    features: [
      'Advanced AI capabilities',
      'Real-time processing',
      'Enterprise integration'
    ],
    popular: true,
    icon: '🚀',
    color: 'from-green-500 to-blue-600',
    textColor: 'text-white',
    link: '/services/q4-ai-service',
    category: 'AI Services',
    realImplementation: true
  }
];