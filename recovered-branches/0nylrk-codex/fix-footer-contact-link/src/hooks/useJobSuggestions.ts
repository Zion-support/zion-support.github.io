
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
      
      try {
        setIsLoading(true),
        
        // Get job matches with job details
        const { data, error } = await supabase
          .from(&quot;job_talent_matches&quot;)
          .select(`
            *,
            job:job_id (*)
          `)
<<<<<<< HEAD
          .eq("talent_id", talentId)
          .order("created_at", { ascending: false }),
=======
          .eq(&quot;talent_id&quot;, talentId)
          .order(&quot;created_at&quot;, { ascending: false });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          
        if (error) throw error,
        
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
    
    fetchSuggestedJobs()
  }, [talentId]),

  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status,
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})
      },
      
      const { error } = await supabase
        .from(&quot;job_talent_matches&quot;)
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
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
      ),
      
      // Show appropriate message
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
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { JobMatch } from "@/types/jobs",;
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const fetchSuggestedJobs = async () => {;
      if (!talentId) return,;
      try {;
        setIsLoading(true),;
        // Get job matches with job details;
        const { data, error } = await supabase;
          .from("job_talent_matches");
          .select(`;
            *,;
            job:job_id (*);
          `);
          .eq("talent_id", talentId);
          .order("created_at", { ascending: false }),;
        if (error) throw error,;
        setJobMatches(data || []);
      } catch (error) {;
        console.error("Error fetching job matches:", error),;
        toast({;
          title: "Error",;
          description: "Failed to load job suggestions",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchSuggestedJobs();
  }, [talentId]),;
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {;
    try {;
      const updates = {;
        status,;
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {});
      },;
      const { error } = await supabase;
        .from("job_talent_matches");
        .update(updates);
        .eq("id", matchId),;
      if (error) throw error,;
      // Update local state;
      setJobMatches(matches =>;
        matches.map(match =>;
          match.id === matchId;
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        );
      ),;
      // Show appropriate message;
      if (status === 'applied') {;
        toast({;
          title: "Application Submitted",;
          description: "You've successfully applied to this job";
        });
      } else if (status === 'declined') {;
        toast({;
          title: "Job Declined",;
          description: "This job will be removed from your suggestions";
        });
      }
    } catch (error) {;
      console.error("Error updating job match status:", error),;
      toast({;
        title: "Error",;
        description: "Failed to update job status",;
        variant: "destructive"});
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  // Filter matches by status;
  const newMatches = jobMatches.filter(match => match.status === 'new'),;
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed'),;
  const appliedMatches = jobMatches.filter(match => match.status === 'applied'),;
  const declinedMatches = jobMatches.filter(match => match.status === 'declined'),;
  return {;
    jobMatches,;
    isLoading,;
    updateJobMatchStatus,;
    categorizedMatches: {;
      newMatches,;
      viewedMatches;
      appliedMatches;
      declinedMatches;
    }
  }
}
;