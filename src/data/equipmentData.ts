export interface ProductListing {
  id: string;
  title: string;
  description: string;
  brand?: string;
  category: string;
  subcategory?: string;
  images?: string[];
  price?: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  availability?: string;
  specifications?: string[];
  tags?: string[];
}

export const equipmentListings: ProductListing[] = [
  {
    id: 'ai-edge-gateway-1000',
    title: 'AI Edge Gateway 1000',
    description: 'Ruggedized edge compute with on-device inference and secure connectivity.',
    brand: 'ZionTech',
    category: 'Edge Computing',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500'],
    price: 4999,
    currency: '$',
    rating: 4.7,
    reviewCount: 124,
    availability: 'In Stock',
    specifications: ['8-core CPU', '32GB RAM', '1TB NVMe', 'Dual 10GbE'],
    tags: ['edge', 'inference', 'secure']
  },
  {
    id: 'quantum-safe-hsm',
    title: 'Quantum-Safe HSM',
    description: 'Next-gen hardware security module with post-quantum crypto support.',
    brand: 'ZionSecure',
    category: 'Security',
    images: ['https://images.unsplash.com/photo-1587202372775-98927b8751f4?auto=format&fit=crop&w=800&h=500'],
    price: 12999,
    currency: '$',
    rating: 4.9,
    reviewCount: 56,
    availability: 'Ships in 2-3 weeks',
    specifications: ['PQC Suite', 'FIPS 140-3', 'HSM Clustering'],
    tags: ['crypto', 'security', 'pqc']
  }
];

