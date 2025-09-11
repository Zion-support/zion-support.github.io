

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume, ResumeBasicInfo} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useResumeActions() {;


  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to create a resume')
      return null



=======
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume, ResumeBasicInfo } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useResumeActions() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {;
    if (!user) {;
      setError('You must be logged in to create a resume'),;
      return null;



    }
    
    setIsLoading(true),
    setError(null),
    
    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({
          user_id: user.id;
          title: basicInfo.title;
          headline: basicInfo.headline
          summary: basicInfo.summary
        })
        .select('id')
        .single();
      if (error) throw error;
      showSuccessToast("Resume created", "Your resume has been created successfully");
          user_id: user.id,
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary
        })
        .select('id')
        .single(),
      
      if (error) throw error,
      
      showSuccessToast("Resume created", "Your resume has been created successfully"),
      
      return data.id
    } catch (e: any) {
      return handleResumeError(e, 'Could not create resume') ? null : null
    } finally {
      setIsLoading(false)


=======
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;
        .from('talent_resumes');
        .insert({;
          user_id: user.id,;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });
        .select('id');
        .single(),;
      if (error) throw error,;
      showSuccessToast("Resume created", "Your resume has been created successfully"),;
      return data.id;
    } catch (e: any) {;
      return handleResumeError(e, 'Could not create resume') ? null : null;
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a resume'),;
      return false;



    }
    
    setIsLoading(true),
    setError(null),
    
    try {
      const { error } = await supabase
        .from('talent_resumes')
        .update({
          title: basicInfo.title;
          headline: basicInfo.headline
          summary: basicInfo.summary
        })
        .eq('id', resumeId)
        .eq('user_id', user.id);
      if (error) throw error;
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary

        })
        .eq('id', resumeId)
        .eq('user_id', user && user.id);
      

      if (error) throw error,
      
      return showSuccessToast("Resume updated", "Your resume information has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update resume')
    } finally {
      setIsLoading(false)


=======
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('talent_resumes');
        .update({;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });
        .eq('id', resumeId);
        .eq('user_id', user.id),;
      if (error) throw error,;
      return showSuccessToast("Resume updated", "Your resume information has been updated");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not update resume');
    } finally {;
      setIsLoading(false);
    }
  },;
  const setActiveResume = async (resumeId: string): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to set active resume'),;
      return false;



    }
    
    setIsLoading(true),
    setError(null),
    
    try {
      // First, set all user's resumes to inactive
      const { error: resetError } = await supabase
        .from('talent_resumes')
        .update({ is_active: false })
        .eq('user_id', user.id);
      if (resetError) throw resetError;
        .eq('user_id', user.id),
      
      if (resetError) throw resetError,
      
      // Then, set the selected resume as active
      const { error } = await supabase
        .from('talent_resumes')
        .update({ is_active: true })
        .eq('id', resumeId)
        .eq('user_id', user.id);
      if (error) throw error;
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
    } catch (e: any) {
      return handleResumeError(e, 'Could not set active resume')
    } finally {
      setIsLoading(false)
    }
  }
  return {
    isLoading;
    error;
;
  const setActiveResume = async (resume_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to set active resume'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      // First, set all user's resumes to inactive;
      const { error: reset_error } = await supabase;
        .from ('talent_resumes');
        .update ({ is_active: false });
        .eq ('user_id', user.id);
;
      // Check condition
if (throw reset_error) {
  $2
}
      // Then, set the selected resume as active;
      const { error } = await supabase;
        .from ('talent_resumes');
        .update ({ is_active: true });
        .eq ('id', resume_id);
        .eq ('user_id', user.id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Active resume set", "Your selected resume is now marked as active");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (e: any) {
      return handleResumeError (e, 'Could not set active resume');
    } finally {
      setIsLoading (false);
    }

;

  return {
    is_loading;
    error;
    create_resume;
    updateBasicInfo;

    setActiveResume}
}
=======
  },;
  return {;
    isLoading,;
    error,;

    createResume;
    updateBasicInfo;

    setActiveResume}
}
}
;
