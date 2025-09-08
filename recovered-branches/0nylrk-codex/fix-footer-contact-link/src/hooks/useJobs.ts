

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { toast } from "sonner",
import { useAuth } from "./useAuth",

import { createJob, updateJob, getJobById } from "@/services/jobService",

export const useJobs = (userId?: string, status?: JobStatus) => {}

  const { user } = useAuth(),
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

      setIsLoading(true);
      setIsLoading(true),
      







      const { error: updateError } = await supabase;"
        .from("jobs");
        .update({ status: newStatus });"



  }
}
;


