
import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default useJobDetails;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
