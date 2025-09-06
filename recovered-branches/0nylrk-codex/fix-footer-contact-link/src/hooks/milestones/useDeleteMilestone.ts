import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';


export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
export const useDeleteMilestone = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .delete()
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
  }
};
