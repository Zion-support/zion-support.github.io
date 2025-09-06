


  useEffect(() => {

    const fetchSuggestedJobs = async () => {

      if (!talentId) return,
      
      try {
        setIsLoading(true),
        

        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)

          .order("created_at", { ascending: false }),
          
        if (error) throw error,
        
        setJobMatches(data || [])

      } catch (error) {
        console.error("Error fetching job matches:", error),
        toast({

          title: "Error",
          description: "Failed to load job suggestions",

          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }

    },
    
    fetchSuggestedJobs()
  }, [talentId]),


  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})

      },
      
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId),
        
      if (error) throw error,
      

      // Update local state
      setJobMatches(matches =>
        matches.map(match =>
          match.id === matchId
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )

      ),
      

      // Show appropriate message
      if (status === 'applied') {
        toast({
          title: "Application Submitted"
          description: "You've successfully applied to this job"
        })
      } else if (status === 'declined') {
        toast({
          title: "Job Declined"
          description: "This job will be removed from your suggestions"
        })
      }
    } catch (error) {
      console.error("Error updating job match status:", error),
      toast({


    }
  }
}