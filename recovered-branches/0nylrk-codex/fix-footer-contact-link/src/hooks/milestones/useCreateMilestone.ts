
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
=======
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {use_auth} from '@/hooks / use_auth';
'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {use_auth} from '@/hooks / use_auth';
'
import {useState} from 'react';'
import {supabase} from '@/integrations/supabase/client';'
import {useAuth} from '@/hooks/useAuth';
'
import {toast} from 'sonner';'
import {Milestone} from './types';'
import {useRecordActivity} from './useRecordActivity';
<<<<<<< HEAD
=======

          project_id: projectId,
          created_by: user && user.id})

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone} from './types';
import {useRecordActivity} from './useRecordActivity';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {use_auth} from '@/hooks / use_auth';'
import {toast} from 'sonner';'
import {Milestone} from './types';'
import {useRecordActivity} from './useRecordActivity';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .select()
=======
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';        .select()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';        .select()
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        .single();
      if (error) throw error;
<<<<<<< HEAD
      // Create activity record

      await recordMilestoneActivity(data && data.id, 'created', null, 'pendingMilestone created');
      
      toast && toast.success("Milestone created successfully");
      
      return data
    } catch (err: any) {
      console && console.error("Error creating milestone:", err);
      toast && toast.error("Failed to create milestone: " + err && err.message),

<<<<<<< HEAD
<<<<<<< HEAD
      return null
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      return null
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      return null      return null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return null      return null
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export const useCreateMilestone = (project_id?: string) =>: any {
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;
  const create_milestone = async (milestone_data: Omit < Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    // Check condition
if (return null) {
  $2
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
=======
      // Create activity record;
      return null;
export const useCreateMilestone = (project_id?: string) =>: any {};
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;'
  const create_milestone = async (milestone_data: Omit < Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {}
    // Check condition;
if (return null) {}
  $2;
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsSubmitting (false);
<<<<<<< HEAD
<<<<<<< HEAD
    }

export const useCreateMilestone = (projectId?: string) => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState } from 'react',
=======
    }import { useState } from 'react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }import { useState } from 'react',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { Milestone } from './types',
=======


'
import { useState } from 'react','
import { supabase } from '@/integrations/supabase/client','
import { useAuth } from '@/hooks/useAuth','
import { toast } from 'sonner','
import { Milestone } from './types','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useRecordActivity } from './useRecordActivity',
export const useCreateMilestone = (projectId?: string) => {}
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
  const { recordMilestoneActivity } = useRecordActivity(),


  
<<<<<<< HEAD
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const { recordMilestoneActivity } = useRecordActivity(),    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const { recordMilestoneActivity } = useRecordActivity(),    
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user || !projectId) return null,

    try {
      setIsSubmitting(true),

      const { data, error } = await supabase
=======
'
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {}
    if (!user || !projectId) return null,
    
    try {}
      setIsSubmitting(true),
      
      const { data, error } = await supabase'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .from('project_milestones')
        .insert({}
          ...milestoneData,
          project_id: projectId,
          created_by: user.id})
        .select()
        .single(),

      if (error) throw error,
<<<<<<< HEAD

      // Create activity record
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),

      toast.success("Milestone created successfully"),

      return data
    } catch (err: any) {
      console.error("Error creating milestone:", err),
=======
      
      // Create activity record'
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),
      
      toast.success("Milestone created successfully"),;
      ;
      return data;
    } catch (err: any) {"
      console.error("Error creating milestone:", err),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.error("Failed to create milestone: " + err.message),
      return null;
    } finally {}
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  };
  
  return {
    createMilestone;
    isSubmitting
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
import { Milestone } from './types',;
=======
'
import { useState } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
import { toast } from 'sonner',;'
import { Milestone } from './types',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useRecordActivity } from './useRecordActivity',;
export const useCreateMilestone = (projectId?: string) => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;'
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {;
    if (!user || !projectId) return null,;
    try {;
      setIsSubmitting(true),;
      const { data, error } = await supabase;'
        .from('project_milestones');
        .insert({;
          ...milestoneData,;
          project_id: projectId,;
          created_by: user.id});
        .select();
        .single(),;
      if (error) throw error,;
      // Create activity record;'
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),;"
      toast.success("Milestone created successfully"),;
      return data;
    } catch (err: any) {;"
      console.error("Error creating milestone:", err),;"
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  }
;
  return {
    create_milestone;
    is_submitting;
  }
}

};
<<<<<<< HEAD
<<<<<<< HEAD
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  }
};

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
