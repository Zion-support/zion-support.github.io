
<<<<<<< HEAD

=======
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useWorkExperience() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {WorkExperience} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() {;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience')
      return false


<<<<<<< HEAD

=======
=======
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
        .from('work_history')
        .insert({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
          resume_id: resumeId;
          company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB(work.start_date);
          end_date: work.is_current ? null : formatDateForDB(work.end_date);
          is_current: work.is_current;
          description: work.description;
          company_logo_url: work.company_logo_url
          location: work.location
        });
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          company_logo_url: work.company_logo_url,
          location: work.location;
        });
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience');
    } finally {

      setIsLoading(false)


<<<<<<< HEAD
=======
=======
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)
    }
  }
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience')
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
        .from('work_history');
        .insert({;
          resume_id: resumeId,;
          company_name: work.company_name,;
          role_title: work.role_title,;
          start_date: formatDateForDB(work.start_date),;
          end_date: work.is_current ? null : formatDateForDB(work.end_date),;
          is_current: work.is_current,;
          description: work.description,;
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
        .from('work_history')
        .update({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
        })
        .eq('id', workId);
      if (error) throw error;
=======

=======
          company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB(work.start_date);
          end_date: work.is_current ? null : formatDateForDB(work.end_date);
          is_current: work.is_current;
          description: work.description;
          company_logo_url: work.company_logo_url
          location: work.location
        })
        .eq('id', workId);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          company_logo_url: work.company_logo_url,
          location: work.location;
        });
        .eq ('id', work_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Work experience updated", "Your work experience has been updated");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (e: any) {
      return handleResumeError (e, 'Could not update work experience');
    } finally {

      setIsLoading(false)


<<<<<<< HEAD
=======
=======
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update work experience')
    } finally {
      setIsLoading(false)
    }
  }
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete work experience')
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
        .from('work_history');
        .update({;
          company_name: work.company_name,;
          role_title: work.role_title,;
          start_date: formatDateForDB(work.start_date),;
          end_date: work.is_current ? null : formatDateForDB(work.end_date),;
          is_current: work.is_current,;
          description: work.description,;
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
        .from('work_history')
        .delete()
<<<<<<< HEAD


=======
        .eq('id', workId);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq('id', workId),
      
      if (error) throw error,
      
<<<<<<< HEAD


      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
=======
=======
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)

        .eq('id', workId),
      
      if (error) throw error,
      


      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
  const deleteWorkExperience = async (work_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete work experience'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('work_history');
        .delete ();
        .eq ('id', work_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Work experience deleted", "Your work experience has been removed from your resume");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch (e: any) {
      return handleResumeError (e, 'Could not delete work experience');
    } finally {

;

  return {
    is_loading;
    }
  }
  return {
    isLoading;
    error;
    addWorkExperience;
    updateWorkExperience;

      setIsLoading(false)


<<<<<<< HEAD
=======
=======
    deleteWorkExperience
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
  }
}
  }
}
;
  }
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
