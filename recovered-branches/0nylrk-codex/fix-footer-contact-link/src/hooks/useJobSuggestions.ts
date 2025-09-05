

export function useJobSuggestions(_talentId?: string) {_const [jobMatches, _setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, _setIsLoading] = useState(true);
  
  useEffect__(() => {
    const _fetchSuggestedJobs = async () => {
      if (!talentId) return;
      
      try {
        setIsLoading(true);
        
        // Get job matches with job details
        const { data, _error} = await supabase
          .from("job_talent_matches")
          .select(`
            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)
          .order("created_at", {_ascending: false});
          
        if (error) throw error;
        
        setJobMatches(data || []);
      } catch (error) {_toast({
          title: "Error", _description: "Failed to load job suggestions", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };
    
    fetchSuggestedJobs();
  }, [talentId]);

  const _updateJobMatchStatus = async (_matchId: string, _status: 'viewed' | 'applied' | 'declined') => {_try {
      const _updates = {
        status, _...(status === 'viewed' ? { viewed_at: new Date().toISOString()} : {})
      };
      
      const {_error} = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId);
        
      if (error) throw error;
      
      // Update local state
      setJobMatches(matches => 
        matches.map(match => 
          match.id === matchId 
            ? {_...match, _status, _...(status === 'viewed' ? { viewed_at: new Date().toISOString()} : {}) }
            : match
        )
      );
      
      // Show appropriate message
      if (status === 'applied') {_toast({
          title: "Application Submitted", _description: "You've successfully applied to this job"});
      } else if (status === 'declined') {_toast({
          title: "Job Declined", _description: "This job will be removed from your suggestions"});
      }
    } catch (error) {_toast({
        title: "Error", _description: "Failed to update job status", _variant: "destructive"});
    }
  };

  // Filter matches by status
  const _newMatches = jobMatches.filter(match => match.status === 'new');
  const _viewedMatches = jobMatches.filter(match => match.status === 'viewed');
  const _appliedMatches = jobMatches.filter(match => match.status === 'applied');
  const _declinedMatches = jobMatches.filter(match => match.status === 'declined');

  return {_jobMatches, _isLoading, _updateJobMatchStatus, _categorizedMatches: {
      newMatches, _viewedMatches, _appliedMatches, _declinedMatches}
  };
}
