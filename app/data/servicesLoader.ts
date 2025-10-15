// Efficient services data loader with lazy loading
import { Service } from './servicesDataOptimized';

// Cache for loaded services
const servicesCache = new Map<string, Service[]>();
const loadingPromises = new Map<string, Promise<Service[]>>();

// Core services data (always loaded)
const coreServices: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development Services',
    description: 'Custom AI solutions tailored to your business needs with cutting-edge machine learning and deep learning technologies',
    shortDescription: 'Build intelligent applications with our AI expertise',
    icon: '🤖',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Integration',
      'Custom AI Solutions'
    ],
    pricing: { basic: 5000, pro: 15000, enterprise: 50000 },
    benefits: [
      'Automated decision making',
      'Improved efficiency',
      'Better customer insights',
      'Reduced operational costs'
    ],
    useCases: [
      'Customer service automation',
      'Predictive maintenance',
      'Fraud detection',
      'Content generation'
    ],
    marketPrice: '$5,000 - $50,000',
    link: '/ai-services/ai-development',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];

// Lazy load services by category
export const loadServicesByCategory = async (category: 'ai' | 'it' | 'microsaas'): Promise<Service[]> => {
  // Check cache first
  if (servicesCache.has(category)) {
    return servicesCache.get(category)!;
  }

  // Check if already loading
  if (loadingPromises.has(category)) {
    return loadingPromises.get(category)!;
  }

  // Create loading promise
  const loadingPromise = (async () => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      let services: Service[] = [];
      
      switch (category) {
        case 'ai':
          services = await import('./servicesDataOptimized').then(m => m.coreAIServices);
          break;
        case 'it':
          services = await import('./servicesDataOptimized').then(m => m.itServices);
          break;
        case 'microsaas':
          services = await import('./servicesDataOptimized').then(m => m.microSAASServices);
          break;
      }
      
      // Cache the result
      servicesCache.set(category, services);
      return services;
    } catch (error) {
      console.error(`Failed to load ${category} services:`, error);
      return [];
    } finally {
      // Remove from loading promises
      loadingPromises.delete(category);
    }
  })();

  loadingPromises.set(category, loadingPromise);
  return loadingPromise;
};

// Load all services (for search, etc.)
export const loadAllServices = async (): Promise<Service[]> => {
  const [aiServices, itServices, microSAASServices] = await Promise.all([
    loadServicesByCategory('ai'),
    loadServicesByCategory('it'),
    loadServicesByCategory('microsaas')
  ]);

  return [...aiServices, ...itServices, ...microSAASServices];
};

// Get service by ID (searches all categories)
export const getServiceById = async (id: string): Promise<Service | undefined> => {
  // Check core services first
  const coreService = coreServices.find(s => s.id === id);
  if (coreService) return coreService;

  // Search in all categories
  const allServices = await loadAllServices();
  return allServices.find(s => s.id === id);
};

// Search services
export const searchServices = async (query: string): Promise<Service[]> => {
  const allServices = await loadAllServices();
  const lowercaseQuery = query.toLowerCase();
  
  return allServices.filter(service =>
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.shortDescription.toLowerCase().includes(lowercaseQuery) ||
    service.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};

// Preload critical services
export const preloadCriticalServices = () => {
  // Preload AI services (most important)
  loadServicesByCategory('ai');
};

// Clear cache (useful for development)
export const clearServicesCache = () => {
  servicesCache.clear();
  loadingPromises.clear();
};

export default {
  loadServicesByCategory,
  loadAllServices,
  getServiceById,
  searchServices,
  preloadCriticalServices,
  clearServicesCache
};