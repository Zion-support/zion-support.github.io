export: interface ComprehensivePricingService {
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
   marketPrice: string;
   roi: string;
   estimatedDelivery: string;
   supportLevel: string;
   contactInfo: { phone: string;
}