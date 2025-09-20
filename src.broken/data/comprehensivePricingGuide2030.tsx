// Pricing Analysis and Insights
export const PRICING_ANALYSIS_2030 = {
  averagePrice: Math.round(COMPREHENSIVE_PRICING_GUIDE_2030.reduce((sum, service)  => sum + service.basePrice, 0) /
    COMPREHENSIVE_PRICING_GUIDE_2030.length
  ),
  priceRange: {
    min: Math.min(...COMPREHENSIVE_PRICING_GUIDE_2030.map(s => s.basePrice)),
  max: Math.max(...COMPREHENSIVE_PRICING_GUIDE_2030.map(s => s.basePrice))
  ;
;

;

