<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneStatus} from './types';
import {useRecordActivity} from './useRecordActivity';
<<<<<<< HEAD


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const useUpdateMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

  
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false;
    try {
<<<<<<< HEAD
      setIsSubmitting(true),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Get the current status
      const { data: milestoneData, error: fetchError } = await supabase
        .from('project_milestones')
        .select('status')
        .eq('id', milestoneId)
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })
<<<<<<< HEAD

<<<<<<< HEAD
=======

        .eq('id', milestoneId),

      
      toast && toast.success(`Milestone status changed to ${newStatus}`);
      
      return true
    } catch (err: any) {

      console.error("Error updating milestone status:", err),
      toast.error("Failed to update status: " + err.message),


=======
        .eq('id', milestoneId),

      
        .eq('id', milestoneId);
      if (error) throw error;
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment);
      console && console.error("Error updating milestone status:", err);
      toast && toast.error("Failed to update status: " + err && err.message),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return false
    } finally {
      setIsSubmitting(false)
    }
  }
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false,
    
    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .update(data)
      return false
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
    } finally {
<<<<<<< HEAD
      setIsSubmitting (false);
    }
<<<<<<< HEAD


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false,
    
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .update(data)
<<<<<<< HEAD
=======
        .eq('id', milestoneId);
      if (error) throw error;
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updatedMilestone details updated');
      toast.success("Milestone updated successfully");
      return true
    } catch (err: any) {
      console.error("Error updating milestone:", err);
      toast.error("Failed to update milestone: " + err.message)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return {
    updateMilestoneStatus;
    update_milestone;
    is_submitting;

    }
  };
  
  return {
    updateMilestoneStatus;
    updateMilestone;
    isSubmitting
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


        .eq('id', milestoneId),

      
<<<<<<< HEAD
=======
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

;

=======
      setIsSubmitting (false);
    }
  }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return {
    updateMilestoneStatus;
    update_milestone;
    is_submitting;
      setIsSubmitting(false)

  }
}
<<<<<<< HEAD

;

=======
;

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
},; try {
  setIsSubmitting (true);
//Get the current status const {
  data: milestoneData, error: fetchError 
}= await supabase .from ('project milestones') .select ('status') .eq ('id', milestoneId) .single ();
//Update the milestone status const {
  error 
}= await supabase .from ('project milestones') if (error) throw error;
//Create activity record await recordMilestoneActivity (milestoneId, 'status changed', previousStatus, newStatus, comment);
}finally {
  setIsSubmitting (false) 
}
};
const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
  if (!user) return false;
setIsSubmitting (true);
const {
  error 
}= await supabase .from ('project milestones') .update (data) .eq ('id', milestoneId);
if (error) throw error;
// Create activity record await recordMilestoneActivity (milestoneId, 'updated', null, 'updatedMilestone details updated');
}finally {
  setIsSubmitting (false) 
}
};
return {
  updateMilestoneStatus;
updateMilestone;
isSubmitting 
}
};
  }
};
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
};
;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
