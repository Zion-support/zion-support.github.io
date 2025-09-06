
<<<<<<< HEAD
<<<<<<< HEAD

=======
export type ProjectStatus = 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

export type ProjectStatus =
=======
export type ProjectStatus = 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  | 'offer_sent'
  | 'offer_accepted'
  | 'changes_requested'
  | 'in_progress'
<<<<<<< HEAD
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

=======



export interface Project {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  | 'completed';
  | 'canceled';
<<<<<<< HEAD
export interface Project {
=======

export interface Project {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

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

  }
}
<<<<<<< HEAD

=======



export interface ProjectNote {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
export interface ProjectNote {
=======

export interface ProjectNote {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {
<<<<<<< HEAD

<<<<<<< HEAD
    avatar_url?: string

=======
    display_name: string

    avatar_url?: string
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
    display_name: string,
    avatar_url?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
}