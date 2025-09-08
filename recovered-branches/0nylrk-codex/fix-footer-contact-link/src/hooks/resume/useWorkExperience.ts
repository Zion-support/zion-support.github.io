
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useWorkExperience() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {}
    if (!user) {'
      setError('You must be logged in to update work experience')
      return false    try {
      const { error } = await supabase
        .from('work_history')
        .insert({      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")          company_logo_url: work.company_logo_url,
          location: work.location;
        });
;
      // Check condition
if (throw error) {
  $2
}
<<<<<<< HEAD

      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience');
    } finally {
<<<<<<< HEAD


          company_logo_url: work.company_logo_url,

      return showSuccessToast("Work experience added, Your work experience has been added to your resume")
      return showSuccessToast("Work experience added, Your work experience has been added to your resume")

=======

      setIsLoading(false)

=======      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)
    }
    setIsLoading(true);
    setError(null);
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
          is_current: work.is_current,,
  description: work.description,;
          company_logo_url: work.company_logo_url,;
          location: work.location;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }),;
      if (error) throw error,;
      return showSuccessToast('Work experience added', 'Your work experience has been added to your resume');
    } catch (e: any) {;
      return handleResumeError(e, 'Could not add work experience');
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update work experience'),;
<<<<<<< HEAD

      return false;

    }
    
    setIsLoading(true),
    setError(null),
              company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
          is_current: work.is_current,
  description: work.description;      return showSuccessToast("Work experience updated", "Your work experience has been updated")          company_logo_url: work.company_logo_url,
          location: work.location;
        });'
        .eq ('id', work_id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Work experience updated", "Your work experience has been updated");
    } catch (e: any) {
      return handleResumeError (e, 'Could not update work experience');
    } finally {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    } catch (e: any) {'
      return handleResumeError (e, 'Could not update work experience');
    } finally {}
      setIsLoading(false)

=======      return showSuccessToast("Work experience updated", "Your work experience has been updated")
    } catch (e: any) {

      return handleResumeError(e, 'Could not update work experience')
    } finally {}
      setIsLoading(false)
    }
    setIsLoading(true);
    setError(null);
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
          is_current: work.is_current,,
  description: work.description,;
          company_logo_url: work.company_logo_url,;
          location: work.location;
<<<<<<< HEAD

        });'
        .eq('id', workId),;
      if (error) throw error,;"
      return showSuccessToast("Work experience updated", "Your work experience has been updated");
    } catch (e: any) {;'
=======
        });
        .eq('id', workId),;
      if (error) throw error,;
      return showSuccessToast('Work experience updated', 'Your work experience has been updated');
    } catch (e: any) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return handleResumeError(e, 'Could not update work experience');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {;
<<<<<<< HEAD
    if (!user) {;'
      setError('You must be logged in to delete work experience'),;




    try {
        .from(work_history')
        .delete()

=======
    if (!user) {;
      setError('You must be logged in to delete work experience'),;
      return false;    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
      setIsLoading (false);        .eq('id', workId),
      
      if (error) throw error,
>>>>>>> origin/cursor/delete-old-data-records-6bba
.eq('id', workId);
      if (error) throw error;
        .eq('id', workId),
      if (error) throw error,

      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)

        .eq('id', workId),

<<<<<<< HEAD

      if (error) throw error,





      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
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

=======
  }


    } catch (e: any) {
      return handleResumeError (e, 'Could not delete work experience');
    } finally {
      setIsLoading (false);
    }
  }
  return {
    is_loading;
        .eq($2);
      if (error) throw error,
      
      return showSuccessToast('Work experience deleted', 'Your work experience has been removed from your resume')
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)
    }
  },

>>>>>>> origin/cursor/delete-old-data-records-6bba

    is_loading;
    error;
    addWorkExperience;
    updateWorkExperience;

      setIsLoading(false)

;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('work_history');
        .delete();
        .eq('id', workId),;
      if (error) throw error,;
      return showSuccessToast('Work experience deleted', 'Your work experience has been removed from your resume');
    } catch (e: any) {;
      return handleResumeError(e, 'Could not delete work experience');
    } finally {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(false);
    }
  },;
  return {;
    isLoading,;
    error,;
    addWorkExperience;
    updateWorkExperience;
    deleteWorkExperience;
  }
}
;  }
}