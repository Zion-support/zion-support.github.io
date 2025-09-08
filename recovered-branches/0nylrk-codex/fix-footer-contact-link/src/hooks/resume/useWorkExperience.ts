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

      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience');
    } finally {
      setIsLoading(false)



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
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
  const deleteWorkExperience = async (work_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete work experience'),
      return false;

