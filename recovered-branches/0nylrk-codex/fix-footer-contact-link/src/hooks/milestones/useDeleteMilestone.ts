

export const _useDeleteMilestone = () => {_const { user} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const _deleteMilestone = async (_milestoneId: string) => {_if (!user) return false;
    
    try {
      setIsSubmitting(true);
      
      const { error} = await supabase
        .from('project_milestones')
        .delete()
        .eq('id', milestoneId);
      
      if (error) throw error;
      
      toast.success("Milestone deleted successfully");
      
      return true;
    } catch (err: unknown) {_toast.error("Failed to delete milestone: " + err.message);
      return false;} finally {_setIsSubmitting(false);}
  };
  
  return {_deleteMilestone, _isSubmitting};
};
