
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react";
=======
import { useState, useEffect } from "react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {};
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [isLoading, setIsLoading] = useState(true);
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
export function useDisputeCheck(projectId?: string, milestoneId?: string) {}
  const [isUnderDispute, setIsUnderDispute] = useState(false),'
=======

  const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState(true),

useEffect(() => {}
    const checkDispute = async () => {}
      if (!projectId && !milestoneId) {};
        setIsLoading(false),;
        return;
      }
try {

<<<<<<< HEAD

        setIsLoading(false),
        return
      }
      try {
setIsLoading(true);
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        setIsLoading(true),

        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId),

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        // If milestone ID is provided, filter by that too
        if (milestoneId) {
query = query && query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed

        query = query && query.order("status", { ascending: true });

        const { data, error } = await query;
        if (error) throw error;
        query = query.order("status", { ascending: true });
        const { data, error } = await query;
        if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        query = query.order("status", { ascending: true }),

        const { data, error } = await query,

        if (error) throw error,

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
        setIsLoading (false);
        return;
      }
      try {}
        setIsLoading (true);
;
        let query = supabase;"
          .from ("disputes");"
          .select ("id, status");"
          .eq ("project_id", project_id);
;
        // If milestone ID is provided, filter by that too;
        // Check condition;
if ( {) {}
  $2;
}"
          query = query.eq ("milestone_id", milestone_id);
        }
        // Order by status priority: open, under_review, resolved, closed;"
        query = query.order ("status", { ascending: true });
;
        const { data, error } = await query;
;
        // Check condition;
if (throw error) {}
  $2;
}
        // Check condition;
if ( {) {}
  $2;
}
          // Get the first dispute (highest priority based on status);
          setIsUnderDispute (true);
          setDisputeStatus (data[0].status as any);
          setDisputeId (data[0].id);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        } else {
          setIsUnderDispute (false);
          setDisputeStatus (null);
          setDisputeId (null);
        }
      } catch (err) {}
"
        console.error ("Error checking dispute status:", err);
        setIsUnderDispute (false);
        setDisputeStatus (null);
        setDisputeId (null);

      } finally {}
        setIsLoading (false);
      }
    }
"
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {}
        setIsLoading(false)
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading(false),
        return
      }
try {    isLoading
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

    isLoading 

    isLoading 

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect } from "react",;
=======
    isLoading;
    isLoading;
    isLoading;
"
import { useState, useEffect } from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { supabase } from "@/integrations/supabase/client",;
export function useDisputeCheck() { return null; }
      }

=======
      try {
        setIsLoading(true);
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId);
        setIsLoading(true),

        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId),

=======
      try {    isLoading
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    check_dispute ();
  }, [project_id, milestone_id]);
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
        }
} catch (err) {;"
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
  return {
=======
  }
}
return {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    isUnderDispute,
    dispute_status,
    dispute_id;
    is_loading;

  }

=======
}  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

import { useState, useEffect } from "react",;
=======
  }
}
"
import { useState, useEffect } from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
const checkDispute = async () => {}
  if (!projectId && !milestoneId) {}
  //If milestone ID is provided, filter by that too if (milestoneId) {"
  //Order by status priority: open, under review, resolved, closed query = query.order ("status", {}
  ascending: true;
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
  }
}
