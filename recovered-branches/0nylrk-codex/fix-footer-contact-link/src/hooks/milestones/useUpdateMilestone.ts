
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Milestone, MilestoneStatus } from './types';
import { useRecordActivity } from './useRecordActivity';
export const useUpdateMilestone = () => {
  const { user } = useAuth($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { recordMilestoneActivity } = useRecordActivity($2);
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false,
    
    try {
      setIsSubmitting($2);
      // Get the current status
      const { data: milestoneData, error: fetchError} = await supabase
        .from('project_milestones')
        .select('status')
        .eq('id', milestoneId)
        .single($2);
      if (fetchError) throw fetchError,
      if (!milestoneData) throw new Error($2);
      const previousStatus = $2;
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus})
        .eq($2);
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity($2);
      toast.success($2);
      return true
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return false
    } finally {
      setIsSubmitting(false)
    }
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false,
    
    try {
      setIsSubmitting($2);
      const { error } = await supabase
        .from('project_milestones')
        .update(data)
        .eq($2);
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity($2);
      toast.success($2);
      return true
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return false
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    updateMilestoneStatus,
    updateMilestone,
    isSubmitting
  }
},
