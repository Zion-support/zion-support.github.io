// Zion Tech Group Comprehensive Services Index
// This file provides easy access to all our cutting-edge services

export { zionCuttingEdgeServices2029 } from './zion-2029-cutting-edge-services';
export { zionEmergingTechServices2029 } from './zion-2029-emerging-tech-services';

// Import all service types for easy access
import { zionCuttingEdgeServices2029 } from './zion-2029-cutting-edge-services';
import { zionEmergingTechServices2029 } from './zion-2029-emerging-tech-services';

// Combined services array
export const allZionServices = [
  ...zionCuttingEdgeServices2029,
  ...zionEmergingTechServices2029
];

// Service categories
export const serviceCategories = [
  'AI',
  'IT',
  'SAAS',
  'Development',
  'Cloud',
  'Security',
  'Analytics',
  'Automation',
  'Fintech',
  'Healthcare',
  'IoT',
  'Blockchain',
  'Space',
  'Energy',
  'Transportation',
  'Biotech',
  'Robotics',
  'AR/VR',
  'Quantum',
  'Nanotech',
  'GreenTech',
  'SmartCities',
  'DigitalTwin',
  'Metaverse'
] as const;

// Utility functions
export const getServicesByCategory = (category: string) => {
  return allZionServices.filter(service => 
    service.category.toLowerCase() === category.toLowerCase()
  );
};

export const getPopularServices = () => {
  return allZionServices.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return allZionServices.filter(service => service.isNew);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return allZionServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && price <= maxPrice;
  });
};

export const getServicesByRating = (minRating: number) => {
  return allZionServices.filter(service => service.rating >= minRating);
};

export const searchServices = (query: string) => {
  const searchTerm = query.toLowerCase();
  return allZionServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tagline.toLowerCase().includes(searchTerm) ||
    service.category.toLowerCase().includes(searchTerm) ||
    service.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
    service.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm))
  );
};

// Service statistics
export const getServiceStats = () => {
  const totalServices = allZionServices.length;
  const popularServices = getPopularServices().length;
  const newServices = getNewServices().length;
  const totalCustomers = allZionServices.reduce((sum, service) => sum + service.customers, 0);
  const averageRating = allZionServices.reduce((sum, service) => sum + service.rating, 0) / totalServices;
  const totalReviews = allZionServices.reduce((sum, service) => sum + service.reviews, 0);

  return {
    totalServices,
    popularServices,
    newServices,
    totalCustomers,
    averageRating: Math.round(averageRating * 10) / 10,
    totalReviews
  };
};

// Market insights
export const getMarketInsights = () => {
  const marketSizes = allZionServices.map(service => ({
    category: service.category,
    marketSize: service.marketSize,
    growthRate: service.growthRate
  }));

  const uniqueMarkets = marketSizes.filter((market, index, self) => 
    index === self.findIndex(m => m.category === market.category)
  );

  return uniqueMarkets;
};

// Technology stack overview
export const getTechnologyStack = () => {
  const allTechnologies = allZionServices.flatMap(service => service.technology);
  const technologyCount = allTechnologies.reduce((acc, tech) => {
    acc[tech] = (acc[tech] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(technologyCount)
    .sort(([,a], [,b]) => b - a)
    .map(([tech, count]) => ({ technology: tech, usageCount: count }));
};

// Integration overview
export const getIntegrationOverview = () => {
  const allIntegrations = allZionServices.flatMap(service => service.integrations);
  const integrationCount = allIntegrations.reduce((acc, integration) => {
    acc[integration] = (acc[integration] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(integrationCount)
    .sort(([,a], [,b]) => b - a)
    .map(([integration, count]) => ({ integration, usageCount: count }));
};

// ROI insights
export const getROIInsights = () => {
  return allZionServices.map(service => ({
    name: service.name,
    category: service.category,
    roi: service.roi,
    price: service.price,
    rating: service.rating
  }));
};

// Export default for easy importing
export default {
  allZionServices,
  serviceCategories,
  getServicesByCategory,
  getPopularServices,
  getNewServices,
  getServicesByPriceRange,
  getServicesByRating,
  searchServices,
  getServiceStats,
  getMarketInsights,
  getTechnologyStack,
  getIntegrationOverview,
  getROIInsights
};