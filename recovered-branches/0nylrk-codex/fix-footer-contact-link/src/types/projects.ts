<<<<<<< HEAD
export type ProjectStatus =
  | "offer_sent"
  | "offer_accepted"
  | "changes_requested"
  | "in_progress"
  | "completed"
  | "canceled";

export interface Project {
  id: string;
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

export interface Project {  id: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  client_id: string;
  talent_id: string;
  job_id: string;
  start_date: string;
  scope_summary: string;
  payment_terms: "hourly" | "fixed" | "milestone";
  agreement_url?: string;
  status: ProjectStatus;
  created_at: string;
  updated_at: string;
  job?: {
<<<<<<< HEAD
    title: string;
    description: string;
  };
  talent_profile?: {
    full_name: string;
    professional_title?: string;
    profile_picture_url?: string;
  };
  client_profile?: {
    display_name: string;
    avatar_url?: string;
  };
}



export interface ProjectNote {;


export interface ProjectNote {
=======
    title: string,
  description: string
};
  talent_profile?: {
    full_name: string;
    professional_title?: string;
    profile_picture_url?: string
};
  client_profile?: {
    display_name: string;
    avatar_url?: string
};
}

export interface ProjectNote {;

export interface ProjectNote {export interface ProjectNote {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {
<<<<<<< HEAD
    display_name: string;
    avatar_url?: string;
  };
}
=======
  }
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
