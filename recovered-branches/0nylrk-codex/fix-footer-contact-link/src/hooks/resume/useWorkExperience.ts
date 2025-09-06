
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
export function useWorkExperience() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {WorkExperience} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() {;


  const { user } = useAuth();
=======
export function useWorkExperience() {  const { user } = useAuth();
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience')
<<<<<<< HEAD
      return false



import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { WorkExperience } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useWorkExperience() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update work experience'),;
      return false;



    }
    
    setIsLoading(true),
    setError(null),
    
    
    try {
      const { error } = await supabase
        .from('work_history')
        .insert({

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {WorkExperience} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**
 * useWorkExperience - Function description
 */
function useWorkExperience() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const addWorkExperience = async (resume_id: string, work: WorkExperience): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to update work experience'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('work_history');
        .insert ({
          resume_id: resume_id;

          company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
          is_current: work.is_current;
          description: work.description;

          company_name: work && work.company_name;
          role_title: work && work.role_title;
          start_date: formatDateForDB(work && work.start_date);
          end_date: work && work.is_current ? null : formatDateForDB(work && work.end_date);
          is_current: work && work.is_current;
          description: work && work.description;
          company_logo_url: work && work.company_logo_url,
          location: work && work.location

        });
      if (error) throw error;

          resume_id: resumeId,
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location
        }),
      
      if (error) throw error,
      

      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
          company_logo_url: work.company_logo_url,
=======
      return false    try {
      const { error } = await supabase
        .from('work_history')
        .insert({      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")          company_logo_url: work.company_logo_url,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          location: work.location;
        });
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience');
    } finally {

      setIsLoading(false)

<<<<<<< HEAD

      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
=======
=======      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('work_history');
        .insert({;
          resume_id: resumeId,;
          company_name: work.company_name,;
          role_title: work.role_title,;
          start_date: formatDateForDB(work.start_date),;
          end_date: work.is_current ? null : formatDateForDB(work.end_date),;
<<<<<<< HEAD
          is_current: work.is_current,;
          description: work.description,;
=======
          is_current: work.is_current,,
  description: work.description,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          company_logo_url: work.company_logo_url,;
          location: work.location;
        }),;
      if (error) throw error,;
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not add work experience');
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update work experience'),;
      return false;

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
    
    
    try {
      const { error } = await supabase
        .from('work_history')
        .update({

;
  const updateWorkExperience = async (work_id: string, work: WorkExperience): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to update work experience'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('work_history');
        .update ({

          company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
          is_current: work.is_current;
          description: work.description;

          company_name: work && work.company_name;
          role_title: work && work.role_title;
          start_date: formatDateForDB(work && work.start_date);
          end_date: work && work.is_current ? null : formatDateForDB(work && work.end_date);
          is_current: work && work.is_current;
          description: work && work.description;
          company_logo_url: work && work.company_logo_url,
          location: work && work.location

        })
        .eq('id', workId);
      if (error) throw error;
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location
        })
        .eq('id', workId),
      
      if (error) throw error,
      

      return showSuccessToast("Work experience updated", "Your work experience has been updated")
          company_logo_url: work.company_logo_url,
=======
              company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
          is_current: work.is_current,
  description: work.description;      return showSuccessToast("Work experience updated", "Your work experience has been updated")          company_logo_url: work.company_logo_url,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          location: work.location;
        });
        .eq ('id', work_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Work experience updated", "Your work experience has been updated");
    } catch (e: any) {
      return handleResumeError (e, 'Could not update work experience');
    } finally {

      setIsLoading(false)

<<<<<<< HEAD

      return showSuccessToast("Work experience updated", "Your work experience has been updated")
=======
=======      return showSuccessToast("Work experience updated", "Your work experience has been updated")
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    } catch (e: any) {
      return handleResumeError(e, 'Could not update work experience')
    } finally {
      setIsLoading(false)
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('work_history');
        .update({;
          company_name: work.company_name,;
          role_title: work.role_title,;
          start_date: formatDateForDB(work.start_date),;
          end_date: work.is_current ? null : formatDateForDB(work.end_date),;
<<<<<<< HEAD
          is_current: work.is_current,;
          description: work.description,;
=======
          is_current: work.is_current,,
  description: work.description,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          company_logo_url: work.company_logo_url,;
          location: work.location;
        });
        .eq('id', workId),;
      if (error) throw error,;
      return showSuccessToast("Work experience updated", "Your work experience has been updated");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not update work experience');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete work experience'),;
<<<<<<< HEAD
      return false;



    }
    
    setIsLoading(true),
    setError(null),
    
    
    try {
      const { error } = await supabase
        .from('work_history')
        .delete()


        .eq('id', workId),
=======
      return false;    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
      setIsLoading (false);        .eq('id', workId),
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      
      if (error) throw error,
      

<<<<<<< HEAD

      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
;
=======
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const deleteWorkExperience = async (work_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete work experience'),
      return false;
      setIsLoading (false);
    }
  }
    } catch (e: any) {
      return handleResumeError (e, 'Could not delete work experience');
    } finally {
      setIsLoading (false);
    }
  }
  return {
    is_loading;
    error;
    addWorkExperience;
    updateWorkExperience;

      setIsLoading(false)

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('work_history');
        .delete();
        .eq('id', workId),;
      if (error) throw error,;
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not delete work experience');
    } finally {;
      setIsLoading(false);
    }
  },;
  return {;
    isLoading,;
    error,;
    addWorkExperience;
    updateWorkExperience;
    deleteWorkExperience;
<<<<<<< HEAD


  }
}
  }
}
  }
}
;
  }
}
;
  }
}
;
=======
  }
}
;  }
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
