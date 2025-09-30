export const specializedIndustrySolutions2025 = [
  {
    id: 'manufacturing-ai',
    name: 'AI-Powered Manufacturing Optimization',
    description: 'Advanced AI solutions for manufacturing process optimization, quality control, and predictive maintenance.',
    price: '$3,999',
    period: '/month',
    category: 'Manufacturing',
    industry: 'Manufacturing',
    features: [
      'Predictive maintenance',
      'Quality control automation',
      'Process optimization',
      'Supply chain management',
      'Real-time monitoring'
    ],
    popular: true,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 'healthcare-ai',
    name: 'Healthcare AI Solutions',
    description: 'Comprehensive AI solutions for healthcare including diagnosis, patient care, and administrative automation.',
    price: '$4,999',
    period: '/month',
    category: 'Healthcare',
    industry: 'Healthcare',
    features: [
      'Medical diagnosis support',
      'Patient data analysis',
      'Administrative automation',
      'Drug discovery',
      'Clinical trial optimization'
    ],
    popular: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'financial-ai',
    name: 'Financial Services AI',
    description: 'AI-powered solutions for banking, insurance, and financial services including fraud detection and risk assessment.',
    price: '$5,999',
    period: '/month',
    category: 'Financial Services',
    industry: 'Financial Services',
    features: [
      'Fraud detection',
      'Risk assessment',
      'Customer service automation',
      'Investment analysis',
      'Compliance monitoring'
    ],
    popular: false,
    rating: 4.7,
    reviews: 38
  }
];

export const industryCategories2025 = [
  'Manufacturing',
  'Healthcare',
  'Financial Services',
  'Retail',
  'Transportation',
  'Energy',
  'Education',
  'Government'
];

export function getSolutionsByIndustry(industry) {
  return specializedIndustrySolutions2025.filter(solution => solution.industry === industry);
}