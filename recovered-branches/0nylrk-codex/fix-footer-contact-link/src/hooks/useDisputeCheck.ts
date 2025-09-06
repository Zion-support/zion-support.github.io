<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts


<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false),
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState(true),

=======

<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
<<<<<<< HEAD


  const [isLoading, setIsLoading] = useState(true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [isLoading, setIsLoading] = useState(true);
=======
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false),
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState(true),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
<<<<<<< HEAD
        setIsLoading(false);
        return
      }
      try {

<<<<<<< HEAD
=======

=======
        setIsLoading(false),
        return
      }
      try {
<<<<<<< HEAD
        setIsLoading(true);
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setIsLoading(true),
        
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId),
        
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query && query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed

<<<<<<< HEAD
=======
        query = query && query.order("status", { ascending: true });
        

========
<<<<<<< HEAD
query = query && query.order("status", { ascending: true });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts
        const { data, error } = await query;
        if (error) throw error;
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed
<<<<<<< HEAD
        query = query.order("status", { ascending: true });
        const { data, error } = await query;
        if (error) throw error;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        query = query.order("status", { ascending: true }),
        
        const { data, error } = await query,
        
        if (error) throw error,
        
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts
        console.error ("Error checking dispute status:", err);
        setIsUnderDispute (false);
        setDisputeStatus (null);
        setDisputeId (null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {
        setIsLoading(false)
<<<<<<< HEAD

<<<<<<< HEAD
=======
    isLoading 

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      }
    }
    checkDispute()
  }, [projectId, milestoneId]);
  return {
    isUnderDispute
    disputeStatus
    disputeId;
<<<<<<< HEAD
    isLoading

=======
    isLoading 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts
;
    check_dispute ();
  }, [project_id, milestone_id]);
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts

=======
;
      try {;
        setIsLoading(true),;
        let query = supabase;
          .from("disputes");
          .select("id, status");
          .eq("project_id", projectId),;
        // If milestone ID is provided, filter by that too;
        if (milestoneId) {;
          query = query.eq("milestone_id", milestoneId);
        }
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  return {
    isUnderDispute,
    dispute_status,
    dispute_id;
    is_loading;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useDisputeCheck.ts
  }
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
