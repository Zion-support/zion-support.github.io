
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Education  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useEducation() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addEducation = async (resumeId: string, education: Education): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add education')
      return false    try {
      const { error } = await supabase
        .from('education')
        .insert({;
    setIsLoading(true),;
    setError(null),;
    try {;
<<<<<<< HEAD

      const { error } = await supabase;'
        .from('education');

=======
      }
        .from('education');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .insert({;
          resume_id: resumeId,;
          institution: education.institution,;
          degree: education.degree,;
          field_of_study: education.field_of_study,;
          start_date: formatDateForDB(education.start_date),;
          end_date: education.is_current ? null : formatDateForDB(education.end_date),;
          is_current: education.is_current,,
  description: education.description,;
          institution_logo_url: education.institution_logo_url,;
          location: education.location;
        }),;
      if (error) throw error,;"
      return showSuccessToast("Education added", "Your education has been added to your resume");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not add education');
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateEducation = async (eduId: string, education: Education): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to update education'),;
      return false;

    }
    
    setIsLoading(true),
    setError(null),
          return showSuccessToast("Education updated", "Your education has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update education')
    } finally {
      setIsLoading(false)    try {
      const { error } = await supabase
        .from('education')
        .delete()import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Education} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';

import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * use_education - Function description;
>>>>>>> origin/cursor/delete-old-data-records-6bba
 */
function use_education() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);

;
  const add_education = async (resume_id: string, education: Education): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}
      set_error ('You must be logged in to add education'),
      return false;
    }
  },;
  return {;
    isLoading,;
    error,;
    addEducation;
    updateEducation;
    deleteEducation;
  }
}  }
}
    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD