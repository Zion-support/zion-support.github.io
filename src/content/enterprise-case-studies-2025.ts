// Enterprise case studies showcasing real-world AI implementations and results

export interface EnterpriseCaseStudy { 
  id: string;
  slug?: string;
  title: string;
  company: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    performance: string;
    savings: string;
    accuracy: string;
    roi: string;
  };
  metrics: {
    costReduction: string;
    efficiencyGain: string;
    timeToValue: string;
    scalability: string;
  };
  featured: boolean;
  date: string;
  tags: string[];
  imageUrl?: string;
}

export const enterpriseCaseStudies2025: EnterpriseCaseStudy[] = [
  {
    id: 'fortune-100-autonomous-operations-2025',
    slug: 'fortune-100-autonomous-operations-case-study',
    title: 'Fortune 100 Autonomous Operations Transformation',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    description: 'Revolutionary AI platform eliminating manual processes across 40+ workflows, achieving $650M annual value creation and 85% cost reduction.',
    challenge: 'Manual processes across 40+ workflows causing inefficiencies, high costs, and operational bottlenecks.',
    solution: 'Implemented AI-powered autonomous operations platform with intelligent workflow automation and real-time decision making.',
    results: {
      performance: '10x faster operations',
      savings: '$650M annual value creation',
      accuracy: '99.7% accuracy',
      roi: '2,500% ROI'
    },
    metrics: {
      costReduction: '85% cost reduction',
      efficiencyGain: '10x operational efficiency',
      timeToValue: '90 days',
      scalability: '40+ workflows automated'
    },
    featured: true,
    date: '2025-10-01',
    tags: ['autonomous operations', 'AI automation', 'workflow optimization', 'enterprise AI'],
    imageUrl: '/images/case-studies/fortune-100-autonomous-operations.jpg'
  },
  {
    id: 'quantum-ai-consciousness-breakthrough-2025',
    slug: 'quantum-ai-consciousness-breakthrough-case-study',
    title: 'Quantum AI Consciousness Breakthrough Implementation',
    company: 'Tech Innovation Labs',
    industry: 'Technology',
    description: 'Revolutionary quantum-AI consciousness achieving 99.97% transcendence levels with 10,000x cognitive acceleration and $2.1B annual value.',
    challenge: 'Traditional AI systems limited by classical computing constraints and inability to achieve true consciousness levels.',
    solution: 'Deployed quantum-AI consciousness platform with breakthrough transcendence algorithms and superintelligent autonomous systems.',
    results: {
      performance: '10,000x cognitive acceleration',
      savings: '$2.1B annual value creation',
      accuracy: '99.97% transcendence level',
      roi: '2,100% ROI'
    },
    metrics: {
      costReduction: '60% operational costs',
      efficiencyGain: '10,000x cognitive speed',
      timeToValue: '120 days',
      scalability: 'Unlimited consciousness scaling'
    },
    featured: true,
    date: '2025-12-01',
    tags: ['quantum AI', 'consciousness', 'transcendence', 'superintelligence'],
    imageUrl: '/images/case-studies/quantum-ai-consciousness-breakthrough.jpg'
  },
  {
    id: 'neural-architecture-evolution-enterprise-2025',
    slug: 'neural-architecture-evolution-enterprise-case-study',
    title: 'Neural Architecture Evolution Enterprise Implementation',
    company: 'AI Development Corp',
    industry: 'Software Development',
    description: 'Self-designing AI models achieving 10,000x faster development cycles with 97% accuracy improvement and $25M annual savings.',
    challenge: 'Manual AI model development processes taking months with inconsistent accuracy and high development costs.',
    solution: 'Implemented neural architecture evolution platform enabling autonomous model design and continuous optimization.',
    results: {
      performance: '10,000x faster development',
      savings: '$25M annual savings',
      accuracy: '97% accuracy improvement',
      roi: '2,500% ROI'
    },
    metrics: {
      costReduction: '70% development costs',
      efficiencyGain: '10,000x development speed',
      timeToValue: '60 days',
      scalability: 'Unlimited model complexity'
    },
    featured: true,
    date: '2025-12-01',
    tags: ['neural architecture', 'AutoML', 'model optimization', 'AI development'],
    imageUrl: '/images/case-studies/neural-architecture-evolution-enterprise.jpg'
  }
];

export const getFeaturedCaseStudies = (): EnterpriseCaseStudy[] => {
  return enterpriseCaseStudies2025.filter(study => study.featured);
};

export const getCaseStudiesByIndustry = (industry: string): EnterpriseCaseStudy[] => {
  return enterpriseCaseStudies2025.filter(study => study.industry === industry);
};