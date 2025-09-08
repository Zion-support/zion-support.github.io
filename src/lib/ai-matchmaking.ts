export interface MatchResultItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price?: number;
  image?: string;
  skills?: string[];
  rating?: number;
  location?: string;
  availability?: string;
}

export interface MatchResult {
  item: MatchResultItem;
  score: number;
  reason: string;
}

export async function findMatches(
  query: string,
  serviceType: string,
  limit: number = 5
): Promise<MatchResult[]> {
  // Simulate AI matching
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const mockMatches: MatchResult[] = [
    {
      item: {
        id: '1',
        title: 'Senior React Developer',
        description: 'Experienced React developer with 5+ years of experience',
        category: 'Talent',
        price: 75,
        skills: ['React', 'TypeScript', 'Node.js'],
        rating: 4.8,
        location: 'Remote',
        availability: 'Available'
      },
      score: 0.95,
      reason: 'High match for React development skills'
    },
    {
      item: {
        id: '2',
        title: 'Full Stack Development Service',
        description: 'Complete web application development service',
        category: 'Service',
        price: 5000,
        skills: ['React', 'Node.js', 'MongoDB'],
        rating: 4.9,
        location: 'Global',
        availability: 'Available'
      },
      score: 0.88,
      reason: 'Matches your development needs'
    }
  ];
  
  return mockMatches.slice(0, limit);
}