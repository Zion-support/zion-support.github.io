export interface NextGenAIService {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  category: 'ai' | 'machine-learning' | 'deep-learning' | 'nlp' | 'computer-vision' | 'autonomous-systems' | 'ai-ethics' | 'ai-research';
  features: string[];
  benefits: string[];
  useCases: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  estimatedTime: string;
  technologies: string[];
  image?: string;
  aiScore: number;
  marketPrice: string;
  contactLink: string;
  status: 'active' | 'beta' | 'coming-soon';
  researchLevel: 'production' | 'research' | 'experimental';
  ethicalCompliance: string[];
}

export const NEXT_GEN_AI_SERVICES_2025: NextGenAIService[] = [
  {
    id: 'autonomous-ai-systems',
    title: 'Autonomous AI Systems',
    description: 'Self-learning and self-optimizing artificial intelligence systems',
    longDescription: 'Develop truly autonomous AI systems that learn, adapt, and optimize themselves. Our platform enables the creation of AI agents that can operate independently and continuously improve.',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-600',
    category: 'autonomous-systems',
    features: [
      'Self-learning algorithms',
      'Autonomous decision making',
      'Continuous optimization',
      'Adaptive behavior',
      'Goal-oriented learning',
      'Ethical constraint enforcement'
    ],
    benefits: [
      'Reduced human intervention',
      'Continuous improvement',
      'Adaptive problem solving',
      'Scalable AI operations'
    ],
    useCases: [
      'Autonomous vehicles',
      'Smart cities',
      'Industrial automation',
      'Robotic systems'
    ],
    pricing: {
      starter: '$2,999/month',
      professional: '$7,999/month',
      enterprise: '$19,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '8-16 weeks',
    technologies: ['Reinforcement Learning', 'Deep Learning', 'Neural Networks', 'Python', 'PyTorch', 'TensorFlow'],
    aiScore: 98,
    marketPrice: '$2,999-$19,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'beta',
    researchLevel: 'research',
    ethicalCompliance: ['AI Safety', 'Transparency', 'Accountability', 'Bias Prevention']
  },
  {
    id: 'advanced-nlp-platform',
    title: 'Advanced Natural Language Processing',
    description: 'State-of-the-art NLP with multilingual understanding and generation',
    longDescription: 'Break language barriers with our advanced NLP platform. Features multilingual understanding, context-aware generation, and domain-specific language models.',
    icon: 'MessageCircle',
    color: 'from-blue-500 to-indigo-600',
    category: 'nlp',
    features: [
      'Multilingual understanding',
      'Context-aware generation',
      'Domain-specific models',
      'Sentiment analysis',
      'Entity recognition',
      'Language translation'
    ],
    benefits: [
      'Global communication',
      'Improved customer service',
      'Content localization',
      'Multilingual support'
    ],
    useCases: [
      'Global businesses',
      'Customer service',
      'Content creation',
      'Language learning'
    ],
    pricing: {
      starter: '$799/month',
      professional: '$1,999/month',
      enterprise: '$4,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '4-8 weeks',
    technologies: ['GPT-4', 'BERT', 'Transformer Models', 'Python', 'Hugging Face', 'FastAPI'],
    aiScore: 96,
    marketPrice: '$799-$4,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    researchLevel: 'production',
    ethicalCompliance: ['Bias Detection', 'Content Filtering', 'Privacy Protection', 'Transparency']
  },
  {
    id: 'computer-vision-ai',
    title: 'Advanced Computer Vision AI',
    description: 'Next-generation computer vision with 3D understanding and spatial awareness',
    longDescription: 'See the world through AI eyes with our advanced computer vision platform. Features 3D understanding, spatial awareness, and real-time object recognition.',
    icon: 'Eye',
    color: 'from-green-500 to-emerald-600',
    category: 'computer-vision',
    features: [
      '3D object recognition',
      'Spatial understanding',
      'Real-time processing',
      'Multi-modal vision',
      'Depth perception',
      'Motion tracking'
    ],
    benefits: [
      'Enhanced visual understanding',
      'Improved accuracy',
      'Real-time processing',
      '3D spatial awareness'
    ],
    useCases: [
      'Autonomous vehicles',
      'Robotics',
      'Augmented reality',
      'Security systems'
    ],
    pricing: {
      starter: '$1,299/month',
      professional: '$3,299/month',
      enterprise: '$7,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '6-12 weeks',
    technologies: ['OpenCV', 'PyTorch', 'TensorFlow', 'CUDA', '3D Vision', 'Computer Vision'],
    aiScore: 97,
    marketPrice: '$1,299-$7,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    researchLevel: 'production',
    ethicalCompliance: ['Privacy Protection', 'Bias Prevention', 'Transparency', 'Accountability']
  },
  {
    id: 'ai-ethics-platform',
    title: 'AI Ethics & Governance Platform',
    description: 'Comprehensive AI ethics framework and governance tools',
    longDescription: 'Ensure responsible AI development with our comprehensive ethics platform. Features bias detection, fairness metrics, transparency tools, and governance frameworks.',
    icon: 'Shield',
    color: 'from-teal-500 to-cyan-600',
    category: 'ai-ethics',
    features: [
      'Bias detection & mitigation',
      'Fairness metrics',
      'Transparency tools',
      'Governance frameworks',
      'Ethical guidelines',
      'Compliance monitoring'
    ],
    benefits: [
      'Responsible AI development',
      'Regulatory compliance',
      'Reduced bias',
      'Trustworthy AI systems'
    ],
    useCases: [
      'AI development teams',
      'Regulatory bodies',
      'Ethics committees',
      'Compliance officers'
    ],
    pricing: {
      starter: '$599/month',
      professional: '$1,499/month',
      enterprise: '$3,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '2-6 weeks',
    technologies: ['Python', 'Fairness Metrics', 'Bias Detection', 'Explainable AI', 'Governance Tools'],
    aiScore: 94,
    marketPrice: '$599-$3,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    researchLevel: 'production',
    ethicalCompliance: ['Ethical Guidelines', 'Bias Prevention', 'Transparency', 'Accountability']
  },
  {
    id: 'quantum-ai-hybrid',
    title: 'Quantum-Classical AI Hybrid',
    description: 'Hybrid quantum-classical AI for complex problem solving',
    longDescription: 'Combine the power of quantum computing with classical AI to solve previously intractable problems. Our hybrid approach delivers exponential speedups for specific applications.',
    icon: 'Rocket',
    color: 'from-violet-500 to-fuchsia-600',
    category: 'ai-research',
    features: [
      'Quantum neural networks',
      'Hybrid algorithms',
      'Quantum advantage',
      'Classical AI integration',
      'Optimization problems',
      'Research tools'
    ],
    benefits: [
      'Exponential speedups',
      'New problem-solving capabilities',
      'Research breakthroughs',
      'Competitive advantage'
    ],
    useCases: [
      'Pharmaceutical research',
      'Financial modeling',
      'Climate science',
      'Materials science'
    ],
    pricing: {
      starter: '$4,999/month',
      professional: '$12,999/month',
      enterprise: '$29,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '12-20 weeks',
    technologies: ['Qiskit', 'Cirq', 'PyTorch', 'TensorFlow', 'Quantum Hardware', 'Hybrid Algorithms'],
    aiScore: 99,
    marketPrice: '$4,999-$29,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'beta',
    researchLevel: 'research',
    ethicalCompliance: ['AI Safety', 'Quantum Ethics', 'Research Ethics', 'Transparency']
  },
  {
    id: 'federated-learning-platform',
    title: 'Federated Learning Platform',
    description: 'Privacy-preserving distributed machine learning',
    longDescription: 'Train AI models across distributed data sources without sharing raw data. Our federated learning platform ensures privacy while enabling collaborative AI development.',
    icon: 'Network',
    color: 'from-orange-500 to-red-600',
    category: 'machine-learning',
    features: [
      'Distributed training',
      'Privacy preservation',
      'Secure aggregation',
      'Model synchronization',
      'Performance monitoring',
      'Collaborative learning'
    ],
    benefits: [
      'Privacy preservation',
      'Collaborative learning',
      'Reduced data transfer',
      'Regulatory compliance'
    ],
    useCases: [
      'Healthcare collaboration',
      'Financial services',
      'Cross-organization AI',
      'Privacy-sensitive domains'
    ],
    pricing: {
      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: '$12,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '8-16 weeks',
    technologies: ['Federated Learning', 'Homomorphic Encryption', 'Secure Multi-party Computation', 'Python', 'PyTorch', 'TensorFlow'],
    aiScore: 95,
    marketPrice: '$1,999-$12,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    researchLevel: 'production',
    ethicalCompliance: ['Privacy Protection', 'Data Security', 'Transparency', 'Accountability']
  },
  {
    id: 'ai-research-platform',
    title: 'AI Research & Development Platform',
    description: 'Comprehensive platform for AI research and experimentation',
    longDescription: 'Accelerate your AI research with our comprehensive platform. Features experimental tools, research frameworks, and collaboration tools for AI researchers.',
    icon: 'TestTube',
    color: 'from-indigo-500 to-purple-600',
    category: 'ai-research',
    features: [
      'Experimental frameworks',
      'Research tools',
      'Collaboration features',
      'Version control',
      'Experiment tracking',
      'Result analysis'
    ],
    benefits: [
      'Faster research cycles',
      'Better collaboration',
      'Reproducible results',
      'Research acceleration'
    ],
    useCases: [
      'AI research labs',
      'Academic institutions',
      'Corporate R&D',
      'Startup research'
    ],
    pricing: {
      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '2-4 weeks',
    technologies: ['Research Tools', 'Experiment Tracking', 'Version Control', 'Collaboration Tools', 'Python', 'Jupyter'],
    aiScore: 93,
    marketPrice: '$299-$1,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    researchLevel: 'research',
    ethicalCompliance: ['Research Ethics', 'Transparency', 'Reproducibility', 'Open Science']
  },
  {
    id: 'ai-optimization-engine',
    title: 'AI Optimization Engine',
    description: 'Advanced optimization algorithms for complex decision making',
    longDescription: 'Solve complex optimization problems with our AI-powered engine. Features genetic algorithms, neural optimization, and multi-objective optimization for business applications.',
    icon: 'Target',
    color: 'from-yellow-500 to-orange-600',
    category: 'machine-learning',
    features: [
      'Genetic algorithms',
      'Neural optimization',
      'Multi-objective optimization',
      'Constraint handling',
      'Real-time optimization',
      'Scalable algorithms'
    ],
    benefits: [
      'Optimal solutions',
      'Faster decision making',
      'Cost optimization',
      'Resource efficiency'
    ],
    useCases: [
      'Supply chain optimization',
      'Resource allocation',
      'Scheduling problems',
      'Portfolio optimization'
    ],
    pricing: {
      starter: '$899/month',
      professional: '$2,299/month',
      enterprise: '$5,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '4-8 weeks',
    technologies: ['Genetic Algorithms', 'Neural Networks', 'Optimization Libraries', 'Python', 'SciPy', 'NumPy'],
    aiScore: 94,
    marketPrice: '$899-$5,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    researchLevel: 'production',
    ethicalCompliance: ['Fairness', 'Transparency', 'Bias Prevention', 'Accountability']
  }
];

export const getNextGenAIServicesByCategory = (category: string): NextGenAIService[] => {
  if (category === 'All') {
    return NEXT_GEN_AI_SERVICES_2025;
  }
  return NEXT_GEN_AI_SERVICES_2025.filter(service => service.category === category);
};

export const getAllNextGenAIServices = (): NextGenAIService[] => {
  return NEXT_GEN_AI_SERVICES_2025;
};