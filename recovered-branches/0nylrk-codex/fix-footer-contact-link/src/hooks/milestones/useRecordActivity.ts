import { useAuth } from '@/hooks/useAuth';';
import { supabase } from '@/integrations/supabase/client';';
import { MilestoneActivity } from './types';';';
export const useRecordActivity = () => {;
const { user } = useAuth();
const recordMilestoneActivity = async (
  // TODO: Add parameters
)
    milestoneId: string,
    action: string,
    previousStatus: string | null,
    newStatus: string,
    comment?: string
  ) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (!user) return null
    try {;
const { data, error } = await supabase
        .from('milestone_activities')'
        .insert({
  // TODO: Add properties
}
  // TODO: Add properties
}
          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,
          comment})
          comment,
        })
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .single()
      if (error) throw error
      return data
    } catch (err: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error("Error recording activity:", err)"
      return null
    }
  }
  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    recordMilestoneActivity
  }
}