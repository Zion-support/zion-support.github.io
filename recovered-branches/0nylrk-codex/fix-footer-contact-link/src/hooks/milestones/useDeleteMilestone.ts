
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export const useDeleteMilestone = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false;
    
    try {
      setIsSubmitting(true);
      
      const { error } = await supabase
        .from('project_milestones')
        .delete()
        .eq('id', milestoneId);
      
      if (error) throw error;
      
      toast.success(&quot;Milestone deleted successfully&quot;);
      
      return true;
    } catch (err: any) {
      console.error(&quot;Error deleting milestone:&quot;, err);
      toast.error(&quot;Failed to delete milestone: &quot; + err.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    deleteMilestone,
    isSubmitting
  };
};
