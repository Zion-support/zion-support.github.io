
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
export const useDeleteMilestone = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
  const deleteMilestone = async (milestoneId: string) => {
    if (!user) return false,
=======

export const _useDeleteMilestone = () => {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const _deleteMilestone = async (_milestoneId: string) => {_if (!user) return false;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    try {
      setIsSubmitting(true),
      
      const { error} = await supabase
        .from('project_milestones')
        .delete()
        .eq('id', milestoneId),
      
      if (error) throw error,
      
<<<<<<< HEAD
      toast.success("Milestone deleted successfully"),
=======
      toast.success(&quot;Milestone deleted successfully&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
<<<<<<< HEAD
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error deleting milestone:", err),
      toast.error("Failed to delete milestone: " + err.message),
      return false
=======
      console.error(&quot;Error deleting milestone:&quot;, err);
      toast.error(&quot;Failed to delete milestone: &quot; + err.message);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    deleteMilestone,
    isSubmitting
  }
},
=======
      return true;
    } catch (err: unknown) {_toast.error("Failed to delete milestone: " + err.message);
      return false;} finally {_setIsSubmitting(false);}
  };
  
  return {_deleteMilestone, _isSubmitting};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
