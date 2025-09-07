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
export type JobCategory =
  | "development"
  | "design"
  | "marketing"
  | "content"
  | "data"
  | "business"
  | "other";
=======
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

export type JobCategory = 
  | 'development' 
  | 'design' 
  | 'marketing' 
  | 'content' 
  | 'data' 
  | 'business' ;
  | 'other';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export interface JobBudget {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  min: number;

export type JobCategory =
  | "development"
  | "design"
  | "marketing"
  | "content"
  | "data"
  | "business"
  | "other";

export interface Job {

export interface Job {;

<<<<<<< HEAD
  max: number;
  currency: string;

}
;
missing: string[];
export interface Job {;
  id: string,;
  client_id: string,;
  title: string,,
  description: string,;
  category: JobCategory,;
  skills: string[],;
  budget: JobBudget,;
  deadline: string,;
  status: JobStatus,;
  created_at: string,;}
  updated_at: string;}
}

=======
<<<<<<< HEAD
export interface Job {

export interface Job {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  client_id: string;
  title: string;
  description: string;
  category: JobCategory;
  skills: string[];
  budget: JobBudget;
  deadline: string;
  status: JobStatus;

  created_at: string;
  updated_at: string;

}
<<<<<<< HEAD

export interface JobFormData {;

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title: string;
  description: string;
  category: JobCategory;
  skills: string;
<<<<<<< HEAD
  budgetMin: number;
  budgetMax: number;
  deadline: Date;
}
=======
<<<<<<< HEAD
  budgetMin: number;
  budgetMax: number
  deadline: Date
}
// Add JobMatch interface to be shared across components
export interface JobMatch {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  budget_min: number;
  budget_max: number,
  deadline: Date;
}
// Add JobMatch interface to be shared across components;

<<<<<<< HEAD
export interface JobMatch {};
  budgetMin: number;
  budgetMax: number;
  deadline: Date;
}
// Add JobMatch interface to be shared across components;
export interface JobMatch {;

=======
export interface JobMatch {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  job_id: string;
  talent_id: string;
  match_score: number;
  matched_skills: string[];"
  status?: "new" | "viewed" | "applied" | "declined";
  created_at: string;
  viewed_at?: string;
  job?: Job;
  talent_profile?: {}
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
    category?: string;
=======

<<<<<<< HEAD


export interface ResumeAttachment {;


    category?: string
    company_name?: string
  }
}
export interface ResumeAttachment {

export interface ResumeAttachment {;
=======
    category?: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    company_name?: string;
  };
}

<<<<<<< HEAD
  description: string;
  category: JobCategory;
  skills: string;
  budgetMin: number;
  budgetMax: number;
=======


export interface ResumeAttachment {;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  file_url?: string;
  resume_id?: string;
<<<<<<< HEAD
;

export interface JobApplication {
=======

  summary?: string,
  skills?: string[];
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
;

export interface JobApplication {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export interface JobApplication {;

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  match_score?: number;
  match_summary?: string;
  match_breakdown?: {
    skills_match?: {
      score: number;
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

      matching: string[],
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  deadline: Date;
}

  budget_min: number;
  budget_max: number,
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
    category?: string,;}
    company_name?: string;}
  }
}
;
export interface ResumeAttachment {;

  id: string;
  title: string;"
  type: "ai_resume" | "custom_upload";
  file_url?: string;
  resume_id?: string;
  summary?: string;
  skills?: string[];
}

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
  talent_profile?: {}
    id?: string;
    full_name: string;
    professional_title: string;
    profile_picture_url?: string;
    bio: string;

    skills: string[]
};
  resume?: ResumeAttachment;

  resume?: ResumeAttachment;
  // New fields for resume scoring;

  match_score?: number;
  match_summary?: string;
  match_breakdown?: {}
    skills_match?: {}
      score: number;

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

  id: string,;
  title: string,;
  type: 'ai_resume' | 'custom_upload',;
  file_url?: string,;
  resume_id?: string,;

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
      missing: string[];
    };
    experience_match?: {}
      score: number;
      analysis: string;
    };
    education_match?: {}
      score: number;
      analysis: string;
    };
  };
  match_suggestion?: string;
  scored_at?: string;
  notes?: string; // New field for client notes;
}
;

      missing: string[];
      matching: string[],;}
      missing: string[];}
    },;
    experience_match?: {;
      score: number,;}
      analysis: string;}
    },;
    education_match?: {;
      score: number,;}
      analysis: string;}
    }
  },;
  match_suggestion?: string,;
  scored_at?: string;
  notes?: string,  // New field for client notes;
}
;

}
;
<<<<<<< HEAD
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
