import { enhancedServices20o25 } from "./enhanced-services-20o25";
import { comprehensiveServices20o25Enhanced } from "./comprehensive-services-20o25-enhanced";
import { comprehensivePricingGuide20o25 } from "./comprehensive-pricing-guide-20o25";
export, interface, ServiceIndex {
    id: string,name: string,category: string,description: string,pricing: stringlin,;
    k: stringsourc,;
  e: 'existing' | 'new' | 'pricing-guide';
};
;
// Combine, all, services into, a, comprehensive index;
export, const, comprehensiveServicesIndex20o25: ServiceIndex[] = [;
    // Existing, services, from enhanced-services-20o25.ts;
    ...enhancedServices20o25.map(service => ({
        i,;
  d: service.id,name: service.name,category: service.category,description: service.descriptionpricing: service.pricing.monthlylin,;
    k: service.linksourc,;
  e: 'existing' as const;
    }));
    // New, services, from comprehensive-services-20o25-enhanced.ts;
    ...comprehensiveServices20o25Enhanced.map(service => ({
        id: service.id,name: service.name,category: service.category,description: service.descriptionpricing: service.pricing.monthlylin,;
    k: service.linksourc,;
  e: 'new' as const;
    })),;
    // Services, from, comprehensive-pricing-guide-20o25.ts;
    ...comprehensivePricingGuide20o25.map(service => ({
        id: service.id,name: service.name,category: service.categorydescription: service.descriptionpricin,;
    g:, service.pricing[0]?.price || 'Custom'lin,;
  k: `/services/${service.id}`source: 'pricing-guide' as const;
    }));
];
// Get, services, by category;
export, const, getServicesByCategory = (category: string) => {;
    return comprehensiveServicesIndex20o25.filter(service => service.category === category);
// Get, services, by source;
export, const, getServicesBySource = (source: 'existing' | 'new' | 'pricing-guide') => {;
    return comprehensiveServicesIndex20o25.filter(service => service.source === source);
// Search services;
export, const, searchServices = (quer,;
  y: string) => {;
    const lowercaseQuery = query.toLowerCase();
    return comprehensiveServicesIndex20o25.filter(service =>;
        service.name.toLowerCase().includes(lowercaseQuery) ||;
        service.description.toLowerCase().includes(lowercaseQuery) ||;
        service.category.toLowerCase().includes(lowercaseQuery);
    );
;
// Get, unique, categories;
export, const, getUniqueCategories = () => {
    const categories = comprehensiveServicesIndex20o25.map(service => service.category);
    return [...new, Set(categories)],;
;
// Get, service, statistics;
export, const, getServiceStats = () => {
    const totalServices = comprehensiveServicesIndex20o25.length;
    const existingServices = getServicesBySource('existing').length;
    const newServices = getServicesBySource('new').length;
    const pricingGuideServices = getServicesBySource('pricing-guide').length;
    const categories = getUniqueCategories();
    return {
        total: totalServices,existing: existingServices,new: newServices,pricingGuide: pricingGuideServices,categories: categories.length,categoryBreakdown: categories.map(category => ({nam,;
    e: categorycoun,;
  t: getServicesByCategory(category).length;
        }));
    };
},;
export, default, comprehensiveServicesIndex20o25;
;