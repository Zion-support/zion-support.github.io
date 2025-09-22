<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {JobMatch} from "@/types/jobs";
export function useJobMatches(jobId: string) {;
const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { JobMatch } from "@/types/jobs";
=======
import { useState, useEffect } from "react","
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast",";
import { JobMatch } from "@/types/jobs";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { JobMatch } from "@/types/jobs",
export function useJobMatches(jobId: string) {}
  const [matches, setMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
<<<<<<< HEAD
  const [isProcessing, setIsProcessing] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;
export function useJobMatches(jobId: string) {};
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const fetchMatches = async () => {}
    setIsLoading(true);

import { useState, useEffect } from './react';'
import { supabase } from '@/integrations / supabase / client';'
import { toast } from '@/hooks / use - toast';'
import { JobMatch } from '@/types / jobs';
export /**;
 * useJobMatches - Function description;
 */
function useJobMatches() {}
=======
  const [isProcessing, setIsProcessing] = useState(false),

export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchMatches = async () => {
    setIsLoading(true);
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
import { JobMatch } from '@/types / jobs';
export /**
 * useJobMatches - Function description
 */
function useJobMatches() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [matches, set_matches] = useState < JobMatch[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [is_processing, setIsProcessing] = useState (false);
;
const fetch_matches = async () => {}
    setIsLoading (true);
    try {}
      const { data, error } = await supabase"
        .from("job_talent_matches")
        .select(`

=======
  const fetch_matches = async () => {
    setIsLoading (true);
    try {

      const { data, error } = await supabase
        .from("job_talent_matches")
        .select(`

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            id;
            user_id;
            full_name;
            professional_title;
            profile_picture_url;
            hourly_rate;
            bio;
            years_experience;
<<<<<<< HEAD
            key_projects
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          *,
          talent_profile:talent_id(
=======
  const [isProcessing, setIsProcessing] = useState(false),          talent_profile:talent_id(
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [isProcessing, setIsProcessing] = useState(false),          talent_profile:talent_id(
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            key_projects
          *,
          talent_profile:talent_id(
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            id,
            user_id,
            full_name,
            professional_title,
            profile_picture_url,
            hourly_rate,
            bio,
            years_experience,
<<<<<<< HEAD
            key_projects,
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            skills
=======
            key_projects,            skills
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            key_projects,            skills
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            key_projects,

            skills
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          )
        `)
        .eq("job_id", jobId)

        .order("match_score", { ascending: false }),

      if (error) throw error,
      setMatches(data || [])

    } catch (error) {
      console && console.error("Error fetching job matches:", error);
      toast({

            key_projects,
            skills);
        `);
        .eq ("job_id", job_id);
        .order ("match_score", { ascending: false });
;
      // Check condition
if (throw error) {
  $2
}
      set_matches (data || []);
    } catch (error) {
      console.error ("Error fetching job matches:", error);
      toast ({
        title: "Error";
        description: "Failed to load matched talents. Please try again later.",
        variant: "destructive"});

    } finally {
      setIsLoading (false);
    }
  }

;

  const triggerAIMatching = async () => {
    setIsProcessing (true);
    try {

        title: "Error",
        description: "Failed to load matched talents. Please try again later.",

        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }

  },

  const triggerAIMatching = async () => {
    setIsProcessing(true),
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        body: { jobId }}),

      if (response && response.error) throw new Error(response && response.error.message);

toast({"
        title: "AI Matching Complete",`
        description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`});

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      // Refresh the matches list
=======

      // Refresh the matches list;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      await fetchMatches()
    } catch (error) {"
      console && console.error("Error triggering AI matching:", error);
toast({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      const response = await supabase.functions.invoke ('job - talent - matcher', {
        body: { job_id }});
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console.error("Error triggering AI matching:", error),
      toast({
title: "Matching Failed";
        description: "Could not process talent matching. Please try again later."
        variant: "destructive"})
    } finally {}
      setIsProcessing(false)
}
  }
  useEffect(() => {
    fetchMatches()
  }, [jobId]);
  return {
    matches;
    isLoading;
    isProcessing;
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { JobMatch } from "@/types/jobs",;
export function useJobMatches(jobId: string) {;
  const [matches, setMatches] = useState<JobMatch[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [isProcessing, setIsProcessing] = useState(false),;
  const fetchMatches = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase;
        .from("job_talent_matches");
        .select(`;
          *,;
          talent_profile:talent_id(;
            id,;
            user_id,;
            full_name,;
            professional_title,;
            profile_picture_url,;
            hourly_rate,;
            bio,;
            years_experience,;
            key_projects,;
            skills;
          );
        `);
        .eq("job_id", jobId);
        .order("match_score", { ascending: false }),;
      if (error) throw error,;
      setMatches(data || []);
    } catch (error) {;
      console.error("Error fetching job matches:", error),;
      toast({;
        title: "Error",;
        description: "Failed to load matched talents. Please try again later.",;
        variant: "destructive"});
    } finally {;
      setIsLoading(false);
    }
  },;
  const triggerAIMatching = async () => {;
    setIsProcessing(true),;
    try {;
      const response = await supabase.functions.invoke('job-talent-matcher', {;
        body: { jobId }}),;
      if (response.error) throw new Error(response.error.message),;
      toast({;
        title: "AI Matching Complete",;
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`}),;
      // Refresh the matches list;
      await fetchMatches();
    } catch (error) {;
      console.error("Error triggering AI matching:", error),;
      toast({;
        title: "Matching Failed",;
        description: "Could not process talent matching. Please try again later.",;
        variant: "destructive"});
    } finally {;
      setIsProcessing(false);
    }
  },;
  useEffect(() => {;
    fetchMatches();
  }, [jobId]),;
  return {;
    matches,;
    isLoading;
    isProcessing;
    triggerAIMatching;
}
}
<<<<<<< HEAD
;
    } finally {
      setIsProcessing (false);
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"})
    } finally {
      setIsProcessing(false)
}
  };

  useEffect(() => {
    fetchMatches()
  }, [jobId]);

  return {
    matches;
    isLoading;
    isProcessing;
    triggerAIMatching
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
=======
"
import { useState, useEffect } from "react",;"
import { supabase } from "@/integrations/supabase/client",;"
import { toast } from "@/hooks/use-toast",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { JobMatch } from "@/types/jobs",;
export function useJobMatches() { return null; }
      const { data, error } = await supabase;"
        .from("job_talent_matches");`
        .select(`;
          *,;
          talent_profile:talent_id(;
            id,;
            user_id,;
            full_name,;
            professional_title,;
            profile_picture_url,;
            hourly_rate,;
            bio,;
            years_experience,;
            key_projects,;
            skills;
          );`
        `);"
        .eq("job_id", jobId);"
        .order("match_score", { ascending: false }),;
      if (error) throw error,;
      setMatches(data || []);
    } catch (error) {;"
      console.error("Error fetching job matches:", error),;
      toast({;"
        title: "Error",;"
        description: "Failed to load matched talents. Please try again later.",;"
        variant: "destructive"});
    } finally {;
      setIsLoading(false);
    }
  },;
  const triggerAIMatching = async () => {;
    setIsProcessing(true),;
    try {;'
      const response = await supabase.functions.invoke('job-talent-matcher', {;
        body: { jobId }}),;
      if (response.error) throw new Error(response.error.message),;
      toast({;"
        title: "AI Matching Complete",;`
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`}),;
      // Refresh the matches list;
      await fetchMatches();
    } catch (error) {;"
      console.error("Error triggering AI matching:", error),;
      toast({;"
        title: "Matching Failed",;"
        description: "Could not process talent matching. Please try again later.",;"
        variant: "destructive"});
    } finally {;
      setIsProcessing(false);
    }
  },;
  useEffect(() => {;
    fetchMatches();
  }, [jobId]),;
  return {;
    matches,;
    isLoading;
    isProcessing;
triggerAIMatching;
}
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        body: { job_id }});

title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"})
    } finally {
      setIsProcessing(false)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  }
}
=======
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
      if (throw new Error (response.error.message)) {}
  $2;
}
      toast ({"
        title: "AI Matching Complete",`
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
;
      // Refresh the matches list;
      await fetch_matches ();
    } catch (error) {"
      console.error ("Error triggering AI matching:", error);
toast ({
        title: "Matching Failed",
  description: "Could not process talent matching. Please try again later.",
        variant: "destructive"});
    } finally {
      setIsProcessing (false);
    }
  }
  }
}

;
  useEffect (() => {}
    fetch_matches ();
  }, [job_id]);
;
  return {}
    matches;
    is_loading;
    is_processing;
    triggerAIMatching;

  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
