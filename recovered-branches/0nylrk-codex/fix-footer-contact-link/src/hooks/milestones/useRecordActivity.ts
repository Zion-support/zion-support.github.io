
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {MilestoneActivity} from './types';
<<<<<<< HEAD
=======
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
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export const useRecordActivity = () => {
  const { user } = useAuth();
  const recordMilestoneActivity = async (
    milestoneId: string
    action: string
    previousStatus: string | null
    newStatus: string;
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({
          milestone_id: milestoneId;
          user_id: user && user.id;
          action;
          previous_status: previousStatus;
          new_status: newStatus
          comment})
        .select(`
          *;
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .single();
      if (error) throw error;
      return data
    } catch (err: any) {
      console && console.error("Error recording activity:", err);
      return null
<<<<<<< HEAD
    }
  }
  return {
    recordMilestoneActivity
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
  };
  
  return {
    recordMilestoneActivity
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
}

