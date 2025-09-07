<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState  } from 'react;
import { supabase  } from @/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume;
import { useAuth  } from @/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils;
>>>>>>> origin/resolved-merge-conflicts
export function useWorkExperience() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience')
export function useWorkExperience() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
export function useWorkExperience() {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {WorkExperience} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

>>>>>>> origin/chore/fix-lint-and-merge
    }

    setIsLoading(true),
    setError(null),

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    }
    
<<<<<<< HEAD
    setIsLoading($2);
    setError($2);
=======
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    try {
      const { error } = await supabase
        .from('work_history')
        .insert($2);
          end_date: work.is_current ? null : formatDateForDB($2);
<<<<<<< HEAD
=======
=======
        .from('work_history')
        .insert({
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {}
      const { error } = await supabase'
        .from('work_history')
        .insert({}
'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {WorkExperience} from '@/types / resume';'
import {use_auth} from '@/hooks / use_auth';'
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {WorkExperience} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          resume_id: resumeId,
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location
        }),
      
      if (error) throw error,
      
      return false    try {
      const { error } = await supabase
        .from('work_history')
        .insert({      return showSuccessToast('Work experience added', 'Your work experience has been added to your resume')          company_logo_url: work.company_logo_url,
          location: work.location;
        });
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ('Work experience added', 'Your work experience has been added to your resume');
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience');
    } finally {

      setIsLoading(false)

<<<<<<< HEAD
      return showSuccessToast('Work experience added', 'Your work experience has been added to your resume')
=======
    } catch (e: any) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return handleResumeError(e, 'Could not add work experience')
    } finally {}
      setIsLoading(false)
    }
<<<<<<< HEAD
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
=======
  }
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience')
      return false
    }
    setIsLoading(true);
    setError(null);

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
>>>>>>> origin/resolved-merge-conflicts
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  },
=======
  }
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience')
      return false
    }
    setIsLoading(true);
    setError(null);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
      return false;

    }
    
    setIsLoading(true),
    setError(null),
  },
  
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
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

        .eq($2);
      if (error) throw error,
      
<<<<<<< HEAD
      return showSuccessToast('Work experience updated', 'Your work experience has been updated')
=======
      return showSuccessToast("Work experience updated, Your work experience has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update work experience)
    } finally {
      setIsLoading(false)
    }
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
    try {
        .from(work_history');
        .update({
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
=======
    setError(null),

<<<<<<< HEAD
=======
=======
    
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {
      const { error } = await supabase
        .from('work_history')
        .update({
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {}
      const { error } = await supabase'
        .from('work_history')
        .update({}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          location: work.location;
        })'
        .eq('id', workId),
      
      if (error) throw error,

<<<<<<< HEAD
=======
=======
          company_name: work && work.company_name;
          role_title: work && work.role_title;
          start_date: formatDateForDB(work && work.start_date);
          end_date: work && work.is_current ? null : formatDateForDB(work && work.end_date);
          is_current: work && work.is_current;
          description: work && work.description;
          company_logo_url: work && work.company_logo_url,
          location: work && work.location

<<<<<<< HEAD
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
=======
        })
        .eq('id', workId);
      if (error) throw error;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
    } catch (e: any) {
      return handleResumeError (e, 'Could not update work experience');
    } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
>>>>>>> origin/resolved-merge-conflicts
    } catch (e: any) {
      return handleResumeError(e, 'Could not update work experience')
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  }
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete work experience')
      return false
    }
    setIsLoading(true);
    setError(null);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
        });
        .eq('id', workId),;
      if (error) throw error,;
      return showSuccessToast('Work experience updated', 'Your work experience has been updated');
    } catch (e: any) {;
      return handleResumeError(e, 'Could not update work experience');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {;
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
<<<<<<< HEAD
=======
=======
        });'
        .eq('id', workId),;
      if (error) throw error,;"
      return showSuccessToast("Work experience updated", "Your work experience has been updated");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not update work experience');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to delete work experience'),;

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    
    setIsLoading(true),
    setError(null),
    
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {
        .from(work_history')
        .delete()
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return false;    try {
        .from('work_history)
        .delete()
      setIsLoading (false);        .eq(id', workId),
      
=======
<<<<<<< HEAD
=======
=======
        .eq('id', workId);
      if (error) throw error;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('id', workId),
      
      if (error) throw error,
      
<<<<<<< HEAD
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        .eq('id', workId),
      
      if (error) throw error,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)

        .eq('id', workId),

>>>>>>> origin/resolved-merge-conflicts
    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
<<<<<<< HEAD
      return false;    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
      setIsLoading (false);        .eq('id', workId),
      
      if (error) throw error,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

>>>>>>> origin/chore/fix-lint-and-merge
      if (error) throw error,

<<<<<<< HEAD
      return showSuccessToast("Work experience deleted, Your work experience has been removed from your resume");
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> origin/resolved-merge-conflicts
      

<<<<<<< HEAD
      return showSuccessToast('Work experience deleted', 'Your work experience has been removed from your resume');
=======

      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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

<<<<<<< HEAD
=======
      return handleResumeError (e, 'Could not delete work experience');
    } finally {}
      setIsLoading (false);
    }
  }
>>>>>>> origin/chore/fix-lint-and-merge

    is_loading;
    error;
    addWorkExperience;
    updateWorkExperience;
<<<<<<< HEAD
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
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
    }
  }
>>>>>>> origin/resolved-merge-conflicts
  return {
    isLoading;
    error;
    addWorkExperience;
    updateWorkExperience;

<<<<<<< HEAD
=======
<<<<<<< HEAD
    deleteWorkExperience
  }
}
  }
}
;
=======
<<<<<<< HEAD
      setIsLoading(false)


    deleteWorkExperience
  }
}
=======
    deleteWorkExperience;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
    deleteWorkExperience
  }
}
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  }
}
  }
}
;  }
}
<<<<<<< HEAD
;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  }
}
  }
}
;
  }
}
;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
