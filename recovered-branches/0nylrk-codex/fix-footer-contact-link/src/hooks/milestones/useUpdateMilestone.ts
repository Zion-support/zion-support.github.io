<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const useUpdateMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false;

    try {
      setIsSubmitting(true),
<<<<<<< HEAD

=======
      
<<<<<<< HEAD
      
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Get the current status
      const { data: milestoneData, error: fetchError } = await supabase
        .from('project_milestones')
        .select('status')
<<<<<<< HEAD
=======
        .eq('id', milestoneId)
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        .single(),

      const previousStatus = milestoneData && milestoneData.status;

      const previousStatus = milestoneData.status,

<<<<<<< HEAD
      const previousStatus = milestoneData && milestoneData.status;
        .single();
      if (fetchError) throw fetchError;
      if (!milestoneData) throw new Error("Milestone not found");
      const previousStatus = milestoneData.status;
        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestoneData) throw new Error("Milestone not found"),
      
      const previousStatus = milestoneData.status,
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })

<<<<<<< HEAD
      return false

=======
<<<<<<< HEAD
        .eq('id', milestoneId),

      
        .eq('id', milestoneId);
      if (error) throw error;
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment);
      console && console.error("Error updating milestone status:", err);
      toast && toast.error("Failed to update status: " + err && err.message),
      return false
=======
=======

        .eq('id', milestoneId),

      
      toast && toast.success(`Milestone status changed to ${newStatus}`);
      
      return true
    } catch (err: any) {

      console.error("Error updating milestone status:", err),
      toast.error("Failed to update status: " + err.message),


      return false
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
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
=======

    } finally {

<<<<<<< HEAD
      setIsSubmitting(false)
    }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {}
    if (!user) return false,
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }
}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsSubmitting(true)
      const { error } = await supabase'
        .from('project_milestones')
        .update(data)
<<<<<<< HEAD
      return false;
=======
<<<<<<< HEAD
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
  return {
    updateMilestoneStatus;
    updateMilestone;
    isSubmitting
  }
}

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        .eq('id', milestoneId),

      
  }
      toast && toast.success("Milestone updated successfully");
      return true
    } catch (err: any) {
      console && console.error("Error updating milestone:", err);
      toast && toast.error("Failed to update milestone: " + err && err.message),
      return false
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
  const update_milestone = async (milestone_id: string, data: Partial < Milestone>) => {}
    // Check condition;
if (return false) {}
  $2;
}
    try {}
      setIsSubmitting (true),
<<<<<<< HEAD
        .from ('project_milestones');'
        .update (data);
        .eq ('id', milestone_id);'
=======
      const { error } = await supabase;'
        .from ('project_milestones');
        .update (data);'
        .eq ('id', milestone_id);
>>>>>>> origin/chore/fix-lint-and-merge
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

  },
<<<<<<< HEAD
    }
=======
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {}
>>>>>>> origin/chore/fix-lint-and-merge
    if (!user) return false,

=======
    } finally {
      setIsSubmitting (false);
    }
  }
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return {

    updateMilestoneStatus;
    update_milestone;
    is_submitting;
<<<<<<< HEAD

    }
  };
  
  return {}
    updateMilestoneStatus;
    updateMilestone;
    isSubmitting'
import { useState } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
import { toast } from 'sonner',;'
import { Milestone, MilestoneStatus } from './types',;'
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
<<<<<<< HEAD
=======
      const { data: milestoneData, error: fetchError } = await supabase;'
>>>>>>> origin/chore/fix-lint-and-merge
        .from('project_milestones');'
        .select('status');'
        .eq('id', milestoneId);
        .single(),;
      if (fetchError) throw fetchError,;"
      if (!milestoneData) throw new Error("Milestone not found"),;
      const previousStatus = milestoneData.status,;
      // Update the milestone status;
<<<<<<< HEAD
        .from('project_milestones');'
        .update({ "status": newStatus });
        .eq('id', milestoneId),;'
=======
      const { error } = await supabase;'
        .from('project_milestones');
        .update({ status: newStatus });'
        .eq('id', milestoneId),;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
        .from('project_milestones');'
        .update(data);
        .eq('id', milestoneId),;'
=======
      const { error } = await supabase;'
        .from('project_milestones');
        .update(data);'
        .eq('id', milestoneId),;
>>>>>>> origin/chore/fix-lint-and-merge
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsSubmitting(false)

  }
}
<<<<<<< HEAD

  }
};
;
=======
;

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
