
<<<<<<< HEAD
=======
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  async function loadJobDetails() {
    if (!jobId) {

      setIsLoading(false);
      return;
    }
    try {}
      setIsLoading(true);
      const { data, error } = await supabase'
        .from('jobs')'
        .select('*')'

        .eq('id', jobId)
        .single();
      if (error) throw error;
      setJob(data);
      setError(null)

<<<<<<< HEAD
    } catch (err) {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    } finally {

      setIsLoading (false);
    }
  }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Load job details when component mounts or job_id changes;

    loadJobDetails ();
  }, [job_id]);
;
<<<<<<< HEAD



=======
  return {
    job;

      console.error('Error loading job details:', err);
      setError(err.message)
    } finally {

      setIsLoading (false);
    }
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
    isLoading;
    error;
    loadJobDetails;
  }


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect } from 'react',;

import { supabase } from '@/integrations/supabase/client',;
export function useJobDetails() { return null; }

export default useJobDetails;
export default useJobDetails;
;
export default useJobDetails;
;

    }
    ;
    try {;
      setIsLoading(true),;

        .eq('id', jobId);
        .single(),;
        ;
      if (error) throw error,;
      setJob(data),;
      setError(null),;

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

<<<<<<< HEAD

    loadJobDetails;
  },;

}





=======
export default useJobDetails;
;
export default useJobDetails;
>>>>>>> origin/cursor/delete-old-data-records-6bba
