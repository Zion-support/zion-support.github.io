<<<<<<< HEAD

<<<<<<< HEAD

export type ProjectStatus =
export type ProjectStatus = 
=======
export type ProjectStatus = 


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  | 'offer_sent'
  | 'offer_accepted'
  | 'changes_requested'
  | 'in_progress'
  | 'completed'
  | 'canceled';
=======
export type ProjectStatus =;
  | 'offer_sent';
  | 'offer_accepted';
  | 'changes_requested';
  | 'in_progress';
  | 'completed';
  | 'canceled';
<<<<<<< HEAD
export interface Project {

export interface Project {;
=======



export interface Project {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface Project {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  id: string;
  client_id: string;
  talent_id: string;
  job_id: string;
  start_date: string;
  scope_summary: string;
  payment_terms: 'hourly' | 'fixed' | 'milestone';
  agreement_url?: string;
  status: ProjectStatus;
  created_at: string;
  updated_at: string;
  job?: {
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface ProjectNote {

export interface ProjectNote {;
=======



export interface ProjectNote {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface ProjectNote {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {
<<<<<<< HEAD

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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
}