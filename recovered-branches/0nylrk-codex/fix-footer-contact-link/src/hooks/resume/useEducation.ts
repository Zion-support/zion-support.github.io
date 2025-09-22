
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Education  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
export function useEducation() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function useEducation() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Education} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useEducation() {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState  } from 'react';'
import { supabase  } from '@/integrations/supabase/client';'
import { Education  } from '@/types/resume';'
import { useAuth  } from '@/hooks/useAuth';'
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useEducation() {}
';
import {useState} from 'react';'
import {supabase} from '@/integrations/supabase/client';'
import {Education} from '@/types/resume';'
import {useAuth} from '@/hooks/useAuth';'
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useEducation() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
=======
export function useEducation() {  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function useEducation() {  const { user } = useAuth();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const { user } = useAuth();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addEducation = async (resumeId: string, education: Education): Promise<boolean> => {}
    if (!user) {'
      setError('You must be logged in to add education')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return false
<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      return false

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Education } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;

import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useEducation() { return null; }
=======
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useEducation() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addEducation = async (resumeId: string, education: Education): Promise<boolean> => {;
if (!user) {;'
      setError('You must be logged in to add education'),;
      return false;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }

    setIsLoading(true),
    setError(null),
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { error } = await supabase
        .from('education')
        .insert({

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

    try {}
      const { error } = await supabase'
        .from('education')
        .insert({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Education added", "Your education has been added to your resume")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not add education')
} finally {
      setIsLoading(false)
return showSuccessToast("Education added", "Your education has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add education')
    } finally {
      setIsLoading(false)

    }
  }
  const updateEducation = async (eduId: string, education: Education): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update education')
      return false
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
=======
      return false    try {
      const { error } = await supabase
        .from('education')
        .insert({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return false    try {
      const { error } = await supabase
        .from('education')
        .insert({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    if (!user) {;
      setError('You must be logged in to add education'),;
      return false;

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('education')
        .insert({

          institution: education && education.institution;
          degree: education && education.degree;
          field_of_study: education && education.field_of_study;
          start_date: formatDateForDB(education && education.start_date);
          end_date: education && education.is_current ? null : formatDateForDB(education && education.end_date);
          is_current: education && education.is_current;
          description: education && education.description;
          institution_logo_url: education && education.institution_logo_url,
          location: education && education.location

        });
      if (error) throw error;
      return showSuccessToast("Education added", "Your education has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add education')
    } finally {
      setIsLoading(false)

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('education');
        .insert({;
          resume_id: resumeId,;
          institution: education.institution,;
          degree: education.degree,;
          field_of_study: education.field_of_study,;
          start_date: formatDateForDB(education.start_date),;
          end_date: education.is_current ? null : formatDateForDB(education.end_date),;
          is_current: education.is_current,;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

    setIsLoading(true),
    setError(null),
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

    setIsLoading(true),
    setError(null),

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Education } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
;
export function useEducation() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const addEducation = async (resumeId:string, education:Education):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to add education'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('education');
        .insert({;
          resume_id:resumeId,;
          institution:education.institution,;
          degree:education.degree,;
          field_of_study:education.field_of_study,;
          start_date:formatDateForDB(education.start_date),;
          end_date:education.is_current ? null :formatDateForDB(education.end_date),;
          is_current:education.is_current,;
          description:education.description,;
          institution_logo_url:education.institution_logo_url,;
          location:education.location;
        }),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Education added", "Your education has been added to your resume"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not add education'),;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const updateEducation = async (eduId:string, education:Education):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update education'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('education');
        .update({;
          institution:education.institution,;
          degree:education.degree,;
          field_of_study:education.field_of_study,;
          start_date:formatDateForDB(education.start_date),;
          end_date:education.is_current ? null :formatDateForDB(education.end_date),;
          is_current:education.is_current,;
          description:education.description,;
          institution_logo_url:education.institution_logo_url,;
          location:education.location;
        });
        .eq('id', eduId),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Education updated", "Your education has been updated"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not update education'),;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const deleteEducation = async (eduId:string):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete education'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('education');
        .delete();
        .eq('id', eduId),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Education deleted", "Your education has been removed from your resume"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not delete education'),;
    } finally {;
      setIsLoading(false),;
    }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { error } = await supabase
        .from('education')
        .update({

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          institution: education && education.institution;
          degree: education && education.degree;
          field_of_study: education && education.field_of_study;
          start_date: formatDateForDB(education && education.start_date);
          end_date: education && education.is_current ? null : formatDateForDB(education && education.end_date);
          is_current: education && education.is_current;
          description: education && education.description;
          institution_logo_url: education && education.institution_logo_url,
location: education && education.location;
          institution: education.institution,
          degree: education.degree,
          field_of_study: education.field_of_study,
          start_date: formatDateForDB(education.start_date),
          end_date: education.is_current ? null : formatDateForDB(education.end_date),
          is_current: education.is_current,
          description: education.description,
          institution_logo_url: education.institution_logo_url,
location: education.location;
        })'
        .eq('id', eduId),

      if (error) throw error,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Education updated", "Your education has been updated")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not update education')
    } finally {}
      setIsLoading(false)
}
  }
  const deleteEducation = async (eduId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete education')
      return false
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('education');
        .update({;
          institution: education.institution,;
          degree: education.degree,;
          field_of_study: education.field_of_study,;
          start_date: formatDateForDB(education.start_date),;
          end_date: education.is_current ? null : formatDateForDB(education.end_date),;
          is_current: education.is_current,;
          description: education.description,;
          institution_logo_url: education.institution_logo_url,;
          location: education.location;
        });'
        .eq('id', eduId),;
      if (error) throw error,;"
      return showSuccessToast("Education updated", "Your education has been updated");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not update education');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteEducation = async (eduId: string): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to delete education'),;
      return false;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }

    setIsLoading(true),
    setError(null),

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { error } = await supabase
        .from('education')
        .delete()

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    try {}
      const { error } = await supabase'
        .from('education')
        .delete()
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .eq('id', eduId),

      if (error) throw error,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Education deleted", "Your education has been removed from your resume")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not delete education')
    } finally {}
      setIsLoading(false)
<<<<<<< HEAD
import {useState} from 'react';
    } catch (e: any) {
      return handleResumeError(e, 'Could not update education')
    } finally {
      setIsLoading(false)

;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('education');
        .update({;
          institution: education.institution,;
          degree: education.degree,;
          field_of_study: education.field_of_study,;
          start_date: formatDateForDB(education.start_date),;
          end_date: education.is_current ? null : formatDateForDB(education.end_date),;
          is_current: education.is_current,;
          description: education.description,;
          institution_logo_url: education.institution_logo_url,;
          location: education.location;
        });
        .eq('id', eduId),;
      if (error) throw error,;
      return showSuccessToast("Education updated", "Your education has been updated");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not update education');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteEducation = async (eduId: string): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete education'),;
      return false;

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('education')
.delete()import {useState} from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .delete()

        .eq('id', eduId),

      if (error) throw error,

      return showSuccessToast("Education deleted", "Your education has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete education')
    } finally {
      setIsLoading(false)

import {useState} from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {supabase} from '@/integrations / supabase / client';
import {Education} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
=======
'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {Education} from '@/types / resume';'
import {use_auth} from '@/hooks / use_auth';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * use_education - Function description;
 */
function use_education() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        .from ('education');
        .insert ({}
=======

=======
export function useEducation() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
}
    setIsLoading (true);
    set_error (null);
;

    try {
  // TODO: Implement
      const { error } = await supabase;
        .from ('education');
        .insert ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          resume_id: resume_id;
          institution: education.institution;
          degree: education.degree;
          field_of_study: education.field_of_study;
          start_date: formatDateForDB (education.start_date);
          end_date: education.is_current ? null : formatDateForDB (education.end_date);
          is_current: education.is_current;
          description: education.description;
          institution_logo_url: education.institution_logo_url,
          location: education.location;
        });
;
// Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Education added", "Your education has been added to your resume");
    } catch (e: any) {'
      return handleResumeError (e, 'Could not add education');
    } finally {}
if (throw error) {
      return showSuccessToast ("Education added", "Your education has been added to your resume");"
    } catch (e: any) {"
      return handleResumeError (e, 'Could not add education');
    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading (false);
  const update_education = async (edu_id: string, education: Education): Promise < boolean> => {
    // Check condition;
      set_error ('You must be logged in to update education'),
    setIsLoading (true);
    set_error (null);

    }
  }
;
const update_education = async (edu_id: string, education: Education): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to update education'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
try {}
      const { error } = await supabase;'
        .from ('education');
        .update ({}
    try {
  // TODO: Implement
        .update ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          institution: education.institution;
          degree: education.degree;
          field_of_study: education.field_of_study;
          start_date: formatDateForDB (education.start_date);
          end_date: education.is_current ? null : formatDateForDB (education.end_date);
          is_current: education.is_current;
          description: education.description;
          institution_logo_url: education.institution_logo_url,
          location: education.location;
<<<<<<< HEAD
        });'
        .eq ('id', edu_id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Education updated", "Your education has been updated");
    } catch (e: any) {'
      return handleResumeError (e, 'Could not update education');
    } finally {}
        .eq ('id', edu_id);
      // Check condition;
      return showSuccessToast ("Education updated", "Your education has been updated");"
      return handleResumeError (e, 'Could not update education');
} finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading (false);

    }
  }
;
const delete_education = async (edu_id: string): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to delete education'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
try {}
      const { error } = await supabase;'
        .from ('education');
        .delete ();'
        .eq ('id', edu_id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Education deleted", "Your education has been removed from your resume");
    } catch (e: any) {'
      return handleResumeError (e, 'Could not delete education');
    } finally {}
    try {
  // TODO: Implement
        .delete ();
      // Check condition;
      return showSuccessToast ("Education deleted", "Your education has been removed from your resume");"
      return handleResumeError (e, 'Could not delete education');
} finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading (false);

    }
  }
;
return {}
    is_loading;
    error;
    add_education;
    update_education;
    delete_education;
}
<<<<<<< HEAD
<<<<<<< HEAD
}
  },;
;
  return {;
    isLoading,;
    error,;
    addEducation,;
    updateEducation,;
    deleteEducation;
  },; setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('education') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not add education') 
}finally {
  setIsLoading (false) 
}
};
const updateEducation = async (eduId: string, education: Education) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to update education');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('education') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not update education') 
}finally {
  setIsLoading (false) 
}
};
const deleteEducation = async (eduId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to delete education');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('education') .delete () .eq ('id', eduId);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not delete education') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
addEducation;
updateEducation;
deleteEducation 
}
}

  }
}
;
  }
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
