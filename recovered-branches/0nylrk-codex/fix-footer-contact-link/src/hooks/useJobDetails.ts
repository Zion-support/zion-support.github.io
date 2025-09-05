<<<<<<< HEAD:src/hooks/useJobDetails.ts
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
 finally {;
      setIsLoading(false);
}
  }, [jobId]); // jobId is a dependency of loadJobDetails;

  useEffect(() => {
  // TODO: Add dependencies if needed;
}, []);
    loadJobDetails();
}, [loadJobDetails]); // Added loadJobDetails to dependency array;

  return {;
    job,
    isLoading,
    error,
    loadJobDetails, // Return refetch function as loadJobDetails for clarity;
    refetch: loadJobDetails // Added refetch alias for consistency if preferred;
};
=======

import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useJobDetails(jobId: string | undefined) {
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadJobDetails() {
    if (!jobId) {
      setIsLoading(false);
      return;
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
      setError(null);
    } catch (err) {
      console.error('Error loading job details:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  // Load job details when component mounts or jobId changes
  useEffect(() => {
    loadJobDetails();
  }, [jobId]);

  return {
    job,
    isLoading,
    error,
    loadJobDetails
  };
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobDetails.ts
}

export default useJobDetails;
