
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;



=======
    error;
    loadJobDetails;
  }
}

export default useJobDetails;
export default useJobDetails;
;
export default useJobDetails;
;

import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
;
export function useJobDetails(jobId:string | undefined) {;
  const [job, setJob] = useState(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState(null),;
;
  async function loadJobDetails() {;
    if (!jobId) {;
      setIsLoading(false),;
      return,;
    }
    ;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('jobs');
        .select('*');
        .eq('id', jobId);
        .single(),;
        ;
      if (error) throw error,;
      setJob(data),;
      setError(null),;
    } catch (err) {;
      console.error('Error loading job details:', err),;
      setError(err.message),;
    } finally {;
      setIsLoading(false),;
    }
  }
;
  // Load job details when component mounts or jobId changes;
  useEffect(() => {;
    loadJobDetails(),;
  }, [jobId]),;
;
  return {;
    job,;
    isLoading,;
    error,;
    loadJobDetails;
  },;
}
;
export default useJobDetails,; .from ('jobs') .select ('*') .eq ('id', jobId) .single ();
}export default useJobDetails;
;
export default useJobDetails;
=======
=======;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default useJobDetails;
<<<<<<< HEAD
=======
export default useJobDetails;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
