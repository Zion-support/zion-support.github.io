

import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {Job, JobStatus} from "@/types/jobs";
import {toast} from "sonner";
import {useAuth} from "./useAuth";
import {createJob, updateJob, getJobById} from "@/services/jobService";

  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const clientId = userId || user?.id,

  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false),
      return
    }
    try {

      let query = supabase
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)

      setError(null)
    } catch (err: any) {
      console.error("Error fetching jobs:", err),
      setError("Failed to fetch jobs. Please try again."),
      toast.error("Failed to fetch jobs")
    } finally {
      setIsLoading(false)
    }

  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
      const { error: updateError } = await supabase
        .from("jobs")
        .update({ status: newStatus })
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only update their own jobs

      // Update local state
      setJobs(jobs.map(job => job.id === jobId ? {...job, status: newStatus} : job)),
      toast.success("Job status updated successfully"),
      return true
    } catch (err: any) {
      console.error("Error updating job status:", err),
      toast.error("Failed to update job status"),
      return false
    }

  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only delete their own jobs

      // Update local state
      setJobs(jobs.filter(job => job.id !== jobId)),
      toast.success("Job deleted successfully"),
      return true
    } catch (err: any) {
      console.error("Error deleting job:", err),
      toast.error("Failed to delete job"),
      return false

  }
};
