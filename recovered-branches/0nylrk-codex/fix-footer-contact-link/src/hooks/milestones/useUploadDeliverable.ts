
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
import { toast } from 'sonner',
import { useRecordActivity } from './useRecordActivity',
export const useUploadDeliverable = () => {
  const { user } = useAuth(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { recordMilestoneActivity } = useRecordActivity(),
  
  const uploadDeliverable = async (milestoneId: string, projectId: string, file: File) => {
    if (!user || !projectId) return null,
=======

export const _useUploadDeliverable = () => {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {_recordMilestoneActivity} = useRecordActivity();
  
  const _uploadDeliverable = async (_milestoneId: string, _projectId: string, _file: File) => {_if (!user || !projectId) return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    try {
      setIsSubmitting(true),
      
      // Get the current milestone
      const { data: milestone, _error: fetchError} = await supabase
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)
        .single(),
      
<<<<<<< HEAD
      if (fetchError) throw fetchError,
      if (!milestone) throw new Error("Milestone not found"),
=======
      if (fetchError) throw fetchError;
      if (!milestone) throw new Error(&quot;Milestone not found&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // For this example, instead of actually uploading files (which would require storage setup),
      // we'll just store the file metadata in the deliverables JSONB field
<<<<<<< HEAD
      const newDeliverable = {
        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        type: file.type,
        added_at: new Date().toISOString(),
        added_by: user.id
      },
      
      const deliverables = [...(milestone.deliverables || []), newDeliverable],
=======
      const _newDeliverable = {_id: window.crypto.randomUUID(), _filename: file.name, _size: file.size, _type: file.type, _added_at: new Date().toISOString(), _added_by: user.id};
      
      const _deliverables = [...(milestone.deliverables || []), newDeliverable];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      const {_error} = await supabase
        .from('project_milestones')
<<<<<<< HEAD
        .update({ deliverables })
        .eq('id', milestoneId),
=======
        .update({_deliverables})
        .eq('id', milestoneId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (error) throw error,
      
      // Create activity record
      await recordMilestoneActivity(
        milestoneId, 
        'deliverable_added', 
        milestone.status, 
        milestone.status, 
<<<<<<< HEAD
        `Deliverable added: ${file.name}`
      ),
=======
        `Deliverable added: ${_file.name}`
      );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
<<<<<<< HEAD
      toast.success("Deliverable added successfully"),
=======
      toast.success(&quot;Deliverable added successfully&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
<<<<<<< HEAD
      return newDeliverable
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error uploading deliverable:", err),
      toast.error("Failed to upload deliverable: " + err.message),
      return null
=======
      console.error(&quot;Error uploading deliverable:&quot;, err);
      toast.error(&quot;Failed to upload deliverable: &quot; + err.message);
      return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    uploadDeliverable,
    isSubmitting
  }
},
=======
      return newDeliverable;
    } catch (err: unknown) {_toast.error("Failed to upload deliverable: " + err.message);
      return null;} finally {_setIsSubmitting(false);}
  };
  
  return {_uploadDeliverable, _isSubmitting};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
