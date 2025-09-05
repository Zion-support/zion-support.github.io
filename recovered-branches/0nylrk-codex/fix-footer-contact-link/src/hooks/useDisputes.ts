

export function useDisputes() {_const { user} = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const _fetchDisputes = async () => {_if (!user) {
      setIsLoading(false);
      return;}

    try {_setIsLoading(true);
      
      const { data, _error: fetchError} = await supabase
        .from("disputes")
        .select(`
          *,
          project:projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .order("created_at", {_ascending: false});
      
      if (fetchError) throw fetchError;
      
      // Transform data if needed
      const _transformedData = data.map(_(dispute: unknown) => ({_...dispute, _client_profile: dispute.client_profile?.client_profile, _talent_profile: dispute.talent_profile?.talent_profile, _project: {
          ...dispute.project, _title: dispute.project?.job?.title || 'Untitled Project'}
      }));
      
      setDisputes(transformedData as Dispute[]);
      setError(null);
    } catch (err: unknown) {_setError("Failed to fetch disputes: " + err.message);
      toast.error("Failed to fetch disputes");} finally {_setIsLoading(false);}
  };

  const _getDisputeById = async (disputeId: string): Promise<Dispute | null> => {_try {
      const { data, _error} = await supabase
        .from("disputes")
        .select(`
          *,
          project:projects(
            scope_summary,
            job_id,
            client_id,
            talent_id,
            job:jobs(title)
          ),
          client_profile:projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),
          talent_profile:projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))
        `)
        .eq("id", disputeId)
        .single();
      
      if (error) throw error;
      
      return {_...data, _client_profile: data.client_profile?.client_profile, _talent_profile: data.talent_profile?.talent_profile, _project: {
          ...data.project, _title: data.project?.job?.title || 'Untitled Project'}
      } as Dispute;
    } catch (err: unknown) {_toast.error("Failed to fetch dispute details");
      return null;}
  };

  const _createDispute = async (disputeData: {_project_id: string;
    milestone_id?: string;
    reason_code: string;
    description: string;}): Promise<Dispute | null> => {_if (!user) {
      toast.error("You must be logged in to create a dispute");
      return null;}

    try {_const { data, _error} = await supabase
        .from("disputes")
        .insert({_...disputeData, _raised_by: user.id})
        .select()
        .single();

      if (error) throw error;
      
      toast.success("Dispute submitted successfully");
      fetchDisputes(); // Refresh the list
      
      return data as Dispute;
    } catch (err: unknown) {_toast.error("Failed to submit dispute");
      return null;}
  };

  const _updateDisputeStatus = async (disputeId: string, status: DisputeStatus): Promise<boolean> => {_try {
      const { error} = await supabase
        .from("disputes")
        .update({_status})
        .eq("id", disputeId);
      
      if (error) throw error;
      
      // Update local state
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId ? {_...dispute, _status} : dispute
        )
      );
      
      toast.success(`Dispute status updated to ${_status}`);
      return true;
    } catch (err: unknown) {_toast.error("Failed to update dispute status");
      return false;}
  };

  const _resolveDispute = async (
    disputeId: string, 
    resolution: {_summary: string; resolution_type: string;}
  ): Promise<boolean> => {_try {
      const { error} = await supabase
        .from("disputes")
        .update({_status: 'resolved', _resolved_at: new Date().toISOString(), _resolution_summary: resolution.summary, _resolution_type: resolution.resolution_type})
        .eq("id", disputeId);
      
      if (error) throw error;
      
      // Update local state
      setDisputes(prevDisputes => 
        prevDisputes.map(dispute => 
          dispute.id === disputeId 
            ? {_...dispute, _status: 'resolved', _resolved_at: new Date().toISOString(), _resolution_summary: resolution.summary, _resolution_type: resolution.resolution_type as any} 
            : dispute
        )
      );
      
      toast.success("Dispute resolved successfully");
      return true;
    } catch (err: unknown) {_toast.error("Failed to resolve dispute");
      return false;}
  };

  const _getDisputeMessages = async (disputeId: string): Promise<DisputeMessage[]> => {_try {
      const { data, _error} = await supabase
        .from("dispute_messages")
        .select(`
          *,
          user_profile:profiles!dispute_messages_user_id_fkey(display_name, avatar_url)
        `)
        .eq("dispute_id", disputeId)
        .order("created_at", {_ascending: true});
      
      if (error) throw error;
      
      return data as DisputeMessage[];
    } catch (err: unknown) {_toast.error("Failed to fetch messages");
      return [];}
  };

  const _addDisputeMessage = async (disputeId: string, message: string, isAdminNote = false): Promise<boolean> => {_if (!user) {
      toast.error("You must be logged in to send a message");
      return false;}

    try {_const { error} = await supabase
        .from("dispute_messages")
        .insert({_dispute_id: disputeId, _user_id: user.id, _message, _is_admin_note: isAdminNote});
      
      if (error) throw error;
      
      toast.success("Message sent successfully");
      return true;
    } catch (err: unknown) {_toast.error("Failed to send message");
      return false;}
  };

  // Fetch disputes when component mounts or user changes
  useEffect__(() => {_if (user) {
      fetchDisputes();}
  }, [user]);

  return {_disputes, _isLoading, _error, _refetch: fetchDisputes, _getDisputeById, _createDispute, _updateDisputeStatus, _resolveDispute, _getDisputeMessages, _addDisputeMessage};
}
