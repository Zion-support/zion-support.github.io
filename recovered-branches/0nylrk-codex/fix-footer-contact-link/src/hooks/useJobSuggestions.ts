

<<<<<<< HEAD

  useEffect(() => {

    const fetchSuggestedJobs = async () => {

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  useEffect(() => {

    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      try {
<<<<<<< HEAD
        setIsLoading(true);
      if (!talentId) return,
      
      try {
        setIsLoading(true),
        


        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *;
            job:job_id (*)
          `)
          .eq("talent_id", talentId)



            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)
          .order("created_at", { ascending: false });
        if (error) throw error;
        setJobMatches(data |[])
          .order("created_at", { ascending: false }),
          
        if (error) throw error,
        
        setJobMatches(data || [])


      } catch (error) {
        console && console.error("Error fetching job matches:", error);
        toast({


          title: "Error",
          description: "Failed to load job suggestions",


          variant: "destructive"})
      } finally {
        setIsLoading (false);
      }


    }
    fetchSuggestedJobs()
  }, [talentId]);
=======
        setIsLoading(true);        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)      } finally {
        setIsLoading (false);
      }

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      } finally {
        setIsLoading(false)
      }
    }
    },
    
    fetchSuggestedJobs()
  }, [talentId]),

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      },
      
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId),
        
      if (error) throw error,
      

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )

<<<<<<< HEAD

      ),
      


            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
      );
      ),
      
      // Show appropriate message
=======
      ),
      

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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

  const newMatches = jobMatches && jobMatches.filter(match => match && match.status === 'new');
  const viewedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'viewed');
  const appliedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'applied');
  const declinedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'declined');




  return {
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {
      newMatches;
      viewedMatches;
      appliedMatches

      declinedMatches
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { JobMatch } from "@/types/jobs",;
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const fetchSuggestedJobs = async () => {;
      if (!talentId) return,;
      try {;
        setIsLoading(true),;
        // Get job matches with job details;
        const { data, error } = await supabase;
          .from("job_talent_matches");
          .select(`;
            *,;
            job:job_id (*);
          `);
          .eq("talent_id", talentId);
          .order("created_at", { ascending: false }),;
        if (error) throw error,;
        setJobMatches(data || []);
      } catch (error) {;
        console.error("Error fetching job matches:", error),;
        toast({;
          title: "Error",;
          description: "Failed to load job suggestions",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
    }
  }
;
=======
    } catch (error) {        title: "Error",
  description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status    }
  };
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    fetchSuggestedJobs ();
  }, [talent_id]);
;
  const updateJobMatchStatus = async (match_id: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status,
        ...(status === 'viewed' ? { viewed_at: new Date ().toISOString () } : {});
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
<<<<<<< HEAD
        title: "Error";
        description: "Failed to update job status",
=======
        title: "Error",
  description: "Failed to update job status",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        variant: "destructive"});
    }
  }
;
  // Filter matches by status;
  const new_matches = job_matches.filter (match => match.status === 'new');
  const viewed_matches = job_matches.filter (match => match.status === 'viewed');
  const applied_matches = job_matches.filter (match => match.status === 'applied');
  const declined_matches = job_matches.filter (match => match.status === 'declined');
;
  return {
    job_matches;
    is_loading;
    updateJobMatchStatus;
    categorized_matches: {
      new_matches;
      viewed_matches;
      applied_matches,
      declined_matches;
<<<<<<< HEAD


    }
  }
}
=======
    }
  }
}}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          title:"Error",;
          description:"Failed to load job suggestions",;
=======
          title:"Error",,
  description:"Failed to load job suggestions",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          title:"Application Submitted",;
          description:"You've successfully applied to this job";
        }),;
      } else if (status === 'declined') {;
        toast({;
          title:"Job Declined",;
          description:"This job will be removed from your suggestions";
=======
          title:"Application Submitted",,
  description:"You've successfully applied to this job";
        }),;
      } else if (status === 'declined') {;
        toast({;
          title:"Job Declined",,
  description:"This job will be removed from your suggestions";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        }),;
      }
    } catch (error) {;
      console.error("Error updating job match status:", error),;
      toast({;
<<<<<<< HEAD
        title:"Error",;
        description:"Failed to update job status",;
=======
        title:"Error",,
  description:"Failed to update job status",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    }
  }
}
