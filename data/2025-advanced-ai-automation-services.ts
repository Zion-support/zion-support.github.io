export interface AdvancedAIAutomationService {
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

export const advancedAIAutomationServices: AdvancedAIAutomationService[] = [
  {
    id: 'advanced-ai-automation',
    name: 'Advanced AI Automation',
    tagline: 'Advanced AI automation service for 2025',
    price: '$199',
    period: '/month',
    description: 'Advanced AI automation service for 2025.',
    features: ['AI automation', 'Process optimization', 'Advanced analytics'],
    popular: true,
    icon: '🤖',
    color: 'purple',
    textColor: 'white',
    link: '/services/advanced-ai-automation',
    marketPosition: 'Leading',
    targetAudience: 'Enterprises',
    realImplementation: true
  }
];