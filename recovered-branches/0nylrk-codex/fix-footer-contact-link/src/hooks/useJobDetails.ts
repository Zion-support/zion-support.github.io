

=======
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  async function loadJobDetails() {
    if (!jobId) {
      setIsLoading(false);
      return
    }
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single();
      if (error) throw error;
      setJob(data);
      setError(null)
    } catch (err) {
      console && console.error('Error loading job details:', err);
      setError(err && err.message)
    } finally {
      setIsLoading (false);
    }
  }

  // Load job details when component mounts or job_id changes;
  useEffect (() => {
    loadJobDetails ();
  }, [job_id]);
;

  return {
    job;

    isLoading;
    error;
    loadJobDetails
  }
}

export default useJobDetails;
export default useJobDetails;
=======
export default useJobDetails;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
