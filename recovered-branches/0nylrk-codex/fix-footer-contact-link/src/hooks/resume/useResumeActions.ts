
<<<<<<< HEAD
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
      setIsLoading(false),;
=======
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { Resume, ResumeBasicInfo } from '@/types/resume',
import { useAuth } from '@/hooks/useAuth',
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',

export function useResumeActions() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to create a resume'),
      return null
    }    
    setIsLoading(true),
    setError(null),
    
    try {_const { data, _error} = await supabase
        .from('talent_resumes')
        .insert({_user_id: user.id, _title: basicInfo.title, _headline: basicInfo.headline, _summary: basicInfo.summary})
        .select('id')
        .single(),
      
      if (error) throw error,
      
      showSuccessToast("Resume created", "Your resume has been created successfully"),      
      return data.id
    } catch (e: any) {
      return handleResumeError(e, 'Could not create resume') ? null : null
    } finally {
      setIsLoading(false)
    }
  },
  
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a resume'),
      return false
    }    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('talent_resumes')
        .update({_title: basicInfo.title, _headline: basicInfo.headline, _summary: basicInfo.summary})
        .eq('id', resumeId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      return showSuccessToast("Resume updated", "Your resume information has been updated")    } catch (e: any) {
      return handleResumeError(e, 'Could not update resume')
    } finally {
      setIsLoading(false)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
  },;
  ;
  const setActiveResume = async (resumeId:string):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to set active resume'),;
      return false;
    }
<<<<<<< HEAD
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
    setActiveResume},;
=======
      return showSuccessToast("Resume updated", "Your resume information has been updated");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not update resume');} finally {_setIsLoading(false);}
  };
  
  const _setActiveResume = async (resumeId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to set active resume');
      return false;}
    
    setIsLoading(true),
    setError(null),
    
    try {_// First, _set all user's resumes to inactive
      const { error: resetError} = await supabase
        .from('talent_resumes')
        .update({ is_active: false })
        .eq('user_id', user.id),      
      if (resetError) throw resetError,
      
      // Then, set the selected resume as active
      const {_error} = await supabase
        .from('talent_resumes')
        .update({_is_active: true})
        .eq('id', resumeId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")    } catch (e: any) {
      return handleResumeError(e, 'Could not set active resume')
    } finally {
      setIsLoading(false)
    }
  },

  return {
    isLoading,
    error,
    createResume,
    updateBasicInfo,
    setActiveResume}
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not set active resume');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _createResume, _updateBasicInfo, _setActiveResume};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
