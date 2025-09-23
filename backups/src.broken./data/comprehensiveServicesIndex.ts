// Comprehensive Services Index for Zion Tech Group
// This file provides a centralized index of all available services

import { cuttingEdgeInnovationServices2026 } from '../../data/2026-cutting-edge-innovations';
import { specializedIndustrySolutions2026 } from '../../data/2026-specialized-industry-solutions-v2';
import { enterpriseITSolutions2026 } from '../../data/2026-enterprise-it-solutions';

// Contact information for Zion Tech Group
export const ZION_CONTACT_INFO = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Service categories for easy filtering and organization
export const SERVICE_CATEGORIES = {
  'AI & Machine Learning': {
    description: 'Advanced artificial intelligence and machine learning solutions',
    icon: '🤖',
    color: 'from-purple-600 to-pink-700',
    services: []
  },
  'Quantum Technology': {
    description: 'Next-generation quantum computing and quantum-resistant solutions',
    icon: '⚛️',
    color: 'from-indigo-600 to-purple-700',
    services: []
  },
  'Cybersecurity': {
    description: 'Enterprise-grade security and threat protection',
    icon: '🔒',
    color: 'from-green-600 to-emerald-700',
    services: []
  },
  'Cloud & Infrastructure': {
    description: 'Scalable cloud solutions and infrastructure management',
    icon: '☁️',
    color: 'from-blue-600 to-cyan-700',
    services: []
  },
  'Healthcare Technology': {
    description: 'Innovative healthcare and medical technology solutions',
    icon: '🏥',
    color: 'from-red-600 to-pink-700',
    services: []
  },
  'Financial Technology': {
    description: 'Advanced financial and trading technology platforms',
    icon: '💰',
    color: 'from-yellow-600 to-orange-700',
    services: []
  },
  'Manufacturing & Industry': {
    description: 'Smart manufacturing and industrial automation',
    icon: '🏭',
    color: 'from-gray-600 to-slate-700',
    services: []
  },
  'Retail & E-commerce': {
    description: 'Retail automation and e-commerce optimization',
    icon: '🛒',
    color: 'from-blue-600 to-indigo-700',
    services: []
  },
  'Educational Technology': {
    description: 'AI-powered education and learning platforms',
    icon: '🎓',
    color: 'from-indigo-600 to-blue-700',
    services: []
  },
  'Energy & Sustainability': {
    description: 'Energy optimization and sustainability solutions',
    icon: '⚡',
    color: 'from-yellow-600 to-orange-700',
    services: []
  },
  'Logistics & Supply Chain': {
    description: 'Autonomous logistics and supply chain management',
    icon: '📦',
    color: 'from-orange-600 to-red-700',
    services: []
  },
  'Neurotechnology': {
    description: 'Brain-computer interfaces and neural systems',
    icon: '🧠',
    color: 'from-pink-600 to-rose-700',
    services: []
  },
  'Immersive Technology': {
    description: 'Holographic and virtual reality solutions',
    icon: '👁️',
    color: 'from-cyan-600 to-blue-700',
    services: []
  },
  'Blockchain & Security': {
    description: 'Quantum-resistant blockchain and security',
    icon: '🔗',
    color: 'from-orange-600 to-red-700',
    services: []
  },
  'AI & Environmental Science': {
    description: 'Climate modeling and environmental AI',
    icon: '🌍',
    color: 'from-green-600 to-emerald-700',
    services: []
  },
  'Autonomous Systems': {
    description: 'AI-powered autonomous operations',
    icon: '🚁',
    color: 'from-sky-600 to-blue-700',
    services: []
  },
  'Biotechnology': {
    description: 'Synthetic biology and biotech platforms',
    icon: '🧬',
    color: 'from-purple-600 to-violet-700',
    services: []
  },
  'Space Technology': {
    description: 'AI-powered space exploration and research',
    icon: '🚀',
    color: 'from-slate-600 to-gray-700',
    services: []
  },
  'Data Center Technology': {
    description: 'Autonomous data center management',
    icon: '🏢',
    color: 'from-slate-600 to-gray-700',
    services: []
  },
  'Edge Computing': {
    description: 'Distributed edge infrastructure orchestration',
    icon: '🌐',
    color: 'from-cyan-600 to-blue-700',
    services: []
  },
  'Digital Twin Technology': {
    description: 'Enterprise digital twin platforms',
    icon: '🔄',
    color: 'from-violet-600 to-purple-700',
    services: []
  },
  'Network Technology': {
    description: 'AI-powered network optimization',
    icon: '🌐',
    color: 'from-blue-600 to-indigo-700',
    services: []
  }
};

// Combine all services
export const ALL_SERVICES = [
  ...cuttingEdgeInnovationServices2026,
  ...specializedIndustrySolutions2026,
  ...enterpriseITSolutions2026
];

// Categorize services
export const CATEGORIZED_SERVICES = ALL_SERVICES.reduce((acc, service) => {
  const category = service.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(service);
  return acc;
}, {} as Record<string, typeof ALL_SERVICES>);

// Popular services (marked as popular)
export const POPULAR_SERVICES = ALL_SERVICES.filter(service => service.popular);

// Services by price range
export const SERVICES_BY_PRICE = {
  'Under $10K/month': ALL_SERVICES.filter(service => {
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    return price < 10;
  }),
  '$10K - $25K/month': ALL_SERVICES.filter(service => {
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    return price >= 10 && price < 25;
  }),
  '$25K - $50K/month': ALL_SERVICES.filter(service => {
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    return price >= 25 && price < 50;
  }),
  'Over $50K/month': ALL_SERVICES.filter(service => {
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    return price >= 50;
  })
};

// Services by technology
export const SERVICES_BY_TECHNOLOGY = ALL_SERVICES.reduce((acc, service) => {
  service.technology.forEach(tech => {
    if (!acc[tech]) {
      acc[tech] = [];
    }
    acc[tech].push(service);
  });
  return acc;
}, {} as Record<string, typeof ALL_SERVICES>);

// Services by target audience
export const SERVICES_BY_AUDIENCE = ALL_SERVICES.reduce((acc, service) => {
  const audiences = service.targetAudience.split(', ');
  audiences.forEach(audience => {
    if (!acc[audience]) {
      acc[audience] = [];
    }
    acc[audience].push(service);
  });
  return acc;
}, {} as Record<string, typeof ALL_SERVICES>);

// Search services by query
export const searchServices = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return ALL_SERVICES.filter(service => 
    service.name.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tagline.toLowerCase().includes(lowercaseQuery) ||
    service.category.toLowerCase().includes(lowercaseQuery) ||
    service.technology.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
    service.useCases.some(useCase => useCase.toLowerCase().includes(lowercaseQuery))
  );
};

// Get services by category
export const getServicesByCategory = (category: string) => {
  return ALL_SERVICES.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

// Get services by price range
export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return ALL_SERVICES.filter(service => {
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
};

// Get services by technology
export const getServicesByTechnology = (technology: string) => {
  return ALL_SERVICES.filter(service =>
    service.technology.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

// Get services by use case
export const getServicesByUseCase = (useCase: string) => {
  return ALL_SERVICES.filter(service =>
    service.useCases.some(uc => 
      uc.toLowerCase().includes(useCase.toLowerCase())
    )
  );
};

// Get services by target audience
export const getServicesByTargetAudience = (audience: string) => {
  return ALL_SERVICES.filter(service =>
    service.targetAudience.toLowerCase().includes(audience.toLowerCase())
  );
};

// Get services by ROI range
export const getServicesByROI = (minROI: number) => {
  return ALL_SERVICES.filter(service => {
    const roi = parseInt(service.roi.split(' ')[0].replace(/[^0-9]/g, ''));
    return roi >= minROI;
  });
};

// Get services by rating
export const getServicesByRating = (minRating: number) => {
  return ALL_SERVICES.filter(service => service.rating >= minRating);
};

// Get services by customer count
export const getServicesByCustomerCount = (minCustomers: number) => {
  return ALL_SERVICES.filter(service => service.customers >= minCustomers);
};

// Get services by launch date
export const getServicesByLaunchDate = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return ALL_SERVICES.filter(service => {
    const launch = new Date(service.launchDate);
    return launch >= start && launch <= end;
  });
};

// Get services by competitor
export const getServicesByCompetitor = (competitor: string) => {
  return ALL_SERVICES.filter(service =>
    service.competitors.some(comp => 
      comp.toLowerCase().includes(competitor.toLowerCase())
    )
  );
};

// Get services by market size
export const getServicesByMarketSize = (minMarketSize: number) => {
  return ALL_SERVICES.filter(service => {
    const marketSize = parseInt(service.marketSize.replace(/[^0-9]/g, ''));
    return marketSize >= minMarketSize;
  });
};

// Get services by growth rate
export const getServicesByGrowthRate = (minGrowthRate: number) => {
  return ALL_SERVICES.filter(service => {
    const growthRate = parseInt(service.growthRate.replace(/[^0-9]/g, ''));
    return growthRate >= minGrowthRate;
  });
};

// Export all services for easy access
export default {
  ALL_SERVICES,
  CATEGORIZED_SERVICES,
  POPULAR_SERVICES,
  SERVICES_BY_PRICE,
  SERVICES_BY_TECHNOLOGY,
  SERVICES_BY_AUDIENCE,
  ZION_CONTACT_INFO,
  SERVICE_CATEGORIES,
  searchServices,
  getServicesByCategory,
  getServicesByPriceRange,
  getServicesByTechnology,
  getServicesByUseCase,
  getServicesByTargetAudience,
  getServicesByROI,
  getServicesByRating,
  getServicesByCustomerCount,
  getServicesByLaunchDate,
  getServicesByCompetitor,
  getServicesByMarketSize,
  getServicesByGrowthRate
};