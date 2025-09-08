
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneActivity} from './types';
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        activitiesMap[milestone && milestone.id] = activitiesData || []


<<<<<<< HEAD

=======
        activitiesMap[milestone && milestone.id] = activitiesData || []

        activitiesMap[milestone && milestone.id] = activitiesData || []
        activitiesMap[milestone.id] = activitiesData |[]
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }

      setActivities(activitiesMap),
      setError(null)

<<<<<<< HEAD
    } catch (err: any) {

=======

      console && console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err && err.message),
      toast && toast.error("Failed to fetch milestones")


export const useLoadMilestones = (project_id?: string) =>: any {

  const { user } = use_auth ();
  const [milestones, set_milestones] = useState < Milestone[]>([]);
  const [activities, set_activities] = useState < Record < string, MilestoneActivity[]>>({});
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;

import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;

import { Milestone, MilestoneActivity } from './types',;
export const useLoadMilestones = (projectId?: string) => {;
  const { user } = useAuth(),;
  const [milestones, setMilestones] = useState<Milestone[]>([]),;
  const [activities, setActivities] = useState<Record<string MilestoneActivity[]>>({}),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const fetchMilestones = async () => {;
    if (!projectId) {;
      setIsLoading(false),;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    try {}
      setIsLoading (true);
;
      const { data: milestones_data, error: milestones_error } = await supabase;'
        .from ('project_milestones');'
        .select ('*');'
        .eq ('project_id', project_id);'
        .order ('due_date', { ascending: true });
;
      // Check condition;
if (throw milestones_error) {}
  $2;
}
      set_milestones (milestones_data);
;
      // Fetch activities for each milestone;
      const activities_map: Record < string, MilestoneActivity[]> = {}
;
      for (const milestone of milestones_data) {}
        const { data: activities_data, error: activities_error } = await supabase;'
          .from ('milestone_activities');
          .select (`;
            *;

          `);

<<<<<<< HEAD


          .eq('milestone_id', milestone.id);
          .order('created_at', { ascending: false }),;
        if (activitiesError) throw activitiesError,;
        activitiesMap[milestone.id] = activitiesData || [];

    } catch (err: any) {
      console.error("Error fetching milestones:", err),
      setError("Failed to fetch milestones: " + err.message),

      toast.error("Failed to fetch milestones")
    } finally {
      setIsLoading(false)
    }

  };


  // Fetch milestones when component mounts or projectId changes
  useEffect(() => {
    if (projectId) {
      fetchMilestones()
    }

  }, [projectId]);
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


    milestones;
    activities;
<<<<<<< HEAD


=======
    is_loading;
    error;

;
      setActivities(activitiesMap),;
      setError(null);
    } catch (err: any) {;"
      console.error("Error fetching milestones:", err),;"
      setError("Failed to fetch milestones: " + err.message),;"

      toast.error("Failed to fetch milestones");
    } finally {;
      setIsLoading(false);
    }
  },;
  // Fetch milestones when component mounts or projectId changes;
  useEffect(() => {;
    if (projectId) {;
      fetchMilestones();
    }
  }, [projectId]),;
  return {;
    milestones,;
    activities,;
    isLoading,;
    error;
    refetch: fetchMilestones;

;
  // Fetch milestones when component mounts or project_id changes;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;

}
      fetch_milestones ();
    }
  }, [project_id]);
;

    milestones;
    activities;

    milestones;
    activities;
    isLoading;
    error;
    refetch: fetchMilestones
;
      setActivities(activitiesMap),;
      setError(null);
    } catch (err: any) {;
      console.error("Error fetching milestones:", err),;
      setError("Failed to fetch milestones: " + err.message),;
      toast.error("Failed to fetch milestones");
    } finally {;
      setIsLoading(false);
    }
  },;
  // Fetch milestones when component mounts or projectId changes;
  useEffect(() => {;
    if (projectId) {;
      fetchMilestones();
    }
  }, [projectId]),;
  return {;
    milestones,;
    activities,;
    isLoading,;
    error;
    refetch: fetchMilestones;



      }
      set_activities (activities_map);
      set_error (null);
    } catch (err: any) {
      console.error ("Error fetching milestones:", err);
      set_error ("Failed to fetch milestones: " + err.message),
      toast.error ("Failed to fetch milestones");
    } finally {
      setIsLoading (false);
    }
  }
;
  // Fetch milestones when component mounts or project_id changes;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetch_milestones ();
    }
  }, [project_id]);
;
  return {
    milestones;
    activities;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    is_loading;
    error;

    refetch: fetch_milestones;
      setIsLoading(false)

<<<<<<< HEAD


  }
}
;



=======

  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
