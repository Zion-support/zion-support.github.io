export interface MatchingCriteria {
  skills: string[];
  location: string;
  budget: number;
  timeline: string;
  projectType: string;
}

export interface TalentProfile {
  id: string;
  name: string;
  skills: string[];
  location: string;
  rate: number;
  availability: string;
  rating: number;
  completedProjects: number;
}

export interface MatchResult {
  talent: TalentProfile;
  score: number;
  reasons: string[];
}

export function matchTalents(criteria: MatchingCriteria, talents: TalentProfile[]): MatchResult[] {
  return talents.map(talent => {
    let score = 0;
    const reasons: string[] = [];

    // Skills matching
    const skillsMatch = criteria.skills.filter(skill => 
      talent.skills.some(talentSkill => 
        talentSkill.toLowerCase().includes(skill.toLowerCase())
      )
    );
    score += (skillsMatch.length / criteria.skills.length) * 40;
    if (skillsMatch.length > 0) {
      reasons.push(`Matches ${skillsMatch.length} of ${criteria.skills.length} required skills`);
    }

    // Location matching
    if (talent.location.toLowerCase().includes(criteria.location.toLowerCase())) {
      score += 20;
      reasons.push('Location match');
    }

    // Budget matching
    if (talent.rate <= criteria.budget) {
      score += 20;
      reasons.push('Within budget');
    }

    // Rating bonus
    score += talent.rating * 2;
    if (talent.rating >= 4.5) {
      reasons.push('Highly rated talent');
    }

    // Experience bonus
    if (talent.completedProjects > 10) {
      score += 10;
      reasons.push('Experienced professional');
    }

    return {
      talent,
      score: Math.min(100, score),
      reasons
    };
  }).sort((a, b) => b.score - a.score);
}

export function generateMatchingReasons(match: MatchResult): string {
  if (match.reasons.length === 0) {
    return 'Basic profile match';
  }
  return match.reasons.join(', ');
}