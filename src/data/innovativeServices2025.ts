export interface InnovativeService2025 {
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
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
  // Additional properties used in ComprehensivePricingGuide2030
  pricingModel?: string;
  innovationLevel?: string;
  currency?: string;
  title?: string;
  marketPrice?: string;
  benefits?: string[];
}

export const INNOVATIVE_SERVICES_2025: InnovativeService2025[] = [
  {
    id: 'ai-multimodal-fusion-platform',
    name: 'AI Multimodal Fusion Platform',
    tagline: 'Unified AI processing across text, image, video, and audio',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary platform that seamlessly processes and analyzes multiple data types simultaneously, enabling breakthrough insights and applications across industries.',
    features: [
      'Cross-modal data fusion algorithms',
      'Real-time multimodal analysis',
      'Advanced pattern recognition',
      'Custom model training',
      'API-first architecture',
      'Enterprise security & compliance'
    ],
    popular: true,
    icon: 'brain',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    textColor: 'text-white',
    link: '/services/ai-multimodal-fusion',
    marketPosition: 'Leading edge',
    targetAudience: 'Enterprise AI teams, Research institutions',
    trialDays: 14,
    setupTime: '2-4 weeks',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Computer Vision'],
    integrations: ['AWS', 'Google Cloud', 'Azure', 'Slack', 'Microsoft Teams'],
    useCases: ['Content analysis', 'Medical imaging', 'Autonomous vehicles', 'Smart cities'],
    roi: '300-500% within 12 months',
    competitors: ['Google AI Platform', 'AWS SageMaker', 'Azure Cognitive Services'],
    marketSize: '$15.2B by 2025',
    growthRate: '45% annually',
    contactInfo: {
      mobile: '+1 (555) 123-4567',
      email: 'ai-platform@ziontech.com',
      address: '123 AI Innovation Drive, Tech City, TC 12345'
    }
  },
  {
    id: 'quantum-computing-simulation',
    name: 'Quantum Computing Simulation Suite',
    tagline: 'Advanced quantum algorithm development and testing platform',
    price: '$4,999',
    period: '/month',
    description: 'Comprehensive quantum computing simulation environment for developing, testing, and optimizing quantum algorithms before deployment on actual quantum hardware.',
    features: [
      'Quantum circuit designer',
      'Algorithm optimization tools',
      'Performance benchmarking',
      'Hardware compatibility testing',
      'Collaborative development environment',
      'Real-time simulation results'
    ],
    popular: false,
    icon: 'cpu',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    textColor: 'text-white',
    link: '/services/quantum-simulation',
    marketPosition: 'Emerging',
    targetAudience: 'Quantum researchers, Academic institutions, R&D teams',
    trialDays: 7,
    setupTime: '1-2 weeks',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Qiskit', 'Cirq', 'Q#', 'Quantum simulators'],
    integrations: ['IBM Quantum', 'Google Quantum AI', 'Rigetti', 'IonQ'],
    useCases: ['Drug discovery', 'Financial modeling', 'Cryptography', 'Optimization problems'],
    roi: '200-400% within 18 months',
    competitors: ['IBM Quantum Experience', 'Google Quantum AI', 'Microsoft Quantum Development Kit'],
    marketSize: '$2.1B by 2025',
    growthRate: '65% annually',
    contactInfo: {
      mobile: '+1 (555) 234-5678',
      email: 'quantum@ziontech.com',
      address: '456 Quantum Lane, Science Park, SP 67890'
    }
  }
];