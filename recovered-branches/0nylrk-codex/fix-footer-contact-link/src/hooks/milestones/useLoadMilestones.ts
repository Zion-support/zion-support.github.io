<<<<<<< HEAD
=======
<<<<<<< HEAD

import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Milestone, MilestoneActivity } from './types';
export const useLoadMilestones = (projectId?: string) => {
  const { user } = useAuth($2);
  const [milestones, setMilestones] = useState<Milestone[]>([]),
  const [activities, setActivities] = useState<Record<string, MilestoneActivity[]>>({}),
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),

  const fetchMilestones = async () => {
    if (!projectId) {
      setIsLoading($2);
      return
    }
    try {
      setIsLoading($2);
      const { data: milestonesData, error: milestonesError} = await supabase
        .from('project_milestones')
        .select('*')
        .eq('project_id', projectId)
        .order($2);
      if (milestonesError) throw milestonesError,
      
      setMilestones($2);
      // Fetch activities for each milestone
      const activitiesMap: Record<string, MilestoneActivity[]> = {},
      
      for (const milestone of milestonesData) {
        const { data: activitiesData, error: activitiesError} = await supabase
          .from('milestone_activities')
          .select(`
            *;
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('milestone_id', milestone.id)
          .order($2);
        if (activitiesError) throw activitiesError,
        
        activitiesMap[milestone.id] = activitiesData || []
      }
      
      setActivities($2);
      setError(null)
    } catch (err: any) {
      console.error($2);
      setError($2);
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneActivity} from './types';
<<<<<<< HEAD

        activitiesMap[milestone && milestone.id] = activitiesData || []

=======
<<<<<<< HEAD

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {Milestone, MilestoneActivity} from './types';
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        activitiesMap[milestone && milestone.id] = activitiesData || []

<<<<<<< HEAD
        activitiesMap[milestone && milestone.id] = activitiesData || []
        activitiesMap[milestone.id] = activitiesData |[]
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }

      setActivities(activitiesMap),
      setError(null)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    } catch (err: any) {
<<<<<<< HEAD
      console && console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err && err.message),
      toast && toast.error("Failed to fetch milestones")
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      console && console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err && err.message),
      toast && toast.error("Failed to fetch milestones")

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

      return;
    }
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        
        activitiesMap[milestone.id] = activitiesData || []

<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return;
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          .eq('milestone_id', milestone.id);
          .order('created_at', { ascending: false }),;
        if (activitiesError) throw activitiesError,;
        activitiesMap[milestone.id] = activitiesData || [];
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
      
      setActivities(activitiesMap),
      setError(null)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    } catch (err: any) {
      console.error("Error fetching milestones:", err),
      setError("Failed to fetch milestones: " + err.message),
>>>>>>> merged-prs-20250907-203621
      toast.error("Failed to fetch milestones")
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },
=======
  };
>>>>>>> merged-prs-20250907-203621

  // Fetch milestones when component mounts or projectId changes
  useEffect(() => {
    if (projectId) {
      fetchMilestones()
    }
<<<<<<< HEAD
  }, [projectId]),

  return {
    milestones,
    activities,
    isLoading,
    error,
    refetch: fetchMilestones}
},
=======
  }, [projectId]);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      }
      set_activities (activities_map);
      set_error (null);
    } catch (err: any) {"
      console.error ("Error fetching milestones:", err);"
      set_error ("Failed to fetch milestones: " + err.message),"
      toast.error ("Failed to fetch milestones");
    } finally {}
;
  // Fetch milestones when component mounts or project_id changes;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      fetch_milestones ();
    }
  return {}

    milestones;
    activities;
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
<<<<<<< HEAD

    milestones;
    activities;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    milestones;
    activities;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    is_loading;
    error;

    refetch: fetch_milestones;
      setIsLoading(false)

<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
  }
=======

  }
}
;

<<<<<<< HEAD
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
  }
};
  }
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
