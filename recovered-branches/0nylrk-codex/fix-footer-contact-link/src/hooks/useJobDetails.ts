
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { supabase } from '@/integrations/supabase/client';
export function useJobDetails(jobId: string | undefined) {
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  // Load job details when component mounts or jobId changes
  useEffect(() => {
    loadJobDetails()
  }, [jobId]);
  return {
    job;
<<<<<<< HEAD
    is_loading;
=======

    isLoading;
    error;
    loadJobDetails
  }
}
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

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    error;
    loadJobDetails;
  }
}
<<<<<<< HEAD
=======

;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export default useJobDetails;
