
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JobMatch } from "@/types/jobs";
export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  const [isProcessing, setIsProcessing] = useState($2);
  const fetchMatches = async () => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase
        .from("job_talent_matches")
        .select(`
          *,
          talent_profile: talent_id(
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
        .order($2);
      if (error) throw error,
      setMatches(data || [])
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to load matched talents. Please try again later.",
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }
  },

  const triggerAIMatching = async () => {
    setIsProcessing($2);
    try {
      const response = await supabase.functions.invoke($2);
      if (response.error) throw new Error($2);
      toast($2);
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console.error($2);
      toast({
        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"})
    } finally {
      setIsProcessing(false)
    }
  },

  useEffect(() => {
    fetchMatches()
  }, [jobId]),

  return {
    matches,
    isLoading,
    isProcessing,
    triggerAIMatching
  }
}
