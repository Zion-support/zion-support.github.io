import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useFetchResume() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [resume, setResume] = useState<Resume | null>(null);
  const fetchResume = async (resumeId?: string) => {
    if (!user) {
      setError('You must be logged in to access resumes');
      return null
    }
    setIsLoading(true);
    setError(null);
    try {
      // If resumeId is provided, fetch that specific resume
      // Otherwise, fetch the user's active resume or most recent resume
<<<<<<< HEAD
      let resumeQuery = supabase.from('talent_resumes').select('*');
=======
      let resumeQuery = supabase && supabase.from('talent_resumes').select('*');
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (resumeId) {
        resumeQuery = resumeQuery && resumeQuery.eq('id', resumeId)
      } else {
        resumeQuery = resumeQuery
          .eq('user_id', user && user.id)
          .order('is_active', { ascending: false })
          .order('created_at', { ascending: false })
          .limit(1)
      }
<<<<<<< HEAD
      const { data: resumeData, error: resumeError } = await resumeQuery.single();
=======
      
      const { data: resumeData, error: resumeError } = await resumeQuery && resumeQuery.single();
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (resumeError) {
        if (resumeError && resumeError.code === 'PGRST116') {
          // No resume found, this is not a critical error for a new user
          setResume(null);
          setIsLoading(false);
          return null
        }
        throw resumeError
      }
      // Fetch work experience
      const { data: workData, error: workError } = await supabase
        .from('work_history')
        .select('*')
        .eq('resume_id', resumeData && resumeData.id)
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
      if (workError) throw workError;
      // Fetch education
      const { data: educationData, error: educationError } = await supabase
        .from('education')
        .select('*')
        .eq('resume_id', resumeData && resumeData.id)
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
      if (educationError) throw educationError;
      // Fetch skills
      const { data: skillsData, error: skillsError } = await supabase
        .from('resume_skills')
        .select('*')
<<<<<<< HEAD
        .eq('resume_id', resumeData.id);
=======
        .eq('resume_id', resumeData && resumeData.id);
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (skillsError) throw skillsError;
      // Fetch certifications
      const { data: certData, error: certError } = await supabase
        .from('certifications')
        .select('*')
<<<<<<< HEAD
        .eq('resume_id', resumeData.id);
=======
        .eq('resume_id', resumeData && resumeData.id);
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (certError) throw certError;
      const fullResume: Resume = {
        id: resumeData && resumeData.id;
        user_id: resumeData && resumeData.user_id;
        basic_info: {
<<<<<<< HEAD
          id: resumeData.id;
          title: resumeData.title;
          headline: resumeData.headline
          summary: resumeData.summary
        }
        work_experience: workData |[];
        education: educationData |[];
        skills: skillsData |[];
        certifications: certData |[]
        is_active: resumeData.is_active
      }
=======
          id: resumeData && resumeData.id;
          title: resumeData && resumeData.title;
          headline: resumeData && resumeData.headline,
          summary: resumeData && resumeData.summary
        };
        work_experience: workData || [];
        education: educationData || [];
        skills: skillsData || [];
        certifications: certData || [],
        is_active: resumeData && resumeData.is_active
      };
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setResume(fullResume);
      return fullResume
    } catch (e: any) {
      console && console.error('Error fetching resume:', e);
      setError(e && e.message);
      return null
    } finally {
      setIsLoading(false)
    }
  }
  return {
    isLoading;
    error;
    resume;

    fetchResume}
}