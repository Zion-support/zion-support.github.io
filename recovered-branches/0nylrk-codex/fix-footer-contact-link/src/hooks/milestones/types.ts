<<<<<<< HEAD


import {supabase} from '@/integrations/supabase/client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
=======
import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface Milestone {
  id: string;
  project_id: string;
  title: string;
  description?: string;
  due_date?: string;
  amount: number;
  status: MilestoneStatus;
  created_at: string;
  updated_at: string;
<<<<<<< HEAD
  created_by: string
  deliverables?: any[]
=======
  created_by: string,
  deliverables?: any[];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface MilestoneActivity {
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
    display_name: string

    avatar_url?: string
=======
    display_name: string,
    avatar_url?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}