export const useRecordActivity = () => {;
  const { user } = useAuth();import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { MilestoneActivity } from './types',
export const useRecordActivity = () => {
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
        .insert({          comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)    }
  };

  
  return {
    recordMilestoneActivity
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
