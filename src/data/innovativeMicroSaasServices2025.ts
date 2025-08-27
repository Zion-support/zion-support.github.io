export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  category: 'ai' | 'cloud' | 'security' | 'iot' | 'quantum' | 'infrastructure' | 'consulting' | 'transformation' | 'biotech' | 'fintech' | 'healthtech' | 'edutech';
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
}

export const INNOVATIVE_MICRO_SAAS_SERVICES_2025: MicroSaasService[] = [
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence Platform',
    description: 'Next-generation AI-powered business intelligence with predictive analytics',
    longDescription: 'Transform your business data into actionable insights with our advanced AI Business Intelligence platform. Features real-time analytics, predictive modeling, and automated reporting.',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-600',
    category: 'ai',
    features: [
      'Real-time data visualization',
      'Predictive analytics & forecasting',
      'Natural language query interface',
      'Automated report generation',
      'Multi-source data integration',
      'AI-powered anomaly detection'
    ],
    benefits: [
      '50% faster decision making',
      '30% reduction in operational costs',
      'Improved customer insights',
      'Automated business processes'
    ],
    useCases: [
      'Financial forecasting',
      'Customer behavior analysis',
      'Supply chain optimization',
      'Performance monitoring'
    ],
    pricing: {
      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '2-4 weeks',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
    aiScore: 95,
    marketPrice: '$299-$1,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  },
  {
    id: 'quantum-cybersecurity',
    title: 'Quantum Cybersecurity Suite',
    description: 'Quantum-resistant encryption and advanced threat detection',
    longDescription: 'Stay ahead of cyber threats with our quantum-resistant cybersecurity solutions. Features post-quantum cryptography, AI threat detection, and zero-trust architecture.',
    icon: 'Shield',
    color: 'from-blue-500 to-cyan-600',
    category: 'security',
    features: [
      'Post-quantum cryptography',
      'AI-powered threat detection',
      'Zero-trust architecture',
      'Real-time monitoring',
      'Automated incident response',
      'Compliance reporting'
    ],
    benefits: [
      'Future-proof security',
      '99.9% threat detection rate',
      'Reduced security incidents',
      'Compliance automation'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Enterprise networks'
    ],
    pricing: {
      starter: '$499/month',
      professional: '$1,299/month',
      enterprise: '$2,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '3-6 weeks',
    technologies: ['Quantum Algorithms', 'Python', 'Rust', 'Kubernetes', 'Terraform'],
    aiScore: 98,
    marketPrice: '$499-$2,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  },
  {
    id: 'iot-edge-computing',
    title: 'IoT Edge Computing Platform',
    description: 'Intelligent edge computing for IoT devices and real-time processing',
    longDescription: 'Deploy intelligent computing at the edge with our IoT platform. Process data locally, reduce latency, and enable real-time decision making for connected devices.',
    icon: 'Cpu',
    color: 'from-green-500 to-emerald-600',
    category: 'iot',
    features: [
      'Edge AI processing',
      'Real-time data analytics',
      'Device management',
      'Predictive maintenance',
      'Energy optimization',
      'Scalable deployment'
    ],
    benefits: [
      '90% reduction in latency',
      '40% energy savings',
      'Real-time insights',
      'Scalable architecture'
    ],
    useCases: [
      'Smart cities',
      'Industrial IoT',
      'Connected vehicles',
      'Smart buildings'
    ],
    pricing: {
      starter: '$199/month',
      professional: '$599/month',
      enterprise: '$1,499/month',
      custom: 'Contact us'
    },
    estimatedTime: '4-8 weeks',
    technologies: ['Docker', 'Kubernetes', 'Python', 'TensorFlow Lite', 'MQTT'],
    aiScore: 92,
    marketPrice: '$199-$1,499/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain Solution',
    description: 'Transparent and secure supply chain management with blockchain',
    longDescription: 'Revolutionize your supply chain with blockchain technology. Track products from source to destination with immutable records and smart contracts.',
    icon: 'Lock',
    color: 'from-orange-500 to-red-600',
    category: 'fintech',
    features: [
      'Product traceability',
      'Smart contracts',
      'Real-time tracking',
      'Quality assurance',
      'Compliance automation',
      'Supplier verification'
    ],
    benefits: [
      '100% transparency',
      'Reduced fraud',
      'Automated compliance',
      'Improved efficiency'
    ],
    useCases: [
      'Food safety',
      'Pharmaceuticals',
      'Luxury goods',
      'Manufacturing'
    ],
    pricing: {
      starter: '$399/month',
      professional: '$999/month',
      enterprise: '$2,499/month',
      custom: 'Contact us'
    },
    estimatedTime: '6-10 weeks',
    technologies: ['Ethereum', 'Solidity', 'React', 'Node.js', 'IPFS'],
    aiScore: 89,
    marketPrice: '$399-$2,499/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  },
  {
    id: 'ai-content-creation',
    title: 'AI Content Creation Suite',
    description: 'AI-powered content generation and optimization platform',
    longDescription: 'Create engaging content at scale with our AI-powered platform. Generate articles, social media posts, and marketing copy with human-like quality.',
    icon: 'FileText',
    color: 'from-indigo-500 to-purple-600',
    category: 'ai',
    features: [
      'AI text generation',
      'Content optimization',
      'SEO analysis',
      'Multi-language support',
      'Brand voice consistency',
      'Performance analytics'
    ],
    benefits: [
      '10x faster content creation',
      'Improved SEO rankings',
      'Consistent brand voice',
      'Cost-effective scaling'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Social media managers'
    ],
    pricing: {
      starter: '$99/month',
      professional: '$299/month',
      enterprise: '$799/month',
      custom: 'Contact us'
    },
    estimatedTime: '1-2 weeks',
    technologies: ['GPT-4', 'BERT', 'React', 'Python', 'FastAPI'],
    aiScore: 94,
    marketPrice: '$99-$799/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  },
  {
    id: 'quantum-machine-learning',
    title: 'Quantum Machine Learning Platform',
    description: 'Quantum-enhanced machine learning for complex problem solving',
    longDescription: 'Solve previously intractable problems with quantum-enhanced machine learning. Our platform combines quantum computing with classical ML for unprecedented performance.',
    icon: 'Rocket',
    color: 'from-violet-500 to-fuchsia-600',
    category: 'quantum',
    features: [
      'Quantum neural networks',
      'Hybrid quantum-classical algorithms',
      'Optimization problems',
      'Drug discovery tools',
      'Financial modeling',
      'Climate prediction'
    ],
    benefits: [
      'Exponential speed improvements',
      'New problem-solving capabilities',
      'Competitive advantage',
      'Research breakthroughs'
    ],
    useCases: [
      'Pharmaceutical research',
      'Financial modeling',
      'Climate science',
      'Materials science'
    ],
    pricing: {
      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: '$9,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '8-12 weeks',
    technologies: ['Qiskit', 'Cirq', 'Python', 'TensorFlow', 'Quantum Hardware'],
    aiScore: 99,
    marketPrice: '$1,999-$9,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'beta'
  },
  {
    id: 'biotech-ai-platform',
    title: 'Biotech AI Research Platform',
    description: 'AI-powered biotechnology research and drug discovery',
    longDescription: 'Accelerate biotech research with our AI platform. Discover new drugs, analyze genetic data, and optimize biological processes with machine learning.',
    icon: 'Dna',
    color: 'from-teal-500 to-cyan-600',
    category: 'biotech',
    features: [
      'Drug discovery algorithms',
      'Genetic sequence analysis',
      'Protein structure prediction',
      'Clinical trial optimization',
      'Biomarker identification',
      'Drug repurposing'
    ],
    benefits: [
      '5x faster drug discovery',
      'Reduced research costs',
      'Improved success rates',
      'Personalized medicine'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Research institutions',
      'Biotech startups',
      'Clinical laboratories'
    ],
    pricing: {
      starter: '$2,999/month',
      professional: '$7,999/month',
      enterprise: '$19,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '12-16 weeks',
    technologies: ['PyTorch', 'BioPython', 'TensorFlow', 'CUDA', 'Cloud Computing'],
    aiScore: 97,
    marketPrice: '$2,999-$19,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  },
  {
    id: 'fintech-ai-platform',
    title: 'FinTech AI Solutions',
    description: 'AI-powered financial technology and risk management',
    longDescription: 'Transform your financial services with AI. Our platform provides fraud detection, risk assessment, automated trading, and personalized financial advice.',
    icon: 'TrendingUp',
    color: 'from-emerald-500 to-green-600',
    category: 'fintech',
    features: [
      'Fraud detection',
      'Risk assessment',
      'Automated trading',
      'Credit scoring',
      'Portfolio optimization',
      'Regulatory compliance'
    ],
    benefits: [
      '99.9% fraud detection',
      'Reduced risk exposure',
      'Automated compliance',
      'Improved customer experience'
    ],
    useCases: [
      'Banks',
      'Insurance companies',
      'Investment firms',
      'Fintech startups'
    ],
    pricing: {
      starter: '$1,499/month',
      professional: '$3,999/month',
      enterprise: '$9,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '6-10 weeks',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
    aiScore: 96,
    marketPrice: '$1,499-$9,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  }
];

export const SPECIALIZED_SERVICES: MicroSaasService[] = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Platform',
    description: 'AI-powered healthcare diagnostics and patient care',
    longDescription: 'Improve patient outcomes with our healthcare AI platform. Features diagnostic assistance, treatment recommendations, and patient monitoring.',
    icon: 'Heart',
    color: 'from-red-500 to-pink-600',
    category: 'healthtech',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Treatment recommendations',
      'Patient monitoring',
      'Drug interaction checking',
      'Clinical decision support'
    ],
    benefits: [
      'Improved diagnostic accuracy',
      'Reduced medical errors',
      'Better patient outcomes',
      'Cost-effective healthcare'
    ],
    useCases: [
      'Hospitals',
      'Clinics',
      'Medical imaging centers',
      'Telemedicine platforms'
    ],
    pricing: {
      starter: '$2,499/month',
      professional: '$5,999/month',
      enterprise: '$14,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '10-14 weeks',
    technologies: ['TensorFlow', 'PyTorch', 'DICOM', 'HL7', 'FHIR'],
    aiScore: 95,
    marketPrice: '$2,499-$14,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  },
  {
    id: 'education-ai',
    title: 'Education AI Platform',
    description: 'Personalized learning and educational analytics',
    longDescription: 'Transform education with AI-powered personalized learning. Our platform adapts to each student\'s needs and provides real-time feedback.',
    icon: 'BookOpen',
    color: 'from-blue-500 to-indigo-600',
    category: 'edutech',
    features: [
      'Personalized learning paths',
      'Adaptive assessments',
      'Student performance analytics',
      'Content recommendation',
      'Automated grading',
      'Learning analytics'
    ],
    benefits: [
      'Improved learning outcomes',
      'Personalized education',
      'Reduced teacher workload',
      'Data-driven insights'
    ],
    useCases: [
      'K-12 schools',
      'Universities',
      'Corporate training',
      'Online education platforms'
    ],
    pricing: {
      starter: '$199/month',
      professional: '$599/month',
      enterprise: '$1,499/month',
      custom: 'Contact us'
    },
    estimatedTime: '4-8 weeks',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
    aiScore: 93,
    marketPrice: '$199-$1,499/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active'
  }
];

export const getServicesByCategory = (category: string): MicroSaasService[] => {
  if (category === 'All') {
    return [...INNOVATIVE_MICRO_SAAS_SERVICES_2025, ...SPECIALIZED_SERVICES];
  }
  return [...INNOVATIVE_MICRO_SAAS_SERVICES_2025, ...SPECIALIZED_SERVICES].filter(service => service.category === category);
};

export const getAllServices = (): MicroSaasService[] => {
  return [...INNOVATIVE_MICRO_SAAS_SERVICES_2025, ...SPECIALIZED_SERVICES];
};