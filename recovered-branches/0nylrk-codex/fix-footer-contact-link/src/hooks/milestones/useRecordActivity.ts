
<<<<<<< HEAD
export const useRecordActivity = () => {;
  const { user } = useAuth();

=======
=======

export const useRecordActivity = () => {;
  const { user } = useAuth();

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
  const { user } = useAuth(),
<<<<<<< HEAD

  
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const recordMilestoneActivity = async (
    milestoneId: string,
    action: string, 
    previousStatus: string | null, 
    newStatus: string,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({

<<<<<<< HEAD

=======
          milestone_id: milestoneId;
          user_id: user.id;
          action;
          previous_status: previousStatus;
          new_status: newStatus
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,

<<<<<<< HEAD

          comment})
        .select(`
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)


=======
          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .single();
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD


      return data
    } catch (err: any) {
      console && console.error("Error recording activity:", err);
      return null

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
import {MilestoneActivity} from './types';
export const useRecordActivity = () =>: any {
  const { user } = use_auth ();
;
  const recordMilestoneActivity = async (
    milestone_id: string,
    action: string,
    previous_status: string | null,
    new_status: string;
    comment?: string) => {
    // Check condition
if (return null, ) {
  $2
}
    try {
      const { data, error } = await supabase;
        .from ('milestone_activities');
        .insert ({
          milestone_id: milestone_id;
          user_id: user.id;
          action;
          previous_status: previous_status;
          new_status: new_status,
          comment});
        .select (`;
          *;
          created_by_profile:profiles ! user_id (display_name, avatar_url);
        `);
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      return data;
    } catch (err: any) {
      console.error ("Error recording activity:", err);
      return null;
    }
  }
;
  return {
    recordMilestoneActivity;
  }
}
;


<<<<<<< HEAD
=======
      return data
    } catch (err: any) {
      console.error("Error recording activity:", err),
      return null
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  };
  
  return {
    recordMilestoneActivity
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useAuth } from '@/hooks/useAuth',;
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
      const { data, error } = await supabase;
        .from('milestone_activities');
        .insert({;
          milestone_id: milestoneId,;
          user_id: user.id,;
          action,;
          previous_status: previousStatus,;
          new_status: newStatus,;
          comment});
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .single(),;
      if (error) throw error,;
      return data;
    } catch (err: any) {;
      console.error("Error recording activity:", err),;
      return null;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

  };
  return {;
    recordMilestoneActivity;

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }

};

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    }
  };
  return {;
    recordMilestoneActivity;
  }
  return {
    recordMilestoneActivity
  }
}

};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
