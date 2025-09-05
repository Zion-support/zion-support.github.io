
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { Milestone } from './types',
import { useRecordActivity } from './useRecordActivity',
export const useCreateMilestone = (projectId?: string) => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),
  
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user || !projectId) return null,
=======

export const _useCreateMilestone = (_projectId?: string) => {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {_recordMilestoneActivity} = useRecordActivity();
  
  const _createMilestone = async (_milestoneData: Omit<Milestone, _'id' | 'created_at' | 'updated_at' | 'created_by'>) => {_if (!user || !projectId) return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    try {
      setIsSubmitting(true),
      
      const { data, _error} = await supabase
        .from('project_milestones')
        .insert({_...milestoneData, _project_id: projectId, _created_by: user.id})
        .select()
        .single(),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),
      
<<<<<<< HEAD
      toast.success("Milestone created successfully"),
=======
      toast.success(&quot;Milestone created successfully&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
<<<<<<< HEAD
      return data
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error creating milestone:", err),
      toast.error("Failed to create milestone: " + err.message),
      return null
=======
      console.error(&quot;Error creating milestone:&quot;, err);
      toast.error(&quot;Failed to create milestone: &quot; + err.message);
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    createMilestone,
    isSubmitting
  }
},
=======
      return data;
    } catch (err: unknown) {_toast.error("Failed to create milestone: " + err.message);
      return null;} finally {_setIsSubmitting(false);}
  };
  
  return {_createMilestone, _isSubmitting};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
