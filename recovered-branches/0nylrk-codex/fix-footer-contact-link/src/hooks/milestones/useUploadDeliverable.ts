

export const _useUploadDeliverable = () => {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {_recordMilestoneActivity} = useRecordActivity();
  
  const _uploadDeliverable = async (_milestoneId: string, _projectId: string, _file: File) => {_if (!user || !projectId) return null;
    
    try {
      setIsSubmitting(true);
      
      // Get the current milestone
      const { data: milestone, _error: fetchError} = await supabase
        .from('project_milestones')
        .select('*')
        .eq('id', milestoneId)
        .single();
      
      if (fetchError) throw fetchError;
      if (!milestone) throw new Error("Milestone not found");
      
      // For this example, instead of actually uploading files (which would require storage setup),
      // we'll just store the file metadata in the deliverables JSONB field
      const _newDeliverable = {_id: window.crypto.randomUUID(), _filename: file.name, _size: file.size, _type: file.type, _added_at: new Date().toISOString(), _added_by: user.id};
      
      const _deliverables = [...(milestone.deliverables || []), newDeliverable];
      
      const {_error} = await supabase
        .from('project_milestones')
        .update({_deliverables})
        .eq('id', milestoneId);
        
      if (error) throw error;
      
      // Create activity record
      await recordMilestoneActivity(
        milestoneId, 
        'deliverable_added', 
        milestone.status, 
        milestone.status, 
        `Deliverable added: ${_file.name}`
      );
      
      toast.success("Deliverable added successfully");
      
      return newDeliverable;
    } catch (err: unknown) {_toast.error("Failed to upload deliverable: " + err.message);
      return null;} finally {_setIsSubmitting(false);}
  };
  
  return {_uploadDeliverable, _isSubmitting};
};
