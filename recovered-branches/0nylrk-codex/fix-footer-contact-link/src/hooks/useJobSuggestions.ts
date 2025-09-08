

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
        setIsLoading(true);        // Get job matches with job details
        const { data, error } = await supabase

          .from("job_talent_matches")
          .select(`

          .order("created_at", { ascending: false }),
          

            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)      } finally {
        setIsLoading (false);
      }

      } finally {
        setIsLoading(false)
      }
    }
    },
    
    fetchSuggestedJobs()
  }, [talentId]),


      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        )

      ),

      if (status === 'applied') {
        toast({
          }
          "title": "title","
    "description": "You've successfully applied to this job""
        })
      } else if (status === 'declined') {'
        }
        toast({
          }
          "title": "Job Declined""
          "description": "This job will be removed from your suggestions""
        })
      }
    } catch (error) {        title: "Error",
  description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status    }
  };
    fetchSuggestedJobs ();
  }, [talent_id]);
  // Filter matches by status;


  const fetchSuggestedJobs = async () => {

