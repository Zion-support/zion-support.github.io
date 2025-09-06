
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {;
  const { user } = useAuth();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export const useRecordActivity = () => {;
  const { user } = useAuth();

>>>>>>> main
=======
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
  const { user } = useAuth(),
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======

>>>>>>> main
  
  const recordMilestoneActivity = async (
    milestoneId: string,
    action: string, 
    previousStatus: string | null, 
    newStatus: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD
          milestone_id: milestoneId;
          user_id: user.id;
          action;
          previous_status: previousStatus;
          new_status: newStatus
=======
=======


>>>>>>> main
          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
<<<<<<< HEAD
        .single();
      if (error) throw error;
=======
=======


          comment})
        .select(`
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)


>>>>>>> main
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return data
    } catch (err: any) {
      console.error("Error recording activity:", err),
      return null
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


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

=======

>>>>>>> main
    }
  };
  
  return {
    recordMilestoneActivity
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  };
  return {;
    recordMilestoneActivity;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
<<<<<<< HEAD
  return {
    recordMilestoneActivity
  }
}

=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  };
  return {;
    recordMilestoneActivity;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
