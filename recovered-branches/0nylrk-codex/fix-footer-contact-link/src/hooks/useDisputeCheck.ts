
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
=======
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false),
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState(true),
=======

export function useDisputeCheck(_projectId?: string, _milestoneId?: string) {_const [isUnderDispute, _setIsUnderDispute] = useState(false);
  const [disputeStatus, _setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, _setDisputeId] = useState<string | null>(null);
  const [isLoading, _setIsLoading] = useState(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    const _checkDispute = async () => {
      if (!projectId && !milestoneId) {
<<<<<<< HEAD
        setIsLoading(false),
        return
      }

      try {
        setIsLoading(true),
        
        let query = supabase
<<<<<<< HEAD
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId),
=======
        setIsLoading(false);
        return;}

      try {_setIsLoading(true);
        
        let _query = supabase
          .from("disputes")
          .select("id, _status")
          .eq("project_id", _projectId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // If milestone ID is provided, _filter by that too
        if (milestoneId) {
<<<<<<< HEAD
          query = query.eq("milestone_id", milestoneId)
        }
        
        // Order by status priority: open, under_review, resolved, closed
        query = query.order("status", { ascending: true }),
=======
          .from(&quot;disputes&quot;)
          .select(&quot;id, status&quot;)
          .eq(&quot;project_id&quot;, projectId);
        
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query.eq(&quot;milestone_id&quot;, milestoneId);
        }
=======
          query = query.eq("milestone_id", _milestoneId);}
        
        // Order by status priority: open, under_review, resolved, closed
        query = query.order("status", {_ascending: true});
        
        const {_data, _error} = await query;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // Order by status priority: open, under_review, resolved, closed
        query = query.order(&quot;status&quot;, { ascending: true });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
        const { data, error } = await query,
        
        if (error) throw error,
        
<<<<<<< HEAD
        if (data && data.length > 0) {
          // Get the first dispute (highest priority based on status)
          setIsUnderDispute(true),
          setDisputeStatus(data[0].status as any),
          setDisputeId(data[0].id)
        } else {
          setIsUnderDispute(false),
          setDisputeStatus(null),
          setDisputeId(null)
        }
      } catch (err) {
<<<<<<< HEAD
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
=======
        console.error(&quot;Error checking dispute status:&quot;, err);
        setIsUnderDispute(false);
        setDisputeStatus(null);
        setDisputeId(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },
=======
        if (data && data.length > 0) {_// Get the first dispute (highest priority based on status)
          setIsUnderDispute(true);
          setDisputeStatus(data[0].status as any);
          setDisputeId(data[0].id);} else {_setIsUnderDispute(false);
          setDisputeStatus(null);
          setDisputeId(null);}
      } catch (err) {_setIsUnderDispute(false);
        setDisputeStatus(null);
        setDisputeId(null);} finally {_setIsLoading(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    checkDispute()
  }, [projectId, milestoneId]),

<<<<<<< HEAD
  return { 
    isUnderDispute,
    disputeStatus,
    disputeId,
    isLoading 
  }
=======
  return {_isUnderDispute, _disputeStatus, _disputeId, _isLoading};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
