

=======
export const useRecordActivity = () => {;
  const { user } = useAuth();

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {;
  const { user } = useAuth();
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
  const { user } = useAuth(),
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const recordMilestoneActivity = async (
    milestoneId: string,
    action: string, 
    previousStatus: string | null, 
    newStatus: string,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          milestone_id: milestoneId;
          user_id: user.id;
          action;
          previous_status: previousStatus;
          new_status: newStatus
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          comment})
        .select(`
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)

<<<<<<< HEAD
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .single();
      if (error) throw error;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return data
    } catch (err: any) {
      console && console.error("Error recording activity:", err);
      return null

<<<<<<< HEAD
=======
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

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return data
    } catch (err: any) {
      console.error("Error recording activity:", err),
      return null
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  };
  
  return {
    recordMilestoneActivity
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

    }

  }

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    }

  };
  return {;
    recordMilestoneActivity;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
