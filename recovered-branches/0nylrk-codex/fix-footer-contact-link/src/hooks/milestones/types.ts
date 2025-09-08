
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {supabase} from '@/integrations / supabase / client';
export type MilestoneStatus = 'pending' | 'in_progress' | 'submitted' | 'completed' | 'rejected' | 'paid' | 'approved';
;

export interface Milestone {
<<<<<<< HEAD


export interface Milestone {;



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

export interface MilestoneActivity {
}


export interface MilestoneActivity {;

=======


export interface MilestoneActivity {;

  created_by: string
>>>>>>> origin/cursor/delete-old-data-records-6bba


  id: string;
  milestone_id: string;
  user_id: string;
  action: string;
  previous_status?: string;
  new_status: string;
  comment?: string;
  created_at: string;

<<<<<<< HEAD
  created_by_profile?: {


  }
}

=======

  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    display_name: string;
    avatar_url?: string;
  };
}