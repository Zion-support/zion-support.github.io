// Optimized services data loader with chunking
import { servicesData } from './servicesData';

// Split services data into smaller chunks for better loading performance
export const servicesDataChunks = {
  // Core services (loaded immediately)
  core: {
    aiServices: servicesData.aiServices.slice(0, 3), // First 3 AI services
    microSaas: servicesData.microSaas.slice(0, 3), // First 3 Micro SaaS services
    itSolutions: servicesData.itSolutions.slice(0, 3), // First 3 IT solutions
  },
  
  // Extended services (lazy loaded)
  extended: {
    aiServices: servicesData.aiServices.slice(3),
    microSaas: servicesData.microSaas.slice(3),
    itSolutions: servicesData.itSolutions.slice(3),
    newAIServices: servicesData.newAIServices,
    newITServices: servicesData.newITServices,
  },
  
  // Metadata (always loaded)
  metadata: {
    totalServices: Object.values(servicesData).reduce((acc, services) => 
      acc + (Array.isArray(services) ? services.length : 0), 0
    ),
    categories: Object.keys(servicesData),
    lastUpdated: new Date().toISOString(),
  }
};

// Lazy load functions for different chunks
export const loadCoreServices = async () => {
  return servicesDataChunks.core;
};

export const loadExtendedServices = async () => {
  return servicesDataChunks.extended;
};

export const loadAllServices = async () => {
  return servicesData;
};

// Load specific category
export const loadServiceCategory = async (category: string) => {
  const data = await loadAllServices();
  return data[category as keyof typeof data] || [];
};

// Load specific service by ID
export const loadServiceById = async (serviceId: string) => {
  const data = await loadAllServices();
  
  for (const category in data) {
    const services = data[category as keyof typeof data];
    if (Array.isArray(services)) {
      const service = services.find(s => s.id === serviceId);
      if (service) return service;
    }
  }
  
  return null;
};

// Search services
export const searchServices = async (query: string) => {
  const data = await loadAllServices();
  const results = [];
  
  for (const category in data) {
    const services = data[category as keyof typeof data];
    if (Array.isArray(services)) {
      const matches = services.filter(service => 
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()) ||
        service.features.some(feature => 
          feature.toLowerCase().includes(query.toLowerCase())
        )
      );
      results.push(...matches);
    }
  }
  
  return results;
};

// Get service statistics
export const getServiceStats = async () => {
  const data = await loadAllServices();
  const stats = {
    totalServices: 0,
    categories: {},
    averagePrice: 0,
    priceRange: { min: Infinity, max: 0 }
  };
  
  for (const category in data) {
    const services = data[category as keyof typeof data];
    if (Array.isArray(services)) {
      (stats.categories as any)[category] = services.length;
      stats.totalServices += services.length;
      
      services.forEach(service => {
        if (service.pricing) {
          const prices = Object.values(service.pricing);
          const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
          stats.averagePrice += avgPrice;
          stats.priceRange.min = Math.min(stats.priceRange.min, ...prices);
          stats.priceRange.max = Math.max(stats.priceRange.max, ...prices);
        }
      });
    }
  }
  
  stats.averagePrice = stats.averagePrice / stats.totalServices;
  return stats;
};