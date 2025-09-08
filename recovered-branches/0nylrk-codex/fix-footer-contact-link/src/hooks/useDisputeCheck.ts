import { useState, useEffect } from "react";

<<<<<<< HEAD
=======

import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {};
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
>>>>>>> origin/cursor/delete-old-data-records-6bba


import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
<<<<<<< HEAD


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {


=======

  const [isLoading, setIsLoading] = useState(true);
import { useState, useEffect } from "react",

import { supabase } from "@/integrations/supabase/client",
export function useDisputeCheck(projectId?: string, milestoneId?: string) {}
  const [isUnderDispute, setIsUnderDispute] = useState(false),'

  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState(true),

        setIsLoading(false),

        return
      }
      try {


        // If milestone ID is provided, filter by that too
        if (milestoneId) {

        query = query.order("status", { ascending: true });
        const { data, error } = await query;
        if (error) throw error;

>>>>>>> origin/cursor/delete-old-data-records-6bba
        query = query.order("status", { ascending: true }),
        
        const { data, error } = await query,
        
        if (error) throw error,

<<<<<<< HEAD
        

=======

        if (data && data.length > 0) {
          // Get the first dispute (highest priority based on status)
          setIsUnderDispute(true),
          setDisputeStatus(data[0].status as any),
          setDisputeId(data[0].id)

import { supabase } from '@/integrations / supabase / client';
export /**;
 * useDisputeCheck - Function description;
 */
function useDisputeCheck() {}
  const [isUnderDispute, setIsUnderDispute] = useState (false);'
  const [dispute_status, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [dispute_id, setDisputeId] = useState < string | null>(null);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {}
    const check_dispute = async () => {}
      // Check condition;
if ( {) {}
  $2;
}
isLoading 
    isLoading,
export function useDisputeCheck() {;
  }
  const [isUnderDispute, setIsUnderDispute] = useState(false),;
      } catch (err) {}
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
        console.error ("Error checking dispute status:", err);
        setIsUnderDispute (false);
        setDisputeStatus (null);
        setDisputeId (null);

<<<<<<< HEAD


=======
      } finally {}
        setIsLoading (false);
      }
    }
"

>>>>>>> origin/cursor/delete-old-data-records-6bba
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {}
        setIsLoading(false)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading(false),
        return
      }

    isLoading 

    isLoading 

import { useState, useEffect } from "react",;

import { supabase } from "@/integrations/supabase/client",;
export function useDisputeCheck() { return null; }
      }

    isLoading 

    isLoading 


import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false),;
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),;
  const [disputeId, setDisputeId] = useState<string | null>(null),;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const checkDispute = async () => {;
      if (!projectId && !milestoneId) {;
        setIsLoading(false),;
        return;
      }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
    check_dispute ();
  }, [project_id, milestone_id]);
;

<<<<<<< HEAD
=======
}  }
}
import { useState, useEffect } from "react",;"
import { supabase } from "@/integrations/supabase/client",;"
;
export function useDisputeCheck() {;
  }
;
  useEffect(() => {;
    }
      }
      if (!projectId && !milestoneId) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

        // Order by status priority: open, under_review, resolved, closed;"


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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }

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

  }
}

<<<<<<< HEAD

const checkDispute = async () => {}
  if (!projectId && !milestoneId) {}
  //If milestone ID is provided, filter by that too if (milestoneId) {"
  //Order by status priority: open, under review, resolved, closed query = query.order ("status", {}
  ascending: true;

=======

  return {

    isUnderDispute,
    dispute_status,
    dispute_id;
    is_loading;

  }

}

import { useState, useEffect } from "react",;

import { supabase } from "@/integrations/supabase/client",;
;
export function useDisputeCheck() { return null; }
      }
;
      try {;
        setIsLoading(true),;
        ;
        let query = supabase;"
          .from("disputes");"
          .select("id, status");"
          .eq("project_id", projectId),;
        ;
        // If milestone ID is provided, filter by that too;
        if (milestoneId) {;"
          query = query.eq("milestone_id", milestoneId),;
        }
        ;
        // Order by status priority:open, under_review, resolved, closed;"
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
      } catch (err) {;"
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
} export function useDisputeCheck (projectId?: string, milestoneId?: string) {};
  const [isUnderDispute, setIsUnderDispute] = useState (false);'
const [disputeStatus, setDisputeStatus] = useState<'open' | 'under review' | 'resolved' | 'closed' | null> (null);
const [disputeId, setDisputeId] = useState<string | null> (null);
const [isLoading, setIsLoading] = useState (true);
  }
  if (!projectId && !milestoneId) {
  //If milestone ID is provided, filter by that too if (milestoneId) {
  //Order by status "priority": open, under review, resolved, closed query = query.order ("status", {"
  }
  "ascending": true 
>>>>>>> origin/cursor/delete-old-data-records-6bba
});
  data, error;
}= await query;
if (error) throw error;
}finally {}
  setIsLoading (false) 
}
};
}, [projectId, milestoneId]);
}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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