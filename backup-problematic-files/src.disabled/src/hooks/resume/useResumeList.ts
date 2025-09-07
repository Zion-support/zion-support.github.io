import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
);
        .order('created_at', { "ascending": false });
      if(resumeError) throw resumeError;

        "work_experience": [],
        "education": [],
        "skills": [],
        "certifications": [],

      setResumes([]); // Clear resumes on error;
      return []} finally {;
      setIsLoading(false)}
  }, [user]); // user is a dependency of fetchResumes;
  useEffect(() => {;
  // "TODO": Add dependencies if needed}, []);
    if(user) {;
      fetchResumes()} else {;
      // Clear resumes if user logs out or is not available initially;
      setResumes([]);
      setError(null); // Clear any previous errors}
  }, [user, fetchResumes]); // Added fetchResumes;
  return {;
    isLoading,
    error,
    resumes,