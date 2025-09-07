import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState($2);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState($2);
  useEffect(() => {

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading($2);
        return
      }
      try {
        setIsLoading($2);
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq($2);
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed
        query = query.order($2);
        const { data, error } = await query,
        
        if (error) throw error,
        
        if (data && data.length > 0) {
          // Get the first dispute (highest priority based on status)
          setIsUnderDispute($2);
          setDisputeStatus($2);
          setDisputeId(data[0].id)
        } else {
          setIsUnderDispute($2);
          setDisputeStatus($2);
          setDisputeId(null)
        }
      } catch (err) {
        console.error($2);
        setIsUnderDispute($2);
        setDisputeStatus($2);
        setDisputeId(null)
      } finally {
        setIsLoading(false)
      }
    },
    
    checkDispute()
  }, [projectId, milestoneId]),

  return { 
    isUnderDispute, 
    disputeStatus, 
    disputeId,
    isLoading 
  }
}
