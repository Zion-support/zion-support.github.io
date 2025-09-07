<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
id: string;
  user_id: string;
  full_name: string;
  // TODO: Implement
<<<<<<< HEAD
}
  id: string;,
  user_id: string;
  full_name: string;,
pr-12325
=======
=======

<<<<<<< HEAD
export interface TalentProfile {
<<<<<<< HEAD
  id: string,
  user_id: string,
  full_name: string,
  professional_title: string,
  profile_picture_url?: string,
  bio?: string,
  summary?: string,
  location?: string,
  skills?: string[],
  hourly_rate?: number,
  years_experience?: number,
  availability_type?: string,
  timezone?: string,
  average_rating?: number,
  rating_count?: number,
  is_verified?: boolean,
=======
export interface TalentProfile {;
  id: string;
  user_id: string;
  full_name: string;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  professional_title: string;
  profile_picture_url?: string;
  bio?: string;
  summary?: string;
  location?: string;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  skills?: string[];
  hourly_rate?: number;
  years_experience?: number;
  availability_type?: string;
  timezone?: string;
  average_rating?: number;
  rating_count?: number;
  is_verified?: boolean;
<<<<<<< HEAD
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
=======
>>>>>>> merged-prs-20250907-203621
  key_projects?: {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD

export interface TalentProfile {;
=======
export interface TalentProfileFilters {

export interface TalentProfileFilters {;
  search?: string;
  skills?: string[],
  availabilities?: string[],
  regions?: string[],
  priceRange?: [number, number],
  experienceRange?: [number, number]
}
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
}
export interface HireRequest {
export interface HireRequest {

export interface HireRequest {;
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
}
export interface TalentProfile {;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    title: string,
    description: string;
  }[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
    max: number

    currency: string
=======
    max: number,
    currency: string;
<<<<<<< HEAD
    description: string;
  }[];
}
;
export interface TalentProfileFilters {;
  search?: string,;
  skills?: string[],;
  availabilities?: string[],;
  regions?: string[],;
  priceRange?: [number, number],;
  experienceRange?: [number, number];
}
;
export interface HireRequest {;
  id: string,;
  clientId: string,;
  talentId: string,;
  projectTitle: string,;
  projectDescription: string,;
  budget: {;
    min: number,;
    max: number,;
    currency: string;
  },;
  timeline: {;
    startDate: string,;
    endDate?: string,;
    estimatedDuration?: string;
  },;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  timeline: {
    startDate: string;

    endDate?: string
    estimatedDuration?: string
  }
  status: 'pending' | 'accepted' | 'rejected' | 'completed'

<<<<<<< HEAD
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
=======

export interface TalentProfile {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  availabilities?: string[];
  regions?: string[];
  priceRange?: [number, number];
  experienceRange?: [number, number];
}
<<<<<<< HEAD

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
=======
;
<<<<<<< HEAD
}

export interface TalentProfile {;
  id:string,;
  user_id:string,;
  full_name:string,;
  professional_title:string,;
  profile_picture_url?:string,;
  bio?:string,;
  summary?:string,;
  location?:string,;
  skills?:string[],;
  hourly_rate?:number,;
  years_experience?:number,;
  availability_type?:string,;
  timezone?:string,;
  average_rating?:number,;
  rating_count?:number,;
  is_verified?:boolean,;
  key_projects?:{;
    title:string,;
    description:string;
  }[],;
}
;
export interface TalentProfileFilters {;
  search?:string,;
  skills?:string[],;
  availabilities?:string[],;
  regions?:string[],;
  priceRange?:[number, number],;
  experienceRange?:[number, number],;
}
;
export interface HireRequest {;
  id:string,;
  clientId:string,;
  talentId:string,;
  projectTitle:string,;
  projectDescription:string,;
  budget:{;
    min:number,;
    max:number,;
    currency:string;
  },;
  timeline:{;
    startDate:string,;
    endDate?:string,;
    estimatedDuration?:string;
  },;
  status:'pending' | 'accepted' | 'rejected' | 'completed',;
  createdAt:string;
} 
}
}
;
}
;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
