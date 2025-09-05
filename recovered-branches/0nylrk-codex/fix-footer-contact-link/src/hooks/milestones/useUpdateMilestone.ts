

export const _useUpdateMilestone = () => {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {_recordMilestoneActivity} = useRecordActivity();
  
  const _updateMilestoneStatus = async (_milestoneId: string, _newStatus: MilestoneStatus, _comment?: string) => {_if (!user) return false;
    
    try {
      setIsSubmitting(true);
      
      // Get the current status
      const { data: milestoneData, _error: fetchError} = await supabase
        .from('project_milestones')
        .select('status')
        .eq('id', milestoneId)
        .single();
      
      if (fetchError) throw fetchError;
      if (!milestoneData) throw new Error("Milestone not found");
      
      const _previousStatus = milestoneData.status;
      
      // Update the milestone status
      const {_error} = await supabase
        .from('project_milestones')
        .update({_status: newStatus})
        .eq('id', milestoneId);
      
      if (error) throw error;
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'status_changed', previousStatus, newStatus, comment);
      
      toast.success(`Milestone status changed to ${_newStatus}`);
      
      return true;
    } catch (err: unknown) {_toast.error("Failed to update status: " + err.message);
      return false;} finally {_setIsSubmitting(false);}
  };
  
  const _updateMilestone = async (_milestoneId: string, _data: Partial<Milestone>) => {_if (!user) return false;
    
    try {
      setIsSubmitting(true);
      
      const { error} = await supabase
        .from('project_milestones')
        .update(data)
        .eq('id', milestoneId);
      
      if (error) throw error;
      
      // Create activity record
      await recordMilestoneActivity(milestoneId, 'updated', null, 'updated', 'Milestone details updated');
      
      toast.success("Milestone updated successfully");
      
      return true;
    } catch (err: unknown) {_toast.error("Failed to update milestone: " + err.message);
      return false;} finally {_setIsSubmitting(false);}
  };
  
  return {_updateMilestoneStatus, _updateMilestone, _isSubmitting};
};
