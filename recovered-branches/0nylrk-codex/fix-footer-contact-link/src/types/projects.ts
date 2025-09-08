export type ProjectStatus =
  | "offer_sent"
  | "offer_accepted"
  | "changes_requested"
  | "in_progress"
  | "completed"
  | "canceled";


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export type ProjectStatus =;
  | 'offer_sent';
  | 'offer_accepted';
  | 'changes_requested';
  | 'in_progress';
  | 'completed';
  | 'canceled';

export interface Project {;

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
  | 'in_progress';  | 'completed';
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


  }

<<<<<<< HEAD
=======

    display_name: string;
    avatar_url?: string;
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba
}