import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JobMatch } from "@/types/jobs";

export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchMatches = async () => {
    try {
      const { data, error } = await supabase
        .from('job_matches')
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
        .order('match_percentage', { ascending: false });

      if (error) throw error;
      setMatches(data || []);
    } catch (error) {
      console.error('Error fetching job matches:', error);
      toast({
        title: "Error",
        description: "Failed to load job matches",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const triggerAIMatching = async () => {
    setIsProcessing(true);
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
        body: { job_id: jobId }
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast({
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`,
      });

      // Refresh the matches list
      await fetchMatches();
    } catch (error) {
      console.error("Error triggering AI matching:", error);
      toast({
        title: "Error",
        description: "Failed to run AI matching. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (jobId) {
      fetchMatches();
    }
  }, [jobId]);

  return {
    matches,
    isLoading,
    isProcessing,
    triggerAIMatching,
    refetch: fetchMatches
  };
}