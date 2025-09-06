
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JobMatch } from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  useEffect(() => {
    const fetchSuggestedJobs = $2;
      try {
        setIsLoading($2);
        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *,
            job: job_id(*)
          `)
          .eq("talent_id", talentId)
          .order($2);
        if (error) throw error,
        
        setJobMatches(data || [])
      } catch (error) {
        console.error($2);
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
      const updates = $2;
        ...(status = $2;
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq($2);
      if (error) throw error,
      
      // Update local state
      setJobMatches(matches => 
        matches.map(match => 
          match.id === matchId 
            ? { ...match, status, ...(status = $2;
      // Show appropriate message
      if (status = $2;
          description: "You've successfully applied to this job"
        })
      } else if (status = $2;
          description: "This job will be removed from your suggestions"
        })
      }
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to update job status",
        variant: "destructive"})
    }
  },

  // Filter matches by status
  const newMatches = jobMatches.filter($2);
  const viewedMatches = jobMatches.filter($2);
  const appliedMatches = jobMatches.filter($2);
  const declinedMatches = jobMatches.filter($2);
  return {
    jobMatches,
    isLoading,
    updateJobMatchStatus,
    categorizedMatches: {
      newMatches,
      viewedMatches,
      appliedMatches,
      declinedMatches
    }
  }
}
