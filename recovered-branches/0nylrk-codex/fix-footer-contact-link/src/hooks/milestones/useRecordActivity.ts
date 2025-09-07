

<<<<<<< HEAD
import { useAuth  } from '@/hooks/useAuth';
import { supabase  } from '@/integrations/supabase/client';
import { MilestoneActivity } from './types';
export const useRecordActivity = null;

=======
export const useRecordActivity = () => {;
  const { user } = useAuth();import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { MilestoneActivity } from './types',;
export const useRecordActivity = () => {
  const { user } = useAuth();

import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {MilestoneActivity} from './types';
export const useRecordActivity = () => {
  const recordMilestoneActivity = async (
    milestoneId: string;,
  action: string;
    previousStatus: string | null;,
  newStatus: string;
import {MilestoneActivity} from './types';')
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { MilestoneActivity } from './types',;
  const { user } = useAuth(),

  
pr-12325
  const recordMilestoneActivity = async (

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

    comment?: string;)
  ) => {
    if (!user) return null;
    try {
  // TODO: Implement
}
      const { data, error } = await supabase;
        .from('milestone_activities')
        .insert({


          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,

)
          comment})
        .select(`
          *;)
          created_by_profile:profiles!user_id(display_name, avatar_url)`;
        `)


          comment})`;
          *,)
          comment})

        .select(`
          *,)
          created_by_profile:profiles!user_id(display_name, avatar_url)

        `)
        .single();
      if (error) throw error;
        .single(),
      
      if (error) throw error,
      


      return data;
    } catch (err: any) {
      console && console.error("Error recording activity:", err);"
      return null;"
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
export const useRecordActivity = () =>: any {
  // TODO: Implement
  const { user } = use_auth ();
;
    milestone_id: string,
    previous_status: string | null,
    new_status: string;)
    comment?: string) => {
    // Check condition;
if (return null, ) {
  $2;
  // TODO: Implement
        .from ('milestone_activities');
        .insert ({
          milestone_id: milestone_id;,
  user_id: user.id;
          action;
          previous_status: previous_status;,
  new_status: new_status,)
          comment});`;
        .select (`;
          created_by_profile:profiles ! user_id (display_name, avatar_url);`;
        `);
        .single ();
      // Check condition;
if (throw error) {
      console.error ("Error recording activity:", err);"
      return null;
  return {
  // TODO: Implement
    recordMilestoneActivity;


  };
  
  // TODO: Implement
    recordMilestoneActivity;"
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { MilestoneActivity } from './types',;
pr-12325
import { useAuth } from '@/hooks/useAuth',;''
import { supabase } from '@/integrations/supabase/client',;''
import { MilestoneActivity } from './types',;'
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
    comment?: string;)
  ) => {;

    if (!user) return null,;
    try {;
pr-12325
        .from('milestone_activities');
      const { data, error } = await supabase;'
        .from('milestone_activities');'

        .insert({;
          milestone_id: milestoneId,;
          user_id: user.id,;
          action,;

          previous_status: previousStatus,;
          new_status: newStatus,;
          comment});
        .select(`;
          *,;
          new_status: newStatus,;)

          comment});
        .select(`;
          *,;)
          created_by_profile:profiles!user_id(display_name, avatar_url);
        `);
        .single(),;
      if (error) throw error,;
      return data;
    } catch (err: any) {;
      console.error("Error recording activity:", err),;
      return null;
  }

}
};
  return {;
    recordMilestoneActivity;
  }
  return {
    recordMilestoneActivity
  }
}

    } catch (err: any) {;'
      console.error("Error recording activity:", err),;"
      return null;
    }

  };
  return {;
    recordMilestoneActivity;

  }

};
          new_status: newStatus,;)
        .select(`;
          *,;)
          created_by_profile:profiles!user_id(display_name, avatar_url);`;
        .single(),;
      if (error) throw error,;
    } catch (err: any) {;
      console.error("Error recording activity:", err),;"

  return {;



  // TODO: Implement



"`;
pr-12325
};
>>>>>>> origin/main
