export interface JobMatch {
  id: string;
  jobId: string;
  talentId: string;
  matchPercentage: number;
  skillsMatch: string[];
  experienceMatch: boolean;
  locationMatch: boolean;
  availabilityMatch: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  skills: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  company: {
    id: string;
    name: string;
    logo?: string;
  };
  postedAt: string;
  deadline?: string;
  status: 'open' | 'closed' | 'paused';
}

export interface JobApplication {
  id: string;
  jobId: string;
  talentId: string;
  coverLetter: string;
  resumeUrl: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: string;
  reviewedAt?: string;
}