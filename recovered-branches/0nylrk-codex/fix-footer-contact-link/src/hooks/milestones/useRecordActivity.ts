
export const useRecordActivity = () => {;
  const { user } = useAuth();import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
    milestoneId: string,
    action: string,
    previousStatus: string | null,
    newStatus: string,
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)    }
  };

<<<<<<< HEAD
  
  return {
    recordMilestoneActivity
import { supabase } from '@/integrations/supabase/client',;

import { MilestoneActivity } from './types',;
export const useRecordActivity = () => {;
  const { user } = useAuth(),;
  const recordMilestoneActivity = async (;
    milestoneId: string,;
    action: string,;
    previousStatus: string | null,;
    newStatus: string,;
    comment?: string;
  ) => {;
    if (!user) return null,;
    try {;
<<<<<<< HEAD

      const { data, error } = await supabase;'
        .from('milestone_activities');

=======
      }
        .from('milestone_activities');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .insert({;
          milestone_id: milestoneId,;
          user_id: user.id,;
          action,;
          previous_status: previousStatus,;
          new_status: newStatus,;
          comment});`
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);`
        `);
        .single(),;
      if (error) throw error,;
      return data;
    } catch (err: any) {;"
      console.error("Error recording activity:", err),;
      return null;
  }

}
};
  return {;
    recordMilestoneActivity;
  }
  return {}
    recordMilestoneActivity;
  }
}

  };
  return {;
    recordMilestoneActivity;

  }


};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df