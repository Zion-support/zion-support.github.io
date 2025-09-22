<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type ProjectStatus =
  | "offer_sent"
  | "offer_accepted"
  | "changes_requested"
  | "in_progress"
  | "completed"
  | "canceled";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  | 'offer_sent'
  | 'offer_accepted'
  | 'changes_requested'
  | 'in_progress'
<<<<<<< HEAD
<<<<<<< HEAD
  | 'completed'
  | 'canceled';
<<<<<<< HEAD
export type ProjectStatus =;
  | 'offer_sent';
  | 'offer_accepted';
  | 'changes_requested';
  | 'in_progress';
  | 'completed';
  | 'canceled';

export interface Project {;

=======
export type ProjectStatus =
  | "offer_sent""
  | "offer_accepted""
  | "changes_requested""
  | "in_progress""
  | "completed"";
  | "canceled";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export type ProjectStatus =
export type ProjectStatus = 
export type ProjectStatus = 

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
export interface Project {
  id: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export interface Project {
  id: string;

export interface Project {  id: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
job?: {
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
    avatar_url?: string;
  };
}

export interface ProjectNote {;

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
};
}

export interface ProjectNote {;
export interface ProjectNote {

export interface ProjectNote {export interface ProjectNote {
  id: string;
  project_id: string;
  user_id: string;
  content: string;
  created_at: string;
  created_by_profile?: {

  }
}
export type ProjectStatus =
  | "offer_sent"""
  | "offer_accepted"""
  | "changes_requested"""
  | "in_progress"""
  | "completed"""
  | "canceled";"
export interface Project {
  // TODO: Implement
}
  id: string;,
  client_id: string;
  talent_id: string;,
  job_id: string;
  start_date: string;,
  scope_summary: string;"
  payment_terms: "hourly" | "fixed" | "milestone";"
  agreement_url?: string;
  status: ProjectStatus;,
  created_at: string;
  updated_at: string;
  job?: {
    title: string;,
  description: string;
  };
  talent_profile?: {
    full_name: string;
    professional_title?: string;
    profile_picture_url?: string;
  client_profile?: {
    display_name: string;
    avatar_url?: string;
  };
}

export interface ProjectNote {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  job?: {}
    title: string;
    description: string;
  };
  talent_profile?: {}
    full_name: string;
    professional_title?: string;
    profile_picture_url?: string;
  };
  client_profile?: {}
    display_name: string;
    avatar_url?: string;
  };
}

export interface ProjectNote {;

export interface ProjectNote {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export interface ProjectNote {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  project_id: string;
  user_id: string;,
  content: string;
created_at: string;
created_by_profile?: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    display_name: string,
    avatar_url?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
=======
=======
  created_by_profile?: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    display_name: string;
    avatar_url?: string;
  };
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  created_by_profile?: {
"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
