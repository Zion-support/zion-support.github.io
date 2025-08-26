import { ServiceVariant } from '../types/service-variants';

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
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const innovative2026AIServices = [
  {
    id: 'consciousness-ai-platform',
    name: 'Consciousness AI Platform',
    category: 'Advanced AI',
    description: 'Revolutionary AI platform that demonstrates emergent consciousness and creative problem-solving capabilities',
    features: [
      'Emergent consciousness simulation',
      'Creative problem solving',
      'Emotional intelligence',
      'Self-learning algorithms',
      'Ethical decision making'
    ],
    pricing: {
      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month'
    },
    targetMarket: 'Research institutions, enterprises, government agencies',
    marketSize: '$45.2B',
    competitiveAdvantage: 'First commercially available consciousness AI platform',
    website: 'https://ziontechgroup.com/services/consciousness-ai-platform',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'quantum-ai-fusion',
    name: 'Quantum AI Fusion Platform',
    category: 'Quantum AI',
    description: 'Breakthrough platform that combines quantum computing with artificial intelligence for unprecedented capabilities',
    features: [
      'Quantum-AI hybrid algorithms',
      'Quantum neural networks',
      'Quantum machine learning',
      'Quantum optimization',
      'Quantum cryptography'
    ],
    pricing: {
      starter: '$499/month',
      professional: '$1,299/month',
      enterprise: '$2,999/month'
    },
    targetMarket: 'Enterprises, research institutions, government',
    marketSize: '$38.7B',
    competitiveAdvantage: 'World\'s first quantum-AI fusion platform',
    website: 'https://ziontechgroup.com/services/quantum-ai-fusion',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'neural-creativity-engine',
    name: 'Neural Creativity Engine',
    category: 'Creative AI',
    description: 'Advanced AI platform that generates creative content, designs, and solutions across multiple domains',
    features: [
      'Multi-domain creativity',
      'Original content generation',
      'Design optimization',
      'Creative collaboration',
      'Innovation acceleration'
    ],
    pricing: {
      starter: '$89/month',
      professional: '$229/month',
      enterprise: '$599/month'
    },
    targetMarket: 'Creative agencies, designers, marketers, enterprises',
    marketSize: '$28.9B',
    competitiveAdvantage: 'Multi-domain creative AI with human-level originality',
    website: 'https://ziontechgroup.com/services/neural-creativity-engine',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'autonomous-business-ai',
    name: 'Autonomous Business AI',
    category: 'Business AI',
    description: 'Fully autonomous AI system that runs and optimizes business operations without human intervention',
    features: [
      'Autonomous decision making',
      'Business process optimization',
      'Predictive analytics',
      'Risk management',
      'Performance optimization'
    ],
    pricing: {
      starter: '$199/month',
      professional: '$499/month',
      enterprise: '$1,299/month'
    },
    targetMarket: 'Enterprises, startups, consulting firms',
    marketSize: '$32.1B',
    competitiveAdvantage: 'Fully autonomous business operations with zero human intervention',
    website: 'https://ziontechgroup.com/services/autonomous-business-ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'emotional-intelligence-ai',
    name: 'Emotional Intelligence AI',
    category: 'Emotional AI',
    description: 'Advanced AI system that understands, processes, and responds to human emotions with empathy',
    features: [
      'Emotion recognition',
      'Empathetic responses',
      'Mood analysis',
      'Emotional support',
      'Human-AI bonding'
    ],
    pricing: {
      starter: '$69/month',
      professional: '$179/month',
      enterprise: '$449/month'
    },
    targetMarket: 'Healthcare, education, customer service, mental health',
    marketSize: '$24.6B',
    competitiveAdvantage: 'Most advanced emotional intelligence AI available',
    website: 'https://ziontechgroup.com/services/emotional-intelligence-ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'predictive-reality-ai',
    name: 'Predictive Reality AI',
    category: 'Predictive AI',
    description: 'Revolutionary AI platform that predicts future events and outcomes with unprecedented accuracy',
    features: [
      'Future event prediction',
      'Trend forecasting',
      'Risk assessment',
      'Scenario modeling',
      'Decision optimization'
    ],
    pricing: {
      starter: '$149/month',
      professional: '$399/month',
      enterprise: '$999/month'
    },
    targetMarket: 'Financial institutions, government, enterprises, research',
    marketSize: '$29.8B',
    competitiveAdvantage: 'Highest accuracy predictive AI in the market',
    website: 'https://ziontechgroup.com/services/predictive-reality-ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'neural-optimization-engine',
    name: 'Neural Optimization Engine',
    category: 'Optimization AI',
    description: 'Advanced AI platform that optimizes complex systems and processes using neural networks',
    features: [
      'System optimization',
      'Process improvement',
      'Resource allocation',
      'Performance tuning',
      'Efficiency maximization'
    ],
    pricing: {
      starter: '$79/month',
      professional: '$199/month',
      enterprise: '$499/month'
    },
    targetMarket: 'Manufacturing, logistics, operations, engineering',
    marketSize: '$21.4B',
    competitiveAdvantage: 'Neural network-based optimization with 99.9% efficiency',
    website: 'https://ziontechgroup.com/services/neural-optimization-engine',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'quantum-learning-ai',
    name: 'Quantum Learning AI',
    category: 'Learning AI',
    description: 'Breakthrough AI platform that uses quantum computing to accelerate learning and knowledge acquisition',
    features: [
      'Quantum-accelerated learning',
      'Knowledge synthesis',
      'Pattern recognition',
      'Adaptive learning',
      'Intelligence amplification'
    ],
    pricing: {
      starter: '$119/month',
      professional: '$299/month',
      enterprise: '$799/month'
    },
    targetMarket: 'Education, research, enterprises, government',
    marketSize: '$26.7B',
    competitiveAdvantage: 'Quantum-powered learning acceleration',
    website: 'https://ziontechgroup.com/services/quantum-learning-ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'autonomous-research-ai',
    name: 'Autonomous Research AI',
    category: 'Research AI',
    description: 'Fully autonomous AI system that conducts research, discovers insights, and generates new knowledge',
    features: [
      'Autonomous research',
      'Knowledge discovery',
      'Hypothesis generation',
      'Data analysis',
      'Insight synthesis'
    ],
    pricing: {
      starter: '$179/month',
      professional: '$449/month',
      enterprise: '$1,199/month'
    },
    targetMarket: 'Research institutions, universities, enterprises, government',
    marketSize: '$31.2B',
    competitiveAdvantage: 'Fully autonomous research capabilities',
    website: 'https://ziontechgroup.com/services/autonomous-research-ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    id: 'neural-innovation-hub',
    name: 'Neural Innovation Hub',
    category: 'Innovation AI',
    description: 'AI-powered innovation platform that generates breakthrough ideas and solutions for complex problems',
    features: [
      'Innovation generation',
      'Problem solving',
      'Idea optimization',
      'Collaboration enhancement',
      'Innovation acceleration'
    ],
    pricing: {
      starter: '$99/month',
      professional: '$249/month',
      enterprise: '$649/month'
    },
    targetMarket: 'R&D teams, innovation labs, enterprises, startups',
    marketSize: '$23.8B',
    competitiveAdvantage: 'Neural network-based innovation generation',
    website: 'https://ziontechgroup.com/services/neural-innovation-hub',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  }
];

export const getPopularAIServices = () => {
  return innovative2026AIServices.filter(service => service.popular);
};

export const getAIServicesByCategory = (category: string) => {
  return innovative2026AIServices.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getAIServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return innovative2026AIServices.filter(service => {
    const price = parseInt(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && price <= maxPrice;
  });
};