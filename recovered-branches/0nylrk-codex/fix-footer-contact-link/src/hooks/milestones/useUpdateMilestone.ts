
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { Milestone, MilestoneStatus } from './types',
import { useRecordActivity } from './useRecordActivity',
export const useUpdateMilestone = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),
  
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false,
    
    try {
      setIsSubmitting(true),
      
      // Get the current status
      const { data: milestoneData, error: fetchError } = await supabase
        .from('project_milestones')
        .select('status')
        .eq('id', milestoneId)
        .single(),
      
<<<<<<< HEAD
      if (fetchError) throw fetchError,
      if (!milestoneData) throw new Error("Milestone not found"),
=======
      if (fetchError) throw fetchError;
      if (!milestoneData) throw new Error(&quot;Milestone not found&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      const previousStatus = milestoneData.status,
      
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })
        .eq('id', milestoneId),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment),
      
      toast.success(`Milestone status changed to ${newStatus}`),
      
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error updating milestone status:", err),
      toast.error("Failed to update status: " + err.message),
      return false
=======
      console.error(&quot;Error updating milestone status:&quot;, err);
      toast.error(&quot;Failed to update status: &quot; + err.message);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false,
    
    try {
      setIsSubmitting(true),
      
      const { error } = await supabase
        .from('project_milestones')
        .update(data)
        .eq('id', milestoneId),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updatedMilestone details updated'),
      
<<<<<<< HEAD
      toast.success("Milestone updated successfully"),
=======
      toast.success(&quot;Milestone updated successfully&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error updating milestone:", err),
      toast.error("Failed to update milestone: " + err.message),
      return false
=======
      console.error(&quot;Error updating milestone:&quot;, err);
      toast.error(&quot;Failed to update milestone: &quot; + err.message);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
=======
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
import { Milestone, MilestoneStatus } from './types',;
import { useRecordActivity } from './useRecordActivity',;
export const useUpdateMilestone = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {;
    if (!user) return false,;
    try {;
      setIsSubmitting(true),;
      // Get the current status;
      const { data: milestoneData, error: fetchError } = await supabase;
        .from('project_milestones');
        .select('status');
        .eq('id', milestoneId);
        .single(),;
      if (fetchError) throw fetchError,;
      if (!milestoneData) throw new Error("Milestone not found"),;
      const previousStatus = milestoneData.status,;
      // Update the milestone status;
      const { error } = await supabase;
        .from('project_milestones');
        .update({ status: newStatus });
        .eq('id', milestoneId),;
      if (error) throw error,;
      // Create activity record;
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment),;
      toast.success(`Milestone status changed to ${newStatus}`),;
      return true;
    } catch (err: any) {;
      console.error("Error updating milestone status:", err),;
      toast.error("Failed to update status: " + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {;
    if (!user) return false,;
    try {;
      setIsSubmitting(true),;
      const { error } = await supabase;
        .from('project_milestones');
        .update(data);
        .eq('id', milestoneId),;
      if (error) throw error,;
      // Create activity record;
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updatedMilestone details updated'),;
      toast.success("Milestone updated successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error updating milestone:", err),;
      toast.error("Failed to update milestone: " + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  return {;
    updateMilestoneStatus,;
    updateMilestone;
    isSubmitting;
  }
};