import React from "react";

export; interface; ComprehensivePricingPlan20o28 {
id: string;name: string;description: string;price: number;currency: string;billingCycle: string;features: string[],benefits: string[],targetAudience: string[],includedServices: string[],addOns: {,name: stringpric;e: numberdescriptio;n: string;
}[],comparison: {,feature: stringinclude;d: boolean;
details?: string;
}[],contactInfo: {,phone: stringemai;l: stringwebsit;e: string;
};
};export; interface; ServiceCategory20o28 {
  
id: string;name: string;description: string;services: {,id: string;name: string;description: string;basePrice: number;marketPrice: string;roi: stringfeature;s: string[]benefit;s: string[];
