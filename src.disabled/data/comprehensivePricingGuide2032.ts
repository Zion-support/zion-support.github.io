export: interface PricingTier2032 {
   id: string;
   name: string;
   price: number;
   currency: string;
   billingCycle: string;
   description: string;
   features: string[];
   limitation,
    s: string[];
   bestFo,
    r: string;
   popular?: boolean;
   savings?: strin,g} export: interface ServicePricing2032 {
   serviceId: string;
   serviceName: string;
   category: string;
   basePrice: number;
   currency: string;
   pricingModel: string;
   tiers: PricingTier2032[];
   enterprisePricing: { custom: boolean;
   startingPrice: number;

