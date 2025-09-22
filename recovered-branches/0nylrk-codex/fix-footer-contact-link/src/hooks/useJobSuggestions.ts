<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  useEffect(() => {

    const fetchSuggestedJobs = async () => {

import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {JobMatch} from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
=======

  useEffect(() => {}
    const fetchSuggestedJobs = async () => {}
import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast",";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { JobMatch } from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {};
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
const [isLoading, setIsLoading] = useState(true);"
import { JobMatch } from "@/types/jobs",
export function useJobSuggestions(talentId?: string) {}
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {

    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      try {
<<<<<<< HEAD
        setIsLoading(true);

      if (!talentId) return,

      try {}
        setIsLoading(true),

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        // Get job matches with job details
        const { data, error } = await supabase
=======

        // Get job matches with job details;
        const { data, error } = await supabase"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          .from("job_talent_matches")
          .select(`

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

"
          title: "Error","
          description: "Failed to load job suggestions",

"
          variant: "destructive"})
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      } finally {}
        setIsLoading (false);
      }

    }
    fetchSuggestedJobs()
  }, [talentId]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
        setIsLoading(true);        // Get job matches with job details
=======
        setIsLoading(true);
      if (!talentId) return,

      try {
        setIsLoading(true),

        // Get job matches with job details
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    }
    fetchSuggestedJobs()
  }, [talentId]);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      } finally {
        setIsLoading(false)
      }
    }
=======

    }
    fetchSuggestedJobs()
  }, [talentId]);

      } finally {}
        setIsLoading(false)
      }
    }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },

    fetchSuggestedJobs()
  }, [talentId]),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status
=======

  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {}
    try {}
      const updates = {}
        status'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})

      },

      const { error } = await supabase"
        .from("job_talent_matches")
        .update(updates)"
        .eq("id", matchId),

      if (error) throw error,

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        )

      ),

<<<<<<< HEAD

'
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        )
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Show appropriate message
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
      );
      ),

      // Show appropriate message
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (status === 'applied') {
        toast({
          title: "Application Submitted"
=======

      // Show appropriate message'
      if (status === 'applied') {}
        toast({"
          title: "Application Submitted"'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          description: "You've successfully applied to this job"
        })'
      } else if (status === 'declined') {}
        toast({"
          title: "Job Declined""
          description: "This job will be removed from your suggestions"
        })
      }
<<<<<<< HEAD
<<<<<<< HEAD
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.error("Error updating job match status:", error);
      toast({
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const newMatches = jobMatches && jobMatches.filter(match => match && match.status === 'new');
  const viewedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'viewed');
  const appliedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'applied');
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const declinedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'declined');

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return {
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {}
      newMatches;
      viewedMatches;
appliedMatches

      declinedMatches
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
    } catch (error) {        title: "Error",
  description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status    }
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    } catch (error) {        title: "Error",
  description: "Failed to update job status"
        variant: "destructive"})
    }
  }
  // Filter matches by status    }
  };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    fetchSuggestedJobs ();
  }, [talent_id]);
;'
  const updateJobMatchStatus = async (match_id: string, status: 'viewed' | 'applied' | 'declined') => {}
    try {}
      const updates = {}
        status,'
        ...(status === 'viewed' ? { viewed_at: new Date ().toISOString () } : {});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
