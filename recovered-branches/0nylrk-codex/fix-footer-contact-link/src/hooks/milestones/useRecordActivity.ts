
<<<<<<< HEAD
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
=======

export const _useRecordActivity = () => {_const { user} = useAuth();
  
  const _recordMilestoneActivity = async (_milestoneId: string, _action: string, _previousStatus: string | null, _newStatus: string, _comment?: string) => {_if (!user) return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
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
      
<<<<<<< HEAD
      return data
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error recording activity:", err),
      return null
=======
      console.error(&quot;Error recording activity:&quot;, err);
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  return {
    recordMilestoneActivity
  }
},
=======
      return data;
    } catch (err: unknown) {_return null;}
  };
  
  return {_recordMilestoneActivity};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
