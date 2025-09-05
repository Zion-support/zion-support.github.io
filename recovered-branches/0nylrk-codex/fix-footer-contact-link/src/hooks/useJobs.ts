
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Job, JobStatus } from &quot;@/types/jobs&quot;;
import { toast } from &quot;sonner&quot;;
import { useAuth } from &quot;./useAuth&quot;;
import { createJob, updateJob, getJobById } from &quot;@/services/jobService&quot;;

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
        .from(&quot;jobs&quot;)
        .select(&quot;*&quot;)
        .eq(&quot;client_id&quot;, clientId)
        .order(&quot;created_at&quot;, { ascending: false });
      
      if (status) {
        query = query.eq(&quot;status&quot;, status);
      }
      
      const { data, error: fetchError } = await query;
      
      if (fetchError) throw fetchError;
      
      setJobs(data as Job[]);
      setError(null);
    } catch (err: any) {
      console.error(&quot;Error fetching jobs:&quot;, err);
      setError(&quot;Failed to fetch jobs. Please try again.&quot;);
      toast.error(&quot;Failed to fetch jobs&quot;);
    } finally {
      setIsLoading(false);
    }
  };
  
  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
      const { error: updateError } = await supabase
        .from(&quot;jobs&quot;)
        .update({ status: newStatus })
        .eq(&quot;id&quot;, jobId)
        .eq(&quot;client_id&quot;, clientId); // Ensure user can only update their own jobs
      
      if (updateError) throw updateError;
      
      // Update local state
      setJobs(jobs.map(job => job.id === jobId ? {...job, status: newStatus} : job));
      toast.success(&quot;Job status updated successfully&quot;);
      return true;
    } catch (err: any) {
      console.error(&quot;Error updating job status:&quot;, err);
      toast.error(&quot;Failed to update job status&quot;);
      return false;
    }
  };
  
  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from(&quot;jobs&quot;)
        .delete()
        .eq(&quot;id&quot;, jobId)
        .eq(&quot;client_id&quot;, clientId); // Ensure user can only delete their own jobs
        
      if (deleteError) throw deleteError;
      
      // Update local state
      setJobs(jobs.filter(job => job.id !== jobId));
      toast.success(&quot;Job deleted successfully&quot;);
      return true;
    } catch (err: any) {
      console.error(&quot;Error deleting job:&quot;, err);
      toast.error(&quot;Failed to delete job&quot;);
      return false;
    }
  };
  
  // Fetch jobs when component mounts or dependencies change
  useEffect(() => {
    fetchJobs();
  }, [clientId, status]);
  
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
  };
};
