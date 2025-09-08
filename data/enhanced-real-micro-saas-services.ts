

tagline: string;
price: string;
period: string;
description: string;
features: string[];
popular: boolean;
icon: string;
category: string;
}export const microSaasServices: MicroSaasService[] = [ {
  id: 'ai - content - generator';
name: 'AI Content Generator';
tagline: 'Generate high - quality content with AI';
price: '$29';
period: '/month';
popular: true;
icon: '🤖';
category: 'AI & Machine Learning';
}];
'All';
'AI & Machine Learning';
'Cybersecurity';
'Cloud Computing';
'Data Analytics' ];


export interface MicroSaasService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  category: string;
  color: string;
}

export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [
  // Revolutionary Quantum AI Services
  {
    id: 'quantum-ai-cognitive-platform',
    name: 'Quantum AI Cognitive Platform',
    tagline: 'Revolutionary quantum AI platform with unprecedented problem-solving capabilities',
    price: '$1,299',
    period: '/month',
    description: 'AI-powered content generation for blogs, social media, and marketing materials.',
    features: ['AI writing assistant', 'Multiple content types', 'SEO optimization', 'Team collaboration'],
    popular: true,
    icon: '🤖',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/autonomous-ai-agents',
    marketPosition: 'Cutting-edge autonomous AI platform. Competes with traditional RPA tools but offers true AI autonomy.',
    targetAudience: 'Enterprise businesses, E-commerce companies, Customer service teams, Operations managers, Data analysts',
    trialDays: 21,
    setupTime: '1-2 days',
    category: 'AI & Machine Learning',
    color: 'blue'
  }
];

// Helper functions
export const getServicesByCategory = (categoryName: string): EnhancedRealMicroSaasService[] => {
  if (categoryName === 'All' || categoryName === 'all') {
    return enhancedRealMicroSaasServices
  }
// Service categories
export const serviceCategories = [
  'AllAI & Enterprise Automation',
  'Quantum AI & BiotechAI & Cybersecurity',
  'Quantum AI & FinanceAI & Supply Chain',
  'Quantum AI & ClimateAI & Manufacturing',
  'Quantum AI & HealthcareAI & Logistics',
  'Quantum AI & EnergyAI & Education',
  'Quantum AI & CybersecurityAI & Marketing',
  'Quantum AI & ResearchAI & Legal Services',
  'Quantum AI & Autonomous VehiclesAI & Real Estate',
  'Quantum AI & CyberneticsQuantum AI & Space Technology',
  // ADDITIONAL INNOVATIVE CATEGORIES
  'AI & Content CreationAI & Customer Service',
  'AI & Sales AutomationAI & Data Analytics',
  'AI & HR TechAI & Market Research',
  'AI & Video ProductionAI & SEO',
  'AI & BlockchainAI & IoT',
  'AI & Machine LearningQuantum Computing & AI',
  'Quantum Finance & TradingQuantum Technology',
  'Autonomous ManufacturingAutonomous Systems',
  'Quantum CybersecuritySpace Technology & Aerospace',
  'Metaverse & VR/ARMetaverse & Virtual Reality',
  'Biomedical AINeural Technology',
  'Blockchain & DeFiEdge Computing & IoT',
  'Manufacturing & Industry 4.0Cybersecurity & Privacy',
  'Healthcare & BiotechnologyFinancial Technology',
  'Financial Technology & TradingEnergy & Sustainability',
  'IoT & Smart CitiesClimate Technology',
  'Robotics & AutomationAgriculture & Food Tech'
];

// Combined all services
export const allEnhancedRealMicroSaasServices = enhancedRealMicroSaasServices;


export const getServicesByCategory = (category: string) => {
  if (category === 'All') return allEnhancedRealMicroSaasServices;
  return allEnhancedRealMicroSaasServices.filter(service => service.category === category)
};
export const getPopularServices = () => {
  return allEnhancedRealMicroSaasServices.filter(service => service.popular)
};
export const getServicesByPriceRange = (min: number, max: number) => {
  return allEnhancedRealMicroSaasServices.filter(service => {
    const price = parseInt(service.price.replace('$', ''));
    return price >= min && (max === Infinity ? true : price <= max)
  })
};
export const serviceCategories = [
  'AllQuantum ComputingAI & Machine LearningCybersecurityBiomedical & HealthcareFinancial TechnologyContent & MarketingData Analytics & BI';
  'Customer Service & SupportSupply Chain & LogisticsHuman ResourcesLegal TechnologySales & MarketingBlockchain & Web3IoT & Edge ComputingCloud & Infrastructure';
  'Video & MediaSEO & Digital MarketingAutomation & RoboticsEdge ComputingPredictive Analytics'
];
;
  
  // Map category names to match service categories
  const categoryMapping: { [key: string]: string[] } = {
    'Quantum Computing': ['Quantum AI & ComputingQuantum Technology'],
    'AI & Machine Learning': ['AI & Content CreationAI & Customer Service', 'AI & Sales AutomationAI & Data Analytics', 'AI & Legal TechAI & HR Tech', 'AI & Market ResearchAI & Video Production', 'AI & SEOAI & Blockchain', 'AI & IoTAdvanced AI Services'],
    'Cybersecurity': ['Cybersecurity & PrivacyCybersecurity'],
    'Blockchain & Web3': ['Blockchain & DeFiAI & Blockchain'],
    'IoT & Smart Cities': ['Edge Computing & IoTAI & IoT', 'IoT & Smart Cities'],
    'Metaverse & VR/AR': ['Metaverse & VR/AR'],
    'Robotics & Automation': ['Robotics & AutomationAutonomous Systems'],
    'Energy & Sustainability': ['Energy & SustainabilityClimate Technology'],
    'Logistics & Supply Chain': ['Logistics & Supply Chain'],
    'Financial Technology': ['Financial TechnologyFinancial Technology & Trading', 'Quantum Finance & Trading'],
    'Biotechnology & Healthcare': ['Biotechnology & HealthcareBiomedical AI', 'Biotechnology & Healthcare AI'],
    'Space Technology': ['Space Technology & Aerospace'],
    'Content Creation': ['AI & Content CreationAI & Video Production'],
    'Analytics & Business Intelligence': ['AI & Data AnalyticsAI & Market Research'],
    'Cloud & Infrastructure': ['Cloud PlatformEdge Computing & IoT'],
    'Climate Technology': ['Climate Technology']
  };

  // Find matching categories
  const matchingCategories = categoryMapping[categoryName] || [];
  
  return enhancedRealMicroSaasServices.filter(service => 
    matchingCategories.some(category => 
      service.category.includes(category)
    )
  );
};

// Service categories
export const serviceCategories = [
  'AllAI & Enterprise Automation',
  'Quantum AI & BiotechAI & Cybersecurity',
  'Quantum AI & FinanceAI & Supply Chain',
  'Quantum AI & ClimateAI & Manufacturing',
  'Quantum AI & HealthcareAI & Logistics',
  'Quantum AI & EnergyAI & Education',
  'Quantum AI & CybersecurityAI & Marketing',
  'Quantum AI & ResearchAI & Legal Services',
  'Quantum AI & Autonomous VehiclesAI & Real Estate',
  'Quantum AI & CyberneticsQuantum AI & Space Technology',
  // ADDITIONAL INNOVATIVE CATEGORIES
  'AI & Content CreationAI & Customer Service',
  'AI & Sales AutomationAI & Data Analytics',
  'AI & HR TechAI & Market Research',
  'AI & Video ProductionAI & SEO',
  'AI & BlockchainAI & IoT',
  'AI & Machine LearningQuantum Computing & AI',
  'Quantum Finance & TradingQuantum Technology',
  'Autonomous ManufacturingAutonomous Systems',
  'Quantum CybersecuritySpace Technology & Aerospace',
  'Metaverse & VR/ARMetaverse & Virtual Reality',
  'Biomedical AINeural Technology',
  'Blockchain & DeFiEdge Computing & IoT',
  'Manufacturing & Industry 4.0Cybersecurity & Privacy',
  'Healthcare & BiotechnologyFinancial Technology',
  'Financial Technology & TradingEnergy & Sustainability',
  'IoT & Smart CitiesClimate Technology',
  'Robotics & AutomationAgriculture & Food Tech'
];

// Combined all services
export const allEnhancedRealMicroSaasServices = enhancedRealMicroSaasServices;


;
