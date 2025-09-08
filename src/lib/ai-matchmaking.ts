export interface MatchingCriteria {
  budget?: number;
  timeline?: string;
  industry?: string;
  projectType?: string;
  requirements?: string[];
  preferences?: Record<string, any>;
}

export interface MatchResult {
  id: string;
  name: string;
  description: string;
  score: number;
  reasons: string[];
  contact?: {
    email?: string;
    phone?: string;
    website?: string;
  };
}

export interface AIMatchmakingService {
  findMatches(criteria: MatchingCriteria): Promise<MatchResult[]>;
  refineMatches(criteria: MatchingCriteria, feedback: Record<string, number>): Promise<MatchResult[]>;
}

// Mock implementation for now
export class MockAIMatchmakingService implements AIMatchmakingService {
  async findMatches(criteria: MatchingCriteria): Promise<MatchResult[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock results
    return [
      {
        id: '1',
        name: 'TechCorp Solutions',
        description: 'Full-stack development company specializing in modern web applications',
        score: 0.92,
        reasons: ['Matches budget range', 'Has relevant experience', 'Available timeline'],
        contact: {
          email: 'contact@techcorp.com',
          website: 'https://techcorp.com'
        }
      },
      {
        id: '2',
        name: 'Digital Innovations LLC',
        description: 'Creative digital agency with focus on user experience',
        score: 0.85,
        reasons: ['Strong portfolio', 'Good client reviews', 'Flexible timeline'],
        contact: {
          email: 'hello@digitalinnovations.com',
          website: 'https://digitalinnovations.com'
        }
      }
    ];
  }

  async refineMatches(criteria: MatchingCriteria, feedback: Record<string, number>): Promise<MatchResult[]> {
    // In a real implementation, this would use feedback to improve matching
    return this.findMatches(criteria);
  }
}

export const aiMatchmakingService = new MockAIMatchmakingService();

// Convenience function for direct use
export const findMatches = (criteria: MatchingCriteria): Promise<MatchResult[]> => {
  return aiMatchmakingService.findMatches(criteria);
};