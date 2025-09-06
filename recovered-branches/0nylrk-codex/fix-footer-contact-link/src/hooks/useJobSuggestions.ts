

  useEffect(() => {

    const fetchSuggestedJobs = async () => {



import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {JobMatch} from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);

        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`



    },
    
    fetchSuggestedJobs()
  }, [talentId]),




  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})

      }
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId);
      if (error) throw error;

      },
      
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId),
        
      if (error) throw error
      

    }
      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 

            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )


      ),
      



      // Update local state
      setJobMatches(matches =>
        matches.map(match =>
          match.id === matchId

  return {
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {
      newMatches;
      viewedMatches;
      appliedMatches

      declinedMatches

        title: "Error",
        description: "Failed to update job status",
        variant: "destructive"})

