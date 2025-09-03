<<<<<<< HEAD
export interface PricingTier2032 {;
  id: string;
=======
export interface PricingTier2032 {id: string;
>>>>>>> main
   name: string;
   price: number;
   currency: string;
   billingCycle: string;
   description: string;
   features: string[];
   limitations: string[];
   bestFor: string;
   popular?: boolean;
<<<<<<< HEAD
   savings?: string} export interface ServicePricing2032 {;
  serviceId: string;
=======
   savings?: string} export interface ServicePricing2032 {serviceId: string;
>>>>>>> main
   serviceName: string;
   category: string;
   basePrice: number;
   currency: string;
   pricingModel: string;
   tiers: PricingTier2032[];
   enterprisePricing: {  custom: boolean;
   startingPrice: number;
   contactRequired: boolean
<<<<<<< HEAD
   features: string[]} addOns: {name: string price: number description: string  }[] volumeDiscounts: {users: number discount: number  }[] annualDiscount: number freeTrial: boolean trialDuration: string moneyBackGuarantee: boolean guaranteeDuration: string sla: string supportLevels: {level: string responseTime: string features: string[]  }[] } export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [;
=======
   features: string[]} addOns: { name: string price: number description: string  }[] volumeDiscounts: { users: number discount: number  }[] annualDiscount: number freeTrial: boolean trialDuration: string moneyBackGuarantee: boolean guaranteeDuration: string sla: string supportLevels: { level: string responseTime: string features: string[]  }[] } export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [;
>>>>>>> main
