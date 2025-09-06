<<<<<<< HEAD
=======
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {
=======
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    job;
    isLoading;
    error;
    loadJobDetails
  }
}
<<<<<<< HEAD
export default useJobDetails;
=======
    job,
    isLoading,
    error,
    loadJobDetails,
  };
}

export default useJobDetails;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
export default useJobDetails;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default useJobDetails;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
