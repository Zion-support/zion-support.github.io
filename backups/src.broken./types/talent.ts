export interface TalentProfile {
  id: string;
  name: string;
  fullName?: string;
  full_name?: string;
  title: string;
  professionalTitle?: string;
  bio: string;
  skills: string[];
  experience: number;
  location: string;
  hourlyRate: number;
  availability: 'available' | 'busy' | 'unavailable';
  profilePicture?: string;
  portfolio?: string[];
  certifications?: string[];
  languages?: string[];
  rating?: number;
  reviews?: number;
  completedProjects?: number;
  responseTime?: string;
  verified?: boolean;
  key_projects?: Array<{
    id: string;
    title: string;
    description: string;
    url?: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface TalentFilter {
  skills?: string[];
  location?: string;
  minRate?: number;
  maxRate?: number;
  availability?: string;
  experience?: number;
  rating?: number;
}

export interface TalentProfileWithSocial extends TalentProfile {
  social?: Record<string, string>;
}

export interface TalentSearchResult {
  profiles: TalentProfile[];
  total: number;
  page: number;
  limit: number;
}