
  useEffect(() => {

    const fetchSuggestedJobs = async () => {

  useEffect(() => {

    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      try {
        setIsLoading(true);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *,
=======
            *;            job:job_id (*)
          `)
          .eq("talent_id", talentId)
          .order("created_at", { ascending: false });
        if (error) throw error;
        setJobMatches(data |[])
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          .order("created_at", { ascending: false }),
          
        if (error) throw error,
        
        setJobMatches(data || [])

      } catch (error) {
        console && console.error("Error fetching job matches:", error);
        toast({

          title: "Error",
          description: "Failed to load job suggestions",


          variant: "destructive"})
=======
    }
    fetchSuggestedJobs()
  }, [talentId]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    
    fetchSuggestedJobs()
  }, [talentId]),

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      },
      
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId),
        
      if (error) throw error,
      

      ),
      


      // Update local state
      setJobMatches(matches =>
        matches.map(match =>
          match.id === matchId
=======
      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
      );
      ),
      

      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 

            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )


      ),
      

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console && console.error("Error updating job match status:", error);
      toast({
  const newMatches = jobMatches && jobMatches.filter(match => match && match.status === 'new');
  const viewedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'viewed');
  const appliedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'applied');
  const declinedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'declined');
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {
      newMatches;
      viewedMatches;
      appliedMatches

      declinedMatches

    }
  }
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { JobMatch } from "@/types/jobs",;
;
export function useJobSuggestions(talentId?:string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  ;
  useEffect(() => {;
    const fetchSuggestedJobs = async () => {;
      if (!talentId) return,;
      ;
      try {;
        setIsLoading(true),;
        ;
        // Get job matches with job details;
        const { data, error } = await supabase;
          .from("job_talent_matches");
          .select(`;
            *,;
            job:job_id (*);
          `);
          .eq("talent_id", talentId);
          .order("created_at", { ascending:false }),;
          ;
        if (error) throw error,;
        ;
        setJobMatches(data || []),;
      } catch (error) {;
        console.error("Error fetching job matches:", error),;
        toast({;
          title:"Error",;
          description:"Failed to load job suggestions",;
          variant:"destructive"}),;
      } finally {;
        setIsLoading(false),;
      }
    },;
    ;
    fetchSuggestedJobs(),;
  }, [talentId]),;
;
  const updateJobMatchStatus = async (matchId:string, status:'viewed' | 'applied' | 'declined') => {;
    try {;
      const updates = {;
        status,;
        ...(status === 'viewed' ? { viewed_at:new Date().toISOString() } {});
      },;
      ;
      const { error } = await supabase;
        .from("job_talent_matches");
        .update(updates);
        .eq("id", matchId),;
        ;
      if (error) throw error,;
      ;
      // Update local state;
      setJobMatches(matches => ;
        matches.map(match => ;
          match.id === matchId ;
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at:new Date().toISOString() } {}) } match;
        );
      ),;
      ;
      // Show appropriate message;
      if (status === 'applied') {;
        toast({;
          title:"Application Submitted",;
          description:"You've successfully applied to this job";
        }),;
      } else if (status === 'declined') {;
        toast({;
          title:"Job Declined",;
          description:"This job will be removed from your suggestions";
        }),;
      }
    } catch (error) {;
      console.error("Error updating job match status:", error),;
      toast({;
        title:"Error",;
        description:"Failed to update job status",;
        variant:"destructive"}),;
    }
  },;
;
  // Filter matches by status;
  const newMatches = jobMatches.filter(match => match.status === 'new'),;
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed'),;
  const appliedMatches = jobMatches.filter(match => match.status === 'applied'),;
  const declinedMatches = jobMatches.filter(match => match.status === 'declined'),;
;
  return {;
    jobMatches,;
    isLoading,;
    updateJobMatchStatus,;
    categorizedMatches:{;
      newMatches,;
      viewedMatches,;
      appliedMatches,;
      declinedMatches;
    }
  },;
} export function useJobSuggestions (talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]> ([]);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {
  const fetchSuggestedJobs = async () => {
  if (!talentId) return;
setIsLoading (true);
//Get job matches with job details .select (`*;
job:job id (*) `) 
}finally {
  setIsLoading (false) 
}
};
}, [talentId]);
.update (updates) if (error) throw error;
//Update local state setJobMatches (matches => matches.map (match => match.id === matchId ? {
  ...match, status, ... (status === 'viewed' ? {
  viewed at: new Date () .toISOString () 
}: {
  
}) 
}: match) );
//Show appropriate message 
}
};
// Filter matches by status 
}
    }
  }
}
=======}=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
