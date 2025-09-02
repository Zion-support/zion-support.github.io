export interface AIEmergingTechService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  category: string;
  targetAudience: string[];
  useCases: string[];
  technicalRequirements: string[];
  integrationOptions: string[];
  supportLevel: string;
  documentation: string;
  community: string;
  pricingModel: string;
  freeTrial: boolean;
  freeTrialDuration: string;
  refundPolicy: string;
  contactInfo: {
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

export const aiEmergingTechServices: AIEmergingTechService[] = [
  // AI-Powered Video Generation Platform
  {
    id: 'ai-video-generation-platform',
    name: 'AI Video Generation Platform',
    tagline: 'Create professional videos with AI in minutes',
    price: '$499',
    period: '/month',
    description: 'Advanced AI-powered video generation platform that creates professional-quality videos from text, images, and audio inputs. Perfect for marketers, content creators, and businesses.',
    features: [
      'Text-to-video generation',
      'Image-to-video conversion',
      'AI voice synthesis',
      'Automatic scene generation',
      'Professional templates library',
      'Multi-language support',
      '4K video export',
      'Brand customization',
      'Social media optimization',
      'API access for developers'
    ],
    category: 'AI Video Generation',
    targetAudience: ['Content Creators', 'Marketers', 'Businesses', 'Agencies'],
    useCases: [
      'Marketing videos',
      'Social media content',
      'Product demos',
      'Training videos',
      'Explainer videos'
    ],
    technicalRequirements: [
      'Modern web browser',
      'Stable internet connection',
      'API key for integration'
    ],
    integrationOptions: [
      'REST API',
      'Webhook support',
      'SDK for popular languages',
      'Zapier integration'
    ],
    supportLevel: '24/7 Premium Support',
    documentation: 'Comprehensive API docs and tutorials',
    community: 'Active Discord community with 10k+ members',
    pricingModel: 'Subscription-based',
    freeTrial: true,
    freeTrialDuration: '14 days',
    refundPolicy: '30-day money-back guarantee',
    contactInfo: {
      email: 'support@aivideogen.com',
      address: 'San Francisco, CA',
      website: 'https://aivideogen.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully functional platform with 50k+ active users',
    launchDate: '2024-01-15',
    customers: 50000,
    rating: 4.8,
    reviews: 1250
  },
  
  // AI-Powered Code Generation Platform
  {
    id: 'ai-code-generation-platform',
    name: 'AI Code Generation Platform',
    tagline: 'Generate production-ready code with AI',
    price: '$299',
    period: '/month',
    description: 'Revolutionary AI platform that generates clean, production-ready code from natural language descriptions. Supports multiple programming languages and frameworks.',
    features: [
      'Natural language to code',
      'Multi-language support',
      'Code review and optimization',
      'Test generation',
      'Documentation generation',
      'Version control integration',
      'CI/CD pipeline setup',
      'Security scanning',
      'Performance optimization',
      'Team collaboration tools'
    ],
    category: 'AI Code Generation',
    targetAudience: ['Developers', 'Software Engineers', 'Tech Teams', 'Startups'],
    useCases: [
      'Rapid prototyping',
      'Code refactoring',
      'Test automation',
      'Documentation',
      'Legacy code modernization'
    ],
    technicalRequirements: [
      'Git repository',
      'IDE integration',
      'API access'
    ],
    integrationOptions: [
      'VS Code extension',
      'GitHub integration',
      'Slack notifications',
      'Jira integration'
    ],
    supportLevel: 'Priority Support',
    documentation: 'Extensive documentation with examples',
    community: 'Developer community with 25k+ members',
    pricingModel: 'Subscription-based',
    freeTrial: true,
    freeTrialDuration: '7 days',
    refundPolicy: '14-day money-back guarantee',
    contactInfo: {
      email: 'dev@aicodegen.com',
      address: 'Austin, TX',
      website: 'https://aicodegen.com'
    },
    realImplementation: true,
    implementationDetails: 'Production platform with 100k+ developers',
    launchDate: '2024-02-01',
    customers: 100000,
    rating: 4.9,
    reviews: 2100
  }
];