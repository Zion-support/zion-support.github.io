
<<<<<<< HEAD
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { toast } from 'sonner',;
;
export const useDeleteMilestone = () => {;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  const deleteMilestone = async (milestoneId:string) => {;
    if (!user) return false,;
    ;
    try {;
      setIsSubmitting(true),;
      ;
      const { error } = await supabase;
        .from('project_milestones');
        .delete();
        .eq('id', milestoneId),;
      ;
      if (error) throw error,;
      ;
      toast.success("Milestone deleted successfully"),;
      ;
      return true,;
    } catch (err:any) {;
      console.error("Error deleting milestone:", err),;
      toast.error("Failed to delete milestone:" + err.message),;
      return false;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  return {;
    deleteMilestone,;
    isSubmitting;
  },;
},;
=======
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
      
      const { error} = await supabase
        .from('project_milestones')
        .delete()
        .eq('id', milestoneId),
      
      if (error) throw error,
      
      toast.success("Milestone deleted successfully"),      
      return true
    } catch (err: any) {
      console.error("Error deleting milestone:", err),
      toast.error("Failed to delete milestone: " + err.message),
      return false    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    deleteMilestone,
    isSubmitting
  }
},
      return true;
    } catch (err: unknown) {_toast.error("Failed to delete milestone: " + err.message);
      return false;} finally {_setIsSubmitting(false);}
  };
  
  return {_deleteMilestone, _isSubmitting};
};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
