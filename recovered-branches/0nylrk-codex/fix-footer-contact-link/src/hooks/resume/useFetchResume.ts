

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useFetchResume() {;


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

      let resumeQuery = supabase && supabase.from('talent_resumes').select('*');
      

      if (resumeId) {
        resumeQuery = resumeQuery && resumeQuery.eq('id', resumeId)
      } else {
        resumeQuery = resumeQuery
          .eq('user_id', user && user.id)
          .order('is_active', { ascending: false })
          .order('created_at', { ascending: false })
          .limit(1)
      }

      
      const { data: resumeData, error: resumeError } = await resumeQuery && resumeQuery.single();
      

      if (resumeError) {
        if (resumeError && resumeError.code === 'PGRST116') {
          // No resume found, this is not a critical error for a new user
          setResume(null);
          setIsLoading(false);
          return null
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        }
        throw resume_error;
      }


      


      // Fetch work experience
      const { data: workData, error: workError } = await supabase
        .from('work_history')
        .select('*')
        .eq('resume_id', resumeData && resumeData.id)
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
      if (workError) throw workError;
      // Fetch education
      const { data: educationData, error: educationError } = await supabase
        .from('education')
        .select('*')
        .eq('resume_id', resumeData && resumeData.id)
        .order('is_current', { ascending: false })
        .order('start_date', { ascending: false });
      if (educationError) throw educationError;
      // Fetch skills
      const { data: skillsData, error: skillsError } = await supabase
        .from('resume_skills')
        .select('*')

        .eq('resume_id', resumeData && resumeData.id);
        

      if (skillsError) throw skillsError;
      // Fetch certifications
      const { data: certData, error: certError } = await supabase
        .from('certifications')
        .select('*')

        .eq('resume_id', resumeData && resumeData.id);
        

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
      return fullResume
    } catch (e: any) {
      console && console.error('Error fetching resume:', e);
      setError(e && e.message);
      return null
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }
  }
  return {
    isLoading;
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    error;
    resume;

    fetch_resume}

}