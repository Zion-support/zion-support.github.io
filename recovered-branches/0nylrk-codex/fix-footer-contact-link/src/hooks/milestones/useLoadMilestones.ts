
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { Milestone, MilestoneActivity } from './types',

export const useLoadMilestones = (projectId?: string) => {
  const { user } = useAuth(),
  const [milestones, setMilestones] = useState<Milestone[]>([]),
  const [activities, setActivities] = useState<Record<string MilestoneActivity[]>>({}),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  const fetchMilestones = async () => {
    if (!projectId) {
      setIsLoading(false),
      return
    }
    
    try {
      setIsLoading(true),
=======

export const _useLoadMilestones = (_projectId?: string) => {_const { user} = useAuth();
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [activities, setActivities] = useState<Record<string, MilestoneActivity[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const _fetchMilestones = async () => {_if (!projectId) {
      setIsLoading(false);
      return;}
    
    try {_setIsLoading(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      const { data: milestonesData, _error: milestonesError} = await supabase
        .from('project_milestones')
        .select('*')
        .eq('project_id', projectId)
<<<<<<< HEAD
        .order('due_date', { ascending: true }),
=======
        .order('due_date', {_ascending: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (milestonesError) throw milestonesError,
      
      setMilestones(milestonesData),
      
      // Fetch activities for each milestone
      const activitiesMap: Record<string MilestoneActivity[]> = {},
      
      for (const milestone of milestonesData) {_const { data: activitiesData, _error: activitiesError} = await supabase
          .from('milestone_activities')
          .select(`
            *,
            created_by_profile:profiles!user_id(display_name, avatar_url)
          `)
          .eq('milestone_id', milestone.id)
<<<<<<< HEAD
          .order('created_at', { ascending: false }),
=======
          .order('created_at', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
        if (activitiesError) throw activitiesError,
        
        activitiesMap[milestone.id] = activitiesData || []
      }
      
<<<<<<< HEAD
      setActivities(activitiesMap),
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching milestones:", err),
      setError("Failed to fetch milestones: " + err.message),
      toast.error("Failed to fetch milestones")
=======
      console.error(&quot;Error fetching milestones:&quot;, err);
      setError(&quot;Failed to fetch milestones: &quot; + err.message);
      toast.error(&quot;Failed to fetch milestones&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  // Fetch milestones when component mounts or projectId changes
  useEffect(() => {
    if (projectId) {
      fetchMilestones()
    }
  }, [projectId]),

  return {
    milestones,
    activities,
    isLoading,
    error,
    refetch: fetchMilestones
  }
},
=======
      setActivities(activitiesMap);
      setError(null);
    } catch (err: unknown) {_setError("Failed to fetch milestones: " + err.message);
      toast.error("Failed to fetch milestones");} finally {_setIsLoading(false);}
  };

  // Fetch milestones when component mounts or projectId changes
  useEffect__(() => {_if (projectId) {
      fetchMilestones();}
  }, [projectId]);

  return {_milestones, _activities, _isLoading, _error, _refetch: fetchMilestones};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
