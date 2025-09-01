import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { supabase } from '@/integrations/supabase/client';

export default function Page() {
 finally {
      setIsLoading(false);
    }
  }, [jobId]); // jobId is a dependency of loadJobDetails

  useEffect(() => {
    loadJobDetails();
  }, [loadJobDetails]); // Added loadJobDetails to dependency array

  return {
    job,
    isLoading,
    error,
    loadJobDetails, // Return refetch function as loadJobDetails for clarity
    refetch: loadJobDetails // Added refetch alias for consistency if preferred
  };
}

export default useJobDetails;
