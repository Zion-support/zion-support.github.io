

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
export const useDeleteMilestone = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false;
    try {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('project_milestones')
        .delete()
        .eq('id', milestoneId);
      if (error) throw error;
<<<<<<< HEAD
      toast.success("Milestone deleted successfully");
      return true
    } catch (err: any) {
      console.error("Error deleting milestone:", err);
      toast.error("Failed to delete milestone: " + err.message)
=======
      
      toast && toast.success("Milestone deleted successfully");
      
      return true
    } catch (err: any) {
      console && console.error("Error deleting milestone:", err);
      toast && toast.error("Failed to delete milestone: " + err && err.message),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return false
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
    deleteMilestone;
    isSubmitting
  }
}

