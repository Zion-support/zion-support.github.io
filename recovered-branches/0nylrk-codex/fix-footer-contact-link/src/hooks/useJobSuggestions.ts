<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobSuggestions.ts


<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  useEffect(() => {

    const fetchSuggestedJobs = async () => {

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {JobMatch} from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
import { JobMatch } from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
=======
import { JobMatch } from "@/types/jobs",
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {

    const fetchSuggestedJobs = async () => {
<<<<<<< HEAD
      if (!talentId) return;
      try {
        setIsLoading(true);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      if (!talentId) return,
      
      try {
        setIsLoading(true),
        
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
<<<<<<< HEAD
            *;
            job:job_id (*)
          `)
          .eq("talent_id", talentId)

<<<<<<< HEAD
=======

=======
            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)
<<<<<<< HEAD
          .order("created_at", { ascending: false });
        if (error) throw error;
        setJobMatches(data |[])
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          .order("created_at", { ascending: false }),
          
        if (error) throw error,
        
        setJobMatches(data || [])
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      } catch (error) {
        console && console.error("Error fetching job matches:", error);
        toast({

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      } catch (error) {
        console.error("Error fetching job matches:", error),
        toast({
<<<<<<< HEAD
          title: "Error";
          description: "Failed to load job suggestions"
=======
          title: "Error",
          description: "Failed to load job suggestions",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD

=======

          title: "Error",
          description: "Failed to load job suggestions",


          variant: "destructive"})
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobSuggestions.ts
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
import { JobMatch } from '@/types / jobs';
export /**
 * useJobSuggestions - Function description
 */
function useJobSuggestions() {
  const [job_matches, setJobMatches] = useState < JobMatch[]>([]);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    const fetchSuggestedJobs = async () => {
      // Check condition
if (return) {
  $2
}
      try {
        setIsLoading (true);
;
        // Get job matches with job details;
        const { data, error } = await supabase;
          .from ("job_talent_matches");
          .select (`;
            *;
            job:job_id (*);
          `);
          .eq ("talent_id", talent_id);
          .order ("created_at", { ascending: false });
;
        // Check condition
if (throw error) {
  $2
}
        setJobMatches (data || []);
      } catch (error) {
        console.error ("Error fetching job matches:", error);
        toast ({
          title: "Error";
          description: "Failed to load job suggestions",
          variant: "destructive"});
      } finally {
        setIsLoading (false);
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobSuggestions.ts


=======
<<<<<<< HEAD
    }
    fetchSuggestedJobs()
  }, [talentId]);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    },
    
    fetchSuggestedJobs()
  }, [talentId]),

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
      }
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId);
      if (error) throw error;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      },
      
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId),
        
      if (error) throw error,
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Update local state

      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 

========
    }
      setJobMatches(matches => 
        matches && matches.map(match => 
          match && match.id === matchId 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobSuggestions.ts
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )

<<<<<<< HEAD
=======

      ),
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Update local state
      setJobMatches(matches =>
        matches.map(match =>
          match.id === matchId
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
<<<<<<< HEAD
      );
=======
      ),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      console && console.error("Error updating job match status:", error);
      toast({

<<<<<<< HEAD
    }
  }
  // Filter matches by status
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobSuggestions.ts
=======
      console.error("Error updating job match status:", error),
      toast({
<<<<<<< HEAD
        title: "Error";
        description: "Failed to update job status"
        variant: "destructive"})
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
  // Filter matches by status
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const newMatches = jobMatches.filter(match => match.status === 'new');
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed');
  const appliedMatches = jobMatches.filter(match => match.status === 'applied');
  const declinedMatches = jobMatches.filter(match => match.status === 'declined');
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobSuggestions.ts
  const newMatches = jobMatches && jobMatches.filter(match => match && match.status === 'new');
  const viewedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'viewed');
  const appliedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'applied');
  const declinedMatches = jobMatches && jobMatches.filter(match => match && match.status === 'declined');
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobSuggestions.ts


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobSuggestions.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return {
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {
      newMatches;
      viewedMatches;
      appliedMatches
<<<<<<< HEAD
      declinedMatches
<<<<<<< HEAD

=======

      declinedMatches
=======
<<<<<<< HEAD
        title: "Error",
        description: "Failed to update job status",
        variant: "destructive"})
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
    }
  }
;
    fetchSuggestedJobs ();
  }, [talent_id]);
;
  const updateJobMatchStatus = async (match_id: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status,
        ...(status === 'viewed' ? { viewed_at: new Date ().toISOString () } : {});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
=======
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
        title: "Error",;
        description: "Failed to update job status",;
        variant: "destructive"});
    }
  },;
  // Filter matches by status;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
  }
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
