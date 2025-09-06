

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {Milestone} from './types';
import {useRecordActivity} from './useRecordActivity';
export const useCreateMilestone = (projectId?: string) => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const createMilestone = async (milestoneData: Omit<Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user |!projectId) return null;
    try {
      setIsSubmitting(true);
      const { data, error } = await supabase
        .from('project_milestones')
        .insert({
          ...milestoneData;
<<<<<<< HEAD
          project_id: projectId
          created_by: user.id})
=======
          project_id: projectId,
          created_by: user && user.id})
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        .select()
        .single();
      if (error) throw error;
      // Create activity record
<<<<<<< HEAD
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created');
      toast.success("Milestone created successfully");
      return data
    } catch (err: any) {
      console.error("Error creating milestone:", err);
      toast.error("Failed to create milestone: " + err.message)
=======
      await recordMilestoneActivity(data && data.id, 'created', null, 'pendingMilestone created');
      
      toast && toast.success("Milestone created successfully");
      
      return data
    } catch (err: any) {
      console && console.error("Error creating milestone:", err);
      toast && toast.error("Failed to create milestone: " + err && err.message),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return null
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
    createMilestone;
    isSubmitting
  }
}

