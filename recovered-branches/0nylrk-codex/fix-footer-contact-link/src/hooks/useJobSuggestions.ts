
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
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  
  useEffect(() => {
    const fetchSuggestedJobs = async () => {
      if (!talentId) return,
=======

export function useJobSuggestions(_talentId?: string) {_const [jobMatches, _setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, _setIsLoading] = useState(true);
  
  useEffect__(() => {
    const _fetchSuggestedJobs = async () => {
      if (!talentId) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      try {
        setIsLoading(true),
        
        // Get job matches with job details
<<<<<<< HEAD
        const { data, error } = await supabase
          .from(&quot;job_talent_matches&quot;)
=======
        const { data, _error} = await supabase
          .from("job_talent_matches")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          .select(`
            *,
            job:job_id (*)
          `)
<<<<<<< HEAD
          .eq("talent_id", talentId)
<<<<<<< HEAD
          .order("created_at", { ascending: false }),
=======
          .eq(&quot;talent_id&quot;, talentId)
          .order(&quot;created_at&quot;, { ascending: false });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          .order("created_at", {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
        if (error) throw error,
        
<<<<<<< HEAD
        setJobMatches(data || [])
      } catch (error) {
<<<<<<< HEAD
        console.error("Error fetching job matches:", error),
        toast({
          title: "Error",
          description: "Failed to load job suggestions",
          variant: "destructive"})
=======
        console.error(&quot;Error fetching job matches:&quot;, error);
        toast({
          title: &quot;Error&quot;,
          description: &quot;Failed to load job suggestions&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },
=======
        setJobMatches(data || []);
      } catch (error) {_toast({
          title: "Error", _description: "Failed to load job suggestions", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    fetchSuggestedJobs()
  }, [talentId]),

<<<<<<< HEAD
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status,
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})
      },
      
      const { error } = await supabase
        .from(&quot;job_talent_matches&quot;)
=======
  const _updateJobMatchStatus = async (_matchId: string, _status: 'viewed' | 'applied' | 'declined') => {_try {
      const _updates = {
        status, _...(status === 'viewed' ? { viewed_at: new Date().toISOString()} : {})
      };
      
      const {_error} = await supabase
        .from("job_talent_matches")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .update(updates)
<<<<<<< HEAD
        .eq("id", matchId),
=======
        .eq(&quot;id&quot;, matchId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
      if (error) throw error,
      
      // Update local state
      setJobMatches(matches => 
        matches.map(match => 
          match.id === matchId 
            ? {_...match, _status, _...(status === 'viewed' ? { viewed_at: new Date().toISOString()} : {}) }
            : match
        )
      ),
      
      // Show appropriate message
<<<<<<< HEAD
      if (status === 'applied') {
        toast({
<<<<<<< HEAD
          title: "Application Submitted",
          description: "You've successfully applied to this job"
        })
      } else if (status === 'declined') {
        toast({
          title: "Job Declined",
          description: "This job will be removed from your suggestions"
        })
      }
    } catch (error) {
      console.error("Error updating job match status:", error),
      toast({
        title: "Error",
        description: "Failed to update job status",
        variant: "destructive"})
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      if (status === 'applied') {_toast({
          title: "Application Submitted", _description: "You've successfully applied to this job"});
      } else if (status === 'declined') {_toast({
          title: "Job Declined", _description: "This job will be removed from your suggestions"});
      }
    } catch (error) {_toast({
        title: "Error", _description: "Failed to update job status", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  // Filter matches by status
<<<<<<< HEAD
  const newMatches = jobMatches.filter(match => match.status === 'new'),
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed'),
  const appliedMatches = jobMatches.filter(match => match.status === 'applied'),
  const declinedMatches = jobMatches.filter(match => match.status === 'declined'),

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
  }
=======
  const _newMatches = jobMatches.filter(match => match.status === 'new');
  const _viewedMatches = jobMatches.filter(match => match.status === 'viewed');
  const _appliedMatches = jobMatches.filter(match => match.status === 'applied');
  const _declinedMatches = jobMatches.filter(match => match.status === 'declined');

  return {_jobMatches, _isLoading, _updateJobMatchStatus, _categorizedMatches: {
      newMatches, _viewedMatches, _appliedMatches, _declinedMatches}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
