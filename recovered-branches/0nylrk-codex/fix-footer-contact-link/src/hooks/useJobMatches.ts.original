
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JobMatch } from "@/types/jobs";

export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
=======
>>>>>>> origin/auto/autonomy-17186719616
  const fetchMatches = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("job_talent_matches")
        .select(`
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
            skills
          )
        `)
        .eq("job_id", jobId)
        .order("match_score", { ascending: false });

      if (error) throw error;
      setMatches(data || []);
    } catch (error) {
      console.error("Error fetching job matches:", error);
      toast({
        title: "Error",
        description: "Failed to load matched talents. Please try again later.",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
    } finally {
      setIsLoading(false);
    }
  };

  const triggerAIMatching = async () => {
    setIsProcessing(true);
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
<<<<<<< HEAD
        body: { jobId }});
=======
        body: { jobId },
      });
>>>>>>> origin/auto/autonomy-17186719616
      
      if (response.error) throw new Error(response.error.message);
      
      toast({
        title: "AI Matching Complete",
<<<<<<< HEAD
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
=======
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`,
      });
>>>>>>> origin/auto/autonomy-17186719616
      
      // Refresh the matches list
      await fetchMatches();
    } catch (error) {
      console.error("Error triggering AI matching:", error);
      toast({
        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, [jobId]);

  return {
    matches,
    isLoading,
    isProcessing,
    triggerAIMatching
  };
}
