<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

export type ProjectStatus =
export type ProjectStatus = 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export type ProjectStatus =
export type ProjectStatus = 
export type ProjectStatus = 

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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



export interface Project {};
  id: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface Project {
  id: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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



export interface ProjectNote {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface ProjectNote {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

<<<<<<< HEAD
export interface ProjectNote {export interface ProjectNote {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

export interface ProjectNote {export interface ProjectNote {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  user_id: string;
  content: string;
  created_at: string;
<<<<<<< HEAD
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
=======
    display_name: string

    avatar_url?: string
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
