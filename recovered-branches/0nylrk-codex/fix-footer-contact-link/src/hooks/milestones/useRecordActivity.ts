
<<<<<<< HEAD
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { MilestoneActivity } from './types',;
;
export const useRecordActivity = () => {;
  const { user } = useAuth(),;
  ;
  const recordMilestoneActivity = async (;
    milestoneId:string,;
    action:string, ;
    previousStatus:string | null, ;
    newStatus:string,;
    comment?:string;
  ) => {;
    if (!user) return null,;
    ;
    try {;
      const { data, error } = await supabase;
        .from('milestone_activities');
        .insert({;
          milestone_id:milestoneId,;
          user_id:user.id,;
          action,;
          previous_status:previousStatus,;
          new_status:newStatus,;
          comment});
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .single(),;
      ;
      if (error) throw error,;
      ;
      return data,;
    } catch (err:any) {;
      console.error("Error recording activity:", err),;
      return null,;
    }
  },;
  ;
  return {;
    recordMilestoneActivity;
  },;
},;
=======
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
  const { user } = useAuth(),
  
  const recordMilestoneActivity = async (
    milestoneId: string,
    action: string, 
    previousStatus: string | null, 
    newStatus: string,
    comment?: string
  ) => {
    if (!user) return null,    
    try {
      const { data, _error} = await supabase
        .from('milestone_activities')
        .insert({_milestone_id: milestoneId, _user_id: user.id, _action, _previous_status: previousStatus, _new_status: newStatus, _comment})
        .select(`
          *,
          created_by_profile: profiles!user_id(display_name, avatar_url)
        `)
        .single(),
      
      if (error) throw error,
      
      return data
    } catch (err: any) {
      console.error("Error recording activity:", err),
      return null    }
  },
  
  return {
    recordMilestoneActivity
  }
},
      return data;
    } catch (err: unknown) {_return null;}
  };
  
  return {_recordMilestoneActivity};
};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
