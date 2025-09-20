export interface InnovativeService2025 {
  id: string,
  title: string,
  description: string,
  category: string,
  price: number,
  marketPrice: string,
  rating: number,
  reviews: number,
  aiScore: number,
  features: string[],
  benefits: string[],
  launchDate: string
}

export const INNOVATIVE_SERVICES_2025: InnovativeService2025[] = [
  {
    id: 'ai-autonomous-business-manager',
    title: 'AI Autonomous Business Manager',
    description: 'Fully autonomous business management platform that handles operations, decision-making, and strategy execution without human intervention.',
    category: 'AI Services',
    price: 2500,
    marketPrice: '$2,500/month',
    rating: 4.9,
    reviews: 156,
    aiScore: 95,
    features: [
      'Autonomous decision makingReal-time business analytics',
      'Predictive market analysisAutomated resource allocation',
      'Intelligent risk managementDynamic strategy optimization'
    ],
    benefits: [
      'Reduce operational costs by 40%Improve decision accuracy by 85%',
      '24/7 autonomous operationScalable business management'
    ],
    launchDate: '2025-01-15'
  },
  {
    id: 'quantum-edge-computing-platform',
    title: 'Quantum Edge Computing Platform',
    description: 'Next-generation edge computing platform leveraging quantum algorithms for ultra-fast data processing and real-time analytics.',
    category: 'IT Services',
    price: 1800,
    marketPrice: '$1,800/month',
    rating: 4.8,
    reviews: 89,
    aiScore: 92,
    features: [
      'Quantum-enhanced processingEdge AI deployment',
      'Real-time data analyticsLow-latency computing',
      'Scalable infrastructureAdvanced security protocols'
    ],
    benefits: [
      '10x faster processing speedReduced latency by 90%',
      'Enhanced security featuresCost-effective edge deployment'
    ],
    launchDate: '2025-02-01'
  },
  {
    id: 'micro-saas-automation-suite',
    title: 'Micro SAAS Automation Suite',
    description: 'Comprehensive automation platform designed specifically for micro SAAS businesses to streamline operations and scale efficiently.',
    category: 'Micro SAAS',
    price: 450,
    marketPrice: '$450/month',
    rating: 4.7,
    reviews: 234,
    aiScore: 88,
    features: [
      'Workflow automationCustomer lifecycle management',
      'Revenue optimizationPerformance analytics',
      'Integration managementScalability tools'
    ],
    benefits: [
      'Increase efficiency by 60%Reduce manual tasks by 80%',
      'Improve customer retentionFaster time to market'
    ],
    launchDate: '2025-01-20'
  },
  {
    id: 'intelligent-content-automation',
    title: 'Intelligent Content Automation Platform',
    description: 'AI-powered content creation and management platform that generates, optimizes, and distributes content across multiple channels.',
    category: 'Business',
    price: 750,
    marketPrice: '$750/month',
    rating: 4.6,
    reviews: 178,
    aiScore: 91,
    features: [
      'AI content generationMulti-channel distribution',
      'SEO optimizationPerformance analytics',
      'Brand consistency toolsAutomated scheduling'
    ],
    benefits: [
      'Reduce content creation time by 70%Improve SEO rankings',
      'Increase engagement ratesMaintain brand consistency'
    ],
    launchDate: '2025-02-10'
  },
  {
    id: 'advanced-cybersecurity-suite',
    title: 'Advanced Cybersecurity Suite',
    description: 'Comprehensive cybersecurity solution with AI-powered threat detection, automated response, and advanced protection mechanisms.',
    category: 'IT Services',
    price: 1200,
    marketPrice: '$1,200/month',
    rating: 4.9,
    reviews: 312,
    aiScore: 94,
    features: [
      'AI threat detectionAutomated incident response',
      'Advanced malware protectionReal-time monitoring',
      'Compliance managementSecurity analytics'
    ],
    benefits: [
      'Prevent 99.9% of cyber threatsReduce response time by 95%',
      'Ensure compliance standardsProtect critical assets'
    ],
    launchDate: '2025-01-05'
  }
],

export const getServicesByCategory = (category: string) => {
  if (category === 'all') return INNOVATIVE_SERVICES_2025,
  return INNOVATIVE_SERVICES_2025.filter(service => service.category === category)
},

export const getServicesByPriceRange = (priceRange: string) => {
  if (priceRange === 'all') return INNOVATIVE_SERVICES_2025,
  
  const [min, max] = priceRange.split('-').map(Number),
  if (priceRange === '3000+') {
    return INNOVATIVE_SERVICES_2025.filter(service => service.price >= 3000),
  }
  return INNOVATIVE_SERVICES_2025.filter(service => service.price >= min && service.price <= max),
},

export const getTopRatedServices = (limit: number = 5) => {
  return [...INNOVATIVE_SERVICES_2025]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit),
},