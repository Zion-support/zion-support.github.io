
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { WorkExperience } from '@/types/resume',
import { useAuth } from '@/hooks/useAuth',
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',

export function useWorkExperience() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience'),
      return false
    }
=======

export function useWorkExperience() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update work experience');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('work_history')
<<<<<<< HEAD
        .insert({
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
=======
        .insert({_resume_id: resumeId, _company_name: work.company_name, _role_title: work.role_title, _start_date: formatDateForDB(work.start_date), _end_date: work.is_current ? null : formatDateForDB(work.end_date), _is_current: work.is_current, _description: work.description, _company_logo_url: work.company_logo_url, _location: work.location});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
=======
      return showSuccessToast(&quot;Work experience added&quot;, &quot;Your work experience has been added to your resume&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)
    }
  },
  
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience'),
      return false
    }
=======
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not add work experience');} finally {_setIsLoading(false);}
  };
  
  const _updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update work experience');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('work_history')
<<<<<<< HEAD
        .update({
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
=======
        .update({_company_name: work.company_name, _role_title: work.role_title, _start_date: formatDateForDB(work.start_date), _end_date: work.is_current ? null : formatDateForDB(work.end_date), _is_current: work.is_current, _description: work.description, _company_logo_url: work.company_logo_url, _location: work.location})
        .eq('id', workId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
=======
      return showSuccessToast(&quot;Work experience updated&quot;, &quot;Your work experience has been updated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not update work experience')
    } finally {
      setIsLoading(false)
    }
  },
  
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete work experience'),
      return false
    }
=======
      return showSuccessToast("Work experience updated", "Your work experience has been updated");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not update work experience');} finally {_setIsLoading(false);}
  };
  
  const _deleteWorkExperience = async (workId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete work experience');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('work_history')
        .delete()
        .eq('id', workId),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
=======
      return showSuccessToast(&quot;Work experience deleted&quot;, &quot;Your work experience has been removed from your resume&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)
    }
  },

  return {
    isLoading,
    error,
    addWorkExperience,
    updateWorkExperience,
    deleteWorkExperience
  }
=======
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not delete work experience');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _addWorkExperience, _updateWorkExperience, _deleteWorkExperience};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
