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
    verified: boolean;
  };
  location: string;
  availability: 'available' | 'limited' | 'out-of-stock';
  deliveryTime: string;
  warranty: string;
}

export const marketplaceItems: MarketplaceItem[] = [
  {
    id: 'ai-server-cluster',
    title: 'AI-Powered Server Cluster',
    category: 'products',
    description: 'High-performance computing cluster optimized for AI workloads with GPU acceleration and scalable architecture.',
    price: '$25,000',
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    tags: ['AI', 'High Performance', 'Scalable', 'GPU'],
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
    tags: ['Security', 'Expert', 'Certified', 'Compliance'],
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
    tags: ['Quantum', 'Research', 'Advanced', 'Experimental'],
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
    tags: ['Cloud', 'Migration', 'Enterprise', 'AWS'],
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
    id: 'iot-platform',
    title: 'IoT Edge Computing Platform',
    category: 'products',
    description: 'Comprehensive IoT platform with edge computing capabilities for real-time data processing and analytics.',
    price: '$18,500',
    rating: 4.6,
    reviews: 78,
    views: 1890,
    likes: 112,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['IoT', 'Edge Computing', 'Real-time', 'Analytics'],
    featured: false,
    seller: {
      name: 'IoT Solutions Pro',
      rating: 4.5,
      verified: true
    },
    location: 'Seattle, WA',
    availability: 'available',
    deliveryTime: '3-4 weeks',
    warranty: '2 years'
  },
  {
    id: 'data-scientist',
    title: 'Senior Data Scientist',
    category: 'talent',
    description: 'Experienced data scientist specializing in machine learning, statistical analysis, and big data processing.',
    price: '$120/hr',
    rating: 4.7,
    reviews: 145,
    views: 3120,
    likes: 167,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Data Science', 'Machine Learning', 'Python', 'Statistics'],
    featured: false,
    seller: {
      name: 'DataGenius Consulting',
      rating: 4.7,
      verified: true
    },
    location: 'Remote',
    availability: 'available',
    deliveryTime: 'Immediate',
    warranty: 'N/A'
  }
];

export const marketplaceCategories = [
  {
    id: 'products',
    name: 'Products',
    description: 'Hardware and software solutions',
    count: marketplaceItems.filter(item => item.category === 'products').length
  },
  {
    id: 'talent',
    name: 'Talent',
    description: 'Expert professionals and teams',
    count: marketplaceItems.filter(item => item.category === 'talent').length
  },
  {
    id: 'equipment',
    name: 'Equipment',
    description: 'Computing and networking equipment',
    count: marketplaceItems.filter(item => item.category === 'equipment').length
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Professional services and consulting',
    count: marketplaceItems.filter(item => item.category === 'services').length
  }
];

export const marketplaceFilters = [
  {
    title: 'Category',
    key: 'category',
    type: 'checkbox' as const,
    options: marketplaceCategories.map(cat => ({
      value: cat.id,
      label: cat.name,
      count: cat.count
    }))
  },
  {
    title: 'Price Range',
    key: 'priceRange',
    type: 'radio' as const,
    options: [
      { value: '0-1000', label: 'Under $1,000' },
      { value: '1000-5000', label: '$1,000 - $5,000' },
      { value: '5000-10000', label: '$5,000 - $10,000' },
      { value: '10000+', label: 'Over $10,000' }
    ]
  },
  {
    title: 'Rating',
    key: 'rating',
    type: 'checkbox' as const,
    options: [
      { value: '4.5+', label: '4.5+ Stars' },
      { value: '4.0+', label: '4.0+ Stars' },
      { value: '3.5+', label: '3.5+ Stars' }
    ]
  },
  {
    title: 'Availability',
    key: 'availability',
    type: 'checkbox' as const,
    options: [
      { value: 'available', label: 'Available' },
      { value: 'limited', label: 'Limited' },
      { value: 'out-of-stock', label: 'Out of Stock' }
    ]
  }
];