// Comprehensive Services Index 2030 - Zion Tech Group
// Complete catalog of all innovative services across all categories

import { innovativeMicroSaasServices2030 } from './innovativeMicroSaasServices2030';
import { innovativeITInfrastructureServices2030 } from './innovativeITInfrastructureServices2030';
import { innovativeAIServices2030 } from './innovativeAIServices2030';

export interface ServiceContact {
  phone: string;
  email: string;
  website: string;
  address: string;
}

export interface BaseService {
  id: number;
  name: string;
  category: string;
  description: string;
  contactInfo: ServiceContact;
  innovationLevel: string;
  marketSize: string;
  tags: string[];
}

export interface MicroSaasService extends BaseService {
  pricing: string;
  price: number;
  pricingModel: string;
  userLimit: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  integrations: string[];
  freeTier: boolean;
  trialPeriod: string;
  growthRate: string;
}

export interface ITInfrastructureService extends BaseService {
  hourlyRate: number;
  projectRate: number;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  responseTime: string;
  sla: string;
  certifications: string[];
  deliveryTime: string;
  support: string;
  compliance: string[];
}

export interface AIService extends BaseService {
  pricing: string;
  price: number;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  aiModels: string[];
  accuracy: string;
  trainingData: string;
  compliance: string[];
  aiScore: number;
  useCases: string[];
  ethicalAI: string[];
}

// Zion Tech Group Contact Information
export const zionContact: ServiceContact = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

// Service Categories for 2030
export const SERVICE_CATEGORIES_2030 = [
  'AI & Research',
  'AI & Healthcare',
  'AI & FinTech',
  'AI & Autonomous Systems',
  'AI & Environmental Tech',
  'AI & Content Creation',
  'AI & Cybersecurity',
  'AI & Operations',
  'AI & Customer Experience',
  'AI & Manufacturing',
  'Blockchain & Web3',
  'AI & Development',
  'AI & Operations',
  'AI & Content',
  'Cybersecurity',
  'AI & Green Tech',
  'AI & Legal Tech',
  'AI & Customer Support',
  'Quantum Computing',
  'Cybersecurity & Networking',
  'Cloud & DevOps',
  'Edge Computing & IoT',
  'Data Center & Automation',
  'Quantum Computing & Networking',
  'Sustainability & Green Tech',
  '5G & Telecommunications',
  'Hyperconvergence & Virtualization',
  'Blockchain & Distributed Ledger',
  'AI & Cybersecurity'
];

// Service Statistics for 2030
export const SERVICE_STATISTICS_2030 = {
  totalServices: innovativeMicroSaasServices2030.length + innovativeITInfrastructureServices2030.length + innovativeAIServices2030.length,
  microSaasServices: innovativeMicroSaasServices2030.length,
  itInfrastructureServices: innovativeITInfrastructureServices2030.length,
  aiServices: innovativeAIServices2030.length,
  categories: SERVICE_CATEGORIES_2030.length,
  averagePrice: {
    microSaas: '$599',
    itInfrastructure: '$32,500',
    ai: '$1,199'
  },
  totalMarketSize: '$45.2B',
  averageROI: '400-600%',
  averageSetupTime: '2-4 weeks',
  innovationLevels: {
    revolutionary: '40%',
    cuttingEdge: '35%',
    industryLeading: '25%'
  }
};

// Comprehensive Services Index combining all services
export const COMPREHENSIVE_SERVICES_INDEX_2030 = [
  // Micro SAAS Services
  ...innovativeMicroSaasServices2030.map(service => ({
    ...service,
    serviceType: 'Micro SAAS' as const,
    category: service.category,
    pricing: service.pricing,
    price: service.price,
    pricingModel: service.pricingModel,
    userLimit: service.userLimit,
    features: service.features,
    benefits: service.benefits,
    targetAudience: service.targetAudience,
    marketPrice: service.marketPrice,
    competitors: service.competitors,
    roi: service.roi,
    setupTime: service.setupTime,
    integrations: service.integrations,
    freeTier: service.freeTier,
    trialPeriod: service.trialPeriod,
    growthRate: service.growthRate
  })),

  // IT Infrastructure Services
  ...innovativeITInfrastructureServices2030.map(service => ({
    ...service,
    serviceType: 'IT Infrastructure' as const,
    category: service.category,
    hourlyRate: service.hourlyRate,
    projectRate: service.projectRate,
    features: service.features,
    benefits: service.benefits,
    targetAudience: service.targetAudience,
    marketPrice: service.marketPrice,
    responseTime: service.responseTime,
    sla: service.sla,
    certifications: service.certifications,
    deliveryTime: service.deliveryTime,
    support: service.support,
    compliance: service.compliance
  })),

  // AI Services
  ...innovativeAIServices2030.map(service => ({
    ...service,
    serviceType: 'AI Services' as const,
    category: service.category,
    pricing: service.pricing,
    price: service.price,
    pricingModel: service.pricingModel,
    features: service.features,
    benefits: service.benefits,
    targetAudience: service.targetAudience,
    marketPrice: service.marketPrice,
    aiModels: service.aiModels,
    accuracy: service.accuracy,
    trainingData: service.trainingData,
    compliance: service.compliance,
    aiScore: service.aiScore,
    useCases: service.useCases,
    ethicalAI: service.ethicalAI
  }))
];

// Service Search and Filter Functions
export const searchServices = (query: string, services = COMPREHENSIVE_SERVICES_INDEX_2030) => {
  const searchTerm = query.toLowerCase();
  return services.filter(service => 
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.category.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const filterServicesByCategory = (category: string, services = COMPREHENSIVE_SERVICES_INDEX_2030) => {
  if (category === 'all') return services;
  return services.filter(service => service.category === category);
};

export const filterServicesByType = (type: 'Micro SAAS' | 'IT Infrastructure' | 'AI Services', services = COMPREHENSIVE_SERVICES_INDEX_2030) => {
  return services.filter(service => service.serviceType === type);
};

export const filterServicesByPriceRange = (minPrice: number, maxPrice: number, services = COMPREHENSIVE_SERVICES_INDEX_2030) => {
  return services.filter(service => {
    if ('price' in service) {
      return service.price >= minPrice && service.price <= maxPrice;
    }
    if ('projectRate' in service) {
      return service.projectRate >= minPrice && service.projectRate <= maxPrice;
    }
    return false;
  });
};

export const filterServicesByInnovationLevel = (level: string, services = COMPREHENSIVE_SERVICES_INDEX_2030) => {
  return services.filter(service => service.innovationLevel === level);
};

// Service Analytics Functions
export const getServiceAnalytics = () => {
  const totalServices = COMPREHENSIVE_SERVICES_INDEX_2030.length;
  const totalMarketSize = COMPREHENSIVE_SERVICES_INDEX_2030.reduce((acc, service) => {
    if ('price' in service) {
      return acc + service.price;
    }
    if ('projectRate' in service) {
      return acc + service.projectRate;
    }
    return acc;
  }, 0);

  const averagePrice = totalMarketSize / totalServices;
  const categories = [...new Set(COMPREHENSIVE_SERVICES_INDEX_2030.map(s => s.category))];
  const innovationLevels = [...new Set(COMPREHENSIVE_SERVICES_INDEX_2030.map(s => s.innovationLevel))];

  return {
    totalServices,
    totalMarketSize: `$${totalMarketSize.toLocaleString()}`,
    averagePrice: `$${averagePrice.toLocaleString()}`,
    categories: categories.length,
    innovationLevels: innovationLevels.length,
    serviceTypes: {
      microSaas: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.serviceType === 'Micro SAAS').length,
      itInfrastructure: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.serviceType === 'IT Infrastructure').length,
      aiServices: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.serviceType === 'AI Services').length
    }
  };
};

// Featured Services (Top 6 by innovation level and market potential)
export const getFeaturedServices = () => {
  return COMPREHENSIVE_SERVICES_INDEX_2030
    .sort((a, b) => {
      // Sort by innovation level (Revolutionary > Cutting-edge > Industry-leading)
      const levelOrder = { 'Revolutionary': 3, 'Cutting-edge': 2, 'Industry-leading': 1, 'Advanced': 0 };
      const aLevel = levelOrder[a.innovationLevel as keyof typeof levelOrder] || 0;
      const bLevel = levelOrder[b.innovationLevel as keyof typeof levelOrder] || 0;
      
      if (aLevel !== bLevel) return bLevel - aLevel;
      
      // Then sort by market size
      const aMarket = parseFloat(a.marketSize.replace(/[^0-9.]/g, ''));
      const bMarket = parseFloat(b.marketSize.replace(/[^0-9.]/g, ''));
      return bMarket - aMarket;
    })
    .slice(0, 6);
};

// Trending Services (Services with highest growth rates)
export const getTrendingServices = () => {
  return COMPREHENSIVE_SERVICES_INDEX_2030
    .filter(service => 'growthRate' in service)
    .sort((a, b) => {
      const aGrowth = parseFloat((a as any).growthRate.replace(/[^0-9.]/g, ''));
      const bGrowth = parseFloat((b as any).growthRate.replace(/[^0-9.]/g, ''));
      return bGrowth - aGrowth;
    })
    .slice(0, 6);
};

export default {
  COMPREHENSIVE_SERVICES_INDEX_2030,
  SERVICE_CATEGORIES_2030,
  SERVICE_STATISTICS_2030,
  zionContact,
  searchServices,
  filterServicesByCategory,
  filterServicesByType,
  filterServicesByPriceRange,
  filterServicesByInnovationLevel,
  getServiceAnalytics,
  getFeaturedServices,
  getTrendingServices
};