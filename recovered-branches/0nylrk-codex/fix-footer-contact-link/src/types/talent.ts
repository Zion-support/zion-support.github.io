export interface TalentProfile {
  id: string;
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
<<<<<<< HEAD

    title: string

    description: string
  }[]
}
export interface TalentProfileFilters {
  search?: string;
  skills?: string[],
  availabilities?: string[],
  regions?: string[],
  priceRange?: [number, number],
  experienceRange?: [number, number]
=======
    title: string,
    description: string;
  }[];
}
export interface TalentProfileFilters {
  search?: string;
  skills?: string[];
  availabilities?: string[];
  regions?: string[];
  price_range?: [number, number];
  experience_range?: [number, number];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface HireRequest {
  id: string;
  client_id: string;
  talent_id: string;
  project_title: string;
  project_description: string;
  budget: {
    min: number;
<<<<<<< HEAD

    max: number

    currency: string
  }
  timeline: {
    startDate: string;

    endDate?: string
    estimatedDuration?: string
  }
  status: 'pending' | 'accepted' | 'rejected' | 'completed'

  createdAt: string
=======
    max: number,
    currency: string;
  }
  timeline: {
    start_date: string;
    end_date?: string,
    estimated_duration?: string;
  }
  status: 'pending' | 'accepted' | 'rejected' | 'completed',
  created_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}