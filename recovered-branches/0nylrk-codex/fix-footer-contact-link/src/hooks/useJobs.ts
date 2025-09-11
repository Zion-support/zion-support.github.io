




import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {Job, JobStatus} from "@/types/jobs";
import {toast} from "sonner";
import {useAuth} from "./useAuth";
import {createJob, updateJob, getJobById} from "@/services/jobService";

<<<<<<< HEAD
<<<<<<< HEAD
export const useJobs = (userId?: string, status?: JobStatus) => {;


export const useJobs = (userId?: string, status?: JobStatus) => {
export const useJobs = (userId?: string, status?: JobStatus) => {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export const useJobs = (userId?: string, status?: JobStatus) => {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


<<<<<<< HEAD
<<<<<<< HEAD
  const clientId = userId |user?.id;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      
=======

  
  const clientId = userId || user?.id,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  
  const clientId = userId || user?.id,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false);
      return
    }
    try {
<<<<<<< HEAD


      setIsLoading(true),
      


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      setIsLoading(true);
      setIsLoading(true),
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      let query = supabase
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .order("created_at", { ascending: false });
      if (status) {
        query = query.eq("status", status)
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      setJobs(data as Job[]);
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .order("created_at", { ascending: false }),
      
      if (status) {
        query = query.eq("status", status)
      }
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
      setJobs(data as Job[]),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setError(null)
    } catch (err: any) {
      console.error("Error fetching jobs:", err),
      setError("Failed to fetch jobs. Please try again."),
      toast.error("Failed to fetch jobs")
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


<<<<<<< HEAD
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
      const { error: updateError } = await supabase
        .from("jobs")
        .update({ status: newStatus })
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only update their own jobs
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      
      if (updateError) throw updateError,
      


=======
      if (updateError) throw updateError;
      
      if (updateError) throw updateError,
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Update local state
      setJobs(jobs && jobs.map(job => job && job.id === jobId ? {...job, status: newStatus} : job));
      toast && toast.success("Job status updated successfully");
      return true
    } catch (err: any) {
      console && console.error("Error updating job status:", err);
      toast && toast.error("Failed to update job status");
      return false
    }
<<<<<<< HEAD


  },
  


<<<<<<< HEAD
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
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only delete their own jobs
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        
      if (deleteError) throw deleteError,
      


=======
      if (deleteError) throw deleteError;
        
      if (deleteError) throw deleteError,
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Update local state
      setJobs(jobs && jobs.filter(job => job && job.id !== jobId));
      toast && toast.success("Job deleted successfully");
      return true
    } catch (err: any) {
      console && console.error("Error deleting job:", err);
      toast && toast.error("Failed to delete job");
      return false
<<<<<<< HEAD

;
  const updateJobStatus = async (job_id: string, new_status: JobStatus) => {
    try {
      const { error: update_error } = await supabase;
        .from ("jobs");
        .update ({ status: new_status });
        .eq ("id", job_id);
        .eq ("client_id", client_id), // Ensure user can only update their own jobs;
      // Check condition
if (throw update_error) {
  $2
}
      // Update local state;
      set_jobs (jobs.map (job => job.id === job_id ? {...job, status: new_status} : job));
      toast.success ("Job status updated successfully");
      return true;
    } catch (err: any) {
      console.error ("Error updating job status:", err);
      toast.error ("Failed to update job status");
      return false;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
;
  const delete_job = async (job_id: string) => {
    try {
      const { error: delete_error } = await supabase;
        .from ("jobs");
        .delete ();
        .eq ("id", job_id);
        .eq ("client_id", client_id), // Ensure user can only delete their own jobs;
      // Check condition
if (throw delete_error) {
  $2
}
      // Update local state;
      set_jobs (jobs.filter (job => job.id !== job_id));
      toast.success ("Job deleted successfully");
      return true;
    } catch (err: any) {
      console.error ("Error deleting job:", err);
      toast.error ("Failed to delete job");
      return false;
    }
  }
;
  // Fetch jobs when component mounts or dependencies change;
  useEffect (() => {
    fetch_jobs ();
  }, [client_id, status]);
;

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

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
}
;
<<<<<<< HEAD
  }
};
  }
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
