<<<<<<< HEAD
import {supabase} from '@/integrations / supabase / client';'
import {use_auth} from '@/hooks / use_auth';        .select()'
        .single();
      if (error) throw error;
      // Create activity record,
await recordMilestoneActivity(data && data.id, 'created', null, 'pendingMilestone created');'
      toast && toast.success('Milestone created successfully');'
return data;
    } catch ('err': any) {
      }
      console && console.error('Error creating 'milestone':', err);'
      toast && toast.error('Failed to create 'milestone': ' + err && err.message),'
return null      return null;
export const useCreateMilestone = (project_id?: string) =>: any {
  }
=======
<<<<<<< HEAD
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

        .select()

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

        .single();
      if (error) throw error;

export const useCreateMilestone = (project_id?: string) =>: any {
>>>>>>> origin/resolved-merge-conflicts
  const { user } = use_auth ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const { recordMilestoneActivity } = useRecordActivity ();
;
<<<<<<< HEAD
  const create_milestone = async ('milestone_data': Omit < Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {'
    // Check condition
}
if (return null) {
  $2
    } finally {
      }
      setIsSubmitting (false);
    }import { useState } from 'react','
import { supabase } from '@/integrations/supabase/client','
import { useAuth } from '@/hooks/useAuth','
import { toast } from 'sonner','
import { Milestone } from './types','
import { useRecordActivity } from './useRecordActivity','
export const useCreateMilestone = (projectId?: string) => {
}
const { user } = useAuth(),;
const [isSubmitting, setIsSubmitting] = useState(false),;
const { recordMilestoneActivity } = useRecordActivity(),;
  const createMilestone = async ('milestoneData': Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {'
    }
=======
  const create_milestone = async (milestone_data: Omit < Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    // Check condition
if (return null) {
  $2

    } finally {

      setIsSubmitting (false);

export const useCreateMilestone = (projectId?: string) => {;
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();

import { useState } from 'react',

import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { Milestone } from './types',

import { useRecordActivity } from './useRecordActivity',
export const useCreateMilestone = (projectId?: string) => {}
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
=======
<<<<<<< HEAD

import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Milestone } from './types';
import { useRecordActivity } from './useRecordActivity';
export const useCreateMilestone = (projectId?: string) => {
  const { user } = useAuth($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { recordMilestoneActivity } = useRecordActivity($2);
  const createMilestone = async (milestoneData: Omit<Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    if (!user || !projectId) return null,

    try {
<<<<<<< HEAD
      }
      setIsSubmitting(true),
const { data, error } = await supabase;
        .from('project_milestones')'
        .insert({
          ...milestoneData
          }
          'project_id': projectId,
          'created_by': user.id})
        .select()
        .single(),
      if (error) throw error,
      // Create activity record,
await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),'
      toast.success('Milestone created successfully'),'
return data;
    } catch ('err': any) {
      }
      console.error('Error creating 'milestone':', err),'
      toast.error('Failed to create 'milestone': ' + err.message),'
return null;
    } finally {
      }
      setIsSubmitting(false)
import { useState } from 'react';'
import { supabase } from '@/integrations/supabase/client';'
import { useAuth } from '@/hooks/useAuth',;'
import { toast } from 'sonner',;'
import { Milestone } from './types',;'
import { useRecordActivity } from './useRecordActivity',;'
export const useCreateMilestone = (projectId?: string) => {;
  }
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;
  const createMilestone = async ('milestoneData': Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {;'
    }
    if (!user || !projectId) return null,;
    try {;
      }
      setIsSubmitting(true),;
      const { data, error } = await supabase;
        .from('project_milestones');'
        .insert({;
          ...milestoneData,;
          }
          'project_id': projectId,;
          'created_by': user.id});
        .select();
        .single(),;
      if (error) throw error,;
      // Create activity record;
      await recordMilestoneActivity(data.id, 'created', null, 'pendingMilestone created'),;'
      toast.success('Milestone created successfully'),;'
      return data;
    } catch ('err': any) {;
      }
      console.error('Error creating 'milestone':', err),;'
      toast.error('Failed to create 'milestone': ' + err.message),;'
      return null;
    } finally {;
      }
=======
<<<<<<< HEAD
      setIsSubmitting(true),

      const { data, error } = await supabase

        .from('project_milestones')
        .insert({}
=======
      setIsSubmitting($2);
      const { data, error } = await supabase
        .from('project_milestones')
        .insert({
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          ...milestoneData,
          project_id: projectId,
          created_by: user.id})
        .select()
<<<<<<< HEAD
        .single(),

      if (error) throw error,

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

import { useRecordActivity } from './useRecordActivity',;
export const useCreateMilestone = (projectId?: string) => {;
<<<<<<< HEAD
  }
  const createMilestone = async ("milestoneData": Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {;'
    }
=======
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;'
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {;
>>>>>>> origin/chore/fix-lint-and-merge
    if (!user || !projectId) return null,;
    try {;
      setIsSubmitting(true),;
<<<<<<< HEAD
        .from('project_milestones');'
=======
      const { data, error } = await supabase;'
        .from('project_milestones');
>>>>>>> origin/chore/fix-lint-and-merge
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
>>>>>>> origin/resolved-merge-conflicts
      setIsSubmitting(false);
    }
  },;
  return {;
<<<<<<< HEAD
    }
=======
>>>>>>> origin/resolved-merge-conflicts
    createMilestone;
    isSubmitting;

  }
<<<<<<< HEAD
;
  return {
    }
=======
};

  }
;
  return {
>>>>>>> origin/resolved-merge-conflicts
    create_milestone;
    is_submitting;
  }
}
<<<<<<< HEAD

};
=======
;
  }
};
  }
};
  }
};
=======
>>>>>>> origin/resolved-merge-conflicts
        .single($2);
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity($2);
      toast.success($2);
      return data
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return null
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    createMilestone,
    isSubmitting
  }
<<<<<<< HEAD
},
=======
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const useCreateMilestone = (projectId?: string) => {;
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
import { Milestone } from './types',

import { useRecordActivity } from './useRecordActivity',
export const useCreateMilestone = (projectId?: string) => {}
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
<<<<<<< HEAD

=======
  const { recordMilestoneActivity } = useRecordActivity(),
<<<<<<< HEAD
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user || !projectId) return null,

    try {
      setIsSubmitting(true),

      const { data, error } = await supabase

        .from('project_milestones')
        .insert({}
          ...milestoneData,
          project_id: projectId,
          created_by: user.id})
        .select()
        .single(),

      if (error) throw error,

      toast.error("Failed to create milestone: " + err.message),
      return null;
    } finally {}
      setIsSubmitting(false)
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
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

import { useRecordActivity } from './useRecordActivity',;
export const useCreateMilestone = (projectId?: string) => {;
<<<<<<< HEAD
  }
  const createMilestone = async ("milestoneData": Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {;'
    }
=======
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { recordMilestoneActivity } = useRecordActivity(),;'
  const createMilestone = async (milestoneData: Omit<Milestone 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {;
>>>>>>> origin/chore/fix-lint-and-merge
    if (!user || !projectId) return null,;
    try {;
      setIsSubmitting(true),;
<<<<<<< HEAD
        .from('project_milestones');'
=======
      const { data, error } = await supabase;'
        .from('project_milestones');
>>>>>>> origin/chore/fix-lint-and-merge
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
;
  return {
    create_milestone;
    is_submitting;
  }
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
};
  }
};
<<<<<<< HEAD
  }
};
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
