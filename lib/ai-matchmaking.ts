export interface MatchResultItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  tags: string[];
  matchScore: number;
  provider: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  createdAt: string;
  updatedAt: string;
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
  }
];

export async function findMatches(query: string): Promise<MatchResultItem[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMatchResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()) ||
        result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      ));
    }, 1000);
  });
}