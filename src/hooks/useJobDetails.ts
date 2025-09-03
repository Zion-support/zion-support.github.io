import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { supabase } from '@/integrations/supabase/client';


  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
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
