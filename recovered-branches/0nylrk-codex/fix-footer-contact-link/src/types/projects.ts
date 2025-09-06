<<<<<<< HEAD

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
  | 'in_progress';
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  | 'completed';
  | 'canceled';
export interface Project {

export interface Project {;
<<<<<<< HEAD


export interface Project {
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Project {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
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
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d



export interface ProjectNote {;


<<<<<<< HEAD
export interface ProjectNote {
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {
<<<<<<< HEAD
  }
}
=======
    display_name: string;
    avatar_url?: string;
  };
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
