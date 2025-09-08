
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneStatus} from './types';
import {useRecordActivity} from './useRecordActivity';

export const useUpdateMilestone = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false;
    try {
      setIsSubmitting(true);

<<<<<<< HEAD


=======
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {Milestone, MilestoneStatus} from './types';
import {useRecordActivity} from './useRecordActivity';
export const useUpdateMilestone = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false;
    try {
      setIsSubmitting(true);
>>>>>>> origin/cursor/delete-old-data-records-6bba
export const useUpdateMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { Milestone, MilestoneStatus } from './types',

import { useRecordActivity } from './useRecordActivity',
export const useUpdateMilestone = () => {}

  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),
<<<<<<< HEAD



=======
  
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false;

    try {
      setIsSubmitting(true),

<<<<<<< HEAD
      


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      // Get the current status
      const { data: milestoneData, error: fetchError } = await supabase
        .from('project_milestones')
        .select('status')
<<<<<<< HEAD

        .eq('id', milestoneId)
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


        .single(),

      const previousStatus = milestoneData && milestoneData.status;

      const previousStatus = milestoneData.status,

<<<<<<< HEAD


=======
      const previousStatus = milestoneData && milestoneData.status;
        .single();
      if (fetchError) throw fetchError;
      if (!milestoneData) throw new Error("Milestone not found");
      const previousStatus = milestoneData.status;
        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestoneData) throw new Error("Milestone not found"),
      
      const previousStatus = milestoneData.status,
      
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })

<<<<<<< HEAD


    } finally {
      setIsSubmitting(false)
    }

=======

      return false

    } finally {
      setIsSubmitting(false)
    }
      toast.success(`Milestone status changed to ${newStatus}`);
      return true
    } catch (err: any) {
      console.error("Error updating milestone status:", err);
      toast.error("Failed to update status: " + err.message)
        .eq('id', milestoneId),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment),
      
      toast.success(`Milestone status changed to ${newStatus}`),
      
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    } finally {


<<<<<<< HEAD
=======
      setIsSubmitting(false)
    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {}
    if (!user) return false,
<<<<<<< HEAD

    

=======

  }
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsSubmitting(true)
      const { error } = await supabase'
        .from('project_milestones')
        .update(data)
<<<<<<< HEAD


=======

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


        .eq('id', milestoneId),

      
  }
      toast && toast.success("Milestone updated successfully");
      return true
    } catch (err: any) {
      console && console.error("Error updating milestone:", err);
      toast && toast.error("Failed to update milestone: " + err && err.message),
      return false
      return false;
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
  const update_milestone = async (milestone_id: string, data: Partial < Milestone>) => {}
    // Check condition;
if (return false) {}
  $2;
}
    try {}
      setIsSubmitting (true),
<<<<<<< HEAD

      const { error } = await supabase;'
        .from ('project_milestones');
        .update (data);'
        .eq ('id', milestone_id);

=======
        .from ('project_milestones');'
        .update (data);
        .eq ('id', milestone_id);'
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Create activity record;'
      await recordMilestoneActivity (milestone_id, 'updated', null, 'updated_milestone details updated');
;
      toast.success ("Milestone updated successfully");
;
      return true;
    } catch (err: any) {"
      console.error ("Error updating milestone:", err);"
      toast.error ("Failed to update milestone: " + err.message),
      return false;

<<<<<<< HEAD
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {}

    if (!user) return false,


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return {

    updateMilestoneStatus;
    update_milestone;
    is_submitting;

<<<<<<< HEAD
      const { data: milestoneData, error: fetchError } = await supabase;'

        .from('project_milestones');'
        .select('status');'
        .eq('id', milestoneId);
        .single(),;
      if (fetchError) throw fetchError,;"
      if (!milestoneData) throw new Error("Milestone not found"),;
      const previousStatus = milestoneData.status,;
      // Update the milestone status;

      const { error } = await supabase;'
        .from('project_milestones');
        .update({ status: newStatus });'
        .eq('id', milestoneId),;

      if (error) throw error,;
      // Create activity record;'
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment),;
      toast.success(`Milestone status changed to ${newStatus}`),;
      return true;
    } catch (err: any) {;"
      console.error("Error updating milestone status:", err),;"
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

      const { error } = await supabase;'
        .from('project_milestones');
        .update(data);'
        .eq('id', milestoneId),;

      if (error) throw error,;
      // Create activity record;'
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updatedMilestone details updated'),;"
      toast.success("Milestone updated successfully"),;
      return true;
    } catch (err: any) {;"
      console.error("Error updating milestone:", err),;"
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

      return true;
    } catch (err: any) {"
      console && console.error("Error updating milestone:", err);"
      toast && toast.error("Failed to update milestone: " + err && err.message),

;
  const update_milestone = async (milestone_id: string, data: Partial < Milestone>) => {}
    // Check condition;
if (return false) {}
  $2;
}
    try {}
      setIsSubmitting (true),
      const { error } = await supabase;'
        .from ('project_milestones');
        .update (data);'
        .eq ('id', milestone_id);
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Create activity record;'
      await recordMilestoneActivity (milestone_id, 'updated', null, 'updated_milestone details updated');
;"
      toast.success ("Milestone updated successfully");
;
      return true;
    } catch (err: any) {"
      console.error ("Error updating milestone:", err);"
      toast.error ("Failed to update milestone: " + err.message),
      return false;

    } finally {}
  return {}

    updateMilestoneStatus;
    update_milestone;
    is_submitting;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsSubmitting(false)

  }
}
<<<<<<< HEAD

;



=======


  }
};
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
