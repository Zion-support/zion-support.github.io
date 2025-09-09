export: interface InnovativeITService {
   id: string;
   title: string;
   description: string;
   category: string;
   subcategory?: string;
   price: number;
   currency: string;
   pricingModel: string;
   features: string[];
   benefits: string[];
   useCases: string[];
   targetAudience: string[];
   integration: string[];
   support: string[];
   link: string;
   badge?: string;
   icon: string;
   marketPrice: string;
   contactEmail: string;
   tags: string[];
   techScore: number;
   rating: number;
   reviewCount: number;
   featured: boolean;
   location: string;
   availability: string;
   author: { name: string;
   i,
    d: string;
   avatarUrl?: string;
}