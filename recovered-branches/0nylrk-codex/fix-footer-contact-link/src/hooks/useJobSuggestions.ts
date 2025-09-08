<<<<<<< HEAD

useEffect(() => {


=======
import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast","
import { JobMatch } from "@/types/jobs";"
export function useJobSuggestions() {
  }
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
import { JobMatch } from "@/types/jobs","
export function useJobSuggestions() {
}
const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),;
const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {
    }
    const fetchSuggestedJobs = async () => {
      }
      if (!talentId) return;
      try {
        }
        setIsLoading(true);        // Get job matches with job details,
const { data, error } = await supabase;
          .from("job_talent_matches")"
          .select(``            *,
            "job":job_id (*)
          `)`          .eq("talent_id", talentId)      } finally {"
        }
        setIsLoading (false);
      }

      } finally {
        }
        setIsLoading(false)
      }
    }
            *,
            job: job_id(*)
          `)
          .eq("talent_id", talentId)
          .order($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  useEffect(() => {

    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      try {

        setIsLoading(true);



<<<<<<< HEAD
=======
    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      try {
        setIsLoading(true);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (!talentId) return,
      
      try {}
        setIsLoading(true),
<<<<<<< HEAD

        

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
        // Get job matches with job details
        const { data, error } = await supabase

          .from("job_talent_matches")
          .select(`

          .order("created_at", { ascending: false }),
          
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        if (error) throw error,
        
        setJobMatches(data || [])
      } catch (error) {
        console.error($2);
        toast({
<<<<<<< HEAD

          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }

      } finally {}
        setIsLoading (false);
      }

    }
    fetchSuggestedJobs()
  }, [talentId]);

        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`

            *;
            job:job_id (*)
          `)
          .eq("talent_id", talentId)


=======
            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)
          .order("created_at", { ascending: false });
        if (error) throw error;
        setJobMatches(data |[])
>>>>>>> origin/cursor/delete-old-data-records-6bba
          .order("created_at", { ascending: false }),
          
        if (error) throw error,
        
        setJobMatches(data || [])
<<<<<<< HEAD


      } catch (error) {
        console && console.error("Error fetching job matches:", error);
        toast({


=======
      } catch (error) {
        console.error("Error fetching job matches:", error),
        toast({
          title: "Error";
          description: "Failed to load job suggestions"
          title: "Error",
          description: "Failed to load job suggestions",
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }

>>>>>>> origin/cursor/delete-old-data-records-6bba
          title: "Error",
          description: "Failed to load job suggestions",

          variant: "destructive"})

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      } finally {
        setIsLoading (false);
      }

      } finally {
        setIsLoading(false)
      }
    }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },
    
    fetchSuggestedJobs()
  }, [talentId]),


<<<<<<< HEAD

  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status



      },
      
      const { error } = await supabase"
        .from("job_talent_matches")
        .update(updates)"
        .eq("id", matchId),
        
      if (error) throw error,

      
=======
      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 

            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        )

      ),
>>>>>>> origin/cursor/delete-old-data-records-6bba

      // Show appropriate message

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

<<<<<<< HEAD
    } catch (error) {

=======

        title: "Error";
        description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const newMatches = jobMatches && jobMatches.filter(match => match && match.status === 'new');
  const viewedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'viewed');
  const appliedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'applied');

  const declinedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'declined');

<<<<<<< HEAD


=======
  return {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {}
      newMatches;
      viewedMatches;

<<<<<<< HEAD

      declinedMatches
=======

import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;

import { JobMatch } from "@/types/jobs",;
export function useJobSuggestions() { return null; }
        const { data, error } = await supabase;"
          .from("job_talent_matches");`
          .select(`;
            *,;
            job:job_id (*);`
          `);"
          .eq("talent_id", talentId);"
          .order("created_at", { ascending: false }),;
        if (error) throw error,;
        setJobMatches(data || []);
      } catch (error) {;"
        console.error("Error fetching job matches:", error),;
        toast({;"
          title: "Error","
          description: "Failed to load job suggestions",;"
          variant: "destructive"});
      } finally {;
        setIsLoading(false);

>>>>>>> origin/cursor/delete-old-data-records-6bba

;

    fetchSuggestedJobs ();
  }, [talent_id]);
<<<<<<< HEAD

;'
  const updateJobMatchStatus = async (match_id: string, status: 'viewed' | 'applied' | 'declined') => {}
    try {}
      const updates = {}
        status,'
        ...(status === 'viewed' ? { viewed_at: new Date ().toISOString () } : {});

      }
;
      const { error } = await supabase;"
        .from ("job_talent_matches");
        .update (updates);"
        .eq ("id", match_id);

;
      // Check condition;
if (throw error) {}
  $2;
=======
;
  const updateJobMatchStatus = async ("match_id": string, "status": 'viewed' | 'applied' | 'declined') => {'
    }
    try {
      }
      const updates = {
        }
        status,
        ...(status === 'viewed' ? { "viewed_at": new Date ().toISOString () } : {});'
      }
;
      const { error } = await supabase;
        .from ("job_talent_matches");"
        .update (updates);
        .eq ("id", match_id);"
;
      // Check condition,
if (throw error) {
  $2
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
      // Update local state;
      setJobMatches (matches =>;
        matches.map (match =>;
          match.id === match_id;
            ? { ...match, status, ...(status === 'viewed' ? { "viewed_at": new Date ().toISOString () } : {}) }'
            : match));
;
      // Show appropriate message;
      // Check condition,
if ( {) {
  $2
}
        toast ({
          }
          "title": "Application Submitted","
          "description": "You've successfully applied to this job";"
        });
      } else // Check condition,
if ( {) {
  $2
}
        toast ({
          }
          "title": "Job Declined","
          "description": "This job will be removed from your suggestions";"
        });
      }
    } catch (error) {
      }
      console.error ("Error updating job match "status":", error);"
      toast ({
        }
        "title": "Error","
  "description": "Failed to update job status","
        "variant": "destructive"});"
    }
  }
;

<<<<<<< HEAD
  // Filter matches by status;

=======
      const { error } = await supabase;
        .from("job_talent_matches");"
        .update(updates);
        .eq("id", matchId),;"
        ;
      if (error) throw error,;
      ;
      // Update local state;
      setJobMatches(matches => { return  ; }
        matches.map(match => { return  ; }
          match.id === matchId ;
            ? { ...match, status, ...(status === 'viewed' ? { "viewed_at":new Date().toISOString() } {}) } match;'
        );
      ),;
      ;
      // Show appropriate message;
      if (status === 'applied') {;'
        }
        toast({;
          }
          "title":"Application Submitted",,"
  "description":"You've successfully applied to this job";"
        }),;
      } else if (status === 'declined') {;'
        }
        toast({;
          }
          "title":"Job Declined",,"
  "description":"This job will be removed from your suggestions";"
        }),;
      if (error) throw error,;
      // Update local state;
      setJobMatches(matches =>;
        matches.map(match =>;
          match.id === matchId;
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        );
      ),;
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
      }
      console.error("Error updating job match "status":", error),;"
      toast({;
        }
        "title":"Error",,"
  "description":"Failed to update job status",;"
        "variant":"destructive"}),;"
  const new_matches = job_matches.filter (match => match.status === 'new');
  const viewed_matches = job_matches.filter (match => match.status === 'viewed');
  const applied_matches = job_matches.filter (match => match.status === 'applied');
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const declined_matches = job_matches.filter (match => match.status === 'declined');
;
  return {}
    job_matches;
    is_loading;
    updateJobMatchStatus;
    categorized_matches: {}
      new_matches;
      viewed_matches;
      applied_matches,
      declined_matches;

<<<<<<< HEAD


    }
  }

=======
    }
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ;
  useEffect(() => {;
    const fetchSuggestedJobs = async () => {;
      if (!talentId) return,;
      ;
      try {;
        setIsLoading(true),;
        ;
        // Get job matches with job details;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  const newMatches = jobMatches.filter(match => { return match.status === 'new'),; }'
  const viewedMatches = jobMatches.filter(match => { return match.status === 'viewed'),; }'
  const appliedMatches = jobMatches.filter(match => { return match.status === 'applied'),; }'
  const declinedMatches = jobMatches.filter(match => { return match.status === 'declined'),; }'
;
  return {;
    }
    jobMatches,;
    isLoading,;
    updateJobMatchStatus,;
    "categorizedMatches":{;
      }
      newMatches,;
      viewedMatches,;
      appliedMatches,;
      declinedMatches;
    }
  },;
} export function useJobSuggestions() {
  }
  const [jobMatches, setJobMatches] = useState<JobMatch[]> ([]);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {
<<<<<<< HEAD

  const fetchSuggestedJobs = async () => {

=======
  }
  const fetchSuggestedJobs = async () => {
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (!talentId) return;
setIsLoading (true);
//Get job matches with job details .select (`*;`"job":job id (*) `) `
}finally {
  }
  setIsLoading (false) 
}
};
}, [talentId]);
.update (updates) if (error) throw error;
//Update local state setJobMatches (matches => matches.map (match => match.id === matchId ? {
  ...match, status, ... (status === 'viewed' ? {'
  }
  viewed "at": new Date () .toISOString () 
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

<<<<<<< HEAD


=======
}
    }
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
