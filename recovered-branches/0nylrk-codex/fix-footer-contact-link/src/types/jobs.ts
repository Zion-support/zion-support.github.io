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
  min: number;
  max: number
  currency: string
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Job {
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
=======
  created_at: string,
  updated_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface JobFormData {
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
=======
  budget_min: number;
  budget_max: number,
  deadline: Date;
}
// Add JobMatch interface to be shared across components;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface JobMatch {
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
=======
    category?: string,
    company_name?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
export interface ResumeAttachment {
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
=======
  summary?: string,
  skills?: string[];
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface JobApplication {
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
=======
    bio: string,
    skills: string[];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  resume?: ResumeAttachment;
  // New fields for resume scoring;
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
=======
      matching: string[],
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}