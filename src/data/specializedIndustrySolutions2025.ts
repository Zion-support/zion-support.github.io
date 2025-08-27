export interface IndustrySolution {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  industry: 'healthcare' | 'finance' | 'manufacturing' | 'retail' | 'education' | 'government' | 'energy' | 'transportation' | 'real-estate' | 'media' | 'logistics' | 'telecommunications';
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
  industryScore: number;
  marketPrice: string;
  contactLink: string;
  status: 'active' | 'beta' | 'coming-soon';
  compliance: string[];
  certifications: string[];
}
export const SPECIALIZED_INDUSTRY_SOLUTIONS_2025: IndustrySolution[] = [
  {
    id: 'healthcare-ai-platform',
    title: 'Healthcare AI Platform',
    description: 'Comprehensive AI-powered healthcare solutions for hospitals and clinics',
    longDescription: 'Transform healthcare delivery with our comprehensive AI platform. Features diagnostic assistance, patient monitoring, drug discovery, and personalized medicine.',
    icon: 'Heart',
    color: 'from-red-500 to-pink-600',
    industry: 'healthcare',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Patient monitoring',
      'Drug discovery',
      'Personalized medicine',
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
      'Pharmaceutical companies'
    ],
    pricing: {
      starter: '$2,999/month',
      professional: '$7,999/month',
      enterprise: '$19,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '8-16 weeks',
    technologies: ['TensorFlow', 'PyTorch', 'DICOM', 'HL7', 'FHIR', 'Medical AI'],
    industryScore: 97,
    marketPrice: '$2,999-$19,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['HIPAA', 'FDA', 'CE Mark', 'GDPR'],
    certifications: ['ISO 13485', 'ISO 27001', 'SOC 2 Type II']
  },
  {
    id: 'fintech-solutions',
    title: 'FinTech Solutions Platform',
    description: 'Advanced financial technology solutions for banks and financial institutions',
    longDescription: 'Modernize your financial services with our comprehensive FinTech platform. Features fraud detection, risk assessment, automated trading, and regulatory compliance.',
    icon: 'TrendingUp',
    color: 'from-emerald-500 to-green-600',
    industry: 'finance',
    features: [
      'Fraud detection',
      'Risk assessment',
      'Automated trading',
      'Regulatory compliance',
      'Portfolio optimization',
      'Customer analytics'
    ],
    benefits: [
      '99.9% fraud detection',
      'Reduced risk exposure',
      'Automated compliance',
      'Improved customer experience'
    ],
    useCases: [
      'Banks',
      'Credit unions',
      'Investment firms',
      'Insurance companies'
    ],
    pricing: {
      starter: '$3,999/month',
      professional: '$9,999/month',
      enterprise: '$24,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '10-20 weeks',
    technologies: ['Python', 'TensorFlow', 'Blockchain', 'APIs', 'Cloud Computing', 'AI/ML'],
    industryScore: 98,
    marketPrice: '$3,999-$24,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['PCI DSS', 'SOX', 'GLBA', 'GDPR', 'CCPA'],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'PCI DSS Level 1']
  },
  {
    id: 'smart-manufacturing',
    title: 'Smart Manufacturing Platform',
    description: 'IoT and AI-powered manufacturing optimization and automation',
    longDescription: 'Transform your manufacturing operations with our smart manufacturing platform. Features predictive maintenance, quality control, supply chain optimization, and real-time monitoring.',
    icon: 'Factory',
    color: 'from-blue-500 to-indigo-600',
    industry: 'manufacturing',
    features: [
      'Predictive maintenance',
      'Quality control',
      'Supply chain optimization',
      'Real-time monitoring',
      'Energy optimization',
      'Automation integration'
    ],
    benefits: [
      '30% reduction in downtime',
      'Improved product quality',
      'Reduced operational costs',
      'Increased efficiency'
    ],
    useCases: [
      'Automotive manufacturing',
      'Electronics production',
      'Food processing',
      'Chemical manufacturing'
    ],
    pricing: {
      starter: '$4,999/month',
      professional: '$12,999/month',
      enterprise: '$29,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '12-24 weeks',
    technologies: ['IoT', 'AI/ML', 'Edge Computing', 'Cloud Computing', '5G', 'Robotics'],
    industryScore: 96,
    marketPrice: '$4,999-$29,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['ISO 9001', 'ISO 14001', 'OSHA', 'FDA'],
    certifications: ['ISO 9001', 'ISO 14001', 'ISO 45001']
  },
  {
    id: 'retail-ai-platform',
    title: 'Retail AI Platform',
    description: 'AI-powered retail solutions for customer experience and operations',
    longDescription: 'Enhance your retail operations with our comprehensive AI platform. Features customer analytics, inventory optimization, personalized marketing, and fraud prevention.',
    icon: 'ShoppingCart',
    color: 'from-purple-500 to-pink-600',
    industry: 'retail',
    features: [
      'Customer analytics',
      'Inventory optimization',
      'Personalized marketing',
      'Fraud prevention',
      'Demand forecasting',
      'Customer service automation'
    ],
    benefits: [
      'Increased sales',
      'Improved customer satisfaction',
      'Reduced inventory costs',
      'Better fraud prevention'
    ],
    useCases: [
      'E-commerce platforms',
      'Brick-and-mortar stores',
      'Retail chains',
      'Online marketplaces'
    ],
    pricing: {
      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: '$12,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '6-12 weeks',
    technologies: ['AI/ML', 'Big Data', 'Cloud Computing', 'APIs', 'Analytics', 'E-commerce'],
    industryScore: 95,
    marketPrice: '$1,999-$12,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['PCI DSS', 'GDPR', 'CCPA', 'SOX'],
    certifications: ['PCI DSS Level 1', 'ISO 27001', 'SOC 2 Type II']
  },
  {
    id: 'education-technology',
    title: 'Education Technology Platform',
    description: 'Comprehensive edtech solutions for schools and universities',
    longDescription: 'Transform education with our comprehensive edtech platform. Features personalized learning, student analytics, content management, and virtual classrooms.',
    icon: 'BookOpen',
    color: 'from-indigo-500 to-blue-600',
    industry: 'education',
    features: [
      'Personalized learning',
      'Student analytics',
      'Content management',
      'Virtual classrooms',
      'Assessment tools',
      'Learning management'
    ],
    benefits: [
      'Improved learning outcomes',
      'Personalized education',
      'Reduced administrative workload',
      'Better student engagement'
    ],
    useCases: [
      'K-12 schools',
      'Universities',
      'Corporate training',
      'Online education'
    ],
    pricing: {
      starter: '$999/month',
      professional: '$2,999/month',
      enterprise: '$7,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '4-12 weeks',
    technologies: ['AI/ML', 'Cloud Computing', 'Mobile Apps', 'Web Technologies', 'Analytics', 'LMS'],
    industryScore: 94,
    marketPrice: '$999-$7,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['FERPA', 'COPPA', 'GDPR', 'CCPA'],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'EdTech Certification']
  },
  {
    id: 'government-solutions',
    title: 'Government Technology Solutions',
    description: 'Secure and compliant technology solutions for government agencies',
    longDescription: 'Modernize government operations with our secure and compliant technology solutions. Features citizen services, data analytics, cybersecurity, and process automation.',
    icon: 'Building',
    color: 'from-slate-500 to-gray-600',
    industry: 'government',
    features: [
      'Citizen services',
      'Data analytics',
      'Cybersecurity',
      'Process automation',
      'Compliance management',
      'Digital transformation'
    ],
    benefits: [
      'Improved citizen services',
      'Enhanced security',
      'Operational efficiency',
      'Cost savings'
    ],
    useCases: [
      'Federal agencies',
      'State governments',
      'Local municipalities',
      'Government departments'
    ],
    pricing: {
      starter: '$5,999/month',
      professional: '$15,999/month',
      enterprise: '$39,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '16-32 weeks',
    technologies: ['Cloud Computing', 'AI/ML', 'Cybersecurity', 'Blockchain', 'APIs', 'Analytics'],
    industryScore: 99,
    marketPrice: '$5,999-$39,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['FedRAMP', 'FISMA', 'NIST', 'CJIS', 'HIPAA'],
    certifications: ['FedRAMP High', 'FISMA High', 'ISO 27001', 'SOC 2 Type II']
  },
  {
    id: 'energy-optimization',
    title: 'Energy Optimization Platform',
    description: 'AI-powered energy management and optimization solutions',
    longDescription: 'Optimize your energy operations with our comprehensive platform. Features smart grid management, renewable energy integration, demand forecasting, and energy analytics.',
    icon: 'Zap',
    color: 'from-yellow-500 to-orange-600',
    industry: 'energy',
    features: [
      'Smart grid management',
      'Renewable energy integration',
      'Demand forecasting',
      'Energy analytics',
      'Grid optimization',
      'Sustainability monitoring'
    ],
    benefits: [
      'Reduced energy costs',
      'Improved efficiency',
      'Sustainability goals',
      'Grid reliability'
    ],
    useCases: [
      'Utility companies',
      'Energy providers',
      'Industrial facilities',
      'Smart cities'
    ],
    pricing: {
      starter: '$3,999/month',
      professional: '$9,999/month',
      enterprise: '$24,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '10-20 weeks',
    technologies: ['IoT', 'AI/ML', 'Big Data', 'Cloud Computing', 'Smart Grid', 'Renewable Energy'],
    industryScore: 95,
    marketPrice: '$3,999-$24,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['NERC', 'FERC', 'ISO', 'Grid Standards'],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'Energy Management']
  },
  {
    id: 'transportation-logistics',
    title: 'Transportation & Logistics Platform',
    description: 'Intelligent transportation and logistics optimization',
    longDescription: 'Optimize your transportation and logistics operations with our intelligent platform. Features route optimization, fleet management, supply chain visibility, and predictive analytics.',
    icon: 'Truck',
    color: 'from-teal-500 to-cyan-600',
    industry: 'transportation',
    features: [
      'Route optimization',
      'Fleet management',
      'Supply chain visibility',
      'Predictive analytics',
      'Real-time tracking',
      'Performance monitoring'
    ],
    benefits: [
      'Reduced transportation costs',
      'Improved delivery times',
      'Better fleet utilization',
      'Enhanced customer satisfaction'
    ],
    useCases: [
      'Logistics companies',
      'Transportation providers',
      'E-commerce delivery',
      'Supply chain management'
    ],
    pricing: {
      starter: '$2,999/month',
      professional: '$7,999/month',
      enterprise: '$19,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '8-16 weeks',
    technologies: ['AI/ML', 'IoT', 'GPS', 'Cloud Computing', 'Mobile Apps', 'Analytics'],
    industryScore: 94,
    marketPrice: '$2,999-$19,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['DOT', 'FMCSA', 'OSHA', 'ISO'],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'Transportation Safety']
  },
  {
    id: 'real-estate-tech',
    title: 'Real Estate Technology Platform',
    description: 'Comprehensive real estate technology solutions',
    longDescription: 'Transform your real estate operations with our comprehensive technology platform. Features property management, market analytics, virtual tours, and transaction management.',
    icon: 'Home',
    color: 'from-amber-500 to-yellow-600',
    industry: 'real-estate',
    features: [
      'Property management',
      'Market analytics',
      'Virtual tours',
      'Transaction management',
      'Customer relationship management',
      'Financial analytics'
    ],
    benefits: [
      'Improved property management',
      'Better market insights',
      'Enhanced customer experience',
      'Increased sales efficiency'
    ],
    useCases: [
      'Real estate agencies',
      'Property management companies',
      'Real estate investors',
      'Property developers'
    ],
    pricing: {
      starter: '$1,499/month',
      professional: '$3,999/month',
      enterprise: '$9,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '6-12 weeks',
    technologies: ['AI/ML', 'VR/AR', 'Cloud Computing', 'Mobile Apps', 'Analytics', 'CRM'],
    industryScore: 93,
    marketPrice: '$1,499-$9,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['Real Estate Laws', 'Data Privacy', 'Financial Regulations', 'Local Compliance'],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'Real Estate Technology']
  },
  {
    id: 'media-entertainment',
    title: 'Media & Entertainment Platform',
    description: 'AI-powered media and entertainment solutions',
    longDescription: 'Revolutionize your media and entertainment operations with our AI-powered platform. Features content creation, audience analytics, recommendation engines, and content management.',
    icon: 'Video',
    color: 'from-pink-500 to-rose-600',
    industry: 'media',
    features: [
      'Content creation',
      'Audience analytics',
      'Recommendation engines',
      'Content management',
      'Streaming optimization',
      'Performance analytics'
    ],
    benefits: [
      'Increased audience engagement',
      'Better content performance',
      'Improved monetization',
      'Enhanced user experience'
    ],
    useCases: [
      'Streaming platforms',
      'Content creators',
      'Media companies',
      'Entertainment providers'
    ],
    pricing: {
      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: '$12,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '6-12 weeks',
    technologies: ['AI/ML', 'Big Data', 'Cloud Computing', 'Streaming', 'Analytics', 'Content Management'],
    industryScore: 94,
    marketPrice: '$1,999-$12,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    compliance: ['Copyright Laws', 'Data Privacy', 'Content Regulations', 'Streaming Standards'],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'Content Management']
  }
];
export const getIndustrySolutionsByIndustry = (industry: string): IndustrySolution[] => {
  if (industry === 'All') {
    return SPECIALIZED_INDUSTRY_SOLUTIONS_2025;
  }
  return SPECIALIZED_INDUSTRY_SOLUTIONS_2025.filter(solution => solution.industry === industry);
};
export const getAllIndustrySolutions = (): IndustrySolution[] => {
  return SPECIALIZED_INDUSTRY_SOLUTIONS_2025;
};