

import { useState, useEffect } from "react";""
import { supabase } from "@/integrations/supabase/client";"
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);"
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),'
  const [disputeId, setDisputeId] = useState<string | null>(null),
</string>'
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);'
  const [disputeId, setDisputeId] = useState<string | null>(null);
</string>'
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),'
  const [disputeId, setDisputeId] = useState<string | null>(null),
</string>'
  const [dispute_status, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);'
  const [dispute_id, setDisputeId] = useState < string | null>(null);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    const check_dispute = async () => {
      // Check condition;
if ( {) {
  $2;
}
        setIsLoading (false);
        return;
      }
      try {
  // TODO: Implement
}
        setIsLoading (true);
;
        let query = supabase;'
          .from ("disputes");""
          .select ("id, status");""
          .eq ("project_id", project_id);"
;
        // If milestone ID is provided, filter by that too;
        // Check condition;
if ( {) {
  $2;
}"
          query = query.eq ("milestone_id", milestone_id);"
        }
        // Order by status priority: open, under_review, resolved, closed;"
        query = query.order ("status", { ascending: true });"
;
        const { data, error } = await query;
;
        // Check condition;
if (throw error) {
  $2;
}
        // Check condition;
if ( {) {
  $2;
}
          // Get the first dispute (highest priority based on status);
          setIsUnderDispute (true);
          setDisputeStatus (data[0].status as any);
          setDisputeId (data[0].id);
        } else {
  // TODO: Implement
}
          setIsUnderDispute (false);
          setDisputeStatus (null);
          setDisputeId (null);
        }
      } catch (err) {
"
        console.error ("Error checking dispute status:", err);"
        setIsUnderDispute (false);
        setDisputeStatus (null);
        setDisputeId (null);

      } finally {
  // TODO: Implement
}
        setIsLoading (false);
      }
    }
"
        console.error("Error checking dispute status:", err),"
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {
  // TODO: Implement
}
        setIsLoading(false)

    isLoading;
    isLoading;
    isLoading;
    isLoading;"
import { useState, useEffect } from "react",;""
import { supabase } from "@/integrations/supabase/client",;"
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false),;"
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),;'
  const [disputeId, setDisputeId] = useState<string | null>(null),;
</string>'
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),;'
  const [disputeId, setDisputeId] = useState<string | null>(null),;
</string>'
const [disputeStatus, setDisputeStatus] = useState<'open' | 'under review' | 'resolved' | 'closed' | null> (null);'
const [disputeId, setDisputeId] = useState<string | null> (null);
</string>'