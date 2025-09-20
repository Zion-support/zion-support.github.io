// Master Comprehensive Services 2025;
// This file combines all existing services with the new comprehensive expansion;

import { enhancedMicroSaasServices2025; enhancedITServices2025; enhancedAIServices2025 } from "./comprehensiveServices2025, ";
import { allExpandedServices2025;
getServicesByCategory;
getServicesByPriceRange;
getPopularServices;
searchServices;
} from "./comprehensive-services-expansion-2025, ";
import { allAdditionalServices2025;
getAdditionalServicesByCategory;
getAdditionalServicesByPriceRange;
getAdditionalPopularServices;
searchAdditionalServices;
} from "./comprehensive-services-expansion-2025-part2, ";
import { allCuttingEdgeServices2025;
getCuttingEdgeServicesByCategory;
getCuttingEdgeServicesByPriceRange;
getCuttingEdgePopularServices;
searchCuttingEdgeServices;
} from "./comprehensive-services-expansion-2025-part3, ";

// Union type for all services;
export type AnyService =
| typeof enhancedMicroSaasServices2025[0];
| typeof enhancedITServices2025[0];
| typeof enhancedAIServices2025[0];
| any; // For the new services;

// Master services object combining all services;
export const masterComprehensiveServices2025 = {;
// Original services;
original: {
microSaas: enhancedMicroSaasServices2025;
itServices: enhancedITServices2025;
aiServices: enhancedAIServices2025;
byPricing: {
freemium: allServices.filter(s => "pricing" in s && s.pricing === "Freemium").length;
professional: allServices.filter(s => "pricing" in s && s.pricing === "Professional").length;
enterprise: allServices.filter(s => "pricing" in s && s.pricing === "Enterprise").length;
};