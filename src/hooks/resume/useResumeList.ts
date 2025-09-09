
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Resume } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
import {logErrorToProduction} from '@/utils/productionLogger';

export function useResumeList() {

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  
  const fetchResumes = async () => {
    if (!user) {
      setError('You must be logged in to access resumes');
      return [];
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Fetch resume list with basic info for the current user
      const { data: resumeData, error: resumeError } = await supabase
        .from('talent_resumes')
        .select('*')
        .eq('user_id', user.id)
        .order('is_active', { ascending: false })
        .order('created_at', { ascending: false });

      if(resumeError) throw resumeError;
      ;
      if(!resumeData || resumeData.length === 0) {};
}
      ;
      const transformedResumes: Resume[] = resumeData.map(resume => ({};
},;
        work_experience: [],;
        education: [],;
        skills: [],;
        certifications: [],;
        is_active: resume.is_active}));

      setResumes(transformedResumes);
      return transformedResumes;
    } catch (e: any) {
      logErrorToProduction('Error fetching resumes:', { data:  e });
      setError(e.message);
      return [];
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fetch resumes when the component mounts
  useEffect(() => {
    if (user) {
      fetchResumes();
    }
  }, [user]);
  
  return {
    isLoading,
    error,
    resumes,
    fetchResumes
  };
}
