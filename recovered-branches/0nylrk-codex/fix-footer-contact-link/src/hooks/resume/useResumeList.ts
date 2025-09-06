<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts


<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useResumeList() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useResumeList() {;
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
        .eq('user_id', user && user.id)
        .order('is_active', { ascending: false })
        .order('created_at', { ascending: false });
      if (resumeError) throw resumeError;

      
      if (!resumeData || resumeData && resumeData.length === 0) {

========
<<<<<<< HEAD
if (!resumeData || resumeData && resumeData.length === 0) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
=======
        .eq('user_id', user.id)
        .order('is_active', { ascending: false })
        .order('created_at', { ascending: false });
      if (resumeError) throw resumeError;
      if (!resumeData |resumeData.length === 0) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setResumes([]);
        return []
      }
      // Transform data to match Resume type
<<<<<<< HEAD
      const transformedResumes: Resume[] = resumeData && resumeData.map(resume => ({
        id: resume && resume.id;
        user_id: resume && resume.user_id;
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
        basic_info: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
          id: resume && resume.id;
          title: resume && resume.title;
          headline: resume && resume.headline,
          summary: resume && resume.summary
        };
          headline: resume.headline,
          summary: resume.summary;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
        work_experience: [];
        education: [];
        skills: [];
        certifications: [],
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
        is_active: resume.is_active;
      }));
;
      set_resumes (transformed_resumes);
      return transformed_resumes;
    } catch (e: any) {
      console.error ('Error fetching resumes:', e);
      set_error (e.message);
      return [];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
  return {
    is_loading;
    error;
    resumes;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts

<<<<<<< HEAD
    fetchResumes

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
      }));
      setResumes(transformedResumes);
      return transformedResumes
    } catch (e: any) {
      console.error('Error fetching resumes:', e);
      setError(e.message);
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    fetch_resumes;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeList.ts
  }
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
