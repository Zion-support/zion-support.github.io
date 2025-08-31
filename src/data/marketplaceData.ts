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
    warranty: '2 years'
  }
];

export const generateSearchSuggestions = () => {
  return marketplaceItems.map(item => ({
    title: item.title,
    description: item.description,
    category: item.category,
    price: item.price
  }));
};
