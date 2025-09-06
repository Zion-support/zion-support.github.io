
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export type JobStatus = 'new' | 'in_progress' | 'filled' | 'closed';
=======
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
  min: number;
  max: number,
  currency: string;

}
export interface Job {
=======
>>>>>>> main

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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
  min: number;
  max: number
  currency: string
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface Job {
=======

export interface Job {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


export interface Job {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
  created_at: string
  updated_at: string
}
<<<<<<< HEAD
export interface JobFormData {
=======

export interface JobFormData {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  created_at: string,
  updated_at: string;

}
export interface JobFormData {
=======
}


export interface JobFormData {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  title: string;
  description: string;
  category: JobCategory;
  skills: string;
<<<<<<< HEAD
  budgetMin: number;
  budgetMax: number
  deadline: Date
}
// Add JobMatch interface to be shared across components
export interface JobMatch {;
=======

  budget_min: number;
  budget_max: number,
  deadline: Date;
}
// Add JobMatch interface to be shared across components;

export interface JobMatch {
>>>>>>> main
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
    category?: string
    company_name?: string
  }
}
<<<<<<< HEAD
export interface ResumeAttachment {
=======

export interface ResumeAttachment {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    category?: string,
    company_name?: string;

  }
}



export interface ResumeAttachment {;


>>>>>>> main
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  file_url?: string;
  resume_id?: string;
<<<<<<< HEAD
  summary?: string
  skills?: string[]
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
<<<<<<< HEAD
export interface JobApplication {
=======

export interface JobApplication {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  summary?: string,
  skills?: string[];
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
;

export interface JobApplication {
=======


export interface JobApplication {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
    bio: string
    skills: string[]
  }
  resume?: ResumeAttachment;
  // New fields for resume scoring
=======

    bio: string,
    skills: string[];

  }
  resume?: ResumeAttachment;
  // New fields for resume scoring;
>>>>>>> main
  match_score?: number;
  match_summary?: string;
  match_breakdown?: {
    skills_match?: {
      score: number;
<<<<<<< HEAD
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
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

      matching: string[],
=======


>>>>>>> main
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
