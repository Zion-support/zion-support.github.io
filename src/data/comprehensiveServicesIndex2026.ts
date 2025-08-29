// Comprehensive Services Index 2026 - Zion Tech Group
// This file combines all innovative services for easy access and management

import { innovativeMicroSaasServices2026 } from './innovativeMicroSaasServices2026';
import { innovativeITServices2026 } from './innovativeITServices2026';
import { innovativeAIServices2026 } from './innovativeAIServices2026';

// Service Categories for easy filtering
export const SERVICE_CATEGORIES_2026 = [
  "AI & Business Intelligence",
  "AI & Content",
  "AI & Customer Service",
  "AI & Sales",
  "AI & Marketing",
  "AI & Healthcare",
  "AI & FinTech",
  "AI & Supply Chain",
  "AI & HR",
  "AI & Legal Tech",
  "AI & Customer Analytics",
  "AI & Content Marketing",
  "AI & Operations",
  "AI & Web Development",
  "AI & Social Media",
  "Cloud & Infrastructure",
  "DevOps & Automation",
  "Cybersecurity",
  "Data & Analytics",
  "Network & Infrastructure",
  "Mobile Development",
  "Web Development",
  "IT Consulting",
  "Cloud Security",
  "Business Continuity"
];

// Service Statistics
export const SERVICE_STATISTICS_2026 = {
  totalServices: innovativeMicroSaasServices2026.length + innovativeITServices2026.length + innovativeAIServices2026.length,
  totalCategories: SERVICE_CATEGORIES_2026.length,
  microSaasServices: innovativeMicroSaasServices2026.length,
  itServices: innovativeITServices2026.length,
  aiServices: innovativeAIServices2026.length,
  averagePrice: Math.round(
    [...innovativeMicroSaasServices2026, ...innovativeITServices2026, ...innovativeAIServices2026]
      .reduce((sum, service) => sum + (service.price || 0), 0) / 
    (innovativeMicroSaasServices2026.length + innovativeITServices2026.length + innovativeAIServices2026.length)
  ),
  highROIServices: innovativeMicroSaasServices2026.filter(service => {
    const roi = service.roi;
    const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
    return roiNumber > 400;
  }).length,
  quickSetupServices: innovativeMicroSaasServices2026.filter(service => {
    const setupTime = service.setupTime;
    const weeks = parseInt(setupTime.match(/\d+/)?.[0] || '0');
    return weeks < 3;
  }).length,
  highValueITServices: innovativeITServices2026.filter(service => service.projectRate > 30000).length,
  highScoreAIServices: innovativeAIServices2026.filter(service => service.aiScore > 95).length
};

// Featured Services (High ROI, High AI Score, or High Value)
export const FEATURED_SERVICES_2026 = [
  ...innovativeMicroSaasServices2026.filter(service => {
    const roi = service.roi;
    const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
    return roiNumber > 500;
  }),
  ...innovativeITServices2026.filter(service => service.projectRate > 35000),
  ...innovativeAIServices2026.filter(service => service.aiScore > 96)
];

// High-ROI Services (ROI > 500%)
export const HIGH_ROI_SERVICES_2026 = innovativeMicroSaasServices2026.filter(service => {
  const roi = service.roi;
  const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
  return roiNumber > 500;
});

// Quick Setup Services (< 3 weeks)
export const QUICK_SETUP_SERVICES_2026 = innovativeMicroSaasServices2026.filter(service => {
  const setupTime = service.setupTime;
  const weeks = parseInt(setupTime.match(/\d+/)?.[0] || '0');
  return weeks < 3;
});

// High-Value IT Services (> $35,000)
export const HIGH_VALUE_IT_SERVICES_2026 = innovativeITServices2026.filter(service => service.projectRate > 35000);

// High-Score AI Services (AI Score > 95)
export const HIGH_SCORE_AI_SERVICES_2026 = innovativeAIServices2026.filter(service => service.aiScore > 95);

// Budget-Friendly Services (< $1,000)
export const BUDGET_FRIENDLY_SERVICES_2026 = [
  ...innovativeMicroSaasServices2026.filter(service => service.price < 1000),
  ...innovativeAIServices2026.filter(service => service.price < 1000)
];

// Enterprise Services (> $3,000)
export const ENTERPRISE_SERVICES_2026 = [
  ...innovativeMicroSaasServices2026.filter(service => service.price > 3000),
  ...innovativeITServices2026.filter(service => service.projectRate > 25000),
  ...innovativeAIServices2026.filter(service => service.price > 3000)
];

// Services by Innovation Level
export const REVOLUTIONARY_SERVICES_2026 = [
  ...innovativeAIServices2026.filter(service => service.innovationLevel === "Revolutionary"),
  ...innovativeMicroSaasServices2026.filter(service => service.innovationLevel === "Cutting-Edge")
];

export const CUTTING_EDGE_SERVICES_2026 = [
  ...innovativeAIServices2026.filter(service => service.innovationLevel === "Cutting-Edge"),
  ...innovativeITServices2026.filter(service => service.innovationLevel === "Cutting-Edge"),
  ...innovativeMicroSaasServices2026.filter(service => service.innovationLevel === "Cutting-Edge")
];

// Services by Industry Focus
export const FINANCIAL_SERVICES_2026 = [
  ...innovativeAIServices2026.filter(service => 
    service.category.includes("FinTech") || service.category.includes("Financial")
  ),
  ...innovativeMicroSaasServices2026.filter(service => 
    service.category.includes("FinTech") || service.targetAudience.some(audience => 
      audience.includes("Financial") || audience.includes("Bank")
    )
  )
];

export const HEALTHCARE_SERVICES_2026 = [
  ...innovativeAIServices2026.filter(service => 
    service.category.includes("Healthcare") || service.category.includes("Medical")
  ),
  ...innovativeMicroSaasServices2026.filter(service => 
    service.targetAudience.some(audience => 
      audience.includes("Healthcare") || audience.includes("Medical")
    )
  )
];

export const ECOMMERCE_SERVICES_2026 = [
  ...innovativeMicroSaasServices2026.filter(service => 
    service.targetAudience.some(audience => 
      audience.includes("E-commerce") || audience.includes("Retail")
    )
  ),
  ...innovativeAIServices2026.filter(service => 
    service.useCases.some(useCase => 
      useCase.includes("E-commerce") || useCase.includes("Retail")
    )
  )
];

// Export individual service arrays for specific use cases
export {
  innovativeMicroSaasServices2026,
  innovativeITServices2026,
  innovativeAIServices2026
};

// Utility functions for service management
export const getServiceById = (id: number, type: 'microsaas' | 'it' | 'ai') => {
  switch (type) {
    case 'microsaas':
      return innovativeMicroSaasServices2026.find(service => service.id === id);
    case 'it':
      return innovativeITServices2026.find(service => service.id === id);
    case 'ai':
      return innovativeAIServices2026.find(service => service.id === id);
    default:
      return null;
  }
};

export const getServicesByCategory = (category: string) => {
  const microSaas = innovativeMicroSaasServices2026.filter(service => service.category === category);
  const it = innovativeITServices2026.filter(service => service.category === category);
  const ai = innovativeAIServices2026.filter(service => service.category === category);
  
  return [...microSaas, ...it, ...ai];
};

export const searchServices = (query: string) => {
  const allServices = [
    ...innovativeMicroSaasServices2026,
    ...innovativeITServices2026,
    ...innovativeAIServices2026
  ];
  
  const searchTerm = query.toLowerCase();
  
  return allServices.filter(service => 
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    service.category.toLowerCase().includes(searchTerm)
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  const allServices = [
    ...innovativeMicroSaasServices2026,
    ...innovativeITServices2026,
    ...innovativeAIServices2026
  ];
  
  return allServices.filter(service => {
    const price = service.price || 0;
    return price >= minPrice && price <= maxPrice;
  });
};

export const getServicesByInnovationLevel = (level: string) => {
  const allServices = [
    ...innovativeMicroSaasServices2026,
    ...innovativeITServices2026,
    ...innovativeAIServices2026
  ];
  
  return allServices.filter(service => service.innovationLevel === level);
};