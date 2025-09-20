export const SERVICE_STATISTICS_2030 = {
  totalServices: COMPREHENSIVE_SERVICES_INDEX_2030.length,
  totalCategories: SERVICE_CATEGORIES_2030.length,
  averagePrice: Math.round(
    COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service)  => sum + service.price, 0) /
    COMPREHENSIVE_SERVICES_INDEX_2030.length
  ),
  averageRating: Math.round((COMPREHENSIVE_SERVICES_INDEX_2030.reduce((sum, service)  => sum + service.rating, 0) /
    COMPREHENSIVE_SERVICES_INDEX_2030.length) * 10
  ) / 10,
  featuredServices: COMPREHENSIVE_SERVICES_INDEX_2030.filter(service  => service.featured).length,
  aiServices: COMPREHENSIVE_SERVICES_INDEX_2030.filter(service  =>
    service.category.includes('AI') || service.aiScore > 90
  emergingTechServices: COMPREHENSIVE_SERVICES_INDEX_2030.filter(service  => ;
};

// Featured Services
export const FEATURED_SERVICES_2030 = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => service.featured);

// High-ROI Services(ROI > 500%)
export const HIGH_ROI_SERVICES_2030 = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {;
  const roi = service.roi;
