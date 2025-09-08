export type JobStatus = "new" | "in_progress" | "filled" | "closed";

export type JobCategory =
  | "development"
  | "design"
  | "marketing"
  | "content"
  | "data"
  | "business"
  | "other";

export interface JobBudget {;



=======

export type JobCategory =
  | "development"
  | "design"
  | "marketing"
  | "content"
  | "data"
  | "business"
  | "other";


export interface JobBudget {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======

  max: number;
  currency: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba



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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


export interface JobFormData {;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  title: string;
  description: string;
  category: JobCategory;
  skills: string;
  budgetMin: number;
  budgetMax: number;
  deadline: Date;
}

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

export interface JobMatch {};
  budgetMin: number;
  budgetMax: number;
  deadline: Date;
}
// Add JobMatch interface to be shared across components;
export interface JobMatch {;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export interface ResumeAttachment {;


<<<<<<< HEAD
<<<<<<< HEAD
=======
    category?: string
    company_name?: string
  }
}
export interface ResumeAttachment {

export interface ResumeAttachment {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface ResumeAttachment {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  title: string;
  type: "ai_resume" | "custom_upload";
  file_url?: string;
  resume_id?: string;
  summary?: string;
  skills?: string[];
}

export type ApplicationStatus =
  | "new"
  | "viewed"
  | "shortlisted"
  | "interview"
  | "hired"
  | "rejected";

export interface JobApplication {
=======
=======
;

export interface JobApplication {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export interface JobApplication {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export interface JobApplication {;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  summary?: string
  skills?: string[]
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
export interface JobApplication {

export interface JobApplication {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface JobApplication {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    bio: string;
    skills: string[];

  }
  resume?: ResumeAttachment;
  // New fields for resume scoring;

  match_score?: number;
  match_summary?: string;
  match_breakdown?: {
    skills_match?: {
      score: number;
      matching: string[];
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
  notes?: string; // New field for client notes
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



=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
