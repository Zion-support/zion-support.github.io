
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume, ResumeBasicInfo  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useResumeActions() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume, ResumeBasicInfo} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useResumeActions() {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to create a resume')
      return null


<<<<<<< HEAD
<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          user_id: user && user.id;
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          user_id: user.id;
          title: basicInfo.title;
          headline: basicInfo.headline
          summary: basicInfo.summary
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        })
        .select('id')
        .single();
      if (error) throw error;
      showSuccessToast("Resume created", "Your resume has been created successfully");
<<<<<<< HEAD
<<<<<<< HEAD
=======

      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return data && data.id
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Resume, ResumeBasicInfo} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**
 * useResumeActions - Function description
 */
function useResumeActions() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const create_resume = async (basic_info: ResumeBasicInfo): Promise < string | null> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to create a resume'),
      return null;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { data, error } = await supabase;
        .from ('talent_resumes');
        .insert ({
          user_id: user.id;
          title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;
        });
        .select ('id');
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      showSuccessToast ("Resume created", "Your resume has been created successfully");
;
      return data.id;
    } catch (e: any) {
      return handleResumeError (e, 'Could not create resume') ? null : null;
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          user_id: user.id,
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary
        })
        .select('id')
        .single(),
      
      if (error) throw error,
      
      showSuccessToast("Resume created", "Your resume has been created successfully"),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return data.id
    } catch (e: any) {
      return handleResumeError(e, 'Could not create resume') ? null : null
    } finally {
      setIsLoading(false)

<<<<<<< HEAD
<<<<<<< HEAD
    }
  }
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a resume')
      return false
    }
    setIsLoading(true);
    setError(null);
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const { error } = await supabase
        .from('talent_resumes')
        .update({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        })
        .eq('id', resumeId)
        .eq('user_id', user.id),
      
=======

        })
        .eq('id', resumeId)
        .eq('user_id', user && user.id);
      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (error) throw error,
      
      return showSuccessToast("Resume updated", "Your resume information has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update resume')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary

        })
        .eq('id', resumeId)
        .eq('user_id', user && user.id);
      if (error) throw error;
      return showSuccessToast("Resume updated", "Your resume information has been updated")
;
  const updateBasicInfo = async (resume_id: string, basic_info: ResumeBasicInfo): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to update a resume'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('talent_resumes');
        .update ({
          title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;
        });
        .eq ('id', resume_id);
        .eq ('user_id', user.id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Resume updated", "Your resume information has been updated");
    } catch (e: any) {
      return handleResumeError (e, 'Could not update resume');
    } finally {

      setIsLoading(false)


<<<<<<< HEAD
    }
  }
  const setActiveResume = async (resumeId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to set active resume')
      return false
    }
    setIsLoading(true);
    setError(null);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      // First, set all user's resumes to inactive
      const { error: resetError } = await supabase
        .from('talent_resumes')
        .update({ is_active: false })
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('user_id', user && user.id);
      

  }
        .eq('user_id', user && user.id);
      if (resetError) throw resetError;

<<<<<<< HEAD
        .eq('user_id', user.id);
      if (resetError) throw resetError;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq('user_id', user.id);
      if (resetError) throw resetError;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq('user_id', user.id),
      
      if (resetError) throw resetError,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Then, set the selected resume as active
      const { error } = await supabase
        .from('talent_resumes')
        .update({ is_active: true })
        .eq('id', resumeId)
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('user_id', user && user.id);
      

      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")

<<<<<<< HEAD
        .eq('user_id', user.id);
      if (error) throw error;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq('user_id', user.id);
      if (error) throw error;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq('user_id', user.id),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
    } catch (e: any) {
      return handleResumeError(e, 'Could not set active resume')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('user_id', user && user.id);
      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
  }
  return {
    isLoading;
    error;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (e: any) {
      return handleResumeError (e, 'Could not set active resume');
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
  }
;
=======

;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    is_loading;
    error;
    create_resume;
    updateBasicInfo;
<<<<<<< HEAD
    setActiveResume}
<<<<<<< HEAD
    }
  }
  return {
    isLoading;
    error;
;
    setIsLoading(true),;
    setError(null),;
    try {;
      // First, set all user's resumes to inactive;
      const { error: resetError } = await supabase;
        .from('talent_resumes');
        .update({ is_active: false });
        .eq('user_id', user.id),;
      if (resetError) throw resetError,;
      // Then, set the selected resume as active;
      const { error } = await supabase;
        .from('talent_resumes');
        .update({ is_active: true });
        .eq('id', resumeId);
        .eq('user_id', user.id),;
      if (error) throw error,;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not set active resume');
    } finally {;
      setIsLoading(false);
    }
=======
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    setActiveResume}
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },;
  return {;
    isLoading,;
    error,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    createResume;
    updateBasicInfo;

    setActiveResume}
<<<<<<< HEAD
<<<<<<< HEAD
}
;


import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume, ResumeBasicInfo } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
;
export function useResumeActions() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const createResume = async (basicInfo:ResumeBasicInfo):Promise<string | null> => {;
    if (!user) {;
      setError('You must be logged in to create a resume'),;
      return null;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase;
        .from('talent_resumes');
        .insert({;
          user_id:user.id,;
          title:basicInfo.title,;
          headline:basicInfo.headline,;
          summary:basicInfo.summary;
        });
        .select('id');
        .single(),;
      ;
      if (error) throw error,;
      ;
      showSuccessToast("Resume created", "Your resume has been created successfully"),;
      ;
      return data.id,;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not create resume') ? null :null,;
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  const updateBasicInfo = async (resumeId:string, basicInfo:ResumeBasicInfo):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a resume'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('talent_resumes');
        .update({;
          title:basicInfo.title,;
          headline:basicInfo.headline,;
          summary:basicInfo.summary;
        });
        .eq('id', resumeId);
        .eq('user_id', user.id),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Resume updated", "Your resume information has been updated"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not update resume'),;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const setActiveResume = async (resumeId:string):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to set active resume'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      // First, set all user's resumes to inactive;
      const { error:resetError } = await supabase;
        .from('talent_resumes');
        .update({ is_active:false });
        .eq('user_id', user.id),;
      ;
      if (resetError) throw resetError,;
      ;
      // Then, set the selected resume as active;
      const { error } = await supabase;
        .from('talent_resumes');
        .update({ is_active:true });
        .eq('id', resumeId);
        .eq('user_id', user.id),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not set active resume'),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return {;
    isLoading,;
    error,;
    createResume,;
    updateBasicInfo,;
    setActiveResume},; setIsLoading (true);
setError (null);
try {
  const {
  data, error 
}= await supabase .from ('talent resumes') .insert ({
  user id: user.id, title: basicInfo.title, headline: basicInfo.headline, summary: basicInfo.summary 
}) .select ('id') .single ();
if (error) throw error;
setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('talent resumes') .update ({
  title: basicInfo.title, headline: basicInfo.headline, summary: basicInfo.summary 
}) .eq ('id', resumeId) .eq ('user id', user.id);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not update resume') 
}finally {
  setIsLoading (false) 
}
};
const setActiveResume = async (resumeId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to set active resume');
return false;
}setError (null);
try {
  //First, set all user's resumes to inactive const {
  error: resetError 
}= await supabase .from ('talent resumes') if (resetError) throw resetError;
// Then, set the selected resume as active const {
  error 
}= await supabase .from ('talent resumes') .update ({
  is active: true 
}) .eq ('id', resumeId) .eq ('user id', user.id);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not set active resume') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
createResume;
updateBasicInfo;
setActiveResume 
}
}
}
}
;
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
