<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
export const useRecordActivity = () => {;
  const { user } = useAuth();
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


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
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
<<<<<<< HEAD
  const { user } = useAuth(),
<<<<<<< HEAD

  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
import { useAuth } from '@/hooks/useAuth','
import { supabase } from '@/integrations/supabase/client','
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const recordMilestoneActivity = async (
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export const useRecordActivity = () => {;
  const { user } = useAuth();
export const useRecordActivity = () => {;
<<<<<<< HEAD
  const { user } = useAuth();
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export const useRecordActivity = () => {;
  const { user } = useAuth();import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const { user } = useAuth(),

  
  const recordMilestoneActivity = async (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    milestoneId: string,
    action: string,
    previousStatus: string | null,
    newStatus: string,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .insert({
<<<<<<< HEAD

<<<<<<< HEAD

=======
          milestone_id: milestoneId;
          user_id: user.id;
          action;
          previous_status: previousStatus;
          new_status: newStatus
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

;
;
    comment?: string;
  ) => {}
    if (!user) return null;
    try {}
      const { data, error } = await supabase'
        .from('milestone_activities')
        .insert({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        .insert({


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)`
        `)
<<<<<<< HEAD
<<<<<<< HEAD
        .single();
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return data
    } catch (err: any) {
      console && console.error("Error recording activity:", err);
      return null
<<<<<<< HEAD
=======

=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
=======
'
import {use_auth} from '@/hooks / use_auth';'
import {supabase} from '@/integrations / supabase / client';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
<<<<<<< HEAD
=======
  }
;
  return {}
    recordMilestoneActivity;
  }
}
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
  }
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
      return data
    } catch (err: any) {
      console.error("Error recording activity:", err),
      return null
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
=======
        .insert({          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .insert({          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          comment})
        .select(`
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)


          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .single();
      if (error) throw error;
        .single(),
      
      if (error) throw error,
      


      return data
    } catch (err: any) {
      console && console.error("Error recording activity:", err);
      return null

import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
import {MilestoneActivity} from './types';
export const useRecordActivity = () =>: any {
  const { user } = use_auth ();
;
  const recordMilestoneActivity = async (
    milestone_id: string,
    action: string,
    previous_status: string | null,
    new_status: string;
    comment?: string) => {
    // Check condition
if (return null, ) {
  $2
}
    try {
      const { data, error } = await supabase;
        .from ('milestone_activities');
        .insert ({
          milestone_id: milestone_id;
          user_id: user.id;
          action;
          previous_status: previous_status;
          new_status: new_status,
          comment});
        .select (`;
          *;
          created_by_profile:profiles ! user_id (display_name, avatar_url);
        `);
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      return data;
    } catch (err: any) {
      console.error ("Error recording activity:", err);
      return null;
    }
  }
;
  return {
    recordMilestoneActivity;
  }
}
;


    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  };
  
<<<<<<< HEAD
  return {
    recordMilestoneActivity
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

};
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useAuth } from '@/hooks/useAuth',;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { useAuth } from '@/hooks/useAuth',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { supabase } from '@/integrations/supabase/client',;
=======
  return {}
    recordMilestoneActivity;
'
import { useAuth } from '@/hooks/useAuth',;'
import { supabase } from '@/integrations/supabase/client',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { MilestoneActivity } from './types',;
export const useRecordActivity = () => {;
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
      const { data, error } = await supabase;'
        .from('milestone_activities');
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
<<<<<<< HEAD
=======

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

  };
  return {;
    recordMilestoneActivity;

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }

};
<<<<<<< HEAD
<<<<<<< HEAD
=======


    }
  };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

    }
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
