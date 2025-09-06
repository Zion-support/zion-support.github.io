

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone} from './types';
import {useRecordActivity} from './useRecordActivity';

          project_id: projectId,
          created_by: user && user.id})

        .select()
        .single();
      if (error) throw error;
      // Create activity record

      await recordMilestoneActivity(data && data.id, 'created', null, 'pendingMilestone created');
      
      toast && toast.success("Milestone created successfully");
      
      return data
    } catch (err: any) {
      console && console.error("Error creating milestone:", err);
      toast && toast.error("Failed to create milestone: " + err && err.message),

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
export const useCreateMilestone = (project_id?: string) =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;
  const create_milestone = async (milestone_data: Omit < Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    // Check condition
if (return null) {
  $2
}
    try {
      setIsSubmitting (true);
;
      const { data, error } = await supabase;
        .from ('project_milestones');
        .insert ({
          ...milestone_data;
          project_id: project_id,
          created_by: user.id});
        .select ();
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      // Create activity record;
      await recordMilestoneActivity (data.id, 'created', null, 'pending_milestone created');
;
      toast.success ("Milestone created successfully");
;
      return data;
    } catch (err: any) {
      console.error ("Error creating milestone:", err);
      toast.error ("Failed to create milestone: " + err.message),
      return null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsSubmitting (false);
    }

export const useCreateMilestone = (projectId?: string) => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();

=======
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
    
    try {
      setIsSubmitting(true),
      
      const { data, error } = await supabase
        .from('project_milestones')
        .insert({
          ...milestoneData,
          project_id: projectId,
          created_by: user.id})
        .select()
        .single(),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),
      
      toast.success("Milestone created successfully"),
      
      return data
    } catch (err: any) {
      console.error("Error creating milestone:", err),
      toast.error("Failed to create milestone: " + err.message),
      return null
    } finally {
      setIsSubmitting(false)


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
};
