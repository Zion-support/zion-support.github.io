export const comprehensivePricingAnalysis2025 = [
  {
    serviceId: 'ai-business-solutions',
    serviceName: 'AI & Business Solutions',
    basePrice: 2999,
    currency: '$',
    period: 'month',
    marketAverage: 2500,
    competitorPrices: [1800, 3200, 2800, 3500, 2200],
    roi: 450,
    paybackPeriod: 8,
    marketSize: '15B',
    growthRate: 35,
    demandScore: 95,
    complexity: 'High',
    implementationTime: '8-12 weeks',
    supportLevel: '24/7',
    customizationOptions: ['Full', 'Partial', 'Standard'],
    industryFit: ['Technology', 'Finance', 'Healthcare', 'Manufacturing']
  },
  {
    serviceId: 'cybersecurity-suite',
    serviceName: 'Cybersecurity Suite',
    basePrice: 1999,
    currency: '$',
    period: 'month',
    marketAverage: 1800,
    competitorPrices: [1500, 2200, 1900, 2500, 1700],
    roi: 380,
    paybackPeriod: 6,
    marketSize: '12B',
    growthRate: 28,
    demandScore: 98,
    complexity: 'High',
    implementationTime: '6-10 weeks',
    supportLevel: '24/7',
    customizationOptions: ['Full', 'Partial', 'Standard'],
    industryFit: ['Finance', 'Healthcare', 'Government', 'Technology']
  },
  {
    serviceId: 'cloud-infrastructure',
    serviceName: 'Cloud Infrastructure',
    basePrice: 1499,
    currency: '$',
    period: 'month',
    marketAverage: 1300,
    competitorPrices: [1100, 1600, 1400, 1800, 1200],
    roi: 320,
    paybackPeriod: 5,
    marketSize: '18B',
    growthRate: 42,
    demandScore: 92,
    complexity: 'Medium',
    implementationTime: '4-8 weeks',
    supportLevel: 'Business Hours',
    customizationOptions: ['Full', 'Partial', 'Standard'],
    industryFit: ['Technology', 'E-commerce', 'SaaS', 'Enterprises']
  }
];

export function getMarketInsights() {
  return {
    totalMarketSize: '$45B',
    averageGrowthRate: '35%',
    highestROI: '450%',
    fastestPayback: '5 months',
    mostDemandedService: 'Cybersecurity Suite',
    averageImplementationTime: '8 weeks',
    marketTrends: [
      'AI adoption accelerating',
      'Cloud migration increasing',
      'Security concerns growing',
      'Digital transformation expanding'
    ]
  };
}

export function getCompetitiveLandscape() {
  return {
    'AI & Business Solutions': [
      'IBM Watson',
      'Microsoft Azure AI',
      'Google Cloud AI',
      'Amazon SageMaker',
      'OpenAI Enterprise'
    ],
    'Cybersecurity Suite': [
      'CrowdStrike',
      'Palo Alto Networks',
      'Fortinet',
      'Check Point',
      'Trend Micro'
    ],
    'Cloud Infrastructure': [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'IBM Cloud',
      'Oracle Cloud'
    ]
  };
}