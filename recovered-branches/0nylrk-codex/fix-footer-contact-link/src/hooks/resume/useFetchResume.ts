<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useFetchResume() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useFetchResume() {;
<<<<<<< HEAD
=======


<<<<<<< HEAD
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
<<<<<<< HEAD

      let resumeQuery = supabase && supabase.from('talent_resumes').select('*');
      

=======
let resumeQuery = supabase && supabase.from('talent_resumes').select('*');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (resumeId) {
        resumeQuery = resumeQuery && resumeQuery.eq('id', resumeId)
      } else {
        resumeQuery = resumeQuery
          .eq('user_id', user && user.id)
<<<<<<< HEAD
<<<<<<< HEAD
=======
      let resumeQuery = supabase.from('talent_resumes').select('*');
      if (resumeId) {
        resumeQuery = resumeQuery.eq('id', resumeId)
      } else {
        resumeQuery = resumeQuery
          .eq('user_id', user.id)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          .order('is_active', { ascending: false })
          .order('created_at', { ascending: false })
          .limit(1)
      }
<<<<<<< HEAD
<<<<<<< HEAD

      
      const { data: resumeData, error: resumeError } = await resumeQuery && resumeQuery.single();
      

      if (resumeError) {
        if (resumeError && resumeError.code === 'PGRST116') {
=======
      const { data: resumeData, error: resumeError } = await resumeQuery && resumeQuery.single();
      if (resumeError) {
        if (resumeError && resumeError.code === 'PGRST116') {
      const { data: resumeData, error: resumeError } = await resumeQuery.single();
      if (resumeError) {
        if (resumeError.code === 'PGRST116') {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      if (resumeError) {
        if (resumeError && resumeError.code === 'PGRST116') {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          // No resume found, this is not a critical error for a new user
          setResume(null);
          setIsLoading(false);
          return null
<<<<<<< HEAD

        }
        throw resumeError
      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Resume} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
export /**
 * useFetchResume - Function description
 */
function useFetchResume() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const [resume, set_resume] = useState < Resume | null>(null);
;
  const fetch_resume = async (resume_id?: string) => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to access resumes');
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return null;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      // If resume_id is provided, fetch that specific resume;
      // Otherwise, fetch the user's active resume or most recent resume;
      let resume_query = supabase.from ('talent_resumes').select ('*');
;
          // No resume found, this is not a critical error for a new user;
          setResume(null),;
          setIsLoading(false),;
          return null;
        }
        throw resumeError
      }
      // Check condition
if ( {) {
  $2
}
        resume_query = resume_query.eq ('id', resume_id);
      } else {
        resume_query = resume_query;
          .eq ('user_id', user.id);
          .order ('is_active', { ascending: false });
          .order ('created_at', { ascending: false });
          .limit (1);
      }
      const { data: resume_data, error: resume_error } = await resume_query.single ();
;
      // Check condition
if ( {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          // No resume found, this is not a critical error for a new user;
          set_resume (null);
          setIsLoading (false);
          return null;
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
        throw resume_error;
      }


      

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
=======
        }
        throw resumeError
      }
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Fetch work experience
      const { data: workData, error: workError } = await supabase
        .from('work_history')
        .select('*')
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('resume_id', resumeData && resumeData.id)
=======
        .eq('resume_id', resumeData.id)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        .eq('resume_id', resumeData && resumeData.id)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
      if (workError) throw workError;
      // Fetch education
      const { data: educationData, error: educationError } = await supabase
        .from('education')
        .select('*')
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('resume_id', resumeData && resumeData.id)
=======
        .eq('resume_id', resumeData.id)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        .eq('resume_id', resumeData && resumeData.id)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
      if (educationError) throw educationError;
      // Fetch skills
      const { data: skillsData, error: skillsError } = await supabase
        .from('resume_skills')
        .select('*')
<<<<<<< HEAD
<<<<<<< HEAD

        .eq('resume_id', resumeData && resumeData.id);
        

=======
        }
        throw resume_error;
      }
        .eq('resume_id', resumeData && resumeData.id);
        .eq('resume_id', resumeData.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (skillsError) throw skillsError;
      // Fetch certifications
      const { data: certData, error: certError } = await supabase
        .from('certifications')
        .select('*')
<<<<<<< HEAD
<<<<<<< HEAD

        .eq('resume_id', resumeData && resumeData.id);
        

=======
        .eq('resume_id', resumeData && resumeData.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (certError) throw certError;
      const fullResume: Resume = {
        id: resumeData && resumeData.id;
        user_id: resumeData && resumeData.user_id;
        basic_info: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
      

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setResume(fullResume);
      return fullResume
    } catch (e: any) {
      console && console.error('Error fetching resume:', e);
      setError(e && e.message);
      return null
<<<<<<< HEAD
=======
      // Fetch work experience;
      const { data: work_data, error: work_error } = await supabase;
        .from ('work_history');
        .select ('*');
        .eq ('resume_id', resume_data.id);
        .order ('is_current', { ascending: false });
        .order ('start_date', { ascending: false });
;
      // Check condition
if (throw work_error) {
  $2
}
      // Fetch education;
      const { data: education_data, error: education_error } = await supabase;
        .from ('education');
        .select ('*');
        .eq ('resume_id', resume_data.id);
        .order ('is_current', { ascending: false });
        .order ('start_date', { ascending: false });
;
      // Check condition
if (throw education_error) {
  $2
}
      // Fetch skills;
      const { data: skills_data, error: skills_error } = await supabase;
        .from ('resume_skills');
        .select ('*');
        .eq ('resume_id', resume_data.id);
;
      // Check condition
if (throw skills_error) {
  $2
}
      // Fetch certifications;
      const { data: cert_data, error: cert_error } = await supabase;
        .from ('certifications');
        .select ('*');
        .eq ('resume_id', resume_data.id);
;
      // Check condition
if (throw cert_error) {
  $2
}
      const full_resume: Resume = {
        id: resume_data.id;
        user_id: resume_data.user_id;
        basic_info: {
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
    } catch (e: any) {
      console.error ('Error fetching resume:', e);
      set_error (e.message);
      return null;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    is_loading;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    error;
    resume;
}
<<<<<<< HEAD
=======
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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

;

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    error;
    resume;

    fetchResume}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
