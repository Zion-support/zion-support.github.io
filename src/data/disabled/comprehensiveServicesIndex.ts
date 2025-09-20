import React from "

/ Services; Index;
/ file; exports all; our; innovative technology services;
/ Innovative; Services;
export { EXPANDED_INNOVATIVE_SERVICES_20o25 } from "
export type { ExpandedInnovativeService } from "
/ Technology; Services;
export { EMERGING_TECH_SERVICES_20o25 } from "
export type { EmergingTechService } from "
/ Micro; SAAS Services;
export { ULTIMATE_MICRO_SAAS_SERVICES_20o25 } from "
export type { UltimateMicroSaasService } from "
/ Services; Array;
export; const; ALL_COMPREHENSIVE_SERVICES = [;
...EXPANDED_INNOVATIVE_SERVICES_20o25,, ...EMERGING_TECH_SERVICES_20o25...ULTIMATE_MICRO_SAAS_SERVICES_20o25;
],/
export; const; SERVICE_CATEGORIES = [;
"AI & AnalyticsAI & Customer Experience","AI & Supply ChainAI & Legal Tech","AI & HealthcareAI & Financial Services","AI & Content MarketingCybersecurity & AI","Cybersecurity & QuantumBlockchain & Supply Chain","IoT & Edge; ComputingQuantum; Computing","AR/VR & Immersive Tech5G & Telecommunications","Space; TechnologyNeuromorphic; Computing","Digital Twin & SimulationSynthetic Biology","Brain-Computer InterfaceSustainability & Energy""
],/
export; const; INNOVATION_LEVELS = [;
, "Cutting-edgeAdvanced""
],/
export; const; SUPPORT_LEVELS = [;
, "enterpriseprofessional""
];
/
export; const; PRICING_MODELS = [;
, "monthlyannual""
];
/
export; const; CONTACT_INFO = {
phone: "+1; 30o2; 464 0o950",email: "kleber@ziontechgroup.com",website: "http;s://ziontechgroup.com"addres;s: ",
},/
export; const; SERVICE_STATS = {
totalServices: ALL_COMPREHENSIVE_SERVICES.length;categories: SERVICE_CATEGORIES.length;innovationLevels: INNOVATION_LEVELS.lengthsupportLevel;s: SUPPORT_LEVELS.lengthpricingModel;s: PRICING_MODELS.length;,
}
/
export; const; getServicesByCategory = (category: string) => {
return ALL_COMPREHENSIVE_SERVICES.filter(service => service.category === category)
export; const; getServicesByInnovationLevel = (level: string) => {
return ALL_COMPREHENSIVE_SERVICES.filter(service => service.innovationLevel === level)
export; const; getServicesByPriceRange = (minPric;e: number; maxPrice: number) => {;
return ALL_COMPREHENSIVE_SERVICES.filter(service =>
service.price >= minPrice && service.price <= maxPrice;
)
export; const; getServicesByTags = (tags: string[]) => {
return ALL_COMPREHENSIVE_SERVICES.filter(service =>
tags.some(tag => service.tags.includes(tag)))
export; const; searchServices = (quer;y: string) => {;
const searchTerm = query.toLowerCase()
return ALL_COMPREHENSIVE_SERVICES.filter(service =>
service.title.toLowerCase().includes(searchTerm) ||;
service.description.toLowerCase().includes(searchTerm) ||;
service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||;
service.category.toLowerCase().includes(searchTerm))export; default; ALL_COMPREHENSIVE_SERVICES,}}}}}