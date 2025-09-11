import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from './innovativeMicroSaasServices2025';
import { EXPANDED_INNOVATIVE_SERVICES_2025, SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from './expandedInnovativeServices2025';
import { EMERGING_TECH_SERVICES_2025, EMERGING_TECH_SOLUTIONS_2025 } from './emergingTechServices2025';

export interface ComprehensiveService2025 {
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
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  launchDate?: string;
  betaAccess?: boolean;
}

// Combine all services into one comprehensive catalog
export const COMPREHENSIVE_SERVICES_CATALOG_2025: ComprehensiveService2025[] = [
  ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
  ...EXPANDED_INNOVATIVE_SERVICES_2025,
  ...EMERGING_TECH_SERVICES_2025
];

// Service categories for easy filtering
export const SERVICE_CATEGORIES = [
  "AI & Analytics",
  "AI & Customer Experience",
  "AI & FinTech",
  "AI & Legal Tech",
  "AI & Healthcare",
  "AI & Education",
  "AI & Real Estate",
  "AI & Marketing",
  "AI & Supply Chain",
  "AI & Customer Service",
  "AI & Sales",
  "AI & Project Management",
  "AI & Business Automation",
  "AI & Robotics",
  "AI & Space Tech",
  "AI & Climate",
  "Quantum Computing",
  "Quantum AI",
  "Quantum Security",
  "Quantum Finance",
  "Quantum Chemistry",
  "Blockchain",
  "DeFi & NFTs",
  "Supply Chain & Sustainability",
  "Cybersecurity",
  "AI Security",
  "IoT & Edge Computing",
  "Edge AI",
  "Digital Twin",
  "AI Simulation",
  "Content Creation",
  "HR & Talent",
  "Sustainability",
  "Manufacturing",
  "Retail",
  "Energy",
  "Transportation",
  "Logistics"
];

// Service pricing tiers
export const PRICING_TIERS = [
  { id: 'budget', name: 'Budget', range: '$100 - $1,000/month', count: 0 },
  { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000/month', count: 0 },
  { id: 'enterprise', name: 'Enterprise', range: '$5,000+/month', count: 0 }
];

// Innovation levels
export const INNOVATION_LEVELS = [
  { id: 'advanced', name: 'Advanced', count: 0 },
  { id: 'cutting-edge', name: 'Cutting-edge', count: 0 },
  { id: 'revolutionary', name: 'Revolutionary', count: 0 }
];

// Support levels
export const SUPPORT_LEVELS = [
  { id: 'standard', name: 'Standard', count: 0 },
  { id: 'premium', name: 'Premium', count: 0 },
  { id: 'enterprise', name: 'Enterprise', count: 0 }
];

// Calculate counts for each category
export const calculateServiceStats = () => {
  const stats = {
    totalServices: COMPREHENSIVE_SERVICES_CATALOG_2025.length,
    categories: SERVICE_CATEGORIES.length,
    pricingTiers: PRICING_TIERS.map(tier => ({
      ...tier,
      count: COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => {
        if (tier.id === 'budget') return service.price <= 1000;
        if (tier.id === 'mid-range') return service.price > 1000 && service.price <= 5000;
        if (tier.id === 'enterprise') return service.price > 5000;
        return false;
      }).length
    })),
    innovationLevels: INNOVATION_LEVELS.map(level => ({
      ...level,
      count: COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
        service.innovationLevel.toLowerCase() === level.id
      ).length
    })),
    supportLevels: SUPPORT_LEVELS.map(level => ({
      ...level,
      count: COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
        service.supportLevel.toLowerCase() === level.id
      ).length
    }))
  };
  
  return stats;
};

// Get services by category
export const getServicesByCategory = (category: string) => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase().replace('-', ' '))
  );
};

// Get services by price range
export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
    service.price >= minPrice && service.price <= maxPrice
  );
};

// Get services by innovation level
export const getServicesByInnovationLevel = (level: string) => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
    service.innovationLevel.toLowerCase() === level.toLowerCase()
  );
};

// Get services by support level
export const getServicesBySupportLevel = (level: string) => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
    service.supportLevel.toLowerCase() === level.toLowerCase()
  );
};

// Search services
export const searchServices = (query: string) => {
  const searchTerm = query.toLowerCase();
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
    service.title.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    service.category.toLowerCase().includes(searchTerm) ||
    service.subcategory.toLowerCase().includes(searchTerm)
  );
};

// Get featured services (high ROI and innovation)
export const getFeaturedServices = (limit: number = 10) => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025
    .sort((a, b) => {
      const aScore = parseInt(a.roi.replace(/\D/g, '')) + (a.innovationLevel === 'Cutting-edge' ? 100 : 0);
      const bScore = parseInt(b.roi.replace(/\D/g, '')) + (b.innovationLevel === 'Cutting-edge' ? 100 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
};

// Get trending services (recent and popular)
export const getTrendingServices = (limit: number = 10) => {
  return COMPREHENSIVE_SERVICES_CATALOG_2025
    .filter(service => service.betaAccess || service.launchDate?.includes('2025'))
    .sort((a, b) => b.price - a.price) // Higher price often indicates more demand
    .slice(0, limit);
};

// Get services by industry
export const getServicesByIndustry = (industry: string) => {
  const industryMap: { [key: string]: string[] } = {
    'healthcare': ['AI & Healthcare', 'Medical Diagnostics', 'Healthcare AI'],
    'finance': ['AI & FinTech', 'Quantum Finance', 'Financial Planning'],
    'legal': ['AI & Legal Tech', 'Legal Research'],
    'education': ['AI & Education', 'Personalized Learning'],
    'real-estate': ['AI & Real Estate', 'Property Management'],
    'marketing': ['AI & Marketing', 'Marketing Automation'],
    'manufacturing': ['AI & Manufacturing', 'Manufacturing Optimization'],
    'retail': ['AI & Retail', 'Retail Analytics'],
    'energy': ['AI & Energy', 'Energy Management'],
    'transportation': ['AI & Transportation', 'Transportation & Logistics'],
    'logistics': ['AI & Supply Chain', 'Logistics Optimization', 'Transportation & Logistics'],
    'cybersecurity': ['Cybersecurity', 'AI Security', 'Quantum Security'],
    'blockchain': ['Blockchain', 'DeFi & NFTs', 'Supply Chain & Sustainability'],
    'quantum': ['Quantum Computing', 'Quantum AI', 'Quantum Security', 'Quantum Finance', 'Quantum Chemistry'],
    'iot': ['IoT & Edge Computing', 'Edge AI'],
    'ai': ['AI & Analytics', 'AI & Customer Experience', 'AI & Business Automation', 'AI & Robotics']
  };
  
  const categories = industryMap[industry.toLowerCase()] || [];
  return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
    categories.some(category => service.category.includes(category))
  );
};

// Get service recommendations based on user preferences
export const getServiceRecommendations = (preferences: {
  industry?: string;
  budget?: number;
  innovationLevel?: string;
  supportLevel?: string;
}) => {
  let recommendations = COMPREHENSIVE_SERVICES_CATALOG_2025;
  
  if (preferences.industry) {
    recommendations = getServicesByIndustry(preferences.industry);
  }
  
  if (preferences.budget) {
    recommendations = recommendations.filter(service => service.price <= preferences.budget!);
  }
  
  if (preferences.innovationLevel) {
    recommendations = recommendations.filter(service => 
      service.innovationLevel.toLowerCase() === preferences.innovationLevel!.toLowerCase()
    );
  }
  
  if (preferences.supportLevel) {
    recommendations = recommendations.filter(service => 
      service.supportLevel.toLowerCase() === preferences.supportLevel!.toLowerCase()
    );
  }
  
  return recommendations.sort((a, b) => {
    const aScore = parseInt(a.roi.replace(/\D/g, ''));
    const bScore = parseInt(b.roi.replace(/\D/g, ''));
    return bScore - aScore;
  });
};

export default COMPREHENSIVE_SERVICES_CATALOG_2025;