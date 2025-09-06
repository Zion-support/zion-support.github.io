// Service mapper utility
export const serviceMapper = {};
// Interface for the existing service structure
interface Service {
    "id": string;
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
    contactInfo: {}};
    technicalSpecs?: {}};
    competitors?: string[];
    marketSize?: string;
    compliance?: string[]}
    "id": service.id,
    "title": service.name,
    "description": service.description,
    "category": service.category,
    "subcategory": service.category, // Use category as subcategory for now';
    "price": parseInt(service.price.replace(/[$,]/g)), // Convert "$18,999" to 18999';
    "currency": '$',
    "pricingModel": 'monthly',
    "features": service.features,
    "benefits": [service.roi, service.marketPosition], // Use ROI and market position as benefits;
    "useCases": service.useCases,
    "targetAudience": [service.targetAudience], // Convert string to array;
    "tags": [service.category, ...service.technology.slice(0, 3)], // Use category and first 3 technologies as tags;
    "estimatedDelivery": service.setupTime,
    "supportLevel": 'enterprise',
    "marketPrice": service.price + service.period,
    "roi": service.roi,
    "innovationLevel": 'Advanced',
    "contactInfo": {};
      "website": service.contactInfo.website},
    "technicalSpecs": {}},
    "competitors": service.competitors,
    "marketSize": service.marketSize,
    "compliance": ['SOC 2',ISO 27001'], // Default compliance}))}
'";
export const serviceMapper = {}; interface Service { id: 'string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string;' } contactInfo: {}}; technicalSpecs?: {}}; competitors?: string[]; marketSize?: string; compliance?: string[];,} id: 'service.id',; title: 'service.name',; description: 'service.description',; category: 'service.category',; subcategory: 'service.category',price: parseInt(service.price.replace(/[$,]/g,)),currency: '$',; pricingModel: 'monthly',; features: 'service.features',; benefits: '[service.roi',service.marketPosition],useCases: 'service.useCases',; targetAudience: '[service.targetAudience]',tags: '[service.category',...service.technology.slice(0,3)],estimatedDelivery: 'service.setupTime',; supportLevel: 'enterprise',; marketPrice: 'service.price + service.period',; roi: 'service.roi',; innovationLevel: 'Advanced',; contactInfo: {}; website: 'service.contactInfo.website'},; technicalSpecs: {}},; competitors: 'service.competitors',; marketSize: 'service.marketSize',; compliance: ['SOC 2',ISO 27001'],}))} '";
export const serviceMapper = {}; interface Service { id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string; contactInfo: {}}; technicalSpecs?: {}}; competitors?: string[]; marketSize?: string; compliance?: string[],} id: service.id,title: service.name,description: service.description,category: service.category,subcategory: service.category,price: parseInt(service.price.replace(/[$,]/g,)),currency: '$',pricingModel: 'monthly',features: service.features,benefits: [service.roi,service.marketPosition],useCases: service.useCases,targetAudience: [service.targetAudience],tags: [service.category,...service.technology.slice(0,3)],estimatedDelivery: service.setupTime,supportLevel: 'enterprise',marketPrice: service.price + service.period,roi: service.roi,innovationLevel: 'Advanced',contactInfo: {}; website: service.contactInfo.website},technicalSpecs: {}},competitors: service.competitors,marketSize: service.marketSize,compliance: ['SOC 2',ISO 27001'],}))} '";
export const serviceMapper = {}; interface Service { id: string; title: string; description: string; category: string; subcategory: string; price: number; currency: string; pricingModel: string; features: string[]; benefits: string[]; useCases: string[]; targetAudience: string[]; tags: string[]; estimatedDelivery: string; supportLevel: string; marketPrice: string; roi: string; innovationLevel: string; contactInfo: {}}; technicalSpecs?: {}}; competitors?: string[]; marketSize?: string; compliance?: string[],} id: service.id,title: service.name,description: service.description,category: service.category,subcategory: service.category,price: parseInt(service.price.replace(/[$,]/g,)),currency: '$',pricingModel: 'monthly',features: service.features,benefits: [service.roi,service.marketPosition],useCases: service.useCases,targetAudience: [service.targetAudience],tags: [service.category,...service.technology.slice(0,3)],estimatedDelivery: service.setupTime,supportLevel: 'enterprise',marketPrice: service.price + service.period,roi: service.roi,innovationLevel: 'Advanced',contactInfo: {}; website: service.contactInfo.website},technicalSpecs: {}},competitors: service.competitors,marketSize: service.marketSize,compliance: ['SOC 2',ISO 27001'],}))} '";
