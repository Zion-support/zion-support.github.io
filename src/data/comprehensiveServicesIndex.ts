// Comprehensive Services Index
// This file exports all our innovative technology services

// Core Innovative Services
export { EXPANDED_INNOVATIVE_SERVICES_2025 } from "./expandedInnovativeServices2025";
export type { ExpandedInnovativeService } from "./expandedInnovativeServices2025";

// Emerging Technology Services
export { EMERGING_TECH_SERVICES_2025 } from "./emergingTechServices2025";
export type { EmergingTechService } from "./emergingTechServices2025";

// Ultimate Micro SAAS Services
export { ULTIMATE_MICRO_SAAS_SERVICES_2025 } from "./ultimateMicroSaasServices2025";
export type { UltimateMicroSaasService } from "./ultimateMicroSaasServices2025";

// Combined Services Array
export 
  ...EXPANDED_INNOVATIVE_SERVICES_2025,;
  ...EMERGING_TECH_SERVICES_2025,;
  ...ULTIMATE_MICRO_SAAS_SERVICES_2025;
];

// Service Categories
export 
  'Neuromorphic Computing',;
  'Digital Twin & Simulation',;
  'Synthetic Biology',;
  'Brain-Computer Interface',;
  'Sustainability & Energy',;
  'Autonomous Vehicles & Fleet Management';
];

// Innovation Levels
export 
  'Cutting-edge',;
  'Advanced',;
  'Professional';
];

// Support Levels
export 
  'enterprise',;
  'professional',;
  'basic';
];

// Pricing Models
export 
  'monthly',;
  'annual',;
  'one-time',;
  'usage-based';
];

// Contact Information
export 
  ;
  ;
  ;
  ;
  Middletown DE 19709';
};

// Service Statistics
export 
  ;
  ;
  ;
  ;
  pricingModels: PRICING_MODELS.length;
};

// Helper Functions
export 
  return ALL_COMPREHENSIVE_SERVICES.filter(service => service.category === category)};

export 
  return ALL_COMPREHENSIVE_SERVICES.filter(service => service.innovationLevel === level)};

export 
};

export 
  return ALL_COMPREHENSIVE_SERVICES.filter(service =>;
    tags.some(tag => service.tags.includes(tag));
  )};

export 
  return ALL_COMPREHENSIVE_SERVICES.filter(service = >;
    service.title.toLowerCase().includes(searchTerm) ||;
    service.description.toLowerCase().includes(searchTerm) ||;
    service.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||;
    service.category.toLowerCase().includes(searchTerm);
  )};

export default ALL_COMPREHENSIVE_SERVICES;