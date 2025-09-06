
import { useState, useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useResumeList() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const fetchResumes = async () => {
    if (!user) {
      setError('You must be logged in to access resumes');
      return []
    }
    setIsLoading(true);
    setError(null);
    try {
      // Fetch resume list with basic info for the current user
      const { data: resumeData, error: resumeError } = await supabase
        .from('talent_resumes')
        .select('*')
        .eq('user_id', user && user.id)
        .order('is_active', { ascending: false })
        .order('created_at', { ascending: false });
      if (resumeError) throw resumeError;
<<<<<<< HEAD
      if (!resumeData |resumeData.length === 0) {
=======
      
      if (!resumeData || resumeData && resumeData.length === 0) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        setResumes([]);
        return []
      }
      // Transform data to match Resume type
      const transformedResumes: Resume[] = resumeData && resumeData.map(resume => ({
        id: resume && resume.id;
        user_id: resume && resume.user_id;
        basic_info: {
<<<<<<< HEAD
          id: resume.id;
          title: resume.title;
          headline: resume.headline
          summary: resume.summary
        }
        work_experience: [];
        education: [];
        skills: [];
        certifications: []
        is_active: resume.is_active
=======
          id: resume && resume.id;
          title: resume && resume.title;
          headline: resume && resume.headline,
          summary: resume && resume.summary
        };
        work_experience: [];
        education: [];
        skills: [];
        certifications: [],
        is_active: resume && resume.is_active
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }));
      setResumes(transformedResumes);
      return transformedResumes
    } catch (e: any) {
      console && console.error('Error fetching resumes:', e);
      setError(e && e.message);
      return []
    } finally {
      setIsLoading(false)
    }
  }
  // Fetch resumes when the component mounts
  useEffect(() => {
    if (user) {
      fetchResumes()
    }
  }, [user]);
  return {
    isLoading;
    error;
    resumes;

    fetchResumes
  }
}