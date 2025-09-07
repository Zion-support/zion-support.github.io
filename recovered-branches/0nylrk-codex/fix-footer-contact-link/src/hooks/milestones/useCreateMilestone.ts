
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Milestone } from './types';
import { useRecordActivity } from './useRecordActivity';
export const useCreateMilestone = (projectId?: string) => {
  const { user } = useAuth($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { recordMilestoneActivity } = useRecordActivity($2);
  const createMilestone = async (milestoneData: Omit<Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user || !projectId) return null,
    
    try {
      setIsSubmitting($2);
      const { data, error } = await supabase
        .from('project_milestones')
        .insert({
          ...milestoneData,
          project_id: projectId,
          created_by: user.id})
        .select()
        .single($2);
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity($2);
      toast.success($2);
      return data
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return null
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    createMilestone,
    isSubmitting
  }
},
