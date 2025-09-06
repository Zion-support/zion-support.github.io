
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
=======
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading(false);
        return
      }
      try {
        setIsLoading(true);
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId);
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query && query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed
        query = query.order("status", { ascending: true });
        const { data, error } = await query;
        if (error) throw error;
        if (data && data.length > 0) {
          // Get the first dispute (highest priority based on status)
          setIsUnderDispute(true);
          setDisputeStatus(data[0].status as any);
          setDisputeId(data[0].id)
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
export /**
 * useDisputeCheck - Function description
 */
function useDisputeCheck() {
  const [isUnderDispute, setIsUnderDispute] = useState (false);
  const [dispute_status, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [dispute_id, setDisputeId] = useState < string | null>(null);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    const check_dispute = async () => {
      // Check condition
if ( {) {
  $2
}
        setIsLoading (false);
        return;
      }
      try {
        setIsLoading (true);
;
        let query = supabase;
          .from ("disputes");
          .select ("id, status");
          .eq ("project_id", project_id);
;
        // If milestone ID is provided, filter by that too;
        // Check condition
if ( {) {
  $2
}
          query = query.eq ("milestone_id", milestone_id);
        }
        // Order by status priority: open, under_review, resolved, closed;
        query = query.order ("status", { ascending: true });
;
        const { data, error } = await query;
;
        // Check condition
if (throw error) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          // Get the first dispute (highest priority based on status);
          setIsUnderDispute (true);
          setDisputeStatus (data[0].status as any);
          setDisputeId (data[0].id);
        } else {
          setIsUnderDispute (false);
          setDisputeStatus (null);
          setDisputeId (null);
        }
      } catch (err) {
        console && console.error("Error checking dispute status:", err);
        setIsUnderDispute(false);
        setDisputeStatus(null);
        setDisputeId(null)
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<< HEAD
=======

=======
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {
        setIsLoading(false)
<<<<<<< HEAD
      }
    }
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    checkDispute()
  }, [projectId, milestoneId]);
  return {
    isUnderDispute
    disputeStatus
<<<<<<< HEAD
    disputeId;
    isLoading

=======
    disputeId;
<<<<<<< HEAD
    isLoading

=======
    isLoading 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

        // Order by status priority: open, under_review, resolved, closed;
        query = query.order("status", { ascending: true }),;
        const { data, error } = await query,;
        if (error) throw error,;
        if (data && data.length > 0) {;
          // Get the first dispute (highest priority based on status);
          setIsUnderDispute(true),;
          setDisputeStatus(data[0].status as any),;
          setDisputeId(data[0].id);
        } else {;
          setIsUnderDispute(false),;
          setDisputeStatus(null),;
          setDisputeId(null);
        }
      } catch (err) {;
        console.error("Error checking dispute status:", err),;
        setIsUnderDispute(false),;
        setDisputeStatus(null),;
        setDisputeId(null);
      } finally {;
        setIsLoading(false);
      }
    },;
    checkDispute();
  }, [projectId, milestoneId]),;
  return {;
    isUnderDispute,;
    disputeStatus;
    disputeId;
    isLoading;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
}