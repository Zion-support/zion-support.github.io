
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume, ResumeBasicInfo  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function useResumeActions() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function useResumeActions() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume, ResumeBasicInfo} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useResumeActions() {;
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
import { Resume, ResumeBasicInfo  } from '@/types/resume';'
import { useAuth  } from '@/hooks/useAuth';'
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useResumeActions() {}
';
import {useState} from 'react';'
import {supabase} from '@/integrations/supabase/client';'
import {Resume, ResumeBasicInfo} from '@/types/resume';'
import {useAuth} from '@/hooks/useAuth';'
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useResumeActions() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
=======
export function useResumeActions() {  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function useResumeActions() {  const { user } = useAuth();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  const { user } = useAuth();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {}
    if (!user) {'
      setError('You must be logged in to create a resume')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return null
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
      return null



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume, ResumeBasicInfo } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
<<<<<<< HEAD
=======
      return null;
'
import { useState } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
import { Resume, ResumeBasicInfo } from '@/types/resume',;'
import { useAuth } from '@/hooks/useAuth',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useResumeActions() { return null; }
=======
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useResumeActions() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {;
<<<<<<< HEAD
    if (!user) {;'
      setError('You must be logged in to create a resume'),;
      return null;
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
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({
<<<<<<< HEAD

      return data.id
    } catch (e: any) {
      return handleResumeError(e, 'Could not create resume') ? null : null
    } finally {
      setIsLoading(false)
    }
  }
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a resume')
      return false
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    try {}
      const { data, error } = await supabase'
        .from('talent_resumes')
        .insert({}
          user_id: user && user.id;
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
<<<<<<< HEAD
          summary: basicInfo && basicInfo.summary

<<<<<<< HEAD
=======
          user_id: user.id;
          title: basicInfo.title;
          headline: basicInfo.headline
          summary: basicInfo.summary
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        })
=======
      return null    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({        })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return null    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({        })
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          summary: basicInfo && basicInfo.summary;
        })'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    if (!user) {;
      setError('You must be logged in to create a resume'),;
      return null;



    }
    
    setIsLoading(true),
    setError(null),
    
    
    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({

          user_id: user && user.id;
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

        })
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .select('id')
        .single();
      if (error) throw error;
      showSuccessToast("Resume created", "Your resume has been created successfully");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;
        .from('talent_resumes');
        .insert({;
          user_id: user.id,;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });
        .select('id');
        .single(),;
      if (error) throw error,;
      showSuccessToast("Resume created", "Your resume has been created successfully"),;
      return data.id;
    } catch (e: any) {;
      return handleResumeError(e, 'Could not create resume') ? null : null;
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a resume'),;
      return false;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    
    setIsLoading(true),
    setError(null),
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    try {
      const { error } = await supabase
        .from('talent_resumes')
        .update({
<<<<<<< HEAD

=======
          title: basicInfo.title;
          headline: basicInfo.headline
          summary: basicInfo.summary
        })
        .eq('id', resumeId)
        .eq('user_id', user.id);
      if (error) throw error;
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


        })'
        .eq('id', resumeId)'
        .eq('user_id', user && user.id);
      

<<<<<<< HEAD
<<<<<<< HEAD
=======      if (error) throw error,
=======
      if (error) throw error,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Resume, ResumeBasicInfo} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
=======


      if (error) throw error,
      
'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {Resume, ResumeBasicInfo} from '@/types / resume';'
import {use_auth} from '@/hooks / use_auth';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * useResumeActions - Function description;
 */
function useResumeActions() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const create_resume = async (basic_info: ResumeBasicInfo): Promise < string | null> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to create a resume'),
      return null;
    }
    setIsLoading (true);
    set_error (null);
;
    try {}
      const { data, error } = await supabase;'
        .from ('talent_resumes');
        .insert ({}
          user_id: user.id;
          title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;
        });'
        .select ('id');
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}"
      showSuccessToast ("Resume created", "Your resume has been created successfully");
;
      return data.id;
    } catch (e: any) {'
      return handleResumeError (e, 'Could not create resume') ? null : null;
    } finally {}
      setIsLoading (false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }    try {
=======
  }


          user_id: user.id,
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary
        })
        .select('id')
        .single(),
      
      if (error) throw error,
      
      showSuccessToast("Resume created", "Your resume has been created successfully"),
      

      return data.id
    } catch (e: any) {
      return handleResumeError(e, 'Could not create resume') ? null : null
    } finally {
      setIsLoading(false)


;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;
        .from('talent_resumes');
        .insert({;
          user_id: user.id,;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });
        .select('id');
        .single(),;
      if (error) throw error,;
      showSuccessToast("Resume created", "Your resume has been created successfully"),;
      return data.id;
    } catch (e: any) {;
      return handleResumeError(e, 'Could not create resume') ? null : null;
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a resume'),;
      return false;



    }
    
    setIsLoading(true),
    setError(null),
    
    
    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const { error } = await supabase
        .from('talent_resumes')
        .update({

      if (error) throw error;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }

          user_id: user.id,
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary;
        })'
        .select('id')
        .single(),
      
      if (error) throw error,
      "
      showSuccessToast("Resume created", "Your resume has been created successfully"),
      

      return data.id;
    } catch (e: any) {'
      return handleResumeError(e, 'Could not create resume') ? null : null;
    } finally {}
      setIsLoading(false)


;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;'
        .from('talent_resumes');
        .insert({;
          user_id: user.id,;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });'
        .select('id');
        .single(),;
      if (error) throw error,;"
      showSuccessToast("Resume created", "Your resume has been created successfully"),;
      return data.id;
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not create resume') ? null : null;
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to update a resume'),;
      return false;



    }
    
    setIsLoading(true),
    setError(null),
    

    try {}
      const { error } = await supabase'
        .from('talent_resumes')
        .update({}
      if (error) throw error;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Resume updated", "Your resume information has been updated")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not update resume')
    } finally {}
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    }

    setIsLoading(true),
    setError(null),

    } catch (e: any) {
      return handleResumeError(e, 'Could not update resume')
    } finally {
      setIsLoading(false)
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary

        })
        .eq('id', resumeId)
        .eq('user_id', user && user.id);
      

      if (error) throw error,
      

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Resume updated", "Your resume information has been updated")

;
  const updateBasicInfo = async (resume_id: string, basic_info: ResumeBasicInfo): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
=======

      return showSuccessToast("Resume updated", "Your resume information has been updated")
;
  const updateBasicInfo = async (resume_id: string, basic_info: ResumeBasicInfo): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      set_error ('You must be logged in to update a resume'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
<<<<<<< HEAD
    try {}
      const { error } = await supabase;'
        .from ('talent_resumes');
        .update ({}
          title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;
        });'
        .eq ('id', resume_id);'
        .eq ('user_id', user.id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Resume updated", "Your resume information has been updated");

    } catch (e: any) {'
      return handleResumeError (e, 'Could not update resume');
    } finally {}
      setIsLoading(false)


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  }
  const setActiveResume = async (resumeId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to set active resume')
      return false
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    try {
      const { error } = await supabase;
        .from ('talent_resumes');
        .update ({
          title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;
        });
        .eq ('id', resume_id);
        .eq ('user_id', user.id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Resume updated", "Your resume information has been updated");
    } catch (e: any) {
      return handleResumeError (e, 'Could not update resume');
    } finally {

      setIsLoading(false)


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
    setIsLoading(true);
    setError(null);


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
=======
      return showSuccessToast("Resume updated", "Your resume information has been updated");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return showSuccessToast("Resume updated", "Your resume information has been updated");
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('talent_resumes');
        .update({;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });'
        .eq('id', resumeId);'
        .eq('user_id', user.id),;
      if (error) throw error,;"
      return showSuccessToast("Resume updated", "Your resume information has been updated");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not update resume');
    } finally {;
      setIsLoading(false);
    }
  },;
  const setActiveResume = async (resumeId: string): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to set active resume'),;
      return false;
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
    }
    
    setIsLoading(true),
    setError(null),
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
    try {
=======
        try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        try {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      // First, set all user's resumes to inactive
      const { error: resetError } = await supabase
        .from('talent_resumes')
        .update({ is_active: false })        .eq('user_id', user.id),
=======



    try {'
      // First, set all user's resumes to inactive;
      const { error: resetError } = await supabase'
        .from('talent_resumes')
        .update({ is_active: false })

      if (resetError) throw resetError;

'
        .eq('user_id', user.id),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    
    
    try {
      // First, set all user's resumes to inactive
      const { error: resetError } = await supabase
        .from('talent_resumes')
        .update({ is_active: false })

        .eq('user_id', user && user.id);
      

      if (resetError) throw resetError;

        .eq('user_id', user.id),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
      if (resetError) throw resetError,
      

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      // Then, set the selected resume as active
      const { error } = await supabase
        .from('talent_resumes')
        .update({ is_active: true })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .eq('id', resumeId)
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


      // Then, set the selected resume as active;
      const { error } = await supabase'
        .from('talent_resumes')
        .update({ is_active: true })'
        .eq('id', resumeId)
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .eq('user_id', user && user.id);
      

      if (error) throw error;"
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")

'
=======
        .eq('id', resumeId)

        .eq('user_id', user && user.id);
      

      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .eq('user_id', user.id),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not set active resume')
    } finally {}
      setIsLoading(false)

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        .eq('user_id', user && user.id);
      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
        .eq('id', resumeId);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .eq('id', resumeId);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
    } catch (e: any) {
      return handleResumeError(e, 'Could not set active resume')
    } finally {
      setIsLoading(false)

        .eq('user_id', user && user.id);
      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const setActiveResume = async (resume_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
=======


;
  const setActiveResume = async (resume_id: string): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      set_error ('You must be logged in to set active resume'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {'
      // First, set all user's resumes to inactive;
      const { error: reset_error } = await supabase;'
        .from ('talent_resumes');
        .update ({ is_active: false });'
        .eq ('user_id', user.id);
;
      // Check condition;
if (throw reset_error) {}
  $2;
}
      // Then, set the selected resume as active;
      const { error } = await supabase;'
        .from ('talent_resumes');
        .update ({ is_active: true });'
        .eq ('id', resume_id);'
        .eq ('user_id', user.id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Active resume set", "Your selected resume is now marked as active");
    } catch (e: any) {'
      return handleResumeError (e, 'Could not set active resume');
    } finally {}
      setIsLoading (false);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  return {}
=======
;

  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    is_loading;
    error;
    create_resume;
    updateBasicInfo;
    setActiveResume}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
  },;
  return {;
    isLoading,;
    error,;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    createResume;
    updateBasicInfo;

    setActiveResume}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

}
;

<<<<<<< HEAD


    }
  }
  return {}
=======
    }
  }
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    isLoading;
    error;
;
    setIsLoading(true),;
    setError(null),;
<<<<<<< HEAD
    try {;'
      // First, set all user's resumes to inactive;
      const { error: resetError } = await supabase;'
        .from('talent_resumes');
        .update({ is_active: false });'
        .eq('user_id', user.id),;
      if (resetError) throw resetError,;
      // Then, set the selected resume as active;
      const { error } = await supabase;'
        .from('talent_resumes');
        .update({ is_active: true });'
        .eq('id', resumeId);'
        .eq('user_id', user.id),;
      if (error) throw error,;"
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active");
    } catch (e: any) {;'
=======
    try {;
      // First, set all user's resumes to inactive;
      const { error: resetError } = await supabase;
        .from('talent_resumes');
        .update({ is_active: false });
        .eq('user_id', user.id),;
      if (resetError) throw resetError,;
      // Then, set the selected resume as active;
      const { error } = await supabase;
        .from('talent_resumes');
        .update({ is_active: true });
        .eq('id', resumeId);
        .eq('user_id', user.id),;
      if (error) throw error,;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active");
    } catch (e: any) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return handleResumeError(e, 'Could not set active resume');
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD


  },;
  return {;
=======
;  return {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;  return {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  },;
  return {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    isLoading,;
    error,;
    createResume;
    updateBasicInfo;

    setActiveResume}
<<<<<<< HEAD
}
;


import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume, ResumeBasicInfo } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
;
export function useResumeActions() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const createResume = async (basicInfo:ResumeBasicInfo):Promise<string | null> => {;
    if (!user) {;
      setError('You must be logged in to create a resume'),;
      return null;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase;
        .from('talent_resumes');
        .insert({;
          user_id:user.id,;
          title:basicInfo.title,;
          headline:basicInfo.headline,;
          summary:basicInfo.summary;
        });
        .select('id');
        .single(),;
      ;
      if (error) throw error,;
      ;
      showSuccessToast("Resume created", "Your resume has been created successfully"),;
      ;
      return data.id,;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not create resume') ? null :null,;
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  const updateBasicInfo = async (resumeId:string, basicInfo:ResumeBasicInfo):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a resume'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('talent_resumes');
        .update({;
          title:basicInfo.title,;
          headline:basicInfo.headline,;
          summary:basicInfo.summary;
        });
        .eq('id', resumeId);
        .eq('user_id', user.id),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Resume updated", "Your resume information has been updated"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not update resume'),;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const setActiveResume = async (resumeId:string):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to set active resume'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      // First, set all user's resumes to inactive;
      const { error:resetError } = await supabase;
        .from('talent_resumes');
        .update({ is_active:false });
        .eq('user_id', user.id),;
      ;
      if (resetError) throw resetError,;
      ;
      // Then, set the selected resume as active;
      const { error } = await supabase;
        .from('talent_resumes');
        .update({ is_active:true });
        .eq('id', resumeId);
        .eq('user_id', user.id),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not set active resume'),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return {;
    isLoading,;
    error,;
    createResume,;
    updateBasicInfo,;
    setActiveResume},; setIsLoading (true);
setError (null);
try {
  const {
  data, error 
}= await supabase .from ('talent resumes') .insert ({
  user id: user.id, title: basicInfo.title, headline: basicInfo.headline, summary: basicInfo.summary 
}) .select ('id') .single ();
if (error) throw error;
setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('talent resumes') .update ({
  title: basicInfo.title, headline: basicInfo.headline, summary: basicInfo.summary 
}) .eq ('id', resumeId) .eq ('user id', user.id);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not update resume') 
}finally {
  setIsLoading (false) 
}
};
const setActiveResume = async (resumeId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to set active resume');
return false;
}setError (null);
try {
  //First, set all user's resumes to inactive const {
  error: resetError 
}= await supabase .from ('talent resumes') if (resetError) throw resetError;
// Then, set the selected resume as active const {
  error 
}= await supabase .from ('talent resumes') .update ({
  is active: true 
}) .eq ('id', resumeId) .eq ('user id', user.id);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not set active resume') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
createResume;
updateBasicInfo;
setActiveResume 
}
}
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
