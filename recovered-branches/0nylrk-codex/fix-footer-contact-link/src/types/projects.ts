
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type ProjectStatus = 


  | 'offer_sent'
  | 'offer_accepted'
  | 'changes_requested'
  | 'in_progress'
<<<<<<< HEAD
<<<<<<< HEAD
=======
  | 'completed'
  | 'canceled';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  | 'completed'
  | 'canceled';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type ProjectStatus =;
  | 'offer_sent';
  | 'offer_accepted';
  | 'changes_requested';
  | 'in_progress';
  | 'completed';
  | 'canceled';



export interface Project {;


<<<<<<< HEAD
<<<<<<< HEAD
  | 'completed';
  | 'canceled';
export interface Project {

export interface Project {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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



export interface ProjectNote {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {
<<<<<<< HEAD
<<<<<<< HEAD
    display_name: string
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
    display_name: string,
    avatar_url?: string;

=======

    display_name: string,
    avatar_url?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}