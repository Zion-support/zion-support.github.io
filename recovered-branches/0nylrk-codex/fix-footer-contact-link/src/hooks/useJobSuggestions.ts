
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { JobMatch } from &quot;@/types/jobs&quot;;

export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchSuggestedJobs = async () => {
      if (!talentId) return;
      
      try {
        setIsLoading(true);
        
        // Get job matches with job details
        const { data, error } = await supabase
          .from(&quot;job_talent_matches&quot;)
          .select(`
            *,
            job:job_id (*)
          `)
          .eq(&quot;talent_id&quot;, talentId)
          .order(&quot;created_at&quot;, { ascending: false });
          
        if (error) throw error;
        
        setJobMatches(data || []);
      } catch (error) {
        console.error(&quot;Error fetching job matches:&quot;, error);
        toast({
          title: &quot;Error&quot;,
          description: &quot;Failed to load job suggestions&quot;,
          variant: &quot;destructive&quot;});
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSuggestedJobs();
  }, [talentId]);

  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status,
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})
      };
      
      const { error } = await supabase
        .from(&quot;job_talent_matches&quot;)
        .update(updates)
        .eq(&quot;id&quot;, matchId);
        
      if (error) throw error;
      
      // Update local state
      setJobMatches(matches => 
        matches.map(match => 
          match.id === matchId 
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
      );
      
      // Show appropriate message
      if (status === 'applied') {
        toast({
          title: &quot;Application Submitted&quot;,
          description: &quot;You've successfully applied to this job&quot;
        });
      } else if (status === 'declined') {
        toast({
          title: &quot;Job Declined&quot;,
          description: &quot;This job will be removed from your suggestions&quot;
        });
      }
    } catch (error) {
      console.error(&quot;Error updating job match status:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update job status&quot;,
        variant: &quot;destructive&quot;});
    }
  };

  // Filter matches by status
  const newMatches = jobMatches.filter(match => match.status === 'new');
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed');
  const appliedMatches = jobMatches.filter(match => match.status === 'applied');
  const declinedMatches = jobMatches.filter(match => match.status === 'declined');

  return {
    jobMatches,
    isLoading,
    updateJobMatchStatus,
    categorizedMatches: {
      newMatches,
      viewedMatches,
      appliedMatches,
      declinedMatches
    }
  };
}
