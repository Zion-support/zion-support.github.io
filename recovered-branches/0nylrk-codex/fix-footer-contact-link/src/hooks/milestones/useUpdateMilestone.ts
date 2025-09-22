

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneStatus} from './types';
import {useRecordActivity} from './useRecordActivity';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {Milestone, MilestoneStatus} from './types';
import {useRecordActivity} from './useRecordActivity';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {use_auth} from '@/hooks / use_auth';'
import {toast} from 'sonner';'
import {Milestone, MilestoneStatus} from './types';'
import {useRecordActivity} from './useRecordActivity';



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const useUpdateMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { Milestone, MilestoneStatus } from './types',
<<<<<<< HEAD
=======


'
import { useState } from 'react','
import { supabase } from '@/integrations/supabase/client','
import { useAuth } from '@/hooks/useAuth','
import { toast } from 'sonner','
import { Milestone, MilestoneStatus } from './types','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useRecordActivity } from './useRecordActivity',
export const useUpdateMilestone = () => {}
=======
import { useRecordActivity } from './useRecordActivity',
export const useUpdateMilestone = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),

<<<<<<< HEAD

=======
  
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false,

=======
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {
    if (!user) return false;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      setIsSubmitting(true),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Get the current status
      const { data: milestoneData, error: fetchError } = await supabase
        .from('project_milestones')
        .select('status')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('id', milestoneId)
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
  const updateMilestoneStatus = async (milestoneId: string, newStatus: MilestoneStatus, comment?: string) => {};
    if (!user) return false;
    try {}
      // Get the current status;
      const { data: milestoneData, error: fetchError } = await supabase'
        .from('project_milestones')'
        .select('status')'
        .eq('id', milestoneId)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        .eq('id', milestoneId)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


        .single(),

      
      const previousStatus = milestoneData && milestoneData.status;
      

      const previousStatus = milestoneData.status,
      


<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })
<<<<<<< HEAD

=======
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



      // Update the milestone status;
      const { error } = await supabase'
        .from('project_milestones')
        .update({ status: newStatus })
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
      
        .eq('id', milestoneId);
      if (error) throw error;
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment);
      console && console.error("Error updating milestone status:", err);
      toast && toast.error("Failed to update status: " + err && err.message),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return false
=======
        .eq('id', milestoneId)      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })      return false
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      // Update the milestone status
      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })

      return false
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } finally {
      setIsSubmitting(false)
    }

=======
        .eq('id', milestoneId)      const { error } = await supabase
        .from('project_milestones')
        .update({ status: newStatus })      return false
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } finally {
=======
      return false;
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsSubmitting(false)
    }
  }
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {}
    if (!user) return false,
    
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      return false
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

=======
    try {
=======
    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsSubmitting(true)
      const { error } = await supabase'
        .from('project_milestones')
        .update(data)
      return false;
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
;
      toast.success ("Milestone updated successfully");
;
      return true;
    } catch (err: any) {"
      console.error ("Error updating milestone:", err);"
      toast.error ("Failed to update milestone: " + err.message),
      return false;
<<<<<<< HEAD
    } finally {
      setIsSubmitting (false);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      toast.success(`Milestone status changed to ${newStatus}`);
      return true
    } catch (err: any) {
      console.error("Error updating milestone status:", err);
      toast.error("Failed to update status: " + err.message)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },
  
  const updateMilestone = async (milestoneId: string, data: Partial<Milestone>) => {}
    if (!user) return false,
    

<<<<<<< HEAD
<<<<<<< HEAD
=======

    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .update(data)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return {
=======
    try {}
      setIsSubmitting(true)
      const { error } = await supabase'
        .from('project_milestones')
        .update(data)

  return {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    updateMilestoneStatus;
    update_milestone;
    is_submitting;

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
<<<<<<< HEAD


        .eq('id', milestoneId),

      
<<<<<<< HEAD
=======
"
      toast && toast.success("Milestone updated successfully");
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      toast && toast.success("Milestone updated successfully");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
      return true;
    } catch (err: any) {"
      console && console.error("Error updating milestone:", err);"
      toast && toast.error("Failed to update milestone: " + err && err.message),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return false
=======
=======

      return false;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
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

;

  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    updateMilestoneStatus;
    update_milestone;
    is_submitting;
      setIsSubmitting(false)

  }
}

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
};
;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      return false
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return false
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
