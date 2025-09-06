
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
export const useRecordActivity = () => {;
  const { user } = useAuth();

=======
=======

export const useRecordActivity = () => {;
  const { user } = useAuth();

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {
  const { user } = useAuth();
  const recordMilestoneActivity = async (
    milestoneId: string
    action: string
    previousStatus: string | null
    newStatus: string;
import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {;
  const { user } = useAuth();
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
  const recordMilestoneActivity = async (
    milestoneId: string,
    action: string,
    previousStatus: string | null,
    newStatus: string,
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
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
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
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }

<<<<<<< HEAD
  }
=======

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
    }
  };
  
  return {
    recordMilestoneActivity
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
import { supabase } from '@/integrations/supabase/client',;
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
      const { data, error } = await supabase;
        .from('milestone_activities');
        .insert({;
          milestone_id: milestoneId,;
          user_id: user.id,;
          action,;
          previous_status: previousStatus,;
          new_status: newStatus,;
          comment});
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .single(),;
      if (error) throw error,;
      return data;
    } catch (err: any) {;
      console.error("Error recording activity:", err),;
      return null;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

  };
  return {;
    recordMilestoneActivity;

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }

};

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  return {;
    recordMilestoneActivity;

  }

};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
