
<<<<<<< HEAD
=======
export type ProjectStatus = ;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export type ProjectStatus = ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  | 'offer_sent';
  | 'offer_accepted';
  | 'changes_requested';
  | 'in_progress';
  | 'completed';
  | 'canceled';
;
export interface Project {;
  id:string;
  client_id:string;
  talent_id:string;
  job_id:string;
  start_date:string;
  scope_summary:string;
  payment_terms:'hourly' | 'fixed' | 'milestone';
  agreement_url?:string;
  status:ProjectStatus;
  created_at:string;
  updated_at:string;
  job?:{;
    title:string;
    description:string;
  };
  talent_profile?:{;
    full_name:string;
    professional_title?:string;
    profile_picture_url?:string;
  };
  client_profile?:{;
    display_name:string;
    avatar_url?:string;
  };
}
;
export interface ProjectNote {;
  id:string;
  project_id:string;
  user_id:string;
  content:string;
  created_at:string;
  created_by_profile?:{;
    display_name:string;
    avatar_url?:string;
  };
} export type ProjectStatus = | 'offer sent' | 'offer accepted' | 'changes requested' | 'in progress' | 'completed' | 'canceled';
}
