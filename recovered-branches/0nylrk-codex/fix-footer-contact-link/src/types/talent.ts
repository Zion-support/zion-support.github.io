export interface TalentProfile {
  id: string;
  user_id: string;
  full_name: string;
  // TODO: Implement

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    title: string;
    description: string;
  }[];
}
export interface TalentProfileFilters {
  search?: string;
  skills?: string[];
  availabilities?: string[];
  regions?: string[];
  priceRange?: [number, number];
  experienceRange?: [number, number];
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export interface HireRequest {
  id: string;
  client_id: string;
  talent_id: string;
  project_title: string;
  project_description: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  timeline: {
    startDate: string;
    endDate?: string;
    estimatedDuration?: string;
  };
  status: "pending" | "accepted" | "rejected" | "completed";
  createdAt: string;
}


export interface TalentProfile {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
