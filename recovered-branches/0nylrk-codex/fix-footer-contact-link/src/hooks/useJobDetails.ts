
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { supabase } from '@/integrations/supabase/client',
export function useJobDetails(jobId: string | undefined) {
  const [job, setJob] = useState(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState(null),

  async function loadJobDetails() {
    if (!jobId) {
      setIsLoading(false),
      return
    }
    
    try {
      setIsLoading(true),
      const { data, error } = await supabase
=======

export function useJobDetails(_jobId: string | undefined) {_const [job, _setJob] = useState(null);
  const [isLoading, _setIsLoading] = useState(true);
  const [error, _setError] = useState(null);

  async function loadJobDetails() {
    if (!jobId) {
      setIsLoading(false);
      return;}
    
    try {_setIsLoading(true);
      const { data, _error} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single(),
        
<<<<<<< HEAD
      if (error) throw error,
      setJob(data),
      setError(null)
    } catch (err) {
      console.error('Error loading job details:', err),
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Load job details when component mounts or jobId changes
  useEffect(() => {
    loadJobDetails()
  }, [jobId]),

  return {
    job,
    isLoading,
    error,
    loadJobDetails
  }
=======
      if (error) throw error;
      setJob(data);
      setError(null);
    } catch (err) {_setError(err.message);} finally {_setIsLoading(false);}
  }

  // Load job details when component mounts or jobId changes
  useEffect__(() => {_loadJobDetails();}, [jobId]);

  return {_job, _isLoading, _error, _loadJobDetails};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export default useJobDetails,
