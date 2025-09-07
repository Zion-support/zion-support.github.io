import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { JobMatch } from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {
  useEffect(() => {

    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      try {
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

      } finally {
        setIsLoading(false)
      }
    }
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
        matches && matches.map(match => 
          match && match.id === matchId 
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )

      ),
      

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
    } catch (error) {        title: "Error",
  description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status    }
  };
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
        title: "Error",
  description: "Failed to update job status",
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
    }
  }
}}
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
          title:"Error",,
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
      }
    },;
    fetchSuggestedJobs();
  }, [talentId]),;
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {;
    try {;
      const updates = {;
        status,;
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {});
      },;
      const { error } = await supabase;
        .from("job_talent_matches");
        .update(updates);
        .eq("id", matchId),;
          title:"Application Submitted",,
  description:"You've successfully applied to this job";
        }),;
      } else if (status === 'declined') {;
        toast({;
          title:"Job Declined",,
  description:"This job will be removed from your suggestions";
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
          title: "Application Submitted",;
          description: "You've successfully applied to this job";
        });
      } else if (status === 'declined') {;
        toast({;
          title: "Job Declined",;
          description: "This job will be removed from your suggestions";
        });
      }
    } catch (error) {;
      console.error("Error updating job match status:", error),;
      toast({;
        title:"Error",,
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
        title: "Error",;
        description: "Failed to update job status",;
        variant: "destructive"});
    }
  }
}
