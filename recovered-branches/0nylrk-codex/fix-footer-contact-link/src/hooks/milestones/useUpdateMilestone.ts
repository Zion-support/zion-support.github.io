
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneStatus} from './types';
import {useRecordActivity} from './useRecordActivity';
<<<<<<< HEAD

export const useUpdateMilestone = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false;
    try {
      setIsSubmitting(true);

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export const useUpdateMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();

<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
        .single();
      if (fetchError) throw fetchError;
      if (!milestoneData) throw new Error("Milestone not found");
      const previousStatus = milestoneData.status;
        .single(),

      
      const previousStatus = milestoneData && milestoneData.status;
      

      const previousStatus = milestoneData.status,
      
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })
        .eq('id', milestoneId);
      if (error) throw error;
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment);
      toast.success(`Milestone status changed to ${newStatus}`);
      return true
    } catch (err: any) {
      console.error("Error updating milestone status:", err);
      toast.error("Failed to update status: " + err.message)
        .eq('id', milestoneId),

      
      toast && toast.success(`Milestone status changed to ${newStatus}`);
      
      return true
    } catch (err: any) {

      console.error("Error updating milestone status:", err),
      toast.error("Failed to update status: " + err.message),
      return false
    } finally {
      setIsSubmitting(false)
    }
  }
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false;
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false,
    
    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .update(data)
        .eq('id', milestoneId);
      if (error) throw error;
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updatedMilestone details updated');
      toast.success("Milestone updated successfully");
      return true
    } catch (err: any) {
      console && console.error("Error updating milestone:", err);
      toast && toast.error("Failed to update milestone: " + err && err.message),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return false

    } finally {

;

  return {
    updateMilestoneStatus;
    update_milestone;
    is_submitting;

  }
}

<<<<<<< HEAD

        .eq('id', milestoneId),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updatedMilestone details updated'),
      
      toast.success("Milestone updated successfully"),
      
      return true
    } catch (err: any) {
      console.error("Error updating milestone:", err),
      toast.error("Failed to update milestone: " + err.message),
      return false
    } finally {
      setIsSubmitting(false)

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
    }
  },;
  return {;
    updateMilestoneStatus,;
    updateMilestone;
    isSubmitting;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }
};
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

