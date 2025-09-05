
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
