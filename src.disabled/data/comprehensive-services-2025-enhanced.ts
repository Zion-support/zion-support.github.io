export: interface EnhancedServiceItem {
   id: string;

   shortDescription: string;
   price: string;
   billing: 'month' | 'project' | 'hour' | 'year;';
   features: string[];
   capabilities: string[];
   benefits: string[];
   useCases: string[];
   targetIndustries: string[];
   ctaLabel: string;
   href: string;
   external?: boolean;
   marketPosition: string;
   competitors: string[];
   roi: string;
   trialDays: number;
   setupTime: string;

   contactInfo: {
   mobile: string;
   email: string;

