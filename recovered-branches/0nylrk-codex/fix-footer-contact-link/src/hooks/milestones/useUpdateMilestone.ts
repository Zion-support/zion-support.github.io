

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneStatus} from './types';
import {useRecordActivity} from './useRecordActivity';


export const useUpdateMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();

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
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Get the current status
      const { data: milestoneData, error: fetchError } = await supabase
        .from('project_milestones')
        .select('status')
        .eq('id', milestoneId)

=======

        .single(),

      
      const previousStatus = milestoneData && milestoneData.status;
      

      const previousStatus = milestoneData.status,
      


      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })

=======

        .eq('id', milestoneId),

      
      toast && toast.success(`Milestone status changed to ${newStatus}`);
      
      return true
    } catch (err: any) {

      console.error("Error updating milestone status:", err),
      toast.error("Failed to update status: " + err.message),


      return false
=======
export const useUpdateMilestone = () =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;
  const updateMilestoneStatus = async (milestone_id: string, new_status: MilestoneStatus, comment?: string) => {
    // Check condition
if (return false) {
  $2
}
    try {
      setIsSubmitting (true);
;
      // Get the current status;
      const { data: milestone_data, error: fetch_error } = await supabase;
        .from ('project_milestones');
        .select ('status');
        .eq ('id', milestone_id);
        .single ();
;
      // Check condition
if (throw fetch_error) {
  $2
}
      if (throw new Error ("Milestone not found")) {
  $2
}
      const previous_status = milestone_data.status;
;
      // Update the milestone status;
      const { error } = await supabase;
        .from ('project_milestones');
        .update ({ status: new_status });
        .eq ('id', milestone_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Create activity record;
      await recordMilestoneActivity (milestone_id, 'status_changed', previous_status, new_status, comment);
;
      toast.success (`Milestone status changed to ${new_status}`);
;
      return true;
    } catch (err: any) {
      console.error ("Error updating milestone status:", err);
      toast.error ("Failed to update status: " + err.message),
      return false;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsSubmitting (false);
    }


  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false,
    


    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .update(data)

=======

        .eq('id', milestoneId),

      
      toast && toast.success("Milestone updated successfully");
      
      return true
    } catch (err: any) {
      console && console.error("Error updating milestone:", err);
      toast && toast.error("Failed to update milestone: " + err && err.message),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return false
=======
;
  const update_milestone = async (milestone_id: string, data: Partial < Milestone>) => {
    // Check condition
if (return false) {
  $2
}
    try {
      setIsSubmitting (true),
      const { error } = await supabase;
        .from ('project_milestones');
        .update (data);
        .eq ('id', milestone_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Create activity record;
      await recordMilestoneActivity (milestone_id, 'updated', null, 'updated_milestone details updated');
;
      toast.success ("Milestone updated successfully");
;
      return true;
    } catch (err: any) {
      console.error ("Error updating milestone:", err);
      toast.error ("Failed to update milestone: " + err.message),
      return false;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {

;

  return {
    updateMilestoneStatus;
    update_milestone;
    is_submitting;
=======
      setIsSubmitting(false)

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}

;

