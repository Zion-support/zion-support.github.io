
<<<<<<< HEAD

import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Certification  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Certification} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useCertifications() {;
<<<<<<< HEAD



  const { user } = useAuth();


  const [error, setError] = useState<string | null>(null);
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add certifications')
      return false



=======
  const { user } = useAuth();

  const { user } = useAuth();

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Certification } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;

import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useCertifications() { return null; }

  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {;
<<<<<<< HEAD

    if (!user) {;
      setError('You must be logged in to add certifications'),;
      return false;



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    try {
      const { error } = await supabase
        .from('certifications')
        .insert({
<<<<<<< HEAD


        }),
      
      if (error) throw error,
      


=======
          resume_id: resumeId;
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null;
          credential_id: cert.credential_id
          credential_url: cert.credential_url
      return showSuccessToast("Certification added", "Your certification has been added to your resume")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not add certification')
>>>>>>> origin/cursor/delete-old-data-records-6bba


      return showSuccessToast("Certification added", "Your certification has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add certification')
    } finally {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;

    setIsLoading(true),;
    setError(null),;
    try {;
<<<<<<< HEAD

      const { error } = await supabase;'
        .from('certifications');

=======
      }
        .from('certifications');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    
    setIsLoading(true),
    setError(null),

<<<<<<< HEAD

    }
    

=======
;
export function useCertifications() {;
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

    }

    



    try {


=======
    }


    try {
      const { error } = await supabase
        .from('certifications')
        .update({
}
        .from('certifications')'
      const { error } = await supabase
        .from('certifications')
        .update({
          name: cert && cert.name;
          issuing_organization: cert && cert.issuing_organization;
          issue_date: cert && cert.issue_date ? formatDateForDB(cert && cert.issue_date) : null;
          expiration_date: cert && cert.expiration_date ? formatDateForDB(cert && cert.expiration_date) : null;
          credential_id: cert && cert.credential_id,


>>>>>>> origin/cursor/delete-old-data-records-6bba
          name: cert.name,
          issuing_organization: cert.issuing_organization,
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,
          credential_id: cert.credential_id,

        .eq('id', certId),
      
      if (error) throw error,

<<<<<<< HEAD
      


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

;
    setIsLoading(true),;
    setError(null),;
    try {;
<<<<<<< HEAD

      const { error } = await supabase;'
        .from('certifications');

=======
      }
        .from('certifications');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    
    setIsLoading(true),
    setError(null),

    try {
<<<<<<< HEAD
=======

      const { error } = await supabase
        .from('certifications')
        .delete()
        .eq($2);
      if (error) throw error,
      
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete certification')
    } finally {
}
        .from('certifications')'
        .delete()
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not delete certification')
    } finally {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(false)

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



<<<<<<< HEAD
=======
    }
    
    setIsLoading(true),
    setError(null),
>>>>>>> origin/cursor/delete-old-data-records-6bba

    try {
      const { error } = await supabase
        .from('certifications')


<<<<<<< HEAD

=======
import {supabase} from '@/integrations / supabase / client';
import {Certification} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';

import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * use_certifications - Function description;
>>>>>>> origin/cursor/delete-old-data-records-6bba
 */
function use_certifications() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);

;
  const add_certification = async (resume_id: string, cert: Certification): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  return {;
    isLoading,;
    error,;
    addCertification;
    updateCertification;
    deleteCertification;
<<<<<<< HEAD



=======
  }
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

        .from ('certifications');
        .insert ({}

  }
}

<<<<<<< HEAD

;

    try {

  // TODO: Implement
      const { error } = await supabase;
        .from ('certifications');

=======
    setIsLoading (true);
    set_error (null);
;

    try {
      }
        .from ('certifications');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .insert ({

if (throw error) {
      return showSuccessToast ("Certification added", "Your certification has been added to your resume");"
    } catch (e: any) {"
      return handleResumeError (e, 'Could not add certification');
    } finally {

      setIsLoading (false);
  const update_certification = async (cert_id: string, cert: Certification): Promise < boolean> => {
    // Check condition;
      set_error ('You must be logged in to update certifications'),
    setIsLoading (true);
    set_error (null);

    }
  }
;

      set_error ('You must be logged in to update certifications'),

      return false;
    }
    setIsLoading (true);
    set_error (null);
;

    try {
<<<<<<< HEAD

  // TODO: Implement

=======
      }
        .from ('certifications');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .update ({

        .eq ('id', cert_id);
      // Check condition;
      return showSuccessToast ("Certification updated", "Your certification has been updated");"
      return handleResumeError (e, 'Could not update certification');

      setIsLoading (false);

    }
  }
;

      set_error ('You must be logged in to delete certifications'),

      return false;
    }
    setIsLoading (true);
    set_error (null);
;

    try {
<<<<<<< HEAD

  // TODO: Implement

=======
      }
        .from ('certifications');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .delete ();
      // Check condition;
      return showSuccessToast ("Certification deleted", "Your certification has been removed from your resume");"
      return handleResumeError (e, 'Could not delete certification');

      setIsLoading (false);

    }
  }
;

    is_loading;
    error;
    add_certification;
    update_certification;
    delete_certification;

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

=======
}
;
  }
}
;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
