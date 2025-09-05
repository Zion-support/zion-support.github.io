
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { Job, JobStatus } from "@/types/jobs",
import { toast } from "sonner",
import { useAuth } from "./useAuth",
import { createJob, updateJob, getJobById } from "@/services/jobService",
=======
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Job, JobStatus } from &quot;@/types/jobs&quot;;
import { toast } from &quot;sonner&quot;;
import { useAuth } from &quot;./useAuth&quot;;
import { createJob, updateJob, getJobById } from &quot;@/services/jobService&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export const useJobs = (userId?: string, status?: JobStatus) => {
  const { user } = useAuth(),
  const [jobs, setJobs] = useState<Job[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  
  const clientId = userId || user?.id,

  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false),
      return
    }

    try {
      setIsLoading(true),
      
      let query = supabase
<<<<<<< HEAD
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)
        .order("created_at", { ascending: false }),
      
      if (status) {
        query = query.eq("status", status)
=======
        .from(&quot;jobs&quot;)
        .select(&quot;*&quot;)
        .eq(&quot;client_id&quot;, clientId)
        .order(&quot;created_at&quot;, { ascending: false });
      
      if (status) {
        query = query.eq(&quot;status&quot;, status);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
      setJobs(data as Job[]),
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching jobs:", err),
      setError("Failed to fetch jobs. Please try again."),
      toast.error("Failed to fetch jobs")
=======
      console.error(&quot;Error fetching jobs:&quot;, err);
      setError(&quot;Failed to fetch jobs. Please try again.&quot;);
      toast.error(&quot;Failed to fetch jobs&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },
  
  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
      const { error: updateError } = await supabase
        .from(&quot;jobs&quot;)
        .update({ status: newStatus })
<<<<<<< HEAD
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only update their own jobs
=======
        .eq(&quot;id&quot;, jobId)
        .eq(&quot;client_id&quot;, clientId); // Ensure user can only update their own jobs
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      if (updateError) throw updateError,
      
      // Update local state
<<<<<<< HEAD
      setJobs(jobs.map(job => job.id === jobId ? {...job, status: newStatus} : job)),
      toast.success("Job status updated successfully"),
      return true
    } catch (err: any) {
      console.error("Error updating job status:", err),
      toast.error("Failed to update job status"),
      return false
=======
      setJobs(jobs.map(job => job.id === jobId ? {...job, status: newStatus} : job));
      toast.success(&quot;Job status updated successfully&quot;);
      return true;
    } catch (err: any) {
      console.error(&quot;Error updating job status:&quot;, err);
      toast.error(&quot;Failed to update job status&quot;);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from(&quot;jobs&quot;)
        .delete()
<<<<<<< HEAD
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only delete their own jobs
=======
        .eq(&quot;id&quot;, jobId)
        .eq(&quot;client_id&quot;, clientId); // Ensure user can only delete their own jobs
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
      if (deleteError) throw deleteError,
      
      // Update local state
<<<<<<< HEAD
      setJobs(jobs.filter(job => job.id !== jobId)),
      toast.success("Job deleted successfully"),
      return true
    } catch (err: any) {
      console.error("Error deleting job:", err),
      toast.error("Failed to delete job"),
      return false
=======
      setJobs(jobs.filter(job => job.id !== jobId));
      toast.success(&quot;Job deleted successfully&quot;);
      return true;
    } catch (err: any) {
      console.error(&quot;Error deleting job:&quot;, err);
      toast.error(&quot;Failed to delete job&quot;);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  // Fetch jobs when component mounts or dependencies change
  useEffect(() => {
    fetchJobs()
  }, [clientId, status]),
  
  return {
    jobs,
    isLoading,
    error,
    refetch: fetchJobs,
    updateJobStatus,
    deleteJob,
    createJob,
    updateJob,
    getJobById
  }
},
