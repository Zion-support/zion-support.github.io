import { useState } from 'react';';
import { supabase } from '@/integrations/supabase/client';';
import { useAuth } from '@/hooks/useAuth';';
import { toast } from 'sonner';';
import { Milestone } from './types';';
import { useRecordActivity } from './useRecordActivity';';';
export const useCreateMilestone = (projectId?: string) => {;
const { user } = useAuth();
const [isSubmitting, setIsSubmitting] = useState(false);
const { recordMilestoneActivity } = useRecordActivity();
const createMilestone = async (milestoneData: Omit<Milestone, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => {'
    if (!user || !projectId) return null
    try {
  // TODO: Add properties
}
  // TODO: Add properties
}
      setIsSubmitting(true);
const { data, error } = await supabase
        .from('project_milestones')'
        .insert({
  // TODO: Add properties
}
  // TODO: Add properties
}
          ...milestoneData,
          project_id: projectId,
          created_by: user.id})
          created_by: user.id,
        })
        .select()
        .single()
      if (error) throw error
      // Create activity record
      await recordMilestoneActivity(data.id, 'created', null, 'pending', 'Milestone created')'
      toast.success("Milestone created successfully")"
      return data
    } catch (err: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      console.error("Error creating milestone:", err)"
      toast.error("Failed to create milestone: " + err.message)"
      return null
    } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
      setIsSubmitting(false)
    }
  }
  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    createMilestone,
    isSubmitting
  }
}