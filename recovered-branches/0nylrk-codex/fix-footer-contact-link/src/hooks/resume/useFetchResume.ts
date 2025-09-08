
<<<<<<< HEAD
=======
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
>>>>>>> origin/cursor/delete-old-data-records-6bba


import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useFetchResume() {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const { user } = useAuth();

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

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
export function useFetchResume() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [resume, setResume] = useState<Resume | null>(null),;
  const fetchResume = async (resumeId?: string) => {;
    if (!user) {;
      setError('You must be logged in to access resumes'),;

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

      set_error ('You must be logged in to access resumes');

      return null;
    }
    setIsLoading (true);
    set_error (null);
;

      let resume_query = supabase.from ('talent_resumes').select ('*');
;

<<<<<<< HEAD
      return null;
    }
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // If resumeId is provided, fetch that specific resume;
      // Otherwise, fetch the user's active resume or most recent resume;
      let resumeQuery = supabase.from('talent_resumes').select('*'),;
      if (resumeId) {;
        resumeQuery = resumeQuery.eq('id', resumeId);
      } else {;
        resumeQuery = resumeQuery;
          .eq('user_id', user.id);
          .order('is_active', { ascending: false });
          .order('created_at', { ascending: false });
          .limit(1);
      }
;
      const { data: resumeData, error: resumeError } = await resumeQuery.single(),;
      if (resumeError) {;
        if (resumeError.code === 'PGRST116') {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          // No resume found, this is not a critical error for a new user;
          setResume(null),;
          setIsLoading(false),;
          return null;
<<<<<<< HEAD

      // Check condition
if ( {) {
  $2
}
        resume_query = resume_query.eq ('id', resume_id);
      } else {
        resume_query = resume_query;
          .eq ('user_id', user.id);
          .order ('is_active', { ascending: false });

=======

        }

>>>>>>> origin/cursor/delete-old-data-records-6bba
          .order ('created_at', { ascending: false });
          .limit (1);
      }
      const { data: resume_data, error: resume_error } = await resume_query.single ();
;

}
          // No resume found, this is not a critical error for a new user;
          set_resume (null);
          setIsLoading (false);
          return null;


        }
        throw resumeError
      }

<<<<<<< HEAD
      

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Fetch work experience
      const { data: workData, error: workError } = await supabase
        .from('work_history')
        .select('*')
<<<<<<< HEAD

        .eq('resume_id', resumeData && resumeData.id)

=======
        .eq('resume_id', resumeData && resumeData.id)
.eq('resume_id', resumeData.id)
        .eq('resume_id', resumeData && resumeData.id)
.eq('resume_id', resumeData.id)
        .eq('resume_id', resumeData && resumeData.id)
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
      if (workError) throw workError;
      // Fetch education
      const { data: educationData, error: educationError } = await supabase
        .from('education')
        .select('*')
<<<<<<< HEAD

        .eq('resume_id', resumeData && resumeData.id)

=======
        .eq('resume_id', resumeData && resumeData.id)
.eq('resume_id', resumeData.id)
        .eq('resume_id', resumeData && resumeData.id)
.eq('resume_id', resumeData.id)
        .eq('resume_id', resumeData && resumeData.id)
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
      if (educationError) throw educationError;
      // Fetch skills
      const { data: skillsData, error: skillsError } = await supabase
        .from('resume_skills')
        .select('*')
<<<<<<< HEAD


        .eq('resume_id', resumeData && resumeData.id);

=======

        .eq('resume_id', resumeData && resumeData.id);

}
        throw resume_error;
      }
        .eq('resume_id', resumeData && resumeData.id);
        .eq('resume_id', resumeData.id);
>>>>>>> origin/cursor/delete-old-data-records-6bba

      if (skillsError) throw skillsError;

      // Fetch certifications
      const { data: certData, error: certError } = await supabase
        .from('certifications')
        .select('*')
<<<<<<< HEAD



        .eq('resume_id', resumeData && resumeData.id);


=======
        .eq('resume_id', resumeData && resumeData.id);


.eq('resume_id', resumeData && resumeData.id);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (certError) throw certError;
      const fullResume: Resume = {
        id: resumeData && resumeData.id;
        user_id: resumeData && resumeData.user_id;
        basic_info: {

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


      setResume(fullResume);
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
  return {
    isLoading;

        .eq('resume_id', resumeData.id);
      if (certError) throw certError;
      const fullResume: Resume = {
        id: resumeData.id;
        user_id: resumeData.user_id;
        basic_info: {
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
      setResume(fullResume);
      return fullResume
    } catch (e: any) {
      console.error('Error fetching resume:', e);
      setError(e.message);
      return null
    } finally {
      setIsLoading(false)
    }
  }
  return {
    isLoading;
;
      // Fetch work experience;
      const { data: workData, error: workError } = await supabase;
        .from('work_history');
        .select('*');
        .eq('resume_id', resumeData.id);
        .order('is_current', { ascending: false });
        .order('start_date', { ascending: false }),;
      if (workError) throw workError,;
      // Fetch education;
      const { data: educationData, error: educationError } = await supabase;
        .from('education');
        .select('*');
        .eq('resume_id', resumeData.id);
        .order('is_current', { ascending: false });
        .order('start_date', { ascending: false }),;
      if (educationError) throw educationError,;
      // Fetch skills;
      const { data: skillsData, error: skillsError } = await supabase;
        .from('resume_skills');
        .select('*');
        .eq('resume_id', resumeData.id),;
      if (skillsError) throw skillsError,;
      // Fetch certifications;
      const { data: certData, error: certError } = await supabase;
        .from('certifications');
        .select('*');
        .eq('resume_id', resumeData.id),;
      if (certError) throw certError,;
      const fullResume: Resume = {;
        id: resumeData.id,;
        user_id: resumeData.user_id,;
        basic_info: {;
          id: resumeData.id,;
          title: resumeData.title,;
          headline: resumeData.headline,;
          summary: resumeData.summary;
        },;
        work_experience: workData || [],;
        education: educationData || [],;
        skills: skillsData || [],;
        certifications: certData || [],;
        is_active: resumeData.is_active;
      },;
      setResume(fullResume),;
      return fullResume;
    } catch (e: any) {;
      console.error('Error fetching resume:', e),;
      setError(e.message),;
      return null;
    } finally {;
      setIsLoading(false);
    }
  },;
  return {;
    isLoading,;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

;
  return {
    isLoading;

<<<<<<< HEAD

        .eq('resume_id', resumeData.id);
      if (certError) throw certError;
      const fullResume: Resume = {
        id: resumeData.id;
        user_id: resumeData.user_id;

=======
    resume;
}
export function useFetchResume() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const [resume, setResume] = useState<Resume | null>(null),
  
    if (!user) {
      setError($2);
      return null
    }
    
    setIsLoading($2);
    setError($2);
    try {
      // If resumeId is provided, fetch that specific resume
      // Otherwise, fetch the user's active resume or most recent resume
      let resumeQuery = supabase.from('talent_resumes').select($2);
      if (resumeId) {
        resumeQuery = resumeQuery.eq('id', resumeId)
      } else {
        resumeQuery = resumeQuery
          .eq('user_id', user.id)
          .order('is_active', { ascending: false})
          .order('created_at', { ascending: false})
          .limit(1)
      }
      
      const { data: resumeData, error: resumeError} = await resumeQuery.single($2);
      if (resumeError) {
        if (resumeError.code === 'PGRST116') {
          // No resume found, this is not a critical error for a new user
          setResume($2);
          setIsLoading($2);
          return null
        }
        throw resumeError
      }
      // Fetch work experience
      const { data: workData, error: workError} = await supabase
        .from('work_history')
        .select('*')
        .eq('resume_id', resumeData.id)
        .order('is_current', { ascending: false})
        .order($2);
      if (workError) throw workError,
      
      // Fetch education
      const { data: educationData, error: educationError} = await supabase
        .from('education')
        .select('*')
        .eq('resume_id', resumeData.id)
        .order('is_current', { ascending: false})
        .order($2);
      if (educationError) throw educationError,
      
      // Fetch skills
      const { data: skillsData, error: skillsError} = await supabase
        .from('resume_skills')
        .select('*')
        .eq($2);
      if (skillsError) throw skillsError,
      
      // Fetch certifications
      const { data: certData, error: certError} = await supabase
        .from('certifications')
        .select('*')
        .eq($2);
      if (certError) throw certError,
      
      const fullResume: Resume = $2;
        user_id: resumeData.user_id,
>>>>>>> origin/cursor/delete-old-data-records-6bba
        basic_info: {
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
      setResume(fullResume);
      return fullResume
    } catch (e: any) {
      console.error('Error fetching resume:', e);
      setError(e.message);
      return null

    error;
    resume;
}

    error;
    resume;

    fetchResume}
}
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
;
export function useFetchResume() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [resume, setResume] = useState<Resume | null>(null),;
  ;
  const fetchResume = async (resumeId?:string) => {;
    if (!user) {;
      setError('You must be logged in to access resumes'),;
      return null,;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      // If resumeId is provided, fetch that specific resume;
      // Otherwise, fetch the user's active resume or most recent resume;
      let resumeQuery = supabase.from('talent_resumes').select('*'),;
      ;
      if (resumeId) {;
        resumeQuery = resumeQuery.eq('id', resumeId),;
      } else {;
        resumeQuery = resumeQuery;
          .eq('user_id', user.id);
          .order('is_active', { ascending:false });
          .order('created_at', { ascending:false });
          .limit(1),;
      }
      ;
      const { data:resumeData, error:resumeError } = await resumeQuery.single(),;
      ;
      if (resumeError) {;
        if (resumeError.code === 'PGRST116') {;
          // No resume found, this is not a critical error for a new user;
          setResume(null),;
          setIsLoading(false),;
          return null,;
        }
        throw resumeError,;
      }
      ;
      // Fetch work experience;
      const { data:workData, error:workError } = await supabase;
        .from('work_history');
        .select('*');
        .eq('resume_id', resumeData.id);
        .order('is_current', { ascending:false });
        .order('start_date', { ascending:false }),;
        ;
      if (workError) throw workError,;
      ;
      // Fetch education;
      const { data:educationData, error:educationError } = await supabase;
        .from('education');
        .select('*');
        .eq('resume_id', resumeData.id);
        .order('is_current', { ascending:false });
        .order('start_date', { ascending:false }),;
        ;
      if (educationError) throw educationError,;
      ;
      // Fetch skills;
      const { data:skillsData, error:skillsError } = await supabase;
        .from('resume_skills');
        .select('*');
        .eq('resume_id', resumeData.id),;
        ;
      if (skillsError) throw skillsError,;
      ;
      // Fetch certifications;
      const { data:certData, error:certError } = await supabase;
        .from('certifications');
        .select('*');
        .eq('resume_id', resumeData.id),;
        ;
      if (certError) throw certError,;
      ;
      const fullResume:Resume = {;
        id:resumeData.id,;
        user_id:resumeData.user_id,;
        basic_info:{;
          id:resumeData.id,;
          title:resumeData.title,;
          headline:resumeData.headline,;
          summary:resumeData.summary;
        },;
        work_experience:workData || [],;
        education:educationData || [],;
        skills:skillsData || [],;
        certifications:certData || [],;
        is_active:resumeData.is_active;
      },;
      ;
      setResume(fullResume),;
      return fullResume,;
    } catch (e:any) {;
      console.error('Error fetching resume:', e),;
      setError(e.message),;
      return null,;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return {;
    isLoading,;
    error,;
    resume,;
    fetchResume},;
} setIsLoading (true);
setError (null);
}// Fetch work experience const {
  data: workData, error: workError 
}= await supabase .from ('work history') .select ('*') .eq ('resume id', resumeData.id) if (workError) throw workError;
// Fetch education const {
  data: educationData, error: educationError 
}= await supabase .from ('education') .select ('*') .eq ('resume id', resumeData.id) if (educationError) throw educationError;
// Fetch skills const {
  data: skillsData, error: skillsError 
}= await supabase .from ('resume skills') .select ('*') .eq ('resume id', resumeData.id);
if (skillsError) throw skillsError;
// Fetch certifications const {
  data: certData, error: certError 
}= await supabase .from ('certifications') .select ('*') .eq ('resume id', resumeData.id);
if (certError) throw certError;
const fullResume: Resume = {
  id: resumeData.id, user id: resumeData.user id, basic info: {
  id: resumeData.id, title: resumeData.title, headline: resumeData.headline, summary: resumeData.summary 
};
work experience: workData || [];
education: educationData || [];
skills: skillsData || [];
certifications: certData || [];
is active: resumeData.is active 
};
}

<<<<<<< HEAD

    error;
    resume;
    fetch_resume}
}
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
;
export function useFetchResume() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [resume, setResume] = useState<Resume | null>(null),;
  ;
  const fetchResume = async (resumeId?:string) => {;
    if (!user) {;
      setError('You must be logged in to access resumes'),;
      return null,;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      // If resumeId is provided, fetch that specific resume;
      // Otherwise, fetch the user's active resume or most recent resume;
      let resumeQuery = supabase.from('talent_resumes').select('*'),;
      ;
      if (resumeId) {;
        resumeQuery = resumeQuery.eq('id', resumeId),;
      } else {;
        resumeQuery = resumeQuery;
          .eq('user_id', user.id);
          .order('is_active', { ascending:false });
          .order('created_at', { ascending:false });
          .limit(1),;
      }
      ;
      const { data:resumeData, error:resumeError } = await resumeQuery.single(),;
      ;
      if (resumeError) {;
        if (resumeError.code === 'PGRST116') {;
          // No resume found, this is not a critical error for a new user;
          setResume(null),;
          setIsLoading(false),;
          return null,;
        }
        throw resumeError,;
      }
      ;
      // Fetch work experience;
      const { data:workData, error:workError } = await supabase;
        .from('work_history');
        .select('*');
        .eq('resume_id', resumeData.id);
        .order('is_current', { ascending:false });
        .order('start_date', { ascending:false }),;
        ;
      if (workError) throw workError,;
      ;
      // Fetch education;
      const { data:educationData, error:educationError } = await supabase;
        .from('education');
        .select('*');
        .eq('resume_id', resumeData.id);
        .order('is_current', { ascending:false });
        .order('start_date', { ascending:false }),;
        ;
      if (educationError) throw educationError,;
      ;
      // Fetch skills;
      const { data:skillsData, error:skillsError } = await supabase;
        .from('resume_skills');
        .select('*');
        .eq('resume_id', resumeData.id),;
        ;
      if (skillsError) throw skillsError,;
      ;
      // Fetch certifications;
      const { data:certData, error:certError } = await supabase;
        .from('certifications');
        .select('*');
        .eq('resume_id', resumeData.id),;
        ;
      if (certError) throw certError,;
      ;
      const fullResume:Resume = {;
        id:resumeData.id,;
        user_id:resumeData.user_id,;
        basic_info:{;
          id:resumeData.id,;
          title:resumeData.title,;
          headline:resumeData.headline,;
          summary:resumeData.summary;
        },;
        work_experience:workData || [],;
        education:educationData || [],;
        skills:skillsData || [],;
        certifications:certData || [],;
        is_active:resumeData.is_active;
      },;
      ;
      setResume(fullResume),;
      return fullResume,;
    } catch (e:any) {;
      console.error('Error fetching resume:', e),;
      setError(e.message),;
      return null,;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return {;
    isLoading,;
    error,;
    resume,;
    fetchResume},;
} setIsLoading (true);
setError (null);
}// Fetch work experience const {
  data: workData, error: workError 
}= await supabase .from ('work history') .select ('*') .eq ('resume id', resumeData.id) if (workError) throw workError;
// Fetch education const {
  data: educationData, error: educationError 
}= await supabase .from ('education') .select ('*') .eq ('resume id', resumeData.id) if (educationError) throw educationError;
// Fetch skills const {
  data: skillsData, error: skillsError 
}= await supabase .from ('resume skills') .select ('*') .eq ('resume id', resumeData.id);
if (skillsError) throw skillsError;
// Fetch certifications const {
  data: certData, error: certError 
}= await supabase .from ('certifications') .select ('*') .eq ('resume id', resumeData.id);
if (certError) throw certError;
const fullResume: Resume = {
  id: resumeData.id, user id: resumeData.user id, basic info: {
  id: resumeData.id, title: resumeData.title, headline: resumeData.headline, summary: resumeData.summary 
};
work experience: workData || [];
education: educationData || [];
skills: skillsData || [];
certifications: certData || [];
is active: resumeData.is active 
};
}
    error;
    resume;


=======
    error;
    resume;

    fetchResume}
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
