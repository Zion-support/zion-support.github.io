
export type JobStatus = 'new' | 'in_progress' | 'filled' | 'closed';
;
export type JobCategory =;
  | 'development';
  | 'design';
  | 'marketing';
  | 'content';
  | 'data';
  | 'business';
  | 'other';
;
export interface JobBudget {
<<<<<<< HEAD
  min: number;
  max: number,
  currency: string;

}
export interface Job {
<<<<<<< HEAD

export type JobStatus = 'new' | 'in_progress' | 'filled' | 'closed';
export type JobCategory =
  | 'development'
  | 'design'
  | 'marketing'
  | 'content'
  | 'data'
  | 'business'
  | 'other';
export interface JobBudget {
export type JobStatus = 'new' | 'in_progress' | 'filled' | 'closed';
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export type JobStatus = 'new' | 'in_progress' | 'filled' | 'closed';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export type JobCategory = 
  | 'development' 
  | 'design' 
  | 'marketing' 
  | 'content' 
  | 'data' 
  | 'business' ;
  | 'other';

export interface JobBudget {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  min: number;
  max: number
  currency: string
}


export interface Job {;

<<<<<<< HEAD
<<<<<<< HEAD
export interface Job {

export interface Job {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  client_id: string;
  title: string;
  description: string;
  category: JobCategory;
  skills: string[];
  budget: JobBudget;
  deadline: string;
  status: JobStatus;
<<<<<<< HEAD

  created_at: string,
  updated_at: string;

}
export interface JobFormData {
}


export interface JobFormData {;

<<<<<<< HEAD
  created_at: string
  updated_at: string
}
export interface JobFormData {

export interface JobFormData {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface JobFormData {
=======
  created_at: string
  updated_at: string
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title: string;
  description: string;
  category: JobCategory;
  skills: string;
<<<<<<< HEAD
<<<<<<< HEAD
  budgetMin: number;
  budgetMax: number
  deadline: Date
}
// Add JobMatch interface to be shared across components
export interface JobMatch {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  budget_min: number;
  budget_max: number,
  deadline: Date;
}
// Add JobMatch interface to be shared across components;

export interface JobMatch {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  job_id: string;
  talent_id: string;
  match_score: number;
  matched_skills: string[];
  status?: 'new' | 'viewed' | 'applied' | 'declined';
  created_at: string;
  viewed_at?: string;
  job?: Job;
  talent_profile?: {
    id?: string;
    user_id: string;
    full_name: string;
    professional_title: string;
    profile_picture_url?: string;
    hourly_rate?: number;
    bio: string;
    years_experience: number;
    key_projects: any[];
    skills: string[];
    location?: string;

<<<<<<< HEAD
<<<<<<< HEAD


export interface ResumeAttachment {;


    category?: string
    company_name?: string
  }
}
export interface ResumeAttachment {

export interface ResumeAttachment {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    category?: string,
    company_name?: string;

  }
}



export interface ResumeAttachment {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  file_url?: string;
  resume_id?: string;
<<<<<<< HEAD
<<<<<<< HEAD
;

export interface JobApplication {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  summary?: string,
  skills?: string[];
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
;

export interface JobApplication {
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export interface JobApplication {;

<<<<<<< HEAD
<<<<<<< HEAD
  summary?: string
  skills?: string[]
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
export interface JobApplication {

export interface JobApplication {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  job_id: string;
  talent_id: string;
  resume_id?: string;
  status: ApplicationStatus;
  cover_letter?: string;
  is_shortlisted: boolean;
  created_at: string;
  updated_at?: string;
  viewed_at?: string;
  job?: Job;
  talent_profile?: {
    id?: string;
    full_name: string;
    professional_title: string;
    profile_picture_url?: string;
<<<<<<< HEAD
<<<<<<< HEAD
    bio: string
    skills: string[]
  }
  resume?: ResumeAttachment;
  // New fields for resume scoring
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    bio: string,
    skills: string[];

  }
  resume?: ResumeAttachment;
  // New fields for resume scoring;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  match_score?: number;
  match_summary?: string;
  match_breakdown?: {
    skills_match?: {
      score: number;
<<<<<<< HEAD
<<<<<<< HEAD
      matching: string[],


      matching: string[]
      missing: string[]
    }
    experience_match?: {
      score: number
      analysis: string
    }
    education_match?: {
      score: number
      analysis: string
    }
  }
  match_suggestion?: string;
  scored_at?: string;

  notes?: string,  // New field for client notes
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      matching: string[],
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type JobStatus = 'new' | 'in_progress' | 'filled' | 'closed',;
export type JobCategory =;
  | 'development';
  | 'design';
  | 'marketing';
  | 'content';
  | 'data';
  | 'business';
  | 'other',;
export interface JobBudget {;
  min: number,;
  max: number,;
  currency: string;
}
;
export interface Job {;
  id: string,;
  client_id: string,;
  title: string,;
  description: string,;
  category: JobCategory,;
  skills: string[],;
  budget: JobBudget,;
  deadline: string,;
  status: JobStatus,;
  created_at: string,;
  updated_at: string;
}
;
export interface JobFormData {;
  title: string,;
  description: string,;
  category: JobCategory,;
  skills: string,;
  budgetMin: number,;
  budgetMax: number,;
  deadline: Date;
}
;
// Add JobMatch interface to be shared across components;
export interface JobMatch {;
  id: string,;
  job_id: string,;
  talent_id: string,;
  match_score: number,;
  matched_skills: string[],;
  status?: 'new' | 'viewed' | 'applied' | 'declined',;
  created_at: string,;
  viewed_at?: string,;
  job?: Job,;
  talent_profile?: {;
    id?: string,;
    user_id: string,;
    full_name: string,;
    professional_title: string,;
    profile_picture_url?: string,;
    hourly_rate?: number,;
    bio: string,;
    years_experience: number,;
    key_projects: any[],;
    skills: string[],;
    location?: string,;
    category?: string,;
    company_name?: string;
  }
}
;
export interface ResumeAttachment {;
  id: string,;
  title: string,;
  type: 'ai_resume' | 'custom_upload',;
  file_url?: string,;
  resume_id?: string,;
  summary?: string,;
  skills?: string[];
}
;
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected',;
export interface JobApplication {;
  id: string,;
  job_id: string,;
  talent_id: string,;
  resume_id?: string,;
  status: ApplicationStatus,;
  cover_letter?: string,;
  is_shortlisted: boolean,;
  created_at: string,;
  updated_at?: string,;
  viewed_at?: string,;
  job?: Job,;
  talent_profile?: {;
    id?: string,;
    full_name: string,;
    professional_title: string,;
    profile_picture_url?: string,;
    bio: string,;
    skills: string[];
  },;
  resume?: ResumeAttachment,;
  // New fields for resume scoring;
  match_score?: number,;
  match_summary?: string,;
  match_breakdown?: {;
    skills_match?: {;
      score: number,;
      matching: string[],;

<<<<<<< HEAD
<<<<<<< HEAD


}
;
      missing: string[];
    },;
    experience_match?: {;
      score: number,;
      analysis: string;
    },;
    education_match?: {;
      score: number,;
      analysis: string;
    }
  },;
  match_suggestion?: string,;
  scored_at?: string;
  notes?: string,  // New field for client notes;
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      missing: string[];
    }
    experience_match?: {
      score: number,
      analysis: string;
    }
    education_match?: {
      score: number,
      analysis: string;
    }
  }
  match_suggestion?: string;
  scored_at?: string;
  notes?: string,  // New field for client notes;




}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
