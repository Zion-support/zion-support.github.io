
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
import { Certification  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
export function useCertifications() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function useCertifications() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Certification} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useCertifications() {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState  } from 'react';'
import { supabase  } from '@/integrations/supabase/client';'
import { Certification  } from '@/types/resume';'
import { useAuth  } from '@/hooks/useAuth';'
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useCertifications() {}
';
import {useState} from 'react';'
import {supabase} from '@/integrations/supabase/client';'
import {Certification} from '@/types/resume';'
import {useAuth} from '@/hooks/useAuth';'
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useCertifications() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
=======
export function useCertifications() {  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function useCertifications() {  const { user } = useAuth();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const { user } = useAuth();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {}
    if (!user) {'
      setError('You must be logged in to add certifications')
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
import { Certification } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;

import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useCertifications() { return null; }
=======
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useCertifications() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {;
if (!user) {;'
      setError('You must be logged in to add certifications'),;
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
        .from('certifications')
        .insert({

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

    try {}
      const { error } = await supabase'
        .from('certifications')
        .insert({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Certification added", "Your certification has been added to your resume")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not add certification')
} finally {
      setIsLoading(false)
return showSuccessToast("Certification added", "Your certification has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add certification')
    } finally {
      setIsLoading(false)

    }
  }
  const updateCertification = async (certId: string, cert: Certification): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update certifications')
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
        .from('certifications')
        .insert({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return false    try {
      const { error } = await supabase
        .from('certifications')
        .insert({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    if (!user) {;
      setError('You must be logged in to add certifications'),;
      return false;

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('certifications')
        .insert({

          name: cert && cert.name;
          issuing_organization: cert && cert.issuing_organization;
          issue_date: cert && cert.issue_date ? formatDateForDB(cert && cert.issue_date) : null;
          expiration_date: cert && cert.expiration_date ? formatDateForDB(cert && cert.expiration_date) : null;
          credential_id: cert && cert.credential_id,
          credential_url: cert && cert.credential_url

        });
      if (error) throw error;
      return showSuccessToast("Certification added", "Your certification has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add certification')
    } finally {
      setIsLoading(false)

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('certifications');
        .insert({;
          resume_id: resumeId,;
          name: cert.name,;
          issuing_organization: cert.issuing_organization,;
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,;
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,;
          credential_id: cert.credential_id,;
          credential_url: cert.credential_url;
        }),;
      if (error) throw error,;"
      return showSuccessToast("Certification added", "Your certification has been added to your resume");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not add certification');
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateCertification = async (certId: string, cert: Certification): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to update certifications'),;
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
import { Certification } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
;
export function useCertifications() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const addCertification = async (resumeId:string, cert:Certification):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to add certifications'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('certifications');
        .insert({;
          resume_id:resumeId,;
          name:cert.name,;
          issuing_organization:cert.issuing_organization,;
          issue_date:cert.issue_date ? formatDateForDB(cert.issue_date) :null,;
          expiration_date:cert.expiration_date ? formatDateForDB(cert.expiration_date) :null,;
          credential_id:cert.credential_id,;
          credential_url:cert.credential_url;
        }),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Certification added", "Your certification has been added to your resume"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not add certification'),;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const updateCertification = async (certId:string, cert:Certification):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update certifications'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('certifications');
        .update({;
          name:cert.name,;
          issuing_organization:cert.issuing_organization,;
          issue_date:cert.issue_date ? formatDateForDB(cert.issue_date) :null,;
          expiration_date:cert.expiration_date ? formatDateForDB(cert.expiration_date) :null,;
          credential_id:cert.credential_id,;
          credential_url:cert.credential_url;
        });
        .eq('id', certId),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Certification updated", "Your certification has been updated"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not update certification'),;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const deleteCertification = async (certId:string):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete certifications'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('certifications');
        .delete();
        .eq('id', certId),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not delete certification'),;
    } finally {;
      setIsLoading(false),;
    }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { error } = await supabase
        .from('certifications')
        .update({

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          name: cert && cert.name;
          issuing_organization: cert && cert.issuing_organization;
          issue_date: cert && cert.issue_date ? formatDateForDB(cert && cert.issue_date) : null;
          expiration_date: cert && cert.expiration_date ? formatDateForDB(cert && cert.expiration_date) : null;
          credential_id: cert && cert.credential_id,
credential_url: cert && cert.credential_url;
          name: cert.name,
          issuing_organization: cert.issuing_organization,
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,
          credential_id: cert.credential_id,
credential_url: cert.credential_url;
        })'
        .eq('id', certId),

      if (error) throw error,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Certification updated", "Your certification has been updated")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not update certification')
    } finally {}
      setIsLoading(false)
}
  }
  const deleteCertification = async (certId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete certifications')
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
        .from('certifications');
        .update({;
          name: cert.name,;
          issuing_organization: cert.issuing_organization,;
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,;
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,;
          credential_id: cert.credential_id,;
          credential_url: cert.credential_url;
        });'
        .eq('id', certId),;
      if (error) throw error,;"
      return showSuccessToast("Certification updated", "Your certification has been updated");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not update certification');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteCertification = async (certId: string): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to delete certifications'),;
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
        .from('certifications')
        .delete()

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    try {}
      const { error } = await supabase'
        .from('certifications')
        .delete()
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .eq('id', certId),

      if (error) throw error,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not delete certification')
    } finally {}
      setIsLoading(false)
<<<<<<< HEAD
import {useState} from 'react';
    } catch (e: any) {
      return handleResumeError(e, 'Could not update certification')
    } finally {
      setIsLoading(false)

;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('certifications');
        .update({;
          name: cert.name,;
          issuing_organization: cert.issuing_organization,;
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,;
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,;
          credential_id: cert.credential_id,;
          credential_url: cert.credential_url;
        });
        .eq('id', certId),;
      if (error) throw error,;
      return showSuccessToast("Certification updated", "Your certification has been updated");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not update certification');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteCertification = async (certId: string): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete certifications'),;
      return false;

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('certifications')
.delete()import {useState} from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .delete()

        .eq('id', certId),

      if (error) throw error,

      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete certification')
    } finally {
      setIsLoading(false)

import {useState} from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {supabase} from '@/integrations / supabase / client';
import {Certification} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
=======
'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {Certification} from '@/types / resume';'
import {use_auth} from '@/hooks / use_auth';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * use_certifications - Function description;
 */
function use_certifications() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  const add_certification = async (resume_id: string, cert: Certification): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}
set_error ('You must be logged in to add certifications'),
      return false;
    }

  },;
  return {;
    isLoading,;
    error,;
    addCertification;
    updateCertification;
    deleteCertification;
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
        .from ('certifications');
        .insert ({}
=======

=======
export function useCertifications() {  const { user } = useAuth();
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
        .from ('certifications');
        .insert ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          resume_id: resume_id;
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB (cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB (cert.expiration_date) : null;
          credential_id: cert.credential_id,
          credential_url: cert.credential_url;
        });
;
// Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Certification added", "Your certification has been added to your resume");
    } catch (e: any) {'
      return handleResumeError (e, 'Could not add certification');
    } finally {}
if (throw error) {
      return showSuccessToast ("Certification added", "Your certification has been added to your resume");"
    } catch (e: any) {"
      return handleResumeError (e, 'Could not add certification');
    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading (false);
  const update_certification = async (cert_id: string, cert: Certification): Promise < boolean> => {
    // Check condition;
      set_error ('You must be logged in to update certifications'),
    setIsLoading (true);
    set_error (null);

    }
  }
;
const update_certification = async (cert_id: string, cert: Certification): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to update certifications'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
try {}
      const { error } = await supabase;'
        .from ('certifications');
        .update ({}
    try {
  // TODO: Implement
        .update ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB (cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB (cert.expiration_date) : null;
          credential_id: cert.credential_id,
          credential_url: cert.credential_url;
<<<<<<< HEAD
        });'
        .eq ('id', cert_id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Certification updated", "Your certification has been updated");
    } catch (e: any) {'
      return handleResumeError (e, 'Could not update certification');
    } finally {}
        .eq ('id', cert_id);
      // Check condition;
      return showSuccessToast ("Certification updated", "Your certification has been updated");"
      return handleResumeError (e, 'Could not update certification');
} finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading (false);

    }
  }
;
const delete_certification = async (cert_id: string): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('You must be logged in to delete certifications'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
try {}
      const { error } = await supabase;'
        .from ('certifications');
        .delete ();'
        .eq ('id', cert_id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Certification deleted", "Your certification has been removed from your resume");
    } catch (e: any) {'
      return handleResumeError (e, 'Could not delete certification');
    } finally {}
    try {
  // TODO: Implement
        .delete ();
      // Check condition;
      return showSuccessToast ("Certification deleted", "Your certification has been removed from your resume");"
      return handleResumeError (e, 'Could not delete certification');
} finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading (false);

    }
  }
;
return {}
    is_loading;
    error;
    add_certification;
    update_certification;
    delete_certification;
}
<<<<<<< HEAD
<<<<<<< HEAD
}
  },;
;
  return {;
    isLoading,;
    error,;
    addCertification,;
    updateCertification,;
    deleteCertification;
  },; setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('certifications') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not add certification') 
}finally {
  setIsLoading (false) 
}
};
const updateCertification = async (certId: string, cert: Certification) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to update certifications');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('certifications') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not update certification') 
}finally {
  setIsLoading (false) 
}
};
const deleteCertification = async (certId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to delete certifications');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('certifications') .delete () .eq ('id', certId);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not delete certification') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
addCertification;
updateCertification;
deleteCertification 
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
