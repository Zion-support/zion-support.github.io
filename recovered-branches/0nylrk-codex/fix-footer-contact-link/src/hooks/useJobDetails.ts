

export function useJobDetails(_jobId: string | undefined) {_const [job, _setJob] = useState(null);
  const [isLoading, _setIsLoading] = useState(true);
  const [error, _setError] = useState(null);

  async function loadJobDetails() {
    if (!jobId) {
      setIsLoading(false);
      return;}
    
    try {_setIsLoading(true);
      const { data, _error} = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single();
        
      if (error) throw error;
      setJob(data);
      setError(null);
    } catch (err) {_setError(err.message);} finally {_setIsLoading(false);}
  }

  // Load job details when component mounts or jobId changes
  useEffect__(() => {_loadJobDetails();}, [jobId]);

  return {_job, _isLoading, _error, _loadJobDetails};
}

export default useJobDetails;
