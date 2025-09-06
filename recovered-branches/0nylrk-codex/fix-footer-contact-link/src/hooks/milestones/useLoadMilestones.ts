import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneActivity} from './types';
      }
      setActivities(activitiesMap);
      setError(null)
    } catch (err: any) {
=======
export const useLoadMilestones = (project_id?: string) =>: any {
  const { user } = use_auth ();
  const [milestones, set_milestones] = useState < Milestone[]>([]);
  const [activities, set_activities] = useState < Record < string, MilestoneActivity[]>>({});
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  const fetch_milestones = async () => {
    // Check condition
if ( {) {
  $2
}
      setIsLoading (false);
      return;
    }
    try {
      setIsLoading (true);
;
      const { data: milestones_data, error: milestones_error } = await supabase;
        .from ('project_milestones');
        .select ('*');
        .eq ('project_id', project_id);
        .order ('due_date', { ascending: true });
;
      // Check condition
if (throw milestones_error) {
  $2
}
      set_milestones (milestones_data);
;
      // Fetch activities for each milestone;
      const activities_map: Record < string, MilestoneActivity[]> = {}
;
      for (const milestone of milestones_data) {
        const { data: activities_data, error: activities_error } = await supabase;
          .from ('milestone_activities');
          .select (`;
            *;
            created_by_profile:profiles ! user_id (display_name, avatar_url);
          `);
          .eq ('milestone_id', milestone.id);
          .order ('created_at', { ascending: false });
;
        // Check condition
if (throw activities_error) {
  $2
}
        activities_map[milestone.id] = activities_data || [];
      }
      set_activities (activities_map);
      set_error (null);
    } catch (err: any) {
      console.error ("Error fetching milestones:", err);
      set_error ("Failed to fetch milestones: " + err.message),
      toast.error ("Failed to fetch milestones");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }
  }
  return {
    milestones;
    activities;
    is_loading;
    error;
    refetch: fetch_milestones;
  }
}
