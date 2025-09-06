<<<<<<< HEAD
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

import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { MilestoneActivity } from './types',;
;
export const useRecordActivity = () => {;
  const { user } = useAuth(),;
  ;
  const recordMilestoneActivity = async (;
    milestoneId:string,;
    action:string, ;
    previousStatus:string | null, ;
    newStatus:string,;
    comment?:string;
  ) => {;
    if (!user) return null,;
    ;
    try {;
      const { data, error } = await supabase;
        .from('milestone_activities');
        .insert({;
          milestone_id:milestoneId,;
          user_id:user.id,;
          action,;
          previous_status:previousStatus,;
          new_status:newStatus,;
          comment});
        .select(`;
          *,;
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .single(),;
      ;
      if (error) throw error,;
      ;
      return data,;
    } catch (err:any) {;
      console.error("Error recording activity:", err),;
      return null,;
    }
  },;
  ;
  return {;
    recordMilestoneActivity;
  },;
},; try {
  const {
  data, error 
}= await supabase .from ('milestone activities') .insert ({
  milestone id: milestoneId, user id: user.id, action, previous status: previousStatus, new status: newStatus, comment 
}) .select (`*;
created by profile: profiles!user id (display name, avatar url) `) .single ();
if (error) throw error;
}
};
return {
  recordMilestoneActivity 
}
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
