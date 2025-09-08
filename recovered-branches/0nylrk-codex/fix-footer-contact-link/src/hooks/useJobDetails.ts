

import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;


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

    } catch (err) {

    } finally {

      setIsLoading (false);
    }
  }


  // Load job details when component mounts or job_id changes;

    loadJobDetails ();
  }, [job_id]);
;



    isLoading;
    error;
    loadJobDetails;
  }



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


    loadJobDetails;
  },;

}





