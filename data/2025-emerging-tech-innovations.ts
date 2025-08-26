export interface EmergingTechInnovationService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  category: string;
  marketSize: string;
  targetAudience: string[];
  competitiveAdvantage: string;
  useCases: string[];
  integrations: string[];
  compliance: string[];
  website: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  trialDays: number;
  setupTime: string;
  competitors: string[];
  roi: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
  technologyStack: string[];
  innovationLevel: string;
  futureProofing: string;
  researchPartnerships: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link?: string;
  marketPosition?: string;
  technology?: string[];
  growthRate?: string;
  variant?: string;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation?: boolean;
  implementationDetails?: string;
}

export const emergingTechInnovations2025: EmergingTechInnovationService[] = [
  // Quantum Computing Services
  {
    id: 'quantum-computing-as-a-service',
    name: 'Quantum Computing as a Service (QCaaS)',
    tagline: 'Access quantum computing power through the cloud for complex problem solving',
    description: 'Enterprise-grade quantum computing platform that provides access to quantum processors through the cloud. Enables organizations to solve complex optimization problems, perform advanced simulations, and accelerate research in cryptography, materials science, and drug discovery.',
    price: '$2,999',
    period: '/month',
    features: [
      'Access to 100+ qubit quantum processors',
      'Quantum algorithm library and optimization tools',
      'Hybrid quantum-classical computing workflows',
      'Real-time quantum circuit visualization',
      'Advanced quantum error correction',
      'Quantum machine learning frameworks',
      'API access for custom quantum applications',
      'Expert quantum computing consultation',
      'Training and certification programs',
      '24/7 quantum computing support'
    ],
    category: 'Quantum Computing & Advanced Computing',
    marketSize: '$8.7B',
    targetAudience: ['Pharmaceutical companies', 'Financial institutions', 'Research universities', 'Government agencies', 'Technology companies'],
    competitiveAdvantage: 'First-to-market quantum computing platform with proprietary error correction algorithms',
    useCases: [
      'Drug discovery and molecular modeling',
      'Financial portfolio optimization',
      'Cryptography and cybersecurity',
      'Materials science research',
      'Machine learning acceleration',
      'Climate modeling and simulation',
      'Supply chain optimization',
      'Logistics and routing problems'
    ],
    integrations: [
      'AWS Quantum Braket',
      'IBM Quantum Experience',
      'Google Quantum AI',
      'Microsoft Azure Quantum',
      'Custom quantum simulators',
      'Classical computing clusters',
      'Data visualization tools',
      'Machine learning frameworks'
    ],
    compliance: [
      'ISO 27001',
      'SOC 2 Type II',
      'GDPR compliance',
      'HIPAA compliance',
      'Quantum-safe cryptography standards',
      'Export control compliance'
    ],
    website: 'https://ziontechgroup.com/quantum-computing',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    trialDays: 30,
    setupTime: '2-4 weeks',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Amazon Braket', 'Rigetti Computing'],
    roi: '300-500% within 18 months',
    launchDate: '2025-01-15',
    customers: 45,
    rating: 4.8,
    reviews: 127,
    technologyStack: ['Qiskit', 'Cirq', 'Q#', 'PennyLane', 'Custom quantum algorithms'],
    innovationLevel: 'Breakthrough',
    futureProofing: 'Scalable to 1000+ qubits, quantum error correction, hybrid quantum-classical workflows',
    researchPartnerships: ['MIT Quantum Engineering', 'Stanford Quantum Computing', 'Caltech Quantum Institute', 'National Quantum Initiative']
  }
];
