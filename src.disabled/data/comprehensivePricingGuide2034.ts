export: interface ComprehensivePricingGuide2034 {
   id: string;
   title: string;
   description: string;
   category: string;
   pricingTiers: PricingTier[];
   features: string[];
   benefits: string[];
   targetAudience: string[];
   contactInfo: { phone: string;
   email: string;
<<<<<<< HEAD
   website: string;
   address: strin,g} marketPositioning: string: competitiveAdvantages: string[] testimonials: string[] caseStudies: string[], } export: interface PricingTier {
=======
   websit,
    e: string;
   addres,
    s: string} marketPositioning: string competitiveAdvantages: string[] testimonial,
    s: string[] caseStudie,
    s: string[] } export interface PricingTier {
>>>>>>> main
   name: string;
   price: number;
   currency: string;
   period: string;
   description: string;
   features: string[];
   popular?: boolean;
   cta: string;
   link: string;
   savings?: string;
   roi: string;
<<<<<<< HEAD
   estimatedDelivery: string;
   supportLevel: strin,g} export: const COMPREHENSIVE_PRICING_GUIDE_2034: ComprehensivePricingGuide2034[] = [,;
=======
   estimatedDeliver,
    y: string;
   supportLeve,
    l: string} export const COMPREHENSIVE_PRICING_GUIDE_2034: ComprehensivePricingGuide2034[] = [;
>>>>>>> main
