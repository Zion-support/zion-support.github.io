
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { JobMatch } from &quot;@/types/jobs&quot;;

export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchMatches = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from(&quot;job_talent_matches&quot;)
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
        .eq(&quot;job_id&quot;, jobId)
        .order(&quot;match_score&quot;, { ascending: false });

      if (error) throw error;
      setMatches(data || []);
    } catch (error) {
      console.error(&quot;Error fetching job matches:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load matched talents. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
    } finally {
      setIsLoading(false);
    }
  };

  const triggerAIMatching = async () => {
    setIsProcessing(true);
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
        body: { jobId }});
      
      if (response.error) throw new Error(response.error.message);
      
      toast({
        title: &quot;AI Matching Complete&quot;,
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
      
      // Refresh the matches list
      await fetchMatches();
    } catch (error) {
      console.error(&quot;Error triggering AI matching:&quot;, error);
      toast({
        title: &quot;Matching Failed&quot;,
        description: &quot;Could not process talent matching. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
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
