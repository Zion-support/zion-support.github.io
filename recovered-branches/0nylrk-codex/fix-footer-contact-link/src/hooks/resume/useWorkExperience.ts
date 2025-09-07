<<<<<<< HEAD
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
=======
<<<<<<< HEAD
import { useState  } from 'react;
import { supabase  } from @/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume;
import { useAuth  } from @/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils;
export function useWorkExperience() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD
  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError(You must be logged in to update work experience')
>>>>>>> merged-prs-20250907-203621
export function useWorkExperience() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  
    if (!user) {
      setError($2);
      return false
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
=======
export function useWorkExperience() {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {}
    if (!user) {'
      setError('You must be logged in to update work experience')

<<<<<<< HEAD
=======

<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { WorkExperience } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useWorkExperience() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {;
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
    if (!user) {;
      setError('You must be logged in to update work experience'),;
      return false;


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

    setIsLoading(true),
    setError(null),
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      const { error } = await supabase
<<<<<<< HEAD
        .from('work_history)
        .insert($2);
          end_date: work.is_current ? null : formatDateForDB($2);
=======
        .from('work_history')
        .insert({
<<<<<<< HEAD
=======

<<<<<<< HEAD
    try {}
      const { error } = await supabase'
        .from('work_history')
        .insert({}
'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {WorkExperience} from '@/types / resume';'
import {use_auth} from '@/hooks / use_auth';'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {WorkExperience} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          resume_id: resumeId,
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
>>>>>>> origin/chore/fix-lint-and-merge
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location;
        }),
      
      if (error) throw error,
<<<<<<< HEAD
      
<<<<<<< HEAD
=======
<<<<<<< HEAD
      return false    try {
        .from(work_history')
        .insert({      return showSuccessToast("Work experience added, Your work experience has been added to your resume")          company_logo_url: work.company_logo_url,
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          company_logo_url: work.company_logo_url,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          location: work.location;
        });
      // Check condition
if (throw error) {
  $2
}
<<<<<<< HEAD
      return showSuccessToast ("Work experience added, Your work experience has been added to your resume");
=======
      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience);
    } finally {
=======
>>>>>>> origin/chore/fix-lint-and-merge

          company_logo_url: work.company_logo_url,

<<<<<<< HEAD
=======      return showSuccessToast("Work experience added, Your work experience has been added to your resume")
      return showSuccessToast("Work experience added, Your work experience has been added to your resume")
=======
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")

      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")

>>>>>>> origin/chore/fix-lint-and-merge
    } catch (e: any) {
      return handleResumeError(e, Could not add work experience')
    } finally {
      setIsLoading(false)

    } catch (e: any) {

<<<<<<< HEAD
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

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)
    }
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
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('work_history');
        .insert({;
          resume_id: resumeId,;
          company_name: work.company_name,;
          role_title: work.role_title,;
          start_date: formatDateForDB(work.start_date),;
          end_date: work.is_current ? null : formatDateForDB(work.end_date),;
>>>>>>> origin/chore/fix-lint-and-merge
          is_current: work.is_current,,
  description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location;
<<<<<<< HEAD
        }),
      if (error) throw error,
      return showSuccessToast("Work experience added, Your work experience has been added to your resume");
    } catch (e: any) {
      return handleResumeError(e, Could not add work experience');
    } finally {
      setIsLoading(false);
    }
  },
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update work experience),
=======
        }),;
      if (error) throw error,;"
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not add work experience');
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to update work experience'),;
>>>>>>> origin/chore/fix-lint-and-merge
      return false;

<<<<<<< HEAD
    }
    setIsLoading(true),
<<<<<<< HEAD
    setError(null)},
>>>>>>> merged-prs-20250907-203621
  
    if (!user) {
      setError($2);
      return false
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    
    setIsLoading($2);
    setError($2);
    try {
        .from(work_history')
        .update($2);
          end_date: work.is_current ? null : formatDateForDB($2);
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location
        })
<<<<<<< HEAD
=======
              company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
          is_current: work.is_current,
  description: work.description;      return showSuccessToast("Work experience updated, Your work experience has been updated")          company_logo_url: work.company_logo_url,
          location: work.location;
        });
        .eq ('id, work_id);
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Work experience updated, Your work experience has been updated");
    } catch (e: any) {
      return handleResumeError (e, Could not update work experience');
    } finally {

      setIsLoading(false)

=======      return showSuccessToast("Work experience updated, Your work experience has been updated")
>>>>>>> merged-prs-20250907-203621
        .eq($2);
      if (error) throw error,
      
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

=======
    
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      const { error } = await supabase
        .from('work_history')
        .update({
<<<<<<< HEAD
=======

<<<<<<< HEAD
    try {}
      const { error } = await supabase'
        .from('work_history')
        .update({}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          location: work.location;
        })'
        .eq('id', workId),
      
      if (error) throw error,

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
    } catch (e: any) {
      return handleResumeError (e, 'Could not update work experience');
    } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update work experience')
    } finally {
      setIsLoading(false)
    }
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
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('work_history');
        .update({;
          company_name: work.company_name,;
          role_title: work.role_title,;
          start_date: formatDateForDB(work.start_date),;
          end_date: work.is_current ? null : formatDateForDB(work.end_date),;
>>>>>>> origin/chore/fix-lint-and-merge
          is_current: work.is_current,,
  description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location;
<<<<<<< HEAD
        });
        .eq('id, workId),
      if (error) throw error,
      return showSuccessToast("Work experience updated, Your work experience has been updated");
    } catch (e: any) {
      return handleResumeError(e, Could not update work experience');
    } finally {
      setIsLoading(false);
    }
>>>>>>> merged-prs-20250907-203621
  },
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete work experience)},
  
    if (!user) {
      setError($2);
      return false
    }
    
    setIsLoading($2);
    setError($2);
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
    try {
        .from(work_history')
        .delete()
<<<<<<< HEAD
<<<<<<< HEAD
      return false;    try {
        .from('work_history)
        .delete()
      setIsLoading (false);        .eq(id', workId),
      
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

        .eq('id', workId),
      
      if (error) throw error,
<<<<<<< HEAD

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
<<<<<<< HEAD
=======
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
=======
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const deleteWorkExperience = async (work_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete work experience),
      return false;
      setIsLoading (false);
    }
<<<<<<< HEAD
  }

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
    } catch (e: any) {
<<<<<<< HEAD
      return handleResumeError (e, Could not delete work experience');
    } finally {
      setIsLoading (false);
    }
  }
  return {
    is_loading;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        .eq($2);
      if (error) throw error,
      
      return showSuccessToast("Work experience deleted, Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience)
    } finally {
      setIsLoading(false)
    }
  },
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
    }
  }
  return {
    isLoading;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    error;
    addWorkExperience;
    updateWorkExperience;

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
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('work_history');
        .delete();'
        .eq('id', workId),;
      if (error) throw error,;"
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not delete work experience');
    } finally {;
>>>>>>> origin/chore/fix-lint-and-merge
      setIsLoading(false);
    }
  },
  return {
    isLoading,
    error,
    addWorkExperience;
    updateWorkExperience;
    deleteWorkExperience;

<<<<<<< HEAD
  }
}

  }
}  }
}
<<<<<<< HEAD
=======
;  }
}
>>>>>>> origin/chore/fix-lint-and-merge
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
