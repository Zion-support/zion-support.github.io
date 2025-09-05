
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { JobMatch } from "@/types/jobs",
=======
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { JobMatch } from &quot;@/types/jobs&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),

  const fetchMatches = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from(&quot;job_talent_matches&quot;)
=======

export function useJobMatches(_jobId: string) {_const [matches, _setMatches] = useState<JobMatch[]>([]);
  const [isLoading, _setIsLoading] = useState(true);
  const [isProcessing, _setIsProcessing] = useState(false);

  const _fetchMatches = async () => {
    setIsLoading(true);
    try {
      const { data, _error} = await supabase
        .from("job_talent_matches")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        .eq("job_id", jobId)
<<<<<<< HEAD
        .order("match_score", { ascending: false }),
=======
        .eq(&quot;job_id&quot;, jobId)
        .order(&quot;match_score&quot;, { ascending: false });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      if (error) throw error,
      setMatches(data || [])
    } catch (error) {
<<<<<<< HEAD
      console.error("Error fetching job matches:", error),
      toast({
        title: "Error",
        description: "Failed to load matched talents. Please try again later.",
        variant: "destructive"})
=======
      console.error(&quot;Error fetching job matches:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load matched talents. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const triggerAIMatching = async () => {
    setIsProcessing(true),
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
        body: { jobId }}),
=======
        .order("match_score", {_ascending: false});

      if (error) throw error;
      setMatches(data || []);
    } catch (error) {_toast({
        title: "Error", _description: "Failed to load matched talents. Please try again later.", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };

  const _triggerAIMatching = async () => {_setIsProcessing(true);
    try {
      const _response = await supabase.functions.invoke('job-talent-matcher', _{
        body: { jobId}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (response.error) throw new Error(response.error.message),
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`}),
=======
        title: &quot;AI Matching Complete&quot;,
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
<<<<<<< HEAD
      console.error("Error triggering AI matching:", error),
      toast({
        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"})
=======
      console.error(&quot;Error triggering AI matching:&quot;, error);
      toast({
        title: &quot;Matching Failed&quot;,
        description: &quot;Could not process talent matching. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
      toast({_title: "AI Matching Complete", _description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
      
      // Refresh the matches list
      await fetchMatches();
    } catch (error) {_toast({
        title: "Matching Failed", _description: "Could not process talent matching. Please try again later.", _variant: "destructive"});
    } finally {_setIsProcessing(false);}
  };

  useEffect__(() => {_fetchMatches();}, [jobId]);

  return {_matches, _isLoading, _isProcessing, _triggerAIMatching};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
