export type ProjectStatus =
  | "offer_sent"
  | "offer_accepted"
  | "changes_requested"
  | "in_progress"
  | "completed"
  | "canceled";

<<<<<<< HEAD
<<<<<<< HEAD
=======
  | 'completed';
  | 'canceled';
export interface Project {

export interface Project {;


=======
  id: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  job?: {
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



export interface ProjectNote {;


<<<<<<< HEAD
=======



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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface ProjectNote {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {
    display_name: string;
    avatar_url?: string;
  };
}
