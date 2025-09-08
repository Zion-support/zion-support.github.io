export interface MatchResultItem {
  id: string;
  title: string;
  description: string;
  score: number;
  category: string;
  price?: {
    min: number;
    max: number;
  };
  location?: string;
  tags: string[];
  imageUrl?: string;
  provider: {
    name: string;
    rating: number;
    reviews: number;
  };
}

export interface MatchResult {
  items: MatchResultItem[];
  totalMatches: number;
  searchQuery: string;
  filters: {
    category?: string;
    priceRange?: {
      min: number;
      max: number;
    };
    location?: string;
  };
}

export interface SearchFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
  tags?: string[];
}

// Mock data for demonstration
const mockServices: MatchResultItem[] = [
  {
    id: '1',
    title: 'Professional Web Development',
    description: 'Full-stack web development using modern technologies like React, Node.js, and TypeScript.',
    score: 0.95,
    category: 'Web Development',
    price: { min: 5000, max: 15000 },
    location: 'Remote',
    tags: ['React', 'Node.js', 'TypeScript', 'Full-stack'],
    imageUrl: '/images/web-dev.jpg',
    provider: {
      name: 'Tech Solutions Inc.',
      rating: 4.8,
      reviews: 127
    }
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Native iOS and Android app development with cross-platform solutions.',
    score: 0.88,
    category: 'Mobile Development',
    price: { min: 8000, max: 25000 },
    location: 'San Francisco, CA',
    tags: ['React Native', 'iOS', 'Android', 'Mobile'],
    imageUrl: '/images/mobile-dev.jpg',
    provider: {
      name: 'Mobile Masters',
      rating: 4.6,
      reviews: 89
    }
  },
  {
    id: '3',
    title: 'UI/UX Design Services',
    description: 'Complete user interface and experience design for web and mobile applications.',
    score: 0.92,
    category: 'Design',
    price: { min: 3000, max: 12000 },
    location: 'New York, NY',
    tags: ['UI Design', 'UX Design', 'Figma', 'Prototyping'],
    imageUrl: '/images/ui-ux.jpg',
    provider: {
      name: 'Creative Design Co.',
      rating: 4.9,
      reviews: 156
    }
  },
  {
    id: '4',
    title: 'Data Science Consulting',
    description: 'Advanced analytics, machine learning, and data visualization solutions.',
    score: 0.85,
    category: 'Data Science',
    price: { min: 10000, max: 30000 },
    location: 'Remote',
    tags: ['Python', 'Machine Learning', 'Analytics', 'AI'],
    imageUrl: '/images/data-science.jpg',
    provider: {
      name: 'Data Insights Ltd.',
      rating: 4.7,
      reviews: 73
    }
  },
  {
    id: '5',
    title: 'DevOps & Cloud Infrastructure',
    description: 'Cloud migration, CI/CD setup, and infrastructure automation.',
    score: 0.90,
    category: 'DevOps',
    price: { min: 6000, max: 20000 },
    location: 'Austin, TX',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    imageUrl: '/images/devops.jpg',
    provider: {
      name: 'Cloud Solutions Pro',
      rating: 4.5,
      reviews: 94
    }
  }
];

export async function findMatches(
  query: string,
  filters: SearchFilters = {}
): Promise<MatchResult> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simple text-based matching for demonstration
  const queryLower = query.toLowerCase();
  
  let filteredServices = mockServices.filter(service => {
    // Text matching
    const matchesQuery = 
      service.title.toLowerCase().includes(queryLower) ||
      service.description.toLowerCase().includes(queryLower) ||
      service.tags.some(tag => tag.toLowerCase().includes(queryLower));

    // Category filtering
    const matchesCategory = !filters.category || 
      service.category.toLowerCase().includes(filters.category.toLowerCase());

    // Price filtering
    const matchesPrice = !filters.priceRange || 
      (service.price && 
       service.price.min >= filters.priceRange.min && 
       service.price.max <= filters.priceRange.max);

    // Location filtering
    const matchesLocation = !filters.location ||
      service.location?.toLowerCase().includes(filters.location.toLowerCase());

    // Tag filtering
    const matchesTags = !filters.tags || 
      filters.tags.some(filterTag => 
        service.tags.some(serviceTag => 
          serviceTag.toLowerCase().includes(filterTag.toLowerCase())
        )
      );

    return matchesQuery && matchesCategory && matchesPrice && matchesLocation && matchesTags;
  });

  // Sort by relevance score
  filteredServices.sort((a, b) => b.score - a.score);

  // Limit results
  const limitedResults = filteredServices.slice(0, 10);

  return {
    items: limitedResults,
    totalMatches: filteredServices.length,
    searchQuery: query,
    filters: {
      category: filters.category,
      priceRange: filters.priceRange,
      location: filters.location
    }
  };
}

export function calculateMatchScore(
  service: MatchResultItem,
  query: string,
  filters: SearchFilters
): number {
  let score = 0;
  const queryLower = query.toLowerCase();

  // Title matching (highest weight)
  if (service.title.toLowerCase().includes(queryLower)) {
    score += 0.4;
  }

  // Description matching
  if (service.description.toLowerCase().includes(queryLower)) {
    score += 0.3;
  }

  // Tag matching
  const tagMatches = service.tags.filter(tag => 
    tag.toLowerCase().includes(queryLower)
  ).length;
  score += (tagMatches / service.tags.length) * 0.2;

  // Category matching
  if (filters.category && 
      service.category.toLowerCase().includes(filters.category.toLowerCase())) {
    score += 0.1;
  }

  return Math.min(score, 1.0);
}