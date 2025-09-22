
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState, useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
<<<<<<< HEAD
<<<<<<< HEAD
export function useResumeList() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function useResumeList() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useResumeList() {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState, useEffect  } from 'react';'
import { supabase  } from '@/integrations/supabase/client';'
import { Resume  } from '@/types/resume';'
import { useAuth } from '@/hooks/useAuth';
export function useResumeList() {}
';
import {useState, useEffect} from 'react';'
import {supabase} from '@/integrations/supabase/client';'
import {Resume} from '@/types/resume';'
import {useAuth} from '@/hooks/useAuth';
export function useResumeList() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
=======
export function useResumeList() {  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function useResumeList() {  const { user } = useAuth();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const { user } = useAuth();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

export function useResumeList() {  const { user } = useAuth();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
    try {}
      // Fetch resume list with basic info for the current user;
      const { data: resumeData, error: resumeError } = await supabase'
        .from('talent_resumes')'
        .select('*')
setResumes([]);
        return []
      }
<<<<<<< HEAD
<<<<<<< HEAD
      // Transform data to match Resume type
<<<<<<< HEAD
<<<<<<< HEAD
      const transformedResumes: Resume[] = resumeData && resumeData.map(resume => ({
        id: resume && resume.id;
        user_id: resume && resume.user_id;
<<<<<<< HEAD
    // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        basic_info: {

          id: resume && resume.id;
          title: resume && resume.title;
          headline: resume && resume.headline,
          summary: resume && resume.summary;
        };
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        work_experience: [];
        education: [];
        skills: [];
        certifications: [],

        is_active: resume.is_active;
      }));
;
      set_resumes (transformed_resumes);
      return transformed_resumes;
} catch (e: any) {'
      console.error ('Error fetching resumes:', e);
      set_error (e.message);
      return [];

} finally {}
      setIsLoading (false);
    }
  }

;
  // Fetch resumes when the component mounts;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      fetch_resumes ();
    }
  }, [user]);
;

  return {}
    is_loading;
    error;
    resumes;

      }));
=======
      // Transform data to match Resume type  }
}      }));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      // Transform data to match Resume type  }
}      }));
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      setResumes(transformedResumes);
      return transformedResumes;
    } catch (e: any) {}
    } finally {}
      setIsLoading (false);
    }
  }
  return {}
    is_loading;
    error;
    resumes;

  }
}

import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
;
export function useResumeList() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [resumes, setResumes] = useState<Resume[]>([]),;
  ;
  const fetchResumes = async () => {;
    if (!user) {;
      setError('You must be logged in to access resumes'),;
      return [],;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      // Fetch resume list with basic info for the current user;
      const { data:resumeData, error:resumeError } = await supabase;
        .from('talent_resumes');
        .select('*');
        .eq('user_id', user.id);
        .order('is_active', { ascending:false });
        .order('created_at', { ascending:false }),;
      ;
      if (resumeError) throw resumeError,;
      ;
      if (!resumeData || resumeData.length === 0) {;
        setResumes([]),;
        return [],;
      }
      ;
      // Transform data to match Resume type;
      const transformedResumes:Resume[] = resumeData.map(resume => ({;
        id:resume.id,;
        user_id:resume.user_id,;
        basic_info:{;
          id:resume.id,;
          title:resume.title,;
          headline:resume.headline,;
          summary:resume.summary;
        },;
        work_experience:[],;
        education:[],;
        skills:[],;
        certifications:[],;
        is_active:resume.is_active;
      })),;
      ;
      setResumes(transformedResumes),;
      return transformedResumes,;
    } catch (e:any) {;
      console.error('Error fetching resumes:', e),;
      setError(e.message),;
      return [],;
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  // Fetch resumes when the component mounts;
  useEffect(() => {;
    if (user) {;
      fetchResumes(),;
    }
  }, [user]),;
  ;
  return {;
    isLoading,;
    error,;
    resumes,;
    fetchResumes;
  },;
} setIsLoading (true);
setError (null);
try {
  // Fetch resume list with basic info for the current user const {
  data: resumeData, error: resumeError 
}= await supabase .from ('talent resumes') .select ('*') .eq ('user id', user.id) if (resumeError) throw resumeError;
// Transform data to match Resume type const transformedResumes: Resume[] = resumeData.map (resume => ({
  id: resume.id, user id: resume.user id, basic info: {
  id: resume.id, title: resume.title, headline: resume.headline, summary: resume.summary 
};
work experience: [];
education: [];
skills: [];
certifications: [];
is active: resume.is active 
}) );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
