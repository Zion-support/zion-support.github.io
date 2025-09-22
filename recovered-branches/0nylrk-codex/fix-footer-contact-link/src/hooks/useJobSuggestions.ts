
  useEffect(() => {

    const fetchSuggestedJobs = async () => {

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

  useEffect(() => {}
    const fetchSuggestedJobs = async () => {}
import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast",";
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",

import { JobMatch } from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {};
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
const [isLoading, setIsLoading] = useState(true);"
import { JobMatch } from "@/types/jobs",
export function useJobSuggestions(talentId?: string) {}
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),


  useEffect(() => {

    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      try {
        setIsLoading(true);

      if (!talentId) return,

      try {}
        setIsLoading(true),

        // Get job matches with job details
        const { data, error } = await supabase

        // Get job matches with job details;
        const { data, error } = await supabase"
          .from("job_talent_matches")
          .select(`

          .order("created_at", { ascending: false }),

        if (error) throw error,

        setJobMatches(data || [])
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

"
          title: "Error","
          description: "Failed to load job suggestions",

"
          variant: "destructive"})

      } finally {}
        setIsLoading (false);
      }

    }
    fetchSuggestedJobs()
  }, [talentId]);
        setIsLoading(true);        // Get job matches with job details
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
      } finally {
        setIsLoading(false)
      }
    }

    }
    fetchSuggestedJobs()
  }, [talentId]);

      } finally {}
        setIsLoading(false)
      }
    }

    },

    fetchSuggestedJobs()
  }, [talentId]),



  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status

  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {}
    try {}
      const updates = {}
        status'
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})

      },

      const { error } = await supabase"
        .from("job_talent_matches")
        .update(updates)"
        .eq("id", matchId),

      if (error) throw error,

      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        )

      ),


'
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        )

      // Show appropriate message

            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
      );
      ),

      // Show appropriate message
      if (status === 'applied') {
        toast({
          title: "Application Submitted"

      // Show appropriate message'
      if (status === 'applied') {}
        toast({"
          title: "Application Submitted"'"
          description: "You've successfully applied to this job"
        })'
      } else if (status === 'declined') {}
        toast({"
          title: "Job Declined""
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
  const newMatches = jobMatches && jobMatches.filter(match => match && match.status === 'new');
  const viewedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'viewed');
  const appliedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'applied');
    } catch (error) {}
"
        title: "Error";"
        description: "Failed to update job status""
        variant: "destructive"})
    }
  }
  // Filter matches by status;
'
  const newMatches = jobMatches && jobMatches.filter(match => match && match.status === 'new');'
  const viewedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'viewed');'
  const appliedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'applied');'
  const declinedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'declined');

  return {
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {}
      newMatches;
      viewedMatches;
appliedMatches

      declinedMatches
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
          title: "Error",;"
          description: "Failed to load job suggestions",;"
          variant: "destructive"});
      } finally {;
        setIsLoading(false);

;
    } catch (error) {        title: "Error",
  description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status    }
  };
    } catch (error) {        title: "Error",
  description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status    }
  };
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
    fetchSuggestedJobs ();
  }, [talent_id]);
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
}
      // Update local state;
      setJobMatches (matches =>;
        matches.map (match =>;
          match.id === match_id;'
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date ().toISOString () } : {}) }
            : match));
;
      // Show appropriate message;
      // Check condition;
if ( {) {}
  $2;
}
        toast ({"
          title: "Application Submitted",'"
          description: "You've successfully applied to this job";
        });
      } else // Check condition;
if ( {) {}
  $2;
}
        toast ({"
          title: "Job Declined","
          description: "This job will be removed from your suggestions";
        });
      }
    } catch (error) {"
      console.error ("Error updating job match status:", error);
toast ({
title: "Error",
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
    }
  }
}
}

'"`
  const [isLoading, setIsLoading] = useState(true);

    }
  }
}
    }
  }
}

import { useState, useEffect } from "react",""
import { supabase } from "@/integrations/supabase/client",""
import { toast } from "@/hooks/use-toast",""
import { JobMatch } from "@/types/jobs";"
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);

  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),

  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),;

  const [jobMatches, setJobMatches] = useState<JobMatch[]> ([]);
"
pr-12325
</JobMatch>"

