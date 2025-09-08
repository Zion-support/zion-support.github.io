<<<<<<< HEAD


=======

import { useState  } from 'react;
import { supabase  } from @/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume;
import { useAuth  } from @/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils;
export function useWorkExperience() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError(You must be logged in to update work experience')
export function useWorkExperience() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  
    if (!user) {
      setError($2);
      return false
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';


>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {WorkExperience} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() {;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {}
    if (!user) {'
      setError('You must be logged in to update work experience')


<<<<<<< HEAD


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
=======
    try {
      const { error } = await supabase
        .from('work_history')
        .insert($2);
          end_date: work.is_current ? null : formatDateForDB($2);
    try {}
      const { error } = await supabase'
        .from('work_history')
        .insert({}
'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {WorkExperience} from '@/types / resume';'
import {use_auth} from '@/hooks / use_auth';'
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * useWorkExperience - Function description;
 */
function useWorkExperience() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const addWorkExperience = async (resume_id: string, work: WorkExperience): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to update work experience'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {}
      const { error } = await supabase;'
        .from ('work_history');
        .insert ({}
          resume_id: resume_id;

          company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
          is_current: work.is_current;
          description: work.description;

<<<<<<< HEAD

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


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
          resume_id: resumeId,
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location
        }),
      
      if (error) throw error,
<<<<<<< HEAD


          company_logo_url: work.company_logo_url,

=======
      
      return false    try {
      const { error } = await supabase
        .from('work_history')
        .insert({      return showSuccessToast('Work experience added', 'Your work experience has been added to your resume')          company_logo_url: work.company_logo_url,
>>>>>>> origin/cursor/delete-old-data-records-6bba
          location: work.location;
        });
;
      // Check condition
if (throw error) {
  $2
}
<<<<<<< HEAD

      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");

=======
      return showSuccessToast ('Work experience added', 'Your work experience has been added to your resume');
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience');
    } finally {
<<<<<<< HEAD


          company_logo_url: work.company_logo_url,

      return showSuccessToast("Work experience added, Your work experience has been added to your resume")
      return showSuccessToast("Work experience added, Your work experience has been added to your resume")

=======

      setIsLoading(false)

      return showSuccessToast('Work experience added', 'Your work experience has been added to your resume')
      return handleResumeError(e, 'Could not add work experience')
    } finally {}
      setIsLoading(false)
    }
    setIsLoading(true),
    setError(null),
    try {
      const { error } = await supabase;
        .from('work_history);
        .insert({
          resume_id: resumeId,
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)
    }
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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




=======
      return false;

    }
    
    setIsLoading(true),
    setError(null),
  },
  
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    
    setIsLoading($2);
    setError($2);
    try {
      const { error } = await supabase
        .from('work_history')
        .update($2);
          end_date: work.is_current ? null : formatDateForDB($2);
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location
        })
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
          is_current: work.is_current,
  description: work.description;      return showSuccessToast('Work experience updated', 'Your work experience has been updated')          company_logo_url: work.company_logo_url,
          location: work.location;
        });
        .eq ('id', work_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ('Work experience updated', 'Your work experience has been updated');
    } catch (e: any) {
      return handleResumeError (e, 'Could not update work experience');
    } finally {

      setIsLoading(false)

<<<<<<< HEAD
=======
        .eq($2);
      if (error) throw error,
      
      return showSuccessToast('Work experience updated', 'Your work experience has been updated')
    try {
        .from(work_history');
        .update({
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
    setError(null),
>>>>>>> origin/cursor/delete-old-data-records-6bba


    try {
      const { error } = await supabase
        .from('work_history')
        .update({

<<<<<<< HEAD

=======
    try {}
      const { error } = await supabase'
        .from('work_history')
        .update({}
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
  const updateWorkExperience = async (work_id: string, work: WorkExperience): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'

      set_error ('You must be logged in to update work experience'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;

          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);

<<<<<<< HEAD

          company_name: work && work.company_name;
          role_title: work && work.role_title;
          start_date: formatDateForDB(work && work.start_date);
          end_date: work && work.is_current ? null : formatDateForDB(work && work.end_date);
          is_current: work && work.is_current;
          description: work && work.description;
          company_logo_url: work && work.company_logo_url,
          location: work && work.location



=======

          location: work.location;
        })'
        .eq('id', workId),
      
      if (error) throw error,


>>>>>>> origin/cursor/delete-old-data-records-6bba
          company_logo_url: work.company_logo_url,

          location: work.location;
        });'
        .eq ('id', work_id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Work experience updated", "Your work experience has been updated");

<<<<<<< HEAD
    } catch (e: any) {
      return handleResumeError (e, 'Could not update work experience');
    } finally {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    } catch (e: any) {'
      return handleResumeError (e, 'Could not update work experience');
    } finally {}
      setIsLoading(false)

      return showSuccessToast("Work experience updated", "Your work experience has been updated")

      return showSuccessToast("Work experience updated", "Your work experience has been updated")

    } catch (e: any) {

      return handleResumeError(e, 'Could not update work experience')
    } finally {}
      setIsLoading(false)


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  },
  
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
    }
    
    setIsLoading($2);
    setError($2);
    }
    
    setIsLoading(true),
    setError(null),
    
    
    try {
        .from(work_history')
        .delete()

      return false;    try {
        .from('work_history)
        .delete()
      setIsLoading (false);        .eq(id', workId),
      


        .eq('id', workId),
      
      if (error) throw error,
      
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)
>>>>>>> origin/cursor/delete-old-data-records-6bba

        .eq('id', workId),
      
      if (error) throw error,
<<<<<<< HEAD
      

=======


      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)

        .eq('id', workId),

    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
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






      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
;

=======
      if (error) throw error,

      return showSuccessToast("Work experience deleted, Your work experience has been removed from your resume");

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const deleteWorkExperience = async (work_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete work experience'),
      return false;
      setIsLoading (false);
    }
<<<<<<< HEAD

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

    } catch (e: any) {


      return handleResumeError (e, 'Could not delete work experience');
    } finally {}
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
<<<<<<< HEAD


=======
    setIsLoading(true),
    setError(null),
    try {
        .from(work_history');
        .delete();
        .eq('id, workId),
      if (error) throw error,
      return showSuccessToast("Work experience deleted, Your work experience has been removed from your resume");
    } catch (e: any) {
      return handleResumeError(e, Could not delete work experience');
    } finally {



>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


;  }
}


  }
}



=======
    deleteWorkExperience
  }
}
  }
}
  }
}
;  }
}
;
  }
}
  }
}

  }
}  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
