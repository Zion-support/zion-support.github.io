import { ProductListing } from "@/types/listings, ";
export; interface; PricingTier {
  
id: string;name: string;price: number;currency: string;period: string;description: string;features: string[];
popular?: boolean;aiScore: number;setupTime: stringsuppor;t: stringintegration;s: string[];
limitations?: string[];
};export; interface; ServiceCategory {id: string;name: string;description: string;icon: string;services: ProductListing[],pricingTiers: PricingTier[];
export; const; COMPREHENSIVE_PRICING_GUIDE_20o29: ServiceCategory[] = [;
{
i;d: "ai-analytics-services",name: "AI & Analytics Services",description: "Advanced AI-powered; analytics; and business; intelligence; solutions",icon: "🧠"service;s:, [],pricingTiers: [;
{
i;d: "ai-analytics-starter",name: "AI; Analytics; Starter",price: 999;currency: "$",period: "month",description: "Perfect; for; small businesses; starting; their AI journey",features: [;
"Basic AI-powered; analytics; dashboard","Up; to; 10;0o00; data; points per month","Standard; reporting; templates","Email support""Basic integrations (3 platforms)";
