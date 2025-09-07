<<<<<<< HEAD
import {useAuth} from '@/hooks/useAuth';'
import {supabase} from '@/integrations/supabase/client';'
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {};
  const { user } = useAuth();
  const recordMilestoneActivity = async (
    milestoneId: string;
    action: string;
    previousStatus: string | null;
    newStatus: string;'
import {useAuth} from '@/hooks/useAuth';'
import {supabase} from '@/integrations/supabase/client';'
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {;
  const { user } = useAuth();

  const recordMilestoneActivity = async (

export const useRecordActivity = () => {;
  const { user } = useAuth();
export const useRecordActivity = () => {;

    milestoneId: string,
    action: string,
    previousStatus: string | null,
    newStatus: string,

    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')

          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,

        .single(),
      
      if (error) throw error,

import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';

import {MilestoneActivity} from './types';
export const useRecordActivity = () =>: any {};
  const { user } = use_auth ();
;
  const recordMilestoneActivity = async (
    milestone_id: string,
    action: string,
    previous_status: string | null,
    new_status: string;
    comment?: string) => {}
    // Check condition;
if (return null, ) {}
  $2;
}
    try {}
      const { data, error } = await supabase;'
        .from ('milestone_activities');
        .insert ({}
          milestone_id: milestone_id;
          user_id: user.id;
          action;
          previous_status: previous_status;
          new_status: new_status,
          comment});`
        .select (`;
          *;
          created_by_profile:profiles ! user_id (display_name, avatar_url);`
        `);
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}
      return data;
    } catch (err: any) {}
      console.error ("Error recording activity:", err);
      return null;

    }

    }

  };

import { useAuth } from '@/hooks/useAuth',;

import { supabase } from '@/integrations/supabase/client',;

import { MilestoneActivity } from './types',;
export const useRecordActivity = () => {;
=======
<<<<<<< HEAD

import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { MilestoneActivity } from './types';
export const useRecordActivity = () => {
  const { user } = useAuth($2);
  const recordMilestoneActivity = $2;
    action: string, 
    previousStatus: string | null, 
    newStatus: string,
    comment?: string
  ) => {
    if (!user) return null,
    
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({
=======
<<<<<<< HEAD
import {useAuth} from '@/hooks/useAuth';'
import {supabase} from '@/integrations/supabase/client';'
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {};
  const { user } = useAuth();
  const recordMilestoneActivity = async (
    milestoneId: string;
    action: string;
    previousStatus: string | null;
    newStatus: string;'
import {useAuth} from '@/hooks/useAuth';'
import {supabase} from '@/integrations/supabase/client';'
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {;
  const { user } = useAuth();

=======

<<<<<<< HEAD

export const useRecordActivity = () => {;
  const { user } = useAuth();

=======
export const useRecordActivity = () => {;
  const { user } = useAuth();

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
  const { user } = useAuth(),
<<<<<<< HEAD
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const recordMilestoneActivity = async (

export const useRecordActivity = () => {;
  const { user } = useAuth();
export const useRecordActivity = () => {;

    milestoneId: string,
    action: string,
    previousStatus: string | null,
    newStatus: string,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
<<<<<<< HEAD
=======
        .insert({

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          milestone_id: milestoneId;
          user_id: user.id;
          action;
          previous_status: previousStatus;
          new_status: newStatus
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,

<<<<<<< HEAD
        .single(),
      
      if (error) throw error,
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
<<<<<<< HEAD
        .single($2);
      if (error) throw error,
      
      return data
    } catch (err: any) {
      console.error($2);
      return null
    }
  },
  
  return {
    recordMilestoneActivity
  }
},
=======
        .single();
      if (error) throw error;
=======

          comment})
        .select(`
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD
=======


      return data
    } catch (err: any) {
      console && console.error("Error recording activity:", err);
      return null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';

import {MilestoneActivity} from './types';
export const useRecordActivity = () =>: any {};
  const { user } = use_auth ();
;
  const recordMilestoneActivity = async (
    milestone_id: string,
    action: string,
    previous_status: string | null,
    new_status: string;
    comment?: string) => {}
    // Check condition;
if (return null, ) {}
  $2;
}
    try {}
      const { data, error } = await supabase;'
        .from ('milestone_activities');
        .insert ({}
          milestone_id: milestone_id;
          user_id: user.id;
          action;
          previous_status: previous_status;
          new_status: new_status,
          comment});`
        .select (`;
          *;
          created_by_profile:profiles ! user_id (display_name, avatar_url);`
        `);
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}
      return data;
    } catch (err: any) {}
      console.error ("Error recording activity:", err);
      return null;
<<<<<<< HEAD
=======
    }
  }
;
  return {
    recordMilestoneActivity;
  }
}
;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
      return data
    } catch (err: any) {
      console.error("Error recording activity:", err),
      return null
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }

    }

  };
<<<<<<< HEAD

=======
  
  return {
    recordMilestoneActivity
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useAuth } from '@/hooks/useAuth',;

import { supabase } from '@/integrations/supabase/client',;

import { MilestoneActivity } from './types',;
export const useRecordActivity = () => {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { user } = useAuth(),;
  const recordMilestoneActivity = async (;
    milestoneId: string,;
    action: string,;
    previousStatus: string | null,;
    newStatus: string,;
    comment?: string;
  ) => {;
    if (!user) return null,;
    try {;
<<<<<<< HEAD
      }
        .from('milestone_activities');'
=======
      const { data, error } = await supabase;'
        .from('milestone_activities');
>>>>>>> origin/chore/fix-lint-and-merge
        .insert({;
          milestone_id: milestoneId,;
          user_id: user.id,;
          action,;
          previous_status: previousStatus,;
          new_status: newStatus,;
          comment});`
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);`
        `);
        .single(),;
      if (error) throw error,;
      return data;
    } catch (err: any) {;"
      console.error("Error recording activity:", err),;
      return null;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

  };
  return {;
    recordMilestoneActivity;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }

};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return {;
    recordMilestoneActivity;
  }
  return {}
    recordMilestoneActivity;
  }
}

  };
  return {;
    recordMilestoneActivity;

  }

<<<<<<< HEAD
};
=======
};
=======
<<<<<<< HEAD
    }
  };
  return {;
    recordMilestoneActivity;
  }
  return {
    recordMilestoneActivity
  }
}

};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
