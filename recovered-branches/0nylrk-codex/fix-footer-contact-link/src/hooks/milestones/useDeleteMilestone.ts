

<<<<<<< HEAD
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';


export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
export const useDeleteMilestone = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
<<<<<<< HEAD

  
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false,
    
    try {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .delete()
<<<<<<< HEAD
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
    } finally {
      setIsSubmitting (false);
    }
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      
      toast && toast.success("Milestone deleted successfully");
      
      return true
    } catch (err: any) {
      console && console.error("Error deleting milestone:", err);
      toast && toast.error("Failed to delete milestone: " + err && err.message),

<<<<<<< HEAD
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


=======
      return false    } finally {
      setIsSubmitting (false);
    }

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
;
  return {
    delete_milestone;
    is_submitting;
  }
}
<<<<<<< HEAD
;
  }
};
  }
};
  }
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
