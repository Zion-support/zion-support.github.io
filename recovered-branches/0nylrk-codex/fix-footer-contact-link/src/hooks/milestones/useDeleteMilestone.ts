
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
    
    try {
      setIsSubmitting(true),
      
      const { error } = await supabase
        .from('project_milestones')
        .delete()
        .eq('id', milestoneId),
      
      if (error) throw error,
      
<<<<<<< HEAD
      toast.success("Milestone deleted successfully"),
=======
      toast.success(&quot;Milestone deleted successfully&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
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
=======
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
export const useDeleteMilestone = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const deleteMilestone = async (milestoneId: string) => {;
    if (!user) return false,;
    try {;
      setIsSubmitting(true),;
      const { error } = await supabase;
        .from('project_milestones');
        .delete();
        .eq('id', milestoneId),;
      if (error) throw error,;
      toast.success("Milestone deleted successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error deleting milestone:", err),;
      toast.error("Failed to delete milestone: " + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  return {;
    deleteMilestone;
    isSubmitting;
  }
};