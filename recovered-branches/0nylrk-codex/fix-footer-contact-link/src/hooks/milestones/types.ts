
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;

export interface Milestone {;

export interface Milestone {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  project_id: string;
  title: string;
  description?: string;
  due_date?: string;
  amount: number;
  status: MilestoneStatus;
  created_at: string;
  updated_at: string;
}
export interface MilestoneActivity {
}


export interface MilestoneActivity {;

export interface MilestoneActivity {;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export interface MilestoneActivity {
=======
  created_by: string
  deliverables?: any[]
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  milestone_id: string;
  user_id: string;
  action: string;
  previous_status?: string;
  new_status: string;
  comment?: string;
  created_at: string;
  created_by_profile?: {
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
=======

    display_name: string,
    avatar_url?: string;=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}