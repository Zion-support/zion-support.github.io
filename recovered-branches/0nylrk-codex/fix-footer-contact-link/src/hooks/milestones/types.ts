<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;

export interface Milestone {

export interface Milestone {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  project_id: string;
  title: string;
  description?: string;
  due_date?: string;
  amount: number;
  status: MilestoneStatus;
  created_at: string;
  updated_at: string;

  created_by: string,
  deliverables?: any[];

}
export interface MilestoneActivity {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface MilestoneActivity {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  created_by: string
  deliverables?: any[]
}
export interface MilestoneActivity {

export interface MilestoneActivity {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  milestone_id: string;
  user_id: string;
  action: string;
  previous_status?: string;
  new_status: string;
  comment?: string;
  created_at: string;
  created_by_profile?: {
<<<<<<< HEAD

    display_name: string,
    avatar_url?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
}