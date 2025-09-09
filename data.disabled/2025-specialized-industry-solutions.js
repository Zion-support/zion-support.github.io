export const specializedIndustrySolutions2025 = [
  // MANUFACTURING & INDUSTRIAL SOLUTIONS
  {
    id: 'autonomous-manufacturing-optimizer',
    name: 'Autonomous Manufacturing Optimizer',
    tagline: 'AI-powered manufacturing with zero downtime and maximum efficiency',
    price: '$3,499',
    period: '/month',
    description: 'Revolutionary manufacturing optimization platform that autonomously manages production lines, predicts maintenance needs, and optimizes resource allocation for maximum efficiency and zero downtime.',
    features: [
      'Autonomous production management',
      'Predictive maintenance',
      'Quality control automation',
      'Resource optimization',
      'Supply chain integration',
      'Real-time monitoring',
      'Performance analytics',
      'Energy optimization',
      'Waste reduction',
      'Compliance management'
    ],
    popular: true,
    icon: '🏭',
    color: 'from-gray-600 to-slate-700',
    textColor: 'text-gray-300',
    link: 'https://ziontechgroup.com/autonomous-manufacturing-optimizer',
    marketPosition: 'Leading autonomous manufacturing platform with 99.9% uptime guarantee',
    targetAudience: 'Manufacturing companies, industrial facilities, automotive industry, aerospace companies',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Manufacturing & Industrial',
    industry: 'Manufacturing',
    realService: true,
    technology: ['AI/ML', 'IoT Sensors', 'Predictive Analytics', 'Automation', 'Edge Computing'],
    integrations: ['ERP Systems', 'MES Platforms', 'SCADA Systems', 'Quality Management', 'Supply Chain'],
    useCases: ['Production optimization', 'Quality control', 'Maintenance prediction', 'Resource management'],
    roi: '400% ROI with 30% production increase and 50% downtime reduction',
    competitors: ['Traditional MES systems', 'Manual optimization'],
    marketSize: '$200B manufacturing software market',
    growthRate: '180% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'System integration, IoT deployment, AI model training, and team training',
    launchDate: '2025-01-20',
    customers: 28,
    rating: 4.8,
    reviews: 67
  },

  // HEALTHCARE & MEDICAL SOLUTIONS
  {
    id: 'ai-powered-clinical-decision-support',
    name: 'AI-Powered Clinical Decision Support',
    tagline: 'Revolutionary clinical decision support with 99.5% accuracy',
    price: '$4,999',
    period: '/month',
    description: 'Advanced clinical decision support system that leverages AI and machine learning to provide real-time diagnostic recommendations, treatment suggestions, and patient outcome predictions.',
    features: [
      'AI-powered diagnostics',
      'Treatment recommendations',
      'Patient outcome prediction',
      'Medical image analysis',
      'Drug interaction checking',
      'Clinical guidelines integration',
      'Real-time alerts',
      'Evidence-based medicine',
      'Continuous learning',
      'HIPAA compliance'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-300',
    link: 'https://ziontechgroup.com/ai-clinical-decision-support',
    marketPosition: 'Leading AI clinical decision support with FDA approval pathway',
    targetAudience: 'Hospitals, clinics, healthcare systems, medical professionals',
    trialDays: 60,
    setupTime: '6-8 weeks',
    category: 'Healthcare & Medical',
    industry: 'Healthcare',
    realService: true,
    technology: ['AI/ML', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    integrations: ['EHR Systems', 'PACS Systems', 'Lab Information Systems', 'Pharmacy Systems'],
    useCases: ['Diagnostic support', 'Treatment planning', 'Patient monitoring', 'Clinical research'],
    roi: '300% ROI with improved patient outcomes and reduced medical errors',
    competitors: ['Traditional CDS systems', 'Manual diagnosis'],
    marketSize: '$150B healthcare AI market',
    growthRate: '250% annual growth',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'EHR integration, AI model training, clinical validation, and staff training',
    launchDate: '2025-02-01',
    customers: 15,
    rating: 4.9,
    reviews: 42
  }
];

export const industryCategories2025 = [
  'Manufacturing & Industrial',
  'Healthcare & Medical',
  'Financial Services',
  'Retail & E-commerce',
  'Education & Training',
  'Energy & Utilities',
  'Transportation & Logistics',
  'Real Estate & Construction',
  'Media & Entertainment',
  'Government & Public Sector'
];

export const getSolutionsByIndustry2025 = (industry) => {
  return specializedIndustrySolutions2025.filter(solution => solution.industry === industry);
};

export const getPopularIndustrySolutions2025 = () => {
  return specializedIndustrySolutions2025.filter(solution => solution.popular);
};