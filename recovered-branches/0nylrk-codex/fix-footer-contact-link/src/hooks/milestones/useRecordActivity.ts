

import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {;
  const { user } = useAuth();

=======
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
  const { user } = useAuth(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  const recordMilestoneActivity = async (
    milestoneId: string,
    action: string, 
    previousStatus: string | null, 
    newStatus: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
        .insert({

          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,

          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)

        .single(),
      
      if (error) throw error,
      

      return data
    } catch (err: any) {
      console.error("Error recording activity:", err),
      return null

    }
  };
  
  return {
    recordMilestoneActivity

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

  };
  return {;
    recordMilestoneActivity;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

};

