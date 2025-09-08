export interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  matchScore: number;
  skills: string[];
  experience: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  remote: boolean;
  description: string;
  requirements: string[];
  benefits: string[];
  postedAt: string;
  deadline?: string;
}

export interface TalentProfile {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: number;
  skills: string[];
  availability: 'available' | 'busy' | 'unavailable';
  hourlyRate?: {
    min: number;
    max: number;
    currency: string;
  };
  bio: string;
  portfolio: string[];
  certifications: string[];
  languages: string[];
  remote: boolean;
  updatedAt: string;
}

export interface MatchCriteria {
  skills: string[];
  experience: number;
  location?: string;
  remote?: boolean;
  salaryRange?: {
    min: number;
    max: number;
    currency: string;
  };
  jobType?: string[];
  availability?: string;
}

export class AIMatchmakingService {
  private static instance: AIMatchmakingService;
  
  private constructor() {}
  
  public static getInstance(): AIMatchmakingService {
    if (!AIMatchmakingService.instance) {
      AIMatchmakingService.instance = new AIMatchmakingService();
    }
    return AIMatchmakingService.instance;
  }

  /**
   * Calculate match score between a job and talent profile
   */
  public calculateMatchScore(job: JobMatch, talent: TalentProfile): number {
    let score = 0;
    let totalWeight = 0;

    // Skills matching (40% weight)
    const skillsWeight = 0.4;
    const skillsMatch = this.calculateSkillsMatch(job.skills, talent.skills);
    score += skillsMatch * skillsWeight;
    totalWeight += skillsWeight;

    // Experience matching (25% weight)
    const experienceWeight = 0.25;
    const experienceMatch = this.calculateExperienceMatch(job.experience, talent.experience);
    score += experienceMatch * experienceWeight;
    totalWeight += experienceWeight;

    // Location matching (15% weight)
    const locationWeight = 0.15;
    const locationMatch = this.calculateLocationMatch(job.location, talent.location, job.remote, talent.remote);
    score += locationMatch * locationWeight;
    totalWeight += locationWeight;

    // Salary matching (10% weight)
    const salaryWeight = 0.1;
    const salaryMatch = this.calculateSalaryMatch(job.salary, talent.hourlyRate);
    score += salaryMatch * salaryWeight;
    totalWeight += salaryWeight;

    // Availability matching (10% weight)
    const availabilityWeight = 0.1;
    const availabilityMatch = this.calculateAvailabilityMatch(talent.availability);
    score += availabilityMatch * availabilityWeight;
    totalWeight += availabilityWeight;

    return Math.round((score / totalWeight) * 100);
  }

  /**
   * Find job matches for a talent profile
   */
  public findJobMatches(talent: TalentProfile, jobs: JobMatch[], limit: number = 10): JobMatch[] {
    const matches = jobs.map(job => ({
      ...job,
      matchScore: this.calculateMatchScore(job, talent)
    }));

    return matches
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, limit)
      .filter(match => match.matchScore > 30); // Only return matches above 30%
  }

  /**
   * Find talent matches for a job
   */
  public findTalentMatches(job: JobMatch, talents: TalentProfile[], limit: number = 10): TalentProfile[] {
    const matches = talents.map(talent => ({
      ...talent,
      matchScore: this.calculateMatchScore(job, talent)
    }));

    return matches
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, limit)
      .filter(match => match.matchScore > 30); // Only return matches above 30%
  }

  /**
   * Calculate skills match percentage
   */
  private calculateSkillsMatch(jobSkills: string[], talentSkills: string[]): number {
    if (jobSkills.length === 0) return 1;
    
    const normalizedJobSkills = jobSkills.map(skill => skill.toLowerCase().trim());
    const normalizedTalentSkills = talentSkills.map(skill => skill.toLowerCase().trim());
    
    const matchingSkills = normalizedJobSkills.filter(skill => 
      normalizedTalentSkills.some(talentSkill => 
        talentSkill.includes(skill) || skill.includes(talentSkill)
      )
    );

    return matchingSkills.length / normalizedJobSkills.length;
  }

  /**
   * Calculate experience match percentage
   */
  private calculateExperienceMatch(jobExperience: string, talentExperience: number): number {
    const experienceMap: { [key: string]: { min: number; max: number } } = {
      'entry': { min: 0, max: 2 },
      'junior': { min: 1, max: 3 },
      'mid': { min: 2, max: 5 },
      'senior': { min: 4, max: 8 },
      'lead': { min: 6, max: 12 },
      'expert': { min: 8, max: 15 }
    };

    const jobExpRange = experienceMap[jobExperience.toLowerCase()];
    if (!jobExpRange) return 0.5; // Default if unknown

    if (talentExperience >= jobExpRange.min && talentExperience <= jobExpRange.max) {
      return 1;
    } else if (talentExperience < jobExpRange.min) {
      return Math.max(0, talentExperience / jobExpRange.min);
    } else {
      return Math.max(0, 1 - (talentExperience - jobExpRange.max) / 5);
    }
  }

  /**
   * Calculate location match percentage
   */
  private calculateLocationMatch(jobLocation: string, talentLocation: string, jobRemote: boolean, talentRemote: boolean): number {
    if (jobRemote && talentRemote) return 1;
    if (!jobRemote && !talentRemote) {
      return jobLocation.toLowerCase() === talentLocation.toLowerCase() ? 1 : 0;
    }
    return 0.5; // Partial match for mixed remote/onsite
  }

  /**
   * Calculate salary match percentage
   */
  private calculateSalaryMatch(jobSalary: JobMatch['salary'], talentRate?: TalentProfile['hourlyRate']): number {
    if (!talentRate) return 0.5; // Neutral if no rate specified

    const jobHourlyMin = jobSalary.min / (40 * 52); // Convert annual to hourly
    const jobHourlyMax = jobSalary.max / (40 * 52);

    if (talentRate.min >= jobHourlyMin && talentRate.max <= jobHourlyMax) {
      return 1;
    } else if (talentRate.min > jobHourlyMax) {
      return Math.max(0, 1 - (talentRate.min - jobHourlyMax) / jobHourlyMax);
    } else if (talentRate.max < jobHourlyMin) {
      return Math.max(0, talentRate.max / jobHourlyMin);
    }

    return 0.8; // Good overlap
  }

  /**
   * Calculate availability match percentage
   */
  private calculateAvailabilityMatch(availability: TalentProfile['availability']): number {
    const availabilityScores = {
      'available': 1,
      'busy': 0.3,
      'unavailable': 0
    };

    return availabilityScores[availability] || 0.5;
  }

  /**
   * Generate match insights
   */
  public generateMatchInsights(job: JobMatch, talent: TalentProfile): string[] {
    const insights: string[] = [];
    const matchScore = this.calculateMatchScore(job, talent);

    if (matchScore >= 80) {
      insights.push("Excellent match! Strong alignment across all criteria.");
    } else if (matchScore >= 60) {
      insights.push("Good match with some areas for improvement.");
    } else if (matchScore >= 40) {
      insights.push("Moderate match. Consider skill development opportunities.");
    } else {
      insights.push("Limited match. May require significant skill development.");
    }

    // Skills insights
    const skillsMatch = this.calculateSkillsMatch(job.skills, talent.skills);
    if (skillsMatch >= 0.8) {
      insights.push("Strong skills alignment.");
    } else if (skillsMatch >= 0.5) {
      insights.push("Good skills overlap with room for growth.");
    } else {
      insights.push("Consider developing additional skills for better alignment.");
    }

    // Experience insights
    const experienceMatch = this.calculateExperienceMatch(job.experience, talent.experience);
    if (experienceMatch >= 0.8) {
      insights.push("Experience level is well-suited for this role.");
    } else if (experienceMatch < 0.5) {
      insights.push("Consider gaining more experience in this field.");
    }

    return insights;
  }
}

// Export singleton instance
export const aiMatchmaking = AIMatchmakingService.getInstance();

// Export convenience functions
export const findMatches = (criteria: MatchCriteria, items: (JobMatch | TalentProfile)[]): (JobMatch | TalentProfile)[] => {
  if (items.length === 0) return [];
  
  // Check if items are JobMatch or TalentProfile based on first item
  const isJobMatch = 'title' in items[0];
  
  if (isJobMatch) {
    // Find job matches for talent criteria
    const talent: TalentProfile = {
      id: 'temp',
      name: 'Temporary',
      title: 'Temporary',
      location: criteria.location || '',
      experience: criteria.experience,
      skills: criteria.skills,
      availability: criteria.availability || 'available',
      bio: '',
      portfolio: [],
      certifications: [],
      languages: [],
      remote: criteria.remote || false,
      updatedAt: new Date().toISOString(),
    };
    
    return aiMatchmaking.findJobMatches(talent, items as JobMatch[]);
  } else {
    // Find talent matches for job criteria
    const job: JobMatch = {
      id: 'temp',
      title: 'Temporary Job',
      company: 'Temporary Company',
      location: criteria.location || '',
      salary: criteria.salaryRange || { min: 0, max: 100000, currency: 'USD' },
      matchScore: 0,
      skills: criteria.skills,
      experience: criteria.experience.toString(),
      type: 'full-time',
      remote: criteria.remote || false,
      description: '',
      requirements: [],
      benefits: [],
      postedAt: new Date().toISOString(),
    };
    
    return aiMatchmaking.findTalentMatches(job, items as TalentProfile[]);
  }
};

export interface MatchResult {
  item: JobMatch | TalentProfile;
  matchScore: number;
  insights: string[];
}