import { COMPREHENSIVE_SERVICES } from './comprehensiveServices';
import { ENHANCED_MICRO_SAAS_SERVICES } from './enhancedMicroSaasServices';
import { INNOVATIVE_NEW_SERVICES } from './innovativeNewServices';

export interface UltimateComprehensiveService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology?: string[];
  integrations?: string[];
  compliance?: string[];
  roi?: string;
  competitors?: string[];
  demoUrl?: string;
  freeTrial?: boolean;
  setupFee?: number;
  serviceType: 'core' | 'micro-saas' | 'innovative' | 'enterprise';
  featured?: boolean;
  trending?: boolean;
}

// Transform existing services to match the new interface
const transformExistingServices = () => {
  const transformed = COMPREHENSIVE_SERVICES.map(service => ({
    ...service,
    serviceType: 'core' as const,
    featured: false,
    trending: false
  }));

  const transformedMicroSaas = ENHANCED_MICRO_SAAS_SERVICES.map(service => ({
    ...service,
    serviceType: 'micro-saas' as const,
    featured: true,
    trending: true
  }));

  const transformedInnovative = INNOVATIVE_NEW_SERVICES.map(service => ({
    ...service,
    serviceType: 'innovative' as const,
    featured: true,
    trending: true
  }));

  return [...transformed, ...transformedMicroSaas, ...transformedInnovative];
};

export const ULTIMATE_COMPREHENSIVE_SERVICES: UltimateComprehensiveService[] = transformExistingServices();

// Service categories for easy filtering
export const SERVICE_CATEGORIES = {
  'AI & Machine Learning': 'AI & Machine Learning',
  'AI & Business Intelligence': 'AI & Business Intelligence',
  'AI & Customer Service': 'AI & Customer Service',
  'AI & Sales': 'AI & Sales',
  'AI & HR': 'AI & HR',
  'AI & Finance': 'AI & Finance',
  'AI & Operations': 'AI & Operations',
  'AI & Legal': 'AI & Legal',
  'AI & Healthcare': 'AI & Healthcare',
  'AI & Real Estate': 'AI & Real Estate',
  'AI & Energy': 'AI & Energy',
  'AI & Marketing': 'AI & Marketing',
  'Cybersecurity': 'Cybersecurity',
  'IT Infrastructure': 'IT Infrastructure',
  'Cloud & DevOps': 'Cloud & DevOps',
  'Digital Transformation': 'Digital Transformation',
  'Quantum Technology': 'Quantum Technology',
  'Industry Solutions': 'Industry Solutions',
  'Micro SaaS Solutions': 'Micro SaaS Solutions'
};

// Service types for filtering
export const SERVICE_TYPES = {
  'core': 'Core Services',
  'micro-saas': 'Micro SaaS Solutions',
  'innovative': 'Innovative New Services',
  'enterprise': 'Enterprise Solutions'
};

// Pricing tiers for easy filtering
export const PRICING_TIERS = {
  'budget': { min: 0, max: 199, label: 'Budget ($0 - $199)' },
  'professional': { min: 200, max: 599, label: 'Professional ($200 - $599)' },
  'enterprise': { min: 600, max: 1999, label: 'Enterprise ($600 - $1,999)' },
  'premium': { min: 2000, max: 999999, label: 'Premium ($2,000+)' }
};

// Support levels
export const SUPPORT_LEVELS = {
  'basic': 'Basic Support',
  'premium': 'Premium Support',
  'enterprise': 'Enterprise Support'
};

// Helper functions for service management
export const getServicesByCategory = (category: string) => {
  return ULTIMATE_COMPREHENSIVE_SERVICES.filter(service => service.category === category);
};

export const getServicesByType = (type: keyof typeof SERVICE_TYPES) => {
  return ULTIMATE_COMPREHENSIVE_SERVICES.filter(service => service.serviceType === type);
};

export const getServicesByPriceRange = (min: number, max: number) => {
  return ULTIMATE_COMPREHENSIVE_SERVICES.filter(service => 
    service.price >= min && service.price <= max
  );
};

export const getFeaturedServices = () => {
  return ULTIMATE_COMPREHENSIVE_SERVICES.filter(service => service.featured);
};

export const getTrendingServices = () => {
  return ULTIMATE_COMPREHENSIVE_SERVICES.filter(service => service.trending);
};

export const getServicesByTag = (tag: string) => {
  return ULTIMATE_COMPREHENSIVE_SERVICES.filter(service => 
    service.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

// Service statistics
export const getServiceStatistics = () => {
  const total = ULTIMATE_COMPREHENSIVE_SERVICES.length;
  const byType = {
    core: ULTIMATE_COMPREHENSIVE_SERVICES.filter(s => s.serviceType === 'core').length,
    microSaas: ULTIMATE_COMPREHENSIVE_SERVICES.filter(s => s.serviceType === 'micro-saas').length,
    innovative: ULTIMATE_COMPREHENSIVE_SERVICES.filter(s => s.serviceType === 'innovative').length,
    enterprise: ULTIMATE_COMPREHENSIVE_SERVICES.filter(s => s.serviceType === 'enterprise').length
  };

  const byCategory = ULTIMATE_COMPREHENSIVE_SERVICES.reduce((acc, service) => {
    acc[service.category] = (acc[service.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const averagePrice = ULTIMATE_COMPREHENSIVE_SERVICES.reduce((sum, service) => sum + service.price, 0) / total;

  return {
    total,
    byType,
    byCategory,
    averagePrice: Math.round(averagePrice),
    featured: ULTIMATE_COMPREHENSIVE_SERVICES.filter(s => s.featured).length,
    trending: ULTIMATE_COMPREHENSIVE_SERVICES.filter(s => s.trending).length
  };
};

// Search functionality
export const searchServices = (query: string) => {
  const searchTerm = query.toLowerCase();
  return ULTIMATE_COMPREHENSIVE_SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    service.category.toLowerCase().includes(searchTerm) ||
    service.subcategory.toLowerCase().includes(searchTerm)
  );
};

// Get related services
export const getRelatedServices = (serviceId: string, limit: number = 5) => {
  const currentService = ULTIMATE_COMPREHENSIVE_SERVICES.find(s => s.id === serviceId);
  if (!currentService) return [];

  return ULTIMATE_COMPREHENSIVE_SERVICES
    .filter(s => 
      s.id !== serviceId && 
      (s.category === currentService.category || 
       s.subcategory === currentService.subcategory ||
       s.tags.some(tag => currentService.tags.includes(tag)))
    )
    .slice(0, limit);
};

// Get services by ROI
export const getServicesByROI = () => {
  return ULTIMATE_COMPREHENSIVE_SERVICES
    .filter(s => s.roi)
    .sort((a, b) => {
      const aROI = parseInt(a.roi?.match(/\d+/)?.[0] || '0');
      const bROI = parseInt(b.roi?.match(/\d+/)?.[0] || '0');
      return bROI - aROI;
    });
};

// Get services with free trials
export const getServicesWithFreeTrials = () => {
  return ULTIMATE_COMPREHENSIVE_SERVICES.filter(s => s.freeTrial);
};

// Get services by delivery time
export const getServicesByDeliveryTime = () => {
  return ULTIMATE_COMPREHENSIVE_SERVICES.sort((a, b) => {
    const aTime = parseInt(a.estimatedDelivery.match(/\d+/)?.[0] || '999');
    const bTime = parseInt(b.estimatedDelivery.match(/\d+/)?.[0] || '999');
    return aTime - bTime;
  });
};