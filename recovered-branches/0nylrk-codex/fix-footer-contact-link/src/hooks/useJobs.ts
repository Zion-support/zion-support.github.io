

export const _useJobs = (_userId?: string, _status?: JobStatus) => {_const { user} = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const _clientId = userId || user?.id;

  const _fetchJobs = async () => {_if (!clientId) {
      setIsLoading(false);
      return;}

    try {_setIsLoading(true);
      
      let _query = supabase
        .from("jobs")
        .select("*")
        .eq("client_id", _clientId)
        .order("created_at", _{ ascending: false});
      
      if (status) {_query = query.eq("status", _status);}
      
      const {_data, _error: fetchError} = await query;
      
      if (fetchError) throw fetchError;
      
      setJobs(data as Job[]);
      setError(null);
    } catch (err: unknown) {_setError("Failed to fetch jobs. Please try again.");
      toast.error("Failed to fetch jobs");} finally {_setIsLoading(false);}
  };
  
  const _updateJobStatus = async (_jobId: string, _newStatus: JobStatus) => {_try {
      const { error: updateError} = await supabase
        .from("jobs")
        .update({_status: newStatus})
        .eq("id", jobId)
        .eq("client_id", clientId); // Ensure user can only update their own jobs
      
      if (updateError) throw updateError;
      
      // Update local state
      setJobs(jobs.map(job => job.id === jobId ? {_...job, _status: newStatus} : job));
      toast.success("Job status updated successfully");
      return true;
    } catch (err: unknown) {_toast.error("Failed to update job status");
      return false;}
  };
  
  const _deleteJob = async (_jobId: string) => {_try {
      const { error: deleteError} = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId)
        .eq("client_id", clientId); // Ensure user can only delete their own jobs
        
      if (deleteError) throw deleteError;
      
      // Update local state
      setJobs(jobs.filter(job => job.id !== jobId));
      toast.success("Job deleted successfully");
      return true;
    } catch (err: unknown) {_toast.error("Failed to delete job");
      return false;}
  };
  
  // Fetch jobs when component mounts or dependencies change
  useEffect__(() => {_fetchJobs();}, [clientId, status]);
  
  return {_jobs, _isLoading, _error, _refetch: fetchJobs, _updateJobStatus, _deleteJob, _createJob, _updateJob, _getJobById};
};
