

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {use_auth} from '@/hooks / use_auth';
import {toast} from 'sonner';
import {Milestone, MilestoneActivity} from './types';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {Milestone, MilestoneActivity} from './types';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



import {useState, useEffect} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {use_auth} from '@/hooks / use_auth';'
import {toast} from 'sonner';'
import {Milestone, MilestoneActivity} from './types';



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        
        activitiesMap[milestone && milestone.id] = activitiesData || []
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




      }

      setActivities(activitiesMap),
      setError(null)
<<<<<<< HEAD
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching milestones:", err),
      setError("Failed to fetch milestones: " + err.message),
      toast.error("Failed to fetch milestones")
    } finally {
      setIsLoading(false)

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
};
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        
        activitiesMap[milestone && milestone.id] = activitiesData || []

      }
      setActivities(activitiesMap);
      setError(null)
    } catch (err: any) {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console && console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err && err.message),
      toast && toast.error("Failed to fetch milestones")

<<<<<<< HEAD
<<<<<<< HEAD
        
        activitiesMap[milestone.id] = activitiesData || []
=======
<<<<<<< HEAD
=======
=======
      console && console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err && err.message),
      toast && toast.error("Failed to fetch milestones")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const useLoadMilestones = (project_id?: string) =>: any {
=======
    } catch (err: any) {}
      console && console.error("Error fetching milestones:", err);"
      setError("Failed to fetch milestones: " + err && err.message),"
      toast && toast.error("Failed to fetch milestones")


export const useLoadMilestones = (project_id?: string) =>: any {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export const useLoadMilestones = (project_id?: string) =>: any {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = use_auth ();
  const [milestones, set_milestones] = useState < Milestone[]>([]);
  const [activities, set_activities] = useState < Record < string, MilestoneActivity[]>>({});
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
<<<<<<< HEAD
  const fetch_milestones = async () => {}
    // Check condition;
if ( {) {}
  $2;
}
      setIsLoading (false);


        
        activitiesMap[milestone.id] = activitiesData || []


<<<<<<< HEAD
        
        activitiesMap[milestone.id] = activitiesData || []
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const fetch_milestones = async () => {
    // Check condition
if ( {) {
  $2
}
      setIsLoading (false);

        
        activitiesMap[milestone.id] = activitiesData || []

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
=======

'
import { useState, useEffect } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
import { useAuth } from '@/hooks/useAuth',;'
import { toast } from 'sonner',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            created_by_profile:profiles ! user_id (display_name, avatar_url);
<<<<<<< HEAD
<<<<<<< HEAD
          `);

          .eq('milestone_id', milestone.id);
          .order('created_at', { ascending: false }),;
        if (activitiesError) throw activitiesError,;
        activitiesMap[milestone.id] = activitiesData || [];
=======
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          `);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            created_by_profile:profiles ! user_id (display_name, avatar_url);
          `);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
      
      setActivities(activitiesMap),
      setError(null)
<<<<<<< HEAD
    } catch (err: any) {"
      console.error("Error fetching milestones:", err),"
      setError("Failed to fetch milestones: " + err.message),"
      toast.error("Failed to fetch milestones")
    } finally {}
      setIsLoading(false)
    }
  };
<<<<<<< HEAD
=======


'
          .eq ('milestone_id', milestone.id);'
          .order ('created_at', { ascending: false });
;
        // Check condition;
if (throw activities_error) {}
  $2;
}
        activities_map[milestone.id] = activities_data || [];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
    } catch (err: any) {
      console.error("Error fetching milestones:", err),
      setError("Failed to fetch milestones: " + err.message),
      toast.error("Failed to fetch milestones")
    } finally {
      setIsLoading(false)
    }
  };



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
    } finally {

;
  // Fetch milestones when component mounts or project_id changes;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetch_milestones ();
    }
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    milestones;
    activities;
    is_loading;
    error;
<<<<<<< HEAD
<<<<<<< HEAD
    refetch: fetchMilestones
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
      setActivities(activitiesMap),;
      setError(null);
    } catch (err: any) {;"
      console.error("Error fetching milestones:", err),;"
      setError("Failed to fetch milestones: " + err.message),;"
=======
;
      setActivities(activitiesMap),;
      setError(null);
    } catch (err: any) {;
      console.error("Error fetching milestones:", err),;
      setError("Failed to fetch milestones: " + err.message),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
}

;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;
  // Fetch milestones when component mounts or project_id changes;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
=======



      }
      set_activities (activities_map);
      set_error (null);
    } catch (err: any) {
      console.error ("Error fetching milestones:", err);
      set_error ("Failed to fetch milestones: " + err.message),
      toast.error ("Failed to fetch milestones");
    } finally {

;
  // Fetch milestones when component mounts or project_id changes;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      fetch_milestones ();
    }
  }, [project_id]);
;

<<<<<<< HEAD
  return {}
=======
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    milestones;
    activities;
    is_loading;
    error;
<<<<<<< HEAD


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    refetch: fetch_milestones;
      setIsLoading(false)


  }
<<<<<<< HEAD



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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            created_by_profile:profiles ! user_id (display_name, avatar_url);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            created_by_profile:profiles ! user_id (display_name, avatar_url);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
