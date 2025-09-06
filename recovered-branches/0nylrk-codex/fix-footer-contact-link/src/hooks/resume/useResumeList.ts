
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import { useState, useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useResumeList() {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useResumeList() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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

          id: resume && resume.id;
          title: resume && resume.title;
          headline: resume && resume.headline,
          summary: resume && resume.summary
        };
=======
          headline: resume.headline,
          summary: resume.summary;
        }

        work_experience: [];
        education: [];
        skills: [];
        certifications: [],

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

<<<<<<< HEAD
    fetchResumes
import { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
export function useResumeList() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [resumes, setResumes] = useState<Resume[]>([]),;
  const fetchResumes = async () => {;
    if (!user) {;
      setError('You must be logged in to access resumes'),;
      return [];
    }
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // Fetch resume list with basic info for the current user;
      const { data: resumeData, error: resumeError } = await supabase;
        .from('talent_resumes');
        .select('*');
        .eq('user_id', user.id);
        .order('is_active', { ascending: false });
        .order('created_at', { ascending: false }),;
      if (resumeError) throw resumeError,;
      if (!resumeData || resumeData.length === 0) {;
        setResumes([]),;
        return [];
      }
;
      // Transform data to match Resume type;
      const transformedResumes: Resume[] = resumeData.map(resume => ({;
        id: resume.id,;
        user_id: resume.user_id,;
        basic_info: {;
          id: resume.id,;
          title: resume.title,;
          headline: resume.headline,;
          summary: resume.summary;
        },;
        work_experience: [],;
        education: [],;
        skills: [],;
        certifications: [],;
        is_active: resume.is_active;
      })),;
      setResumes(transformedResumes),;
      return transformedResumes;
    } catch (e: any) {;
      console.error('Error fetching resumes:', e),;
      setError(e.message),;
      return [];
    } finally {;
      setIsLoading(false);
    }
  },;
  // Fetch resumes when the component mounts;
  useEffect(() => {;
    if (user) {;
      fetchResumes();
    }
  }, [user]),;
  return {;
    isLoading,;
    error;
    resumes;
    fetchResumes;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  }
}