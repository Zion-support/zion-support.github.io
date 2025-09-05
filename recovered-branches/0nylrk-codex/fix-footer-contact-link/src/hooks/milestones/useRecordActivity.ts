

export const _useRecordActivity = () => {_const { user} = useAuth();
  
  const _recordMilestoneActivity = async (_milestoneId: string, _action: string, _previousStatus: string | null, _newStatus: string, _comment?: string) => {_if (!user) return null;
    
    try {
      const { data, _error} = await supabase
        .from('milestone_activities')
        .insert({_milestone_id: milestoneId, _user_id: user.id, _action, _previous_status: previousStatus, _new_status: newStatus, _comment})
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .single();
      
      if (error) throw error;
      
      return data;
    } catch (err: unknown) {_return null;}
  };
  
  return {_recordMilestoneActivity};
};
