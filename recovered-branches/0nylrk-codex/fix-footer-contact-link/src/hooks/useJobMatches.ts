
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { JobMatch } from "@/types/jobs";
export function useJobMatches(jobId: string) {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {JobMatch} from "@/types/jobs";
export function useJobMatches(jobId: string) {;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const fetchMatches = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase;
        .from ("job_talent_matches");
        .select (`;
          *;
          talent_profile: talent_id (
            id;
            user_id;
            full_name;
            professional_title;
            profile_picture_url;
            hourly_rate;
            bio;
            years_experience;
            key_projects
            skills
          )
        `)
        .eq("job_id", jobId)
        .order("match_score", { ascending: false });
      if (error) throw error;
      setMatches(data |[])
    } catch (error) {
      console && console.error("Error fetching job matches:", error);
      toast({
        title: "Error";
        description: "Failed to load matched talents. Please try again later."
        variant: "destructive"})
    } finally {
      setIsLoading (false);
    }
  }
  const triggerAIMatching = async () => {
    setIsProcessing (true);
    try {
      const response = await supabase && supabase.functions.invoke('job-talent-matcher', {
        body: { jobId }});
      if (response.error) throw new Error(response.error.message);
      toast({
        title: "AI Matching Complete"
        description: `Found ${response.data.matches |0} potential talent matches for this job.`});
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console && console.error("Error triggering AI matching:", error);
      toast({
        title: "Matching Failed";
        description: "Could not process talent matching. Please try again later."
        variant: "destructive"})
      const response = await supabase.functions.invoke ('job - talent - matcher', {
        body: { job_id }});
<<<<<<< HEAD
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
;
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
    } finally {
      setIsProcessing (false);
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