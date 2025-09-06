
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume, ResumeBasicInfo  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
export function useResumeActions() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume, ResumeBasicInfo} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useResumeActions() {;


  const { user } = useAuth();
=======
export function useResumeActions() {  const { user } = useAuth();
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to create a resume')
<<<<<<< HEAD
      return null



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

          user_id: user && user.id;
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

        })
=======
      return null    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({        })
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        .select('id')
        .single();
      if (error) throw error;
      showSuccessToast("Resume created", "Your resume has been created successfully");

        })
        .eq('id', resumeId)
        .eq('user_id', user && user.id);
      

<<<<<<< HEAD
      if (error) throw error,
=======
=======      if (error) throw error,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      
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
<<<<<<< HEAD
  }


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

=======
  }    try {
      const { error } = await supabase
        .from('talent_resumes')
        .update({
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      if (error) throw error;
      return showSuccessToast("Resume updated", "Your resume information has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update resume')
    } finally {
      setIsLoading(false)
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary

        })
        .eq('id', resumeId)
        .eq('user_id', user && user.id);
      

      if (error) throw error,
      

<<<<<<< HEAD

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


    }
    setIsLoading(true);
    setError(null);


;
=======
      return showSuccessToast("Resume updated", "Your resume information has been updated");
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
    
    
    try {
      // First, set all user's resumes to inactive
      const { error: resetError } = await supabase
        .from('talent_resumes')
        .update({ is_active: false })

        .eq('user_id', user && user.id);
      

      if (resetError) throw resetError;

        .eq('user_id', user.id),
=======
        try {
      // First, set all user's resumes to inactive
      const { error: resetError } = await supabase
        .from('talent_resumes')
        .update({ is_active: false })        .eq('user_id', user.id),
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      
      if (resetError) throw resetError,
      

      // Then, set the selected resume as active
      const { error } = await supabase
        .from('talent_resumes')
        .update({ is_active: true })
<<<<<<< HEAD
        .eq('id', resumeId)

        .eq('user_id', user && user.id);
      

      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")

        .eq('user_id', user.id),
      
      if (error) throw error,
      

      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
    } catch (e: any) {
      return handleResumeError(e, 'Could not set active resume')
    } finally {
      setIsLoading(false)

        .eq('user_id', user && user.id);
      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
;
=======
        .eq('id', resumeId);
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    } catch (e: any) {
      return handleResumeError (e, 'Could not set active resume');
    } finally {
      setIsLoading (false);
    }

<<<<<<< HEAD
;

  return {
    is_loading;
    error;
    create_resume;
    updateBasicInfo;
    setActiveResume}
}
    createResume;
    updateBasicInfo;

    setActiveResume}

}
;

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
=======
;  return {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    isLoading,;
    error,;
    createResume;
    updateBasicInfo;

    setActiveResume}
}
;

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
