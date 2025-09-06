

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
import {toast} from 'sonner';
import {useRecordActivity} from './useRecordActivity';
export const useUploadDeliverable = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { recordMilestoneActivity } = useRecordActivity();
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user |!projectId) return null;
    try {
      setIsSubmitting(true)
      // Get the current milestone
      const { data: milestone, error: fetchError } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)
        .single();
      if (fetchError) throw fetchError;
      if (!milestone) throw new Error("Milestone not found");
      // For this example, instead of actually uploading files (which would require storage setup);
      // we'll just store the file metadata in the deliverables JSONB field
      const newDeliverable = {
<<<<<<< HEAD
        id: crypto.randomUUID();
        filename: file.name;
        size: file.size;
        type: file.type;
        added_at: new Date().toISOString()
        added_by: user.id
      }
      const deliverables = [...(milestone.deliverables |[]), newDeliverable];
=======
        id: crypto && crypto.randomUUID();
        filename: file && file.name;
        size: file && file.size;
        type: file && file.type;
        added_at: new Date().toISOString(),
        added_by: user && user.id
      };
      
      const deliverables = [...(milestone && milestone.deliverables || []), newDeliverable];
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const { error } = await supabase
        .from('project_milestones')
        .update({ deliverables })
        .eq('id', milestoneId);
      if (error) throw error;
      // Create activity record
      await recordMilestoneActivity(
<<<<<<< HEAD
        milestoneId
        'deliverable_added'
        milestone.status
        milestone.status
        `Deliverable added: ${file.name}`
      );
      toast.success("Deliverable added successfully");
      return newDeliverable
    } catch (err: any) {
      console.error("Error uploading deliverable:", err);
      toast.error("Failed to upload deliverable: " + err.message)
=======
        milestoneId, 
        'deliverable_added', 
        milestone && milestone.status, 
        milestone && milestone.status, 
        `Deliverable added: ${file && file.name}`
      );
      
      toast && toast.success("Deliverable added successfully");
      
      return newDeliverable
    } catch (err: any) {
      console && console.error("Error uploading deliverable:", err);
      toast && toast.error("Failed to upload deliverable: " + err && err.message),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return null
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
    uploadDeliverable;
    isSubmitting
  }
}

