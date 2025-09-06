
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {JobMatch} from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { JobMatch } from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
import { JobMatch } from "@/types/jobs",
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  
  useEffect(() => {

    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      try {
        setIsLoading(true);
      if (!talentId) return,
      
      try {
        setIsLoading(true),
        
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *;
            job:job_id (*)
          `)
          .eq("talent_id", talentId)

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
        setIsLoading(false)
      }
    }
    fetchSuggestedJobs()
  }, [talentId]);
    },
    
    fetchSuggestedJobs()
  }, [talentId]),



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
        title: "Error";
        description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status
  const newMatches = jobMatches.filter(match => match.status === 'new');
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed');
  const appliedMatches = jobMatches.filter(match => match.status === 'applied');
  const declinedMatches = jobMatches.filter(match => match.status === 'declined');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
;
      const { error } = await supabase;
        .from ("job_talent_matches");
        .update (updates);
        .eq ("id", match_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Update local state;
      setJobMatches (matches =>;
        matches.map (match =>;
          match.id === match_id;
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date ().toISOString () } : {}) }
            : match));
;
      // Show appropriate message;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Application Submitted",
          description: "You've successfully applied to this job";
        });
      } else // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Job Declined",
          description: "This job will be removed from your suggestions";
        });
      }
    } catch (error) {
      console.error ("Error updating job match status:", error);
      toast ({
        title: "Error";
        description: "Failed to update job status",
        variant: "destructive"});
    }
  }
;
  // Filter matches by status;
  const newMatches = jobMatches.filter(match => match.status === 'new'),;
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed'),;
  const appliedMatches = jobMatches.filter(match => match.status === 'applied'),;
  const declinedMatches = jobMatches.filter(match => match.status === 'declined'),;
  return {;
    jobMatches,;
    isLoading,;
    updateJobMatchStatus,;
    categorizedMatches: {;
      newMatches,;
      viewedMatches;
      appliedMatches;
      declinedMatches;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}