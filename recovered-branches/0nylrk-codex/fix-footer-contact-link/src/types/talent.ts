
export interface TalentProfile {_id: string;
  user_id: string;
  full_name: string;
  professional_title: string;
  profile_picture_url?: string;
  bio?: string;
  summary?: string;
  location?: string;
  skills?: string[];
  hourly_rate?: number;
  years_experience?: number;
  availability_type?: string;
  timezone?: string;
  average_rating?: number;
  rating_count?: number;
  is_verified?: boolean;
  key_projects?: {
    title: string;
    description: string;}[];
}

export interface TalentProfileFilters {_search?: string;
  skills?: string[];
  availabilities?: string[];
  regions?: string[];
  priceRange?: [number, _number];
  experienceRange?: [number, _number];}

export interface HireRequest {_id: string;
  clientId: string;
  talentId: string;
  projectTitle: string;
  projectDescription: string;
  budget: {
    min: number;
    max: number;
    currency: string;};
  timeline: {_startDate: string;
    endDate?: string;
    estimatedDuration?: string;};
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: string;
}
