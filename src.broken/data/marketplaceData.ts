export interface MarketplaceItem {
  id: string;
  title: string;
  category: 'products' | 'talent' | 'equipment' | 'services';
  description: string;
  price: string;
  rating: number;
  reviews: number;
  views: number;
  likes: number;
  image: string;
  tags: string[];
  featured: boolean;
seller: {

    name: string;
    rating: number;
    verified: boolean};
  location: string;
  availability: 'available' | 'limited' | 'out-of-stock';
  deliveryTime: string;
  warranty: string}
;
export const marketplaceItems: MarketplaceItem[] = [{

// Mock marketplace listings with more realistic data
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {
    id: "ai-model-1",
    title: "GPT-4 API Integration Package",
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.",
    category: "AI Models & APIs",
    price: 1999,
    currency: "$",
    tags: ["GPT-4", "API Integration", "NLP"],
    author: {
      name: "AI Solutions Inc.",
      id: "ai-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    videoUrl: "https://example.com/demo.mp4",
    modelUrl: "https://example.com/model.glb",
    createdAt: "2024-01-10T12:30:00.000Z",
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib = rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    tags: ['AI',High Performance',Scalable',GPU'],
    featured: true,
    seller: {

      name: 'TechCorp Solutions',
      rating: 4.8,
      verified: true
    },
    location: 'San Francisco, CA',
    availability: 'available',
    deliveryTime: '2-3 weeks',
    warranty: '3 years'
  },
  {

    id: 'cybersecurity-team',
    title: 'Cybersecurity Expert Team',
    category: 'talent',
    description: 'Senior cybersecurity professionals with 10+ years experience in enterprise security, compliance, and threat detection.',
    price: '$150/hr',
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags['Security',Expert',Certified',Compliance'],;
    featured: true,
    seller: {

      name: 'SecureNet Professionals',
      rating: 4.9,
      verified: true
    },
    location: 'Remote',
    availability: 'available',
    deliveryTime: 'Immediate',
    warranty: 'N/A'
  },
  {

    id: 'quantum-hardware',
    title: 'Quantum Computing Hardware',
    category: 'equipment',
    description: 'State-of-the-art quantum computing components and systems for research and development applications.',
    price: '$50,000',
    rating: 4.7,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags['Quantum',Research',Advanced',Experimental'],;
    featured: false,
    seller: {

      name: 'QuantumTech Labs',
      rating: 4.6,
      verified: true
    },
    location: 'Boston, MA',
    availability: 'limited',
    deliveryTime: '4-6 weeks',
    warranty: '1 year'
  },
  {

    id: 'cloud-migration-service',
    title: 'Cloud Migration Service',
    category: 'services',
    description: 'Complete cloud migration service including planning, execution, and optimization for enterprise applications.',
    price: '$15,000',
    rating: 4.9,
    reviews: 203,
    views: 4567,
    likes: 278,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags['Cloud',Migration',Enterprise',AWS'],;
    featured: true,
    seller: {

      name: 'CloudMasters Inc',
      rating: 4.9,
      verified: true
    },
    location: 'Austin, TX',
    availability: 'available',
    deliveryTime: '6-8 weeks',
    warranty: '90 days support'
  },
  {
    id: "ai-business-10",
    title: "Enterprise AI Transformation Package",
    description: "Comprehensive solution for businesses looking to integrate AI across operations. Includes AI readiness assessment, strategy development, implementation roadmap, and staff training.",
    category: "Business Solutions",
    price: 15000,
    currency: "$",
    tags: ["Enterprise", "Digital Transformation", "AI Strategy"],
    author: {
      name: "BusinessAI Consultants",
      id: "businessai",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T11:00:00.000Z",
    rating: 4.8,
    reviewCount: 22,
    location: "North America",
    availability: "4-6 Weeks",
    aiScore: 96
  },
  {
    id: "ai-research-11",
    title: "AI Research Papers Database Access",
    description: "Subscription-based access to the world's largest collection of AI research papers with advanced search capabilities, citation tools, and summarization features.",
    category: "Research",
    price: 299,
    currency: "$",
    tags: ["Research", "Academic", "Machine Learning"],
    author: {
      name: "AI Research Hub",
      id: "airesearch",
    },
    images: ["https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 65,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },
  {
    id: "ai-robotics-12",
    title: "Intelligent Robotics Control System",
    description: "Advanced AI-powered control system for industrial and commercial robots with reinforcement learning capabilities, adaptive motion planning, and remote management interface.",
    category: "Robotics",
    price: 8999,
    currency: "$",
    tags: ["Robotics", "Automation", "Control Systems"],
    author: {
      name: "RoboticsMind",
      id: "roboticsmind",
      avatarUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:15:00.000Z",
    rating: 4.8,
    reviewCount: 19,
    featured: true,
    location: "Asia",
    availability: "3-4 Weeks",
    aiScore: 93
  },
  // Adding equipment listings so they're available in marketplace too
  {
    id: "equipment-1",
    title: "High-Performance AI Workstation",
    description: "Professional-grade workstation optimized for machine learning and AI model training with NVIDIA RTX GPUs.",
    category: "Workstations",
    price: 4999,
    currency: "$",
    tags: ["GPU", "Machine Learning", "Workstation"],
    author: {
      name: "TechGear Solutions",
      id: "techgear",
      avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-10T12:30:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks"
  },
  {
    id: "equipment-2",
    title: "Enterprise GPU Server Rack",
    description: "Scalable server rack solution with multiple NVIDIA A100 GPUs ideal for large-scale AI model training and deployment.",
    category: "Servers",
    price: 24999,
    currency: "$",
    tags: ["Server", "Enterprise", "GPU Cluster"],
    author: {
      name: "ServerPro Systems",
      id: "serverpro",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-15T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 18,
    featured: true,
    location: "North America",
    availability: "2-4 Weeks"
  }
];
;
export 
    id: 'services',;
    name: 'Services',;
    description: 'Professional services and consulting',;
    count: marketplaceItems.filter(item => item.category === 'services').length};
];
;
export 
      { value: '0-1000', label: 'Under $1,000' },
      { value: '1000-5000', label: '$1,000 - $5,000' },
      { value: '5000-10000', label: '$5,000 - $10,000' },
      { value: '10000+', label: 'Over $10,000' }
=======
    options[;'
      { value: '0-1000', label: 'Under $1,000' },'
      { value: '1000-5000', label: '$1,000 - $5,000' },'
      { value: '5000-10000', label: '$5,000 - $10,000' },'      { value: '10000+', label: 'Over $10,000' }
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    ]
  },;
  {

    title: 'Rating',
    key: 'rating',
    type: 'checkbox' as const,
    options[;
      { value: '4.5+', label: '4.5+ Stars' },
      { value: '4.0+', label: '4.0+ Stars' },
      { value: '3.5+', label: '3.5+ Stars' }
    ]
  },;
  {

// Generate filter options for sidebar
export const generateFilterOptions = (
  listings: ProductListing[] = MARKETPLACE_LISTINGS
): FilterOptions => {
  // Extract unique categories, locations, and availability options from the provided listings
  const productTypes = [...new Set(listings.map(listing => listing.category))].sort();
  const locations = [...new Set(listings.map(listing => listing.location).filter((loc): loc is string => typeof loc === 'string'))].sort();
  const availability = [...new Set(listings.map(listing => listing.availability).filter((avail): avail is string => typeof avail === 'string'))].sort();
  
  const prices = listings.map(listing => listing.price || 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    productTypes: productTypes.map(type => ({
      label: type,
      value: type
    })),
    locations: locations.map(location => ({
      label: location,
      value: location
    })),
    availabilityOptions: availability.map(item => ({
      label: item,
      value: item
    })),
    ratingOptions: [1, 2, 3, 4, 5], // Add rating options
    minPrice,
    maxPrice
  };
};

// These constants are still useful if needed elsewhere, but filterOptions now also provides them.
export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
