

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {Job, JobStatus} from "@/types/jobs";
import {toast} from "sonner";
import {useAuth} from "./useAuth";
import {createJob, updateJob, getJobById} from "@/services/jobService";
<<<<<<< HEAD
export const useJobs = (userId?: string, status?: JobStatus) => {
export const useJobs = (userId?: string, status?: JobStatus) => {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export const useJobs = (userId?: string, status?: JobStatus) => {;


<<<<<<< HEAD
=======
export const useJobs = (userId?: string, status?: JobStatus) => {;


export const useJobs = (userId?: string, status?: JobStatus) => {
export const useJobs = (userId?: string, status?: JobStatus) => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
  const clientId = userId |user?.id;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
  const clientId = userId |user?.id;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { toast } from "sonner",
import { useAuth } from "./useAuth",
import { createJob, updateJob, getJobById } from "@/services/jobService",

export const useJobs = (userId?: string, status?: JobStatus) => {
  const { user } = useAuth(),
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
<<<<<<< HEAD
<<<<<<< HEAD

  
  const clientId = userId || user?.id,

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false);
      return
    }
    try {

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  
  const clientId = userId || user?.id,

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setIsLoading(true),
      

  
  const clientId = userId || user?.id,
  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false),
      return
    }
    try {
      setIsLoading(true);
      setIsLoading(true),
      
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      let query = supabase
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { Job, JobStatus } from '@/types / jobs';
import { toast } from './sonner';
import { use_auth } from './use_auth';
import { create_job, update_job, getJobById } from '@/services / job_service';
export const use_jobs = (user_id?: string, status?: JobStatus) =>: any {
  const { user } = use_auth ();
  const [jobs, set_jobs] = useState < Job[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  const client_id = user_id || user?.id;
;
  const fetch_jobs = async () => {
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
        .from ("jobs");
        .select ("*");
        .eq ("client_id", client_id);
        .order ("created_at", { ascending: false });
;
      // Check condition
if ( {) {
  $2
}
        query = query.eq ("status", status);
      }
      const { data, error: fetch_error } = await query;
;
      // Check condition
if (throw fetch_error) {
  $2
}
      set_jobs (data as Job[]);
      set_error (null);
    } catch (err: any) {
      console.error ("Error fetching jobs:", err);
      set_error ("Failed to fetch jobs. Please try again.");
      toast.error ("Failed to fetch jobs");

    } finally {
      setIsLoading (false);
    }
  }


<<<<<<< HEAD
=======
        .order("created_at", { ascending: false });
      if (status) {
        query = query.eq("status", status)
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      setJobs(data as Job[]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .order("created_at", { ascending: false }),
      
      if (status) {
        query = query.eq("status", status)
      }
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
      setJobs(data as Job[]),
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setError(null)
    } catch (err: any) {
      console.error("Error fetching jobs:", err),
      setError("Failed to fetch jobs. Please try again."),
      toast.error("Failed to fetch jobs")
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  


<<<<<<< HEAD
=======
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
=======
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const { error: updateError } = await supabase
        .from("jobs")
        .update({ status: newStatus })
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only update their own jobs
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      
      if (updateError) throw updateError,
      


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      // Update local state
      setJobs(jobs && jobs.map(job => job && job.id === jobId ? {...job, status: newStatus} : job));
      toast && toast.success("Job status updated successfully");
      return true
    } catch (err: any) {
      console && console.error("Error updating job status:", err);
      toast && toast.error("Failed to update job status");
      return false
<<<<<<< HEAD
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD


  },
  


<<<<<<< HEAD
=======
      if (updateError) throw updateError;
      
      if (updateError) throw updateError,
      
      // Update local state
      setJobs(jobs.map(job => job.id === jobId ? {...job, status: newStatus} : job)),
      toast.success("Job status updated successfully"),
      return true
    } catch (err: any) {
      console.error("Error updating job status:", err),
      toast.error("Failed to update job status"),
      return false
    }
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only delete their own jobs
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        
      if (deleteError) throw deleteError,
      


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Update local state
=======
    }      // Update local state
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setJobs(jobs && jobs.filter(job => job && job.id !== jobId));
      toast && toast.success("Job deleted successfully");
      return true
    } catch (err: any) {
      console && console.error("Error deleting job:", err);
      toast && toast.error("Failed to delete job");
      return false
<<<<<<< HEAD

  }
};
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    }
  }
  return {
    jobs;
    is_loading;
    error;
    refetch: fetch_jobs;
    updateJobStatus;

    delete_job;
    create_job;
    update_job,
    getJobById;

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
      if (deleteError) throw deleteError;
        
      if (deleteError) throw deleteError,
      
      // Update local state
      setJobs(jobs.filter(job => job.id !== jobId)),
      toast.success("Job deleted successfully"),
      return true
    } catch (err: any) {
      console.error("Error deleting job:", err),
      toast.error("Failed to delete job"),
      return false
    }
  }
  // Fetch jobs when component mounts or dependencies change
  useEffect(() => {
    fetchJobs()
  }, [clientId, status]);
  return {
    jobs;
    isLoading;
    error;
    refetch: fetchJobs;
    updateJobStatus;
    deleteJob;
    createJob;
    updateJob
    getJobById
  }
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { Job, JobStatus } from "@/types/jobs",;
import { toast } from "sonner",;
import { useAuth } from "./useAuth",;
import { createJob, updateJob, getJobById } from "@/services/jobService",;
export const useJobs = (userId?: string, status?: JobStatus) => {;
  const { user } = useAuth(),;
  const [jobs, setJobs] = useState<Job[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const clientId = userId || user?.id,;
  const fetchJobs = async () => {;
    if (!clientId) {;
      setIsLoading(false),;
      return;
    }
;
    try {;
      setIsLoading(true),;
      let query = supabase;
        .from("jobs");
        .select("*");
        .eq("client_id", clientId);
        .order("created_at", { ascending: false }),;
      if (status) {;
        query = query.eq("status", status);
      }
;
      const { data, error: fetchError } = await query,;
      if (fetchError) throw fetchError,;
      setJobs(data as Job[]),;
      setError(null);
    } catch (err: any) {;
      console.error("Error fetching jobs:", err),;
      setError("Failed to fetch jobs. Please try again."),;
      toast.error("Failed to fetch jobs");
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {;
    try {;
      const { error: updateError } = await supabase;
        .from("jobs");
        .update({ status: newStatus });
        .eq("id", jobId);
        .eq("client_id", clientId), // Ensure user can only update their own jobs;
      if (updateError) throw updateError,;
      // Update local state;
      setJobs(jobs.map(job => job.id === jobId ? {...job, status: newStatus} : job)),;
      toast.success("Job status updated successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error updating job status:", err),;
      toast.error("Failed to update job status"),;
      return false;
    }
  },;
  const deleteJob = async (jobId: string) => {;
    try {;
      const { error: deleteError } = await supabase;
        .from("jobs");
        .delete();
        .eq("id", jobId);
        .eq("client_id", clientId), // Ensure user can only delete their own jobs;
      if (deleteError) throw deleteError,;
      // Update local state;
      setJobs(jobs.filter(job => job.id !== jobId)),;
      toast.success("Job deleted successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error deleting job:", err),;
      toast.error("Failed to delete job"),;
      return false;
    }
  },;
  // Fetch jobs when component mounts or dependencies change;
  useEffect(() => {;
    fetchJobs();
  }, [clientId, status]),;
  return {;
    jobs,;
    isLoading,;
    error,;
    refetch: fetchJobs,;
    updateJobStatus,;
    deleteJob,;
    createJob,;
    updateJob;
    getJobById;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }
};  }
};
  }
};
  }
};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
