

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useResumeList() {;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

      
      if (!resumeData || resumeData && resumeData.length === 0) {

        setResumes([]);
        return []
      }
      // Transform data to match Resume type
      const transformedResumes: Resume[] = resumeData && resumeData.map(resume => ({
        id: resume && resume.id;
        user_id: resume && resume.user_id;

        basic_info: {

          id: resume && resume.id;
          title: resume && resume.title;
          headline: resume && resume.headline,
          summary: resume && resume.summary
        };


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
        is_active: resume.is_active;
      }));
;
      set_resumes (transformed_resumes);
      return transformed_resumes;
    } catch (e: any) {
      console.error ('Error fetching resumes:', e);
      set_error (e.message);
      return [];

    } finally {
      setIsLoading (false);
    }
  }

;
  // Fetch resumes when the component mounts;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetch_resumes ();
    }
  }, [user]);
;

  return {
    is_loading;
    error;
    resumes;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }
}