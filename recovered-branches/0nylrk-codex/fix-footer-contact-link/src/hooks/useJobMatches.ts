

export function useJobMatches(_jobId: string) {_const [matches, _setMatches] = useState<JobMatch[]>([]);
  const [isLoading, _setIsLoading] = useState(true);
  const [isProcessing, _setIsProcessing] = useState(false);

  const _fetchMatches = async () => {
    setIsLoading(true);
    try {
      const { data, _error} = await supabase
        .from("job_talent_matches")
        .select(`
          *,
          talent_profile:talent_id(
            id,
            user_id,
            full_name,
            professional_title,
            profile_picture_url,
            hourly_rate,
            bio,
            years_experience,
            key_projects,
            skills
          )
        `)
        .eq("job_id", jobId)
        .order("match_score", {_ascending: false});

      if (error) throw error;
      setMatches(data || []);
    } catch (error) {_toast({
        title: "Error", _description: "Failed to load matched talents. Please try again later.", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };

  const _triggerAIMatching = async () => {_setIsProcessing(true);
    try {
      const _response = await supabase.functions.invoke('job-talent-matcher', _{
        body: { jobId}});
      
      if (response.error) throw new Error(response.error.message);
      
      toast({_title: "AI Matching Complete", _description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
      
      // Refresh the matches list
      await fetchMatches();
    } catch (error) {_toast({
        title: "Matching Failed", _description: "Could not process talent matching. Please try again later.", _variant: "destructive"});
    } finally {_setIsProcessing(false);}
  };

  useEffect__(() => {_fetchMatches();}, [jobId]);

  return {_matches, _isLoading, _isProcessing, _triggerAIMatching};
}
