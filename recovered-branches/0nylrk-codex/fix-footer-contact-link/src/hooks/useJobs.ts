<<<<<<< HEAD:src/hooks/useJobs.ts
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
);
      if(status) {;
        query = query.eq("status", status);
}

      const { data, error: fetchError } = await query;
      if(fetchError) throw fetchError;
      setJobs(data as Job[] || []); // Ensure data is not null;
      setError(null);
} catch(err: any) {;
      console.error("Error fetching jobs:", err);
      setError("Failed to fetch jobs.Please try again.");
      toast.error("Failed to fetch jobs");
      setJobs([]); // Clear jobs on error;
} finally {;
      setIsLoading(false);
}
  }, [clientId, status]); // Dependencies for fetchJobs;

  const updateJobStatus = async(jobId: string, newStatus: JobStatus) => {;
    if(!clientId) return false;
    try {;
      const { error: updateError } = await supabase;
        .from("jobs");
        .update({ status: newStatus });
        .eq("id", jobId);
        .eq("client_id", clientId);

      if(updateError) throw updateError;
      setJobs(prevJobs => prevJobs.map(job => job.id === jobId ? {...job, status: newStatus} : job));
      toast.success("Job status updated successfully");
      return true;
} catch(err: any) {;
      console.error("Error updating job status:", err);
      toast.error("Failed to update job status");
      return false;
}
  };
  const deleteJob = async(jobId: string) => {;
    if(!clientId) return false;
    try {;
      const { error: deleteError } = await supabase;
        .from("jobs");
        .delete();
        .eq("id", jobId);
        .eq("client_id", clientId);

      if(deleteError) throw deleteError;
      setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
      toast.success("Job deleted successfully");
      return true;
} catch(err: any) {;
      console.error("Error deleting job:", err);
      toast.error("Failed to delete job");
      return false;
}
  };
  useEffect(() => {
  // TODO: Add dependencies if needed;
}, []);
    fetchJobs();
}, [fetchJobs]); // Changed dependencies to just fetchJobs;
  return {;
=======

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Job, JobStatus } from "@/types/jobs";
import { toast } from "sonner";
import { useAuth } from "./useAuth";
import { createJob, updateJob, getJobById } from "@/services/jobService";

export const useJobs = (userId?: string, status?: JobStatus) => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const clientId = userId || user?.id;

  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      
      let query = supabase
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)
        .order("created_at", { ascending: false });
      
      if (status) {
        query = query.eq("status", status);
      }
      
      const { data, error: fetchError } = await query;
      
      if (fetchError) throw fetchError;
      
      setJobs(data as Job[]);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching jobs:", err);
      setError("Failed to fetch jobs. Please try again.");
      toast.error("Failed to fetch jobs");
    } finally {
      setIsLoading(false);
    }
  };
  
  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
      const { error: updateError } = await supabase
        .from("jobs")
        .update({ status: newStatus })
        .eq("id", jobId)
        .eq("client_id", clientId); // Ensure user can only update their own jobs
      
      if (updateError) throw updateError;
      
      // Update local state
      setJobs(jobs.map(job => job.id === jobId ? {...job, status: newStatus} : job));
      toast.success("Job status updated successfully");
      return true;
    } catch (err: any) {
      console.error("Error updating job status:", err);
      toast.error("Failed to update job status");
      return false;
    }
  };
  
  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId)
        .eq("client_id", clientId); // Ensure user can only delete their own jobs
        
      if (deleteError) throw deleteError;
      
      // Update local state
      setJobs(jobs.filter(job => job.id !== jobId));
      toast.success("Job deleted successfully");
      return true;
    } catch (err: any) {
      console.error("Error deleting job:", err);
      toast.error("Failed to delete job");
      return false;
    }
  };
  
  // Fetch jobs when component mounts or dependencies change
  useEffect(() => {
    fetchJobs();
  }, [clientId, status]);
  
  return {
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobs.ts
    jobs,
    isLoading,
    error,
    refetch: fetchJobs,
    updateJobStatus,
    deleteJob,
<<<<<<< HEAD:src/hooks/useJobs.ts
    createJob: createJobService, // Use aliased service functions;
    updateJob: updateJobService, // Use aliased service functions;
    getJobById;
};
=======
    createJob,
    updateJob,
    getJobById
  };
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobs.ts
};
