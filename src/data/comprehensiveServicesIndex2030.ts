import { ProductListing } from "@/types/listings";
import { ADVANCED_AI_SERVICES_2030 } from "./advancedAIServices2030";
import { CUTTING_EDGE_IT_INFRASTRUCTURE_2030 } from "./cuttingEdgeITInfrastructure2030";
import { EMERGING_TECHNOLOGY_SERVICES_2030 } from "./emergingTechnologyServices2030";
import { SPECIALIZED_FINANCIAL_AI_SERVICES_2028 } from "./specializedFinancialAIServices2028";
import { SPECIALIZED_HEALTHCARE_AI_SERVICES_2028 } from "./specializedHealthcareAIServices2028";

// Comprehensive Services Index 2030 - Zion Tech Group
// This file combines all services for easy access and management

export const COMPREHENSIVE_SERVICES_INDEX_2030: ProductListing[] = [
  ...ADVANCED_AI_SERVICES_2030,
  ...CUTTING_EDGE_IT_INFRASTRUCTURE_2030,
  ...EMERGING_TECHNOLOGY_SERVICES_2030,
  ...SPECIALIZED_FINANCIAL_AI_SERVICES_2028,
  ...SPECIALIZED_HEALTHCARE_AI_SERVICES_2028
];

// Service Categories for easy filtering
export const SERVICE_CATEGORIES_2030 = [
  "AI & Business Intelligence",
  "AI & Marketing",
  "AI & Healthcare",
  "AI & Legal Tech",
  "AI & Real Estate",
  "AI & Operations",
  "AI & Green Tech",
  "AI & Autonomous Systems",
  "AI & FinTech",
  "AI & Environmental Tech",
  "AI & Content",
  "AI & Customer Support",
  "AI & HR",
  "AI & Research",
  "AI & Metaverse",
  "AI & Space Tech",
  "AI & Development",
  "AI & Education",
  "AI & Entertainment",
  "Cybersecurity",
  "Cloud & DevOps",
  "Quantum Computing",
  "IoT & Edge Computing",
  "Blockchain & Web3",
  "Digital Twin",
  "Space Technology",
  "Sustainable Technology",
  "IT Infrastructure",
  "Emerging Technology"
];

// Service Statistics
export const SERVICE_STATISTICS_2030 = {
  totalServices: COMPREHENSIVE_SERVICES_INDEX_2030.length,
  totalCategories: SERVICE_CATEGORIES_2030.length,
  averagePrice: Math.round(
    COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => sum + service.price, 0) / 
    COMPREHENSIVE_SERVICES_INDEX_2030.length
  ),
  averageRating: Math.round(
    (COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service) => sum + service.rating, 0) / 
    COMPREHENSIVE_SERVICES_INDEX_2030.length) * 10
  ) / 10,
  featuredServices: COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => service.featured).length,
  aiServices: COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => 
    service.category.includes('AI') || service.aiScore > 90
  ).length,
  emergingTechServices: COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => 
    service.category === 'Emerging Technology'
  ).length
};

// Featured Services
export const FEATURED_SERVICES_2030 = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => service.featured);

// High-ROI Services (ROI > 500%)
export const HIGH_ROI_SERVICES_2030 = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
  const roi = service.roi;
  if (typeof roi === 'string') {
    const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
    return roiNumber > 500;
  }
  return false;
});

// Quick Setup Services (< 8 weeks)
export const QUICK_SETUP_SERVICES_2030 = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
  const setupTime = service.setupTime;
  if (typeof setupTime === 'string') {
    const weeks = parseInt(setupTime.match(/\d+/)?.[0] || '0');
    return weeks < 8;
  }
  return false;
});

// Export individual service arrays for specific use cases
export {
  ADVANCED_AI_SERVICES_2030,
  CUTTING_EDGE_IT_INFRASTRUCTURE_2030,
  EMERGING_TECHNOLOGY_SERVICES_2030,
  SPECIALIZED_FINANCIAL_AI_SERVICES_2028,
  SPECIALIZED_HEALTHCARE_AI_SERVICES_2028
};