
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
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

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone} from './types';
import {useRecordActivity} from './useRecordActivity';

'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {use_auth} from '@/hooks / use_auth';'
import {toast} from 'sonner';'
import {Milestone} from './types';'
import {useRecordActivity} from './useRecordActivity';

        .select()
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';        .select()

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';        .select()
        .single();
      if (error) throw error;
// Create activity record

      await recordMilestoneActivity(data && data.id, 'created', null, 'pendingMilestone created');

      toast && toast.success("Milestone created successfully");

      return data
    } catch (err: any) {
      console && console.error("Error creating milestone:", err);
      toast && toast.error("Failed to create milestone: " + err && err.message),

      return null
      return null      return null
      return null      return null
      return null
      return null
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
      setIsSubmitting (false);
    }
export const useCreateMilestone = (projectId?: string) => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
import { useState } from 'react',
    }import { useState } from 'react',
    }import { useState } from 'react',

import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { Milestone } from './types',

'
import { useState } from 'react','
import { supabase } from '@/integrations/supabase/client','
import { useAuth } from '@/hooks/useAuth','
import { toast } from 'sonner','
import { Milestone } from './types','
import { useRecordActivity } from './useRecordActivity',
export const useCreateMilestone = (projectId?: string) => {}
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),

  const { recordMilestoneActivity } = useRecordActivity(),    
  const { recordMilestoneActivity } = useRecordActivity(),    
  const { recordMilestoneActivity } = useRecordActivity(),

  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user || !projectId) return null,

    try {
      setIsSubmitting(true),

      const { data, error } = await supabase
'
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {}
    if (!user || !projectId) return null,

    try {}
      setIsSubmitting(true),

      const { data, error } = await supabase'
        .from('project_milestones')
        .insert({}
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
      return null;
    } finally {}
      setIsSubmitting(false)
    }
  };

  return {
    createMilestone;
    isSubmitting



import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
import { Milestone } from './types',;
'
import { useState } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
import { toast } from 'sonner',;'
import { Milestone } from './types',;'
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
  }
};

  }
;
  return {
    create_milestone;
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
}
};

  }
};

'"

