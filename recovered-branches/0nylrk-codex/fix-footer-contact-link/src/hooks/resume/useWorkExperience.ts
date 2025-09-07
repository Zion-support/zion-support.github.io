
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { WorkExperience  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function useWorkExperience() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function useWorkExperience() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {WorkExperience} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState  } from 'react';'
import { supabase  } from '@/integrations/supabase/client';'
import { WorkExperience  } from '@/types/resume';'
import { useAuth  } from '@/hooks/useAuth';'
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useWorkExperience() {}
';
import {useState} from 'react';'
import {supabase} from '@/integrations/supabase/client';'
import {WorkExperience} from '@/types/resume';'
import {useAuth} from '@/hooks/useAuth';'
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
=======
export function useWorkExperience() {  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function useWorkExperience() {  const { user } = useAuth();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  const { user } = useAuth();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

export function useWorkExperience() {  const { user } = useAuth();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {}
    if (!user) {'
      setError('You must be logged in to update work experience')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return false
<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      return false

<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
    setIsLoading(true);
    setError(null);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { WorkExperience } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
<<<<<<< HEAD
=======
      return false;
'
import { useState } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
import { WorkExperience } from '@/types/resume',;'
import { useAuth } from '@/hooks/useAuth',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useWorkExperience() { return null; }
=======
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useWorkExperience() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {;
<<<<<<< HEAD
    if (!user) {;'
      setError('You must be logged in to update work experience'),;
      return false;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }

    setIsLoading(true),
    setError(null),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { error } = await supabase
        .from('work_history')
        .insert({
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    try {}
      const { error } = await supabase'
        .from('work_history')
        .insert({}
'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {WorkExperience} from '@/types / resume';'
import {use_auth} from '@/hooks / use_auth';'
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

          resume_id: resumeId,
          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
          location: work.location;
        }),
      
      if (error) throw error,
      

          company_logo_url: work.company_logo_url,
=======
      return false    try {
      const { error } = await supabase
        .from('work_history')
        .insert({      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")          company_logo_url: work.company_logo_url,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return false    try {
      const { error } = await supabase
        .from('work_history')
        .insert({      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")          company_logo_url: work.company_logo_url,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      return false    try {
      const { error } = await supabase
        .from('work_history')
        .insert({      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")          company_logo_url: work.company_logo_url,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          location: work.location;
        });
;
      // Check condition;
if (throw error) {}
  $2;
}
      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");
<<<<<<< HEAD
    } catch (e: any) {
      return handleResumeError (e, 'Could not add work experience');
    } finally {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    } catch (e: any) {'
      return handleResumeError (e, 'Could not add work experience');
    } finally {}
      setIsLoading(false)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
=======
=======      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } catch (e: any) {
      return handleResumeError(e, 'Could not add work experience')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD

    }

    setIsLoading(true),
    setError(null),

      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
=======
=======      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } catch (e: any) {
=======
"
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")
    } catch (e: any) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return handleResumeError(e, 'Could not add work experience')
    } finally {}
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

<<<<<<< HEAD

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
          is_current: work.is_current,,
  description: work.description,;
          company_logo_url: work.company_logo_url,;
          location: work.location;
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
      return false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    
    
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
      const { error } = await supabase
        .from('work_history')
        .update({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    try {}
      const { error } = await supabase'
        .from('work_history')
        .update({}
;
  const updateWorkExperience = async (work_id: string, work: WorkExperience): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
=======

;
  const updateWorkExperience = async (work_id: string, work: WorkExperience): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      set_error ('You must be logged in to update work experience'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD
    try {}
      const { error } = await supabase;'
        .from ('work_history');
        .update ({}
          company_name: work.company_name;
=======
              company_name: work.company_name;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              company_name: work.company_name;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
<<<<<<< HEAD
          is_current: work.is_current,
  description: work.description;      return showSuccessToast("Work experience updated", "Your work experience has been updated")          company_logo_url: work.company_logo_url,
=======
          is_current: work.is_current;
          description: work.description;

          company_name: work.company_name,
          role_title: work.role_title,
          start_date: formatDateForDB(work.start_date),
          end_date: work.is_current ? null : formatDateForDB(work.end_date),
          is_current: work.is_current,
          description: work.description,
          company_logo_url: work.company_logo_url,
=======
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              company_name: work.company_name;
          role_title: work.role_title;
          start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);
          is_current: work.is_current,
  description: work.description;      return showSuccessToast("Work experience updated", "Your work experience has been updated")          company_logo_url: work.company_logo_url,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          location: work.location;
        })'
        .eq('id', workId),
      
      if (error) throw error,
      

          company_logo_url: work.company_logo_url,
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    } catch (e: any) {'
      return handleResumeError (e, 'Could not update work experience');
    } finally {}
      setIsLoading(false)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
=======
=======      return showSuccessToast("Work experience updated", "Your work experience has been updated")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======      return showSuccessToast("Work experience updated", "Your work experience has been updated")
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } catch (e: any) {
=======
"
      return showSuccessToast("Work experience updated", "Your work experience has been updated")
    } catch (e: any) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return handleResumeError(e, 'Could not update work experience')
    } finally {}
      setIsLoading(false)
<<<<<<< HEAD
    }
  }
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete work experience')
      return false
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

<<<<<<< HEAD

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
          is_current: work.is_current,,
  description: work.description,;
          company_logo_url: work.company_logo_url,;
          location: work.location;
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
<<<<<<< HEAD
<<<<<<< HEAD
      return false;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      return false;

<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete work experience')
    } finally {
      setIsLoading(false)

<<<<<<< HEAD
  }
}
;
=======
=======



    try {}
      const { error } = await supabase'
        .from('work_history')
        .delete()
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .eq('id', workId),
=======
      return false;    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
      setIsLoading (false);        .eq('id', workId),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return false;    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
      setIsLoading (false);        .eq('id', workId),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (error) throw error,

<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
=======

      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
      return false;    try {
      const { error } = await supabase
        .from('work_history')
        .delete()
      setIsLoading (false);        .eq('id', workId),
export function useWorkExperience() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {WorkExperience} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useWorkExperience() {;


  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
</string>
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {
</boolean>
  const [error, setError] = useState<string | null>(null),;
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {;
  const [error, set_error] = useState < string | null>(null);
;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const addWorkExperience = async (resume_id: string, work: WorkExperience): Promise < boolean> => {
    // Check condition;
if ( {) {
  $2;
}
      set_error ('You must be logged in to update work experience'),
      return false;
    setIsLoading (true);
    set_error (null);
    try {
  // TODO: Implement
      const { error } = await supabase;
        .from ('work_history');
        .insert ({
          resume_id: resume_id;,
  company_name: work.company_name;
          role_title: work.role_title;,)
  start_date: formatDateForDB (work.start_date);
          end_date: work.is_current ? null : formatDateForDB (work.end_date);,
  is_current: work.is_current;
          description: work.description;,
  company_name: work && work.company_name;
          role_title: work && work.role_title;,
  start_date: formatDateForDB(work && work.start_date);
          end_date: work && work.is_current ? null : formatDateForDB(work && work.end_date);,
  is_current: work && work.is_current;
          description: work && work.description;,
  company_logo_url: work && work.company_logo_url,
          location: work && work.location;
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
          location: work.location;
        }),
pr-12325
      if (error) throw error,

      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } catch (e: any) {
=======
;
  const deleteWorkExperience = async (work_id: string): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to delete work experience'),
      return false;

      setIsLoading (false);

    }
  }
    } catch (e: any) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return handleResumeError (e, 'Could not delete work experience');
    } finally {}
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
  return {}
=======
  return {
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume")"
      // Check condition;
if (throw error) {
}"
      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");"
    } catch (e: any) {"
      return handleResumeError (e, 'Could not add work experience');
    } finally {
  // TODO: Implement
      setIsLoading(false)


      return handleResumeError(e, 'Could not add work experience')
  // TODO: Implement
    setIsLoading(true);
    setError(null);


    setIsLoading(true),;
    setError(null),;
    try {;
        .from('work_history');
        .insert({;
          resume_id: resumeId,;
          company_name: work.company_name,;
          role_title: work.role_title,;)
          start_date: formatDateForDB(work.start_date),;
          end_date: work.is_current ? null : formatDateForDB(work.end_date),;
          is_current: work.is_current,;
          description: work.description,;
          company_logo_url: work.company_logo_url,;
        }),;
      if (error) throw error,;
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume");"
    } catch (e: any) {;"
      return handleResumeError(e, 'Could not add work experience');
    } finally {;
      setIsLoading(false);
  },;
  const updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {;
  const updateWorkExperience = async (work_id: string, work: WorkExperience): Promise < boolean> => {
    // Check condition;
  // TODO: Implement
        .update ({

          company_name: work.company_name;,
  role_title: work.role_title;)
          start_date: formatDateForDB (work.start_date);,
  end_date: work.is_current ? null: formatDateForDB (work.end_date);,
        })
        .eq('id', workId);
        .eq('id', workId),

      return showSuccessToast("Work experience updated", "Your work experience has been updated")"
        });"
        .eq ('id', work_id);
      // Check condition;
      return showSuccessToast ("Work experience updated", "Your work experience has been updated");"
      return handleResumeError (e, 'Could not update work experience');
  // TODO: Implement


      return handleResumeError(e, 'Could not update work experience')
  // TODO: Implement


        .update({;
        .eq('id', workId),;
      return showSuccessToast("Work experience updated", "Your work experience has been updated");"
      return handleResumeError(e, 'Could not update work experience');
  const deleteWorkExperience = async (workId: string): Promise<boolean> => {;
  const deleteWorkExperience = async (work_id: string): Promise < boolean> => {
    // Check condition;
      set_error ('You must be logged in to delete work experience'),
      setIsLoading (false);
    } catch (e: any) {
      return handleResumeError (e, 'Could not delete work experience');
  // TODO: Implement
  return {
  // TODO: Implement
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    is_loading;
    error;
    addWorkExperience;
    updateWorkExperience;
<<<<<<< HEAD
<<<<<<< HEAD

    deleteWorkExperience
  }
}
=======
<<<<<<< HEAD

      setIsLoading(false)
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    deleteWorkExperience
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      setIsLoading(false)

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
deleteWorkExperience
  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
  }
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
<<<<<<< HEAD
  }
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
}
;  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
}
;  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  }
}
;  }
}

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

        .delete();
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");"
      return handleResumeError(e, 'Could not delete work experience');
  return {;
    isLoading,;
    error,;
    deleteWorkExperience;


pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
