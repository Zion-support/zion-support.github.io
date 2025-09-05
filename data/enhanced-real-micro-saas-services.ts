export interface MicroSaasService {
  id: string;  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  category: string;
  color: string;}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    tagline: 'Generate high-quality content with AI',
    price: '$29',
    period: '/month',
    description: 'AI-powered content generation for blogs, social media, and marketing materials.',
    features: ['AI writing assistant', 'Multiple content types', 'SEO optimization', 'Team collaboration'],    popular: true,
    icon: '🤖',
    category: 'AI & Machine Learning',
    color: 'blue'  }
],

export const serviceCategories = [  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'Data Analytics'
];
// Helper functions
export const getServicesByCategory = (categoryName: string): EnhancedRealMicroSaasService[] => {
  if (categoryName === 'All' || categoryName === 'all') {
    return enhancedRealMicroSaasServices
  }
  
  // Map category names to match service categories
  const categoryMapping: { [key: string]: string[] } = {
    'Quantum Computing': ['Quantum AI & ComputingQuantum Technology'],
    'AI & Machine Learning': ['AI & Content CreationAI & Customer ServiceAI & Sales AutomationAI & Data AnalyticsAI & Legal TechAI & HR TechAI & Market ResearchAI & Video Production', 'AI & SEOAI & BlockchainAI & IoTAdvanced AI Services'],
    'Cybersecurity': ['Cybersecurity & PrivacyCybersecurity'],
    'Blockchain & Web3': ['Blockchain & DeFiAI & Blockchain'],
    'IoT & Smart Cities': ['Edge Computing & IoTAI & IoTIoT & Smart Cities'],
    'Metaverse & VR/AR': ['Metaverse & VR/AR'],
    'Robotics & Automation': ['Robotics & AutomationAutonomous Systems'],
    'Energy & Sustainability': ['Energy & SustainabilityClimate Technology'],
    'Logistics & Supply Chain': ['Logistics & Supply Chain'],
    'Financial Technology': ['Financial TechnologyFinancial Technology & TradingQuantum Finance & Trading'],
    'Biotechnology & Healthcare': ['Biotechnology & HealthcareBiomedical AIBiotechnology & Healthcare AI'],
    'Space Technology': ['Space Technology & Aerospace'],
    'Content Creation': ['AI & Content CreationAI & Video Production'],
    'Analytics & Business Intelligence': ['AI & Data AnalyticsAI & Market Research'],
    'Cloud & Infrastructure': ['Cloud PlatformEdge Computing & IoT'],
    'Climate Technology': ['Climate Technology']
  },

  return enhancedRealMicroSaasServices.filter(service => {
    const serviceCategories = service.category || '';
    return categoryMapping[categoryName]?.some(cat => 
      serviceCategories.includes(cat)
    ) || false;
  });
};

// Service categories
export const serviceCategories = [
  'AllAI & Enterprise AutomationQuantum AI & BiotechAI & CybersecurityQuantum AI & FinanceAI & Supply ChainQuantum AI & ClimateAI & Manufacturing',
  'Quantum AI & HealthcareAI & LogisticsQuantum AI & EnergyAI & EducationQuantum AI & CybersecurityAI & MarketingQuantum AI & ResearchAI & Legal Services',
  'Quantum AI & Autonomous VehiclesAI & Real EstateQuantum AI & CyberneticsQuantum AI & Space Technology',
  // ADDITIONAL INNOVATIVE CATEGORIES
  'AI & Content CreationAI & Customer ServiceAI & Sales AutomationAI & Data AnalyticsAI & HR TechAI & Market ResearchAI & Video ProductionAI & SEO',
  'AI & BlockchainAI & IoTAI & Machine LearningQuantum Computing & AIQuantum Finance & TradingQuantum TechnologyAutonomous ManufacturingAutonomous Systems',
  'Quantum CybersecuritySpace Technology & AerospaceMetaverse & VR/ARMetaverse & Virtual RealityBiomedical AINeural TechnologyBlockchain & DeFiEdge Computing & IoT',
  'Manufacturing & Industry 4.0Cybersecurity & PrivacyHealthcare & BiotechnologyFinancial TechnologyFinancial Technology & TradingEnergy & SustainabilityIoT & Smart CitiesClimate Technology',
  'Robotics & AutomationAgriculture & Food Tech'
];

export const getPopularServices = () => {
  return allEnhancedRealMicroSaasServices.filter(service => service.popular)
},

export const getServicesByPriceRange = (min: number, max: number) => {
  return allEnhancedRealMicroSaasServices.filter(service => {
    const price = parseInt(service.price.replace('$', '')),
    return price >= min && (max === Infinity ? true : price <= max)
  })
},

export const serviceCategories = [
  'AllQuantum ComputingAI & Machine LearningCybersecurityBiomedical & HealthcareFinancial TechnologyContent & MarketingData Analytics & BI',
  'Customer Service & SupportSupply Chain & LogisticsHuman ResourcesLegal TechnologySales & MarketingBlockchain & Web3IoT & Edge ComputingCloud & Infrastructure',
  'Video & MediaSEO & Digital MarketingAutomation & RoboticsEdge ComputingPredictive Analytics'
],
