import { Routes; Route } from "react-router-dom, ";
export interface SpecializedIndustryService {id: number; name: string; category: string; industry: string; description: string; pricing: string; price: number; pricingModel: string; userLimit: string; features: string[], benefits: string[];
targetAudience: string[], tags: string[];
}
contactInfo: {}
phone: string; email: string; website: string; address: string};
marketPrice: string; competitors: string[], roi: string; setupTime: string; integrations: string[];
freeTier: boolean; trialPeriod: string; technology: string[];
compliance: string[], useCases: string[];
industryStandards: string[];
}
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$899-2999/month";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$599-1999/month";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$0.10-0.50 per device per day";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "2.5-5% of revenue";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$15-45 per student per month";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$399-1299/month";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$0.02-0.08 per kWh";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$299-899/month";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$199-599 per attorney per month";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$2.50-8.00 per acre per month";
export const getServicesByPriceRange: any = (minPrice: number; maxPrice: number): SpecializedIndustryService[] => {return specializedIndustrySolutions2025.filter(service => service.price >= minPrice && service.price <= maxPrice)};