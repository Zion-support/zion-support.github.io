
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Milestone } from './types';
import { useRecordActivity } from './useRecordActivity';

export const useCreateMilestone = (projectId?: string) => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  
  const createMilestone = async (milestoneData: Omit<Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {
    if (!user || !projectId) return null;
    
    try {
      setIsSubmitting(true);
      
      const { data, error } = await supabase
        .from('project_milestones')
        .insert({
          ...milestoneData,
          project_id: projectId,
          created_by: user.id})
        .select()
        .single();
      
      if (error) throw error;
      
      // Create activity record
      await recordMilestoneActivity(data.id, 'created', null, 'pending', 'Milestone created');
      
      toast.success(&quot;Milestone created successfully&quot;);
      
      return data;
    } catch (err: any) {
      console.error(&quot;Error creating milestone:&quot;, err);
      toast.error(&quot;Failed to create milestone: &quot; + err.message);
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    createMilestone,
    isSubmitting
  };
};
