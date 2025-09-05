
<<<<<<< HEAD
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
import { Milestone, MilestoneStatus } from './types',;
import { useRecordActivity } from './useRecordActivity',;
;
export const useUpdateMilestone = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;
  ;
  const updateMilestoneStatus = async (milestoneId:string, newStatus:MilestoneStatus, comment?:string) => {;
    if (!user) return false,;
    ;
    try {;
      setIsSubmitting(true),;
      ;
      // Get the current status;
      const { data:milestoneData, error:fetchError } = await supabase;
        .from('project_milestones');
        .select('status');
        .eq('id', milestoneId);
        .single(),;
      ;
      if (fetchError) throw fetchError,;
      if (!milestoneData) throw new Error("Milestone not found"),;
      ;
      const previousStatus = milestoneData.status,;
      ;
      // Update the milestone status;
      const { error } = await supabase;
        .from('project_milestones');
        .update({ status:newStatus });
        .eq('id', milestoneId),;
      ;
      if (error) throw error,;
      ;
      // Create activity record;
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment),;
      ;
      toast.success(`Milestone status changed to ${newStatus}`),;
      ;
      return true,;
    } catch (err:any) {;
      console.error("Error updating milestone status:", err),;
      toast.error("Failed to update status:" + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  const updateMilestone = async (milestoneId:string, data:Partial<Milestone>) => {;
    if (!user) return false,;
    ;
    try {;
      setIsSubmitting(true),;
      ;
      const { error } = await supabase;
        .from('project_milestones');
        .update(data);
        .eq('id', milestoneId),;
      ;
      if (error) throw error,;
      ;
      // Create activity record;
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updatedMilestone details updated'),;
      ;
      toast.success("Milestone updated successfully"),;
      ;
      return true,;
    } catch (err:any) {;
      console.error("Error updating milestone:", err),;
      toast.error("Failed to update milestone:" + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  return {;
    updateMilestoneStatus,;
    updateMilestone,;
    isSubmitting;
  },;
},;
=======
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
      const { data: milestoneData, _error: fetchError} = await supabase
        .from('project_milestones')
        .select('status')
        .eq('id', milestoneId)
        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestoneData) throw new Error("Milestone not found"),      
      const previousStatus = milestoneData.status,      
      // Update the milestone status
      const {_error} = await supabase
        .from('project_milestones')
        .update({ status: newStatus })
        .eq('id', milestoneId),      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment),
      
      toast.success(`Milestone status changed to ${newStatus}`),
      
      return true
    } catch (err: any) {
      console.error("Error updating milestone status:", err),
      toast.error("Failed to update status: " + err.message),
      return false    } finally {
      setIsSubmitting(false)
    }
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false,
      toast.success(`Milestone status changed to ${_newStatus}`);
      
      return true;
    } catch (err: unknown) {_toast.error("Failed to update status: " + err.message);
      return false;} finally {_setIsSubmitting(false);}
  };
  
  const _updateMilestone = async (_milestoneId: string, _data: Partial<Milestone>) => {_if (!user) return false;
    
    try {
      setIsSubmitting(true),
      
      const { error} = await supabase
        .from('project_milestones')
        .update(data)
        .eq('id', milestoneId),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updatedMilestone details updated'),
      
      toast.success("Milestone updated successfully"),      
      return true
    } catch (err: any) {
      console.error("Error updating milestone:", err),
      toast.error("Failed to update milestone: " + err.message),
      return false    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    updateMilestoneStatus,
    updateMilestone,
    isSubmitting
  }
},
      return true;
    } catch (err: unknown) {_toast.error("Failed to update milestone: " + err.message);
      return false;} finally {_setIsSubmitting(false);}
  };
  
  return {_updateMilestoneStatus, _updateMilestone, _isSubmitting};
};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
