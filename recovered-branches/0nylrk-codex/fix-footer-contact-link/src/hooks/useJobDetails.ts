import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;

import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

    } finally {

      setIsLoading (false);
    }
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Load job details when component mounts or job_id changes;

    loadJobDetails ();
  }, [job_id]);
;
<<<<<<< HEAD
  return {
    job;

      console.error('Error loading job details:', err);
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  // Load job details when component mounts or jobId changes
  useEffect(() => {
    loadJobDetails()
  }, [jobId]);
  return {
    job;
=======

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
    error,;
    loadJobDetails;
  },;
}

export default useJobDetails,; .from ('jobs') .select ('*') .eq ('id', jobId) .single ();
}export default useJobDetails;
;
export default useJobDetails;