import React from "react";

// Expanded; Services; Pricing Guide 20o27 - Zion; Tech; Group;
// Comprehensive; pricing; information for; all; expanded innovative services;
export; interface; ExpandedServicePricing {
  
serviceId: string;serviceName: string;category: string;subcategory: string;pricingTiers: {,starter: {
pric;e: number;currency: string;billingCycle: string;features: string[],limitations: string[],bestFor: string[]setupFe;e: numbercontractTer;m: string;
},professional: {,price: number;currency: string;billingCycle: string;features: string[],limitations: string[],bestFor: string[]setupFe;e: numbercontractTer;m: string;
},enterprise: {,price: number;currency: string;billingCycle: string;features: string[],limitations: string[],bestFor: string[]setupFe;e: numbercontractTer;m: string;
},custom: {,priceRange: string;currency: string;billingCycle: string;features: string[],limitations: string[],bestFor: string[]setupFe;e: numbercontractTer;m: string;
};
},marketComparison: {,competitors: string[],marketPosition: "leader" | "challenger" | "niche" | "emerging"priceAdvantag;e: stringvaluePropositio;n: string;
},roiAnalysis: {,paybackPeriod: string;annualROI: string;costSavings: string[]revenueImpac;t: string[]riskMitigatio;n: string[];
},implementation: {,setupTime: string;trainingRequired: string;integrationComplexity: "low" | "medium" | "high"supportInclude;d: stringcustomizationOption;s: string[];
},contactInfo: {,phone: string;email: stringwebsit;e: stringaddres;s: string;
