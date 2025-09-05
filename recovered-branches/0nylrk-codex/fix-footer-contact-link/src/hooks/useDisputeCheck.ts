

export function useDisputeCheck(_projectId?: string, _milestoneId?: string) {_const [isUnderDispute, _setIsUnderDispute] = useState(false);
  const [disputeStatus, _setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, _setDisputeId] = useState<string | null>(null);
  const [isLoading, _setIsLoading] = useState(true);

  useEffect__(() => {
    const _checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading(false);
        return;}

      try {_setIsLoading(true);
        
        let _query = supabase
          .from("disputes")
          .select("id, _status")
          .eq("project_id", _projectId);
        
        // If milestone ID is provided, _filter by that too
        if (milestoneId) {
          query = query.eq("milestone_id", _milestoneId);}
        
        // Order by status priority: open, under_review, resolved, closed
        query = query.order("status", {_ascending: true});
        
        const {_data, _error} = await query;
        
        if (error) throw error;
        
        if (data && data.length > 0) {_// Get the first dispute (highest priority based on status)
          setIsUnderDispute(true);
          setDisputeStatus(data[0].status as any);
          setDisputeId(data[0].id);} else {_setIsUnderDispute(false);
          setDisputeStatus(null);
          setDisputeId(null);}
      } catch (err) {_setIsUnderDispute(false);
        setDisputeStatus(null);
        setDisputeId(null);} finally {_setIsLoading(false);}
    };
    
    checkDispute();
  }, [projectId, milestoneId]);

  return {_isUnderDispute, _disputeStatus, _disputeId, _isLoading};
}
