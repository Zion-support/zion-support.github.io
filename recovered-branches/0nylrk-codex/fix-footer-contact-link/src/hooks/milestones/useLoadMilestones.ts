
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
            *,
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
      toast.error("Failed to fetch milestones")
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
    refetch: fetchMilestones}
},
