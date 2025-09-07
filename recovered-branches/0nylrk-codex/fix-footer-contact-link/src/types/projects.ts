export type ProjectStatus =
  | "offer_sent"
  | "offer_accepted"
  | "changes_requested"
  | "in_progress"
  | "completed"
  | "canceled";

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type ProjectStatus = 


  | 'offer_sent'
  | 'offer_accepted'
  | 'changes_requested'
  | 'in_progress'
<<<<<<< HEAD
=======
  | 'completed'
  | 'canceled';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type ProjectStatus =;
  | 'offer_sent';
  | 'offer_accepted';
  | 'changes_requested';
  | 'in_progress';
  | 'completed';
  | 'canceled';

export interface Project {;

<<<<<<< HEAD
export type ProjectStatus = $2;
export interface Project {
  id: string,
  client_id: string,
  talent_id: string,
  job_id: string,
  start_date: string,
  scope_summary: string,
  payment_terms: 'hourly' | 'fixed' | 'milestone',
  agreement_url?: string,
  status: ProjectStatus,
  created_at: string,
  updated_at: string,
  job?: {
    title: string,
    description: string},
  talent_profile?: {
    full_name: string,
    professional_title?: string,
    profile_picture_url?: string
  },
  client_profile?: {
    display_name: string,
=======
export type ProjectStatus =
export type ProjectStatus = 
export type ProjectStatus = 

  | 'offer_sent'
  | 'offer_accepted'
  | 'changes_requested'
  | 'in_progress'
export type ProjectStatus =;
  | 'offer_sent';
  | 'offer_accepted';
  | 'changes_requested';
  | 'in_progress';  | 'completed';
  | 'canceled';
export interface Project {

export interface Project {;

<<<<<<< HEAD
=======

<<<<<<< HEAD
  | 'completed';
  | 'canceled';
export interface Project {

export interface Project {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  client_id: string;
  talent_id: string;
  job_id: string;
  start_date: string;
  scope_summary: string;"
  payment_terms: "hourly" | "fixed" | "milestone";
  agreement_url?: string;
  status: ProjectStatus;
  created_at: string;
  updated_at: string;
<<<<<<< HEAD
=======
  job?: {

<<<<<<< HEAD


export interface ProjectNote {;


    title: string
    description: string
  }
  talent_profile?: {
    full_name: string;
    professional_title?: string
    profile_picture_url?: string
  }
  client_profile?: {
    display_name: string
    avatar_url?: string
  }
}
export interface ProjectNote {

export interface ProjectNote {;
=======
    title: string,
    description: string;
  }
  talent_profile?: {
    full_name: string;
    professional_title?: string,
    profile_picture_url?: string;
  }
  client_profile?: {
    display_name: string,
    avatar_url?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }
}

<<<<<<< HEAD
    display_name: string;
    avatar_url?: string;
  };
=======


export interface ProjectNote {;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {
<<<<<<< HEAD
    display_name: string

>>>>>>> merged-prs-20250907-203621
    avatar_url?: string
export type ProjectStatus =;
  | 'offer_sent';
  | 'offer_accepted';
  | 'changes_requested';
  | 'in_progress';
  | 'completed';
  | 'canceled',;
export interface Project {;
  id: string,;
  client_id: string,;
  talent_id: string,;
  job_id: string,;
  start_date: string,;
  scope_summary: string,;
  payment_terms: 'hourly' | 'fixed' | 'milestone',;
  agreement_url?: string,;
  status: ProjectStatus,;
  created_at: string,;
  updated_at: string,;
  job?: {;
    title: string,;
    description: string;
  },;
  talent_profile?: {;
    full_name: string,;
    professional_title?: string,;
    profile_picture_url?: string;
  },;
  client_profile?: {;
    display_name: string,;
    avatar_url?: string;
  }
}
;
export interface ProjectNote {;
  id: string,;
  project_id: string,;
  user_id: string,;
  content: string,;
  created_at: string,;
  created_by_profile?: {;
    display_name: string;
    avatar_url?: string;
    display_name: string,
    avatar_url?: string;

=======

    display_name: string,
    avatar_url?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}