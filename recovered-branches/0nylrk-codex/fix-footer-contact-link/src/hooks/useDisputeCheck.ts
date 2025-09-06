
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkDispute = null;
    isLoading 
  }
}
;