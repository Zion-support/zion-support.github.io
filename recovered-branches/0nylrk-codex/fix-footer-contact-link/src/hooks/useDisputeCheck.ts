import { useState, useEffect } from "react";
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState($2);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState($2);
=======

<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {};
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
=======
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false);
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null);
  const [disputeId, setDisputeId] = useState<string | null>(null);
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

  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
import { useState, useEffect } from "react",

import { supabase } from "@/integrations/supabase/client",
export function useDisputeCheck(projectId?: string, milestoneId?: string) {}
  const [isUnderDispute, setIsUnderDispute] = useState(false),'

  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),
  const [disputeId, setDisputeId] = useState<string | null>(null),
  const [isLoading, setIsLoading] = useState(true),

        setIsLoading(false),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  useEffect(() => {

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
<<<<<<< HEAD
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
=======
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
=======
        setIsLoading(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        return
      }
      try {

<<<<<<< HEAD
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        setIsLoading(true),
        
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId),
        
<<<<<<< HEAD
        query = query && query.order("status", { ascending: true });
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        // If milestone ID is provided, filter by that too
        if (milestoneId) {
<<<<<<< HEAD
          query = query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed
        query = query.order("status", { ascending: true });
        const { data, error } = await query;
        if (error) throw error;
=======
          query = query && query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed

        query = query && query.order("status", { ascending: true });
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        query = query.order("status", { ascending: true });
        const { data, error } = await query;
        if (error) throw error;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        query = query.order("status", { ascending: true }),
        
        const { data, error } = await query,
        
        if (error) throw error,
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD
isLoading 
    isLoading,
export function useDisputeCheck() {;
  }
  const [isUnderDispute, setIsUnderDispute] = useState(false),;
=======
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

          setIsUnderDispute (false);
          setDisputeStatus (null);
          setDisputeId (null);
        }
<<<<<<< HEAD
      } catch (err) {}
"
=======
      } catch (err) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        console.error ("Error checking dispute status:", err);
        setIsUnderDispute (false);
        setDisputeStatus (null);
        setDisputeId (null);
<<<<<<< HEAD
=======

<<<<<<< HEAD
      } finally {}
        setIsLoading (false);
      }
    }
"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      } finally {
        setIsLoading (false);
      }
    }
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {}
        setIsLoading(false)
<<<<<<< HEAD
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
=======

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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
export function useDisputeCheck(projectId?: string, milestoneId?: string) {;
  const [isUnderDispute, setIsUnderDispute] = useState(false),;
  const [disputeStatus, setDisputeStatus] = useState<'open' | 'under_review' | 'resolved' | 'closed' | null>(null),;
  const [disputeId, setDisputeId] = useState<string | null>(null),;
>>>>>>> origin/chore/fix-lint-and-merge
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const checkDispute = async () => {;
      if (!projectId && !milestoneId) {;
        setIsLoading(false),;
        return;
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    check_dispute ();
  }, [project_id, milestone_id]);
;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

        // Order by status priority: open, under_review, resolved, closed;"

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        // Order by status priority: open, under_review, resolved, closed;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
  }
  if (!projectId && !milestoneId) {
  //If milestone ID is provided, filter by that too if (milestoneId) {
  //Order by status "priority": open, under review, resolved, closed query = query.order ("status", {"
  }
  "ascending": true 
=======
const checkDispute = async () => {}
  if (!projectId && !milestoneId) {}
  //If milestone ID is provided, filter by that too if (milestoneId) {"
  //Order by status priority: open, under review, resolved, closed query = query.order ("status", {}
  ascending: true;
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
<<<<<<< HEAD
  return {
    isUnderDispute,
    dispute_status,
    dispute_id;
    is_loading;
=======
>>>>>>> merged-prs-20250907-203621

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
