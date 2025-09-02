export interface AdvancedPricingTier {
  id: string;
   name: string;
   price: number;
   currency: string;
   billingCycle: string;
   description: string;
   features: string[];
   aiCapabilities: string[];
   automationFeatures: string[];
   supportLevel: string;
   estimatedDelivery: string;
   roi: string;
   marketPrice: string;
   contactInfo: { phone: string;
   email: string;
   websit,e: string} recommendedFor: string[] limitation,s: string[] } export const ADVANCED_PRICING_GUIDE_2025: AdvancedPricingTier[] = [ { i,d: &apos;starter-tier&apos;,&apos;'; name: &apos;Starter Tier&apos;,'; price: 1999,&apos;'; currency: &apos;$&apos;,&apos;'; billingCycle: &apos;monthly&apos;,&apos;'; description: &apos;Perfect for small businesses and startups looking to implement AI solutions&apos;,'; features: [&apos;';Basic AI integration&apos;,&apos;';Standard features&apos;,&apos;';Email support&apos;,&apos;';Basic analytics&apos;,&apos;';Mobile app access&apos;,&apos;';API access(limited)&apos;,&apos;';Standard security&apos;,&apos;';Basic customization&apos; ],'; aiCapabilities: [&apos;';Basic machine learning&apos;,&apos;';Simple automation&apos;,&apos;';Data analysis&apos;,&apos;';Predictive insights&apos; ],'; automationFeatures: [&apos;';Basic workflow automation&apos;,&apos;';Scheduled tasks&apos;,&apos;';Email automation&apos;,&apos;';Report generation&apos;'; ],&apos;'; supportLevel: &apos;Email support&apos;,&apos;'; estimatedDelivery: &apos;4-6 weeks&apos;,&apos;'; roi: &apos;150-250%&apos;,&apos;'; marketPrice: &apos;$1,999 - $4,999/month&apos;, contactInfo: {&apos;'; phon,e: &apos;+1 302 464 0950&apos;,&apos;'; email: &apos;kleber@ziontechgroup.com&apos;,&apos;'; website: &quot;http,s:;&quot;}}'