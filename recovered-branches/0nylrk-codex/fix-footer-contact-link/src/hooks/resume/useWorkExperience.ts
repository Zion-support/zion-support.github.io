

=======
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {WorkExperience} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience')
      return false

    }

    setIsLoading(true),
    setError(null),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
      const { error } = await supabase
        .from('work_history')
        .insert({

      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience');
    } finally {

      setIsLoading(false)


=======
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



    }
    
    setIsLoading(true),
    setError(null),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
      const { error } = await supabase
        .from('work_history')
        .update({

      return showSuccessToast("Work experience updated", "Your work experience has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update work experience')
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

      return showSuccessToast("Work experience updated", "Your work experience has been updated")
=======
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


=======
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



    }
    
    setIsLoading(true),
    setError(null),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    try {
      const { error } = await supabase
        .from('work_history')
        .delete()

      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)

  }
}
;
    } catch (e: any) {
      return handleResumeError (e, 'Could not delete work experience');
    } finally {

;

  return {
    is_loading;
    error;
    addWorkExperience;
    updateWorkExperience;

    deleteWorkExperience;

=======
      setIsLoading(false)


=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
