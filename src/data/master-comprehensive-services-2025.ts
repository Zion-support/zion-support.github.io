// Master Comprehensive Services 2025
// This file combines all existing services with the new comprehensive expansion
import { enhancedMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from './comprehensiveServices2025';
import { 
  allExpandedServices2025,
  getServicesByCategory,
  getServicesByPriceRange,
  getPopularServices,
  searchServices
} from './comprehensive-services-expansion-2025';
import {
  allAdditionalServices2025,
  getAdditionalServicesByCategory,
  getAdditionalServicesByPriceRange,
  getAdditionalPopularServices,
  searchAdditionalServices
} from './comprehensive-services-expansion-2025-part2';
import {
  allCuttingEdgeServices2025,
  getCuttingEdgeServicesByCategory,
  getCuttingEdgeServicesByPriceRange,
  getCuttingEdgePopularServices,
  searchCuttingEdgeServices
} from './comprehensive-services-expansion-2025-part3';
// Union type for all services
export type AnyService = 
  | typeof enhancedMicroSaasServices2025[0]
  | typeof enhancedITServices2025[0]
  | typeof enhancedAIServices2025[0]
  | any; // For the new services
// Master services object combining all services
export const masterComprehensiveServices2025 = {
  // Original services
  original: {
    microSaas: enhancedMicroSaasServices2025,
    itServices: enhancedITServices2025,
    aiServices: enhancedAIServices2025
  },
  // Expanded services
  expanded: allExpandedServices2025,
  // Additional services
  additional: allAdditionalServices2025,
  // Cutting-edge services
  cuttingEdge: allCuttingEdgeServices2025
};
// Get all services as a flat array
export const getAllServices = (): AnyService[] => {
  const allServices = [
    ...enhancedMicroSaasServices2025,
    ...enhancedITServices2025,
    ...enhancedAIServices2025,
    ...Object.values(allExpandedServices2025).flat(),
    ...Object.values(allAdditionalServices2025).flat(),
    ...Object.values(allCuttingEdgeServices2025).flat()
  ];
  return allServices;
};
// Get services by category across all service types
export const getMasterServicesByCategory = (category: string): AnyService[] => {
  const allServices = getAllServices();
  return allServices.filter(service => service.category === category);
};
// Get services by price range across all service types
export const getMasterServicesByPriceRange = (minPrice: number, maxPrice: number): AnyService[] => {
  const allServices = getAllServices();
  return allServices.filter(service => {
    if ('price' in service && typeof service.price === 'number') {
      return service.price >= minPrice && service.price <= maxPrice;
    }
    if ('hourlyRate' in service && typeof service.hourlyRate === 'number') {
      return service.hourlyRate >= minPrice && service.hourlyRate <= maxPrice;
    }
    if ('projectRate' in service && typeof service.projectRate === 'number') {
      return service.projectRate >= minPrice && service.projectRate <= maxPrice;
    }
    return false;
  });
};
// Get popular services across all categories
export const getMasterPopularServices = (limit: number = 20): AnyService[] => {
  const allServices = getAllServices();
  return allServices.slice(0, limit);
};
// Search services across all categories
export const searchMasterServices = (query: string): AnyService[] => {
  const allServices = getAllServices();
  const searchTerm = query.toLowerCase();
  return allServices.filter(service => 
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};
// Get services by technology/domain
export const getMasterServicesByTechnology = (technology: string): AnyService[] => {
  const allServices = getAllServices();
  const techTerm = technology.toLowerCase();
  return allServices.filter(service => 
    service.tags.some(tag => tag.toLowerCase().includes(techTerm)) ||
    service.description.toLowerCase().includes(techTerm) ||
    service.name.toLowerCase().includes(techTerm)
  );
};
// Get services by target audience
export const getMasterServicesByAudience = (audience: string): AnyService[] => {
  const allServices = getAllServices();
  const audienceTerm = audience.toLowerCase();
  return allServices.filter(service => 
    service.targetAudience.some(target => target.toLowerCase().includes(audienceTerm))
  );
};
// Get services by pricing tier
export const getMasterServicesByPricing = (pricing: string): AnyService[] => {
  const allServices = getAllServices();
  const pricingTerm = pricing.toLowerCase();
  return allServices.filter(service => {
    if ('pricing' in service) {
      return service.pricing.toLowerCase().includes(pricingTerm);
    }
    return false;
  });
};
// Get services statistics
export const getMasterServicesStats = () => {
  const allServices = getAllServices();
  
  const stats = {
    totalServices: allServices.length,
    byType: {
      microSaas: allServices.filter(s => 'pricing' in s && 'userLimit' in s).length,
      itServices: allServices.filter(s => 'hourlyRate' in s && 'projectRate' in s).length,
      aiServices: allServices.filter(s => 'aiModels' in s && 'aiScore' in s).length
    },
    byPricing: {
      freemium: allServices.filter(s => 'pricing' in s && s.pricing === 'Freemium').length,
      professional: allServices.filter(s => 'pricing' in s && s.pricing === 'Professional').length,
      enterprise: allServices.filter(s => 'pricing' in s && s.pricing === 'Enterprise').length
    },
    categories: [...new Set(allServices.map(s => s.category))].length,
    priceRanges: {
      low: allServices.filter(s => {
        if ('price' in s && typeof s.price === 'number') return s.price < 100;
        if ('hourlyRate' in s && typeof s.hourlyRate === 'number') return s.hourlyRate < 100;
        return false;
      }).length,
      medium: allServices.filter(s => {
        if ('price' in s && typeof s.price === 'number') return s.price >= 100 && s.price < 1000;
        if ('hourlyRate' in s && typeof s.hourlyRate === 'number') return s.hourlyRate >= 100 && s.hourlyRate < 200;
        return false;
      }).length,
      high: allServices.filter(s => {
        if ('price' in s && typeof s.price === 'number') return s.price >= 1000;
        if ('hourlyRate' in s && typeof s.hourlyRate === 'number') return s.hourlyRate >= 200;
        return false;
      }).length
    }
  };
  
  return stats;
};
// Get featured services (high-value, innovative services)
export const getMasterFeaturedServices = (limit: number = 10): AnyService[] => {
  const allServices = getAllServices();
  
  // Score services based on various factors
  const scoredServices = allServices.map(service => {
    let score = 0;
    
    // Base score for AI services
    if ('aiScore' in service && typeof service.aiScore === 'number') {
      score += service.aiScore;
    }
    
    // Score for pricing (lower price = higher score for accessibility)
    if ('price' in service && typeof service.price === 'number') {
      if (service.price < 100) score += 20;
      else if (service.price < 500) score += 15;
      else if (service.price < 1000) score += 10;
      else score += 5;
    }
    
    // Score for features
    if ('features' in service && Array.isArray(service.features)) {
      score += service.features.length * 2;
    }
    
    // Score for benefits
    if ('benefits' in service && Array.isArray(service.benefits)) {
      score += service.benefits.length * 2;
    }
    
    // Bonus for cutting-edge categories
    const cuttingEdgeCategories = [
      'Quantum Computing', 'Neuromorphic Computing', 'Brain-Computer Interface',
      'Synthetic Biology', 'Fusion Energy', 'Hyperloop', '4D Manufacturing'
    ];
    if (cuttingEdgeCategories.includes(service.category)) {
      score += 25;
    }
    
    return { ...service, score };
  });
  
  // Sort by score and return top services
  return scoredServices
    .sort((a, b) => (b as any).score - (a as any).score)
    .slice(0, limit);
};
// Get trending services (services with high ROI and innovation)
export const getMasterTrendingServices = (limit: number = 10): AnyService[] => {
  const allServices = getAllServices();
  
  const trendingServices = allServices.filter(service => {
    // Look for services with high ROI indicators
    if ('roi' in service) {
      const roiText = service.roi.toLowerCase();
      return roiText.includes('300%') || roiText.includes('400%') || 
             roiText.includes('500%') || roiText.includes('600%') ||
             roiText.includes('800%');
    }
    return false;
  });
  
  return trendingServices.slice(0, limit);
};
// Export all helper functions
export {
  getServicesByCategory,
  getServicesByPriceRange,
  getPopularServices,
  searchServices,
  getAdditionalServicesByCategory,
  getAdditionalServicesByPriceRange,
  getAdditionalPopularServices,
  searchAdditionalServices,
  getCuttingEdgeServicesByCategory,
  getCuttingEdgeServicesByPriceRange,
  getCuttingEdgePopularServices,
  searchCuttingEdgeServices
};
// Default export
export default masterComprehensiveServices2025;