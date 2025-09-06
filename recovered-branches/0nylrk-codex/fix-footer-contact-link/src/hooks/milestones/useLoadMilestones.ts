
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneActivity} from './types';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {Milestone, MilestoneActivity} from './types';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const useLoadMilestones = (projectId?: string) => {;
  const { user } = useAuth();
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [activities, setActivities] = useState<Record<string, MilestoneActivity[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchMilestones = async () => {
    if (!projectId) {
      setIsLoading(false);
      return
    }
    try {
      setIsLoading(true);
      const { data: milestonesData, error: milestonesError } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('project_id', projectId)
        .order('due_date', { ascending: true });
      if (milestonesError) throw milestonesError;
      setMilestones(milestonesData);
      // Fetch activities for each milestone
      const activitiesMap: Record<string, MilestoneActivity[]> = {}
      for (const milestone of milestonesData) {
        const { data: activitiesData, error: activitiesError } = await supabase
          .from('milestone_activities')
          .select(`
            *;
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('milestone_id', milestone.id)
          .order('created_at', { ascending: false });
        if (activitiesError) throw activitiesError;
<<<<<<< HEAD
<<<<<<< HEAD

=======

        
        activitiesMap[milestone && milestone.id] = activitiesData || []

========
        activitiesMap[milestone && milestone.id] = activitiesData || []
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        activitiesMap[milestone.id] = activitiesData |[]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      setActivities(activitiesMap);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts

      console && console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err && err.message),
      toast && toast.error("Failed to fetch milestones")

=======
========
      console && console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err && err.message),
      toast && toast.error("Failed to fetch milestones")
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts
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
=======

        
        activitiesMap[milestone.id] = activitiesData || []

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err.message)
      toast.error("Failed to fetch milestones")
    } finally {
      setIsLoading(false)
    }
  }
  // Fetch milestones when component mounts or projectId changes
  useEffect(() => {
    if (projectId) {
      fetchMilestones()
    }
  }, [projectId]);
  return {
    milestones;
    activities;
    isLoading;
    error;
    refetch: fetchMilestones
  }
}

        
        activitiesMap[milestone.id] = activitiesData || []
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
      return;
    }
;
    try {;
      setIsLoading(true),;
      const { data: milestonesData, error: milestonesError } = await supabase;
        .from('project_milestones');
        .select('*');
        .eq('project_id', projectId);
        .order('due_date', { ascending: true }),;
      if (milestonesError) throw milestonesError,;
      setMilestones(milestonesData),;
      // Fetch activities for each milestone;
      const activitiesMap: Record<string MilestoneActivity[]> = {},;
      for (const milestone of milestonesData) {;
        const { data: activitiesData, error: activitiesError } = await supabase;
          .from('milestone_activities');
          .select(`;
            *,;
            created_by_profile:profiles!user_id(display_name, avatar_url);
          `);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          .eq('milestone_id', milestone.id);
          .order('created_at', { ascending: false }),;
        if (activitiesError) throw activitiesError,;
        activitiesMap[milestone.id] = activitiesData || [];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
      
      setActivities(activitiesMap),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching milestones:", err),
      setError("Failed to fetch milestones: " + err.message),
      toast.error("Failed to fetch milestones")
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  };

  // Fetch milestones when component mounts or projectId changes
  useEffect(() => {
    if (projectId) {
      fetchMilestones()
    }
  }, [projectId]);

  return {
    milestones;
    activities;
    isLoading;
    error;
    refetch: fetchMilestones
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

  }
};
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
      set_activities (activities_map);
      set_error (null);
    } catch (err: any) {
      console.error ("Error fetching milestones:", err);
      set_error ("Failed to fetch milestones: " + err.message),
      toast.error ("Failed to fetch milestones");
    } finally {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts

========
      setIsLoading (false);
    }
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts
  return {
    milestones;
    activities;
    is_loading;
    error;
    refetch: fetch_milestones;
=======
      setIsLoading(false)


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts

;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
;
=======

import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
import { Milestone, MilestoneActivity } from './types',;
;
export const useLoadMilestones = (projectId?:string) => {;
  const { user } = useAuth(),;
  const [milestones, setMilestones] = useState<Milestone[]>([]),;
  const [activities, setActivities] = useState<Record<string MilestoneActivity[]>>({}),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
;
  const fetchMilestones = async () => {;
    if (!projectId) {;
      setIsLoading(false),;
      return,;
    }
    ;
    try {;
      setIsLoading(true),;
      ;
      const { data:milestonesData, error:milestonesError } = await supabase;
        .from('project_milestones');
        .select('*');
        .eq('project_id', projectId);
        .order('due_date', { ascending:true }),;
      ;
      if (milestonesError) throw milestonesError,;
      ;
      setMilestones(milestonesData),;
      ;
      // Fetch activities for each milestone;
      const activitiesMap:Record<string MilestoneActivity[]> = {},;
      ;
      for (const milestone of milestonesData) {;
        const { data:activitiesData, error:activitiesError } = await supabase;
          .from('milestone_activities');
          .select(`;
            *,;
            created_by_profile:profiles!user_id(display_name, avatar_url);
          `);
          .eq('milestone_id', milestone.id);
          .order('created_at', { ascending:false }),;
          ;
        if (activitiesError) throw activitiesError,;
        ;
        activitiesMap[milestone.id] = activitiesData || [],;
      }
      ;
      setActivities(activitiesMap),;
      setError(null),;
    } catch (err:any) {;
      console.error("Error fetching milestones:", err),;
      setError("Failed to fetch milestones:" + err.message),;
      toast.error("Failed to fetch milestones");
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  // Fetch milestones when component mounts or projectId changes;
  useEffect(() => {;
    if (projectId) {;
      fetchMilestones(),;
    }
  }, [projectId]),;
;
  return {;
    milestones,;
    activities,;
    isLoading,;
    error,;
    refetch:fetchMilestones;
  },;
},; const {
  data: milestonesData, error: milestonesError 
}= await supabase .from ('project milestones') .select ('*') .eq ('project id', projectId) if (milestonesError) throw milestonesError;
setMilestones (milestonesData);
//Fetch activities for each milestone const activitiesMap: Record<string MilestoneActivity[]> = {
  
};
for (const milestone of milestonesData) {
  const {
  data: activitiesData, error: activitiesError 
}= await supabase .from ('milestone activities') .select (`*;
created by profile:profiles!user id (display name, avatar url) `) .eq ('milestone id', milestone.id) if (activitiesError) throw activitiesError;
activitiesMap[milestone.id] = activitiesData || [] 
}
}finally {
  setIsLoading (false) 
}
};
// Fetch milestones when component mounts or projectId changes useEffect ( () => {
  if (projectId) {
  fetchMilestones () 
}
}, [projectId]);
return {
  milestones;
activities;
isLoading;
error;
refetch: fetchMilestones 
}
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/milestones/useLoadMilestones.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
