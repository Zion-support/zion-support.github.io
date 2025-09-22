<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
export interface TalentProfile {
export interface TalentProfile {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface TalentProfile {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export interface TalentProfile {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface TalentProfile {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    title: string,
=======
=======
    title: string,    description: string;
  }[];
}
export interface TalentProfileFilters {
  search?: string;
  skills?: string[];}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
    title: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    description: string;
  }[];
}
<<<<<<< HEAD

=======
export interface TalentProfileFilters {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  search?: string;
  skills?: string[];
<<<<<<< HEAD
<<<<<<< HEAD
  availabilities?: string[];
  regions?: string[];
  price_range?: [number, number];
  experience_range?: [number, number];
}
<<<<<<< HEAD
=======
export interface HireRequest {
export interface HireRequest {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    title: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  skills?: string[];
  hourly_rate?: number;
  years_experience?: number;
  availability_type?: string;
  timezone?: string;
  average_rating?: number;
  rating_count?: number;
  is_verified?: boolean;
  key_projects?: {}
    title: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    description: string;
=======
    title: string,    description: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    title: string,    description: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }[];
}
export interface TalentProfileFilters {};
  search?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  skills?: string[];
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  availabilities?: string[];
  regions?: string[];
  priceRange?: [number, number];
  experienceRange?: [number, number];
}
=======
    title: string;,
  description: string;
  }[];
export interface TalentProfileFilters {
  // TODO: Implement
  search?: string;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD


}
export interface HireRequest {};
=======
}
export interface HireRequest {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  client_id: string;
  talent_id: string;,
  project_title: string;
<<<<<<< HEAD
  project_description: string;
<<<<<<< HEAD
  budget: {}
    min: number;
    max: number;
    currency: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },;
  timeline: {;
    startDate: string,;
    endDate?: string,;
    estimatedDuration?: string;
  },;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
=======
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  timeline: {
=======
  timeline: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  timeline: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    startDate: string;
    endDate?: string;
    estimatedDuration?: string;
  };
  status: "pending" | "accepted" | "rejected" | "completed";
  createdAt: string;
}


export interface TalentProfile {;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  skills?: string[];}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  skills?: string[];}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  project_description: string;,
  budget: {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
