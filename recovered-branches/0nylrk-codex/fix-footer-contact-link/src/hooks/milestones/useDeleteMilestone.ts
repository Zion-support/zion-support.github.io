
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
export const useDeleteMilestone = () => {
  const { user } = useAuth($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const deleteMilestone = $2;
    try {
      setIsSubmitting($2);
      const { error } = await supabase
        .from('project_milestones')
        .delete()
        .eq($2);
      if (error) throw error,
      
      toast.success($2);
      return true
    } catch (err: any) {
      console.error($2);
      toast.error($2);
      return false
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    deleteMilestone,
    isSubmitting
  }
},
