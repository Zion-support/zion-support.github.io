
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
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { JobMatch } from "@/types/jobs";
import { JobMatch } from "@/types/jobs",
export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchMatches = async () => {
    setIsLoading(true);
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {

      const { data, error } = await supabase
        .from("job_talent_matches")
        .select(`
<<<<<<< HEAD

<<<<<<< HEAD

  const fetchMatches = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("job_talent_matches")
        .select(`
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            skills
          )
        `)
        .eq("job_id", jobId)
<<<<<<< HEAD


<<<<<<< HEAD
        .order("match_score", { ascending: false });
      if (error) throw error;
      setMatches(data |[])
        .order("match_score", { ascending: false });
      if (error) throw error;
      setMatches(data |[])
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .order("match_score", { ascending: false });
      if (error) throw error;
      setMatches(data |[])
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .order("match_score", { ascending: false }),

      if (error) throw error,
      setMatches(data || [])
<<<<<<< HEAD
<<<<<<< HEAD
=======


    } catch (error) {
      console && console.error("Error fetching job matches:", error);
      toast({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
    } catch (error) {
      console.error("Error fetching job matches:", error),
      toast({
=======
    } catch (error) {
      console && console.error("Error fetching job matches:", error);
      toast({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Error";
        description: "Failed to load matched talents. Please try again later."
        title: "Error",
        description: "Failed to load matched talents. Please try again later.",
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD

  },


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const triggerAIMatching = async () => {
    setIsProcessing(true),
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        body: { jobId }});
      if (response.error) throw new Error(response.error.message);
      toast({
        title: "AI Matching Complete"
        description: `Found ${response.data.matches |0} potential talent matches for this job.`});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        body: { jobId }}),

      
      if (response && response.error) throw new Error(response && response.error.message);
      
      toast({
        title: "AI Matching Complete",
        description: `Found ${response && response.data.matches || 0} potential talent matches for this job.`});
      
<<<<<<< HEAD



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console && console.error("Error triggering AI matching:", error);
      toast({
<<<<<<< HEAD

        body: { jobId }});
      if (response.error) throw new Error(response.error.message);
      toast({
        title: "AI Matching Complete"
        description: `Found ${response.data.matches |0} potential talent matches for this job.`});
        body: { jobId }}),
      
      if (response.error) throw new Error(response.error.message),
      
      toast({
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`}),
      
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console.error("Error triggering AI matching:", error),
      toast({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
    triggerAIMatching
  }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    triggerAIMatching
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"})
    } finally {
      setIsProcessing(false)
<<<<<<< HEAD
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
      const response = await supabase.functions.invoke ('job - talent - matcher', {
        body: { job_id }});

        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"})
    } finally {
      setIsProcessing(false)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
}

;
<<<<<<< HEAD
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
<<<<<<< HEAD
}
  }
}
;
  }
}
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
