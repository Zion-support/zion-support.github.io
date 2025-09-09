export interface MarketplaceListing {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  location?: string;
  availability?: string;
  rating?: number;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export const MARKETPLACE_LISTINGS: MarketplaceListing[] = [
  {
    id: 'prod_001',
    title: 'High-Performance Server Rack',
    description: 'Enterprise-grade server rack with advanced cooling and power management',
    category: 'Hardware',
    price: 2500,
    currency: 'USD',
    location: 'New York',
    availability: 'In Stock',
    rating: 4.8,
    tags: ['server', 'enterprise', 'rack'],
    featured: true
  },
  {
    id: 'prod_002',
    title: 'Cloud Management Platform',
    description: 'Comprehensive cloud infrastructure management solution',
    category: 'Software',
    price: 1500,
    currency: 'USD',
    location: 'San Francisco',
    availability: 'Available',
    rating: 4.6,
    tags: ['cloud', 'management', 'saas'],
    featured: false
  },
  {
    id: 'prod_003',
    title: 'IoT Sensor Network Kit',
    description: 'Complete IoT sensor network for industrial monitoring',
    category: 'IoT',
    price: 800,
    currency: 'USD',
    location: 'Austin',
    availability: 'Limited Stock',
    rating: 4.9,
    tags: ['iot', 'sensors', 'industrial'],
    featured: true
  },
  {
    id: 'prod_004',
    title: 'Cybersecurity Suite',
    description: 'Advanced cybersecurity tools and monitoring platform',
    category: 'Security',
    price: 3000,
    currency: 'USD',
    location: 'Washington DC',
    availability: 'In Stock',
    rating: 4.7,
    tags: ['security', 'cybersecurity', 'monitoring'],
    featured: false
  },
  {
    id: 'prod_005',
    title: 'AI Development Framework',
    description: 'Complete framework for building and deploying AI models',
    category: 'AI/ML',
    price: 2000,
    currency: 'USD',
    location: 'Seattle',
    availability: 'Available',
    rating: 4.5,
    tags: ['ai', 'machine-learning', 'framework'],
    featured: true
  },
  {
    id: 'prod_006',
    title: 'Network Infrastructure Bundle',
    description: 'Complete networking solution for enterprise environments',
    category: 'Networking',
    price: 1800,
    currency: 'USD',
    location: 'Chicago',
    availability: 'In Stock',
    rating: 4.4,
    tags: ['networking', 'infrastructure', 'enterprise'],
    featured: false
  },
  {
    id: 'prod_007',
    title: 'Data Analytics Platform',
    description: 'Enterprise data analytics and visualization platform',
    category: 'Analytics',
    price: 2200,
    currency: 'USD',
    location: 'Boston',
    availability: 'Available',
    rating: 4.6,
    tags: ['analytics', 'data', 'visualization'],
    featured: false
  },
  {
    id: 'prod_008',
    title: 'Blockchain Development Kit',
    description: 'Complete toolkit for blockchain application development',
    category: 'Blockchain',
    price: 1200,
    currency: 'USD',
    location: 'Miami',
    availability: 'Limited Stock',
    rating: 4.3,
    tags: ['blockchain', 'development', 'cryptocurrency'],
    featured: false
  }
];

export function generateSearchSuggestions(): string[] {
  return [
    'server',
    'cloud',
    'iot',
    'security',
    'ai',
    'networking',
    'analytics',
    'blockchain',
    'enterprise',
    'development'
  ];
}

export function generateFilterOptions(listings: MarketplaceListing[]) {
  const productTypes = [...new Set(listings.map(listing => listing.category))];
  const locations = [...new Set(listings.map(listing => listing.location).filter(Boolean))];
  const availability = [...new Set(listings.map(listing => listing.availability).filter(Boolean))];
  
  return {
    productTypes,
    locations,
    availability
  };
}

export function generateRandomListing(): MarketplaceListing {
  const categories = ['Hardware', 'Software', 'IoT', 'Security', 'AI/ML', 'Networking', 'Analytics', 'Blockchain'];
  const locations = ['New York', 'San Francisco', 'Austin', 'Washington DC', 'Seattle', 'Chicago', 'Boston', 'Miami'];
  const availabilities = ['In Stock', 'Available', 'Limited Stock', 'Pre-order'];
  
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  const randomAvailability = availabilities[Math.floor(Math.random() * availabilities.length)];
  
  return {
    id: `prod_${Math.random().toString(36).substr(2, 9)}`,
    title: `Random ${randomCategory} Product`,
    description: `A randomly generated ${randomCategory.toLowerCase()} product for testing purposes`,
    category: randomCategory,
    price: Math.floor(Math.random() * 3000) + 500,
    currency: 'USD',
    location: randomLocation,
    availability: randomAvailability,
    rating: Math.floor(Math.random() * 20) / 10 + 3,
    tags: [randomCategory.toLowerCase(), 'random', 'test'],
    featured: Math.random() > 0.7
  };
}