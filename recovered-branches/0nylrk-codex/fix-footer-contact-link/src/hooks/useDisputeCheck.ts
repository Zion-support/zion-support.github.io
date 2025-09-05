
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;

export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        
        let query = supabase
          .from(&quot;disputes&quot;)
          .select(&quot;id, status&quot;)
          .eq(&quot;project_id&quot;, projectId);
        
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query.eq(&quot;milestone_id&quot;, milestoneId);
        }
        
        // Order by status priority: open, under_review, resolved, closed
        query = query.order(&quot;status&quot;, { ascending: true });
        
        const { data, error } = await query;
        
        if (error) throw error;
        
        if (data && data.length > 0) {
          // Get the first dispute (highest priority based on status)
          setIsUnderDispute(true);
          setDisputeStatus(data[0].status as any);
          setDisputeId(data[0].id);
        } else {
          setIsUnderDispute(false);
          setDisputeStatus(null);
          setDisputeId(null);
        }
      } catch (err) {
        console.error(&quot;Error checking dispute status:&quot;, err);
        setIsUnderDispute(false);
        setDisputeStatus(null);
        setDisputeId(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkDispute();
  }, [projectId, milestoneId]);

  return { 
    isUnderDispute, 
    disputeStatus, 
    disputeId,
    isLoading 
  };
}
