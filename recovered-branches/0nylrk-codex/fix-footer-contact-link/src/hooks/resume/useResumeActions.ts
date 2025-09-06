
<<<<<<< HEAD

=======
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume, ResumeBasicInfo  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useResumeActions() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume, ResumeBasicInfo} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useResumeActions() {;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to create a resume')
      return null


<<<<<<< HEAD

=======
=======
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          user_id: user && user.id;
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

<<<<<<< HEAD
=======
          user_id: user.id;
          title: basicInfo.title;
          headline: basicInfo.headline
          summary: basicInfo.summary
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        })
        .select('id')
        .single();
      if (error) throw error;
      showSuccessToast("Resume created", "Your resume has been created successfully");
<<<<<<< HEAD

      
      return data && data.id

=======
=======
      return data && data.id
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (e: any) {
      return handleResumeError (e, 'Could not create resume') ? null : null;
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return data.id
    } catch (e: any) {
      return handleResumeError(e, 'Could not create resume') ? null : null
    } finally {
      setIsLoading(false)

<<<<<<< HEAD

=======
=======
    }
  }
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a resume')
      return false
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    try {
      const { error } = await supabase
        .from('talent_resumes')
        .update({
<<<<<<< HEAD

=======
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
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      return showSuccessToast("Resume updated", "Your resume information has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update resume')
    } finally {
      setIsLoading(false)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary

        })
        .eq('id', resumeId)
        .eq('user_id', user && user.id);
<<<<<<< HEAD
      

      if (error) throw error,
      


=======
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return showSuccessToast("Resume updated", "Your resume information has been updated")
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (e: any) {
      return handleResumeError (e, 'Could not update resume');
    } finally {

      setIsLoading(false)


<<<<<<< HEAD
=======
=======
    }
  }
  const setActiveResume = async (resumeId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to set active resume')
      return false
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    try {
      // First, set all user's resumes to inactive
      const { error: resetError } = await supabase
        .from('talent_resumes')
        .update({ is_active: false })
<<<<<<< HEAD

        .eq('user_id', user && user.id);
      

=======
        .eq('user_id', user && user.id);
      

  }
        .eq('user_id', user && user.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      if (resetError) throw resetError;

<<<<<<< HEAD
=======
        .eq('user_id', user.id);
      if (resetError) throw resetError;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq('user_id', user.id),
      
      if (resetError) throw resetError,
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // Then, set the selected resume as active
      const { error } = await supabase
        .from('talent_resumes')
        .update({ is_active: true })
        .eq('id', resumeId)
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq('user_id', user && user.id);
      

      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")

<<<<<<< HEAD
=======
        .eq('user_id', user.id);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq('user_id', user.id),
      
      if (error) throw error,
      
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
    } catch (e: any) {
      return handleResumeError(e, 'Could not set active resume')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        .eq('user_id', user && user.id);
      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

;

=======
  }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return {
    is_loading;
    error;
    create_resume;
    updateBasicInfo;

    setActiveResume}
<<<<<<< HEAD
}
=======
  },;
  return {;
    isLoading,;
    error,;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    createResume;
    updateBasicInfo;

    setActiveResume}

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
  },;
  return {;
    isLoading,;
    error,;
    createResume;
    updateBasicInfo;

    setActiveResume}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
