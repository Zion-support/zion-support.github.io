

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';


export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
export const useDeleteMilestone = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false;
export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
export const useDeleteMilestone = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false,
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .delete()
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq('id', milestoneId);
      if (error) throw error;
      toast.success("Milestone deleted successfully");
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error deleting milestone:", err);
      toast.error("Failed to delete milestone: " + err.message)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
    deleteMilestone;
    isSubmitting
  }
}
=======

      
      toast && toast.success("Milestone deleted successfully");
      
      return true
    } catch (err: any) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console && console.error("Error deleting milestone:", err);
      toast && toast.error("Failed to delete milestone: " + err && err.message),

      return false
=======
export const useDeleteMilestone = () =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const delete_milestone = async (milestone_id: string) => {
    // Check condition
if (return false) {
  $2
}
    try {
      setIsSubmitting (true),
      const { error } = await supabase;
        .from ('project_milestones');
        .delete ();
        .eq ('id', milestone_id);
;
      // Check condition
if (throw error) {
  $2
}
      toast.success ("Milestone deleted successfully");
;
      return true;
    } catch (err: any) {
      console.error ("Error deleting milestone:", err);
      toast.error ("Failed to delete milestone: " + err.message),
      return false;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsSubmitting (false);
    }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq('id', milestoneId),
      
      if (error) throw error,
      
      toast.success("Milestone deleted successfully"),
      
      return true
    } catch (err: any) {
      console.error("Error deleting milestone:", err),
      toast.error("Failed to delete milestone: " + err.message),
      return false
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
    }
  };
  
  return {
    deleteMilestone;
    isSubmitting
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
export const useDeleteMilestone = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const deleteMilestone = async (milestoneId: string) => {;
    if (!user) return false,;
    try {;
      setIsSubmitting(true),;
      const { error } = await supabase;
        .from('project_milestones');
        .delete();
        .eq('id', milestoneId),;
      if (error) throw error,;
      toast.success("Milestone deleted successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error deleting milestone:", err),;
      toast.error("Failed to delete milestone: " + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    deleteMilestone;
    isSubmitting;

      
      toast && toast.success("Milestone deleted successfully");
      
      return true
    } catch (err: any) {
      console && console.error("Error deleting milestone:", err);
      toast && toast.error("Failed to delete milestone: " + err && err.message),

      return false
export const useDeleteMilestone = () =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const delete_milestone = async (milestone_id: string) => {
    // Check condition
if (return false) {
  $2
}
    try {
      setIsSubmitting (true),
      const { error } = await supabase;
        .from ('project_milestones');
        .delete ();
        .eq ('id', milestone_id);
;
      // Check condition
if (throw error) {
  $2
}
      toast.success ("Milestone deleted successfully");
;
      return true;
    } catch (err: any) {
      console.error ("Error deleting milestone:", err);
      toast.error ("Failed to delete milestone: " + err.message),
      return false;
    } finally {
      setIsSubmitting (false);
    }


        .eq('id', milestoneId),
      
      if (error) throw error,
      
      toast.success("Milestone deleted successfully"),
      
      return true
    } catch (err: any) {
      console.error("Error deleting milestone:", err),
      toast.error("Failed to delete milestone: " + err.message),
      return false
    } finally {
      setIsSubmitting(false)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  }
;
  return {
    delete_milestone;
    is_submitting;
  }
}
;
<<<<<<< HEAD
  }
};
  }
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
