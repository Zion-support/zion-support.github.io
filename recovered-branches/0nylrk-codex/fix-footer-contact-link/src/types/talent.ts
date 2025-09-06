<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/talent.ts

<<<<<<< HEAD

========
<<<<<<< HEAD
export interface TalentProfile {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/talent.ts
=======

<<<<<<< HEAD
<<<<<<< HEAD
export interface TalentProfile {
=======
export interface TalentProfile {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/talent.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

    title: string

    description: string
  }[]
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
export interface TalentProfileFilters {
=======

export interface TalentProfileFilters {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  search?: string;
  skills?: string[],
  availabilities?: string[],
  regions?: string[],
  priceRange?: [number, number],
  experienceRange?: [number, number]
}
<<<<<<< HEAD

========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/talent.ts
=======
<<<<<<< HEAD
export interface HireRequest {
=======

export interface HireRequest {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  clientId: string;
  talentId: string;
  projectTitle: string;
  projectDescription: string;
  budget: {
    min: number;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/talent.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
}
=======
export interface TalentProfile {;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
    title: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
  id: string;
  client_id: string;
  talent_id: string;
  project_title: string;
  project_description: string;
  budget: {
    min: number;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/talent.ts
    max: number,
    currency: string;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  timeline: {;
    startDate: string,;
    endDate?: string,;
    estimatedDuration?: string;
  },;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: string;
<<<<<<< HEAD

}
;

=======
  }
  timeline: {
    start_date: string;
    end_date?: string,
    estimated_duration?: string;
  }
  status: 'pending' | 'accepted' | 'rejected' | 'completed',
  created_at: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/talent.ts

}
=======


export interface TalentProfile {;

}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/talent.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
