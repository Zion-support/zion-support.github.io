<<<<<<< HEAD:src/hooks/resume/useResumeList.ts
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
);
        .order('created_at', { ascending: false });
      if(resumeError) throw resumeError;
      if(!resumeData || resumeData.length === 0) {;
        setResumes([]);
        return [];
}

      const transformedResumes: Resume[] = resumeData.map(resume => ({;
        id: resume.id,
        user_id: resume.user_id,
        basic_info: {;
          id: resume.id,
          title: resume.title,
          headline: resume.headline,
          summary: resume.summary;
},
=======

import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Resume } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useResumeList() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const fetchResumes = async () => {}
    if (!user) {'
      setError('You must be logged in to access resumes');
      return []
    }
    setIsLoading(true);
    setError(null);
        setResumes([]);
        return []
      }
      
      // Transform data to match Resume type
      const transformedResumes: Resume[] = resumeData.map(resume => ({
        id: resume.id,
        user_id: resume.user_id,
        basic_info: {
          id: resume.id,
          title: resume.title,
          headline: resume.headline,
          summary: resume.summary
        },
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
        work_experience: [],
        education: [],
        skills: [],
        certifications: [],
<<<<<<< HEAD:src/hooks/resume/useResumeList.ts
        is_active: resume.is_active;
}));
      setResumes(transformedResumes);
      return transformedResumes;
} catch(e: any) {;
      console.error('Error fetching resumes:', e);
      setError(e.message);
      setResumes([]); // Clear resumes on error;
      return [];
} finally {;
      setIsLoading(false);
}
  }, [user]); // user is a dependency of fetchResumes;
  useEffect(() => {
  // TODO: Add dependencies if needed;
}, []);
    if(user) {;
      fetchResumes();
} else {;
      // Clear resumes if user logs out or is not available initially;
      setResumes([]);
      setError(null); // Clear any previous errors;
}
  }, [user, fetchResumes]); // Added fetchResumes;
  return {;
    isLoading,
    error,
    resumes,
    fetchResumes;
};
=======
        is_active: resume.is_active
      }));
      
      setResumes(transformedResumes);
      return transformedResumes
    } catch (e: any) {
    } finally {
      setIsLoading (false);
    }
  }
  return {
    isLoading,
    error,
    resumes,
    fetchResumes
  };
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
}
