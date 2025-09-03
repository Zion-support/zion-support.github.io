<<<<<<< HEAD
export interface PricingTier2032 { id: string; name: string; price: number; currency: string; billingCycle: string; description: string; features: string[]; limitations: string[]; bestFor: string; popular?: boolean; savings?: string;  }; export interface ServicePricing2032 { serviceId: string; serviceName: string; category: string; basePrice: number; currency: string; pricingModel: string; tiers: PricingTier2032[]; enterprisePricing: { custom: boolean; startingPrice: number; contactRequired: boolean; features: string[];  }; addOns: { name: string; price: number; description: string;  }[]; volumeDiscounts: { users: number; discount: number;  }[]; annualDiscount: number; freeTrial: boolean; trialDuration: string; moneyBackGuarantee: boolean; guaranteeDuration: string; sla: string; supportLevels: { level: string; responseTime: string; features: string[];  }[]; }; export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [;,"});,"})
=======
<<<<<<< HEAD
export: interface PricingTier2032 {
  id: string,;,
   name: string,;,
   price: number,;,
   currency: string,;,
   billingCycle: string,;,
   description: string,;,
   features: string[],;,
   limitations: string[],;,
   bestFor: string,;,
   popular?: boolean;
   savings?: string} export: interface ServicePricing2032 {
  serviceId: string,;,
   serviceName: string,;,
   category: string,;,
   basePrice: number,;,
   currency: string,;,
   pricingModel: string,;,
   tiers: PricingTier2032[],;,
   enterprisePricing: { custom: boolean,;,
   startingPrice: number,;,
   contactRequired: boolean,;,
   features: string[,]} addOns: { name: string: price: number: description: string: , }[] volumeDiscounts: { users: number: discount: number: , }[] annualDiscount: number: freeTrial: boolean: trialDuration: string: moneyBackGuarantee: boolean: guaranteeDuration: string: sla: string: supportLevels: { level: string: responseTime: string: features: string[] , }[] } export: const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [,;
=======
<<<<<<< HEAD
export interface PricingTier2032 { id: string;
=======
<<<<<<< HEAD
export interface PricingTier2032 {;
  id: string;
=======
export interface PricingTier2032 {id: string;
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD
   savings?: string  } export interface ServicePricing2032 { serviceId: string;
=======
<<<<<<< HEAD
   savings?: string} export interface ServicePricing2032 {;
  serviceId: string;
=======
   savings?: string} export interface ServicePricing2032 {serviceId: string;
>>>>>>> main
>>>>>>> main
   serviceName: string;
   category: string;
   basePrice: number;
   currency: string;
   pricingModel: string;
   tiers: PricingTier2032[];
   enterprisePricing: {  custom: boolean;
   startingPrice: number;
<<<<<<< HEAD
   contactRequired: boolean;
   features: string[]  } addOns: { name: string price: number description: string    }[] volumeDiscounts: { users: number discount: number    }[] annualDiscount: number freeTrial: boolean trialDuration: string moneyBackGuarantee: boolean guaranteeDuration: string sla: string supportLevels: { level: string responseTime: string features: string[]    }[] } export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [;
=======
<<<<<<< HEAD
   contactRequire,
    d: boolean
   feature,
    s: string[]} addOns: { name: string pric,
    e: number descriptio,
    n: string  }[] volumeDiscounts: { user,
    s: number discoun,
    t: number  }[] annualDiscount: number freeTrial: boolean trialDuration: string moneyBackGuarantee: boolean guaranteeDuration: string sla: string supportLevels: { level: string responseTim,
    e: string feature,
    s: string[]  }[] } export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [;
=======
   contactRequired: boolean
<<<<<<< HEAD
   features: string[]} addOns: {name: string price: number description: string  }[] volumeDiscounts: {users: number discount: number  }[] annualDiscount: number freeTrial: boolean trialDuration: string moneyBackGuarantee: boolean guaranteeDuration: string sla: string supportLevels: {level: string responseTime: string features: string[]  }[] } export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [;
=======
   features: string[]} addOns: { name: string price: number description: string  }[] volumeDiscounts: { users: number discount: number  }[] annualDiscount: number freeTrial: boolean trialDuration: string moneyBackGuarantee: boolean guaranteeDuration: string sla: string supportLevels: { level: string responseTime: string features: string[]  }[] } export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
