// Comprehensive Services Index
// This file exports all our innovative technology services

// Core Innovative Services
export { EXPANDED_INNOVATIVE_SERVICES_2025 } from './expandedInnovativeServices2025';
export type { ExpandedInnovativeService } from './expandedInnovativeServices2025';

// Emerging Technology Services
export { EMERGING_TECH_SERVICES_2025 } from './emergingTechServices2025';
export type { EmergingTechService } from './emergingTechServices2025';

// Ultimate Micro SAAS Services
export { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from './ultimateMicroSaasServices2025';
export type { UltimateMicroSaasService } from './ultimateMicroSaasServices2025';

// Combined Services Array
export const ALL_COMPREHENSIVE_SERVICES = [
  ...EXPANDED_INNOVATIVE_SERVICES_2025,
  ...EMERGING_TECH_SERVICES_2025,
  ...ULTIMATE_MICRO_SAAS_SERVICES_2025
];

// Service Categories
export const SERVICE_CATEGORIES = [
  'AI & Analytics',
  'AI & Customer Experience',
  'AI & Supply Chain',
  'AI & Legal Tech',
  'AI & Healthcare',
  'AI & Financial Services',
  'AI & Content Marketing',
  'Cybersecurity & AI',
  'Cybersecurity & Quantum',
  'Blockchain & Supply Chain',
  'IoT & Edge Computing',
  'Quantum Computing',
  'AR/VR & Immersive Tech',
  '5G & Telecommunications',
  'Space Technology',
  'Neuromorphic Computing',
  'Digital Twin & Simulation',
  'Synthetic Biology',
  'Brain-Computer Interface',
  'Sustainability & Energy',
  'Autonomous Vehicles & Fleet Management'
];

// Innovation Levels
export const INNOVATION_LEVELS = [
  'Cutting-edge',
  'Advanced',
  'Professional'
];

// Support Levels
export const SUPPORT_LEVELS = [
  'enterprise',
  'professional',
  'basic'
];

// Pricing Models
export const PRICING_MODELS = [
  'monthly',
  'annual',
  'one-time',
  'usage-based'
];

// Contact Information
export const CONTACT_INFO = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  website: 'https://ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

// Service Statistics
export const SERVICE_STATS = {
  totalServices: ALL_COMPREHENSIVE_SERVICES.length,
  categories: SERVICE_CATEGORIES.length,
  innovationLevels: INNOVATION_LEVELS.length,
  supportLevels: SUPPORT_LEVELS.length,
  pricingModels: PRICING_MODELS.length
};

// Helper Functions
export const getServicesByCategory = (category: string) => {
  return ALL_COMPREHENSIVE_SERVICES.filter(service => service.category === category);
};

export const getServicesByInnovationLevel = (level: string) => {
  return ALL_COMPREHENSIVE_SERVICES.filter(service => service.innovationLevel === level);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return ALL_COMPREHENSIVE_SERVICES.filter(service =>
    service.price >= minPrice && service.price <= maxPrice
  );
};

export const getServicesByTags = (tags: string[]) => {
  return ALL_COMPREHENSIVE_SERVICES.filter(service =>
    tags.some(tag => service.tags.includes(tag))
  );
};

export const searchServices = (query: string) => {
  const searchTerm = query.toLowerCase();
  return ALL_COMPREHENSIVE_SERVICES.filter(service =>
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    service.category.toLowerCase().includes(searchTerm)
  );
};

export default ALL_COMPREHENSIVE_SERVICES;