export interface MatchResultItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl?: string;
  tags: string[];
  matchScore: number;
  provider: {
    name: string;
    avatar?: string;
    verified: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface MatchmakingFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  tags?: string[];
  location?: string;
}

export interface MatchmakingResult {
  items: MatchResultItem[];
  totalCount: number;
  hasMore: boolean;
  nextCursor?: string;
}

export const mockMatchResults: MatchResultItem[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Advanced analytics dashboard with AI-driven insights and real-time data visualization.',
    category: 'AI Tools',
    price: 299,
    rating: 4.8,
    imageUrl: '/images/analytics-dashboard.jpg',
    tags: ['AI', 'Analytics', 'Dashboard', 'Real-time'],
    matchScore: 95,
    provider: {
      name: 'Tech Solutions Inc.',
      avatar: '/avatars/tech-solutions.jpg',
      verified: true
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: '2',
    title: 'Cloud Migration Service',
    description: 'Complete cloud migration service with zero downtime and comprehensive support.',
    category: 'Cloud Services',
    price: 1500,
    rating: 4.9,
    imageUrl: '/images/cloud-migration.jpg',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
    matchScore: 92,
    provider: {
      name: 'Cloud Experts LLC',
      avatar: '/avatars/cloud-experts.jpg',
      verified: true
    },
    createdAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '3',
    title: 'Cybersecurity Audit',
    description: 'Comprehensive cybersecurity audit with detailed vulnerability assessment and remediation plan.',
    category: 'Security',
    price: 800,
    rating: 4.7,
    imageUrl: '/images/cybersecurity.jpg',
    tags: ['Security', 'Audit', 'Compliance', 'Vulnerability'],
    matchScore: 88,
    provider: {
      name: 'SecureTech Pro',
      avatar: '/avatars/securetech.jpg',
      verified: true
    },
    createdAt: '2024-01-12T11:00:00Z',
    updatedAt: '2024-01-19T13:20:00Z'
  }
];

export async function findMatches(filters: MatchmakingFilters): Promise<MatchmakingResult> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  let filteredResults = [...mockMatchResults];
  
  if (filters.category) {
    filteredResults = filteredResults.filter(item => 
      item.category.toLowerCase().includes(filters.category!.toLowerCase())
    );
  }
  
  if (filters.minPrice !== undefined) {
    filteredResults = filteredResults.filter(item => item.price >= filters.minPrice!);
  }
  
  if (filters.maxPrice !== undefined) {
    filteredResults = filteredResults.filter(item => item.price <= filters.maxPrice!);
  }
  
  if (filters.minRating !== undefined) {
    filteredResults = filteredResults.filter(item => item.rating >= filters.minRating!);
  }
  
  if (filters.tags && filters.tags.length > 0) {
    filteredResults = filteredResults.filter(item =>
      filters.tags!.some(tag => item.tags.some(itemTag => 
        itemTag.toLowerCase().includes(tag.toLowerCase())
      ))
    );
  }
  
  // Sort by match score
  filteredResults.sort((a, b) => b.matchScore - a.matchScore);
  
  return {
    items: filteredResults,
    totalCount: filteredResults.length,
    hasMore: false,
    nextCursor: undefined
  };
}