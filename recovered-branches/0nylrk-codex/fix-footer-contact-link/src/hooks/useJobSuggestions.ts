

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *;
            job:job_id (*)
          `)
          .eq("talent_id", talentId)

=======

          .order("created_at", { ascending: false }),
          
        if (error) throw error,
        
        setJobMatches(data || [])


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      } catch (error) {
        console && console.error("Error fetching job matches:", error);
        toast({

          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }

      } finally {
        setIsLoading (false);
      }


    },
    
    fetchSuggestedJobs()
  }, [talentId]),



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})

      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 

            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )

<<<<<<< HEAD
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
      console && console.error("Error updating job match status:", error);
      toast({

    }
  }
  // Filter matches by status
  const newMatches = jobMatches.filter(match => match.status === 'new');
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed');
  const appliedMatches = jobMatches.filter(match => match.status === 'applied');
  const declinedMatches = jobMatches.filter(match => match.status === 'declined');
  return {
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {
      newMatches;
      viewedMatches;
      appliedMatches

      declinedMatches

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}