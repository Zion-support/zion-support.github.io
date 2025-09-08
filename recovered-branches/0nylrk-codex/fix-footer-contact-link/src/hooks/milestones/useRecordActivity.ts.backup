
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    comment?: string
  ) => {
    if (!user) return null
    try {
      const { data, error } = await supabase
        .from('milestone_activities')
<<<<<<< HEAD

        .insert({
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


          milestone_id: milestoneId,
          user_id: user.id,
          action,
          previous_status: previousStatus,
          new_status: newStatus,


<<<<<<< HEAD
=======
        .single(),
      
      if (error) throw error,
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

    }
  }
;
  return {
    recordMilestoneActivity;
  }
}
;





=======


      return data
    } catch (err: any) {
      console.error("Error recording activity:", err),
      return null
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    }

  };

<<<<<<< HEAD
  
  return {
    recordMilestoneActivity
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

      const { data, error } = await supabase;'
        .from('milestone_activities');

=======
      }
        .from('milestone_activities');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


    }

  };
  return {;
    recordMilestoneActivity;

<<<<<<< HEAD
=======

  }
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

  }

};





=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
