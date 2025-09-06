        setResumes([]);
        return []
      }
      // Transform data to match Resume type
      const transformedResumes: Resume[] = resumeData && resumeData.map(resume => ({
        id: resume && resume.id;
        user_id: resume && resume.user_id;
=======
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Resume} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
export /**
 * useResumeList - Function description
 */
function useResumeList() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const [resumes, set_resumes] = useState < Resume[]>([]);
;
  const fetch_resumes = async () => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to access resumes');
      return [];
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      // Fetch resume list with basic info for the current user;
      const { data: resume_data, error: resume_error } = await supabase;
        .from ('talent_resumes');
        .select ('*');
        .eq ('user_id', user.id);
        .order ('is_active', { ascending: false });
        .order ('created_at', { ascending: false });
;
      // Check condition
if (throw resume_error) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        set_resumes ([]);
        return [];
      }
      // Transform data to match Resume type;
      const transformed_resumes: Resume[] = resume_data.map (resume => ({
        id: resume.id;
        user_id: resume.user_id;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        basic_info: {
        work_experience: [];
        education: [];
        skills: [];
        certifications: [],
      }));
      setResumes(transformedResumes);
      return transformedResumes
    } catch (e: any) {
      console && console.error('Error fetching resumes:', e);
      setError(e && e.message);
      return []
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }
  }
  return {
    is_loading;
    error;
    resumes;
  }
}