<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {toast} from 'sonner';
import {Milestone} from './types';
import {useRecordActivity} from './useRecordActivity';

          project_id: projectId,
          created_by: user && user.id})

<<<<<<< HEAD
=======
export const useCreateMilestone = (projectId?: string) => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const createMilestone = async (milestoneData: Omit<Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user |!projectId) return null;
    try {
      setIsSubmitting(true);
      const { data, error } = await supabase
        .from('project_milestones')
        .insert({
          ...milestoneData;
          project_id: projectId
          created_by: user.id})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone} from './types';
import {useRecordActivity} from './useRecordActivity';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        .select()
        .single();
      if (error) throw error;
      // Create activity record
<<<<<<< HEAD
<<<<<<< HEAD

      await recordMilestoneActivity(data && data.id, 'created', null, 'pendingMilestone created');
      
      toast && toast.success("Milestone created successfully");
      
      return data
    } catch (err: any) {
      console && console.error("Error creating milestone:", err);
      toast && toast.error("Failed to create milestone: " + err && err.message),

      return null
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      return null
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const useCreateMilestone = (project_id?: string) =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;
  const create_milestone = async (milestone_data: Omit < Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    // Check condition
if (return null) {
  $2
    } finally {
      setIsSubmitting (false);
    }
<<<<<<< HEAD


<<<<<<< HEAD
=======
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created');
      toast.success("Milestone created successfully");
      return data
    } catch (err: any) {
      console.error("Error creating milestone:", err);
      toast.error("Failed to create milestone: " + err.message)
      return null
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
    createMilestone;
    isSubmitting
  }
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const useCreateMilestone = (projectId?: string) => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
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
import { Milestone } from './types',
import { useRecordActivity } from './useRecordActivity',
export const useCreateMilestone = (projectId?: string) => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),
<<<<<<< HEAD
<<<<<<< HEAD

  
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user || !projectId) return null,
    
    try {
      setIsSubmitting(true),
      
      const { data, error } = await supabase
        .from('project_milestones')
        .insert({
          ...milestoneData,
          project_id: projectId,
          created_by: user.id})
        .select()
        .single(),
      
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),
      
      toast.success("Milestone created successfully"),
      
      return data
    } catch (err: any) {
      console.error("Error creating milestone:", err),
      toast.error("Failed to create milestone: " + err.message),
      return null
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    }
  };
  
  return {
    createMilestone;
    isSubmitting
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
import { Milestone } from './types',;
import { useRecordActivity } from './useRecordActivity',;
export const useCreateMilestone = (projectId?: string) => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {;
    if (!user || !projectId) return null,;
    try {;
      setIsSubmitting(true),;
      const { data, error } = await supabase;
        .from('project_milestones');
        .insert({;
          ...milestoneData,;
          project_id: projectId,;
          created_by: user.id});
        .select();
        .single(),;
      if (error) throw error,;
      // Create activity record;
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),;
      toast.success("Milestone created successfully"),;
      return data;
    } catch (err: any) {;
      console.error("Error creating milestone:", err),;
      toast.error("Failed to create milestone: " + err.message),;
      return null;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    createMilestone;
    isSubmitting;
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
;
  return {
    create_milestone;
    is_submitting;
  }
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  }
};
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
