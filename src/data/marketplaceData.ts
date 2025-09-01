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
      verified: true,
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
      verified: true,
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
      verified: true,
    },
    location: 'Boston, MA',
    availability: 'limited',
    deliveryTime: '4-6 weeks',
    warranty: '2 years'
  }
];

export interface SearchSuggestion {
  id: string;
  text: string;
  category: string;
  type: 'service' | 'product' | 'talent' | 'equipment';
}

export function generateSearchSuggestions(): SearchSuggestion[] {
  return [
    // AI Services
    { id: 'ai-1', text: 'AI Solutions', category: 'Services', type: 'service' },
    { id: 'ai-2', text: 'Machine Learning', category: 'Services', type: 'service' },
    { id: 'ai-3', text: 'Process Automation', category: 'Services', type: 'service' },
    { id: 'ai-4', text: 'Predictive Analytics', category: 'Services', type: 'service' },
    
    // Cloud Services
    { id: 'cloud-1', text: 'Cloud Migration', category: 'Services', type: 'service' },
    { id: 'cloud-2', text: 'DevOps', category: 'Services', type: 'service' },
    { id: 'cloud-3', text: 'Infrastructure', category: 'Services', type: 'service' },
    
    // Cybersecurity
    { id: 'security-1', text: 'Cybersecurity', category: 'Services', type: 'service' },
    { id: 'security-2', text: 'Compliance', category: 'Services', type: 'service' },
    { id: 'security-3', text: 'Threat Detection', category: 'Services', type: 'service' },
    
    // Digital Transformation
    { id: 'transform-1', text: 'Digital Transformation', category: 'Services', type: 'service' },
    { id: 'transform-2', text: 'Business Intelligence', category: 'Services', type: 'service' },
    { id: 'transform-3', text: 'Process Optimization', category: 'Services', type: 'service' },
    
    // Industries
    { id: 'industry-1', text: 'Manufacturing', category: 'Industries', type: 'service' },
    { id: 'industry-2', text: 'Healthcare', category: 'Industries', type: 'service' },
    { id: 'industry-3', text: 'Financial Services', category: 'Industries', type: 'service' },
    { id: 'industry-4', text: 'Technology', category: 'Industries', type: 'service' },
    
    // Case Studies
    { id: 'case-1', text: 'Case Studies', category: 'Resources', type: 'service' },
    { id: 'case-2', text: 'Success Stories', category: 'Resources', type: 'service' },
    
    // Contact
    { id: 'contact-1', text: 'Contact Us', category: 'Company', type: 'service' },
    { id: 'contact-2', text: 'Get Quote', category: 'Company', type: 'service' }
  ];
}
