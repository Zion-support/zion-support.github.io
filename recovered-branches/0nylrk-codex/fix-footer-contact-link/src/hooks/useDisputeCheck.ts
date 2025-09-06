<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


  const [isLoading, setIsLoading] = useState(true);
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const [isLoading, setIsLoading] = useState(true);
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false),
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState(true),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  useEffect(() => {

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
        setIsLoading(false);
        return
      }
      try {


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

        setIsLoading(false),
        return
      }
      try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        setIsLoading(true);
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        setIsLoading(true),
        
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId),
        
<<<<<<< HEAD
=======
        query = query && query.order("status", { ascending: true });
        
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
<<<<<<< HEAD
          query = query && query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed
<<<<<<< HEAD
=======

        query = query && query.order("status", { ascending: true });
        

        const { data, error } = await query;
        if (error) throw error;
=======

=======
          query = query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed
        query = query.order("status", { ascending: true });
        const { data, error } = await query;
        if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        query = query.order("status", { ascending: true }),
        
        const { data, error } = await query,
        
        if (error) throw error,
        
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query && query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        if (data && data.length > 0) {
          // Get the first dispute (highest priority based on status)
          setIsUnderDispute(true),
          setDisputeStatus(data[0].status as any),
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        console.error ("Error checking dispute status:", err);
        setIsUnderDispute (false);
        setDisputeStatus (null);
        setDisputeId (null);
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      } finally {
        setIsLoading (false);
      }
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {
        setIsLoading(false)
<<<<<<< HEAD

    isLoading 

=======
=======
    isLoading 

      }
    }
    checkDispute()
  }, [projectId, milestoneId]);
  return {
    isUnderDispute
    disputeStatus
    disputeId;
    isLoading

    isLoading 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    isLoading

    isLoading 

    isLoading 

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
    check_dispute ();
  }, [project_id, milestone_id]);
;
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
  return {
    isUnderDispute,
    dispute_status,
    dispute_id;
    is_loading;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  }
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
