
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {Job, JobStatus} from "@/types/jobs";
import {toast} from "sonner";
import {useAuth} from "./useAuth";
import {createJob, updateJob, getJobById} from "@/services/jobService";

export const useJobs = (userId?: string, status?: JobStatus) => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const clientId = userId || user?.id;

  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false);
      return
    }

    try {
      setIsLoading(true);
      
      let query = supabase
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)
        .order("created_at", { ascending: false });
      
      if (status) {
        query = query && query.eq("status", status)
      }
      
      const { data, error: fetchError } = await query;
      
      if (fetchError) throw fetchError;
      
      setJobs(data as Job[]);
      setError(null)
    } catch (err: any) {
      console && console.error("Error fetching jobs:", err);
      setError("Failed to fetch jobs. Please try again.");
      toast && toast.error("Failed to fetch jobs")
    } finally {
      setIsLoading(false)
    }
  };
  
  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
      const { error: updateError } = await supabase
        .from("jobs")
        .update({ status: newStatus })
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only update their own jobs
      
      if (updateError) throw updateError;
      
      // Update local state
      setJobs(jobs && jobs.map(job => job && job.id === jobId ? {...job, status: newStatus} : job));
      toast && toast.success("Job status updated successfully");
      return true
    } catch (err: any) {
      console && console.error("Error updating job status:", err);
      toast && toast.error("Failed to update job status");
      return false
    }
  };
  
  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only delete their own jobs
        
      if (deleteError) throw deleteError;
      
      // Update local state
      setJobs(jobs && jobs.filter(job => job && job.id !== jobId));
      toast && toast.success("Job deleted successfully");
      return true
    } catch (err: any) {
      console && console.error("Error deleting job:", err);
      toast && toast.error("Failed to delete job");
      return false
    }
  };
  
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
    updateJob,
    getJobById
  }
};
