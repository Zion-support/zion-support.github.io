
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;

<<<<<<< HEAD

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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    isLoading;
    error;
    loadJobDetails
  }
<<<<<<< HEAD
}



import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
export function useJobDetails(jobId: string | undefined) {;
  const [job, setJob] = useState(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState(null),;
  async function loadJobDetails() {;
    if (!jobId) {;
      setIsLoading(false),;
      return;
    }
;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('jobs');
        .select('*');
        .eq('id', jobId);
        .single(),;
      if (error) throw error,;
      setJob(data),;
      setError(null);
    } catch (err) {;
      console.error('Error loading job details:', err),;
      setError(err.message);
    } finally {;
      setIsLoading(false);
    }
  }
;
  // Load job details when component mounts or jobId changes;
  useEffect(() => {;
    loadJobDetails();
  }, [jobId]),;
  return {;
    job,;
    isLoading,;

    error;
    loadJobDetails;
  }
}

;


export default useJobDetails;

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
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
