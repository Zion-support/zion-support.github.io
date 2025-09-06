
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {Job, JobStatus} from "@/types/jobs";
import {toast} from "sonner";
import {useAuth} from "./useAuth";
import {createJob, updateJob, getJobById} from "@/services/jobService";
<<<<<<< HEAD
export const useJobs = (userId?: string, status?: JobStatus) => {
=======
export const useJobs = (userId?: string, status?: JobStatus) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  const clientId = userId |user?.id;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  const clientId = userId || user?.id,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false),
      return
    }
    try {
<<<<<<< HEAD
      setIsLoading(true);
=======
      setIsLoading(true),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      let query = supabase
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)
<<<<<<< HEAD
        .order("created_at", { ascending: false });
      if (status) {
        query = query.eq("status", status)
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      setJobs(data as Job[]);
=======
        .order("created_at", { ascending: false }),
      
      if (status) {
        query = query.eq("status", status)
      }
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
      setJobs(data as Job[]),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      setError(null)
    } catch (err: any) {
      console.error("Error fetching jobs:", err),
      setError("Failed to fetch jobs. Please try again."),
      toast.error("Failed to fetch jobs")
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
      const { error: updateError } = await supabase
        .from("jobs")
        .update({ status: newStatus })
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only update their own jobs
<<<<<<< HEAD
      if (updateError) throw updateError;
=======
      
      if (updateError) throw updateError,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Update local state
      setJobs(jobs.map(job => job.id === jobId ? {...job, status: newStatus} : job)),
      toast.success("Job status updated successfully"),
      return true
    } catch (err: any) {
      console.error("Error updating job status:", err),
      toast.error("Failed to update job status"),
      return false
    }
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only delete their own jobs
<<<<<<< HEAD
      if (deleteError) throw deleteError;
=======
        
      if (deleteError) throw deleteError,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Update local state
      setJobs(jobs.filter(job => job.id !== jobId)),
      toast.success("Job deleted successfully"),
      return true
    } catch (err: any) {
      console.error("Error deleting job:", err),
      toast.error("Failed to delete job"),
      return false
<<<<<<< HEAD
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
<<<<<<< HEAD
  }
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
