
<<<<<<< HEAD

<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",

=======
<<<<<<< HEAD
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
import { JobMatch } from "@/types/jobs";
=======
import { JobMatch } from "@/types/jobs",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),
<<<<<<< HEAD
=======


export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  const fetchMatches = async () => {
    setIsLoading(true);
=======
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
import { JobMatch } from '@/types / jobs';
export /**
 * useJobMatches - Function description
 */
function useJobMatches() {
  const [matches, set_matches] = useState < JobMatch[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [is_processing, setIsProcessing] = useState (false);
;
  const fetch_matches = async () => {
    setIsLoading (true);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    try {

      const { data, error } = await supabase
        .from("job_talent_matches")
        .select(`

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const fetchMatches = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("job_talent_matches")
        .select(`
<<<<<<< HEAD
          *;
          talent_profile: talent_id(
            id;
            user_id;
            full_name;
            professional_title;
            profile_picture_url;
            hourly_rate;
            bio;
            years_experience;
            key_projects
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          *,
          talent_profile:talent_id(
            id,
            user_id,
            full_name,
            professional_title,
            profile_picture_url,
            hourly_rate,
            bio,
            years_experience,
            key_projects,
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            skills
          )
        `)
        .eq("job_id", jobId)
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
        .order("match_score", { ascending: false });
      if (error) throw error;
      setMatches(data |[])
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        .order("match_score", { ascending: false }),

      if (error) throw error,
      setMatches(data || [])
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    } catch (error) {
      console && console.error("Error fetching job matches:", error);
      toast({

<<<<<<< HEAD
=======
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

=======

        title: "Error",
        description: "Failed to load matched talents. Please try again later.",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    } catch (error) {
      console.error("Error fetching job matches:", error),
      toast({
<<<<<<< HEAD
        title: "Error";
        description: "Failed to load matched talents. Please try again later."
=======
        title: "Error",
        description: "Failed to load matched talents. Please try again later.",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const triggerAIMatching = async () => {
    setIsProcessing(true),
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
<<<<<<< HEAD

<<<<<<< HEAD
=======
        body: { jobId }}),

      
      if (response && response.error) throw new Error(response && response.error.message);
      
      toast({
        title: "AI Matching Complete",
        description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`});
      



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console && console.error("Error triggering AI matching:", error);
      toast({

<<<<<<< HEAD
=======
<<<<<<< HEAD
        body: { jobId }});
      if (response.error) throw new Error(response.error.message);
      toast({
        title: "AI Matching Complete"
        description: `Found ${response.data.matches |0} potential talent matches for this job.`});
=======
        body: { jobId }}),
      
      if (response.error) throw new Error(response.error.message),
      
      toast({
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`}),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console.error("Error triggering AI matching:", error),
      toast({
<<<<<<< HEAD
        title: "Matching Failed";
        description: "Could not process talent matching. Please try again later."
        variant: "destructive"})
    } finally {
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

    triggerAIMatching
  }
}
=======
        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"})
    } finally {
      setIsProcessing(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
      const response = await supabase.functions.invoke ('job - talent - matcher', {
        body: { job_id }});
=======

        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"})
    } finally {
      setIsProcessing(false)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  }
}

;
<<<<<<< HEAD

=======
      if (throw new Error (response.error.message)) {
  $2
}
      toast ({
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
;
      // Refresh the matches list;
      await fetch_matches ();
    } catch (error) {
      console.error ("Error triggering AI matching:", error);
      toast ({
        title: "Matching Failed";
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsProcessing (false);
    }
  }

;
  useEffect (() => {
    fetch_matches ();
  }, [job_id]);
;
  return {
    matches;
    is_loading;
    is_processing;
    triggerAIMatching;

  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
