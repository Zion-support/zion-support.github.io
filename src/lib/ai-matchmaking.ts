export interface MatchmakingCriteria {
  skills: string[]
  experience: string
  location?: string
  budget?: {
    min: number
    max: number
  }
  availability: string
  projectType: string
}

export interface MatchmakingResult {
  id: string
  name: string
  title: string
  skills: string[]
  experience: string
  location: string
  rating: number
  hourlyRate: number
  availability: string
  matchScore: number
  description: string
  portfolio: string[]
}

export function calculateMatchScore(criteria: MatchmakingCriteria, candidate: Partial<MatchmakingResult>): number {
  let score = 0
  let totalWeight = 0

  // Skills matching (40% weight)
  if (candidate.skills && criteria.skills) {
    const matchingSkills = candidate.skills.filter(skill => 
      criteria.skills.some(criteriaSkill => 
        criteriaSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(criteriaSkill.toLowerCase())
      )
    ).length
    const skillsScore = (matchingSkills / criteria.skills.length) * 100
    score += skillsScore * 0.4
    totalWeight += 0.4
  }

  // Experience matching (25% weight)
  if (candidate.experience && criteria.experience) {
    const experienceScore = candidate.experience === criteria.experience ? 100 : 75
    score += experienceScore * 0.25
    totalWeight += 0.25
  }

  // Location matching (15% weight)
  if (candidate.location && criteria.location) {
    const locationScore = candidate.location.toLowerCase() === criteria.location.toLowerCase() ? 100 : 50
    score += locationScore * 0.15
    totalWeight += 0.15
  }

  // Budget matching (10% weight)
  if (candidate.hourlyRate && criteria.budget) {
    const rate = candidate.hourlyRate
    const { min, max } = criteria.budget
    let budgetScore = 0
    
    if (rate >= min && rate <= max) {
      budgetScore = 100
    } else if (rate < min) {
      budgetScore = 80
    } else {
      budgetScore = Math.max(0, 100 - ((rate - max) / max) * 50)
    }
    
    score += budgetScore * 0.1
    totalWeight += 0.1
  }

  // Availability matching (10% weight)
  if (candidate.availability && criteria.availability) {
    const availabilityScore = candidate.availability === criteria.availability ? 100 : 60
    score += availabilityScore * 0.1
    totalWeight += 0.1
  }

  return totalWeight > 0 ? Math.round(score / totalWeight) : 0
}

export function generateMatchmakingResults(criteria: MatchmakingCriteria): MatchmakingResult[] {
  // Mock data - in a real app, this would come from an API
  const mockCandidates: Partial<MatchmakingResult>[] = [
    {
      id: '1',
      name: 'John Smith',
      title: 'Senior Full Stack Developer',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      experience: '5+ years',
      location: 'New York',
      rating: 4.8,
      hourlyRate: 75,
      availability: 'Immediate',
      description: 'Experienced developer with expertise in modern web technologies.',
      portfolio: ['https://example.com/portfolio1', 'https://example.com/portfolio2']
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      title: 'Frontend Developer',
      skills: ['React', 'Vue.js', 'JavaScript', 'CSS'],
      experience: '3+ years',
      location: 'San Francisco',
      rating: 4.6,
      hourlyRate: 60,
      availability: '1 week',
      description: 'Creative frontend developer with a passion for user experience.',
      portfolio: ['https://example.com/portfolio3']
    },
    {
      id: '3',
      name: 'Mike Chen',
      title: 'Backend Developer',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      experience: '7+ years',
      location: 'Remote',
      rating: 4.9,
      hourlyRate: 85,
      availability: 'Immediate',
      description: 'Backend specialist with strong database and API development skills.',
      portfolio: ['https://example.com/portfolio4', 'https://example.com/portfolio5']
    }
  ]

  return mockCandidates
    .map(candidate => ({
      ...candidate,
      matchScore: calculateMatchScore(criteria, candidate)
    }))
    .filter(candidate => candidate.matchScore! > 30) // Filter out low matches
    .sort((a, b) => b.matchScore! - a.matchScore!) as MatchmakingResult[]
}

// Alias for compatibility
export const findMatches = generateMatchmakingResults
export type MatchResult = MatchmakingResult