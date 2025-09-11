
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
}
export interface Job {
export type JobCategory = 
  | 'development' 
  | 'design' 
  | 'marketing' 
  | 'content' 
  | 'data' 
  | 'business' ;
  | 'other';

export interface JobBudget {;=======
  min: number;
  max: number
  currency: string
}


export interface Job {;

export interface Job {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
export interface JobFormData {
}


export interface JobFormData {;

export interface JobFormData {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface JobFormData {
=======
  created_at: string
  updated_at: string
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title: string;
  description: string;
  category: JobCategory;
  skills: string;
  budget_min: number;
  budget_max: number,
  deadline: Date;
}
// Add JobMatch interface to be shared across components;

export interface JobMatch {

export interface ResumeAttachment {;


    category?: string
    company_name?: string
  }
}
export interface ResumeAttachment {

export interface ResumeAttachment {;
=======
=======    category?: string,
    company_name?: string;

  }
}



export interface ResumeAttachment {;


export interface JobApplication {
=======
=======
  summary?: string,
  skills?: string[];
}
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
;

export interface JobApplication {
=======

export interface JobApplication {;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
