

import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
  const { user } = useAuth(),
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const recordMilestoneActivity = async (
    milestoneId: string,
    action: string,
    previousStatus: string | null,
    newStatus: string,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return data
    } catch (err: any) {
      console && console.error("Error recording activity:", err);
      return null
=======

    }

  }
    }
  };
  
  return {
    recordMilestoneActivity

};
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
