

export const _useCreateMilestone = (_projectId?: string) => {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {_recordMilestoneActivity} = useRecordActivity();
  
  const _createMilestone = async (_milestoneData: Omit<Milestone, _'id' | 'created_at' | 'updated_at' | 'created_by'>) => {_if (!user || !projectId) return null;
    
    try {
      setIsSubmitting(true);
      
      const { data, _error} = await supabase
        .from('project_milestones')
        .insert({_...milestoneData, _project_id: projectId, _created_by: user.id})
        .select()
        .single();
      
      if (error) throw error;
      
      // Create activity record
      await recordMilestoneActivity(data.id, 'created', null, 'pending', 'Milestone created');
      
      toast.success("Milestone created successfully");
      
      return data;
    } catch (err: unknown) {_toast.error("Failed to create milestone: " + err.message);
      return null;} finally {_setIsSubmitting(false);}
  };
  
  return {_createMilestone, _isSubmitting};
};
