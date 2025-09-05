import { useState, useEffect, useCallback } from 'react'''
import { supabase } from '@/integrations/supabase/client'''
export default function Page() {; try {; setIsLoading(true); const { data: milestonesData,error: milestonesError } = await supabase; .from('project_milestones'); .select('*'); .eq('project_id',projectId); .order('due_date',{ ascending: true }
}); if(milestonesError) throw milestonesError; setMilestones(milestonesData || []); const activitiesMap: Record<string,MilestoneActivity[]> = {}; if(milestonesData) {}; const { data: activitiesData,error: activitiesError } = await supabase; .from('milestone_activities'); .select(`; *,created_by_profile:profiles!user_id(display_name,avatar_url); `); .eq('milestone_id',milestone.id); .order('created_at''`)
</string>)'