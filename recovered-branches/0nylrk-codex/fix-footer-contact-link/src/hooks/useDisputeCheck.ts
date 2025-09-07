
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading(false),
        return
      }
      try {    isLoading

    isLoading 

    isLoading 

import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false),;
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),;
  const [disputeId, setDisputeId] = useState<string | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const checkDispute = async () => {;
      if (!projectId && !milestoneId) {;
        setIsLoading(false),;
        return;
      }
;
    check_dispute ();
  }, [project_id, milestone_id]);
;
}  }
}

import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
;
export function useDisputeCheck(projectId?:string, milestoneId?:string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false),;
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),;
  const [disputeId, setDisputeId] = useState<string | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
;
  useEffect(() => {;
    const checkDispute = async () => {;
      if (!projectId && !milestoneId) {;
        setIsLoading(false),;
        return,;
      }
;
      try {;
        setIsLoading(true),;
        ;
        let query = supabase;
          .from("disputes");
          .select("id, status");
          .eq("project_id", projectId),;
        ;
        // If milestone ID is provided, filter by that too;
        if (milestoneId) {;
          query = query.eq("milestone_id", milestoneId),;
        }
        ;
        // Order by status priority:open, under_review, resolved, closed;
        query = query.order("status", { ascending:true }),;
        ;
        const { data, error } = await query,;
        ;
        if (error) throw error,;
        ;
        if (data && data.length > 0) {;
          // Get the first dispute (highest priority based on status);
          setIsUnderDispute(true),;
          setDisputeStatus(data[0].status as any),;
          setDisputeId(data[0].id),;
        } else {;
          setIsUnderDispute(false),;
          setDisputeStatus(null),;
          setDisputeId(null),;
        }
      } catch (err) {;
        console.error("Error checking dispute status:", err),;
        setIsUnderDispute(false),;
        setDisputeStatus(null),;
        setDisputeId(null),;
      } finally {;
        setIsLoading(false),;
      }
    },;
    ;
    checkDispute(),;
  }, [projectId, milestoneId]),;
;
  return { ;
    isUnderDispute, ;
    disputeStatus, ;
    disputeId,;
    isLoading ;
  },;
} export function useDisputeCheck (projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState (false);
const [disputeStatus, setDisputeStatus] = useState<'open' | 'under review' | 'resolved' | 'closed' | null> (null);
const [disputeId, setDisputeId] = useState<string | null> (null);
const [isLoading, setIsLoading] = useState (true);
const checkDispute = async () => {
  if (!projectId && !milestoneId) {
  //If milestone ID is provided, filter by that too if (milestoneId) {
  //Order by status priority: open, under review, resolved, closed query = query.order ("status", {
  ascending: true 
});
  data, error 
}= await query;
if (error) throw error;
}finally {
  setIsLoading (false) 
}
};
}, [projectId, milestoneId]);
}
  }
}


import { useState, useEffect } from "react";""
import { supabase } from "@/integrations/supabase/client";"
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);"
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
</string>
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
  const [dispute_status, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
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
      try {
  // TODO: Implement
        setIsLoading (true);
        let query = supabase;
          .from ("disputes");""
          .select ("id, status");""
          .eq ("project_id", project_id);"
        // If milestone ID is provided, filter by that too;
        // Check condition;
}"
          query = query.eq ("milestone_id", milestone_id);"
        // Order by status priority: open, under_review, resolved, closed;"
        query = query.order ("status", { ascending: true });"
        const { data, error } = await query;
        // Check condition;
if (throw error) {
        // Check condition;
          // Get the first dispute (highest priority based on status);
          setIsUnderDispute (true);
          setDisputeStatus (data[0].status as any);
          setDisputeId (data[0].id);
        } else {
  // TODO: Implement
          setIsUnderDispute (false);
          setDisputeStatus (null);
          setDisputeId (null);
      } catch (err) {
"
        console.error ("Error checking dispute status:", err);"

      } finally {
  // TODO: Implement
        console.error("Error checking dispute status:", err),"
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
  // TODO: Implement
        setIsLoading(false)

    isLoading;
    isLoading;"
import { useState, useEffect } from "react",;""
import { supabase } from "@/integrations/supabase/client",;"
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false),;"
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),;
  const [disputeId, setDisputeId] = useState<string | null>(null),;
const [disputeStatus, setDisputeStatus] = useState<'open' | 'under review' | 'resolved' | 'closed' | null> (null);
const [disputeId, setDisputeId] = useState<string | null> (null);
pr-12325
</string>'

