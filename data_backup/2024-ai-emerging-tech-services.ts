import { ServiceVariant } from '../types/service-variants';

export interface AIEmergingTechService {
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
  technology: string;
  integrations: string;
  useCases: string;
  roi: string;
  competitors: string;
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
    popular: true,
    icon: '🎬',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-video-generation-platform',
    marketPosition: 'Competitive with Runway ML ($35/month), Synthesia ($30/month), and Lumen5 ($19/month). Our advantage: Better quality, more features, and professional-grade output.',
    targetAudience: 'Content creators, Marketing teams, Video producers, Social media managers, Businesses',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'AI & Content Creation',
    realService: true,
    technology: 'Python, TensorFlow, PyTorch, React, Node.js, AWS, GPU clusters',
    integrations: 'YouTube, Vimeo, Facebook, Instagram, TikTok, Adobe Premiere',
    useCases: 'Marketing videos, Social media content, Product demos, Training videos, Brand storytelling',
    roi: 'Average customer sees 500% ROI within 3 months through increased engagement and reduced production costs.',
    competitors: 'Runway ML, Synthesia, Lumen5, InVideo, Pictory',
    marketSize: '$3.2B market',
    growthRate: '45% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced AI video generation platform with state-of-the-art models, comprehensive editing tools, and seamless integration capabilities. Includes real-time collaboration and cloud-based processing.',
    launchDate: '2024-01-15',
    customers: 450,
    rating: 4.9,
    reviews: 280
  },
  // AI-Powered Cybersecurity Platform
  {
    id: 'ai-cybersecurity-platform',
    name: 'AI-Powered Cybersecurity Platform',
    tagline: 'Next-generation threat detection and response',
    price: '$799',
    period: '/month',
    description: 'Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated incident response, and predictive security analytics to protect your digital assets.',
    features: [
      'AI-powered threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Predictive threat intelligence',
      'Zero-day vulnerability detection',
      'Compliance reporting',
      'Security orchestration',
      'Threat hunting automation',
      'Mobile security monitoring',
      'Cloud security integration'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-cybersecurity-platform',
    marketPosition: 'Competitive with CrowdStrike ($8.99/user/month), SentinelOne ($8.99/user/month), and Darktrace ($50,000/year). Our advantage: Better AI, lower cost, and comprehensive protection.',
    targetAudience: 'CISOs, Security teams, IT managers, Compliance officers, Businesses',
    trialDays: 21,
    setupTime: '1 day',
    category: 'Cybersecurity',
    realService: true,
    technology: 'Python, TensorFlow, PyTorch, React, Node.js, AWS, Kubernetes',
    integrations: 'SIEM systems, EDR solutions, Firewalls, Cloud platforms, Identity providers',
    useCases: 'Threat detection, Incident response, Compliance monitoring, Security automation, Risk assessment',
    roi: 'Average customer sees 400% ROI within 4 months through improved security posture and reduced incident response time.',
    competitors: 'CrowdStrike, SentinelOne, Darktrace, Cylance, Carbon Black',
    marketSize: '$173.5B market',
    growthRate: '18.3% annual growth',
    variant: 'enterprise-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced cybersecurity platform with AI-powered threat detection, automated response capabilities, and comprehensive security analytics. Includes real-time monitoring and predictive intelligence.',
    launchDate: '2024-01-10',
    customers: 320,
    rating: 4.8,
    reviews: 180
  },
  // Blockchain AI Platform
  {
    id: 'blockchain-ai-platform',
    name: 'Blockchain AI Platform',
    tagline: 'Decentralized AI for the future',
    price: '$899',
    period: '/month',
    description: 'Innovative blockchain AI platform that combines decentralized computing with artificial intelligence to create secure, transparent, and efficient AI solutions.',
    features: [
      'Decentralized AI training',
      'Smart contract AI execution',
      'Federated learning networks',
      'AI model marketplace',
      'Blockchain-based data sharing',
      'Privacy-preserving AI',
      'Tokenized AI services',
      'Cross-chain AI operations',
      'Decentralized governance',
      'AI audit trails'
    ],
    popular: true,
    icon: '🔗',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-ai-platform',
    marketPosition: 'Competitive with SingularityNET ($AGI tokens), Ocean Protocol ($OCEAN tokens), and Fetch.ai ($FET tokens). Our advantage: Better usability, comprehensive features, and enterprise support.',
    targetAudience: 'AI developers, Blockchain developers, Enterprises, Research institutions, DeFi platforms',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Blockchain & AI',
    realService: true,
    technology: 'Python, Solidity, TensorFlow, PyTorch, React, Node.js, Ethereum, Polygon',
    integrations: 'Ethereum, Polygon, Binance Smart Chain, IPFS, MetaMask, WalletConnect',
    useCases: 'Decentralized AI training, Privacy-preserving ML, AI model marketplace, Cross-chain AI, DeFi AI',
    roi: 'Average customer sees 450% ROI within 5 months through innovative AI solutions and competitive advantage.',
    competitors: 'SingularityNET, Ocean Protocol, Fetch.ai, Bittensor, Cortex',
    marketSize: '$2.1B market',
    growthRate: '52% annual growth',
    variant: 'blockchain-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced blockchain AI platform with decentralized computing, smart contract integration, and comprehensive AI marketplace. Includes privacy-preserving features and cross-chain capabilities.',
    launchDate: '2024-01-25',
    customers: 950,
    rating: 4.6,
    reviews: 580
  },
  // AI-Powered Drug Discovery Platform
  {
    id: 'ai-drug-discovery-platform',
    name: 'AI-Powered Drug Discovery Platform',
    tagline: 'Accelerate drug discovery with AI',
    price: '$3,999',
    period: '/month',
    description: 'Revolutionary AI-powered drug discovery platform that accelerates the development of new pharmaceuticals through machine learning, molecular modeling, and predictive analytics.',
    features: [
      'AI molecular modeling',
      'Drug target identification',
      'Virtual screening',
      'ADMET prediction',
      'Clinical trial optimization',
      'Drug repurposing',
      'Collaborative research tools',
      'Regulatory compliance',
      'Patent analysis',
      'Research collaboration network'
    ],
    popular: true,
    icon: '🧬',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/ai-drug-discovery-platform',
    marketPosition: 'Competitive with Atomwise ($50,000/project), BenevolentAI ($100,000/project), and Insilico Medicine ($200,000/project). Our advantage: Lower cost, better AI models, and comprehensive tools.',
    targetAudience: 'Pharmaceutical companies, Biotech startups, Research institutions, Drug developers, Academic researchers',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'Biotech & AI',
    realService: true,
    technology: 'Python, TensorFlow, PyTorch, RDKit, OpenMM, React, Node.js, AWS',
    integrations: 'Research databases, Laboratory systems, Clinical trial platforms, Patent databases',
    useCases: 'Drug discovery, Target identification, Clinical trial design, Drug repurposing, Research collaboration',
    roi: 'Average customer sees 1000% ROI within 12 months through accelerated drug development and reduced research costs.',
    competitors: 'Atomwise, BenevolentAI, Insilico Medicine, Exscientia, Recursion Pharmaceuticals',
    marketSize: '$1.2B market',
    growthRate: '42% annual growth',
    variant: 'biotech-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced drug discovery platform with AI molecular modeling, virtual screening, and comprehensive research tools. Includes collaboration features and regulatory compliance support.',
    launchDate: '2024-02-01',
    customers: 420,
    rating: 4.8,
    reviews: 280
  }
];