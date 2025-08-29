// Comprehensive Services Index 2030 - Zion Tech Group
// Complete catalog of all available services

import { advancedAIServices2030 } from './advancedAIServices2030';
import { specializedITInfrastructureServices2026 } from './specializedITInfrastructureServices2026';
import { emergingTechServices2030 } from './emergingTechServices2030';

export interface ServiceIndex {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  pricingModel: string;
  innovationLevel: string;
  marketSize: string;
  tags: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

// Zion Tech Group Contact Information
const zionContact = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

// Create comprehensive index from all service files
export const COMPREHENSIVE_SERVICES_INDEX_2030: ServiceIndex[] = [
  // Advanced AI Services 2030
  ...advancedAIServices2030.map(service => ({
    id: `ai-${service.id}`,
    name: service.name,
    category: service.category,
    description: service.description,
    price: service.price,
    pricingModel: service.pricingModel,
    innovationLevel: service.innovationLevel,
    marketSize: service.marketSize,
    tags: service.tags,
    contactInfo: service.contactInfo
  })),

  // Specialized IT Infrastructure Services 2026
  ...specializedITInfrastructureServices2026.map(service => ({
    id: `it-${service.id}`,
    name: service.name,
    category: service.category,
    description: service.description,
    price: service.price,
    pricingModel: service.pricingModel,
    innovationLevel: service.innovationLevel,
    marketSize: service.marketSize,
    tags: service.tags,
    contactInfo: service.contactInfo
  })),

  // Emerging Technology Services 2030
  ...emergingTechServices2030.map(service => ({
    id: `et-${service.id}`,
    name: service.name,
    category: service.category,
    description: service.description,
    price: service.price,
    pricingModel: service.pricingModel,
    innovationLevel: service.innovationLevel,
    marketSize: service.marketSize,
    tags: service.tags,
    contactInfo: service.contactInfo
  }))
];

// Service Categories for filtering
export const SERVICE_CATEGORIES_2030 = [
  'AI & Development',
  'AI & Business Intelligence',
  'AI & Legal Tech',
  'AI & Operations',
  'AI & HR',
  'AI & FinTech',
  'AI & Content',
  'AI & IoT',
  'Cybersecurity',
  'Cloud & DevOps',
  'IoT & Edge Computing',
  'Quantum Computing',
  'Metaverse & AR/VR',
  'Neuromorphic Computing',
  'Biocomputing',
  'Optical Computing',
  'Swarm Robotics',
  'Digital Twin',
  'Brain-Computer Interface'
];

// Service Statistics
export const SERVICE_STATISTICS_2030 = {
  totalServices: COMPREHENSIVE_SERVICES_INDEX_2030.length,
  totalCategories: SERVICE_CATEGORIES_2030.length,
  averagePrice: Math.round(COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => sum + service.price, 0) / COMPREHENSIVE_SERVICES_INDEX_2030.length),
  totalMarketSize: COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => {
    const size = parseFloat(service.marketSize.replace(/[^0-9.]/g, ''));
    return sum + size;
  }, 0),
  innovationBreakdown: {
    revolutionary: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.innovationLevel === 'Revolutionary').length,
    advanced: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.innovationLevel === 'Advanced').length
  }
};

export default COMPREHENSIVE_SERVICES_INDEX_2030;