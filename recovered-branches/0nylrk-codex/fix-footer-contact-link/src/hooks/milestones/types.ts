<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;

export interface Milestone {
<<<<<<< HEAD
import {supabase} from '@/integrations/supabase/client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';

export interface Milestone {;

=======

export interface Milestone {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  project_id: string;
  title: string;
  description?: string;
  due_date?: string;
  amount: number;
  status: MilestoneStatus;
  created_at: string;

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export interface MilestoneActivity {;

  created_by: string

<<<<<<< HEAD
=======
  deliverables?: any[]
}

export interface MilestoneActivity {

export interface MilestoneActivity {;

=======
export interface MilestoneActivity {
}


export interface MilestoneActivity {;

<<<<<<< HEAD
  created_by: string
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  deliverables?: any[]
}

export interface MilestoneActivity {

export interface MilestoneActivity {;
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  id: string;
  milestone_id: string;
  user_id: string;
  action: string;
  previous_status?: string;
  new_status: string;
  comment?: string;
  created_at: string;
<<<<<<< HEAD

  }
}

=======
<<<<<<< HEAD

=======
  created_by_profile?: {
<<<<<<< HEAD
    display_name: string

    avatar_url?: string
import { supabase } from '@/integrations/supabase/client',;
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved',;
export interface Milestone {;
  id: string,;
  project_id: string,;
  title: string,;
  description?: string,;
  due_date?: string,;
  amount: number,;
  status: MilestoneStatus,;
  created_at: string,;
  updated_at: string,;
  created_by: string,;
  deliverables?: any[];
}
;
export interface MilestoneActivity {;
  id: string,;
  milestone_id: string,;
  user_id: string,;
  action: string,;
  previous_status?: string,;
  new_status: string,;
  comment?: string,;
  created_at: string;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
}
>>>>>>> merged-prs-20250907-203621

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    display_name: string;
    avatar_url?: string;
  };
}