<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts


<<<<<<< HEAD
=======

import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Certification  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useCertifications() {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Certification} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useCertifications() {;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add certifications')
      return false
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    }
    setIsLoading(true);
    setError(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Certification } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useCertifications() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to add certifications'),;
      return false;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const { error } = await supabase
        .from('certifications')
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
          name: cert && cert.name;
========
<<<<<<< HEAD
name: cert && cert.name;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts
          issuing_organization: cert && cert.issuing_organization;
          issue_date: cert && cert.issue_date ? formatDateForDB(cert && cert.issue_date) : null;
          expiration_date: cert && cert.expiration_date ? formatDateForDB(cert && cert.expiration_date) : null;
          credential_id: cert && cert.credential_id,
          credential_url: cert && cert.credential_url
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts

        });
      if (error) throw error;
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          resume_id: resumeId;
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null;
          credential_id: cert.credential_id
          credential_url: cert.credential_url
        });
      if (error) throw error;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          resume_id: resumeId,
          name: cert.name,
          issuing_organization: cert.issuing_organization,
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,
          credential_id: cert.credential_id,
          credential_url: cert.credential_url
        }),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return showSuccessToast("Certification added", "Your certification has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add certification')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }
  const updateCertification = async (certId: string, cert: Certification): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update certifications')
      return false
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
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
      if (error) throw error,;
      return showSuccessToast("Certification added", "Your certification has been added to your resume");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not add certification');
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateCertification = async (certId: string, cert: Certification): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update certifications'),;
      return false;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
    setIsLoading(true);
    setError(null);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const { error } = await supabase
        .from('certifications')
        .update({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts
          name: cert && cert.name;
          issuing_organization: cert && cert.issuing_organization;
          issue_date: cert && cert.issue_date ? formatDateForDB(cert && cert.issue_date) : null;
          expiration_date: cert && cert.expiration_date ? formatDateForDB(cert && cert.expiration_date) : null;
          credential_id: cert && cert.credential_id,
          credential_url: cert && cert.credential_url
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null;
          credential_id: cert.credential_id
          credential_url: cert.credential_url
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        })
        .eq('id', certId);
      if (error) throw error;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          name: cert.name,
          issuing_organization: cert.issuing_organization,
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,
          credential_id: cert.credential_id,
          credential_url: cert.credential_url
        })
        .eq('id', certId),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return showSuccessToast("Certification updated", "Your certification has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update certification')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }
  const deleteCertification = async (certId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete certifications')
      return false
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const { error } = await supabase
        .from('certifications')
        .delete()
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
        .eq('id', certId);
      if (error) throw error;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        .eq('id', certId);
      if (error) throw error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .eq('id', certId),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete certification')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts

<<<<<<< HEAD
=======



=======
========
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }
  return {
    isLoading;
    error;
    addCertification;
    updateCertification;
<<<<<<< HEAD
    deleteCertification
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Certification} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**
 * use_certifications - Function description
 */
function use_certifications() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
  const add_certification = async (resume_id: string, cert: Certification): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to add certifications'),
      return false;
    }

=======

    deleteCertification
  }
}
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('certifications');
        .delete();
        .eq('id', certId),;
      if (error) throw error,;
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not delete certification');
    } finally {;
      setIsLoading(false);
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD

=======
    try {
      const { error } = await supabase;
        .from ('certifications');
        .insert ({
          resume_id: resume_id;
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB (cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB (cert.expiration_date) : null;
          credential_id: cert.credential_id,
          credential_url: cert.credential_url;
        });
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Certification added", "Your certification has been added to your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not add certification');
    } finally {
      setIsLoading (false);
    }
  }
;
  const update_certification = async (cert_id: string, cert: Certification): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to update certifications'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('certifications');
        .update ({
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB (cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB (cert.expiration_date) : null;
          credential_id: cert.credential_id,
          credential_url: cert.credential_url;
        });
        .eq ('id', cert_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Certification updated", "Your certification has been updated");
    } catch (e: any) {
      return handleResumeError (e, 'Could not update certification');
    } finally {
      setIsLoading (false);
    }
  }
;
  const delete_certification = async (cert_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete certifications'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('certifications');
        .delete ();
        .eq ('id', cert_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Certification deleted", "Your certification has been removed from your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not delete certification');
    } finally {
      setIsLoading (false);
    }
  }
;
  return {
    is_loading;
    error;
    add_certification;
    update_certification;
    delete_certification;
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useCertifications.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
