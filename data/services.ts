export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered content generation platform for blogs, social media, and marketing materials with GPT-4 integration.',
    features: [
      'Multi-language content generation',
      'SEO-optimized content',
      'Brand voice customization',
      'Content scheduling',
      'Analytics dashboard',
      'API integration',
      'Plagiarism detection',
      'Content templates library'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO optimization built-in',
      'Multi-platform publishing',
      'Cost-effective content marketing'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing copywriting'
    ],
    technologies: [
      'OpenAI GPT-4',
      'React',
      'Node.js',
      'PostgreSQL',
      'Stripe'
    ],
    link: 'https://ziontechgroup.com/services/ai-content-generator',
    icon: '📝'
  },
  {
    id: 'ai-meeting-notes',
    name: 'AI Meeting Notes Assistant',
    category: 'micro-saas',
    description: 'Intelligent meeting transcription and note-taking system with action item extraction and follow-up reminders.',
    features: [
      'Real-time transcription',
      'Action item extraction',
      'Meeting summaries',
      'Follow-up reminders',
      'Integration with calendar',
      'Multi-language support',
      'Custom templates',
      'Team collaboration'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 99,
      currency: 'USD'
    },
    benefits: [
      'Never miss important details',
      'Automated follow-ups',
      'Improved meeting efficiency',
      'Better team alignment',
      'Reduced manual work'
    ],
    useCases: [
      'Team meetings',
      'Client calls',
      'Project reviews',
      'Training sessions',
      'Board meetings'
    ],
    technologies: [
      'OpenAI Whisper',
      'React',
      'Node.js',
      'MongoDB',
      'WebRTC'
    ],
    link: 'https://ziontechgroup.com/services/ai-meeting-notes',
    icon: '🎤'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Platform',
    category: 'micro-saas',
    description: 'Intelligent customer support system with automated responses, ticket routing, and sentiment analysis.',
    features: [
      'Automated responses',
      'Ticket routing',
      'Sentiment analysis',
      'Knowledge base integration',
      'Multi-channel support',
      'Performance analytics',
      'Custom workflows',
      'API integration'
    ],
    pricing: {
      starter: 39,
      professional: 89,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Faster response times',
      'Reduced support costs',
      'Improved customer satisfaction',
      'Scalable operations'
    ],
    useCases: [
      'E-commerce support',
      'SaaS customer service',
      'Technical support',
      'Sales inquiries',
      'General customer service'
    ],
    technologies: [
      'OpenAI GPT-4',
      'React',
      'Node.js',
      'PostgreSQL',
      'Redis'
    ],
    link: 'https://ziontechgroup.com/services/ai-customer-support',
    icon: '🤖'
  }
];