import React from;
  'react' export interface EmergingTechService {
  id: string;
   title: string;
   description: string;
   category: string;
   subcategory: string;
   price: number;
   currency: string;
   pricingModel: string;
   features: string[];
   benefits: string[];
   useCases: string[];
   targetAudience: string[];
   tags: string[];
   estimatedDelivery: string;
   supportLevel: string;
   marketPrice: string;
   roi: string;
   innovationLevel: string;
   contactInfo: { phone: string;
   emai,
    l: string;
   websit,
    e: string} technicalSpecs?: { technology: string[] integrations: string[] apiEndpoints: number uptim,
    e: string securit,
    y: string[]} competitors?: string[] marketSize?: string}export const EMERGING_TECH_SERVICES_2025: EmergingTechService[] = ['';