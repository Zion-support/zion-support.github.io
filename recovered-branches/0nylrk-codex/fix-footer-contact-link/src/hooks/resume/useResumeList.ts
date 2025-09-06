<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
<<<<<<< HEAD
<<<<<<< HEAD
export function useResumeList() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useResumeList() {;
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();
=======
export function useResumeList() {  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function useResumeList() {  const { user } = useAuth();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        basic_info: {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          id: resume && resume.id;
          title: resume && resume.title;
          headline: resume && resume.headline,
          summary: resume && resume.summary
        };
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
          headline: resume.headline,
          summary: resume.summary;
        }

=======
          headline: resume.headline,
          summary: resume.summary;
        }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        work_experience: [];
        education: [];
        skills: [];
        certifications: [],
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        is_active: resume.is_active;
      }));
;
      set_resumes (transformed_resumes);
      return transformed_resumes;
    } catch (e: any) {
      console.error ('Error fetching resumes:', e);
      set_error (e.message);
      return [];
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return {
    is_loading;
    error;
    resumes;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
      const transformedResumes: Resume[] = resumeData.map(resume => ({
        id: resume.id;
        user_id: resume.user_id;
        basic_info: {
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      return transformedResumes
    } catch (e: any) {
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
