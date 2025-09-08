
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useFetchResume() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [resume, setResume] = useState<Resume | null>(null);
  const fetchResume = async (resumeId?: string) => {}
    if (!user) {'
<<<<<<< HEAD
      setError('You must be logged in to access resumes');
      return null;
    }
    setIsLoading(true);
    setError(null);
    try {
      // If resumeId is provided, fetch that specific resume
      // Otherwise, fetch the user's active resume or most recent resume          // No resume found, this is not a critical error for a new user
          setResume(null);
          setIsLoading(false);
          return null
import {supabase} from '@/integrations / supabase / client';
import {Resume} from '@/types / resume';

import {use_auth} from '@/hooks / use_auth';
export /**;
 * useFetchResume - Function description;
 */
function useFetchResume() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
export function useFetchResume() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useFetchResume() {;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
</string>
  const [resume, setResume] = useState<Resume | null>(null);
<<<<<<< HEAD

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

=======


pr-12325
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [error, set_error] = useState < string | null>(null);
  const [resume, set_resume] = useState < Resume | null>(null);
;
  const fetch_resume = async (resume_id?: string) => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to access resumes');      if (skillsError) throw skillsError;
      // Fetch certifications
      const { data: certData, error: certError } = await supabase
        .from('certifications')
        .select('*')

        .eq('resume_id', resumeData && resumeData.id);
              setResume(fullResume);
      return fullResume
    } catch (e: any) {
      console && console.error('Error fetching resume:', e);
      setError(e && e.message);
      return null


      // Fetch work experience;
      const { data: work_data, error: work_error } = await supabase;'
        .from ('work_history');'
        .select ('*');'
        .eq ('resume_id', resume_data.id);'
        .order ('is_current', { ascending: false });'
        .order ('start_date', { ascending: false });
;
      // Check condition;
if (throw work_error) {}
  $2;
}
      // Fetch education;
      const { data: education_data, error: education_error } = await supabase;'
        .from ('education');'
        .select ('*');'
        .eq ('resume_id', resume_data.id);'
        .order ('is_current', { ascending: false });'
        .order ('start_date', { ascending: false });
;
      // Check condition;
if (throw education_error) {}
  $2;
}
      // Fetch skills;
      const { data: skills_data, error: skills_error } = await supabase;'
        .from ('resume_skills');'
        .select ('*');'
        .eq ('resume_id', resume_data.id);
;
      // Check condition;
if (throw skills_error) {}
  $2;
}
      // Fetch certifications;
      const { data: cert_data, error: cert_error } = await supabase;'
        .from ('certifications');'
        .select ('*');'
        .eq ('resume_id', resume_data.id);
;
      // Check condition;
if (throw cert_error) {}
  $2;
}
      const full_resume: Resume = {}
        id: resume_data.id;
        user_id: resume_data.user_id;
        basic_info: {}
          id: resume_data.id;
          title: resume_data.title;
          headline: resume_data.headline,
          summary: resume_data.summary;
        }
        work_experience: work_data || [];
        education: education_data || [];
        skills: skills_data || [];
        certifications: cert_data || [],
        is_active: resume_data.is_active;
      }
;
      set_resume (full_resume);
      return full_resume;
    } catch (e: any) {'
      console.error ('Error fetching resume:', e);
      set_error (e.message);
      return null;
<<<<<<< HEAD

    } finally {
      setIsLoading (false);
    }
  }

;

    resume;
}