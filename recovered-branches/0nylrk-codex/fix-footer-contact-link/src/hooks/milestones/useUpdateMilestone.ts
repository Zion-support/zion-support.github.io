
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneStatus} from './types';
import {useRecordActivity} from './useRecordActivity';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const useUpdateMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false,
    
    try {
      setIsSubmitting(true),
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Get the current status
      const { data: milestoneData, error: fetchError } = await supabase
        .from('project_milestones')
        .select('status')
        .eq('id', milestoneId)
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

        .single(),

      
      const previousStatus = milestoneData && milestoneData.status;
      

      const previousStatus = milestoneData.status,
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      const previousStatus = milestoneData && milestoneData.status;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts
=======
<<<<<<< HEAD
        .single();
      if (fetchError) throw fetchError;
      if (!milestoneData) throw new Error("Milestone not found");
      const previousStatus = milestoneData.status;
=======
        .single(),
      
      if (fetchError) throw fetchError,
      if (!milestoneData) throw new Error("Milestone not found"),
      
      const previousStatus = milestoneData.status,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts

<<<<<<< HEAD
      return false
    } finally {
      setIsSubmitting(false)
    }

=======
=======

        .eq('id', milestoneId),

      
========
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        .eq('id', milestoneId);
      if (error) throw error;
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment);
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts
      toast && toast.success(`Milestone status changed to ${newStatus}`);
      return true
    } catch (err: any) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts

      console.error("Error updating milestone status:", err),
      toast.error("Failed to update status: " + err.message),


========
      console && console.error("Error updating milestone status:", err);
      toast && toast.error("Failed to update status: " + err && err.message),
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts
      return false
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
    } finally {
      setIsSubmitting (false);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts


=======
      toast.success(`Milestone status changed to ${newStatus}`);
      return true
    } catch (err: any) {
      console.error("Error updating milestone status:", err);
      toast.error("Failed to update status: " + err.message)
=======
        .eq('id', milestoneId),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment),
      
      toast.success(`Milestone status changed to ${newStatus}`),
      
      return true
    } catch (err: any) {
      console.error("Error updating milestone status:", err),
      toast.error("Failed to update status: " + err.message),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return false
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
  }
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {
    if (!user) return false,
    
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .update(data)
<<<<<<< HEAD
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
  return {
    updateMilestoneStatus;
    updateMilestone;
    isSubmitting
  }
}

=======
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  };
  
  return {
    updateMilestoneStatus;
    updateMilestone;
    isSubmitting
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  }
};
=======

=======

        .eq('id', milestoneId),

      
========
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts
      toast && toast.success("Milestone updated successfully");
      return true
    } catch (err: any) {
      console && console.error("Error updating milestone:", err);
      toast && toast.error("Failed to update milestone: " + err && err.message),
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts

;

========
      setIsSubmitting (false);
    }
  }
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts
  return {
    updateMilestoneStatus;
    update_milestone;
    is_submitting;
=======
      setIsSubmitting(false)

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts

;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
;
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useUpdateMilestone.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
