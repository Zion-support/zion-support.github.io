
export type ProjectStatus = 
  | 'offer_sent'
  | 'offer_accepted'
  | 'changes_requested'
  | 'in_progress'
  | 'completed'
  | 'canceled',

<<<<<<< HEAD
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
    description: string
  },
  talent_profile?: {
    full_name: string,
    professional_title?: string,
    profile_picture_url?: string
  },
  client_profile?: {
    display_name: string,
    avatar_url?: string
  }
}

export interface ProjectNote {
  id: string,
  project_id: string,
  user_id: string,
  content: string,
  created_at: string,
  created_by_profile?: {
    display_name: string,
    avatar_url?: string
  }
=======
export interface Project {_id: string;
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
    title: string;
    description: string;};
  talent_profile?: {_full_name: string;
    professional_title?: string;
    profile_picture_url?: string;};
  client_profile?: {_display_name: string;
    avatar_url?: string;};
}

export interface ProjectNote {_id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {
    display_name: string;
    avatar_url?: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
