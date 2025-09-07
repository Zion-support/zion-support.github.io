

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';

export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
export const useDeleteMilestone = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),


  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false,
    
    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .delete()
.eq('id', milestoneId);
      if (error) throw error;
      toast.success("Milestone deleted successfully");
      return true
    } catch (err: any) {
      console.error("Error deleting milestone:", err);
      toast.error("Failed to delete milestone: " + err.message)
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
pr-12325
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

export const useDeleteMilestone = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .delete()
      
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
      return false    } finally {
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

  }
;
  return {
    delete_milestone;
    is_submitting;
  }
}

};

import {useState} from 'react';''
import {supabase} from '@/integrations / supabase / client';''
import {use_auth} from '@/hooks / use_auth';''
import {toast} from 'sonner';'
export const useDeleteMilestone = () => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
'
import { useState } from 'react',''
import { supabase } from '@/integrations/supabase/client',''
import { useAuth } from '@/hooks/useAuth',''
import { toast } from 'sonner','

export const useDeleteMilestone = () => {
  return $3;}
}
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),


  
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false,
    
    try {
  // TODO: Implement
}
      setIsSubmitting(true)
      const { error } = await supabase;
        .from('project_milestones')
        .delete()
      return false;
export const useDeleteMilestone = () =>: any {
  // TODO: Implement
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const delete_milestone = async (milestone_id: string) => {
    // Check condition;
if (return false) {
  $2;
    } finally {
  // TODO: Implement
      setIsSubmitting (false);
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const deleteMilestone = async (milestoneId: string) => {;
    if (!user) return false,;
    try {;
      setIsSubmitting(true),;
        .from('project_milestones');
        .delete();
        .eq('id', milestoneId),;
      if (error) throw error,;
      toast.success("Milestone deleted successfully"),;"
      return true;
    } catch (err: any) {;"
      console.error("Error deleting milestone:", err),;""
      toast.error("Failed to delete milestone: " + err.message),;"
    } finally {;
      setIsSubmitting(false);
  },;
  return {;
    deleteMilestone;
    isSubmitting;

      "
      toast && toast.success("Milestone deleted successfully");"
    } catch (err: any) {"
      console && console.error("Error deleting milestone:", err);""
      toast && toast.error("Failed to delete milestone: " + err && err.message),"
  // TODO: Implement
    // Check condition;
  // TODO: Implement
      setIsSubmitting (true),
      const { error } = await supabase;"
        .from ('project_milestones');
        .delete ();
        .eq ('id', milestone_id);
      // Check condition;
if (throw error) {
      toast.success ("Milestone deleted successfully");"
      console.error ("Error deleting milestone:", err);""
      toast.error ("Failed to delete milestone: " + err.message),"
  // TODO: Implement

        .eq('id', milestoneId),
      if (error) throw error,
      
      toast.success("Milestone deleted successfully"),"
      console.error("Error deleting milestone:", err),""
      toast.error("Failed to delete milestone: " + err.message),"
  // TODO: Implement
      setIsSubmitting(false)


  return {
  // TODO: Implement
    delete_milestone;
    is_submitting;
};
pr-12325
}
    delete_milestone;
    is_submitting;
  }
}
;
  }
};
  }
};
  }
};
"

