id: string;
  user_id: string;
  full_name: string;
  // TODO: Implement
}
  id: string;,
  user_id: string;
  full_name: string;,
pr-12325
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

  search?: string;
  skills?: string[];

  id: string;
  clientId: string;
  talentId: string;
  projectTitle: string;
  projectDescription: string;
  budget: {
    min: number;

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

  id: string,;
  user_id: string,;
  full_name: string,;
  professional_title: string,;
  profile_picture_url?: string,;
  bio?: string,;
  summary?: string,;
  location?: string,;
  skills?: string[],;
  hourly_rate?: number,;
  years_experience?: number,;
  availability_type?: string,;
  timezone?: string,;
  average_rating?: number,;
  rating_count?: number,;
  is_verified?: boolean,;
  key_projects?: {;
    title: string,;

    title: string,

    description: string;

  }[];
}
export interface TalentProfileFilters {};
  search?: string;

  availabilities?: string[];
  regions?: string[];
  priceRange?: [number, number];
  experienceRange?: [number, number];
}

  id: string;

  client_id: string;
  talent_id: string;,
  project_title: string;

  },;
  timeline: {;
    startDate: string,;
    endDate?: string,;
    estimatedDuration?: string;
  },;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: string;

  }

    startDate: string;
    endDate?: string;
    estimatedDuration?: string;
  };
  status: "pending" | "accepted" | "rejected" | "completed";
  createdAt: string;
}

export interface TalentProfile {;