<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
  min: number;
  max: number,
  currency: string;

}
export interface Job {
=======
<<<<<<< HEAD
  min: number;
  max: number,
  currency: string;

}
export interface Job {
<<<<<<< HEAD
=======
=======

export type JobStatus = 'new' | 'in_progress' | 'filled' | 'closed';
<<<<<<< HEAD
=======
export type JobStatus = "new" | "in_progress" | "filled" | "closed";

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export type JobCategory =
  | "development"
  | "design"
  | "marketing"
  | "content"
  | "data"
  | "business"
  | "other";

export interface JobBudget {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export type JobCategory ="
  | "development""
  | "design""
  | "marketing""
  | "content""
  | "data""
  | "business"";
  | "other";

export interface JobBudget {;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



  min: number;
=======
export type JobStatus = 'new' | 'in_progress' | 'filled' | 'closed';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export type JobCategory = 
  | 'development' 
  | 'design' 
  | 'marketing' 
  | 'content' 
  | 'data' 
  | 'business' ;
  | 'other';

export interface JobBudget {;  min: number;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  max: number;
  currency: string;
}
<<<<<<< HEAD
=======

export interface Job {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface Job {

export interface Job {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

export interface Job {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
export interface Job {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
export interface Job {export interface Job {

export interface Job {;
}
export interface Job {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  max: number;
  currency: string;
}

export interface Job {;

}
export interface Job {export interface Job {

export interface Job {;
}
export interface Job {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}
export interface Job {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  client_id: string;
  title: string,
  description: string;
  category: JobCategory;
  skills: string[];
  budget: JobBudget;
  deadline: string;
  status: JobStatus;
<<<<<<< HEAD
<<<<<<< HEAD

  created_at: string,
  updated_at: string;

}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface JobFormData {

export interface JobFormData {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface JobFormData {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  created_at: string;
  updated_at: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

export interface JobFormData {;

<<<<<<< HEAD
  created_at: string
  updated_at: string
}
export interface JobFormData {

export interface JobFormData {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface JobFormData {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  created_at: string;
  updated_at: string;
}
export interface JobFormData {};
export interface JobFormData {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title: string;
  description: string;
  category: JobCategory;
  skills: string;
  budgetMin: number;
  budgetMax: number;
  deadline: Date;
}

  budget_min: number;
  budget_max: number,
  deadline: Date;
}
// Add JobMatch interface to be shared across components;

export interface JobMatch {};
  budgetMin: number;
  budgetMax: number;
  deadline: Date;
}
// Add JobMatch interface to be shared across components;
export interface JobMatch {;



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
    category?: string;
    company_name?: string;
  };
}
<<<<<<< HEAD
export interface ResumeAttachment {

export interface ResumeAttachment {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======







export interface ResumeAttachment {;



<<<<<<< HEAD
export interface ResumeAttachment {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface ResumeAttachment {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  title: string,
  description: string;
  category: JobCategory;
  skills: string;

export interface ResumeAttachment {;

export interface ResumeAttachment {export interface ResumeAttachment {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  title: string,
  description: string;
  category: JobCategory;
  skills: string;

export interface ResumeAttachment {;

export interface ResumeAttachment {export interface ResumeAttachment {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export interface ResumeAttachment {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  title: string;"
  type: "ai_resume" | "custom_upload";
  file_url?: string;
  resume_id?: string;
  summary?: string;
  skills?: string[];
}
<<<<<<< HEAD
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;
=======

export type ApplicationStatus ="
  | "new""
  | "viewed""
  | "shortlisted""
  | "interview""
  | "hired"";
  | "rejected";
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
export interface JobApplication {
export interface JobApplication {

export interface JobApplication {;

export interface JobApplication {  summary?: string
  skills?: string[]
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
export interface JobApplication {

export interface JobApplication {;
export interface JobApplication {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface JobApplication {};
;

export interface JobApplication {}
export interface JobApplication {};
export interface JobApplication {;



export interface JobApplication {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
    skills: string[];
  };
  resume?: ResumeAttachment;
  // New fields for resume scoring;

    bio: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    skills: string[]
};
  resume?: ResumeAttachment;
<<<<<<< HEAD
  // New fields for resume scoring;  }
  resume?: ResumeAttachment;
  // New fields for resume scoring;
=======
  // New fields for resume scoring;
  }
  resume?: ResumeAttachment;
  // New fields for resume scoring;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  match_score?: number;
  match_summary?: string;
  match_breakdown?: {}
    skills_match?: {}
      score: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  notes?: string,  // New field for client notes
=======
<<<<<<< HEAD
<<<<<<< HEAD

      matching: string[],
=======


=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
}
;
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
  created_at: string,;
  updated_at: string;
}
;
export interface JobFormData {;
  title: string,,
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
<<<<<<< HEAD
=======
      matching: string[];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
}
;
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
  created_at: string,;
  updated_at: string;
}
;
export interface JobFormData {;
  title: string,,
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
